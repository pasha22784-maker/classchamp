import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 1: WHERE TO LOOK FROM? (2D VIEWS & SHAPES)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Top View of Everyday 3D Objects (ऊपर से दृश्य)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m1_concept_top_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'Top View of a Railway Train',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When you stand on a high foot over-bridge and look straight down at a railway train 🚆 from the TOP, what shape does it appear as?',
    visualEmoji: '🚆 ⬇️ 📄',
    payload: {
      options: [
        { id: 'opt_tv1_1', text: 'A long rectangle ▭', isCorrect: true },
        { id: 'opt_tv1_2', text: 'A circle ⭕', isCorrect: false },
        { id: 'opt_tv1_3', text: 'A triangle 🔺', isCorrect: false },
      ],
    },
    explanation: '💡 From the top, only the long flat roofs of the train bogies are visible, forming a **long rectangle**!',
    points: 10,
  },
  {
    id: 'c3_m1_concept_top_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'Top View of a Pressure Cooker',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Seen directly from the top, a kitchen pressure cooker looks like a [BLANK] with a sticking handle.',
    visualEmoji: '🍲 ⭕',
    payload: {
      correctAnswer: 'circle',
      wordBank: ['circle', 'square', 'triangle', 'cone'],
      displayTemplate: 'From the top, a pressure cooker looks like a [BLANK] with a handle.',
    },
    explanation: '💡 The lid of a pressure cooker is round, so its top view looks like a **circle** with a handle sticking out!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Side View and Front View
  // --------------------------------------------------------------------------
  {
    id: 'c3_m1_concept_side_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'Side View of a Staircase',
    difficulty: 'easy',
    type: 'mcq',
    question: 'From which viewpoint does a flight of staircase 🪜 look like a zigzag series of stepping blocks?',
    visualEmoji: '🪜 👁️',
    payload: {
      options: [
        { id: 'opt_sv1_1', text: 'Side view', isCorrect: true },
        { id: 'opt_sv1_2', text: 'Top view', isCorrect: false },
        { id: 'opt_sv1_3', text: 'Bottom view', isCorrect: false },
      ],
    },
    explanation: '💡 From the **side view**, the steps go up and across like step blocks!',
    points: 10,
  },
  {
    id: 'c3_m1_concept_front_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'Front View of a Car',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Looking directly at a family car 🚗 from the FRONT, what do you clearly see?',
    visualEmoji: '🚗 👁️',
    payload: {
      options: [
        { id: 'opt_fv1_1', text: 'Two round headlights and the front windshield glass', isCorrect: true },
        { id: 'opt_fv1_2', text: 'The flat roof only', isCorrect: false },
        { id: 'opt_fv1_3', text: 'The back trunk only', isCorrect: false },
      ],
    },
    explanation: '💡 The **front view** shows the front bumper, headlights, and windshield!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Mirror Halves (Line of Symmetry - दर्पण में आधा हिस्सा)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m1_concept_symm_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'Mirror Halves of Letters',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If you place a mirror 🪞 along the dotted vertical line down the middle, which capital letter can be divided into two identical mirror halves?',
    visualEmoji: '🔤 🪞 🅰️',
    payload: {
      options: [
        { id: 'opt_sm1_1', text: 'Letter "A"', isCorrect: true },
        { id: 'opt_sm1_2', text: 'Letter "F"', isCorrect: false },
        { id: 'opt_sm1_3', text: 'Letter "P"', isCorrect: false },
      ],
    },
    explanation: '💡 Letter **A** is symmetrical! A vertical line down the center divides it into two exact mirror halves.',
    points: 10,
  },
  {
    id: 'c3_m1_concept_symm_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'Mirror Halves in Nature',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A beautiful butterfly 🦋 has two identical colorful wings. A vertical line dividing it gives two [BLANK] halves.',
    visualEmoji: '🦋 🪞',
    payload: {
      correctAnswer: 'mirror',
      wordBank: ['mirror', 'crooked', 'different', 'broken'],
      displayTemplate: 'A butterfly can be divided into two [BLANK] halves.',
    },
    explanation: '💡 When the left and right sides match identically, they are **mirror** halves! 🦋',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Asymmetric Objects (Non-Mirror Halves)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m1_concept_asymm_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'Non-Symmetric Teapot',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A tea kettle 🫖 has a spout on one side and a handle on the other. Can it be divided into two identical mirror halves?',
    visualEmoji: '🫖 🪞',
    payload: {
      options: [
        { id: 'opt_as1_1', text: 'No, because one side has a spout and the other has a handle', isCorrect: true },
        { id: 'opt_as1_2', text: 'Yes, always', isCorrect: false },
      ],
    },
    explanation: '💡 Because the spout and handle are on opposite sides, a kettle **cannot** be divided into identical mirror halves!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Dot Grid Rangoli Patterns (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m1_concept_order_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'Rangoli Drawing Order on Dot Grid',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Put these steps in order to draw a symmetric flower rangoli on a dot grid:',
    visualEmoji: '✨ 🌸 📐',
    payload: {
      tokens: [
        '1. Mark the center dot on the grid',
        '2. Connect dots to form inner petals',
        '3. Extend straight lines symmetrically to outer dots',
        '4. Fill vibrant festival colors inside the design',
      ],
      scrambled: [
        '3. Extend straight lines symmetrically to outer dots',
        '1. Mark the center dot on the grid',
        '4. Fill vibrant festival colors inside the design',
        '2. Connect dots to form inner petals',
      ],
      correctSequence: [
        '1. Mark the center dot on the grid',
        '2. Connect dots to form inner petals',
        '3. Extend straight lines symmetrically to outer dots',
        '4. Fill vibrant festival colors inside the design',
      ],
    },
    explanation: '💡 Center dot -> Inner petals -> Outer lines -> Fill colors!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Object to its View
  // --------------------------------------------------------------------------
  {
    id: 'c3_m1_concept_match_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'View Perspective Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each object to how it looks from that specific angle:',
    visualEmoji: '👁️ 📐',
    payload: {
      pairs: [
        { id: 'v_p1', left: 'Study table from TOP 🪑', right: 'Plain flat rectangle' },
        { id: 'v_p2', left: 'Staircase from SIDE 🪜', right: 'Stepping step blocks' },
        { id: 'v_p3', left: 'Bus from SIDE 🚌', right: 'Row of passenger windows' },
        { id: 'v_p4', left: 'Pencil from FRONT tip ✏️', right: 'Circle with a dot center' },
      ],
    },
    explanation: '💡 Different viewpoints show different 2D faces of a 3D object!',
    points: 15,
  },
];
