import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 6: VEGETABLE FARM (SUBTRACTION UP TO 9)
// Comprehensive Curriculum Covering All 7 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Taking Away (निकाल देना / How Many Left)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m6_concept_take_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Taking Away Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'There were 5 fresh orange carrots in the farm: 🥕🥕🥕🥕🥕. A bunny comes and eats 2 carrots 🐇. How many carrots are LEFT in the farm?',
    visualEmoji: '🥕🥕🥕🥕🥕 - 🥕🥕',
    payload: {
      options: [
        { id: 'opt_sub1_1', text: '3 Carrots left', isCorrect: true },
        { id: 'opt_sub1_2', text: '2 Carrots left', isCorrect: false },
        { id: 'opt_sub1_3', text: '4 Carrots left', isCorrect: false },
      ],
    },
    explanation: '💡 5 take away 2 leaves **3 carrots**! 5 - 2 = **3** 🥕.',
    points: 10,
  },
  {
    id: 'c1_m6_concept_take_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Crossing Out to Subtract',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Look at 6 juicy red tomatoes: 🍅🍅🍅🍅🍅🍅. Chef takes 2 tomatoes to make soup. How many tomatoes are left?',
    visualEmoji: '🍅🍅🍅🍅🍅🍅 - 🍅🍅',
    payload: {
      correctAnswer: '4',
      wordBank: ['4', '3', '5', '2'],
      displayTemplate: '6 - 2 = [BLANK] tomatoes 🍅',
    },
    explanation: '💡 Take away 2 from 6: 6 - 2 = **4 tomatoes left** 🍅!',
    points: 10,
  },
  {
    id: 'c1_m6_concept_take_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Balloons Popping Story',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A boy was holding 4 shiny balloons 🎈🎈🎈🎈. Suddenly 1 balloon popped 💥! How many balloons are left?',
    visualEmoji: '🎈🎈🎈🎈 - 💥',
    payload: {
      options: [
        { id: 'opt_sub3_1', text: '3 Balloons left', isCorrect: true },
        { id: 'opt_sub3_2', text: '2 Balloons left', isCorrect: false },
        { id: 'opt_sub3_3', text: '0 Balloons left', isCorrect: false },
      ],
    },
    explanation: '💡 4 - 1 = **3 balloons**! One less than 4 is 3.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Counting Backward to Subtract (पीछे गिनकर घटाना)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m6_concept_countback_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Count Back to Subtract',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Start at 7 and count BACKWARD 2 steps: "7... 6, 5". What is 7 - 2?',
    visualEmoji: '7️⃣ ⬅️ -2 ⬅️ ?',
    payload: {
      options: [
        { id: 'opt_cb1_1', text: '5', isCorrect: true },
        { id: 'opt_cb1_2', text: '6', isCorrect: false },
        { id: 'opt_cb1_3', text: '4', isCorrect: false },
      ],
    },
    explanation: '💡 Count 2 steps backwards from 7: 6, **5**! 7 - 2 = 5.',
    points: 10,
  },
  {
    id: 'c1_m6_concept_countback_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Count Back to Subtract',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Solve by counting backward: 8 - 3 = [BLANK]',
    visualEmoji: '8️⃣ ⬅️ -3 ⬅️ ❓',
    payload: {
      correctAnswer: '5',
      wordBank: ['5', '6', '4', '7'],
      displayTemplate: '8 - 3 = [BLANK]',
    },
    explanation: '💡 Count 3 steps back from 8: 7, 6, **5**! So 8 - 3 = **5**.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: The Minus Sign (-) Meaning
  // --------------------------------------------------------------------------
  {
    id: 'c1_m6_concept_symbol_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Minus Sign Meaning',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What does the minus sign "-" mean in a math problem?',
    visualEmoji: '➖',
    payload: {
      options: [
        { id: 'opt_ms1_1', text: 'Take away or SUBTRACT', isCorrect: true },
        { id: 'opt_ms1_2', text: 'Add together', isCorrect: false },
        { id: 'opt_ms1_3', text: 'Multiply into groups', isCorrect: false },
      ],
    },
    explanation: '💡 The minus sign **-** tells you to take away or remove objects!',
    points: 10,
  },
  {
    id: 'c1_m6_concept_symbol_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Subtraction Equations Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each subtraction problem with its correct answer:',
    visualEmoji: '➖ 🔢',
    payload: {
      pairs: [
        { id: 'sub_eq1', left: '9 - 1', right: '= 8' },
        { id: 'sub_eq2', left: '7 - 3', right: '= 4' },
        { id: 'sub_eq3', left: '6 - 4', right: '= 2' },
        { id: 'sub_eq4', left: '8 - 5', right: '= 3' },
      ],
    },
    explanation: '💡 9-1=8, 7-3=4, 6-4=2, 8-5=3! Great subtraction!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Subtracting Zero (0) and Subtracting Itself (N - N = 0)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m6_concept_zero_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Subtracting Zero Rule',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A farmer has 6 watermelons 🍉. He sells ZERO (0) watermelons. How many watermelons are left with the farmer?',
    visualEmoji: '🍉🍉🍉🍉🍉🍉 - 0️⃣',
    payload: {
      options: [
        { id: 'opt_zsub1_1', text: '6 Watermelons', isCorrect: true },
        { id: 'opt_zsub1_2', text: '0 Watermelons', isCorrect: false },
        { id: 'opt_zsub1_3', text: '5 Watermelons', isCorrect: false },
      ],
    },
    explanation: '💡 When you take away **0**, nothing is removed! 6 - 0 = **6**.',
    points: 10,
  },
  {
    id: 'c1_m6_concept_zero_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Subtracting Same Number (N - N = 0)',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A plate has 3 sweet laddus 🟡🟡🟡. You eat all 3 laddus! How many laddus are left on the plate?',
    visualEmoji: '🍽️ 🟡🟡🟡 - 🟡🟡🟡',
    payload: {
      options: [
        { id: 'opt_zsub2_1', text: '0 Laddus', isCorrect: true },
        { id: 'opt_zsub2_2', text: '1 Laddu', isCorrect: false },
        { id: 'opt_zsub2_3', text: '3 Laddus', isCorrect: false },
      ],
    },
    explanation: '💡 When you subtract a number from itself, the result is always **ZERO (0)**! 3 - 3 = **0**.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Comparing to Find the Difference (How Many More?)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m6_concept_diff_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'How Many More Comparison',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Aarav has 7 colorful pencils ✏️. Sneha has 4 pencils. How many MORE pencils does Aarav have than Sneha?',
    visualEmoji: '7️⃣ pencils  vs  4️⃣ pencils',
    payload: {
      options: [
        { id: 'opt_dif1_1', text: '3 More pencils', isCorrect: true },
        { id: 'opt_dif1_2', text: '4 More pencils', isCorrect: false },
        { id: 'opt_dif1_3', text: '2 More pencils', isCorrect: false },
      ],
    },
    explanation: '💡 Subtract to find the difference: 7 - 4 = **3**! Aarav has 3 more pencils than Sneha.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Subtraction Word Stories (Real Life Farm Stories)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m6_concept_story_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Birds Flying Away Story',
    difficulty: 'medium',
    type: 'fill_blank',
    question: '8 chirping birds were sitting on a wooden fence: 🐦🐦🐦🐦🐦🐦🐦🐦. 5 birds flew into the blue sky 💨. How many birds are left on the fence?',
    visualEmoji: '🐦(8) - 💨(5)',
    payload: {
      correctAnswer: '3',
      wordBank: ['3', '2', '4', '5'],
      displayTemplate: '8 - 5 = [BLANK] birds 🐦',
    },
    explanation: '💡 8 - 5 = **3 birds left** on the fence!',
    points: 10,
  },
  {
    id: 'c1_m6_concept_story_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Vegetable Farm (Subtraction up to 9)',
    concept: 'Flower Garden Story',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'There were 9 blooming sunflowers in the garden 🌻. Priya plucked 3 sunflowers for a vase. How many sunflowers are still blooming?',
    visualEmoji: '🌻(9) - 🌻(3)',
    payload: {
      correctAnswer: '6',
      wordBank: ['6', '5', '7', '8'],
      displayTemplate: '9 - 3 = [BLANK] sunflowers 🌻',
    },
    explanation: '💡 9 - 3 = **6 sunflowers blooming** in the garden!',
    points: 10,
  },
];
