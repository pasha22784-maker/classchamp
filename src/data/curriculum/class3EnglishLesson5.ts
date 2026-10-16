import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 ENGLISH (SANTOOR 3 / MARIGOLD 3)
// CHAPTER 5: ADJECTIVES & DEGREES OF COMPARISON
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_ENGLISH_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Positive Degree (Describing One Item)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e5_concept_pos_01',
    grade: 3,
    subject: 'english',
    chapter: 'Adjectives & Degrees of Comparison',
    concept: 'Describing Adjective',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Identify the adjective (describing word) in this sentence:\n"The giraffe has a long neck."',
    visualEmoji: '🦒 🌿',
    payload: {
      options: [
        { id: 'opt_adj1', text: 'long (describes the neck)', isCorrect: true },
        { id: 'opt_adj2', text: 'giraffe', isCorrect: false },
        { id: 'opt_adj3', text: 'neck', isCorrect: false },
      ],
    },
    explanation: '💡 An **adjective** describes a noun. "Long" tells us what kind of neck the giraffe has!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Comparative Degree (-er with "than")
  // --------------------------------------------------------------------------
  {
    id: 'c3_e5_concept_comp_01',
    grade: 3,
    subject: 'english',
    chapter: 'Adjectives & Degrees of Comparison',
    concept: 'Comparative Form with "than"',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A rabbit 🐇 runs fast, but a cheetah 🐆 runs [BLANK] than a rabbit.',
    visualEmoji: '🐇 ➔ 🐆 💨',
    payload: {
      correctAnswer: 'faster',
      wordBank: ['faster', 'fastest', 'fast', 'more fast'],
      displayTemplate: 'A cheetah runs [BLANK] than a rabbit.',
    },
    explanation: '💡 When comparing **two** animals, we use the comparative degree with **-er** (fast ➔ **faster than**) !',
    points: 10,
  },
  {
    id: 'c3_e5_concept_comp_02',
    grade: 3,
    subject: 'english',
    chapter: 'Adjectives & Degrees of Comparison',
    concept: 'Comparing Two Objects',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which sentence correctly compares two books?',
    visualEmoji: '📚 📖',
    payload: {
      options: [
        { id: 'opt_deg1', text: 'This storybook is thicker than my diary.', isCorrect: true },
        { id: 'opt_deg2', text: 'This storybook is thickest than my diary.', isCorrect: false },
        { id: 'opt_deg3', text: 'This storybook is more thick my diary.', isCorrect: false },
      ],
    },
    explanation: '💡 Comparing 2 things uses **-er + than**: **thicker than**.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Superlative Degree (-est with "the")
  // --------------------------------------------------------------------------
  {
    id: 'c3_e5_concept_sup_01',
    grade: 3,
    subject: 'english',
    chapter: 'Adjectives & Degrees of Comparison',
    concept: 'Superlative Form with "the"',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Mount Everest 🏔️ is the [_____] mountain in the world.',
    visualEmoji: '🏔️ 🗻 ⛰️',
    payload: {
      options: [
        { id: 'opt_sup1', text: 'highest (the + highest)', isCorrect: true },
        { id: 'opt_sup2', text: 'higher', isCorrect: false },
        { id: 'opt_sup3', text: 'high', isCorrect: false },
      ],
    },
    explanation: '💡 When comparing **more than two** (or all in the world), we use **the + -est**: **the highest**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Degrees Sequence & Matching
  // --------------------------------------------------------------------------
  {
    id: 'c3_e5_concept_order_01',
    grade: 3,
    subject: 'english',
    chapter: 'Adjectives & Degrees of Comparison',
    concept: 'Three Degrees of Comparison Sequence',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'Arrange the three degrees of comparison in order (Positive ➔ Comparative ➔ Superlative):',
    visualEmoji: '📏 ➔ 📐 ➔ 🏔️',
    payload: {
      tokens: ['sweet', 'sweeter', 'sweetest'],
      scrambled: ['sweetest', 'sweet', 'sweeter'],
      correctSequence: ['sweet', 'sweeter', 'sweetest'],
    },
    explanation: '💡 Sequence: Positive (**sweet**) ➔ Comparative (**sweeter**) ➔ Superlative (**sweetest**)!',
    points: 15,
  },
  {
    id: 'c3_e5_concept_match_01',
    grade: 3,
    subject: 'english',
    chapter: 'Adjectives & Degrees of Comparison',
    concept: 'Match Degrees of Adjectives',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the positive adjective with its superlative form:',
    visualEmoji: '🌟 ➔ 🏆',
    payload: {
      pairs: [
        { id: 'e5_p1', left: 'cold', right: 'coldest' },
        { id: 'e5_p2', left: 'bright', right: 'brightest' },
        { id: 'e5_p3', left: 'heavy', right: 'heaviest' },
        { id: 'e5_p4', left: 'tall', right: 'tallest' },
      ],
    },
    explanation: '💡 cold ➔ coldest, bright ➔ brightest, heavy ➔ heaviest, tall ➔ tallest.',
    points: 15,
  },
];
