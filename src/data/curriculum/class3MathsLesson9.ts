import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 9: JUGS AND MUGS (LITRES & MILLILITRES)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_9_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Litres and Millilitres Unit Conversion
  // --------------------------------------------------------------------------
  {
    id: 'c3_m9_concept_conv_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Jugs and Mugs (Litres & Millilitres)',
    concept: 'Millilitres in a Litre',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many millilitres (mL) make exactly 1 litre (L)?',
    visualEmoji: '🥛 1️⃣ Litre = ❓ mL',
    payload: {
      options: [
        { id: 'opt_l1', text: '1000 mL', isCorrect: true },
        { id: 'opt_l2', text: '100 mL', isCorrect: false },
        { id: 'opt_l3', text: '10 mL', isCorrect: false },
      ],
    },
    explanation: '💡 Remember this capacity rule: **1 Litre (L) = 1000 Millilitres (mL)**!',
    points: 10,
  },
  {
    id: 'c3_m9_concept_conv_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Jugs and Mugs (Litres & Millilitres)',
    concept: 'Making 1 Litre',
    difficulty: 'easy',
    type: 'fill_blank',
    question: '500 mL of milk 🥛 + 500 mL of milk = [BLANK] mL (which equals 1 Litre).',
    visualEmoji: '🥛 500 mL + 🥛 500 mL = ❓',
    payload: {
      correctAnswer: '1000',
      wordBank: ['1000', '500', '100', '2000'],
      displayTemplate: '500 mL + 500 mL = [BLANK] mL',
    },
    explanation: '💡 500 + 500 = **1000 mL**, which makes a whole 1 Litre!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Choosing Appropriate Units (L vs mL)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m9_concept_units_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Jugs and Mugs (Litres & Millilitres)',
    concept: 'Unit for Small Quantities',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which unit would you use to measure cough syrup in a small spoon 🥄 or eye drops 💧?',
    visualEmoji: '🥄 💧 ➔ ❓',
    payload: {
      options: [
        { id: 'opt_unit1', text: 'Millilitres', isCorrect: true },
        { id: 'opt_unit2', text: 'Litres', isCorrect: false },
        { id: 'opt_unit3', text: 'Kilograms', isCorrect: false },
      ],
    },
    explanation: '💡 Very small amounts of liquid (like spoonfuls or eye drops) are measured in **millilitres (mL)**!',
    points: 10,
  },
  {
    id: 'c3_m9_concept_units_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Jugs and Mugs (Litres & Millilitres)',
    concept: 'Unit for Large Quantities',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which unit is used to measure water in a big bathroom bucket 🪣 or a car petrol tank 🚗?',
    visualEmoji: '🪣 ➔ ❓',
    payload: {
      options: [
        { id: 'opt_bkt1', text: 'Litres', isCorrect: true },
        { id: 'opt_bkt2', text: 'Millilitres', isCorrect: false },
        { id: 'opt_bkt3', text: 'Grams', isCorrect: false },
      ],
    },
    explanation: '💡 Large liquid capacities like buckets, drums, and car tanks are measured in **Litres (L)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Fraction of Litres & Combining Cups
  // --------------------------------------------------------------------------
  {
    id: 'c3_m9_concept_cups_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Jugs and Mugs (Litres & Millilitres)',
    concept: 'Number of Glasses to Fill 1 Litre',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A tea cup holds 250 mL of water. How many such cups are needed to completely fill a 1-litre jug?',
    visualEmoji: '☕ 250 mL × ❓ = 1000 mL (1 L)',
    payload: {
      options: [
        { id: 'opt_cup1', text: '4 cups', isCorrect: true },
        { id: 'opt_cup2', text: '2 cups', isCorrect: false },
        { id: 'opt_cup3', text: '10 cups', isCorrect: false },
      ],
    },
    explanation: '💡 250 + 250 + 250 + 250 = 1000 mL = 1 Litre. So **4 cups** are needed!',
    points: 10,
  },
  {
    id: 'c3_m9_concept_cups_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Jugs and Mugs (Litres & Millilitres)',
    concept: 'Order Capacities from Smallest to Largest',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these liquid containers in order from least capacity to most capacity:',
    visualEmoji: '💧 ➔ 🥄 ➔ 🥛 ➔ 🪣',
    payload: {
      tokens: ['Eye drop dropper', 'Teaspoon', 'Drinking glass', 'Water bucket'],
      scrambled: ['Drinking glass', 'Eye drop dropper', 'Water bucket', 'Teaspoon'],
      correctSequence: ['Eye drop dropper', 'Teaspoon', 'Drinking glass', 'Water bucket'],
    },
    explanation: '💡 Capacity order: Dropper (~1 mL) < Teaspoon (~5 mL) < Glass (~250 mL) < Bucket (~15 L)!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Matching Pairs of Capacity Equivalents
  // --------------------------------------------------------------------------
  {
    id: 'c3_m9_concept_match_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Jugs and Mugs (Litres & Millilitres)',
    concept: 'Capacity Addition Pairs',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each addition with its total capacity:',
    visualEmoji: '🥛 + 🥛 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'm9_p1', left: '750 mL + 250 mL', right: '1 Litre (1000 mL)' },
        { id: 'm9_p2', left: '200 mL + 300 mL', right: '500 mL (Half Litre)' },
        { id: 'm9_p3', left: '100 mL + 150 mL', right: '250 mL (Quarter Litre)' },
        { id: 'm9_p4', left: '1 Litre + 500 mL', right: '1500 mL' },
      ],
    },
    explanation: '💡 750+250 = 1000 mL (1 L); 200+300 = 500 mL; 100+150 = 250 mL; 1000+500 = 1500 mL.',
    points: 15,
  },
];
