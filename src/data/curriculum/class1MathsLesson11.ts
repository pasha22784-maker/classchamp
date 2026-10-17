import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 11: HOW MUCH CAN WE SPEND? (MONEY)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_11_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Recognizing Indian Coins (₹1, ₹2, ₹5, ₹10)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m11_concept_coin_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Indian Currency Symbol',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the special official symbol used for Indian Rupee?',
    visualEmoji: '🇮🇳 🪙',
    payload: {
      options: [
        { id: 'opt_cn1_1', text: '₹', isCorrect: true },
        { id: 'opt_cn1_2', text: '$', isCorrect: false },
        { id: 'opt_cn1_3', text: '€', isCorrect: false },
      ],
    },
    explanation: '💡 The official symbol for the Indian Rupee is **₹**!',
    points: 10,
  },
  {
    id: 'c1_m11_concept_coin_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Recognizing ₹5 Coin',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Ravi has a golden-silver coin stamped with number "5" 🪙. What is the value of this coin?',
    visualEmoji: '🪙 5️⃣',
    payload: {
      options: [
        { id: 'opt_cn2_1', text: '₹5', isCorrect: true },
        { id: 'opt_cn2_2', text: '₹50', isCorrect: false },
        { id: 'opt_cn2_3', text: '₹1', isCorrect: false },
      ],
    },
    explanation: '💡 A coin stamped with 5 is a **₹5 (Five Rupees)** coin!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Combining Coins (Putting Coins Together)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m11_concept_comb_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Making ₹10 with Coins',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many ₹5 coins 🪙🪙 do you need to make exactly ₹10?',
    visualEmoji: '🪙 + 🪙 = 🔟',
    payload: {
      options: [
        { id: 'opt_cb1_1', text: 'Two ₹5 coins', isCorrect: true },
        { id: 'opt_cb1_2', text: 'Five ₹5 coins', isCorrect: false },
        { id: 'opt_cb1_3', text: 'One ₹5 coin', isCorrect: false },
      ],
    },
    explanation: '💡 ₹5 + ₹5 = **₹10**. So you need **two** ₹5 coins!',
    points: 10,
  },
  {
    id: 'c1_m11_concept_comb_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Total Amount of Mixed Coins',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Neha has one ₹5 coin and two ₹2 coins in her piggy bank 🪙. Total money = 5 + 2 + 2 = ₹[BLANK].',
    visualEmoji: '🪙 ₹5 + 🪙 ₹2 + 🪙 ₹2',
    payload: {
      correctAnswer: '9',
      wordBank: ['9', '7', '10', '12'],
      displayTemplate: '5 + 2 + 2 = ₹[BLANK]',
    },
    explanation: '💡 5 + 2 = 7, and 7 + 2 = **₹9** in total!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Shopping: Total Cost of 2 Items
  // --------------------------------------------------------------------------
  {
    id: 'c1_m11_concept_shop_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Total Cost of Stationeries',
    difficulty: 'easy',
    type: 'mcq',
    question: 'At the school stationary shop: A pencil ✏️ costs ₹5 and an eraser 🧼 costs ₹3. How much money do both cost in total?',
    visualEmoji: '✏️ (₹5) + 🧼 (₹3)',
    payload: {
      options: [
        { id: 'opt_sp1_1', text: '₹8', isCorrect: true },
        { id: 'opt_sp1_2', text: '₹15', isCorrect: false },
        { id: 'opt_sp1_3', text: '₹2', isCorrect: false },
      ],
    },
    explanation: '💡 Total cost = ₹5 + ₹3 = **₹8**!',
    points: 10,
  },
  {
    id: 'c1_m11_concept_shop_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Buying a Toy',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A spinning top 🪀 costs ₹7 and a candy 🍬 costs ₹2. Together they cost ₹[BLANK].',
    visualEmoji: '🪀 (₹7) + 🍬 (₹2)',
    payload: {
      correctAnswer: '9',
      wordBank: ['9', '8', '10', '5'],
      displayTemplate: '₹7 + ₹2 = ₹[BLANK]',
    },
    explanation: '💡 7 + 2 = **₹9**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Calculating Change Left Over (Subtraction with Money)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m11_concept_change_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Change Returned',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Aman gives a ₹10 note 💵 to buy an ice-cream 🍦 that costs ₹6. How much change does the shopkeeper return?',
    visualEmoji: '💵 ₹10 - 🍦 ₹6 = ❓',
    payload: {
      options: [
        { id: 'opt_ch1_1', text: '₹4 change', isCorrect: true },
        { id: 'opt_ch1_2', text: '₹16', isCorrect: false },
        { id: 'opt_ch1_3', text: '₹5', isCorrect: false },
      ],
    },
    explanation: '💡 10 - 6 = **₹4**! Aman gets ₹4 back in change.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Comparing Currency Values (More vs Less)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m11_concept_more_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Comparing Money Values',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which has MORE buying power (greater money value)?',
    visualEmoji: '💵 ₹20 vs 🪙 ₹2',
    payload: {
      options: [
        { id: 'opt_mr1_1', text: 'A ₹20 note 💵', isCorrect: true },
        { id: 'opt_mr1_2', text: 'A ₹2 coin 🪙', isCorrect: false },
        { id: 'opt_mr1_3', text: 'Both are same', isCorrect: false },
      ],
    },
    explanation: '💡 ₹20 is much more than ₹2! You can buy more things with ₹20.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Order Money from Smallest to Largest
  // --------------------------------------------------------------------------
  {
    id: 'c1_m11_concept_ord_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Ordering Currency Amounts',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these currency values from SMALLEST to LARGEST:',
    visualEmoji: '🪙 💵 💰',
    payload: {
      tokens: ['₹1 coin', '₹5 coin', '₹10 note', '₹20 note'],
      scrambled: ['₹10 note', '₹1 coin', '₹20 note', '₹5 coin'],
      correctSequence: ['₹1 coin', '₹5 coin', '₹10 note', '₹20 note'],
    },
    explanation: '💡 Smallest to largest: ₹1 < ₹5 < ₹10 < ₹20!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match Coins to Their Values
  // --------------------------------------------------------------------------
  {
    id: 'c1_m11_concept_match_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Much Can We Spend? (Money)',
    concept: 'Coin to Word Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each Indian currency with its value in words:',
    visualEmoji: '🪙 🔤',
    payload: {
      pairs: [
        { id: 'mny1', left: '₹1 🪙', right: 'One Rupee' },
        { id: 'mny2', left: '₹2 🪙', right: 'Two Rupees' },
        { id: 'mny3', left: '₹5 🪙', right: 'Five Rupees' },
        { id: 'mny4', left: '₹10 🪙', right: 'Ten Rupees' },
      ],
    },
    explanation: '💡 ₹1 = One Rupee, ₹2 = Two Rupees, ₹5 = Five Rupees, ₹10 = Ten Rupees!',
    points: 15,
  },
];
