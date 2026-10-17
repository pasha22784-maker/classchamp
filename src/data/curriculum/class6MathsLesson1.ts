import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 MATHEMATICS
// CHAPTER 1: KNOWING OUR NUMBERS (LAKHS & ROMAN NUMERALS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_MATHS_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Indian vs International Place Value System
  // --------------------------------------------------------------------------
  {
    id: 'c6_m1_concept_place_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Knowing Our Numbers (Lakhs & Roman Numerals)',
    concept: 'Indian vs International Conversion',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many Millions (in the International system) are equal to One Crore (in the Indian system)?',
    visualEmoji: '🌍 1 Crore = ❓ Millions',
    payload: {
      options: [
        { id: 'opt_mil1', text: '10 Millions (1 Crore = 10,000,000 = 10 Millions)', isCorrect: true },
        { id: 'opt_mil2', text: '1 Million', isCorrect: false },
        { id: 'opt_mil3', text: '100 Millions', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **1 Million = 10 Lakhs (1,000,000)** and **10 Millions = 1 Crore (10,000,000)**!',
    points: 10,
  },
  {
    id: 'c6_m1_concept_place_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Knowing Our Numbers (Lakhs & Roman Numerals)',
    concept: 'Commas in Indian System',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'In the Indian system, commas are placed after 3 digits from the right, and then after every [BLANK] digits.',
    visualEmoji: '🇮🇳 1,23,45,678',
    payload: {
      correctAnswer: '2',
      wordBank: ['2', '3', '4', '1'],
      displayTemplate: 'After every [BLANK] digits.',
    },
    explanation: '💡 Indian system: first comma after hundreds (3 digits), then every 2 digits (thousands, lakhs, crores)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Roman Numerals System (I, V, X, L, C, D, M)
  // --------------------------------------------------------------------------
  {
    id: 'c6_m1_concept_roman_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Knowing Our Numbers (Lakhs & Roman Numerals)',
    concept: 'Roman Numeral Values Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each Roman numeral symbol to its Hindu-Arabic value:',
    visualEmoji: '🏛️ Roman Numerals Match',
    payload: {
      pairs: [
        { id: 'm1_p1', left: 'L', right: '50' },
        { id: 'm1_p2', left: 'C', right: '100' },
        { id: 'm1_p3', left: 'D', right: '500' },
        { id: 'm1_p4', left: 'M', right: '1000' },
      ],
    },
    explanation: '💡 Basic Roman symbols: V=5, X=10, L=50, C=100, D=500, M=1000!',
    points: 15,
  },
  {
    id: 'c6_m1_concept_roman_02',
    grade: 6,
    subject: 'maths',
    chapter: 'Knowing Our Numbers (Lakhs & Roman Numerals)',
    concept: 'Writing 49 in Roman Numerals',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the correct Roman numeral representation for the number 49?',
    visualEmoji: '🏛️ 49 = ❓',
    payload: {
      options: [
        { id: 'opt_rm1', text: 'XLIX (40 + 9 = XL + IX)', isCorrect: true },
        { id: 'opt_rm2', text: 'IL', isCorrect: false },
        { id: 'opt_rm3', text: 'XXXXIX', isCorrect: false },
      ],
    },
    explanation: '💡 In Roman numerals, "I" can only be subtracted from V and X, not L. 49 is written as (50 - 10) + (10 - 1) = **XLIX**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Ordering Large Numbers
  // --------------------------------------------------------------------------
  {
    id: 'c6_m1_concept_order_01',
    grade: 6,
    subject: 'maths',
    chapter: 'Knowing Our Numbers (Lakhs & Roman Numerals)',
    concept: 'Ascending Order of Large Numbers',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these numbers in ascending order (smallest to largest):',
    visualEmoji: '📊 Smallest ➡️ Largest',
    payload: {
      tokens: ['9,850', '98,050', '9,08,500', '98,00,500'],
      scrambled: ['98,00,500', '9,850', '98,050', '9,08,500'],
      correctSequence: ['9,850', '98,050', '9,08,500', '98,00,500'],
    },
    explanation: '💡 Compare digit counts: 4 digits (9,850) < 5 digits (98,050) < 6 digits (9,08,500) < 7 digits (98,00,500)!',
    points: 15,
  },
];
