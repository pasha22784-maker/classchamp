/**
 * questionEngine.js
 * 365-Day Zero-Repeat & Infinite Question Selection Engine
 * Features:
 * 1. SeenQuestionsTracker: logs [questionId, timestamp, wasCorrect] per user.
 * 2. 365-Day exclusion for correctly answered questions.
 * 3. 45-Day revision challenge cooldown for incorrectly answered questions.
 * 4. Bracket-mapped pull: 5 from B1, 5 from B2, 3 from B3, 2 from B4 + 1 FFF.
 * 5. Procedural fall-back injection if unseen pool is exhausted.
 */

import { proceduralMathEngine } from './proceduralMathEngine';
import examCategoryService from './examCategoryService';

export const BRACKETS = {
  B1: '1000-10000',
  B2: '10000-340000',
  B3: '340000-2500000',
  B4: '2500000-10000000',
  FFF: 'FFF'
};

export const LADDER_TIERS = [
  { level: 1, points: 1000, label: "1,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: false },
  { level: 2, points: 2000, label: "2,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: false },
  { level: 3, points: 3000, label: "3,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: false },
  { level: 4, points: 5000, label: "5,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: false },
  { level: 5, points: 10000, label: "10,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: true }, // PADAV 1
  { level: 6, points: 20000, label: "20,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: false },
  { level: 7, points: 40000, label: "40,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: false },
  { level: 8, points: 80000, label: "80,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: false },
  { level: 9, points: 160000, label: "1,60,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: false },
  { level: 10, points: 320000, label: "3,20,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: true }, // PADAV 2
  { level: 11, points: 640000, label: "6,40,000", bracket: BRACKETS.B3, timeLimit: 60, isPadav: false },
  { level: 12, points: 1250000, label: "12,50,000", bracket: BRACKETS.B3, timeLimit: 60, isPadav: false },
  { level: 13, points: 2500000, label: "25,00,000", bracket: BRACKETS.B3, timeLimit: 60, isPadav: false },
  { level: 14, points: 5000000, label: "50,00,000", bracket: BRACKETS.B4, timeLimit: 60, isPadav: false },
  { level: 15, points: 10000000, label: "1 Crore", bracket: BRACKETS.B4, timeLimit: 60, isPadav: true } // CHAMPION CROWN
];

class QuestionEngine {
  constructor() {
    this.seenKeyPrefix = 'classchamp_seen_';
  }

  // Get user seen history: [{ questionId, timestamp, wasCorrect }]
  getUserHistory(userId) {
    if (!userId) return [];
    try {
      const data = localStorage.getItem(`${this.seenKeyPrefix}${userId}`);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  // Save answer record to persistent user log
  recordAnswer(userId, questionId, wasCorrect) {
    if (!userId || !questionId) return;
    try {
      const history = this.getUserHistory(userId);
      // Remove any previous entry for this question
      const filtered = history.filter(item => item.questionId !== questionId);
      filtered.push({
        questionId,
        timestamp: Date.now(),
        wasCorrect: Boolean(wasCorrect)
      });
      localStorage.setItem(`${this.seenKeyPrefix}${userId}`, JSON.stringify(filtered));
    } catch {
      // Storage fallback
    }
  }

  // Check if a question is eligible for a specific user under 365-day rule
  isEligibleForUser(questionId, history) {
    const record = history.find(h => h.questionId === questionId);
    if (!record) return true; // Never seen

    const now = Date.now();
    const elapsedDays = (now - record.timestamp) / (1000 * 60 * 60 * 24);

    if (record.wasCorrect) {
      // If answered correctly, strictly exclude for 365 days
      return elapsedDays >= 365;
    } else {
      // If answered incorrectly, allow revision challenge after 45 days
      return elapsedDays >= 45;
    }
  }

  // Shuffle array helper
  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Pull a Fastest Finger First question
  getFFFQuestion(allQuestions, division, userId, customExamCategory = null, targetGrade = null) {
    const history = this.getUserHistory(userId);

    // Filter matching division and bracket
    let pool = allQuestions.filter(q =>
      (q.division === division || q.division === 'All') &&
      q.bracket === BRACKETS.FFF &&
      this.isEligibleForUser(q.id, history)
    );

    if ((division === 'Junior' || division === 'Senior') && targetGrade) {
      const gradeSpecific = pool.filter(q => Number(q.grade) === Number(targetGrade));
      if (gradeSpecific.length > 0) {
        return this.shuffle(gradeSpecific)[0];
      }
    }

    if (pool.length > 0) {
      return this.shuffle(pool)[0];
    }

    // Procedural Fallback if exhausted
    return proceduralMathEngine.generateFFF(division, targetGrade);
  }

  // Fetch 15 Hot-Seat questions matching division and prize brackets
  getHotSeatMatchQuestions(allQuestions, division, userId, customExamCategory = null, targetGrade = null) {
    const history = this.getUserHistory(userId);
    const activeCategory = customExamCategory || examCategoryService.getActiveCategory();
    const categoryMeta = examCategoryService.getCategories().find(c => c.id === activeCategory);
    const targetSubjects = categoryMeta?.subjects || [];

    const pullFromBracket = (bracket, neededCount) => {
      let matching = allQuestions.filter(q =>
        (q.division === division || q.division === 'All') &&
        q.bracket === bracket &&
        this.isEligibleForUser(q.id, history)
      );

      // If Junior or Senior with targetGrade, prioritize questions tagged with that grade
      if ((division === 'Junior' || division === 'Senior') && targetGrade) {
        const gradeMatch = matching.filter(q => Number(q.grade) === Number(targetGrade));
        const otherMatch = matching.filter(q => !q.grade || Number(q.grade) !== Number(targetGrade));
        matching = [...this.shuffle(gradeMatch), ...this.shuffle(otherMatch)];
      }
      // For Champions / Open division: prioritize questions matching target exam category
      else if (division === 'Open' && activeCategory !== 'ALL' && targetSubjects.length > 0) {
        const priority = matching.filter(q => targetSubjects.includes(q.subject));
        const nonPriority = matching.filter(q => !targetSubjects.includes(q.subject));
        matching = [...this.shuffle(priority), ...this.shuffle(nonPriority)];
      } else {
        matching = this.shuffle(matching);
      }

      const selected = matching.slice(0, neededCount);

      // If we need more than available in DB, generate procedurally
      while (selected.length < neededCount) {
        const procQ = proceduralMathEngine.generate(division, bracket, targetGrade);
        selected.push(procQ);
      }

      return selected;
    };

    // 5 from Bracket 1 (Q1 to Q5)
    const b1Questions = pullFromBracket(BRACKETS.B1, 5);
    // 5 from Bracket 2 (Q6 to Q10)
    const b2Questions = pullFromBracket(BRACKETS.B2, 5);
    // 3 from Bracket 3 (Q11 to Q13)
    const b3Questions = pullFromBracket(BRACKETS.B3, 3);
    // 2 from Bracket 4 (Q14 to Q15)
    const b4Questions = pullFromBracket(BRACKETS.B4, 2);

    const full15 = [
      ...b1Questions,
      ...b2Questions,
      ...b3Questions,
      ...b4Questions
    ];

    // Attach ladder meta (tier, points, timer) to each question
    return full15.map((q, idx) => ({
      ...q,
      levelIndex: idx + 1,
      tierMeta: LADDER_TIERS[idx]
    }));
  }
}

export const questionEngine = new QuestionEngine();
export default questionEngine;
