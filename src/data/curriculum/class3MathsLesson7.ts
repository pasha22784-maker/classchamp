import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 7: WHO IS HEAVIER? (KILOGRAMS & GRAMS)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Kilograms and Grams Conversion (1 kg = 1000 g)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m7_concept_conv_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Who is Heavier? (Kilograms & Grams)',
    concept: 'Grams in a Kilogram',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many grams (g) make exactly 1 kilogram (kg)?',
    visualEmoji: '⚖️ 1️⃣ kg = ❓ g',
    payload: {
      options: [
        { id: 'opt_kg1_1', text: '1000 grams', isCorrect: true },
        { id: 'opt_kg1_2', text: '100 grams', isCorrect: false },
        { id: 'opt_kg1_3', text: '10 grams', isCorrect: false },
      ],
    },
    explanation: '💡 Remember this weight rule: **1 Kilogram (kg) = 1000 Grams (g)**!',
    points: 10,
  },
  {
    id: 'c3_m7_concept_conv_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Who is Heavier? (Kilograms & Grams)',
    concept: 'Half Kilogram in Grams',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Half a kilogram (1/2 kg) of fresh butter 🧈 is equal to [BLANK] grams.',
    visualEmoji: '🧈 ½ kg = ❓ g',
    payload: {
      correctAnswer: '500',
      wordBank: ['500', '250', '100', '750'],
      displayTemplate: 'Half a kilogram = [BLANK] grams.',
    },
    explanation: '💡 Half of 1000 is **500 grams**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Reading a Two-Pan Balance Scale ⚖️ (तराज़ू)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m7_concept_scale_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Who is Heavier? (Kilograms & Grams)',
    concept: 'Balance Scale Pan Movement',
    difficulty: 'easy',
    type: 'mcq',
    question: 'On a vegetable seller\'s balance scale ⚖️, a big pumpkin 🎃 is on pan A and a small tomato 🍅 is on pan B. Which pan goes DOWN?',
    visualEmoji: '⚖️ 🎃 vs 🍅',
    payload: {
      options: [
        { id: 'opt_sc1_1', text: 'Pan A with the pumpkin', isCorrect: true },
        { id: 'opt_sc1_2', text: 'Pan B with the tomato', isCorrect: false },
        { id: 'opt_sc1_3', text: 'Both stay exactly level', isCorrect: false },
      ],
    },
    explanation: '💡 On a balance scale, gravity pulls the **heavier pan DOWN** while the lighter side tilts UP! ⚖️',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Choosing Between Grams (g) and Kilograms (kg)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m7_concept_choose_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Who is Heavier? (Kilograms & Grams)',
    concept: 'Sack of Wheat Flour Unit',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A heavy family sack of wheat flour (atta) 🌾 is measured in which unit?',
    visualEmoji: '🌾 ⚖️ 🏋️',
    payload: {
      options: [
        { id: 'opt_ch1_1', text: 'Kilograms', isCorrect: true },
        { id: 'opt_ch1_2', text: 'Grams', isCorrect: false },
        { id: 'opt_ch1_3', text: 'Milliliters', isCorrect: false },
      ],
    },
    explanation: '💡 Heavy grocery items like sacks of wheat and rice are measured in **Kilograms (kg)**!',
    points: 10,
  },
  {
    id: 'c3_m7_concept_choose_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Who is Heavier? (Kilograms & Grams)',
    concept: 'Pencil Weight in Grams',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A single writing pencil ✏️ weighs about 10 [BLANK].',
    visualEmoji: '✏️ ⚖️',
    payload: {
      correctAnswer: 'grams',
      wordBank: ['grams', 'kilograms', 'litres', 'meters'],
      displayTemplate: 'A pencil weighs about 10 [BLANK].',
    },
    explanation: '💡 Light objects are weighed in **grams (g)**! ✏️',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Order Objects from Lightest to Heaviest (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m7_concept_order_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Who is Heavier? (Kilograms & Grams)',
    concept: 'Weight Sequence from Lightest to Heaviest',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these items in order from LIGHTEST to HEAVIEST:',
    visualEmoji: '🪶 🍎 🍉 🐘',
    payload: {
      tokens: ['Bird Feather (1 g) 🪶', 'Apple (150 g) 🍎', 'Watermelon (5 kg) 🍉', 'Elephant (4000 kg) 🐘'],
      scrambled: [
        'Watermelon (5 kg) 🍉',
        'Bird Feather (1 g) 🪶',
        'Elephant (4000 kg) 🐘',
        'Apple (150 g) 🍎',
      ],
      correctSequence: [
        'Bird Feather (1 g) 🪶',
        'Apple (150 g) 🍎',
        'Watermelon (5 kg) 🍉',
        'Elephant (4000 kg) 🐘',
      ],
    },
    explanation: '💡 Lightest to heaviest: **Feather < Apple < Watermelon < Elephant**!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Match Object to Typical Weight
  // --------------------------------------------------------------------------
  {
    id: 'c3_m7_concept_match_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Who is Heavier? (Kilograms & Grams)',
    concept: 'Object to Weight Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each item to its typical weight category:',
    visualEmoji: '⚖️ 🎯',
    payload: {
      pairs: [
        { id: 'wt_p1', left: 'Packet of potato chips 🥔', right: '50 grams (g)' },
        { id: 'wt_p2', left: 'School child\'s backpack 🎒', right: '3 kilograms (kg)' },
        { id: 'wt_p3', left: 'Gold ring 💍', right: '5 grams (g)' },
        { id: 'wt_p4', left: 'Adult cow 🐄', right: '400 kilograms (kg)' },
      ],
    },
    explanation: '💡 Small snacks and rings = grams; backpacks and animals = kilograms!',
    points: 15,
  },
];
