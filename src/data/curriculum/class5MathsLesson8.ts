import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 8: AREA AND ITS BOUNDARY (FORMULAS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_8_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Perimeter (Boundary Length) Formulas
  // --------------------------------------------------------------------------
  {
    id: 'c5_m8_concept_peri_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Area and its Boundary (Formulas)',
    concept: 'Perimeter of a Rectangle',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A garden plot has a length of 12 meters and a breadth of 8 meters.\nWhat is its boundary length (perimeter)?',
    visualEmoji: '🏡 Length = 12m, Breadth = 8m',
    payload: {
      options: [
        { id: 'opt_p1', text: '40 m = 2 × 20 = 40 m)', isCorrect: true },
        { id: 'opt_p2', text: '96 m', isCorrect: false },
        { id: 'opt_p3', text: '20 m', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **Perimeter of a Rectangle = 2 × (Length + Breadth)** = 2 × (12 + 8) = **40 m**!',
    points: 10,
  },
  {
    id: 'c5_m8_concept_peri_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Area and its Boundary (Formulas)',
    concept: 'Perimeter of a Square',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A square field has sides of length 15 meters. The length of wire needed for one round of fencing is [BLANK] meters.',
    visualEmoji: '🟩 Side = 15m × 4 sides',
    payload: {
      correctAnswer: '60',
      wordBank: ['60', '30', '225', '45'],
      displayTemplate: 'Fencing wire required = [BLANK] meters.',
    },
    explanation: '💡 **Perimeter of Square = 4 × Side** = 4 × 15 = **60 meters**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Area Formulas (क्षेत्रफल)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m8_concept_area_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Area and its Boundary (Formulas)',
    concept: 'Area of Rectangle and Square Formulas',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each shape dimension with its calculated area:',
    visualEmoji: '📐 Area Formulas Match',
    payload: {
      pairs: [
        { id: 'm8_p1', left: 'Square of side 6 cm', right: '36 sq cm (6 × 6)' },
        { id: 'm8_p2', left: 'Rectangle 10 cm by 4 cm', right: '40 sq cm (10 × 4)' },
        { id: 'm8_p3', left: 'Square of side 9 cm', right: '81 sq cm (9 × 9)' },
        { id: 'm8_p4', left: 'Rectangle 7 cm by 5 cm', right: '35 sq cm (7 × 5)' },
      ],
    },
    explanation: '💡 Area of Rectangle = **Length × Breadth**. Area of Square = **Side × Side**!',
    points: 15,
  },
  {
    id: 'c5_m8_concept_area_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Area and its Boundary (Formulas)',
    concept: 'Comparing Area vs Perimeter',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Two carpets both have a perimeter of 24 meters.\nCarpet A is 6m × 6m (square).\nCarpet B is 8m × 4m (rectangle).\nWhich carpet has a larger area?',
    visualEmoji: '🧶 Carpet A (6×6) vs Carpet B (8×4)',
    payload: {
      options: [
        { id: 'opt_cmp1', text: 'Carpet A', isCorrect: true },
        { id: 'opt_cmp2', text: 'Carpet B', isCorrect: false },
        { id: 'opt_cmp3', text: 'Both have the exact same area', isCorrect: false },
      ],
    },
    explanation: '💡 Square Area = 6 × 6 = 36 sq m. Rectangle Area = 8 × 4 = 32 sq m. For a given perimeter, a square encloses the greatest area!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Fencing Cost & Step-by-Step Problem Solving
  // --------------------------------------------------------------------------
  {
    id: 'c5_m8_concept_cost_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Area and its Boundary (Formulas)',
    concept: 'Cost of Fencing Calculation',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Put the steps in the correct order to find the cost of fencing a rectangular park (length 20m, width 10m) at ₹5 per meter:',
    visualEmoji: '🚧 Fence Steps',
    payload: {
      tokens: [
        'Find Length + Width = 20 + 10 = 30m',
        'Find Perimeter = 2 × 30 = 60m',
        'Multiply Perimeter by rate = 60 × ₹5',
        'Total Cost = ₹300',
      ],
      scrambled: [
        'Total Cost = ₹300',
        'Find Length + Width = 20 + 10 = 30m',
        'Multiply Perimeter by rate = 60 × ₹5',
        'Find Perimeter = 2 × 30 = 60m',
      ],
      correctSequence: [
        'Find Length + Width = 20 + 10 = 30m',
        'Find Perimeter = 2 × 30 = 60m',
        'Multiply Perimeter by rate = 60 × ₹5',
        'Total Cost = ₹300',
      ],
    },
    explanation: '💡 Step 1: L + B = 30m. Step 2: Perimeter = 2 × 30 = 60m. Step 3: 60 × ₹5 = ₹300!',
    points: 15,
  },
];
