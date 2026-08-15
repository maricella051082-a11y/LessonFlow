import { auth, db, firebaseConfig } from "./firebase.js?v=20260815-student-account";
import { vocabularyStreakFromSessions } from "./vocabulary-streak.js?v=20260815";
import { deleteApp, initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
    createUserWithEmailAndPassword,
    deleteUser,
    getIdToken,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    increment,
    onSnapshot,
    orderBy,
    query,
    runTransaction,
    serverTimestamp,
    setDoc,
    Timestamp,
    writeBatch,
    where
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const LESSONFLOW_FILES_API = "https://lessonflow-files.maricella051082.workers.dev";
const pendingWrittenUploads = new Map();
const pendingAudioUploads = new Map();
function stableSubmissionId(studentUid, lessonId, blockId) { return [studentUid, lessonId, blockId].map(function(value) { return encodeURIComponent(String(value || "")); }).join("__"); }

const loginScreen = document.getElementById("login-screen");
const accountScreen = document.getElementById("firebase-account-screen");
const loginForm = document.getElementById("firebase-login-form");
const loginButton = document.getElementById("firebase-login-button");
const loginError = document.getElementById("login-error");
const accountTitle = document.getElementById("firebase-account-title");
const accountMessage = document.getElementById("firebase-account-message");
const logoutButton = document.getElementById("firebase-logout");
let demoMode = Boolean(window.lessonFlowDemoMode);
let currentProfile = null;
let unsubscribeLesson = null;
let unsubscribeProgress = null;
let unsubscribeTeacherLesson = null;
let unsubscribeTeacherProgress = null;
let unsubscribeStudents = null;
let unsubscribeHistory = null;
let unsubscribeFocusItems = null;
let unsubscribeLearningProgram = null;
let unsubscribeLearningProgramLessons = null;
let learningProgramWatchToken = 0;
let unsubscribeMaterials = null;
let unsubscribeSources = null;
let unsubscribeScheduleEvents = null;
let unsubscribeSubmissions = null;
let unsubscribeConversations = null;
let unsubscribeMessages = null;
let subscribedMessagesConversationId = null;
const programAssignmentBootstrapped = new Set();
const recurringScheduleBootstrapped = new Set();
const studentAuthRelationsBootstrapped = new Set();
window.lessonFlowFirebaseReady = true;

function showScreen(screen) {
    window.dispatchEvent(new CustomEvent("lessonflow:show-screen", { detail: screen.id }));
}

function showProfileMessage(title, message, email) {
    accountTitle.textContent = title;
    accountMessage.textContent = message;
    if (email) {
        accountMessage.append(" ");
        const emailElement = document.createElement("strong");
        emailElement.textContent = email;
        accountMessage.appendChild(emailElement);
    }
    showScreen(accountScreen);
}

function firestoreMessage(error) {
    if (error.code === "permission-denied") return "Нет доступа к данным Firestore.";
    if (error.code === "unavailable") return "Сейчас нет соединения с базой. Попробуйте ещё раз.";
    return "Ошибка Firestore: " + (error.code || "unknown");
}

function stopFirestoreListeners() {
    [unsubscribeLesson, unsubscribeProgress, unsubscribeTeacherLesson, unsubscribeTeacherProgress, unsubscribeStudents, unsubscribeHistory, unsubscribeFocusItems, unsubscribeLearningProgram, unsubscribeLearningProgramLessons, unsubscribeMaterials, unsubscribeSources, unsubscribeScheduleEvents, unsubscribeSubmissions, unsubscribeConversations, unsubscribeMessages].forEach(function(unsubscribe) {
        if (unsubscribe) unsubscribe();
    });
    unsubscribeLesson = unsubscribeProgress = unsubscribeTeacherLesson = unsubscribeTeacherProgress = unsubscribeStudents = unsubscribeHistory = unsubscribeFocusItems = unsubscribeLearningProgram = unsubscribeLearningProgramLessons = unsubscribeMaterials = unsubscribeSources = unsubscribeScheduleEvents = unsubscribeSubmissions = unsubscribeConversations = unsubscribeMessages = null;
    subscribedMessagesConversationId = null;
    learningProgramWatchToken += 1;
    programAssignmentBootstrapped.clear();
    recurringScheduleBootstrapped.clear();
    studentAuthRelationsBootstrapped.clear();
}

function messagingConversationId(teacherUid, studentUid) {
    if (!teacherUid || !studentUid) throw new Error("messaging-participants-missing");
    return teacherUid + "__" + studentUid;
}

function subscribeMessagingOverview() {
    if (!auth.currentUser || !currentProfile || demoMode) return;
    if (unsubscribeConversations) unsubscribeConversations();
    const field = currentProfile.role === "teacher" ? "teacherUid" : "studentUid";
    unsubscribeConversations = onSnapshot(query(collection(db, "conversations"), where(field, "==", auth.currentUser.uid)), function(snapshot) {
        const conversations = snapshot.docs.map(function(item) { return { id: item.id, ...item.data() }; });
        conversations.sort(function(a, b) { return Number(b.lastMessageAt?.seconds || 0) - Number(a.lastMessageAt?.seconds || 0); });
        window.dispatchEvent(new CustomEvent("lessonflow:conversations", { detail: conversations }));
    }, function(error) {
        console.error("Messaging overview error:", error);
        window.dispatchEvent(new CustomEvent("lessonflow:messaging-error", { detail: firestoreMessage(error) }));
    });
}

async function ensureMessagingConversation(context) {
    if (!auth.currentUser || !currentProfile || demoMode) throw new Error("messaging-auth-required");
    const teacherUid = currentProfile.role === "teacher" ? auth.currentUser.uid : context.teacherUid;
    const studentUid = currentProfile.role === "student" ? auth.currentUser.uid : context.studentUid;
    const studentDocId = context.studentDocId;
    if (!teacherUid || !studentUid || !studentDocId) throw new Error("messaging-relationship-missing");
    const conversationId = messagingConversationId(teacherUid, studentUid);
    const reference = doc(db, "conversations", conversationId);
    try {
        const snapshot = await getDoc(reference);
        if (snapshot.exists()) return conversationId;
    } catch (error) {
        // Rules intentionally deny reads of missing conversations. Creation is
        // still protected by participant, relationship and deterministic-ID checks.
        if (error.code !== "permission-denied") throw error;
    }
    try {
        await setDoc(reference, {
            teacherUid: teacherUid,
            studentUid: studentUid,
            studentDocId: studentDocId,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            lastMessageText: "",
            lastMessageAt: null,
            lastMessageSenderUid: null,
            unreadTeacher: 0,
            unreadStudent: 0,
            teacherLastReadAt: null,
            studentLastReadAt: null
        });
    } catch (createError) {
        // The other participant may have created the conversation after our
        // initial read. Accept only a conversation that is now readable.
        try {
            const retrySnapshot = await getDoc(reference);
            if (retrySnapshot.exists()) return conversationId;
        } catch (_) {
            // Preserve the create failure for genuine relationship/permission errors.
        }
        throw createError;
    }
    return conversationId;
}

function subscribeMessagingMessages(conversationId) {
    if (conversationId && unsubscribeMessages && subscribedMessagesConversationId === conversationId) return;
    if (unsubscribeMessages) unsubscribeMessages();
    unsubscribeMessages = null;
    subscribedMessagesConversationId = null;
    if (!conversationId) return;
    subscribedMessagesConversationId = conversationId;
    try {
        unsubscribeMessages = onSnapshot(query(collection(db, "conversations", conversationId, "messages"), orderBy("createdAt", "asc")), function(snapshot) {
            window.dispatchEvent(new CustomEvent("lessonflow:messages", { detail: { conversationId: conversationId, messages: snapshot.docs.map(function(item) { return { id: item.id, ...item.data() }; }) } }));
        }, function(error) {
            if (subscribedMessagesConversationId === conversationId) {
                unsubscribeMessages = null;
                subscribedMessagesConversationId = null;
            }
            console.error("Messaging listener error:", error);
            window.dispatchEvent(new CustomEvent("lessonflow:messaging-error", { detail: firestoreMessage(error) }));
        });
    } catch (error) {
        subscribedMessagesConversationId = null;
        throw error;
    }
}

async function sendMessagingMessage(context, rawText) {
    const text = String(rawText || "").trim();
    if (!text || text.length > 2000) throw new Error(text ? "message-too-long" : "message-empty");
    const conversationId = await ensureMessagingConversation(context);
    const conversationRef = doc(db, "conversations", conversationId);
    const messageRef = doc(collection(db, "conversations", conversationId, "messages"));
    const recipientCounter = currentProfile.role === "teacher" ? "unreadStudent" : "unreadTeacher";
    const batch = writeBatch(db);
    batch.set(messageRef, { senderUid: auth.currentUser.uid, text: text, type: "text", createdAt: serverTimestamp() });
    batch.set(conversationRef, {
        lastMessageText: text,
        lastMessageAt: serverTimestamp(),
        lastMessageSenderUid: auth.currentUser.uid,
        updatedAt: serverTimestamp(),
        [recipientCounter]: increment(1)
    }, { merge: true });
    await batch.commit();
    return conversationId;
}

async function markMessagingConversationRead(conversationId) {
    if (!conversationId || !auth.currentUser || !currentProfile) return;
    const updates = currentProfile.role === "teacher"
        ? { unreadTeacher: 0, teacherLastReadAt: serverTimestamp() }
        : { unreadStudent: 0, studentLastReadAt: serverTimestamp() };
    await setDoc(doc(db, "conversations", conversationId), updates, { merge: true });
}

function subscribeTeacherStudents() {
    if (!auth.currentUser || currentProfile?.role !== "teacher") return;
    const studentsQuery = query(
        collection(db, "students"),
        where("teacherUid", "==", auth.currentUser.uid)
    );
    unsubscribeStudents = onSnapshot(studentsQuery, function(snapshot) {
        const students = snapshot.docs.map(function(studentDoc) {
            return { id: studentDoc.id, ...studentDoc.data() };
        });
        window.dispatchEvent(new CustomEvent("lessonflow:cloud-students", { detail: students }));
        students.filter(function(student) {
            return student.status !== "archived" && typeof student.authUid === "string" && student.authUid.trim();
        }).forEach(function(student) {
            if (studentAuthRelationsBootstrapped.has(student.id)) return;
            studentAuthRelationsBootstrapped.add(student.id);
            syncStudentAuthRelations(student.id, student.authUid).catch(function(error) {
                console.error("Student auth relations auto-repair error:", {
                    studentDocId: student.id,
                    conflicts: Array.isArray(error.conflicts) ? error.conflicts : [],
                    error: error
                });
            });
        });
        students.filter(function(student) { return student.status !== "archived" && Array.isArray(student.weeklySchedule) && student.weeklySchedule.length; }).forEach(function(student) {
            if (recurringScheduleBootstrapped.has(student.id)) return;
            recurringScheduleBootstrapped.add(student.id);
            materializeStudentSchedule(student, student.weeklySchedule, scheduleDateKey(student.scheduleStartDate)).catch(function(error) { recurringScheduleBootstrapped.delete(student.id); console.error("Recurring schedule materialization error:", error); });
        });
    }, reportFirestoreError);
}

function subscribeTeacherMaterials() {
    if (!auth.currentUser || currentProfile?.role !== "teacher") return;
    unsubscribeMaterials = onSnapshot(query(collection(db, "materials"), where("teacherUid", "==", auth.currentUser.uid)), function(snapshot) {
        const materials = snapshot.docs.map(function(materialDoc) { return { id: materialDoc.id, ...materialDoc.data() }; });
        window.dispatchEvent(new CustomEvent("lessonflow:cloud-materials", { detail: materials }));
    }, reportFirestoreError);
}

function subscribeTeacherSources() {
    if (!auth.currentUser || currentProfile?.role !== "teacher") return;
    unsubscribeSources = onSnapshot(query(collection(db, "sources"), where("teacherUid", "==", auth.currentUser.uid)), function(snapshot) {
        const sources = snapshot.docs.map(function(sourceDoc) { return { id: sourceDoc.id, ...sourceDoc.data() }; });
        window.dispatchEvent(new CustomEvent("lessonflow:cloud-sources", { detail: sources }));
    }, reportFirestoreError);
}

function subscribeTeacherSchedule() {
    if (!auth.currentUser || currentProfile?.role !== "teacher") return;
    unsubscribeScheduleEvents = onSnapshot(query(collection(db, "scheduleEvents"), where("teacherUid", "==", auth.currentUser.uid)), function(snapshot) {
        const events = snapshot.docs.map(function(eventDoc) { return { id: eventDoc.id, ...eventDoc.data() }; });
        window.dispatchEvent(new CustomEvent("lessonflow:cloud-schedule", { detail: events }));
        [...new Set(events.map(function(event) { return event.studentDocId; }).filter(Boolean))].forEach(function(studentDocId) { if (programAssignmentBootstrapped.has(studentDocId)) return; programAssignmentBootstrapped.add(studentDocId); syncStudentProgramAssignments(studentDocId).catch(function(error) { programAssignmentBootstrapped.delete(studentDocId); console.error("Program schedule auto-assignment error:", error); }); });
    }, reportFirestoreError);
}

function subscribeTeacherSubmissions() {
    if (!auth.currentUser || currentProfile?.role !== "teacher") return;
    unsubscribeSubmissions = onSnapshot(query(collection(db, "submissions"), where("teacherUid", "==", auth.currentUser.uid)), function(snapshot) {
        const submissions = snapshot.docs.map(function(submissionDoc) { return { id: submissionDoc.id, ...submissionDoc.data() }; });
        window.dispatchEvent(new CustomEvent("lessonflow:cloud-submissions", { detail: submissions }));
    }, reportFirestoreError);
}

function reportFirestoreError(error) {
    console.error("Firestore error:", error);
    window.dispatchEvent(new CustomEvent("lessonflow:firestore-error", { detail: firestoreMessage(error) }));
}

function subscribeStudentLesson(uid) {
    stopFirestoreListeners();
    const lessonRef = doc(db, "currentLessons", uid);
    unsubscribeLesson = onSnapshot(lessonRef, function(snapshot) {
        window.dispatchEvent(new CustomEvent("lessonflow:cloud-lesson", {
            detail: snapshot.exists() ? { ...snapshot.data(), cloudId: snapshot.id } : null
        }));
    }, reportFirestoreError);
    unsubscribeProgress = onSnapshot(doc(db, "currentLessons", uid, "progress", "state"), function(snapshot) {
        window.dispatchEvent(new CustomEvent("lessonflow:cloud-progress", {
            detail: snapshot.exists() ? { ...snapshot.data(), _exists: true } : { completedBlockIds: [], selfAssessment: "", repeatRequest: false, _exists: false }
        }));
    }, reportFirestoreError);
    unsubscribeSubmissions = onSnapshot(query(collection(db, "submissions"), where("studentUid", "==", uid)), function(snapshot) {
        const submissions = snapshot.docs.map(function(submissionDoc) { return { id: submissionDoc.id, ...submissionDoc.data() }; });
        console.log("WORDWALL SUBMISSIONS LOADED:", submissions.filter(function(item) { return item.type === "wordwall"; }).length);
        window.dispatchEvent(new CustomEvent("lessonflow:cloud-submissions", { detail: submissions }));
    }, reportFirestoreError);
    unsubscribeScheduleEvents = onSnapshot(query(collection(db, "scheduleEvents"), where("studentAuthUid", "==", uid)), function(snapshot) {
        window.dispatchEvent(new CustomEvent("lessonflow:student-schedule", { detail: snapshot.docs.map(function(item) { return { id: item.id, ...item.data() }; }) }));
    }, reportFirestoreError);
    loadStudentDashboardData(uid);
}

async function loadStudentDashboardData(uid) {
    const dashboard = { student: null, events: [], program: null, vocabulary: null, vocabularyDictionary: [], scheduleError: null, programError: null, vocabularyError: null, vocabularyDictionaryError: null };
    try {
        const studentsSnapshot = await getDocs(query(collection(db, "students"), where("authUid", "==", uid)));
        const studentDoc = studentsSnapshot.docs[0];
        if (studentDoc) dashboard.student = { id: studentDoc.id, ...studentDoc.data() };
    } catch (error) { console.error("Student profile loading error:", error); }
    try {
        const eventsSnapshot = await getDocs(query(collection(db, "scheduleEvents"), where("studentAuthUid", "==", uid)));
        dashboard.events = eventsSnapshot.docs.map(function(item) { return { id: item.id, ...item.data() }; });
        console.log("STUDENT NEXT EVENTS:", dashboard.events);
    } catch (error) { dashboard.scheduleError = error.code || "unknown"; console.error("Student schedule loading error:", error); }
    try {
        const programsSnapshot = await getDocs(query(collection(db, "learningPrograms"), where("studentUid", "==", uid)));
        const programDoc = programsSnapshot.docs.find(function(item) { return item.data().status === "active"; });
        if (programDoc) { const lessonsSnapshot = await getDocs(collection(db, "learningPrograms", programDoc.id, "lessons")); dashboard.program = { id: programDoc.id, ...programDoc.data(), lessons: lessonsSnapshot.docs.map(function(item) { return { id: item.id, ...item.data() }; }) }; }
        console.log("STUDENT ACTIVE PROGRAM:", dashboard.program);
    } catch (error) { dashboard.programError = error.code || "unknown"; console.error("Student program loading error:", error); }
    try {
        dashboard.vocabulary = await window.lessonFlowCloud.getStudentVocabularySession(uid);
        console.log("STUDENT VOCABULARY SESSION:", dashboard.vocabulary);
    } catch (error) { dashboard.vocabularyError = error.code || "unknown"; console.error("[Vocabulary]", error); }
    try {
        dashboard.vocabularyDictionary = await window.lessonFlowCloud.getStudentVocabularyDictionary(uid);
        console.log("STUDENT VOCABULARY DICTIONARY:", dashboard.vocabularyDictionary.length);
    } catch (error) { dashboard.vocabularyDictionaryError = error.code || "unknown"; console.error("[Vocabulary dictionary]", error); }
    window.dispatchEvent(new CustomEvent("lessonflow:student-dashboard-data", { detail: dashboard }));
}

async function findMishaUid() {
    if (!auth.currentUser || currentProfile?.role !== "teacher") return null;
    const snapshot = await getDocs(query(collection(db, "students"), where("teacherUid", "==", auth.currentUser.uid)));
    const linkedStudents = snapshot.docs.map(function(item) { return item.data(); }).filter(function(student) { return Boolean(student.authUid); });
    const legacyStudent = linkedStudents.find(function(student) { return student.studentId === "misha"; }) || linkedStudents[0];
    return legacyStudent?.authUid || null;
}

async function syncStudentAuthRelations(studentDocId, authUid) {
    if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
    const teacherUid = auth.currentUser.uid;
    const studentSnapshot = await getDoc(doc(db, "students", studentDocId));
    if (!studentSnapshot.exists() || studentSnapshot.data().teacherUid !== teacherUid) throw new Error("student-owner-mismatch");
    if (studentSnapshot.data().authUid !== authUid) throw new Error("student-auth-integrity-mismatch");
    const [eventsSnapshot, programsSnapshot] = await Promise.all([
        getDocs(query(collection(db, "scheduleEvents"), where("teacherUid", "==", teacherUid))),
        getDocs(query(collection(db, "learningPrograms"), where("teacherUid", "==", teacherUid)))
    ]);
    const events = eventsSnapshot.docs.filter(function(item) { return item.data().studentDocId === studentDocId; });
    const programs = programsSnapshot.docs.filter(function(item) { return item.data().studentDocId === studentDocId; });
    const conflicts = events.filter(function(item) { return item.data().studentAuthUid && item.data().studentAuthUid !== authUid; }).map(function(item) { return "scheduleEvents/" + item.id; })
        .concat(programs.filter(function(item) { return item.data().studentUid && item.data().studentUid !== authUid; }).map(function(item) { return "learningPrograms/" + item.id; }));
    if (conflicts.length) throw Object.assign(new Error("student-auth-relations-integrity-error"), { code: "failed-precondition", conflicts });
    const emptyEvents = events.filter(function(item) { return !item.data().studentAuthUid; });
    const emptyPrograms = programs.filter(function(item) { return !item.data().studentUid; });
    if (emptyEvents.length || emptyPrograms.length) {
        const batch = writeBatch(db);
        emptyEvents.forEach(function(item) { batch.update(item.ref, { studentAuthUid: authUid, updatedAt: serverTimestamp() }); });
        emptyPrograms.forEach(function(item) { batch.update(item.ref, { studentUid: authUid, updatedAt: serverTimestamp() }); });
        await batch.commit();
    }
    return { scheduleEventsLinked: emptyEvents.length, learningProgramsLinked: emptyPrograms.length };
}

async function subscribeTeacherFeedback() {
    stopFirestoreListeners();
    try {
        const studentUid = await findMishaUid();
        if (!studentUid) {
            window.dispatchEvent(new CustomEvent("lessonflow:cloud-student-missing"));
            return;
        }
        subscribeTeacherStudentData(studentUid);
    } catch (error) {
        reportFirestoreError(error);
    }
}

function subscribeTeacherStudentData(studentUid) {
        if (unsubscribeTeacherLesson) unsubscribeTeacherLesson();
        if (unsubscribeTeacherProgress) unsubscribeTeacherProgress();
        if (unsubscribeHistory) unsubscribeHistory();
        unsubscribeTeacherLesson = onSnapshot(doc(db, "currentLessons", studentUid), function(snapshot) {
            window.dispatchEvent(new CustomEvent("lessonflow:cloud-lesson", {
                detail: snapshot.exists() ? { ...snapshot.data(), cloudId: snapshot.id } : null
            }));
        }, reportFirestoreError);
        unsubscribeTeacherProgress = onSnapshot(doc(db, "currentLessons", studentUid, "progress", "state"), function(snapshot) {
            window.dispatchEvent(new CustomEvent("lessonflow:cloud-progress", {
                detail: snapshot.exists() ? { ...snapshot.data(), _exists: true } : { completedBlockIds: [], selfAssessment: "", repeatRequest: false, _exists: false }
            }));
        }, reportFirestoreError);
        unsubscribeHistory = onSnapshot(collection(db, "lessonHistory", studentUid, "lessons"), function(snapshot) {
            const lessons = snapshot.docs.map(function(lessonDoc) { return { ...lessonDoc.data(), historyId: lessonDoc.id }; });
            window.dispatchEvent(new CustomEvent("lessonflow:cloud-history", { detail: lessons }));
        }, reportFirestoreError);
}

function subscribeFocusItems(studentDocId) {
    if (unsubscribeFocusItems) unsubscribeFocusItems();
    unsubscribeFocusItems = onSnapshot(collection(db, "students", studentDocId, "focusItems"), function(snapshot) {
        const items = snapshot.docs.map(function(itemDoc) { return { id: itemDoc.id, ...itemDoc.data() }; });
        window.dispatchEvent(new CustomEvent("lessonflow:cloud-focus-items", { detail: items }));
    }, reportFirestoreError);
}

function subscribeTeacherLearningProgram(studentDocId) {
    const watchToken = ++learningProgramWatchToken;
    if (unsubscribeLearningProgram) unsubscribeLearningProgram();
    if (unsubscribeLearningProgramLessons) unsubscribeLearningProgramLessons();
    unsubscribeLearningProgram = unsubscribeLearningProgramLessons = null;
    if (!studentDocId || !auth.currentUser || currentProfile?.role !== "teacher") return;
    unsubscribeLearningProgram = onSnapshot(query(collection(db, "learningPrograms"), where("teacherUid", "==", auth.currentUser.uid)), function(snapshot) {
        if (watchToken !== learningProgramWatchToken) return;
        const programDoc = snapshot.docs.find(function(item) { const data = item.data(); return data.studentDocId === studentDocId && data.status === "active"; });
        if (unsubscribeLearningProgramLessons) unsubscribeLearningProgramLessons();
        unsubscribeLearningProgramLessons = null;
        if (!programDoc) {
            window.dispatchEvent(new CustomEvent("lessonflow:cloud-learning-program", { detail: null }));
            return;
        }
        const program = { id: programDoc.id, ...programDoc.data() };
        unsubscribeLearningProgramLessons = onSnapshot(collection(db, "learningPrograms", programDoc.id, "lessons"), function(lessonsSnapshot) {
            if (watchToken !== learningProgramWatchToken) return;
            const lessons = lessonsSnapshot.docs.map(function(lessonDoc) { return { id: lessonDoc.id, ...lessonDoc.data() }; }).sort(function(a, b) { return Number(a.lessonNumber || 0) - Number(b.lessonNumber || 0); });
            window.dispatchEvent(new CustomEvent("lessonflow:cloud-learning-program", { detail: { ...program, lessons: lessons } }));
        }, reportFirestoreError);
    }, reportFirestoreError);
}

async function loadStudentAccounts() {
    const snapshot = await getDocs(query(collection(db, "users"), where("role", "==", "student"), where("teacherUid", "==", auth.currentUser.uid)));
    return snapshot.docs.map(function(userDoc) {
        const profile = userDoc.data();
        return { authUid: userDoc.id, name: profile.name || profile.studentId || "Ученик", email: profile.email || "" };
    });
}

async function syncStudentProgramAssignments(studentDocId, validFrom) {
    if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) return;
    const teacherUid = auth.currentUser.uid;
    const programsSnapshot = await getDocs(query(collection(db, "learningPrograms"), where("teacherUid", "==", teacherUid)));
    const programDoc = programsSnapshot.docs.find(function(item) { const data = item.data(); return data.studentDocId === studentDocId && data.status === "active"; });
    if (!programDoc) return;
    if (!validFrom) {
        const studentSnapshot = await getDoc(doc(db, "students", studentDocId));
        if (studentSnapshot.exists() && studentSnapshot.data().scheduleStartDate) validFrom = scheduleDateKey(studentSnapshot.data().scheduleStartDate);
        else {
            const schedulesSnapshot = await getDocs(query(collection(db, "studentSchedules"), where("teacherUid", "==", teacherUid)));
            const scheduleDoc = schedulesSnapshot.docs.find(function(item) { const data = item.data(); return data.studentDocId === studentDocId && data.active !== false; });
            validFrom = scheduleDoc?.data().validFrom || "0000-00-00";
        }
    }
    const now = new Date(); const todayKey = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0"); const nowTime = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
    const assignmentStart = validFrom > todayKey ? validFrom : todayKey;
    const [lessonsSnapshot, eventsSnapshot] = await Promise.all([
        getDocs(collection(db, "learningPrograms", programDoc.id, "lessons")),
        getDocs(query(collection(db, "scheduleEvents"), where("teacherUid", "==", teacherUid)))
    ]);
    const lessons = lessonsSnapshot.docs.map(function(item) { return { id: item.id, ref: item.ref, ...item.data() }; }).sort(function(a, b) { return Number(a.lessonNumber) - Number(b.lessonNumber); });
    const events = eventsSnapshot.docs.map(function(item) { return { id: item.id, ref: item.ref, ...item.data() }; }).filter(function(event) { return event.studentDocId === studentDocId && event.date >= assignmentStart && (event.date !== todayKey || event.startTime > nowTime); }).sort(function(a, b) { return (a.date + "|" + a.startTime).localeCompare(b.date + "|" + b.startTime); });
    const activeEvents = events.filter(function(event) { return event.status !== "cancelled"; });
    const lockedEvents = activeEvents.filter(function(event) { return event.planLessonId && (event.planLessonManuallyAssigned || event.recurringException || event.status === "prepared" || event.lessonId); });
    const usedLessonIds = new Set(lockedEvents.map(function(event) { return event.planLessonId; }));
    const availableLessons = lessons.filter(function(lesson) { return !["completed", "skipped"].includes(lesson.status) && !usedLessonIds.has(lesson.id); });
    const assignments = new Map();
    lockedEvents.forEach(function(event) { assignments.set(event.id, lessons.find(function(lesson) { return lesson.id === event.planLessonId; }) || null); });
    let lessonIndex = 0;
    activeEvents.forEach(function(event) {
        if (assignments.has(event.id)) return;
        assignments.set(event.id, availableLessons[lessonIndex] || null);
        lessonIndex += 1;
    });
    const assignedByLesson = new Map();
    assignments.forEach(function(lesson, eventId) { if (lesson && !assignedByLesson.has(lesson.id)) assignedByLesson.set(lesson.id, activeEvents.find(function(event) { return event.id === eventId; })); });
    const batch = writeBatch(db);
    events.forEach(function(event) {
        if (event.status === "cancelled") {
            if (event.planLessonId) batch.set(event.ref, { programId: null, planLessonId: null, planLessonNumber: null, planLessonTitle: null, planLessonManuallyAssigned: false, updatedAt: serverTimestamp() }, { merge: true });
            return;
        }
        if (event.planLessonManuallyAssigned || event.recurringException || event.status === "prepared" || event.lessonId) return;
        const lesson = assignments.get(event.id);
        if (!lesson) { if (event.planLessonId) batch.set(event.ref, { programId: null, planLessonId: null, planLessonNumber: null, planLessonTitle: null, updatedAt: serverTimestamp() }, { merge: true }); return; }
        const eventUpdate = { programId: programDoc.id, planLessonId: lesson.id, planLessonNumber: lesson.lessonNumber, planLessonTitle: lesson.title || "", planLessonManuallyAssigned: false, updatedAt: serverTimestamp() };
        if (!event.topicManuallyEdited) eventUpdate.topic = lesson.title || "";
        batch.set(event.ref, eventUpdate, { merge: true });
    });
    lessons.forEach(function(lesson) {
        const event = assignedByLesson.get(lesson.id);
        if (event) {
            const update = { scheduledEventId: event.id, scheduledDate: event.date, scheduledStartTime: event.startTime, updatedAt: serverTimestamp() };
            if (!["prepared", "completed", "skipped"].includes(lesson.status)) update.status = "scheduled";
            batch.set(lesson.ref, update, { merge: true });
        } else if (lesson.status === "scheduled") {
            batch.set(lesson.ref, { status: "planned", scheduledEventId: null, scheduledDate: null, scheduledStartTime: null, updatedAt: serverTimestamp() }, { merge: true });
        }
    });
    await batch.commit();
}

