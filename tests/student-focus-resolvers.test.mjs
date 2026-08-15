import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../app.js", import.meta.url), "utf8");

function functionSource(name) {
    const start = source.indexOf("function " + name + "(");
    assert.notEqual(start, -1, "Missing resolver " + name);
    const bodyStart = source.indexOf("{", start);
    let depth = 0;
    for (let index = bodyStart; index < source.length; index += 1) {
        if (source[index] === "{") depth += 1;
        if (source[index] === "}") depth -= 1;
        if (depth === 0) return source.slice(start, index + 1);
    }
    throw new Error("Unclosed resolver " + name);
}

const context = vm.createContext({});
const resolverNames = ["resolveProgramCurrentLesson", "lessonFocusTitle", "resolveStudentCurrentTopic", "resolveStudentReviewTopics"];
vm.runInContext(resolverNames.map(functionSource).join("\n") + "\nthis.resolvers = { " + resolverNames.join(", ") + " };", context);
const { resolveProgramCurrentLesson, resolveStudentCurrentTopic, resolveStudentReviewTopics } = context.resolvers;

test("active program overrides legacy topic and advances by lesson status", function() {
    const program = { status: "active", currentLessonNumber: 1, lessons: [
        { lessonNumber: 1, status: "completed", mainFocus: "Finished focus" },
        { lessonNumber: 2, status: "scheduled", mainFocus: "Past Simple vs Present Perfect", title: "Fallback title" }
    ] };
    const current = resolveStudentCurrentTopic({ currentTopic: "Present Perfect" }, program);
    assert.equal(current.topic, "Past Simple vs Present Perfect");
    assert.equal(current.lesson.lessonNumber, 2);
    program.lessons[1].status = "completed";
    program.lessons.push({ lessonNumber: 3, status: "planned", title: "Feedback + repair map" });
    assert.equal(resolveProgramCurrentLesson(program).lessonNumber, 3);
});

test("legacy currentTopic remains fallback without an active program", function() {
    assert.equal(resolveStudentCurrentTopic({ currentTopic: "Legacy topic" }, null).topic, "Legacy topic");
    assert.equal(resolveStudentCurrentTopic({}, null).topic, "Тема пока не указана");
});

test("review map prioritizes repeat, request and practice and excludes confident or learning", function() {
    const topics = resolveStudentReviewTopics({ repeatTopic: "Legacy" }, [
        { title: "Practice topic", status: "practice" },
        { title: "Confident topic", status: "confident" },
        { title: "Repeat topic", status: "repeat" },
        { title: "Learning topic", status: "learning" }
    ], { repeatRequest: true }, { topic: "Requested topic" });
    assert.deepEqual(Array.from(topics, item => item.title), ["Repeat topic", "Requested topic", "Practice topic"]);
});

test("repeat request is deduplicated and legacy repeatTopic is fallback only", function() {
    const deduplicated = resolveStudentReviewTopics({ repeatTopic: "Legacy" }, [{ title: "Same topic", status: "repeat" }], { repeatRequest: true }, { topic: "same   topic" });
    assert.deepEqual(Array.from(deduplicated, item => item.title), ["Same topic"]);
    const fallback = resolveStudentReviewTopics({ repeatTopic: "Legacy" }, [{ title: "Done", status: "confident" }], { repeatRequest: false }, { topic: "Current" });
    assert.deepEqual(Array.from(fallback, item => item.title), ["Legacy"]);
});

test("resolver is student-agnostic for Misha and Arina", function() {
    for (const name of ["Миша", "Арина"]) {
        const state = resolveStudentCurrentTopic({ name, currentTopic: "Legacy" }, { status: "active", currentLessonNumber: 4, lessons: [{ lessonNumber: 4, status: "planned", topic: name + " program topic" }] });
        assert.equal(state.topic, name + " program topic");
    }
});
