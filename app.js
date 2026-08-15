const loginScreen = document.getElementById("login-screen");
const teacherScreen = document.getElementById("teacher-screen");
const studentScreen = document.getElementById("student-screen");
const vocabularyTrainerScreen = document.getElementById("vocabulary-trainer-screen");
const studentLessonScreen = document.getElementById("student-lesson-screen");
const lessonScreen = document.getElementById("lesson-screen");
const studentsScreen = document.getElementById("students-screen");
const libraryScreen = document.getElementById("library-screen");
const calendarScreen = document.getElementById("calendar-screen");
const teacherLogin = document.getElementById("teacher-login");
const mishaScreen = document.getElementById("misha-screen");
const studentLogin = document.getElementById("student-login");
const studentsNav = document.getElementById("students-nav");
const libraryNav = document.getElementById("library-nav");
const backFromLibrary = document.getElementById("back-from-library");
const backFromStudents = document.getElementById("back-from-students");
const openMisha = document.getElementById("open-misha");
const backFromMisha = document.getElementById("back-from-misha");
const prepareMishaLesson = document.getElementById("prepare-misha-lesson");
const prepareButtons = document.querySelectorAll(".prepare-button");
const studentTabs = document.querySelectorAll("#misha-screen .student-tab");
const studentTabPanels = document.querySelectorAll("#misha-screen .student-tab-panel");
const firebaseStudentsGrid = document.getElementById("firebase-students-grid");
const demoStudentsGrid = document.getElementById("demo-students-grid");
const firebaseTodayList = document.getElementById("firebase-today-list");
const demoTodayList = document.getElementById("demo-today-list");
const todayLessonCount = document.getElementById("today-lesson-count");
const todayDate = document.getElementById("today-date");
const todayClock = document.getElementById("today-clock");
const todaySummary = document.getElementById("today-summary");
const todayTasksList = document.getElementById("today-tasks-list");
const addStudentButton = document.getElementById("add-student-button");
const studentModal = document.getElementById("student-modal");
const studentModalTitle = document.getElementById("student-modal-title");
const studentForm = document.getElementById("student-form");
const studentWeeklyScheduleRows = document.getElementById("student-weekly-schedule-rows");
const studentWeeklyScheduleError = document.getElementById("student-weekly-schedule-error");
const studentScheduleStartLabel = document.getElementById("student-schedule-start-label");
const studentAccount = document.getElementById("student-account");
const studentAccountStatus = document.getElementById("student-account-status");
const studentAccountSelectRow = document.getElementById("student-account-select-row");
const createStudentAccountButton = document.getElementById("create-student-account");
const studentAccountModal = document.getElementById("student-account-modal");
const studentAccountForm = document.getElementById("student-account-form");
const studentAccountError = document.getElementById("student-account-error");
const studentAccountResult = document.getElementById("student-account-result");
const studentsStatus = document.getElementById("students-status");
const deleteStudentModal = document.getElementById("delete-student-modal");
const deleteStudentMessage = document.getElementById("delete-student-message");
const historyLessonModal = document.getElementById("history-lesson-modal");
const historyLessonContent = document.getElementById("history-lesson-content");
const focusItemModal = document.getElementById("focus-item-modal");
const focusItemForm = document.getElementById("focus-item-form");
const focusItemError = document.getElementById("focus-item-error");
const findMoreModal = document.getElementById("find-more-modal");
const findMoreMessage = document.getElementById("find-more-message");
const youtubeSearchPanel = document.getElementById("youtube-search-panel");
const youtubeSearchForm = document.getElementById("youtube-search-form");
const youtubeSearchQuery = document.getElementById("youtube-search-query");
const youtubeSearchButton = document.getElementById("youtube-search-button");
const youtubeSearchStatus = document.getElementById("youtube-search-status");
const youtubeSearchResults = document.getElementById("youtube-search-results");
const exerciseSearchPanel = document.getElementById("exercise-search-panel");
const exerciseSearchQuery = document.getElementById("exercise-search-query");
const exerciseResourceUrl = document.getElementById("exercise-resource-url");
const exerciseResourceStatus = document.getElementById("exercise-resource-status");
const exerciseResourceActions = document.getElementById("exercise-resource-actions");

const lessonStudentName = document.getElementById("lesson-student-name");

const backToTeacher = document.getElementById("back-to-teacher");

const logoutButtons = document.querySelectorAll(".logout-button");
const materialSearch = document.getElementById("material-search");
const levelFilter = document.getElementById("level-filter");
const subjectFilter = document.getElementById("subject-filter");
const typeFilterButtons = document.querySelectorAll("#type-filters .filter-button");
const materialsGrid = document.getElementById("materials-grid");
const libraryEmpty = document.getElementById("library-empty");
const libraryResultCount = document.getElementById("library-result-count");
const materialModal = document.getElementById("material-modal");
const materialForm = document.getElementById("material-form");
const addMaterialButton = document.getElementById("add-material-button");
const cancelMaterialButton = document.getElementById("cancel-material");
const deleteMaterialModal = document.getElementById("delete-material-modal");
const lessonStudentMeta = document.getElementById("lesson-student-meta");
const lessonContextList = document.getElementById("lesson-context-list");
const preparationProgramPlan = document.getElementById("preparation-program-plan");
const preparationProgramPlanContent = document.getElementById("preparation-program-plan-content");
let activePreparationProgram = null;
document.body.append(document.getElementById("source-link-modal"), document.getElementById("source-unlink-modal"), document.getElementById("library-add-choice-modal"));
const recommendedMaterials = document.getElementById("recommended-materials");
const lessonPlanElement = document.getElementById("lesson-plan");
const emptyLesson = document.getElementById("empty-lesson");
const lessonTotalTime = document.getElementById("lesson-total-time");
const lessonSaveStatus = document.getElementById("lesson-save-status");
const customBlockModal = document.getElementById("custom-block-modal");
const customBlockForm = document.getElementById("custom-block-form");
const cancelCustomBlock = document.getElementById("cancel-custom-block");
const studentChoiceModal = document.getElementById("student-choice-modal");
const studentChoiceButtons = document.querySelectorAll("[data-lesson-student]");
const cancelStudentChoice = document.getElementById("cancel-student-choice");
const saveDraftButton = document.getElementById("save-draft");
const publishLessonButton = document.getElementById("publish-lesson");
const newMaterialType = document.getElementById("new-material-type");
const newMaterialLink = document.getElementById("new-material-link");
const checkMaterialPreview = document.getElementById("check-material-preview");
const previewModal = document.getElementById("preview-modal");
const previewTitle = document.getElementById("preview-title");
const previewMeta = document.getElementById("preview-meta");
const previewFrame = document.getElementById("preview-frame");
const previewPlaceholder = document.getElementById("preview-placeholder");
const previewNewTab = document.getElementById("preview-new-tab");
const previewWarning = document.getElementById("preview-warning");
const previewSaveYoutube = document.getElementById("preview-save-youtube");
const closePreviewButton = document.getElementById("close-preview");
const closePreviewIcon = document.getElementById("close-preview-icon");
const openYouglishButton = document.getElementById("open-youglish");
const youglishModal = document.getElementById("youglish-modal");
const youglishSearchForm = document.getElementById("youglish-search-form");
const youglishQuery = document.getElementById("youglish-query");
const youglishLanguage = document.getElementById("youglish-language");
const youglishAccent = document.getElementById("youglish-accent");
const youglishAccentLabel = document.getElementById("youglish-accent-label");
const youglishSearchButton = document.getElementById("youglish-search-button");
const youglishStatus = document.getElementById("youglish-status");
const youglishPrevious = document.getElementById("youglish-previous");
const youglishReplay = document.getElementById("youglish-replay");
const youglishNext = document.getElementById("youglish-next");
const youglishSpeed = document.getElementById("youglish-speed");
const youglishExampleCount = document.getElementById("youglish-example-count");
const youglishInstruction = document.getElementById("youglish-instruction");
const addYouglishToLesson = document.getElementById("add-youglish-to-lesson");
const youglishLessonOptions = document.getElementById("youglish-lesson-options");
const closeYouglishButton = document.getElementById("close-youglish");
const closeYouglishIcon = document.getElementById("close-youglish-icon");
const studentPublishedSummary = document.getElementById("student-published-summary");
const studentLessonTitle = document.getElementById("student-lesson-title");
const studentLessonMeta = document.getElementById("student-lesson-meta");
const studentLessonBlocks = document.getElementById("student-lesson-blocks");
const studentProgressText = document.getElementById("student-progress-text");
const studentRemainingText = document.getElementById("student-remaining-text");
const studentProgressFill = document.getElementById("student-progress-fill");
const backFromStudentLesson = document.getElementById("back-from-student-lesson");
const backToTeacherPreview = document.getElementById("back-to-teacher-preview");
const viewAsStudentButton = document.getElementById("view-as-student");
const reflectionOptions = document.querySelectorAll("#reflection-options [data-reflection]");
const repeatRequestButton = document.getElementById("repeat-request");
const studentGameModal = document.getElementById("student-game-modal");
const studentGameFrame = document.getElementById("student-game-frame");
const studentGameOpen = document.getElementById("student-game-open");
const studentGameOpenFooter = document.getElementById("student-game-open-footer");
const todayMishaResult = document.getElementById("today-misha-result");
const mishaLastResult = document.getElementById("misha-last-result");
const presentPerfectStatus = document.getElementById("present-perfect-status");
const firebaseLoginFormGuard = document.getElementById("firebase-login-form");
const firebaseLoginError = document.getElementById("login-error");
const firebaseLoginEmail = document.getElementById("login-email");
const firebaseLoginPassword = document.getElementById("login-password");

console.log("YouTube config loaded:", Boolean(window.YOUTUBE_API_KEY));

let youglishPlayer = null;
let youglishReady = false;
let lastYouglishSearch = null;

const demoMaterials = [
    { title: "Комарова 9 класс", type: "Учебник", subject: "Английский", level: "9 класс", topic: "Present Perfect", description: "Module 3, p. 44–46" },
    { title: "Present Perfect vs Past Simple", type: "Рабочий лист", subject: "Английский", level: "B1", topic: "Present Perfect", description: "Grammar practice" },
    { title: "Irregular verbs", type: "Онлайн-игра", subject: "Английский", service: "Wordwall", level: "9 класс", topic: "Past Simple", description: "Practice irregular verbs" },
    { title: "Present Perfect explained", type: "Видео", subject: "Английский", service: "YouTube", level: "B1", topic: "Present Perfect", description: "Short grammar video", link: "https://www.youtube.com/watch?v=ysz5S6PUM-U" },
    { title: "Summer Vocabulary Game", type: "Мой сайт", subject: "Английский", level: "9 класс", topic: "Travel", description: "Interactive vocabulary practice" },
    { title: "在 / 正在", type: "Рабочий лист", subject: "Китайский", level: "HSK 2", topic: "Китайская грамматика", description: "Practice worksheet" }
];
let materials = demoMaterials;
let cloudMaterials = [];
let editingMaterialId = null;
let deletingMaterialId = null;
let recommendationLimit = 6;
let recommendationFocusId = null;
let findMoreFocusItem = null;
let previewYoutubeMaterial = null;
let checkedExerciseMaterial = null;
let activeGameBlock = null;
let gameLessonScrollY = 0;

let activeMaterialType = "all";
let selectedLessonStudent = null;
let pendingLibraryMaterial = null;
let teacherStudentPreview = false;
let activePublishedLesson = null;
let studentDashboardData = { events: [], program: null, vocabulary: null, vocabularyDictionary: [], scheduleError: null, programError: null, vocabularyError: null, vocabularyDictionaryError: null };
let studentVocabularyFilter = "all";
let studentVocabularySearch = "";
let studentLessonReturnSection = "home";
let activeVocabularySession = null;
let vocabularySessionIndex = 0;
let vocabularySessionResults = { know: 0, hard: 0, again: 0 };
let vocabularyAnswerBusy = false;
let teacherReturnScreen = teacherScreen;
let vocabularyTrainerMode = "formal";
let freeVocabularyReviewCards = [];
let freeVocabularyReviewIndex = 0;
let freeVocabularyReviewInitialCount = 0;
let studentCalendarAnchor = new Date();
let demoMode = false;
let firebaseProfile = null;
let cloudProgress = { completedBlockIds: [], selfAssessment: "", repeatRequest: false, externalChecks: {} };
let cloudStudents = [];
let selectedStudentRecord = null;
let teacherStudentRouteActive = false;
let activeLearningProgram = null;
let activeVocabularyProgram = null;
let checkedVocabularyImport = null;
let vocabularyImportBusy = false;
let activeStudentSchedule = null;
let checkedProgramImport = null;
let pendingArchiveProgramId = null;
let programImportBusy = false;
let editingStudentId = null;
let studentAccountRecords = [];
let studentAccountCreating = false;
let deletingStudent = null;
let cloudLessonHistory = [];
let cloudFocusItems = [];
let focusStatusFilter = "all";
let editingFocusItemId = null;
let cloudScheduleEvents = [];
let cloudSubmissions = [];
let messagingConversations = [];
let activeMessagingConversationId = null;
let activeMessagingMessages = [];
let messagingError = "";
let messagingSendBusy = false;
let messagingStickToBottom = true;
let calendarWeekStart = startOfWeek(new Date());
let editingScheduleEventId = null;
let selectedScheduleEvent = null;
let preparingScheduleEventId = null;
let preparingPlanLessonContext = null;
let activePreparationPlanLesson = null;
let preparationPlanLoadToken = 0;
let teacherSources = [];
let linkingSourceDefinition = null;
let unlinkingSource = null;
let programLibrarySearchTerms = [];
let writtenSubmissionBlock = null;
let writtenSubmissionFiles = [];
let writtenReviewUrls = [];
let writtenReviewIndex = 0;
let activeWrittenReviewSubmission = null;
let audioSubmissionBlock = null;
let audioSubmissionFile = null;
let audioSubmissionDuration = 0;
let audioPreviewUrl = "";
let worksheetUploadFiles = [];
let worksheetViewerMaterial = null;
let worksheetViewerPageIndex = 0;
let worksheetViewerZoom = 1;
let worksheetViewerObjectUrl = "";
const worksheetThumbnailUrls = new Map();
let audioMediaRecorder = null;
let audioMediaStream = null;
let audioRecordingChunks = [];
let audioRecordingStartedAt = 0;
let audioRecordingTimer = null;
let activeAudioReviewSubmission = null;
let audioReviewUrl = "";
let activeWordwallReviewSubmission = null;
let editingLessonBlockId = null;
let pendingLessonBlockEdit = null;
let deletingHistoryLesson = null;
let deletingHistorySubmissionCount = 0;
let historyDeleteMessage = "";

const studentProfiles = {
    "Миша": {
        meta: ["9 класс · Английский", "Учебник: Комарова", "Тема: Present Perfect"],
        level: "9 класс",
        topic: "Present Perfect",
        reviewTopics: ["Irregular verbs"],
        context: [
            "Irregular verbs — нужно повторить",
            "since / for — тренируем",
            "Present Perfect — сейчас изучаем",
            "последнее ДЗ: Workbook p. 8 ex. 3 — не выполнено"
        ]
    },
    "Аня": {
        meta: ["HSK 2 · Китайский", "Тема: 在 / 正在"],
        level: "HSK 2",
        topic: "Китайская грамматика",
        reviewTopics: [],
        context: ["Порядок слов — нужно повторить", "在 / 正在 — сейчас изучаем"]
    },
    "Лена": {
        meta: ["B1 · Английский", "Тема: Travel"],
        level: "B1",
        topic: "Travel",
        reviewTopics: [],
        context: ["Travel vocabulary — сейчас изучаем", "Домашнее задание выполнено"]
    }
};

let lessonPlans = {};
try {
    lessonPlans = JSON.parse(localStorage.getItem("lessonFlowLessonPlans")) || {};
} catch (error) {
    lessonPlans = {};
}
let lessonDrafts = {};
try { lessonDrafts = JSON.parse(localStorage.getItem("lessonFlowLessonDrafts")) || {}; } catch (error) { lessonDrafts = {}; }
let preparationWorkspaceTab = "upcoming";

let publishedLessons = {};
let studentLessonState = {};
try {
    publishedLessons = JSON.parse(localStorage.getItem("lessonFlowPublishedLessons")) || {};
    studentLessonState = JSON.parse(localStorage.getItem("lessonFlowStudentLessonState")) || {};
} catch (error) {
    publishedLessons = {};
    studentLessonState = {};
}


function showScreen(screen) {

    if (screen === studentScreen && teacherStudentRouteActive) screen = mishaScreen;

    document.querySelectorAll(".screen").forEach(function(item) {
        item.classList.remove("active");
    });

    screen.classList.add("active");
    document.body.classList.toggle("lessonflow-custom-cursor-active", Boolean(screen && (screen.classList.contains("teacher-app") || screen === studentScreen || screen === vocabularyTrainerScreen || screen === studentLessonScreen)));
    if (screen === teacherScreen) requestAnimationFrame(function() { const hero = document.querySelector(".teacher-today-hero"); const scheduleButton = Array.from(hero?.querySelectorAll(".teacher-hero-actions button") || []).find(function(button) { return button.textContent.trim() === "Открыть ученика"; }); if (scheduleButton) scheduleButton.textContent = "К расписанию"; if (hero && !hero.querySelector(".teacher-hero-date")) { const eyebrow = hero.querySelector(".teacher-eyebrow"); const date = document.createElement("p"); date.className = "teacher-hero-date"; date.textContent = formatFullDate(new Date()); eyebrow?.after(date); } });
    if (screen?.classList.contains("teacher-app")) updateTeacherShellActiveState(screen);
}

document.addEventListener("click", function(event) { const button = event.target.closest(".teacher-today-hero .teacher-hero-actions button"); if (button?.textContent.trim() === "К расписанию") { event.preventDefault(); event.stopImmediatePropagation(); openTeacherDestination("calendar"); } }, true);

function teacherScreenNavKey(screen) {
    if (!screen) return "today";
    if (screen.dataset.teacherNav) return screen.dataset.teacherNav;
    return ({ "teacher-screen": "today", "calendar-screen": "calendar", "students-screen": "students", "misha-screen": "students", "library-screen": "library", "lesson-screen": "preparation" })[screen.id] || "today";
}

function updateTeacherShellActiveState(screen) {
    const active = teacherScreenNavKey(screen);
    document.querySelectorAll(".teacher-global-sidebar [data-teacher-destination]").forEach(function(button) { button.classList.toggle("is-active", button.dataset.teacherDestination === active); });
}

function openTeacherDestination(destination) {
    if (destination === "today") { renderCloudToday(); teacherScreen.dataset.teacherNav = "today"; showScreen(teacherScreen); }
    else if (destination === "calendar") { renderCalendar(); calendarScreen.dataset.teacherNav = "calendar"; showScreen(calendarScreen); }
    else if (destination === "students") { renderCloudStudents(); studentsScreen.dataset.teacherNav = "students"; showScreen(studentsScreen); }
    else if (destination === "library") { materials = isFirebaseMode() ? cloudMaterials : demoMaterials; renderMaterials(); libraryScreen.dataset.teacherNav = "library"; showScreen(libraryScreen); }
    else if (destination === "preparation") { preparationWorkspaceTab = "upcoming"; studentsScreen.dataset.teacherNav = "preparation"; renderPreparationWorkspace(); showScreen(studentsScreen); }
    else if (destination === "messages") { studentsScreen.dataset.teacherNav = "messages"; renderTeacherMessagesWorkspace(); showScreen(studentsScreen); }
}

function createTeacherSidebar(screen) {
    const sidebar = document.createElement("aside"); sidebar.className = "teacher-global-sidebar teacher-sidebar";
    const brand = document.createElement("div"); brand.className = "teacher-sidebar-brand"; addTextElement(brand, "span", "", "LF"); addTextElement(brand, "strong", "", "LessonFlow"); sidebar.appendChild(brand);
    const nav = document.createElement("nav"); nav.className = "teacher-sidebar-nav"; nav.setAttribute("aria-label", "Навигация преподавателя"); [["today", "Сегодня"], ["calendar", "Календарь"], ["students", "Ученики"], ["messages", "Сообщения"], ["library", "Библиотека"], ["preparation", "Подготовка уроков"]].forEach(function(item) { const button = addTextElement(nav, "button", "teacher-sidebar-link", item[1]); button.type = "button"; button.dataset.teacherDestination = item[0]; if (item[0] === "messages") { const badge = addTextElement(button, "b", "teacher-message-nav-badge", ""); badge.hidden = true; } button.addEventListener("click", function() { openTeacherDestination(item[0]); }); }); sidebar.appendChild(nav);
    const art = document.createElement("div"); art.className = "teacher-sidebar-art"; const image = document.createElement("img"); image.src = "assets/student-dashboard/illustrations/sidebar-london.png"; image.alt = ""; art.appendChild(image); sidebar.appendChild(art); screen.prepend(sidebar);
}

function initializeTeacherDesignSystem() {
    [teacherScreen, calendarScreen, studentsScreen, mishaScreen, libraryScreen, lessonScreen].forEach(function(screen) { if (!screen) return; createTeacherSidebar(screen); const oldSidebar = screen.querySelector(".app-layout > .sidebar"); if (oldSidebar) oldSidebar.classList.add("teacher-legacy-sidebar"); const topbar = screen.querySelector(":scope > .topbar"); if (topbar) topbar.classList.add("teacher-topbar"); const page = screen.querySelector(":scope > main, :scope > .app-layout > main"); if (page) page.classList.add("teacher-page"); });
    document.querySelectorAll(".teacher-app .modal-backdrop").forEach(function(modal) { modal.classList.add("teacher-modal-backdrop"); document.body.appendChild(modal); });
    updateTeacherShellActiveState(teacherScreen);
}

initializeTeacherDesignSystem();
const lessonHeaderActions = document.createElement("div"); lessonHeaderActions.className = "lesson-header-actions"; addTextElement(lessonHeaderActions, "span", "lesson-header-state", "Статус: Черновик"); lessonHeaderActions.append(saveDraftButton, publishLessonButton); document.querySelector("#lesson-screen > .teacher-topbar")?.insertBefore(lessonHeaderActions, document.getElementById("back-to-teacher"));

function verifyActiveStudentTabs(screen) {
    const activeStudentScreen = document.querySelector(".screen.active");
    const tabsContainer = screen?.querySelector(".student-tabs");
    const vocabularyTab = tabsContainer?.querySelector('[data-tab="vocabulary"]');
    if (tabsContainer) tabsContainer.classList.add("student-tabs-visible");
    if (vocabularyTab) {
        vocabularyTab.hidden = false;
        vocabularyTab.removeAttribute("aria-hidden");
        vocabularyTab.classList.add("student-vocabulary-tab-visible");
    }
    requestAnimationFrame(function() {
        const tabs = tabsContainer ? Array.from(tabsContainer.querySelectorAll(".student-tab")) : [];
        console.log("ACTIVE STUDENT SCREEN", activeStudentScreen?.id || null);
        console.log("STUDENT TABS", tabs.map(function(tab) { return tab.textContent.trim(); }));
        console.log("STUDENT VOCABULARY TAB VISIBLE", Boolean(vocabularyTab && vocabularyTab.getClientRects().length && getComputedStyle(vocabularyTab).display !== "none" && getComputedStyle(vocabularyTab).visibility !== "hidden" && Number(getComputedStyle(vocabularyTab).opacity) > 0));
    });
}

firebaseLoginFormGuard.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = firebaseLoginEmail.value.trim();
    const password = firebaseLoginPassword.value;

    if (!email || !password) {
        firebaseLoginError.textContent = "Введите email и пароль";
        return;
    }
    if (!window.lessonFlowFirebaseReady) {
        firebaseLoginError.textContent = "Модуль Firebase не загрузился. Откройте проект через локальный веб-сервер и проверьте консоль.";
        return;
    }

    window.dispatchEvent(new CustomEvent("lessonflow:firebase-login", {
        detail: { email: email, password: password }
    }));
});

window.addEventListener("lessonflow:show-screen", function(event) {
    const screen = document.getElementById(event.detail);
    if (screen) showScreen(screen);
});

window.addEventListener("lessonflow:firebase-profile", function(event) {
    const profile = event.detail;
    firebaseProfile = profile;

    if (profile.role === "teacher") {
        demoMode = false;
        materials = cloudMaterials;
        renderMaterials();
        renderCloudStudents();
        renderCloudToday();
        renderCalendar();
        renderTeacherStudentFeedback();
        showScreen(teacherScreen);
    } else if (profile.role === "student") {
        teacherStudentRouteActive = false;
        selectedStudentRecord = null;
        demoMode = false;
        document.getElementById("student-greeting").textContent = "Привет, " + (profile.name || "Миша") + "!";
        teacherStudentPreview = false;
        studentDashboardData = { ...studentDashboardData, vocabulary: null, vocabularyDictionary: [], vocabularyError: null, vocabularyDictionaryError: null, vocabularyLoading: true };
        showStudentSection("home");
        showScreen(studentScreen);
    }
});

window.addEventListener("lessonflow:cloud-lesson", function(event) {
    if (event.detail) {
        const lesson = { ...event.detail, student: event.detail.studentName || "Миша", cloudId: event.detail.cloudId };
        publishedLessons[lesson.student] = lesson;
        applyCloudProgress(lesson);
        if (lesson.status === "completed") {
            studentDashboardData.events = (studentDashboardData.events || []).map(function(item) { return item.id === lesson.scheduleEventId || item.lessonId === lesson.lessonId ? { ...item, status: "completed" } : item; });
            if (studentDashboardData.program && lesson.programId === studentDashboardData.program.id && lesson.planLessonId) {
                studentDashboardData.program.lessons = (studentDashboardData.program.lessons || []).map(function(item) { return item.id === lesson.planLessonId ? { ...item, status: "completed" } : item; });
                const next = studentDashboardData.program.lessons.find(function(item) { return !["completed", "skipped"].includes(item.status); });
                if (next) studentDashboardData.program.currentLessonNumber = next.lessonNumber;
            }
        }
    } else {
        delete publishedLessons[selectedStudentRecord?.name || "Миша"];
        activePublishedLesson = null;
    }
    if (studentScreen.classList.contains("active")) {
        const activeStudentSection = document.querySelector('#student-screen .student-nav-item.is-active[data-student-nav]')?.dataset.studentNav;
        if (["lessons", "program"].includes(activeStudentSection)) { const section = document.getElementById("student-section-content"); activeStudentSection === "lessons" ? renderStudentLessonsScreen(section) : renderStudentProgramScreen(section); applyStudentDesignSystem(section); }
        else renderStudentDashboard();
    }
    if (mishaScreen.classList.contains("active") || teacherScreen.classList.contains("active")) renderTeacherStudentFeedback();
    if (selectedStudentRecord && mishaScreen.classList.contains("active")) renderStudentCard(selectedStudentRecord);
});

window.addEventListener("lessonflow:student-schedule", function(event) {
    studentDashboardData.events = Array.isArray(event.detail) ? event.detail : [];
    if (!studentScreen.classList.contains("active")) return;
    const active = document.querySelector('#student-screen .student-nav-item.is-active[data-student-nav]')?.dataset.studentNav;
    if (active === "lessons" || active === "homework") { const section = document.getElementById("student-section-content"); section.replaceChildren(); active === "lessons" ? renderStudentLessonsScreen(section) : renderStudentHomeworkScreen(section); applyStudentDesignSystem(section); }
    else renderStudentDashboard();
});

window.addEventListener("lessonflow:cloud-progress", function(event) {
    cloudProgress = event.detail || { completedBlockIds: [], selfAssessment: "", repeatRequest: false };
    if (cloudProgress.selfAssessment === "need-practice") cloudProgress.selfAssessment = "practice";
    const lesson = publishedLessons["Миша"];
    if (lesson) applyCloudProgress(lesson);
    if (activePublishedLesson && studentLessonScreen.classList.contains("active")) renderStudentLesson();
    renderTeacherStudentFeedback();
    if (teacherScreen.classList.contains("active")) renderCloudToday();
    if (selectedStudentRecord && mishaScreen.classList.contains("active")) renderStudentCard(selectedStudentRecord);
});

window.addEventListener("lessonflow:cloud-students", function(event) {
    cloudStudents = Array.isArray(event.detail) ? event.detail : [];
    renderCloudStudents();
    renderCloudToday();
    if (selectedStudentRecord?.id) {
        selectedStudentRecord = cloudStudents.find(function(student) { return student.id === selectedStudentRecord.id; }) || selectedStudentRecord;
        if (mishaScreen.classList.contains("active")) {
            renderStudentCard(selectedStudentRecord);
            loadStudentSchedule();
        }
    }
});

window.addEventListener("lessonflow:cloud-history", function(event) {
    cloudLessonHistory = Array.isArray(event.detail) ? event.detail : [];
    if (selectedStudentRecord && mishaScreen.classList.contains("active")) renderStudentCard(selectedStudentRecord);
});

window.addEventListener("lessonflow:cloud-focus-items", function(event) {
    cloudFocusItems = Array.isArray(event.detail) ? event.detail : [];
    renderCloudStudents();
    if (selectedStudentRecord && mishaScreen.classList.contains("active")) renderStudentCard(selectedStudentRecord);
    if (selectedStudentRecord && lessonScreen.classList.contains("active")) renderLessonContext(selectedStudentRecord);
    if (selectedStudentRecord && lessonScreen.classList.contains("active")) renderRecommendedMaterials();
});

window.addEventListener("lessonflow:cloud-learning-program", function(event) {
    activeLearningProgram = event.detail || null;
    renderCloudStudents();
    if (selectedStudentRecord && mishaScreen.classList.contains("active")) renderStudentCard(selectedStudentRecord);
    if (selectedStudentRecord && lessonScreen.classList.contains("active")) {
        renderLessonContext(selectedStudentRecord);
        renderRecommendedMaterials();
    }
    renderLearningProgram();
});

window.addEventListener("lessonflow:cloud-materials", function(event) {
    cloudMaterials = (Array.isArray(event.detail) ? event.detail : []).map(function(material) {
        return { ...material, link: material.url || "" };
    });
    if (isFirebaseMode() && firebaseProfile.role === "teacher") { materials = cloudMaterials; renderMaterials(); }
    if (selectedStudentRecord && lessonScreen.classList.contains("active")) renderRecommendedMaterials();
    if (activePreparationPlanLesson && lessonScreen.classList.contains("active")) renderPreparationProgramPlan(activePreparationPlanLesson);
});

window.addEventListener("lessonflow:cloud-sources", function(event) {
    teacherSources = Array.isArray(event.detail) ? event.detail : [];
    if (libraryScreen.classList.contains("active")) renderMaterials();
    if (activePreparationPlanLesson && lessonScreen.classList.contains("active")) renderPreparationProgramPlan(activePreparationPlanLesson);
});

window.addEventListener("lessonflow:firestore-error", function(event) {
    console.error("LessonFlow Firestore:", event.detail);
    if (lessonScreen.classList.contains("active")) lessonSaveStatus.textContent = event.detail;
    else if (studentScreen.classList.contains("active")) {
        studentPublishedSummary.textContent = event.detail;
    } else {
        firebaseLoginError.textContent = event.detail;
    }
});

window.addEventListener("lessonflow:cloud-student-missing", function() {
    if (lessonScreen.classList.contains("active")) lessonSaveStatus.textContent = "Не найден Firebase-профиль ученика Миша.";
});

function isFirebaseMode() {
    return Boolean(firebaseProfile) && !demoMode;
}

function localDateKey(date) {
    const value = new Date(date);
    return value.getFullYear() + "-" + String(value.getMonth() + 1).padStart(2, "0") + "-" + String(value.getDate()).padStart(2, "0");
}

function startOfWeek(date) {
    const value = new Date(date); value.setHours(0, 0, 0, 0);
    value.setDate(value.getDate() - ((value.getDay() + 6) % 7));
    return value;
}

function formatFullDate(date) {
    const text = new Intl.DateTimeFormat("ru-RU", { weekday: "long", day: "numeric", month: "long" }).format(date);
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function updateTodayClock() {
    const now = new Date();
    if (todayDate) todayDate.textContent = formatFullDate(now).toLocaleUpperCase("ru");
    if (todayClock) todayClock.textContent = new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(now);
}
updateTodayClock();
setInterval(updateTodayClock, 1000);

window.addEventListener("lessonflow:cloud-schedule", function(event) {
    cloudScheduleEvents = Array.isArray(event.detail) ? event.detail : [];
    renderCloudToday();
    renderCalendar();
    if (selectedStudentRecord && document.querySelector('#misha-screen .student-tab.active-tab')?.dataset.tab === "program") loadLearningProgram();
});

window.addEventListener("lessonflow:cloud-submissions", function(event) {
    cloudSubmissions = Array.isArray(event.detail) ? event.detail : [];
    renderCloudToday();
    if (activePublishedLesson && studentLessonScreen.classList.contains("active")) renderStudentLesson();
});
window.addEventListener("lessonflow:conversations", function(event) {
    messagingConversations = Array.isArray(event.detail) ? event.detail : [];
    const unreadField = firebaseProfile?.role === "teacher" ? "unreadTeacher" : "unreadStudent";
    const unread = messagingConversations.reduce(function(total, conversation) { return total + Number(conversation[unreadField] || 0); }, 0);
    document.querySelectorAll(".teacher-message-nav-badge").forEach(function(badge) { badge.textContent = unread; badge.hidden = unread < 1; });
    document.querySelectorAll('#student-screen [data-student-nav="messages"]').forEach(function(button) {
        let badge = button.querySelector(".student-message-nav-badge");
        if (!badge) badge = addTextElement(button, "b", "student-message-nav-badge", "");
        badge.textContent = unread;
        badge.hidden = unread < 1;
    });
    const activeConversation = messagingConversations.find(function(item) { return item.id === activeMessagingConversationId; });
    const activeUnread = firebaseProfile?.role === "teacher" ? activeConversation?.unreadTeacher : activeConversation?.unreadStudent;
    if (activeConversation && Number(activeUnread || 0) > 0) {
        const chatVisible = firebaseProfile?.role === "teacher"
            ? studentsScreen.classList.contains("active") && studentsScreen.dataset.teacherNav === "messages"
            : studentScreen.classList.contains("active") && document.querySelector('#student-screen [data-student-nav="messages"]')?.classList.contains("is-active");
        if (chatVisible) window.lessonFlowCloud.markConversationRead(activeConversation.id).catch(function(error) { console.error("Mark conversation read failed:", error); });
    }
    if (studentsScreen.classList.contains("active") && studentsScreen.dataset.teacherNav === "messages") renderTeacherMessagesWorkspace(activeMessagingConversationId);
    if (firebaseProfile?.role === "teacher" && teacherScreen.classList.contains("active")) renderCloudToday();
    if (studentScreen.classList.contains("active") && document.querySelector('#student-screen [data-student-nav="messages"]')?.classList.contains("is-active")) { const section = document.getElementById("student-section-content"); section.replaceChildren(); renderStudentMessagesScreen(section); }
});
window.addEventListener("lessonflow:messages", function(event) {
    if (event.detail?.conversationId !== activeMessagingConversationId) return;
    activeMessagingMessages = Array.isArray(event.detail.messages) ? event.detail.messages : [];
    if (firebaseProfile?.role === "teacher" && studentsScreen.dataset.teacherNav === "messages") renderTeacherMessagesWorkspace(activeMessagingConversationId, true);
    if (firebaseProfile?.role === "student" && document.querySelector('#student-screen [data-student-nav="messages"]')?.classList.contains("is-active")) { const section = document.getElementById("student-section-content"); section.replaceChildren(); renderStudentMessagesScreen(section, true); }
});
window.addEventListener("lessonflow:messaging-error", function(event) {
    messagingError = event.detail || "Не удалось загрузить сообщения.";
    if (firebaseProfile?.role === "teacher" && studentsScreen.dataset.teacherNav === "messages") renderTeacherMessagesWorkspace(activeMessagingConversationId);
    if (firebaseProfile?.role === "student" && document.querySelector('#student-screen [data-student-nav="messages"]')?.classList.contains("is-active")) { const section = document.getElementById("student-section-content"); section.replaceChildren(); renderStudentMessagesScreen(section); }
});
window.addEventListener("lessonflow:student-dashboard-data", function(event) { studentDashboardData = { ...(event.detail || { events: [], program: null, vocabulary: null, vocabularyDictionary: [], scheduleError: null, programError: null, vocabularyError: null, vocabularyDictionaryError: null }), vocabularyLoading: false }; if (!studentScreen.classList.contains("active")) return; const activeSection = document.querySelector('#student-screen .student-nav-item.is-active[data-student-nav]')?.dataset.studentNav; if (activeSection === "vocabulary") renderStudentVocabularyScreen(document.getElementById("student-section-content"), true); else if (activeSection === "messages") { const section = document.getElementById("student-section-content"); section.replaceChildren(); renderStudentMessagesScreen(section); } else renderStudentDashboard(); });

const weekDaysRu = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function renderCloudStudents() {
    firebaseStudentsGrid.className = "student-dashboard-grid";
    const heading = studentsScreen.querySelector(".students-heading h2"); if (heading) heading.textContent = "Ученики";
    const eyebrow = studentsScreen.querySelector("main > .small-title"); if (eyebrow) eyebrow.textContent = "МОИ УЧЕНИКИ";
    const subtitle = studentsScreen.querySelector("main > .subtitle-left"); if (subtitle) subtitle.textContent = "Здесь хранятся данные об учениках, их темах и прогрессе.";
    const role = studentsScreen.querySelector(":scope > .topbar .role"); if (role) role.textContent = "Ученики";
    const firebase = isFirebaseMode() && firebaseProfile.role === "teacher";
    firebaseStudentsGrid.hidden = !firebase;
    demoStudentsGrid.hidden = firebase;
    addStudentButton.hidden = !firebase;
    if (!firebase) return;
    firebaseStudentsGrid.replaceChildren();
    const activeStudents = cloudStudents.filter(function(student) { return student.status !== "archived"; });
    const archivedStudents = cloudStudents.filter(function(student) { return student.status === "archived"; });
    if (!activeStudents.length && !archivedStudents.length) {
        addTextElement(firebaseStudentsGrid, "p", "student-empty-lesson", "У вас пока нет учеников");
        return;
    }
    activeStudents.slice().sort(function(a, b) { return a.name.localeCompare(b.name, "ru"); }).forEach(function(student) {
        const card = document.createElement("article");
        card.className = "dashboard-card cloud-student-card";
        const avatar = document.createElement("img"); avatar.className = "teacher-student-avatar"; avatar.src = stableTeacherStudentAvatar(student); avatar.alt = ""; card.appendChild(avatar);
        addTextElement(card, "p", "card-label", [student.level, student.subject].filter(Boolean).join(" · ").toLocaleUpperCase("ru"));
        addTextElement(card, "h3", "", student.name);
        addTextElement(card, "p", "", "Учебник: " + (student.textbook || "не указан"));
        const derived = selectedStudentDerivedState(student);
        addTextElement(card, "p", "", "Сейчас: " + derived.current.topic);
        addTextElement(card, "p", "attention", "Повторить: " + (derived.reviewTopics[0]?.title || "—") + (derived.reviewTopics.length > 1 ? " · ещё " + (derived.reviewTopics.length - 1) : ""));
        const actions = document.createElement("div"); actions.className = "student-card-actions";
        const open = addTextElement(actions, "button", "small-button", "Открыть ученика");
        open.type = "button"; open.addEventListener("click", function() { openStudentCard(student); });
        const edit = addTextElement(actions, "button", "secondary-button", "Редактировать");
        edit.type = "button"; edit.addEventListener("click", function() { openStudentModal(student); });
        const message = addTextElement(actions, "button", "teacher-message-button", "Сообщение ученику");
        message.type = "button";
        message.addEventListener("click", function() { openTeacherConversation(student); });
        const remove = addTextElement(actions, "button", "delete-link", "Архивировать ученика");
        remove.type = "button"; remove.addEventListener("click", function() { openDeleteStudent(student); });
        card.appendChild(actions); firebaseStudentsGrid.appendChild(card);
    });
    if (archivedStudents.length) {
        addTextElement(firebaseStudentsGrid, "h3", "students-archive-title", "Архив");
        archivedStudents.slice().sort(function(a, b) { return a.name.localeCompare(b.name, "ru"); }).forEach(function(student) {
            const card = document.createElement("article"); card.className = "dashboard-card cloud-student-card is-archived";
            addTextElement(card, "p", "card-label", "АРХИВ"); addTextElement(card, "h3", "", student.name);
            addTextElement(card, "p", "", "История и прогресс сохранены. Будущие занятия отменены.");
            const restore = addTextElement(card, "button", "secondary-button", "Восстановить"); restore.type = "button";
            restore.addEventListener("click", async function() { try { await window.lessonFlowCloud.restoreStudent(student.id); studentsStatus.textContent = "Ученик восстановлен"; } catch (error) { console.error("Student restore error:", error); studentsStatus.textContent = "Не удалось восстановить ученика"; } });
            card.appendChild(restore); firebaseStudentsGrid.appendChild(card);
        });
    }
}

function renderPreparationWorkspace() {
    const firebase = isFirebaseMode() && firebaseProfile.role === "teacher"; firebaseStudentsGrid.hidden = !firebase; demoStudentsGrid.hidden = firebase; addStudentButton.hidden = true; if (!firebase) return;
    const heading = studentsScreen.querySelector(".students-heading h2"); if (heading) heading.textContent = "Подготовка уроков";
    const eyebrow = studentsScreen.querySelector("main > .small-title"); if (eyebrow) eyebrow.textContent = "ПОДГОТОВКА";
    const subtitle = studentsScreen.querySelector("main > .subtitle-left"); if (subtitle) subtitle.textContent = "Ближайшие занятия, черновики и готовые уроки.";
    const role = studentsScreen.querySelector(":scope > .topbar .role"); if (role) role.textContent = "Подготовка уроков";
    firebaseStudentsGrid.replaceChildren();
    const tabs = document.createElement("div"); tabs.className = "preparation-tabs";
    [["upcoming", "Ближайшие"], ["drafts", "Черновики"], ["ready", "Готовые / опубликованные"]].forEach(function(item) {
        const button = addTextElement(tabs, "button", "secondary-button" + (preparationWorkspaceTab === item[0] ? " is-active" : ""), item[1]);
        button.type = "button"; button.addEventListener("click", function() { preparationWorkspaceTab = item[0]; renderPreparationWorkspace(); }); tabs.appendChild(button);
    });
    firebaseStudentsGrid.appendChild(tabs);
    const allDrafts = Object.values(lessonDrafts).filter(Boolean);
    const openDraft = function(draft) { const student = cloudStudents.find(function(item) { return item.id === draft.studentId; }); if (!student) return; preparingScheduleEventId = draft.eventId; preparingPlanLessonContext = draft.planLessonId ? { programId:draft.programId, id:draft.planLessonId, lessonNumber:draft.lessonNumber, title:draft.lessonTitle, date:draft.date, startTime:draft.startTime } : null; openLessonFor(student); };
    const list = document.createElement("section"); list.className = "preparation-draft-list";
    if (preparationWorkspaceTab === "drafts") {
        const drafts = allDrafts.filter(function(draft) { return draft.status === "draft"; }).sort(function(a,b) { return String(b.updatedAt).localeCompare(String(a.updatedAt)); });
        addTextElement(list, "h3", "", "Черновики"); if (!drafts.length) addTextElement(list, "p", "student-empty-lesson", "Сохранённых черновиков пока нет.");
        drafts.forEach(function(draft) { const row = document.createElement("article"); row.className = "preparation-draft-row"; const copy = document.createElement("div"); addTextElement(copy, "strong", "", draft.studentName); addTextElement(copy, "p", "", [draft.date ? formatLessonDate(draft.date) : "Без даты", draft.startTime, draft.lessonNumber ? "L" + draft.lessonNumber + " · " + draft.lessonTitle : draft.lessonTitle].filter(Boolean).join(" · ")); addTextElement(copy, "small", "", "Последнее изменение: " + new Intl.DateTimeFormat("ru-RU", { day:"numeric", month:"long", hour:"2-digit", minute:"2-digit" }).format(new Date(draft.updatedAt))); row.appendChild(copy); const open = addTextElement(row, "button", "main-button", "Продолжить"); open.type = "button"; open.addEventListener("click", function() { openDraft(draft); }); list.appendChild(row); });
    } else if (preparationWorkspaceTab === "ready") {
        const readyEvents = cloudScheduleEvents.filter(function(event) { return event.status === "prepared" || event.status === "completed" || Boolean(event.lessonId); }).sort(function(a,b) { return (String(b.date || "") + String(b.startTime || "")).localeCompare(String(a.date || "") + String(a.startTime || "")); });
        addTextElement(list, "h3", "", "Готовые и опубликованные"); if (!readyEvents.length) addTextElement(list, "p", "student-empty-lesson", "Готовых и опубликованных уроков пока нет.");
        readyEvents.forEach(function(event) { const draft = allDrafts.find(function(item) { return item.eventId === event.id; }); const status = event.status === "completed" ? "ПРОВЕДЁН" : event.lessonId || draft?.status === "published" ? "ОПУБЛИКОВАН" : "ГОТОВ"; const row = document.createElement("article"); row.className = "preparation-draft-row"; const copy = document.createElement("div"); addTextElement(copy, "strong", "", event.studentName || draft?.studentName || "Ученик"); addTextElement(copy, "p", "", [event.date ? formatLessonDate(event.date) : "", event.startTime, event.planLessonNumber ? "L" + event.planLessonNumber + " · " + (event.planLessonTitle || event.topic || "Урок") : (event.planLessonTitle || event.topic || draft?.lessonTitle || "Урок")].filter(Boolean).join(" · ")); addTextElement(copy, "span", "preparation-status is-" + status.toLowerCase(), status); row.appendChild(copy); const open = addTextElement(row, "button", "secondary-button", "Открыть урок"); open.type = "button"; open.addEventListener("click", function() { if (draft) openDraft(draft); else openScheduleLesson(event); }); list.appendChild(row); });
    } else {
        const today = localDateKey(new Date()); const events = cloudScheduleEvents.filter(function(event) { return event.date >= today && event.status !== "cancelled"; }).sort(function(a,b) { return (String(a.date) + String(a.startTime || "")).localeCompare(String(b.date) + String(b.startTime || "")); });
        addTextElement(list, "h3", "", "Ближайшие уроки"); if (!events.length) addTextElement(list, "p", "student-empty-lesson", "Ближайших уроков пока нет.");
        events.forEach(function(event) {
            const draft = allDrafts.find(function(item) { return item.eventId === event.id; });
            const published = Boolean(event.lessonId || draft?.status === "published");
            const status = event.status === "completed" ? "ПРОВЕДЁН" : published ? "ОПУБЛИКОВАН" : draft ? "ЧЕРНОВИК" : event.status === "prepared" ? "ГОТОВ" : "НЕ НАЧАТ";
            const student = cloudStudents.find(function(item) { return item.id === event.studentDocId; });
            const row = document.createElement("article"); row.className = "preparation-draft-row preparation-upcoming-row";
            const avatar = document.createElement("img"); avatar.className = "preparation-student-avatar"; avatar.src = stableTeacherStudentAvatar(student || { name:event.studentName, id:event.studentDocId }); avatar.alt = ""; row.appendChild(avatar);
            const copy = document.createElement("div"); addTextElement(copy, "strong", "", event.studentName || "Ученик");
            addTextElement(copy, "p", "", [formatLessonDate(event.date), event.startTime, student?.level, event.planLessonNumber ? "L" + event.planLessonNumber + " · " + (event.planLessonTitle || event.topic || "Урок") : (event.planLessonTitle || event.topic || "Урок")].filter(Boolean).join(" · "));
            const programLine = addTextElement(copy, "small", "preparation-program-name", "Загружаем программу…");
            addTextElement(copy, "span", "preparation-status is-" + status.toLowerCase().replace(/\s+/g, "-"), status); row.appendChild(copy);
            const actionLabel = draft && !published ? "Продолжить подготовку" : published ? "Открыть урок" : event.status === "prepared" ? "Открыть" : "Подготовить урок";
            const action = addTextElement(row, "button", !draft && !published && event.status !== "prepared" ? "prepare-button" : draft && !published ? "main-button" : "secondary-button", actionLabel); action.type = "button";
            action.addEventListener("click", function() { if (draft) openDraft(draft); else openScheduleLesson(event); }); list.appendChild(row);
            if (event.programId && event.planLessonId) window.lessonFlowCloud.getPlanLesson(event.programId, event.planLessonId).then(function(planLesson) { if (!row.isConnected) return; programLine.textContent = planLesson?.program?.mainCourse || planLesson?.program?.title || "Программа не указана"; }).catch(function() { programLine.textContent = "Программа не загрузилась"; }); else programLine.textContent = "Программа не указана";
        });
    }
    firebaseStudentsGrid.appendChild(list);
}

function stableTeacherStudentAvatar(student) {
    if (student?.avatarUrl) return student.avatarUrl;
    if (/^(boy|girl)-0[1-3]$/.test(String(student?.avatarKey || ""))) return "assets/teacher/avatars/avatar-student-" + student.avatarKey + ".png";
    const key = String(student?.id || student?.authUid || student?.name || "student"); let hash = 0; for (let index = 0; index < key.length; index += 1) hash = (hash * 31 + key.charCodeAt(index)) >>> 0;
    const name = String(student?.name || "").trim();
    const masculineExceptions = /^(?:миша|никита|илья|кузьма|фома|лука)(?:\s|$)/i;
    const gender = masculineExceptions.test(name) ? "boy" : /(?:а|я)$/i.test(name) ? "girl" : "boy";
    return "assets/teacher/avatars/avatar-student-" + gender + "-0" + (hash % 3 + 1) + ".png";
}

function messagingTime(value) {
    const date = value?.toDate ? value.toDate() : value?.seconds ? new Date(value.seconds * 1000) : null;
    if (!date || Number.isNaN(date.getTime())) return "";
    const today = new Date();
    return date.toDateString() === today.toDateString()
        ? new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(date)
        : new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short" }).format(date);
}

function messagingStudentContext(student) {
    return { teacherUid: student?.teacherUid || firebaseProfile?.uid, studentUid: student?.authUid, studentDocId: student?.id };
}

function renderMessageThread(container, conversation, messages, emptyText) {
    container.replaceChildren();
    if (messagingError) addTextElement(container, "p", "messaging-error", messagingError);
    if (!messages.length) addTextElement(container, "p", "messaging-empty", emptyText);
    messages.forEach(function(message) {
        const own = message.senderUid === firebaseProfile?.uid;
        const bubble = document.createElement("article");
        bubble.className = "messaging-bubble " + (own ? "is-own" : "is-other");
        addTextElement(bubble, "p", "", message.text || "");
        const meta = document.createElement("small");
        meta.textContent = messagingTime(message.createdAt);
        if (own && conversation) {
            const readAt = firebaseProfile?.role === "teacher" ? conversation.studentLastReadAt : conversation.teacherLastReadAt;
            const isRead = Boolean(readAt?.seconds && message.createdAt?.seconds && readAt.seconds >= message.createdAt.seconds);
            meta.append(" · " + (isRead ? "прочитано" : "отправлено"));
        }
        bubble.appendChild(meta);
        container.appendChild(bubble);
    });
    container.addEventListener("scroll", function() { messagingStickToBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 70; }, { passive: true });
    if (messagingStickToBottom) requestAnimationFrame(function() { container.scrollTop = container.scrollHeight; });
}

function createMessageComposer(context, conversationId, onSent) {
    const form = document.createElement("form");
    form.className = "messaging-composer";
    const input = document.createElement("textarea");
    input.maxLength = 2000;
    input.rows = 2;
    input.placeholder = "Напишите сообщение";
    const status = addTextElement(form, "p", "messaging-composer-status", "");
    const counter = addTextElement(form, "small", "messaging-limit", "0 / 2000");
    const send = addTextElement(form, "button", "teacher-button teacher-button-blue", "Отправить");
    send.type = "submit";
    send.disabled = true;
    form.prepend(input);
    input.addEventListener("input", function() { counter.textContent = input.value.length + " / 2000"; send.disabled = messagingSendBusy || !input.value.trim(); });
    input.addEventListener("keydown", function(event) { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); if (!send.disabled) form.requestSubmit(); } });
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        if (messagingSendBusy || !input.value.trim()) return;
        messagingSendBusy = true; send.disabled = true; messagingError = ""; status.textContent = "";
        try {
            messagingStickToBottom = true;
            const id = await window.lessonFlowCloud.sendMessage(context, input.value);
            input.value = ""; counter.textContent = "0 / 2000";
            if (id !== conversationId) activeMessagingConversationId = id;
            window.lessonFlowCloud.subscribeToMessages(id);
            if (onSent) onSent(id);
        } catch (error) {
            console.error("Message send failed:", error);
            messagingError = error.message === "message-too-long" ? "Сообщение слишком длинное." : "Не удалось отправить сообщение. Попробуйте ещё раз.";
            status.textContent = messagingError;
        } finally { messagingSendBusy = false; send.disabled = !input.value.trim(); }
    });
    return form;
}

async function openTeacherConversation(student) {
    messagingError = "";
    try {
        messagingStickToBottom = true;
        activeMessagingConversationId = await window.lessonFlowCloud.ensureConversation(messagingStudentContext(student));
        activeMessagingMessages = [];
        window.lessonFlowCloud.subscribeToMessages(activeMessagingConversationId);
        await window.lessonFlowCloud.markConversationRead(activeMessagingConversationId);
        openTeacherDestination("messages");
    } catch (error) {
        console.error("Open teacher conversation failed:", error);
        messagingError = "Не удалось открыть переписку. Проверьте связь ученика с аккаунтом.";
        openTeacherDestination("messages");
    }
}

function renderTeacherMessagesWorkspace(preferredConversationId, keepScroll) {
    const heading = studentsScreen.querySelector(".students-heading h2"); if (heading) heading.textContent = "Сообщения";
    const eyebrow = studentsScreen.querySelector("main > .small-title"); if (eyebrow) eyebrow.textContent = "ОБЩЕНИЕ";
    const subtitle = studentsScreen.querySelector("main > .subtitle-left"); if (subtitle) subtitle.textContent = "Личные сообщения вашим ученикам.";
    const role = studentsScreen.querySelector(":scope > .topbar .role"); if (role) role.textContent = "Сообщения";
    addStudentButton.hidden = true; demoStudentsGrid.hidden = true; firebaseStudentsGrid.hidden = false; firebaseStudentsGrid.replaceChildren(); firebaseStudentsGrid.className = "teacher-messaging-shell";
    const list = document.createElement("aside"); list.className = "teacher-conversation-list";
    const students = cloudStudents.filter(function(student) { return student.authUid; }).sort(function(a, b) {
        const aConversation = messagingConversations.find(function(item) { return item.studentUid === a.authUid; });
        const bConversation = messagingConversations.find(function(item) { return item.studentUid === b.authUid; });
        return Number(bConversation?.lastMessageAt?.seconds || 0) - Number(aConversation?.lastMessageAt?.seconds || 0);
    });
    if (!students.length) addTextElement(list, "p", "messaging-empty", "Здесь появятся сообщения ваших учеников.");
    students.forEach(function(student) {
        const conversation = messagingConversations.find(function(item) { return item.studentUid === student.authUid; });
        const button = document.createElement("button"); button.type = "button"; button.className = "teacher-conversation-item" + (conversation?.id === (preferredConversationId || activeMessagingConversationId) ? " is-active" : "");
        const avatar = document.createElement("img"); avatar.src = stableTeacherStudentAvatar(student); avatar.alt = ""; button.appendChild(avatar);
        const copy = document.createElement("div"); addTextElement(copy, "strong", "", student.name || "Ученик"); addTextElement(copy, "span", "", conversation?.lastMessageText || "Начать переписку"); button.appendChild(copy);
        if (conversation?.lastMessageAt) addTextElement(button, "time", "", messagingTime(conversation.lastMessageAt));
        if (Number(conversation?.unreadTeacher || 0)) addTextElement(button, "b", "messaging-unread", conversation.unreadTeacher);
        button.addEventListener("click", function() { openTeacherConversation(student); }); list.appendChild(button);
    });
    const chat = document.createElement("section"); chat.className = "teacher-conversation-chat";
    const activeId = preferredConversationId || activeMessagingConversationId;
    const conversation = messagingConversations.find(function(item) { return item.id === activeId; });
    const student = cloudStudents.find(function(item) { return item.authUid === conversation?.studentUid; }) || students.find(function(item) { return window.lessonFlowCloud.getConversationId(firebaseProfile?.uid, item.authUid) === activeId; });
    if (!student) addTextElement(chat, "p", "messaging-empty", "Выберите ученика слева, чтобы открыть переписку.");
    else {
        const chatHeading = document.createElement("header"); const avatar = document.createElement("img"); avatar.src = stableTeacherStudentAvatar(student); avatar.alt = ""; chatHeading.appendChild(avatar); const copy = document.createElement("div"); addTextElement(copy, "strong", "", student.name || "Ученик"); addTextElement(copy, "span", "", [student.level, student.subject].filter(Boolean).join(" · ")); chatHeading.appendChild(copy); chat.appendChild(chatHeading);
        const thread = document.createElement("div"); thread.className = "messaging-thread"; renderMessageThread(thread, conversation, activeMessagingMessages, "Сообщений пока нет. Напишите ученику первым."); chat.appendChild(thread);
        chat.appendChild(createMessageComposer(messagingStudentContext(student), activeId));
    }
    firebaseStudentsGrid.append(list, chat);
}

function renderTeacherStudentProgress(content, cloudMode) {
    let section = content.querySelector(".teacher-student-progress");
    if (!section) {
        section = document.createElement("section");
        section.className = "teacher-student-progress";
        content.appendChild(section);
    }
    section.replaceChildren();

    const heading = document.createElement("div");
    heading.className = "teacher-progress-heading";
    const headingIcon = document.createElement("img");
    headingIcon.className = "teacher-progress-heading-icon";
    headingIcon.src = "assets/student-dashboard/icons/icon-chart.png";
    headingIcon.alt = "";
    const title = document.createElement("div");
    addTextElement(title, "p", "teacher-eyebrow", "ДИНАМИКА ОБУЧЕНИЯ");
    addTextElement(title, "h2", "", "Прогресс учеников");
    const headingSubtitle = addTextElement(title, "span", "", "Завершённые уроки");
    const details = addTextElement(heading, "button", "teacher-button teacher-button-light", "Подробнее →");
    details.type = "button";
    details.addEventListener("click", function() { openTeacherDestination("students"); });
    const headingCopy = document.createElement("div");
    headingCopy.className = "teacher-progress-heading-copy";
    headingCopy.append(headingIcon, title);
    heading.prepend(headingCopy);
    section.appendChild(heading);

    const students = (cloudMode ? cloudStudents : cloudStudents.length ? cloudStudents : [
        { id: "demo-misha", name: "Миша", avatarKey: "boy-01", totalLessons: 60 },
        { id: "demo-anya", name: "Аня", avatarKey: "girl-01", totalLessons: 60 }
    ]).slice(0, 4);
    headingSubtitle.textContent = "Завершённые уроки · " + students.length + " из 4 учеников";
    const progressItems = students.map(function(student) {
        const completed = cloudMode ? cloudScheduleEvents.filter(function(event) {
            return event.status === "completed" && (event.studentDocId === student.id || event.studentAuthUid === student.authUid);
        }).length : 0;
        const total = Math.max(completed, Number(student.totalLessons || 60));
        const percent = total ? Math.min(100, Math.round(completed / total * 100)) : 0;
        return { student: student, completed: completed, total: total, percent: percent };
    });

    const openProgressStudent = function(student) { cloudMode ? openStudentCard(student) : openTeacherDestination("students"); };
    const openAddStudent = function() { openTeacherDestination("students"); if (cloudMode) document.getElementById("add-student-button")?.click(); };
    const createStudentCard = function(item, position) {
        if (!item) {
            const empty = document.createElement("button");
            empty.type = "button";
            empty.className = "teacher-progress-student is-empty teacher-progress-position-" + position;
            addTextElement(empty, "span", "teacher-progress-add", "+");
            const copy = document.createElement("div"); addTextElement(copy, "strong", "", "Добавить ученика"); addTextElement(copy, "span", "", "Свободное место"); empty.appendChild(copy); empty.addEventListener("click", openAddStudent); return empty;
        }
        const student = item.student;
        const card = document.createElement("button");
        card.type = "button";
        card.className = "teacher-progress-student teacher-progress-position-" + position;
        card.addEventListener("click", function() { openProgressStudent(student); });
        const avatar = document.createElement("img");
        avatar.src = stableTeacherStudentAvatar(student);
        avatar.alt = "";
        card.appendChild(avatar);
        const copy = document.createElement("div");
        addTextElement(copy, "strong", "", student.name || "Ученик");
        addTextElement(copy, "span", "", item.completed + " / " + item.total + " уроков");
        const track = document.createElement("div");
        track.className = "teacher-progress-track";
        const fill = document.createElement("i");
        fill.style.width = item.percent + "%";
        track.appendChild(fill);
        copy.appendChild(track);
        card.appendChild(copy);
        addTextElement(card, "b", "teacher-progress-percent", item.percent + "%");
        return card;
    };

    const composition = document.createElement("div"); composition.className = "teacher-progress-composition";
    const positions = ["left-top", "left-bottom", "right-top", "right-bottom"];
    positions.forEach(function(position, index) { composition.appendChild(createStudentCard(progressItems[index], position)); });

    const average = progressItems.length ? Math.round(progressItems.reduce(function(sum, item) { return sum + item.percent; }, 0) / progressItems.length) : 0;
    const circle = document.createElement("div"); circle.className = "teacher-progress-circle"; circle.style.setProperty("--teacher-average-progress", average * 3.6 + "deg");
    const chart = document.createElement("div"); chart.className = "teacher-progress-circle-chart";
    for (let index = 0; index < 4; index += 1) {
        const item = progressItems[index]; const column = document.createElement("button"); column.type = "button"; column.className = "teacher-progress-circle-column" + (item ? "" : " is-empty"); column.title = item ? item.student.name + ": " + item.percent + "%" : "Добавить ученика";
        addTextElement(column, "b", "", item ? item.percent + "%" : "—"); const rail = document.createElement("span"); const fill = document.createElement("i"); fill.style.height = (item ? item.percent : 0) + "%"; rail.appendChild(fill); column.appendChild(rail); addTextElement(column, "small", "", item?.student.name || "Место " + (index + 1)); column.addEventListener("click", function() { item ? openProgressStudent(item.student) : openAddStudent(); }); chart.appendChild(column);
    }
    circle.appendChild(chart);
    [["top","assets/student-dashboard/icons/icon-star.png"],["left","assets/teacher/quick-actions/quick-add-student.png"],["right","assets/student-dashboard/icons/icon-trophy.png"],["bottom","assets/student-dashboard/icons/icon-notebook.png"]].forEach(function(definition) { const badge = document.createElement("span"); badge.className = "teacher-progress-circle-badge is-" + definition[0]; const image = document.createElement("img"); image.src = definition[1]; image.alt = ""; badge.appendChild(image); circle.appendChild(badge); });
    composition.appendChild(circle); section.appendChild(composition);

    const milestoneCount = progressItems.filter(function(item) { return item.percent >= 50; }).length;
    const insight = document.createElement("div"); insight.className = "teacher-progress-insight"; const insightIcon = document.createElement("img"); insightIcon.src = milestoneCount ? "assets/student-dashboard/icons/icon-achievements.png" : "assets/student-dashboard/icons/icon-star.png"; insightIcon.alt = ""; insight.appendChild(insightIcon); const insightCopy = document.createElement("div"); addTextElement(insightCopy, "strong", "", milestoneCount ? "Отличная динамика!" : "Прогресс только начинается"); addTextElement(insightCopy, "span", "", milestoneCount ? milestoneCount + " " + (milestoneCount === 1 ? "ученик уже выполнил" : "ученика уже выполнили") + " больше половины курса." : "Средний прогресс группы — " + average + "%. Данные обновляются после завершения уроков."); insight.appendChild(insightCopy); const celebration = document.createElement("img"); celebration.className = "teacher-progress-celebration"; celebration.src = "assets/student-dashboard/icons/icon-trophy.png"; celebration.alt = ""; insight.appendChild(celebration); section.appendChild(insight);
}

function teacherAttentionLabel(count, forms) {
    const value = Math.abs(Number(count) || 0);
    const form = value % 10 === 1 && value % 100 !== 11 ? forms[0] : value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20) ? forms[1] : forms[2];
    return value + " " + form;
}

function renderTeacherPremiumHome() {
    const content = teacherScreen.querySelector(".content"); if (!content) return;
    content.classList.add("teacher-home-content"); let overview = content.querySelector(".teacher-home-overview"); if (!overview) { overview = document.createElement("section"); overview.className = "teacher-home-overview"; content.querySelector(".page-header")?.after(overview); }
    overview.replaceChildren(); const todayKey = localDateKey(new Date()); const cloudMode = isFirebaseMode() && firebaseProfile?.role === "teacher"; const events = cloudMode ? cloudScheduleEvents.filter(function(event) { return event.date === todayKey && event.status !== "cancelled"; }).sort(function(a,b) { return String(a.startTime || "").localeCompare(String(b.startTime || "")); }) : [{ studentName: "Миша", startTime: "15:00", topic: "Present Perfect", status: "scheduled" }, { studentName: "Аня", startTime: "17:00", topic: "正在 / 在", status: "scheduled" }, { studentName: "Лена", startTime: "19:00", topic: "Travel", status: "scheduled" }];
    const upcoming = events.find(function(event) { return event.status !== "completed"; }) || events[0]; const hero = document.createElement("article"); hero.className = "teacher-today-hero"; const copy = document.createElement("div"); addTextElement(copy, "p", "teacher-eyebrow", "БЛИЖАЙШИЙ УРОК"); if (upcoming) { addTextElement(copy, "strong", "teacher-hero-time", upcoming.startTime || "—"); addTextElement(copy, "h2", "", upcoming.studentName || "Ученик"); addTextElement(copy, "p", "teacher-hero-lesson", (upcoming.planLessonNumber ? "L" + upcoming.planLessonNumber + " · " : "") + (upcoming.planLessonTitle || upcoming.topic || "Тема не указана")); const student = cloudStudents.find(function(item) { return item.id === upcoming.studentDocId; }); if (student?.textbook) addTextElement(copy, "p", "teacher-hero-meta", student.textbook); const actions = document.createElement("div"); actions.className = "teacher-hero-actions"; const prepare = addTextElement(actions, "button", "teacher-button teacher-button-orange", upcoming.status === "prepared" || upcoming.status === "completed" ? "Открыть урок" : "Подготовить урок"); prepare.type = "button"; prepare.addEventListener("click", function() { cloudMode ? openScheduleLesson(upcoming) : openLessonFor(upcoming.studentName); }); const open = addTextElement(actions, "button", "teacher-button teacher-button-light", "Открыть ученика"); open.type = "button"; open.addEventListener("click", function() { if (student) openStudentCard(student); else if (upcoming.studentName === "Миша") document.getElementById("open-misha").click(); else openTeacherDestination("students"); }); const message = addTextElement(actions, "button", "teacher-button teacher-button-light teacher-home-message", "Сообщение ученику"); message.type = "button"; const messageIcon = document.createElement("img"); messageIcon.src = "assets/teacher/attention/teacher-icon-message.png"; messageIcon.alt = ""; message.prepend(messageIcon); message.disabled = !student?.authUid; message.addEventListener("click", function() { if (student) openTeacherConversation(student); }); copy.appendChild(actions); } else { addTextElement(copy, "h2", "", "Сегодня занятий нет"); addTextElement(copy, "p", "teacher-hero-meta", "Можно спокойно заняться подготовкой следующих уроков."); }
    const visual = document.createElement("div"); visual.className = "teacher-today-hero-visual"; const heroImage = document.createElement("img"); heroImage.src = "assets/teacher/dashboard/teacher-today-hero.png"; heroImage.alt = ""; visual.appendChild(heroImage); hero.append(copy, visual);
    const pending = cloudMode ? cloudSubmissions.filter(function(item) { return item.status === "submitted"; }) : [];
    const unreadMessages = cloudMode ? messagingConversations.reduce(function(total, conversation) { return total + Number(conversation.unreadTeacher || 0); }, 0) : 0;
    const preparation = events.filter(function(item) { return item.status === "scheduled"; });
    const repeatLesson = cloudMode && cloudProgress.repeatRequest ? publishedLessons["Миша"] : null;
    const repeatStudent = repeatLesson ? cloudStudents.find(function(student) { return student.authUid === repeatLesson.cloudId || student.id === repeatLesson.studentDocId; }) : null;
    const attention = document.createElement("article"); attention.className = "teacher-attention-card"; addTextElement(attention, "p", "teacher-eyebrow", "ТРЕБУЕТ ВНИМАНИЯ"); addTextElement(attention, "h2", "", "На сегодня");
    const attentionItems = [];
    if (pending.length) attentionItems.push(["assets/teacher/attention/teacher-icon-review.png", teacherAttentionLabel(pending.length, ["работа ждёт проверки", "работы ждут проверки", "работ ждут проверки"]), function() { document.querySelector(".teacher-home-work-grid")?.scrollIntoView({ behavior: "smooth" }); }]);
    if (unreadMessages) attentionItems.push(["assets/teacher/attention/teacher-icon-message.png", teacherAttentionLabel(unreadMessages, ["новое сообщение", "новых сообщения", "новых сообщений"]), function() { openTeacherDestination("messages"); }]);
    if (preparation.length) attentionItems.push(["assets/teacher/attention/teacher-icon-preparation.png", teacherAttentionLabel(preparation.length, ["урок нужно подготовить", "урока нужно подготовить", "уроков нужно подготовить"]), function() { openScheduleLesson(preparation[0]); }]);
    if (repeatStudent) attentionItems.push(["assets/teacher/attention/teacher-icon-review-alt.png", "1 просьба повторить тему", function() { openStudentCard(repeatStudent); setTimeout(function() { document.querySelector('#misha-screen .student-tab[data-tab="repeat"]')?.click(); }, 0); }]);
    if (attentionItems.length) attentionItems.slice(0, 4).forEach(function(item) { const row = document.createElement("button"); row.type = "button"; row.className = "teacher-attention-row"; const image = document.createElement("img"); image.src = item[0]; image.alt = ""; row.appendChild(image); addTextElement(row, "span", "", item[1]); addTextElement(row, "b", "", "→"); row.addEventListener("click", item[2]); attention.appendChild(row); }); else { const clear = document.createElement("div"); clear.className = "teacher-all-clear"; const image = document.createElement("img"); image.src = "assets/teacher/dashboard/teacher-all-clear.png"; image.alt = ""; clear.appendChild(image); const text = document.createElement("div"); addTextElement(text, "strong", "", "На сегодня всё под контролем"); addTextElement(text, "p", "", "Срочных задач нет."); clear.appendChild(text); attention.appendChild(clear); }
    overview.append(hero, attention);
    let workGrid = content.querySelector(".teacher-home-work-grid"); if (!workGrid) { workGrid = document.createElement("section"); workGrid.className = "teacher-home-work-grid"; content.appendChild(workGrid); } workGrid.replaceChildren(); const reviewPanel = document.createElement("article"); reviewPanel.className = "teacher-work-panel"; addTextElement(reviewPanel, "h3", "", "На проверку"); if (!pending.length) addTextElement(reviewPanel, "p", "teacher-empty-note", "Новых работ на проверку нет."); pending.slice(0,4).forEach(function(submission) { const row = document.createElement("div"); row.className = "teacher-work-row"; const image = document.createElement("img"); image.src = "assets/teacher/submissions/submission-" + (submission.type === "written" ? "written" : submission.type === "audio" ? "audio" : submission.type === "wordwall" ? "wordwall" : "external") + ".png"; image.alt = ""; row.appendChild(image); const text = document.createElement("div"); addTextElement(text, "strong", "", submission.studentName || "Ученик"); addTextElement(text, "span", "", submission.title || "Задание"); row.appendChild(text); const check = addTextElement(row, "button", "teacher-button teacher-button-blue", "Проверить"); check.type = "button"; check.addEventListener("click", function() { if (submission.type === "written") openWrittenReview(submission); else if (submission.type === "audio") openAudioReview(submission); else if (submission.type === "wordwall") openWordwallReview(submission); else openSubmissionReview(submission); }); reviewPanel.appendChild(row); });
    const upcomingPanel = document.createElement("article"); upcomingPanel.className = "teacher-work-panel"; addTextElement(upcomingPanel, "h3", "", "К ближайшим урокам"); const future = (cloudMode ? cloudScheduleEvents.filter(function(item) { return item.date >= todayKey && item.status !== "cancelled"; }) : events).sort(function(a,b) { return (String(a.date || todayKey) + String(a.startTime || "")).localeCompare(String(b.date || todayKey) + String(b.startTime || "")); }).slice(0,4); if (!future.length) addTextElement(upcomingPanel, "p", "teacher-empty-note", "Ближайших занятий пока нет."); future.forEach(function(event) { const ready = event.status === "prepared" || event.status === "completed"; const row = document.createElement("div"); row.className = "teacher-work-row"; const image = document.createElement("img"); image.src = ready ? "assets/teacher/lessons/lesson-ready.png" : "assets/teacher/lessons/lesson-preparation.png"; image.alt = ""; row.appendChild(image); const text = document.createElement("div"); addTextElement(text, "strong", "", event.studentName || "Ученик"); addTextElement(text, "span", "", [event.date ? formatLessonDate(event.date) : "", event.startTime || "", (event.planLessonNumber ? "L" + event.planLessonNumber + " · " : "") + (event.planLessonTitle || event.topic || "Урок")].filter(Boolean).join(" · ")); row.appendChild(text); const action = addTextElement(row, "button", ready ? "teacher-button teacher-button-light" : "teacher-button teacher-button-orange", ready ? "Открыть" : "Подготовить"); action.type = "button"; action.addEventListener("click", function() { cloudMode ? openScheduleLesson(event) : openLessonFor(event.studentName); }); upcomingPanel.appendChild(row); }); workGrid.append(reviewPanel, upcomingPanel);
    let quick = content.querySelector(".teacher-quick-actions"); if (!quick) { quick = document.createElement("section"); quick.className = "teacher-quick-actions"; content.appendChild(quick); }
    quick.replaceChildren(); [["assets/teacher/quick-actions/quick-add-student.png", "Добавить ученика", function() { openTeacherDestination("students"); if (cloudMode) document.getElementById("add-student-button").click(); }], ["assets/teacher/quick-actions/quick-add-lesson.png", "Добавить урок", function() { openTeacherDestination("preparation"); }], ["assets/teacher/quick-actions/quick-add-material.png", "Добавить материал", function() { openTeacherDestination("library"); document.getElementById("add-material-button").click(); }], ["assets/teacher/quick-actions/quick-add-event.png", "Добавить событие", function() { openTeacherDestination("calendar"); if (cloudMode) document.getElementById("add-schedule-event").click(); }], ["assets/teacher/attention/teacher-icon-message.png", "Сообщения", function() { openTeacherDestination("messages"); }]].forEach(function(item) { const button = document.createElement("button"); button.type = "button"; const image = document.createElement("img"); image.src = item[0]; image.alt = ""; button.appendChild(image); addTextElement(button, "span", "", item[1]); button.addEventListener("click", item[2]); quick.appendChild(button); });
    renderTeacherStudentProgress(content, cloudMode);
}

function renderCloudToday() {
    const firebase = isFirebaseMode() && firebaseProfile.role === "teacher";
    firebaseTodayList.hidden = !firebase;
    demoTodayList.hidden = firebase;
    if (!firebase) {
        todayLessonCount.textContent = "3 урока сегодня";
        todaySummary.textContent = "3 урока сегодня · 3 задачи требуют внимания";
        todayTasksList.replaceChildren();
        [["Миша", "15:00"], ["Аня", "17:00"], ["Лена", "19:00"]].forEach(function(item) {
            const task = document.createElement("article"); task.className = "today-task"; addTextElement(task, "span", "", "Подготовить урок для " + item[0]);
            const action = addTextElement(task, "button", "secondary-button", item[1]); action.type = "button"; action.addEventListener("click", function() { openLessonFor(item[0]); }); todayTasksList.appendChild(task);
        });
        renderTeacherPremiumHome(); return;
    }
    const todayKey = localDateKey(new Date());
    const events = cloudScheduleEvents.filter(function(event) { return event.date === todayKey && event.status !== "cancelled"; })
        .sort(function(a, b) { return (a.startTime || "").localeCompare(b.startTime || ""); });
    const pendingSubmissions = cloudSubmissions.filter(function(submission) { return submission.status === "submitted"; });
    const preparationTasks = events.filter(function(event) { return event.status === "scheduled"; });
    const attentionCount = pendingSubmissions.length + preparationTasks.length;
    firebaseTodayList.replaceChildren();
    todayTasksList.replaceChildren();
    todayLessonCount.textContent = events.length + (events.length === 1 ? " урок сегодня" : " урока сегодня");
    todaySummary.textContent = events.length + (events.length === 1 ? " урок сегодня" : " урока сегодня") + " · " + attentionCount + (attentionCount === 1 ? " задача требует внимания" : " задач требуют внимания");
    if (!events.length) addTextElement(firebaseTodayList, "p", "student-empty-lesson", "Сегодня занятий нет");
    events.forEach(function(event) {
        const student = cloudStudents.find(function(item) { return item.id === event.studentDocId; });
        const card = document.createElement("article"); card.className = "student-card";
        addTextElement(card, "div", "time", event.startTime || "—");
        const avatar = document.createElement("img"); avatar.className = "teacher-schedule-avatar"; avatar.src = stableTeacherStudentAvatar(student || { name: event.studentName, id: event.studentDocId }); avatar.alt = ""; card.appendChild(avatar);
        const info = document.createElement("div"); info.className = "student-info";
        addTextElement(info, "h3", "", event.studentName); addTextElement(info, "p", "", [student?.level, event.subject].filter(Boolean).join(" · "));
        const details = document.createElement("div"); details.className = "student-details";
        addTextElement(details, "span", "", "Тема: " + (event.topic || "—")); info.appendChild(details); card.appendChild(info);
        const prepared = event.status === "prepared" || event.status === "completed";
        const statusImage = document.createElement("img"); statusImage.className = "teacher-lesson-status-image"; statusImage.src = prepared ? "assets/teacher/lessons/lesson-ready.png" : "assets/teacher/lessons/lesson-preparation.png"; statusImage.alt = ""; info.prepend(statusImage);
        const prepare = addTextElement(card, "button", prepared ? "secondary-button" : "prepare-button", prepared ? "Открыть урок" : "Подготовить урок"); prepare.type = "button"; prepare.addEventListener("click", function() { openScheduleLesson(event); });
        if (prepared) addTextElement(info, "span", "good", "✓ Урок подготовлен");
        firebaseTodayList.appendChild(card);
    });

    pendingSubmissions.forEach(function(submission) {
        const task = document.createElement("article"); task.className = "today-task submission-task";
        const submissionImage = document.createElement("img"); submissionImage.className = "teacher-submission-type-image"; submissionImage.src = "assets/teacher/submissions/submission-" + (submission.type === "written" ? "written" : submission.type === "audio" ? "audio" : submission.type === "wordwall" ? "wordwall" : "external") + ".png"; submissionImage.alt = ""; task.appendChild(submissionImage);
        const info = document.createElement("div");
        const taskTitles = { wordwall: "🎮 Проверить онлайн-задание ", written: "📷 Проверить письменную работу ", audio: "🎙 Прослушать аудио ", file: "📎 Проверить файл " };
        addTextElement(info, "strong", "", (taskTitles[submission.type] || "Проверить работу ") + submission.studentName);
        addTextElement(info, "span", "", (submission.title || "Задание") + (submission.type === "written" ? " · " + (submission.fileCount || submission.files?.length || 0) + " фото" : submission.type === "audio" ? " · " + formatAudioDuration(submission.durationSec || submission.files?.[0]?.duration || 0) : ""));
        if (submission.type === "written" && submission.resubmissionCount > 0) addTextElement(info, "small", "resubmission-label", "Повторная отправка");
        addTextElement(info, "small", "", "Отправлено " + formatFirestoreTime(submission.updatedAt || submission.createdAt)); task.appendChild(info);
        const check = addTextElement(task, "button", "main-button", "Проверить"); check.type = "button"; check.addEventListener("click", function() { if (submission.type === "written") openWrittenReview(submission); else if (submission.type === "audio") openAudioReview(submission); else if (submission.type === "wordwall") openWordwallReview(submission); else openSubmissionReview(submission); }); task.appendChild(check); todayTasksList.appendChild(task);
    });
    events.forEach(function(event) {
        const done = event.status === "prepared" || event.status === "completed";
        const task = document.createElement("article"); task.className = "today-task" + (done ? " is-done" : "");
        addTextElement(task, "span", "", done ? "✓ Урок для " + event.studentName + " подготовлен" : "Подготовить урок для " + event.studentName);
        if (!done) { const action = addTextElement(task, "button", "secondary-button", event.startTime); action.type = "button"; action.addEventListener("click", function() { openScheduleLesson(event); }); }
        todayTasksList.appendChild(task);
    });
    if (!todayTasksList.children.length) addTextElement(todayTasksList, "p", "student-empty-lesson", "На сегодня всё готово ✨");
    renderTeacherPremiumHome();
}

function formatFirestoreTime(value) {
    const date = value?.toDate ? value.toDate() : value?.seconds ? new Date(value.seconds * 1000) : value ? new Date(value) : null;
    if (!date || Number.isNaN(date.getTime())) return "недавно";
    const prefix = localDateKey(date) === localDateKey(new Date()) ? "сегодня " : "";
    return prefix + new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(date);
}

function openScheduleLesson(event) {
    if (!isFirebaseMode()) { openLessonFor(event.studentName); return; }
    const student = cloudStudents.find(function(item) { return item.id === event.studentDocId; });
    if (!student) return;
    preparingScheduleEventId = event.id;
    preparingPlanLessonContext = event.planLessonId ? { programId: event.programId, id: event.planLessonId, lessonNumber: event.planLessonNumber, title: event.planLessonTitle, date: event.date, startTime: event.startTime } : null;
    openLessonFor(student);
}

function openSubmissionReview(submission) {
    const student = cloudStudents.find(function(item) { return item.id === submission.studentDocId || item.authUid === submission.studentUid; });
    if (student) openStudentCard(student);
}
function wordwallSubmissionFor(block) { if (!activePublishedLesson) return null; return cloudSubmissions.find(function(item) { return item.type === "wordwall" && item.lessonId === (activePublishedLesson.lessonId || activePublishedLesson.cloudId) && item.blockId === block.id; }) || null; }

function submissionDateTime(value) {
    const date = value?.toDate ? value.toDate() : value?.seconds ? new Date(value.seconds * 1000) : value ? new Date(value) : null;
    return date && !Number.isNaN(date.getTime()) ? new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(date) : "время не указано";
}

function revokeWrittenReviewUrls() {
    writtenReviewUrls.forEach(function(url) { URL.revokeObjectURL(url); });
    writtenReviewUrls = [];
}

function renderWrittenReviewPage() {
    if (!writtenReviewUrls.length) return;
    const image = document.getElementById("written-review-image"); image.src = writtenReviewUrls[writtenReviewIndex];
    document.getElementById("written-review-counter").textContent = (writtenReviewIndex + 1) + " из " + writtenReviewUrls.length;
    document.getElementById("written-review-previous").disabled = writtenReviewIndex === 0;
    document.getElementById("written-review-next").disabled = writtenReviewIndex === writtenReviewUrls.length - 1;
    document.querySelectorAll("#written-review-thumbnails button").forEach(function(button, index) { button.classList.toggle("is-active", index === writtenReviewIndex); });
}

async function openWrittenReview(submission) {
    const modal = document.getElementById("written-review-modal");
    const loading = document.getElementById("written-review-loading");
    const viewer = document.getElementById("written-review-viewer");
    const error = document.getElementById("written-review-error");
    revokeWrittenReviewUrls(); writtenReviewIndex = 0; activeWrittenReviewSubmission = submission;
    document.getElementById("written-review-title").textContent = "Письменная работа " + (submission.studentName || "ученика");
    document.getElementById("written-review-meta").textContent = (submission.title || "Письменная работа") + " · Отправлено: " + submissionDateTime(submission.createdAt || submission.updatedAt);
    loading.textContent = "Загружаем работу…"; loading.hidden = false; viewer.hidden = true; error.textContent = "";
    document.getElementById("written-review-comment").value = submission.teacherComment || "";
    document.getElementById("written-review-action-status").textContent = "";
    document.getElementById("verify-written-review").disabled = false; document.getElementById("return-written-review").disabled = false;
    modal.hidden = false; document.body.classList.add("modal-scroll-lock");
    try {
        const count = Number(submission.fileCount || submission.files?.length || 0);
        if (!count) throw Object.assign(new Error("no-written-files"), { status: 404 });
        const blobs = await window.lessonFlowCloud.loadWrittenSubmissionFiles(submission.id, count, function(current, total) { loading.textContent = "Загружаем работу… " + current + " из " + total; });
        writtenReviewUrls = blobs.map(function(blob) { return URL.createObjectURL(blob); });
        const thumbnails = document.getElementById("written-review-thumbnails"); thumbnails.replaceChildren();
        writtenReviewUrls.forEach(function(url, index) {
            const button = document.createElement("button"); button.type = "button"; button.className = "written-review-thumbnail";
            const image = document.createElement("img"); image.src = url; image.alt = "Страница " + (index + 1); button.appendChild(image); addTextElement(button, "span", "", "Страница " + (index + 1));
            button.addEventListener("click", function() { writtenReviewIndex = index; renderWrittenReviewPage(); }); thumbnails.appendChild(button);
        });
        loading.hidden = true; viewer.hidden = false; renderWrittenReviewPage();
    } catch (loadError) {
        console.error("Written submission review error:", loadError); loading.hidden = true;
        error.textContent = loadError.status === 401 ? "Сессия истекла. Войдите снова." : loadError.status === 403 ? "Нет доступа к этой работе." : loadError.status === 404 ? "Фотография не найдена." : "Не удалось открыть фотографию.";
    }
}

function closeWrittenReview() {
    const modal = document.getElementById("written-review-modal");
    modal.hidden = true; modal.classList.remove("is-zoomed"); document.getElementById("written-review-image").removeAttribute("src"); revokeWrittenReviewUrls(); activeWrittenReviewSubmission = null; document.body.classList.remove("modal-scroll-lock");
}

async function submitWrittenReview(status) {
    if (!activeWrittenReviewSubmission) return;
    const comment = document.getElementById("written-review-comment").value.trim();
    const feedback = document.getElementById("written-review-action-status");
    if (status === "returned" && !comment) { feedback.textContent = "Напишите комментарий, почему работу нужно доработать."; document.getElementById("written-review-comment").focus(); return; }
    feedback.textContent = status === "verified" ? "Принимаем работу…" : "Возвращаем работу…";
    const verify = document.getElementById("verify-written-review"); const returnButton = document.getElementById("return-written-review"); verify.disabled = returnButton.disabled = true;
    try { await window.lessonFlowCloud.reviewWrittenSubmission(activeWrittenReviewSubmission, status, comment); closeWrittenReview(); }
    catch (error) { console.error("Written submission review save error:", error); feedback.textContent = "Не удалось сохранить результат проверки."; verify.disabled = returnButton.disabled = false; }
}
document.getElementById("verify-written-review").addEventListener("click", function() { submitWrittenReview("verified"); });
document.getElementById("return-written-review").addEventListener("click", function() { submitWrittenReview("returned"); });

document.getElementById("written-review-previous").addEventListener("click", function() { if (writtenReviewIndex > 0) { writtenReviewIndex -= 1; renderWrittenReviewPage(); } });
document.getElementById("written-review-next").addEventListener("click", function() { if (writtenReviewIndex < writtenReviewUrls.length - 1) { writtenReviewIndex += 1; renderWrittenReviewPage(); } });
function toggleWrittenReviewZoom() { document.getElementById("written-review-modal").classList.toggle("is-zoomed"); }
document.getElementById("written-review-zoom").addEventListener("click", toggleWrittenReviewZoom);
document.getElementById("written-review-image-button").addEventListener("click", toggleWrittenReviewZoom);
document.getElementById("close-written-review").addEventListener("click", closeWrittenReview);
document.getElementById("close-written-review-icon").addEventListener("click", closeWrittenReview);
document.getElementById("written-review-modal").addEventListener("click", function(event) { if (event.target.id === "written-review-modal") closeWrittenReview(); });
document.addEventListener("keydown", function(event) { if (event.key === "Escape" && !document.getElementById("written-review-modal").hidden) { event.stopImmediatePropagation(); closeWrittenReview(); } }, true);

async function openAudioReview(submission) { const modal = document.getElementById("audio-review-modal"); activeAudioReviewSubmission = submission; if (audioReviewUrl) URL.revokeObjectURL(audioReviewUrl); audioReviewUrl = ""; const player = document.getElementById("audio-review-player"); player.hidden = true; player.removeAttribute("src"); document.getElementById("audio-review-title").textContent = "Аудиоответ " + (submission.studentName || "ученика"); document.getElementById("audio-review-meta").textContent = (submission.title || "Аудиоответ") + " · Отправлено: " + submissionDateTime(submission.createdAt || submission.updatedAt); document.getElementById("audio-review-comment").value = submission.teacherComment || ""; document.getElementById("audio-review-error").textContent = ""; document.getElementById("audio-review-action-status").textContent = ""; document.getElementById("audio-review-loading").hidden = false; modal.hidden = false; document.body.classList.add("modal-scroll-lock"); try { const blob = await window.lessonFlowCloud.loadAudioSubmissionFile(submission.id); audioReviewUrl = URL.createObjectURL(blob); player.src = audioReviewUrl; player.hidden = false; document.getElementById("audio-review-loading").hidden = true; } catch (error) { console.error("Audio review load error:", error); document.getElementById("audio-review-loading").hidden = true; document.getElementById("audio-review-error").textContent = error.status === 401 ? "Сессия истекла. Войдите снова." : error.status === 403 ? "Нет доступа к этому аудио." : error.status === 404 ? "Аудиофайл не найден." : "Не удалось открыть аудио."; } }
function closeAudioReview() { const player = document.getElementById("audio-review-player"); player.pause(); player.removeAttribute("src"); if (audioReviewUrl) URL.revokeObjectURL(audioReviewUrl); audioReviewUrl = ""; activeAudioReviewSubmission = null; document.getElementById("audio-review-modal").hidden = true; document.body.classList.remove("modal-scroll-lock"); }
async function submitAudioReview(status) { if (!activeAudioReviewSubmission) return; const comment = document.getElementById("audio-review-comment").value.trim(); const feedback = document.getElementById("audio-review-action-status"); if (status === "returned" && !comment) { feedback.textContent = "Напишите комментарий, почему ответ нужно записать заново."; return; } const verify = document.getElementById("verify-audio-review"); const returnButton = document.getElementById("return-audio-review"); verify.disabled = returnButton.disabled = true; try { await window.lessonFlowCloud.reviewAudioSubmission(activeAudioReviewSubmission, status, comment); closeAudioReview(); } catch (error) { console.error("Audio review save error:", error); feedback.textContent = "Не удалось сохранить результат проверки."; } finally { verify.disabled = returnButton.disabled = false; } }
document.getElementById("verify-audio-review").addEventListener("click", function() { submitAudioReview("verified"); }); document.getElementById("return-audio-review").addEventListener("click", function() { submitAudioReview("returned"); }); document.getElementById("close-audio-review").addEventListener("click", closeAudioReview); document.getElementById("close-audio-review-icon").addEventListener("click", closeAudioReview); document.getElementById("audio-review-modal").addEventListener("click", function(event) { if (event.target.id === "audio-review-modal") closeAudioReview(); });
document.addEventListener("keydown", function(event) { if (event.key !== "Escape") return; if (!document.getElementById("audio-review-modal").hidden) { event.stopImmediatePropagation(); closeAudioReview(); } else if (!document.getElementById("audio-submission-modal").hidden) { event.stopImmediatePropagation(); closeAudioSubmission(); } }, true);

function parseDurationToSeconds(value) { const match = String(value || "").trim().match(/^(\d+):([0-5]\d)$/); return match ? Number(match[1]) * 60 + Number(match[2]) : null; }
function formatDuration(seconds) { if (seconds == null || seconds === "") return ""; const total = Math.max(0, Math.round(Number(seconds) || 0)); return Math.floor(total / 60) + ":" + String(total % 60).padStart(2, "0"); }
function wordwallMistakeNotes() { return document.getElementById("wordwall-mistake-notes").value.split(/\r?\n/).map(function(item) { return item.trim(); }).filter(Boolean); }
function renderWordwallFocusOptions() { const notes = wordwallMistakeNotes(); const section = document.getElementById("wordwall-focus-selection"); const options = document.getElementById("wordwall-focus-options"); options.replaceChildren(); section.hidden = !notes.length; const normalize = function(value) { return String(value || "").trim().replace(/\s+/g, " ").toLocaleLowerCase("ru"); }; const existing = new Set(cloudFocusItems.map(function(item) { return normalize(item.title); })); notes.forEach(function(note) { const label = document.createElement("label"); const checkbox = document.createElement("input"); checkbox.type = "checkbox"; checkbox.value = note; checkbox.checked = !existing.has(normalize(note)); checkbox.disabled = existing.has(normalize(note)); label.appendChild(checkbox); label.append(note); if (checkbox.disabled) addTextElement(label, "small", "", "Уже в трудных местах"); options.appendChild(label); }); }
function openWordwallReview(submission) { activeWordwallReviewSubmission = submission; const details = document.getElementById("wordwall-review-details"); details.replaceChildren(); addTextElement(details, "p", "", "Ученик: " + (submission.studentName || "Ученик")); addTextElement(details, "p", "", "Задание: " + (submission.title || "Wordwall")); addTextElement(details, "p", "wordwall-check-status status-submitted", "🕒 Отправлено на проверку"); addTextElement(details, "p", "", "Дата отправки: " + submissionDateTime(submission.submittedAt || submission.updatedAt || submission.createdAt)); document.getElementById("wordwall-score").value = submission.scorePercent ?? ""; document.getElementById("wordwall-mistakes-count").value = submission.mistakesCount ?? ""; document.getElementById("wordwall-duration").value = formatDuration(submission.durationSec); document.getElementById("wordwall-mistake-notes").value = (submission.mistakeNotes || []).join("\n"); document.getElementById("wordwall-review-comment").value = submission.teacherComment || ""; renderWordwallFocusOptions(); document.getElementById("wordwall-review-status").textContent = ""; document.getElementById("wordwall-review-modal").hidden = false; document.body.classList.add("modal-scroll-lock"); }
function closeWordwallReview() { activeWordwallReviewSubmission = null; document.getElementById("wordwall-review-modal").hidden = true; document.body.classList.remove("modal-scroll-lock"); }
async function submitWordwallReview(status) { if (!activeWordwallReviewSubmission) return; const comment = document.getElementById("wordwall-review-comment").value.trim(); const feedback = document.getElementById("wordwall-review-status"); if (status === "returned" && !comment) { feedback.textContent = "Напишите комментарий, почему задание нужно выполнить ещё раз."; return; } const scoreValue = document.getElementById("wordwall-score").value.trim(); const mistakesValue = document.getElementById("wordwall-mistakes-count").value.trim(); const durationValue = document.getElementById("wordwall-duration").value.trim(); const score = scoreValue === "" ? null : Number(scoreValue); const mistakes = mistakesValue === "" ? null : Number(mistakesValue); const duration = durationValue === "" ? null : parseDurationToSeconds(durationValue); if (score !== null && (!Number.isInteger(score) || score < 0 || score > 100)) { feedback.textContent = "Результат должен быть целым числом от 0 до 100."; return; } if (mistakes !== null && (!Number.isInteger(mistakes) || mistakes < 0)) { feedback.textContent = "Количество ошибок должно быть целым неотрицательным числом."; return; } if (durationValue && duration === null) { feedback.textContent = "Укажите время в формате мм:сс."; return; } const notes = wordwallMistakeNotes(); const selectedFocus = Array.from(document.querySelectorAll('#wordwall-focus-options input:checked')).map(function(input) { return input.value; }); const result = { scorePercent: score, mistakesCount: mistakes, durationSec: duration, mistakeNotes: notes }; const verify = document.getElementById("verify-wordwall-review"); const returnButton = document.getElementById("return-wordwall-review"); verify.disabled = returnButton.disabled = true; try { await window.lessonFlowCloud.reviewWordwallSubmission(activeWordwallReviewSubmission, status, comment, result, status === "verified" ? selectedFocus : []); closeWordwallReview(); } catch (error) { console.error("Wordwall review save error:", error); feedback.textContent = "Не удалось сохранить результат проверки."; } finally { verify.disabled = returnButton.disabled = false; } }
document.getElementById("wordwall-mistake-notes").addEventListener("input", renderWordwallFocusOptions);
document.getElementById("verify-wordwall-review").addEventListener("click", function() { submitWordwallReview("verified"); }); document.getElementById("return-wordwall-review").addEventListener("click", function() { submitWordwallReview("returned"); }); document.getElementById("close-wordwall-review").addEventListener("click", closeWordwallReview); document.getElementById("wordwall-review-modal").addEventListener("click", function(event) { if (event.target.id === "wordwall-review-modal") closeWordwallReview(); });
document.addEventListener("keydown", function(event) { if (event.key === "Escape" && !document.getElementById("wordwall-review-modal").hidden) { event.stopImmediatePropagation(); closeWordwallReview(); } }, true);

function renderCalendar() {
    const container = document.getElementById("calendar-week");
    if (!container) return;
    container.replaceChildren();
    document.getElementById("add-schedule-event").hidden = !isFirebaseMode();
    const demoEvents = [["15:00", "Миша", "Английский", "Present Perfect"], ["17:00", "Аня", "Китайский", "正在 / 在"], ["19:00", "Лена", "Английский", "Travel"]].map(function(item, index) { return { id: "demo-" + index, date: localDateKey(new Date()), startTime: item[0], studentName: item[1], subject: item[2], topic: item[3], duration: 60, status: "scheduled" }; });
    const visibleEvents = isFirebaseMode() ? cloudScheduleEvents : demoEvents;
    const end = new Date(calendarWeekStart); end.setDate(end.getDate() + 6);
    document.getElementById("calendar-week-label").textContent = new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(calendarWeekStart) + " — " + new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(end);
    const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    dayNames.forEach(function(dayName, index) {
        const date = new Date(calendarWeekStart); date.setDate(date.getDate() + index);
        const dateKey = localDateKey(date);
        const column = document.createElement("section"); column.className = "calendar-day" + (dateKey === localDateKey(new Date()) ? " is-today" : "");
        const header = document.createElement("header"); addTextElement(header, "strong", "", dayName); addTextElement(header, "span", "", date.getDate()); column.appendChild(header);
        visibleEvents.filter(function(event) { return event.date === dateKey && event.status !== "cancelled"; }).sort(function(a, b) { return (a.startTime || "").localeCompare(b.startTime || ""); }).forEach(function(event) {
            const card = document.createElement("button"); card.type = "button"; card.className = "calendar-event status-" + (event.status || "scheduled");
            const statusIcon = document.createElement("img"); statusIcon.className = "teacher-calendar-status-icon"; statusIcon.src = "assets/teacher/calendar/calendar-status-" + (event.status === "completed" ? "completed" : event.status === "cancelled" ? "cancelled" : event.status === "prepared" ? "ready" : "prepare") + ".png"; statusIcon.alt = ""; card.appendChild(statusIcon);
            addTextElement(card, "strong", "", event.startTime); addTextElement(card, "span", "", event.studentName);
            if (event.planLessonId) addTextElement(card, "small", "calendar-plan-lesson", "L" + event.planLessonNumber + " · " + (event.planLessonTitle || "Урок программы"));
            else { addTextElement(card, "small", "", event.subject || ""); addTextElement(card, "small", "", event.topic || "Тема не указана"); }
            card.addEventListener("click", function() { openScheduleDetails(event); }); column.appendChild(card);
        });
        container.appendChild(column);
    });
}

function fillScheduleStudentOptions(selectedId) {
    const select = document.querySelector('#schedule-event-form [name="studentDocId"]'); select.replaceChildren(new Option("Выберите ученика", ""));
    cloudStudents.filter(function(student) { return student.status !== "archived"; }).sort(function(a, b) { return a.name.localeCompare(b.name, "ru"); }).forEach(function(student) { select.add(new Option(student.name, student.id)); });
    select.value = selectedId || "";
}

function openScheduleForm(event) {
    editingScheduleEventId = event?.id || null;
    const form = document.getElementById("schedule-event-form"); form.reset(); fillScheduleStudentOptions(event?.studentDocId);
    document.getElementById("schedule-event-title").textContent = event ? "Редактировать занятие" : "Добавить занятие";
    form.elements.date.value = event?.date || localDateKey(new Date());
    form.elements.startTime.value = event?.startTime || "15:00"; form.elements.duration.value = event?.duration || 60; form.elements.topic.value = event?.topic || "";
    document.getElementById("schedule-event-modal").hidden = false;
    loadSchedulePlanLessonOptions(event);
}

async function loadSchedulePlanLessonOptions(event) {
    const field = document.getElementById("schedule-plan-lesson-field"); const select = document.querySelector('#schedule-event-form [name="planLessonId"]'); const note = document.getElementById("schedule-plan-lesson-note");
    field.hidden = !event; select.replaceChildren(new Option("Не назначен", "")); note.textContent = ""; if (!event) return;
    try { const program = await window.lessonFlowCloud.getLearningProgram(event.studentDocId); if (!program) { note.textContent = "У ученика нет активной программы"; return; } program.lessons.filter(function(lesson) { return !["completed", "skipped"].includes(lesson.status); }).forEach(function(lesson) { select.add(new Option("L" + lesson.lessonNumber + " · " + (lesson.title || "Урок программы"), lesson.id)); }); select.value = event.planLessonId || ""; }
    catch (error) { console.error("Program lessons loading error:", error); note.textContent = "Не удалось загрузить уроки программы"; }
}

function openScheduleDetails(event) {
    selectedScheduleEvent = event;
    const content = document.getElementById("schedule-details-content"); content.replaceChildren();
    addTextElement(content, "h3", "", event.studentName); addTextElement(content, "p", "", new Intl.DateTimeFormat("ru-RU", { weekday: "long", day: "numeric", month: "long" }).format(new Date(event.date + "T00:00:00")));
    addTextElement(content, "p", "", event.startTime + " · " + event.duration + " минут");
    if (event.planLessonId) addTextElement(content, "p", "schedule-plan-detail", "По программе: L" + event.planLessonNumber + " · " + (event.planLessonTitle || "Урок программы"));
    addTextElement(content, "p", "", "Тема: " + (event.topic || event.planLessonTitle || "—"));
    document.getElementById("schedule-open-student").hidden = !isFirebaseMode();
    document.getElementById("schedule-edit").hidden = !isFirebaseMode();
    document.getElementById("schedule-cancel").hidden = !isFirebaseMode();
    const complete = document.getElementById("schedule-complete");
    const eventTime = new Date(event.date + "T" + (event.startTime || "00:00") + ":00").getTime();
    complete.hidden = !isFirebaseMode() || event.status === "completed" || event.status === "cancelled" || !event.lessonId || eventTime > Date.now();
    document.getElementById("schedule-details-modal").hidden = false;
}

document.getElementById("add-schedule-event").addEventListener("click", function() { openScheduleForm(null); });
document.getElementById("cancel-schedule-event").addEventListener("click", function() { document.getElementById("schedule-event-modal").hidden = true; });
document.getElementById("schedule-event-form").addEventListener("submit", async function(event) {
    event.preventDefault(); const form = event.currentTarget; const student = cloudStudents.find(function(item) { return item.id === form.elements.studentDocId.value; }); if (!student) return;
    const existing = editingScheduleEventId ? cloudScheduleEvents.find(function(item) { return item.id === editingScheduleEventId; }) : null;
    const data = { studentDocId: student.id, studentAuthUid: student.authUid || "", studentName: student.name, subject: student.subject || "", date: form.elements.date.value, startTime: form.elements.startTime.value, duration: Number(form.elements.duration.value), topic: form.elements.topic.value.trim(), status: existing?.status || "scheduled", lessonId: existing?.lessonId || "" };
    const submit = form.querySelector('[type="submit"]'); submit.disabled = true;
    try { await window.lessonFlowCloud.saveScheduleEvent(editingScheduleEventId, data); const selectedPlanLessonId = form.elements.planLessonId?.value || ""; if (editingScheduleEventId && selectedPlanLessonId !== (existing?.planLessonId || "")) await window.lessonFlowCloud.assignSchedulePlanLesson(editingScheduleEventId, selectedPlanLessonId); document.getElementById("schedule-event-modal").hidden = true; }
    catch (error) { console.error("Schedule save error:", error); document.getElementById("schedule-plan-lesson-note").textContent = error.code === "plan-lesson-already-scheduled" ? "Этот урок уже запланирован на " + error.date + " в " + error.startTime + "." : "Не удалось сохранить занятие"; }
    finally { submit.disabled = false; }
});
document.getElementById("previous-week").addEventListener("click", function() { calendarWeekStart.setDate(calendarWeekStart.getDate() - 7); renderCalendar(); });
document.getElementById("next-week").addEventListener("click", function() { calendarWeekStart.setDate(calendarWeekStart.getDate() + 7); renderCalendar(); });
document.getElementById("current-week").addEventListener("click", function() { calendarWeekStart = startOfWeek(new Date()); renderCalendar(); });
document.getElementById("schedule-close").addEventListener("click", function() { document.getElementById("schedule-details-modal").hidden = true; });
document.getElementById("schedule-open-student").addEventListener("click", function() { const student = cloudStudents.find(function(item) { return item.id === selectedScheduleEvent?.studentDocId; }); if (student) { document.getElementById("schedule-details-modal").hidden = true; openStudentCard(student); } });
document.getElementById("schedule-prepare").addEventListener("click", function() { if (selectedScheduleEvent) { document.getElementById("schedule-details-modal").hidden = true; openScheduleLesson(selectedScheduleEvent); } });
document.getElementById("schedule-edit").addEventListener("click", function() { if (selectedScheduleEvent) { document.getElementById("schedule-details-modal").hidden = true; openScheduleForm(selectedScheduleEvent); } });
document.getElementById("schedule-cancel").addEventListener("click", async function() { if (!selectedScheduleEvent) return; try { await window.lessonFlowCloud.cancelScheduleEvent(selectedScheduleEvent.id); document.getElementById("schedule-details-modal").hidden = true; } catch (error) { console.error("Schedule cancel error:", error); } });
document.getElementById("schedule-complete").addEventListener("click", async function() {
    if (!selectedScheduleEvent || !window.confirm("Завершить проведённый урок? Домашнее задание останется доступно ученику.")) return;
    const button = this; button.disabled = true;
    try { await window.lessonFlowCloud.completeScheduledLesson(selectedScheduleEvent.id); document.getElementById("schedule-details-modal").hidden = true; }
    catch (error) { console.error("Lesson completion error:", error); window.alert(error.code === "failed-precondition" ? "Сначала опубликуйте материалы этого занятия." : "Не удалось завершить урок. Попробуйте ещё раз."); }
    finally { button.disabled = false; }
});

function cloudLessonStateKey(lesson) {
    return lesson.cloudId ? lesson.student + "-cloud" : lesson.student + "-" + lesson.publishedAt;
}

function applyCloudProgress(lesson) {
    const completed = {};
    (cloudProgress.completedBlockIds || []).forEach(function(id) { completed[id] = true; });
    studentLessonState[cloudLessonStateKey(lesson)] = {
        completedBlocks: completed,
        reflection: cloudProgress.selfAssessment || "",
        repeatRequest: Boolean(cloudProgress.repeatRequest),
        externalChecks: cloudProgress.externalChecks || {}
    };
}

function getCurrentPlan() {
    if (!selectedLessonStudent) return [];
    if (!lessonPlans[selectedLessonStudent]) lessonPlans[selectedLessonStudent] = [];
    return lessonPlans[selectedLessonStudent];
}

function savePlans() {
    try {
        localStorage.setItem("lessonFlowLessonPlans", JSON.stringify(lessonPlans));
        if (lessonScreen?.classList.contains("active")) {
            const headerState = document.querySelector(".lesson-header-state");
            if (headerState) headerState.textContent = "● Есть несохранённые изменения";
        }
    } catch (error) {
        lessonSaveStatus.textContent = "План сохранён до закрытия страницы.";
    }
}

function currentLessonDraftKey() { return preparingScheduleEventId ? "event:" + preparingScheduleEventId : "student:" + (selectedStudentRecord?.id || selectedLessonStudent || "unknown"); }
function saveCurrentLessonDraft() { const key = currentLessonDraftKey(); lessonDrafts[key] = { key: key, eventId: preparingScheduleEventId || null, studentId: selectedStudentRecord?.id || null, studentName: selectedStudentRecord?.name || selectedLessonStudent || "Ученик", programId: preparingPlanLessonContext?.programId || null, planLessonId: preparingPlanLessonContext?.id || null, lessonNumber: preparingPlanLessonContext?.lessonNumber || null, lessonTitle: preparingPlanLessonContext?.title || selectedStudentRecord?.currentTopic || "Урок", date: preparingPlanLessonContext?.date || null, startTime: preparingPlanLessonContext?.startTime || null, blocks: JSON.parse(JSON.stringify(getCurrentPlan())), updatedAt: new Date().toISOString(), status: "draft" }; localStorage.setItem("lessonFlowLessonDrafts", JSON.stringify(lessonDrafts)); return lessonDrafts[key]; }

const materialTypeThemeMap = {
    textbook: { label: "Учебник", aliases: ["textbook", "book", "учебник"] },
    worksheet: { label: "Рабочий лист", aliases: ["worksheet", "рабочий лист"] },
    game: { label: "Онлайн-игра", aliases: ["online-game", "game", "онлайн-игра"] },
    video: { label: "Видео", aliases: ["video", "видео"] },
    site: { label: "Мой сайт", aliases: ["site", "my-site", "мой сайт", "мои сайты"] },
    link: { label: "Ссылка", aliases: ["link", "ссылка", "ссылки"] },
    other: { label: "Другое", aliases: ["other", "другое", ""] }
};

function getMaterialTypeTheme(type) {
    const value = String(type || "").trim().toLocaleLowerCase("ru");
    const entry = Object.entries(materialTypeThemeMap).find(function(item) { return item[1].aliases.includes(value); });
    const key = entry?.[0] || "other";
    return { key: key, label: materialTypeThemeMap[key].label };
}

function applyMaterialTypeTheme(element, type) {
    const theme = getMaterialTypeTheme(type);
    element.classList.add("material-themed", "material-theme--" + theme.key);
    element.dataset.materialType = theme.label;
    return theme;
}

function addMaterialTypeBadge(parent, type) {
    const theme = getMaterialTypeTheme(type);
    return addTextElement(parent, "p", "material-type", theme.label);
}

function materialDetails(material) {
    const parts = [getMaterialTypeTheme(material.type).label];
    if (material.service) parts.push(material.service);
    return parts.join(" · ");
}

function setYouglishControls(enabled) {
    [youglishPrevious, youglishReplay, youglishNext, youglishSpeed].forEach(function(control) {
        control.disabled = !enabled;
    });
}

function onYouglishFetchDone(event) {
    const total = Number(event.totalResult) || 0;
    youglishStatus.classList.toggle("is-empty", total === 0);
    youglishStatus.textContent = total === 0
        ? "Для этого запроса примеры не найдены. Попробуйте другое слово или выражение."
        : "Найдено примеров: " + total;
    setYouglishControls(total > 0);
}

window.onYouglishAPIReady = function() {
    if (youglishPlayer || !window.YG) return;

    youglishPlayer = new window.YG.Widget("youglish-widget", {
        components: 4 + 8 + 16 + 64,
        autoStart: 0,
        restrictionMode: 1,
        events: {
            onFetchDone: onYouglishFetchDone,
            onPlayerReady: function() { youglishReady = true; youglishSearchButton.disabled = false; },
            onError: function() {
                youglishStatus.classList.add("is-empty");
                youglishStatus.textContent = "Не удалось загрузить примеры. Попробуйте ещё раз немного позже.";
                setYouglishControls(false);
            }
        }
    });

    youglishReady = true;
    youglishSearchButton.disabled = false;
    youglishStatus.textContent = "Введите слово или выражение.";
};

const youglishScript = document.createElement("script");
youglishScript.src = "https://youglish.com/public/emb/widget.js";
youglishScript.async = true;
youglishScript.charset = "utf-8";
youglishScript.addEventListener("error", function() {
    youglishStatus.classList.add("is-empty");
    youglishStatus.textContent = "Не удалось загрузить поиск примеров. Проверьте подключение к интернету.";
});
document.head.appendChild(youglishScript);

function updateYouglishAccents() {
    const chinese = youglishLanguage.value === "chinese";
    const options = chinese
        ? [["", "Любой"], ["cn", "Mainland China"], ["tw", "Taiwan"]]
        : [["", "Любой"], ["us", "US"], ["uk", "UK"], ["aus", "Australia"], ["ca", "Canada"]];

    youglishAccent.replaceChildren();
    options.forEach(function(option) {
        const element = document.createElement("option");
        element.value = option[0];
        element.textContent = option[1];
        youglishAccent.appendChild(element);
    });
    youglishAccentLabel.textContent = chinese ? "Вариант китайского" : "Вариант английского";
}

function runYouglishSearch(query, language, accent) {
    if (!youglishReady || !youglishPlayer) {
        youglishStatus.textContent = "Поиск ещё загружается. Попробуйте через несколько секунд.";
        return;
    }

    lastYouglishSearch = { query: query, language: language, accent: accent || "" };
    youglishStatus.classList.remove("is-empty");
    youglishStatus.textContent = "Ищем примеры…";
    setYouglishControls(false);
    if (accent) youglishPlayer.fetch(query, language, accent);
    else youglishPlayer.fetch(query, language);
}

function openYouglishTraining(block) {
    youglishModal.hidden = false;
    youglishLessonOptions.hidden = studentLessonScreen.classList.contains("active");
    updateYouglishAccents();
    if (block) {
        youglishQuery.value = block.query;
        youglishLanguage.value = block.language;
        updateYouglishAccents();
        youglishAccent.value = block.accent || "";
        youglishExampleCount.value = String(block.exampleCount || 3);
        youglishInstruction.value = block.instruction;
        runYouglishSearch(block.query, block.language, block.accent);
    } else {
        youglishQuery.focus();
    }
}

function closeYouglish() {
    youglishModal.hidden = true;
    if (youglishPlayer && youglishReady) youglishPlayer.pause();
}

updateYouglishAccents();
openYouglishButton.addEventListener("click", function() { openYouglishTraining(); });
closeYouglishButton.addEventListener("click", closeYouglish);
closeYouglishIcon.addEventListener("click", closeYouglish);
youglishModal.addEventListener("click", function(event) { if (event.target === youglishModal) closeYouglish(); });
youglishLanguage.addEventListener("change", updateYouglishAccents);

youglishSearchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const query = youglishQuery.value.trim();
    if (query) runYouglishSearch(query, youglishLanguage.value, youglishAccent.value);
});

youglishPrevious.addEventListener("click", function() { if (youglishReady) youglishPlayer.previous(); });
youglishReplay.addEventListener("click", function() { if (youglishReady) youglishPlayer.replay(); });
youglishNext.addEventListener("click", function() { if (youglishReady) youglishPlayer.next(); });
youglishSpeed.addEventListener("change", function() { if (youglishReady) youglishPlayer.setSpeed(Number(youglishSpeed.value)); });

addYouglishToLesson.addEventListener("click", function() {
    const query = youglishQuery.value.trim();
    if (!query) {
        youglishQuery.focus();
        youglishStatus.textContent = "Сначала введите слово или выражение.";
        return;
    }

    getCurrentPlan().push({
        id: "youglish-" + Date.now(),
        type: "youglish",
        title: query + " — примеры в живой речи",
        query: query,
        language: youglishLanguage.value,
        accent: youglishAccent.value,
        exampleCount: Number(youglishExampleCount.value),
        instruction: youglishInstruction.value.trim(),
        description: youglishInstruction.value.trim(),
        audience: "teacher",
        duration: 10,
        time: 10
    });
    savePlans();
    renderLessonPlan();
    closeYouglish();
});

function isPreviewType(type) {
    return ["Онлайн-игра", "Видео", "Мой сайт", "online-game", "video"].includes(type);
}

function youtubeEmbedUrl(link) {
    try {
        const url = new URL(link);
        let videoId = "";

        if (url.hostname === "youtu.be" || url.hostname === "www.youtu.be") {
            videoId = url.pathname.split("/").filter(Boolean)[0] || "";
        } else if (["youtube.com", "www.youtube.com", "m.youtube.com"].includes(url.hostname)) {
            if (url.pathname === "/watch") videoId = url.searchParams.get("v") || "";
            if (url.pathname.startsWith("/embed/") || url.pathname.startsWith("/shorts/")) {
                videoId = url.pathname.split("/")[2] || "";
            }
        }

        return /^[a-zA-Z0-9_-]{6,}$/.test(videoId)
            ? "https://www.youtube.com/embed/" + videoId
            : link;
    } catch (error) {
        return link;
    }
}

function closePreview() {
    previewModal.hidden = true;
    previewFrame.removeAttribute("src");
    previewModal.classList.remove("youtube-preview-layer");
    document.body.classList.remove("modal-scroll-lock");
    previewYoutubeMaterial = null;
}

function openPreview(resource) {
    const link = (resource.link || "").trim();
    previewTitle.textContent = resource.title || "Предпросмотр материала";
    previewMeta.textContent = [resource.type, resource.service].filter(Boolean).join(" · ");
    previewModal.hidden = false;
    const youtubePreview = resource.service === "YouTube";
    const elevatedPreview = youtubePreview || (!findMoreModal.hidden && isPreviewType(resource.type));
    previewModal.classList.toggle("youtube-preview-layer", elevatedPreview);
    document.body.classList.add("modal-scroll-lock");
    previewYoutubeMaterial = youtubePreview ? resource.youtubeMaterial || null : null;
    previewSaveYoutube.hidden = !previewYoutubeMaterial;
    previewSaveYoutube.disabled = false;
    previewSaveYoutube.textContent = "+ В библиотеку";
    if (previewYoutubeMaterial && cloudMaterials.some(function(saved) { return normalizeMatchText(saved.url || saved.link) === normalizeMatchText(previewYoutubeMaterial.url); })) {
        previewSaveYoutube.disabled = true; previewSaveYoutube.textContent = "✓ В библиотеке";
    }
    if (youtubePreview && resource.channel) previewMeta.textContent = resource.channel;
    previewNewTab.textContent = youtubePreview ? "Открыть на YouTube" : resource.service === "Wordwall" ? "Открыть Wordwall" : "Открыть в новой вкладке";
    previewWarning.textContent = elevatedPreview && !youtubePreview
        ? "Если область просмотра пуста, этот ресурс нельзя показать внутри LessonFlow. Откройте его в новой вкладке."
        : "Этот ресурс может запрещать встроенный просмотр.";

    let validLink = "";
    try {
        const parsedLink = new URL(link);
        if (["http:", "https:"].includes(parsedLink.protocol)) validLink = parsedLink.href;
    } catch (error) {
        validLink = "";
    }

    if (!validLink) {
        previewFrame.hidden = true;
        previewPlaceholder.hidden = false;
        previewPlaceholder.replaceChildren();
        if (resource.service === "Wordwall" && resource.fallbackLink) {
            addTextElement(previewPlaceholder, "p", "", "Для этого Wordwall ещё не добавлен код встраивания.");
            const help = addTextElement(previewPlaceholder, "a", "secondary-button link-button", "Как получить код"); help.href = "https://wordwall.net/features"; help.target = "_blank"; help.rel = "noopener noreferrer";
            previewNewTab.hidden = false; previewNewTab.href = resource.fallbackLink;
        } else {
            previewPlaceholder.textContent = link ? "Укажите корректную ссылку http:// или https://" : "Ссылка пока не добавлена";
            previewNewTab.hidden = true;
        }
        return;
    }

    previewFrame.hidden = false;
    previewPlaceholder.hidden = true;
    previewNewTab.hidden = false;
    previewNewTab.href = resource.fallbackLink || validLink;
    previewFrame.src = youtubeEmbedUrl(validLink);
}

closePreviewButton.addEventListener("click", closePreview);
closePreviewIcon.addEventListener("click", closePreview);
previewModal.addEventListener("click", function(event) {
    if (event.target === previewModal) closePreview();
});

previewSaveYoutube.addEventListener("click", async function() {
    if (!previewYoutubeMaterial) return;
    const material = previewYoutubeMaterial;
    const duplicate = cloudMaterials.some(function(saved) { return normalizeMatchText(saved.url || saved.link) === normalizeMatchText(material.url); });
    if (duplicate) { previewSaveYoutube.disabled = true; previewSaveYoutube.textContent = "✓ В библиотеке"; return; }
    previewSaveYoutube.disabled = true;
    try {
        const id = await window.lessonFlowCloud.saveMaterial(null, material); material.id = id;
        cloudMaterials.push({ ...material }); materials = cloudMaterials; renderMaterials(); renderRecommendedMaterials();
        previewSaveYoutube.textContent = "✓ В библиотеке";
    } catch (error) { console.error("YouTube preview material save error:", error); previewSaveYoutube.disabled = false; previewSaveYoutube.textContent = "Не удалось сохранить"; }
});

function updateMaterialLinkRequirement() {
    const required = isPreviewType(newMaterialType.value) || newMaterialType.value === "Ссылка";
    newMaterialLink.required = required;
    checkMaterialPreview.hidden = !isPreviewType(newMaterialType.value);
    const wordwall = materialForm.elements.service.value === "Wordwall";
    const linkLabel = document.getElementById("material-link-label");
    if (linkLabel?.firstChild) linkLabel.firstChild.nodeValue = wordwall ? "Ссылка задания Wordwall" : "Ссылка";
    document.querySelectorAll(".wordwall-embed-field").forEach(function(element) { element.hidden = !wordwall; });
}

newMaterialType.addEventListener("change", updateMaterialLinkRequirement);
materialForm.elements.service.addEventListener("change", updateMaterialLinkRequirement);
updateMaterialLinkRequirement();

function extractWordwallEmbedUrl(value) {
    const input = String(value || "").trim();
    if (!input) return "";
    let candidate = input;
    if (input.startsWith("<")) {
        const parsed = new DOMParser().parseFromString(input, "text/html");
        candidate = parsed.querySelector("iframe")?.getAttribute("src") || "";
    }
    try {
        const url = new URL(candidate);
        const host = url.hostname.toLocaleLowerCase("en").replace(/^www\./, "");
        return (host === "wordwall.net" || host.endsWith(".wordwall.net")) && url.pathname.startsWith("/embed/") ? url.href : null;
    } catch (error) { return null; }
}

checkMaterialPreview.addEventListener("click", function() {
    if (!newMaterialLink.reportValidity()) return;
    const wordwall = materialForm.elements.service.value === "Wordwall";
    const embedUrl = wordwall ? extractWordwallEmbedUrl(materialForm.elements.embedCode.value) : "";
    if (wordwall && !embedUrl) {
        openPreview({ title: document.getElementById("new-material-title").value.trim() || "Wordwall", type: "Онлайн-игра", service: "Wordwall", link: "", fallbackLink: newMaterialLink.value.trim() });
        return;
    }
    openPreview({
        title: document.getElementById("new-material-title").value.trim() || "Новый материал",
        type: newMaterialType.value,
        service: newMaterialType.value === "Видео" ? "YouTube" : "",
        link: embedUrl || newMaterialLink.value.trim(), fallbackLink: newMaterialLink.value.trim()
    });
});

function addMaterialToPlan(material, audience) {
    const plan = getCurrentPlan();
    const alreadyAdded = plan.some(function(block) {
        return block.sourceTitle === material.title;
    });

    if (!alreadyAdded) {
        plan.push({
            id: "block-" + Date.now() + "-" + Math.random().toString(16).slice(2),
            sourceTitle: material.title,
            title: material.title,
            type: material.type,
            description: material.description,
            url: material.url || material.link || "",
            link: material.url || material.link || "",
            embedUrl: material.embedUrl || "",
            verificationMode: material.verificationMode || (material.service === "Wordwall" ? "teacher" : ""),
            resultsTitle: material.resultsTitle || "",
            service: material.service || "",
            materialId: material.id || material.materialId || "",
            format: material.format || "",
            pages: Array.isArray(material.pages) ? material.pages.map(function(page, index) { return { ...page, order: index + 1 }; }) : [],
            pageCount: Number(material.pageCount || material.pages?.length || 0),
            audience: audience === "teacher" ? "teacher" : "student",
            time: 10
        });
        savePlans();
    }

    renderLessonPlan();
    renderRecommendedMaterials();
}

function normalizeMatchText(value) {
    return String(value || "").toLocaleLowerCase("ru").trim().replace(/\s+/g, " ");
}

function materialSearchParts(material) {
    return {
        title: normalizeMatchText(material.title), topic: normalizeMatchText(material.topic),
        description: normalizeMatchText(material.description), tags: (material.tags || []).map(normalizeMatchText)
    };
}

function scoreMaterialForStudent(material, student, focusItems) {
    const source = materialSearchParts(material);
    const searchable = [source.title, source.topic, source.description].concat(source.tags).join(" ");
    let score = 0; const reasons = []; const labels = []; const matchedFocusIds = [];
    focusItems.forEach(function(focus) {
        const title = normalizeMatchText(focus.title); if (!title) return;
        let matched = false;
        if (source.tags.includes(title)) { score += 5; matched = true; }
        if (source.title.includes(title)) { score += 4; matched = true; }
        if (source.topic === title) { score += 4; matched = true; }
        const noteWords = normalizeMatchText(focus.note).split(/[^\p{L}\p{N}-]+/u).filter(function(word) { return word.length >= 3; });
        if (noteWords.some(function(word) { return searchable.includes(word); })) { score += 1; matched = true; }
        if (matched) {
            reasons.push(focus.title + " — " + (focusStatusLabels[focus.status] || focus.status).toLocaleLowerCase("ru"));
            labels.push("По трудному месту");
            matchedFocusIds.push(focus.id);
        }
    });
    const derived = selectedStudentDerivedState(student);
    derived.reviewTopics.filter(function(item) { return ["request", "legacy"].includes(item.source); }).map(function(item) { return [item.title, 3, "Для повторения"]; }).concat([[derived.current.topic, 3, "По текущей теме"]]).forEach(function(rule) {
        const value = normalizeMatchText(rule[0]); if (!value) return;
        if (source.tags.includes(value) || source.topic === value || source.title.includes(value)) {
            score += rule[1];
            const alreadyExplainedByFocus = reasons.some(function(reason) { return normalizeMatchText(reason).startsWith(value + " —"); });
            if (!alreadyExplainedByFocus) reasons.push(rule[0]);
            labels.push(rule[2]);
        }
    });
    const subjectMatches = normalizeMatchText(material.subject) === normalizeMatchText(student.subject);
    const levelMatches = normalizeMatchText(material.level) === normalizeMatchText(student.level);
    if (subjectMatches) score += 2;
    if (levelMatches) { score += 2; labels.push("По уровню"); }
    if (subjectMatches || levelMatches) reasons.push([subjectMatches ? student.subject : "", levelMatches ? student.level : ""].filter(Boolean).join(" · "));
    return { material: material, score: score, reasons: Array.from(new Set(reasons)), labels: Array.from(new Set(labels)), matchedFocusIds: matchedFocusIds };
}

function renderRecommendedMaterials() {
    recommendedMaterials.replaceChildren();
    if (isFirebaseMode() && selectedStudentRecord) {
        const relevantFocus = cloudFocusItems.filter(function(item) { return ["repeat", "practice", "learning"].includes(item.status); });
        let recommendations = materials.map(function(material) { return scoreMaterialForStudent(material, selectedStudentRecord, relevantFocus); })
            .filter(function(item) { return item.score >= 4; }).sort(function(a, b) { return b.score - a.score || a.material.title.localeCompare(b.material.title, "ru"); });
        if (recommendationFocusId) recommendations = recommendations.filter(function(item) { return item.matchedFocusIds.includes(recommendationFocusId); });
        if (recommendationFocusId) {
            const filterBar = document.createElement("div"); filterBar.className = "recommendation-filter-bar";
            const focus = cloudFocusItems.find(function(item) { return item.id === recommendationFocusId; }); addTextElement(filterBar, "span", "", "Материалы по теме: " + (focus?.title || ""));
            const all = addTextElement(filterBar, "button", "secondary-button", "Показать все"); all.type = "button"; all.addEventListener("click", function() { recommendationFocusId = null; recommendationLimit = 6; renderRecommendedMaterials(); }); filterBar.appendChild(all); recommendedMaterials.appendChild(filterBar);
        }
        if (!recommendations.length) {
            const empty = document.createElement("div"); empty.className = "recommendations-empty";
            addTextElement(empty, "p", "", "Пока рекомендаций нет."); recommendedMaterials.appendChild(empty); return;
        }
        recommendations.slice(0, recommendationLimit).forEach(function(recommendation) {
            const material = recommendation.material; const item = document.createElement("article"); item.className = "recommended-item recommendation-rich";
            applyMaterialTypeTheme(item, material.type);
            const text = document.createElement("div"); addMaterialTypeBadge(text, material.type); addTextElement(text, "strong", "", material.title); addTextElement(text, "p", "", materialDetails(material) + (material.description ? " · " + material.description : ""));
            const labels = document.createElement("div"); labels.className = "recommendation-labels"; recommendation.labels.forEach(function(label) { addTextElement(labels, "span", "", label); }); text.appendChild(labels);
            addTextElement(text, "small", "recommendation-why", "Почему предложено"); const reasons = document.createElement("ul"); recommendation.reasons.slice(0, 4).forEach(function(reason) { addTextElement(reasons, "li", "", reason); }); text.appendChild(reasons); item.appendChild(text);
            const actions = document.createElement("div"); actions.className = "recommendation-actions"; const teacherAdded = getCurrentPlan().some(function(block) { return block.sourceTitle === material.title && block.audience === "teacher"; }); const studentAdded = getCurrentPlan().some(function(block) { return block.sourceTitle === material.title && block.audience !== "teacher"; }); if (teacherAdded || studentAdded) { item.classList.add("is-selected"); addTextElement(text, "span", "material-selection-state", teacherAdded ? "✓ Добавлено учителю" : "✓ Добавлено ученику"); } const teacherButton = addTextElement(actions, "button", "secondary-button", teacherAdded ? "✓ У учителя" : "+ Учителю"); teacherButton.type = "button"; teacherButton.disabled = teacherAdded || studentAdded; teacherButton.addEventListener("click", function() { addMaterialToPlan(material, "teacher"); }); const studentButton = addTextElement(actions, "button", "small-button", studentAdded ? "✓ У ученика" : "+ Ученику"); studentButton.type = "button"; studentButton.disabled = teacherAdded || studentAdded; studentButton.addEventListener("click", function() { addMaterialToPlan(material, "student"); }); const detailsButton = addTextElement(actions, "button", "recommendation-details-toggle", "Подробнее ▾"); detailsButton.type = "button"; detailsButton.addEventListener("click", function() { item.classList.toggle("is-expanded"); detailsButton.textContent = item.classList.contains("is-expanded") ? "Свернуть ▴" : "Подробнее ▾"; }); item.appendChild(actions); recommendedMaterials.appendChild(item);
        });
        if (recommendations.length > recommendationLimit) { const more = addTextElement(recommendedMaterials, "button", "secondary-button recommendation-more", "Показать ещё"); more.type = "button"; more.addEventListener("click", function() { recommendationLimit += 6; renderRecommendedMaterials(); }); }
        return;
    }
    const profile = selectedStudentRecord ? {
        level: selectedStudentRecord.level || "",
        topic: selectedStudentDerivedState(selectedStudentRecord).current.topic,
        reviewTopics: selectedStudentDerivedState(selectedStudentRecord).reviewTopics.map(function(item) { return item.title; })
    } : studentProfiles[selectedLessonStudent];
    if (!profile) return;

    const suitable = materials.filter(function(material) {
        return material.topic === profile.topic || profile.reviewTopics.includes(material.title);
    });

    suitable.forEach(function(material) {
        const item = document.createElement("article");
        item.className = "recommended-item";
        applyMaterialTypeTheme(item, material.type);
        const text = document.createElement("div");
        addMaterialTypeBadge(text, material.type);
        addTextElement(text, "strong", "", material.title);
        addTextElement(text, "p", "", materialDetails(material) + " · " + material.description);
        item.appendChild(text);

        const button = addTextElement(item, "button", "small-button", "+ Добавить в урок");
        const added = getCurrentPlan().some(function(block) { return block.sourceTitle === material.title; });
        button.type = "button";
        button.disabled = added;
        if (added) { button.textContent = "Добавлено"; item.classList.add("is-selected"); addTextElement(text, "span", "material-selection-state", "✓ Добавлено в урок"); }
        button.addEventListener("click", function() { addMaterialToPlan(material); });
        recommendedMaterials.appendChild(item);
    });
}

function renderLessonPlan() {
    const plan = getCurrentPlan();
    lessonPlanElement.replaceChildren();
    const studentZone = document.createElement("section"); studentZone.className = "lesson-audience-zone lesson-audience-student"; addTextElement(studentZone, "h3", "", "Ученику"); addTextElement(studentZone, "p", "lesson-audience-hint", "Это будет опубликовано как урок ученика.");
    const teacherZone = document.createElement("section"); teacherZone.className = "lesson-audience-zone lesson-audience-teacher"; addTextElement(teacherZone, "h3", "", "Для преподавателя"); addTextElement(teacherZone, "p", "lesson-audience-hint", "Материалы и заметки, которые ученик не увидит.");
    lessonPlanElement.append(studentZone, teacherZone);

    plan.forEach(function(block, index) {
        const item = document.createElement("article");
        item.className = "lesson-block";
        item.dataset.blockId = block.id;
        if (block.materialId) applyMaterialTypeTheme(item, block.type);
        const studentIndex = plan.slice(0, index + 1).filter(function(entry) { return entry.audience !== "teacher"; }).length;
        addTextElement(item, "div", "lesson-block-number", block.audience === "teacher" ? "T" : studentIndex);

        const content = document.createElement("div");
        if (block.materialId) addMaterialTypeBadge(content, block.type);
        addTextElement(content, "h4", "", block.title);
        if (block.type === "youglish") {
            addTextElement(content, "p", "", "Видео-примеры · YouGlish");
            const accentText = block.accent ? " · " + block.accent.toUpperCase() : "";
            addTextElement(content, "p", "youglish-block-details", "Язык: " + block.language + accentText + " · примеров: " + block.exampleCount);
            addTextElement(content, "p", "", block.instruction);
        } else {
            addTextElement(content, "p", "", block.type);
            addTextElement(content, "p", "", block.description);
        }
        if (isImageWorksheet(block)) { const preview = document.createElement("div"); preview.className = "worksheet-lesson-block-preview"; const image = document.createElement("img"); image.alt = "Первая страница рабочего листа"; image.hidden = true; const fallback = addTextElement(preview, "span", "", "Загружаем обложку…"); preview.appendChild(image); addTextElement(preview, "strong", "", Number(block.pageCount || block.pages.length) + " стр."); content.appendChild(preview); loadWorksheetThumbnail(block, image, fallback); }
        const submissionLabels = { none: "Ответ не требуется", "written-photo": "Фото письменной работы", audio: "Аудиоответ" };
        if (block.submissionType && block.submissionType !== "none") addTextElement(content, "p", "lesson-block-submission", "Сдача: " + (submissionLabels[block.submissionType] || block.submissionType));
        item.appendChild(content);

        const controls = document.createElement("div");
        controls.className = "lesson-block-controls";

        if (block.type === "youglish") {
            const trainingButton = addTextElement(controls, "button", "preview-block lesson-icon-button", "◉");
            trainingButton.type = "button";
            trainingButton.title = "Открыть тренировку"; trainingButton.setAttribute("aria-label", "Открыть тренировку");
            trainingButton.addEventListener("click", function() { openYouglishTraining(block); });
        }

        if (isImageWorksheet(block)) { const worksheetOpen = addTextElement(controls, "button", "preview-block lesson-icon-button", "◉"); worksheetOpen.type = "button"; worksheetOpen.title = "Открыть рабочий лист"; worksheetOpen.setAttribute("aria-label", "Открыть рабочий лист"); worksheetOpen.addEventListener("click", function() { openWorksheetViewer(block); }); }

        if (block.link || /Онлайн-игра|Видео|Мой сайт|Wordwall|YouTube/i.test(block.type)) {
            const previewButton = addTextElement(controls, "button", "preview-block lesson-icon-button", "◉");
            previewButton.type = "button";
            previewButton.title = block.link ? "Открыть предпросмотр" : "Ссылка пока не добавлена";
            previewButton.disabled = !block.link;
            previewButton.addEventListener("click", function() {
                openPreview({ title: block.title, type: block.type, service: block.service, link: block.link });
            });
        }

        const editButton = addTextElement(controls, "button", "edit-block lesson-icon-button", "✎");
        editButton.type = "button";
        editButton.title = "Редактировать блок"; editButton.setAttribute("aria-label", "Редактировать блок");
        editButton.addEventListener("click", function() { openLessonBlockEditor(block); });
        const audienceTitle = block.audience === "teacher" ? "Переместить ученику" : "Переместить преподавателю";
        const audienceButton = addTextElement(controls, "button", "audience-block lesson-icon-button", block.audience === "teacher" ? "У" : "П"); audienceButton.type = "button"; audienceButton.title = audienceTitle; audienceButton.setAttribute("aria-label", audienceTitle); audienceButton.addEventListener("click", function() { block.audience = block.audience === "teacher" ? "student" : "teacher"; savePlans(); renderLessonPlan(); renderRecommendedMaterials(); });

        const timeLabel = document.createElement("label");
        timeLabel.className = "time-field";
        timeLabel.append("◷");
        timeLabel.title = "Время блока в минутах";
        const timeInput = document.createElement("input");
        timeInput.type = "number";
        timeInput.min = "1";
        timeInput.max = "180";
        timeInput.value = block.time;
        timeInput.setAttribute("aria-label", "Время блока «" + block.title + "» в минутах");
        timeInput.addEventListener("input", function() {
            block.time = Math.max(0, Number(timeInput.value) || 0);
            if (block.type === "youglish") block.duration = block.time;
            updateLessonTotal();
            savePlans();
        });
        timeLabel.appendChild(timeInput);
        controls.appendChild(timeLabel);

        const upButton = addTextElement(controls, "button", "", "↑");
        upButton.type = "button";
        upButton.disabled = index === 0;
        upButton.title = "Переместить выше";
        upButton.addEventListener("click", function() {
            plan.splice(index - 1, 0, plan.splice(index, 1)[0]);
            savePlans();
            renderLessonPlan();
        });

        const downButton = addTextElement(controls, "button", "", "↓");
        downButton.type = "button";
        downButton.disabled = index === plan.length - 1;
        downButton.title = "Переместить ниже";
        downButton.addEventListener("click", function() {
            plan.splice(index + 1, 0, plan.splice(index, 1)[0]);
            savePlans();
            renderLessonPlan();
        });

        const removeButton = addTextElement(controls, "button", "remove-block lesson-icon-button", "×");
        removeButton.type = "button";
        removeButton.title = "Удалить блок"; removeButton.setAttribute("aria-label", "Удалить блок");
        removeButton.addEventListener("click", function() {
            plan.splice(index, 1);
            savePlans();
            renderLessonPlan();
            renderRecommendedMaterials();
        });

        item.appendChild(controls);
        (block.audience === "teacher" ? teacherZone : studentZone).appendChild(item);
    });

    emptyLesson.hidden = true;
    if (!studentZone.querySelector(".lesson-block")) addTextElement(studentZone, "p", "lesson-zone-empty", "Урок пока пуст. Добавьте материалы из программы или библиотеки.");
    if (!teacherZone.querySelector(".lesson-block")) addTextElement(teacherZone, "p", "lesson-zone-empty", "Здесь можно оставить материалы и заметки, которые ученик не увидит.");
    if (activePreparationPlanLesson?.homework && !plan.some(function(block) { return block.programHomeworkSuggestion; })) {
        const homework = document.createElement("article"); homework.className = "lesson-homework-suggestion";
        const copy = document.createElement("div"); addTextElement(copy, "strong", "", "Домашнее задание по плану"); addTextElement(copy, "p", "", programPlanValue(activePreparationPlanLesson.homework)); homework.appendChild(copy);
        const add = addTextElement(homework, "button", "secondary-button", "+ Добавить как задание"); add.type = "button"; add.addEventListener("click", function() { const block = { id:"block-" + Date.now() + "-homework", title:"Домашнее задание", sourceTitle:"План программы", type:"Домашнее задание", description:programPlanValue(activePreparationPlanLesson.homework), submissionType:"none", audience:"student", time:10, programHomeworkSuggestion:true }; plan.push(block); savePlans(); renderLessonPlan(); openLessonBlockEditor(block); }); studentZone.appendChild(homework);
    }
    updateLessonTotal();
}

function updateLessonTotal() {
    const total = getCurrentPlan().reduce(function(sum, block) {
        return sum + (Number(block.time) || 0);
    }, 0);
    lessonTotalTime.textContent = total;
}

function programPlanValue(value) {
    if (value === undefined || value === null || value === "") return "";
    if (typeof value !== "object") return String(value);
    return Object.values(value).filter(function(item) { return item !== undefined && item !== null && item !== ""; }).join(" · ");
}
function addPreparationPlanSection(parent, title, value) {
    const text = programPlanValue(value); if (!text) return;
    const section = document.createElement("section"); section.className = "preparation-plan-section"; addTextElement(section, "h4", "", title); addTextElement(section, "p", "", text); parent.appendChild(section);
}
const knownSourceDefinitions = {
    "gateway-b1-sb": "Gateway B1 Student Book", "gateway-b1-wb": "Gateway B1 Workbook", "komarova-9": "Комарова 9", "destination-b1": "Destination B1", "murphy-egiu-5e": "Murphy EGIU 5e", "supplementary-5e": "Supplementary Exercises 5e", "wider-world-4": "Wider World 4", "gateway-b1plus": "Gateway B1+ Upgrade"
};
function sourceKeyFromText(value) {
    const text = normalizeMatchText(value);
    if (/gateway.*(workbook|wb)/.test(text)) return "gateway-b1-wb";
    if (/gateway.*(b1\+|upgrade)/.test(text)) return "gateway-b1plus";
    if (/gateway/.test(text)) return "gateway-b1-sb";
    if (/комарова|komarova/.test(text)) {
        const grade = text.match(/(?:^|\s)([1-9]|1[01])(?:\s|$|класс)/);
        return grade ? "komarova-" + grade[1] : "source-komarova";
    }
    if (/destination/.test(text)) return "destination-b1";
    if (/murphy|egiu/.test(text)) return "murphy-egiu-5e";
    if (/supplementary/.test(text)) return "supplementary-5e";
    if (/wider world/.test(text)) return "wider-world-4";
    let hash = 0; for (const character of text) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
    return "source-" + hash.toString(36);
}
function sourceDefinition(sourceText, fallbackKey) {
    const title = String(sourceText || "").trim();
    const key = title ? sourceKeyFromText(title) : fallbackKey;
    const canonicalTitle = knownSourceDefinitions[key] || "";
    return { key: key, title: title || knownSourceDefinitions[fallbackKey] || "Источник", type: "book", allowKeyFallback: !title || normalizeMatchText(canonicalTitle) === normalizeMatchText(title) };
}
function programSourceValue(program, fields) {
    for (const field of fields) {
        const value = program?.[field];
        if (typeof value === "string" && value.trim()) return value.trim();
        if (value && typeof value === "object") {
            const title = String(value.source || value.title || value.name || "").trim();
            if (title) return title;
        }
    }
    return "";
}
function resolveLessonMaterials(program, lesson) {
    const mainBook = lesson?.gateway;
    const workbook = lesson?.gatewayWorkbook;
    const schoolBridge = lesson?.schoolBridge;
    const mainTitle = String(mainBook?.source || "").trim() || programSourceValue(program, ["mainTextbook", "studentBook", "pupilsBook", "mainCourse"]);
    const workbookTitle = String(workbook?.source || "").trim() || programSourceValue(program, ["workbook", "workbookSource"]);
    const schoolTitle = String(schoolBridge?.source || "").trim() || programSourceValue(program, ["schoolCourse", "schoolBridge", "schoolTextbook"]);
    return {
        mainBook: { definition: sourceDefinition(mainTitle, "gateway-b1-sb"), reference: mainBook },
        workbook: { definition: sourceDefinition(workbookTitle, "gateway-b1-wb"), reference: workbook },
        schoolBridge: { definition: sourceDefinition(schoolTitle, "komarova-9"), reference: schoolBridge }
    };
}
function linkedPreparationSource(definition, reference) {
    const directUrl = reference?.url || reference?.asset || reference?.assetUrl || reference?.pdfUrl || reference?.link;
    if (directUrl) return { url: directUrl, title: definition.title };
    const normalizedTitle = normalizeMatchText(definition.title);
    const exact = teacherSources.find(function(source) {
        return source.url && normalizeMatchText(source.title) === normalizedTitle;
    });
    if (exact) return exact;
    const compatible = teacherSources.filter(function(source) {
        const sourceTitle = normalizeMatchText(source.title);
        return source.url && sourceTitle && normalizedTitle && (sourceTitle.includes(normalizedTitle) || normalizedTitle.includes(sourceTitle));
    });
    if (compatible.length === 1) return compatible[0];
    return definition.allowKeyFallback && teacherSources.find(function(source) {
        const sourceTitle = normalizeMatchText(source.title);
        const canonicalTitle = normalizeMatchText(knownSourceDefinitions[definition.key] || definition.title);
        return source.url && source.key === definition.key && (!sourceTitle || sourceTitle.includes(canonicalTitle) || canonicalTitle.includes(sourceTitle));
    });
}
function sourceReferenceText(reference) { return [reference?.unit, reference?.section, reference?.pages && "p. " + reference.pages, reference?.exercise && "Ex." + reference.exercise, reference?.topic, reference?.note].filter(Boolean).join(" · "); }
function openProgramMaterialInLibrary(definition, reference, lesson) {
    programLibrarySearchTerms = [definition.title, reference?.unit, reference?.section, reference?.topic, lesson?.title, lesson?.mainFocus].filter(Boolean).map(normalizeMatchText);
    materialSearch.value = definition.title; renderMaterials(); showScreen(libraryScreen); materialSearch.focus();
}
function openSourceLinkModal(definition, linkedSource) {
    linkingSourceDefinition = definition; const form = document.getElementById("source-link-form"); form.reset(); document.getElementById("source-link-title").textContent = linkedSource ? "Изменить источник" : "Привязать источник"; form.elements.title.value = definition.title; form.elements.provider.value = linkedSource?.provider || "google-drive"; form.elements.url.value = linkedSource?.url || ""; form.elements.notes.value = linkedSource?.notes || ""; document.getElementById("source-link-error").textContent = ""; document.getElementById("source-link-modal").hidden = false; (definition.title ? form.elements.url : form.elements.title).focus();
}
function createPreparationSourceCard(definition, reference, lesson) {
    const card = document.createElement("article"); card.className = "preparation-program-material preparation-source-registry-card"; addTextElement(card, "h5", "", definition.title); const details = sourceReferenceText(reference); if (details) addTextElement(card, "p", "", details);
    const linked = linkedPreparationSource(definition, reference); const actions = document.createElement("div"); actions.className = "student-card-actions";
    const primary = addTextElement(actions, "button", "secondary-button", "Открыть"); primary.type = "button"; primary.disabled = !linked; primary.title = linked ? "Открыть источник" : "Привяжите источник в Библиотеке"; primary.addEventListener("click", function() { if (linked) window.open(linked.url, "_blank", "noopener,noreferrer"); }); card.appendChild(actions); return card;
}
function openSourceUnlinkModal(source) {
    unlinkingSource = source; document.getElementById("source-unlink-error").textContent = ""; const storageName = source.provider === "google-drive" ? "Google Drive" : source.provider === "yandex-disk" ? "Яндекс Диске" : "внешнем хранилище"; document.getElementById("source-unlink-message").textContent = "Ссылка на “" + source.title + "” будет удалена из LessonFlow. Сам файл в " + storageName + " не удалится."; document.getElementById("source-unlink-modal").hidden = false;
}
document.getElementById("cancel-source-link").addEventListener("click", function() { document.getElementById("source-link-modal").hidden = true; linkingSourceDefinition = null; });
document.getElementById("cancel-source-unlink").addEventListener("click", function() { document.getElementById("source-unlink-modal").hidden = true; unlinkingSource = null; });
document.getElementById("confirm-source-unlink").addEventListener("click", async function() { if (!unlinkingSource) return; const button = this; button.disabled = true; try { const sourceId = unlinkingSource.id; await window.lessonFlowCloud.deleteSource(sourceId); teacherSources = teacherSources.filter(function(source) { return source.id !== sourceId; }); unlinkingSource = null; document.getElementById("source-unlink-modal").hidden = true; if (activePreparationPlanLesson) renderPreparationProgramPlan(activePreparationPlanLesson); if (libraryScreen.classList.contains("active")) renderMaterials(); } catch (error) { console.error("Source unlink error:", error); document.getElementById("source-unlink-error").textContent = "Не удалось удалить привязку: " + (error.code || error.message); } finally { button.disabled = false; } });
document.getElementById("source-link-form").addEventListener("submit", async function(event) {
    event.preventDefault(); if (!linkingSourceDefinition) return; const form = event.currentTarget; const submit = form.querySelector('[type="submit"]'); submit.disabled = true; document.getElementById("source-link-error").textContent = "";
    try { const title = form.elements.title.value.trim(); const saved = await window.lessonFlowCloud.saveSource({ ...linkingSourceDefinition, key: linkingSourceDefinition.key || sourceKeyFromText(title), title: title, provider: form.elements.provider.value, url: form.elements.url.value.trim(), notes: form.elements.notes.value.trim() }); teacherSources = teacherSources.filter(function(source) { return source.key !== saved.key; }); teacherSources.push(saved); document.getElementById("source-link-modal").hidden = true; linkingSourceDefinition = null; if (activePreparationPlanLesson) renderPreparationProgramPlan(activePreparationPlanLesson); if (libraryScreen.classList.contains("active")) renderMaterials(); }
    catch (error) { console.error("Source link save error:", error); document.getElementById("source-link-error").textContent = "Не удалось сохранить источник: " + (error.code || error.message); }
    finally { submit.disabled = false; }
});
function renderPreparationProgramPlan(lesson) {
    preparationProgramPlan.hidden = false; preparationProgramPlanContent.replaceChildren();
    const lessonMaterials = resolveLessonMaterials(activePreparationProgram, lesson);
    addTextElement(preparationProgramPlanContent, "h3", "preparation-plan-title", "L" + lesson.lessonNumber + " · " + (lesson.title || "Урок программы"));
    const summary = document.createElement("div"); summary.className = "preparation-plan-summary";
    addPreparationPlanSection(summary, "Цель урока", lesson.goal || lesson.mainFocus);
    addPreparationPlanSection(summary, "Основной курс", activePreparationProgram?.mainCourse || activePreparationProgram?.title);
    const mainSources = document.createElement("section"); mainSources.className = "preparation-plan-section preparation-main-sources"; addTextElement(mainSources, "h4", "", "Основной материал урока");
    [lessonMaterials.mainBook, lessonMaterials.workbook].forEach(function(item) { if (programPlanValue(item.reference)) mainSources.appendChild(createPreparationSourceCard(item.definition, item.reference, lesson)); });
    if (mainSources.querySelector(".preparation-program-material")) summary.appendChild(mainSources);
    if (programPlanValue(lesson.schoolBridge)) { const bridge = document.createElement("section"); bridge.className = "preparation-plan-section preparation-school-bridge"; addTextElement(bridge, "h4", "", "School Bridge"); bridge.appendChild(createPreparationSourceCard(lessonMaterials.schoolBridge.definition, lessonMaterials.schoolBridge.reference, lesson)); summary.appendChild(bridge); }
    addPreparationPlanSection(summary, "Домашнее задание по плану", lesson.homework);
    preparationProgramPlanContent.appendChild(summary);
    const details = document.createElement("div"); details.className = "preparation-plan-details"; details.hidden = true;
    const planContext = [lesson.weekNumber ? "Неделя " + lesson.weekNumber : "", lesson.lessonInWeek ? "Урок недели " + lesson.lessonInWeek : "", lesson.cycle, lesson.mainFocus, lesson.status].filter(Boolean).join(" · ");
    addPreparationPlanSection(details, "Контекст программы", planContext);
    if (Array.isArray(lesson.additionalMaterials) && lesson.additionalMaterials.length) { const section = document.createElement("section"); section.className = "preparation-plan-section"; addTextElement(section, "h4", "", "Дополнительные источники по программе · " + lesson.additionalMaterials.length); const grid = document.createElement("div"); grid.className = "preparation-program-materials"; lesson.additionalMaterials.forEach(function(programMaterial) { grid.appendChild(createPreparationSourceCard(sourceDefinition(programMaterial.source), programMaterial, lesson)); }); section.appendChild(grid); details.appendChild(section); }
    addPreparationPlanSection(details, "Retrieval", lesson.retrieval); addPreparationPlanSection(details, "Методическая заметка", lesson.methodicalNote); preparationProgramPlanContent.appendChild(details);
    const toggle = addTextElement(preparationProgramPlanContent, "button", "secondary-button preparation-plan-toggle", "Подробнее о плане ▾"); toggle.type = "button"; toggle.addEventListener("click", function() { details.hidden = !details.hidden; toggle.textContent = details.hidden ? "Подробнее о плане ▾" : "Свернуть план ▴"; });
}
function updateLessonBuilderProgramMeta() {
    lessonStudentMeta.querySelectorAll(".lesson-program-meta").forEach(function(item) { item.remove(); });
    if (activePreparationProgram?.mainCourse || activePreparationProgram?.title) addTextElement(lessonStudentMeta, "span", "lesson-program-meta", "Основной курс: " + (activePreparationProgram.mainCourse || activePreparationProgram.title));
    const bridgeName = activePreparationPlanLesson?.schoolBridge?.source;
    if (bridgeName) addTextElement(lessonStudentMeta, "span", "lesson-program-meta", "Школа: " + bridgeName);
}
async function loadPreparationProgramPlan() {
    const token = ++preparationPlanLoadToken; activePreparationPlanLesson = null; activePreparationProgram = null;
    if (!preparingPlanLessonContext?.programId || !preparingPlanLessonContext?.id || !isFirebaseMode()) { preparationProgramPlan.hidden = true; preparationProgramPlanContent.replaceChildren(); return; }
    preparationProgramPlan.hidden = false; preparationProgramPlanContent.replaceChildren(); addTextElement(preparationProgramPlanContent, "p", "student-empty-lesson", "Загружаем план урока…");
    try { const result = await Promise.all([window.lessonFlowCloud.getPlanLesson(preparingPlanLessonContext.programId, preparingPlanLessonContext.id), window.lessonFlowCloud.getSources().catch(function(error) { console.error("Sources loading error:", error); return []; })]); if (token !== preparationPlanLoadToken) return; activePreparationPlanLesson = result[0]; activePreparationProgram = result[0].program || null; teacherSources = result[1]; renderPreparationProgramPlan(activePreparationPlanLesson); updateLessonBuilderProgramMeta(); }
    catch (error) { if (token !== preparationPlanLoadToken) return; console.error("Plan lesson loading error:", error); preparationProgramPlanContent.replaceChildren(); addTextElement(preparationProgramPlanContent, "p", "student-empty-lesson", "Не удалось загрузить план этого урока."); }
}

function arrangeLessonBuilderSections() {
    const builder = lessonScreen.querySelector(".lesson-builder");
    const contextLayout = builder?.querySelector(".lesson-context-layout");
    const contextCard = contextLayout?.querySelector(".context-card");
    const recommendations = document.getElementById("recommended-materials-section");
    const planCard = builder?.querySelector(".lesson-plan-card");
    const youglish = builder?.querySelector(".youglish-tool-card");
    if (!builder || !contextLayout || !contextCard || !recommendations || !planCard || !youglish) return;
    contextLayout.replaceChildren(contextCard);
    contextLayout.classList.add("lesson-context-layout-compact");
    contextLayout.after(planCard, recommendations, youglish);
}
arrangeLessonBuilderSections();

function openLessonFor(studentValue) {
    const teacherOrigin = document.querySelector(".teacher-app.screen.active");
    if (teacherOrigin && teacherOrigin !== lessonScreen) teacherReturnScreen = teacherOrigin;
    const cloudStudent = typeof studentValue === "object" ? studentValue : null;
    const studentName = cloudStudent ? cloudStudent.name : studentValue;
    selectedStudentRecord = cloudStudent || null;
    recommendationLimit = 6;
    recommendationFocusId = null;
    if (cloudStudent) {
        cloudFocusItems = [];
        cloudProgress = { completedBlockIds: [], selfAssessment: "", repeatRequest: false, _exists: false };
        window.lessonFlowCloud.watchStudent(cloudStudent.authUid, cloudStudent.id);
    }
    selectedLessonStudent = cloudStudent ? cloudStudent.id : studentName;
    const storedDraft = lessonDrafts[currentLessonDraftKey()]; if (storedDraft?.blocks) lessonPlans[selectedLessonStudent] = JSON.parse(JSON.stringify(storedDraft.blocks)); const headerState = document.querySelector(".lesson-header-state"); if (headerState) headerState.textContent = storedDraft ? "Статус: Черновик" : "Статус: Не начат";
    const profile = cloudStudent ? {
        ...selectedStudentDerivedState(cloudStudent),
        meta: [[cloudStudent.level, cloudStudent.subject].filter(Boolean).join(" · "), cloudStudent.textbook ? "Учебник: " + cloudStudent.textbook : ""].filter(Boolean),
        level: cloudStudent.level || "", topic: selectedStudentDerivedState(cloudStudent).current.topic, reviewTopics: selectedStudentDerivedState(cloudStudent).reviewTopics.map(function(item) { return item.title; }),
        context: ["Текущая тема: " + selectedStudentDerivedState(cloudStudent).current.topic, selectedStudentDerivedState(cloudStudent).reviewTopics.length ? "Повторить: " + selectedStudentDerivedState(cloudStudent).reviewTopics.map(function(item) { return item.title; }).join(", ") : ""].filter(Boolean)
    } : studentProfiles[studentName] || {
        meta: ["Персональный урок"], level: "", topic: "", reviewTopics: [], context: ["Добавьте заметки об ученике"]
    };

    lessonStudentName.textContent = "Урок для: " + studentName;
    lessonStudentMeta.replaceChildren();
    profile.meta.forEach(function(item) { addTextElement(lessonStudentMeta, "span", "", item); });
    if (preparingPlanLessonContext) {
        if (preparingPlanLessonContext.date) addTextElement(lessonStudentMeta, "span", "", "Занятие: " + new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(new Date(preparingPlanLessonContext.date + "T00:00:00")) + " · " + preparingPlanLessonContext.startTime);
        addTextElement(lessonStudentMeta, "span", "", "По программе: L" + preparingPlanLessonContext.lessonNumber + " · " + (preparingPlanLessonContext.title || "Урок программы"));
    }
    document.getElementById("lesson-context-title").textContent = "Что учесть" + (studentName ? " по " + studentName : "");
    loadPreparationProgramPlan();
    renderLessonContext(cloudStudent || studentName);
    lessonSaveStatus.textContent = "";
    viewAsStudentButton.hidden = true;
    renderRecommendedMaterials();
    renderLessonPlan();
    showScreen(lessonScreen);
}

function formatLessonDate(dateValue) {
    return new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(new Date(dateValue));
}

function savePublishedLessons() {
    localStorage.setItem("lessonFlowPublishedLessons", JSON.stringify(publishedLessons));
}

function getPublishedState(lesson) {
    const key = cloudLessonStateKey(lesson);
    if (!studentLessonState[key]) {
        studentLessonState[key] = { completedBlocks: {}, reflection: "", repeatRequest: false, externalChecks: {} };
    }
    return studentLessonState[key];
}

function saveStudentLessonState() {
    if (isFirebaseMode() && firebaseProfile.role === "student" && activePublishedLesson) {
        const state = getPublishedState(activePublishedLesson);
        window.lessonFlowCloud.saveProgress({
            completedBlockIds: Object.keys(state.completedBlocks).filter(function(id) { return state.completedBlocks[id]; }),
            selfAssessment: state.reflection === "practice" ? "need-practice" : state.reflection,
            repeatRequest: state.repeatRequest,
            externalChecks: state.externalChecks || {}
        }).catch(function(error) {
            console.error("Firestore progress save error:", error);
            firebaseLoginError.textContent = error.code === "permission-denied"
                ? "Нет доступа к данным Firestore."
                : error.code === "unavailable"
                    ? "Сейчас нет соединения с базой. Попробуйте ещё раз."
                    : "Ошибка Firestore: " + (error.code || "unknown");
        });
        return;
    }
    localStorage.setItem("lessonFlowStudentLessonState", JSON.stringify(studentLessonState));
}

const reflectionSignals = {
    expert: { student: "😎 Могу объяснить другому", teacher: "Высокая уверенность" },
    clear: { student: "🙂 В целом понятно", teacher: "Понимает тему" },
    practice: { student: "🤔 Нужно ещё потренироваться", teacher: "Нужна практика" },
    unclear: { student: "🌫 Пока туманно", teacher: "Есть затруднения" }
};

function getLatestStudentResult(studentName) {
    const lesson = publishedLessons[studentName];
    if (!lesson) return null;
    const state = getPublishedState(lesson);
    const blocks = Array.isArray(lesson.blocks) ? lesson.blocks : [];
    const completed = blocks.filter(function(block) { return Boolean(state.completedBlocks[block.id]); }).length;
    const homework = blocks.filter(function(block) {
        return String(block.type || "").toLocaleLowerCase("ru").includes("домашнее задание");
    });
    const completedHomework = homework.filter(function(block) { return Boolean(state.completedBlocks[block.id]); }).length;

    return {
        lesson: lesson,
        state: state,
        total: blocks.length,
        completed: completed,
        percent: blocks.length ? Math.round(completed / blocks.length * 100) : 0,
        homeworkTotal: homework.length,
        homeworkCompleted: completedHomework,
        reflection: reflectionSignals[state.reflection] || null
    };
}

function homeworkResultText(result) {
    if (!result || !result.homeworkTotal) return "";
    if (result.homeworkCompleted === result.homeworkTotal) return "Выполнено полностью";
    if (result.homeworkCompleted === 0) return "Не начато";
    return result.homeworkCompleted + " из " + result.homeworkTotal + " выполнено";
}

function acknowledgeRepeatRequest() {
    const studentName = selectedStudentRecord?.name || "Миша";
    const result = getLatestStudentResult(studentName);
    if (!result) return;
    result.state.repeatRequest = false;
    if (isFirebaseMode() && firebaseProfile.role === "teacher" && result.lesson.cloudId) {
        renderTeacherStudentFeedback();
        window.lessonFlowCloud.acknowledgeRepeat(result.lesson.cloudId).catch(function(error) {
            console.error("Firestore repeat acknowledgement error:", error);
        });
        return;
    }
    saveStudentLessonState();
    renderTeacherStudentFeedback();
    if (selectedLessonStudent === "Миша" && lessonScreen.classList.contains("active")) renderLessonContext("Миша");
}

function renderTeacherStudentFeedback() {
    const studentName = selectedStudentRecord?.name || "Миша";
    const result = getLatestStudentResult(studentName);
    todayMishaResult.replaceChildren();
    mishaLastResult.replaceChildren();

    if (!result) {
        mishaLastResult.hidden = true;
        presentPerfectStatus.className = "topic-status status-current";
        presentPerfectStatus.textContent = "Сейчас изучаем";
        return;
    }

    addTextElement(todayMishaResult, "span", "", "Последний урок: " + result.completed + "/" + result.total + " выполнено");
    if (result.state.reflection === "practice" || result.state.reflection === "unclear") {
        addTextElement(todayMishaResult, "span", "today-signal", result.reflection.teacher);
    }
    if (result.state.repeatRequest) addTextElement(todayMishaResult, "span", "today-repeat", "↻ Просит вернуться к теме");

    mishaLastResult.hidden = false;
    addTextElement(mishaLastResult, "h3", "", "Результат последнего урока");
    if (isFirebaseMode() && selectedStudentRecord && !cloudProgress._exists) {
        addTextElement(mishaLastResult, "p", "student-empty-lesson", "Ученик ещё не начал урок");
        presentPerfectStatus.className = "topic-status status-current";
        presentPerfectStatus.textContent = "Сейчас изучаем";
        return;
    }
    const summary = document.createElement("div");
    summary.className = "teacher-result-main";
    addTextElement(summary, "span", "", result.completed + " из " + result.total + " этапов выполнено");
    addTextElement(summary, "strong", "", result.percent + "%");
    mishaLastResult.appendChild(summary);
    const track = document.createElement("div");
    track.className = "teacher-result-progress";
    const fill = document.createElement("div");
    fill.style.width = result.percent + "%";
    track.appendChild(fill);
    mishaLastResult.appendChild(track);
    addTextElement(mishaLastResult, "p", "", "Самооценка: " + (result.reflection ? result.reflection.student + " — " + result.reflection.teacher : "Ученик пока не оценил тему"));
    const homeworkText = homeworkResultText(result);
    if (homeworkText) addTextElement(mishaLastResult, "p", "", "Домашнее задание: " + homeworkText);
    const writtenSubmission = cloudSubmissions.find(function(submission) { return submission.type === "written" && submission.lessonId === (result.lesson.lessonId || result.lesson.cloudId); });
    if (writtenSubmission) {
        const writtenLabels = { verified: "Письменная работа — проверена", returned: "Письменная работа — на доработке", submitted: "Письменная работа — на проверке" };
        if (writtenLabels[writtenSubmission.status]) addTextElement(mishaLastResult, "p", "written-result-status status-" + writtenSubmission.status, writtenLabels[writtenSubmission.status]);
    }
    const audioSubmission = cloudSubmissions.find(function(submission) { return submission.type === "audio" && submission.lessonId === (result.lesson.lessonId || result.lesson.cloudId); });
    if (audioSubmission) { const audioLabels = { verified: "Аудиоответ — проверен", returned: "Аудиоответ — на доработке", submitted: "Аудиоответ — на проверке" }; if (audioLabels[audioSubmission.status]) addTextElement(mishaLastResult, "p", "written-result-status status-" + audioSubmission.status, audioLabels[audioSubmission.status]); }

    const lessonWordwallSubmissions = cloudSubmissions.filter(function(submission) { return submission.type === "wordwall" && submission.lessonId === (result.lesson.lessonId || result.lesson.cloudId); });
    lessonWordwallSubmissions.forEach(function(submission) { const labels = { submitted: "Wordwall — на проверке", verified: "Wordwall — проверено", returned: "Wordwall — возвращено" }; if (labels[submission.status]) { const row = document.createElement("div"); row.className = "wordwall-result-summary"; addTextElement(row, "strong", "", "Wordwall · " + (submission.title || "Задание")); const metrics = [submission.scorePercent != null ? submission.scorePercent + "%" : "", submission.mistakesCount != null ? submission.mistakesCount + " ошибки" : "", submission.durationSec != null ? formatDuration(submission.durationSec) : ""].filter(Boolean); addTextElement(row, "span", "written-result-status status-" + submission.status, metrics.length ? metrics.join(" · ") : labels[submission.status]); if (submission.mistakeNotes?.length) addTextElement(row, "small", "", "Трудные места добавлены: " + submission.mistakeNotes.length); mishaLastResult.appendChild(row); } });
    const submittedWordwall = lessonWordwallSubmissions.filter(function(submission) { return submission.status === "submitted"; });
    if (submittedWordwall.length) addTextElement(mishaLastResult, "h3", "wordwall-review-title", "Задания на проверке");
    submittedWordwall.forEach(function(submission) {
        const checkCard = document.createElement("div"); checkCard.className = "wordwall-review-card";
        const info = document.createElement("div"); addTextElement(info, "strong", "", submission.title); addTextElement(info, "span", "", "Wordwall · 🕒 " + studentName + " отправил на проверку"); checkCard.appendChild(info);
        const actions = document.createElement("div"); actions.className = "student-card-actions";
        const review = addTextElement(actions, "button", "main-button", "Проверить"); review.type = "button"; review.addEventListener("click", function() { openWordwallReview(submission); }); checkCard.appendChild(actions); mishaLastResult.appendChild(checkCard);
    });

    if (result.state.repeatRequest) {
        const request = document.createElement("div");
        request.className = "teacher-repeat-request";
        addTextElement(request, "span", "", "🔁 " + studentName + " просит ещё раз разобрать " + result.lesson.topic);
        const acknowledged = addTextElement(request, "button", "", "Учтено");
        acknowledged.type = "button";
        acknowledged.addEventListener("click", acknowledgeRepeatRequest);
        mishaLastResult.appendChild(request);
        presentPerfectStatus.className = "topic-status status-requested";
        presentPerfectStatus.textContent = "Ученик просит повторить";
    } else {
        presentPerfectStatus.className = "topic-status status-current";
        presentPerfectStatus.textContent = "Сейчас изучаем";
    }
}

function renderLessonContext(studentValue) {
    const cloudStudent = typeof studentValue === "object" ? studentValue : null;
    const studentName = cloudStudent ? cloudStudent.name : studentValue;
    const derived = cloudStudent ? selectedStudentDerivedState(cloudStudent) : null;
    const profile = cloudStudent ? {
        context: ["текущая тема: " + derived.current.topic]
    } : studentProfiles[studentName];
    lessonContextList.replaceChildren();
    if (!profile) return;

    profile.context.forEach(function(item) { addTextElement(lessonContextList, "li", "", item); });
    if (cloudStudent) {
        cloudFocusItems.filter(function(item) { return ["repeat", "practice", "learning"].includes(item.status); }).forEach(function(item) {
            const entry = document.createElement("li");
            const statusText = { repeat: "нужно повторить", practice: "тренируем", learning: "сейчас изучаем" }[item.status];
            addTextElement(entry, "strong", "", item.title); addTextElement(entry, "span", "focus-context-status", statusText); if (item.note) addTextElement(entry, "small", "focus-context-note", item.note);
            const actions = document.createElement("div"); actions.className = "focus-context-actions";
            const relevantFocus = cloudFocusItems.filter(function(focus) { return ["repeat", "practice", "learning"].includes(focus.status); });
            const count = materials.map(function(material) { return scoreMaterialForStudent(material, cloudStudent, relevantFocus); }).filter(function(result) { return result.score >= 4 && result.matchedFocusIds.includes(item.id); }).length;
            const materialButton = addTextElement(actions, "button", "context-action-button", "Материалы: " + count); materialButton.type = "button"; materialButton.addEventListener("click", function() { recommendationFocusId = item.id; recommendationLimit = 6; renderRecommendedMaterials(); document.getElementById("recommended-materials-section").scrollIntoView({ behavior: "smooth", block: "start" }); });
            const speech = addTextElement(actions, "button", "context-action-button", "Найти в живой речи"); speech.type = "button"; speech.addEventListener("click", function() { youglishQuery.value = item.title; openYouglishTraining(); });
            const more = addTextElement(actions, "button", "context-action-button", "Найти ещё"); more.type = "button"; more.addEventListener("click", function() { openFindMorePanel(item); });
            entry.appendChild(actions);
            lessonContextList.appendChild(entry);
        });
        derived.reviewTopics.filter(function(item) { return ["request", "legacy"].includes(item.source); }).forEach(function(item) { addTextElement(lessonContextList, "li", "", (item.source === "request" ? "Ученик попросил ещё раз вернуться к " : "Повторить: ") + item.title); });
    }
    const result = getLatestStudentResult(studentName);
    if (!result) return;
    addTextElement(lessonContextList, "li", "", "прошлый урок: выполнено " + result.completed + " из " + result.total + " этапов");
    if (result.reflection) addTextElement(lessonContextList, "li", "", "самооценка: " + result.reflection.teacher.toLocaleLowerCase("ru"));
    if (result.state.repeatRequest) addTextElement(lessonContextList, "li", "", studentName + " просит ещё раз разобрать " + result.lesson.topic);
    const homeworkText = homeworkResultText(result);
    if (homeworkText) addTextElement(lessonContextList, "li", "", "домашнее задание: " + homeworkText.toLocaleLowerCase("ru"));
}

function getStudentVocabularyTodayState(session) {
    if (!session) return null;
    const newCount = Math.max(Number(session.newCount || 0), Array.isArray(session.newCards) ? session.newCards.length : 0, Array.isArray(session.newCardIds) ? session.newCardIds.length : 0);
    const reviewCount = Math.max(Number(session.reviewCount || 0), Array.isArray(session.reviewCards) ? session.reviewCards.length : 0, Array.isArray(session.reviewCardIds) ? session.reviewCardIds.length : 0);
    const totalCards = Math.max(Number(session.totalCards || 0), Array.isArray(session.cards) ? session.cards.length : 0, newCount + reviewCount);
    const results = session.summary || (session.completedToday ? { total: session.answeredCards, know: session.knowCount, hard: session.hardCount, again: session.againCount } : null);
    const completedTotal = Number(results?.total ?? session.answeredCards ?? totalCards);
    return { session, totalCards, newCount, reviewCount, completed: session.status === "completed" || Boolean(session.completedToday), completedTotal, results };
}

const getVocabularyTodaySummary = getStudentVocabularyTodayState;

let studentVocabularyLoadPromise = null;
async function loadStudentVocabularyToday() {
    if (!isFirebaseMode() || firebaseProfile?.role !== "student") return studentDashboardData.vocabulary;
    if (studentVocabularyLoadPromise) return studentVocabularyLoadPromise;
    studentDashboardData.vocabularyLoading = true;
    studentDashboardData.vocabularyError = null;
    studentDashboardData.vocabularyDictionaryError = null;
    studentVocabularyLoadPromise = Promise.all([
        window.lessonFlowCloud.buildVocabularySession(firebaseProfile.uid, new Date()),
        window.lessonFlowCloud.getStudentVocabularyDictionary(firebaseProfile.uid).catch(function(error) {
            studentDashboardData.vocabularyDictionaryError = error.code || error.message || "unknown";
            console.error("[Vocabulary dictionary]", error);
            return studentDashboardData.vocabularyDictionary || [];
        })
    ]).then(function(result) {
        studentDashboardData.vocabulary = result[0];
        studentDashboardData.vocabularyDictionary = result[1];
        if (!studentDashboardData.vocabularyDictionaryError) studentDashboardData.vocabularyDictionaryError = null;
        return result[0];
    }).catch(function(error) {
        studentDashboardData.vocabulary = null;
        studentDashboardData.vocabularyError = error.code || error.message || "unknown";
        console.error("[Vocabulary today]", error);
        return null;
    }).finally(function() {
        studentDashboardData.vocabularyLoading = false;
        studentVocabularyLoadPromise = null;
    });
    return studentVocabularyLoadPromise;
}

function formatVocabularyStartDate(value) {
    const date = value?.toDate ? value.toDate() : typeof value === "string" ? new Date(value.slice(0, 10) + "T00:00:00") : null;
    return date && !Number.isNaN(date.getTime()) ? new Intl.DateTimeFormat("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date) : "";
}

function renderStudentDashboard() {
    const lesson = publishedLessons[firebaseProfile?.name || "Миша"] || publishedLessons["Миша"];
    studentPublishedSummary.replaceChildren();
    const streakDays = Math.max(0, Number(firebaseProfile?.streakDays || 0)); const streakLast = streakDays % 10; const streakLastTwo = streakDays % 100; document.getElementById("student-streak-value").textContent = streakDays + " " + (streakLastTwo >= 11 && streakLastTwo <= 14 ? "дней" : streakLast === 1 ? "день" : streakLast >= 2 && streakLast <= 4 ? "дня" : "дней"); const points = Number(firebaseProfile?.points); const pointsChip = document.querySelector("#student-screen .student-stars"); if (Number.isFinite(points)) { document.getElementById("student-points-value").textContent = points; pointsChip.hidden = false; } else pointsChip.hidden = true;
    const dashboardDate = document.getElementById("student-dashboard-date"); if (dashboardDate) dashboardDate.textContent = new Intl.DateTimeFormat("ru-RU", { weekday: "long", day: "numeric", month: "long" }).format(new Date());
    const now = new Date(); const nowKey = localDateKey(now); const nowTime = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
    const futureEvents = (studentDashboardData.events || []).filter(function(event) { return event.status !== "cancelled" && (event.date > nowKey || event.date === nowKey && event.startTime >= nowTime); }).sort(function(a, b) { return (a.date + a.startTime).localeCompare(b.date + b.startTime); });
    const nextEvent = futureEvents[0]; const program = studentDashboardData.program;
    const blocks = lesson?.blocks || []; const lessonId = lesson?.lessonId || lesson?.cloudId; const mandatory = blocks.filter(function(block) { return block.submissionType && block.submissionType !== "none" || /домашн/i.test(block.type || "") || /домашн/i.test(block.title || "") || normalizeMatchText(block.service) === "wordwall"; });
    const taskState = mandatory.map(function(block) { const submission = cloudSubmissions.filter(function(item) { return item.lessonId === lessonId && item.blockId === block.id; }).sort(function(a, b) { return String(b.updatedAt || b.createdAt || "").localeCompare(String(a.updatedAt || a.createdAt || "")); })[0]; const submittedDone = submission && ["submitted", "verified"].includes(submission.status); const completedDone = (!block.submissionType || block.submissionType === "none") && (cloudProgress.completedBlockIds || []).includes(block.id); const inProgress = submission && ["draft", "started", "in-progress"].includes(submission.status); return { block: block, submission: submission, done: Boolean(submittedDone || completedDone), returned: submission?.status === "returned", pending: submission?.status === "submitted", inProgress: Boolean(inProgress) }; });
    const returnedTasks = taskState.filter(function(item) { return item.returned; }); const regularRemaining = taskState.filter(function(item) { return !item.done && !item.returned; }); const remaining = returnedTasks.concat(regularRemaining); const doneCount = taskState.length - remaining.length;
    const taskWord = function(count) { const lastTwo = count % 100; const last = count % 10; return lastTwo >= 11 && lastTwo <= 14 ? "заданий" : last === 1 ? "задание" : last >= 2 && last <= 4 ? "задания" : "заданий"; };
    const actionLabel = function(item) { if (item.inProgress) return "Продолжить"; if (!item.returned) return "Начать"; const type = item.submission?.type || item.block.submissionType; return type === "audio" ? "Записать новый ответ" : type === "written-photo" ? "Загрузить работу снова" : type === "wordwall" ? "Выполнить ещё раз" : "Исправить"; };
    const top = document.createElement("div"); top.className = "student-dashboard-top";
    const next = document.createElement("article"); next.className = "student-dashboard-card student-next-lesson"; const heroArt = document.createElement("img"); heroArt.className = "student-next-lesson-art"; heroArt.src = "assets/student-dashboard/illustrations/next-lesson-hero.png"; heroArt.alt = ""; next.appendChild(heroArt); const lessonBadge = document.createElement("span"); lessonBadge.className = "student-lesson-calendar-badge"; const lessonBadgeIcon = document.createElement("img"); lessonBadgeIcon.src = "assets/student-dashboard/icons/icon-calendar.png"; lessonBadgeIcon.alt = ""; lessonBadge.appendChild(lessonBadgeIcon); next.appendChild(lessonBadge); addTextElement(next, "p", "card-label", "СЛЕДУЮЩИЙ УРОК");
    if (nextEvent) { const date = new Date(nextEvent.date + "T00:00:00"); addTextElement(next, "h2", "", new Intl.DateTimeFormat("ru-RU", { weekday: "long", day: "numeric", month: "long" }).format(date)); const end = new Date(nextEvent.date + "T" + nextEvent.startTime); end.setMinutes(end.getMinutes() + Number(nextEvent.duration || 60)); addTextElement(next, "p", "student-next-time", nextEvent.startTime + "–" + String(end.getHours()).padStart(2, "0") + ":" + String(end.getMinutes()).padStart(2, "0")); const nextTopic = nextEvent.planLessonTitle || nextEvent.topic || "Тема будет объявлена позже"; addTextElement(next, "strong", "student-next-topic", nextEvent.planLessonNumber ? "L" + nextEvent.planLessonNumber + " · " + nextTopic : nextTopic); if (program) addTextElement(next, "small", "", program.title || program.mainCourse || "Программа обучения"); const scheduledLesson = studentLessonForScheduleEvent(nextEvent); const lessonButton = addTextElement(next, "button", "student-action student-action-orange", scheduledLesson ? "Открыть урок" : "Перейти к расписанию"); lessonButton.type = "button"; lessonButton.addEventListener("click", function() { if (scheduledLesson) { studentLessonReturnSection = "home"; openPublishedLesson(scheduledLesson, false); } else showStudentSection("lessons"); }); }
    else addTextElement(next, "p", "student-empty-copy", studentDashboardData.scheduleError ? "Не удалось загрузить расписание." : "Следующее занятие пока не назначено."); top.appendChild(next);
    const readinessPercent = taskState.length ? Math.round(doneCount / taskState.length * 100) : 100; const readiness = document.createElement("article"); readiness.id = "student-readiness-card"; readiness.className = "student-dashboard-card readiness-card " + (!remaining.length ? "is-ready" : returnedTasks.length ? "needs-fix" : doneCount ? "is-almost" : "needs-work"); addTextElement(readiness, "p", "card-label", "ГОТОВНОСТЬ К УРОКУ"); const readyBody = document.createElement("div"); readyBody.className = "student-readiness-body"; const ring = document.createElement("div"); ring.className = "student-readiness-ring"; ring.style.setProperty("--student-progress", readinessPercent + "%"); addTextElement(ring, "strong", "", readinessPercent + "%"); readyBody.appendChild(ring); const readyCopy = document.createElement("div"); readyCopy.className = "student-readiness-copy";
    if (!remaining.length) { addTextElement(readyCopy, "h3", "", "Ты готов к следующему уроку"); addTextElement(readyCopy, "p", "", "Вся обязательная работа выполнена."); const vocabularySession = studentDashboardData.vocabulary; const vocabularySummary = getVocabularyTodaySummary(vocabularySession); if (vocabularySummary && !vocabularySummary.completed && vocabularySummary.totalCards > 0) { addTextElement(readyCopy, "p", "readiness-extra", "Если есть 5 минут — повтори " + vocabularySummary.totalCards + " карточек."); const repeat = addTextElement(readyCopy, "button", "student-action student-action-blue", "Повторить слова"); repeat.type = "button"; repeat.addEventListener("click", function() { startVocabularyTrainer(vocabularySession); }); } }
    else { addTextElement(readyCopy, "h3", "", returnedTasks.length ? "Нужно исправить " + returnedTasks.length + " " + taskWord(returnedTasks.length) : doneCount ? "Почти готов" : "Нужно подготовиться"); addTextElement(readyCopy, "p", "", "Выполнено " + doneCount + " из " + taskState.length + " обязательных заданий"); remaining.forEach(function(item) { const row = document.createElement("div"); row.className = "student-readiness-task" + (item.returned ? " is-returned" : ""); const icon = document.createElement("img"); icon.src = "assets/student-dashboard/icons/" + (item.returned ? "icon-warning.png" : "icon-notebook.png"); icon.alt = ""; row.appendChild(icon); const text = document.createElement("div"); addTextElement(text, "strong", "", item.block.title || "Задание"); addTextElement(text, "small", "", item.returned && item.submission?.teacherComment ? "Комментарий: «" + item.submission.teacherComment + "»" : item.inProgress ? "В процессе" : "Не выполнено"); row.appendChild(text); const action = addTextElement(row, "button", "student-task-action", actionLabel(item)); action.type = "button"; action.addEventListener("click", function() { openPublishedLesson(lesson, false, item.block.id); }); readyCopy.appendChild(row); }); }
    readyBody.appendChild(readyCopy); readiness.appendChild(readyBody); top.appendChild(readiness); studentPublishedSummary.appendChild(top);
    const lower = document.createElement("div"); lower.className = "student-dashboard-lower"; const vocabularySession = studentDashboardData.vocabulary; const vocabularySummary = getStudentVocabularyTodayState(vocabularySession); const vocabulary = document.createElement("article"); vocabulary.id = "student-vocabulary-card"; vocabulary.className = "student-dashboard-card student-vocabulary-card"; addTextElement(vocabulary, "p", "card-label", "СЛОВАРЬ"); addTextElement(vocabulary, "h3", "", "Повтори 5 минут"); if (studentDashboardData.vocabularyLoading) addTextElement(vocabulary, "p", "", "Загружаем сегодняшние карточки..."); else if (studentDashboardData.vocabularyError) addTextElement(vocabulary, "p", "", "Не удалось загрузить сегодняшнюю сессию"); else if (!vocabularySession) addTextElement(vocabulary, "p", "", "Скоро здесь появится ежедневное повторение слов."); else if (vocabularySession.programStatus === "not-started") addTextElement(vocabulary, "p", "", "Программа начнётся " + formatVocabularyStartDate(vocabularySession.assignment?.startDate)); else if (vocabularySummary.completed) { addTextElement(vocabulary, "strong", "", "✓ Слова на сегодня повторены"); addTextElement(vocabulary, "p", "", vocabularySummary.completedTotal + " карточки пройдено"); addTextElement(vocabulary, "p", "", "Следующая сессия — завтра"); } else if (vocabularySummary.totalCards > 0) { addTextElement(vocabulary, "strong", "", vocabularySummary.newCount && !vocabularySummary.reviewCount ? vocabularySummary.newCount + " новых слов сегодня" : vocabularySummary.totalCards + " карточек на сегодня"); addTextElement(vocabulary, "p", "", vocabularySummary.newCount + " новых · " + vocabularySummary.reviewCount + " на повторение"); const start = addTextElement(vocabulary, "button", "student-action student-action-orange", vocabularySession.status === "in-progress" ? "Продолжить" : vocabularySummary.reviewCount && !vocabularySummary.newCount ? "Повторить слова" : "Начать"); start.type = "button"; start.addEventListener("click", function() { startVocabularyTrainer(vocabularySession); }); } else addTextElement(vocabulary, "p", "", vocabularySession.missingDailyPlan ? "Для текущего дня план не найден." : "Сегодня карточек нет"); lower.appendChild(vocabulary);
    const studying = document.createElement("article"); studying.id = "student-program-card"; studying.className = "student-dashboard-card student-studying-card"; const studyingCopy = document.createElement("div"); studyingCopy.className = "student-studying-copy"; addTextElement(studyingCopy, "p", "card-label", "ТЕКУЩАЯ ПРОГРАММА"); addTextElement(studyingCopy, "h3", "", "Сейчас изучаем"); if (program) { const current = program.lessons.find(function(item) { return Number(item.lessonNumber) === Number(program.currentLessonNumber); }); addTextElement(studyingCopy, "strong", "student-current-lesson", current ? "L" + current.lessonNumber + " · " + current.title : program.title); addTextElement(studyingCopy, "p", "", program.mainCourse || program.title || ""); const completedLessons = program.lessons.filter(function(item) { return item.status === "completed"; }).length; addTextElement(studyingCopy, "p", "", completedLessons + " из " + program.totalLessons + " уроков пройдено"); const view = addTextElement(studyingCopy, "button", "student-action student-action-light", "Подробнее о программе"); view.type = "button"; view.addEventListener("click", function() { let preview = studyingCopy.querySelector(".student-program-preview"); if (preview) { preview.remove(); return; } preview = document.createElement("div"); preview.className = "student-program-preview"; program.lessons.slice().sort(function(a, b) { return Number(a.lessonNumber) - Number(b.lessonNumber); }).filter(function(item) { return Number(item.lessonNumber) >= Number(program.currentLessonNumber); }).slice(0, 6).forEach(function(item) { addTextElement(preview, "p", "", "L" + item.lessonNumber + " · " + (item.title || "Урок программы")); }); studyingCopy.appendChild(preview); }); } else addTextElement(studyingCopy, "p", "", studentDashboardData.programError ? "Не удалось загрузить программу." : "Программа пока не назначена."); const studyingArt = document.createElement("div"); studyingArt.className = "student-studying-art"; const studyingImage = document.createElement("img"); studyingImage.src = "assets/student-dashboard/illustrations/study-now-illustration.png"; studyingImage.alt = ""; studyingArt.appendChild(studyingImage); studying.append(studyingCopy, studyingArt); lower.appendChild(studying);
    const progress = document.createElement("article"); progress.id = "student-progress-card"; progress.className = "student-dashboard-card student-overall-progress"; addTextElement(progress, "p", "card-label", "РЕЗУЛЬТАТЫ"); addTextElement(progress, "h3", "", "Твой прогресс"); const completedLessons = program?.lessons.filter(function(item) { return item.status === "completed"; }).length || 0; const totalLessons = Number(program?.totalLessons || 0); const progressValue = totalLessons ? Math.round(completedLessons / totalLessons * 100) : 0; const progressTrack = document.createElement("div"); progressTrack.className = "student-program-progress"; const progressFill = document.createElement("span"); progressFill.style.width = progressValue + "%"; progressTrack.appendChild(progressFill); progress.appendChild(progressTrack); addTextElement(progress, "strong", "student-progress-count", totalLessons ? completedLessons + " из " + totalLessons + " уроков" : completedLessons + " уроков пройдено"); addTextElement(progress, "p", "", "Выполнено заданий: " + ((cloudProgress.completedBlockIds || []).length + cloudSubmissions.filter(function(item) { return ["submitted", "verified"].includes(item.status); }).length)); lower.appendChild(progress); studentPublishedSummary.appendChild(lower);
    const footer = document.createElement("div"); footer.className = "student-dashboard-footer"; const scheduleCard = document.createElement("article"); scheduleCard.className = "student-dashboard-card student-schedule-card"; const scheduleIcon = document.createElement("img"); scheduleIcon.src = "assets/student-dashboard/icons/icon-calendar.png"; scheduleIcon.alt = ""; scheduleCard.appendChild(scheduleIcon); const scheduleCopy = document.createElement("div"); addTextElement(scheduleCopy, "h3", "", "Расписание"); addTextElement(scheduleCopy, "p", "", futureEvents.length ? "Ближайших занятий: " + futureEvents.length : "Нет предстоящих занятий"); scheduleCard.appendChild(scheduleCopy); const schedule = addTextElement(scheduleCard, "button", "student-round-button", "→"); schedule.type = "button"; schedule.setAttribute("aria-label", "Посмотреть расписание"); schedule.addEventListener("click", function() { let preview = studentPublishedSummary.querySelector(".student-schedule-preview"); if (preview) { preview.remove(); return; } preview = document.createElement("section"); preview.className = "student-home-section student-schedule-preview"; addTextElement(preview, "h3", "", "Ближайшие занятия"); futureEvents.slice(0, 8).forEach(function(item) { addTextElement(preview, "p", "", new Intl.DateTimeFormat("ru-RU", { weekday: "long", day: "numeric", month: "long" }).format(new Date(item.date + "T00:00:00")) + " · " + item.startTime + (item.planLessonId ? " · L" + item.planLessonNumber : "")); }); studentPublishedSummary.appendChild(preview); preview.scrollIntoView({ behavior: "smooth", block: "center" }); }); footer.appendChild(scheduleCard); const message = document.createElement("article"); message.className = "student-dashboard-card student-message-card"; const avatar = document.createElement("img"); avatar.src = "assets/student-dashboard/Avatars/avatar-teacher-female.png"; avatar.alt = "Преподаватель"; message.appendChild(avatar); const messageCopy = document.createElement("div"); addTextElement(messageCopy, "h3", "", "Написать преподавателю"); addTextElement(messageCopy, "p", "", "Задай вопрос или обсудим сложную тему"); message.appendChild(messageCopy); const messageButton = addTextElement(message, "button", "student-round-button", "→"); messageButton.type = "button"; messageButton.disabled = true; messageButton.title = "Скоро"; message.appendChild(messageButton); footer.appendChild(message); studentPublishedSummary.appendChild(footer);
    const vocabularyCard = document.getElementById("student-vocabulary-card"); if (vocabularyCard) { const vocabularyArt = document.createElement("img"); vocabularyArt.className = "student-card-illustration student-vocabulary-art"; vocabularyArt.src = "assets/student-dashboard/illustrations/vocab-review-card.png"; vocabularyArt.alt = ""; vocabularyCard.prepend(vocabularyArt); }
    const studyingCard = document.getElementById("student-program-card"); if (studyingCard) { const programButton = studyingCard.querySelector("button"); if (programButton) programButton.addEventListener("click", function(event) { event.preventDefault(); event.stopImmediatePropagation(); showStudentSection("program"); }, true); }
    const progressStar = document.createElement("img"); progressStar.className = "student-progress-star"; progressStar.src = "assets/student-dashboard/progress/progress-star-marker.png"; progressStar.alt = ""; progressTrack.style.setProperty("--student-program-progress", progressValue + "%"); progressTrack.appendChild(progressStar);
    progress.tabIndex = 0; progress.setAttribute("role", "button"); progress.addEventListener("click", function() { showStudentSection("progress"); }); progress.addEventListener("keydown", function(event) { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); showStudentSection("progress"); } });
    const scheduleDescription = scheduleCopy.querySelector("p"); if (scheduleDescription) scheduleDescription.textContent = nextEvent ? "Следующее занятие: " + new Intl.DateTimeFormat("ru-RU", { weekday: "long", day: "numeric", month: "long" }).format(new Date(nextEvent.date + "T00:00:00")) + " · " + nextEvent.startTime : "Нет предстоящих занятий"; scheduleCard.tabIndex = 0; scheduleCard.setAttribute("role", "button"); scheduleCard.addEventListener("click", function(event) { if (!event.target.closest("button")) schedule.click(); }); scheduleCard.addEventListener("keydown", function(event) { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); schedule.click(); } });
    scheduleCard.addEventListener("click", function(event) { event.preventDefault(); event.stopImmediatePropagation(); showStudentSection("lessons"); }, true);
    messageButton.disabled = false; messageButton.title = "Открыть сообщения"; messageButton.addEventListener("click", function() { showStudentSection("messages"); }); message.addEventListener("click", function(event) { if (!event.target.closest("button")) showStudentSection("messages"); });
    applyStudentDesignSystem(studentPublishedSummary);
}

function applyStudentDesignSystem(root) {
    if (!root) return;
    const studentAvatar = studentDashboardData.student ? stableTeacherStudentAvatar(studentDashboardData.student) : ""; if (studentAvatar) { document.querySelectorAll("#student-screen .student-profile-avatar").forEach(function(image) { image.src = studentAvatar; }); root.querySelectorAll(".student-settings-card > img").forEach(function(image) { image.src = studentAvatar; }); }
    root.querySelectorAll(".student-dashboard-card, .student-upcoming-lessons, .student-program-list, .student-homework-group, .student-section-feature, .student-messages-shell, .student-settings-card, .student-lesson-progress, .student-reflection").forEach(function(item) { item.classList.add("lf-card", "lf-card--cream"); });
    root.querySelectorAll(".student-next-lesson, .student-message-card").forEach(function(item) { item.classList.add("lf-card", "lf-card--navy"); });
    root.querySelectorAll(".student-action, .student-task-action, .student-round-button, .student-lesson-stage button, .student-lesson-stage .main-button, .complete-stage, .teacher-preview-back, .repeat-request-button").forEach(function(item) { item.classList.add("lf-button"); });
    root.querySelectorAll(".student-action-blue, .student-task-action").forEach(function(item) { item.classList.add("lf-button--primary"); });
    root.querySelectorAll(".student-action-orange").forEach(function(item) { item.classList.add("lf-button--orange"); });
    root.querySelectorAll(".student-action-light, .teacher-preview-back, .repeat-request-button").forEach(function(item) { item.classList.add("lf-button--secondary"); });
    root.querySelectorAll(".student-round-button").forEach(function(item) { item.classList.add("lf-button--round"); });
    root.querySelectorAll(".card-label, .small-title").forEach(function(item) { item.classList.add("lf-eyebrow"); });
    root.querySelectorAll(".student-section-heading h2, .student-upcoming-lessons > h3, .student-program-list > h3, .student-homework-group > h3").forEach(function(item) { item.classList.add("lf-section-title"); });
    root.querySelectorAll(".student-lesson-stage").forEach(function(item) { item.classList.add("lf-task-card"); });
    root.querySelectorAll(".student-stage-number").forEach(function(item) { item.classList.add("lf-task-number"); });
    root.querySelectorAll(".student-stage-time").forEach(function(item) { item.classList.add("lf-task-meta"); });
    root.querySelectorAll(".student-progress-track, .student-program-progress").forEach(function(item) { item.classList.add("lf-progress", "lf-progress__track"); });
    root.querySelectorAll("#student-progress-fill, .student-program-progress > span").forEach(function(item) { item.classList.add("lf-progress__fill"); });
    root.querySelectorAll(".student-progress-star").forEach(function(item) { item.classList.add("lf-progress__star"); });
}
function studentCurrentLesson() { return publishedLessons[firebaseProfile?.name || "Миша"] || publishedLessons["Миша"]; }
function studentLessonForScheduleEvent(event) {
    if (!event?.lessonId || event.status === "cancelled" || event.status === "completed") return null;
    const current = studentCurrentLesson();
    return current && String(current.lessonId || "") === String(event.lessonId) ? current : null;
}
function studentHomeworkItems() {
    const lesson = studentCurrentLesson(); const lessonId = lesson?.lessonId || lesson?.cloudId;
    return (lesson?.blocks || []).filter(function(block) { return block.submissionType && block.submissionType !== "none" || /домашн/i.test(block.type || "") || /домашн/i.test(block.title || "") || normalizeMatchText(block.service) === "wordwall"; }).map(function(block) { const submission = cloudSubmissions.filter(function(item) { return item.lessonId === lessonId && item.blockId === block.id; }).sort(function(a, b) { return String(b.updatedAt || b.createdAt || "").localeCompare(String(a.updatedAt || a.createdAt || "")); })[0]; const completed = (!block.submissionType || block.submissionType === "none") && (cloudProgress.completedBlockIds || []).includes(block.id); return { block: block, submission: submission, status: submission?.status === "returned" ? "returned" : submission?.status === "submitted" ? "submitted" : submission?.status === "verified" || completed ? "completed" : "todo" }; });
}
function studentSectionHeading(container, title, subtitle) { const heading = document.createElement("header"); heading.className = "student-section-heading"; const copy = document.createElement("div"); addTextElement(copy, "h2", "", title); addTextElement(copy, "p", "", subtitle); const back = addTextElement(heading, "button", "student-section-back", "← Назад"); back.type = "button"; back.setAttribute("aria-label", "Вернуться на главную"); back.addEventListener("click", function() { showStudentSection("home"); }); heading.prepend(copy); container.appendChild(heading); }
function studentProgressBar(value) { const track = document.createElement("div"); track.className = "student-program-progress student-section-progress"; track.style.setProperty("--student-program-progress", value + "%"); const fill = document.createElement("span"); fill.style.width = value + "%"; const star = document.createElement("img"); star.className = "student-progress-star"; star.src = "assets/student-dashboard/progress/progress-star-marker.png"; star.alt = ""; track.append(fill, star); return track; }
function renderStudentLessonsScreen(container) {
    studentSectionHeading(container, "Мои уроки", "Расписание занятий"); const controls = document.createElement("div"); controls.className = "student-calendar-controls"; [["prev", "←", "Предыдущая неделя"], ["today", "Сегодня", "Сегодня"], ["next", "→", "Следующая неделя"]].forEach(function(item) { const button = document.createElement("button"); button.type = "button"; button.dataset.calendarAction = item[0]; button.className = "student-calendar-nav-button is-" + item[0]; button.setAttribute("aria-label", item[2]); button.textContent = item[1]; controls.appendChild(button); }); container.appendChild(controls);
    const calendar = document.createElement("div"); calendar.className = "student-week-calendar"; container.appendChild(calendar); const upcoming = document.createElement("section"); upcoming.className = "student-upcoming-lessons"; container.appendChild(upcoming);
    const renderWeek = function() { calendar.replaceChildren(); upcoming.replaceChildren(); const anchor = new Date(studentCalendarAnchor); const weekday = (anchor.getDay() + 6) % 7; const monday = new Date(anchor); monday.setHours(0,0,0,0); monday.setDate(monday.getDate() - weekday); const todayKey = localDateKey(new Date()); for (let offset = 0; offset < 7; offset += 1) { const date = new Date(monday); date.setDate(monday.getDate() + offset); const key = localDateKey(date); const cell = document.createElement("button"); cell.type = "button"; cell.className = "student-calendar-day" + (key === todayKey ? " is-today" : ""); addTextElement(cell, "span", "", new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(date)); addTextElement(cell, "strong", "", String(date.getDate())); (studentDashboardData.events || []).filter(function(event) { return event.date === key && event.status !== "cancelled"; }).sort(function(a,b) { return String(a.startTime).localeCompare(String(b.startTime)); }).forEach(function(event) { const eventCard = document.createElement("span"); eventCard.className = "student-calendar-event"; addTextElement(eventCard, "b", "", event.startTime || ""); addTextElement(eventCard, "small", "", (event.planLessonNumber ? "L" + event.planLessonNumber + " · " : "") + (event.planLessonTitle || event.topic || "Урок")); cell.appendChild(eventCard); }); cell.addEventListener("click", function() { calendar.querySelectorAll(".student-calendar-day").forEach(function(item) { item.classList.remove("is-selected"); }); cell.classList.add("is-selected"); renderUpcoming(key); }); calendar.appendChild(cell); }
        const weekEnd = new Date(monday); weekEnd.setDate(monday.getDate() + 6); const todayControl = controls.querySelector('[data-calendar-action="today"]'); if (todayControl) { const current = new Date(); current.setHours(0,0,0,0); todayControl.classList.toggle("is-current-week", current >= monday && current <= weekEnd); } addTextElement(controls, "strong", "student-calendar-range", new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(monday) + " — " + new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(weekEnd)); renderUpcoming(null); };
    const renderUpcoming = function(selectedKey) { upcoming.replaceChildren(); addTextElement(upcoming, "h3", "", selectedKey ? "Занятия выбранного дня" : "Ближайшие занятия"); const nowKey = localDateKey(new Date()); const events = (studentDashboardData.events || []).filter(function(event) { return event.status !== "cancelled" && (selectedKey ? event.date === selectedKey : event.date >= nowKey); }).sort(function(a,b) { return (a.date + a.startTime).localeCompare(b.date + b.startTime); }).slice(0, selectedKey ? 20 : 8); if (!events.length) { addTextElement(upcoming, "p", "student-section-empty", "Занятий нет."); return; } events.forEach(function(event) { const row = document.createElement("article"); row.className = "student-upcoming-row" + (event.status === "completed" ? " is-completed" : ""); const date = new Date(event.date + "T00:00:00"); addTextElement(row, "strong", "", new Intl.DateTimeFormat("ru-RU", { weekday: "long", day: "numeric", month: "long" }).format(date)); addTextElement(row, "span", "", event.startTime || ""); const title = addTextElement(row, "p", "", (event.planLessonNumber ? "L" + event.planLessonNumber + " · " : "") + (event.planLessonTitle || event.topic || "Урок")); const lesson = studentLessonForScheduleEvent(event); addTextElement(title, "small", "student-schedule-lesson-status", event.status === "completed" ? "✓ Пройден" : lesson ? "Материалы опубликованы" : "Урок ещё не опубликован"); const open = addTextElement(row, "button", "student-action student-action-blue" + (event.status === "completed" ? " is-completed" : !lesson ? " is-unpublished" : ""), event.status === "completed" ? "Пройден" : "Открыть урок"); open.type = "button"; open.disabled = event.status === "completed" || !lesson; open.title = event.status === "completed" ? "Урок пройден" : lesson ? "Открыть урок" : "Урок ещё не опубликован"; open.addEventListener("click", function() { if (!lesson) return; studentLessonReturnSection = "lessons"; openPublishedLesson(lesson, false); }); upcoming.appendChild(row); }); };
    controls.addEventListener("click", function(event) { const button = event.target.closest("button"); if (!button) return; const action = button.dataset.calendarAction; if (action === "today") studentCalendarAnchor = new Date(); else studentCalendarAnchor.setDate(studentCalendarAnchor.getDate() + (action === "prev" ? -7 : 7)); controls.querySelector(".student-calendar-range")?.remove(); renderWeek(); }); renderWeek();
}
function renderStudentProgramScreen(container) {
    studentSectionHeading(container, "Моя программа", "Твой маршрут обучения"); const program = studentDashboardData.program; if (!program) { addTextElement(container, "p", "student-section-empty", studentDashboardData.programError ? "Не удалось загрузить программу." : "Программа пока не назначена."); return; } const lessons = program.lessons || []; const completed = lessons.filter(function(item) { return item.status === "completed"; }).length; const total = Number(program.totalLessons || lessons.length); const hero = document.createElement("article"); hero.className = "student-program-hero"; const copy = document.createElement("div"); addTextElement(copy, "p", "card-label", "ТЕКУЩАЯ ПРОГРАММА"); addTextElement(copy, "h3", "", program.title || program.mainCourse || "Программа обучения"); const current = lessons.find(function(item) { return Number(item.lessonNumber) === Number(program.currentLessonNumber); }); if (current) addTextElement(copy, "strong", "", "L" + current.lessonNumber + " · " + (current.title || "Текущий урок")); addTextElement(copy, "p", "", completed + " из " + total + " уроков"); copy.appendChild(studentProgressBar(total ? Math.round(completed / total * 100) : 0)); const currentEvent = current ? (studentDashboardData.events || []).find(function(event) { return event.programId === program.id && event.planLessonId === current.id && studentLessonForScheduleEvent(event); }) : null; const currentActualLesson = currentEvent ? studentLessonForScheduleEvent(currentEvent) : null; const open = addTextElement(copy, "button", "student-action student-action-orange", currentActualLesson ? "Открыть урок" : "Урок ещё не опубликован"); open.type = "button"; open.disabled = !currentActualLesson; open.title = currentActualLesson ? "Открыть урок" : "Материалы появятся после подготовки преподавателем"; open.addEventListener("click", function() { if (currentActualLesson) { studentLessonReturnSection = "program"; openPublishedLesson(currentActualLesson, false); } }); const art = document.createElement("div"); art.className = "student-program-hero-art"; const image = document.createElement("img"); image.src = "assets/student-dashboard/illustrations/study-now-illustration.png"; image.alt = ""; art.appendChild(image); hero.append(copy, art); container.appendChild(hero); const list = document.createElement("section"); list.className = "student-program-list"; addTextElement(list, "h3", "", "Программа занятий"); lessons.slice().sort(function(a,b) { return Number(a.lessonNumber) - Number(b.lessonNumber); }).forEach(function(item) { const row = document.createElement("article"); const rawStatus = item.status || "planned"; const status = rawStatus === "planned" && Number(item.lessonNumber) === Number(program.currentLessonNumber) ? "current" : rawStatus; row.className = "student-program-lesson-row is-" + status; const code = addTextElement(row, "span", "student-program-code", status === "completed" ? "✓" : "L" + item.lessonNumber); if (status === "completed") code.setAttribute("aria-label", "L" + item.lessonNumber + " пройден"); const text = document.createElement("div"); addTextElement(text, "strong", "", item.title || "Урок программы"); const labels = { completed: "Пройдено", current: "Сейчас по программе", prepared: "Готов", scheduled: "Запланирован", planned: "По плану", skipped: "Пропущен" }; let statusText = labels[status] || labels.planned; if (status === "scheduled" && item.scheduledDate) statusText += " · " + new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(new Date(item.scheduledDate + "T00:00:00")); addTextElement(text, "small", "", statusText); row.appendChild(text); list.appendChild(row); }); container.appendChild(list);
}
function renderStudentHomeworkScreen(container) {
    studentSectionHeading(container, "Домашние задания", "Все задания текущего урока"); const lesson = studentCurrentLesson(); const groups = [["returned", "Нужно исправить"], ["todo", "Нужно сделать"], ["submitted", "Отправлено на проверку"], ["completed", "Выполнено"]]; const items = studentHomeworkItems(); groups.forEach(function(group) { const matches = items.filter(function(item) { return item.status === group[0]; }); if (!matches.length) return; const section = document.createElement("section"); section.className = "student-homework-group"; addTextElement(section, "h3", "", group[1]); matches.forEach(function(item) { const row = document.createElement("article"); row.className = "student-homework-row is-" + item.status; const icon = document.createElement("img"); icon.src = "assets/student-dashboard/icons/" + (item.status === "returned" ? "icon-warning.png" : item.status === "completed" ? "icon-check.png" : "icon-notebook.png"); icon.alt = ""; row.appendChild(icon); const copy = document.createElement("div"); addTextElement(copy, "strong", "", item.block.title || "Задание"); if (item.block.description) addTextElement(copy, "p", "student-homework-description", item.block.description); appendHomeworkTiming(copy, lesson, item.block); if (item.status === "returned" && item.submission?.teacherComment) addTextElement(copy, "small", "", "Комментарий: «" + item.submission.teacherComment + "»"); row.appendChild(copy); const action = addTextElement(row, "button", "student-action student-action-blue", item.status === "returned" ? "Исправить" : item.status === "todo" ? "Начать" : "Открыть"); action.type = "button"; action.addEventListener("click", function() { if (lesson) openPublishedLesson(lesson, false, item.block.id); }); section.appendChild(row); }); container.appendChild(section); }); if (!items.length) addTextElement(container, "p", "student-section-empty", "Для текущего урока домашних заданий нет.");
}

function vocabularyDictionaryStatus(card) {
    if (card.state === "new") return { key: "new", label: "Новое" };
    if (card.state === "mastered") return { key: "mastered", label: "Освоено" };
    if (card.state === "review") return { key: "review", label: "Повторяю" };
    return { key: "learning", label: "Изучаю" };
}

function vocabularyDictionaryTime(value) {
    if (!value) return 0;
    if (typeof value.toMillis === "function") return value.toMillis();
    if (typeof value.toDate === "function") return value.toDate().getTime();
    const time = new Date(value).getTime();
    return Number.isFinite(time) ? time : 0;
}

function extraVocabularyReviewStudentUid() {
    return firebaseProfile?.uid || null;
}

function extraVocabularyReviewStorageKey(date = new Date()) {
    const studentUid = extraVocabularyReviewStudentUid();
    return studentUid ? "lessonflow.extraVocabularyReview." + studentUid + "." + localDateKey(date) : null;
}

function cleanupExtraVocabularyReviewStorage() {
    const studentUid = extraVocabularyReviewStudentUid();
    if (!studentUid) return;
    const prefix = "lessonflow.extraVocabularyReview." + studentUid + ".";
    const oldest = new Date(); oldest.setHours(0, 0, 0, 0); oldest.setDate(oldest.getDate() - 7);
    try {
        Object.keys(localStorage).forEach(function(key) {
            if (!key.startsWith(prefix)) return;
            const date = new Date(key.slice(prefix.length) + "T00:00:00");
            if (!Number.isNaN(date.getTime()) && date < oldest) localStorage.removeItem(key);
        });
    } catch (error) { console.error("Extra vocabulary review cleanup error:", error); }
}

function getExtraVocabularyReviewCardIds() {
    const key = extraVocabularyReviewStorageKey();
    if (!key) return [];
    try {
        const value = JSON.parse(localStorage.getItem(key) || "[]");
        return Array.isArray(value) ? Array.from(new Set(value.filter(function(cardId) { return typeof cardId === "string" && cardId; }))) : [];
    } catch (error) { console.error("Extra vocabulary review restore error:", error); return []; }
}

function saveExtraVocabularyReviewCardIds(cardIds) {
    const key = extraVocabularyReviewStorageKey();
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(Array.from(new Set(cardIds))));
}

function addVocabularyCardToExtraReview(cardId) {
    const introduced = (studentDashboardData.vocabularyDictionary || []).some(function(card) { return (card.cardId || card.id) === cardId; });
    if (!introduced) return false;
    const cardIds = getExtraVocabularyReviewCardIds();
    if (cardIds.includes(cardId)) return false;
    cardIds.push(cardId); saveExtraVocabularyReviewCardIds(cardIds); return true;
}

function removeVocabularyCardFromExtraReview(cardId) {
    saveExtraVocabularyReviewCardIds(getExtraVocabularyReviewCardIds().filter(function(id) { return id !== cardId; }));
}

function refreshStudentVocabularyScreen() {
    const container = document.getElementById("student-section-content");
    if (container && !container.hidden) { renderStudentVocabularyScreen(container); applyStudentDesignSystem(container); }
}

function renderExtraVocabularyReview(container) {
    cleanupExtraVocabularyReviewStorage();
    const dictionary = studentDashboardData.vocabularyDictionary || [];
    const byId = new Map(dictionary.map(function(card) { return [card.cardId || card.id, card]; }));
    const storedIds = getExtraVocabularyReviewCardIds();
    const validIds = storedIds.filter(function(cardId) { return byId.has(cardId); });
    if (validIds.length !== storedIds.length) saveExtraVocabularyReviewCardIds(validIds);
    const section = document.createElement("section"); section.className = "student-extra-vocabulary-review";
    const heading = document.createElement("div"); heading.className = "student-extra-review-heading"; const copy = document.createElement("div"); addTextElement(copy, "h3", "", "Дополнительное повторение"); addTextElement(copy, "p", "", validIds.length ? validIds.length + " " + (validIds.length === 1 ? "слово выбрано" : validIds.length < 5 ? "слова выбрано" : "слов выбрано") : "Добавь сюда слова из своего словаря, которые хочешь повторить ещё раз."); heading.appendChild(copy); section.appendChild(heading);
    if (validIds.length) {
        const list = document.createElement("div"); list.className = "student-extra-review-list";
        validIds.forEach(function(cardId) { const card = byId.get(cardId); const chip = document.createElement("span"); chip.className = "student-extra-review-chip"; addTextElement(chip, "span", "", card.english || cardId); const remove = addTextElement(chip, "button", "", "×"); remove.type = "button"; remove.title = "Убрать из дополнительного повторения"; remove.setAttribute("aria-label", "Убрать " + (card.english || cardId)); remove.addEventListener("click", function() { removeVocabularyCardFromExtraReview(cardId); refreshStudentVocabularyScreen(); }); chip.appendChild(remove); list.appendChild(chip); }); section.appendChild(list);
        const actions = document.createElement("div"); actions.className = "student-extra-review-actions"; const start = addTextElement(actions, "button", "student-action student-action-blue", "Повторить выбранные"); start.type = "button"; start.addEventListener("click", function() { startFreeVocabularyReview(validIds.map(function(cardId) { return byId.get(cardId); })); }); const clear = addTextElement(actions, "button", "student-extra-review-clear", "Очистить"); clear.type = "button"; clear.addEventListener("click", function() { saveExtraVocabularyReviewCardIds([]); refreshStudentVocabularyScreen(); }); section.appendChild(actions);
    }
    container.appendChild(section);
}

function openVocabularyDictionaryCard(card) {
    let modal = document.getElementById("student-vocabulary-detail-modal");
    if (!modal) {
        modal = document.createElement("div"); modal.id = "student-vocabulary-detail-modal"; modal.className = "modal-backdrop student-vocabulary-detail-modal"; modal.hidden = true;
        const panel = document.createElement("section"); panel.className = "student-vocabulary-detail-card"; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-modal", "true"); panel.setAttribute("aria-labelledby", "student-vocabulary-detail-title");
        const close = addTextElement(panel, "button", "student-vocabulary-detail-close", "×"); close.type = "button"; close.setAttribute("aria-label", "Закрыть"); close.addEventListener("click", function() { modal.hidden = true; });
        const content = document.createElement("div"); content.className = "student-vocabulary-detail-content"; panel.appendChild(content); modal.appendChild(panel); modal.addEventListener("click", function(event) { if (event.target === modal) modal.hidden = true; }); document.body.appendChild(modal);
    }
    const content = modal.querySelector(".student-vocabulary-detail-content"); content.replaceChildren();
    const status = vocabularyDictionaryStatus(card); addTextElement(content, "span", "student-word-status is-" + status.key, status.label); addTextElement(content, "h2", "", card.english || card.cardId); content.querySelector("h2").id = "student-vocabulary-detail-title"; addTextElement(content, "p", "student-vocabulary-detail-translation", card.translation || "");
    const metadata = [card.source, card.unit, card.page].filter(Boolean); if (metadata.length) addTextElement(content, "p", "student-vocabulary-detail-meta", metadata.join(" · "));
    modal.hidden = false;
}

function renderStudentVocabularyDictionary(container) {
    const section = document.createElement("section"); section.className = "student-personal-vocabulary";
    const heading = document.createElement("div"); heading.className = "student-personal-vocabulary-heading"; const copy = document.createElement("div"); addTextElement(copy, "h3", "", "Мои слова"); addTextElement(copy, "p", "", "Слова, с которыми ты уже работал"); heading.appendChild(copy); section.appendChild(heading);
    if (studentDashboardData.vocabularyDictionaryError) { addTextElement(section, "p", "student-section-empty", "Не удалось загрузить личный словарь."); container.appendChild(section); return; }
    const cards = (studentDashboardData.vocabularyDictionary || []).slice().sort(function(a, b) { return vocabularyDictionaryTime(b.introducedAt) - vocabularyDictionaryTime(a.introducedAt) || String(a.cardId || a.id).localeCompare(String(b.cardId || b.id), undefined, { numeric: true }); });
    const counts = document.createElement("div"); counts.className = "student-personal-vocabulary-counts"; [[cards.length, "Мои слова"], [cards.filter(function(card) { return card.state === "learning"; }).length, "Изучаю"], [cards.filter(function(card) { return card.state === "mastered"; }).length, "Освоено"]].forEach(function(item) { const count = document.createElement("div"); addTextElement(count, "strong", "", item[0]); addTextElement(count, "span", "", item[1]); counts.appendChild(count); }); section.appendChild(counts);
    if (!cards.length) { addTextElement(section, "p", "student-section-empty", "Здесь появятся слова после первой тренировки."); container.appendChild(section); return; }
    const controls = document.createElement("div"); controls.className = "student-vocabulary-dictionary-controls"; const search = document.createElement("input"); search.type = "search"; search.placeholder = "Найти слово"; search.value = studentVocabularySearch; search.setAttribute("aria-label", "Найти слово"); controls.appendChild(search);
    const filters = document.createElement("div"); filters.className = "student-vocabulary-filter-chips"; [["all", "Все"], ["learning", "Изучаю"], ["review", "Повторяю"], ["difficult", "Сложные"], ["mastered", "Освоено"]].forEach(function(item) { const button = addTextElement(filters, "button", "student-vocabulary-filter-chip" + (studentVocabularyFilter === item[0] ? " is-active" : ""), item[1]); button.type = "button"; button.dataset.dictionaryFilter = item[0]; filters.appendChild(button); }); controls.appendChild(filters); section.appendChild(controls);
    const list = document.createElement("div"); list.className = "student-personal-vocabulary-list"; section.appendChild(list);
    const renderList = function() {
        list.replaceChildren(); const query = normalizeMatchText(studentVocabularySearch); const visible = cards.filter(function(card) { const difficult = Number(card.consecutiveIncorrect || 0) >= 2 || card.difficult === true; const filterMatch = studentVocabularyFilter === "all" || studentVocabularyFilter === "difficult" && difficult || card.state === studentVocabularyFilter; const searchMatch = !query || normalizeMatchText(card.english).includes(query) || normalizeMatchText(card.translation).includes(query); return filterMatch && searchMatch; });
        filters.querySelectorAll("button").forEach(function(button) { button.classList.toggle("is-active", button.dataset.dictionaryFilter === studentVocabularyFilter); });
        if (!visible.length) { addTextElement(list, "p", "student-dictionary-empty", query ? "Слова не найдены." : "В этой категории пока нет слов."); return; }
        visible.forEach(function(card) { const cardId = card.cardId || card.id; const status = vocabularyDictionaryStatus(card); const row = document.createElement("article"); row.className = "student-personal-word-row"; row.tabIndex = 0; row.setAttribute("role", "button"); const word = document.createElement("div"); addTextElement(word, "strong", "", card.english || card.cardId); addTextElement(word, "span", "", card.translation || ""); const metadata = [card.source, card.unit].filter(Boolean); if (metadata.length) addTextElement(word, "small", "", metadata.join(" · ")); row.appendChild(word); const badges = document.createElement("div"); badges.className = "student-word-badges"; if (Number(card.consecutiveIncorrect || 0) >= 2 || card.difficult === true) addTextElement(badges, "span", "student-word-difficult", "Сложное"); addTextElement(badges, "span", "student-word-status is-" + status.key, status.label); const selected = getExtraVocabularyReviewCardIds().includes(cardId); const repeat = addTextElement(badges, "button", "student-word-repeat" + (selected ? " is-selected" : ""), selected ? "✓ Добавлено" : "Повторить"); repeat.type = "button"; repeat.disabled = selected; repeat.title = selected ? "На повторение сегодня" : "Добавить на повторение сегодня"; repeat.addEventListener("click", function(event) { event.stopPropagation(); if (addVocabularyCardToExtraReview(cardId)) refreshStudentVocabularyScreen(); }); row.appendChild(badges); row.addEventListener("click", function() { openVocabularyDictionaryCard(card); }); row.addEventListener("keydown", function(event) { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openVocabularyDictionaryCard(card); } }); list.appendChild(row); });
    };
    search.addEventListener("input", function() { studentVocabularySearch = search.value; renderList(); }); filters.addEventListener("click", function(event) { const button = event.target.closest("[data-dictionary-filter]"); if (!button) return; studentVocabularyFilter = button.dataset.dictionaryFilter; renderList(); }); renderList(); container.appendChild(section);
}

function renderStudentVocabularyScreen(container) {
    container.replaceChildren(); studentSectionHeading(container, "Словарь", "Короткая ежедневная практика");
    if (studentDashboardData.vocabularyLoading) { addTextElement(container, "p", "student-section-empty", "Загружаем сегодняшние карточки..."); return; }
    if (studentDashboardData.vocabularyError) { addTextElement(container, "p", "student-section-empty", "Не удалось загрузить сегодняшнюю сессию"); return; }
    const session = studentDashboardData.vocabulary;
    if (!session) { addTextElement(container, "p", "student-section-empty", "Лексическая программа пока не назначена."); return; }
    if (session.programStatus === "not-started") { addTextElement(container, "p", "student-section-empty", "Программа начнётся " + formatVocabularyStartDate(session.assignment?.startDate)); return; }
    if (session.programStatus === "maintenance") { addTextElement(container, "p", "student-section-empty", "Основная программа завершена. Доступен режим повторения."); return; }
    if (session.missingDailyPlan) { addTextElement(container, "p", "student-section-empty", "Для текущего дня план не найден."); return; }
    const summary = getStudentVocabularyTodayState(session);
    const stats = document.createElement("div"); stats.className = "student-vocabulary-stats"; [[summary.totalCards, "Сегодня"], [summary.reviewCount, "На повторение"], [summary.newCount, "Новые"]].forEach(function(item) { const card = document.createElement("article"); addTextElement(card, "strong", "", item[0]); addTextElement(card, "span", "", item[1]); stats.appendChild(card); }); container.appendChild(stats);
    const action = document.createElement("article"); action.className = "student-section-feature student-vocabulary-feature";
    if (summary.completed) { addTextElement(action, "h3", "", "✓ На сегодня всё готово"); addTextElement(action, "p", "", summary.completedTotal + " карточки пройдено"); if (summary.results) addTextElement(action, "p", "", "Знаю: " + Number(summary.results.know || 0) + " · Сомневаюсь: " + Number(summary.results.hard || 0) + " · Не помню: " + Number(summary.results.again || 0)); addTextElement(action, "p", "", "Следующая сессия — завтра"); container.appendChild(action); renderExtraVocabularyReview(container); renderStudentVocabularyDictionary(container); return; }
    if (summary.newCount > 0 && summary.reviewCount > 0) { addTextElement(action, "h3", "", "Сегодня: " + summary.totalCards + " карточек"); addTextElement(action, "p", "", summary.newCount + " новых · " + summary.reviewCount + " на повторение"); }
    else if (summary.newCount > 0) { addTextElement(action, "h3", "", "Сегодня " + summary.newCount + " новых слов"); addTextElement(action, "p", "", "Займёт около 5 минут"); }
    else if (summary.reviewCount > 0) { addTextElement(action, "h3", "", summary.reviewCount + " карточек на повторение"); }
    else { addTextElement(action, "h3", "", "На сегодня карточек нет"); }
    if (summary.totalCards > 0) { const start = addTextElement(action, "button", "student-action student-action-orange", session.status === "in-progress" ? "Продолжить" : summary.reviewCount > 0 && summary.newCount === 0 ? "Повторить слова" : "Начать"); start.type = "button"; start.addEventListener("click", function() { startVocabularyTrainer(session); }); }
    container.appendChild(action); renderExtraVocabularyReview(container); renderStudentVocabularyDictionary(container);
}
function renderStudentProgressScreen(container) {
    studentSectionHeading(container, "Прогресс и достижения", "Результаты, серии и важные этапы");
    const program = studentDashboardData.program; const lessons = program?.lessons || [];
    const completedLessons = lessons.filter(function(item) { return item.status === "completed"; }).length;
    const total = Number(program?.totalLessons || lessons.length || 60);
    const completedTasks = cloudSubmissions.filter(function(item) { return ["submitted","verified"].includes(item.status); }).length + (cloudProgress.completedBlockIds || []).length;
    const completedClasses = (studentDashboardData.events || []).filter(function(item) { return item.status === "completed"; }).length;
    const vocabulary = studentDashboardData.vocabulary?.assignment || {}; const vocabularyMastered = Number(vocabulary.masteredCount || 0); const streak = Math.max(0, Number(firebaseProfile?.streakDays || 0));
    const metrics = [[completedClasses, "Завершённых занятий"], [completedLessons + " из " + total, "Уроков программы"], [completedTasks, "Заданий выполнено"]];
    if (vocabularyMastered || Number(vocabulary.totalCards || 0)) metrics.push([vocabularyMastered, "Слов освоено"]); if (streak) metrics.push([streak + " дней", "Серия успеха"]);
    const cards = document.createElement("div"); cards.className = "student-metric-grid"; metrics.forEach(function(item) { const card = document.createElement("article"); addTextElement(card, "strong", "", item[0]); addTextElement(card, "span", "", item[1]); cards.appendChild(card); }); container.appendChild(cards);
    const grid = document.createElement("div"); grid.className = "student-achievement-grid"; [["badge-streak.png", streak + " дней", "Серия успеха", false], ["badge-stars.png", completedLessons + " уроков программы", "Путь ученика", completedLessons < 1], ["badge-stars.png", "10 уроков программы", "Первая десятка", completedLessons < 10]].forEach(function(item) { const card = document.createElement("article"); card.className = "student-achievement-card" + (item[3] ? " is-locked" : ""); const image = document.createElement("img"); image.src = "assets/student-dashboard/decorative/" + item[0]; image.alt = ""; card.appendChild(image); addTextElement(card, "strong", "", item[1]); addTextElement(card, "span", "", item[2]); grid.appendChild(card); }); container.appendChild(grid);
}
function renderStudentMessagesScreen(container, keepScroll) {
    studentSectionHeading(container, "Сообщения", "Написать преподавателю");
    const student = studentDashboardData.student;
    const shell = document.createElement("section"); shell.className = "student-messages-shell messaging-student-shell";
    if (!student?.teacherUid || !student?.id) {
        addTextElement(shell, "p", "messaging-empty", "Не удалось определить преподавателя. Обратитесь к администратору LessonFlow.");
        container.appendChild(shell); return;
    }
    const context = { teacherUid: student.teacherUid, studentUid: firebaseProfile?.uid, studentDocId: student.id };
    const expectedId = window.lessonFlowCloud.getConversationId(context.teacherUid, context.studentUid);
    const conversation = messagingConversations.find(function(item) { return item.id === expectedId; });
    if (activeMessagingConversationId !== expectedId) {
        activeMessagingConversationId = expectedId; activeMessagingMessages = []; messagingStickToBottom = true;
    }
    if (conversation) window.lessonFlowCloud.subscribeToMessages(expectedId);
    if (conversation && Number(conversation.unreadStudent || 0) > 0) window.lessonFlowCloud.markConversationRead(expectedId).catch(function(error) { console.error("Student mark read failed:", error); });
    const header = document.createElement("header");
    const teacherAvatar = document.createElement("img"); teacherAvatar.src = "assets/teacher/avatars/avatar-teacher-female.png"; teacherAvatar.alt = ""; header.appendChild(teacherAvatar);
    const title = document.createElement("div"); addTextElement(title, "strong", "", "Ваш преподаватель"); addTextElement(title, "span", "", "Личная переписка по занятиям"); header.appendChild(title); shell.appendChild(header);
    const history = document.createElement("div"); history.className = "student-message-history messaging-thread";
    renderMessageThread(history, conversation, activeMessagingMessages, "Здесь вы можете написать своему преподавателю."); shell.appendChild(history);
    shell.appendChild(createMessageComposer(context, expectedId, function(id) { window.lessonFlowCloud.subscribeToMessages(id); }));
    container.appendChild(shell);
}
function renderStudentSettingsScreen(container) { studentSectionHeading(container, "Настройки", "Профиль и интерфейс"); const profile = document.createElement("section"); profile.className = "student-settings-card"; const avatar = document.createElement("img"); avatar.src = "assets/student-dashboard/Avatars/avatar-student-male.png"; avatar.alt = ""; profile.appendChild(avatar); const copy = document.createElement("div"); addTextElement(copy, "h3", "", firebaseProfile?.name || "Ученик"); addTextElement(copy, "p", "", "Настройки сохраняются только на этом устройстве."); profile.appendChild(copy); container.appendChild(profile); [["Звук", "lessonFlowStudentSound"], ["Анимации", "lessonFlowStudentAnimations"]].forEach(function(item) { const label = document.createElement("label"); label.className = "student-setting-toggle"; addTextElement(label, "span", "", item[0]); const input = document.createElement("input"); input.type = "checkbox"; input.checked = localStorage.getItem(item[1]) !== "off"; input.addEventListener("change", function() { localStorage.setItem(item[1], input.checked ? "on" : "off"); }); label.appendChild(input); container.appendChild(label); }); }
function showStudentSection(target) { const home = document.querySelector("#student-screen .student-dashboard"); const section = document.getElementById("student-section-content"); studentLessonScreen.classList.remove("active", "is-in-student-shell"); studentScreen.querySelector(".student-app-header").hidden = false; document.querySelectorAll("#student-screen .student-nav-item[data-student-nav]").forEach(function(item) { item.classList.toggle("is-active", item.dataset.studentNav === target); }); if (target === "home") { section.hidden = true; home.hidden = false; renderStudentDashboard(); return; } home.hidden = true; section.hidden = false; section.replaceChildren(); if (target === "lessons") renderStudentLessonsScreen(section); else if (target === "program") renderStudentProgramScreen(section); else if (target === "homework") renderStudentHomeworkScreen(section); else if (target === "vocabulary") { if (isFirebaseMode() && firebaseProfile?.role === "student") { studentDashboardData.vocabularyLoading = true; renderStudentVocabularyScreen(section); loadStudentVocabularyToday().then(function() { const stillOpen = document.querySelector('#student-screen .student-nav-item[data-student-nav="vocabulary"]')?.classList.contains("is-active"); if (stillOpen) { renderStudentVocabularyScreen(section); applyStudentDesignSystem(section); } }); } else renderStudentVocabularyScreen(section); } else if (target === "progress") renderStudentProgressScreen(section); else if (target === "messages") renderStudentMessagesScreen(section); else if (target === "settings") renderStudentSettingsScreen(section); applyStudentDesignSystem(section); window.scrollTo({ top: 0, behavior: "smooth" }); }

studentScreen.addEventListener("click", function(event) { const navItem = event.target.closest("[data-student-nav]"); if (navItem) showStudentSection(navItem.dataset.studentNav); });

const studentCustomCursor = document.createElement("div");
studentCustomCursor.className = "student-custom-cursor";
studentCustomCursor.setAttribute("aria-hidden", "true");
document.body.appendChild(studentCustomCursor);
if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("pointermove", function(event) {
        const inLessonFlowUi = Boolean(event.target.closest("#student-screen, #vocabulary-trainer-screen, #student-lesson-screen.is-in-student-shell, .teacher-app, .modal-backdrop"));
        studentCustomCursor.classList.toggle("is-visible", inLessonFlowUi);
        studentCustomCursor.classList.toggle("is-pointer", inLessonFlowUi && Boolean(event.target.closest("button, a, [role='button'], .student-nav-item, .student-calendar-day, .teacher-sidebar-link, .material-card")));
        studentCustomCursor.style.transform = "translate3d(" + event.clientX + "px," + event.clientY + "px,0)";
    });
    document.addEventListener("pointerdown", function() { if (studentCustomCursor.classList.contains("is-visible")) studentCustomCursor.classList.add("is-clicking"); });
    document.addEventListener("pointerup", function() { studentCustomCursor.classList.remove("is-clicking"); });
}

function vocabularySessionStorageKey(session) { return "lessonFlowVocabularySession:" + (firebaseProfile?.uid || "student") + ":" + (session.day?.dayIndex || session.assignment?.currentDayIndex || 1); }
function saveVocabularySessionProgress() { if (!activeVocabularySession) return; localStorage.setItem(vocabularySessionStorageKey(activeVocabularySession), JSON.stringify({ index: vocabularySessionIndex, results: vocabularySessionResults })); }
function cancelVocabularySpeech() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}
function speakVocabularyEnglish(text, button) {
    if (!("speechSynthesis" in window) || !text) return;
    const speech = window.speechSynthesis;
    speech.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speech.getVoices();
    utterance.lang = "en-GB";
    utterance.rate = 0.95;
    utterance.voice = voices.find(function(voice) { return voice.lang === "en-GB"; }) || voices.find(function(voice) { return voice.lang.toLowerCase().startsWith("en"); }) || null;
    const stopHighlight = function() { button.classList.remove("is-speaking"); };
    utterance.addEventListener("start", function() { button.classList.add("is-speaking"); });
    utterance.addEventListener("end", stopHighlight);
    utterance.addEventListener("error", stopHighlight);
    speech.speak(utterance);
}
function openVocabularyTrainerShell() {
    const studentMain = studentScreen.querySelector(".student-main"); if (vocabularyTrainerScreen.parentElement !== studentMain) studentMain.appendChild(vocabularyTrainerScreen); document.querySelectorAll(".screen").forEach(function(item) { item.classList.remove("active"); }); studentScreen.classList.add("active"); vocabularyTrainerScreen.classList.add("active", "is-in-student-shell"); studentScreen.querySelector(".student-app-header").hidden = true; studentScreen.querySelector(".student-dashboard").hidden = true; document.getElementById("student-section-content").hidden = true;
}
function startFreeVocabularyReview(cards) {
    if (!cards?.length) return;
    vocabularyTrainerMode = "free-review"; freeVocabularyReviewCards = cards.slice(); freeVocabularyReviewIndex = 0; freeVocabularyReviewInitialCount = cards.length; vocabularyAnswerBusy = false; openVocabularyTrainerShell(); renderFreeVocabularyReviewCard();
}
function renderFreeVocabularyReviewCard() {
    cancelVocabularySpeech();
    const content = document.getElementById("vocabulary-trainer-content"); const progress = document.getElementById("vocabulary-trainer-progress"); const fill = document.getElementById("vocabulary-trainer-progress-fill"); content.replaceChildren(); content.classList.remove("vocabulary-finish-card"); content.classList.add("has-flashcard");
    if (freeVocabularyReviewIndex >= freeVocabularyReviewCards.length) { finishFreeVocabularyReview(); return; }
    const card = freeVocabularyReviewCards[freeVocabularyReviewIndex]; const visibleNumber = freeVocabularyReviewIndex + 1; progress.textContent = visibleNumber + " / " + freeVocabularyReviewCards.length; fill.style.width = visibleNumber / freeVocabularyReviewCards.length * 100 + "%"; document.getElementById("vocabulary-trainer-topic").textContent = "Свободная практика"; const indicator = document.getElementById("vocabulary-session-indicator"); indicator.replaceChildren(); addTextElement(indicator, "span", "vocabulary-session-label is-free-review", "Дополнительно"); addTextElement(indicator, "strong", "", "Без изменения прогресса");
    const stage = document.createElement("div"); stage.className = "vocabulary-flip-stage"; stage.tabIndex = 0; stage.setAttribute("role", "button"); stage.setAttribute("aria-label", "Перевернуть карточку"); stage.setAttribute("aria-pressed", "false");
    const flipCard = document.createElement("div"); flipCard.className = "vocabulary-flip-card"; const front = document.createElement("section"); front.className = "vocabulary-card-face vocabulary-card-front"; front.setAttribute("aria-label", "Лицевая сторона карточки"); const motif = document.createElement("div"); motif.className = "vocabulary-card-motif"; motif.setAttribute("aria-hidden", "true"); front.appendChild(motif); addTextElement(front, "p", "vocabulary-card-kind", card.cardType === "chunk" ? "ВЫРАЖЕНИЕ" : "СЛОВО"); addTextElement(front, "h1", "vocabulary-card-word", card.english || card.cardId); const ipa = card.ipa || card.phonetics || card.transcription; if (ipa) addTextElement(front, "p", "vocabulary-card-ipa", ipa);
    const back = document.createElement("section"); back.className = "vocabulary-card-face vocabulary-card-back"; back.setAttribute("aria-label", "Обратная сторона карточки"); back.setAttribute("aria-hidden", "true"); addTextElement(back, "p", "vocabulary-card-translation", card.translation || ""); const example = card.exampleSentence || card.example || card.sentence; if (example) addTextElement(back, "p", "vocabulary-card-example", example); const metadata = document.createElement("div"); metadata.className = "vocabulary-source-chips"; [card.source, card.unit, card.page].filter(Boolean).forEach(function(value) { addTextElement(metadata, "span", "", value); }); if (metadata.children.length) back.appendChild(metadata);
    flipCard.append(front, back); stage.appendChild(flipCard); const audio = addTextElement(stage, "button", "vocabulary-audio-button", "🔊"); audio.type = "button"; audio.setAttribute("aria-label", "Прослушать произношение"); audio.addEventListener("click", function(event) { event.stopPropagation(); speakVocabularyEnglish(card.english, audio); }); audio.addEventListener("keydown", function(event) { event.stopPropagation(); }); if (!("speechSynthesis" in window)) audio.disabled = true;
    const toggle = function() { const flipped = stage.classList.toggle("is-flipped"); stage.setAttribute("aria-pressed", String(flipped)); front.setAttribute("aria-hidden", String(flipped)); back.setAttribute("aria-hidden", String(!flipped)); }; stage.addEventListener("click", toggle); stage.addEventListener("keydown", function(event) { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); toggle(); } }); content.appendChild(stage);
    const wrap = document.createElement("div"); wrap.className = "vocabulary-recall-actions free-review-actions"; addTextElement(wrap, "p", "vocabulary-recall-question", "Хочешь увидеть это слово ещё раз?"); const actions = document.createElement("div"); actions.className = "vocabulary-answer-actions"; const again = addTextElement(actions, "button", "vocabulary-answer vocabulary-answer-again", "Ещё раз"); again.type = "button"; again.addEventListener("click", function() { freeVocabularyReviewCards.push(card); freeVocabularyReviewIndex += 1; renderFreeVocabularyReviewCard(); }); const next = addTextElement(actions, "button", "vocabulary-answer vocabulary-answer-know", "Дальше"); next.type = "button"; next.addEventListener("click", function() { freeVocabularyReviewIndex += 1; renderFreeVocabularyReviewCard(); }); wrap.appendChild(actions); content.appendChild(wrap);
}
function finishFreeVocabularyReview() {
    cancelVocabularySpeech(); const content = document.getElementById("vocabulary-trainer-content"); content.replaceChildren(); content.classList.remove("has-flashcard"); content.classList.add("vocabulary-finish-card"); document.getElementById("vocabulary-trainer-progress").textContent = freeVocabularyReviewInitialCount + " / " + freeVocabularyReviewInitialCount; document.getElementById("vocabulary-trainer-progress-fill").style.width = "100%"; document.getElementById("vocabulary-session-indicator").replaceChildren(); addTextElement(content, "div", "vocabulary-finish-mark", "✓"); addTextElement(content, "h2", "", "Дополнительное повторение завершено"); addTextElement(content, "p", "vocabulary-finish-lead", freeVocabularyReviewInitialCount + " слов повторено"); const actions = document.createElement("div"); actions.className = "free-review-finish-actions"; const repeat = addTextElement(actions, "button", "student-action student-action-blue", "Повторить ещё раз"); repeat.type = "button"; repeat.addEventListener("click", function() { const byId = new Map((studentDashboardData.vocabularyDictionary || []).map(function(card) { return [card.cardId || card.id, card]; })); startFreeVocabularyReview(getExtraVocabularyReviewCardIds().map(function(id) { return byId.get(id); }).filter(Boolean)); }); const back = addTextElement(actions, "button", "vocabulary-finish-home", "Вернуться в словарь"); back.type = "button"; back.addEventListener("click", returnFromFreeVocabularyReview); content.appendChild(actions);
}
function returnFromFreeVocabularyReview() { cancelVocabularySpeech(); vocabularyTrainerMode = "formal"; freeVocabularyReviewCards = []; showScreen(studentScreen); showStudentSection("vocabulary"); }
function startVocabularyTrainer(session) {
    vocabularyTrainerMode = "formal"; activeVocabularySession = session; vocabularySessionIndex = 0; vocabularySessionResults = { know: 0, hard: 0, again: 0 }; vocabularyAnswerBusy = false;
    const persistedAnswers = session.answers || {}; const answeredIds = new Set(Object.keys(persistedAnswers)); vocabularySessionIndex = session.cards.findIndex(function(card) { return !answeredIds.has(card.cardId || card.id); }); if (vocabularySessionIndex < 0) vocabularySessionIndex = session.cards.length; Object.values(persistedAnswers).forEach(function(item) { if (vocabularySessionResults[item.answer] !== undefined) vocabularySessionResults[item.answer] += 1; });
    try { const saved = JSON.parse(localStorage.getItem(vocabularySessionStorageKey(session))); if (saved && Number.isInteger(saved.index) && saved.index >= 0 && saved.index < session.cards.length) { vocabularySessionIndex = saved.index; vocabularySessionResults = { ...vocabularySessionResults, ...(saved.results || {}) }; } } catch (error) { console.error("Vocabulary session restore error:", error); }
    const studentMain = studentScreen.querySelector(".student-main"); if (vocabularyTrainerScreen.parentElement !== studentMain) studentMain.appendChild(vocabularyTrainerScreen); document.querySelectorAll(".screen").forEach(function(item) { item.classList.remove("active"); }); studentScreen.classList.add("active"); vocabularyTrainerScreen.classList.add("active", "is-in-student-shell"); studentScreen.querySelector(".student-app-header").hidden = true; studentScreen.querySelector(".student-dashboard").hidden = true; document.getElementById("student-section-content").hidden = true; if (vocabularySessionIndex >= session.cards.length) { if (session.status === "completed" || session.completedToday) returnFromVocabularyTrainer(); else finishVocabularySession().catch(function(error) { console.error("Vocabulary session completion error:", error); }); } else renderVocabularyTrainerCard();
}
function renderVocabularyTrainerCard() {
    cancelVocabularySpeech();
    const content = document.getElementById("vocabulary-trainer-content"); const progress = document.getElementById("vocabulary-trainer-progress"); const fill = document.getElementById("vocabulary-trainer-progress-fill"); content.replaceChildren(); content.classList.remove("vocabulary-finish-card");
    if (!activeVocabularySession?.cards?.length) { addTextElement(content, "h2", "", "Сегодня нет карточек"); return; }
    const card = activeVocabularySession.cards[vocabularySessionIndex]; const visibleNumber = vocabularySessionIndex + 1; progress.textContent = visibleNumber + " / " + activeVocabularySession.cards.length; fill.style.width = visibleNumber / activeVocabularySession.cards.length * 100 + "%"; document.getElementById("vocabulary-trainer-topic").textContent = activeVocabularySession.week?.topic || ""; const indicator = document.getElementById("vocabulary-session-indicator"); indicator.replaceChildren(); addTextElement(indicator, "span", "vocabulary-session-label", "Сегодня"); addTextElement(indicator, "strong", "", activeVocabularySession.newCount + " новых · " + activeVocabularySession.dueCount + " на повторение");
    content.classList.add("has-flashcard");
    const stage = document.createElement("div"); stage.className = "vocabulary-flip-stage"; stage.tabIndex = 0; stage.setAttribute("role", "button"); stage.setAttribute("aria-label", "Перевернуть карточку"); stage.setAttribute("aria-pressed", "false");
    const flipCard = document.createElement("div"); flipCard.className = "vocabulary-flip-card";
    const reverse = card.direction === "ru-en"; const front = document.createElement("section"); front.className = "vocabulary-card-face vocabulary-card-front"; front.setAttribute("aria-label", "Лицевая сторона карточки"); const frontMotif = document.createElement("div"); frontMotif.className = "vocabulary-card-motif"; frontMotif.setAttribute("aria-hidden", "true"); front.appendChild(frontMotif); addTextElement(front, "p", "vocabulary-card-kind", reverse ? "RU → EN" : (card.cardType === "chunk" ? "ВЫРАЖЕНИЕ" : "СЛОВО")); addTextElement(front, "h1", "vocabulary-card-word", reverse ? card.translation : card.english); const ipa = card.ipa || card.phonetics || card.transcription; if (ipa && !reverse) addTextElement(front, "p", "vocabulary-card-ipa", ipa);
    const back = document.createElement("section"); back.className = "vocabulary-card-face vocabulary-card-back"; back.setAttribute("aria-label", "Обратная сторона карточки"); back.setAttribute("aria-hidden", "true"); addTextElement(back, "p", "vocabulary-card-translation", reverse ? card.english : card.translation); const example = card.exampleSentence || card.example || card.sentence; if (example) addTextElement(back, "p", "vocabulary-card-example", example); const metadata = document.createElement("div"); metadata.className = "vocabulary-source-chips"; [card.source, card.unit, card.page].filter(Boolean).forEach(function(value) { addTextElement(metadata, "span", "", value); }); if (metadata.children.length) back.appendChild(metadata);
    flipCard.append(front, back); stage.appendChild(flipCard); const audioButton = addTextElement(stage, "button", "vocabulary-audio-button", "🔊"); audioButton.type = "button"; audioButton.setAttribute("aria-label", "Прослушать произношение"); audioButton.title = "Прослушать произношение"; audioButton.addEventListener("click", function(event) { event.stopPropagation(); speakVocabularyEnglish(card.english, audioButton); }); audioButton.addEventListener("keydown", function(event) { event.stopPropagation(); }); if (!("speechSynthesis" in window)) { audioButton.disabled = true; audioButton.title = "Озвучка недоступна в этом браузере."; }
    const toggleCard = function() { const flipped = stage.classList.toggle("is-flipped"); stage.setAttribute("aria-pressed", String(flipped)); front.setAttribute("aria-hidden", String(flipped)); back.setAttribute("aria-hidden", String(!flipped)); };
    stage.addEventListener("click", toggleCard); stage.addEventListener("keydown", function(event) { if (event.key !== "Enter" && event.key !== " ") return; event.preventDefault(); toggleCard(); }); content.appendChild(stage);
    const actionsWrap = document.createElement("div"); actionsWrap.className = "vocabulary-recall-actions"; addTextElement(actionsWrap, "p", "vocabulary-recall-question", "Как вспомнилось?"); const actions = document.createElement("div"); actions.className = "vocabulary-answer-actions"; [["again", "↻", "Не помню", "Повторю скоро"], ["hard", "~", "Сомневаюсь", "Нужно закрепить"], ["know", "✓", "Знаю", "Идём дальше"]].forEach(function(item) { const button = document.createElement("button"); button.className = "vocabulary-answer vocabulary-answer-" + item[0]; button.type = "button"; addTextElement(button, "span", "vocabulary-answer-icon", item[1]); const copy = document.createElement("span"); addTextElement(copy, "strong", "", item[2]); addTextElement(copy, "small", "", item[3]); button.appendChild(copy); button.addEventListener("click", function() { submitVocabularyAnswer(card, item[0], actions); }); actions.appendChild(button); }); actionsWrap.appendChild(actions); content.appendChild(actionsWrap);
}
async function submitVocabularyAnswer(card, result, actions) {
    if (vocabularyAnswerBusy) return; vocabularyAnswerBusy = true; Array.from(actions.querySelectorAll("button")).forEach(function(button) { button.disabled = true; });
    try { await window.lessonFlowCloud.saveVocabularyAnswer(card, result, activeVocabularySession); vocabularySessionResults[result] += 1; vocabularySessionIndex += 1; saveVocabularySessionProgress(); if (vocabularySessionIndex >= activeVocabularySession.cards.length) await finishVocabularySession(); else { vocabularyAnswerBusy = false; renderVocabularyTrainerCard(); } }
    catch (error) { console.error("Vocabulary answer error:", error); addTextElement(document.getElementById("vocabulary-trainer-content"), "p", "login-error", "Не удалось сохранить ответ. Попробуйте ещё раз."); vocabularyAnswerBusy = false; Array.from(actions.querySelectorAll("button")).forEach(function(button) { button.disabled = false; }); }
}
async function finishVocabularySession() {
    document.getElementById("vocabulary-trainer-content").classList.remove("has-flashcard");
    cancelVocabularySpeech(); await window.lessonFlowCloud.completeVocabularySession(activeVocabularySession, { total: activeVocabularySession.cards.length, ...vocabularySessionResults }); localStorage.removeItem(vocabularySessionStorageKey(activeVocabularySession)); const content = document.getElementById("vocabulary-trainer-content"); content.replaceChildren(); content.classList.add("vocabulary-finish-card"); document.getElementById("vocabulary-trainer-progress").textContent = activeVocabularySession.cards.length + " / " + activeVocabularySession.cards.length; document.getElementById("vocabulary-trainer-progress-fill").style.width = "100%"; document.getElementById("vocabulary-session-indicator").replaceChildren(); addTextElement(content, "div", "vocabulary-finish-mark", "✓"); addTextElement(content, "h2", "", "Готово на сегодня"); addTextElement(content, "p", "vocabulary-finish-lead", activeVocabularySession.cards.length + " карточки пройдено"); const summary = document.createElement("div"); summary.className = "vocabulary-finish-summary"; [[vocabularySessionResults.know, "Знаю"], [vocabularySessionResults.hard, "Сомневаюсь"], [vocabularySessionResults.again, "Нужно повторить"]].forEach(function(item) { const box = document.createElement("div"); addTextElement(box, "strong", "", item[0]); addTextElement(box, "span", "", item[1]); summary.appendChild(box); }); content.appendChild(summary); addTextElement(content, "p", "vocabulary-finish-note", vocabularySessionResults.know === activeVocabularySession.cards.length ? "Отличная сессия. Все карточки вспомнились уверенно." : "Следующая короткая сессия — завтра."); const home = addTextElement(content, "button", "vocabulary-finish-home", "Вернуться на главную"); home.type = "button"; home.addEventListener("click", returnFromVocabularyTrainer); vocabularyAnswerBusy = false;
}
async function returnFromVocabularyTrainer() { cancelVocabularySpeech(); showScreen(studentScreen); try { studentDashboardData.vocabulary = await window.lessonFlowCloud.getStudentVocabularySession(firebaseProfile.uid); studentDashboardData.vocabularyError = null; } catch (error) { studentDashboardData.vocabularyError = error.code || "unknown"; } showStudentSection("home"); }
document.getElementById("exit-vocabulary-trainer").addEventListener("click", function() { if (vocabularyTrainerMode === "free-review") returnFromFreeVocabularyReview(); else returnFromVocabularyTrainer(); });

function updateStudentProgress() {
    const state = getPublishedState(activePublishedLesson);
    const total = activePublishedLesson.blocks.length;
    const completed = activePublishedLesson.blocks.filter(function(block) {
        return Boolean(state.completedBlocks[block.id]);
    }).length;
    studentProgressText.textContent = "Выполнено " + completed + " из " + total;
    studentRemainingText.textContent = completed === total ? "Урок завершён!" : "Осталось этапов: " + (total - completed);
    studentProgressFill.style.width = (total ? completed / total * 100 : 0) + "%";
}

function openStudentGame(block) {
    const link = block.url || block.link || "";
    const wordwall = normalizeMatchText(block.service) === "wordwall";
    const gameSource = wordwall ? block.embedUrl || "" : link;
    activeGameBlock = block;
    gameLessonScrollY = window.scrollY;
    document.getElementById("student-game-title").textContent = block.title || (wordwall ? "Онлайн-задание" : "Онлайн-упражнение");
    document.getElementById("student-game-meta").textContent = [wordwall ? "Онлайн-задание" : "Онлайн-упражнение", block.service].filter(Boolean).join(" · ");
    studentGameOpen.href = link; studentGameOpenFooter.href = link;
    const frameWrap = document.getElementById("student-game-frame-wrap");
    frameWrap.hidden = !gameSource;
    if (gameSource) studentGameFrame.src = gameSource; else studentGameFrame.removeAttribute("src");
    const fallbackText = document.querySelector(".student-game-fallback p");
    fallbackText.textContent = wordwall && !block.embedUrl ? "Упражнение откроется на Wordwall." : "Если упражнение не отображается, оно откроется на сайте сервиса.";
    const state = getPublishedState(activePublishedLesson);
    const completeButton = document.getElementById("student-game-complete");
    const check = wordwall ? wordwallSubmissionFor(block) : null;
    if (wordwall) {
        const labels = { submitted: "На проверке", verified: "✓ Проверено преподавателем", returned: "Отправить на проверку" };
        completeButton.textContent = labels[check?.status] || "Отправить на проверку";
        completeButton.disabled = check?.status === "submitted" || check?.status === "verified";
        if (!check || check.status === "returned") {
            if (!state.externalChecks) state.externalChecks = {};
            state.externalChecks[block.id] = { service: "Wordwall", status: "in-progress", startedAt: new Date().toISOString() };
            saveStudentLessonState();
        }
    } else {
        completeButton.textContent = state.completedBlocks[block.id] ? "✓ Выполнено" : "✓ Я закончил";
        completeButton.disabled = Boolean(state.completedBlocks[block.id]);
    }
    studentGameModal.hidden = false; document.body.classList.add("modal-scroll-lock");
}

function closeStudentGame() {
    if (studentGameModal.hidden) return;
    const blockId = activeGameBlock?.id;
    studentGameModal.hidden = true; studentGameFrame.removeAttribute("src"); activeGameBlock = null;
    document.body.classList.remove("modal-scroll-lock");
    requestAnimationFrame(function() {
        const stage = blockId ? studentLessonBlocks.querySelector('[data-block-id="' + CSS.escape(blockId) + '"]') : null;
        if (stage) stage.scrollIntoView({ block: "center" }); else window.scrollTo(0, gameLessonScrollY);
    });
}

document.getElementById("student-game-complete").addEventListener("click", function() {
    if (!activeGameBlock || !activePublishedLesson) return;
    const blockId = activeGameBlock.id;
    const state = getPublishedState(activePublishedLesson);
    const wordwall = normalizeMatchText(activeGameBlock.service) === "wordwall";
    if (wordwall) {
        if (!state.externalChecks) state.externalChecks = {};
        state.externalChecks[blockId] = { service: "Wordwall", status: "submitted", submittedAt: new Date().toISOString() };
        const existingSubmission = wordwallSubmissionFor(activeGameBlock);
        if (existingSubmission) { existingSubmission.status = "submitted"; existingSubmission.teacherComment = ""; existingSubmission.reviewedAt = null; }
        else cloudSubmissions.push({ id: "pending-wordwall-" + blockId, teacherUid: activePublishedLesson.teacherUid, studentUid: firebaseProfile?.uid, studentDocId: activePublishedLesson.studentDocId || null, studentName: activePublishedLesson.studentName, lessonId: activePublishedLesson.lessonId, blockId: blockId, title: activeGameBlock.resultsTitle || activeGameBlock.title, type: "wordwall", status: "submitted", submittedAt: new Date().toISOString() });
    } else state.completedBlocks[blockId] = true;
    saveStudentLessonState(); closeStudentGame(); renderStudentLesson();
    requestAnimationFrame(function() { const stage = studentLessonBlocks.querySelector('[data-block-id="' + CSS.escape(blockId) + '"]'); if (stage) stage.scrollIntoView({ block: "center" }); });
});
document.getElementById("student-game-close").addEventListener("click", closeStudentGame);
document.getElementById("student-game-close-icon").addEventListener("click", closeStudentGame);
document.getElementById("student-game-back").addEventListener("click", closeStudentGame);
studentGameModal.addEventListener("click", function(event) { if (event.target === studentGameModal) closeStudentGame(); });

function writtenSubmissionFor(block) {
    if (!activePublishedLesson) return null;
    return cloudSubmissions.find(function(submission) { return submission.type === "written" && submission.lessonId === (activePublishedLesson.lessonId || activePublishedLesson.cloudId) && submission.blockId === block.id; }) || null;
}

function renderWrittenPhotoPreviews() {
    const container = document.getElementById("written-photo-previews"); container.replaceChildren();
    writtenSubmissionFiles.forEach(function(file, index) {
        const card = document.createElement("article"); card.className = "written-photo-preview";
        const image = document.createElement("img"); const objectUrl = URL.createObjectURL(file); image.src = objectUrl; image.alt = "Страница " + (index + 1); image.onload = function() { URL.revokeObjectURL(objectUrl); }; card.appendChild(image);
        addTextElement(card, "strong", "", "Страница " + (index + 1));
        const remove = addTextElement(card, "button", "delete-link", "Удалить ×"); remove.type = "button"; remove.addEventListener("click", function() { writtenSubmissionFiles.splice(index, 1); renderWrittenPhotoPreviews(); }); card.appendChild(remove); container.appendChild(card);
    });
    document.getElementById("written-photo-count").textContent = writtenSubmissionFiles.length + " из 5 фотографий";
    document.getElementById("written-camera-button").disabled = writtenSubmissionFiles.length >= 5;
    document.getElementById("written-gallery-button").disabled = writtenSubmissionFiles.length >= 5;
}

function addWrittenPhotoFiles(fileList) {
    const status = document.getElementById("written-submission-status"); status.textContent = "";
    const candidates = Array.from(fileList || []);
    if (writtenSubmissionFiles.length + candidates.length > 5) { status.textContent = "Можно добавить не больше 5 фотографий."; return; }
    const invalidType = candidates.find(function(file) { return !file.type.startsWith("image/"); });
    if (invalidType) { status.textContent = "Можно прикреплять только изображения."; return; }
    const tooLarge = candidates.find(function(file) { return file.size > 10 * 1024 * 1024; });
    if (tooLarge) { status.textContent = "Каждая фотография должна быть не больше 10 МБ."; return; }
    writtenSubmissionFiles.push(...candidates); renderWrittenPhotoPreviews();
}

function openWrittenSubmission(block) {
    writtenSubmissionBlock = block; writtenSubmissionFiles = [];
    document.getElementById("written-submission-assignment").textContent = block.title || "Письменная работа";
    document.getElementById("written-submission-status").textContent = demoMode ? "Отправка файлов доступна после входа в аккаунт." : "";
    document.getElementById("send-written-submission").disabled = demoMode;
    renderWrittenPhotoPreviews(); document.getElementById("written-submission-modal").hidden = false;
}

function closeWrittenSubmission() { document.getElementById("written-submission-modal").hidden = true; writtenSubmissionBlock = null; writtenSubmissionFiles = []; }
document.getElementById("written-camera-button").addEventListener("click", function() { document.getElementById("written-camera-input").click(); });
document.getElementById("written-gallery-button").addEventListener("click", function() { document.getElementById("written-gallery-input").click(); });
document.getElementById("written-camera-input").addEventListener("change", function(event) { addWrittenPhotoFiles(event.target.files); event.target.value = ""; });
document.getElementById("written-gallery-input").addEventListener("change", function(event) { addWrittenPhotoFiles(event.target.files); event.target.value = ""; });
document.getElementById("close-written-submission").addEventListener("click", closeWrittenSubmission);
document.getElementById("written-submission-modal").addEventListener("click", function(event) { if (event.target.id === "written-submission-modal") closeWrittenSubmission(); });
document.getElementById("send-written-submission").addEventListener("click", async function(event) {
    const button = event.currentTarget; const status = document.getElementById("written-submission-status");
    const selectedFiles = writtenSubmissionFiles.slice();
    console.log("WRITTEN SUBMIT: start");
    console.log("WRITTEN SUBMIT: files", selectedFiles.length);
    if (!selectedFiles.length) { status.textContent = "Добавьте хотя бы одну фотографию."; return; }
    if (!writtenSubmissionBlock || !activePublishedLesson || demoMode) { status.textContent = "Отправка файлов доступна после входа в аккаунт."; return; }
    const currentSubmission = writtenSubmissionFor(writtenSubmissionBlock);
    if (currentSubmission?.status === "submitted") { status.textContent = "Работа уже отправлена преподавателю."; return; }
    if (currentSubmission?.status === "verified") { status.textContent = "Работа уже проверена преподавателем."; return; }
    button.disabled = true;
    try {
        const previousSubmission = writtenSubmissionFor(writtenSubmissionBlock);
        const result = await window.lessonFlowCloud.uploadWrittenSubmission(activePublishedLesson, writtenSubmissionBlock, selectedFiles, function(current, total) { status.textContent = "Загружаем " + current + " из " + total + "…"; }, previousSubmission);
        if (result.duplicate) { status.textContent = "Работа уже отправлена преподавателю."; return; }
        status.textContent = "Работа отправлена преподавателю.";
        setTimeout(function() { closeWrittenSubmission(); renderStudentLesson(); }, 700);
    } catch (error) {
        console.error("WRITTEN SUBMISSION FAILED:", error);
        status.textContent = error.code === "not-authenticated" ? "Для отправки работы войдите в LessonFlow." : error.code === "invalid-submission" ? "Не удалось определить данные урока. Обновите страницу и попробуйте ещё раз." : error.status === 401 ? "Сессия LessonFlow истекла. Войдите снова." : error.status === 403 ? "Нет доступа к загрузке файлов." : error.status === 400 ? (error.workerMessage || "Фотография не принята сервером.") : error.status === 502 ? "Не удалось сохранить фотографию. Попробуйте ещё раз." : error.code === "files-network" ? "Не удалось связаться с сервером файлов." : "Не удалось отправить работу. Попробуйте ещё раз.";
    } finally { button.disabled = false; }
});

function formatAudioDuration(seconds) { const total = Math.max(0, Math.round(Number(seconds) || 0)); return Math.floor(total / 60) + ":" + String(total % 60).padStart(2, "0"); }
function audioSubmissionFor(block) { if (!activePublishedLesson) return null; return cloudSubmissions.find(function(item) { return item.type === "audio" && item.lessonId === (activePublishedLesson.lessonId || activePublishedLesson.cloudId) && item.blockId === block.id; }) || null; }
function stopAudioStream() { if (audioMediaStream) audioMediaStream.getTracks().forEach(function(track) { track.stop(); }); audioMediaStream = null; }
function clearAudioTimer() { if (audioRecordingTimer) clearInterval(audioRecordingTimer); audioRecordingTimer = null; }
function clearAudioPreview() { if (audioPreviewUrl) URL.revokeObjectURL(audioPreviewUrl); audioPreviewUrl = ""; audioSubmissionFile = null; audioSubmissionDuration = 0; document.getElementById("audio-local-player").removeAttribute("src"); document.getElementById("audio-local-preview").hidden = true; }
function closeAudioSubmission() { audioSubmissionBlock = null; if (audioMediaRecorder?.state === "recording") audioMediaRecorder.stop(); clearAudioTimer(); stopAudioStream(); clearAudioPreview(); audioMediaRecorder = null; document.getElementById("audio-record-button").disabled = demoMode; document.getElementById("audio-submission-modal").hidden = true; document.body.classList.remove("modal-scroll-lock"); }
function showAudioPreview(file, duration) { clearAudioPreview(); audioSubmissionFile = file; audioSubmissionDuration = Number(duration) || 0; audioPreviewUrl = URL.createObjectURL(file); document.getElementById("audio-local-player").src = audioPreviewUrl; document.getElementById("audio-local-meta").textContent = file.name + " · " + formatAudioDuration(audioSubmissionDuration) + " · " + (file.size / 1024 / 1024).toFixed(1) + " МБ"; document.getElementById("audio-local-preview").hidden = false; }
function openAudioSubmission(block) { audioSubmissionBlock = block; clearAudioPreview(); document.getElementById("audio-submission-assignment").textContent = block.title || "Аудиоответ"; document.getElementById("audio-submission-status").textContent = demoMode ? "Отправка аудио доступна после входа в аккаунт." : ""; document.getElementById("audio-record-button").disabled = demoMode; document.getElementById("send-audio-submission").disabled = demoMode; document.getElementById("audio-recording-state").hidden = true; document.getElementById("audio-submission-modal").hidden = false; document.body.classList.add("modal-scroll-lock"); }
function supportedRecorderMime() { return ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg;codecs=opus"].find(function(type) { return window.MediaRecorder?.isTypeSupported(type); }) || ""; }
async function startAudioRecording() {
    const status = document.getElementById("audio-submission-status"); status.textContent = "";
    if (demoMode) { status.textContent = "Отправка аудио доступна после входа в аккаунт."; return; }
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) { status.textContent = "Запись с микрофона не поддерживается. Выберите готовый аудиофайл."; return; }
    clearAudioPreview(); stopAudioStream();
    try {
        audioMediaStream = await navigator.mediaDevices.getUserMedia({ audio: true }); const mimeType = supportedRecorderMime(); audioMediaRecorder = mimeType ? new MediaRecorder(audioMediaStream, { mimeType: mimeType }) : new MediaRecorder(audioMediaStream); console.log("LessonFlow MediaRecorder MIME:", audioMediaRecorder.mimeType || "browser default");
        audioRecordingChunks = []; audioMediaRecorder.addEventListener("dataavailable", function(event) { if (event.data.size) audioRecordingChunks.push(event.data); });
        audioMediaRecorder.addEventListener("stop", function() { clearAudioTimer(); const duration = Math.min(600, (Date.now() - audioRecordingStartedAt) / 1000); const actualType = audioMediaRecorder.mimeType || audioRecordingChunks[0]?.type || "audio/webm"; const extension = actualType.includes("mp4") ? "m4a" : actualType.includes("ogg") ? "ogg" : "webm"; const blob = new Blob(audioRecordingChunks, { type: actualType }); if (audioSubmissionBlock) showAudioPreview(new File([blob], "answer." + extension, { type: actualType }), duration); stopAudioStream(); document.getElementById("audio-record-button").disabled = false; document.getElementById("audio-recording-state").hidden = true; });
        audioRecordingStartedAt = Date.now(); audioMediaRecorder.start(); document.getElementById("audio-record-button").disabled = true; document.getElementById("audio-recording-state").hidden = false; document.getElementById("audio-recording-time").textContent = "00:00";
        audioRecordingTimer = setInterval(function() { const elapsed = Math.floor((Date.now() - audioRecordingStartedAt) / 1000); document.getElementById("audio-recording-time").textContent = String(Math.floor(elapsed / 60)).padStart(2, "0") + ":" + String(elapsed % 60).padStart(2, "0"); if (elapsed >= 600 && audioMediaRecorder?.state === "recording") audioMediaRecorder.stop(); }, 500);
    } catch (error) { console.error("Microphone access error:", error); stopAudioStream(); status.textContent = "LessonFlow не получил доступ к микрофону. Разрешите доступ в браузере или выберите готовый аудиофайл."; }
}
document.getElementById("audio-record-button").addEventListener("click", startAudioRecording); document.getElementById("audio-record-again").addEventListener("click", startAudioRecording); document.getElementById("audio-stop-button").addEventListener("click", function() { if (audioMediaRecorder?.state === "recording") audioMediaRecorder.stop(); });
document.getElementById("audio-file-button").addEventListener("click", function() { document.getElementById("audio-file-input").click(); });
document.getElementById("audio-file-input").addEventListener("change", function(event) { const file = event.target.files?.[0]; event.target.value = ""; if (!file) return; const status = document.getElementById("audio-submission-status"); if (!file.type.startsWith("audio/")) { status.textContent = "Выберите аудиофайл."; return; } if (file.size > 25 * 1024 * 1024) { status.textContent = "Аудиофайл должен быть не больше 25 МБ."; return; } const url = URL.createObjectURL(file); const probe = new Audio(); probe.preload = "metadata"; probe.onloadedmetadata = function() { const duration = probe.duration; URL.revokeObjectURL(url); if (duration > 600) { status.textContent = "Аудио должно быть не длиннее 10 минут."; return; } status.textContent = ""; showAudioPreview(file, duration); }; probe.onerror = function() { URL.revokeObjectURL(url); status.textContent = "Не удалось прочитать аудиофайл."; }; probe.src = url; });
document.getElementById("close-audio-submission").addEventListener("click", closeAudioSubmission); document.getElementById("audio-submission-modal").addEventListener("click", function(event) { if (event.target.id === "audio-submission-modal") closeAudioSubmission(); });
document.getElementById("send-audio-submission").addEventListener("click", async function(event) { const status = document.getElementById("audio-submission-status"); if (!audioSubmissionFile) { status.textContent = "Запишите ответ или выберите аудиофайл."; return; } const previous = audioSubmissionFor(audioSubmissionBlock); if (previous?.status === "submitted") { status.textContent = "Аудио уже отправлено преподавателю."; return; } const button = event.currentTarget; button.disabled = true; status.textContent = "Загружаем аудио…"; try { await window.lessonFlowCloud.uploadAudioSubmission(activePublishedLesson, audioSubmissionBlock, audioSubmissionFile, audioSubmissionDuration, previous); status.textContent = "Аудио отправлено преподавателю."; setTimeout(function() { closeAudioSubmission(); renderStudentLesson(); }, 700); } catch (error) { console.error("Audio submission failed:", error); status.textContent = error.status === 401 ? "Сессия LessonFlow истекла. Войдите снова." : error.status === 403 ? "Нет доступа к загрузке аудио." : error.code === "files-network" ? "Не удалось связаться с сервером файлов." : "Не удалось отправить аудио. Попробуйте ещё раз."; } finally { button.disabled = false; } });

function renderStudentLesson() {
    const lesson = activePublishedLesson;
    const state = getPublishedState(lesson);
    studentLessonTitle.textContent = lesson.topic;
    studentLessonMeta.textContent = lesson.level + " · " + lesson.subject + " · " + formatLessonDate(lesson.date);
    studentLessonBlocks.replaceChildren();

    lesson.blocks.forEach(function(block, index) {
        const stage = document.createElement("article");
        const isHomework = String(block.type).toLocaleLowerCase("ru").includes("домашнее задание");
        stage.className = "student-lesson-stage" + (state.completedBlocks[block.id] ? " is-complete" : "") + (isHomework ? " is-homework" : "");
        addTextElement(stage, "div", "student-stage-number", index + 1);
        const content = document.createElement("div");
        const heading = document.createElement("div");
        heading.className = "student-stage-heading";
        addTextElement(heading, "h3", "", isHomework ? "Домашнее задание" : block.title);
        if (!isHomework) addTextElement(heading, "span", "student-stage-time", (block.duration || block.time || 0) + " минут");
        content.appendChild(heading);

        if (isHomework && block.title !== "Домашнее задание") addTextElement(content, "h4", "", block.title);
        if (isHomework) appendHomeworkTiming(content, lesson, block);

        const blockType = normalizeMatchText(block.type);
        const blockService = normalizeMatchText(block.service);
        const wordwallSubmission = blockService === "wordwall" ? wordwallSubmissionFor(block) : null;
        const isOnlineGame = blockType === "online-game" || blockType.includes("онлайн-игра") || ["wordwall", "learningapps"].includes(blockService);
        if (block.type === "youglish") {
            addTextElement(content, "p", "student-stage-details", "Слово: " + block.query + " · примеров: " + block.exampleCount + " · язык: " + (block.language === "chinese" ? "Chinese" : "English") + (block.accent ? " · " + block.accent.toUpperCase() : ""));
            addTextElement(content, "p", "student-stage-description", block.instruction);
        } else {
            addTextElement(content, "p", "student-stage-description", block.description || "Выполни этот этап урока.");
            if (isOnlineGame) addTextElement(content, "p", "student-stage-details", [blockService === "wordwall" ? "Онлайн-задание" : "Онлайн-упражнение", block.service].filter(Boolean).join(" · "));
            else if (block.type) addTextElement(content, "p", "student-stage-details", block.type);
        }
        if (blockService === "wordwall") {
            const checkStatus = wordwallSubmission?.status || "none";
            console.log("WORDWALL BLOCK STATUS:", block.id, checkStatus);
            const statusLabels = { none: "Не начато", submitted: "🕒 Отправлено преподавателю · Ожидает проверки", verified: "✓ Проверено преподавателем", returned: "↩ Нужно выполнить ещё раз" };
            addTextElement(content, "p", "wordwall-check-status status-" + checkStatus, statusLabels[checkStatus]);
            if (wordwallSubmission?.status === "verified" && wordwallSubmission.scorePercent != null) addTextElement(content, "p", "wordwall-student-score", "Результат: " + wordwallSubmission.scorePercent + "%");
            if (wordwallSubmission?.teacherComment) { addTextElement(content, "strong", "written-teacher-comment-label", "Комментарий преподавателя:"); addTextElement(content, "p", "written-teacher-comment", wordwallSubmission.teacherComment); }
        }

        if (isImageWorksheet(block)) {
            const preview = document.createElement("div");
            preview.className = "worksheet-student-preview";
            const image = document.createElement("img");
            image.alt = "Первая страница рабочего листа";
            image.hidden = true;
            const fallback = addTextElement(preview, "span", "", "Загружаем страницу…");
            preview.appendChild(image);
            addTextElement(preview, "strong", "", Number(block.pageCount || block.pages.length) + " стр.");
            content.appendChild(preview);
            loadWorksheetThumbnail(block, image, fallback);
        }

        const actions = document.createElement("div");
        actions.className = "student-stage-actions";
        if (isImageWorksheet(block)) {
            const openWorksheet = addTextElement(actions, "button", "main-button", "Открыть рабочий лист");
            openWorksheet.type = "button";
            openWorksheet.addEventListener("click", function() { openWorksheetViewer(block); });
        } else if (block.type === "youglish") {
            const training = addTextElement(actions, "button", "main-button", "Начать тренировку");
            training.type = "button";
            training.addEventListener("click", function() { openYouglishTraining(block); });
        } else if (isOnlineGame && (block.url || block.link) && !(blockService === "wordwall" && ["submitted", "verified"].includes(wordwallSubmission?.status))) {
            const playLabel = blockService === "wordwall" && wordwallSubmission?.status === "returned" ? "🎮 Выполнить повторно" : blockService === "wordwall" ? "🎮 Начать задание" : "🎮 Начать упражнение";
            const play = addTextElement(actions, "button", "main-button", playLabel); play.type = "button"; play.addEventListener("click", function() { openStudentGame(block); });
        } else if (block.link) {
            const open = addTextElement(actions, "a", "main-button link-button", "Открыть материал");
            open.href = block.link;
            open.target = "_blank";
            open.rel = "noopener noreferrer";
            if (/Онлайн-игра|Видео|Мой сайт|Wordwall|YouTube/i.test(block.type)) {
                const preview = addTextElement(actions, "button", "secondary-button", "Предпросмотр");
                preview.type = "button";
                preview.addEventListener("click", function() {
                    const wordwall = normalizeMatchText(block.service) === "wordwall";
                    openPreview({ ...block, link: wordwall ? block.embedUrl || "" : block.link, fallbackLink: wordwall ? block.url || block.link : "" });
                });
            }
        }

        if (block.submissionType === "audio") {
            const audioSubmission = audioSubmissionFor(block);
            if (audioSubmission?.status === "verified") {
                addTextElement(actions, "strong", "written-submitted-status status-verified", "✓ Аудиоответ проверен");
                if (audioSubmission.teacherComment) { addTextElement(actions, "span", "written-teacher-comment-label", "Комментарий преподавателя:"); addTextElement(actions, "p", "written-teacher-comment", audioSubmission.teacherComment); }
            } else if (audioSubmission?.status === "returned") {
                addTextElement(actions, "strong", "written-returned-status", "Преподаватель попросил записать ответ ещё раз");
                if (audioSubmission.teacherComment) { addTextElement(actions, "span", "written-teacher-comment-label", "Комментарий:"); addTextElement(actions, "p", "written-teacher-comment", audioSubmission.teacherComment); }
                const retry = addTextElement(actions, "button", "main-button audio-submission-button", "🎙 Записать новый ответ"); retry.type = "button"; retry.dataset.blockId = block.id;
            } else if (audioSubmission?.status === "submitted") {
                addTextElement(actions, "span", "written-submitted-status", "🕒 Аудио отправлено преподавателю"); addTextElement(actions, "small", "", formatAudioDuration(audioSubmission.durationSec || audioSubmission.files?.[0]?.duration || 0));
            } else {
                const audioButton = addTextElement(actions, "button", "main-button audio-submission-button", "🎙 Отправить аудиоответ"); audioButton.type = "button"; audioButton.dataset.blockId = block.id; addTextElement(actions, "small", "written-submission-hint", "Можно записать ответ прямо здесь или выбрать готовый аудиофайл.");
            }
        } else if (block.submissionType === "written-photo") {
            const submission = writtenSubmissionFor(block);
            if (submission?.status === "verified") {
                addTextElement(actions, "span", "written-submitted-status status-verified", "✓ Работа проверена");
                if (submission.teacherComment) { addTextElement(actions, "strong", "written-teacher-comment-label", "Комментарий преподавателя:"); addTextElement(actions, "p", "written-teacher-comment", submission.teacherComment); }
            } else if (submission?.status === "returned") {
                addTextElement(actions, "strong", "written-returned-status", "Преподаватель попросил доработать работу");
                if (submission.teacherComment) { addTextElement(actions, "span", "written-teacher-comment-label", "Комментарий:"); addTextElement(actions, "p", "written-teacher-comment", submission.teacherComment); }
                const resend = addTextElement(actions, "button", "main-button written-submission-button", "📷 Отправить исправленную работу"); resend.type = "button"; resend.dataset.blockId = block.id;
            } else if (submission?.status === "submitted") {
                addTextElement(actions, "span", "written-submitted-status", "🕒 Отправлено преподавателю");
                addTextElement(actions, "small", "", (submission.fileCount || submission.files?.length || 0) + " фото");
            } else {
                const attach = addTextElement(actions, "button", "main-button written-submission-button", "📷 Прикрепить письменную работу"); attach.type = "button"; attach.dataset.blockId = block.id;
                addTextElement(actions, "small", "written-submission-hint", "Можно сфотографировать тетрадь или выбрать готовые фотографии.");
            }
        } else if (blockService !== "wordwall") {
            const complete = addTextElement(actions, "button", "complete-stage" + (state.completedBlocks[block.id] ? " is-complete" : ""), "✓ Выполнено");
            complete.type = "button";
            complete.addEventListener("click", function() {
                state.completedBlocks[block.id] = !state.completedBlocks[block.id];
                saveStudentLessonState();
                renderStudentLesson();
            });
        }
        content.appendChild(actions);
        stage.appendChild(content);
        stage.dataset.blockId = block.id;
        studentLessonBlocks.appendChild(stage);
    });

    reflectionOptions.forEach(function(button) {
        button.classList.toggle("is-selected", button.dataset.reflection === state.reflection);
    });
    repeatRequestButton.classList.toggle("is-requested", state.repeatRequest);
    repeatRequestButton.textContent = state.repeatRequest
        ? "✓ Преподаватель увидит эту просьбу"
        : "↻ Хочу ещё раз разобрать эту тему";
    updateStudentProgress();
    if (!teacherStudentPreview) applyStudentDesignSystem(studentLessonScreen);
}

studentLessonBlocks.addEventListener("click", function(event) {
    const button = event.target.closest(".written-submission-button");
    if (!button || !studentLessonBlocks.contains(button)) return;
    const blockId = button.dataset.blockId;
    const block = activePublishedLesson?.blocks?.find(function(item) { return String(item.id) === String(blockId); });
    console.log("WRITTEN BUTTON CLICKED");
    console.log("BLOCK ID:", blockId);
    console.log("WRITTEN BLOCK:", block);
    if (!block || block.submissionType !== "written-photo") return;
    openWrittenSubmission(block);
});
studentLessonBlocks.addEventListener("click", function(event) { const button = event.target.closest(".audio-submission-button"); if (!button) return; const block = activePublishedLesson?.blocks?.find(function(item) { return String(item.id) === String(button.dataset.blockId); }); if (block?.submissionType === "audio") openAudioSubmission(block); });

function openPublishedLesson(lesson, asTeacher, targetBlockId) {
    activePublishedLesson = lesson;
    teacherStudentPreview = Boolean(asTeacher);
    backToTeacherPreview.hidden = !teacherStudentPreview;
    backFromStudentLesson.hidden = teacherStudentPreview;
    renderStudentLesson();
    if (teacherStudentPreview) {
        if (studentLessonScreen.parentElement !== document.body) document.body.insertBefore(studentLessonScreen, studentGameModal);
        studentLessonScreen.classList.remove("is-in-student-shell");
        showScreen(studentLessonScreen);
    } else {
        const studentMain = studentScreen.querySelector(".student-main"); if (studentLessonScreen.parentElement !== studentMain) studentMain.appendChild(studentLessonScreen);
        document.querySelectorAll(".screen").forEach(function(item) { item.classList.remove("active"); });
        studentScreen.classList.add("active"); studentLessonScreen.classList.add("active", "is-in-student-shell");
        studentScreen.querySelector(".student-app-header").hidden = true; studentScreen.querySelector(".student-dashboard").hidden = true; document.getElementById("student-section-content").hidden = true;
        applyStudentDesignSystem(studentLessonScreen);
    }
    if (targetBlockId) requestAnimationFrame(function() { const block = studentLessonBlocks.querySelector('[data-block-id="' + CSS.escape(String(targetBlockId)) + '"]'); if (block) { block.classList.add("is-targeted"); block.scrollIntoView({ behavior: "smooth", block: "center" }); } });
}

const demoStudentOverview = {
    meta: "9 КЛАСС · АНГЛИЙСКИЙ", name: "Миша", textbook: "Учебник: Комарова",
    currentTopic: "Present Perfect", repeatTopic: "Irregular verbs", repeatNote: "Также: since / for",
    homeworkTitle: "Workbook", homeworkDescription: "p. 8, ex. 3",
    lessonDate: "10 августа", lessonTopic: "Past Simple vs Present Perfect"
};

function lessonHomeworkBlocks(lesson) {
    return lesson && Array.isArray(lesson.blocks) ? lesson.blocks.filter(function(block) {
        return String(block.type || "").toLocaleLowerCase("ru").includes("домашнее задание");
    }) : [];
}

function lessonDateValue(value) {
    if (!value) return null;
    if (typeof value.toDate === "function") return value.toDate();
    if (value.seconds) return new Date(value.seconds * 1000);
    const parsed = new Date(value); return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function homeworkTiming(lesson, block) {
    const metadata = lesson?.homeworkMetadata?.[block.id] || {};
    const assignedAt = lessonDateValue(metadata.assignedAt || block.assignedAt || lesson?.publishedAt || lesson?.date);
    const dueMode = metadata.homeworkDueMode || block.homeworkDueMode || "next-lesson";
    let dueAt = lessonDateValue(metadata.dueAt || block.dueAt);
    if (dueMode === "next-lesson") {
        const events = firebaseProfile?.role === "student" ? (studentDashboardData.events || []) : cloudScheduleEvents;
        const linked = metadata.dueScheduleEventId ? events.find(function(event) { return event.id === metadata.dueScheduleEventId && event.status !== "cancelled"; }) : null;
        const anchor = String(lesson?.date || "") + "T23:59";
        const next = linked || events.filter(function(event) { return event.studentDocId === lesson?.studentDocId && event.status !== "cancelled" && (event.date + "T" + (event.startTime || "00:00")) > anchor; }).sort(function(a,b) { return (a.date + a.startTime).localeCompare(b.date + b.startTime); })[0];
        dueAt = next ? new Date(next.date + "T" + (next.startTime || "00:00") + ":00") : null;
    }
    return { assignedAt: assignedAt, dueAt: dueAt, dueMode: dueMode };
}

function homeworkDateLabel(value, includeTime) {
    if (!value) return "";
    return new Intl.DateTimeFormat("ru-RU", includeTime ? { day:"numeric", month:"long", hour:"2-digit", minute:"2-digit" } : { day:"numeric", month:"long" }).format(value).replace(",", " ·");
}

function appendHomeworkTiming(container, lesson, block) {
    const timing = homeworkTiming(lesson, block);
    const meta = document.createElement("div"); meta.className = "homework-timing";
    if (timing.assignedAt) addTextElement(meta, "small", "", "Назначено: " + homeworkDateLabel(timing.assignedAt, false));
    addTextElement(meta, "small", "", timing.dueAt ? "Сдать до: " + homeworkDateLabel(timing.dueAt, true) : "Срок: до следующего занятия");
    container.appendChild(meta);
}

function historySortTime(lesson) {
    const value = lesson.archivedAt || lesson.publishedAt || lesson.date;
    if (value?.toMillis) return value.toMillis();
    if (value?.seconds) return value.seconds * 1000;
    const parsed = new Date(value || 0).getTime();
    return Number.isFinite(parsed) ? parsed : 0;
}

function normalizedReflection(value) {
    const aliases = { confident: "expert", understand: "clear", "need-practice": "practice" };
    return aliases[value] || value;
}

function shortLessonDate(dateValue) {
    return new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short" }).format(new Date(dateValue));
}

function historyLessonResult(lesson) {
    const blocks = Array.isArray(lesson.blocks) ? lesson.blocks : [];
    const completedIds = lesson.progress?.completedBlockIds || [];
    const completed = blocks.filter(function(block) { return completedIds.includes(block.id); }).length;
    return { completed: completed, total: blocks.length, percent: blocks.length ? Math.round(completed / blocks.length * 100) : 0 };
}

function openHistoryLesson(lesson) {
    const result = historyLessonResult(lesson);
    document.getElementById("history-lesson-title").textContent = lesson.topic || "Урок";
    document.getElementById("history-lesson-meta").textContent = formatLessonDate(lesson.date) + " · " + (lesson.totalDuration || 0) + " минут · " + result.completed + "/" + result.total + " выполнено";
    historyLessonContent.replaceChildren();
    (lesson.blocks || []).forEach(function(block, index) {
        const stage = document.createElement("article");
        const completed = (lesson.progress?.completedBlockIds || []).includes(block.id);
        stage.className = "history-stage" + (completed ? " is-complete" : "");
        addTextElement(stage, "span", "history-stage-number", index + 1);
        const details = document.createElement("div");
        addTextElement(details, "h3", "", block.title || "Этап урока");
        addTextElement(details, "p", "", block.description || block.instruction || "Описание не указано");
        addTextElement(details, "p", "student-stage-details", (block.duration || block.time || 0) + " минут" + (block.type ? " · " + block.type : ""));
        if (block.link) { const link = addTextElement(details, "a", "small-button link-button", "Открыть материал"); link.href = block.link; link.target = "_blank"; link.rel = "noopener noreferrer"; }
        const wordwall = normalizeMatchText(block.service) === "wordwall";
        const checkStatus = lesson.progress?.externalChecks?.[block.id]?.status;
        const writtenCheck = lesson.progress?.writtenChecks?.[block.id];
        const audioCheck = lesson.progress?.audioChecks?.[block.id];
        const historicalStatus = audioCheck?.status === "verified" ? "Аудиоответ — принят" : audioCheck?.status === "returned" ? "Аудиоответ — возвращён на доработку" : writtenCheck?.status === "verified" ? "Письменная работа — принята" : writtenCheck?.status === "returned" ? "Письменная работа — возвращена на доработку" : checkStatus === "verified" ? "Проверено преподавателем" : checkStatus === "submitted" ? "Отправлено, но не подтверждено" : checkStatus === "returned" ? "Возвращено на повторное выполнение" : completed ? "Выполнено" : "Не выполнено";
        addTextElement(details, "span", checkStatus === "verified" || (!wordwall && completed) ? "topic-status status-confident" : "topic-status status-not-done", historicalStatus);
        if (writtenCheck?.teacherComment) addTextElement(details, "p", "written-teacher-comment", "Комментарий преподавателя: " + writtenCheck.teacherComment);
        if (audioCheck?.teacherComment) addTextElement(details, "p", "written-teacher-comment", "Комментарий преподавателя: " + audioCheck.teacherComment);
        stage.appendChild(details); historyLessonContent.appendChild(stage);
    });
    const reflection = reflectionSignals[normalizedReflection(lesson.progress?.selfAssessment)];
    addTextElement(historyLessonContent, "p", "history-summary", "Самооценка: " + (reflection ? reflection.student : "ученик не оценил тему"));
    addTextElement(historyLessonContent, "p", "history-summary", lesson.progress?.repeatRequest ? "Ученик просил повторить тему" : "Просьбы повторить тему не было");
    historyLessonModal.hidden = false;
}

async function openDeleteHistoryLesson(lesson) {
    if (!selectedStudentRecord || !lesson.historyId) return;
    deletingHistoryLesson = lesson; deletingHistorySubmissionCount = 0;
    const modal = document.getElementById("delete-history-lesson-modal"); const warning = document.getElementById("delete-history-lesson-warning"); const status = document.getElementById("delete-history-lesson-status"); const confirm = document.getElementById("confirm-delete-history-lesson");
    document.getElementById("delete-history-lesson-message").textContent = "Урок “" + (lesson.topic || "Урок") + "” от " + formatLessonDate(lesson.date) + " будет удалён из истории " + selectedStudentRecord.name + ". Это действие нельзя отменить.";
    warning.hidden = true; warning.textContent = ""; status.textContent = "Проверяем связанные работы…"; confirm.disabled = true; confirm.textContent = "Удалить урок"; modal.hidden = false;
    try {
        const inspection = await window.lessonFlowCloud.inspectHistoryLessonDeletion(selectedStudentRecord.authUid, lesson.historyId, lesson.lessonId || lesson.historyId);
        deletingHistorySubmissionCount = inspection.submissionCount;
        if (deletingHistorySubmissionCount) { warning.textContent = "К этому уроку привязаны работы ученика. При удалении урока история проверки этих работ тоже станет недоступна."; warning.hidden = false; confirm.textContent = "Удалить урок и связанные работы"; }
        status.textContent = ""; confirm.disabled = false;
    } catch (error) { console.error("History deletion inspection error:", error); status.textContent = error.code === "permission-denied" ? "Нет доступа к удалению этого урока." : error.code === "failed-precondition" ? "Для проверки связанных работ требуется точечный Firestore index." : "Не удалось проверить связанные работы."; }
}

function closeDeleteHistoryLesson() { document.getElementById("delete-history-lesson-modal").hidden = true; deletingHistoryLesson = null; deletingHistorySubmissionCount = 0; }
document.getElementById("cancel-delete-history-lesson").addEventListener("click", closeDeleteHistoryLesson);
document.getElementById("delete-history-lesson-modal").addEventListener("click", function(event) { if (event.target.id === "delete-history-lesson-modal") closeDeleteHistoryLesson(); });
document.getElementById("confirm-delete-history-lesson").addEventListener("click", async function(event) {
    if (!deletingHistoryLesson || !selectedStudentRecord) return;
    const button = event.currentTarget; const status = document.getElementById("delete-history-lesson-status"); const lesson = deletingHistoryLesson; button.disabled = true; status.textContent = "Удаляем урок…";
    try {
        await window.lessonFlowCloud.deleteHistoryLesson(selectedStudentRecord.authUid, lesson.historyId, lesson.lessonId || lesson.historyId, deletingHistorySubmissionCount > 0);
        cloudLessonHistory = cloudLessonHistory.filter(function(item) { return item.historyId !== lesson.historyId; });
        historyDeleteMessage = "Урок удалён из истории."; closeDeleteHistoryLesson(); renderStudentCard(selectedStudentRecord);
    } catch (error) { console.error("History lesson delete error:", error); status.textContent = error.code === "permission-denied" ? "Нет доступа к удалению этого урока. Нужен точечный delete rule для истории преподавателя." : "Не удалось удалить урок."; button.disabled = false; }
});

function renderFirebaseTab(panelName, renderContent) {
    const panel = document.querySelector('[data-tab-panel="' + panelName + '"]');
    Array.from(panel.children).forEach(function(child) {
        if (!child.classList.contains("firebase-tab-content")) child.hidden = true;
        else child.remove();
    });
    const content = document.createElement("div");
    content.className = "firebase-tab-content";
    renderContent(content);
    panel.appendChild(content);
}

const focusTypeLabels = { topic: "Тема", mistake: "Типичная ошибка", vocabulary: "Слово / лексика", pronunciation: "Произношение" };
const focusStatusLabels = { repeat: "Нужно повторить", practice: "Тренируем", learning: "Сейчас изучаем", confident: "Уверенно" };

function resolveProgramCurrentLesson(program) {
    if (!program || program.status !== "active" || !Array.isArray(program.lessons) || !program.lessons.length) return null;
    const lessons = program.lessons.slice().sort(function(a, b) { return Number(a.lessonNumber || 0) - Number(b.lessonNumber || 0); });
    const available = lessons.filter(function(lesson) { return !["completed", "skipped"].includes(lesson.status); });
    const declared = available.find(function(lesson) { return Number(lesson.lessonNumber) === Number(program.currentLessonNumber); });
    return declared || available[0] || lessons.find(function(lesson) { return Number(lesson.lessonNumber) === Number(program.currentLessonNumber); }) || lessons[lessons.length - 1];
}

function lessonFocusTitle(lesson) {
    return String(lesson?.mainFocus || lesson?.title || lesson?.topic || "").trim();
}

function resolveStudentCurrentTopic(student, program) {
    const currentLesson = resolveProgramCurrentLesson(program);
    return { topic: lessonFocusTitle(currentLesson) || String(student?.currentTopic || "").trim() || "Тема пока не указана", lesson: currentLesson, source: currentLesson ? "program" : "legacy" };
}

function resolveStudentReviewTopics(student, focusItems, progress, currentState) {
    const normalized = new Set(); const topics = [];
    const append = function(value, source) { const title = String(value || "").trim(); const key = title.replace(/\s+/g, " ").toLocaleLowerCase("ru"); if (!title || normalized.has(key)) return; normalized.add(key); topics.push({ title: title, source: source }); };
    (focusItems || []).filter(function(item) { return item.status === "repeat"; }).forEach(function(item) { append(item.title, "repeat"); });
    if (progress?.repeatRequest) append(currentState?.topic, "request");
    (focusItems || []).filter(function(item) { return item.status === "practice"; }).forEach(function(item) { append(item.title, "practice"); });
    if (!topics.length) append(student?.repeatTopic, "legacy");
    return topics;
}

function selectedStudentDerivedState(student) {
    const selected = Boolean(student?.id && selectedStudentRecord?.id === student.id);
    const program = selected && activeLearningProgram?.studentDocId === student.id ? activeLearningProgram : null;
    const current = resolveStudentCurrentTopic(student, program);
    const reviewTopics = resolveStudentReviewTopics(student, selected ? cloudFocusItems : [], selected ? cloudProgress : null, current);
    return { current: current, reviewTopics: reviewTopics, program: program };
}

function openFocusItemModal(item, defaults) {
    editingFocusItemId = item?.id || null;
    document.getElementById("focus-item-modal-title").textContent = item ? "Изменить запись" : "Добавить в карту";
    focusItemForm.reset(); focusItemError.textContent = "";
    const values = item || defaults || {};
    ["title", "type", "status", "note"].forEach(function(field) { if (values[field] != null) focusItemForm.elements[field].value = values[field]; });
    focusItemModal.hidden = false; focusItemForm.elements.title.focus();
}

async function addFocusItemOnce(title, status) {
    const normalizedTitle = String(title || "").trim();
    if (!normalizedTitle || !selectedStudentRecord) return;
    const duplicate = cloudFocusItems.some(function(item) { return item.title.trim().toLocaleLowerCase("ru") === normalizedTitle.toLocaleLowerCase("ru"); });
    if (duplicate) { focusItemError.textContent = "Эта тема уже есть в карте"; return; }
    try {
        await window.lessonFlowCloud.saveFocusItem(selectedStudentRecord.id, null, { title: normalizedTitle, type: "topic", status: status, note: "" });
    } catch (error) { console.error("Focus item save error:", error); focusItemError.textContent = "Не удалось добавить запись"; }
}

function renderFocusItemsTab(student) {
    renderFirebaseTab("repeat", function(content) {
        const derived = selectedStudentDerivedState(student);
        const normalizedCurrent = derived.current.topic.replace(/\s+/g, " ").toLocaleLowerCase("ru");
        const requestAlreadyMapped = cloudFocusItems.some(function(item) { return String(item.title || "").trim().replace(/\s+/g, " ").toLocaleLowerCase("ru") === normalizedCurrent; });
        const heading = document.createElement("div"); heading.className = "focus-heading";
        const headingText = document.createElement("div"); addTextElement(headingText, "h3", "", "Карта тем и трудных мест"); addTextElement(headingText, "p", "", "То, к чему стоит вернуться на следующих занятиях"); heading.appendChild(headingText);
        const addButton = addTextElement(heading, "button", "main-button", "+ Добавить"); addButton.type = "button"; addButton.addEventListener("click", function() { openFocusItemModal(null); }); heading.appendChild(addButton); content.appendChild(heading);

        if (cloudProgress.repeatRequest && !requestAlreadyMapped && derived.current.topic !== "Тема пока не указана") {
            const request = document.createElement("section"); request.className = "focus-request-card";
            addTextElement(request, "p", "", student.name + " попросил ещё раз вернуться к теме:"); addTextElement(request, "strong", "", derived.current.topic);
            const addRequest = addTextElement(request, "button", "small-button", "Добавить в карту"); addRequest.type = "button"; addRequest.addEventListener("click", function() { addFocusItemOnce(derived.current.topic, "repeat"); }); request.appendChild(addRequest); content.appendChild(request);
        }

        const appendManualSource = function(parent, label, value, status) { if (!value) return; const row = document.createElement("div"); addTextElement(row, "span", "", label + ": " + value); const add = addTextElement(row, "button", "small-button", "+ Добавить в карту"); add.type = "button"; add.addEventListener("click", function() { addFocusItemOnce(value, status); }); row.appendChild(add); parent.appendChild(row); };
        const source = document.createElement("section"); source.className = "focus-source-card";
        if (derived.current.source === "program") {
            addTextElement(source, "h3", "", "Из учебной программы");
            addTextElement(source, "p", "", "Текущий урок: " + derived.current.topic);
            const manualValues = [String(student.currentTopic || "").trim() !== derived.current.topic ? ["Текущая тема", student.currentTopic, "learning"] : null, derived.reviewTopics.some(function(item) { return item.source === "legacy"; }) ? ["Повторить", student.repeatTopic, "repeat"] : null].filter(Boolean);
            if (manualValues.length) { addTextElement(source, "h4", "", "Ручные данные карточки"); manualValues.forEach(function(item) { appendManualSource(source, item[0], item[1], item[2]); }); }
        } else {
            addTextElement(source, "h3", "", "Из карточки ученика");
            appendManualSource(source, "Текущая тема", student.currentTopic, "learning");
            appendManualSource(source, "Повторить", student.repeatTopic, "repeat");
        }
        content.appendChild(source);

        const filters = document.createElement("div"); filters.className = "focus-filters";
        [["all", "Все"], ["repeat", "Нужно повторить"], ["practice", "Тренируем"], ["learning", "Сейчас изучаем"], ["confident", "Уверенно"]].forEach(function(filter) {
            const button = addTextElement(filters, "button", "filter-button" + (focusStatusFilter === filter[0] ? " active-filter" : ""), filter[1]); button.type = "button"; button.addEventListener("click", function() { focusStatusFilter = filter[0]; renderFocusItemsTab(student); });
        }); content.appendChild(filters);

        const items = cloudFocusItems.filter(function(item) { return focusStatusFilter === "all" || item.status === focusStatusFilter; });
        const grid = document.createElement("div"); grid.className = "focus-items-grid";
        if (!cloudFocusItems.length) addTextElement(grid, "p", "student-empty-lesson", "В карте пока ничего нет. Добавляйте сюда темы и ошибки, к которым стоит вернуться.");
        else if (!items.length) addTextElement(grid, "p", "student-empty-lesson", "В этой категории пока ничего нет");
        items.forEach(function(item) {
            const card = document.createElement("article"); card.className = "focus-item-card";
            const top = document.createElement("div"); top.className = "focus-item-top"; addTextElement(top, "h3", "", item.title); addTextElement(top, "span", "focus-status focus-status-" + item.status, focusStatusLabels[item.status] || item.status); card.appendChild(top);
            addTextElement(card, "p", "focus-item-type", "Тип: " + (focusTypeLabels[item.type] || item.type)); addTextElement(card, "p", "focus-item-note", item.note ? "Заметка: " + item.note : "Заметка не добавлена");
            const actions = document.createElement("div"); actions.className = "student-card-actions"; const edit = addTextElement(actions, "button", "secondary-button", "Изменить"); edit.type = "button"; edit.addEventListener("click", function() { openFocusItemModal(item); }); const remove = addTextElement(actions, "button", "delete-link", "Удалить"); remove.type = "button"; remove.addEventListener("click", async function() { try { await window.lessonFlowCloud.deleteFocusItem(student.id, item.id); } catch (error) { console.error("Focus item delete error:", error); } }); card.appendChild(actions); grid.appendChild(card);
        }); content.appendChild(grid);
    });
}

function restoreDemoStudentCard() {
    Object.entries({
        "student-card-meta": demoStudentOverview.meta, "student-card-name": demoStudentOverview.name,
        "student-card-textbook": demoStudentOverview.textbook, "student-card-current-topic": demoStudentOverview.currentTopic,
        "student-card-repeat-topic": demoStudentOverview.repeatTopic, "student-card-repeat-note": demoStudentOverview.repeatNote,
        "student-card-homework-title": demoStudentOverview.homeworkTitle, "student-card-homework-description": demoStudentOverview.homeworkDescription,
        "student-card-last-lesson-date": demoStudentOverview.lessonDate, "student-card-last-lesson-topic": demoStudentOverview.lessonTopic
    }).forEach(function(entry) { document.getElementById(entry[0]).textContent = entry[1]; });
    document.getElementById("student-card-repeat-note").hidden = false;
    document.getElementById("student-card-homework-timing").hidden = true;
    ["lessons", "repeat", "homework", "progress"].forEach(function(panelName) {
        const panel = document.querySelector('[data-tab-panel="' + panelName + '"]');
        const dynamic = panel.querySelector(".firebase-tab-content");
        if (dynamic) dynamic.remove();
        Array.from(panel.children).forEach(function(child) { child.hidden = false; });
    });
}

function renderStudentCard(student) {
    const derived = selectedStudentDerivedState(student);
    const cardMain = document.querySelector("#misha-screen > main"); let headerAvatar = cardMain?.querySelector(".teacher-student-detail-avatar"); if (!headerAvatar && cardMain) { headerAvatar = document.createElement("img"); headerAvatar.className = "teacher-student-detail-avatar"; headerAvatar.alt = "Аватар ученика"; cardMain.prepend(headerAvatar); } if (headerAvatar) headerAvatar.src = stableTeacherStudentAvatar(student);
    document.getElementById("student-card-meta").textContent = [student.level, student.subject].filter(Boolean).join(" · ").toLocaleUpperCase("ru");
    document.getElementById("student-card-name").textContent = student.name;
    const studentHeading = document.getElementById("student-card-name")?.parentElement;
    let messageButton = studentHeading?.querySelector(".teacher-student-message-action");
    if (studentHeading && !messageButton) {
        messageButton = addTextElement(studentHeading, "button", "teacher-message-button teacher-student-message-action", "Сообщение ученику");
        messageButton.type = "button";
        messageButton.addEventListener("click", function() { openTeacherConversation(student); });
    }
    document.getElementById("student-card-textbook").textContent = "Учебник: " + (student.textbook || "не указан");
    document.getElementById("student-card-current-topic").textContent = derived.current.topic;
    document.getElementById("student-card-repeat-topic").textContent = derived.reviewTopics[0]?.title || "Пока ничего";
    const repeatNote = document.getElementById("student-card-repeat-note"); repeatNote.textContent = derived.reviewTopics.length > 1 ? "+ ещё " + (derived.reviewTopics.length - 1) : ""; repeatNote.hidden = derived.reviewTopics.length < 2;
    const repeatCard = document.getElementById("student-card-repeat-topic")?.closest(".dashboard-card"); if (repeatCard) { repeatCard.tabIndex = 0; repeatCard.setAttribute("role", "button"); repeatCard.onclick = function() { document.querySelector('#misha-screen .student-tab[data-tab="repeat"]')?.click(); }; repeatCard.onkeydown = function(event) { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); repeatCard.click(); } }; }

    const lesson = publishedLessons[student.name] || null;
    const result = lesson ? getLatestStudentResult(student.name) : null;
    const homework = lessonHomeworkBlocks(lesson);
    const latestHomework = homework[homework.length - 1];
    document.getElementById("student-card-homework-title").textContent = latestHomework ? (latestHomework.title || "Домашнее задание") : "Домашнее задание не задано";
    document.getElementById("student-card-homework-description").textContent = latestHomework ? (latestHomework.description || "Описание не указано") : "";
    const homeworkTimingSummary = document.getElementById("student-card-homework-timing");
    if (latestHomework) {
        const timing = homeworkTiming(lesson, latestHomework);
        const parts = [];
        if (timing.assignedAt) parts.push("Назначено: " + homeworkDateLabel(timing.assignedAt, false));
        parts.push(timing.dueAt ? "До: " + homeworkDateLabel(timing.dueAt, true) : "До следующего занятия");
        homeworkTimingSummary.textContent = parts.join(" · "); homeworkTimingSummary.hidden = false;
    } else { homeworkTimingSummary.textContent = ""; homeworkTimingSummary.hidden = true; }
    document.getElementById("student-card-last-lesson-date").textContent = lesson ? formatLessonDate(lesson.date) : "Новый урок пока не опубликован";
    document.getElementById("student-card-last-lesson-topic").textContent = lesson ? lesson.topic : "";

    renderFirebaseTab("lessons", function(content) {
        addTextElement(content, "h3", "tab-section-title", "Текущий урок");
        if (!lesson) addTextElement(content, "p", "student-empty-lesson", "Новый урок пока не опубликован");
        else {
            const row = document.createElement("article"); row.className = "detail-row";
            addTextElement(row, "time", "", formatLessonDate(lesson.date));
            addTextElement(row, "strong", "", lesson.topic);
            addTextElement(row, "span", "", "≈ " + lesson.totalDuration + " минут · выполнено " + result.completed + "/" + result.total);
            content.appendChild(row);
        }
        addTextElement(content, "h3", "history-section-title", "Прошлые уроки");
        const history = cloudLessonHistory.slice().sort(function(a, b) { return historySortTime(b) - historySortTime(a); });
        if (!history.length) addTextElement(content, "p", "firebase-history-note", "Прошлых уроков пока нет");
        if (historyDeleteMessage) { addTextElement(content, "p", "history-delete-feedback", historyDeleteMessage); historyDeleteMessage = ""; }
        history.forEach(function(historyLesson) {
            const historyResult = historyLessonResult(historyLesson);
            const card = document.createElement("article"); card.className = "history-lesson-card";
            const details = document.createElement("div");
            addTextElement(details, "time", "", formatLessonDate(historyLesson.date));
            addTextElement(details, "h3", "", historyLesson.topic || "Урок");
            addTextElement(details, "p", "", (historyLesson.totalDuration || 0) + " минут · " + historyResult.completed + " из " + historyResult.total + " выполнено");
            const reflection = reflectionSignals[normalizedReflection(historyLesson.progress?.selfAssessment)];
            addTextElement(details, "p", "", "Самооценка: " + (reflection ? reflection.student : "ученик не оценил тему"));
            card.appendChild(details);
            const actions = document.createElement("div"); actions.className = "history-lesson-actions";
            const view = addTextElement(actions, "button", "small-button", "Посмотреть"); view.type = "button"; view.addEventListener("click", function() { openHistoryLesson(historyLesson); });
            const remove = addTextElement(actions, "button", "delete-history-lesson", "Удалить"); remove.type = "button"; remove.addEventListener("click", function() { openDeleteHistoryLesson(historyLesson); });
            card.appendChild(actions);
            content.appendChild(card);
        });
    });
    renderFocusItemsTab(student);
    renderFirebaseTab("homework", function(content) {
        addTextElement(content, "h3", "tab-section-title", "Домашнее задание");
        if (!homework.length) { addTextElement(content, "p", "student-empty-lesson", "Домашнее задание пока не задано"); return; }
        const list = document.createElement("div"); list.className = "detail-list";
        homework.forEach(function(block) {
            const row = document.createElement("article"); row.className = "detail-row homework-detail-row";
            const text = document.createElement("div"); addTextElement(text, "strong", "", block.title || "Домашнее задание"); addTextElement(text, "p", "", block.description || "Описание не указано"); appendHomeworkTiming(text, lesson, block); row.appendChild(text);
            const completed = Boolean(result && result.state.completedBlocks[block.id]); addTextElement(row, "span", completed ? "topic-status status-confident" : "topic-status status-not-done", completed ? "Выполнено" : "Не выполнено"); list.appendChild(row);
        }); content.appendChild(list);
    });
    renderFirebaseTab("progress", function(content) {
        const historyResults = cloudLessonHistory.map(historyLessonResult);
        const currentResult = lesson && result ? [{ completed: result.completed, total: result.total, percent: result.percent }] : [];
        const allResults = historyResults.concat(currentResult);
        const completedTotal = allResults.reduce(function(sum, item) { return sum + item.completed; }, 0);
        const blocksTotal = allResults.reduce(function(sum, item) { return sum + item.total; }, 0);
        const lessonsWithBlocks = allResults.filter(function(item) { return item.total > 0; });
        const average = lessonsWithBlocks.length ? Math.round(lessonsWithBlocks.reduce(function(sum, item) { return sum + item.percent; }, 0) / lessonsWithBlocks.length) : 0;
        const overallPercent = blocksTotal ? Math.round(completedTotal / blocksTotal * 100) : 0;

        const stats = document.createElement("div"); stats.className = "progress-stat-grid";
        [[cloudLessonHistory.length + (lesson ? 1 : 0), "Уроков сохранено"], [completedTotal + " из " + blocksTotal, "Выполнено этапов"], [average + "%", "Среднее выполнение"], [derived.current.topic, "Текущая тема"]].forEach(function(item) {
            const stat = document.createElement("article"); stat.className = "progress-stat-card";
            addTextElement(stat, "span", "", item[1]); addTextElement(stat, "strong", "", item[0]); stats.appendChild(stat);
        }); content.appendChild(stats);

        const overall = document.createElement("section"); overall.className = "progress-analytics-card";
        addTextElement(overall, "h3", "", "Общий прогресс занятий");
        addTextElement(overall, "p", "progress-total-text", completedTotal + " из " + blocksTotal + " этапов выполнено");
        const track = document.createElement("div"); track.className = "progress-track progress-overall-track"; const fill = document.createElement("div"); fill.className = "progress-fill"; fill.style.width = overallPercent + "%"; track.appendChild(fill); overall.appendChild(track);
        addTextElement(overall, "strong", "firebase-progress-percent", overallPercent + "%");
        addTextElement(overall, "p", "progress-fact-note", "Показывает выполнение учебных этапов, а не школьную оценку."); content.appendChild(overall);

        const dynamics = document.createElement("section"); dynamics.className = "progress-analytics-card";
        addTextElement(dynamics, "h3", "", "Динамика занятий");
        const timeline = cloudLessonHistory.map(function(historyLesson) { return { lesson: historyLesson, result: historyLessonResult(historyLesson), current: false }; });
        if (lesson && result) timeline.push({ lesson: lesson, result: result, current: true });
        timeline.sort(function(a, b) { return historySortTime(a.lesson) - historySortTime(b.lesson); });
        timeline.slice(-8).forEach(function(item) {
            const row = document.createElement("div"); row.className = "progress-dynamics-row";
            addTextElement(row, "time", "", shortLessonDate(item.lesson.date));
            const topic = document.createElement("div"); topic.className = "progress-dynamics-topic"; addTextElement(topic, "span", "", item.lesson.topic || "Урок"); if (item.current) addTextElement(topic, "small", "", "текущий"); row.appendChild(topic);
            const miniTrack = document.createElement("div"); miniTrack.className = "progress-mini-track"; const miniFill = document.createElement("div"); miniFill.style.width = item.result.percent + "%"; miniTrack.appendChild(miniFill); row.appendChild(miniTrack);
            addTextElement(row, "strong", "", item.result.percent + "%"); dynamics.appendChild(row);
        });
        if (!timeline.length) addTextElement(dynamics, "p", "student-empty-lesson", "Новый урок пока не опубликован"); content.appendChild(dynamics);

        const assessments = { expert: 0, clear: 0, practice: 0, unclear: 0 };
        cloudLessonHistory.forEach(function(historyLesson) { const key = normalizedReflection(historyLesson.progress?.selfAssessment); if (key && key in assessments) assessments[key] += 1; });
        if (lesson && cloudProgress._exists) { const key = normalizedReflection(cloudProgress.selfAssessment); if (key && key in assessments) assessments[key] += 1; }
        const assessmentSection = document.createElement("section"); assessmentSection.className = "progress-analytics-card"; addTextElement(assessmentSection, "h3", "", "Как ученик ощущал темы");
        const assessmentList = document.createElement("div"); assessmentList.className = "assessment-stats";
        [["😎 Могу объяснить другому", assessments.expert], ["🙂 В целом понятно", assessments.clear], ["🤔 Нужно ещё потренироваться", assessments.practice], ["🌫 Пока туманно", assessments.unclear]].forEach(function(item) { addTextElement(assessmentList, "span", "", item[0] + " — " + item[1]); });
        assessmentSection.appendChild(assessmentList); content.appendChild(assessmentSection);

        const repeated = document.createElement("section"); repeated.className = "progress-analytics-card"; addTextElement(repeated, "h3", "", "Темы, к которым хотелось вернуться");
        const repeatedLessons = cloudLessonHistory.filter(function(historyLesson) { return Boolean(historyLesson.progress?.repeatRequest); });
        if (!repeatedLessons.length) addTextElement(repeated, "p", "student-empty-lesson", "Пока таких тем нет");
        repeatedLessons.forEach(function(historyLesson) { addTextElement(repeated, "p", "repeat-history-topic", "↻ " + (historyLesson.topic || "Урок")); }); content.appendChild(repeated);

        const focus = document.createElement("section"); focus.className = "progress-focus-card"; addTextElement(focus, "h3", "", "Сейчас в фокусе");
        addTextElement(focus, "p", "", "Текущая тема: " + derived.current.topic);
        addTextElement(focus, "p", "", derived.reviewTopics.length ? "Повторить: " + derived.reviewTopics.map(function(item) { return item.title; }).join(" · ") : "Дополнительное повторение пока не назначено");
        if (cloudProgress.repeatRequest) addTextElement(focus, "p", "today-repeat", "Ученик попросил ещё раз вернуться к текущей теме"); content.appendChild(focus);

        if (!cloudLessonHistory.length) addTextElement(content, "p", "firebase-history-note progress-empty-history", "История прогресса начнёт формироваться после нескольких уроков.");
    });
}

const programStatusLabels = { planned: "Запланирован", scheduled: "Запланирован в календаре", prepared: "Подготовлен", completed: "Проведён", skipped: "Пропущен" };
const isoWeekdayLabels = { 1: "Понедельник", 2: "Вторник", 3: "Среда", 4: "Четверг", 5: "Пятница", 6: "Суббота", 7: "Воскресенье" };
const regularScheduleCard = document.getElementById("student-regular-schedule");
const regularScheduleDays = document.getElementById("student-regular-schedule-days");
const studentScheduleModal = document.getElementById("student-schedule-modal");
const studentScheduleEditor = document.getElementById("student-schedule-days");
const studentScheduleError = document.getElementById("student-schedule-error");
const studentScheduleValidFrom = document.getElementById("student-schedule-valid-from");

function renderStudentSchedule() {
    regularScheduleCard.hidden = !isFirebaseMode() || firebaseProfile.role !== "teacher";
    if (regularScheduleCard.hidden) return;
    regularScheduleDays.replaceChildren();
    const days = Array.isArray(activeStudentSchedule?.days) ? activeStudentSchedule.days.slice().sort(function(a, b) { return a.weekday - b.weekday || a.startTime.localeCompare(b.startTime); }) : [];
    if (!days.length) { addTextElement(regularScheduleDays, "p", "", "Расписание не настроено"); return; }
    const validFrom = activeStudentSchedule.validFrom || localDateKey(new Date());
    addTextElement(regularScheduleDays, "p", "regular-schedule-validity", "с " + new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long", year: "numeric" }).format(new Date(validFrom + "T00:00:00")));
    days.forEach(function(day) { const duration = Number(day.duration || day.durationMinutes || 60); const start = day.startTime || day.time; const startMinutes = Number(start.slice(0,2)) * 60 + Number(start.slice(3)); const endMinutes = startMinutes + duration; const endTime = String(Math.floor(endMinutes / 60) % 24).padStart(2,"0") + ":" + String(endMinutes % 60).padStart(2,"0"); addTextElement(regularScheduleDays, "p", "regular-schedule-line", isoWeekdayLabels[day.weekday] + " · " + start + "–" + endTime + " · " + duration + " мин"); });
}
async function loadStudentSchedule() {
    if (!selectedStudentRecord || !isFirebaseMode() || firebaseProfile.role !== "teacher") { activeStudentSchedule = null; renderStudentSchedule(); return; }
    regularScheduleDays.replaceChildren(); addTextElement(regularScheduleDays, "p", "", "Загружаем…");
    try { activeStudentSchedule = await window.lessonFlowCloud.getStudentSchedule(selectedStudentRecord.id); renderStudentSchedule(); }
    catch (error) { console.error("Student schedule loading error:", error); regularScheduleDays.replaceChildren(); addTextElement(regularScheduleDays, "p", "", "Не удалось загрузить расписание"); }
}
function addScheduleDayRow(day) {
    const row = document.createElement("div"); row.className = "schedule-day-row";
    const weekday = document.createElement("select"); weekday.name = "weekday"; Object.entries(isoWeekdayLabels).forEach(function(entry) { weekday.add(new Option(entry[1], entry[0])); }); weekday.value = String(day?.weekday || 2);
    const start = document.createElement("input"); start.type = "time"; start.name = "startTime"; start.required = true; start.value = day?.startTime || "17:00";
    const end = document.createElement("input"); end.type = "time"; end.name = "endTime"; end.required = true; end.value = day?.endTime || "18:00";
    const remove = addTextElement(row, "button", "delete-link", "Удалить"); remove.type = "button"; remove.addEventListener("click", function() { row.remove(); });
    row.append(weekday, start, end, remove); studentScheduleEditor.appendChild(row);
}
function openStudentScheduleEditor() {
    if (!selectedStudentRecord || !isFirebaseMode()) return;
    studentScheduleEditor.replaceChildren(); studentScheduleError.textContent = "";
    studentScheduleValidFrom.value = activeStudentSchedule?.validFrom || (selectedStudentRecord.name === "Миша" ? "2026-08-25" : localDateKey(new Date()));
    const days = Array.isArray(activeStudentSchedule?.days) && activeStudentSchedule.days.length ? activeStudentSchedule.days : (selectedStudentRecord.name === "Миша" ? [{ weekday: 2, startTime: "17:00", endTime: "18:00" }, { weekday: 4, startTime: "17:00", endTime: "18:00" }] : [{ weekday: 1, startTime: "17:00", endTime: "18:00" }]);
    days.forEach(addScheduleDayRow); studentScheduleModal.hidden = false;
}
document.getElementById("edit-student-schedule").addEventListener("click", function() { if (selectedStudentRecord) openStudentModal(selectedStudentRecord); });
document.getElementById("add-student-schedule-day").addEventListener("click", function() { addScheduleDayRow({}); });
document.getElementById("cancel-student-schedule").addEventListener("click", function() { studentScheduleModal.hidden = true; });
document.getElementById("student-schedule-form").addEventListener("submit", async function(event) {
    event.preventDefault(); const form = event.currentTarget; const rows = Array.from(studentScheduleEditor.querySelectorAll(".schedule-day-row"));
    if (!rows.length) { studentScheduleError.textContent = "Добавьте хотя бы один день."; return; }
    const days = []; const keys = new Set();
    for (const row of rows) { const weekday = Number(row.querySelector('[name="weekday"]').value); const startTime = row.querySelector('[name="startTime"]').value; const endTime = row.querySelector('[name="endTime"]').value; if (!startTime || !endTime || endTime <= startTime) { studentScheduleError.textContent = "Время окончания должно быть позже времени начала."; return; } const key = weekday + "|" + startTime; if (keys.has(key)) { studentScheduleError.textContent = "Одинаковое занятие добавлено дважды."; return; } keys.add(key); const startMinutes = Number(startTime.slice(0, 2)) * 60 + Number(startTime.slice(3)); const endMinutes = Number(endTime.slice(0, 2)) * 60 + Number(endTime.slice(3)); days.push({ weekday: weekday, startTime: startTime, endTime: endTime, duration: endMinutes - startMinutes }); }
    days.sort(function(a, b) { return a.weekday - b.weekday || a.startTime.localeCompare(b.startTime); }); const submit = form.querySelector('[type="submit"]'); submit.disabled = true; submit.textContent = "Сохраняем…"; studentScheduleError.textContent = "";
    const validFrom = studentScheduleValidFrom.value; if (!validFrom) { studentScheduleError.textContent = "Укажите дату начала расписания."; submit.disabled = false; submit.textContent = "Сохранить"; return; }
    try { activeStudentSchedule = await window.lessonFlowCloud.saveStudentSchedule(selectedStudentRecord, days, validFrom); studentScheduleModal.hidden = true; renderStudentSchedule(); }
    catch (error) { console.error("Student schedule save error:", error); studentScheduleError.textContent = "Не удалось сохранить расписание: " + (error.code || error.message); }
    finally { submit.disabled = false; submit.textContent = "Сохранить"; }
});
const programContent = document.getElementById("learning-program-content");
const programImportModal = document.getElementById("program-import-modal");
const programImportJson = document.getElementById("program-import-json");
const programImportError = document.getElementById("program-import-error");
const programImportPreview = document.getElementById("program-import-preview");
const programImportConfirm = document.getElementById("program-import-confirm");
const programReplaceModal = document.getElementById("program-replace-modal");
const programReplaceConfirm = document.getElementById("program-replace-confirm");

function hasProgramValue(value) { return value !== undefined && value !== null && value !== "" && (!Array.isArray(value) || value.length > 0); }
function programText(value) {
    if (!hasProgramValue(value)) return "";
    if (typeof value === "string" || typeof value === "number") return String(value);
    return Object.entries(value).filter(function(entry) { return hasProgramValue(entry[1]); }).map(function(entry) { return entry[0] + ": " + entry[1]; }).join(" · ");
}
function appendProgramDetail(parent, title, value) {
    const text = programText(value); if (!text) return;
    const section = document.createElement("section"); section.className = "program-detail-section";
    addTextElement(section, "h4", "", title); addTextElement(section, "p", "", text); parent.appendChild(section);
}
function renderLearningProgram() {
    if (!programContent) return;
    programContent.replaceChildren();
    if (!isFirebaseMode() || firebaseProfile.role !== "teacher") {
        addTextElement(programContent, "p", "student-empty-lesson", "Программа обучения доступна преподавателю в рабочем режиме."); return;
    }
    if (!activeLearningProgram) {
        addTextElement(programContent, "p", "student-empty-lesson", "Для ученика пока не создана программа обучения.");
        const actions = document.createElement("div"); actions.className = "program-empty-actions";
        const create = addTextElement(actions, "button", "main-button", "+ Создать программу"); create.type = "button"; create.addEventListener("click", function() { openProgramImport(true); });
        const importButton = addTextElement(actions, "button", "secondary-button", "Импортировать программу"); importButton.type = "button"; importButton.addEventListener("click", function() { openProgramImport(false); });
        programContent.appendChild(actions); return;
    }
    const program = activeLearningProgram;
    const completed = program.lessons.filter(function(lesson) { return lesson.status === "completed"; }).length;
    const summary = document.createElement("article"); summary.className = "program-summary-card";
    addTextElement(summary, "h3", "", program.title || "Программа обучения");
    if (program.mainCourse) addTextElement(summary, "p", "program-course", program.mainCourse);
    const stats = document.createElement("div"); stats.className = "program-stats";
    [[program.totalLessons || program.lessons.length, "уроков"], ["L" + (program.currentLessonNumber || 1), "Текущий этап"], [completed + " / " + (program.totalLessons || program.lessons.length), "Пройдено"]].forEach(function(item) { const box = document.createElement("div"); addTextElement(box, "strong", "", item[0]); addTextElement(box, "span", "", item[1]); stats.appendChild(box); });
    summary.appendChild(stats); const edit = addTextElement(summary, "button", "secondary-button", "Редактировать программу"); edit.type = "button"; edit.addEventListener("click", function() { openProgramImport(false); }); programContent.appendChild(summary);
    const list = document.createElement("div"); list.className = "program-lessons";
    program.lessons.forEach(function(lesson) {
        const card = document.createElement("article"); card.className = "program-lesson-card";
        const header = document.createElement("div"); header.className = "program-lesson-header";
        const heading = document.createElement("div"); addTextElement(heading, "span", "program-lesson-number", "L" + lesson.lessonNumber); addTextElement(heading, "h3", "", lesson.title || "Плановый урок");
        if (lesson.scheduledDate && lesson.scheduledStartTime) addTextElement(heading, "p", "program-lesson-scheduled", new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(new Date(lesson.scheduledDate + "T00:00:00")) + " · " + lesson.scheduledStartTime);
        const gateway = lesson.gateway?.unit ? "Gateway " + lesson.gateway.unit : ""; const school = programText(lesson.schoolBridge);
        if (gateway) addTextElement(heading, "p", "", gateway); if (school) addTextElement(heading, "p", "", "School Bridge: " + school); header.appendChild(heading);
        const select = document.createElement("select"); select.className = "program-status-select"; select.setAttribute("aria-label", "Статус урока L" + lesson.lessonNumber);
        Object.entries(programStatusLabels).forEach(function(entry) { select.add(new Option(entry[1], entry[0], false, lesson.status === entry[0])); });
        select.addEventListener("change", async function() { select.disabled = true; try { await window.lessonFlowCloud.updateProgramLessonStatus(program.id, lesson.id, select.value); await loadLearningProgram(); } catch (error) { select.value = lesson.status; programImportError.textContent = "Не удалось изменить статус."; } finally { select.disabled = false; } }); header.appendChild(select); card.appendChild(header);
        const details = document.createElement("div"); details.className = "program-lesson-details"; details.hidden = true;
        appendProgramDetail(details, "Основной материал", lesson.gateway); appendProgramDetail(details, "Gateway Workbook", lesson.gatewayWorkbook); appendProgramDetail(details, "Цель урока", lesson.goal); appendProgramDetail(details, "School Bridge", lesson.schoolBridge);
        if (Array.isArray(lesson.additionalMaterials) && lesson.additionalMaterials.length) { const section = document.createElement("section"); section.className = "program-detail-section"; addTextElement(section, "h4", "", "Дополнительные материалы"); lesson.additionalMaterials.forEach(function(material) { addTextElement(section, "p", "program-material", [material.source, material.unit, material.pages && "p." + material.pages, material.exercise && "Ex." + material.exercise, material.note].filter(Boolean).join(" · ")); }); details.appendChild(section); }
        appendProgramDetail(details, "Retrieval", lesson.retrieval); appendProgramDetail(details, "Домашнее задание по плану", lesson.homework); appendProgramDetail(details, "Методический комментарий", lesson.methodicalNote);
        const more = addTextElement(card, "button", "small-button program-more", "Подробнее"); more.type = "button"; more.addEventListener("click", function() { details.hidden = !details.hidden; more.textContent = details.hidden ? "Подробнее" : "Свернуть"; }); card.appendChild(details); list.appendChild(card);
    }); programContent.appendChild(list);
}
async function loadLearningProgram() {
    if (!selectedStudentRecord || !isFirebaseMode() || firebaseProfile.role !== "teacher") { activeLearningProgram = null; renderLearningProgram(); return; }
    programContent.replaceChildren(); addTextElement(programContent, "p", "student-empty-lesson", "Загружаем программу…");
    try { activeLearningProgram = await window.lessonFlowCloud.getLearningProgram(selectedStudentRecord.id); renderLearningProgram(); }
    catch (error) { console.error("Learning program loading error:", error); programContent.replaceChildren(); addTextElement(programContent, "p", "student-empty-lesson", "Не удалось загрузить программу обучения."); }
}
function openProgramImport(starter) {
    checkedProgramImport = null; pendingArchiveProgramId = null; programImportError.textContent = ""; programImportPreview.hidden = true; programImportConfirm.hidden = true;
    programImportJson.value = starter ? JSON.stringify({ program: { title: "", subject: selectedStudentRecord?.subject || "", level: selectedStudentRecord?.level || "", mainCourse: selectedStudentRecord?.textbook || "" }, lessons: [] }, null, 2) : "";
    programImportModal.hidden = false; programImportJson.focus();
}
function validateProgramImport() {
    let value; try { value = JSON.parse(programImportJson.value); } catch (error) { throw new Error("JSON содержит синтаксическую ошибку: " + error.message); }
    if (!value || typeof value.program !== "object" || Array.isArray(value.program)) throw new Error("Добавьте объект program.");
    if (!String(value.program.title || "").trim()) throw new Error("Укажите название программы.");
    if (!Array.isArray(value.lessons) || !value.lessons.length) throw new Error("Добавьте хотя бы один урок в массив lessons.");
    const numbers = new Set(); const allowed = Object.keys(programStatusLabels);
    const lessons = value.lessons.map(function(source, index) { if (!source || typeof source !== "object" || Array.isArray(source)) throw new Error("Урок " + (index + 1) + " должен быть объектом."); const lesson = { ...source }; lesson.lessonNumber = Number(lesson.lessonNumber); if (!Number.isInteger(lesson.lessonNumber) || lesson.lessonNumber < 1) throw new Error("Некорректный lessonNumber у урока " + (index + 1) + "."); if (numbers.has(lesson.lessonNumber)) throw new Error("lessonNumber должен быть уникальным: " + lesson.lessonNumber); numbers.add(lesson.lessonNumber); lesson.status = lesson.status || "planned"; if (!allowed.includes(lesson.status)) throw new Error("Неизвестный status у L" + lesson.lessonNumber + "."); if (lesson.additionalMaterials !== undefined && !Array.isArray(lesson.additionalMaterials)) throw new Error("additionalMaterials у L" + lesson.lessonNumber + " должен быть массивом."); return lesson; }).sort(function(a, b) { return a.lessonNumber - b.lessonNumber; });
    return { program: { ...value.program }, lessons: lessons };
}
async function confirmProgramImport(archiveId) {
    if (programImportBusy || !checkedProgramImport) return;
    programImportBusy = true;
    programImportConfirm.disabled = true;
    programReplaceConfirm.disabled = true;
    const importButtonText = programImportConfirm.textContent;
    const replaceButtonText = programReplaceConfirm.textContent;
    programImportConfirm.textContent = "Импортируем программу…";
    if (archiveId) programReplaceConfirm.textContent = "Импортируем программу…";
    try { await window.lessonFlowCloud.importLearningProgram(selectedStudentRecord, checkedProgramImport, archiveId || null); programImportModal.hidden = true; programReplaceModal.hidden = true; checkedProgramImport = null; await loadLearningProgram(); }
    catch (error) { if (error.code === "active-program-exists") { pendingArchiveProgramId = error.programId || activeLearningProgram?.id; programReplaceModal.hidden = false; } else { programImportError.textContent = "Импорт не выполнен: " + (error.message || error.code) + (error.cleanupFailed ? " Не удалось полностью очистить импорт " + error.programId + ". Повторите попытку только после проверки Firestore." : " Созданная программа очищена; существующие программы не изменены."); } }
    finally { programImportBusy = false; programImportConfirm.disabled = false; programReplaceConfirm.disabled = false; programImportConfirm.textContent = importButtonText; programReplaceConfirm.textContent = replaceButtonText; }
}
document.getElementById("program-import-check").addEventListener("click", function() { try { checkedProgramImport = validateProgramImport(); programImportError.textContent = ""; const lessons = checkedProgramImport.lessons; programImportPreview.replaceChildren(); addTextElement(programImportPreview, "h3", "", checkedProgramImport.program.title); addTextElement(programImportPreview, "p", "", lessons.length + " уроков"); addTextElement(programImportPreview, "p", "", "Первый: L" + lessons[0].lessonNumber + " · " + (lessons[0].title || "Без названия")); addTextElement(programImportPreview, "p", "", "Последний: L" + lessons[lessons.length - 1].lessonNumber + " · " + (lessons[lessons.length - 1].title || "Без названия")); programImportPreview.hidden = false; programImportConfirm.hidden = false; } catch (error) { checkedProgramImport = null; programImportPreview.hidden = true; programImportConfirm.hidden = true; programImportError.textContent = error.message; } });
programImportJson.addEventListener("input", function() { checkedProgramImport = null; programImportPreview.hidden = true; programImportConfirm.hidden = true; });
programImportConfirm.addEventListener("click", function() { confirmProgramImport(null); });
document.getElementById("program-import-cancel").addEventListener("click", function() { programImportModal.hidden = true; });
document.getElementById("program-replace-cancel").addEventListener("click", function() { programReplaceModal.hidden = true; });
programReplaceConfirm.addEventListener("click", function() { confirmProgramImport(pendingArchiveProgramId); });

const vocabularyContent = document.getElementById("vocabulary-program-content");
const vocabularyImportModal = document.getElementById("vocabulary-import-modal");
const vocabularyImportJson = document.getElementById("vocabulary-import-json");
const vocabularyImportError = document.getElementById("vocabulary-import-error");
const vocabularyImportPreview = document.getElementById("vocabulary-import-preview");
const vocabularyImportConfirm = document.getElementById("vocabulary-import-confirm");
const vocabularyReplaceModal = document.getElementById("vocabulary-replace-modal");

function validateVocabularyImport() {
    let value; try { value = JSON.parse(vocabularyImportJson.value); } catch (error) { throw new Error("JSON содержит синтаксическую ошибку: " + error.message); }
    if (!value?.program || typeof value.program !== "object" || Array.isArray(value.program)) throw new Error("Добавьте объект program.");
    if (!String(value.program.title || "").trim()) throw new Error("Укажите название лексической программы.");
    ["cards", "weeks", "dailyPlan", "optionalCards"].forEach(function(key) { if (!Array.isArray(value[key])) throw new Error(key + " должен быть массивом."); });
    if (!value.cards.length) throw new Error("Добавьте хотя бы одну активную карточку.");
    if (!value.weeks.length) throw new Error("Добавьте хотя бы одну неделю.");
    if (!value.dailyPlan.length) throw new Error("Добавьте хотя бы один день плана.");
    const cardIds = new Set(); const cards = value.cards.map(function(source, index) { if (!source || typeof source !== "object" || Array.isArray(source)) throw new Error("Карточка " + (index + 1) + " должна быть объектом."); const card = { ...source, cardId: String(source.cardId || "").trim(), english: String(source.english || "").trim(), translation: String(source.translation || "").trim(), deck: "active" }; if (!/^C\d{3,}$/.test(card.cardId)) throw new Error("Некорректный cardId у карточки " + (index + 1) + ". Ожидается C001…"); if (cardIds.has(card.cardId)) throw new Error("Повторяется cardId: " + card.cardId); if (!card.english || !card.translation) throw new Error(card.cardId + ": заполните english и translation."); if (card.cardType && !["word", "chunk"].includes(card.cardType)) throw new Error(card.cardId + ": cardType должен быть word или chunk."); cardIds.add(card.cardId); return card; });
    const weekNumbers = new Set(); const weeks = value.weeks.map(function(source, index) { const week = { ...source, weekNumber: Number(source?.weekNumber) }; if (!Number.isInteger(week.weekNumber) || week.weekNumber < 1 || weekNumbers.has(week.weekNumber)) throw new Error("Некорректная или повторяющаяся неделя: " + (source?.weekNumber ?? index + 1)); weekNumbers.add(week.weekNumber); if (week.cardIds !== undefined && !Array.isArray(week.cardIds)) throw new Error("cardIds недели " + week.weekNumber + " должен быть массивом."); (week.cardIds || []).forEach(function(id) { if (!cardIds.has(id)) throw new Error("Неделя " + week.weekNumber + " ссылается на неизвестную карточку " + id); }); return week; }).sort(function(a, b) { return a.weekNumber - b.weekNumber; });
    const dayIndexes = new Set(); const dailyPlan = value.dailyPlan.map(function(source, index) { const day = { ...source, dayIndex: Number(source?.dayIndex), weekNumber: Number(source?.weekNumber), newCount: Number(source?.newCount || 0) }; if (!Number.isInteger(day.dayIndex) || day.dayIndex < 1 || dayIndexes.has(day.dayIndex)) throw new Error("Некорректный или повторяющийся dayIndex: " + (source?.dayIndex ?? index + 1)); if (!Number.isInteger(day.weekNumber) || day.weekNumber < 1) throw new Error("У дня " + day.dayIndex + " отсутствует weekNumber."); if (!Array.isArray(day.newCardIds)) throw new Error("newCardIds дня " + day.dayIndex + " должен быть массивом."); day.newCardIds.forEach(function(id) { if (!cardIds.has(id)) throw new Error("День " + day.dayIndex + " ссылается на неизвестную карточку " + id); }); if (day.newCount !== day.newCardIds.length) throw new Error("newCount дня " + day.dayIndex + " не совпадает с newCardIds."); if (!["new-review", "weekly-mix", "hardest-review", "mastery-check", "reset-review"].includes(day.sessionType)) throw new Error("Неизвестный sessionType у дня " + day.dayIndex + "."); dayIndexes.add(day.dayIndex); return day; }).sort(function(a, b) { return a.dayIndex - b.dayIndex; });
    const optionalIds = new Set(); const optionalCards = value.optionalCards.map(function(source, index) { if (!source || typeof source !== "object" || !String(source.english || "").trim() || !String(source.translation || "").trim()) throw new Error("Optional-карточка " + (index + 1) + " должна содержать english и translation."); const optional = { ...source, optionalId: source.optionalId || "O" + String(index + 1).padStart(3, "0"), deck: "optional" }; if (optionalIds.has(optional.optionalId)) throw new Error("Повторяется optionalId: " + optional.optionalId); optionalIds.add(optional.optionalId); return optional; });
    return { program: { ...value.program }, cards: cards, weeks: weeks, dailyPlan: dailyPlan, optionalCards: optionalCards };
}
function openVocabularyImport() { checkedVocabularyImport = null; vocabularyImportError.textContent = ""; vocabularyImportPreview.hidden = true; vocabularyImportConfirm.hidden = true; vocabularyImportJson.value = ""; vocabularyImportModal.hidden = false; vocabularyImportJson.focus(); }
function renderVocabularyProgram() {
    vocabularyContent.replaceChildren();
    if (!isFirebaseMode() || firebaseProfile.role !== "teacher") { addTextElement(vocabularyContent, "p", "student-empty-lesson", "Лексическая программа доступна преподавателю в рабочем режиме."); return; }
    if (!activeVocabularyProgram) { addTextElement(vocabularyContent, "h3", "tab-section-title", "Лексическая программа"); addTextElement(vocabularyContent, "p", "student-empty-lesson", "Для ученика пока не назначена лексическая программа."); const button = addTextElement(vocabularyContent, "button", "main-button vocabulary-import-open", "Импортировать словарь"); button.type = "button"; button.addEventListener("click", openVocabularyImport); return; }
    const program = activeVocabularyProgram; const assignment = program.assignment; const calculatedDay = window.getVocabularyProgramDay({ ...assignment, totalStudyDays: program.totalStudyDays }, new Date()); const shownDayIndex = calculatedDay.dayIndex || assignment.currentDayIndex || 1; const currentDay = program.dailyPlan.find(function(day) { return Number(day.dayIndex) === Number(shownDayIndex); }); const currentWeekNumber = currentDay?.weekNumber || assignment.currentWeekNumber || 1; const currentWeek = program.weeks.find(function(week) { return Number(week.weekNumber) === Number(currentWeekNumber); }); const states = (program.cardStates || []).filter(function(item) { return item.state !== "new"; }); const learning = states.filter(function(item) { return item.state === "learning"; }).length; const mastered = states.filter(function(item) { return item.state === "mastered"; }).length; const review = states.filter(function(item) { return item.state === "review"; }).length; const difficult = states.filter(function(item) { return Number(item.consecutiveIncorrect || 0) >= 2 || item.difficult === true; }).length; const todayKey = new Date().toLocaleDateString("en-CA"); const backlog = states.filter(function(item) { const due = item.nextReviewDate || (item.nextReviewAt?.toDate ? item.nextReviewAt.toDate().toLocaleDateString("en-CA") : ""); return item.state !== "mastered" && due && String(due).slice(0, 10) <= todayKey; }).length; const newCount = Math.max(0, Number(program.activeCardsCount || program.cards.length) - states.length);
    const summary = document.createElement("article"); summary.className = "program-summary-card vocabulary-summary"; addTextElement(summary, "p", "card-label", "ЛЕКСИЧЕСКАЯ ПРОГРАММА"); addTextElement(summary, "h3", "", program.title); const stats = document.createElement("div"); stats.className = "program-stats"; [[program.activeCardsCount || program.cards.length, "активных карточек"], [program.optionalCardsCount || program.optionalCards.length, "optional"], [shownDayIndex + " / " + (program.totalStudyDays || program.dailyPlan.length), "Текущий день"], [currentWeekNumber + " / " + (program.totalWeeks || program.weeks.length), "Неделя"]].forEach(function(item) { const box = document.createElement("div"); addTextElement(box, "strong", "", item[0]); addTextElement(box, "span", "", item[1]); stats.appendChild(box); }); summary.appendChild(stats);
    const startDateRow = document.createElement("div"); startDateRow.className = "vocabulary-start-date"; const startLabel = addTextElement(startDateRow, "label", "", "Дата начала программы"); const startInput = document.createElement("input"); startInput.type = "date"; startInput.value = typeof assignment.startDate === "string" ? assignment.startDate.slice(0, 10) : ""; startLabel.appendChild(startInput); const saveStart = addTextElement(startDateRow, "button", "secondary-button", "Сохранить дату"); saveStart.type = "button"; saveStart.addEventListener("click", async function() { if (!startInput.value) return; saveStart.disabled = true; try { await window.lessonFlowCloud.setVocabularyStartDate(assignment.studentUid, startInput.value); await loadVocabularyProgram(); } catch (error) { console.error("Vocabulary start date error:", error); } finally { saveStart.disabled = false; } }); summary.appendChild(startDateRow);
    if (["localhost", "127.0.0.1"].includes(window.location.hostname)) { const debugRow = document.createElement("div"); debugRow.className = "vocabulary-start-date"; const debugLabel = addTextElement(debugRow, "label", "", "Тестовый dayIndex (только localhost)"); const debugInput = document.createElement("input"); debugInput.type = "number"; debugInput.min = "1"; debugInput.max = String(program.totalStudyDays || 238); debugInput.value = assignment.debugDayIndex || ""; debugLabel.appendChild(debugInput); const saveDebug = addTextElement(debugRow, "button", "secondary-button", "Применить тестовый день"); saveDebug.type = "button"; saveDebug.addEventListener("click", async function() { await window.lessonFlowCloud.setVocabularyDebugDayIndex(assignment.studentUid, debugInput.value); await loadVocabularyProgram(); }); debugRow.appendChild(saveDebug); summary.appendChild(debugRow); }
    addTextElement(summary, "p", "vocabulary-counters", "New: " + newCount + " · Learning: " + learning + " · Review: " + review + " · Mastered: " + mastered + " · Difficult: " + difficult + " · Backlog: " + backlog); if (backlog > Number(program.dueLimitBeforePauseNew || 20)) addTextElement(summary, "p", "student-empty-lesson", "Новые слова временно приостановлены");
    if (assignment.lastSessionSummary) { const todayResult = document.createElement("div"); todayResult.className = "vocabulary-today-result"; addTextElement(todayResult, "h4", "", "Сегодня"); addTextElement(todayResult, "p", "", assignment.lastSessionSummary.total + " карточки пройдено"); addTextElement(todayResult, "p", "", "Знаю: " + (assignment.lastSessionSummary.know || 0) + " · Сомневаюсь: " + (assignment.lastSessionSummary.hard || 0) + " · Не помню: " + (assignment.lastSessionSummary.again || 0)); summary.appendChild(todayResult); } const replace = addTextElement(summary, "button", "secondary-button", "Импортировать новую программу"); replace.type = "button"; replace.addEventListener("click", openVocabularyImport); vocabularyContent.appendChild(summary);
    const today = document.createElement("article"); today.className = "program-summary-card"; addTextElement(today, "h3", "", "Сегодня по плану"); const matchingSessions = (program.sessions || []).filter(function(session) { return Number(session.dayIndex) === Number(shownDayIndex); }); const currentSession = matchingSessions.find(function(session) { return session.status === "completed"; }) || matchingSessions[0]; if (currentSession?.status === "completed") addTextElement(today, "p", "vocabulary-today-status", "✓ Сессия завершена · " + Number(currentSession.summary?.total ?? currentSession.answeredCards ?? currentSession.totalCards ?? 0) + "/" + Number(currentSession.totalCards || 0)); addTextElement(today, "p", "", currentDay ? currentDay.newCount + " новых · " + (currentDay.instruction || currentDay.sessionType) : "Для текущего дня план не найден."); if (currentDay) currentDay.newCardIds.map(function(id) { return program.cards.find(function(card) { return card.id === id || card.cardId === id; }); }).filter(Boolean).forEach(function(card) { addTextElement(today, "p", "vocabulary-card-line", card.cardId + " " + card.english + " — " + card.translation); }); vocabularyContent.appendChild(today);
    if (currentWeek) { const week = document.createElement("article"); week.className = "program-summary-card"; addTextElement(week, "h3", "", "Неделя " + currentWeek.weekNumber); addTextElement(week, "p", "", currentWeek.topic || "Тема недели"); addTextElement(week, "p", "", (currentWeek.newCardsCount ?? currentWeek.cardIds?.length ?? 0) + " новых карточек"); const list = document.createElement("div"); list.hidden = true; (currentWeek.cardIds || []).map(function(id) { return program.cards.find(function(card) { return card.id === id || card.cardId === id; }); }).filter(Boolean).forEach(function(card) { addTextElement(list, "p", "vocabulary-card-line", card.cardId + " " + card.english + " — " + card.translation); }); const toggle = addTextElement(week, "button", "secondary-button", "Посмотреть слова недели"); toggle.type = "button"; toggle.addEventListener("click", function() { list.hidden = !list.hidden; toggle.textContent = list.hidden ? "Посмотреть слова недели" : "Скрыть слова недели"; }); week.append(toggle, list); vocabularyContent.appendChild(week); }
}
async function loadVocabularyProgram() { if (!selectedStudentRecord || !isFirebaseMode() || firebaseProfile.role !== "teacher") { activeVocabularyProgram = null; renderVocabularyProgram(); return; } vocabularyContent.replaceChildren(); addTextElement(vocabularyContent, "p", "student-empty-lesson", "Загружаем лексическую программу…"); try { activeVocabularyProgram = await window.lessonFlowCloud.getVocabularyProgram(selectedStudentRecord); renderVocabularyProgram(); } catch (error) { console.error("Vocabulary program loading error:", { code: error.code || "unknown", message: error.message || String(error), error: error }); vocabularyContent.replaceChildren(); addTextElement(vocabularyContent, "p", "student-empty-lesson", "Не удалось загрузить лексическую программу."); } }
async function confirmVocabularyImport(replaceExisting) { if (vocabularyImportBusy || !checkedVocabularyImport) return; vocabularyImportBusy = true; vocabularyImportConfirm.disabled = true; document.getElementById("vocabulary-replace-confirm").disabled = true; vocabularyImportError.textContent = ""; try { await window.lessonFlowCloud.importVocabularyProgram(selectedStudentRecord, checkedVocabularyImport, replaceExisting); vocabularyImportModal.hidden = true; vocabularyReplaceModal.hidden = true; checkedVocabularyImport = null; await loadVocabularyProgram(); } catch (error) { if (error.code === "active-vocabulary-exists") vocabularyReplaceModal.hidden = false; else vocabularyImportError.textContent = "Импорт не выполнен: " + (error.message || error.code) + (error.cleanupFailed ? " Не удалось полностью очистить импорт " + error.programId + "." : ""); } finally { vocabularyImportBusy = false; vocabularyImportConfirm.disabled = false; document.getElementById("vocabulary-replace-confirm").disabled = false; } }
document.getElementById("vocabulary-import-check").addEventListener("click", function() { try { checkedVocabularyImport = validateVocabularyImport(); const data = checkedVocabularyImport; vocabularyImportError.textContent = ""; vocabularyImportPreview.replaceChildren(); addTextElement(vocabularyImportPreview, "h3", "", data.program.title); addTextElement(vocabularyImportPreview, "p", "", data.cards.length + " активных карточек"); addTextElement(vocabularyImportPreview, "p", "", data.optionalCards.length + " optional"); addTextElement(vocabularyImportPreview, "p", "", data.weeks.length + " недель · " + data.dailyPlan.length + " дней"); addTextElement(vocabularyImportPreview, "p", "", "Первое слово: " + data.cards[0].cardId + " · " + data.cards[0].english); addTextElement(vocabularyImportPreview, "p", "", "Последнее: " + data.cards[data.cards.length - 1].cardId + " · " + data.cards[data.cards.length - 1].english); addTextElement(vocabularyImportPreview, "p", "", "Первый день: " + data.dailyPlan[0].newCount + " новых"); vocabularyImportPreview.hidden = false; vocabularyImportConfirm.hidden = false; } catch (error) { checkedVocabularyImport = null; vocabularyImportPreview.hidden = true; vocabularyImportConfirm.hidden = true; vocabularyImportError.textContent = error.message; } });
vocabularyImportJson.addEventListener("input", function() { checkedVocabularyImport = null; vocabularyImportPreview.hidden = true; vocabularyImportConfirm.hidden = true; });
vocabularyImportConfirm.addEventListener("click", function() { confirmVocabularyImport(false); });
document.getElementById("vocabulary-import-cancel").addEventListener("click", function() { vocabularyImportModal.hidden = true; });
document.getElementById("vocabulary-replace-cancel").addEventListener("click", function() { vocabularyReplaceModal.hidden = true; });
document.getElementById("vocabulary-replace-confirm").addEventListener("click", function() { confirmVocabularyImport(true); });

function openStudentCard(student) {
    teacherStudentRouteActive = true;
    selectedStudentRecord = student;
    cloudProgress = { completedBlockIds: [], selfAssessment: "", repeatRequest: false, _exists: false };
    cloudLessonHistory = [];
    cloudFocusItems = [];
    focusStatusFilter = "all";
    activeLearningProgram = null;
    activeVocabularyProgram = null;
    activeStudentSchedule = null;
    window.lessonFlowCloud.watchStudent(student.authUid, student.id);
    renderStudentCard(student);
    renderTeacherStudentFeedback();
    showScreen(mishaScreen);
    verifyActiveStudentTabs(mishaScreen);
    loadStudentSchedule();
    if (document.querySelector('#misha-screen .student-tab.active-tab')?.dataset.tab === "program") loadLearningProgram();
    if (document.querySelector('#misha-screen .student-tab.active-tab')?.dataset.tab === "vocabulary") loadVocabularyProgram();
}

async function openStudentModal(student) {
    editingStudentId = student?.id || null;
    studentModalTitle.textContent = student ? "Редактировать ученика" : "Добавить ученика";
    studentForm.reset();
    studentWeeklyScheduleRows.replaceChildren(); studentWeeklyScheduleError.textContent = "";
    studentScheduleStartLabel.textContent = student ? "Изменения действуют с" : "Дата начала занятий";
    studentAccount.replaceChildren(new Option("Аккаунт будет добавлен позже", ""));
    studentAccount.disabled = Boolean(student?.authUid);
    studentAccountSelectRow.hidden = Boolean(student?.authUid);
    createStudentAccountButton.hidden = !student || Boolean(student?.authUid);
    studentAccountStatus.textContent = student?.authUid ? "Статус: Подключён ✓" : student ? "Статус: Не подключён" : "Аккаунт будет добавлен позже";
    try {
        studentAccountRecords = await window.lessonFlowCloud.getStudentAccounts();
        studentAccountRecords.forEach(function(account) { studentAccount.add(new Option(account.name + (account.email ? " · " + account.email : ""), account.authUid)); });
        if (student?.authUid) {
            const linked = studentAccountRecords.find(function(account) { return account.authUid === student.authUid; });
            studentAccountStatus.textContent = "Статус: Подключён ✓" + (linked?.email ? " · Логин: " + linked.email : "");
        }
    } catch (error) {
        console.error("Student accounts loading error:", error);
        studentsStatus.textContent = "Не удалось загрузить список аккаунтов учеников";
    }
    if (student) {
        ["name", "subject", "level", "textbook", "currentTopic", "repeatTopic", "authUid"].forEach(function(field) {
            studentForm.elements[field].value = student[field] || "";
        });
    }
    let scheduleSlots = Array.isArray(student?.weeklySchedule) ? student.weeklySchedule : [];
    let scheduleStartDate = student?.scheduleStartDate?.toDate ? localDateKey(student.scheduleStartDate.toDate()) : String(student?.scheduleStartDate || "").slice(0, 10);
    if (student && !scheduleSlots.length) {
        try {
            const legacySchedule = await window.lessonFlowCloud.getStudentSchedule(student.id);
            if (legacySchedule?.days?.length) scheduleSlots = legacySchedule.days.map(function(day) { return { id: day.id || createWeeklySlotId(), weekday: Number(day.weekday), time: day.time || day.startTime, durationMinutes: Number(day.durationMinutes || day.duration || 60) }; });
            if (!scheduleStartDate && legacySchedule?.validFrom) scheduleStartDate = legacySchedule.validFrom;
        } catch (error) { console.error("Legacy schedule loading error:", error); }
    }
    if (student && !scheduleSlots.length && student.lessonDay && student.lessonTime) {
        const legacyWeekday = ["", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"].indexOf(student.lessonDay);
        if (legacyWeekday > 0) scheduleSlots = [{ id: createWeeklySlotId(), weekday: legacyWeekday, time: student.lessonTime, durationMinutes: 60 }];
    }
    studentForm.elements.scheduleStartDate.value = scheduleStartDate || localDateKey(new Date());
    scheduleSlots.forEach(addStudentWeeklySlotRow);
    const avatarKey = student?.avatarKey || (/^Миша$/i.test(student?.name || "") ? "boy-01" : "");
    const avatarInput = studentForm.querySelector('[name="avatarKey"][value="' + avatarKey + '"]') || studentForm.querySelector('[name="avatarKey"]');
    if (avatarInput) avatarInput.checked = true;
    studentModal.hidden = false;
    studentForm.elements.name.focus();
}

createStudentAccountButton.addEventListener("click", function() {
    if (!editingStudentId || studentAccountCreating) return;
    studentAccountForm.reset(); studentAccountError.textContent = ""; studentAccountResult.hidden = true; studentAccountResult.replaceChildren();
    studentAccountForm.querySelector('[type="submit"]').hidden = false;
    document.getElementById("cancel-student-account").textContent = "Отмена";
    studentAccountModal.hidden = false; studentAccountForm.elements.email.focus();
});
document.getElementById("cancel-student-account").addEventListener("click", function() { if (!studentAccountCreating) studentAccountModal.hidden = true; });
studentAccountForm.addEventListener("submit", async function(event) {
    event.preventDefault(); if (!editingStudentId || studentAccountCreating) return;
    const submit = studentAccountForm.querySelector('[type="submit"]'); const email = studentAccountForm.elements.email.value.trim(); const password = studentAccountForm.elements.password.value;
    studentAccountCreating = true; submit.disabled = true; submit.textContent = "Создаём…"; studentAccountError.textContent = "";
    try {
        const result = await window.lessonFlowCloud.createStudentAccount(editingStudentId, email, password);
        studentAccountStatus.textContent = "Статус: Подключён ✓ · Логин: " + result.email;
        studentAccount.replaceChildren(new Option(result.email, result.authUid)); studentAccount.value = result.authUid; studentAccount.disabled = true; studentAccountSelectRow.hidden = true; createStudentAccountButton.hidden = true;
        studentAccountResult.replaceChildren(); addTextElement(studentAccountResult, "strong", "", "Аккаунт создан"); addTextElement(studentAccountResult, "p", "", "Логин: " + result.email); addTextElement(studentAccountResult, "p", "", "Временный пароль: " + password); addTextElement(studentAccountResult, "small", "", "Скопируйте данные сейчас — пароль больше не будет показан."); studentAccountResult.hidden = false;
        studentAccountForm.elements.password.value = ""; submit.hidden = true; document.getElementById("cancel-student-account").textContent = "Готово";
    } catch (error) {
        console.error("Student account creation error:", error.code || error.message);
        const messages = { "auth/email-already-in-use": "Этот email уже используется.", "auth/invalid-email": "Укажите корректный email.", "auth/weak-password": "Пароль должен содержать минимум 6 символов.", "student-account-already-linked": "К ученику уже подключён аккаунт.", "student-owner-mismatch": "Нет доступа к карточке этого ученика." };
        studentAccountError.textContent = error.rollbackFailed ? "Аккаунт создан, но привязка не завершена. Обратитесь к администратору." : (messages[error.code || error.message] || "Не удалось создать аккаунт: " + (error.code || error.message));
    } finally { studentAccountCreating = false; submit.disabled = false; submit.textContent = "Создать аккаунт"; }
});

function createWeeklySlotId() {
    return "slot-" + (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));
}

function addStudentWeeklySlotRow(slot) {
    const row = document.createElement("div"); row.className = "student-weekly-slot"; row.dataset.slotId = slot?.id || createWeeklySlotId();
    const weekday = document.createElement("select"); weekday.name = "weeklyWeekday"; weekday.setAttribute("aria-label", "День недели");
    [[1,"Понедельник"],[2,"Вторник"],[3,"Среда"],[4,"Четверг"],[5,"Пятница"],[6,"Суббота"],[7,"Воскресенье"]].forEach(function(item) { weekday.add(new Option(item[1], item[0])); }); weekday.value = String(slot?.weekday || 1);
    const time = document.createElement("input"); time.type = "time"; time.name = "weeklyTime"; time.setAttribute("aria-label", "Время"); time.value = slot?.time || "17:00";
    const duration = document.createElement("select"); duration.name = "weeklyDuration"; duration.setAttribute("aria-label", "Продолжительность"); [30,45,60,75,90,120].forEach(function(minutes) { duration.add(new Option(minutes + " минут", minutes)); }); duration.value = String(slot?.durationMinutes || 60);
    const remove = addTextElement(row, "button", "student-remove-slot", "×"); remove.type = "button"; remove.title = "Удалить занятие"; remove.setAttribute("aria-label", "Удалить занятие"); remove.addEventListener("click", function() { row.remove(); });
    row.prepend(weekday, time, duration); studentWeeklyScheduleRows.appendChild(row);
}

document.getElementById("add-student-weekly-slot").addEventListener("click", function() { addStudentWeeklySlotRow(); });

function collectStudentWeeklySchedule() {
    const slots = []; const duplicates = new Set();
    for (const row of studentWeeklyScheduleRows.querySelectorAll(".student-weekly-slot")) {
        const weekday = Number(row.querySelector('[name="weeklyWeekday"]').value); const time = row.querySelector('[name="weeklyTime"]').value; const durationMinutes = Number(row.querySelector('[name="weeklyDuration"]').value);
        if (!weekday || !time || !durationMinutes) throw new Error("Заполните день, время и продолжительность каждого занятия.");
        const key = weekday + "|" + time; if (duplicates.has(key)) throw new Error("Одинаковое занятие добавлено дважды."); duplicates.add(key);
        slots.push({ id: row.dataset.slotId || createWeeklySlotId(), weekday: weekday, time: time, durationMinutes: durationMinutes });
    }
    return slots.sort(function(a, b) { return a.weekday - b.weekday || a.time.localeCompare(b.time); });
}

function openDeleteStudent(student) {
    deletingStudent = student;
    deleteStudentMessage.textContent = "Будущие занятия " + student.name + " будут отменены. История, программа и прогресс сохранятся.";
    deleteStudentModal.hidden = false;
}

addStudentButton.addEventListener("click", function() { openStudentModal(null); });
document.getElementById("cancel-student").addEventListener("click", function() { studentModal.hidden = true; });
document.getElementById("cancel-delete-student").addEventListener("click", function() { deleteStudentModal.hidden = true; deletingStudent = null; });
studentForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    const submit = studentForm.querySelector('[type="submit"]'); submit.disabled = true;
    const data = Object.fromEntries(new FormData(studentForm).entries());
    try {
        studentWeeklyScheduleError.textContent = "";
        const scheduleStartDate = /^\d{4}-\d{2}-\d{2}$/.test(data.scheduleStartDate || "") ? new Date(data.scheduleStartDate + "T00:00:00") : null;
        if (!scheduleStartDate || Number.isNaN(scheduleStartDate.getTime()) || localDateKey(scheduleStartDate) !== data.scheduleStartDate) throw new Error("Укажите корректную дату начала занятий.");
        data.weeklySchedule = collectStudentWeeklySchedule();
        await window.lessonFlowCloud.saveStudent(editingStudentId, data);
        studentModal.hidden = true; studentsStatus.textContent = editingStudentId ? "Изменения сохранены" : "Ученик добавлен";
    } catch (error) {
        console.error("Student save error:", error); studentWeeklyScheduleError.textContent = error.message || "Не удалось сохранить расписание"; studentsStatus.textContent = "Не удалось сохранить ученика";
    } finally { submit.disabled = false; }
});
document.getElementById("confirm-delete-student").addEventListener("click", async function() {
    if (!deletingStudent) return;
    const button = this; button.disabled = true;
    try {
        const result = await window.lessonFlowCloud.archiveStudent(deletingStudent.id);
        deleteStudentModal.hidden = true; studentsStatus.textContent = "Ученик архивирован. Отменено будущих занятий: " + result.cancelledFutureEvents; deletingStudent = null;
    } catch (error) {
        console.error("Student delete error:", error); studentsStatus.textContent = "Не удалось удалить ученика";
    } finally { button.disabled = false; }
});
function closeHistoryLesson() { historyLessonModal.hidden = true; }
document.getElementById("close-history-lesson").addEventListener("click", closeHistoryLesson);
document.getElementById("close-history-lesson-icon").addEventListener("click", closeHistoryLesson);
historyLessonModal.addEventListener("click", function(event) { if (event.target === historyLessonModal) closeHistoryLesson(); });
function openFindMorePanel(focusItem) {
    findMoreFocusItem = focusItem; findMoreMessage.textContent = "";
    youtubeSearchPanel.hidden = true; youtubeSearchResults.replaceChildren(); youtubeSearchStatus.textContent = "";
    exerciseSearchPanel.hidden = true; exerciseResourceUrl.value = ""; exerciseResourceStatus.textContent = ""; exerciseResourceActions.hidden = true; checkedExerciseMaterial = null;
    document.getElementById("find-more-topic").textContent = focusItem.title; findMoreModal.hidden = false;
}
function closeFindMorePanel() { findMoreModal.hidden = true; findMoreFocusItem = null; findMoreMessage.textContent = ""; youtubeSearchPanel.hidden = true; youtubeSearchResults.replaceChildren(); exerciseSearchPanel.hidden = true; checkedExerciseMaterial = null; }
document.getElementById("close-find-more").addEventListener("click", closeFindMorePanel);
findMoreModal.addEventListener("click", function(event) { if (event.target === findMoreModal) closeFindMorePanel(); });
document.getElementById("find-more-video").addEventListener("click", function() {
    findMoreMessage.textContent = "";
    if (!isFirebaseMode()) { youtubeSearchPanel.hidden = true; findMoreMessage.textContent = "Поиск YouTube доступен в основном режиме."; return; }
    if (!window.YOUTUBE_API_KEY) { youtubeSearchPanel.hidden = true; findMoreMessage.textContent = "Поиск YouTube пока не настроен."; return; }
    youtubeSearchPanel.hidden = false;
    const subjectLanguage = normalizeMatchText(selectedStudentRecord?.subject).includes("китай") ? "Chinese" : "English";
    youtubeSearchQuery.value = [findMoreFocusItem?.title, subjectLanguage, "lesson"].filter(Boolean).join(" ");
    youtubeSearchQuery.focus();
});
document.getElementById("find-more-exercise").addEventListener("click", function() {
    findMoreMessage.textContent = ""; youtubeSearchPanel.hidden = true; exerciseSearchPanel.hidden = false;
    exerciseSearchQuery.value = findMoreFocusItem?.title || ""; exerciseSearchQuery.focus();
});

function detectExerciseService(url) {
    try {
        const host = new URL(url).hostname.toLocaleLowerCase("en").replace(/^www\./, "");
        if (host === "wordwall.net" || host.endsWith(".wordwall.net")) return "Wordwall";
        if (host === "learningapps.org" || host.endsWith(".learningapps.org")) return "LearningApps";
        return "Другое";
    } catch (error) { return ""; }
}

function exerciseMaterialFromUrl(url) {
    const service = detectExerciseService(url);
    return {
        title: (findMoreFocusItem?.title || "Упражнение") + " — " + service,
        type: "online-game",
        subject: selectedStudentRecord.subject,
        level: selectedStudentRecord.level,
        topic: findMoreFocusItem.title,
        tags: [findMoreFocusItem.title, selectedStudentDerivedState(selectedStudentRecord).current.topic].filter(Boolean).map(normalizeMatchText),
        description: "Интерактивное упражнение по теме «" + findMoreFocusItem.title + "»",
        service: service,
        url: url,
        link: url
    };
}

async function copyExerciseQuery() {
    const text = exerciseSearchQuery.value.trim();
    try { await navigator.clipboard.writeText(text); document.getElementById("exercise-copy-status").textContent = "Запрос скопирован"; }
    catch (error) { console.error("Clipboard error:", error); document.getElementById("exercise-copy-status").textContent = "Не удалось скопировать. Выделите текст вручную."; exerciseSearchQuery.select(); }
}
document.getElementById("copy-exercise-query").addEventListener("click", copyExerciseQuery);
document.querySelectorAll(".copy-exercise-query").forEach(function(button) { button.addEventListener("click", copyExerciseQuery); });

document.getElementById("check-exercise-resource").addEventListener("click", function() {
    const url = exerciseResourceUrl.value.trim();
    let parsed;
    try { parsed = new URL(url); if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("protocol"); }
    catch (error) { exerciseResourceStatus.textContent = "Введите корректную ссылку на упражнение."; exerciseResourceActions.hidden = true; return; }
    checkedExerciseMaterial = exerciseMaterialFromUrl(parsed.href);
    const duplicate = cloudMaterials.find(function(material) { return normalizeMatchText(material.url || material.link) === normalizeMatchText(parsed.href); });
    exerciseResourceActions.hidden = false;
    document.getElementById("save-exercise-resource").hidden = Boolean(duplicate);
    const addExisting = document.getElementById("add-existing-exercise"); addExisting.hidden = !duplicate;
    if (duplicate) { checkedExerciseMaterial = { ...duplicate, link: duplicate.url || duplicate.link }; exerciseResourceStatus.textContent = "Этот ресурс уже есть в библиотеке."; }
    else exerciseResourceStatus.textContent = "Сервис определён: " + checkedExerciseMaterial.service + ". Если встроенный просмотр недоступен, откройте ресурс в новой вкладке.";
    openPreview({ title: checkedExerciseMaterial.title, type: "Онлайн-игра", service: checkedExerciseMaterial.service, link: parsed.href });
});

document.getElementById("save-exercise-resource").addEventListener("click", function() {
    if (!checkedExerciseMaterial) return;
    closePreview(); showScreen(libraryScreen); openMaterialModal(null, checkedExerciseMaterial);
});

document.getElementById("add-existing-exercise").addEventListener("click", function() {
    if (!checkedExerciseMaterial) return; addMaterialToPlan(checkedExerciseMaterial); this.disabled = true; this.textContent = "✓ В уроке";
});

function youtubeErrorMessage(response, payload) {
    const reason = payload?.error?.errors?.[0]?.reason || "";
    const message = String(payload?.error?.message || "").toLocaleLowerCase("en");
    if (response.status === 400) return "Не удалось выполнить поиск. Проверьте запрос.";
    if (response.status === 403 && (reason === "quotaExceeded" || reason === "dailyLimitExceeded")) return "Лимит поиска YouTube на сегодня исчерпан.";
    if (response.status === 403 && (reason.includes("key") || message.includes("referer") || message.includes("restriction") || message.includes("api key"))) return "YouTube API не разрешил запрос с этого сайта.";
    if (response.status === 403) return "YouTube API не разрешил запрос с этого сайта.";
    return "Не удалось выполнить поиск YouTube.";
}

function youtubeMaterialFromItem(item) {
    const videoId = item.id.videoId;
    return {
        title: item.snippet.title,
        type: "video",
        subject: selectedStudentRecord.subject,
        level: selectedStudentRecord.level,
        topic: findMoreFocusItem.title,
        tags: [findMoreFocusItem.title, selectedStudentDerivedState(selectedStudentRecord).current.topic].filter(Boolean).map(normalizeMatchText),
        description: item.snippet.description || "",
        service: "YouTube",
        url: "https://www.youtube.com/watch?v=" + videoId,
        link: "https://www.youtube.com/watch?v=" + videoId
    };
}

function renderYoutubeResults(items) {
    youtubeSearchResults.replaceChildren();
    if (!items.length) { youtubeSearchStatus.textContent = "По этому запросу видео не найдено. Попробуйте изменить поисковую фразу."; return; }
    youtubeSearchStatus.textContent = "Найдено видео: " + items.length;
    items.forEach(function(item) {
        if (!item.id?.videoId || !item.snippet) return;
        const material = youtubeMaterialFromItem(item);
        const card = document.createElement("article"); card.className = "youtube-result-card";
        const thumbnail = document.createElement("img"); thumbnail.src = item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url || ""; thumbnail.alt = ""; thumbnail.loading = "lazy"; card.appendChild(thumbnail);
        const body = document.createElement("div"); body.className = "youtube-result-body"; addTextElement(body, "h3", "", item.snippet.title); addTextElement(body, "p", "youtube-channel", item.snippet.channelTitle); addTextElement(body, "p", "youtube-description", item.snippet.description || "Описание не указано");
        const feedback = addTextElement(body, "p", "youtube-save-feedback", "");
        const actions = document.createElement("div"); actions.className = "youtube-result-actions";
        const preview = addTextElement(actions, "button", "secondary-button", "▶ Предпросмотр"); preview.type = "button"; preview.addEventListener("click", function() { openPreview({ title: material.title, type: "Видео", service: "YouTube", channel: item.snippet.channelTitle, link: material.url, youtubeMaterial: material }); });
        const open = addTextElement(actions, "a", "secondary-button link-button", "↗ Открыть YouTube"); open.href = material.url; open.target = "_blank"; open.rel = "noopener noreferrer";
        const save = addTextElement(actions, "button", "small-button", "+ В библиотеку"); save.type = "button";
        const existing = cloudMaterials.some(function(saved) { return normalizeMatchText(saved.url || saved.link) === normalizeMatchText(material.url); });
        if (existing) { save.disabled = true; save.textContent = "✓ В библиотеке"; feedback.textContent = "Это видео уже есть в библиотеке"; }
        save.addEventListener("click", async function() {
            const duplicate = cloudMaterials.some(function(saved) { return normalizeMatchText(saved.url || saved.link) === normalizeMatchText(material.url); });
            if (duplicate) { save.disabled = true; save.textContent = "✓ В библиотеке"; feedback.textContent = "Это видео уже есть в библиотеке"; return; }
            save.disabled = true;
            try {
                const id = await window.lessonFlowCloud.saveMaterial(null, material); material.id = id;
                cloudMaterials.push({ ...material }); materials = cloudMaterials; renderMaterials(); renderRecommendedMaterials();
                save.textContent = "✓ В библиотеке"; feedback.textContent = "Видео сохранено в библиотеку";
                const followup = document.createElement("div"); followup.className = "youtube-followup-actions";
                const lesson = addTextElement(followup, "button", "main-button", "+ Добавить в текущий урок"); lesson.type = "button"; lesson.addEventListener("click", function() { addMaterialToPlan(material); lesson.disabled = true; lesson.textContent = "✓ В уроке"; });
                const keep = addTextElement(followup, "button", "secondary-button", "Оставить в библиотеке"); keep.type = "button"; keep.addEventListener("click", function() { followup.remove(); }); body.appendChild(followup);
            } catch (error) { console.error("YouTube material save error:", error); feedback.textContent = "Не удалось сохранить видео в библиотеку"; save.disabled = false; }
        });
        body.appendChild(actions); card.appendChild(body); youtubeSearchResults.appendChild(card);
    });
}

youtubeSearchForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    if (!isFirebaseMode()) { youtubeSearchStatus.textContent = "Поиск YouTube доступен в основном режиме."; return; }
    if (!window.YOUTUBE_API_KEY) { youtubeSearchStatus.textContent = "Поиск YouTube пока не настроен."; return; }
    const search = youtubeSearchQuery.value.trim(); if (!search) return;
    youtubeSearchButton.disabled = true; youtubeSearchStatus.textContent = "Ищем подходящие видео…"; youtubeSearchResults.replaceChildren();
    const params = new URLSearchParams({ part: "snippet", type: "video", maxResults: "6", q: search, videoEmbeddable: "true" });
    const subject = normalizeMatchText(selectedStudentRecord?.subject); if (subject.includes("англий")) params.set("relevanceLanguage", "en"); if (subject.includes("китай")) params.set("relevanceLanguage", "zh");
    try {
        const response = await fetch("https://www.googleapis.com/youtube/v3/search?" + params.toString(), { headers: { "X-Goog-Api-Key": window.YOUTUBE_API_KEY } });
        const payload = await response.json();
        if (!response.ok) { console.error("YouTube search error:", { status: response.status, error: payload?.error }); youtubeSearchStatus.textContent = youtubeErrorMessage(response, payload); return; }
        renderYoutubeResults(Array.isArray(payload.items) ? payload.items.slice(0, 6) : []);
    } catch (error) { console.error("YouTube network error:", error); youtubeSearchStatus.textContent = "Не удалось связаться с YouTube. Проверьте интернет."; }
    finally { youtubeSearchButton.disabled = false; }
});
document.getElementById("add-found-resource").addEventListener("click", function() {
    if (!findMoreFocusItem || !selectedStudentRecord) return;
    const focusTitle = findMoreFocusItem.title; closeFindMorePanel(); showScreen(libraryScreen);
    openMaterialModal(null, { subject: selectedStudentRecord.subject, level: selectedStudentRecord.level, topic: focusTitle, tags: [focusTitle, selectedStudentDerivedState(selectedStudentRecord).current.topic].filter(Boolean) });
});
document.getElementById("cancel-focus-item").addEventListener("click", function() { focusItemModal.hidden = true; });
focusItemModal.addEventListener("click", function(event) { if (event.target === focusItemModal) focusItemModal.hidden = true; });
focusItemForm.addEventListener("submit", async function(event) {
    event.preventDefault(); if (!selectedStudentRecord) return;
    const submit = focusItemForm.querySelector('[type="submit"]'); submit.disabled = true; focusItemError.textContent = "";
    const data = Object.fromEntries(new FormData(focusItemForm).entries());
    const duplicate = cloudFocusItems.some(function(item) { return item.id !== editingFocusItemId && item.title.trim().toLocaleLowerCase("ru") === data.title.trim().toLocaleLowerCase("ru"); });
    if (duplicate) { focusItemError.textContent = "Запись с таким названием уже есть"; submit.disabled = false; return; }
    try { await window.lessonFlowCloud.saveFocusItem(selectedStudentRecord.id, editingFocusItemId, data); focusItemModal.hidden = true; }
    catch (error) { console.error("Focus item save error:", error); focusItemError.textContent = "Не удалось сохранить запись"; }
    finally { submit.disabled = false; }
});


teacherLogin.addEventListener("click", function() {
    demoMode = true;
    materials = demoMaterials;
    renderMaterials();
    window.lessonFlowDemoMode = true;
    window.dispatchEvent(new CustomEvent("lessonflow:demo-start"));
    renderTeacherStudentFeedback();
    renderCloudStudents();
    renderCloudToday();
    showScreen(teacherScreen);

});


studentLogin.addEventListener("click", function() {
    teacherStudentRouteActive = false;
    selectedStudentRecord = null;
    demoMode = true;
    window.lessonFlowDemoMode = true;
    window.dispatchEvent(new CustomEvent("lessonflow:demo-start"));
    document.getElementById("student-greeting").textContent = "Привет, Миша!";
    teacherStudentPreview = false;
    showStudentSection("home");
    showScreen(studentScreen);

});
studentsNav.addEventListener("click", function() {
    renderCloudStudents();
    showScreen(studentsScreen);

});

document.getElementById("today-nav").addEventListener("click", function() { renderCloudToday(); showScreen(teacherScreen); });
document.getElementById("calendar-nav").addEventListener("click", function() { renderCalendar(); showScreen(calendarScreen); });
document.getElementById("lesson-prep-nav").addEventListener("click", function() { renderCloudStudents(); showScreen(studentsScreen); });
document.getElementById("calendar-today-nav").addEventListener("click", function() { renderCloudToday(); showScreen(teacherScreen); });
document.getElementById("calendar-students-nav").addEventListener("click", function() { renderCloudStudents(); showScreen(studentsScreen); });
document.getElementById("calendar-library-nav").addEventListener("click", function() { materials = isFirebaseMode() ? cloudMaterials : demoMaterials; renderMaterials(); showScreen(libraryScreen); });
document.getElementById("calendar-prep-nav").addEventListener("click", function() { renderCloudStudents(); showScreen(studentsScreen); });

libraryNav.addEventListener("click", function() {
    materials = isFirebaseMode() ? cloudMaterials : demoMaterials;
    renderMaterials();
    showScreen(libraryScreen);
    materialSearch.focus();
});

backFromLibrary.addEventListener("click", function() {
    showScreen(teacherScreen);
});

document.getElementById("back-from-calendar").addEventListener("click", function() { showScreen(teacherScreen); });


backFromStudents.addEventListener("click", function() {

    showScreen(teacherScreen);

});
openMisha.addEventListener("click", function() {
    teacherStudentRouteActive = true;
    selectedStudentRecord = null;
    restoreDemoStudentCard();
    renderTeacherStudentFeedback();
    showScreen(mishaScreen);
    verifyActiveStudentTabs(mishaScreen);

});


backFromMisha.addEventListener("click", function() {

    teacherStudentRouteActive = false;

    showScreen(studentsScreen);

});


prepareMishaLesson.addEventListener("click", async function() {
    const student = selectedStudentRecord;
    preparingPlanLessonContext = null;
    if (student && isFirebaseMode()) {
        try { const program = await window.lessonFlowCloud.getLearningProgram(student.id); const lesson = resolveProgramCurrentLesson(program); const linkedEvent = lesson?.scheduledEventId ? cloudScheduleEvents.find(function(item) { return item.id === lesson.scheduledEventId; }) : null; if (lesson) preparingPlanLessonContext = { programId: program.id, id: lesson.id, lessonNumber: lesson.lessonNumber, title: lessonFocusTitle(lesson), date: linkedEvent?.date || lesson.scheduledDate, startTime: linkedEvent?.startTime || lesson.scheduledStartTime }; }
        catch (error) { console.error("Current program lesson loading error:", error); }
    }
    openLessonFor(student || "Миша");

});
prepareButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const studentName = button.dataset.student;

        openLessonFor(studentName);

    });

});


backToTeacher.addEventListener("click", function() {
    showScreen(teacherReturnScreen || teacherScreen);
    teacherReturnScreen = teacherScreen;

});


logoutButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (
            button.id !== "back-to-teacher" &&
            button.id !== "back-from-students" &&
            button.id !== "back-from-misha" &&
            button.id !== "back-from-student-lesson"
            && button.id !== "back-from-calendar"
        ) {
            demoMode = false;
            window.lessonFlowDemoMode = false;
            window.dispatchEvent(new CustomEvent("lessonflow:demo-end"));
            showScreen(loginScreen);
        }

    });

});

studentTabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
        studentTabs.forEach(function(item) {
            item.classList.remove("active-tab");
        });

        studentTabPanels.forEach(function(panel) {
            const isSelected = panel.dataset.tabPanel === tab.dataset.tab;
            panel.hidden = !isSelected;
            panel.classList.toggle("active-panel", isSelected);
        });

        tab.classList.add("active-tab");
        const tabLoaders = {
            program: loadLearningProgram,
            vocabulary: loadVocabularyProgram
        };
        if (tabLoaders[tab.dataset.tab]) tabLoaders[tab.dataset.tab]();
    });
});

function addTextElement(parent, tagName, className, content) {
    const element = document.createElement(tagName);
    element.className = className;
    element.textContent = content;
    parent.appendChild(element);
    return element;
}

function isImageWorksheet(material) { return material?.format === "images" && Array.isArray(material.pages) && material.pages.length > 0; }
function worksheetMaterialId(material) { return material?.materialId || material?.id || ""; }
async function loadWorksheetThumbnail(material, image, fallback) {
    const materialId = worksheetMaterialId(material); if (!materialId || !window.lessonFlowCloud?.loadWorksheetPage) return;
    const cacheKey = String(firebaseProfile?.uid || "anonymous") + ":" + materialId;
    try { let url = worksheetThumbnailUrls.get(cacheKey); if (!url) { const blob = await window.lessonFlowCloud.loadWorksheetPage(materialId, 0); url = URL.createObjectURL(blob); worksheetThumbnailUrls.set(cacheKey, url); } if (!image.isConnected) return; image.src = url; image.hidden = false; if (fallback) fallback.hidden = true; }
    catch (error) { if (fallback) { fallback.hidden = false; fallback.textContent = "Не удалось загрузить обложку"; } }
}
function closeWorksheetViewer() { if (worksheetViewerObjectUrl) URL.revokeObjectURL(worksheetViewerObjectUrl); worksheetViewerObjectUrl = ""; worksheetViewerMaterial = null; document.getElementById("worksheet-viewer-modal").hidden = true; document.body.classList.remove("modal-scroll-lock"); }
async function loadWorksheetViewerPage() {
    if (!worksheetViewerMaterial) return; const image = document.getElementById("worksheet-viewer-image"); const loading = document.getElementById("worksheet-viewer-loading"); const error = document.getElementById("worksheet-viewer-error"); const count = Number(worksheetViewerMaterial.pageCount || worksheetViewerMaterial.pages?.length || 0); loading.hidden = false; error.hidden = true; image.hidden = true; document.getElementById("worksheet-page-counter").textContent = worksheetViewerPageIndex + 1 + " / " + count; document.getElementById("worksheet-page-previous").disabled = worksheetViewerPageIndex === 0; document.getElementById("worksheet-page-next").disabled = worksheetViewerPageIndex >= count - 1;
    try { const blob = await window.lessonFlowCloud.loadWorksheetPage(worksheetMaterialId(worksheetViewerMaterial), worksheetViewerPageIndex); if (worksheetViewerObjectUrl) URL.revokeObjectURL(worksheetViewerObjectUrl); worksheetViewerObjectUrl = URL.createObjectURL(blob); image.src = worksheetViewerObjectUrl; image.style.transform = "scale(" + worksheetViewerZoom + ")"; image.hidden = false; loading.hidden = true; }
    catch (loadError) { console.error("Worksheet page load error:", loadError); loading.hidden = true; error.hidden = false; }
}
function openWorksheetViewer(material) { if (!isImageWorksheet(material)) return; worksheetViewerMaterial = material; worksheetViewerPageIndex = 0; worksheetViewerZoom = 1; document.getElementById("worksheet-viewer-title").textContent = material.title || "Рабочий лист"; document.getElementById("worksheet-viewer-meta").textContent = Number(material.pageCount || material.pages.length) + " стр."; document.getElementById("worksheet-viewer-modal").hidden = false; document.body.classList.add("modal-scroll-lock"); loadWorksheetViewerPage(); }
function clearWorksheetUploadPreviews() { worksheetUploadFiles.forEach(function(item) { URL.revokeObjectURL(item.previewUrl); }); worksheetUploadFiles = []; document.getElementById("worksheet-page-previews").replaceChildren(); }
function renderWorksheetUploadPreviews() { const container = document.getElementById("worksheet-page-previews"); container.replaceChildren(); worksheetUploadFiles.forEach(function(item, index) { const card = document.createElement("article"); card.className = "worksheet-upload-page"; const image = document.createElement("img"); image.src = item.previewUrl; image.alt = "Страница " + (index + 1); card.appendChild(image); addTextElement(card, "strong", "", "Страница " + (index + 1)); const actions = document.createElement("div"); actions.className = "worksheet-upload-page-actions"; const up = addTextElement(actions, "button", "secondary-button", "↑"); up.type = "button"; up.disabled = index === 0; up.title = "Переместить выше"; up.addEventListener("click", function() { worksheetUploadFiles.splice(index - 1, 0, worksheetUploadFiles.splice(index, 1)[0]); renderWorksheetUploadPreviews(); }); const down = addTextElement(actions, "button", "secondary-button", "↓"); down.type = "button"; down.disabled = index === worksheetUploadFiles.length - 1; down.title = "Переместить ниже"; down.addEventListener("click", function() { worksheetUploadFiles.splice(index + 1, 0, worksheetUploadFiles.splice(index, 1)[0]); renderWorksheetUploadPreviews(); }); const remove = addTextElement(actions, "button", "delete-link", "Удалить"); remove.type = "button"; remove.addEventListener("click", function() { URL.revokeObjectURL(item.previewUrl); worksheetUploadFiles.splice(index, 1); renderWorksheetUploadPreviews(); }); card.appendChild(actions); container.appendChild(card); }); }
function addWorksheetFiles(fileList) { const status = document.getElementById("worksheet-upload-status"); const allowed = new Set(["image/jpeg", "image/png", "image/webp"]); const files = Array.from(fileList || []); if (worksheetUploadFiles.length + files.length > 10) { status.textContent = "В одном рабочем листе может быть не больше 10 страниц."; return; } const invalid = files.find(function(file) { return !allowed.has(file.type) || file.size > 10 * 1024 * 1024; }); if (invalid) { status.textContent = allowed.has(invalid.type) ? "Каждое изображение должно быть не больше 10 МБ." : "Разрешены только JPG, PNG и WEBP."; return; } status.textContent = ""; worksheetUploadFiles.push(...files.map(function(file) { return { file: file, previewUrl: URL.createObjectURL(file) }; })); renderWorksheetUploadPreviews(); }
function openWorksheetUpload() { if (!isFirebaseMode() || firebaseProfile?.role !== "teacher") { libraryResultCount.textContent = "Загрузка рабочих листов доступна после входа преподавателя."; return; } document.getElementById("worksheet-upload-form").reset(); clearWorksheetUploadPreviews(); document.getElementById("worksheet-upload-status").textContent = ""; document.getElementById("worksheet-upload-modal").hidden = false; document.querySelector('#worksheet-upload-form [name="title"]').focus(); }
function closeWorksheetUpload() { document.getElementById("worksheet-upload-modal").hidden = true; clearWorksheetUploadPreviews(); }

function renderMaterials() {
    const searchValue = materialSearch.value.trim().toLocaleLowerCase("ru");
    const levelValue = levelFilter.value;
    const subjectValue = subjectFilter.value;
    const sourceMode = activeMaterialType === "all" || activeMaterialType === "Учебник";
    const normalizedSearch = normalizeMatchText(searchValue);
    const filteredSources = sourceMode && isFirebaseMode() ? teacherSources.filter(function(source) {
        const haystack = [source.title, source.key, source.notes, source.provider].map(normalizeMatchText).join(" ");
        const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch) || (programLibrarySearchTerms.length && programLibrarySearchTerms.some(function(term) { return term && haystack.includes(term); }));
        const matchesLevel = levelValue === "all" || !source.level || source.level === levelValue;
        const matchesSubject = subjectValue === "all" || !source.subject || source.subject === subjectValue;
        return matchesSearch && matchesLevel && matchesSubject;
    }).sort(function(a, b) { return a.title.localeCompare(b.title, "ru"); }) : [];
    const filteredMaterials = materials.filter(function(material) {
        const programHaystack = [material.title, material.topic, material.description, ...(material.tags || [])].map(normalizeMatchText).join(" ");
        const matchesProgramSource = programLibrarySearchTerms.length && programLibrarySearchTerms.some(function(term) { return term && programHaystack.includes(term); });
        const matchesSearch = matchesProgramSource || !searchValue ||
            material.title.toLocaleLowerCase("ru").includes(searchValue) ||
            material.topic.toLocaleLowerCase("ru").includes(searchValue) ||
            String(material.description || "").toLocaleLowerCase("ru").includes(searchValue) ||
            (material.tags || []).some(function(tag) { return tag.toLocaleLowerCase("ru").includes(searchValue); });
        const canonicalType = getMaterialTypeTheme(material.type).label;
        const matchesType = activeMaterialType !== "Учебник" && (activeMaterialType === "all" || canonicalType === activeMaterialType);
        const matchesLevel = levelValue === "all" || material.level === levelValue;
        const matchesSubject = subjectValue === "all" || material.subject === subjectValue;
        return matchesSearch && matchesType && matchesLevel && matchesSubject;
    });

    materialsGrid.replaceChildren();

    filteredSources.forEach(function(source) {
        const card = document.createElement("article"); card.className = "material-card source-library-card"; applyMaterialTypeTheme(card, "Учебник"); addMaterialTypeBadge(card, "Учебник"); addTextElement(card, "h3", "", source.title); const provider = { "google-drive": "Google Drive", "yandex-disk": "Яндекс Диск", web: "Веб-ссылка", other: "Другое" }[source.provider] || "Источник"; addTextElement(card, "p", "material-meta", "Учебник · " + provider); if (source.notes) addTextElement(card, "p", "material-description", source.notes);
        const actions = document.createElement("div"); actions.className = "material-actions"; const open = addTextElement(actions, "button", "main-button", "Открыть"); open.type = "button"; open.disabled = !source.url; open.addEventListener("click", function() { if (source.url) window.open(source.url, "_blank", "noopener,noreferrer"); }); const edit = addTextElement(actions, "button", "secondary-button", "Изменить"); edit.type = "button"; edit.addEventListener("click", function() { openSourceLinkModal({ key: source.key, title: source.title, type: source.type || "book" }, source); }); const unlink = addTextElement(actions, "button", "delete-link", "Удалить привязку"); unlink.type = "button"; unlink.addEventListener("click", function() { openSourceUnlinkModal(source); }); card.appendChild(actions); materialsGrid.appendChild(card);
    });

    filteredMaterials.sort(function(a, b) { return a.title.localeCompare(b.title, "ru"); }).forEach(function(material) {
        const card = document.createElement("article");
        card.className = "material-card" + (isImageWorksheet(material) ? " is-image-worksheet" : "");
        applyMaterialTypeTheme(card, material.type);
        const materialAlreadyAdded = Boolean(selectedLessonStudent && getCurrentPlan().some(function(block) { return block.sourceTitle === material.title; }));
        if (materialAlreadyAdded) card.classList.add("is-selected");
        if (isImageWorksheet(material)) { const cover = document.createElement("div"); cover.className = "worksheet-library-cover"; const image = document.createElement("img"); image.alt = "Первая страница " + material.title; image.hidden = true; const fallback = addTextElement(cover, "span", "", "Загружаем обложку…"); cover.appendChild(image); addTextElement(cover, "b", "", Number(material.pageCount || material.pages.length) + " стр."); card.appendChild(cover); loadWorksheetThumbnail(material, image, fallback); }
        addMaterialTypeBadge(card, material.type);
        addTextElement(card, "h3", "", material.title);
        addTextElement(card, "p", "material-meta", "Уровень: " + material.level);
        if (material.subject) addTextElement(card, "p", "material-meta", "Предмет: " + material.subject);
        addTextElement(card, "p", "material-meta", "Тема: " + material.topic);
        if (isImageWorksheet(material)) addTextElement(card, "p", "material-meta", Number(material.pageCount || material.pages.length) + " " + (Number(material.pageCount || material.pages.length) === 1 ? "страница" : "страниц"));

        if (material.service) {
            addTextElement(card, "p", "material-meta material-service", "Сервис: " + material.service);
        }

        addTextElement(card, "p", "material-description", material.description);
        if (materialAlreadyAdded) addTextElement(card, "span", "material-selection-state", "✓ Добавлено в урок");

        const actions = document.createElement("div");
        actions.className = "material-actions";
        const openButton = addTextElement(actions, "button", "secondary-button", "Открыть");
        openButton.type = "button";
        openButton.addEventListener("click", function() {
            if (isImageWorksheet(material)) {
                openWorksheetViewer(material);
            } else if (material.link) {
                window.open(material.link, "_blank", "noopener,noreferrer");
            } else {
                alert("Ссылка для этого тестового материала пока не добавлена.");
            }
        });

        if (isPreviewType(material.type) && !isImageWorksheet(material)) {
            const previewButton = addTextElement(actions, "button", "secondary-button", "Предпросмотр");
            previewButton.type = "button";
            previewButton.disabled = !material.link;
            previewButton.title = material.link ? "Открыть предпросмотр" : "Ссылка пока не добавлена";
            previewButton.addEventListener("click", function() {
                const wordwall = normalizeMatchText(material.service) === "wordwall";
                openPreview({ ...material, link: wordwall ? material.embedUrl || "" : material.link, fallbackLink: wordwall ? material.url || material.link : "" });
            });
        }

        const addToLessonButton = addTextElement(actions, "button", "small-button", "+ В урок");
        addToLessonButton.type = "button";
        addToLessonButton.disabled = materialAlreadyAdded;
        if (materialAlreadyAdded) addToLessonButton.textContent = "✓ В уроке";
        addToLessonButton.addEventListener("click", function() {
            if (selectedLessonStudent) {
                addMaterialToPlan(material);
                openLessonFor(selectedLessonStudent);
            } else {
                pendingLibraryMaterial = material;
                studentChoiceModal.hidden = false;
            }
        });

        if (isFirebaseMode() && firebaseProfile.role === "teacher") {
            const edit = addTextElement(actions, "button", "secondary-button", "Редактировать"); edit.type = "button"; edit.addEventListener("click", function() { openMaterialModal(material); });
            const remove = addTextElement(actions, "button", "delete-link", "Удалить"); remove.type = "button"; remove.addEventListener("click", function() { deletingMaterialId = material.id; deleteMaterialModal.hidden = false; });
        }

        card.appendChild(actions);
        materialsGrid.appendChild(card);
    });

    const totalFound = filteredSources.length + filteredMaterials.length;
    libraryResultCount.textContent = "Найдено материалов: " + totalFound;
    libraryEmpty.textContent = isFirebaseMode() && !materials.length && !teacherSources.length ? "В библиотеке пока нет материалов" : "По вашему запросу материалы не найдены.";
    materialsGrid.querySelectorAll(".material-card h3").forEach(function(title) { title.title = title.textContent.trim(); });
    libraryEmpty.hidden = totalFound !== 0;
}

materialSearch.addEventListener("input", function() { programLibrarySearchTerms = []; renderMaterials(); });
levelFilter.addEventListener("change", renderMaterials);
subjectFilter.addEventListener("change", renderMaterials);

typeFilterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        activeMaterialType = button.dataset.type;
        typeFilterButtons.forEach(function(item) {
            item.classList.toggle("active-filter", item === button);
        });
        renderMaterials();
    });
});

document.getElementById("upload-worksheet-button").addEventListener("click", openWorksheetUpload);
document.getElementById("choose-worksheet-files").addEventListener("click", function() { document.getElementById("worksheet-files").click(); });
document.getElementById("worksheet-files").addEventListener("change", function(event) { addWorksheetFiles(event.target.files); event.target.value = ""; });
document.getElementById("cancel-worksheet-upload").addEventListener("click", closeWorksheetUpload);
document.getElementById("worksheet-upload-modal").addEventListener("click", function(event) { if (event.target.id === "worksheet-upload-modal") closeWorksheetUpload(); });
document.getElementById("worksheet-upload-form").addEventListener("submit", async function(event) { event.preventDefault(); const status = document.getElementById("worksheet-upload-status"); if (!worksheetUploadFiles.length) { status.textContent = "Выберите хотя бы одно изображение."; return; } const form = new FormData(event.currentTarget); const button = document.getElementById("save-worksheet"); button.disabled = true; try { const pages = await window.lessonFlowCloud.uploadWorksheetPages(worksheetUploadFiles.map(function(item) { return item.file; }), function(current, total) { status.textContent = "Загружаем " + current + " из " + total + "…"; }); status.textContent = "Сохраняем рабочий лист…"; await window.lessonFlowCloud.saveMaterial(null, { title: String(form.get("title") || "").trim(), type: "worksheet", format: "images", subject: "", level: "", topic: String(form.get("topic") || "").trim(), tags: String(form.get("tags") || "").split(",").map(function(tag) { return tag.trim().toLocaleLowerCase("ru"); }).filter(Boolean), description: String(form.get("notes") || "").trim(), notes: String(form.get("notes") || "").trim(), pages: pages, pageCount: pages.length, url: "", embedUrl: "", service: "" }); status.textContent = "Рабочий лист сохранён."; activeMaterialType = "Рабочий лист"; typeFilterButtons.forEach(function(item) { item.classList.toggle("active-filter", item.dataset.type === "Рабочий лист"); }); setTimeout(function() { closeWorksheetUpload(); renderMaterials(); }, 450); }
    catch (error) { console.error("Worksheet upload error:", error); status.textContent = error.status === 401 ? "Сессия истекла. Войдите снова." : error.status === 403 ? "Загрузка доступна только преподавателю." : error.code === "files-network" ? "Не удалось связаться с сервером файлов." : "Не удалось загрузить рабочий лист. Material не создан."; }
    finally { button.disabled = false; } });
document.getElementById("close-worksheet-viewer").addEventListener("click", closeWorksheetViewer);
document.getElementById("worksheet-viewer-modal").addEventListener("click", function(event) { if (event.target.id === "worksheet-viewer-modal") closeWorksheetViewer(); });
document.getElementById("retry-worksheet-page").addEventListener("click", loadWorksheetViewerPage);
document.getElementById("worksheet-page-previous").addEventListener("click", function() { if (worksheetViewerPageIndex > 0) { worksheetViewerPageIndex -= 1; worksheetViewerZoom = 1; loadWorksheetViewerPage(); } });
document.getElementById("worksheet-page-next").addEventListener("click", function() { const count = Number(worksheetViewerMaterial?.pageCount || worksheetViewerMaterial?.pages?.length || 0); if (worksheetViewerPageIndex < count - 1) { worksheetViewerPageIndex += 1; worksheetViewerZoom = 1; loadWorksheetViewerPage(); } });
document.getElementById("worksheet-zoom-in").addEventListener("click", function() { worksheetViewerZoom = Math.min(2.5, worksheetViewerZoom + .25); document.getElementById("worksheet-viewer-image").style.transform = "scale(" + worksheetViewerZoom + ")"; });
document.getElementById("worksheet-zoom-out").addEventListener("click", function() { worksheetViewerZoom = Math.max(.5, worksheetViewerZoom - .25); document.getElementById("worksheet-viewer-image").style.transform = "scale(" + worksheetViewerZoom + ")"; });
document.getElementById("worksheet-fit").addEventListener("click", function() { worksheetViewerZoom = 1; document.getElementById("worksheet-viewer-image").style.transform = "scale(1)"; });

function closeMaterialModal() {
    materialModal.hidden = true;
    addMaterialButton.focus();
}

function openMaterialModal(material, defaults) {
    editingMaterialId = material?.id || null;
    document.getElementById("material-modal-title").textContent = material ? "Редактировать материал" : "Добавить материал";
    materialForm.reset();
    const sourceValues = material || defaults;
    if (sourceValues) {
        const values = { ...sourceValues, link: sourceValues.url || sourceValues.link || "", embedCode: sourceValues.embedUrl || "", tags: Array.isArray(sourceValues.tags) ? sourceValues.tags.join(", ") : sourceValues.tags || "" };
        ["title", "subject", "type", "level", "topic", "tags", "link", "service", "embedCode", "resultsTitle", "description"].forEach(function(field) { if (materialForm.elements[field]) materialForm.elements[field].value = values[field] || ""; });
    }
    materialModal.hidden = false;
    updateMaterialLinkRequirement();
    document.getElementById("new-material-title").focus();
}

addMaterialButton.addEventListener("click", function() { document.getElementById("library-add-choice-modal").hidden = false; });
document.getElementById("cancel-library-add-choice").addEventListener("click", function() { document.getElementById("library-add-choice-modal").hidden = true; });
document.querySelectorAll("[data-library-add-type]").forEach(function(button) { button.addEventListener("click", function() { document.getElementById("library-add-choice-modal").hidden = true; const type = button.dataset.libraryAddType; if (type === "source") openSourceLinkModal({ key: null, title: "", type: "book" }, null); else openMaterialModal(null, { type: type }); }); });

cancelMaterialButton.addEventListener("click", closeMaterialModal);

materialModal.addEventListener("click", function(event) {
    if (event.target === materialModal) closeMaterialModal();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && !previewModal.hidden) {
        event.stopImmediatePropagation();
        closePreview();
    } else if (event.key === "Escape" && !materialModal.hidden) {
        closeMaterialModal();
    }
});

materialForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    const formData = new FormData(materialForm);
    const wordwall = formData.get("service") === "Wordwall";
    const rawEmbedValue = String(formData.get("embedCode") || "").trim();
    const existingMaterial = editingMaterialId ? cloudMaterials.find(function(material) { return material.id === editingMaterialId; }) : null;
    const parsedEmbedUrl = wordwall && rawEmbedValue ? extractWordwallEmbedUrl(rawEmbedValue) : wordwall ? existingMaterial?.embedUrl || "" : "";
    console.log("WORDWALL EMBED INPUT PRESENT:", Boolean(rawEmbedValue));
    console.log("PARSED EMBED URL:", parsedEmbedUrl);
    if (wordwall && parsedEmbedUrl === null) { document.getElementById("wordwall-embed-error").textContent = "Добавьте корректный код Wordwall с адресом /embed/."; return; }
    document.getElementById("wordwall-embed-error").textContent = "";
    const materialData = {
        title: formData.get("title").trim(),
        subject: formData.get("subject"),
        type: formData.get("type"),
        level: formData.get("level").trim(),
        topic: formData.get("topic").trim(),
        tags: formData.get("tags").split(",").map(function(tag) { return tag.trim().toLocaleLowerCase("ru"); }).filter(Boolean),
        url: formData.get("link").trim(),
        embedUrl: parsedEmbedUrl || "",
        service: formData.get("service"),
        verificationMode: wordwall ? "teacher" : "",
        resultsTitle: wordwall ? String(formData.get("resultsTitle") || "").trim() : "",
        description: formData.get("description").trim(),
        format: existingMaterial?.format || "",
        pages: existingMaterial?.pages || [],
        pageCount: Number(existingMaterial?.pageCount || existingMaterial?.pages?.length || 0),
        notes: existingMaterial?.notes || (existingMaterial?.format === "images" ? formData.get("description").trim() : "")
    };

    const submit = materialForm.querySelector('[type="submit"]'); submit.disabled = true;
    try {
        if (isFirebaseMode() && firebaseProfile.role === "teacher") {
            const savedId = await window.lessonFlowCloud.saveMaterial(editingMaterialId, materialData);
            console.log("MATERIAL SAVED WITH EMBED:", parsedEmbedUrl);
            if (checkedExerciseMaterial && normalizeMatchText(checkedExerciseMaterial.url) === normalizeMatchText(materialData.url)) {
                checkedExerciseMaterial = { ...materialData, id: savedId, link: materialData.url };
                document.getElementById("save-exercise-resource").hidden = true;
                const addExercise = document.getElementById("add-existing-exercise"); addExercise.hidden = false; addExercise.disabled = false; addExercise.textContent = "+ Добавить в текущий урок";
                exerciseResourceStatus.textContent = "Упражнение сохранено в библиотеку";
                showScreen(lessonScreen);
            }
        }
        else materials.unshift({ ...materialData, link: materialData.url });
    } catch (error) { console.error("Material save error:", error); libraryResultCount.textContent = "Не удалось сохранить материал"; submit.disabled = false; return; }
    submit.disabled = false;

    materialForm.reset();
    updateMaterialLinkRequirement();
    materialSearch.value = "";
    levelFilter.value = "all";
    subjectFilter.value = "all";
    activeMaterialType = "all";
    typeFilterButtons.forEach(function(button) {
        button.classList.toggle("active-filter", button.dataset.type === "all");
    });
    closeMaterialModal();
    renderMaterials();
});

document.getElementById("cancel-delete-material").addEventListener("click", function() { deleteMaterialModal.hidden = true; deletingMaterialId = null; });
document.getElementById("confirm-delete-material").addEventListener("click", async function() {
    if (!deletingMaterialId) return; const button = this; button.disabled = true;
    try { await window.lessonFlowCloud.deleteMaterial(deletingMaterialId); deleteMaterialModal.hidden = true; deletingMaterialId = null; }
    catch (error) { console.error("Material delete error:", error); libraryResultCount.textContent = "Не удалось удалить материал"; }
    finally { button.disabled = false; }
});
deleteMaterialModal.addEventListener("click", function(event) { if (event.target === deleteMaterialModal) { deleteMaterialModal.hidden = true; deletingMaterialId = null; } });

renderMaterials();
renderTeacherStudentFeedback();

document.getElementById("add-block-button").addEventListener("click", function() {
    editingLessonBlockId = null;
    pendingLessonBlockEdit = null;
    customBlockForm.reset();
    customBlockForm.elements.time.value = 10;
    customBlockForm.elements.submissionType.value = "none";
    customBlockForm.elements.homeworkDueMode.value = "next-lesson";
    updateHomeworkDeadlineFields();
    document.getElementById("custom-block-title").textContent = "Свой блок";
    customBlockForm.querySelector('[type="submit"]').textContent = "Добавить";
    customBlockModal.hidden = false;
    customBlockForm.querySelector("select").focus();
});
document.getElementById("builder-add-library").addEventListener("click", function() { materials = isFirebaseMode() ? cloudMaterials : demoMaterials; renderMaterials(); showScreen(libraryScreen); });

function openLessonBlockEditor(block) {
    editingLessonBlockId = block.id;
    pendingLessonBlockEdit = null;
    customBlockForm.reset();
    const typeSelect = customBlockForm.elements.type;
    if (![...typeSelect.options].some(function(option) { return option.value === block.type; })) typeSelect.add(new Option(block.type || "Этап урока", block.type || "Этап урока"));
    typeSelect.value = block.type || "Упражнение";
    customBlockForm.elements.title.value = block.title || "";
    customBlockForm.elements.description.value = block.description || block.instruction || "";
    customBlockForm.elements.time.value = Number(block.duration || block.time) || 10;
    const submissionSelect = customBlockForm.elements.submissionType;
    const submissionType = block.submissionType || "none";
    if (![...submissionSelect.options].some(function(option) { return option.value === submissionType; })) submissionSelect.add(new Option(submissionType, submissionType));
    submissionSelect.value = submissionType;
    customBlockForm.elements.homeworkDueMode.value = block.homeworkDueMode === "custom" ? "custom" : "next-lesson";
    customBlockForm.elements.homeworkDueDate.value = block.homeworkDueDate || "";
    customBlockForm.elements.homeworkDueTime.value = block.homeworkDueTime || "18:00";
    updateHomeworkDeadlineFields();
    document.getElementById("custom-block-title").textContent = "Редактировать этап";
    customBlockForm.querySelector('[type="submit"]').textContent = "Сохранить изменения";
    customBlockModal.hidden = false;
    customBlockForm.elements.title.focus();
}

function updateHomeworkDeadlineFields() {
    const homework = customBlockForm.elements.type.value === "Домашнее задание";
    const fieldset = document.getElementById("homework-deadline-fields");
    const custom = document.getElementById("homework-custom-deadline");
    fieldset.hidden = !homework;
    custom.hidden = !homework || customBlockForm.elements.homeworkDueMode.value !== "custom";
    customBlockForm.elements.homeworkDueDate.required = homework && !custom.hidden;
}
customBlockForm.elements.type.addEventListener("change", updateHomeworkDeadlineFields);
customBlockForm.addEventListener("change", function(event) { if (event.target.name === "homeworkDueMode") updateHomeworkDeadlineFields(); });

function closeCustomBlockModal() {
    customBlockModal.hidden = true;
    editingLessonBlockId = null;
    pendingLessonBlockEdit = null;
    document.getElementById("add-block-button").focus();
}

cancelCustomBlock.addEventListener("click", closeCustomBlockModal);
customBlockModal.addEventListener("click", function(event) {
    if (event.target === customBlockModal) closeCustomBlockModal();
});

function applyLessonBlockEdit(edit) {
    const plan = getCurrentPlan(); const block = plan.find(function(item) { return item.id === edit.blockId; }); if (!block) return;
    Object.assign(block, { title: edit.title, type: edit.type, description: edit.description, time: edit.time, submissionType: edit.submissionType, homeworkDueMode: edit.type === "Домашнее задание" ? edit.homeworkDueMode : undefined, homeworkDueDate: edit.type === "Домашнее задание" && edit.homeworkDueMode === "custom" ? edit.homeworkDueDate : undefined, homeworkDueTime: edit.type === "Домашнее задание" && edit.homeworkDueMode === "custom" ? edit.homeworkDueTime : undefined });
    if (block.instruction !== undefined) block.instruction = edit.description;
    if (block.duration !== undefined) block.duration = edit.time;
    savePlans(); customBlockModal.hidden = true; editingLessonBlockId = null; pendingLessonBlockEdit = null; renderLessonPlan();
    requestAnimationFrame(function() { const edited = lessonPlanElement.querySelector('[data-block-id="' + CSS.escape(edit.blockId) + '"]'); if (edited) edited.scrollIntoView({ block: "nearest" }); });
}

customBlockForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(customBlockForm);
    if (editingLessonBlockId) {
        const plan = getCurrentPlan(); const existing = plan.find(function(item) { return item.id === editingLessonBlockId; }); if (!existing) return;
        const edit = { blockId: existing.id, title: formData.get("title").trim(), type: formData.get("type"), description: formData.get("description").trim(), time: Math.max(1, Number(formData.get("time")) || 10), submissionType: formData.get("submissionType") || "none", homeworkDueMode: formData.get("homeworkDueMode") || "next-lesson", homeworkDueDate: formData.get("homeworkDueDate") || "", homeworkDueTime: formData.get("homeworkDueTime") || "18:00" };
        const submissionTypeChanged = (existing.submissionType || "none") !== edit.submissionType;
        const hasSubmission = cloudSubmissions.some(function(submission) { return submission.blockId === existing.id && ["submitted", "verified", "returned"].includes(submission.status); });
        if (submissionTypeChanged && hasSubmission) { pendingLessonBlockEdit = edit; document.getElementById("block-submission-warning-modal").hidden = false; return; }
        applyLessonBlockEdit(edit); return;
    }
    getCurrentPlan().push({
        id: "custom-" + Date.now(),
        title: formData.get("title").trim(),
        type: formData.get("type"),
        description: formData.get("description").trim(),
        audience: "student",
        submissionType: formData.get("submissionType") || "none",
        homeworkDueMode: formData.get("type") === "Домашнее задание" ? (formData.get("homeworkDueMode") || "next-lesson") : undefined,
        homeworkDueDate: formData.get("type") === "Домашнее задание" && formData.get("homeworkDueMode") === "custom" ? formData.get("homeworkDueDate") : undefined,
        homeworkDueTime: formData.get("type") === "Домашнее задание" && formData.get("homeworkDueMode") === "custom" ? (formData.get("homeworkDueTime") || "18:00") : undefined,
        time: Math.max(1, Number(formData.get("time")) || 10)
    });
    customBlockForm.reset();
    savePlans();
    closeCustomBlockModal();
    renderLessonPlan();
});
document.getElementById("confirm-block-submission-change").addEventListener("click", function() { document.getElementById("block-submission-warning-modal").hidden = true; if (pendingLessonBlockEdit) applyLessonBlockEdit(pendingLessonBlockEdit); });
document.getElementById("cancel-block-submission-change").addEventListener("click", function() { document.getElementById("block-submission-warning-modal").hidden = true; pendingLessonBlockEdit = null; });

function closeStudentChoiceModal() {
    studentChoiceModal.hidden = true;
    pendingLibraryMaterial = null;
}

cancelStudentChoice.addEventListener("click", closeStudentChoiceModal);
studentChoiceModal.addEventListener("click", function(event) {
    if (event.target === studentChoiceModal) closeStudentChoiceModal();
});

studentChoiceButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const material = pendingLibraryMaterial;
        studentChoiceModal.hidden = true;
        pendingLibraryMaterial = null;
        selectedLessonStudent = button.dataset.lessonStudent;
        if (material) addMaterialToPlan(material);
        openLessonFor(selectedLessonStudent);
    });
});

saveDraftButton.addEventListener("click", async function() {
    savePlans();
    const draft = saveCurrentLessonDraft();
    saveDraftButton.textContent = "Сохранить";
    lessonSaveStatus.textContent = "✓ Сохранено " + new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(new Date(draft.updatedAt));
    document.querySelector(".lesson-header-state").textContent = "✓ Черновик сохранён";
});

publishLessonButton.addEventListener("click", async function() {
    savePlans();
    if (!selectedLessonStudent) return;

    const now = new Date();
    const date = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
    const plan = getCurrentPlan().filter(function(block) { return block.audience !== "teacher"; });
    const totalDuration = plan.reduce(function(sum, block) { return sum + (Number(block.duration || block.time) || 0); }, 0);
    const profile = selectedStudentRecord || studentProfiles[selectedLessonStudent];
    const studentName = selectedStudentRecord ? selectedStudentRecord.name : selectedLessonStudent;
    const teacherOnlyCount = getCurrentPlan().filter(function(block) { return block.audience === "teacher"; }).length; const wordwallCount = plan.filter(function(block) { return normalizeMatchText(block.service) === "wordwall"; }).length; const writtenCount = plan.filter(function(block) { return block.submissionType === "written-photo"; }).length; if (!window.confirm("Опубликовать урок " + studentName + "?\n\nУченику будет доступно: " + plan.length + " блоков" + (wordwallCount ? "\nWordwall: " + wordwallCount : "") + (writtenCount ? "\nПисьменных заданий: " + writtenCount : "") + "\nМатериалы преподавателя: " + teacherOnlyCount + "\n\nМатериалы преподавателя опубликованы не будут.")) return;

    const lessonData = {
        student: studentName,
        date: date,
        subject: selectedStudentRecord ? selectedStudentRecord.subject : selectedLessonStudent === "Аня" ? "Китайский" : "Английский",
        level: profile && profile.level ? profile.level : "",
        topic: profile && (profile.currentTopic || profile.topic) ? (profile.currentTopic || profile.topic) : "Урок",
        blocks: JSON.parse(JSON.stringify(plan)),
        totalDuration: totalDuration,
        publishedAt: now.toISOString(),
        status: "published"
    };

    if (isFirebaseMode() && firebaseProfile.role === "teacher" && selectedStudentRecord) {
        if (!selectedStudentRecord.authUid) {
            lessonSaveStatus.textContent = "Для этого ученика пока не привязан Firebase-аккаунт. Урок можно сохранить как черновик, но нельзя опубликовать.";
            return;
        }
        publishLessonButton.disabled = true;
        lessonSaveStatus.textContent = "Публикуем урок…";
        try {
            const result = await window.lessonFlowCloud.publishStudentLesson(selectedStudentRecord, {
                topic: lessonData.topic,
                subject: lessonData.subject,
                level: lessonData.level,
                date: lessonData.date,
                blocks: lessonData.blocks,
                totalDuration: lessonData.totalDuration,
                scheduleEventId: preparingScheduleEventId || null,
                programId: preparingPlanLessonContext?.programId || null,
                planLessonId: preparingPlanLessonContext?.id || null,
                planLessonNumber: preparingPlanLessonContext?.lessonNumber || null,
                planLessonTitle: preparingPlanLessonContext?.title || null
            });
            if (!result.ok) {
                lessonSaveStatus.textContent = "Для этого ученика пока не привязан Firebase-аккаунт. Урок можно сохранить как черновик, но нельзя опубликовать.";
                return;
            }
            lessonData.cloudId = result.studentUid;
            lessonData.lessonId = result.lessonId;
            publishedLessons[selectedLessonStudent] = lessonData;
            lessonSaveStatus.textContent = "Урок опубликован для " + studentName + " и сохранён в облаке";
            document.querySelector(".lesson-header-state").textContent = "✓ Опубликован";
            const publishedDraftKey = currentLessonDraftKey(); const publishedDraft = lessonDrafts[publishedDraftKey] || saveCurrentLessonDraft(); publishedDraft.status = "published"; publishedDraft.publishedAt = new Date().toISOString(); publishedDraft.lessonId = result.lessonId; localStorage.setItem("lessonFlowLessonDrafts", JSON.stringify(lessonDrafts));
            viewAsStudentButton.hidden = false;
            if (preparingScheduleEventId) {
                await window.lessonFlowCloud.saveScheduleEvent(preparingScheduleEventId, { status: "prepared", lessonId: result.lessonId });
                preparingScheduleEventId = null;
                preparingPlanLessonContext = null;
            }
        } catch (error) {
            console.error("Firestore lesson publish error:", error);
            lessonSaveStatus.textContent = error.lessonFlowCode === "lesson-archive-failed"
                ? "Не удалось сохранить предыдущий урок. Новый урок пока не опубликован."
                : error.code === "not-authenticated-teacher"
                ? "Для облачной публикации войдите как преподаватель."
                : error.code === "not-firebase-teacher-mode"
                    ? "Облачная публикация доступна только преподавателю в Firebase mode."
                    : error.code === "permission-denied"
                        ? "Нет доступа к данным Firestore."
                        : error.code === "unavailable"
                            ? "Сейчас нет соединения с базой. Попробуйте ещё раз."
                            : "Ошибка Firestore: " + (error.code || "unknown");
        } finally {
            publishLessonButton.disabled = false;
        }
        return;
    }

    publishedLessons[selectedLessonStudent] = lessonData;
    savePublishedLessons();
    lessonSaveStatus.textContent = "Урок опубликован для " + selectedLessonStudent;
    viewAsStudentButton.hidden = false;
});

viewAsStudentButton.addEventListener("click", function() {
    const lesson = publishedLessons[selectedLessonStudent];
    if (lesson) openPublishedLesson(lesson, true);
});

backFromStudentLesson.addEventListener("click", function() {
    studentLessonScreen.classList.remove("active", "is-in-student-shell"); studentScreen.querySelector(".student-app-header").hidden = false;
    showStudentSection(studentLessonReturnSection || "home");
    studentLessonReturnSection = "home";
    showScreen(studentScreen);
});

backToTeacherPreview.addEventListener("click", function() {
    teacherStudentPreview = false;
    openLessonFor(activePublishedLesson.student);
});

reflectionOptions.forEach(function(button) {
    button.addEventListener("click", function() {
        if (!activePublishedLesson) return;
        const state = getPublishedState(activePublishedLesson);
        state.reflection = button.dataset.reflection;
        saveStudentLessonState();
        renderStudentLesson();
    });
});

repeatRequestButton.addEventListener("click", function() {
    if (!activePublishedLesson) return;
    const state = getPublishedState(activePublishedLesson);
    state.repeatRequest = true;
    saveStudentLessonState();
    renderStudentLesson();
});

document.addEventListener("keydown", function(event) {
    if (event.key !== "Escape") return;
    if (!studentGameModal.hidden) { event.stopImmediatePropagation(); closeStudentGame(); return; }
    if (!youglishModal.hidden) closeYouglish();
    if (!customBlockModal.hidden) closeCustomBlockModal();
    if (!studentChoiceModal.hidden) closeStudentChoiceModal();
    if (!studentModal.hidden) studentModal.hidden = true;
    if (!deleteStudentModal.hidden) { deleteStudentModal.hidden = true; deletingStudent = null; }
    if (!historyLessonModal.hidden) closeHistoryLesson();
    if (!focusItemModal.hidden) focusItemModal.hidden = true;
    if (!deleteMaterialModal.hidden) { deleteMaterialModal.hidden = true; deletingMaterialId = null; }
    if (!findMoreModal.hidden) closeFindMorePanel();
});
