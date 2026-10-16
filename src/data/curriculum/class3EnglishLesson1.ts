import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 ENGLISH (SANTOOR 3 / MARIGOLD 3)
// CHAPTER 1: GOOD MORNING & NATURE WORDS
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_ENGLISH_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Poem Vocabulary & Nature Words
  // --------------------------------------------------------------------------
  {
    id: 'c3_e1_concept_nature_01',
    grade: 3,
    subject: 'english',
    chapter: 'Good Morning & Nature Words',
    concept: 'Nature Words in the Poem',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the poem "Good Morning", what is described as "creeping"?',
    visualEmoji: '🌱 🌿 🌾',
    payload: {
      options: [
        { id: 'opt_nat1', text: 'Creeping grass 🌱', isCorrect: true },
        { id: 'opt_nat2', text: 'Creeping birds 🐦', isCorrect: false },
        { id: 'opt_nat3', text: 'Creeping sun ☀️', isCorrect: false },
      ],
    },
    explanation: '💡 The poet says: "Good morning, sky! Good morning, sun! Good morning, little winds that run! Good morning, birds! Good morning, trees! And **creeping grass**, and brownie bees!"',
    points: 10,
  },
  {
    id: 'c3_e1_concept_nature_02',
    grade: 3,
    subject: 'english',
    chapter: 'Good Morning & Nature Words',
    concept: 'Brownie Bees',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The busy little insects buzzing around the flowers are called brownie [BLANK].',
    visualEmoji: '🐝 🌸 🍯',
    payload: {
      correctAnswer: 'bees',
      wordBank: ['bees', 'birds', 'butterflies', 'ants'],
      displayTemplate: 'Brownie [BLANK] make sweet honey.',
    },
    explanation: '💡 The poem talks about sweet, buzzing "brownie **bees**"!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Rhyming Words
  // --------------------------------------------------------------------------
  {
    id: 'c3_e1_concept_rhyme_01',
    grade: 3,
    subject: 'english',
    chapter: 'Good Morning & Nature Words',
    concept: 'Rhyming Word Identification',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which word rhymes with "sun"?',
    visualEmoji: '☀️ ➔ 🏃',
    payload: {
      options: [
        { id: 'opt_rh1', text: 'Run (Sun – Run)', isCorrect: true },
        { id: 'opt_rh2', text: 'Moon', isCorrect: false },
        { id: 'opt_rh3', text: 'Star', isCorrect: false },
      ],
    },
    explanation: '💡 **Sun** and **Run** share the same ending sound "-un"!',
    points: 10,
  },
  {
    id: 'c3_e1_concept_rhyme_02',
    grade: 3,
    subject: 'english',
    chapter: 'Good Morning & Nature Words',
    concept: 'Matching Rhymes',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the words that rhyme together:',
    visualEmoji: '🎵 ➔ 🎶',
    payload: {
      pairs: [
        { id: 'e1_p1', left: 'Trees', right: 'Bees' },
        { id: 'e1_p2', left: 'Day', right: 'Play' },
        { id: 'e1_p3', left: 'Sky', right: 'High' },
        { id: 'e1_p4', left: 'Night', right: 'Bright' },
      ],
    },
    explanation: '💡 Trees-Bees, Day-Play, Sky-High, Night-Bright all have matching ending sounds!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Polite Greetings by Time of Day
  // --------------------------------------------------------------------------
  {
    id: 'c3_e1_concept_greet_01',
    grade: 3,
    subject: 'english',
    chapter: 'Good Morning & Nature Words',
    concept: 'Appropriate Time Greeting',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What do you say to your teacher when you arrive at school at 8:00 AM? ⏰',
    visualEmoji: '🏫 8:00 AM ➔ 🙋‍♂️',
    payload: {
      options: [
        { id: 'opt_gr1', text: 'Good morning!', isCorrect: true },
        { id: 'opt_gr2', text: 'Good night!', isCorrect: false },
        { id: 'opt_gr3', text: 'Good afternoon!', isCorrect: false },
      ],
    },
    explanation: '💡 Between waking up and 12:00 noon, we greet with **"Good morning!"**.',
    points: 10,
  },
  {
    id: 'c3_e1_concept_greet_02',
    grade: 3,
    subject: 'english',
    chapter: 'Good Morning & Nature Words',
    concept: 'Daily Greeting Order',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the greetings in the correct chronological order from sunrise to bedtime:',
    visualEmoji: '🌅 ➔ ☀️ ➔ 🌇 ➔ 🌙',
    payload: {
      tokens: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
      scrambled: ['Good night', 'Good morning', 'Good evening', 'Good afternoon'],
      correctSequence: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    },
    explanation: '💡 Chronological order: Morning (Sunrise) ➔ Afternoon (Noon) ➔ Evening (Sunset) ➔ Night (Bedtime)!',
    points: 15,
  },
];
