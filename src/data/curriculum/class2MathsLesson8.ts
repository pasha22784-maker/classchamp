import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 MATHEMATICS (JOYFUL MATHEMATICS 2)
// CHAPTER 8: WHICH SEASON IS IT? (TIME & MONTHS)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_MATHS_LESSON_8_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Days of the Week (सप्ताह के सात दिन)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m8_concept_days_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'Total Days in a Week',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many days are there in one complete week from Monday to Sunday?',
    visualEmoji: '📅 7️⃣',
    payload: {
      options: [
        { id: 'opt_dw1_1', text: '7 days', isCorrect: true },
        { id: 'opt_dw1_2', text: '5 days', isCorrect: false },
        { id: 'opt_dw1_3', text: '12 days', isCorrect: false },
      ],
    },
    explanation: '💡 There are **7 days** in every week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday!',
    points: 10,
  },
  {
    id: 'c2_m8_concept_days_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'Yesterday and Tomorrow',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'If TODAY is Wednesday, then TOMORROW will be [BLANK].',
    visualEmoji: '📅 ➡️ ❓',
    payload: {
      correctAnswer: 'Thursday',
      wordBank: ['Thursday', 'Tuesday', 'Friday', 'Sunday'],
      displayTemplate: 'If today is Wednesday, tomorrow will be [BLANK].',
    },
    explanation: '💡 Wednesday comes before **Thursday**! Tomorrow is Thursday.',
    points: 10,
  },
  {
    id: 'c2_m8_concept_days_03',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'Weekend Holiday Day',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which day of the week is usually a fun school holiday for children everywhere?',
    visualEmoji: '☀️ 🎈 🏫',
    payload: {
      options: [
        { id: 'opt_dw3_1', text: 'Sunday', isCorrect: true },
        { id: 'opt_dw3_2', text: 'Monday', isCorrect: false },
        { id: 'opt_dw3_3', text: 'Wednesday', isCorrect: false },
      ],
    },
    explanation: '💡 **Sunday (रविवार)** is the weekly holiday!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Months of the Year (साल के 12 महीने)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m8_concept_months_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'First Month of the Year',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which month begins the New Year as the very 1st month on the calendar?',
    visualEmoji: '🎉 1️⃣ 📅',
    payload: {
      options: [
        { id: 'opt_mn1_1', text: 'January', isCorrect: true },
        { id: 'opt_mn1_2', text: 'March', isCorrect: false },
        { id: 'opt_mn1_3', text: 'December', isCorrect: false },
      ],
    },
    explanation: '💡 **January** is the 1st month of the year!',
    points: 10,
  },
  {
    id: 'c2_m8_concept_months_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'Shortest Month',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which month has the fewest number of days (28 or 29 days)?',
    visualEmoji: '❄️ 2️⃣8️⃣ 📅',
    payload: {
      options: [
        { id: 'opt_mn2_1', text: 'February', isCorrect: true },
        { id: 'opt_mn2_2', text: 'July', isCorrect: false },
        { id: 'opt_mn2_3', text: 'August', isCorrect: false },
      ],
    },
    explanation: '💡 **February** is the shortest month with 28 days (and 29 in a Leap Year)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: The Four Seasons in India (ऋतुएँ)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m8_concept_seasons_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'Summer Season Features',
    difficulty: 'easy',
    type: 'mcq',
    question: 'During May and June, the sun shines very hot ☀️, schools have vacations, and we eat sweet mangoes 🥭. Which season is this?',
    visualEmoji: '☀️ 🥭 🏖️',
    payload: {
      options: [
        { id: 'opt_sn1_1', text: 'Summer Season', isCorrect: true },
        { id: 'opt_sn1_2', text: 'Winter Season', isCorrect: false },
        { id: 'opt_sn1_3', text: 'Rainy Season', isCorrect: false },
      ],
    },
    explanation: '💡 Hot sunny days and sweet mangoes happen during the **Summer season**!',
    points: 10,
  },
  {
    id: 'c2_m8_concept_seasons_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'Rainy Monsoon Season',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'When dark clouds bring heavy rain 🌧️, we carry an umbrella ☂️ in the [BLANK] season.',
    visualEmoji: '🌧️ ☂️ 🌈',
    payload: {
      correctAnswer: 'rainy',
      wordBank: ['rainy', 'winter', 'dry', 'snowy'],
      displayTemplate: 'We carry an umbrella in the [BLANK] season.',
    },
    explanation: '💡 In the **rainy (monsoon)** season, we need raincoats and umbrellas! 🌧️',
    points: 10,
  },
  {
    id: 'c2_m8_concept_seasons_03',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'Winter Warm Clothes',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In December and January, mornings are chilly cold ❄️. What do we wear to stay warm?',
    visualEmoji: '❄️ 🧣 🧤 🧥',
    payload: {
      options: [
        { id: 'opt_sn3_1', text: 'Woolen sweaters, jackets, and caps 🧥', isCorrect: true },
        { id: 'opt_sn3_2', text: 'Swimsuits', isCorrect: false },
        { id: 'opt_sn3_3', text: 'Raincoat', isCorrect: false },
      ],
    },
    explanation: '💡 In **Winter (सर्दी)**, we wear cozy woolen clothes to protect against the cold wind!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Order the Days of the Week (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m8_concept_order_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'Days of the Week Sequence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the first 5 weekdays in correct sequential order:',
    visualEmoji: '📅 🗓️',
    payload: {
      tokens: ['1. Monday', '2. Tuesday', '3. Wednesday', '4. Thursday', '5. Friday'],
      scrambled: ['3. Wednesday', '1. Monday', '5. Friday', '2. Tuesday', '4. Thursday'],
      correctSequence: ['1. Monday', '2. Tuesday', '3. Wednesday', '4. Thursday', '5. Friday'],
    },
    explanation: '💡 Sequence of school weekdays: **Monday -> Tuesday -> Wednesday -> Thursday -> Friday**!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Match Season to Clothes and Food
  // --------------------------------------------------------------------------
  {
    id: 'c2_m8_concept_match_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Which Season is it? (Time & Months)',
    concept: 'Season Match Pairs',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each season to its typical item or activity:',
    visualEmoji: '🌦️ 👗 🍉',
    payload: {
      pairs: [
        { id: 'sn_p1', left: 'Summer ☀️', right: 'Watermelon & Cotton clothes 🍉' },
        { id: 'sn_p2', left: 'Rainy / Monsoon 🌧️', right: 'Umbrella & Paper boats ⛵' },
        { id: 'sn_p3', left: 'Winter ❄️', right: 'Woolen sweater & Warm milk 🧣' },
        { id: 'sn_p4', left: 'Spring 🌸', right: 'Blooming flowers & Pleasant breeze 🌺' },
      ],
    },
    explanation: '💡 Summer = Watermelon, Monsoon = Umbrella, Winter = Woolens, Spring = Flowers!',
    points: 15,
  },
];
