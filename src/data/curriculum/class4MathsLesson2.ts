import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 2: LONG AND SHORT (KILOMETERS & METERS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Metric Length Conversions (km, m, cm)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m2_concept_conv_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Long and Short (Kilometers & Meters)',
    concept: 'Meters in a Kilometer',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many meters (m) are there in exactly 1 kilometer (km)?',
    visualEmoji: '🏃 1️⃣ km = ❓ m',
    payload: {
      options: [
        { id: 'opt_km1', text: '1000 meters (1 km = 1000 m)', isCorrect: true },
        { id: 'opt_km2', text: '100 meters', isCorrect: false },
        { id: 'opt_km3', text: '10,000 meters', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **1 Kilometer (km) = 1000 Meters (m)** and **1 Meter (m) = 100 Centimeters (cm)**!',
    points: 10,
  },
  {
    id: 'c4_m2_concept_conv_02',
    grade: 4,
    subject: 'maths',
    chapter: 'Long and Short (Kilometers & Meters)',
    concept: 'Half a Kilometer',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Half a kilometer (1/2 km) is equal to [BLANK] meters.',
    visualEmoji: '🏃 ½ km = ❓ m',
    payload: {
      correctAnswer: '500',
      wordBank: ['500', '250', '100', '750'],
      displayTemplate: 'Half a kilometer = [BLANK] meters.',
    },
    explanation: '💡 Half of 1000 m is **500 meters**!',
    points: 10,
  },
  {
    id: 'c4_m2_concept_conv_03',
    grade: 4,
    subject: 'maths',
    chapter: 'Long and Short (Kilometers & Meters)',
    concept: 'Combining Kilometers and Meters',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Convert into meters: 3 km and 450 m = [BLANK] meters.',
    visualEmoji: '🛣️ 3 km 450 m = ❓ m',
    payload: {
      correctAnswer: '3450',
      wordBank: ['3450', '3045', '345', '750'],
      displayTemplate: '3 km + 450 m = [BLANK] m',
    },
    explanation: '💡 3 km = 3000 m. Adding 450 m gives 3000 + 450 = **3450 meters**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Stadium Track & Marathon Word Problems
  // --------------------------------------------------------------------------
  {
    id: 'c4_m2_concept_track_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Long and Short (Kilometers & Meters)',
    concept: 'Rounds of a Running Track',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A school stadium running track is 400 meters long around.\nHow many full rounds must an athlete run to complete a 2-kilometer race?',
    visualEmoji: '🏟️ Track: 400 m | Goal: 2000 m (2 km)',
    payload: {
      options: [
        { id: 'opt_tr1', text: '5 rounds (5 × 400 m = 2000 m = 2 km)', isCorrect: true },
        { id: 'opt_tr2', text: '4 rounds', isCorrect: false },
        { id: 'opt_tr3', text: '8 rounds', isCorrect: false },
      ],
    },
    explanation: '💡 2 km = 2000 meters. 2000 ÷ 400 = **5 full rounds**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Sports Jump Comparisons (High Jump & Long Jump)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m2_concept_jump_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Long and Short (Kilometers & Meters)',
    concept: 'Difference in High Jump Heights',
    difficulty: 'medium',
    type: 'mcq',
    question: "Javier's high jump record is 2 m 45 cm. Chandra's record is 2 m 17 cm.\nHow much higher did Javier jump?",
    visualEmoji: '🥇 2 m 45 cm  vs  🥈 2 m 17 cm',
    payload: {
      options: [
        { id: 'opt_jp1', text: '28 cm (45 cm - 17 cm = 28 cm)', isCorrect: true },
        { id: 'opt_jp2', text: '32 cm', isCorrect: false },
        { id: 'opt_jp3', text: '18 cm', isCorrect: false },
      ],
    },
    explanation: '💡 Subtract the heights: 2 m 45 cm - 2 m 17 cm = **28 cm higher**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Metric Distance Ordering & Unit Matching
  // --------------------------------------------------------------------------
  {
    id: 'c4_m2_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Long and Short (Kilometers & Meters)',
    concept: 'Ordering Metric Length Units',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange the length units in order from smallest to largest:',
    visualEmoji: '📏 ➔ 📐 ➔ 🛣️',
    payload: {
      tokens: ['Millimeter (mm)', 'Centimeter (cm)', 'Meter (m)', 'Kilometer (km)'],
      scrambled: ['Kilometer (km)', 'Centimeter (cm)', 'Millimeter (mm)', 'Meter (m)'],
      correctSequence: ['Millimeter (mm)', 'Centimeter (cm)', 'Meter (m)', 'Kilometer (km)'],
    },
    explanation: '💡 Length order: **Millimeter < Centimeter < Meter < Kilometer**!',
    points: 15,
  },
  {
    id: 'c4_m2_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Long and Short (Kilometers & Meters)',
    concept: 'Matching Appropriate Measurement Units',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each real-world distance to its most suitable unit of measurement:',
    visualEmoji: '📍 ➔ 📏',
    payload: {
      pairs: [
        { id: 'ls_p1', left: 'Distance between Delhi and Agra', right: 'Kilometers (km)' },
        { id: 'ls_p2', left: 'Length of a classroom chalkboard', right: 'Meters (m)' },
        { id: 'ls_p3', left: 'Length of a brand new crayon', right: 'Centimeters (cm)' },
        { id: 'ls_p4', left: 'Thickness of a coin', right: 'Millimeters (mm)' },
      ],
    },
    explanation: '💡 Cities ➔ km; Chalkboard ➔ m; Crayon ➔ cm; Coin thickness ➔ mm.',
    points: 15,
  },
];
