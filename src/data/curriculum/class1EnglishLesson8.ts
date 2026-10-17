import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 ENGLISH (MRIDANG & MARIGOLD)
// CHAPTER 8: SENTENCE SCRAMBLE & STORY WORDS
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_ENGLISH_LESSON_8_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Capital Letter at the Beginning of a Sentence
  // --------------------------------------------------------------------------
  {
    id: 'c1_e8_concept_cap_01',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Capital Letter Start',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Every good English sentence must ALWAYS start with which type of letter?',
    visualEmoji: '🔤 ✍️',
    payload: {
      options: [
        { id: 'opt_cp1_1', text: 'A CAPITAL letter', isCorrect: true },
        { id: 'opt_cp1_2', text: 'A small lowercase letter only', isCorrect: false },
        { id: 'opt_cp1_3', text: 'A number', isCorrect: false },
      ],
    },
    explanation: '💡 Remember the Golden Rule: **The first letter of every sentence is ALWAYS a CAPITAL letter!**',
    points: 10,
  },
  {
    id: 'c1_e8_concept_cap_02',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Spot the Correct Capital Letter',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which sentence begins correctly with a capital letter?',
    visualEmoji: '🐶 🦴',
    payload: {
      options: [
        { id: 'opt_cp2_1', text: 'The dog loves to play.', isCorrect: true },
        { id: 'opt_cp2_2', text: 'the dog loves to play.', isCorrect: false },
        { id: 'opt_cp2_3', text: 'tHe dog loves to play.', isCorrect: false },
      ],
    },
    explanation: '💡 "**The dog loves to play.**" starts with a big capital "**T**"!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Full Stop (.) at the End of a Sentence
  // --------------------------------------------------------------------------
  {
    id: 'c1_e8_concept_stop_01',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Full Stop Rule',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the sentence: "I love reading books [BLANK]" What mark must come at the very end to stop the sentence?',
    visualEmoji: '📚 🛑',
    payload: {
      options: [
        { id: 'opt_fs1_1', text: 'A Full Stop', isCorrect: true },
        { id: 'opt_fs1_2', text: 'A comma', isCorrect: false },
        { id: 'opt_fs1_3', text: 'No mark at all', isCorrect: false },
      ],
    },
    explanation: '💡 A telling sentence always finishes with a **full stop (.)** to tell us the thought is complete!',
    points: 10,
  },
  {
    id: 'c1_e8_concept_stop_02',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Identifying Completed Sentence',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which sentence has BOTH a capital letter at the start AND a full stop at the end?',
    visualEmoji: '🐱 🥛',
    payload: {
      options: [
        { id: 'opt_fs2_1', text: 'Cats drink milk.', isCorrect: true },
        { id: 'opt_fs2_2', text: 'cats drink milk', isCorrect: false },
        { id: 'opt_fs2_3', text: 'Cats drink milk', isCorrect: false },
      ],
    },
    explanation: '💡 "**Cats drink milk.**" starts with capital "**C**" and ends with full stop "**.**"!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Word Order (Who + Does What)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e8_concept_order_01',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Sentence Meaning & Word Order',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which group of words makes a complete, sensible sentence?',
    visualEmoji: '🐦 🌳',
    payload: {
      options: [
        { id: 'opt_or1_1', text: 'Birds sing sweet songs.', isCorrect: true },
        { id: 'opt_or1_2', text: 'Sing sweet birds songs.', isCorrect: false },
        { id: 'opt_or1_3', text: 'Sweet songs birds.', isCorrect: false },
      ],
    },
    explanation: '💡 "**Birds sing sweet songs.**" is in the right order: Who (Birds) + What they do (sing) + What (sweet songs)!',
    points: 10,
  },
  {
    id: 'c1_e8_concept_order_02',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Unscramble 3-Word Sentence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Put these words in the correct order to say what the rabbit does:',
    visualEmoji: '🐇 🥕',
    payload: {
      tokens: ['The', 'rabbit', 'hops.'],
      scrambled: ['hops.', 'The', 'rabbit'],
      correctSequence: ['The', 'rabbit', 'hops.'],
    },
    explanation: '💡 Correct order: "**The**" -> "**rabbit**" -> "**hops.**"',
    points: 15,
  },
  {
    id: 'c1_e8_concept_order_03',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Unscramble 4-Word Sentence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to make a sweet story sentence:',
    visualEmoji: '🍎 😋',
    payload: {
      tokens: ['I', 'like', 'red', 'apples.'],
      scrambled: ['apples.', 'I', 'red', 'like'],
      correctSequence: ['I', 'like', 'red', 'apples.'],
    },
    explanation: '💡 Correct order: "**I**" -> "**like**" -> "**red**" -> "**apples.**"',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Asking Sentences (Question Mark ?)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e8_concept_quest_01',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Question Mark Recognition',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When we ask someone a question (like "What is your name?"), which punctuation mark do we put at the end?',
    visualEmoji: '❓ 👦',
    payload: {
      options: [
        { id: 'opt_qs1_1', text: 'Question mark', isCorrect: true },
        { id: 'opt_qs1_2', text: 'Full stop', isCorrect: false },
        { id: 'opt_qs1_3', text: 'Exclamation mark', isCorrect: false },
      ],
    },
    explanation: '💡 Asking questions always end with a **question mark ( ? )**! ❓',
    points: 10,
  },
  {
    id: 'c1_e8_concept_quest_02',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Telling vs Asking Sentence',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which of these is an ASKING sentence (question)?',
    visualEmoji: '🎒 🤔',
    payload: {
      options: [
        { id: 'opt_qs2_1', text: 'Where is my school bag?', isCorrect: true },
        { id: 'opt_qs2_2', text: 'This is my school bag.', isCorrect: false },
        { id: 'opt_qs2_3', text: 'I have a bag.', isCorrect: false },
      ],
    },
    explanation: '💡 "**Where is my school bag?**" is asking for information, so it ends with a question mark!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Sight Words in Story Sentences
  // --------------------------------------------------------------------------
  {
    id: 'c1_e8_concept_sight_01',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Sight Word: CAN',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Complete the fun sentence: "The little duckling [BLANK] swim in the pond." 🦆',
    visualEmoji: '🦆 🌊',
    payload: {
      correctAnswer: 'can',
      wordBank: ['can', 'under', 'are', 'fly'],
      displayTemplate: 'The little duckling [BLANK] swim in the pond.',
    },
    explanation: '💡 "The little duckling **can** swim in the pond!" 🦆',
    points: 10,
  },
  {
    id: 'c1_e8_concept_sight_02',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Sight Word: SEE',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Look at the night sky: "I [BLANK] many shiny stars." ✨',
    visualEmoji: '✨ 🌙',
    payload: {
      correctAnswer: 'see',
      wordBank: ['see', 'go', 'eat', 'run'],
      displayTemplate: 'I [BLANK] many shiny stars.',
    },
    explanation: '💡 "I **see** many shiny stars." ✨',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Complete the Sentence Pair Match
  // --------------------------------------------------------------------------
  {
    id: 'c1_e8_concept_match_01',
    grade: 1,
    subject: 'english',
    chapter: 'Sentence Scramble & Story Words',
    concept: 'Sentence Halves Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the beginning of each sentence with its correct ending:',
    visualEmoji: '🧩 📖',
    payload: {
      pairs: [
        { id: 'sp1', left: 'The sun ☀️', right: 'shines brightly.' },
        { id: 'sp2', left: 'Fish 🐟', right: 'swim in water.' },
        { id: 'sp3', left: 'Frogs 🐸', right: 'hop on the grass.' },
        { id: 'sp4', left: 'Birds 🐦', right: 'build warm nests.' },
      ],
    },
    explanation: '💡 Match who with what they do: Sun shines, fish swim, frogs hop, birds build nests!',
    points: 15,
  },
];
