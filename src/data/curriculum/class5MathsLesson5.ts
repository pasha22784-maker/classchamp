import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 5: DOES IT LOOK THE SAME? (SYMMETRY & ROTATIONS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Half-Turn (1/2 Turn / 180° Rotation)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m5_concept_half_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Does it Look the Same? (Symmetry & Rotations)',
    concept: 'Letters that Look Same on Half Turn',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which English alphabet letter looks EXACTLY the same after a half-turn (1/2 turn upside down)?',
    visualEmoji: '🔤 🔃 180°',
    payload: {
      options: [
        { id: 'opt_ht1', text: 'Letter "H"', isCorrect: true },
        { id: 'opt_ht2', text: 'Letter "A"', isCorrect: false },
        { id: 'opt_ht3', text: 'Letter "T"', isCorrect: false },
      ],
    },
    explanation: '💡 When you flip **H, I, N, O, S, X, Z** by a half-turn (180°), they look identical to their original shape!',
    points: 10,
  },
  {
    id: 'c5_m5_concept_half_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Does it Look the Same? (Symmetry & Rotations)',
    concept: 'Numbers with Half-Turn Symmetry',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Among single-digit numbers, 0 and [BLANK] look the same after a half-turn.',
    visualEmoji: '0️⃣ 🔃 8️⃣',
    payload: {
      correctAnswer: '8',
      wordBank: ['8', '6', '7', '4'],
      displayTemplate: 'Number 0 and [BLANK] look the same.',
    },
    explanation: '💡 **0** and **8** have half-turn symmetry!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Quarter-Turn (1/4 Turn / 90° Rotation) & Blade Fans
  // --------------------------------------------------------------------------
  {
    id: 'c5_m5_concept_quart_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Does it Look the Same? (Symmetry & Rotations)',
    concept: 'Shapes with Quarter Turn Symmetry',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which geometric shape looks identical after every quarter-turn (1/4 turn / 90°)?',
    visualEmoji: '⏹️ 🔄 90°',
    payload: {
      options: [
        { id: 'opt_qt1', text: 'A Square', isCorrect: true },
        { id: 'opt_qt2', text: 'A Rectangle', isCorrect: false },
        { id: 'opt_qt3', text: 'An Oval', isCorrect: false },
      ],
    },
    explanation: '💡 A **Square** has 4-fold rotational symmetry and looks the same after every 90° (quarter) turn!',
    points: 10,
  },
  {
    id: 'c5_m5_concept_fan_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Does it Look the Same? (Symmetry & Rotations)',
    concept: 'One-Third Turn of a 3-Blade Fan',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A 3-blade ceiling fan 🪭 looks exactly the same after a 1 / [BLANK] turn.',
    visualEmoji: '🪭 3 blades ➔ ⅓ turn',
    payload: {
      correctAnswer: '3',
      wordBank: ['3', '2', '4', '6'],
      displayTemplate: 'Looks same after a 1/[BLANK] turn.',
    },
    explanation: '💡 A fan with 3 identical blades looks the same after every **1/3 turn (120°)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Symmetry Matching & Rotation Angle Ordering
  // --------------------------------------------------------------------------
  {
    id: 'c5_m5_concept_match_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Does it Look the Same? (Symmetry & Rotations)',
    concept: 'Turn Fraction to Degrees Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each fraction turn to its exact angle in degrees:',
    visualEmoji: '🔄 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'sm_p1', left: '1/4 turn', right: '90 degrees' },
        { id: 'sm_p2', left: '1/3 turn', right: '120 degrees' },
        { id: 'sm_p3', left: '1/2 turn', right: '180 degrees' },
        { id: 'sm_p4', left: '1 full turn', right: '360 degrees' },
      ],
    },
    explanation: '💡 360°/4 = 90°; 360°/3 = 120°; 360°/2 = 180°; 360°/1 = 360°.',
    points: 15,
  },
  {
    id: 'c5_m5_concept_order_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Does it Look the Same? (Symmetry & Rotations)',
    concept: 'Rotation Turn Size Order',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange the rotation turns in order from smallest angle to largest angle:',
    visualEmoji: '🔄 60° ➔ 90° ➔ 180° ➔ 360°',
    payload: {
      tokens: ['1/6 turn (60°)', '1/4 turn (90°)', '1/2 turn (180°)', 'Full turn (360°)'],
      scrambled: ['Full turn (360°)', '1/4 turn (90°)', '1/6 turn (60°)', '1/2 turn (180°)'],
      correctSequence: ['1/6 turn (60°)', '1/4 turn (90°)', '1/2 turn (180°)', 'Full turn (360°)'],
    },
    explanation: '💡 Increasing turn order: **1/6 turn (60°) < 1/4 turn (90°) < 1/2 turn (180°) < Full turn (360°)**!',
    points: 15,
  },
];
