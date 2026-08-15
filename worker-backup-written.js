const ALLOWED_ORIGINS = new Set([
  "http://localhost:5500",
  "http://127.0.0.1:5500",
]);

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");

    try {
      // ============================================
      // CORS
      // ============================================

      if (request.method === "OPTIONS") {
        return handleOptions(origin);
      }

      if (origin && !ALLOWED_ORIGINS.has(origin)) {
        return json(
          { ok: false, error: "Origin not allowed" },
          403,
          origin
        );
      }

      const url = new URL(request.url);

      // ============================================
      // HEALTH
      // ============================================

      if (
        request.method === "GET" &&
        url.pathname === "/health"
      ) {
        return json(
          {
            ok: true,
            service: "lessonflow-files",
            cloudinaryConfigured: Boolean(
              env.CLOUDINARY_CLOUD_NAME &&
              env.CLOUDINARY_API_KEY &&
              env.CLOUDINARY_API_SECRET
            ),
            firebaseConfigured: Boolean(
              env.FIREBASE_WEB_API_KEY &&
              env.FIREBASE_PROJECT_ID
            ),
          },
          200,
          origin
        );
      }

      // ============================================
      // TEACHER WORKSHEET IMAGE UPLOAD
      // ============================================
      if (request.method === "POST" && url.pathname === "/upload/worksheet") {
        const authData = await verifyFirebaseUser(request, env);
        const userDoc = await getFirestoreDocument(env, authData, `users/${authData.uid}`);
        const user = decodeFirestoreFields(userDoc.fields || {});
        if (user.role !== "teacher") return json({ ok: false, error: "Загрузка доступна только преподавателю." }, 403, origin);
        const form = await request.formData(); const file = form.get("file");
        if (!file || typeof file.arrayBuffer !== "function") return json({ ok: false, error: "Файл не передан." }, 400, origin);
        const worksheetTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
        if (!worksheetTypes.has(file.type)) return json({ ok: false, error: "Разрешены только JPG, PNG и WEBP." }, 400, origin);
        if (file.size > MAX_IMAGE_SIZE) return json({ ok: false, error: "Файл слишком большой. Максимум 10 МБ." }, 400, origin);
        const cloudinaryForm = new FormData(); cloudinaryForm.append("file", file); cloudinaryForm.append("type", "authenticated"); cloudinaryForm.append("asset_folder", `lessonflow/materials/${authData.uid}/worksheets`); cloudinaryForm.append("tags", `lessonflow,worksheet,teacher_${authData.uid}`); cloudinaryForm.append("public_id", crypto.randomUUID());
        const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${encodeURIComponent(env.CLOUDINARY_CLOUD_NAME)}/image/upload`; const credentials = `${env.CLOUDINARY_API_KEY}:${env.CLOUDINARY_API_SECRET}`;
        const uploadResponse = await fetch(cloudinaryUrl, { method: "POST", headers: { Authorization: `Basic ${btoa(credentials)}` }, body: cloudinaryForm }); const responseText = await uploadResponse.text(); let data = {}; try { data = JSON.parse(responseText); } catch { data = { rawResponse: responseText }; }
        if (!uploadResponse.ok) return json({ ok: false, error: "Cloudinary не принял страницу рабочего листа.", details: data?.error?.message || data.rawResponse || "Unknown Cloudinary error" }, 502, origin);
        return json({ ok: true, file: { publicId: data.public_id, assetId: data.asset_id, resourceType: data.resource_type, deliveryType: data.type, format: data.format, bytes: data.bytes, width: data.width, height: data.height, version: data.version, createdAt: data.created_at } }, 200, origin);
      }

      // ============================================
      // AUTHENTICATED WORKSHEET PAGE VIEW
      // ============================================
      if (request.method === "GET" && url.pathname === "/view/worksheet") {
        const authData = await verifyFirebaseUser(request, env); const materialId = url.searchParams.get("materialId"); const pageIndex = Number(url.searchParams.get("pageIndex") || "0");
        if (!materialId || !Number.isInteger(pageIndex) || pageIndex < 0 || pageIndex > 9) return json({ ok: false, error: "Некорректная страница рабочего листа." }, 400, origin);
        const userDoc = await getFirestoreDocument(env, authData, `users/${authData.uid}`); const user = decodeFirestoreFields(userDoc.fields || {}); let pages = [];
        if (user.role === "teacher") {
          const materialDoc = await getFirestoreDocument(env, authData, `materials/${materialId}`); const material = decodeFirestoreFields(materialDoc.fields || {});
          if (material.teacherUid !== authData.uid || material.format !== "images") return json({ ok: false, error: "Нет доступа к рабочему листу." }, 403, origin); pages = Array.isArray(material.pages) ? material.pages : [];
        } else if (user.role === "student") {
          const lessonDoc = await getFirestoreDocument(env, authData, `currentLessons/${authData.uid}`); const lesson = decodeFirestoreFields(lessonDoc.fields || {}); const block = (Array.isArray(lesson.blocks) ? lesson.blocks : []).find(item => item && item.materialId === materialId && item.format === "images");
          if (!block) return json({ ok: false, error: "Рабочий лист не назначен этому ученику." }, 403, origin); pages = Array.isArray(block.pages) ? block.pages : [];
        } else return json({ ok: false, error: "Нет доступа к рабочему листу." }, 403, origin);
        const page = pages[pageIndex]; if (!page?.publicId || !page?.format || (page.deliveryType || "authenticated") !== "authenticated") return json({ ok: false, error: "Страница не найдена." }, 404, origin);
        const versionPart = page.version ? `v${page.version}` : null; const signedPath = [versionPart, `${page.publicId}.${page.format}`].filter(Boolean).join("/"); const signature = await createCloudinaryDeliverySignature(signedPath, env.CLOUDINARY_API_SECRET); const privateUrl = `https://res.cloudinary.com/${encodeURIComponent(env.CLOUDINARY_CLOUD_NAME)}/image/authenticated/s--${signature}--/${signedPath}`; const imageResponse = await fetch(privateUrl);
        if (!imageResponse.ok) return json({ ok: false, error: "Не удалось открыть страницу рабочего листа." }, 502, origin);
        const headers = new Headers(corsHeaders(origin)); headers.set("Content-Type", imageResponse.headers.get("Content-Type") || `image/${page.format}`); headers.set("Cache-Control", "private, no-store, max-age=0"); headers.set("X-Content-Type-Options", "nosniff"); return new Response(imageResponse.body, { status: 200, headers });
      }

      // ============================================
      // UPLOAD WRITTEN PHOTO
      // ============================================

      if (
        request.method === "POST" &&
        url.pathname === "/upload/written"
      ) {
        const authData =
          await verifyFirebaseUser(request, env);

        const incomingForm =
          await request.formData();

        const file =
          incomingForm.get("file");

        if (
          !file ||
          typeof file.arrayBuffer !== "function"
        ) {
          return json(
            {
              ok: false,
              error: "Файл не передан.",
            },
            400,
            origin
          );
        }

        if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
          return json(
            {
              ok: false,
              error:
                "Разрешены только JPG, PNG, WEBP и HEIC.",
            },
            400,
            origin
          );
        }

        if (file.size > MAX_IMAGE_SIZE) {
          return json(
            {
              ok: false,
              error:
                "Файл слишком большой. Максимум 10 МБ.",
            },
            400,
            origin
          );
        }

        const cloudinaryForm =
          new FormData();

        cloudinaryForm.append("file", file);

        cloudinaryForm.append(
          "type",
          "authenticated"
        );

        cloudinaryForm.append(
          "asset_folder",
          `lessonflow/submissions/${authData.uid}/written`
        );

        cloudinaryForm.append(
          "tags",
          `lessonflow,written,student_${authData.uid}`
        );

        cloudinaryForm.append(
          "public_id",
          crypto.randomUUID()
        );

        const cloudinaryUrl =
          `https://api.cloudinary.com/v1_1/` +
          `${encodeURIComponent(
            env.CLOUDINARY_CLOUD_NAME
          )}/image/upload`;

        const credentials =
          `${env.CLOUDINARY_API_KEY}:` +
          `${env.CLOUDINARY_API_SECRET}`;

        const cloudinaryResponse =
          await fetch(cloudinaryUrl, {
            method: "POST",
            headers: {
              Authorization:
                `Basic ${btoa(credentials)}`,
            },
            body: cloudinaryForm,
          });

        const responseText =
          await cloudinaryResponse.text();

        let cloudinaryData;

        try {
          cloudinaryData =
            JSON.parse(responseText);
        } catch {
          cloudinaryData = {
            rawResponse: responseText,
          };
        }

        if (!cloudinaryResponse.ok) {
          console.error(
            "Cloudinary upload failed:",
            cloudinaryResponse.status,
            cloudinaryData
          );

          return json(
            {
              ok: false,
              error:
                "Cloudinary не принял фотографию.",
              details:
                cloudinaryData?.error?.message ||
                cloudinaryData?.rawResponse ||
                "Unknown Cloudinary error",
            },
            502,
            origin
          );
        }

        return json(
          {
            ok: true,
            file: {
              publicId:
                cloudinaryData.public_id,

              assetId:
                cloudinaryData.asset_id,

              resourceType:
                cloudinaryData.resource_type,

              deliveryType:
                cloudinaryData.type,

              format:
                cloudinaryData.format,

              bytes:
                cloudinaryData.bytes,

              width:
                cloudinaryData.width,

              height:
                cloudinaryData.height,

              version:
                cloudinaryData.version,

              createdAt:
                cloudinaryData.created_at,
            },
          },
          200,
          origin
        );
      }

      // ============================================
      // SECURE WRITTEN PHOTO VIEW
      // ============================================

      if (
        request.method === "GET" &&
        url.pathname === "/view/written"
      ) {
        const authData =
          await verifyFirebaseUser(request, env);

        const submissionId =
          url.searchParams.get("submissionId");

        const fileIndex =
          Number(
            url.searchParams.get("fileIndex") || "0"
          );

        if (!submissionId) {
          return json(
            {
              ok: false,
              error:
                "Не указана работа для просмотра.",
            },
            400,
            origin
          );
        }

        if (
          !Number.isInteger(fileIndex) ||
          fileIndex < 0 ||
          fileIndex > 20
        ) {
          return json(
            {
              ok: false,
              error:
                "Некорректный номер файла.",
            },
            400,
            origin
          );
        }

        // ============================================
        // Получаем submission из Firestore
        // тем же Firebase ID token.
        //
        // Firestore Security Rules сами проверяют,
        // имеет ли пользователь право читать документ.
        // ============================================

        const firestoreUrl =
          `https://firestore.googleapis.com/v1/projects/` +
          `${encodeURIComponent(
            env.FIREBASE_PROJECT_ID
          )}/databases/(default)/documents/submissions/` +
          `${encodeURIComponent(submissionId)}`;

        const submissionResponse =
          await fetch(firestoreUrl, {
            headers: {
              Authorization:
                `Bearer ${authData.idToken}`,
            },
          });

        if (!submissionResponse.ok) {
          console.error(
            "Firestore submission access denied:",
            submissionResponse.status
          );

          return json(
            {
              ok: false,
              error:
                "Нет доступа к этой работе.",
            },
            403,
            origin
          );
        }

        const submissionDoc =
          await submissionResponse.json();

        const fields =
          submissionDoc.fields || {};

        const teacherUid =
          fields.teacherUid?.stringValue;

        // Дополнительная серверная проверка:
        // просмотр этого endpoint только преподавателю.
        if (teacherUid !== authData.uid) {
          return json(
            {
              ok: false,
              error:
                "Эта работа назначена другому преподавателю.",
            },
            403,
            origin
          );
        }

        if (
          fields.type?.stringValue !== "written"
        ) {
          return json(
            {
              ok: false,
              error:
                "Это не письменная работа.",
            },
            400,
            origin
          );
        }

        const fileValues =
          fields.files?.arrayValue?.values || [];

        if (fileIndex >= fileValues.length) {
          return json(
            {
              ok: false,
              error:
                "Фотография не найдена.",
            },
            404,
            origin
          );
        }

        const fileFields =
          fileValues[fileIndex]
            ?.mapValue?.fields || {};

        const publicId =
          fileFields.publicId?.stringValue;

        const format =
          fileFields.format?.stringValue;

        const deliveryType =
          fileFields.deliveryType?.stringValue ||
          "authenticated";

        const versionValue =
          fileFields.version?.integerValue ??
          fileFields.version?.doubleValue ??
          null;

        if (
          !publicId ||
          !format ||
          deliveryType !== "authenticated"
        ) {
          console.error(
            "Incomplete file metadata",
            {
              publicIdPresent:
                Boolean(publicId),
              formatPresent:
                Boolean(format),
              deliveryType,
            }
          );

          return json(
            {
              ok: false,
              error:
                "Не удалось получить данные фотографии.",
            },
            500,
            origin
          );
        }

        // ============================================
        // CLOUDINARY SIGNED DELIVERY URL
        //
        // URL никогда не отдаётся браузеру.
        // Worker сам скачивает закрытый asset.
        // ============================================

        const versionPart =
          versionValue
            ? `v${versionValue}`
            : null;

        const assetPart =
          `${publicId}.${format}`;

        const signedPath =
          [versionPart, assetPart]
            .filter(Boolean)
            .join("/");

        const signature =
          await createCloudinaryDeliverySignature(
            signedPath,
            env.CLOUDINARY_API_SECRET
          );

        const privateCloudinaryUrl =
          `https://res.cloudinary.com/` +
          `${encodeURIComponent(
            env.CLOUDINARY_CLOUD_NAME
          )}/image/authenticated/` +
          `s--${signature}--/` +
          `${signedPath}`;

        const imageResponse =
          await fetch(privateCloudinaryUrl);

        if (!imageResponse.ok) {
          console.error(
            "Cloudinary secure delivery failed:",
            imageResponse.status
          );

          return json(
            {
              ok: false,
              error:
                "Не удалось открыть фотографию.",
            },
            502,
            origin
          );
        }

        const headers =
          new Headers();

        headers.set(
          "Content-Type",
          imageResponse.headers.get(
            "Content-Type"
          ) || `image/${format}`
        );

        headers.set(
          "Cache-Control",
          "private, no-store, max-age=0"
        );

        headers.set(
          "X-Content-Type-Options",
          "nosniff"
        );

        const cors =
          corsHeaders(origin);

        for (
          const [key, value]
          of Object.entries(cors)
        ) {
          headers.set(key, value);
        }

        return new Response(
          imageResponse.body,
          {
            status: 200,
            headers,
          }
        );
      }

      // ============================================
      // NOT FOUND
      // ============================================

      return json(
        {
          ok: false,
          error: "Not found",
        },
        404,
        origin
      );

    } catch (error) {
      console.error(
        "Worker error:",
        error
      );

      if (
        error?.message ===
        "UNAUTHORIZED"
      ) {
        return json(
          {
            ok: false,
            error:
              "Сессия LessonFlow недействительна. Войдите снова.",
          },
          401,
          origin
        );
      }

      return json(
        {
          ok: false,
          error:
            "Внутренняя ошибка сервера файлов.",
        },
        500,
        origin
      );
    }
  },
};

