import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 ENGLISH (SANTOOR 3 / MARIGOLD 3)
// CHAPTER 6: PREPOSITIONS OF TIME & PLACE
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_ENGLISH_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Prepositions of Place (Between, Behind, Under)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e6_concept_place_01',
    grade: 3,
    subject: 'english',
    chapter: 'Prepositions of Time & Place',
    concept: 'Preposition "Between"',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The child sat [_____] her mother and father on the sofa.',
    visualEmoji: '👩 👧 👨',
    payload: {
      options: [
        { id: 'opt_plc1', text: 'between (in the middle of two)', isCorrect: true },
        { id: 'opt_plc2', text: 'under', isCorrect: false },
        { id: 'opt_plc3', text: 'at', isCorrect: false },
      ],
    },
    explanation: '💡 We use **between** when someone or something is located in the middle of two persons or objects.',
    points: 10,
  },
  {
    id: 'c3_e6_concept_place_02',
    grade: 3,
    subject: 'english',
    chapter: 'Prepositions of Time & Place',
    concept: 'Preposition "Under"',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The sleepy kitten 🐱 is resting [BLANK] the wooden study table.',
    visualEmoji: '🐱 🪵 🪑',
    payload: {
      correctAnswer: 'under',
      wordBank: ['under', 'on', 'between', 'at'],
      displayTemplate: 'The kitten is resting [BLANK] the table.',
    },
    explanation: '💡 Below or beneath a surface is expressed using **under**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Prepositions of Time (At, On, In)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e6_concept_time_01',
    grade: 3,
    subject: 'english',
    chapter: 'Prepositions of Time & Place',
    concept: 'Exact Clock Time with "At"',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Our school bell rings [_____] 8:30 AM every morning.',
    visualEmoji: '⏰ 8:30 AM 🔔',
    payload: {
      options: [
        { id: 'opt_tm1', text: 'at (at 8:30 AM)', isCorrect: true },
        { id: 'opt_tm2', text: 'on', isCorrect: false },
        { id: 'opt_tm3', text: 'in', isCorrect: false },
      ],
    },
    explanation: '💡 Exact clock times always take the preposition **at** (at 8:30 AM, at noon, at midnight)!',
    points: 10,
  },
  {
    id: 'c3_e6_concept_time_02',
    grade: 3,
    subject: 'english',
    chapter: 'Prepositions of Time & Place',
    concept: 'Days and Dates with "On"',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'We do not have to go to school [BLANK] Sunday.',
    visualEmoji: '📅 🗓️ 🏫 ❌',
    payload: {
      correctAnswer: 'on',
      wordBank: ['on', 'in', 'at', 'under'],
      displayTemplate: 'We have a holiday [BLANK] Sunday.',
    },
    explanation: '💡 Days of the week and specific dates take **on** (on Sunday, on Diwali day)!',
    points: 10,
  },
  {
    id: 'c3_e6_concept_time_03',
    grade: 3,
    subject: 'english',
    chapter: 'Prepositions of Time & Place',
    concept: 'Months and Seasons with "In"',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which preposition is used for months and seasons:\n"Flowers bloom beautifully [_____] spring."',
    visualEmoji: '🌸 🌼 🌻',
    payload: {
      options: [
        { id: 'opt_in1', text: 'in (in spring / in July)', isCorrect: true },
        { id: 'opt_in2', text: 'at', isCorrect: false },
        { id: 'opt_in3', text: 'on', isCorrect: false },
      ],
    },
    explanation: '💡 Longer periods of time like months, years, and seasons take **in**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Matching Time Prepositions & Sentence Building
  // --------------------------------------------------------------------------
  {
    id: 'c3_e6_concept_match_01',
    grade: 3,
    subject: 'english',
    chapter: 'Prepositions of Time & Place',
    concept: 'Time Rules Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each time phrase with the correct preposition:',
    visualEmoji: '⏳ ➔ 📍',
    payload: {
      pairs: [
        { id: 'e6_p1', left: '7:00 o’clock', right: 'at' },
        { id: 'e6_p2', left: 'Monday morning', right: 'on' },
        { id: 'e6_p3', left: 'December', right: 'in' },
        { id: 'e6_p4', left: 'night', right: 'at' },
      ],
    },
    explanation: '💡 at 7:00 o’clock, on Monday morning, in December, at night.',
    points: 15,
  },
  {
    id: 'c3_e6_concept_order_01',
    grade: 3,
    subject: 'english',
    chapter: 'Prepositions of Time & Place',
    concept: 'Preposition Sentence Scramble',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to form a correct prepositional sentence:',
    visualEmoji: '🍎 🧺 🌳',
    payload: {
      tokens: ['The picnic basket', 'is kept', 'under the shady', 'banyan tree.'],
      scrambled: ['under the shady', 'is kept', 'banyan tree.', 'The picnic basket'],
      correctSequence: ['The picnic basket', 'is kept', 'under the shady', 'banyan tree.'],
    },
    explanation: '💡 Correct order: "**The picnic basket is kept under the shady banyan tree.**"',
    points: 15,
  },
];
