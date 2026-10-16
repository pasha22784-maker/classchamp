import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 4: LONG AND SHORT (LENGTH & METERS)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Standard Unit Conversion (1 Meter = 100 Centimeters)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m4_concept_conv_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Long and Short (Length & Meters)',
    concept: 'Centimeters in a Meter',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many centimeters (cm) are there in exactly 1 meter (m)?',
    visualEmoji: '📏 1️⃣ m = ❓ cm',
    payload: {
      options: [
        { id: 'opt_cv1_1', text: '100 centimeters (1 m = 100 cm)', isCorrect: true },
        { id: 'opt_cv1_2', text: '10 centimeters', isCorrect: false },
        { id: 'opt_cv1_3', text: '1000 centimeters', isCorrect: false },
      ],
    },
    explanation: '💡 Remember this important rule: **1 Meter = 100 Centimeters (1 m = 100 cm)**!',
    points: 10,
  },
  {
    id: 'c3_m4_concept_conv_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Long and Short (Length & Meters)',
    concept: 'Converting Meters to Centimeters',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A tailor cuts 3 meters of cloth 🧵. In centimeters, this is 3 × 100 = [BLANK] cm.',
    visualEmoji: '🧵 3️⃣ m',
    payload: {
      correctAnswer: '300',
      wordBank: ['300', '30', '3000', '130'],
      displayTemplate: '3 meters = [BLANK] cm',
    },
    explanation: '💡 3 meters = 3 × 100 = **300 cm**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Reading a Ruler Correctly (Starting from Zero)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m4_concept_ruler_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Long and Short (Length & Meters)',
    concept: 'Measuring from Zero Mark',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When measuring the exact length of a crayon with a ruler 📏, at which mark must you align the left edge of the crayon?',
    visualEmoji: '🖍️ 📏 0️⃣',
    payload: {
      options: [
        { id: 'opt_rl1_1', text: 'At the "0" (Zero) mark', isCorrect: true },
        { id: 'opt_rl1_2', text: 'At the "1" mark', isCorrect: false },
        { id: 'opt_rl1_3', text: 'At the very corner of the plastic', isCorrect: false },
      ],
    },
    explanation: '💡 Always start measuring from the **0 (Zero) mark** on the ruler to get the true length!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Kilometers (km) for Long Distances
  // --------------------------------------------------------------------------
  {
    id: 'c3_m4_concept_km_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Long and Short (Length & Meters)',
    concept: 'Kilometer for Road Trips',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The distance between two big cities (like Delhi and Agra 🚗) is measured in which unit?',
    visualEmoji: '🚗 🛣️ 🏙️',
    payload: {
      options: [
        { id: 'opt_km1_1', text: 'Kilometers (km) (1 km = 1000 meters)', isCorrect: true },
        { id: 'opt_km1_2', text: 'Centimeters (cm)', isCorrect: false },
        { id: 'opt_km1_3', text: 'Millimeters (mm)', isCorrect: false },
      ],
    },
    explanation: '💡 Long travel distances on highways and roads are measured in **Kilometers (km)**!',
    points: 10,
  },
  {
    id: 'c3_m4_concept_km_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Long and Short (Length & Meters)',
    concept: 'Meters in a Kilometer',
    difficulty: 'medium',
    type: 'fill_blank',
    question: '1 Kilometer is equal to [BLANK] meters.',
    visualEmoji: '🛣️ 1️⃣ km = ❓ m',
    payload: {
      correctAnswer: '1000',
      wordBank: ['1000', '100', '10', '500'],
      displayTemplate: '1 km = [BLANK] meters',
    },
    explanation: '💡 **1 km = 1000 meters**! 🏃',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Choosing the Appropriate Unit (mm, cm, m, km)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m4_concept_choose_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Long and Short (Length & Meters)',
    concept: 'Unit for Flagpole Height',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which unit is best suited to measure the height of the school flag pole 🚩?',
    visualEmoji: '🚩 🏫',
    payload: {
      options: [
        { id: 'opt_ch1_1', text: 'Meters (m)', isCorrect: true },
        { id: 'opt_ch1_2', text: 'Kilometers (km)', isCorrect: false },
        { id: 'opt_ch1_3', text: 'Millimeters (mm)', isCorrect: false },
      ],
    },
    explanation: '💡 A school flag pole is several meters tall (e.g. 6 meters), so **meters (m)** is the best unit!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Order Units by Size (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m4_concept_order_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Long and Short (Length & Meters)',
    concept: 'Ordering Metric Units of Length',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the metric units of length from SHORTEST to LONGEST:',
    visualEmoji: '📏 📐 🛣️',
    payload: {
      tokens: ['1. Millimeter (mm)', '2. Centimeter (cm)', '3. Meter (m)', '4. Kilometer (km)'],
      scrambled: [
        '3. Meter (m)',
        '1. Millimeter (mm)',
        '4. Kilometer (km)',
        '2. Centimeter (cm)',
      ],
      correctSequence: [
        '1. Millimeter (mm)',
        '2. Centimeter (cm)',
        '3. Meter (m)',
        '4. Kilometer (km)',
      ],
    },
    explanation: '💡 Smallest to largest: **Millimeter < Centimeter < Meter < Kilometer**!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Object to Ideal Unit of Length
  // --------------------------------------------------------------------------
  {
    id: 'c3_m4_concept_match_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Long and Short (Length & Meters)',
    concept: 'Real Object to Length Unit Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each real-world item to the unit used to measure it:',
    visualEmoji: '🐜 ✏️ 🥻 🚆',
    payload: {
      pairs: [
        { id: 'lu_p1', left: 'Length of a tiny ant 🐜', right: 'Millimeter (mm)' },
        { id: 'lu_p2', left: 'Length of a pencil ✏️', right: 'Centimeter (cm)' },
        { id: 'lu_p3', left: 'Length of mother\'s saree 🥻', right: 'Meter (m)' },
        { id: 'lu_p4', left: 'Distance to another town 🛣️', right: 'Kilometer (km)' },
      ],
    },
    explanation: '💡 Ant = mm, Pencil = cm, Saree = m, City distance = km!',
    points: 15,
  },
];