async function getFirestoreDocument(env, authData, documentPath) {
  const endpoint = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(env.FIREBASE_PROJECT_ID)}/databases/(default)/documents/${documentPath.split("/").map(encodeURIComponent).join("/")}`;
  const response = await fetch(endpoint, { headers: { Authorization: `Bearer ${authData.idToken}` } });
  if (!response.ok) throw new Error(response.status === 401 ? "UNAUTHORIZED" : "FIRESTORE_ACCESS_DENIED"); return response.json();
}

function decodeFirestoreValue(value) {
  if (!value) return null;
  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return Number(value.doubleValue);
  if ("booleanValue" in value) return value.booleanValue;
  if ("timestampValue" in value) return value.timestampValue;
  if ("nullValue" in value) return null;
  if (value.arrayValue) return (value.arrayValue.values || []).map(decodeFirestoreValue);
  if (value.mapValue) return decodeFirestoreFields(value.mapValue.fields || {});
  return null;
}

function decodeFirestoreFields(fields) { return Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, decodeFirestoreValue(value)])); }


// ============================================
// FIREBASE AUTH
// ============================================

async function verifyFirebaseUser(
  request,
  env
) {
  const authorization =
    request.headers.get(
      "Authorization"
    ) || "";

  if (
    !authorization.startsWith(
      "Bearer "
    )
  ) {
    throw new Error(
      "UNAUTHORIZED"
    );
  }

  const idToken =
    authorization
      .substring(7)
      .trim();

  if (!idToken) {
    throw new Error(
      "UNAUTHORIZED"
    );
  }

  const firebaseResponse =
    await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(
        env.FIREBASE_WEB_API_KEY
      )}`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify({
            idToken,
          }),
      }
    );

  if (!firebaseResponse.ok) {
    throw new Error(
      "UNAUTHORIZED"
    );
  }

  const firebaseData =
    await firebaseResponse.json();

  const firebaseUser =
    firebaseData?.users?.[0];

  if (
    !firebaseUser?.localId ||
    firebaseUser.disabled === true
  ) {
    throw new Error(
      "UNAUTHORIZED"
    );
  }

  return {
    uid:
      firebaseUser.localId,

    email:
      firebaseUser.email ||
      null,

    idToken,
  };
}


