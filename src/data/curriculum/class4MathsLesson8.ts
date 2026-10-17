import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 8: HALVES AND QUARTERS (FRACTIONS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_8_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Halves, Quarters & Three-Quarters (1/2, 1/4, 3/4)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m8_concept_frac_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Halves and Quarters (Fractions)',
    concept: 'Meaning of a Quarter',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A pizza 🍕 is cut into 4 equal slices. If Rahul eats 1 slice, what fraction did he eat?',
    visualEmoji: '🍕 1 slice out of 4',
    payload: {
      options: [
        { id: 'opt_fr1', text: '1/4', isCorrect: true },
        { id: 'opt_fr2', text: '1/2', isCorrect: false },
        { id: 'opt_fr3', text: '3/4', isCorrect: false },
      ],
    },
    explanation: '💡 1 equal part out of 4 is written as **1/4 (Quarter)**!',
    points: 10,
  },
  {
    id: 'c4_m8_concept_frac_02',
    grade: 4,
    subject: 'maths',
    chapter: 'Halves and Quarters (Fractions)',
    concept: 'Equivalent Fractions (2/4 = 1/2)',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many quarters (1/4) combine together to make exactly half (1/2)?',
    visualEmoji: '🥧 ¼ + ¼ = ½',
    payload: {
      options: [
        { id: 'opt_eq1', text: '2 quarters', isCorrect: true },
        { id: 'opt_eq2', text: '3 quarters', isCorrect: false },
        { id: 'opt_eq3', text: '4 quarters', isCorrect: false },
      ],
    },
    explanation: '💡 1/4 + 1/4 = 2/4, which simplifies to **1/2 (Half)**!',
    points: 10,
  },
  {
    id: 'c4_m8_concept_frac_03',
    grade: 4,
    subject: 'maths',
    chapter: 'Halves and Quarters (Fractions)',
    concept: 'Meaning of Three-Quarters (3/4)',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'If 3 slices out of 4 slices of cake are frosted with chocolate 🍫, then [BLANK] / 4 of the cake is frosted.',
    visualEmoji: '🍰 3 out of 4 parts',
    payload: {
      correctAnswer: '3',
      wordBank: ['3', '1', '2', '4'],
      displayTemplate: '[BLANK] / 4 of the cake.',
    },
    explanation: '💡 3 parts out of 4 total parts is written as **3/4**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Fraction of a Collection (समूह का भिन्न)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m8_concept_coll_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Halves and Quarters (Fractions)',
    concept: 'Half of a Collection',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'There are 20 sweet gulab jamuns in a box. Half (1/2) of them is [BLANK] gulab jamuns.',
    visualEmoji: '🍯 20 ÷ 2 = ❓',
    payload: {
      correctAnswer: '10',
      wordBank: ['10', '5', '15', '20'],
      displayTemplate: 'Half of 20 = [BLANK]',
    },
    explanation: '💡 Half of 20 is 20 ÷ 2 = **10**!',
    points: 10,
  },
  {
    id: 'c4_m8_concept_coll_02',
    grade: 4,
    subject: 'maths',
    chapter: 'Halves and Quarters (Fractions)',
    concept: 'Three-Quarters of a Quantity',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is 3/4 of a 1-meter ribbon (100 cm)?',
    visualEmoji: '🎀 ¾ of 100 cm = ❓',
    payload: {
      options: [
        { id: 'opt_rb1', text: '75 cm', isCorrect: true },
        { id: 'opt_rb2', text: '50 cm', isCorrect: false },
        { id: 'opt_rb3', text: '25 cm', isCorrect: false },
      ],
    },
    explanation: '💡 100 ÷ 4 = 25 cm. Then 25 × 3 = **75 cm**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Fraction Value Matching & Order
  // --------------------------------------------------------------------------
  {
    id: 'c4_m8_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Halves and Quarters (Fractions)',
    concept: 'Fraction Calculation Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each fractional part to its correct value:',
    visualEmoji: '➗ ➔ 🎯',
    payload: {
      pairs: [
        { id: 'hq_p1', left: '1/2 of 50', right: '25' },
        { id: 'hq_p2', left: '1/4 of 100', right: '25' },
        { id: 'hq_p3', left: '1/2 of 1000', right: '500' },
        { id: 'hq_p4', left: '3/4 of 40', right: '30' },
      ],
    },
    explanation: '💡 50/2 = 25; 100/4 = 25; 1000/2 = 500; (40/4)×3 = 30.',
    points: 15,
  },
  {
    id: 'c4_m8_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Halves and Quarters (Fractions)',
    concept: 'Fractions Ascending Order',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange the fractions in order from smallest to greatest:',
    visualEmoji: '🍰 ¼ ➔ ½ ➔ ¾ ➔ 1',
    payload: {
      tokens: ['1/4 (Quarter)', '1/2 (Half)', '3/4 (Three-quarters)', '4/4 (One whole)'],
      scrambled: ['3/4 (Three-quarters)', '1/4 (Quarter)', '4/4 (One whole)', '1/2 (Half)'],
      correctSequence: ['1/4 (Quarter)', '1/2 (Half)', '3/4 (Three-quarters)', '4/4 (One whole)'],
    },
    explanation: '💡 Ascending fraction sequence: **1/4 < 1/2 (2/4) < 3/4 < 4/4 (Whole)**!',
    points: 15,
  },
];
