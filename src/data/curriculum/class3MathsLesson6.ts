import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 6: TIME GOES ON (CLOCKS & CALENDARS)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Reading Analog Clock (घड़ी देखना)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m6_concept_clock_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Time Goes On (Clocks & Calendars)',
    concept: 'Clock Hands and Minutes in an Hour',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many minutes does the long minute hand of a wall clock ⏰ take to complete one full round (1 hour)?',
    visualEmoji: '⏰ 1️⃣ hour = ❓ min',
    payload: {
      options: [
        { id: 'opt_ck1_1', text: '60 minutes (1 Hour = 60 Minutes)', isCorrect: true },
        { id: 'opt_ck1_2', text: '100 minutes', isCorrect: false },
        { id: 'opt_ck1_3', text: '24 minutes', isCorrect: false },
      ],
    },
    explanation: '💡 **1 Hour = 60 Minutes**! When the minute hand goes all the way around the clock face, 60 minutes pass.',
    points: 10,
  },
  {
    id: 'c3_m6_concept_clock_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Time Goes On (Clocks & Calendars)',
    concept: 'Reading Half Past Three',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'When the short hour hand is between 3 and 4, and the long minute hand points straight down at 6, the time is 3:[BLANK].',
    visualEmoji: '⏰ 🕒',
    payload: {
      correctAnswer: '30',
      wordBank: ['30', '15', '45', '00'],
      displayTemplate: 'The time is 3:[BLANK] (Half past 3).',
    },
    explanation: '💡 Minute hand at 6 means 6 × 5 = **30 minutes**, so it is **3:30**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Seconds, Minutes, Hours, Days Duration
  // --------------------------------------------------------------------------
  {
    id: 'c3_m6_concept_dur_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Time Goes On (Clocks & Calendars)',
    concept: 'Activities Taking Seconds',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of these activities takes only a few SECONDS to complete?',
    visualEmoji: '⏱️ 👁️ vs 🧶',
    payload: {
      options: [
        { id: 'opt_dr1_1', text: 'Blinking your eye or snapping your fingers 👁️ (Takes seconds)', isCorrect: true },
        { id: 'opt_dr1_2', text: 'Knitting a warm woolen sweater 🧶', isCorrect: false },
        { id: 'opt_dr1_3', text: 'Growing a tall mango tree from a seed 🥭', isCorrect: false },
      ],
    },
    explanation: '💡 Blinking takes less than **1 second**!',
    points: 10,
  },
  {
    id: 'c3_m6_concept_dur_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Time Goes On (Clocks & Calendars)',
    concept: 'Activities Taking Months',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which event takes several MONTHS to happen?',
    visualEmoji: '🌾 ❄️ ☀️',
    payload: {
      options: [
        { id: 'opt_dr2_1', text: 'Changing of the winter season into summer season ❄️➡️☀️', isCorrect: true },
        { id: 'opt_dr2_2', text: 'Drinking a glass of cold water', isCorrect: false },
        { id: 'opt_dr2_3', text: 'Brushing your teeth', isCorrect: false },
      ],
    },
    explanation: '💡 Seasons take **months** to change across the year!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: The Calendar (Days, Weeks & Leap Year)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m6_concept_cal_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Time Goes On (Clocks & Calendars)',
    concept: 'Days in a Leap Year',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A normal year has 365 days. How many days are in a LEAP YEAR (when February has 29 days)?',
    visualEmoji: '📅 3️⃣6️⃣6️⃣',
    payload: {
      options: [
        { id: 'opt_cl1_1', text: '366 days (One extra day in February)', isCorrect: true },
        { id: 'opt_cl1_2', text: '370 days', isCorrect: false },
        { id: 'opt_cl1_3', text: '360 days', isCorrect: false },
      ],
    },
    explanation: '💡 A Leap Year occurs every 4 years and has **366 days** because February gets 29 days!',
    points: 10,
  },
  {
    id: 'c3_m6_concept_cal_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Time Goes On (Clocks & Calendars)',
    concept: 'Weeks in One Year',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'There are [BLANK] complete weeks in one full calendar year.',
    visualEmoji: '📅 🗓️',
    payload: {
      correctAnswer: '52',
      wordBank: ['52', '12', '365', '24'],
      displayTemplate: 'There are [BLANK] weeks in a year.',
    },
    explanation: '💡 One year has **52 weeks** (52 × 7 = 364 days)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Order Time Durations (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m6_concept_order_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Time Goes On (Clocks & Calendars)',
    concept: 'Order Units of Time Duration',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the units of time from SHORTEST to LONGEST:',
    visualEmoji: '⏱️ ⏰ 📅',
    payload: {
      tokens: ['1. Second', '2. Minute', '3. Hour', '4. Day', '5. Year'],
      scrambled: ['3. Hour', '1. Second', '5. Year', '2. Minute', '4. Day'],
      correctSequence: ['1. Second', '2. Minute', '3. Hour', '4. Day', '5. Year'],
    },
    explanation: '💡 Shortest to longest: **Second < Minute < Hour < Day < Year**!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Match Activity to Its Realistic Time Duration
  // --------------------------------------------------------------------------
  {
    id: 'c3_m6_concept_match_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Time Goes On (Clocks & Calendars)',
    concept: 'Activity to Duration Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each event to the time duration it realistically takes:',
    visualEmoji: '⏳ 🎯',
    payload: {
      pairs: [
        { id: 'tm_p1', left: 'Blink an eye 😉', right: 'Few seconds' },
        { id: 'tm_p2', left: 'Boil a cup of milk 🥛', right: 'Few minutes' },
        { id: 'tm_p3', left: 'School day classes 🏫', right: '6 hours' },
        { id: 'tm_p4', left: 'Growing wheat crop 🌾', right: 'Few months' },
      ],
    },
    explanation: '💡 Eye blink = seconds, boiling milk = minutes, school day = hours, growing wheat = months!',
    points: 15,
  },
];
