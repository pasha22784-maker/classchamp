import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 6: MULTIPLES AND FACTORS (LCM & HCF)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Lowest Common Multiple (LCM / ल.स.)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m6_concept_lcm_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Multiples and Factors (LCM & HCF)',
    concept: 'LCM of 4 and 6',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the Lowest Common Multiple (LCM) of 4 and 6?',
    visualEmoji: '🔢 Multiples of 4 & 6 ➔ ❓',
    payload: {
      options: [
        { id: 'opt_lcm1', text: '12 (4, 8, 12... and 6, 12...)', isCorrect: true },
        { id: 'opt_lcm2', text: '24', isCorrect: false },
        { id: 'opt_lcm3', text: '6', isCorrect: false },
      ],
    },
    explanation: '💡 Multiples of 4 are 4, 8, **12**, 16... Multiples of 6 are 6, **12**, 18... The smallest common multiple is **12**!',
    points: 10,
  },
  {
    id: 'c5_m6_concept_lcm_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Multiples and Factors (LCM & HCF)',
    concept: 'LCM of 3 and 5',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The smallest common multiple of 3 and 5 is [BLANK].',
    visualEmoji: '3️⃣ × 5️⃣ = ❓',
    payload: {
      correctAnswer: '15',
      wordBank: ['15', '10', '12', '30'],
      displayTemplate: 'LCM of 3 and 5 = [BLANK]',
    },
    explanation: '💡 Since 3 and 5 are prime numbers, their LCM is 3 × 5 = **15**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Highest Common Factor (HCF / म.स.)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m6_concept_hcf_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Multiples and Factors (LCM & HCF)',
    concept: 'Factors of 12',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which list contains ALL the factors of 12?',
    visualEmoji: '🌳 Factors of 12',
    payload: {
      options: [
        { id: 'opt_fc1', text: '1, 2, 3, 4, 6, 12 (exact divisors)', isCorrect: true },
        { id: 'opt_fc2', text: '2, 4, 6, 8, 10, 12', isCorrect: false },
        { id: 'opt_fc3', text: '1, 3, 5, 12', isCorrect: false },
      ],
    },
    explanation: '💡 Factors divide 12 completely without any remainder: **1, 2, 3, 4, 6, 12**!',
    points: 10,
  },
  {
    id: 'c5_m6_concept_hcf_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Multiples and Factors (LCM & HCF)',
    concept: 'HCF of 12 and 18',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'The Highest Common Factor (HCF) of 12 and 18 is [BLANK].',
    visualEmoji: '🌳 HCF(12, 18) = ❓',
    payload: {
      correctAnswer: '6',
      wordBank: ['6', '3', '2', '12'],
      displayTemplate: 'HCF of 12 and 18 = [BLANK]',
    },
    explanation: '💡 Common factors of 12 and 18 are 1, 2, 3, 6. The largest is **6**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: LCM / HCF Match & Multiples Order
  // --------------------------------------------------------------------------
  {
    id: 'c5_m6_concept_match_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Multiples and Factors (LCM & HCF)',
    concept: 'LCM Pairs Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the pair of numbers with their Lowest Common Multiple (LCM):',
    visualEmoji: '🔢 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'mf_p1', left: 'LCM of 2 and 5', right: '10' },
        { id: 'mf_p2', left: 'LCM of 4 and 8', right: '8' },
        { id: 'mf_p3', left: 'LCM of 6 and 9', right: '18' },
        { id: 'mf_p4', left: 'LCM of 5 and 10', right: '10' },
      ],
    },
    explanation: '💡 LCM(2,5)=10; LCM(4,8)=8; LCM(6,9)=18; LCM(5,10)=10.',
    points: 15,
  },
  {
    id: 'c5_m6_concept_order_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Multiples and Factors (LCM & HCF)',
    concept: 'First Four Multiples of 6',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange the first four multiples of 6 in ascending order:',
    visualEmoji: '6️⃣ ➔ 1️⃣2️⃣ ➔ 1️⃣8️⃣ ➔ 2️⃣4️⃣',
    payload: {
      tokens: ['6', '12', '18', '24'],
      scrambled: ['18', '6', '24', '12'],
      correctSequence: ['6', '12', '18', '24'],
    },
    explanation: '💡 Multiples of 6: 1×6=**6**, 2×6=**12**, 3×6=**18**, 4×6=**24**!',
    points: 15,
  },
];
