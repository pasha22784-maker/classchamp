import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 10: RUPEES AND PAISE (MONEY)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_10_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Rupees and Paise Conversion (₹1 = 100 paise)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m10_concept_conv_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Rupees and Paise (Money)',
    concept: 'Paise in One Rupee',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many paise (p) make exactly 1 Rupee (₹1)?',
    visualEmoji: '🪙 ₹1 = ❓ paise',
    payload: {
      options: [
        { id: 'opt_rs1', text: '100 paise', isCorrect: true },
        { id: 'opt_rs2', text: '10 paise', isCorrect: false },
        { id: 'opt_rs3', text: '1000 paise', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **1 Rupee (₹1) = 100 Paise (p)**!',
    points: 10,
  },
  {
    id: 'c3_m10_concept_conv_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Rupees and Paise (Money)',
    concept: 'Fifty Paise Coins',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'How many 50-paise coins make ₹1? Exactly [BLANK] coins.',
    visualEmoji: '🪙 50p + 🪙 50p = ₹1',
    payload: {
      correctAnswer: '2',
      wordBank: ['2', '4', '5', '10'],
      displayTemplate: '50p + 50p = ₹1 (Total [BLANK] coins)',
    },
    explanation: '💡 Two 50-paise coins equal 100 paise = **₹1**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Reading Rupees and Paise with Decimal Dot
  // --------------------------------------------------------------------------
  {
    id: 'c3_m10_concept_dot_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Rupees and Paise (Money)',
    concept: 'Dot Notation for Money',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A price tag says "₹ 12.50". What does this mean?',
    visualEmoji: '🏷️ ₹ 12.50',
    payload: {
      options: [
        { id: 'opt_dot1', text: '12 Rupees and 50 Paise', isCorrect: true },
        { id: 'opt_dot2', text: '125 Rupees', isCorrect: false },
        { id: 'opt_dot3', text: '1 Rupee and 250 Paise', isCorrect: false },
      ],
    },
    explanation: '💡 The number before the dot is **Rupees** and the number after the dot is **Paise**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Shopping, Cash Memos & Giving Change
  // --------------------------------------------------------------------------
  {
    id: 'c3_m10_concept_bill_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Rupees and Paise (Money)',
    concept: 'Total Cost Calculation',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Aarav buys a pencil ✏️ for ₹ 5 and a drawing book 📒 for ₹ 25.\nHow much money must he pay in total?',
    visualEmoji: '✏️ ₹5 + 📒 ₹25 = ❓',
    payload: {
      options: [
        { id: 'opt_bill1', text: '₹ 30', isCorrect: true },
        { id: 'opt_bill2', text: '₹ 20', isCorrect: false },
        { id: 'opt_bill3', text: '₹ 35', isCorrect: false },
      ],
    },
    explanation: '💡 ₹ 25 + ₹ 5 = **₹ 30** in total!',
    points: 10,
  },
  {
    id: 'c3_m10_concept_bill_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Rupees and Paise (Money)',
    concept: 'Getting Change Back',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Priya pays a ₹ 50 note 💵 for an ice cream 🍦 costing ₹ 35. The shopkeeper returns [BLANK] rupees.',
    visualEmoji: '💵 ₹50 - 🍦 ₹35 = ❓',
    payload: {
      correctAnswer: '15',
      wordBank: ['15', '25', '10', '20'],
      displayTemplate: '₹ 50 - ₹ 35 = ₹ [BLANK]',
    },
    explanation: '💡 Change = ₹ 50 - ₹ 35 = **₹ 15**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Currency Ordering & Matching
  // --------------------------------------------------------------------------
  {
    id: 'c3_m10_concept_order_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Rupees and Paise (Money)',
    concept: 'Ordering Currency by Value',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange Indian currency denominations from smallest value to largest value:',
    visualEmoji: '🪙 ➔ 💵 ➔ 💴 ➔ 💶',
    payload: {
      tokens: ['₹5 coin', '₹10 note', '₹50 note', '₹100 note', '₹500 note'],
      scrambled: ['₹100 note', '₹5 coin', '₹500 note', '₹10 note', '₹50 note'],
      correctSequence: ['₹5 coin', '₹10 note', '₹50 note', '₹100 note', '₹500 note'],
    },
    explanation: '💡 Ascending order: **₹5 < ₹10 < ₹50 < ₹100 < ₹500**!',
    points: 15,
  },
  {
    id: 'c3_m10_concept_pairs_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Rupees and Paise (Money)',
    concept: 'Match Money Amounts',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each set of coins/notes to its total value:',
    visualEmoji: '💰 ➔ 🏷️',
    payload: {
      pairs: [
        { id: 'm10_p1', left: 'Four ₹5 coins', right: '₹20' },
        { id: 'm10_p2', left: 'Two ₹50 notes', right: '₹100' },
        { id: 'm10_p3', left: 'Ten ₹10 notes', right: '₹100' },
        { id: 'm10_p4', left: 'Two ₹100 notes + one ₹50 note', right: '₹250' },
      ],
    },
    explanation: '💡 4×5=₹20; 2×50=₹100; 10×10=₹100; 200+50=₹250.',
    points: 15,
  },
];
