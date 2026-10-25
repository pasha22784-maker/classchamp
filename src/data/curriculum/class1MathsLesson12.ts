import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 12: SO MANY TOYS! (DATA HANDLING)
// Comprehensive Curriculum Covering All 7 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_12_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Sorting and Counting Toys in a Collection
  // --------------------------------------------------------------------------
  {
    id: 'c1_m12_concept_count_01',
    grade: 1,
    subject: 'maths',
    chapter: 'So Many Toys! (Data Handling)',
    concept: 'Counting Specific Item in Collection',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the toy box, there are: ⚽ ⚽ ⚽ ⚽ (football), 🚗 🚗 (cars), and 🧸 🧸 🧸 (teddy bears). How many footballs ⚽ are there?',
    visualEmoji: '⚽⚽⚽⚽ 🚗🚗 🧸🧸🧸',
    payload: {
      options: [
        { id: 'opt_dh1_1', text: '4 footballs ⚽', isCorrect: true },
        { id: 'opt_dh1_2', text: '2 footballs', isCorrect: false },
        { id: 'opt_dh1_3', text: '9 footballs', isCorrect: false },
      ],
    },
    explanation: '💡 Count the footballs one by one: 1, 2, 3, 4! There are **4 footballs ⚽**.',
    points: 10,
  },
  {
    id: 'c1_m12_concept_count_02',
    grade: 1,
    subject: 'maths',
    chapter: 'So Many Toys! (Data Handling)',
    concept: 'Counting Cars',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Look at the toy vehicles: 🚗 🚗 🚗. There are [BLANK] cars in total.',
    visualEmoji: '🚗 🚗 🚗',
    payload: {
      correctAnswer: '3',
      wordBank: ['3', '2', '5', '4'],
      displayTemplate: 'There are [BLANK] cars.',
    },
    explanation: '💡 1, 2, 3! There are **3 cars** 🚗.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Finding Which Item is the MOST (Maximum)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m12_concept_most_01',
    grade: 1,
    subject: 'maths',
    chapter: 'So Many Toys! (Data Handling)',
    concept: 'Finding the Most Numerous Toy',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A toy store shelf has: 5 spinning tops 🪀, 2 rocking horses 🐎, and 8 colorful balloons 🎈. Which toy is the MOST in number?',
    visualEmoji: '🪀 (5) | 🐎 (2) | 🎈 (8)',
    payload: {
      options: [
        { id: 'opt_ms1_1', text: 'Balloons 🎈', isCorrect: true },
        { id: 'opt_ms1_2', text: 'Rocking horses 🐎', isCorrect: false },
        { id: 'opt_ms1_3', text: 'Spinning tops 🪀', isCorrect: false },
      ],
    },
    explanation: '💡 8 is greater than 5 and 2, so **Balloons 🎈** are the MOST!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Finding Which Item is the LEAST (Minimum)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m12_concept_least_01',
    grade: 1,
    subject: 'maths',
    chapter: 'So Many Toys! (Data Handling)',
    concept: 'Finding the Fewest Toy',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In a fruit basket: 🍎 🍎 🍎 🍎 🍎 (5 apples), 🍌 🍌 (2 bananas), and 🍊 🍊 🍊 🍊 (4 oranges). Which fruit is the FEWEST (least)?',
    visualEmoji: '🍎 (5), 🍌 (2), 🍊 (4)',
    payload: {
      options: [
        { id: 'opt_ls1_1', text: 'Bananas 🍌', isCorrect: true },
        { id: 'opt_ls1_2', text: 'Apples 🍎', isCorrect: false },
        { id: 'opt_ls1_3', text: 'Oranges 🍊', isCorrect: false },
      ],
    },
    explanation: '💡 2 is the smallest number, so **Bananas 🍌** are the FEWEST!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Comparing Two Groups ("How Many More?")
  // --------------------------------------------------------------------------
  {
    id: 'c1_m12_concept_diff_01',
    grade: 1,
    subject: 'maths',
    chapter: 'So Many Toys! (Data Handling)',
    concept: 'Difference Between Groups',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Ria has 6 teddy bears 🧸 and 4 toy trains 🚂. How many MORE teddy bears does Ria have than trains?',
    visualEmoji: '🧸 (6) - 🚂 (4) = ❓',
    payload: {
      options: [
        { id: 'opt_df1_1', text: '2 more teddy bears', isCorrect: true },
        { id: 'opt_df1_2', text: '10 more', isCorrect: false },
        { id: 'opt_df1_3', text: '4 more', isCorrect: false },
      ],
    },
    explanation: '💡 Subtract 4 from 6: 6 - 4 = **2**! Ria has 2 more teddy bears than trains.',
    points: 10,
  },
  {
    id: 'c1_m12_concept_diff_02',
    grade: 1,
    subject: 'maths',
    chapter: 'So Many Toys! (Data Handling)',
    concept: 'Equal Groups Check',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Shelf A has 3 red robots 🤖. Shelf B has 3 blue robots 🤖. Do both shelves have the same number of robots?',
    visualEmoji: '🤖🤖🤖 vs 🤖🤖🤖',
    payload: {
      options: [
        { id: 'opt_eq1_1', text: 'Yes, both have EQUAL robots 🤖', isCorrect: true },
        { id: 'opt_eq1_2', text: 'No, Shelf A has more', isCorrect: false },
        { id: 'opt_eq1_3', text: 'No, Shelf B has more', isCorrect: false },
      ],
    },
    explanation: '💡 Both shelves have 3 robots, so they are **EQUAL**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Total Count of All Toys Together
  // --------------------------------------------------------------------------
  {
    id: 'c1_m12_concept_total_01',
    grade: 1,
    subject: 'maths',
    chapter: 'So Many Toys! (Data Handling)',
    concept: 'Finding Total in Table',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Amit has 3 building blocks 🧱, 2 puzzle games 🧩, and 4 crayons 🖍️. Total toys = 3 + 2 + 4 = [BLANK].',
    visualEmoji: '🧱(3) + 🧩(2) + 🖍️(4)',
    payload: {
      correctAnswer: '9',
      wordBank: ['9', '8', '7', '10'],
      displayTemplate: '3 + 2 + 4 = [BLANK]',
    },
    explanation: '💡 3 + 2 = 5, and 5 + 4 = **9** toys in total!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Order Categories from Least to Most
  // --------------------------------------------------------------------------
  {
    id: 'c1_m12_concept_ord_01',
    grade: 1,
    subject: 'maths',
    chapter: 'So Many Toys! (Data Handling)',
    concept: 'Ordering Data Categories',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these fruits from LEAST count to MOST count: Bananas (1), Apples (4), Grapes (7), Oranges (10)',
    visualEmoji: '🍌 (1), 🍎 (4), 🍇 (7), 🍊 (10)',
    payload: {
      tokens: ['Bananas (1) 🍌', 'Apples (4) 🍎', 'Grapes (7) 🍇', 'Oranges (10) 🍊'],
      scrambled: ['Oranges (10) 🍊', 'Bananas (1) 🍌', 'Grapes (7) 🍇', 'Apples (4) 🍎'],
      correctSequence: ['Bananas (1) 🍌', 'Apples (4) 🍎', 'Grapes (7) 🍇', 'Oranges (10) 🍊'],
    },
    explanation: '💡 Order from least to most: 1 (Bananas) < 4 (Apples) < 7 (Grapes) < 10 (Oranges)!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match Toys with Their Count
  // --------------------------------------------------------------------------
  {
    id: 'c1_m12_concept_match_01',
    grade: 1,
    subject: 'maths',
    chapter: 'So Many Toys! (Data Handling)',
    concept: 'Item to Exact Count Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each group of objects to its exact number count:',
    visualEmoji: '🧸 🔢',
    payload: {
      pairs: [
        { id: 'dh_p1', left: '⭐⭐ (Stars)', right: '2' },
        { id: 'dh_p2', left: '🍎🍎🍎🍎 (Apples)', right: '4' },
        { id: 'dh_p3', left: '🎈🎈🎈🎈🎈 (Balloons)', right: '5' },
        { id: 'dh_p4', left: '🌸🌸🌸 (Flowers)', right: '3' },
      ],
    },
    explanation: '💡 Count each group: 2 Stars, 4 Apples, 5 Balloons, 3 Flowers!',
    points: 15,
  },
];
