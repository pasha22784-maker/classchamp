/**
 * fairPlayService.js
 * Anti-Bullying, Downward Zero-Points Shield & Upward Challenge Bonus Engine.
 * 
 * Rules:
 * - Junior League: Age 7 to 10 (Class 2 to 5)
 * - Anti-Bullying Fair Play:
 *   1. Own Grade: Full Points, Full Trophies, Full Streaks & Badges.
 *   2. Upward Challenge: 1.25x Trophy Bonus + Upward Challenger recognition!
 *   3. Downward Play: STRICTLY 0 Points, 0 Trophies, 0 Badges, 0 Streak (Practice Only).
 *      Daily Limit: Maximum 2 practice matches per day in lower grades to prevent spamming.
 */

export const JUNIOR_GRADES = [
  { grade: 2, label: 'Class 2', age: 'Age 7', icon: '📘', description: 'Class 2 (Age 7) • Phonics, Numbers & Nature' },
  { grade: 3, label: 'Class 3', age: 'Age 8', icon: '📗', description: 'Class 3 (Age 8) • Tables, Science & Stories' },
  { grade: 4, label: 'Class 4', age: 'Age 9', icon: '📙', description: 'Class 4 (Age 9) • Fractions, GK & Geography' },
  { grade: 5, label: 'Class 5', age: 'Age 10', icon: '📕', description: 'Class 5 (Age 10) • Math Logic, EVS & Reasoning' }
];

export const SENIOR_GRADES = [
  { grade: 6, label: 'Class 6', age: 'Age 11', icon: '📐', description: 'Class 6 (Age 11) • Integers, General Science & Civics' },
  { grade: 7, label: 'Class 7', age: 'Age 12', icon: '🔬', description: 'Class 7 (Age 12) • Equations, Physics & World History' },
  { grade: 8, label: 'Class 8', age: 'Age 13', icon: '🧬', description: 'Class 8 (Age 13) • Algebra, Chemistry & Geography' },
  { grade: 9, label: 'Class 9', age: 'Age 14', icon: '🧪', description: 'Class 9 (Age 14) • Polynomials, Motion & Laws of Science' },
  { grade: 10, label: 'Class 10', age: 'Age 15', icon: '🎖️', description: 'Class 10 (Age 15) • Board Focus, Trigonometry & Light' },
  { grade: 11, label: 'Class 11', age: 'Age 16', icon: '⚛️', description: 'Class 11 (Age 16) • Higher Secondary, Calculus & Mechanics' },
  { grade: 12, label: 'Class 12', age: 'Age 17', icon: '🎓', description: 'Class 12 (Age 17) • Board Finals, Electro & Advanced Prep' }
];

export const MAX_DOWNWARD_PRACTICE_DAILY = 2;

/**
 * Returns numeric hierarchy rank (2 to 13)
 */
export function getGradeNumericLevel(division, grade) {
  if (division === 'Junior') {
    const g = Number(grade);
    return (g >= 2 && g <= 5) ? g : 3;
  }
  if (division === 'Senior') {
    const g = Number(grade);
    return (g >= 6 && g <= 12) ? g : 8;
  }
  return 13; // Champions / Open (18+)
}

/**
 * Evaluates fair play rules for a match
 */
export function evaluateMatchPlay(currentUser, selectedDivision, selectedGrade) {
  const userDivision = currentUser?.division || 'Junior';
  const userGrade = currentUser?.grade ? Number(currentUser.grade) : (userDivision === 'Senior' ? 8 : userDivision === 'Open' ? 13 : 3);
  
  const targetLevel = getGradeNumericLevel(selectedDivision, selectedGrade);
  const userLevel = getGradeNumericLevel(userDivision, userGrade);

  if (targetLevel === userLevel) {
    return {
      status: 'NORMAL',
      trophyMultiplier: 1.0,
      allowsPoints: true,
      allowsTrophies: true,
      allowsBadges: true,
      allowsStreak: true,
      label: 'Ranked Championship Match',
      userGrade,
      targetGrade: selectedGrade || targetLevel,
      warning: null
    };
  }

  if (targetLevel > userLevel) {
    return {
      status: 'UPWARD_CHALLENGE',
      trophyMultiplier: 1.25, // +25% bonus for daring to challenge higher grade!
      allowsPoints: true,
      allowsTrophies: true,
      allowsBadges: true,
      allowsStreak: true,
      label: '🚀 Upward Challenge (1.25x Bonus Trophies)',
      userGrade,
      targetGrade: selectedGrade || targetLevel,
      warning: null
    };
  }

  // Downward play: targetLevel < userLevel
  return {
    status: 'DOWNWARD_PRACTICE',
    trophyMultiplier: 0,
    allowsPoints: false,
    allowsTrophies: false,
    allowsBadges: false,
    allowsStreak: false,
    label: '🛡️ Practice Mode (Zero Ranked Points)',
    userGrade,
    targetGrade: selectedGrade || targetLevel,
    warning: `Fair Play Protection: You are registered in Class ${userGrade}. Playing Class ${selectedGrade || targetLevel} is strictly Practice Mode (0 Points & 0 Trophies) to protect fair competition for younger students.`
  };
}

export default {
  JUNIOR_GRADES,
  SENIOR_GRADES,
  MAX_DOWNWARD_PRACTICE_DAILY,
  getGradeNumericLevel,
  evaluateMatchPlay
};
