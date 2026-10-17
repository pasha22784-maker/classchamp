import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 5: INTEGERS (POSITIVE & NEGATIVE NUMBERS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: What are Integers? Real-life Situations
  // --------------------------------------------------------------------------
  {
    id: 'c6_m5_concept_neg_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Integers (Positive & Negative Numbers)',
    concept: 'Real-life Representation with Signs',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How do we represent a temperature of "15 degrees below freezing (0°C)" using integers?',
    visualEmoji: '❄️ 15°C Below Zero',
    payload: {
      options: [
        { id: 'opt_int1', text: '-15°C', isCorrect: true },
        { id: 'opt_int2', text: '+15°C', isCorrect: false },
        { id: 'opt_int3', text: '0°C', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Quantities below zero, below sea level, or financial losses are represented with a **negative sign (-)**!',
    points: 10,
  },
  {
    id: 'c6_m5_concept_neg_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Integers (Positive & Negative Numbers)',
    concept: 'Comparing Negative Numbers',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Between -10 and -3 on a number line, [BLANK] is greater because it lies further to the right.',
    visualEmoji: '⬅️ -10 ... -3 ... 0 ➡️',
    payload: {
      correctAnswer: '-3',
      wordBank: ['-3', '-10', '-13', '0'],
      displayTemplate: 'The greater integer is [BLANK].',
    },
    explanation: '💡 On the number line, numbers further to the right are always greater: **-3 > -10**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Addition and Subtraction of Integers
  // --------------------------------------------------------------------------
  {
    id: 'c6_m5_concept_calc_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Integers (Positive & Negative Numbers)',
    concept: 'Integer Arithmetic Operations Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each integer calculation with its correct simplified value:',
    visualEmoji: '➕ ➖ Integer Arithmetic',
    payload: {
      pairs: [
        { id: 'm5_p1', left: '(-5) + (+8)', right: '+3' },
        { id: 'm5_p2', left: '(-4) + (-6)', right: '-10' },
        { id: 'm5_p3', left: '(+7) - (+10)', right: '-3' },
        { id: 'm5_p4', left: '(-2) - (-9)', right: '+7' },
      ],
    },
    explanation: '💡 Subtracting a negative is equivalent to adding a positive: (-2) - (-9) = -2 + 9 = **+7**!',
    points: 15,
  },
  {
    id: 'c6_m5_concept_calc_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Integers (Positive & Negative Numbers)',
    concept: 'Additive Inverse of an Integer',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the additive inverse of -14 (the number which when added gives 0)?',
    visualEmoji: '🔄 Additive Inverse',
    payload: {
      options: [
        { id: 'opt_inv1', text: '+14', isCorrect: true },
        { id: 'opt_inv2', text: '-14', isCorrect: false },
        { id: 'opt_inv3', text: '0', isCorrect: false },
      ],
    },
    explanation: '💡 The **additive inverse** of any integer *a* is *-a*, because their sum is always zero (*-14 + 14 = 0*)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Ordering Integers from Coldest to Warmest
  // --------------------------------------------------------------------------
  {
    id: 'c6_m5_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Integers (Positive & Negative Numbers)',
    concept: 'Ascending Order of Integers',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these integers in ascending order (from smallest/most negative to greatest):',
    visualEmoji: '❄️ ➡️ ☀️ Integer Order',
    payload: {
      tokens: ['-12', '-5', '0', '+8'],
      scrambled: ['+8', '-5', '-12', '0'],
      correctSequence: ['-12', '-5', '0', '+8'],
    },
    explanation: '💡 Moving from left to right along the number line: -12 < -5 < 0 < +8!',
    points: 15,
  },
];
