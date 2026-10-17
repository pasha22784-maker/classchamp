import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 ENGLISH (MARIGOLD 5)
// CHAPTER 5: IDIOMS & PROVERBS (BETTER LATE THAN NEVER)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_ENGLISH_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Common Proverbs and Meanings
  // --------------------------------------------------------------------------
  {
    id: 'c5_e5_concept_prov_01',
    grade: 5,
    subject: 'english',
    chapter: 'Idioms & Proverbs (Better Late Than Never)',
    concept: 'Meaning of "Better Late Than Never"',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the true meaning of the proverb "Better late than never"?',
    visualEmoji: '⏰ 💡 Wisdom',
    payload: {
      options: [
        { id: 'opt_pr1', text: 'It is better to complete a good deed late than to never do it at all', isCorrect: true },
        { id: 'opt_pr2', text: 'You should always be late to school', isCorrect: false },
        { id: 'opt_pr3', text: 'Never do anything if you are late', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **Proverbs** give wise life advice! "Better late than never" means arriving or finishing late is still much better than giving up completely!',
    points: 10,
  },
  {
    id: 'c5_e5_concept_prov_02',
    grade: 5,
    subject: 'english',
    chapter: 'Idioms & Proverbs (Better Late Than Never)',
    concept: 'Actions Speak Louder Than Words',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Complete the famous proverb: "Actions speak louder than [BLANK]."',
    visualEmoji: '🗣️ 🏃 Actions > Words',
    payload: {
      correctAnswer: 'words',
      wordBank: ['words', 'bells', 'books', 'birds'],
      displayTemplate: 'Actions speak louder than [BLANK].',
    },
    explanation: '💡 "Actions speak louder than **words**" means what you actually do has much more value than just promising or talking!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Popular Idioms & Matching
  // --------------------------------------------------------------------------
  {
    id: 'c5_e5_concept_idioms_01',
    grade: 5,
    subject: 'english',
    chapter: 'Idioms & Proverbs (Better Late Than Never)',
    concept: 'Matching Idioms to Meanings',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each idiom to its figurative meaning:',
    visualEmoji: '🎨 Idiomatic Expressions',
    payload: {
      pairs: [
        { id: 'e5_p1', left: 'A piece of cake', right: 'Something very easy to do' },
        { id: 'e5_p2', left: 'Once in a blue moon', right: 'Happening very rarely' },
        { id: 'e5_p3', left: 'Break a leg', right: 'Wishing good luck before a show' },
        { id: 'e5_p4', left: 'Cost an arm and a leg', right: 'Very expensive' },
      ],
    },
    explanation: '💡 Idioms have a special figurative meaning that is different from the literal dictionary definitions of the individual words!',
    points: 15,
  },
  {
    id: 'c5_e5_concept_idioms_02',
    grade: 5,
    subject: 'english',
    chapter: 'Idioms & Proverbs (Better Late Than Never)',
    concept: 'Contextual Idiom Usage',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Sonia found the maths test so simple that she finished in 15 minutes! Which idiom best describes her experience?',
    visualEmoji: '🍰 📝 Super Easy',
    payload: {
      options: [
        { id: 'opt_poc1', text: '"It was a piece of cake!" (Very easy)', isCorrect: true },
        { id: 'opt_poc2', text: '"It rained cats and dogs!"', isCorrect: false },
        { id: 'opt_poc3', text: '"She spilled the beans!"', isCorrect: false },
      ],
    },
    explanation: '💡 Saying something is "a piece of cake" means it was effortlessly easy!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Building a Proverb Sentence
  // --------------------------------------------------------------------------
  {
    id: 'c5_e5_concept_order_01',
    grade: 5,
    subject: 'english',
    chapter: 'Idioms & Proverbs (Better Late Than Never)',
    concept: 'Reordering Proverb Words',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the words to form the classic proverb about early rising and diligence:',
    visualEmoji: '🐦 🐛 Early Bird',
    payload: {
      tokens: ['The early bird', 'catches', 'the', 'worm.'],
      scrambled: ['worm.', 'catches', 'The early bird', 'the'],
      correctSequence: ['The early bird', 'catches', 'the', 'worm.'],
    },
    explanation: '💡 "The early bird catches the worm" means people who start early or take prompt initiative achieve greater success!',
    points: 15,
  },
];
