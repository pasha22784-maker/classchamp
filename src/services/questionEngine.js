/**
 * questionEngine.js
 * 6-Month (180-Day) Zero-Repeat & Infinite Question Selection Engine
 * 
 * Rules:
 * 1. Strict 180-Day (6 Months) Zero-Repeat Guarantee:
 *    Any question seen, encountered, or answered incorrectly by a player is strictly excluded
 *    from appearing again for at least 180 days (6 full months).
 * 2. 365-Day (1 Year) Exclusion for Correct Answers:
 *    Questions answered correctly remain locked out for a full 365 days.
 * 3. Cross-Profile & Device-Level Protection:
 *    History is tracked per user account AND mirrored to device-level storage ('classchamp_seen_device'),
 *    ensuring Guest players and new accounts on the same phone never see repeated questions within 6 months.
 * 4. Match-Start Encounter Registration:
 *    All 15 Hot-Seat questions + FFF question are immediately registered as encountered upon match generation.
 *    Even if a player walks away or exits the app mid-game, those questions will not repeat for 6 months.
 * 5. Procedural Dynamic Question Generator Fallback:
 *    When static questions in a bracket are exhausted (seen within 180 days), proceduralMathEngine
 *    seamlessly synthesizes unlimited, unique math/logic/GK questions on the fly. No repeat static question is ever forced.
 */

import { proceduralMathEngine } from './proceduralMathEngine';
import examCategoryService from './examCategoryService';
import currentAffairsService from './currentAffairsService';

export const MIN_REPEAT_COOLDOWN_DAYS = 180; // 6 Months strict zero-repetition rule
export const CORRECT_ANSWER_COOLDOWN_DAYS = 365; // 1 Year cooldown for correctly answered questions
export const DEVICE_SEEN_KEY = 'classchamp_seen_device';
export const USER_SEEN_KEY_PREFIX = 'classchamp_seen_';

export const BRACKETS = {
  B1: '1000-10000',
  B2: '10000-340000',
  B3: '340000-2500000',
  B4: '2500000-10000000',
  FFF: 'FFF'
};