function localDateKey(value = new Date()) {
    if (typeof value === "string") return value.slice(0, 10);
    const date = value instanceof Date ? value : new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function parseLocalDate(value) {
    const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return null;
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

function scheduleDateKey(value) {
    if (value?.toDate) return localDateKey(value.toDate());
    return localDateKey(value || new Date());
}

function recurringWeekKey(dateKey) {
    const date = parseLocalDate(dateKey);
    if (!date) return "";
    const weekday = date.getDay() || 7;
    date.setDate(date.getDate() - weekday + 1);
    return localDateKey(date);
}

async function materializeStudentSchedule(student, weeklySchedule, effectiveFrom) {
    const teacherUid = auth.currentUser.uid;
    const today = new Date();
    const todayKey = localDateKey(today);
    const validFrom = effectiveFrom || scheduleDateKey(student.scheduleStartDate) || todayKey;
    const slots = (Array.isArray(weeklySchedule) ? weeklySchedule : []).map(function(slot) {
        return { id: String(slot.id), weekday: Number(slot.weekday), time: String(slot.time), durationMinutes: Number(slot.durationMinutes) };
    });
    const eventsSnapshot = await getDocs(query(collection(db, "scheduleEvents"), where("teacherUid", "==", teacherUid)));
    const studentEvents = eventsSnapshot.docs.filter(function(item) { return item.data().studentDocId === student.id; });
    const horizonDate = new Date(today); horizonDate.setDate(horizonDate.getDate() + 55); const horizonKey = localDateKey(horizonDate);
    const slotIds = new Set(slots.map(function(slot) { return slot.id; }));
    const safeGenerated = studentEvents.filter(function(item) {
        const data = item.data();
        if (data.source !== "recurring" || data.status !== "scheduled" || data.lessonId || data.planLessonManuallyAssigned || data.recurringException || data.topicManuallyEdited || data.notes || data.homework || data.date < todayKey) return false;
        if (data.date < validFrom || data.date > horizonKey) return false;
        const slotStillExists = data.scheduleSlotId ? slotIds.has(data.scheduleSlotId) : slots.some(function(slot) { return slot.weekday === (new Date(data.date + "T00:00:00").getDay() || 7) && slot.time === data.startTime && slot.durationMinutes === Number(data.duration); });
        if (!slotStillExists) return true;
        const slot = slots.find(function(candidate) { return candidate.id === data.scheduleSlotId; });
        return Boolean(slot && (slot.time !== data.startTime || slot.durationMinutes !== Number(data.duration) || slot.weekday !== (new Date(data.date + "T00:00:00").getDay() || 7)));
    });
    for (let offset = 0; offset < safeGenerated.length; offset += 100) {
        const cleanupBatch = writeBatch(db); safeGenerated.slice(offset, offset + 100).forEach(function(item) { cleanupBatch.delete(item.ref); }); await cleanupBatch.commit();
    }
    const deletedIds = new Set(safeGenerated.map(function(item) { return item.id; }));
    const retained = studentEvents.filter(function(item) { return !deletedIds.has(item.id); });
    const occupied = new Set(); const occupiedSlotWeeks = new Set();
    retained.forEach(function(item) {
        const data = item.data();
        occupied.add(data.date + "|" + data.startTime);
        if (data.source === "recurring" && data.scheduleSlotId) occupiedSlotWeeks.add(data.scheduleSlotId + "|" + recurringWeekKey(data.recurringOriginalDate || data.date));
        if (data.source === "recurring" && (data.recurringException || data.status === "cancelled")) occupied.add((data.recurringOriginalDate || data.date) + "|" + (data.recurringOriginalStartTime || data.startTime));
    });
    const generated = []; const nowTime = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0");
    for (let dayOffset = 0; dayOffset < 56; dayOffset += 1) {
        const date = new Date(today); date.setHours(0, 0, 0, 0); date.setDate(date.getDate() + dayOffset);
        const weekday = date.getDay() || 7; const dateKey = localDateKey(date);
        slots.filter(function(slot) { return slot.weekday === weekday; }).forEach(function(slot) {
            if (dateKey < validFrom || (dayOffset === 0 && slot.time <= nowTime)) return;
            const occurrenceKey = dateKey + "|" + slot.time; const slotWeekKey = slot.id + "|" + recurringWeekKey(dateKey); if (occupied.has(occurrenceKey) || occupiedSlotWeeks.has(slotWeekKey)) return;
            const eventId = "recurring__" + student.id + "__" + slot.id + "__" + dateKey;
            generated.push({ id: eventId, date: dateKey, slot: slot }); occupied.add(occurrenceKey); occupiedSlotWeeks.add(slotWeekKey);
        });
    }
    for (let offset = 0; offset < generated.length; offset += 50) {
        const batch = writeBatch(db);
        generated.slice(offset, offset + 50).forEach(function(item) {
            batch.set(doc(db, "scheduleEvents", item.id), {
                teacherUid: teacherUid, studentDocId: student.id, studentAuthUid: student.authUid || "", studentName: student.name,
                subject: student.subject || "", date: item.date, startTime: item.slot.time, duration: item.slot.durationMinutes,
                topic: "", status: "scheduled", source: "recurring", recurring: true, generatedFromStudentSchedule: true,
                scheduleSlotId: item.slot.id, recurringOriginalDate: item.date, recurringOriginalStartTime: item.slot.time,
                recurringException: false, programId: null, planLessonId: null, planLessonNumber: null, planLessonTitle: null,
                createdAt: serverTimestamp(), updatedAt: serverTimestamp()
            }, { merge: true });
        });
        await batch.commit();
    }
    await syncStudentProgramAssignments(student.id, validFrom);
}

function addLocalDays(dateKey, days) {
    const date = parseLocalDate(dateKey);
    if (!date) return null;
    date.setDate(date.getDate() + Number(days || 0));
    return localDateKey(date);
}

function vocabularyProgramId(assignment) {
    return assignment?.vocabularyProgramId || assignment?.vocabProgramId || "";
}

function getVocabularyProgramDay(studentVocabulary, localDate = new Date()) {
    const developmentHost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    const debugDayIndex = developmentHost ? Number(studentVocabulary?.debugDayIndex || 0) : 0;
    if (Number.isInteger(debugDayIndex) && debugDayIndex > 0) return { status: debugDayIndex > Number(studentVocabulary?.totalStudyDays || 238) ? "maintenance" : "active", dayIndex: Math.min(debugDayIndex, Number(studentVocabulary?.totalStudyDays || 238)), debug: true };
    const today = parseLocalDate(localDateKey(localDate));
    const startValue = studentVocabulary?.startDate;
    const start = parseLocalDate(startValue?.toDate ? localDateKey(startValue.toDate()) : startValue);
    const totalStudyDays = Number(studentVocabulary?.totalStudyDays || 238);
    if (!start || !today) return { status: "start-date-required", dayIndex: null };
    const difference = Math.round((today.getTime() - start.getTime()) / 86400000);
    if (difference < 0) return { status: "not-started", dayIndex: null, daysUntilStart: -difference };
    const dayIndex = difference + 1;
    if (dayIndex > totalStudyDays) return { status: "maintenance", dayIndex: totalStudyDays, elapsedDayIndex: dayIndex };
    return { status: "active", dayIndex };
}

function stateDate(value) {
    if (!value) return null;
    return value?.toDate ? localDateKey(value.toDate()) : localDateKey(value);
}

function stateDifficulty(state) {
    return Number(state.consecutiveIncorrect || 0) * 10 + Number(state.incorrectCount || 0) - Number(state.correctCount || 0);
}

function vocabularyCardState(state) {
    if (!state?.introducedAt && !state?.lastReviewDate && !state?.lastReviewedAt) return "new";
    if (Number(state.masteryPasses || 0) >= 2) return "mastered";
    if (["again", "hard"].includes(state.lastAnswer) || Number(state.consecutiveIncorrect || 0) > 0) return "learning";
    if (Number(state.masteryPasses || 0) >= 1 && state.state === "review") return "review";
    if (Number(state.correctCount || 0) >= 2 && Number(state.intervalDays || 0) >= 7) return "review";
    return "learning";
}

async function loadProgramCards(programId, cardIds) {
    return (await Promise.all([...new Set(cardIds)].map(async function(cardId) {
        const snapshot = await getDoc(doc(db, "vocabularyPrograms", programId, "cards", cardId));
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    }))).filter(Boolean);
}

async function loadVocabularyStreak(studentUid, programId) {
    const sessionsSnapshot = await getDocs(collection(db, "studentVocabulary", studentUid, "sessions"));
    const sessions = sessionsSnapshot.docs.map(function(item) { return item.data(); });
    return { sessionsSnapshot, streakDays: vocabularyStreakFromSessions(sessions, programId) };
}

async function buildVocabularySession(studentUid, localDate = new Date()) {
    const requestedDate = localDateKey(localDate);
    const assignmentSnapshot = await getDoc(doc(db, "studentVocabulary", studentUid));
    if (!assignmentSnapshot.exists()) return null;
    const assignment = assignmentSnapshot.data();
    if (assignment.studentUid !== studentUid || assignment.status !== "active") return null;
    const programId = vocabularyProgramId(assignment);
    const programSnapshot = await getDoc(doc(db, "vocabularyPrograms", programId));
    if (!programSnapshot.exists()) throw new Error("vocabulary-program-not-found");
    const program = { id: programSnapshot.id, ...programSnapshot.data() };
    const streak = await loadVocabularyStreak(studentUid, programId);
    const dayResult = getVocabularyProgramDay({ ...assignment, totalStudyDays: program.totalStudyDays }, requestedDate);
    let date = requestedDate;
    let existingDebugSession = null;
    if (dayResult.debug) {
        existingDebugSession = streak.sessionsSnapshot.docs.find(function(item) { return Number(item.data().dayIndex) === Number(dayResult.dayIndex); }) || null;
        const startDate = assignment.startDate?.toDate ? localDateKey(assignment.startDate.toDate()) : localDateKey(assignment.startDate || "");
        date = existingDebugSession?.data().date || addLocalDays(startDate, Number(dayResult.dayIndex) - 1) || requestedDate;
    }
    if (dayResult.status !== "active") return { assignment, program, date, dayIndex: dayResult.dayIndex, programStatus: dayResult.status, streakDays: streak.streakDays, completedToday: false, cards: [], newCards: [], reviewCards: [], difficultCards: [], totalCards: 0, newCount: 0, reviewCount: 0 };
    const dayIndex = dayResult.dayIndex;
    const dayId = "D" + String(dayIndex).padStart(3, "0");
    const daySnapshot = await getDoc(doc(db, "vocabularyPrograms", programId, "dailyPlan", dayId));
    if (!daySnapshot.exists()) return { assignment, program, date, dayIndex, streakDays: streak.streakDays, missingDailyPlan: true, completedToday: false, cards: [] };
    const day = { id: daySnapshot.id, ...daySnapshot.data() };
    const statesSnapshot = await getDocs(collection(db, "studentVocabulary", studentUid, "cards"));
    const states = statesSnapshot.docs.map(function(item) { const data = { id: item.id, ...item.data() }; return { ...data, state: vocabularyCardState(data) }; });
    const statesById = new Map(states.map(function(item) { return [item.cardId || item.id, item]; }));
    const dueStates = states.filter(function(item) { return item.state !== "mastered" && stateDate(item.nextReviewDate || item.nextReviewAt) <= date; }).sort(function(a, b) {
        return String(stateDate(a.nextReviewDate || a.nextReviewAt)).localeCompare(String(stateDate(b.nextReviewDate || b.nextReviewAt))) || stateDifficulty(b) - stateDifficulty(a);
    });
    const dueLimit = Number(program.dueLimitBeforePauseNew || 20);
    const newCardsPaused = dueStates.length > dueLimit;
    let newCardIds = newCardsPaused ? [] : (day.newCardIds || []).filter(function(cardId) { return !statesById.has(cardId); });
    const weekStates = states.filter(function(item) { return Number(item.weekNumber) === Number(day.weekNumber); });
    let reviewStates = dueStates;
    if (day.sessionType === "weekly-mix" || String(day.weekday).toLowerCase().includes("fri")) reviewStates = [...new Map(dueStates.concat(weekStates).map(function(item) { return [item.cardId || item.id, item]; })).values()];
    if (day.sessionType === "hardest-review" || String(day.weekday).toLowerCase().includes("sat")) reviewStates = [...states].filter(function(item) { return item.state !== "mastered" && (stateDifficulty(item) > 0 || stateDate(item.nextReviewDate || item.nextReviewAt) <= date); }).sort(function(a, b) { return stateDifficulty(b) - stateDifficulty(a); }).slice(0, dueLimit);
    if (day.sessionType === "mastery-check" || String(day.weekday).toLowerCase().includes("sun")) reviewStates = weekStates.filter(function(item) { return item.state !== "mastered"; });
    if (["weekly-mix", "hardest-review", "mastery-check", "reset-review"].includes(day.sessionType)) newCardIds = [];
    const reviewCardIds = [...new Set(reviewStates.map(function(item) { return item.cardId || item.id; }))];
    const cardOrder = [...new Set(reviewCardIds.concat(newCardIds))];
    const sessionRef = existingDebugSession?.ref || doc(db, "studentVocabulary", studentUid, "sessions", date);
    const sessionSnapshot = existingDebugSession || await getDoc(sessionRef);
    if (!sessionSnapshot.exists()) {
        await setDoc(sessionRef, { studentUid, programId, date, dayIndex, weekNumber: Number(day.weekNumber || 1), sessionType: day.sessionType || "new-review", newCardIds, reviewCardIds, cardOrder, answers: {}, status: "ready", totalCards: cardOrder.length, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    }
    const persisted = sessionSnapshot.exists() ? sessionSnapshot.data() : { answers: {}, status: "ready", cardOrder, newCardIds, reviewCardIds, totalCards: cardOrder.length };
    const persistedOrder = persisted.cardOrder || cardOrder;
    const cards = await loadProgramCards(programId, persistedOrder);
    const cardMap = new Map(cards.map(function(card) { return [card.cardId || card.id, card]; }));
    const orderedCards = persistedOrder.map(function(cardId, index) { const card = cardMap.get(cardId); if (!card) return null; return { ...card, direction: (day.sessionType === "mastery-check" || day.sessionType === "weekly-mix") && index % 2 ? "ru-en" : "en-ru", due: (persisted.reviewCardIds || reviewCardIds).includes(cardId) }; }).filter(Boolean);
    const answers = persisted.answers || {};
    return { assignment, program, day, date, sessionId: sessionRef.id, dayIndex, streakDays: streak.streakDays, weekNumber: Number(persisted.weekNumber || day.weekNumber || 1), sessionType: persisted.sessionType || day.sessionType || "new-review", week: null, cards: orderedCards, newCardIds: persisted.newCardIds || newCardIds, reviewCardIds: persisted.reviewCardIds || reviewCardIds, newCards: orderedCards.filter(function(card) { return (persisted.newCardIds || newCardIds).includes(card.cardId || card.id); }), reviewCards: orderedCards.filter(function(card) { return (persisted.reviewCardIds || reviewCardIds).includes(card.cardId || card.id); }), difficultCards: orderedCards.filter(function(card) { return stateDifficulty(statesById.get(card.cardId || card.id) || {}) > 0; }), totalCards: Number(persisted.totalCards ?? persistedOrder.length), newCount: (persisted.newCardIds || newCardIds).length, reviewCount: (persisted.reviewCardIds || reviewCardIds).length, dueCount: (persisted.reviewCardIds || reviewCardIds).length, newCardsPaused, pauseReason: newCardsPaused ? "Сначала повторим накопившиеся карточки" : "", answers, status: persisted.status || "ready", answeredCards: Number(persisted.answeredCards ?? Object.keys(answers).length), againCount: Number(persisted.againCount ?? persisted.summary?.again ?? 0), hardCount: Number(persisted.hardCount ?? persisted.summary?.hard ?? 0), knowCount: Number(persisted.knowCount ?? persisted.summary?.know ?? 0), summary: persisted.summary || null, completedAt: persisted.completedAt || null, completedToday: persisted.status === "completed", debugDayIndex: dayResult.debug ? dayIndex : null };
}

async function submitVocabularyAnswer({ studentUid, cardId, sessionId, answer, direction }) {
    if (!auth.currentUser || auth.currentUser.uid !== studentUid || currentProfile?.role !== "student" || demoMode) throw new Error("not-authenticated-student");
    if (!["again", "hard", "know"].includes(answer)) throw new Error("invalid-vocabulary-answer");
    const assignmentRef = doc(db, "studentVocabulary", studentUid);
    const assignmentSnapshot = await getDoc(assignmentRef);
    const sessionRef = doc(db, "studentVocabulary", studentUid, "sessions", sessionId);
    const sessionSnapshot = await getDoc(sessionRef);
    if (!assignmentSnapshot.exists() || !sessionSnapshot.exists()) throw new Error("vocabulary-session-not-found");
    const assignment = assignmentSnapshot.data(); const session = sessionSnapshot.data(); const programId = vocabularyProgramId(assignment);
    const programSnapshot = await getDoc(doc(db, "vocabularyPrograms", programId)); const program = programSnapshot.data() || {};
    const cardSnapshot = await getDoc(doc(db, "vocabularyPrograms", programId, "cards", cardId));
    if (!cardSnapshot.exists()) throw new Error("vocabulary-card-not-found");
    const stateRef = doc(db, "studentVocabulary", studentUid, "cards", cardId); const stateSnapshot = await getDoc(stateRef); const previous = stateSnapshot.exists() ? stateSnapshot.data() : {};
    const today = session.date || localDateKey(); const intervals = program.srsIntervals || [1, 3, 7, 14, 30, 60]; const isMastery = session.sessionType === "mastery-check";
    let intervalStep = Number(previous.intervalStep || 0); let intervalDays = Number(previous.intervalDays || 1);
    if (answer === "again") { intervalStep = 0; intervalDays = 1; }
    else if (answer === "hard") intervalDays = isMastery || Number(previous.intervalDays || 0) <= 3 ? 1 : Math.max(1, Math.floor(Number(previous.intervalDays || 2) / 2));
    else { intervalDays = Number(intervals[Math.min(intervalStep, intervals.length - 1)]); intervalStep = Math.min(intervalStep + 1, intervals.length - 1); }
    const previousAnswers = session.answers || {}; const priorSessionAnswer = previousAnswers[cardId];
    const masteryPasses = Number(previous.masteryPasses || 0) + (isMastery && answer === "know" && !priorSessionAnswer?.masteryPassed ? 1 : 0);
    const mastered = masteryPasses >= Number(program.masteryRequiredPasses || 2);
    const source = cardSnapshot.data(); const data = { cardId, vocabularyProgramId: programId, english: previous.english ?? source.english ?? "", translation: previous.translation ?? source.translation ?? "", cardType: previous.cardType ?? source.cardType ?? "word", source: previous.source ?? source.source ?? "", unit: previous.unit ?? source.unit ?? "", page: previous.page ?? source.page ?? "", weekNumber: Number(previous.weekNumber ?? source.weekNumber ?? session.weekNumber ?? 1), introducedAt: previous.introducedAt || serverTimestamp(), introducedDayIndex: previous.introducedDayIndex || session.dayIndex, lastReviewedAt: serverTimestamp(), lastReviewDate: today, nextReviewAt: mastered ? null : parseLocalDate(addLocalDays(today, intervalDays)), nextReviewDate: mastered ? null : addLocalDays(today, intervalDays), intervalStep, intervalDays, reviewCount: Number(previous.reviewCount || 0) + 1, correctCount: Number(previous.correctCount || 0) + (answer === "know" ? 1 : 0), incorrectCount: Number(previous.incorrectCount || 0) + (answer === "again" ? 1 : 0), consecutiveCorrect: answer === "know" ? Number(previous.consecutiveCorrect || 0) + 1 : 0, consecutiveIncorrect: answer === "again" ? Number(previous.consecutiveIncorrect || 0) + 1 : 0, masteryPasses, lastAnswer: answer, lastDirection: direction || "en-ru", updatedAt: serverTimestamp() };
    data.state = isMastery && answer === "know" && masteryPasses >= 1 && !mastered ? "review" : vocabularyCardState({ ...previous, ...data, introducedAt: previous.introducedAt || true });
    if (stateSnapshot.exists() && !("vocabularyProgramId" in previous)) delete data.vocabularyProgramId;
    await setDoc(stateRef, data, { merge: true });
    const answers = { ...previousAnswers, [cardId]: { answer, direction: direction || "en-ru", answeredAt: new Date().toISOString(), masteryPassed: isMastery && answer === "know" } };
    await setDoc(sessionRef, { answers, status: "in-progress", startedAt: session.startedAt || serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true });
    return data;
}

window.getVocabularyProgramDay = getVocabularyProgramDay;
window.getVocabularyCardState = vocabularyCardState;

window.lessonFlowCloud = {
    getConversationId: messagingConversationId,
    ensureConversation: ensureMessagingConversation,
    subscribeToMessages: subscribeMessagingMessages,
    sendMessage: sendMessagingMessage,
    markConversationRead: markMessagingConversationRead,
    stopMessageSubscription() {
        if (unsubscribeMessages) unsubscribeMessages();
        unsubscribeMessages = null;
        subscribedMessagesConversationId = null;
    },
    getVocabularyProgramDay,
    buildVocabularySession,
    submitVocabularyAnswer,
    async getStudentVocabularySession(studentUid) {
        if (!auth.currentUser || auth.currentUser.uid !== studentUid || currentProfile?.role !== "student" || demoMode) return null;
        try {
            const session = await buildVocabularySession(studentUid, new Date());
            if (session?.weekNumber) { const weekSnapshot = await getDoc(doc(db, "vocabularyPrograms", session.program.id, "weeks", "W" + String(session.weekNumber).padStart(2, "0"))); session.week = weekSnapshot.exists() ? { id: weekSnapshot.id, ...weekSnapshot.data() } : null; }
            return session;
        } catch (error) {
            console.error("[Vocabulary]", error, { code: error.code, message: error.message, uid: auth.currentUser?.uid });
            throw error;
        }
    },
    async getStudentVocabularyDictionary(studentUid) {
        if (!auth.currentUser || auth.currentUser.uid !== studentUid || currentProfile?.role !== "student" || demoMode) return [];
        const assignmentSnapshot = await getDoc(doc(db, "studentVocabulary", studentUid));
        if (!assignmentSnapshot.exists()) return [];
        const assignment = assignmentSnapshot.data();
        const programId = vocabularyProgramId(assignment);
        if (!programId) return [];
        const statesSnapshot = await getDocs(collection(db, "studentVocabulary", studentUid, "cards"));
        const states = statesSnapshot.docs.map(function(item) { return { id: item.id, ref: item.ref, ...item.data() }; });
        if (!states.length) return [];
        const introducedStates = states.filter(function(state) { return Boolean(state.introducedAt || state.lastReviewDate || state.lastReviewedAt); });
        await Promise.all(introducedStates.filter(function(state) { return state.state !== vocabularyCardState(state); }).map(function(state) { return setDoc(state.ref, { state: vocabularyCardState(state), updatedAt: serverTimestamp() }, { merge: true }); }));
        const totalCards = Number(assignment.totalCards || assignment.activeCardsCount || 0); const normalizedStates = introducedStates.map(function(state) { return { ...state, state: vocabularyCardState(state) }; });
        const counts = { newCount: Math.max(0, totalCards - introducedStates.length), learningCount: normalizedStates.filter(function(state) { return state.state === "learning"; }).length, reviewCount: normalizedStates.filter(function(state) { return state.state === "review"; }).length, masteredCount: normalizedStates.filter(function(state) { return state.state === "mastered"; }).length };
        await setDoc(assignmentSnapshot.ref, { ...counts, updatedAt: serverTimestamp() }, { merge: true });
        const cards = await loadProgramCards(programId, introducedStates.map(function(item) { return item.cardId || item.id; }));
        const cardsById = new Map(cards.map(function(card) { return [card.cardId || card.id, card]; }));
        return normalizedStates.map(function(state) {
            const cardId = state.cardId || state.id;
            const card = cardsById.get(cardId) || {};
            return { ...card, ...state, id: cardId, cardId: cardId };
        });
    },
    async saveVocabularyAnswer(card, result, session) {
        return submitVocabularyAnswer({ studentUid: auth.currentUser.uid, cardId: card.cardId || card.id, sessionId: session?.sessionId || localDateKey(), answer: result, direction: card.direction || "en-ru" });
    },
    async completeVocabularySession(session, summary) {
        if (!auth.currentUser || currentProfile?.role !== "student" || demoMode) throw new Error("not-authenticated-student");
        const studentUid = auth.currentUser.uid; const assignmentRef = doc(db, "studentVocabulary", studentUid); const snapshot = await getDoc(assignmentRef); if (!snapshot.exists()) throw new Error("student-vocabulary-not-found"); const assignment = snapshot.data();
        const programId = vocabularyProgramId(assignment); const sessionId = session?.sessionId || localDateKey(); const sessionDate = session?.date || localDateKey(); const dayIndex = Number(session?.dayIndex || session?.day?.dayIndex || assignment.currentDayIndex || 1); const sessionRef = doc(db, "studentVocabulary", studentUid, "sessions", sessionId); const sessionSnapshot = await getDoc(sessionRef); if (sessionSnapshot.exists() && sessionSnapshot.data().status === "completed") return { alreadyCompleted: true, streakDays: (await loadVocabularyStreak(studentUid, programId)).streakDays };
        const statesSnapshot = await getDocs(collection(db, "studentVocabulary", studentUid, "cards")); const states = statesSnapshot.docs.map(function(item) { const data = item.data(); return { ...data, state: vocabularyCardState(data) }; }).filter(function(item) { return item.state !== "new"; });
        const counts = { newCount: Math.max(0, Number(assignment.totalCards || assignment.activeCardsCount || 0) - states.length), learningCount: states.filter(function(item) { return item.state === "learning"; }).length, reviewCount: states.filter(function(item) { return item.state === "review"; }).length, masteredCount: states.filter(function(item) { return item.state === "mastered"; }).length };
        await setDoc(sessionRef, { status: "completed", answeredCards: Number(summary.total || 0), againCount: Number(summary.again || 0), hardCount: Number(summary.hard || 0), knowCount: Number(summary.know || 0), completedAt: serverTimestamp(), summary, updatedAt: serverTimestamp() }, { merge: true });
        await setDoc(assignmentRef, { currentDayIndex: dayIndex, currentWeekNumber: Number(sessionSnapshot.data()?.weekNumber || assignment.currentWeekNumber || 1), lastSessionDate: sessionDate, lastSessionAt: serverTimestamp(), lastCompletedDayIndex: dayIndex, lastCompletedStudyDayIndex: dayIndex, lastCompletedAt: serverTimestamp(), lastSessionSummary: summary, ...counts, updatedAt: serverTimestamp() }, { merge: true });
        return { alreadyCompleted: false, streakDays: (await loadVocabularyStreak(studentUid, programId)).streakDays };
    },
    async getSources() {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) return [];
        const snapshot = await getDocs(query(collection(db, "sources"), where("teacherUid", "==", auth.currentUser.uid)));
        return snapshot.docs.map(function(item) { return { id: item.id, ...item.data() }; });
    },
    async saveSource(source) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const existing = await getDocs(query(collection(db, "sources"), where("teacherUid", "==", auth.currentUser.uid)));
        const sourceDoc = existing.docs.find(function(item) { return item.data().key === source.key; });
        const sourceRef = sourceDoc ? sourceDoc.ref : doc(collection(db, "sources"));
        const data = { teacherUid: auth.currentUser.uid, key: source.key, title: source.title, type: source.type || "book", provider: source.provider || "other", url: source.url || "", notes: source.notes || "", updatedAt: serverTimestamp() };
        if (!sourceDoc) data.createdAt = serverTimestamp();
        await setDoc(sourceRef, data, { merge: true });
        return { id: sourceRef.id, ...data };
    },
    async deleteSource(sourceId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const sourceRef = doc(db, "sources", sourceId); const snapshot = await getDoc(sourceRef);
        if (!snapshot.exists()) return;
        if (snapshot.data().teacherUid !== auth.currentUser.uid) throw new Error("source-owner-mismatch");
        await deleteDoc(sourceRef);
    },
    async getPlanLesson(programId, planLessonId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const programSnapshot = await getDoc(doc(db, "learningPrograms", programId));
        if (!programSnapshot.exists() || programSnapshot.data().teacherUid !== auth.currentUser.uid) throw new Error("program-not-found");
        const lessonSnapshot = await getDoc(doc(db, "learningPrograms", programId, "lessons", planLessonId));
        if (!lessonSnapshot.exists()) throw new Error("plan-lesson-not-found");
        return {
            id: lessonSnapshot.id,
            programId: programId,
            program: { id: programSnapshot.id, ...programSnapshot.data() },
            ...lessonSnapshot.data()
        };
    },
    async getVocabularyProgram(student) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode || !student?.authUid) return null;
        const assignmentsSnapshot = await getDocs(query(
            collection(db, "studentVocabulary"),
            where("teacherUid", "==", auth.currentUser.uid),
            where("studentUid", "==", student.authUid)
        ));
        const assignmentSnapshot = assignmentsSnapshot.docs.find(function(item) { return item.data().status === "active"; });
        if (!assignmentSnapshot) return null;
        const assignment = assignmentSnapshot.data();
        const programSnapshot = await getDoc(doc(db, "vocabularyPrograms", vocabularyProgramId(assignment)));
        if (!programSnapshot.exists() || programSnapshot.data().teacherUid !== auth.currentUser.uid) return null;
        const programId = programSnapshot.id;
        const [cardsSnapshot, optionalSnapshot, weeksSnapshot, dailySnapshot, statesSnapshot, sessionsSnapshot] = await Promise.all([
            getDocs(collection(db, "vocabularyPrograms", programId, "cards")),
            getDocs(collection(db, "vocabularyPrograms", programId, "optionalCards")),
            getDocs(collection(db, "vocabularyPrograms", programId, "weeks")),
            getDocs(collection(db, "vocabularyPrograms", programId, "dailyPlan")),
            getDocs(collection(db, "studentVocabulary", student.authUid, "cards")),
            getDocs(collection(db, "studentVocabulary", student.authUid, "sessions"))
        ]);
        const mapDocs = function(snapshot) { return snapshot.docs.map(function(item) { return { id: item.id, ...item.data() }; }); };
        return { id: programId, ...programSnapshot.data(), assignment: { id: assignmentSnapshot.id, ...assignment }, cards: mapDocs(cardsSnapshot).sort(function(a, b) { return String(a.id).localeCompare(String(b.id)); }), optionalCards: mapDocs(optionalSnapshot), weeks: mapDocs(weeksSnapshot).sort(function(a, b) { return Number(a.weekNumber) - Number(b.weekNumber); }), dailyPlan: mapDocs(dailySnapshot).sort(function(a, b) { return Number(a.dayIndex) - Number(b.dayIndex); }), cardStates: mapDocs(statesSnapshot).map(function(state) { return { ...state, state: vocabularyCardState(state) }; }), sessions: mapDocs(sessionsSnapshot) };
    },
    async importVocabularyProgram(student, payload, replaceExisting) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        if (!student?.authUid) throw new Error("У ученика не привязан Firebase Auth UID.");
        const teacherUid = auth.currentUser.uid;
        const studentUid = student.authUid;
        const assignmentRef = doc(db, "studentVocabulary", student.authUid);
        let currentStep = "check studentVocabulary";
        let currentPath = "studentVocabulary/" + studentUid;
        let programRef = null;
        try {
            console.log("VOCAB IMPORT STEP:", currentStep);
            const assignmentsSnapshot = await getDocs(query(collection(db, "studentVocabulary"), where("teacherUid", "==", teacherUid), where("studentUid", "==", studentUid)));
            const existingAssignment = assignmentsSnapshot.docs.find(function(item) { return item.data().status === "active"; });
            if (existingAssignment && !replaceExisting) throw Object.assign(new Error("active-vocabulary-exists"), { code: "active-vocabulary-exists" });

            currentStep = "create vocabularyPrograms parent";
            console.log("VOCAB IMPORT STEP:", currentStep);
            const programsSnapshot = await getDocs(query(collection(db, "vocabularyPrograms"), where("teacherUid", "==", teacherUid)));
            const existingProgram = programsSnapshot.docs.find(function(item) { return item.data().title === payload.program.title; });
            programRef = existingProgram ? existingProgram.ref : doc(collection(db, "vocabularyPrograms"));
            currentPath = "vocabularyPrograms/" + programRef.id;
            const programData = { ...payload.program, teacherUid: teacherUid, title: payload.program.title || "", subject: payload.program.subject || "", level: payload.program.level || "", description: payload.program.description || "", activeCardsCount: payload.cards.length, optionalCardsCount: payload.optionalCards.length, totalStudyDays: payload.dailyPlan.length, totalWeeks: payload.weeks.length, status: "active", srsIntervals: payload.program.srsIntervals || [1, 3, 7, 14, 30, 60], dueLimitBeforePauseNew: Number(payload.program.dueLimitBeforePauseNew || 20), reviewWeeks: payload.program.reviewWeeks || [7, 13, 19, 25, 31, 34], masteryRequiredPasses: Number(payload.program.masteryRequiredPasses || 2), masteryAccuracyThreshold: Number(payload.program.masteryAccuracyThreshold || 0.9), updatedAt: serverTimestamp() };
            if (!existingProgram) programData.createdAt = serverTimestamp();
            await setDoc(programRef, programData, { merge: Boolean(existingProgram) });

            const partialCounts = {};
            for (const name of ["cards", "optionalCards", "weeks", "dailyPlan"]) partialCounts[name] = (await getDocs(collection(db, "vocabularyPrograms", programRef.id, name))).size;
            console.log("VOCAB IMPORT PARTIAL:", { vocabProgramId: programRef.id, ...partialCounts });

            const importCollection = async function(stepName, name, items, idFor) {
                currentStep = stepName; currentPath = "vocabularyPrograms/" + programRef.id + "/" + name;
                console.log("VOCAB IMPORT STEP:", currentStep);
                const expectedIds = new Set(items.map(idFor));
                const existingDocs = await getDocs(collection(db, "vocabularyPrograms", programRef.id, name));
                const staleDocs = existingDocs.docs.filter(function(item) { return !expectedIds.has(item.id); });
                for (let offset = 0; offset < staleDocs.length; offset += 150) { const cleanup = writeBatch(db); staleDocs.slice(offset, offset + 150).forEach(function(item) { cleanup.delete(item.ref); }); await cleanup.commit(); }
                for (let offset = 0; offset < items.length; offset += 150) {
                    const batch = writeBatch(db);
                    items.slice(offset, offset + 150).forEach(function(item, index) { const itemRef = doc(db, "vocabularyPrograms", programRef.id, name, idFor(item, offset + index)); batch.set(itemRef, { ...item, createdAt: serverTimestamp(), updatedAt: serverTimestamp() }); });
                    await batch.commit();
                }
            };
            await importCollection("import cards", "cards", payload.cards, function(item) { return item.cardId; });
            await importCollection("import optionalCards", "optionalCards", payload.optionalCards, function(item) { return item.optionalId; });
            await importCollection("import weeks", "weeks", payload.weeks, function(item) { return "W" + String(item.weekNumber).padStart(2, "0"); });
            await importCollection("import dailyPlan", "dailyPlan", payload.dailyPlan, function(item) { return "D" + String(item.dayIndex).padStart(3, "0"); });
            const importedCounts = {};
            for (const name of ["cards", "optionalCards", "weeks", "dailyPlan"]) importedCounts[name] = (await getDocs(collection(db, "vocabularyPrograms", programRef.id, name))).size;
            if (importedCounts.cards !== payload.cards.length || importedCounts.optionalCards !== payload.optionalCards.length || importedCounts.weeks !== payload.weeks.length || importedCounts.dailyPlan !== payload.dailyPlan.length) throw Object.assign(new Error("vocabulary-import-count-mismatch"), { code: "vocabulary-import-count-mismatch", importedCounts });

            currentStep = "create studentVocabulary"; currentPath = "studentVocabulary/" + studentUid;
            console.log("VOCAB IMPORT STEP:", currentStep);
            const previousAssignment = existingAssignment?.data() || {};
            await setDoc(assignmentRef, { teacherUid: teacherUid, studentUid: studentUid, studentDocId: student.id, vocabularyProgramId: programRef.id, vocabProgramId: programRef.id, archivedVocabProgramId: existingAssignment ? vocabularyProgramId(previousAssignment) || null : null, status: "active", startDate: replaceExisting ? (previousAssignment.startDate || null) : null, currentDayIndex: 1, currentWeekNumber: 1, lastSessionDate: null, lastCompletedDayIndex: null, totalCards: payload.cards.length, newCount: payload.cards.length, learningCount: 0, reviewCount: 0, masteredCount: 0, startedAt: serverTimestamp(), lastSessionAt: null, activeCardsCount: payload.cards.length, createdAt: previousAssignment.createdAt || serverTimestamp(), updatedAt: serverTimestamp() });
            return programRef.id;
        } catch (error) {
            console.error("VOCAB IMPORT FAILED", { step: currentStep, path: currentPath, code: error.code, message: error.message, vocabProgramId: programRef?.id || null, studentUid: studentUid, payloadStudentUid: studentUid, teacherUid: teacherUid });
            error.importStep = currentStep; error.firestorePath = currentPath; error.programId = programRef?.id || null; throw error;
        }
    },
    async setVocabularyStartDate(studentUid, startDate) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate || "")) throw new Error("invalid-start-date");
        const assignmentRef = doc(db, "studentVocabulary", studentUid); const snapshot = await getDoc(assignmentRef);
        if (!snapshot.exists() || snapshot.data().teacherUid !== auth.currentUser.uid) throw new Error("student-vocabulary-not-found");
        const day = getVocabularyProgramDay({ ...snapshot.data(), startDate }, new Date());
        await setDoc(assignmentRef, { startDate, currentDayIndex: day.dayIndex || 1, updatedAt: serverTimestamp() }, { merge: true });
        return day;
    },
    async setVocabularyDebugDayIndex(studentUid, dayIndex) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode || !["localhost", "127.0.0.1"].includes(window.location.hostname)) throw new Error("debug-mode-unavailable");
        const assignmentRef = doc(db, "studentVocabulary", studentUid); const snapshot = await getDoc(assignmentRef);
        if (!snapshot.exists() || snapshot.data().teacherUid !== auth.currentUser.uid) throw new Error("student-vocabulary-not-found");
        const value = dayIndex === "" || dayIndex === null ? null : Number(dayIndex); if (value !== null && (!Number.isInteger(value) || value < 1 || value > 238)) throw new Error("invalid-debug-day-index");
        await setDoc(assignmentRef, { debugDayIndex: value, updatedAt: serverTimestamp() }, { merge: true });
    },
    async getLearningProgram(studentDocId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) return null;
        const snapshot = await getDocs(query(collection(db, "learningPrograms"), where("teacherUid", "==", auth.currentUser.uid)));
        const programDoc = snapshot.docs.find(function(item) { const data = item.data(); return data.studentDocId === studentDocId && data.status === "active"; });
        if (!programDoc) return null;
        const lessonsSnapshot = await getDocs(collection(db, "learningPrograms", programDoc.id, "lessons"));
        const lessons = lessonsSnapshot.docs.map(function(lessonDoc) { return { id: lessonDoc.id, ...lessonDoc.data() }; }).sort(function(a, b) { return Number(a.lessonNumber || 0) - Number(b.lessonNumber || 0); });
        return { id: programDoc.id, ...programDoc.data(), lessons: lessons };
    },
    async importLearningProgram(student, payload, archiveProgramId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const programs = await getDocs(query(collection(db, "learningPrograms"), where("teacherUid", "==", auth.currentUser.uid)));
        const active = programs.docs.filter(function(item) { const data = item.data(); return data.studentDocId === student.id && data.status === "active"; });
        if (active.length && !archiveProgramId) throw Object.assign(new Error("active-program-exists"), { code: "active-program-exists", programId: active[0].id });
        if (active.some(function(item) { return item.id !== archiveProgramId; })) throw Object.assign(new Error("active-program-changed"), { code: "active-program-exists", programId: active[0].id });
        const programRef = doc(collection(db, "learningPrograms"));
        const lessons = payload.lessons;
        const firstCurrent = lessons.find(function(lesson) { return !["completed", "skipped"].includes(lesson.status); });
        const programData = {
            ...payload.program,
            title: payload.program.title || "",
            subject: payload.program.subject || "",
            level: payload.program.level || "",
            mainCourse: payload.program.mainCourse || "",
            teacherUid: auth.currentUser.uid,
            studentUid: student.authUid || "",
            studentDocId: student.id,
            studentName: student.name,
            status: "active",
            totalLessons: lessons.length,
            currentLessonNumber: firstCurrent ? firstCurrent.lessonNumber : lessons[lessons.length - 1].lessonNumber,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        };
        const committedLessonRefs = [];
        let parentCreated = false;
        console.log("PROGRAM IMPORT parent start");
        try {
            // The parent must exist before lesson rules evaluate get(parent).
            await setDoc(programRef, programData);
            parentCreated = true;
            console.log("PROGRAM IMPORT parent created:", programRef.id);
            console.log("PROGRAM IMPORT lessons count:", lessons.length);

            const batchSize = 30;
            for (let offset = 0; offset < lessons.length; offset += batchSize) {
                const lessonBatch = writeBatch(db);
                const batchRefs = [];
                lessons.slice(offset, offset + batchSize).forEach(function(lesson) {
                    const planLessonId = "L" + String(lesson.lessonNumber).padStart(2, "0");
                    const lessonRef = doc(db, "learningPrograms", programRef.id, "lessons", planLessonId);
                    lessonBatch.set(lessonRef, { ...lesson, status: lesson.status || "planned", createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
                    batchRefs.push(lessonRef);
                });
                await lessonBatch.commit();
                committedLessonRefs.push(...batchRefs);
                console.log("PROGRAM IMPORT batch committed:", offset / batchSize + 1, "lessons:", batchRefs.length);
            }

            // Keep the old active program untouched until the replacement is complete.
            if (archiveProgramId) await setDoc(doc(db, "learningPrograms", archiveProgramId), { status: "archived", updatedAt: serverTimestamp() }, { merge: true });
            console.log("PROGRAM IMPORT complete");
            return programRef.id;
        } catch (error) {
            console.error("Learning program import error:", error);
            if (!parentCreated) throw error;
            try {
                for (let offset = 0; offset < committedLessonRefs.length; offset += 30) {
                    const cleanupBatch = writeBatch(db);
                    committedLessonRefs.slice(offset, offset + 30).forEach(function(lessonRef) { cleanupBatch.delete(lessonRef); });
                    await cleanupBatch.commit();
                }
                await deleteDoc(programRef);
            } catch (cleanupError) {
                console.error("Learning program import cleanup error:", cleanupError);
                error.cleanupFailed = true;
                error.programId = programRef.id;
            }
            throw error;
        }
    },
    async updateProgramLessonStatus(programId, lessonId, status) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        if (!["planned", "scheduled", "prepared", "completed", "skipped"].includes(status)) throw new Error("invalid-program-lesson-status");
        const programRef = doc(db, "learningPrograms", programId);
        const programSnapshot = await getDoc(programRef);
        if (!programSnapshot.exists() || programSnapshot.data().teacherUid !== auth.currentUser.uid) throw Object.assign(new Error("permission-denied"), { code: "permission-denied" });
        const lessonsSnapshot = await getDocs(collection(db, "learningPrograms", programId, "lessons"));
        const lessons = lessonsSnapshot.docs.map(function(item) { return { id: item.id, ...item.data(), status: item.id === lessonId ? status : item.data().status }; }).sort(function(a, b) { return Number(a.lessonNumber || 0) - Number(b.lessonNumber || 0); });
        const current = lessons.find(function(lesson) { return !["completed", "skipped"].includes(lesson.status); });
        const eventsSnapshot = status === "completed" ? await getDocs(query(collection(db, "scheduleEvents"), where("teacherUid", "==", auth.currentUser.uid))) : null;
        const linkedEvents = eventsSnapshot ? eventsSnapshot.docs.filter(function(item) { const event = item.data(); return event.programId === programId && event.planLessonId === lessonId && event.status !== "cancelled"; }) : [];
        const batch = writeBatch(db);
        batch.set(doc(db, "learningPrograms", programId, "lessons", lessonId), { status: status, updatedAt: serverTimestamp() }, { merge: true });
        batch.set(programRef, { currentLessonNumber: current ? current.lessonNumber : (lessons.length ? lessons[lessons.length - 1].lessonNumber : 0), updatedAt: serverTimestamp() }, { merge: true });
        linkedEvents.forEach(function(item) { batch.set(item.ref, { status: "completed", updatedAt: serverTimestamp() }, { merge: true }); });
        await batch.commit();
    },
    async completeScheduledLesson(eventId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const eventRef = doc(db, "scheduleEvents", eventId);
        const eventSnapshot = await getDoc(eventRef);
        if (!eventSnapshot.exists() || eventSnapshot.data().teacherUid !== auth.currentUser.uid) throw Object.assign(new Error("schedule-event-not-found"), { code: "permission-denied" });
        const event = eventSnapshot.data();
        if (!event.studentAuthUid || !event.lessonId) throw Object.assign(new Error("published-lesson-not-found"), { code: "failed-precondition" });
        const currentRef = doc(db, "currentLessons", event.studentAuthUid);
        const progressRef = doc(db, "currentLessons", event.studentAuthUid, "progress", "state");
        const [currentSnapshot, progressSnapshot] = await Promise.all([getDoc(currentRef), getDoc(progressRef)]);
        if (!currentSnapshot.exists() || currentSnapshot.data().teacherUid !== auth.currentUser.uid || currentSnapshot.data().lessonId !== event.lessonId) throw Object.assign(new Error("published-lesson-not-found"), { code: "failed-precondition" });
        const currentLesson = currentSnapshot.data();
        const progress = progressSnapshot.exists() ? progressSnapshot.data() : {};
        const batch = writeBatch(db);
        batch.set(eventRef, { status: "completed", completedAt: serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true });
        batch.set(currentRef, { status: "completed", completedAt: serverTimestamp(), historyArchivedAt: serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true });
        if (!currentLesson.historyArchivedAt) {
            batch.set(doc(db, "lessonHistory", event.studentAuthUid, "lessons", event.lessonId), {
                ...currentLesson,
                lessonId: event.lessonId,
                studentUid: event.studentAuthUid,
                progress: {
                    completedBlockIds: Array.isArray(progress.completedBlockIds) ? progress.completedBlockIds : [],
                    selfAssessment: progress.selfAssessment || null,
                    repeatRequest: Boolean(progress.repeatRequest),
                    externalChecks: progress.externalChecks || {},
                    writtenChecks: progress.writtenChecks || {},
                    audioChecks: progress.audioChecks || {}
                },
                status: "completed",
                completedAt: serverTimestamp(),
                archivedAt: serverTimestamp()
            });
        }
        if (event.programId && event.planLessonId) {
            const lessonsSnapshot = await getDocs(collection(db, "learningPrograms", event.programId, "lessons"));
            const lessons = lessonsSnapshot.docs.map(function(item) { return { id: item.id, ...item.data(), status: item.id === event.planLessonId ? "completed" : item.data().status }; }).sort(function(a, b) { return Number(a.lessonNumber || 0) - Number(b.lessonNumber || 0); });
            const next = lessons.find(function(item) { return !["completed", "skipped"].includes(item.status); });
            batch.set(doc(db, "learningPrograms", event.programId, "lessons", event.planLessonId), { status: "completed", completedAt: serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true });
            batch.set(doc(db, "learningPrograms", event.programId), { currentLessonNumber: next ? next.lessonNumber : (lessons.at(-1)?.lessonNumber || 0), updatedAt: serverTimestamp() }, { merge: true });
        }
        await batch.commit();
    },
    watchStudent(studentUid, studentDocId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) return;
        if (studentUid) subscribeTeacherStudentData(studentUid);
        if (studentDocId) subscribeFocusItems(studentDocId);
        if (studentDocId) subscribeTeacherLearningProgram(studentDocId);
    },
    async saveFocusItem(studentDocId, itemId, item) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const data = {
            title: item.title,
            type: item.type,
            status: item.status,
            note: item.note || "",
            teacherUid: auth.currentUser.uid,
            updatedAt: serverTimestamp()
        };
        if (itemId) {
            await setDoc(doc(db, "students", studentDocId, "focusItems", itemId), data, { merge: true });
            return itemId;
        }
        const created = await addDoc(collection(db, "students", studentDocId, "focusItems"), { ...data, createdAt: serverTimestamp() });
        return created.id;
    },
    async deleteFocusItem(studentDocId, itemId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        await deleteDoc(doc(db, "students", studentDocId, "focusItems", itemId));
    },
    async saveMaterial(materialId, material) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const data = {
            title: material.title,
            type: material.type,
            subject: material.subject,
            level: material.level,
            topic: material.topic,
            tags: Array.isArray(material.tags) ? material.tags : [],
            description: material.description,
            url: material.url || "",
            embedUrl: material.embedUrl || "",
            verificationMode: material.verificationMode || "",
            resultsTitle: material.resultsTitle || "",
            service: material.service || "",
            format: material.format || "",
            pages: Array.isArray(material.pages) ? material.pages.map(function(page, index) { return { order: index + 1, publicId: page.publicId || "", assetId: page.assetId || null, resourceType: page.resourceType || "image", deliveryType: page.deliveryType || "authenticated", format: page.format || "", bytes: page.bytes || null, width: page.width || null, height: page.height || null, version: page.version || null, originalName: page.originalName || "" }; }) : [],
            pageCount: Number(material.pageCount || material.pages?.length || 0),
            notes: material.notes || "",
            teacherUid: auth.currentUser.uid,
            updatedAt: serverTimestamp()
        };
        let savedId;
        if (materialId) {
            const materialRef = doc(db, "materials", materialId);
            await setDoc(materialRef, data, { merge: true });
            savedId = materialId;
        } else {
            const created = await addDoc(collection(db, "materials"), { ...data, createdAt: serverTimestamp() });
            savedId = created.id;
        }
        const savedSnap = await getDoc(doc(db, "materials", savedId));
        console.log("SAVED FIRESTORE EMBED:", savedSnap.data()?.embedUrl);
        return savedId;
    },
    async deleteMaterial(materialId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        await deleteDoc(doc(db, "materials", materialId));
    },
    async uploadWorksheetPages(files, onProgress) {
        const user = auth.currentUser;
        if (!user || currentProfile?.role !== "teacher" || demoMode) throw Object.assign(new Error("not-authenticated-teacher"), { code: "not-authenticated" });
        if (!Array.isArray(files) || !files.length || files.length > 10) throw Object.assign(new Error("invalid-worksheet-pages"), { code: "invalid-files" });
        const token = await getIdToken(user); const uploaded = [];
        for (let index = 0; index < files.length; index += 1) {
            if (onProgress) onProgress(index + 1, files.length);
            const body = new FormData(); body.append("file", files[index]); let response;
            try { response = await fetch(LESSONFLOW_FILES_API + "/upload/worksheet", { method: "POST", headers: { Authorization: "Bearer " + token }, body: body }); }
            catch (error) { throw Object.assign(error, { code: "files-network" }); }
            let payload = {}; try { payload = await response.json(); } catch (error) { payload = {}; }
            if (!response.ok || !payload.ok || !payload.file) throw Object.assign(new Error(payload.error || "worksheet-upload-failed"), { status: response.status, workerMessage: payload.error || "" });
            uploaded.push({ ...payload.file, originalName: files[index].name, order: index + 1 });
        }
        return uploaded;
    },
    async loadWorksheetPage(materialId, pageIndex) {
        const user = auth.currentUser; if (!user) throw Object.assign(new Error("not-authenticated"), { code: "not-authenticated" });
        const token = await getIdToken(user); const endpoint = LESSONFLOW_FILES_API + "/view/worksheet?materialId=" + encodeURIComponent(materialId) + "&pageIndex=" + encodeURIComponent(pageIndex); let response;
        try { response = await fetch(endpoint, { headers: { Authorization: "Bearer " + token } }); }
        catch (error) { throw Object.assign(error, { code: "files-network" }); }
        if (!response.ok) throw Object.assign(new Error("worksheet-view-failed"), { status: response.status, pageIndex: pageIndex }); return response.blob();
    },
    async getStudentAccounts() {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) return [];
        return loadStudentAccounts();
    },
    async saveStudent(studentId, student) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const weeklySchedule = Array.isArray(student.weeklySchedule) ? student.weeklySchedule.map(function(slot) { return { id: String(slot.id), weekday: Number(slot.weekday), time: String(slot.time), durationMinutes: Number(slot.durationMinutes) }; }) : [];
        const scheduleKeys = new Set();
        weeklySchedule.forEach(function(slot) {
            const key = slot.weekday + "|" + slot.time;
            if (!slot.id || !Number.isInteger(slot.weekday) || slot.weekday < 1 || slot.weekday > 7 || !/^([01]\d|2[0-3]):[0-5]\d$/.test(slot.time) || !Number.isFinite(slot.durationMinutes) || slot.durationMinutes <= 0 || scheduleKeys.has(key)) throw new Error("invalid-weekly-schedule");
            scheduleKeys.add(key);
        });
        const scheduleStartValue = student.scheduleStartDate || localDateKey(new Date());
        const scheduleStart = parseLocalDate(scheduleStartValue);
        if (!scheduleStart || localDateKey(scheduleStart) !== scheduleStartValue) throw new Error("invalid-schedule-start-date");
        scheduleStart.setHours(12, 0, 0, 0);
        const firstSlot = weeklySchedule[0] || null;
        let existingStudent = null;
        if (studentId) {
            const existingSnapshot = await getDoc(doc(db, "students", studentId));
            if (!existingSnapshot.exists() || existingSnapshot.data().teacherUid !== auth.currentUser.uid) throw new Error("student-owner-mismatch");
            existingStudent = existingSnapshot.data();
        }
        const data = {
            name: student.name,
            subject: student.subject,
            level: student.level,
            textbook: student.textbook,
            currentTopic: student.currentTopic,
            repeatTopic: student.repeatTopic,
            avatarKey: student.avatarKey || null,
            lessonDay: firstSlot ? ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"][firstSlot.weekday] : "",
            lessonTime: firstSlot?.time || "",
            scheduleStartDate: Timestamp.fromDate(scheduleStart),
            weeklySchedule: weeklySchedule,
            teacherUid: auth.currentUser.uid,
            authUid: existingStudent?.authUid || student.authUid || null
        };
        let savedId = studentId;
        if (studentId) {
            await setDoc(doc(db, "students", studentId), data, { merge: true });
        } else {
            const created = await addDoc(collection(db, "students"), { ...data, createdAt: serverTimestamp() });
            savedId = created.id;
        }
        await materializeStudentSchedule({ id: savedId, ...data, scheduleStartDate: student.scheduleStartDate }, weeklySchedule, student.scheduleStartDate);
        return savedId;
    },
    async createStudentAccount(studentId, email, password) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const normalizedEmail = String(email || "").trim().toLowerCase();
        if (!normalizedEmail || !password || password.length < 6) throw new Error("invalid-student-credentials");
        const studentRef = doc(db, "students", studentId);
        const before = await getDoc(studentRef);
        if (!before.exists() || before.data().teacherUid !== auth.currentUser.uid) throw new Error("student-owner-mismatch");
        if (before.data().authUid) throw new Error("student-account-already-linked");
        const secondaryApp = initializeApp(firebaseConfig, "student-provision-" + Date.now() + "-" + Math.random().toString(36).slice(2));
        const secondaryAuth = getAuth(secondaryApp);
        let createdUser = null;
        let accountLinked = false;
        try {
            const credential = await createUserWithEmailAndPassword(secondaryAuth, normalizedEmail, password);
            createdUser = credential.user;
            const teacherUid = auth.currentUser.uid;
            await runTransaction(db, async function(transaction) {
                const fresh = await transaction.get(studentRef);
                if (!fresh.exists() || fresh.data().teacherUid !== teacherUid) throw new Error("student-owner-mismatch");
                if (fresh.data().authUid) throw new Error("student-account-already-linked");
                transaction.set(doc(db, "users", createdUser.uid), {
                    role: "student",
                    name: fresh.data().name || "Ученик",
                    email: normalizedEmail,
                    studentDocId: studentId,
                    teacherUid: teacherUid,
                    createdAt: serverTimestamp()
                });
                transaction.update(studentRef, { authUid: createdUser.uid, updatedAt: serverTimestamp() });
            });
            accountLinked = true;
            const syncResult = await syncStudentAuthRelations(studentId, createdUser.uid);
            return { authUid: createdUser.uid, email: normalizedEmail, ...syncResult };
        } catch (error) {
            if (createdUser && !accountLinked) {
                try { await deleteUser(createdUser); }
                catch (rollbackError) { console.error("Student account rollback failed:", rollbackError.code || rollbackError.message); error.rollbackFailed = true; }
            }
            throw error;
        } finally {
            try { await signOut(secondaryAuth); } catch (error) {}
            await deleteApp(secondaryApp);
        }
    },
    syncStudentAuthRelations,
    async archiveStudent(studentId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const teacherUid = auth.currentUser.uid;
        const studentRef = doc(db, "students", studentId);
        const studentSnapshot = await getDoc(studentRef);
        if (!studentSnapshot.exists() || studentSnapshot.data().teacherUid !== teacherUid) throw new Error("student-owner-mismatch");
        const student = studentSnapshot.data();
        const todayKey = localDateKey(new Date());
        const eventsSnapshot = await getDocs(query(collection(db, "scheduleEvents"), where("teacherUid", "==", teacherUid)));
        const futureEvents = eventsSnapshot.docs.filter(function(eventDoc) {
            const event = eventDoc.data();
            return event.studentDocId === studentId && String(event.date || "") >= todayKey
                && event.status !== "cancelled" && event.status !== "completed";
        });
        for (let offset = 0; offset < futureEvents.length; offset += 400) {
            const batch = writeBatch(db);
            futureEvents.slice(offset, offset + 400).forEach(function(eventDoc) {
                batch.set(eventDoc.ref, { status: "cancelled", cancelledAt: serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true });
            });
            await batch.commit();
        }
        await setDoc(studentRef, {
            status: "archived", archivedAt: serverTimestamp(),
            archivedWeeklySchedule: Array.isArray(student.weeklySchedule) ? student.weeklySchedule : [],
            archivedScheduleStartDate: student.scheduleStartDate || null,
            weeklySchedule: [], lessonDay: "", lessonTime: "", updatedAt: serverTimestamp()
        }, { merge: true });
        return { cancelledFutureEvents: futureEvents.length };
    },
    async restoreStudent(studentId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const studentRef = doc(db, "students", studentId);
        const snapshot = await getDoc(studentRef);
        if (!snapshot.exists() || snapshot.data().teacherUid !== auth.currentUser.uid) throw new Error("student-owner-mismatch");
        const student = snapshot.data();
        await setDoc(studentRef, {
            status: "active", restoredAt: serverTimestamp(), archivedAt: null,
            weeklySchedule: Array.isArray(student.archivedWeeklySchedule) ? student.archivedWeeklySchedule : [],
            scheduleStartDate: student.archivedScheduleStartDate || student.scheduleStartDate || Timestamp.fromDate(new Date()),
            updatedAt: serverTimestamp()
        }, { merge: true });
    },
    async deleteStudent(studentId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        await this.archiveStudent(studentId);
        await deleteDoc(doc(db, "students", studentId));
    },
    async publishStudentLesson(student, lesson) {
        console.log("CURRENT AUTH USER:", auth.currentUser?.uid);
        console.log("APP MODE:", demoMode ? "demo" : "firebase", "PROFILE ROLE:", currentProfile?.role);
        if (!auth.currentUser) {
            const error = new Error("Для облачной публикации войдите как преподаватель.");
            error.code = "not-authenticated-teacher";
            throw error;
        }
        if (demoMode || currentProfile?.role !== "teacher") {
            const error = new Error("Облачная публикация доступна только преподавателю в Firebase mode.");
            error.code = "not-firebase-teacher-mode";
            throw error;
        }
        let studentUid = student?.authUid || null;
        if (!studentUid && student?.name === "Миша") studentUid = await findMishaUid();
        if (!studentUid) {
            console.error("Публикация отменена: к ученику не привязан Firebase-аккаунт.");
            return { ok: false, reason: "student-account-missing" };
        }
        const currentLessonRef = doc(db, "currentLessons", studentUid);
        const progressRef = doc(db, "currentLessons", studentUid, "progress", "state");
        const currentSnapshot = await getDoc(currentLessonRef);
        const progressSnapshot = currentSnapshot.exists() ? await getDoc(progressRef) : null;
        const lessonId = typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : "lesson-" + Date.now() + "-" + Math.random().toString(16).slice(2);
        const batch = writeBatch(db);
        const homeworkMetadata = {};
        const scheduleSnapshot = await getDocs(query(collection(db, "scheduleEvents"), where("teacherUid", "==", auth.currentUser.uid)));
        const anchorEvent = lesson.scheduleEventId ? scheduleSnapshot.docs.find(function(item) { return item.id === lesson.scheduleEventId; }) : null;
        const anchorKey = anchorEvent ? String(anchorEvent.data().date || "") + "T" + String(anchorEvent.data().startTime || "00:00") : String(lesson.date || "") + "T23:59";
        const nextEvent = scheduleSnapshot.docs.map(function(item) { return { id: item.id, ...item.data() }; }).filter(function(event) { return event.studentDocId === student.id && event.status !== "cancelled" && (String(event.date || "") + "T" + String(event.startTime || "00:00")) > anchorKey; }).sort(function(a, b) { return (a.date + a.startTime).localeCompare(b.date + b.startTime); })[0] || null;
        (lesson.blocks || []).filter(function(block) { return String(block.type || "").toLocaleLowerCase("ru").includes("домашнее задание"); }).forEach(function(block) {
            const dueMode = block.homeworkDueMode === "custom" ? "custom" : "next-lesson";
            const customDate = dueMode === "custom" && block.homeworkDueDate ? new Date(block.homeworkDueDate + "T" + (block.homeworkDueTime || "23:59") + ":00") : null;
            homeworkMetadata[block.id] = {
                homeworkDueMode: dueMode,
                assignedAt: serverTimestamp(),
                dueAt: customDate && !Number.isNaN(customDate.getTime()) ? Timestamp.fromDate(customDate) : nextEvent ? Timestamp.fromDate(new Date(nextEvent.date + "T" + (nextEvent.startTime || "00:00") + ":00")) : null,
                dueScheduleEventId: dueMode === "next-lesson" ? (nextEvent?.id || null) : null
            };
        });

        if (currentSnapshot.exists() && currentSnapshot.data().status !== "completed" && !currentSnapshot.data().historyArchivedAt) {
            const oldLesson = currentSnapshot.data();
            const oldLessonId = oldLesson.lessonId || (typeof crypto !== "undefined" && crypto.randomUUID
                ? crypto.randomUUID()
                : "lesson-" + Date.now() + "-archived");
            const oldProgress = progressSnapshot?.exists() ? progressSnapshot.data() : {};
            batch.set(doc(db, "lessonHistory", studentUid, "lessons", oldLessonId), {
                ...oldLesson,
                lessonId: oldLessonId,
                studentUid: studentUid,
                progress: {
                    completedBlockIds: Array.isArray(oldProgress.completedBlockIds) ? oldProgress.completedBlockIds : [],
                    selfAssessment: oldProgress.selfAssessment || null,
                    repeatRequest: Boolean(oldProgress.repeatRequest),
                    externalChecks: oldProgress.externalChecks || {},
                    writtenChecks: oldProgress.writtenChecks || {},
                    audioChecks: oldProgress.audioChecks || {}
                },
                archivedAt: serverTimestamp()
            });
        }

        batch.set(currentLessonRef, {
            ...lesson,
            lessonId: lessonId,
            studentUid: studentUid,
            studentId: student.id || "misha",
            studentDocId: student.id || null,
            studentName: student.name,
            teacherUid: auth.currentUser.uid,
            status: "published",
            publishedAt: serverTimestamp(),
            homeworkMetadata: homeworkMetadata
        });
        batch.set(progressRef, {
            studentUid: studentUid,
            completedBlockIds: [],
            selfAssessment: null,
            repeatRequest: false,
            externalChecks: {},
            updatedAt: serverTimestamp()
        });
        try {
            await batch.commit();
        } catch (error) {
            if (currentSnapshot.exists()) error.lessonFlowCode = "lesson-archive-failed";
            throw error;
        }
        return { ok: true, studentUid: studentUid, lessonId: lessonId };
    },
    async publishMishaLesson(lesson) {
        return this.publishStudentLesson({ name: "Миша", authUid: null }, lesson);
    },
    async saveProgress(progress) {
        if (!auth.currentUser || currentProfile?.role !== "student") return;
        const externalChecks = Object.fromEntries(Object.entries(progress.externalChecks || {}).map(function([blockId, check]) {
            return [blockId, {
                ...check,
                ...(typeof check.startedAt === "string" ? { startedAt: serverTimestamp() } : {}),
                ...(typeof check.submittedAt === "string" ? { submittedAt: serverTimestamp() } : {})
            }];
        }));
        await setDoc(doc(db, "currentLessons", auth.currentUser.uid, "progress", "state"), {
            studentUid: auth.currentUser.uid,
            completedBlockIds: progress.completedBlockIds,
            selfAssessment: progress.selfAssessment || "",
            repeatRequest: Boolean(progress.repeatRequest),
            externalChecks: externalChecks,
            updatedAt: serverTimestamp()
        }, { merge: true });
        const newlySubmitted = Object.entries(progress.externalChecks || {}).filter(function(entry) {
            return entry[1]?.service === "Wordwall" && entry[1]?.status === "submitted" && typeof entry[1]?.submittedAt === "string";
        });
        if (newlySubmitted.length) {
            const lessonSnapshot = await getDoc(doc(db, "currentLessons", auth.currentUser.uid));
            if (lessonSnapshot.exists()) {
                const lesson = lessonSnapshot.data();
                await Promise.all(newlySubmitted.map(function([blockId]) {
                    const block = (lesson.blocks || []).find(function(item) { return item.id === blockId; }) || {};
                    const lessonId = lesson.lessonId || lessonSnapshot.id;
                    const wordwallSubmissionId = [auth.currentUser.uid, blockId].map(function(value) { return encodeURIComponent(String(value || "")); }).join("__");
                    return setDoc(doc(db, "submissions", wordwallSubmissionId), {
                        teacherUid: lesson.teacherUid || "",
                        studentUid: auth.currentUser.uid,
                        studentDocId: lesson.studentDocId ?? lesson.studentId ?? null,
                        studentName: lesson.studentName || currentProfile?.name || "Ученик",
                        lessonId: lessonId,
                        blockId: blockId,
                        title: block.resultsTitle || block.title || "Wordwall",
                        type: "wordwall",
                        status: "submitted",
                        teacherComment: "",
                        submittedAt: serverTimestamp(),
                        reviewedAt: null,
                        scorePercent: null,
                        mistakesCount: null,
                        durationSec: null,
                        mistakeNotes: [],
                        attemptedAt: null,
                        updatedAt: serverTimestamp()
                    }, { merge: true });
                }));
            }
        }
    },
    async acknowledgeRepeat(studentUid) {
        if (!auth.currentUser || currentProfile?.role !== "teacher") throw new Error("not-authenticated-teacher");
        await setDoc(doc(db, "currentLessons", studentUid, "progress", "state"), {
            studentUid: studentUid,
            repeatRequest: false,
            updatedAt: serverTimestamp()
        }, { merge: true });
    },
    async updateExternalCheck(studentUid, externalChecks, completedBlockIds) {
        if (!auth.currentUser || currentProfile?.role !== "teacher") throw new Error("not-authenticated-teacher");
        const checksForFirestore = Object.fromEntries(Object.entries(externalChecks || {}).map(function([blockId, check]) {
            return [blockId, { ...check, ...(typeof check.reviewedAt === "string" ? { reviewedAt: serverTimestamp() } : {}) }];
        }));
        await setDoc(doc(db, "currentLessons", studentUid, "progress", "state"), {
            completedBlockIds: completedBlockIds,
            externalChecks: checksForFirestore,
            updatedAt: serverTimestamp()
        }, { merge: true });
        await Promise.all(Object.entries(externalChecks || {}).filter(function(entry) {
            return entry[1]?.service === "Wordwall" && ["verified", "returned"].includes(entry[1]?.status);
        }).map(function([blockId, check]) {
            return setDoc(doc(db, "submissions", studentUid + "__" + blockId), { status: check.status, updatedAt: serverTimestamp() }, { merge: true });
        }));
    },
    async reviewWordwallSubmission(submission, status, teacherComment, result, selectedFocusTitles) {
        if (!auth.currentUser || currentProfile?.role !== "teacher") throw new Error("not-authenticated-teacher");
        if (!["verified", "returned"].includes(status)) throw new Error("invalid-wordwall-status");
        const progressRef = doc(db, "currentLessons", submission.studentUid, "progress", "state"); const progressSnapshot = await getDoc(progressRef); const progress = progressSnapshot.exists() ? progressSnapshot.data() : {};
        const completedBlockIds = Array.isArray(progress.completedBlockIds) ? progress.completedBlockIds.slice() : []; const index = completedBlockIds.indexOf(submission.blockId);
        if (status === "verified" && index < 0) completedBlockIds.push(submission.blockId); if (status === "returned" && index >= 0) completedBlockIds.splice(index, 1);
        const externalChecks = { ...(progress.externalChecks || {}), [submission.blockId]: { service: "Wordwall", status: status, teacherComment: teacherComment || "", reviewedAt: serverTimestamp() } };
        const submissionUpdate = { status: status, teacherComment: teacherComment || "", reviewedAt: serverTimestamp(), updatedAt: serverTimestamp() };
        if (status === "verified") Object.assign(submissionUpdate, { scorePercent: result?.scorePercent ?? null, mistakesCount: result?.mistakesCount ?? null, durationSec: result?.durationSec ?? null, mistakeNotes: Array.isArray(result?.mistakeNotes) ? result.mistakeNotes : [], attemptedAt: serverTimestamp() });
        const batch = writeBatch(db); batch.set(doc(db, "submissions", submission.id), submissionUpdate, { merge: true }); batch.set(progressRef, { completedBlockIds: completedBlockIds, externalChecks: externalChecks, updatedAt: serverTimestamp() }, { merge: true });
        let addedFocusCount = 0;
        if (status === "verified" && submission.studentDocId && Array.isArray(selectedFocusTitles) && selectedFocusTitles.length) {
            const focusCollection = collection(db, "students", submission.studentDocId, "focusItems"); const focusSnapshot = await getDocs(focusCollection);
            const normalizeTitle = function(value) { return String(value || "").trim().replace(/\s+/g, " ").toLocaleLowerCase("ru"); };
            const existingTitles = new Set(focusSnapshot.docs.map(function(itemDoc) { return normalizeTitle(itemDoc.data().title); }));
            selectedFocusTitles.forEach(function(title) { const normalized = normalizeTitle(title); if (!normalized || existingTitles.has(normalized)) return; existingTitles.add(normalized); addedFocusCount += 1; batch.set(doc(focusCollection), { title: title.trim(), type: "mistake", status: "practice", note: "", source: "Wordwall", sourceTitle: submission.title || "Wordwall", teacherUid: auth.currentUser.uid, createdAt: serverTimestamp(), updatedAt: serverTimestamp() }); });
        }
        await batch.commit(); return { addedFocusCount: addedFocusCount };
    },
    async saveScheduleEvent(eventId, eventData) {
        if (!auth.currentUser || currentProfile?.role !== "teacher") throw new Error("not-authenticated-teacher");
        let recurringException = false; let topicManuallyEdited = false; let existing = null;
        if (eventId) {
            const existingSnapshot = await getDoc(doc(db, "scheduleEvents", eventId));
            existing = existingSnapshot.exists() ? existingSnapshot.data() : null;
            recurringException = Boolean(existing?.source === "recurring" || existing?.recurringException);
            topicManuallyEdited = Boolean(existing?.topicManuallyEdited || (eventData.topic !== undefined && eventData.topic !== existing?.topic));
        }
        const data = { ...eventData, teacherUid: auth.currentUser.uid, updatedAt: serverTimestamp(), ...(recurringException ? { recurringException: true } : {}), ...(topicManuallyEdited ? { topicManuallyEdited: true } : {}) };
        if (eventId) await setDoc(doc(db, "scheduleEvents", eventId), data, { merge: true });
        else await addDoc(collection(db, "scheduleEvents"), { ...data, createdAt: serverTimestamp() });
        if (eventId && eventData.status === "prepared" && existing?.programId && existing?.planLessonId) await setDoc(doc(db, "learningPrograms", existing.programId, "lessons", existing.planLessonId), { status: "prepared", scheduledEventId: eventId, scheduledDate: eventData.date || existing.date, scheduledStartTime: eventData.startTime || existing.startTime, updatedAt: serverTimestamp() }, { merge: true });
        if (eventId && (existing?.planLessonId || existing?.source === "recurring")) await syncStudentProgramAssignments(eventData.studentDocId || existing.studentDocId);
    },
    async cancelScheduleEvent(eventId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher") throw new Error("not-authenticated-teacher");
        const eventSnapshot = await getDoc(doc(db, "scheduleEvents", eventId));
        await setDoc(doc(db, "scheduleEvents", eventId), { status: "cancelled", updatedAt: serverTimestamp() }, { merge: true });
        if (eventSnapshot.exists()) await syncStudentProgramAssignments(eventSnapshot.data().studentDocId);
    },
    async assignSchedulePlanLesson(eventId, planLessonId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const eventRef = doc(db, "scheduleEvents", eventId); const eventSnapshot = await getDoc(eventRef);
        if (!eventSnapshot.exists() || eventSnapshot.data().teacherUid !== auth.currentUser.uid) throw new Error("schedule-event-not-found");
        const event = eventSnapshot.data();
        const program = await this.getLearningProgram(event.studentDocId);
        if (!program) throw new Error("active-program-not-found");
        const otherEventSnapshot = await getDocs(query(collection(db, "scheduleEvents"), where("teacherUid", "==", auth.currentUser.uid)));
        const duplicate = planLessonId ? otherEventSnapshot.docs.find(function(item) { const data = item.data(); return item.id !== eventId && data.status !== "cancelled" && data.programId === program.id && data.planLessonId === planLessonId; }) : null;
        if (duplicate) { const data = duplicate.data(); throw Object.assign(new Error("plan-lesson-already-scheduled"), { code: "plan-lesson-already-scheduled", date: data.date, startTime: data.startTime }); }
        const lesson = planLessonId ? program.lessons.find(function(item) { return item.id === planLessonId && !["completed", "skipped"].includes(item.status); }) : null;
        if (planLessonId && !lesson) throw new Error("plan-lesson-not-available");
        const batch = writeBatch(db);
        if (event.planLessonId && event.planLessonId !== planLessonId) {
            const oldLesson = program.lessons.find(function(item) { return item.id === event.planLessonId; });
            if (oldLesson && oldLesson.status === "scheduled") batch.set(doc(db, "learningPrograms", program.id, "lessons", oldLesson.id), { status: "planned", scheduledEventId: null, scheduledDate: null, scheduledStartTime: null, updatedAt: serverTimestamp() }, { merge: true });
        }
        if (lesson) {
            batch.set(eventRef, { programId: program.id, planLessonId: lesson.id, planLessonNumber: lesson.lessonNumber, planLessonTitle: lesson.title || "", planLessonManuallyAssigned: true, topic: event.topic || lesson.title || "", updatedAt: serverTimestamp() }, { merge: true });
            batch.set(doc(db, "learningPrograms", program.id, "lessons", lesson.id), { status: "scheduled", scheduledEventId: eventId, scheduledDate: event.date, scheduledStartTime: event.startTime, updatedAt: serverTimestamp() }, { merge: true });
        } else batch.set(eventRef, { programId: null, planLessonId: null, planLessonNumber: null, planLessonTitle: null, planLessonManuallyAssigned: true, updatedAt: serverTimestamp() }, { merge: true });
        await batch.commit();
        await syncStudentProgramAssignments(event.studentDocId);
    },
    async getStudentSchedule(studentDocId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) return null;
        const studentSnapshot = await getDoc(doc(db, "students", studentDocId));
        if (studentSnapshot.exists()) {
            const student = studentSnapshot.data();
            if (Array.isArray(student.weeklySchedule)) return { id: studentDocId, source: "student", validFrom: scheduleDateKey(student.scheduleStartDate), days: student.weeklySchedule.map(function(slot) { return { id: slot.id, weekday: slot.weekday, startTime: slot.time, endTime: "", duration: slot.durationMinutes }; }) };
        }
        const snapshot = await getDocs(query(collection(db, "studentSchedules"), where("teacherUid", "==", auth.currentUser.uid)));
        const scheduleDoc = snapshot.docs.find(function(item) { const data = item.data(); return data.studentDocId === studentDocId && data.active !== false; });
        return scheduleDoc ? { id: scheduleDoc.id, legacy: true, ...scheduleDoc.data() } : null;
    },
    async saveStudentSchedule(student, days, validFrom) {
        if (!auth.currentUser || currentProfile?.role !== "teacher" || demoMode) throw new Error("not-authenticated-teacher");
        const weeklySchedule = days.map(function(day) { return { id: day.id || crypto.randomUUID(), weekday: Number(day.weekday), time: day.time || day.startTime, durationMinutes: Number(day.durationMinutes || day.duration) }; });
        const start = parseLocalDate(validFrom); if (!start || localDateKey(start) !== validFrom) throw new Error("invalid-schedule-start-date"); start.setHours(12, 0, 0, 0);
        await setDoc(doc(db, "students", student.id), { weeklySchedule: weeklySchedule, scheduleStartDate: Timestamp.fromDate(start), lessonDay: weeklySchedule[0] ? ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"][weeklySchedule[0].weekday] : "", lessonTime: weeklySchedule[0]?.time || "" }, { merge: true });
        await materializeStudentSchedule(student, weeklySchedule, validFrom);
        return { id: student.id, source: "student", validFrom: validFrom, days: weeklySchedule.map(function(slot) { return { id: slot.id, weekday: slot.weekday, startTime: slot.time, duration: slot.durationMinutes }; }) };
    },
    async uploadWrittenSubmission(lesson, block, files, onProgress, previousSubmission) {
        const user = auth.currentUser;
        console.log("WRITTEN SUBMIT: current user", Boolean(user));
        if (!user || currentProfile?.role !== "student") throw Object.assign(new Error("NO_AUTH_USER"), { code: "not-authenticated" });
        const submissionId = [auth.currentUser.uid, lesson.lessonId || lesson.cloudId || "lesson", block.id].join("__");
        const submissionRef = doc(db, "submissions", submissionId);
        console.log("WRITTEN: before duplicate check");
        console.log("WRITTEN: student uid", user.uid);
        console.log("WRITTEN: lesson id", lesson?.lessonId);
        console.log("WRITTEN: block id", block?.id);
        try {
            const duplicateQuery = query(
                collection(db, "submissions"),
                where("studentUid", "==", user.uid),
                where("lessonId", "==", lesson.lessonId),
                where("blockId", "==", block.id),
                where("status", "==", "submitted")
            );
            const duplicateSnapshot = await getDocs(duplicateQuery);
            if (!duplicateSnapshot.empty) {
                const existing = duplicateSnapshot.docs[0];
                return { duplicate: true, submission: { id: existing.id, ...existing.data() } };
            }
            console.log("WRITTEN: duplicate check passed");
        } catch (error) {
            console.error("WRITTEN DUPLICATE CHECK ERROR:", error);
            if (error.code === "failed-precondition") console.error("Firestore index creation link:", error.message);
            throw Object.assign(error, { lessonFlowStage: "duplicate-check" });
        }
        let uploaded = pendingWrittenUploads.get(submissionId) || [];
        if (!uploaded.length) {
            const token = await getIdToken(user);
            console.log("WRITTEN SUBMIT: token received", Boolean(token));
            uploaded = [];
            for (let index = 0; index < files.length; index += 1) {
            if (onProgress) onProgress(index + 1, files.length);
            const body = new FormData(); body.append("file", files[index]);
            let response;
            try {
                console.log("WRITTEN SUBMIT: calling worker", LESSONFLOW_FILES_API + "/upload/written");
                response = await fetch(LESSONFLOW_FILES_API + "/upload/written", { method: "POST", headers: { Authorization: "Bearer " + token }, body: body });
                console.log("WRITTEN SUBMIT: worker response", response.status);
            } catch (error) {
                console.error("WRITTEN WORKER UPLOAD ERROR:", error);
                throw Object.assign(error, { code: "files-network", lessonFlowStage: "worker-upload" });
            }
            let payload = {};
            try { payload = await response.json(); } catch (error) { payload = {}; }
            if (!response.ok || !payload.ok || !payload.file) {
                console.error("WORKER ERROR RESPONSE:", response.status, payload);
                const workerError = Object.assign(new Error(payload.error || payload.message || "upload-failed"), { code: "files-http", status: response.status, workerMessage: payload.error || payload.message || "", lessonFlowStage: "worker-upload" });
                console.error("WRITTEN WORKER UPLOAD ERROR:", workerError);
                throw workerError;
            }
            const file = payload.file;
                uploaded.push({
                    publicId: file.publicId,
                    assetId: file.assetId ?? null,
                    resourceType: file.resourceType ?? "image",
                    deliveryType: file.type ?? "authenticated",
                    format: file.format ?? null,
                    bytes: file.bytes ?? null,
                    width: file.width ?? null,
                    height: file.height ?? null,
                    version: file.version ?? null,
                    createdAt: file.createdAt ?? null
                });
            }
            pendingWrittenUploads.set(submissionId, uploaded);
        } else {
            console.log("WRITTEN SUBMIT: reusing uploaded file metadata", uploaded.length);
        }
        const required = { teacherUid: lesson.teacherUid, studentUid: user.uid, lessonId: lesson.lessonId, blockId: block.id };
        const missingField = Object.entries(required).find(function(entry) { return !entry[1]; });
        if (missingField) {
            console.error("WRITTEN SUBMISSION MISSING REQUIRED FIELD:", missingField[0]);
            throw Object.assign(new Error("missing-required-submission-field"), { code: "invalid-submission", field: missingField[0], lessonFlowStage: "firestore-create" });
        }
        const data = {
            teacherUid: required.teacherUid,
            studentUid: required.studentUid,
            studentDocId: lesson.studentDocId ?? lesson.studentId ?? null,
            studentName: lesson.studentName ?? currentProfile?.name ?? "Ученик",
            lessonId: required.lessonId,
            blockId: required.blockId,
            title: block.title || "Письменная работа",
            type: "written",
            status: "submitted",
            teacherComment: "",
            reviewedAt: null,
            resubmissionCount: previousSubmission?.status === "returned" ? Number(previousSubmission.resubmissionCount || 0) + 1 : Number(previousSubmission?.resubmissionCount || 0),
            files: uploaded,
            fileCount: uploaded.length,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        };
        console.log("WRITTEN SUBMISSION PAYLOAD:", data);
        Object.entries(data).forEach(function([key, value]) { if (value === undefined) console.warn("UNDEFINED SUBMISSION FIELD:", key); });
        data.files.forEach(function(file, index) { Object.entries(file).forEach(function([key, value]) { if (value === undefined) console.warn("UNDEFINED SUBMISSION FILE FIELD:", index, key); }); });
        try {
            await setDoc(submissionRef, data);
            pendingWrittenUploads.delete(submissionId);
            console.log("WRITTEN SUBMISSION SAVED");
        } catch (error) {
            console.error("WRITTEN FIRESTORE CREATE ERROR:", error);
            throw Object.assign(error, { lessonFlowStage: "firestore-create" });
        }
        return { ok: true, submission: { id: submissionId, ...data } };
    },
    async loadWrittenSubmissionFiles(submissionId, fileCount, onProgress) {
        const user = auth.currentUser;
        if (!user || currentProfile?.role !== "teacher") throw Object.assign(new Error("NO_AUTH_TEACHER"), { code: "not-authenticated" });
        const idToken = await getIdToken(user);
        const blobs = [];
        for (let index = 0; index < fileCount; index += 1) {
            if (onProgress) onProgress(index + 1, fileCount);
            const endpoint = LESSONFLOW_FILES_API + "/view/written?submissionId=" + encodeURIComponent(submissionId) + "&fileIndex=" + index;
            let response;
            try { response = await fetch(endpoint, { headers: { Authorization: "Bearer " + idToken } }); }
            catch (error) { console.error("Written review network error:", error); throw Object.assign(error, { code: "files-network" }); }
            if (!response.ok) {
                console.error("Written review response error:", response.status, { submissionId: submissionId, fileIndex: index });
                throw Object.assign(new Error("written-view-failed"), { status: response.status, fileIndex: index });
            }
            blobs.push(await response.blob());
        }
        return blobs;
    },
    async reviewWrittenSubmission(submission, status, teacherComment) {
        if (!auth.currentUser || currentProfile?.role !== "teacher") throw new Error("not-authenticated-teacher");
        if (!["verified", "returned"].includes(status)) throw new Error("invalid-written-status");
        const progressRef = doc(db, "currentLessons", submission.studentUid, "progress", "state");
        const progressSnapshot = await getDoc(progressRef);
        const progress = progressSnapshot.exists() ? progressSnapshot.data() : {};
        const completedBlockIds = Array.isArray(progress.completedBlockIds) ? progress.completedBlockIds.slice() : [];
        const blockIndex = completedBlockIds.indexOf(submission.blockId);
        if (status === "verified" && blockIndex < 0) completedBlockIds.push(submission.blockId);
        if (status === "returned" && blockIndex >= 0) completedBlockIds.splice(blockIndex, 1);
        const writtenChecks = { ...(progress.writtenChecks || {}), [submission.blockId]: { status: status, teacherComment: teacherComment || "", reviewedAt: serverTimestamp() } };
        const batch = writeBatch(db);
        batch.set(doc(db, "submissions", submission.id), { status: status, teacherComment: teacherComment || "", reviewedAt: serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true });
        batch.set(progressRef, { completedBlockIds: completedBlockIds, writtenChecks: writtenChecks, updatedAt: serverTimestamp() }, { merge: true });
        await batch.commit();
    },
    async uploadAudioSubmission(lesson, block, audioFile, durationSec, previousSubmission) {
        const user = auth.currentUser;
        if (!user || currentProfile?.role !== "student") throw Object.assign(new Error("NO_AUTH_USER"), { code: "not-authenticated" });
        const submissionId = [user.uid, lesson.lessonId || lesson.cloudId || "lesson", block.id].join("__");
        const duplicateSnapshot = await getDocs(query(collection(db, "submissions"), where("studentUid", "==", user.uid), where("lessonId", "==", lesson.lessonId), where("blockId", "==", block.id), where("status", "==", "submitted")));
        if (!duplicateSnapshot.empty) { const existing = duplicateSnapshot.docs[0]; return { duplicate: true, submission: { id: existing.id, ...existing.data() } }; }
        let uploaded = pendingAudioUploads.get(submissionId) || null;
        if (!uploaded) {
            const idToken = await getIdToken(user); const body = new FormData(); body.append("file", audioFile);
            let response;
            try { response = await fetch(LESSONFLOW_FILES_API + "/upload/audio", { method: "POST", headers: { Authorization: "Bearer " + idToken }, body: body }); }
            catch (error) { console.error("Audio submission upload error:", error); throw Object.assign(error, { code: "files-network" }); }
            let payload = {}; try { payload = await response.json(); } catch (error) { payload = {}; }
            if (!response.ok || !payload.ok || !payload.file) { console.error("Audio Worker error:", response.status, payload); throw Object.assign(new Error(payload.error || "audio-upload-failed"), { status: response.status, workerMessage: payload.error || "" }); }
            const file = payload.file;
            uploaded = { publicId: file.publicId, assetId: file.assetId ?? null, resourceType: file.resourceType ?? "video", deliveryType: file.deliveryType ?? file.type ?? "authenticated", format: file.format ?? null, bytes: file.bytes ?? null, duration: file.duration ?? durationSec ?? null, version: file.version ?? null, createdAt: file.createdAt ?? null };
            pendingAudioUploads.set(submissionId, uploaded);
        }
        const required = { teacherUid: lesson.teacherUid, studentUid: user.uid, lessonId: lesson.lessonId, blockId: block.id };
        const missing = Object.entries(required).find(function(entry) { return !entry[1]; }); if (missing) throw Object.assign(new Error("missing-audio-field"), { code: "invalid-submission", field: missing[0] });
        const data = { teacherUid: required.teacherUid, studentUid: required.studentUid, studentDocId: lesson.studentDocId ?? lesson.studentId ?? null, studentName: lesson.studentName ?? currentProfile?.name ?? "Ученик", lessonId: required.lessonId, blockId: required.blockId, title: block.title || "Аудиоответ", type: "audio", status: "submitted", teacherComment: "", reviewedAt: null, resubmissionCount: previousSubmission?.status === "returned" ? Number(previousSubmission.resubmissionCount || 0) + 1 : Number(previousSubmission?.resubmissionCount || 0), files: [uploaded], fileCount: 1, durationSec: Number(uploaded.duration ?? durationSec ?? 0), createdAt: serverTimestamp(), updatedAt: serverTimestamp() };
        await setDoc(doc(db, "submissions", submissionId), data); pendingAudioUploads.delete(submissionId);
        return { ok: true, submission: { id: submissionId, ...data } };
    },
    async loadAudioSubmissionFile(submissionId) {
        const user = auth.currentUser; if (!user || currentProfile?.role !== "teacher") throw Object.assign(new Error("NO_AUTH_TEACHER"), { code: "not-authenticated" });
        const idToken = await getIdToken(user); const endpoint = LESSONFLOW_FILES_API + "/view/audio?submissionId=" + encodeURIComponent(submissionId) + "&fileIndex=0";
        let response; try { response = await fetch(endpoint, { headers: { Authorization: "Bearer " + idToken } }); } catch (error) { throw Object.assign(error, { code: "files-network" }); }
        if (!response.ok) throw Object.assign(new Error("audio-view-failed"), { status: response.status }); return response.blob();
    },
    async reviewAudioSubmission(submission, status, teacherComment) {
        if (!auth.currentUser || currentProfile?.role !== "teacher") throw new Error("not-authenticated-teacher");
        const progressRef = doc(db, "currentLessons", submission.studentUid, "progress", "state"); const progressSnapshot = await getDoc(progressRef); const progress = progressSnapshot.exists() ? progressSnapshot.data() : {};
        const completedBlockIds = Array.isArray(progress.completedBlockIds) ? progress.completedBlockIds.slice() : []; const index = completedBlockIds.indexOf(submission.blockId);
        if (status === "verified" && index < 0) completedBlockIds.push(submission.blockId); if (status === "returned" && index >= 0) completedBlockIds.splice(index, 1);
        const audioChecks = { ...(progress.audioChecks || {}), [submission.blockId]: { status: status, teacherComment: teacherComment || "", reviewedAt: serverTimestamp() } };
        const batch = writeBatch(db); batch.set(doc(db, "submissions", submission.id), { status: status, teacherComment: teacherComment || "", reviewedAt: serverTimestamp(), updatedAt: serverTimestamp() }, { merge: true }); batch.set(progressRef, { completedBlockIds: completedBlockIds, audioChecks: audioChecks, updatedAt: serverTimestamp() }, { merge: true }); await batch.commit();
    },
    async inspectHistoryLessonDeletion(studentUid, historyId, lessonId) {
        if (!auth.currentUser || currentProfile?.role !== "teacher") throw new Error("not-authenticated-teacher");
        const historyRef = doc(db, "lessonHistory", studentUid, "lessons", historyId); const historySnapshot = await getDoc(historyRef);
        if (!historySnapshot.exists()) throw Object.assign(new Error("history-not-found"), { code: "not-found" });
        if (historySnapshot.data().teacherUid !== auth.currentUser.uid) throw Object.assign(new Error("history-owner-mismatch"), { code: "permission-denied" });
        const submissionsSnapshot = await getDocs(query(collection(db, "submissions"), where("teacherUid", "==", auth.currentUser.uid)));
        const related = submissionsSnapshot.docs.filter(function(submissionDoc) { const data = submissionDoc.data(); return data.studentUid === studentUid && data.lessonId === lessonId; });
        return { submissionCount: related.length };
    },
    async deleteHistoryLesson(studentUid, historyId, lessonId, deleteSubmissions) {
        if (!auth.currentUser || currentProfile?.role !== "teacher") throw new Error("not-authenticated-teacher");
        const historyRef = doc(db, "lessonHistory", studentUid, "lessons", historyId); const historySnapshot = await getDoc(historyRef);
        if (!historySnapshot.exists()) return;
        if (historySnapshot.data().teacherUid !== auth.currentUser.uid) throw Object.assign(new Error("history-owner-mismatch"), { code: "permission-denied" });
        const batch = writeBatch(db); batch.delete(historyRef);
        if (deleteSubmissions) {
            const submissionsSnapshot = await getDocs(query(collection(db, "submissions"), where("teacherUid", "==", auth.currentUser.uid)));
            submissionsSnapshot.docs.filter(function(submissionDoc) { const data = submissionDoc.data(); return data.studentUid === studentUid && data.lessonId === lessonId; }).forEach(function(submissionDoc) { batch.delete(submissionDoc.ref); });
        }
        await batch.commit();
    }
};

async function signOutFirebaseUser() {
    stopFirestoreListeners();
    currentProfile = null;
    await signOut(auth);
    loginForm.reset();
    loginError.textContent = "";
    showScreen(loginScreen);
}

window.addEventListener("lessonflow:demo-start", function() {
    demoMode = true;
    window.lessonFlowDemoMode = true;
    stopFirestoreListeners();
});

window.addEventListener("lessonflow:demo-end", async function() {
    demoMode = false;
    window.lessonFlowDemoMode = false;
    if (!auth.currentUser || !currentProfile) return;
    if (currentProfile.role === "student") subscribeStudentLesson(auth.currentUser.uid);
    if (currentProfile.role === "teacher") {
        await subscribeTeacherFeedback();
        subscribeTeacherStudents();
        subscribeTeacherMaterials();
        subscribeTeacherSources();
        subscribeTeacherSchedule();
        subscribeTeacherSubmissions();
    }
    subscribeMessagingOverview();
});

window.addEventListener("lessonflow:firebase-login", async function(event) {
    demoMode = false;
    loginError.textContent = "";
    const email = event.detail.email;
    const password = event.detail.password;

    loginButton.disabled = true;
    loginButton.textContent = "Входим...";

    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Firebase sign-in failed", error);
        const messages = {
            "auth/invalid-credential": "Неверный email или пароль",
            "auth/user-disabled": "Этот аккаунт отключён",
            "auth/too-many-requests": "Слишком много попыток. Попробуйте позже."
        };
        loginError.textContent = messages[error.code] || ("Ошибка входа: " + (error.code || "unknown"));
    } finally {
        loginButton.disabled = false;
        loginButton.textContent = "Войти";
    }
});

