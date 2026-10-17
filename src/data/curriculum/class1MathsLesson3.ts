import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 3: MANGO TREATS (NUMBERS 1 TO 9 & ZERO)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: One-to-One Counting (1 to 9)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m3_concept_count_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Counting Objects 1 to 5',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Count the sweet yellow mangoes 🥭 on the table: 🥭 🥭 🥭. How many mangoes are there?',
    visualEmoji: '🥭 🥭 🥭',
    payload: {
      options: [
        { id: 'opt_cnt1_1', text: '3 Mangoes', isCorrect: true },
        { id: 'opt_cnt1_2', text: '2 Mangoes', isCorrect: false },
        { id: 'opt_cnt1_3', text: '4 Mangoes', isCorrect: false },
      ],
    },
    explanation: '💡 Count carefully 1 by 1: 1, 2, 3! There are **3** sweet mangoes 🥭!',
    points: 10,
  },
  {
    id: 'c1_m3_concept_count_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Counting Objects 1 to 9',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Count the fluttering colorful butterflies: 🦋 🦋 🦋 🦋 🦋. How many are there in total?',
    visualEmoji: '🦋 🦋 🦋 🦋 🦋',
    payload: {
      correctAnswer: '5',
      wordBank: ['5', '3', '4', '6'],
      displayTemplate: 'There are [BLANK] butterflies 🦋 in the garden.',
    },
    explanation: '💡 Let’s count them together: 1, 2, 3, 4, 5! There are **5** butterflies 🦋!',
    points: 10,
  },
  {
    id: 'c1_m3_concept_count_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Counting Objects up to 9',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Count the bright red apples in the fruit basket: 🍎 🍎 🍎 🍎 🍎 🍎 🍎',
    visualEmoji: '🍎 🍎 🍎 🍎 🍎 🍎 🍎',
    payload: {
      correctAnswer: '7',
      wordBank: ['7', '6', '8', '9'],
      displayTemplate: 'There are [BLANK] red apples 🍎.',
    },
    explanation: '💡 1, 2, 3, 4, 5, 6, 7! There are **7** juicy apples 🍎 in the basket!',
    points: 10,
  },
  {
    id: 'c1_m3_concept_count_04',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Object to Number Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Count each group of items and match with its correct number:',
    visualEmoji: '⭐ 🎈 🌸 🐱',
    payload: {
      pairs: [
        { id: 'cnt_p1', left: '🐱 🐱', right: '2 Cats' },
        { id: 'cnt_p2', left: '🎈 🎈 🎈 🎈', right: '4 Balloons' },
        { id: 'cnt_p3', left: '⭐ ⭐ ⭐ ⭐ ⭐ ⭐', right: '6 Stars' },
        { id: 'cnt_p4', left: '🌸', right: '1 Flower' },
      ],
    },
    explanation: '💡 1 Flower (1), 2 Cats (2), 4 Balloons (4), 6 Stars (6)!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Number Names (One to Nine)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m3_concept_names_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Number Name Recognition',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the number name for the number "4"?',
    visualEmoji: '4️⃣ 🍀',
    payload: {
      options: [
        { id: 'opt_nm1_1', text: 'FOUR', isCorrect: true },
        { id: 'opt_nm1_2', text: 'FIVE', isCorrect: false },
        { id: 'opt_nm1_3', text: 'THREE', isCorrect: false },
      ],
    },
    explanation: '💡 Remember the spelling: F - O - U - R is **FOUR** (4)!',
    points: 10,
  },
  {
    id: 'c1_m3_concept_names_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Number Name Recognition',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which numeral matches the number name "EIGHT"?',
    visualEmoji: '🎱 8️⃣',
    payload: {
      options: [
        { id: 'opt_nm2_1', text: '8', isCorrect: true },
        { id: 'opt_nm2_2', text: '6', isCorrect: false },
        { id: 'opt_nm2_3', text: '9', isCorrect: false },
      ],
    },
    explanation: '💡 E - I - G - H - T spells **8** (Eight)!',
    points: 10,
  },
  {
    id: 'c1_m3_concept_names_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Number Names Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each numeral with its written number name:',
    visualEmoji: '🔢 ✍️',
    payload: {
      pairs: [
        { id: 'nm_p1', left: '1', right: 'ONE' },
        { id: 'nm_p2', left: '3', right: 'THREE' },
        { id: 'nm_p3', left: '5', right: 'FIVE' },
        { id: 'nm_p4', left: '9', right: 'NINE' },
      ],
    },
    explanation: '💡 1 is ONE, 3 is THREE, 5 is FIVE, 9 is NINE!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: The Concept of ZERO (0 - शून्य)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m3_concept_zero_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Concept of Zero',
    difficulty: 'easy',
    type: 'mcq',
    question: 'There were 3 chirping birds 🐦 🐦 🐦 sitting on a tree branch. All 3 birds flew away! How many birds are left on the branch?',
    visualEmoji: '🌳 🐦 💨',
    payload: {
      options: [
        { id: 'opt_z1_1', text: '0', isCorrect: true },
        { id: 'opt_z1_2', text: '1 bird left', isCorrect: false },
        { id: 'opt_z1_3', text: '3 birds left', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Joyful Maths: When all 3 birds fly away, NONE are left. None means **ZERO (0)**!',
    points: 10,
  },
  {
    id: 'c1_m3_concept_zero_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Concept of Zero',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Rani had 4 juicy mangoes 🥭 in her basket. She ate all 4 mangoes! How many mangoes are left in the basket?',
    visualEmoji: '🧺 ✨',
    payload: {
      options: [
        { id: 'opt_z2_1', text: '0', isCorrect: true },
        { id: 'opt_z2_2', text: '4 mangoes', isCorrect: false },
        { id: 'opt_z2_3', text: '1 mango', isCorrect: false },
      ],
    },
    explanation: '💡 An empty basket has **0** items! 4 - 4 = 0 (Zero).',
    points: 10,
  },
  {
    id: 'c1_m3_concept_zero_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Concept of Zero Meaning',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What does the number ZERO (0) mean in mathematics?',
    visualEmoji: '0️⃣',
    payload: {
      options: [
        { id: 'opt_z3_1', text: 'Zero means nothing or none', isCorrect: true },
        { id: 'opt_z3_2', text: 'Zero means everything', isCorrect: false },
        { id: 'opt_z3_3', text: 'Zero means the biggest number', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: In counting, **0 (Zero)** represents an empty collection or nothing!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Number Order (After, Before, In-Between)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m3_concept_order_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Number After',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When counting numbers forward: 1, 2, 3, 4... What number comes immediately AFTER 4?',
    visualEmoji: '4️⃣ ➡️ ?',
    payload: {
      options: [
        { id: 'opt_ord1_1', text: '5 comes after 4', isCorrect: true },
        { id: 'opt_ord1_2', text: '3 comes after 4', isCorrect: false },
        { id: 'opt_ord1_3', text: '6 comes after 4', isCorrect: false },
      ],
    },
    explanation: '💡 1, 2, 3, 4, **5**! 5 comes right after 4.',
    points: 10,
  },
  {
    id: 'c1_m3_concept_order_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Number Before',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at the number line. What number comes immediately BEFORE 7?',
    visualEmoji: '? ⬅️ 7️⃣',
    payload: {
      options: [
        { id: 'opt_ord2_1', text: '6 comes before 7', isCorrect: true },
        { id: 'opt_ord2_2', text: '8 comes before 7', isCorrect: false },
        { id: 'opt_ord2_3', text: '5 comes before 7', isCorrect: false },
      ],
    },
    explanation: '💡 Count forward: 5, **6**, 7! The number before 7 is **6**.',
    points: 10,
  },
  {
    id: 'c1_m3_concept_order_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Number In-Between',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Find the missing number in the middle: 2, [BLANK], 4',
    visualEmoji: '2️⃣ ❓ 4️⃣',
    payload: {
      correctAnswer: '3',
      wordBank: ['3', '1', '5', '6'],
      displayTemplate: '2, [BLANK], 4',
    },
    explanation: '💡 The number between 2 and 4 is **3**! (2, 3, 4)',
    points: 10,
  },
  {
    id: 'c1_m3_concept_order_04',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Missing Number Sequence',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Complete the counting train: 6, 7, [BLANK], 9',
    visualEmoji: '🚂 6️⃣ 7️⃣ ❓ 9️⃣',
    payload: {
      correctAnswer: '8',
      wordBank: ['8', '5', '10', '4'],
      displayTemplate: '6, 7, [BLANK], 9 🚂',
    },
    explanation: '💡 6, 7, **8**, 9! **8** is the missing number in the train!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Comparing Quantities (More vs Less / Greater vs Smaller)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m3_concept_compare_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'More Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Group A has 5 balloons: 🎈 🎈 🎈 🎈 🎈. Group B has 2 balloons: 🎈 🎈. Which group has MORE balloons?',
    visualEmoji: '🎈 🎈 🎈 🎈 🎈  vs  🎈 🎈',
    payload: {
      options: [
        { id: 'opt_cmp1_1', text: 'Group A', isCorrect: true },
        { id: 'opt_cmp1_2', text: 'Group B', isCorrect: false },
      ],
    },
    explanation: '💡 5 is greater than 2! Group A with 5 balloons has **MORE**.',
    points: 10,
  },
  {
    id: 'c1_m3_concept_compare_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Fewer / Less Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which bowl has FEWER (LESS) fish 🐟?',
    visualEmoji: '🥣 🐟 vs 🥣 🐟 🐟 🐟',
    payload: {
      options: [
        { id: 'opt_cmp2_1', text: 'Bowl with 1 fish', isCorrect: true },
        { id: 'opt_cmp2_2', text: 'Bowl with 3 fish', isCorrect: false },
      ],
    },
    explanation: '💡 1 is smaller than 3, so 1 fish is **FEWER** (less)!',
    points: 10,
  },
  {
    id: 'c1_m3_concept_compare_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Bigger Number Comparison',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which number is BIGGER (GREATER): 8 or 3?',
    visualEmoji: '8️⃣ vs 3️⃣',
    payload: {
      options: [
        { id: 'opt_cmp3_1', text: '8 is bigger than 3', isCorrect: true },
        { id: 'opt_cmp3_2', text: '3 is bigger than 8', isCorrect: false },
      ],
    },
    explanation: '💡 8 represents a bigger collection than 3. So **8 is bigger**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Counting Backward (Count Down: 9 to 0)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m3_concept_back_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Backward Counting',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Countdown to rocket launch 🚀! Count backward: 5, 4, 3, 2, [BLANK], 0 🚀 Blast off!',
    visualEmoji: '🚀 5, 4, 3, 2, ❓, 0',
    payload: {
      correctAnswer: '1',
      wordBank: ['1', '6', '7', '3'],
      displayTemplate: '5, 4, 3, 2, [BLANK], 0 🚀',
    },
    explanation: '💡 When counting backwards: 5, 4, 3, 2, **1**, 0! 🚀 Blast off!',
    points: 10,
  },
  {
    id: 'c1_m3_concept_back_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Backward Counting',
    difficulty: 'hard',
    type: 'mcq',
    question: 'Count backward from 9: "9, 8, 7, 6, _____". What number comes next?',
    visualEmoji: '9️⃣ 8️⃣ 7️⃣ 6️⃣ ❓',
    payload: {
      options: [
        { id: 'opt_bk2_1', text: '5', isCorrect: true },
        { id: 'opt_bk2_2', text: '7', isCorrect: false },
        { id: 'opt_bk2_3', text: '10', isCorrect: false },
      ],
    },
    explanation: '💡 Counting backwards step by step: 9, 8, 7, 6, **5**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Finger & Hand Counting (5 Fingers on One Hand)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m3_concept_hand_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Mango Treats (Numbers 1 to 9)',
    concept: 'Hand Counting',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Hold up one hand ✋. How many fingers (including thumb) do you have on ONE hand?',
    visualEmoji: '✋',
    payload: {
      options: [
        { id: 'opt_hnd1_1', text: '5 Fingers ✋', isCorrect: true },
        { id: 'opt_hnd1_2', text: '4 Fingers', isCorrect: false },
        { id: 'opt_hnd1_3', text: '10 Fingers', isCorrect: false },
      ],
    },
    explanation: '💡 Look at your hand ✋: 1, 2, 3, 4, 5! You have **5 fingers** on one hand!',
    points: 10,
  },
];