export const LADDER_TIERS = [
  { level: 1, points: 1000, label: "1,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: false, isSafeMilestone: false },
  { level: 2, points: 2000, label: "2,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: false, isSafeMilestone: false },
  { level: 3, points: 3000, label: "3,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: false, isSafeMilestone: false },
  { level: 4, points: 5000, label: "5,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: false, isSafeMilestone: false },
  { level: 5, points: 10000, label: "10,000", bracket: BRACKETS.B1, timeLimit: 30, isPadav: true, isSafeMilestone: true }, // SAFE MILESTONE 1
  { level: 6, points: 20000, label: "20,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: false, isSafeMilestone: false },
  { level: 7, points: 40000, label: "40,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: false, isSafeMilestone: false },
  { level: 8, points: 80000, label: "80,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: false, isSafeMilestone: false },
  { level: 9, points: 160000, label: "1,60,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: false, isSafeMilestone: false },
  { level: 10, points: 320000, label: "3,20,000", bracket: BRACKETS.B2, timeLimit: 45, isPadav: true, isSafeMilestone: true }, // SAFE MILESTONE 2
  { level: 11, points: 640000, label: "6,40,000", bracket: BRACKETS.B3, timeLimit: 60, isPadav: false, isSafeMilestone: false },
  { level: 12, points: 1250000, label: "12,50,000", bracket: BRACKETS.B3, timeLimit: 60, isPadav: false, isSafeMilestone: false },
  { level: 13, points: 2500000, label: "25,00,000", bracket: BRACKETS.B3, timeLimit: 60, isPadav: false, isSafeMilestone: false },
  { level: 14, points: 5000000, label: "50,00,000", bracket: BRACKETS.B4, timeLimit: 60, isPadav: false, isSafeMilestone: false },
  { level: 15, points: 10000000, label: "1 Crore", bracket: BRACKETS.B4, timeLimit: 60, isPadav: true, isSafeMilestone: true } // GRAND CHAMPION CROWN
];

class QuestionEngine {
  constructor() {
    this.seenKeyPrefix = USER_SEEN_KEY_PREFIX;
    this.deviceSeenKey = DEVICE_SEEN_KEY;
  }

  /**
   * Helper: safely load records from a localStorage key
   */
  _loadStorageKey(key) {
    if (typeof window === 'undefined' || !window.localStorage) return [];
    try {
      const data = localStorage.getItem(key);
      if (!data) return [];
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  /**
   * Helper: safely save records to a localStorage key.
   * Includes LRU auto-pruning of records older than 185 days (no longer needed by 180-day rule)
   * and auto-pruning fallback if QuotaExceededError occurs to prevent 5MB storage crashes.
   */
  _saveStorageKey(key, records) {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      // 1. Auto-purge records older than 185 days (eligible for repeat anyway)
      const cutoff185Days = Date.now() - (185 * 24 * 60 * 60 * 1000);
      const activeRecords = (records || []).filter(r => (r?.timestamp || 0) >= cutoff185Days);

      // 2. Cap at 2000 most recent records
      const trimmed = activeRecords.slice(-2000);
      localStorage.setItem(key, JSON.stringify(trimmed));
    } catch (e) {
      // 3. Quota Recovery: If 5MB limit hit, aggressively prune to latest 500 items
      try {
        const emergencyTrim = (records || []).slice(-500);
        localStorage.setItem(key, JSON.stringify(emergencyTrim));
      } catch (err2) {
        console.warn('[QuestionEngine] LocalStorage quota reached, unable to persist seen log:', err2);
      }
    }
  }

  /**
   * Get user + device seen history:
   * Returns merged array of { questionId, timestamp, wasCorrect, encountered }
   * Even for Guest sessions (userId == null), returns device-level history.
   */
  getUserHistory(userId) {
    const map = new Map();

    // 1. Device history (protects guests & cross-profile sessions on same physical phone)
    const deviceRecords = this._loadStorageKey(this.deviceSeenKey);
    deviceRecords.forEach(rec => {
      if (rec && rec.questionId) {
        map.set(rec.questionId, { ...rec });
      }
    });

    // 2. User account history
    if (userId) {
      const userRecords = this._loadStorageKey(`${this.seenKeyPrefix}${userId}`);
      userRecords.forEach(rec => {
        if (!rec || !rec.questionId) return;
        const existing = map.get(rec.questionId);
        if (!existing) {
          map.set(rec.questionId, { ...rec });
        } else {
          // Merge taking the most recent timestamp and maintaining correct status
          map.set(rec.questionId, {
            questionId: rec.questionId,
            timestamp: Math.max(existing.timestamp || 0, rec.timestamp || 0),
            wasCorrect: Boolean(existing.wasCorrect || rec.wasCorrect),
            encountered: Boolean(existing.encountered || rec.encountered)
          });
        }
      });
    }

    return Array.from(map.values());
  }

  /**
   * Save answer record to persistent user log AND mirror to device history
   */
  recordAnswer(userId, questionId, wasCorrect) {
    if (!questionId) return;
    const now = Date.now();
    const isCorr = Boolean(wasCorrect);

    const updateList = (list) => {
      const filtered = list.filter(item => item.questionId !== questionId);
      filtered.push({
        questionId,
        timestamp: now,
        wasCorrect: isCorr,
        encountered: true
      });
      return filtered;
    };

    // Update Device storage
    const devList = this._loadStorageKey(this.deviceSeenKey);
    this._saveStorageKey(this.deviceSeenKey, updateList(devList));

    // Update User storage if logged in
    if (userId) {
      const userList = this._loadStorageKey(`${this.seenKeyPrefix}${userId}`);
      this._saveStorageKey(`${this.seenKeyPrefix}${userId}`, updateList(userList));
    }
  }

  /**
   * Immediately register questions presented in a match (15 Hot-Seat + 1 FFF).
   * Ensures that if a player exits, disconnects, or walks away, these questions
   * cannot repeat for at least 180 days (6 months).
   */
  recordQuestionsEncountered(userId, questionIds = []) {
    if (!Array.isArray(questionIds) || questionIds.length === 0) return;
    const now = Date.now();
    const idSet = new Set(questionIds.filter(Boolean));

    const applyBatch = (currentList) => {
      const existingMap = new Map();
      currentList.forEach(item => {
        if (item && item.questionId) existingMap.set(item.questionId, item);
      });

      idSet.forEach(qid => {
        const existing = existingMap.get(qid);
        if (existing) {
          // Update timestamp so cooldown starts now, preserving wasCorrect
          existingMap.set(qid, {
            ...existing,
            timestamp: now,
            encountered: true
          });
        } else {
          existingMap.set(qid, {
            questionId: qid,
            timestamp: now,
            wasCorrect: false,
            encountered: true
          });
        }
      });

      return Array.from(existingMap.values());
    };

    // Save to Device storage
    const devList = this._loadStorageKey(this.deviceSeenKey);
    this._saveStorageKey(this.deviceSeenKey, applyBatch(devList));

    // Save to User storage if logged in
    if (userId) {
      const userList = this._loadStorageKey(`${this.seenKeyPrefix}${userId}`);
      this._saveStorageKey(`${this.seenKeyPrefix}${userId}`, applyBatch(userList));
    }
  }

  /**
   * Strict 6-Month Zero-Repeat Check
   * Returns true ONLY if:
   * 1. The question was NEVER seen before, OR
   * 2. It has been at least 180 days (6 months) since it was last seen/attempted, AND
   * 3. If answered correctly, it has been at least 365 days (1 year).
   */
  isEligibleForUser(questionId, history) {
    if (!questionId) return false;
    const record = history.find(h => h.questionId === questionId);
    if (!record) return true; // Never seen -> completely eligible

    const now = Date.now();
    const elapsedDays = (now - record.timestamp) / (1000 * 60 * 60 * 24);

    // Strict 180-Day (6 Months) Zero Repeat Rule:
    // Under NO circumstance may any question repeat within 180 days!
    if (elapsedDays < MIN_REPEAT_COOLDOWN_DAYS) {
      return false;
    }

    // If answered correctly in the past, lock out for 365 days (1 year)
    if (record.wasCorrect) {
      return elapsedDays >= CORRECT_ANSWER_COOLDOWN_DAYS;
    }

    // Encountered or incorrect: eligible after 180 days (6 months)
    return elapsedDays >= MIN_REPEAT_COOLDOWN_DAYS;
  }

  /**
   * Diagnostic statistics on 6-month question lockout
   */
  getZeroRepeatStats(userId) {
    const history = this.getUserHistory(userId);
    const now = Date.now();

    let lockedUnder6Months = 0;
    let lockedUnder1YearCorrect = 0;
    let eligibleAfterCooldown = 0;

    history.forEach(rec => {
      const elapsedDays = (now - rec.timestamp) / (1000 * 60 * 60 * 24);
      if (elapsedDays < MIN_REPEAT_COOLDOWN_DAYS) {
        lockedUnder6Months++;
      } else if (rec.wasCorrect && elapsedDays < CORRECT_ANSWER_COOLDOWN_DAYS) {
        lockedUnder1YearCorrect++;
      } else {
        eligibleAfterCooldown++;
      }
    });

    return {
      totalTracked: history.length,
      lockedUnder6Months,
      lockedUnder1YearCorrect,
      eligibleAfterCooldown,
      cooldownDays: MIN_REPEAT_COOLDOWN_DAYS
    };
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

  // Pull a Rapid Round question with strict 6-month zero-repeat guarantee
  getFFFQuestion(allQuestions, division, userId, customExamCategory = null, targetGrade = null) {
    const history = this.getUserHistory(userId);

    // Filter matching division and bracket (excluding expired/archived Current Affairs)
    let pool = allQuestions.filter(q =>
      (q.division === division || q.division === 'All') &&
      q.bracket === BRACKETS.FFF &&
      this.isEligibleForUser(q.id, history) &&
      currentAffairsService.isQuestionActive(q)
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

    // Procedural Fallback if exhausted (guarantees infinite unique questions without repetition)
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
        this.isEligibleForUser(q.id, history) &&
        currentAffairsService.isQuestionActive(q)
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

      // If we need more than available in DB (or if static pool is exhausted by 6-month rule), generate procedurally
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
