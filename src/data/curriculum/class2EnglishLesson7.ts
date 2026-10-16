import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 ENGLISH (MRIDANG 2 & MARIGOLD 2)
// CHAPTER 7: SENTENCES & QUESTION MARKS
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_ENGLISH_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Telling Sentence (Statement with Full Stop .)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e7_concept_tell_01',
    grade: 2,
    subject: 'english',
    chapter: 'Sentences & Question Marks',
    concept: 'Telling Sentence Ends with Full Stop',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A sentence that gives us facts or tells information (like "Cows give sweet milk") is a TELLING sentence. How does it end?',
    visualEmoji: '🐄 🥛 🛑',
    payload: {
      options: [
        { id: 'opt_tl1_1', text: 'With a Full Stop ( . )', isCorrect: true },
        { id: 'opt_tl1_2', text: 'With a Question Mark ( ? )', isCorrect: false },
        { id: 'opt_tl1_3', text: 'With a Comma ( , )', isCorrect: false },
      ],
    },
    explanation: '💡 A statement or telling sentence always ends with a **full stop ( . )**! 🛑',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Asking Sentence (Questions with ?)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e7_concept_ask_01',
    grade: 2,
    subject: 'english',
    chapter: 'Sentences & Question Marks',
    concept: 'Question Mark for Asking Sentences',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of these is an ASKING sentence that needs a Question Mark ( ? ) at the end?',
    visualEmoji: '❓ 🤔 🎒',
    payload: {
      options: [
        { id: 'opt_ak1_1', text: 'Where is your classroom? ❓', isCorrect: true },
        { id: 'opt_ak1_2', text: 'My classroom is upstairs.', isCorrect: false },
        { id: 'opt_ak1_3', text: 'I have a bag.', isCorrect: false },
      ],
    },
    explanation: '💡 "Where is your classroom?" is asking for information, so it is a question and ends with **?**!',
    points: 10,
  },
  {
    id: 'c2_e7_concept_ask_02',
    grade: 2,
    subject: 'english',
    chapter: 'Sentences & Question Marks',
    concept: 'Choosing Correct Question Word',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Complete the question: "[BLANK] is your favourite colour?" (Hint: Asking for choice)',
    visualEmoji: '🎨 ❓',
    payload: {
      correctAnswer: 'What',
      wordBank: ['What', 'Where', 'Why', 'When'],
      displayTemplate: '[BLANK] is your favourite colour?',
    },
    explanation: '💡 "**What** is your favourite colour?" 🎨',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Exclamation Mark (!) for Surprises and Feelings
  // --------------------------------------------------------------------------
  {
    id: 'c2_e7_concept_excl_01',
    grade: 2,
    subject: 'english',
    chapter: 'Sentences & Question Marks',
    concept: 'Exclamation Mark for Excitement',
    difficulty: 'medium',
    type: 'mcq',
    question: 'When you are super excited or surprised ("Wow, look at that giant peacock dance!"), which mark is used at the end?',
    visualEmoji: '🦚 🤩 ❗',
    payload: {
      options: [
        { id: 'opt_ex1_1', text: 'Exclamation Mark ( ! )', isCorrect: true },
        { id: 'opt_ex1_2', text: 'Question Mark ( ? )', isCorrect: false },
        { id: 'opt_ex1_3', text: 'Hyphen ( - )', isCorrect: false },
      ],
    },
    explanation: '💡 An **exclamation mark ( ! )** shows sudden excitement, joy, or surprise! 🤩',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Capitalizing Names of People and Places (Special Naming Words)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e7_concept_cap_01',
    grade: 2,
    subject: 'english',
    chapter: 'Sentences & Question Marks',
    concept: 'Capitalizing Proper Nouns',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Special names of people, cities, and countries must ALWAYS start with a capital letter. Which sentence is written CORRECTLY?',
    visualEmoji: '🇮🇳 ✍️',
    payload: {
      options: [
        { id: 'opt_cp1_1', text: 'Rohan lives in India with his family.', isCorrect: true },
        { id: 'opt_cp1_2', text: 'rohan lives in india with his family.', isCorrect: false },
        { id: 'opt_cp1_3', text: 'Rohan lives in india with his family.', isCorrect: false },
      ],
    },
    explanation: '💡 Both "**Rohan**" (person\'s name) and "**India**" (country name) must begin with a **CAPITAL letter**! 🇮🇳',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Unscramble Question Sentence (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e7_concept_order_01',
    grade: 2,
    subject: 'english',
    chapter: 'Sentences & Question Marks',
    concept: 'Question Sentence Order',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to make a polite asking sentence:',
    visualEmoji: '📖 ❓ 👧',
    payload: {
      tokens: ['May', 'I', 'read', 'this', 'story', 'book?'],
      scrambled: ['book?', 'read', 'this', 'May', 'story', 'I'],
      correctSequence: ['May', 'I', 'read', 'this', 'story', 'book?'],
    },
    explanation: '💡 "**May I read this story book?**" (Starts with capital "May" and ends with "?") 📖',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Sentences to Punctuation Marks
  // --------------------------------------------------------------------------
  {
    id: 'c2_e7_concept_match_01',
    grade: 2,
    subject: 'english',
    chapter: 'Sentences & Question Marks',
    concept: 'Sentence to Terminal Punctuation Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each sentence type to its correct ending punctuation mark:',
    visualEmoji: '✍️ 🛑 ❓ ❗',
    payload: {
      pairs: [
        { id: 'pc_p1', left: 'The sun shines brightly', right: 'Full Stop ( . )' },
        { id: 'pc_p2', left: 'What is your pet dog\'s name', right: 'Question Mark ( ? )' },
        { id: 'pc_p3', left: 'Hurray, we won the game', right: 'Exclamation Mark ( ! )' },
        { id: 'pc_p4', left: 'Where do birds fly', right: 'Question Mark ( ? )' },
      ],
    },
    explanation: '💡 Telling sentences get ".", questions get "?", excitement gets "!"!',
    points: 15,
  },
];
