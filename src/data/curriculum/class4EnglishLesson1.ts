import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 ENGLISH (MARIGOLD 4)
// CHAPTER 1: WAKE UP! & DAILY HABITS
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_ENGLISH_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Poem Vocabulary & Creature Sounds
  // --------------------------------------------------------------------------
  {
    id: 'c4_e1_concept_poem_01',
    grade: 4,
    subject: 'english',
    chapter: 'Wake Up! & Daily Habits',
    concept: 'Sounds Heard in the Morning',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the poem "Wake Up!", what sound does the tiniest chicken make at dawn?',
    visualEmoji: '🐣 🌅',
    payload: {
      options: [
        { id: 'opt_chk1', text: '"Cheep-cheep-cheep!"', isCorrect: true },
        { id: 'opt_chk2', text: '"Moo-moo!"', isCorrect: false },
        { id: 'opt_chk3', text: '"Quack-quack!"', isCorrect: false },
      ],
    },
    explanation: '💡 The poem concludes: "The cow, the horses, the ducks and the sheep, the tiniest chicken, **cheep-cheep-cheep**, wake up!"',
    points: 10,
  },
  {
    id: 'c4_e1_concept_poem_02',
    grade: 4,
    subject: 'english',
    chapter: 'Wake Up! & Daily Habits',
    concept: 'Sleepyhead Adjective',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The poet tells the child: "Wash and dress, and come on out! Everyone is up and about, you sleepy [BLANK]!"',
    visualEmoji: '😴 🛏️ 🧒',
    payload: {
      correctAnswer: 'head',
      wordBank: ['head', 'bird', 'duck', 'friend'],
      displayTemplate: 'Wake up, you sleepy [BLANK]!',
    },
    explanation: '💡 A person who loves to stay in bed late is called a **sleepyhead**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Morning Habits & Hygiene
  // --------------------------------------------------------------------------
  {
    id: 'c4_e1_concept_habit_01',
    grade: 4,
    subject: 'english',
    chapter: 'Wake Up! & Daily Habits',
    concept: 'Essential Morning Routine',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of these is the most important hygienic habit to complete right after waking up in the morning?',
    visualEmoji: '🪥 🚿 🧼',
    payload: {
      options: [
        { id: 'opt_hb1', text: 'Brushing teeth and washing face with clean water', isCorrect: true },
        { id: 'opt_hb2', text: 'Playing video games in bed', isCorrect: false },
        { id: 'opt_hb3', text: 'Eating candy immediately', isCorrect: false },
      ],
    },
    explanation: '💡 Brushing teeth and washing thoroughly keeps teeth healthy and wakes up your senses!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Rhyming Words Matching & Morning Sequence
  // --------------------------------------------------------------------------
  {
    id: 'c4_e1_concept_match_01',
    grade: 4,
    subject: 'english',
    chapter: 'Wake Up! & Daily Habits',
    concept: 'Poem Rhyming Pairs',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the words from the poem that rhyme together:',
    visualEmoji: '🎵 ➔ 🎶',
    payload: {
      pairs: [
        { id: 'wu_p1', left: 'day', right: 'play' },
        { id: 'wu_p2', left: 'trees', right: 'bees' },
        { id: 'wu_p3', left: 'bed', right: 'head' },
        { id: 'wu_p4', left: 'sheep', right: 'cheep' },
      ],
    },
    explanation: '💡 day-play, trees-bees, bed-head, sheep-cheep all share identical rhyming sounds!',
    points: 15,
  },
  {
    id: 'c4_e1_concept_order_01',
    grade: 4,
    subject: 'english',
    chapter: 'Wake Up! & Daily Habits',
    concept: 'Morning Routine Chronological Order',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange the morning routine activities in proper logical order:',
    visualEmoji: '⏰ ➔ 🪥 ➔ 🚿 ➔ 🎒',
    payload: {
      tokens: ['Wake up when alarm rings', 'Brush teeth and bathe', 'Wear neat school uniform', 'Eat a nutritious breakfast'],
      scrambled: ['Wear neat school uniform', 'Eat a nutritious breakfast', 'Wake up when alarm rings', 'Brush teeth and bathe'],
      correctSequence: ['Wake up when alarm rings', 'Brush teeth and bathe', 'Wear neat school uniform', 'Eat a nutritious breakfast'],
    },
    explanation: '💡 Sequence: Wake up ➔ Brush & Bathe ➔ Wear uniform ➔ Eat breakfast!',
    points: 15,
  },
];
