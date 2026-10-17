import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 ENGLISH (MARIGOLD 4)
// CHAPTER 6: ANIMAL HOMES & VOCABULARY
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_ENGLISH_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Animal Dwellings & Homes (प्राणियों के आवास)
  // --------------------------------------------------------------------------
  {
    id: 'c4_e6_concept_home_01',
    grade: 4,
    subject: 'english',
    chapter: 'Animal Homes & Vocabulary',
    concept: 'Home of a Lion',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Where does a wild lion 🦁 rest and protect its cubs in the forest?',
    visualEmoji: '🦁 🪨 🌲',
    payload: {
      options: [
        { id: 'opt_hm1', text: 'In a den / cave', isCorrect: true },
        { id: 'opt_hm2', text: 'In a stable', isCorrect: false },
        { id: 'opt_hm3', text: 'In a kennel', isCorrect: false },
      ],
    },
    explanation: '💡 A lion lives in a **den** or natural rocky cave!',
    points: 10,
  },
  {
    id: 'c4_e6_concept_home_02',
    grade: 4,
    subject: 'english',
    chapter: 'Animal Homes & Vocabulary',
    concept: 'Home of a Horse',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A domestic riding horse 🐎 is sheltered comfortably in a [BLANK].',
    visualEmoji: '🐎 🪵 🌾',
    payload: {
      correctAnswer: 'stable',
      wordBank: ['stable', 'hive', 'burrow', 'kennel'],
      displayTemplate: 'A horse lives in a [BLANK].',
    },
    explanation: '💡 A building where horses are kept is called a **stable**!',
    points: 10,
  },
  {
    id: 'c4_e6_concept_home_03',
    grade: 4,
    subject: 'english',
    chapter: 'Animal Homes & Vocabulary',
    concept: 'Home of a Rabbit',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A little fluffy bunny rabbit 🐇 digs an underground tunnel called a [_____].',
    visualEmoji: '🐇 🕳️ 🥕',
    payload: {
      options: [
        { id: 'opt_rb1', text: 'burrow', isCorrect: true },
        { id: 'opt_rb2', text: 'shed', isCorrect: false },
        { id: 'opt_rb3', text: 'nest', isCorrect: false },
      ],
    },
    explanation: '💡 Rabbits dig underground homes called **burrows**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Animal Babies Vocabulary (शावक / बच्चे)
  // --------------------------------------------------------------------------
  {
    id: 'c4_e6_concept_baby_01',
    grade: 4,
    subject: 'english',
    chapter: 'Animal Homes & Vocabulary',
    concept: 'Baby of a Sheep / Cow',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A baby dog is a puppy, and a baby sheep 🐑 is called a [BLANK].',
    visualEmoji: '🐑 👶',
    payload: {
      correctAnswer: 'lamb',
      wordBank: ['lamb', 'calf', 'cub', 'foal'],
      displayTemplate: 'A baby sheep is a [BLANK].',
    },
    explanation: '💡 A young baby sheep is known as a **lamb**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Animal Homes Matching & Sentence Building
  // --------------------------------------------------------------------------
  {
    id: 'c4_e6_concept_match_01',
    grade: 4,
    subject: 'english',
    chapter: 'Animal Homes & Vocabulary',
    concept: 'Animal to Home Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each creature with the name of its home:',
    visualEmoji: '🐾 ➔ 🏡',
    payload: {
      pairs: [
        { id: 'ah_p1', left: 'Honeybee 🐝', right: 'Beehive' },
        { id: 'ah_p2', left: 'Spider 🕷️', right: 'Cobweb' },
        { id: 'ah_p3', left: 'Cow 🐄', right: 'Shed' },
        { id: 'ah_p4', left: 'Pet dog 🐕', right: 'Kennel' },
      ],
    },
    explanation: '💡 Honeybee ➔ Hive, Spider ➔ Web, Cow ➔ Shed, Dog ➔ Kennel.',
    points: 15,
  },
  {
    id: 'c4_e6_concept_order_01',
    grade: 4,
    subject: 'english',
    chapter: 'Animal Homes & Vocabulary',
    concept: 'Animal Habitat Sentence Scramble',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the tokens into a clear descriptive sentence:',
    visualEmoji: '🐦 🪺 🌳',
    payload: {
      tokens: ['The mother bird', 'wove dry twigs', 'to build a safe nest', 'high upon the tree.'],
      scrambled: ['high upon the tree.', 'wove dry twigs', 'The mother bird', 'to build a safe nest'],
      correctSequence: ['The mother bird', 'wove dry twigs', 'to build a safe nest', 'high upon the tree.'],
    },
    explanation: '💡 Correct order: "**The mother bird wove dry twigs to build a safe nest high upon the tree.**"',
    points: 15,
  },
];
