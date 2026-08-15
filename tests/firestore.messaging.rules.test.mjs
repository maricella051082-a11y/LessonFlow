import { after, before, beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment
} from "@firebase/rules-unit-testing";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch
} from "firebase/firestore";

const PROJECT_ID = "lessonflow-ae46d";
const TEACHER_A = "teacher-a";
const TEACHER_B = "teacher-b";
const STUDENT_A = "student-a";
const STUDENT_B = "student-b";
const LEGACY_STUDENT = "legacy-misha";
const CONVERSATION_A = `${TEACHER_A}__${STUDENT_A}`;
let environment;

function conversationData(teacherUid = TEACHER_A, studentUid = STUDENT_A, studentDocId = "student-doc-a") {
  return {
    teacherUid,
    studentUid,
    studentDocId,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    lastMessageText: "",
    lastMessageAt: null,
    lastMessageSenderUid: null,
    unreadTeacher: 0,
    unreadStudent: 0,
    teacherLastReadAt: null,
    studentLastReadAt: null
  };
}

function sendMessageBatch(db, conversationId, senderUid, text, recipientCounter) {
  const batch = writeBatch(db);
  batch.set(doc(collection(db, "conversations", conversationId, "messages")), { senderUid, text, type: "text", createdAt: serverTimestamp() });
  batch.update(doc(db, "conversations", conversationId), {
    lastMessageText: text,
    lastMessageAt: serverTimestamp(),
    lastMessageSenderUid: senderUid,
    updatedAt: serverTimestamp(),
    [recipientCounter]: increment(1)
  });
  return batch.commit();
}

async function ensureConversationForFirstContact(db, teacherUid, studentUid, studentDocId) {
  const conversationId = `${teacherUid}__${studentUid}`;
  const reference = doc(db, "conversations", conversationId);
  try {
    const snapshot = await getDoc(reference);
    if (snapshot.exists()) return conversationId;
  } catch (error) {
    if (error.code !== "permission-denied") throw error;
  }
  try {
    await setDoc(reference, conversationData(teacherUid, studentUid, studentDocId));
  } catch (createError) {
    try {
      const retrySnapshot = await getDoc(reference);
      if (retrySnapshot.exists()) return conversationId;
    } catch {}
    throw createError;
  }
  return conversationId;
}

before(async () => {
  environment = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: { rules: fs.readFileSync("firestore.rules", "utf8") }
  });
});

beforeEach(async () => {
  await environment.clearFirestore();
  await environment.withSecurityRulesDisabled(async context => {
    const db = context.firestore();
    await setDoc(doc(db, "users", TEACHER_A), { role: "teacher" });
    await setDoc(doc(db, "users", TEACHER_B), { role: "teacher" });
    await setDoc(doc(db, "users", STUDENT_A), { role: "student", teacherUid: TEACHER_A, studentDocId: "student-doc-a", email: "a@example.test" });
    await setDoc(doc(db, "users", STUDENT_B), { role: "student", teacherUid: TEACHER_B, studentDocId: "student-doc-b", email: "b@example.test" });
    await setDoc(doc(db, "users", LEGACY_STUDENT), { role: "student", studentId: "misha" });
    await setDoc(doc(db, "students", "student-doc-a"), { teacherUid: TEACHER_A, authUid: STUDENT_A, name: "Student A" });
    await setDoc(doc(db, "students", "student-doc-b"), { teacherUid: TEACHER_B, authUid: STUDENT_B, name: "Student B" });
    await setDoc(doc(db, "students", "student-doc-new"), { teacherUid: TEACHER_A, authUid: null, name: "New Student" });
    await setDoc(doc(db, "students", "student-doc-new-b"), { teacherUid: TEACHER_B, authUid: null, name: "Teacher B New Student" });
    await setDoc(doc(db, "students", "student-doc-legacy"), { teacherUid: TEACHER_A, authUid: LEGACY_STUDENT, name: "Misha" });
    await setDoc(doc(db, "currentLessons", STUDENT_A), { teacherUid: TEACHER_A, studentUid: STUDENT_A, studentDocId: "student-doc-a", title: "Lesson A" });
    await setDoc(doc(db, "currentLessons", STUDENT_B), { teacherUid: TEACHER_B, studentUid: STUDENT_B, studentDocId: "student-doc-b", title: "Lesson B" });
    await setDoc(doc(db, "lessonHistory", STUDENT_A, "lessons", "lesson-a"), { teacherUid: TEACHER_A, studentUid: STUDENT_A, title: "History A" });
    await setDoc(doc(db, "lessonHistory", STUDENT_B, "lessons", "lesson-b"), { teacherUid: TEACHER_B, studentUid: STUDENT_B, title: "History B" });
    await setDoc(doc(db, "currentLessons", LEGACY_STUDENT), { teacherUid: TEACHER_A, studentUid: LEGACY_STUDENT, title: "Legacy current lesson" });
    await setDoc(doc(db, "lessonHistory", LEGACY_STUDENT, "lessons", "legacy-lesson"), { teacherUid: TEACHER_A, studentUid: LEGACY_STUDENT, title: "Legacy history" });
    await setDoc(doc(db, "conversations", CONVERSATION_A), { ...conversationData(), createdAt: new Date(), updatedAt: new Date() });
  });
});

