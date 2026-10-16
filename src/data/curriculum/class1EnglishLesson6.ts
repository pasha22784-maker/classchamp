import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 ENGLISH (MRIDANG & MARIGOLD)
// CHAPTER 6: POSITION WORDS (IN, ON, UNDER, BEHIND, NEAR)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_ENGLISH_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: "IN" (Inside something)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e6_concept_in_01',
    grade: 1,
    subject: 'english',
    chapter: 'Position Words (In, On, Under)',
    concept: 'Position Word: IN',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the picnic basket: 🧺🍎. The sweet red apples are [BLANK] the basket.',
    visualEmoji: '🍎 🧺',
    payload: {
      options: [
        { id: 'opt_in1_1', text: 'IN (Inside the basket)', isCorrect: true },
        { id: 'opt_in1_2', text: 'UNDER (Below the basket)', isCorrect: false },
        { id: 'opt_in1_3', text: 'ON TOP', isCorrect: false },
      ],
    },
    explanation: '💡 The apples are enclosed inside the basket, so we say: "The apples are **IN** the basket!" 🧺',
    points: 10,
  },
  {
    id: 'c1_e6_concept_in_02',
    grade: 1,
    subject: 'english',
    chapter: 'Position Words (In, On, Under)',
    concept: 'Position Word: IN',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A mother bird laid 3 tiny eggs in her warm nest: The eggs are [BLANK] the nest 🪺',
    visualEmoji: '🪺 🥚',
    payload: {
      correctAnswer: 'in',
      wordBank: ['in', 'under', 'far', 'behind'],
      displayTemplate: 'The eggs are [BLANK] the nest. 🪺',
    },
    explanation: '💡 The eggs are **IN** the nest!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: "ON" (Resting on a surface)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e6_concept_on_01',
    grade: 1,
    subject: 'english',
    chapter: 'Position Words (In, On, Under)',
    concept: 'Position Word: ON',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A cute fluffy cat 🐱 is resting on top of the soft floor mat. Where is the cat?',
    visualEmoji: '🐱 🧘',
    payload: {
      options: [
        { id: 'opt_on1_1', text: 'The cat is ON the mat 🐱', isCorrect: true },
        { id: 'opt_on1_2', text: 'The cat is UNDER the mat', isCorrect: false },
        { id: 'opt_on1_3', text: 'The cat is IN the mat', isCorrect: false },
      ],
    },
    explanation: '💡 The cat touches the top surface of the mat, so: "The cat is **ON** the mat!"',
    points: 10,
  },
  {
    id: 'c1_e6_concept_on_02',
    grade: 1,
    subject: 'english',
    chapter: 'Position Words (In, On, Under)',
    concept: 'Position Word: ON',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Rohan put his school notebook flat on top of the wooden study table 📚: The book is [BLANK] the table.',
    visualEmoji: '📚 🪵',
    payload: {
      correctAnswer: 'on',
      wordBank: ['on', 'in', 'under', 'behind'],
      displayTemplate: 'The book is [BLANK] the table. 📚',
    },
    explanation: '💡 The book rests on the flat top, so it is **ON** the table!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: "UNDER" (Beneath something)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e6_concept_under_01',
    grade: 1,
    subject: 'english',
    chapter: 'Position Words (In, On, Under)',
    concept: 'Position Word: UNDER',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A sleepy puppy 🐶 crawled below the bed to sleep in the shade. Where is the puppy?',
    visualEmoji: '🐶 🛏️',
    payload: {
      options: [
        { id: 'opt_und1_1', text: 'UNDER the bed (Below the bed)', isCorrect: true },
        { id: 'opt_und1_2', text: 'ON the roof', isCorrect: false },
        { id: 'opt_und1_3', text: 'IN the drawer', isCorrect: false },
      ],
    },
    explanation: '💡 Below or beneath an object is **UNDER**: "The puppy is **UNDER** the bed!" 🐶🛏️',
    points: 10,
  },
  {
    id: 'c1_e6_concept_under_02',
    grade: 1,
    subject: 'english',
    chapter: 'Position Words (In, On, Under)',
    concept: 'Position Word: UNDER',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'When the football rolled below the wooden bench ⚽: The ball is [BLANK] the bench.',
    visualEmoji: '⚽ 🪑',
    payload: {
      correctAnswer: 'under',
      wordBank: ['under', 'on', 'in', 'near'],
      displayTemplate: 'The ball is [BLANK] the bench. ⚽',
    },
    explanation: '💡 The ball is **UNDER** the bench!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: BEHIND vs IN FRONT OF (पीछे और आगे)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e6_concept_behind_01',
    grade: 1,
    subject: 'english',
    chapter: 'Position Words (In, On, Under)',
    concept: 'Position Word: BEHIND',
    difficulty: 'medium',
    type: 'mcq',
    question: 'In a game of hide-and-seek 🙈, Maya is hiding at the back of the big tree 🌳. Where is Maya?',
    visualEmoji: '👧 🌳',
    payload: {
      options: [
        { id: 'opt_bhd1_1', text: 'BEHIND the tree (At the back)', isCorrect: true },
        { id: 'opt_bhd1_2', text: 'UNDER the tree', isCorrect: false },
        { id: 'opt_bhd1_3', text: 'ON TOP of the tree', isCorrect: false },
      ],
    },
    explanation: '💡 When you hide at the back side of something, you are **BEHIND** it! 🌳',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Position Words Matching
  // --------------------------------------------------------------------------
  {
    id: 'c1_e6_concept_match_01',
    grade: 1,
    subject: 'english',
    chapter: 'Position Words (In, On, Under)',
    concept: 'Position Words Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each position word with its clear meaning clue:',
    visualEmoji: '📍 📦',
    payload: {
      pairs: [
        { id: 'pos_p1', left: 'IN', right: 'Inside a box or basket' },
        { id: 'pos_p2', left: 'ON', right: 'Resting on top surface' },
        { id: 'pos_p3', left: 'UNDER', right: 'Below or beneath' },
        { id: 'pos_p4', left: 'BEHIND', right: 'At the back of something' },
      ],
    },
    explanation: '💡 In, On, Under, and Behind tell us exactly WHERE an object is located!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Picture Sentence Interpretation
  // --------------------------------------------------------------------------
  {
    id: 'c1_e6_concept_sent_01',
    grade: 1,
    subject: 'english',
    chapter: 'Position Words (In, On, Under)',
    concept: 'Picture Story Sentence',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The friendly frog jumped [BLANK] the pond water 🐸 💧: The frog is swimming [BLANK] the water.',
    visualEmoji: '🐸 💧',
    payload: {
      correctAnswer: 'in',
      wordBank: ['in', 'on', 'under', 'near'],
      displayTemplate: 'The frog is swimming [BLANK] the water. 🐸',
    },
    explanation: '💡 Creatures swim **IN** the water! 💧',
    points: 10,
  },
];
