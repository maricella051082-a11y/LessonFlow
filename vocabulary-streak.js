export function vocabularyStreakFromSessions(sessions, programId) {
    const completedDayIndexes = [...new Set((sessions || []).filter(function(session) {
        return session?.status === "completed"
            && (!programId || session.programId === programId)
            && Number.isInteger(Number(session.dayIndex))
            && Number(session.dayIndex) > 0;
    }).map(function(session) { return Number(session.dayIndex); }))].sort(function(a, b) { return a - b; });

    if (!completedDayIndexes.length) return 0;
    let streakDays = 1;
    for (let index = completedDayIndexes.length - 1; index > 0; index -= 1) {
        if (completedDayIndexes[index] - completedDayIndexes[index - 1] !== 1) break;
        streakDays += 1;
    }
    return streakDays;
}