after(async () => environment?.cleanup());

test("Teacher A and Student A can read their conversation", async () => {
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "conversations", CONVERSATION_A)));
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(STUDENT_A).firestore(), "conversations", CONVERSATION_A)));
});

test("foreign teacher, foreign student and anonymous user cannot read", async () => {
  await assertFails(getDoc(doc(environment.authenticatedContext(TEACHER_B).firestore(), "conversations", CONVERSATION_A)));
  await assertFails(getDoc(doc(environment.authenticatedContext(STUDENT_B).firestore(), "conversations", CONVERSATION_A)));
  await assertFails(getDoc(doc(environment.unauthenticatedContext().firestore(), "conversations", CONVERSATION_A)));
});

test("participants can create only the deterministic valid conversation", async () => {
  await environment.withSecurityRulesDisabled(async context => deleteDoc(doc(context.firestore(), "conversations", CONVERSATION_A)));
  const teacherDb = environment.authenticatedContext(TEACHER_A).firestore();
  const foreignTeacherDb = environment.authenticatedContext(TEACHER_B).firestore();
  const foreignStudentDb = environment.authenticatedContext(STUDENT_B).firestore();
  await assertSucceeds(setDoc(doc(teacherDb, "conversations", `${TEACHER_A}__${STUDENT_A}`), conversationData()));
  await environment.withSecurityRulesDisabled(async context => deleteDoc(doc(context.firestore(), "conversations", CONVERSATION_A)));
  await assertFails(setDoc(doc(teacherDb, "conversations", "random-id"), conversationData()));
  await assertFails(setDoc(doc(teacherDb, "conversations", `${TEACHER_A}__${STUDENT_B}`), conversationData(TEACHER_A, STUDENT_B, "student-doc-b")));
  await assertFails(setDoc(doc(teacherDb, "conversations", `${TEACHER_A}__${STUDENT_A}`), conversationData(TEACHER_A, STUDENT_A, "student-doc-b")));
  await assertFails(setDoc(doc(foreignTeacherDb, "conversations", `${TEACHER_A}__${STUDENT_A}`), conversationData()));
  await assertFails(setDoc(doc(foreignStudentDb, "conversations", `${TEACHER_A}__${STUDENT_A}`), conversationData()));
});

test("teacher can securely create the conversation and send the first message", async () => {
  await environment.withSecurityRulesDisabled(async context => deleteDoc(doc(context.firestore(), "conversations", CONVERSATION_A)));
  const db = environment.authenticatedContext(TEACHER_A).firestore();
  const conversationId = await ensureConversationForFirstContact(db, TEACHER_A, STUDENT_A, "student-doc-a");
  await assertSucceeds(sendMessageBatch(db, conversationId, TEACHER_A, "First teacher message", "unreadStudent"));
  const snapshot = await assertSucceeds(getDoc(doc(db, "conversations", conversationId)));
  assert.equal(snapshot.data().lastMessageText, "First teacher message");
});

test("student can securely create the conversation and send the first message", async () => {
  await environment.withSecurityRulesDisabled(async context => deleteDoc(doc(context.firestore(), "conversations", CONVERSATION_A)));
  const db = environment.authenticatedContext(STUDENT_A).firestore();
  const conversationId = await ensureConversationForFirstContact(db, TEACHER_A, STUDENT_A, "student-doc-a");
  await assertSucceeds(sendMessageBatch(db, conversationId, STUDENT_A, "First student message", "unreadTeacher"));
  const snapshot = await assertSucceeds(getDoc(doc(db, "conversations", conversationId)));
  assert.equal(snapshot.data().lastMessageText, "First student message");
});

test("student cannot choose an unrelated teacher", async () => {
  const db = environment.authenticatedContext(STUDENT_A).firestore();
  await assertFails(setDoc(doc(db, "conversations", `${TEACHER_B}__${STUDENT_A}`), conversationData(TEACHER_B, STUDENT_A, "student-doc-a")));
});

