import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 ENGLISH (MRIDANG 2 & MARIGOLD 2)
// CHAPTER 4: PRONOUNS (I, YOU, WE, THEY)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_ENGLISH_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Pronoun "WE" (You + Someone Else)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e4_concept_we_01',
    grade: 2,
    subject: 'english',
    chapter: 'Pronouns (I, You, We, They)',
    concept: 'Pronoun WE Identification',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Read the sentence: "My brother and I 👦👧 love drawing pictures. [BLANK] use bright crayons." What word replaces "My brother and I"?',
    visualEmoji: '👦👧 🖍️',
    payload: {
      options: [
        { id: 'opt_we1_1', text: 'WE (When talking about yourself and someone else)', isCorrect: true },
        { id: 'opt_we1_2', text: 'THEY', isCorrect: false },
        { id: 'opt_we1_3', text: 'HE', isCorrect: false },
      ],
    },
    explanation: '💡 When you are included with another person ("Me + Someone"), use **WE**! 👦👧',
    points: 10,
  },
  {
    id: 'c2_e4_concept_we_02',
    grade: 2,
    subject: 'english',
    chapter: 'Pronouns (I, You, We, They)',
    concept: 'We are Friends',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Aman and I study in Class 2. [BLANK] are best friends in school.',
    visualEmoji: '🤝 🎒',
    payload: {
      correctAnswer: 'We',
      wordBank: ['We', 'He', 'It', 'She'],
      displayTemplate: '[BLANK] are best friends.',
    },
    explanation: '💡 Aman and I = **We**! 🤝',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Pronoun "THEY" (A Group of Other People or Animals)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e4_concept_they_01',
    grade: 2,
    subject: 'english',
    chapter: 'Pronouns (I, You, We, They)',
    concept: 'Pronoun THEY for Multiple People',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the children in the garden: "Riya, Mohan, and Kabir are laughing 😄. [BLANK] are playing hide and seek."',
    visualEmoji: '👥 🌳',
    payload: {
      options: [
        { id: 'opt_th1_1', text: 'THEY (Used for more than one person when you are not included)', isCorrect: true },
        { id: 'opt_th1_2', text: 'WE', isCorrect: false },
        { id: 'opt_th1_3', text: 'IT', isCorrect: false },
      ],
    },
    explanation: '💡 When talking about a group of other people, use **THEY**!',
    points: 10,
  },
  {
    id: 'c2_e4_concept_they_02',
    grade: 2,
    subject: 'english',
    chapter: 'Pronouns (I, You, We, They)',
    concept: 'They for Animals',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The three cute ducks swam across the lake 🦆🦆🦆. [BLANK] quacked happily.',
    visualEmoji: '🦆🦆🦆 🌊',
    payload: {
      correctAnswer: 'They',
      wordBank: ['They', 'He', 'It', 'She'],
      displayTemplate: '[BLANK] quacked happily.',
    },
    explanation: '💡 For more than one animal (plural), we use **They**! 🦆',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Pronoun "YOU" (Speaking directly to someone)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e4_concept_you_01',
    grade: 2,
    subject: 'english',
    chapter: 'Pronouns (I, You, We, They)',
    concept: 'Pronoun YOU in Dialogue',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The teacher smiles and asks Rohan: "[BLANK] are doing wonderful work today, Rohan!"',
    visualEmoji: '👩‍🏫 👉 👦',
    payload: {
      options: [
        { id: 'opt_yu1_1', text: 'YOU (Talking directly to someone)', isCorrect: true },
        { id: 'opt_yu1_2', text: 'THEY', isCorrect: false },
        { id: 'opt_yu1_3', text: 'WE', isCorrect: false },
      ],
    },
    explanation: '💡 When talking directly to the person in front of you, use **YOU**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Helping Verbs Agreement (I AM vs WE/THEY/YOU ARE)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e4_concept_verb_01',
    grade: 2,
    subject: 'english',
    chapter: 'Pronouns (I, You, We, They)',
    concept: 'Agreement with "AM" and "ARE"',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which pronoun ALWAYS pairs with the helping word "AM"?',
    visualEmoji: '💡 🔤',
    payload: {
      options: [
        { id: 'opt_am1_1', text: 'I (I am seven years old)', isCorrect: true },
        { id: 'opt_am1_2', text: 'We am', isCorrect: false },
        { id: 'opt_am1_3', text: 'They am', isCorrect: false },
      ],
    },
    explanation: '💡 "AM" is ONLY used with "**I**": "I am ready!" 🌟',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Unscramble Pronoun Sentence (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e4_concept_order_01',
    grade: 2,
    subject: 'english',
    chapter: 'Pronouns (I, You, We, They)',
    concept: 'Pronoun Sentence Structure',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Put these words in order to form a friendly sentence with "We":',
    visualEmoji: '👫 ⚽ 🏞️',
    payload: {
      tokens: ['We', 'play', 'together', 'every', 'evening.'],
      scrambled: ['every', 'play', 'We', 'evening.', 'together'],
      correctSequence: ['We', 'play', 'together', 'every', 'evening.'],
    },
    explanation: '💡 Correct order: "**We play together every evening.**" 👫',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Groups of Nouns to Correct Pronouns
  // --------------------------------------------------------------------------
  {
    id: 'c2_e4_concept_match_01',
    grade: 2,
    subject: 'english',
    chapter: 'Pronouns (I, You, We, They)',
    concept: 'Noun to Pronoun Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each naming group to the single pronoun that can replace it:',
    visualEmoji: '🔄 🏷️',
    payload: {
      pairs: [
        { id: 'pn_p1', left: 'My mother and I 👩‍👧', right: 'We' },
        { id: 'pn_p2', left: 'The noisy monkeys 🐒🐒', right: 'They' },
        { id: 'pn_p3', left: 'Grandfather 👴', right: 'He' },
        { id: 'pn_p4', left: 'The little princess 👸', right: 'She' },
      ],
    },
    explanation: '💡 Me + mother = We, Monkeys = They, Grandfather = He, Princess = She!',
    points: 15,
  },
];
