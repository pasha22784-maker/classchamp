import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 10: FIELDS AND FENCES (PERIMETER & AREA)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_10_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Concept of Boundary / Perimeter (परिमाप / सीमा)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m10_concept_perim_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Fields and Fences (Perimeter & Area)',
    concept: 'Definition of Perimeter',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the total length of the outer boundary around a flat closed shape called?',
    visualEmoji: '🌾 🔲 ➔ ❓',
    payload: {
      options: [
        { id: 'opt_pm1', text: 'Perimeter', isCorrect: true },
        { id: 'opt_pm2', text: 'Volume', isCorrect: false },
        { id: 'opt_pm3', text: 'Radius', isCorrect: false },
      ],
    },
    explanation: '💡 The distance all the way around the outside edge of a shape is its **Perimeter** (घेरा / सीमा की लंबाई)!',
    points: 10,
  },
  {
    id: 'c4_m10_concept_perim_02',
    grade: 4,
    subject: 'maths',
    chapter: 'Fields and Fences (Perimeter & Area)',
    concept: 'Perimeter of a Square',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A square playground has each side measuring 20 meters. Its total perimeter is [BLANK] meters.',
    visualEmoji: '⏹️ 20 m + 20 m + 20 m + 20 m = ❓',
    payload: {
      correctAnswer: '80',
      wordBank: ['80', '40', '60', '100'],
      displayTemplate: 'Perimeter of square = 4 × 20 = [BLANK] m.',
    },
    explanation: '💡 A square has 4 equal sides: 4 × 20 m = **80 meters**!',
    points: 10,
  },
  {
    id: 'c4_m10_concept_perim_03',
    grade: 4,
    subject: 'maths',
    chapter: 'Fields and Fences (Perimeter & Area)',
    concept: 'Perimeter of a Rectangle',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A farmer’s vegetable garden 🥕 is 15 meters long and 10 meters wide.\nHow much wire fence is needed to enclose it completely?',
    visualEmoji: '🌾 15 m × 10 m ➔ Wire fence = ❓',
    payload: {
      options: [
        { id: 'opt_rec1', text: '50 meters', isCorrect: true },
        { id: 'opt_rec2', text: '25 meters', isCorrect: false },
        { id: 'opt_rec3', text: '150 meters', isCorrect: false },
      ],
    },
    explanation: '💡 Rectangle perimeter = 2 × (Length + Breadth) = 2 × (15 + 10) = 2 × 25 = **50 meters**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Area by Counting Square Grids (क्षेत्रफल)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m10_concept_area_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Fields and Fences (Perimeter & Area)',
    concept: 'Counting Grid Squares for Area',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A postage stamp covers 6 square squares of 1 cm each on a grid sheet. Its area is [BLANK] sq cm.',
    visualEmoji: '🟨🟨🟨\n🟨🟨🟨 (6 grid squares)',
    payload: {
      correctAnswer: '6',
      wordBank: ['6', '12', '8', '4'],
      displayTemplate: 'Area = [BLANK] square cm.',
    },
    explanation: '💡 If a shape covers 6 unit squares, its area is exactly **6 square cm**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Matching Shape Perimeters & Ordering Boundaries
  // --------------------------------------------------------------------------
  {
    id: 'c4_m10_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Fields and Fences (Perimeter & Area)',
    concept: 'Calculate Shape Perimeters Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each geometric shape with its exact perimeter length:',
    visualEmoji: '📐 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'ff_p1', left: 'Square of side 5 cm', right: '20 cm (4 × 5)' },
        { id: 'ff_p2', left: 'Triangle with sides 4cm, 5cm, 6cm', right: '15 cm (4+5+6)' },
        { id: 'ff_p3', left: 'Rectangle of 8 cm by 3 cm', right: '22 cm (2×11)' },
        { id: 'ff_p4', left: 'Square of side 10 cm', right: '40 cm (4 × 10)' },
      ],
    },
    explanation: '💡 Square (side 5) = 20; Triangle = 15; Rectangle (8×3) = 22; Square (side 10) = 40.',
    points: 15,
  },
  {
    id: 'c4_m10_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Fields and Fences (Perimeter & Area)',
    concept: 'Order Shapes by Boundary Length',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the fields in order from shortest boundary fence to longest boundary fence:',
    visualEmoji: '🌾 1️⃣5️⃣m ➔ 2️⃣0️⃣m ➔ 3️⃣0️⃣m ➔ 5️⃣0️⃣m',
    payload: {
      tokens: ['Flower bed fence (12 m)', 'Vegetable plot fence (24 m)', 'Cricket pitch boundary (48 m)', 'School field boundary (200 m)'],
      scrambled: ['School field boundary (200 m)', 'Flower bed fence (12 m)', 'Cricket pitch boundary (48 m)', 'Vegetable plot fence (24 m)'],
      correctSequence: ['Flower bed fence (12 m)', 'Vegetable plot fence (24 m)', 'Cricket pitch boundary (48 m)', 'School field boundary (200 m)'],
    },
    explanation: '💡 Boundary length order: 12 m < 24 m < 48 m < 200 m!',
    points: 15,
  },
];
