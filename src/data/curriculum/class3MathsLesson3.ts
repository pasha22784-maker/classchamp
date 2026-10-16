import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 3: GIVE AND TAKE (ADDITION & SUBTRACTION)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 3-Digit Addition with Regrouping / Carry Over (हासिल का जोड़)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m3_concept_add_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Give and Take (Addition & Subtraction)',
    concept: '3-Digit Addition with Regrouping',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Solve: 237 + 145. (Hint: 7 + 5 = 12, carry 1 to tens place)',
    visualEmoji: '➕ 2️⃣3️⃣7️⃣ + 1️⃣4️⃣5️⃣',
    payload: {
      options: [
        { id: 'opt_ad1_1', text: '382', isCorrect: true },
        { id: 'opt_ad1_2', text: '372', isCorrect: false },
        { id: 'opt_ad1_3', text: '381', isCorrect: false },
      ],
    },
    explanation: '💡 Step 1: Ones: 7 + 5 = 12 (Write 2, carry 1). Step 2: Tens: 1 + 3 + 4 = 8. Step 3: Hundreds: 2 + 1 = 3. Total: **382**!',
    points: 10,
  },
  {
    id: 'c3_m3_concept_add_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Give and Take (Addition & Subtraction)',
    concept: 'Adding Hundreds and Tens Mentally',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Break and add: 400 + 350 = [BLANK].',
    visualEmoji: '4️⃣0️⃣0️⃣ + 3️⃣5️⃣0️⃣',
    payload: {
      correctAnswer: '750',
      wordBank: ['750', '700', '850', '650'],
      displayTemplate: '400 + 350 = [BLANK]',
    },
    explanation: '💡 400 + 300 = 700, and 700 + 50 = **750**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: 3-Digit Subtraction with Borrowing (उधार लेकर घटाना)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m3_concept_sub_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Give and Take (Addition & Subtraction)',
    concept: '3-Digit Subtraction with Regrouping',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Solve: 452 - 238. (Hint: Borrow 1 Ten into Ones: 12 - 8 = 4)',
    visualEmoji: '➖ 4️⃣5️⃣2️⃣ - 2️⃣3️⃣8️⃣',
    payload: {
      options: [
        { id: 'opt_sb1_1', text: '214', isCorrect: true },
        { id: 'opt_sb1_2', text: '224', isCorrect: false },
        { id: 'opt_sb1_3', text: '314', isCorrect: false },
      ],
    },
    explanation: '💡 Borrow from 5 tens: 12 - 8 = 4 (ones), 4 - 3 = 1 (tens), 4 - 2 = 2 (hundreds). Answer: **214**!',
    points: 10,
  },
  {
    id: 'c3_m3_concept_sub_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Give and Take (Addition & Subtraction)',
    concept: 'Subtracting from Round Hundreds',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A shopkeeper had 500 light bulbs 💡. He sold 160 bulbs. How many are left? 500 - 160 = [BLANK].',
    visualEmoji: '💡 5️⃣0️⃣0️⃣ - 1️⃣6️⃣0️⃣',
    payload: {
      correctAnswer: '340',
      wordBank: ['340', '440', '360', '300'],
      displayTemplate: '500 - 160 = [BLANK]',
    },
    explanation: '💡 500 - 100 = 400, and 400 - 60 = **340 bulbs left**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Checking Subtraction with Addition
  // --------------------------------------------------------------------------
  {
    id: 'c3_m3_concept_check_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Give and Take (Addition & Subtraction)',
    concept: 'Checking Subtraction Fact',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If 340 - 120 = 220, which addition sentence checks if this answer is right?',
    visualEmoji: '🔄 ➕ ➖',
    payload: {
      options: [
        { id: 'opt_ck1_1', text: '220 + 120 = 340 (Difference + Subtracted part = Total)', isCorrect: true },
        { id: 'opt_ck1_2', text: '340 + 220 = 560', isCorrect: false },
        { id: 'opt_ck1_3', text: '220 - 120 = 100', isCorrect: false },
      ],
    },
    explanation: '💡 To check your subtraction: Add the answer to the number you subtracted! **220 + 120 = 340**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Word Problems (Bird Migration & Animal Stories)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m3_concept_story_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Give and Take (Addition & Subtraction)',
    concept: 'Migratory Birds Story Problem',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A bird sanctuary 🦩 had 125 resident flamingos. In winter, 180 migratory cranes arrived. How many birds are there now?',
    visualEmoji: '🦩 (125) + 🦢 (180)',
    payload: {
      options: [
        { id: 'opt_st1_1', text: '305 birds (125 + 180 = 305)', isCorrect: true },
        { id: 'opt_st1_2', text: '295 birds', isCorrect: false },
        { id: 'opt_st1_3', text: '315 birds', isCorrect: false },
      ],
    },
    explanation: '💡 125 + 180 = 5 + 0 = 5, 2 + 8 = 10 (carry 1), 1 + 1 + 1 = 3. Total = **305 birds**! 🦩',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Steps of 3-Digit Addition with Regrouping (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m3_concept_order_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Give and Take (Addition & Subtraction)',
    concept: 'Order of Column Addition',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the correct sequence of steps to add two 3-digit numbers with carrying:',
    visualEmoji: '➕ 📝 🔢',
    payload: {
      tokens: [
        '1. Align digits vertically under Hundreds, Tens, Ones',
        '2. Add the Ones column and carry over if sum is 10 or more',
        '3. Add the Tens column including the carried-over digit',
        '4. Add the Hundreds column and write the final total',
      ],
      scrambled: [
        '3. Add the Tens column including the carried-over digit',
        '1. Align digits vertically under Hundreds, Tens, Ones',
        '4. Add the Hundreds column and write the final total',
        '2. Add the Ones column and carry over if sum is 10 or more',
      ],
      correctSequence: [
        '1. Align digits vertically under Hundreds, Tens, Ones',
        '2. Add the Ones column and carry over if sum is 10 or more',
        '3. Add the Tens column including the carried-over digit',
        '4. Add the Hundreds column and write the final total',
      ],
    },
    explanation: '💡 Always calculate from right to left: **Ones -> Tens -> Hundreds**!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Sums and Differences
  // --------------------------------------------------------------------------
  {
    id: 'c3_m3_concept_match_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Give and Take (Addition & Subtraction)',
    concept: 'Calculation Match Pairs',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each math problem to its exact answer:',
    visualEmoji: '➕ ➖ 🎯',
    payload: {
      pairs: [
        { id: 'gt_p1', left: '250 + 150', right: '400' },
        { id: 'gt_p2', left: '600 - 250', right: '350' },
        { id: 'gt_p3', left: '175 + 125', right: '300' },
        { id: 'gt_p4', left: '800 - 300', right: '500' },
      ],
    },
    explanation: '💡 250+150=400, 600-250=350, 175+125=300, 800-300=500!',
    points: 15,
  },
];
