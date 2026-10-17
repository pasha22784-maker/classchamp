import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 11: RATIO AND PROPORTION (UNITARY METHOD)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_11_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: What is a Ratio? Simplest Form
  // --------------------------------------------------------------------------
  {
    id: 'c6_m11_concept_ratio_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Ratio and Proportion (Unitary Method)',
    concept: 'Simplest Form of a Ratio',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In a class of 40 students, 24 are girls and 16 are boys.\nWhat is the ratio of girls to boys in simplest form?',
    visualEmoji: '👧👦 24 girls : 16 boys',
    payload: {
      options: [
        { id: 'opt_rt1', text: '3 : 2', isCorrect: true },
        { id: 'opt_rt2', text: '2 : 3', isCorrect: false },
        { id: 'opt_rt3', text: '6 : 4', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A ratio compares two quantities of the same unit. 24/16 simplified by 8 gives **3 : 2**!',
    points: 10,
  },
  {
    id: 'c6_m11_concept_prop_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Ratio and Proportion (Unitary Method)',
    concept: 'Proportion Extreme and Mean Terms',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Four numbers a, b, c, d are in proportion (a : b :: c : d) when Product of Extremes (a × d) equals Product of [BLANK] (b × c).',
    visualEmoji: '⚖️ a : b :: c : d',
    payload: {
      correctAnswer: 'Means',
      wordBank: ['Means', 'Sums', 'Differences', 'Ratios'],
      displayTemplate: 'Product of Extremes = Product of [BLANK].',
    },
    explanation: '💡 In proportion: **Product of Extremes (outer terms) = Product of Means (middle terms)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Unitary Method Problem Solving
  // --------------------------------------------------------------------------
  {
    id: 'c6_m11_concept_unit_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Ratio and Proportion (Unitary Method)',
    concept: 'Unitary Method Price Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each cost problem to its calculated value using the Unitary Method:',
    visualEmoji: '🪙 Unitary Calculations',
    payload: {
      pairs: [
        { id: 'm11_p1', left: 'Cost of 6 pens is ₹60 ➡️ 1 pen costs', right: '₹10 (60 ÷ 6)' },
        { id: 'm11_p2', left: 'Cost of 1 pen is ₹10 ➡️ 8 pens cost', right: '₹80 (10 × 8)' },
        { id: 'm11_p3', left: 'Cost of 5 notebooks is ₹150 ➡️ 1 notebook costs', right: '₹30 (150 ÷ 5)' },
        { id: 'm11_p4', left: 'Cost of 1 notebook is ₹30 ➡️ 4 notebooks cost', right: '₹120 (30 × 4)' },
      ],
    },
    explanation: '💡 Unitary method: 1st step: Divide to find 1 unit cost. 2nd step: Multiply to find target quantity cost!',
    points: 15,
  },
  {
    id: 'c6_m11_concept_unit_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Ratio and Proportion (Unitary Method)',
    concept: 'Distance with Unitary Method',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A car travels 180 km in 3 hours at constant speed.\nHow much distance will it travel in 5 hours?',
    visualEmoji: '🚗 180 km in 3 hours ➡️ 5 hours = ❓',
    payload: {
      options: [
        { id: 'opt_car1', text: '300 km', isCorrect: true },
        { id: 'opt_car2', text: '240 km', isCorrect: false },
        { id: 'opt_car3', text: '360 km', isCorrect: false },
      ],
    },
    explanation: '💡 Step 1: Distance in 1 hour = 180 ÷ 3 = 60 km. Step 2: Distance in 5 hours = 60 × 5 = **300 km**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Steps in Unitary Method
  // --------------------------------------------------------------------------
  {
    id: 'c6_m11_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Ratio and Proportion (Unitary Method)',
    concept: 'Order of Unitary Method Workflow',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the sequence of steps to solve a Unitary Method problem:',
    visualEmoji: '📋 Unitary Method Workflow',
    payload: {
      tokens: [
        '1. Note down the given total quantity and total cost',
        '2. Divide total cost by total quantity to find cost of ONE unit',
        '3. Multiply unit cost by the newly required number of units',
        '4. State the final calculated answer with appropriate units',
      ],
      scrambled: [
        '3. Multiply unit cost by the newly required number of units',
        '1. Note down the given total quantity and total cost',
        '4. State the final calculated answer with appropriate units',
        '2. Divide total cost by total quantity to find cost of ONE unit',
      ],
      correctSequence: [
        '1. Note down the given total quantity and total cost',
        '2. Divide total cost by total quantity to find cost of ONE unit',
        '3. Multiply unit cost by the newly required number of units',
        '4. State the final calculated answer with appropriate units',
      ],
    },
    explanation: '💡 The foundation of the unitary method: Given Many ➡️ Find One (Divide) ➡️ Find Required (Multiply)!',
    points: 15,
  },
];
