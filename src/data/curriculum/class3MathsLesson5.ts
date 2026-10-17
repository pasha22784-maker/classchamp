import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 5: SHAPES AND DESIGNS (TANGRAMS & EDGES)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Edges and Corners of Shapes (किनारे और कोने)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m5_concept_edges_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Shapes and Designs (Tangrams & Edges)',
    concept: 'Corners of a Circle',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many corners does a smooth circular bangle or wheel ⭕ have?',
    visualEmoji: '⭕ 🛞',
    payload: {
      options: [
        { id: 'opt_ed1_1', text: '0 corners', isCorrect: true },
        { id: 'opt_ed1_2', text: '1 corner', isCorrect: false },
        { id: 'opt_ed1_3', text: '4 corners', isCorrect: false },
      ],
    },
    explanation: '💡 A circle has a round curved boundary and **ZERO corners**!',
    points: 10,
  },
  {
    id: 'c3_m5_concept_edges_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Shapes and Designs (Tangrams & Edges)',
    concept: 'Corners of a Triangle',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A crunchy samosa or triangle 🔺 has [BLANK] straight edges and 3 corners.',
    visualEmoji: '🔺 🥟',
    payload: {
      correctAnswer: '3',
      wordBank: ['3', '4', '2', '0'],
      displayTemplate: 'A triangle has [BLANK] straight edges.',
    },
    explanation: '💡 A triangle has **3 straight edges and 3 corners**! 🔺',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: The Tangram Puzzle (7-Piece Chinese Puzzle)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m5_concept_tangram_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Shapes and Designs (Tangrams & Edges)',
    concept: 'Pieces in a Traditional Tangram',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The traditional ancient geometric puzzle "Tangram" is cut into how many geometric pieces?',
    visualEmoji: '🧩 📐 🟩',
    payload: {
      options: [
        { id: 'opt_tg1_1', text: '7 pieces', isCorrect: true },
        { id: 'opt_tg1_2', text: '12 pieces', isCorrect: false },
        { id: 'opt_tg1_3', text: '3 pieces', isCorrect: false },
      ],
    },
    explanation: '💡 The classic Tangram has **7 pieces**: 5 triangles of different sizes, 1 square, and 1 parallelogram!',
    points: 10,
  },
  {
    id: 'c3_m5_concept_tangram_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Shapes and Designs (Tangrams & Edges)',
    concept: 'Shapes inside a 5-piece Tangram',
    difficulty: 'medium',
    type: 'mcq',
    question: 'In a 5-piece tangram, which shape is the MOST common?',
    visualEmoji: '🔺 🧩',
    payload: {
      options: [
        { id: 'opt_tg2_1', text: 'Triangles 🔺', isCorrect: true },
        { id: 'opt_tg2_2', text: 'Circles ⭕', isCorrect: false },
        { id: 'opt_tg2_3', text: 'Stars ⭐', isCorrect: false },
      ],
    },
    explanation: '💡 Both 5-piece and 7-piece tangrams are mostly made of **triangles**! 🔺',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Tiling Patterns (Tessellations without Gaps)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m5_concept_tiling_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Shapes and Designs (Tangrams & Edges)',
    concept: 'Tiling Floor Without Gaps',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which shape fits together perfectly on bathroom and kitchen floors WITHOUT leaving any empty gaps?',
    visualEmoji: '🧱 ⏹️ ⭕',
    payload: {
      options: [
        { id: 'opt_tl1_1', text: 'Squares and Rectangles ⏹️', isCorrect: true },
        { id: 'opt_tl1_2', text: 'Circles ⭕', isCorrect: false },
      ],
    },
    explanation: '💡 Squares and rectangles fit edge-to-edge seamlessly without gaps. Circles leave gaps when placed side-by-side!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Order Tangram Pieces by Size (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m5_concept_order_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Shapes and Designs (Tangrams & Edges)',
    concept: 'Ordering Tangram Triangles by Size',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the three sizes of triangles in a 7-piece tangram from SMALLEST to LARGEST:',
    visualEmoji: '🔺 📐',
    payload: {
      tokens: ['2 Small Triangles', '1 Medium Triangle', '2 Big Triangles'],
      scrambled: ['2 Big Triangles', '2 Small Triangles', '1 Medium Triangle'],
      correctSequence: ['2 Small Triangles', '1 Medium Triangle', '2 Big Triangles'],
    },
    explanation: '💡 From smallest to largest: **Small Triangles < Medium Triangle < Big Triangles**!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Match Shapes to Number of Corners
  // --------------------------------------------------------------------------
  {
    id: 'c3_m5_concept_match_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Shapes and Designs (Tangrams & Edges)',
    concept: 'Shape to Corners Count Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each 2D shape to its number of corners:',
    visualEmoji: '📐 🎯',
    payload: {
      pairs: [
        { id: 'sh_p1', left: 'Triangle 🔺', right: '3 corners' },
        { id: 'sh_p2', left: 'Square ⏹️', right: '4 corners' },
        { id: 'sh_p3', left: 'Rectangle ▭', right: '4 corners' },
        { id: 'sh_p4', left: 'Circle ⭕', right: '0 corners' },
      ],
    },
    explanation: '💡 Triangle = 3 corners, Square = 4 corners, Rectangle = 4 corners, Circle = 0 corners!',
    points: 15,
  },
];
