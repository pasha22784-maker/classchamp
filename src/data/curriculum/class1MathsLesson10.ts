import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 10: HOW DO I SPEND MY DAY? (TIME)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_10_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Morning Activities (सुबह के काम)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m10_concept_morn_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How do I Spend My Day? (Time)',
    concept: 'Morning Time Activities',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When the golden sun rises 🌅 and birds chirp, what activity do you do in the MORNING?',
    visualEmoji: '🌅 🪥 🥣',
    payload: {
      options: [
        { id: 'opt_mr1_1', text: 'Wake up, brush teeth, and eat breakfast 🥣', isCorrect: true },
        { id: 'opt_mr1_2', text: 'Go to sleep for the night 😴', isCorrect: false },
        { id: 'opt_mr1_3', text: 'Look at the stars in the dark sky ✨', isCorrect: false },
      ],
    },
    explanation: '💡 In the **Morning**, when the sun rises, we wake up, brush our teeth, take a bath, and eat a healthy breakfast!',
    points: 10,
  },
  {
    id: 'c1_m10_concept_morn_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How do I Spend My Day? (Time)',
    concept: 'Time of Day for School Assembly',
    difficulty: 'easy',
    type: 'mcq',
    question: 'At what time of day does school prayer and morning assembly happen?',
    visualEmoji: '🏫 🔔 ☀️',
    payload: {
      options: [
        { id: 'opt_mr2_1', text: 'In the Morning ☀️', isCorrect: true },
        { id: 'opt_mr2_2', text: 'At midnight in dark 🌙', isCorrect: false },
        { id: 'opt_mr2_3', text: 'Late in the evening 🌆', isCorrect: false },
      ],
    },
    explanation: '💡 The school assembly and prayer always take place in the **Morning**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Afternoon Activities (दोपहर के काम)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m10_concept_noon_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How do I Spend My Day? (Time)',
    concept: 'Afternoon Lunch Time',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When the sun is high and bright in the middle of the day, what meal do we eat in the AFTERNOON?',
    visualEmoji: '☀️ 🍱 🍛',
    payload: {
      options: [
        { id: 'opt_nn1_1', text: 'Lunch 🍱', isCorrect: true },
        { id: 'opt_nn1_2', text: 'Dinner 🌙', isCorrect: false },
        { id: 'opt_nn1_3', text: 'Bedtime milk', isCorrect: false },
      ],
    },
    explanation: '💡 We eat **Lunch** in the **Afternoon**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Evening Activities (शाम के काम)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m10_concept_eve_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How do I Spend My Day? (Time)',
    concept: 'Evening Play Time',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The school is over and the sun is beginning to set 🌇. What do children usually do in the EVENING?',
    visualEmoji: '🌇 ⚽ 🛝',
    payload: {
      options: [
        { id: 'opt_ev1_1', text: 'Play outdoor games in the park with friends ⚽', isCorrect: true },
        { id: 'opt_ev1_2', text: 'Wake up from night sleep 🥱', isCorrect: false },
        { id: 'opt_ev1_3', text: 'Eat early breakfast', isCorrect: false },
      ],
    },
    explanation: '💡 In the **Evening**, children love to play in the park and do homework!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Night Activities (रात के काम)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m10_concept_night_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How do I Spend My Day? (Time)',
    concept: 'Night Bedtime',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'When the moon and stars shine in the dark sky 🌙✨, it is time for [BLANK] at night.',
    visualEmoji: '🌙 🛌 😴',
    payload: {
      correctAnswer: 'sleep',
      wordBank: ['sleep', 'swimming', 'school', 'sunshine'],
      displayTemplate: 'It is time for [BLANK] at night. 🛌',
    },
    explanation: '💡 At **Night**, we eat dinner and go to **sleep**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Ordering Daily Routine (Sequence of Events)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m10_concept_seq_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How do I Spend My Day? (Time)',
    concept: 'Ordering Daily Routine',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the parts of the day in chronological order from start to finish:',
    visualEmoji: '⏰ 🌅 ☀️ 🌇 🌙',
    payload: {
      tokens: ['Morning 🌅', 'Afternoon ☀️', 'Evening 🌇', 'Night 🌙'],
      scrambled: ['Evening 🌇', 'Morning 🌅', 'Night 🌙', 'Afternoon ☀️'],
      correctSequence: ['Morning 🌅', 'Afternoon ☀️', 'Evening 🌇', 'Night 🌙'],
    },
    explanation: '💡 Correct order of the day: **Morning 🌅 -> Afternoon ☀️ -> Evening 🌇 -> Night 🌙**!',
    points: 15,
  },
  {
    id: 'c1_m10_concept_seq_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How do I Spend My Day? (Time)',
    concept: 'Sequence of Getting Ready for School',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Put these morning steps in the correct order to get ready for school:',
    visualEmoji: '🎒 🪥 🚿 🚌',
    payload: {
      tokens: [
        'Wake up from bed 🥱',
        'Brush teeth & bathe 🪥',
        'Wear clean uniform 👔',
        'Board the school bus 🚌',
      ],
      scrambled: [
        'Wear clean uniform 👔',
        'Wake up from bed 🥱',
        'Board the school bus 🚌',
        'Brush teeth & bathe 🪥',
      ],
      correctSequence: [
        'Wake up from bed 🥱',
        'Brush teeth & bathe 🪥',
        'Wear clean uniform 👔',
        'Board the school bus 🚌',
      ],
    },
    explanation: '💡 Wake up -> Brush & bathe -> Wear uniform -> Board the school bus!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Which Activity Takes Longer? (Duration of Time)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m10_concept_dur_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How do I Spend My Day? (Time)',
    concept: 'Comparing Time Duration',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which activity takes MORE time (longer duration)?',
    visualEmoji: '⏳ 🧼 vs 🏫',
    payload: {
      options: [
        { id: 'opt_dr1_1', text: 'Studying in school for full day 🏫', isCorrect: true },
        { id: 'opt_dr1_2', text: 'Washing your hands with soap 🧼', isCorrect: false },
        { id: 'opt_dr1_3', text: 'Blinking your eye once 😉', isCorrect: false },
      ],
    },
    explanation: '💡 School takes many hours (longer time), whereas washing hands takes only a few seconds!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match Meal to Time of Day
  // --------------------------------------------------------------------------
  {
    id: 'c1_m10_concept_match_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How do I Spend My Day? (Time)',
    concept: 'Meal and Time Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each meal to the correct time of day:',
    visualEmoji: '🍽️ ⏰',
    payload: {
      pairs: [
        { id: 'mp_tm1', left: 'Breakfast 🥣', right: 'Morning 🌅' },
        { id: 'mp_tm2', left: 'Lunch 🍱', right: 'Afternoon ☀️' },
        { id: 'mp_tm3', left: 'Snacks & Play ⚽', right: 'Evening 🌇' },
        { id: 'mp_tm4', left: 'Dinner & Bed 🌙', right: 'Night 🛌' },
      ],
    },
    explanation: '💡 Breakfast in morning, Lunch in afternoon, Snacks in evening, Dinner at night!',
    points: 15,
  },
];