test("participants can create messages only as themselves", async () => {
  const teacherDb = environment.authenticatedContext(TEACHER_A).firestore();
  const studentDb = environment.authenticatedContext(STUDENT_A).firestore();
  await assertSucceeds(sendMessageBatch(teacherDb, CONVERSATION_A, TEACHER_A, "Hello", "unreadStudent"));
  await assertSucceeds(sendMessageBatch(studentDb, CONVERSATION_A, STUDENT_A, "Reply", "unreadTeacher"));
  await assertFails(sendMessageBatch(studentDb, CONVERSATION_A, TEACHER_A, "Forged", "unreadTeacher"));
});

test("foreign and anonymous users cannot create messages", async () => {
  for (const context of [environment.authenticatedContext(STUDENT_B), environment.unauthenticatedContext()]) {
    const db = context.firestore();
    await assertFails(sendMessageBatch(db, CONVERSATION_A, STUDENT_B, "No access", "unreadTeacher"));
  }
});

test("conversation participants cannot be changed", async () => {
  const db = environment.authenticatedContext(STUDENT_A).firestore();
  await assertFails(updateDoc(doc(db, "conversations", CONVERSATION_A), { teacherUid: TEACHER_B }));
  await assertFails(updateDoc(doc(db, "conversations", CONVERSATION_A), { studentUid: STUDENT_B }));
});

test("teacher and student can clear only their own unread counter", async () => {
  const teacherDb = environment.authenticatedContext(TEACHER_A).firestore();
  const studentDb = environment.authenticatedContext(STUDENT_A).firestore();
  await assertSucceeds(updateDoc(doc(teacherDb, "conversations", CONVERSATION_A), { unreadTeacher: 0, teacherLastReadAt: serverTimestamp() }));
  await assertSucceeds(updateDoc(doc(studentDb, "conversations", CONVERSATION_A), { unreadStudent: 0, studentLastReadAt: serverTimestamp() }));
});

test("participant conversation query is allowed", async () => {
  const teacherDb = environment.authenticatedContext(TEACHER_A).firestore();
  const studentDb = environment.authenticatedContext(STUDENT_A).firestore();
  const teacherSnapshot = await assertSucceeds(getDocs(query(collection(teacherDb, "conversations"), where("teacherUid", "==", TEACHER_A))));
  const studentSnapshot = await assertSucceeds(getDocs(query(collection(studentDb, "conversations"), where("studentUid", "==", STUDENT_A))));
  assert.equal(teacherSnapshot.size, 1);
  assert.equal(studentSnapshot.size, 1);

  await assertFails(getDocs(query(collection(teacherDb, "conversations"), where("teacherUid", "==", TEACHER_B))));
  await assertFails(getDocs(query(collection(studentDb, "conversations"), where("studentUid", "==", STUDENT_B))));
  await assertFails(getDocs(query(collection(environment.unauthenticatedContext().firestore(), "conversations"), where("teacherUid", "==", TEACHER_A))));
});

test("users are readable only by self or owning teacher", async () => {
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(STUDENT_A).firestore(), "users", STUDENT_A)));
  await assertFails(getDoc(doc(environment.authenticatedContext(STUDENT_A).firestore(), "users", STUDENT_B)));
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "users", STUDENT_A)));
  await assertFails(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "users", STUDENT_B)));
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "users", TEACHER_A)));
});

test("current lessons enforce teacher and student ownership", async () => {
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "currentLessons", STUDENT_A)));
  await assertFails(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "currentLessons", STUDENT_B)));
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(STUDENT_A).firestore(), "currentLessons", STUDENT_A)));
  await assertFails(getDoc(doc(environment.authenticatedContext(STUDENT_A).firestore(), "currentLessons", STUDENT_B)));
});

test("lesson history enforces teacher and student ownership", async () => {
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "lessonHistory", STUDENT_A, "lessons", "lesson-a")));
  await assertFails(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "lessonHistory", STUDENT_B, "lessons", "lesson-b")));
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(STUDENT_A).firestore(), "lessonHistory", STUDENT_A, "lessons", "lesson-a")));
});

test("account creation and initial authUid binding must be atomic and owned", async () => {
  const teacherDb = environment.authenticatedContext(TEACHER_A).firestore();
  const newUid = "new-student-auth";
  const batch = writeBatch(teacherDb);
  batch.set(doc(teacherDb, "users", newUid), { role: "student", name: "New Student", email: "new@example.test", studentDocId: "student-doc-new", teacherUid: TEACHER_A, createdAt: serverTimestamp() });
  batch.update(doc(teacherDb, "students", "student-doc-new"), { authUid: newUid });
  await assertSucceeds(batch.commit());

  const crossBatch = writeBatch(teacherDb);
  crossBatch.set(doc(teacherDb, "users", "forged-student"), { role: "student", name: "Forged", email: "forged@example.test", studentDocId: "student-doc-new-b", teacherUid: TEACHER_A, createdAt: serverTimestamp() });
  crossBatch.update(doc(teacherDb, "students", "student-doc-new-b"), { authUid: "forged-student" });
  await assertFails(crossBatch.commit());
});

