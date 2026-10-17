import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 2: SHAPES AND ANGLES (ACUTE, RIGHT, OBTUSE)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Right Angle (समकोण - 90°)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m2_concept_right_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Shapes and Angles (Acute, Right, Obtuse)',
    concept: 'Right Angle Measurement',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the exact measure in degrees of a Right Angle (समकोण)?',
    visualEmoji: '📐 ∟ 9️⃣0️⃣°',
    payload: {
      options: [
        { id: 'opt_ra1', text: '90 degrees (90°)', isCorrect: true },
        { id: 'opt_ra2', text: '180 degrees', isCorrect: false },
        { id: 'opt_ra3', text: '45 degrees', isCorrect: false },
      ],
    },
    explanation: '💡 A **Right Angle** forms a perfect "L" shape and measures exactly **90°**!',
    points: 10,
  },
  {
    id: 'c5_m2_concept_right_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Shapes and Angles (Acute, Right, Obtuse)',
    concept: 'Clock Hands Right Angle',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'When a clock shows exactly [BLANK]:00 o’clock, the minute hand and hour hand form an exact right angle (90°).',
    visualEmoji: '🕒 3️⃣:0️⃣0️⃣',
    payload: {
      correctAnswer: '3',
      wordBank: ['3', '6', '12', '1'],
      displayTemplate: 'At [BLANK]:00 o’clock, hands make a right angle.',
    },
    explanation: '💡 At **3:00** (and also 9:00), the clock hands form an exact **90° right angle**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Acute vs Obtuse Angles (न्यून कोण व अधिक कोण)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m2_concept_acute_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Shapes and Angles (Acute, Right, Obtuse)',
    concept: 'Definition of Acute Angle',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is an angle measuring LESS than 90° (less than a right angle) called?',
    visualEmoji: '📐 🗜️ < 90°',
    payload: {
      options: [
        { id: 'opt_ac1', text: 'Acute Angle (न्यून कोण - less than 90°)', isCorrect: true },
        { id: 'opt_ac2', text: 'Obtuse Angle (अधिक कोण)', isCorrect: false },
        { id: 'opt_ac3', text: 'Straight Angle (ऋजु कोण)', isCorrect: false },
      ],
    },
    explanation: '💡 An angle smaller than 90° is an **Acute Angle**! An angle larger than 90° is an **Obtuse Angle**.',
    points: 10,
  },
  {
    id: 'c5_m2_concept_obtuse_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Shapes and Angles (Acute, Right, Obtuse)',
    concept: 'Clock Hands at 5:00',
    difficulty: 'medium',
    type: 'mcq',
    question: 'When the wall clock shows 5:00 o’clock 🕔, what kind of angle is formed between the hands?',
    visualEmoji: '🕔',
    payload: {
      options: [
        { id: 'opt_ob1', text: 'Obtuse Angle (More than a right angle: 150°)', isCorrect: true },
        { id: 'opt_ob2', text: 'Acute Angle (Less than a right angle)', isCorrect: false },
        { id: 'opt_ob3', text: 'Right Angle (Exactly 90°)', isCorrect: false },
      ],
    },
    explanation: '💡 At 5:00, the hands are wide apart (150°), which is greater than 90°: an **Obtuse Angle**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Angle Matching & Degree Ordering
  // --------------------------------------------------------------------------
  {
    id: 'c5_m2_concept_match_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Shapes and Angles (Acute, Right, Obtuse)',
    concept: 'Angle Type Degree Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each angle type with its exact degree description:',
    visualEmoji: '📐 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'sa_p1', left: 'Acute Angle', right: 'Between 0° and 90°' },
        { id: 'sa_p2', left: 'Right Angle', right: 'Exactly 90°' },
        { id: 'sa_p3', left: 'Obtuse Angle', right: 'Between 90° and 180°' },
        { id: 'sa_p4', left: 'Straight Angle', right: 'Exactly 180°' },
      ],
    },
    explanation: '💡 Acute < 90°; Right = 90°; Obtuse > 90° & < 180°; Straight = 180°.',
    points: 15,
  },
  {
    id: 'c5_m2_concept_order_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Shapes and Angles (Acute, Right, Obtuse)',
    concept: 'Order Angles by Size',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange the angles in order from smallest opening to largest opening:',
    visualEmoji: '📐 3️⃣0️⃣° ➔ 9️⃣0️⃣° ➔ 1️⃣2️⃣0️⃣° ➔ 1️⃣8️⃣0️⃣°',
    payload: {
      tokens: ['Acute Angle (45°)', 'Right Angle (90°)', 'Obtuse Angle (120°)', 'Straight Angle (180°)'],
      scrambled: ['Straight Angle (180°)', 'Acute Angle (45°)', 'Obtuse Angle (120°)', 'Right Angle (90°)'],
      correctSequence: ['Acute Angle (45°)', 'Right Angle (90°)', 'Obtuse Angle (120°)', 'Straight Angle (180°)'],
    },
    explanation: '💡 Angle size order: **Acute (45°) < Right (90°) < Obtuse (120°) < Straight (180°)**!',
    points: 15,
  },
];
