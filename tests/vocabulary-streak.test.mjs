import test from "node:test";
import assert from "node:assert/strict";
import { vocabularyStreakFromSessions } from "../vocabulary-streak.js";

const completed = (dayIndex, extra = {}) => ({ status: "completed", programId: "program-a", dayIndex, ...extra });

test("no completed vocabulary sessions gives zero streak", () => {
    assert.equal(vocabularyStreakFromSessions([], "program-a"), 0);
    assert.equal(vocabularyStreakFromSessions([{ status: "in-progress", programId: "program-a", dayIndex: 1 }], "program-a"), 0);
});

test("first completed study day starts the streak at one", () => {
    assert.equal(vocabularyStreakFromSessions([completed(1)], "program-a"), 1);
});

test("reopening or duplicating the same study day does not increment streak", () => {
    assert.equal(vocabularyStreakFromSessions([completed(1), completed(1)], "program-a"), 1);
});

test("consecutive vocabulary day indexes increment the streak", () => {
    assert.equal(vocabularyStreakFromSessions([completed(2), completed(1)], "program-a"), 2);
    assert.equal(vocabularyStreakFromSessions([completed(1), completed(2), completed(3)], "program-a"), 3);
});

test("a gap resets the current streak to the latest consecutive run", () => {
    assert.equal(vocabularyStreakFromSessions([completed(1), completed(2), completed(4)], "program-a"), 1);
    assert.equal(vocabularyStreakFromSessions([completed(1), completed(3), completed(4)], "program-a"), 2);
});

test("review days count by dayIndex and unrelated programs are ignored", () => {
    assert.equal(vocabularyStreakFromSessions([
        completed(5, { sessionType: "weekly-mix" }),
        completed(6, { sessionType: "hardest-review" }),
        completed(7, { sessionType: "mastery-check" }),
        completed(8, { programId: "program-b" })
    ], "program-a"), 3);
});
