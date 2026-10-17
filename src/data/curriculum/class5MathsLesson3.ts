import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 3: HOW MANY SQUARES? (AREA & PERIMETER GRIDS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Area of Shapes on Square Grids (वर्ग ग्रिड पर क्षेत्रफल)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m3_concept_stamp_01',
    grade: 5,
    subject: 'maths',
    chapter: 'How Many Squares? (Area & Perimeter Grids)',
    concept: 'Stamp Area on Grid Sheet',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A postage stamp on a 1-cm square grid covers 4 squares in length and 3 squares in width.\nWhat is the area of this stamp?',
    visualEmoji: '💌 4 cm × 3 cm = ❓',
    payload: {
      options: [
        { id: 'opt_st1', text: '12 square cm (4 × 3 = 12 cm²)', isCorrect: true },
        { id: 'opt_st2', text: '7 square cm', isCorrect: false },
        { id: 'opt_st3', text: '14 square cm', isCorrect: false },
      ],
    },
    explanation: '💡 Area = Length × Width = 4 cm × 3 cm = **12 square cm**!',
    points: 10,
  },
  {
    id: 'c5_m3_concept_triangle_01',
    grade: 5,
    subject: 'maths',
    chapter: 'How Many Squares? (Area & Perimeter Grids)',
    concept: 'Area of Triangle Cut in Half',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A rectangle has an area of 20 square cm. If a diagonal divides it into two equal triangles, each triangle has an area of [BLANK] sq cm.',
    visualEmoji: '📐 20 ÷ 2 = ❓',
    payload: {
      correctAnswer: '10',
      wordBank: ['10', '5', '15', '20'],
      displayTemplate: 'Area of each triangle = 20 ÷ 2 = [BLANK] sq cm.',
    },
    explanation: '💡 A diagonal cuts a rectangle into two equal halves: 20 ÷ 2 = **10 square cm**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Counting Rules for Irregular Shapes (Leaves / Footprints)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m3_concept_irreg_01',
    grade: 5,
    subject: 'maths',
    chapter: 'How Many Squares? (Area & Perimeter Grids)',
    concept: 'Grid Counting Rule for Half Squares',
    difficulty: 'medium',
    type: 'mcq',
    question: 'When tracing a footprint 👣 or a leaf 🍃 on a grid, how are squares counted?',
    visualEmoji: '🍃 👣 ⏹️',
    payload: {
      options: [
        { id: 'opt_ir1', text: 'Count full squares as 1, and more than half as 1 (ignore less than half)', isCorrect: true },
        { id: 'opt_ir2', text: 'Count every touched square as 1 regardless of size', isCorrect: false },
        { id: 'opt_ir3', text: 'Only count completely full squares', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Grid Rule: Full squares = 1, squares that are half or more than half = 1, and ignore squares less than half!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Grid Calculations Match & Order
  // --------------------------------------------------------------------------
  {
    id: 'c5_m3_concept_match_01',
    grade: 5,
    subject: 'maths',
    chapter: 'How Many Squares? (Area & Perimeter Grids)',
    concept: 'Grid Area to Formula Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the grid rectangle dimensions with its total area:',
    visualEmoji: '⏹️ ➔ 🎯',
    payload: {
      pairs: [
        { id: 'sq_p1', left: '5 cm by 4 cm rectangle', right: '20 sq cm' },
        { id: 'sq_p2', left: '6 cm by 3 cm rectangle', right: '18 sq cm' },
        { id: 'sq_p3', left: 'Square of 4 cm side', right: '16 sq cm' },
        { id: 'sq_p4', left: '7 cm by 2 cm rectangle', right: '14 sq cm' },
      ],
    },
    explanation: '💡 5×4 = 20; 6×3 = 18; 4×4 = 16; 7×2 = 14.',
    points: 15,
  },
  {
    id: 'c5_m3_concept_order_01',
    grade: 5,
    subject: 'maths',
    chapter: 'How Many Squares? (Area & Perimeter Grids)',
    concept: 'Ascending Area of Postage Stamps',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange these shapes in order from smallest area to largest area:',
    visualEmoji: '🟨 6 cm² ➔ 1️⃣2️⃣ cm² ➔ 1️⃣8️⃣ cm² ➔ 2️⃣4️⃣ cm²',
    payload: {
      tokens: ['Postage stamp (6 sq cm)', 'Passport photo (12 sq cm)', 'Playing card (18 sq cm)', 'Notebook cover (100 sq cm)'],
      scrambled: ['Notebook cover (100 sq cm)', 'Postage stamp (6 sq cm)', 'Playing card (18 sq cm)', 'Passport photo (12 sq cm)'],
      correctSequence: ['Postage stamp (6 sq cm)', 'Passport photo (12 sq cm)', 'Playing card (18 sq cm)', 'Notebook cover (100 sq cm)'],
    },
    explanation: '💡 Area order: Stamp (6) < Photo (12) < Playing card (18) < Notebook cover (100)!',
    points: 15,
  },
];