logoutButton.addEventListener("click", async function() {
    logoutButton.disabled = true;
    try {
        await signOutFirebaseUser();
    } catch (error) {
        loginError.textContent = "Не удалось выйти. Попробуйте ещё раз.";
    } finally {
        logoutButton.disabled = false;
    }
});

document.addEventListener("click", async function(event) {
    const button = event.target.closest(".logout-button");
    if (!button || !auth.currentUser || demoMode) return;
    if (["back-to-teacher", "back-from-students", "back-from-misha", "back-from-student-lesson"].includes(button.id)) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    button.disabled = true;
    try {
        await signOutFirebaseUser();
    } catch (error) {
        button.disabled = false;
        showProfileMessage("Не удалось выйти", "Попробуйте ещё раз.");
    }
}, true);

onAuthStateChanged(auth, async function(user) {
    demoMode = demoMode || Boolean(window.lessonFlowDemoMode);
    if (user && !demoMode) {
        const uid = user.uid;
        console.log("AUTH UID:", uid);
        console.log("PROFILE PATH:", `users/${uid}`);
        try {
            const profileRef = doc(db, "users", uid);
            const profileSnap = await getDoc(profileRef);
            console.log("PROFILE EXISTS:", profileSnap.exists());
            if (auth.currentUser?.uid !== uid || demoMode) return;

            if (!profileSnap.exists()) {
                currentProfile = null;
                showProfileMessage("Профиль не настроен", "Для этого аккаунта не настроен профиль LessonFlow.", user.email);
                return;
            }

            const profile = profileSnap.data();
            console.log("PROFILE DATA:", profile);
            if (profile.role !== "teacher" && profile.role !== "student") {
                currentProfile = null;
                showProfileMessage("Неизвестная роль пользователя.", "Обратитесь к администратору LessonFlow.", user.email);
                return;
            }

            currentProfile = { uid: uid, email: user.email, ...profile };
            window.dispatchEvent(new CustomEvent("lessonflow:firebase-profile", { detail: currentProfile }));
            if (profile.role === "student") subscribeStudentLesson(uid);
            if (profile.role === "teacher") {
                await subscribeTeacherFeedback();
                subscribeTeacherStudents();
                subscribeTeacherMaterials();
                subscribeTeacherSources();
                subscribeTeacherSchedule();
                subscribeTeacherSubmissions();
            }
            subscribeMessagingOverview();
        } catch (error) {
            console.error("Firestore profile error:", error);
            currentProfile = null;
            showProfileMessage(
                "Не удалось загрузить профиль",
                "Ошибка загрузки профиля: " + (error.code || "unknown"),
                user.email
            );
        }
    } else if (!user && !demoMode) {
        stopFirestoreListeners();
        currentProfile = null;
        showScreen(loginScreen);
    }
});
