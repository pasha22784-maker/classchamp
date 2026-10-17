import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 2: WHOLE NUMBERS & NUMBER LINE
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Natural Numbers vs Whole Numbers
  // --------------------------------------------------------------------------
  {
    id: 'c6_m2_concept_def_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Whole Numbers & Number Line',
    concept: 'Smallest Whole Number',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the smallest Whole Number, and does it have a predecessor in whole numbers?',
    visualEmoji: '0️⃣ 1️⃣ 2️⃣ 3️⃣...',
    payload: {
      options: [
        { id: 'opt_wn1', text: '0 is the smallest whole number, and it has no predecessor in whole numbers', isCorrect: true },
        { id: 'opt_wn2', text: '1', isCorrect: false },
        { id: 'opt_wn3', text: '-1', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Counting numbers 1, 2, 3... are **Natural numbers**. Including 0 gives **Whole numbers** (0, 1, 2, 3...). 0 has no whole number predecessor!',
    points: 10,
  },
  {
    id: 'c6_m2_concept_def_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Whole Numbers & Number Line',
    concept: 'Operations on the Number Line',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'On a horizontal number line, adding a positive number means moving towards the [BLANK].',
    visualEmoji: '➡️ ➖ 0 1 2 3 4 5 ➕ ➡️',
    payload: {
      correctAnswer: 'right',
      wordBank: ['right', 'left', 'down', 'origin'],
      displayTemplate: 'Adding moves towards the [BLANK].',
    },
    explanation: '💡 On the number line: **Addition moves to the right**, and **Subtraction moves to the left**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Properties of Whole Numbers
  // --------------------------------------------------------------------------
  {
    id: 'c6_m2_concept_prop_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Whole Numbers & Number Line',
    concept: 'Properties of Operations Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each algebraic property of whole numbers with its correct mathematical form:',
    visualEmoji: '📐 Properties Match',
    payload: {
      pairs: [
        { id: 'm2_p1', left: 'Commutative Property (Addition)', right: 'a + b = b + a' },
        { id: 'm2_p2', left: 'Associative Property (Multiplication)', right: '(a × b) × c = a × (b × c)' },
        { id: 'm2_p3', left: 'Distributive Property', right: 'a × (b + c) = (a × b) + (a × c)' },
        { id: 'm2_p4', left: 'Additive Identity', right: 'a + 0 = a' },
      ],
    },
    explanation: '💡 Distributive property allows breaking down large multiplications (e.g. 12 × 105 = 12 × 100 + 12 × 5)!',
    points: 15,
  },
  {
    id: 'c6_m2_concept_prop_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Whole Numbers & Number Line',
    concept: 'Applying Distributive Property',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Using the distributive property, evaluate: 25 × 102 = 25 × (100 + 2):',
    visualEmoji: '💡 25 × (100 + 2) = ❓',
    payload: {
      options: [
        { id: 'opt_dst1', text: '2,550', isCorrect: true },
        { id: 'opt_dst2', text: '2,525', isCorrect: false },
        { id: 'opt_dst3', text: '2,600', isCorrect: false },
      ],
    },
    explanation: '💡 Distributive property: 25 × (100 + 2) = (25 × 100) + (25 × 2) = 2500 + 50 = **2,550**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Calculation Steps using Properties
  // --------------------------------------------------------------------------
  {
    id: 'c6_m2_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Whole Numbers & Number Line',
    concept: 'Rearranging for Easy Calculation',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Put the steps in order to calculate 4 × 166 × 25 using properties of multiplication:',
    visualEmoji: '⚡ Quick Math',
    payload: {
      tokens: [
        'Rearrange: (4 × 25) × 166',
        'Calculate 4 × 25 = 100',
        'Multiply 100 × 166',
        'Final answer = 16,600',
      ],
      scrambled: [
        'Final answer = 16,600',
        'Calculate 4 × 25 = 100',
        'Rearrange: (4 × 25) × 166',
        'Multiply 100 × 166',
      ],
      correctSequence: [
        'Rearrange: (4 × 25) × 166',
        'Calculate 4 × 25 = 100',
        'Multiply 100 × 166',
        'Final answer = 16,600',
      ],
    },
    explanation: '💡 Commutative grouping: Pairing 4 × 25 gives 100, making 100 × 166 = **16,600** instantly without long multiplication!',
    points: 15,
  },
];
