import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 ENGLISH (MRIDANG 2 & MARIGOLD 2)
// CHAPTER 3: ACTION WORDS & DOING WORDS (VERBS)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_ENGLISH_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Action Words (Doing Words) Recognition
  // --------------------------------------------------------------------------
  {
    id: 'c2_e3_concept_action_01',
    grade: 2,
    subject: 'english',
    chapter: 'Action Words & Doing Words (Verbs)',
    concept: 'Identifying Doing Words',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Read the sentence: "Rohan drinks 🥛 fresh milk every morning." Which word tells what Rohan DOES (the action)?',
    visualEmoji: '🥛 😋',
    payload: {
      options: [
        { id: 'opt_ac1_1', text: 'drinks (Action word)', isCorrect: true },
        { id: 'opt_ac1_2', text: 'milk (Naming word)', isCorrect: false },
        { id: 'opt_ac1_3', text: 'morning', isCorrect: false },
      ],
    },
    explanation: '💡 "**Drinks**" is what Rohan is physically doing, so it is an action word (verb)!',
    points: 10,
  },
  {
    id: 'c2_e3_concept_action_02',
    grade: 2,
    subject: 'english',
    chapter: 'Action Words & Doing Words (Verbs)',
    concept: 'Bird Action',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Birds use their colorful wings to [BLANK] across the clear blue sky 🕊️.',
    visualEmoji: '🕊️ 🪽',
    payload: {
      correctAnswer: 'fly',
      wordBank: ['fly', 'crawl', 'read', 'dig'],
      displayTemplate: 'Birds use their wings to [BLANK] high.',
    },
    explanation: '💡 Birds **fly** in the sky! 🕊️',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Present Continuous Tense (-ing Words)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e3_concept_ing_01',
    grade: 2,
    subject: 'english',
    chapter: 'Action Words & Doing Words (Verbs)',
    concept: 'Adding -ing for Ongoing Action',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The boys are currently in the playground. "The boys are [BLANK] football right now." ⚽',
    visualEmoji: '⚽ 🏃‍♂️',
    payload: {
      options: [
        { id: 'opt_ng1_1', text: 'playing (play + ing)', isCorrect: true },
        { id: 'opt_ng1_2', text: 'player', isCorrect: false },
        { id: 'opt_ng1_3', text: 'played', isCorrect: false },
      ],
    },
    explanation: '💡 When an action is happening right now with "are", we add **-ing**: "**playing**"! ⚽',
    points: 10,
  },
  {
    id: 'c2_e3_concept_ing_02',
    grade: 2,
    subject: 'english',
    chapter: 'Action Words & Doing Words (Verbs)',
    concept: 'Adding -ing to Dance',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Priya loves music. Look, she is [BLANK] gracefully to the tune! 💃',
    visualEmoji: '💃 🎶',
    payload: {
      correctAnswer: 'dancing',
      wordBank: ['dancing', 'sleeping', 'barking', 'swimming'],
      displayTemplate: 'She is [BLANK] to the tune.',
    },
    explanation: '💡 Dance -> **dancing**! 💃',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Subject-Verb Agreement (One vs Many)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e3_concept_agree_01',
    grade: 2,
    subject: 'english',
    chapter: 'Action Words & Doing Words (Verbs)',
    concept: 'Singular Subject Action (+s)',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which sentence has the correct action word agreement for ONE dog 🐶?',
    visualEmoji: '🐶 🐕',
    payload: {
      options: [
        { id: 'opt_ag1_1', text: 'The dog barks at strangers. (One dog -> barks)', isCorrect: true },
        { id: 'opt_ag1_2', text: 'The dog bark at strangers.', isCorrect: false },
        { id: 'opt_ag1_3', text: 'The dog barking without is.', isCorrect: false },
      ],
    },
    explanation: '💡 For ONE person or animal (singular), we add "-s" to the action verb: "The dog **barks**"!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Animal Action Verbs
  // --------------------------------------------------------------------------
  {
    id: 'c2_e3_concept_animal_01',
    grade: 2,
    subject: 'english',
    chapter: 'Action Words & Doing Words (Verbs)',
    concept: 'Frog Action Verb',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What special action do green frogs 🐸 do on grass and pond stones?',
    visualEmoji: '🐸 🍃',
    payload: {
      options: [
        { id: 'opt_an1_1', text: 'Hop and Jump 🐸', isCorrect: true },
        { id: 'opt_an1_2', text: 'Fly in clouds', isCorrect: false },
        { id: 'opt_an1_3', text: 'Gallop like horses', isCorrect: false },
      ],
    },
    explanation: '💡 Frogs love to **hop** and leap! 🐸',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Sentence Builder with Action Words (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e3_concept_order_01',
    grade: 2,
    subject: 'english',
    chapter: 'Action Words & Doing Words (Verbs)',
    concept: 'Action Sentence Unscramble',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to make an active sentence about monkeys:',
    visualEmoji: '🐒 🌴',
    payload: {
      tokens: ['Monkeys', 'swing', 'from', 'tree', 'branches.'],
      scrambled: ['tree', 'Monkeys', 'branches.', 'from', 'swing'],
      correctSequence: ['Monkeys', 'swing', 'from', 'tree', 'branches.'],
    },
    explanation: '💡 "**Monkeys swing from tree branches.**" (Swing is the action!) 🐒',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Animals to Their Specific Doing Words
  // --------------------------------------------------------------------------
  {
    id: 'c2_e3_concept_match_01',
    grade: 2,
    subject: 'english',
    chapter: 'Action Words & Doing Words (Verbs)',
    concept: 'Animal to Action Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each creature to its special movement action:',
    visualEmoji: '🐟 🐎 🦆 🐍',
    payload: {
      pairs: [
        { id: 'act_p1', left: 'Fish 🐟', right: 'Swim in water' },
        { id: 'act_p2', left: 'Horse 🐎', right: 'Gallop fast' },
        { id: 'act_p3', left: 'Duck 🦆', right: 'Waddle on land' },
        { id: 'act_p4', left: 'Snake 🐍', right: 'Slither quietly' },
      ],
    },
    explanation: '💡 Fish swim, horses gallop, ducks waddle, and snakes slither!',
    points: 15,
  },
];
