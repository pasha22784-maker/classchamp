import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 10: HOW BIG? HOW HEAVY? (VOLUME)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_10_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Unit Cube & Volume Formula (आयतन)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m10_concept_vol_01',
    grade: 5,
    subject: 'maths',
    chapter: 'How Big? How Heavy? (Volume)',
    concept: 'Volume of a Cuboid Formula',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A matchbox has length 5 cm, breadth 3 cm, and height 1 cm.\nWhat is its volume?',
    visualEmoji: '📦 L=5cm, B=3cm, H=1cm',
    payload: {
      options: [
        { id: 'opt_v1', text: '15 cm³', isCorrect: true },
        { id: 'opt_v2', text: '9 cm³', isCorrect: false },
        { id: 'opt_v3', text: '30 cm³', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **Volume of a Cuboid = Length × Breadth × Height** = 5 × 3 × 1 = **15 cm³**!',
    points: 10,
  },
  {
    id: 'c5_m10_concept_vol_02',
    grade: 5,
    subject: 'maths',
    chapter: 'How Big? How Heavy? (Volume)',
    concept: 'Volume of a Cube',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A wooden cube block has sides of length 4 cm. Its volume is [BLANK] cubic cm.',
    visualEmoji: '🧊 Side = 4 cm (4 × 4 × 4)',
    payload: {
      correctAnswer: '64',
      wordBank: ['64', '16', '12', '48'],
      displayTemplate: 'Volume of cube = 4 × 4 × 4 = [BLANK] cm³.',
    },
    explanation: '💡 Volume of Cube = **Side × Side × Side** = 4 × 4 × 4 = **64 cubic cm**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Liquid Volume & Displacement
  // --------------------------------------------------------------------------
  {
    id: 'c5_m10_concept_liquid_01',
    grade: 5,
    subject: 'maths',
    chapter: 'How Big? How Heavy? (Volume)',
    concept: 'Cubic Centimeters and Milliliters',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the volume of water with its equivalent capacity:',
    visualEmoji: '💧 Liquid Units Match',
    payload: {
      pairs: [
        { id: 'm10_p1', left: '1 cubic centimeter (1 cm³)', right: '1 mL of liquid' },
        { id: 'm10_p2', left: '1000 cubic centimeters', right: '1 Liter (1000 mL)' },
        { id: 'm10_p3', left: '500 cm³', right: 'Half Liter (500 mL)' },
        { id: 'm10_p4', left: '2000 cm³', right: '2 Liters' },
      ],
    },
    explanation: '💡 1 cm³ displaced water equals **1 mL**. Therefore, **1000 cm³ = 1000 mL = 1 Liter**!',
    points: 15,
  },
  {
    id: 'c5_m10_concept_displacement_01',
    grade: 5,
    subject: 'maths',
    chapter: 'How Big? How Heavy? (Volume)',
    concept: 'Water Displacement by Marbles',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A measuring glass has 50 mL of water. When 5 marbles are dropped inside, the water rises to 65 mL.\nWhat is the volume of the 5 marbles together?',
    visualEmoji: '🧪 50 mL ➡️ 65 mL with 5 marbles',
    payload: {
      options: [
        { id: 'opt_disp1', text: '15 mL', isCorrect: true },
        { id: 'opt_disp2', text: '115 mL', isCorrect: false },
        { id: 'opt_disp3', text: '5 mL', isCorrect: false },
      ],
    },
    explanation: '💡 Rise in water level = 65 mL - 50 mL = **15 mL (15 cm³)** for all 5 marbles combined!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Weight Conversion & Ordering
  // --------------------------------------------------------------------------
  {
    id: 'c5_m10_concept_order_01',
    grade: 5,
    subject: 'maths',
    chapter: 'How Big? How Heavy? (Volume)',
    concept: 'Ordering Weights from Lightest to Heaviest',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these weights from lightest to heaviest:',
    visualEmoji: '⚖️ Lightest ➡️ Heaviest',
    payload: {
      tokens: ['250 grams', '500 grams (1/2 kg)', '750 grams (3/4 kg)', '1 kg (1000 grams)'],
      scrambled: ['1 kg (1000 grams)', '250 grams', '750 grams (3/4 kg)', '500 grams (1/2 kg)'],
      correctSequence: ['250 grams', '500 grams (1/2 kg)', '750 grams (3/4 kg)', '1 kg (1000 grams)'],
    },
    explanation: '💡 1 kg = 1000g. So 250g < 500g < 750g < 1000g (1 kg)!',
    points: 15,
  },
];
