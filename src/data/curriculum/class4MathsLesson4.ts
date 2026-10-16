import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 MATHEMATICS (MATH-MAGIC 4)
// CHAPTER 4: TICK-TICK-TICK (12H VS 24H CLOCK)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_MATHS_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 12-Hour vs 24-Hour Railway Time Conversion
  // --------------------------------------------------------------------------
  {
    id: 'c4_m4_concept_conv_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tick-Tick-Tick (12h vs 24h Clock)',
    concept: 'Converting PM to 24-Hour Clock',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A railway departure board 🚆 shows "17:30". What time is this on a standard 12-hour clock?',
    visualEmoji: '🚆 1️⃣7️⃣:3️⃣0️⃣ ➔ ❓',
    payload: {
      options: [
        { id: 'opt_cl1', text: '5:30 PM (17:30 - 12:00 = 5:30 PM)', isCorrect: true },
        { id: 'opt_cl2', text: '7:30 PM', isCorrect: false },
        { id: 'opt_cl3', text: '5:30 AM', isCorrect: false },
      ],
    },
    explanation: '💡 For any 24-hour time after 12:00 noon, subtract 12 to get PM: 17:30 - 12:00 = **5:30 PM**!',
    points: 10,
  },
  {
    id: 'c4_m4_concept_conv_02',
    grade: 4,
    subject: 'maths',
    chapter: 'Tick-Tick-Tick (12h vs 24h Clock)',
    concept: 'Converting 8:30 PM to 24-Hour Time',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Dinner time at 8:30 PM is written as [BLANK] hours in 24-hour railway time.',
    visualEmoji: '🍽️ 8:30 PM + 12:00 = ❓',
    payload: {
      correctAnswer: '20:30',
      wordBank: ['20:30', '18:30', '08:30', '22:30'],
      displayTemplate: '8:30 PM = [BLANK] hours.',
    },
    explanation: '💡 Add 12 to evening PM hours: 8:30 + 12:00 = **20:30 hours**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Expiry Date Calculations on Food & Medicines
  // --------------------------------------------------------------------------
  {
    id: 'c4_m4_concept_exp_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tick-Tick-Tick (12h vs 24h Clock)',
    concept: 'Reading Expiry Dates',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A packet of butter 🧈 has "Mfg: 15/01/26" and says "Best before 180 days from manufacture". Why should you check this date?',
    visualEmoji: '🧈 📅 🏷️',
    payload: {
      options: [
        { id: 'opt_ex1', text: 'To ensure the food is fresh and safe to eat before it spoils', isCorrect: true },
        { id: 'opt_ex2', text: 'To know how much it weighs', isCorrect: false },
        { id: 'opt_ex3', text: 'To find out the shopkeeper’s name', isCorrect: false },
      ],
    },
    explanation: '💡 The expiry or best-before date tells us the maximum time the food or medicine stays **fresh and safe** to consume!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Elapsed Time (समय का अंतर)
  // --------------------------------------------------------------------------
  {
    id: 'c4_m4_concept_elap_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tick-Tick-Tick (12h vs 24h Clock)',
    concept: 'Movie Duration Elapsed Time',
    difficulty: 'medium',
    type: 'mcq',
    question: 'An animation movie started at 3:15 PM and finished at 5:45 PM.\nHow long did the movie run?',
    visualEmoji: '🎬 3:15 PM ➔ 5:45 PM',
    payload: {
      options: [
        { id: 'opt_dur1', text: '2 hours 30 minutes', isCorrect: true },
        { id: 'opt_dur2', text: '2 hours 15 minutes', isCorrect: false },
        { id: 'opt_dur3', text: '3 hours', isCorrect: false },
      ],
    },
    explanation: '💡 From 3:15 to 5:15 is 2 hours, plus another 30 minutes to 5:45 = **2 hours 30 minutes**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Matching 12h & 24h Clocks and Timeline Ordering
  // --------------------------------------------------------------------------
  {
    id: 'c4_m4_concept_match_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tick-Tick-Tick (12h vs 24h Clock)',
    concept: '12-Hour to 24-Hour Time Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the 12-hour time with its corresponding 24-hour railway clock time:',
    visualEmoji: '🕰️ ➔ ⏰',
    payload: {
      pairs: [
        { id: 'ck_p1', left: '1:00 PM', right: '13:00 hours' },
        { id: 'ck_p2', left: '6:00 PM', right: '18:00 hours' },
        { id: 'ck_p3', left: '9:15 PM', right: '21:15 hours' },
        { id: 'ck_p4', left: '12:00 Midnight', right: '00:00 hours' },
      ],
    },
    explanation: '💡 1 PM = 13:00; 6 PM = 18:00; 9:15 PM = 21:15; 12 Midnight = 00:00.',
    points: 15,
  },
  {
    id: 'c4_m4_concept_order_01',
    grade: 4,
    subject: 'maths',
    chapter: 'Tick-Tick-Tick (12h vs 24h Clock)',
    concept: 'Daily Routine Clock Order',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange these daily events in chronological order from earliest to latest:',
    visualEmoji: '🌅 ➔ ☀️ ➔ 🌇 ➔ 🌙',
    payload: {
      tokens: ['Waking up at 06:30 hours', 'School lunch at 12:30 hours', 'Playground games at 17:00 hours', 'Going to sleep at 21:30 hours'],
      scrambled: ['Going to sleep at 21:30 hours', 'School lunch at 12:30 hours', 'Waking up at 06:30 hours', 'Playground games at 17:00 hours'],
      correctSequence: ['Waking up at 06:30 hours', 'School lunch at 12:30 hours', 'Playground games at 17:00 hours', 'Going to sleep at 21:30 hours'],
    },
    explanation: '💡 24-hour chronological sequence: 06:30 ➔ 12:30 ➔ 17:00 ➔ 21:30!',
    points: 15,
  },
];
