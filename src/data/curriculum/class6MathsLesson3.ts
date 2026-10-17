import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 3: PLAYING WITH NUMBERS (PRIME & COMPOSITE)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Prime vs Composite Numbers
  // --------------------------------------------------------------------------
  {
    id: 'c6_m3_concept_prime_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Playing with Numbers (Prime & Composite)',
    concept: 'Smallest Even Prime Number',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the smallest prime number, and what is special about it?',
    visualEmoji: '🔢 2️⃣ Prime Number',
    payload: {
      options: [
        { id: 'opt_prm1', text: '2 is the smallest prime number, and the ONLY even prime number', isCorrect: true },
        { id: 'opt_prm2', text: '1 is the smallest prime number', isCorrect: false },
        { id: 'opt_prm3', text: '3 is the smallest prime number', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **1 is neither prime nor composite**. **2** has exactly 2 factors (1 and 2), making it the smallest and only even prime number!',
    points: 10,
  },
  {
    id: 'c6_m3_concept_prime_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Playing with Numbers (Prime & Composite)',
    concept: 'Twin Primes Definition',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Two prime numbers whose difference is 2 (such as 3 and 5, 11 and 13) are called [BLANK] primes.',
    visualEmoji: '👯 Twin Primes',
    payload: {
      correctAnswer: 'twin',
      wordBank: ['twin', 'even', 'co', 'composite'],
      displayTemplate: 'Called [BLANK] primes.',
    },
    explanation: '💡 Pairs of prime numbers with a difference of 2 are called **Twin Primes** (e.g. (3, 5), (5, 7), (11, 13), (17, 19))!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Divisibility Rules (3, 6, 9, 11)
  // --------------------------------------------------------------------------
  {
    id: 'c6_m3_concept_div_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Playing with Numbers (Prime & Composite)',
    concept: 'Divisibility Test Rules Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each divisibility test to its mathematical condition:',
    visualEmoji: '➗ Divisibility Rules',
    payload: {
      pairs: [
        { id: 'm3_p1', left: 'Divisible by 3', right: 'Sum of all digits is a multiple of 3' },
        { id: 'm3_p2', left: 'Divisible by 6', right: 'Divisible by both 2 and 3' },
        { id: 'm3_p3', left: 'Divisible by 4', right: 'Number formed by last two digits is divisible by 4' },
        { id: 'm3_p4', left: 'Divisible by 11', right: 'Difference of alternating digit sums is 0 or multiple of 11' },
      ],
    },
    explanation: '💡 Divisibility tests allow checking factors without full division: e.g. for 6, test both 2 and 3!',
    points: 15,
  },
  {
    id: 'c6_m3_concept_hcf_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Playing with Numbers (Prime & Composite)',
    concept: 'HCF of Two Numbers',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the Highest Common Factor (HCF) of 24 and 36?',
    visualEmoji: '🎯 HCF(24, 36) = ❓',
    payload: {
      options: [
        { id: 'opt_hcf1', text: '12 (Factors of 24: 1,2,3,4,6,8,12,24; Factors of 36: 1,2,3,4,6,9,12,18,36)', isCorrect: true },
        { id: 'opt_hcf2', text: '6', isCorrect: false },
        { id: 'opt_hcf3', text: '72 (This is the LCM, not HCF)', isCorrect: false },
      ],
    },
    explanation: '💡 The highest factor shared by both 24 and 36 is **12** (their LCM is 72)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Prime Factorization Sequence
  // --------------------------------------------------------------------------
  {
    id: 'c6_m3_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Playing with Numbers (Prime & Composite)',
    concept: 'Prime Factorization of 60',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the prime factor steps to decompose 60 into product of prime numbers:',
    visualEmoji: '🌲 Factor Tree: 60',
    payload: {
      tokens: ['60 = 2 × 30', '30 = 2 × 15', '15 = 3 × 5', '60 = 2 × 2 × 3 × 5'],
      scrambled: ['60 = 2 × 2 × 3 × 5', '15 = 3 × 5', '60 = 2 × 30', '30 = 2 × 15'],
      correctSequence: ['60 = 2 × 30', '30 = 2 × 15', '15 = 3 × 5', '60 = 2 × 2 × 3 × 5'],
    },
    explanation: '💡 Decomposing 60 step-by-step: 60 ➡️ 2 × 30 ➡️ 2 × 2 × 15 ➡️ 2 × 2 × 3 × 5!',
    points: 15,
  },
];
