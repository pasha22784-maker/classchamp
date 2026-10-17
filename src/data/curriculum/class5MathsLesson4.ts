import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 MATHEMATICS (MATH-MAGIC 5)
// CHAPTER 4: PARTS AND WHOLES (FRACTIONS & EQUIVALENT)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_MATHS_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Flag Fractions (भारतीय तिरंगा)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m4_concept_flag_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Parts and Wholes (Fractions & Equivalent)',
    concept: 'Indian Tricolour Fraction',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Our Indian National Flag 🇮🇳 is divided into three equal horizontal bands.\nWhat fraction of the flag is saffron (kesari)?',
    visualEmoji: '🇮🇳 1 part out of 3',
    payload: {
      options: [
        { id: 'opt_fl1', text: '1/3', isCorrect: true },
        { id: 'opt_fl2', text: '1/2', isCorrect: false },
        { id: 'opt_fl3', text: '1/4', isCorrect: false },
      ],
    },
    explanation: '💡 The Indian flag has 3 equal bands: 1/3 saffron, 1/3 white, and 1/3 green!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Equivalent Fractions (तुल्य भिन्न)
  // --------------------------------------------------------------------------
  {
    id: 'c5_m4_concept_equiv_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Parts and Wholes (Fractions & Equivalent)',
    concept: 'Finding Equivalent Fractions',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which fraction is equivalent to 1/2?',
    visualEmoji: '🍰 ½ = ❓',
    payload: {
      options: [
        { id: 'opt_eq1', text: '3/6', isCorrect: true },
        { id: 'opt_eq2', text: '2/5', isCorrect: false },
        { id: 'opt_eq3', text: '1/4', isCorrect: false },
      ],
    },
    explanation: '💡 Multiplying numerator and denominator by 3: (1×3)/(2×3) = **3/6**!',
    points: 10,
  },
  {
    id: 'c5_m4_concept_equiv_02',
    grade: 5,
    subject: 'maths',
    chapter: 'Parts and Wholes (Fractions & Equivalent)',
    concept: 'Equivalent Blank Fill',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Complete the equivalent fraction: 2/5 = [BLANK] / 10.',
    visualEmoji: '2️⃣/5️⃣ = ❓/1️⃣0️⃣',
    payload: {
      correctAnswer: '4',
      wordBank: ['4', '2', '5', '8'],
      displayTemplate: '2/5 = [BLANK] / 10',
    },
    explanation: '💡 5 × 2 = 10, so 2 × 2 = **4**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Chocolate Sharing Word Problem
  // --------------------------------------------------------------------------
  {
    id: 'c5_m4_concept_choc_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Parts and Wholes (Fractions & Equivalent)',
    concept: 'Fractional Share of Chocolate Bar',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Manju had a chocolate bar with 12 equal pieces 🍫. She gave 1/4 of it to Raji.\nHow many pieces did Raji get?',
    visualEmoji: '🍫 12 ÷ 4 = ❓',
    payload: {
      options: [
        { id: 'opt_ch1', text: '3 pieces', isCorrect: true },
        { id: 'opt_ch2', text: '4 pieces', isCorrect: false },
        { id: 'opt_ch3', text: '6 pieces', isCorrect: false },
      ],
    },
    explanation: '💡 1/4 of 12 = 12 ÷ 4 = **3 pieces**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Matching Fractions of a Rupee & Ordering
  // --------------------------------------------------------------------------
  {
    id: 'c5_m4_concept_match_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Parts and Wholes (Fractions & Equivalent)',
    concept: 'Paise as Fractions of One Rupee',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each paise coin to its exact fraction of ₹ 1 (100 paise):',
    visualEmoji: '🪙 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'pw_p1', left: '50 paise coin', right: '1/2 of a Rupee' },
        { id: 'pw_p2', left: '25 paise coin', right: '1/4 of a Rupee' },
        { id: 'pw_p3', left: '20 paise coin', right: '1/5 of a Rupee' },
        { id: 'pw_p4', left: '10 paise coin', right: '1/10 of a Rupee' },
      ],
    },
    explanation: '💡 50/100 = 1/2; 25/100 = 1/4; 20/100 = 1/5; 10/100 = 1/10.',
    points: 15,
  },
  {
    id: 'c5_m4_concept_order_01',
    grade: 5,
    subject: 'maths',
    chapter: 'Parts and Wholes (Fractions & Equivalent)',
    concept: 'Equivalent Fractions of Half',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange these equivalent fractions in order of increasing denominator:',
    visualEmoji: '🍰 ½ ➔ 2/4 ➔ 3/6 ➔ 4/8',
    payload: {
      tokens: ['1/2', '2/4', '3/6', '4/8'],
      scrambled: ['3/6', '1/2', '4/8', '2/4'],
      correctSequence: ['1/2', '2/4', '3/6', '4/8'],
    },
    explanation: '💡 All these equal 1/2! Ordered by denominator: **1/2 ➔ 2/4 ➔ 3/6 ➔ 4/8**.',
    points: 15,
  },
];
