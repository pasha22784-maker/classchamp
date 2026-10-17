import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 ENGLISH (MARIGOLD 4)
// CHAPTER 2: COLLECTIVE NOUNS (FLOCK, HERD, BUNCH)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_ENGLISH_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Definition & Animal Collective Nouns
  // --------------------------------------------------------------------------
  {
    id: 'c4_e2_concept_def_01',
    grade: 4,
    subject: 'english',
    chapter: 'Collective Nouns (Flock, Herd, Bunch)',
    concept: 'Collective Noun for Sheep',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is a group of sheep 🐑 or flying birds 🕊️ called?',
    visualEmoji: '🐑🐑🐑 ➔ ❓',
    payload: {
      options: [
        { id: 'opt_flk1', text: 'A flock', isCorrect: true },
        { id: 'opt_flk2', text: 'A pack', isCorrect: false },
        { id: 'opt_flk3', text: 'A bunch', isCorrect: false },
      ],
    },
    explanation: '💡 A collection of sheep or birds is called a **flock**!',
    points: 10,
  },
  {
    id: 'c4_e2_concept_def_02',
    grade: 4,
    subject: 'english',
    chapter: 'Collective Nouns (Flock, Herd, Bunch)',
    concept: 'Collective Noun for Elephants / Cattle',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A large [BLANK] of wild elephants was seen drinking water at the riverbank.',
    visualEmoji: '🐘🐘🐘 🌊',
    payload: {
      correctAnswer: 'herd',
      wordBank: ['herd', 'flock', 'bunch', 'swarm'],
      displayTemplate: 'A [BLANK] of elephants.',
    },
    explanation: '💡 A group of large herbivores like elephants, cows, and deer is called a **herd**!',
    points: 10,
  },
  {
    id: 'c4_e2_concept_def_03',
    grade: 4,
    subject: 'english',
    chapter: 'Collective Nouns (Flock, Herd, Bunch)',
    concept: 'Pride of Lions',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which special collective noun is used exclusively for a family group of lions 🦁?',
    visualEmoji: '🦁 🦁 🦁',
    payload: {
      options: [
        { id: 'opt_prd1', text: 'A pride of lions', isCorrect: true },
        { id: 'opt_prd2', text: 'A pack of lions', isCorrect: false },
        { id: 'opt_prd3', text: 'A herd of lions', isCorrect: false },
      ],
    },
    explanation: '💡 A family group of lions is known as a **pride**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Collective Nouns for Objects & Food
  // --------------------------------------------------------------------------
  {
    id: 'c4_e2_concept_obj_01',
    grade: 4,
    subject: 'english',
    chapter: 'Collective Nouns (Flock, Herd, Bunch)',
    concept: 'Bunch of Grapes / Keys',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Mother bought a fresh, juicy [BLANK] of green grapes 🍇 from the market.',
    visualEmoji: '🍇 🍇 🍇',
    payload: {
      correctAnswer: 'bunch',
      wordBank: ['bunch', 'herd', 'flock', 'pride'],
      displayTemplate: 'A [BLANK] of grapes.',
    },
    explanation: '💡 Things tied or clustered together like grapes, bananas, or keys are called a **bunch**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Collective Noun Matching & Sentence Order
  // --------------------------------------------------------------------------
  {
    id: 'c4_e2_concept_match_01',
    grade: 4,
    subject: 'english',
    chapter: 'Collective Nouns (Flock, Herd, Bunch)',
    concept: 'Group to Collective Noun Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each collection of items/animals with its exact collective noun:',
    visualEmoji: '🏷️ ➔ 🎯',
    payload: {
      pairs: [
        { id: 'cn_p1', left: 'Wolves 🐺', right: 'Pack' },
        { id: 'cn_p2', left: 'Fish 🐟', right: 'School' },
        { id: 'cn_p3', left: 'Bees 🐝', right: 'Swarm' },
        { id: 'cn_p4', left: 'Singers 🎶', right: 'Choir' },
      ],
    },
    explanation: '💡 Pack of wolves, school of fish, swarm of bees, choir of singers.',
    points: 15,
  },
  {
    id: 'c4_e2_concept_order_01',
    grade: 4,
    subject: 'english',
    chapter: 'Collective Nouns (Flock, Herd, Bunch)',
    concept: 'Collective Noun Sentence Scramble',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to form a correct sentence featuring a collective noun:',
    visualEmoji: '🐝 🍯 🌺',
    payload: {
      tokens: ['A busy swarm', 'of honeybees', 'flew around', 'the blooming garden.'],
      scrambled: ['flew around', 'the blooming garden.', 'A busy swarm', 'of honeybees'],
      correctSequence: ['A busy swarm', 'of honeybees', 'flew around', 'the blooming garden.'],
    },
    explanation: '💡 Correct order: "**A busy swarm of honeybees flew around the blooming garden.**"',
    points: 15,
  },
];
