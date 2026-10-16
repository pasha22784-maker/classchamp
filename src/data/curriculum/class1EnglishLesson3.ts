import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 ENGLISH (MRIDANG & MARIGOLD)
// CHAPTER 3: ONE AND MANY (SINGULAR & PLURAL)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_ENGLISH_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Concept of One vs Many
  // --------------------------------------------------------------------------
  {
    id: 'c1_e3_concept_onemany_01',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'Identifying One vs Many',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the picture: 🐱. Does this show ONE cat or MANY cats?',
    visualEmoji: '🐱',
    payload: {
      options: [
        { id: 'opt_om1_1', text: 'ONE Cat (Single cat)', isCorrect: true },
        { id: 'opt_om1_2', text: 'MANY Cats', isCorrect: false },
      ],
    },
    explanation: '💡 There is only a single cat 🐱, so it is **ONE**! When there are two or more, it is MANY.',
    points: 10,
  },
  {
    id: 'c1_e3_concept_onemany_02',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'Identifying One vs Many',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the sky filled with flying kites: 🪁 🪁 🪁 🪁. Is this ONE kite or MANY kites?',
    visualEmoji: '🪁 🪁 🪁 🪁',
    payload: {
      options: [
        { id: 'opt_om2_1', text: 'MANY Kites (More than one)', isCorrect: true },
        { id: 'opt_om2_2', text: 'ONE Kite', isCorrect: false },
      ],
    },
    explanation: '💡 There are 4 kites 🪁🪁🪁🪁, which is more than one, so it is **MANY**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Adding "-s" to Make Many (Regular Plurals)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e3_concept_adds_01',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'Adding -s Rule',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'What do you add to the word "BALL" to show more than one? One ball ⚽, two [BLANK] ⚽⚽',
    visualEmoji: '⚽ ➡️ ⚽⚽',
    payload: {
      correctAnswer: 'balls',
      wordBank: ['balls', 'ball', 'balles', 'balling'],
      displayTemplate: 'One ball ⚽, two [BLANK] ⚽⚽.',
    },
    explanation: '💡 To make a naming word mean "many", we add letter **-s** at the end: Ball ➡️ **Balls**!',
    points: 10,
  },
  {
    id: 'c1_e3_concept_adds_02',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'Adding -s to Fruits',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Complete the pattern: One sweet apple 🍎, three [BLANK] 🍎🍎🍎',
    visualEmoji: '🍎 ➡️ 🍎🍎🍎',
    payload: {
      correctAnswer: 'apples',
      wordBank: ['apples', 'apple', 'applez', 'appling'],
      displayTemplate: 'One apple 🍎, three [BLANK] 🍎🍎🍎.',
    },
    explanation: '💡 One apple 🍎 ➡️ Three **apples** 🍎🍎🍎! Just add **-s**!',
    points: 10,
  },
  {
    id: 'c1_e3_concept_adds_03',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'Adding -s Word Formation',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which word correctly shows MANY ducks 🦆🦆🦆 swimming together?',
    visualEmoji: '🦆🦆🦆',
    payload: {
      options: [
        { id: 'opt_dk1_1', text: 'DUCKS (Duck + s)', isCorrect: true },
        { id: 'opt_dk1_2', text: 'DUCK', isCorrect: false },
        { id: 'opt_dk1_3', text: 'DUCKES', isCorrect: false },
      ],
    },
    explanation: '💡 Duck + s = **DUCKS** 🦆🦆🦆!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: One and Many Matching Pairs
  // --------------------------------------------------------------------------
  {
    id: 'c1_e3_concept_match_01',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'One and Many Pairs Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each "ONE" word with its "MANY" partner:',
    visualEmoji: '1️⃣ ➡️ 🔢',
    payload: {
      pairs: [
        { id: 'om_p1', left: 'One Star ⭐', right: 'Many STARS ⭐⭐⭐' },
        { id: 'om_p2', left: 'One Tree 🌳', right: 'Many TREES 🌳🌳' },
        { id: 'om_p3', left: 'One Pen 🖊️', right: 'Many PENS 🖊️🖊️' },
        { id: 'om_p4', left: 'One Toy 🧸', right: 'Many TOYS 🧸🧸' },
      ],
    },
    explanation: '💡 Star-Stars, Tree-Trees, Pen-Pens, Toy-Toys! All form plurals by adding -s.',
    points: 15,
  },
  {
    id: 'c1_e3_concept_match_02',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'Animal One and Many Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the animal with its plural word:',
    visualEmoji: '🐶 🐱 🐘 🦁',
    payload: {
      pairs: [
        { id: 'an_pl1', left: 'Dog 🐶', right: 'DOGS' },
        { id: 'an_pl2', left: 'Cat 🐱', right: 'CATS' },
        { id: 'an_pl3', left: 'Elephant 🐘', right: 'ELEPHANTS' },
        { id: 'an_pl4', left: 'Bird 🐦', right: 'BIRDS' },
      ],
    },
    explanation: '💡 Dogs, cats, elephants, and birds all take "-s" for many!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Adding "-es" for words ending in -x, -s, -ch (Class 1 NCERT Intro)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e3_concept_es_01',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'Adding -es to Words',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at the cardboard packing box 📦. When you have two of them, how is it spelled?',
    visualEmoji: '📦 ➡️ 📦📦',
    payload: {
      options: [
        { id: 'opt_es1_1', text: 'BOXES (Box + es)', isCorrect: true },
        { id: 'opt_es1_2', text: 'BOXS', isCorrect: false },
        { id: 'opt_es1_3', text: 'BOX', isCorrect: false },
      ],
    },
    explanation: '💡 Words ending in "x" add **-es**: One box 📦 ➡️ Two **boxes** 📦📦!',
    points: 10,
  },
  {
    id: 'c1_e3_concept_es_02',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'Adding -es to Bus',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'School transport: One bus 🚌, three [BLANK] 🚌🚌🚌.',
    visualEmoji: '🚌 ➡️ 🚌🚌🚌',
    payload: {
      correctAnswer: 'buses',
      wordBank: ['buses', 'buss', 'busing', 'buser'],
      displayTemplate: 'One bus 🚌, three [BLANK] 🚌🚌🚌.',
    },
    explanation: '💡 One bus 🚌 ➡️ Three **buses** 🚌🚌🚌!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Sentence Agreement (One is, Many are)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e3_concept_agree_01',
    grade: 1,
    subject: 'english',
    chapter: 'One and Many (Singular & Plural)',
    concept: 'Sentence Agreement with Numbers',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Choose the sentence that is written correctly:',
    visualEmoji: '5️⃣ 🎈',
    payload: {
      options: [
        { id: 'opt_ag1_1', text: 'I have five balloons. 🎈 (Correct)', isCorrect: true },
        { id: 'opt_ag1_2', text: 'I have five balloon.', isCorrect: false },
        { id: 'opt_ag1_3', text: 'I have one balloons.', isCorrect: false },
      ],
    },
    explanation: '💡 Number 5 is more than one, so you must use the plural word **balloons** with an "s"!',
    points: 10,
  },
];