test("cross-teacher schedule, program, vocabulary and submission writes fail", async () => {
  const teacherDb = environment.authenticatedContext(TEACHER_A).firestore();
  await assertFails(setDoc(doc(teacherDb, "scheduleEvents", "foreign"), { teacherUid: TEACHER_A, studentDocId: "student-doc-b", studentAuthUid: STUDENT_B }));
  await assertFails(setDoc(doc(teacherDb, "learningPrograms", "foreign"), { teacherUid: TEACHER_A, studentDocId: "student-doc-b", studentUid: STUDENT_B }));
  await assertFails(setDoc(doc(teacherDb, "studentVocabulary", STUDENT_B), { teacherUid: TEACHER_A, studentDocId: "student-doc-b", studentUid: STUDENT_B }));
  await assertFails(setDoc(doc(teacherDb, "submissions", "foreign"), { teacherUid: TEACHER_A, studentDocId: "student-doc-b", studentUid: STUDENT_B, status: "submitted" }));
});

test("own schedule, program, vocabulary and submission writes succeed", async () => {
  const teacherDb = environment.authenticatedContext(TEACHER_A).firestore();
  await assertSucceeds(setDoc(doc(teacherDb, "scheduleEvents", "own"), { teacherUid: TEACHER_A, studentDocId: "student-doc-a", studentAuthUid: STUDENT_A }));
  await assertSucceeds(setDoc(doc(teacherDb, "learningPrograms", "own"), { teacherUid: TEACHER_A, studentDocId: "student-doc-a", studentUid: STUDENT_A }));
  await assertSucceeds(setDoc(doc(teacherDb, "studentVocabulary", STUDENT_A), { teacherUid: TEACHER_A, studentDocId: "student-doc-a", studentUid: STUDENT_A }));
  await assertSucceeds(setDoc(doc(teacherDb, "submissions", "own"), { teacherUid: TEACHER_A, studentDocId: "student-doc-a", studentUid: STUDENT_A, status: "submitted" }));
});

test("teacher can bind an unlinked learning program to the canonical student auth UID", async () => {
  await environment.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), "learningPrograms", "legacy-program"), { teacherUid: TEACHER_A, studentDocId: "student-doc-a", studentUid: "", status: "active" });
  });
  const db = environment.authenticatedContext(TEACHER_A).firestore();
  await assertSucceeds(updateDoc(doc(db, "learningPrograms", "legacy-program"), { studentUid: STUDENT_A }));
});

test("teacher cannot bind a learning program to a foreign student UID", async () => {
  await environment.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), "learningPrograms", "legacy-program"), { teacherUid: TEACHER_A, studentDocId: "student-doc-a", studentUid: "", status: "active" });
  });
  await assertFails(updateDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "learningPrograms", "legacy-program"), { studentUid: STUDENT_B }));
});

test("Teacher A cannot bind Teacher B learning program", async () => {
  await environment.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), "learningPrograms", "teacher-b-program"), { teacherUid: TEACHER_B, studentDocId: "student-doc-b", studentUid: "", status: "active" });
  });
  await assertFails(updateDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "learningPrograms", "teacher-b-program"), { studentUid: STUDENT_B }));
});

test("an already linked learning program cannot be rebound", async () => {
  await environment.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), "learningPrograms", "linked-program"), { teacherUid: TEACHER_A, studentDocId: "student-doc-a", studentUid: STUDENT_A, status: "active" });
  });
  await assertFails(updateDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "learningPrograms", "linked-program"), { studentUid: STUDENT_B }));
});

test("studentDocId cannot change during initial learning program binding", async () => {
  await environment.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), "learningPrograms", "legacy-program"), { teacherUid: TEACHER_A, studentDocId: "student-doc-a", studentUid: "", status: "active" });
  });
  await assertFails(updateDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "learningPrograms", "legacy-program"), { studentDocId: "student-doc-b", studentUid: STUDENT_B }));
});

test("legacy Misha keeps own profile and teacher-owned lesson access without migration", async () => {
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(LEGACY_STUDENT).firestore(), "users", LEGACY_STUDENT)));
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "currentLessons", LEGACY_STUDENT)));
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(TEACHER_A).firestore(), "lessonHistory", LEGACY_STUDENT, "lessons", "legacy-lesson")));
  await assertSucceeds(getDoc(doc(environment.authenticatedContext(LEGACY_STUDENT).firestore(), "currentLessons", LEGACY_STUDENT)));
});
