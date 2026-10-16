import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 MATHEMATICS (JOYFUL MATHEMATICS 2)
// CHAPTER 7: RANI'S GIFT (MEASUREMENT & LENGTH)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_MATHS_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Non-Standard Body Units: Handspan and Paces (बित्ता व कदम)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m7_concept_hand_01',
    grade: 2,
    subject: 'maths',
    chapter: "Rani's Gift (Measurement & Length)",
    concept: 'Handspan Measurement',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When Rani measures the length of her school table using her stretched hand from thumb to little finger, what body unit is she using?',
    visualEmoji: '🖐️ 📏',
    payload: {
      options: [
        { id: 'opt_hs1_1', text: 'Handspan (बित्ता)', isCorrect: true },
        { id: 'opt_hs1_2', text: 'Footstep (कदम)', isCorrect: false },
        { id: 'opt_hs1_3', text: 'Kilogram', isCorrect: false },
      ],
    },
    explanation: '💡 The distance between the tip of the thumb and little finger of an outstretched hand is called a **Handspan (बित्ता)**!',
    points: 10,
  },
  {
    id: 'c2_m7_concept_hand_02',
    grade: 2,
    subject: 'maths',
    chapter: "Rani's Gift (Measurement & Length)",
    concept: 'Paces for Measuring Playground',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'To measure the length of the school cricket pitch or corridor, children walk and count their [BLANK].',
    visualEmoji: '🚶 🦶',
    payload: {
      correctAnswer: 'paces',
      wordBank: ['paces', 'fingers', 'rulers', 'hours'],
      displayTemplate: 'Children count their walking [BLANK] (कदम).',
    },
    explanation: '💡 For long floor distances, we count our walking steps or **paces (कदम)**! 🚶',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Why Handspans Differ (Standard Units)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m7_concept_diff_01',
    grade: 2,
    subject: 'maths',
    chapter: "Rani's Gift (Measurement & Length)",
    concept: 'Difference in Handspan Sizes',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Rani measures the teacher\'s table: Rani counts 10 handspans, but her teacher counts only 6 handspans for the same table. Why?',
    visualEmoji: '👩‍🏫🖐️ vs 👧🖐️',
    payload: {
      options: [
        { id: 'opt_hd1_1', text: 'Teacher\'s hand is bigger, so she needs fewer handspans', isCorrect: true },
        { id: 'opt_hd1_2', text: 'The table shrank', isCorrect: false },
        { id: 'opt_hd1_3', text: 'The teacher measured wrong', isCorrect: false },
      ],
    },
    explanation: '💡 Different people have different hand sizes! That is why we use a standard **ruler or measuring tape** with meters and centimeters.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Centimeters (cm) for Small Objects
  // --------------------------------------------------------------------------
  {
    id: 'c2_m7_concept_cm_01',
    grade: 2,
    subject: 'maths',
    chapter: "Rani's Gift (Measurement & Length)",
    concept: 'Centimeter Unit for Small Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of these small school objects is measured using a 15-centimeter plastic ruler 📏?',
    visualEmoji: '📏 ✏️ 🧼',
    payload: {
      options: [
        { id: 'opt_cm1_1', text: 'A drawing pencil and eraser (in Centimeters - cm) ✏️', isCorrect: true },
        { id: 'opt_cm1_2', text: 'The road from Delhi to Mumbai', isCorrect: false },
        { id: 'opt_cm1_3', text: 'A two-story school building', isCorrect: false },
      ],
    },
    explanation: '💡 Small objects like pencils ✏️, erasers, and keys are measured in **centimeters (cm)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Meters (m) for Large Objects
  // --------------------------------------------------------------------------
  {
    id: 'c2_m7_concept_m_01',
    grade: 2,
    subject: 'maths',
    chapter: "Rani's Gift (Measurement & Length)",
    concept: 'Meter Unit for Large Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Mother buys a long traditional cotton saree 🥻 at the cloth store. How is cloth length measured?',
    visualEmoji: '🥻 📏',
    payload: {
      options: [
        { id: 'opt_mt1_1', text: 'In Meters (m) (like 5 meters saree)', isCorrect: true },
        { id: 'opt_mt1_2', text: 'In Centimeters only (5 cm is tiny)', isCorrect: false },
        { id: 'opt_mt1_3', text: 'In Minutes', isCorrect: false },
      ],
    },
    explanation: '💡 Long lengths of cloth, walls, and rooms are measured in **meters (m)**! 1 meter = 100 cm.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Choosing Centimeter (cm) vs Meter (m)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m7_concept_choose_01',
    grade: 2,
    subject: 'maths',
    chapter: "Rani's Gift (Measurement & Length)",
    concept: 'Choosing Correct Unit',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'The height of a tall sugarcane stalk in the farm is about 2 [BLANK].',
    visualEmoji: '🎋 📐',
    payload: {
      correctAnswer: 'meters',
      wordBank: ['meters', 'centimeters', 'grams', 'litres'],
      displayTemplate: 'The sugarcane stalk is about 2 [BLANK] tall.',
    },
    explanation: '💡 A person or tall sugarcane is measured in **meters (m)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Order Objects from Shortest to Longest (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m7_concept_order_01',
    grade: 2,
    subject: 'maths',
    chapter: "Rani's Gift (Measurement & Length)",
    concept: 'Length Order Sequence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these objects from SHORTEST to LONGEST:',
    visualEmoji: '📏 🧼 ✏️ 🏏 🚆',
    payload: {
      tokens: ['Small Eraser 🧼', 'Writing Pencil ✏️', 'Cricket Bat 🏏', 'Railway Train 🚆'],
      scrambled: ['Cricket Bat 🏏', 'Small Eraser 🧼', 'Railway Train 🚆', 'Writing Pencil ✏️'],
      correctSequence: ['Small Eraser 🧼', 'Writing Pencil ✏️', 'Cricket Bat 🏏', 'Railway Train 🚆'],
    },
    explanation: '💡 Shortest to longest: Eraser (3 cm) < Pencil (15 cm) < Bat (80 cm) < Train (hundreds of meters)!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match Object to Ideal Measurement Unit
  // --------------------------------------------------------------------------
  {
    id: 'c2_m7_concept_match_01',
    grade: 2,
    subject: 'maths',
    chapter: "Rani's Gift (Measurement & Length)",
    concept: 'Unit Selection Match Pairs',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each item to the best unit for measuring its length:',
    visualEmoji: '📏 🏷️',
    payload: {
      pairs: [
        { id: 'u_p1', left: 'Length of a leaf 🍃', right: 'Centimeters (cm)' },
        { id: 'u_p2', left: 'Length of classroom 🏫', right: 'Meters (m)' },
        { id: 'u_p3', left: 'Thickness of coin 🪙', right: 'Millimeters (mm)' },
        { id: 'u_p4', left: 'Length of skipping rope 🪢', right: 'Meters (m)' },
      ],
    },
    explanation: '💡 Small objects take cm/mm; large ropes and rooms take meters (m)!',
    points: 15,
  },
];
