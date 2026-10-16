import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 MATHEMATICS (JOYFUL MATHEMATICS 2)
// CHAPTER 6: DECORATION FOR FESTIVAL (SUBTRACTION)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_MATHS_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 2-Digit Subtraction Without Regrouping (घटाना)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m6_concept_sub_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Decoration for Festival (Subtraction)',
    concept: '2-Digit Column Subtraction',
    difficulty: 'easy',
    type: 'mcq',
    question: 'For Diwali decoration 🪔, grandmother bought 48 earthen diyas. She placed 25 diyas on the terrace. How many diyas are left to place?',
    visualEmoji: '🪔 4️⃣8️⃣ - 2️⃣5️⃣ = ❓',
    payload: {
      options: [
        { id: 'opt_sb1_1', text: '23 diyas (8 - 5 = 3 ones, 4 - 2 = 2 tens)', isCorrect: true },
        { id: 'opt_sb1_2', text: '13 diyas', isCorrect: false },
        { id: 'opt_sb1_3', text: '25 diyas', isCorrect: false },
      ],
    },
    explanation: '💡 Step 1: Subtract Ones: 8 - 5 = 3. Step 2: Subtract Tens: 4 - 2 = 2. Answer: **23 diyas**!',
    points: 10,
  },
  {
    id: 'c2_m6_concept_sub_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Decoration for Festival (Subtraction)',
    concept: 'Subtracting 1-Digit from 2-Digit',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Solve: 59 - 7 = [BLANK].',
    visualEmoji: '5️⃣9️⃣ - 7️⃣',
    payload: {
      correctAnswer: '52',
      wordBank: ['52', '51', '66', '42'],
      displayTemplate: '59 - 7 = [BLANK]',
    },
    explanation: '💡 Subtract 7 from the ones digit: 9 - 7 = 2. Tens digit stays 5. So **52**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Subtracting Tens (दहाई को घटाना)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m6_concept_tens_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Decoration for Festival (Subtraction)',
    concept: 'Subtracting Tens',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A shopkeeper had 80 festive marigold garlands 🏵️. He sold 30 garlands. How many are left?',
    visualEmoji: '🏵️ 8️⃣0️⃣ - 3️⃣0️⃣',
    payload: {
      options: [
        { id: 'opt_st1_1', text: '50 garlands (8 tens - 3 tens = 5 tens)', isCorrect: true },
        { id: 'opt_st1_2', text: '40 garlands', isCorrect: false },
        { id: 'opt_st1_3', text: '110 garlands', isCorrect: false },
      ],
    },
    explanation: '💡 8 tens - 3 tens = 5 tens = **50 garlands**!',
    points: 10,
  },
  {
    id: 'c2_m6_concept_tens_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Decoration for Festival (Subtraction)',
    concept: 'Mental Subtraction: Minus 10',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Quick mental math: 75 - 10 = [BLANK].',
    visualEmoji: '7️⃣5️⃣ - 🔟',
    payload: {
      correctAnswer: '65',
      wordBank: ['65', '74', '85', '60'],
      displayTemplate: '75 - 10 = [BLANK]',
    },
    explanation: '💡 Subtracting 10 decreases the tens digit by 1: 7 tens becomes 6 tens, so **65**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Festival Balloon Word Problems
  // --------------------------------------------------------------------------
  {
    id: 'c2_m6_concept_story_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Decoration for Festival (Subtraction)',
    concept: 'Balloons Popping Story',
    difficulty: 'medium',
    type: 'mcq',
    question: 'For an Eid party 🌙, Ali inflated 67 balloons 🎈. 14 balloons burst with a pop. How many balloons are still floating?',
    visualEmoji: '🎈 6️⃣7️⃣ - 💥 1️⃣4️⃣',
    payload: {
      options: [
        { id: 'opt_bl1_1', text: '53 balloons (67 - 14 = 53)', isCorrect: true },
        { id: 'opt_bl1_2', text: '51 balloons', isCorrect: false },
        { id: 'opt_bl1_3', text: '81 balloons', isCorrect: false },
      ],
    },
    explanation: '💡 67 - 14: Ones: 7 - 4 = 3, Tens: 6 - 1 = 5. Total = **53 balloons**! 🎈',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Difference Between Two Amounts ("How Many More?")
  // --------------------------------------------------------------------------
  {
    id: 'c2_m6_concept_diff_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Decoration for Festival (Subtraction)',
    concept: 'Difference in Rangoli Colors',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Kiran made 46 clay lamps and Sunita made 31 clay lamps 🪔. Kiran made [BLANK] more lamps than Sunita.',
    visualEmoji: '🪔 4️⃣6️⃣ - 3️⃣1️⃣',
    payload: {
      correctAnswer: '15',
      wordBank: ['15', '12', '77', '14'],
      displayTemplate: 'Kiran made [BLANK] more lamps than Sunita.',
    },
    explanation: '💡 Subtract 31 from 46: 46 - 31 = **15 more lamps**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Checking Subtraction with Addition
  // --------------------------------------------------------------------------
  {
    id: 'c2_m6_concept_check_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Decoration for Festival (Subtraction)',
    concept: 'Inverse Relation of Subtraction and Addition',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If 60 - 20 = 40, which addition fact checks and proves your answer?',
    visualEmoji: '🔄 ➕ ➖',
    payload: {
      options: [
        { id: 'opt_ck1_1', text: '40 + 20 = 60', isCorrect: true },
        { id: 'opt_ck1_2', text: '60 + 20 = 80', isCorrect: false },
        { id: 'opt_ck1_3', text: '40 + 40 = 80', isCorrect: false },
      ],
    },
    explanation: '💡 Subtraction undoes addition: **40 + 20 = 60** proves that 60 - 20 = 40!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Decreasing Number Track by 10s (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m6_concept_order_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Decoration for Festival (Subtraction)',
    concept: 'Subtracting 10s in Sequence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the countdown numbers from LARGEST to SMALLEST by subtracting 10:',
    visualEmoji: '📉 🔟 9️⃣0️⃣ ➡️ 5️⃣0️⃣',
    payload: {
      tokens: ['90', '80', '70', '60', '50'],
      scrambled: ['70', '90', '50', '80', '60'],
      correctSequence: ['90', '80', '70', '60', '50'],
    },
    explanation: '💡 Subtracting 10 repeatedly: **90 -> 80 -> 70 -> 60 -> 50**!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match Differences to Equations
  // --------------------------------------------------------------------------
  {
    id: 'c2_m6_concept_match_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Decoration for Festival (Subtraction)',
    concept: 'Subtraction Match Pairs',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each subtraction problem to its correct answer:',
    visualEmoji: '➖ 🎯',
    payload: {
      pairs: [
        { id: 'sb_p1', left: '50 - 20', right: '30' },
        { id: 'sb_p2', left: '76 - 12', right: '64' },
        { id: 'sb_p3', left: '88 - 44', right: '44' },
        { id: 'sb_p4', left: '99 - 10', right: '89' },
      ],
    },
    explanation: '💡 50-20=30, 76-12=64, 88-44=44, 99-10=89!',
    points: 15,
  },
];
