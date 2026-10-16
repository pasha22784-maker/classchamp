import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 6: THE JUNK SELLER (CURRENCY & PROFIT)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Rate List & Junk Cost Calculations
  // --------------------------------------------------------------------------
  {
    id: 'c4_m6_concept_rate_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Junk Seller (Currency & Profit)',
    concept: 'Cost of Old Newspaper',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The junk shop rate list shows: 1 kg Newspaper = ₹ 8.\nHow much will Kiran pay for 30 kg of newspaper?',
    visualEmoji: '📰 30 kg × ₹ 8 = ❓',
    payload: {
      options: [
        { id: 'opt_np1', text: '₹ 240 (30 × 8 = 240)', isCorrect: true },
        { id: 'opt_np2', text: '₹ 200', isCorrect: false },
        { id: 'opt_np3', text: '₹ 280', isCorrect: false },
      ],
    },
    explanation: '💡 30 × 8 = **₹ 240** total cost for 30 kg newspaper!',
    points: 10,
  },
  {
    id: 'c4_m6_concept_rate_02',
    grade: 4,
    subject: 'maths',
    chapter: 'The Junk Seller (Currency & Profit)',
    concept: 'Cost of Plastic Scrap',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'If 1 kg of plastic costs ₹ 12, then 10 kg of plastic costs ₹ [BLANK].',
    visualEmoji: '🧴 10 kg × ₹ 12 = ❓',
    payload: {
      correctAnswer: '120',
      wordBank: ['120', '100', '1200', '24'],
      displayTemplate: '10 × 12 = ₹ [BLANK]',
    },
    explanation: '💡 10 × 12 = **₹ 120**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Bank Loans & Monthly Interest Calculations
  // --------------------------------------------------------------------------
  {
    id: 'c4_m6_concept_loan_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Junk Seller (Currency & Profit)',
    concept: 'Total Loan Repayment',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Hari borrowed ₹ 300 from a bank to start his cart.\nHe repays ₹ 51 every month for 6 months. How much did he pay back in all?',
    visualEmoji: '🏦 6 months × ₹ 51 = ❓',
    payload: {
      options: [
        { id: 'opt_ln1', text: '₹ 306 (6 × 51 = 306, so ₹6 extra interest)', isCorrect: true },
        { id: 'opt_ln2', text: '₹ 300', isCorrect: false },
        { id: 'opt_ln3', text: '₹ 350', isCorrect: false },
      ],
    },
    explanation: '💡 6 × 51 = **₹ 306**. The extra ₹ 6 is the bank interest!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Profit on Selling (लाभ = विक्रय मूल्य - क्रय मूल्य)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m6_concept_profit_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Junk Seller (Currency & Profit)',
    concept: 'Calculating Profit Earned',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Kiran bought iron junk for ₹ 600 and sold it to a big dealer for ₹ 750. Her profit was ₹ [BLANK].',
    visualEmoji: '💰 ₹ 750 - ₹ 600 = ❓',
    payload: {
      correctAnswer: '150',
      wordBank: ['150', '100', '200', '50'],
      displayTemplate: 'Profit = ₹ 750 - ₹ 600 = ₹ [BLANK].',
    },
    explanation: '💡 Profit = Selling Price (₹750) - Cost Price (₹600) = **₹ 150**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Currency Matching & Total Calculation Order
  // --------------------------------------------------------------------------
  {
    id: 'c4_m6_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Junk Seller (Currency & Profit)',
    concept: 'Counting Note Bundles Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each collection of notes with its total value:',
    visualEmoji: '💵 ➔ 🏷️',
    payload: {
      pairs: [
        { id: 'js_p1', left: 'Five ₹ 100 notes', right: '₹ 500' },
        { id: 'js_p2', left: 'Seven ₹ 20 notes', right: '₹ 140' },
        { id: 'js_p3', left: 'Six ₹ 50 notes', right: '₹ 300' },
        { id: 'js_p4', left: 'Eight ₹ 5 coins', right: '₹ 40' },
      ],
    },
    explanation: '💡 5×100=₹500; 7×20=₹140; 6×50=₹300; 8×5=₹40.',
    points: 15,
  },
  {
    id: 'c4_m6_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'The Junk Seller (Currency & Profit)',
    concept: 'Junk Rate Order (Per Kg Price)',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange the junk scrap materials from cheapest rate per kg to most expensive rate per kg:',
    visualEmoji: '📰 ➔ 🧴 ➔ ⚙️ ➔ 🎺',
    payload: {
      tokens: ['Waste paper (₹5/kg)', 'Plastic bottles (₹12/kg)', 'Iron metal (₹18/kg)', 'Brass metal (₹280/kg)'],
      scrambled: ['Brass metal (₹280/kg)', 'Waste paper (₹5/kg)', 'Iron metal (₹18/kg)', 'Plastic bottles (₹12/kg)'],
      correctSequence: ['Waste paper (₹5/kg)', 'Plastic bottles (₹12/kg)', 'Iron metal (₹18/kg)', 'Brass metal (₹280/kg)'],
    },
    explanation: '💡 Rate order: Paper (₹5) < Plastic (₹12) < Iron (₹18) < Brass (₹280)!',
    points: 15,
  },
];