// ============================================
// CLOUDINARY DELIVERY SIGNATURE
// ============================================

async function createCloudinaryDeliverySignature(
  signedPath,
  apiSecret
) {
  const valueToHash =
    signedPath + apiSecret;

  const bytes =
    new TextEncoder()
      .encode(valueToHash);

  const digest =
    await crypto.subtle.digest(
      "SHA-1",
      bytes
    );

  const binary =
    String.fromCharCode(
      ...new Uint8Array(digest)
    );

  const base64 =
    btoa(binary);

  const urlSafe =
    base64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");

  return urlSafe.slice(0, 8);
}


// ============================================
// CORS
// ============================================

function handleOptions(origin) {
  if (
    origin &&
    !ALLOWED_ORIGINS.has(origin)
  ) {
    return new Response(
      null,
      {
        status: 403,
      }
    );
  }

  return new Response(
    null,
    {
      status: 204,
      headers:
        corsHeaders(origin),
    }
  );
}


function corsHeaders(origin) {
  const headers = {
    "Access-Control-Allow-Headers":
      "Authorization, Content-Type",

    "Access-Control-Allow-Methods":
      "GET, POST, OPTIONS",

    "Access-Control-Max-Age":
      "86400",
  };

  if (
    origin &&
    ALLOWED_ORIGINS.has(origin)
  ) {
    headers[
      "Access-Control-Allow-Origin"
    ] = origin;

    headers["Vary"] =
      "Origin";
  }

  return headers;
}


// ============================================
// JSON
// ============================================

function json(
  data,
  status = 200,
  origin = null
) {
  return new Response(
    JSON.stringify(data),
    {
      status,

      headers: {
        "Content-Type":
          "application/json; charset=utf-8",

        ...corsHeaders(origin),
      },
    }
  );
}
