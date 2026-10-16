import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 8: FUN WITH NUMBERS (NUMBERS 21 TO 99)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_8_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Bundles of Tens (दस-दस के बंडल)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m8_concept_tens_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Counting in Tens',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A farmer makes bundles of 10 sugarcane sticks 🎋. If he ties 3 bundles of 10, how many total sticks does he have?',
    visualEmoji: '🎋🎋🎋 (3 bundles of 10)',
    payload: {
      options: [
        { id: 'opt_tn1_1', text: '30 sticks (3 tens = 30)', isCorrect: true },
        { id: 'opt_tn1_2', text: '13 sticks', isCorrect: false },
        { id: 'opt_tn1_3', text: '3 sticks', isCorrect: false },
      ],
    },
    explanation: '💡 1 bundle = 10, 2 bundles = 20, **3 bundles of 10 = 30** sticks!',
    points: 10,
  },
  {
    id: 'c1_m8_concept_tens_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Bundles of 10 and loose sticks',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the sticks: 2 bundles of 10 sticks and 5 loose sticks. What number is this?',
    visualEmoji: '🎋🎋 + 🥢🥢🥢🥢🥢',
    payload: {
      options: [
        { id: 'opt_tn2_1', text: '25 (2 tens + 5 ones)', isCorrect: true },
        { id: 'opt_tn2_2', text: '52', isCorrect: false },
        { id: 'opt_tn2_3', text: '7', isCorrect: false },
      ],
    },
    explanation: '💡 2 tens = 20, and 5 ones = 5. So, **20 + 5 = 25**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Tens and Ones Place Value
  // --------------------------------------------------------------------------
  {
    id: 'c1_m8_concept_place_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Tens and Ones Breakdown',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'In the number 47: There are 4 tens and [BLANK] ones.',
    visualEmoji: '🔢 4️⃣7️⃣',
    payload: {
      correctAnswer: '7',
      wordBank: ['7', '4', '40', '11'],
      displayTemplate: 'In 47, there are 4 tens and [BLANK] ones.',
    },
    explanation: '💡 The number 47 has **4 tens (40)** and **7 ones (7)**!',
    points: 10,
  },
  {
    id: 'c1_m8_concept_place_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Composing Tens and Ones',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What number has 6 tens and 3 ones?',
    visualEmoji: '6 Tens + 3 Ones',
    payload: {
      options: [
        { id: 'opt_pl2_1', text: '63', isCorrect: true },
        { id: 'opt_pl2_2', text: '36', isCorrect: false },
        { id: 'opt_pl2_3', text: '603', isCorrect: false },
      ],
    },
    explanation: '💡 6 tens = 60, and 3 ones = 3. 60 + 3 = **63**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: What Comes Before, After, and Between
  // --------------------------------------------------------------------------
  {
    id: 'c1_m8_concept_before_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Number After',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A grasshopper hops along the number track: 37, 38, 39, [BLANK]. What number comes just AFTER 39?',
    visualEmoji: '🦗 3️⃣9️⃣ ➡️ ❓',
    payload: {
      options: [
        { id: 'opt_ba1_1', text: '40', isCorrect: true },
        { id: 'opt_ba1_2', text: '30', isCorrect: false },
        { id: 'opt_ba1_3', text: '41', isCorrect: false },
      ],
    },
    explanation: '💡 Counting forward: 39 + 1 = **40**!',
    points: 10,
  },
  {
    id: 'c1_m8_concept_before_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Number Before',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What number comes just BEFORE 60?',
    visualEmoji: '❓ ⬅️ 6️⃣0️⃣',
    payload: {
      options: [
        { id: 'opt_bf2_1', text: '59', isCorrect: true },
        { id: 'opt_bf2_2', text: '61', isCorrect: false },
        { id: 'opt_bf2_3', text: '50', isCorrect: false },
      ],
    },
    explanation: '💡 One less than 60 is **59**!',
    points: 10,
  },
  {
    id: 'c1_m8_concept_before_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Number Between',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Find the missing number between 81 and 83: 81, [BLANK], 83.',
    visualEmoji: '8️⃣1️⃣, ❓, 8️⃣3️⃣',
    payload: {
      correctAnswer: '82',
      wordBank: ['82', '80', '84', '72'],
      displayTemplate: '81, [BLANK], 83',
    },
    explanation: '💡 The number between 81 and 83 is **82**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Greater Than and Less Than (Comparing Numbers)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m8_concept_comp_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Comparing 2-Digit Numbers',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at the two numbers: 52 and 25. Which number is GREATER (bigger)?',
    visualEmoji: '5️⃣2️⃣ vs 2️⃣5️⃣',
    payload: {
      options: [
        { id: 'opt_cp1_1', text: '52 is greater (5 tens > 2 tens)', isCorrect: true },
        { id: 'opt_cp1_2', text: '25 is greater', isCorrect: false },
        { id: 'opt_cp1_3', text: 'Both are equal', isCorrect: false },
      ],
    },
    explanation: '💡 Always compare the tens place first: 52 has 5 tens, while 25 only has 2 tens. So **52 is greater**!',
    points: 10,
  },
  {
    id: 'c1_m8_concept_comp_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Finding the Smallest Number',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which of these three numbers is the SMALLEST: 74, 38, 56?',
    visualEmoji: '7️⃣4️⃣, 3️⃣8️⃣, 5️⃣6️⃣',
    payload: {
      options: [
        { id: 'opt_cp2_1', text: '38 (only 3 tens)', isCorrect: true },
        { id: 'opt_cp2_2', text: '56', isCorrect: false },
        { id: 'opt_cp2_3', text: '74', isCorrect: false },
      ],
    },
    explanation: '💡 38 has only 3 tens, which is smaller than 5 tens (56) and 7 tens (74). So **38** is the smallest!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Skip Counting by 10s (10, 20, 30, ...)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m8_concept_skip_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Counting in 10s Sequence',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Count by tens: 10, 20, 30, 40, [BLANK], 60, 70.',
    visualEmoji: '🔟 ➡️ 2️⃣0️⃣ ➡️ 3️⃣0️⃣ ➡️ 4️⃣0️⃣ ➡️ ❓',
    payload: {
      correctAnswer: '50',
      wordBank: ['50', '45', '100', '55'],
      displayTemplate: '10, 20, 30, 40, [BLANK], 60, 70',
    },
    explanation: '💡 Adding 10 to 40 gives **50**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Number Ordering (Smallest to Largest)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m8_concept_order_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Ascending Order',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these numbers in order from SMALLEST to LARGEST:',
    visualEmoji: '🔢 📈',
    payload: {
      tokens: ['15', '32', '64', '89'],
      scrambled: ['64', '15', '89', '32'],
      correctSequence: ['15', '32', '64', '89'],
    },
    explanation: '💡 From smallest to largest: 15 (1 ten) < 32 (3 tens) < 64 (6 tens) < 89 (8 tens)!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Number Names Match
  // --------------------------------------------------------------------------
  {
    id: 'c1_m8_concept_match_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers 21 to 99)',
    concept: 'Number to Name Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each numeral to its correct number name:',
    visualEmoji: '🔢 🔤',
    payload: {
      pairs: [
        { id: 'mp1', left: '20', right: 'Twenty' },
        { id: 'mp2', left: '35', right: 'Thirty-five' },
        { id: 'mp3', left: '50', right: 'Fifty' },
        { id: 'mp4', left: '99', right: 'Ninety-nine' },
      ],
    },
    explanation: '💡 20 = Twenty, 35 = Thirty-five, 50 = Fifty, 99 = Ninety-nine!',
    points: 15,
  },
];
