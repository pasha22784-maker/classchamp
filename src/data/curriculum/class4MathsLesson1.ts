import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 1: BUILDING WITH BRICKS (BRICK PATTERNS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 3D Shape and Faces of a Brick (ईंट के फलक)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m1_concept_faces_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Building with Bricks (Brick Patterns)',
    concept: 'Number of Faces on a Brick',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many total flat faces (surfaces) does a real building brick 🧱 have?',
    visualEmoji: '🧱 ➔ ❓ faces',
    payload: {
      options: [
        { id: 'opt_fc1', text: '6 faces', isCorrect: true },
        { id: 'opt_fc2', text: '4 faces', isCorrect: false },
        { id: 'opt_fc3', text: '8 faces', isCorrect: false },
        { id: 'opt_fc4', text: '12 faces', isCorrect: false },
      ],
    },
    explanation: '💡 A brick is a **cuboid** and has exactly **6 flat rectangular faces** (top, bottom, front, back, left, and right)!',
    points: 10,
  },
  {
    id: 'c4_m1_concept_faces_02',
    grade: 4,
    subject: 'maths',
    chapter: 'Building with Bricks (Brick Patterns)',
    concept: 'Shape of a Brick Face',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'If you trace any face of a standard brick on a piece of paper, you get a [BLANK] shape.',
    visualEmoji: '🧱 ➔ 📄 🟦',
    payload: {
      correctAnswer: 'rectangle',
      wordBank: ['rectangle', 'circle', 'triangle', 'oval'],
      displayTemplate: 'Tracing a brick face gives a [BLANK].',
    },
    explanation: '💡 Each flat face of a traditional building brick is a **rectangle**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Edges and Corners of a Brick (किनारे और कोने)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m1_concept_edges_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Building with Bricks (Brick Patterns)',
    concept: 'Edges and Vertices Count',
    difficulty: 'medium',
    type: 'mcq',
    question: 'How many edges (straight sides) and corners (vertices) does a brick have?',
    visualEmoji: '📐 🧱 📍',
    payload: {
      options: [
        { id: 'opt_ed1', text: '12 edges and 8 corners', isCorrect: true },
        { id: 'opt_ed2', text: '8 edges and 12 corners', isCorrect: false },
        { id: 'opt_ed3', text: '6 edges and 6 corners', isCorrect: false },
      ],
    },
    explanation: '💡 Like any cuboid, a brick has **6 faces, 12 edges, and 8 corners**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Wall Strength & Interlocking Patterns
  // --------------------------------------------------------------------------
  {
    id: 'c4_m1_concept_wall_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Building with Bricks (Brick Patterns)',
    concept: 'Strong Brick Wall Bonding',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Why do masons (rajmistri) lay bricks in an overlapping / interlocking pattern instead of one directly on top of another?',
    visualEmoji: '🧱 🏗️ 🧱',
    payload: {
      options: [
        { id: 'opt_wl1', text: 'To make the wall much stronger and prevent it from falling', isCorrect: true },
        { id: 'opt_wl2', text: 'Only to make it look colorful', isCorrect: false },
        { id: 'opt_wl3', text: 'Because bricks cannot fit in a straight vertical line', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Math-Magic: Overlapping vertical joints gives the brick wall structural strength so it does not collapse easily!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Large Numbers in Kilns (1 Lakh = 100,000)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m1_concept_lakh_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Building with Bricks (Brick Patterns)',
    concept: 'Understanding One Lakh',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A brick kiln (भट्ठा) fires 1 Lakh bricks. How many zeros are there in "One Lakh" (1,00,000)?',
    visualEmoji: '🏭 🧱 1️⃣0️⃣0️⃣0️⃣0️⃣0️⃣',
    payload: {
      options: [
        { id: 'opt_lk1', text: '5 zeros', isCorrect: true },
        { id: 'opt_lk2', text: '4 zeros', isCorrect: false },
        { id: 'opt_lk3', text: '6 zeros', isCorrect: false },
      ],
    },
    explanation: '💡 **1 Lakh = 1,00,000** has exactly **5 zeros** (one hundred thousand)!',
    points: 10,
  },
  {
    id: 'c4_m1_concept_cost_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Building with Bricks (Brick Patterns)',
    concept: 'Calculating Cost of Bricks',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'If 1000 fresh bricks cost ₹ 2000, then the cost of 1 brick is ₹ [BLANK].',
    visualEmoji: '🧱 ₹ 2000 ÷ 1000 = ❓',
    payload: {
      correctAnswer: '2',
      wordBank: ['2', '20', '200', '1'],
      displayTemplate: 'Cost of 1 brick = ₹ [BLANK].',
    },
    explanation: '💡 ₹ 2000 ÷ 1000 = **₹ 2 per brick**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Matching Brick Properties & Ordering Pattern Steps
  // --------------------------------------------------------------------------
  {
    id: 'c4_m1_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Building with Bricks (Brick Patterns)',
    concept: 'Brick Geometric Features Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each geometric feature of a brick to its exact number:',
    visualEmoji: '🧱 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'b1_p1', left: 'Total faces (surfaces)', right: '6' },
        { id: 'b1_p2', left: 'Total straight edges', right: '12' },
        { id: 'b1_p3', left: 'Total corner vertices', right: '8' },
        { id: 'b1_p4', left: 'Zeros in 1 Lakh', right: '5' },
      ],
    },
    explanation: '💡 A brick has 6 faces, 12 edges, 8 corners, and 1 Lakh has 5 zeros (100,000)!',
    points: 15,
  },
  {
    id: 'c4_m1_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Building with Bricks (Brick Patterns)',
    concept: 'Process of Making Bricks',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the steps of making bricks in their correct logical order:',
    visualEmoji: '🚜 ➔ 🧱 ➔ 🔥',
    payload: {
      tokens: ['Digging clay from the earth', 'Kneading clay with water', 'Shaping in wooden mould', 'Baking in a hot kiln'],
      scrambled: ['Baking in a hot kiln', 'Digging clay from the earth', 'Shaping in wooden mould', 'Kneading clay with water'],
      correctSequence: ['Digging clay from the earth', 'Kneading clay with water', 'Shaping in wooden mould', 'Baking in a hot kiln'],
    },
    explanation: '💡 Making bricks: Dig clay ➔ Knead with water ➔ Mould into shape ➔ Dry and bake in kiln!',
    points: 15,
  },
];
