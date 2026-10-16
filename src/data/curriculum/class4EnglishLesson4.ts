import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 ENGLISH (MARIGOLD 4)
// CHAPTER 4: ADVERBS OF MANNER (-LY WORDS)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_ENGLISH_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Definition of Adverbs of Manner (How an Action is Done)
  // --------------------------------------------------------------------------
  {
    id: 'c4_e4_concept_adv_01',
    grade: 4,
    subject: 'english',
    chapter: 'Adverbs of Manner (-ly words)',
    concept: 'Identifying Adverbs of Manner',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Identify the adverb that tells HOW the action happened:\n"The tortoise walked slowly across the finish line."',
    visualEmoji: '🐢 🏁',
    payload: {
      options: [
        { id: 'opt_adv1', text: 'slowly (describes how the tortoise walked)', isCorrect: true },
        { id: 'opt_adv2', text: 'tortoise', isCorrect: false },
        { id: 'opt_adv3', text: 'walked', isCorrect: false },
      ],
    },
    explanation: '💡 An **adverb of manner** tells us *how* an action is performed. Here, "slowly" describes the action verb *walked*!',
    points: 10,
  },
  {
    id: 'c4_e4_concept_adv_02',
    grade: 4,
    subject: 'english',
    chapter: 'Adverbs of Manner (-ly words)',
    concept: 'Forming -ly Adverbs from Adjectives',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The brave soldier fought [BLANK] for his country. (brave + ly)',
    visualEmoji: '🎖️ 🛡️ ⚔️',
    payload: {
      correctAnswer: 'bravely',
      wordBank: ['bravely', 'bravery', 'braver', 'brave'],
      displayTemplate: 'The soldier fought [BLANK].',
    },
    explanation: '💡 Adding **-ly** to the adjective "brave" makes the adverb **bravely**!',
    points: 10,
  },
  {
    id: 'c4_e4_concept_adv_03',
    grade: 4,
    subject: 'english',
    chapter: 'Adverbs of Manner (-ly words)',
    concept: 'Y changing to -ily',
    difficulty: 'medium',
    type: 'mcq',
    question: 'How do you turn the adjective "happy" into an adverb of manner?',
    visualEmoji: '😊 ➔ 💃',
    payload: {
      options: [
        { id: 'opt_hpy1', text: 'happily (change y to i, then add -ly)', isCorrect: true },
        { id: 'opt_hpy2', text: 'happyly', isCorrect: false },
        { id: 'opt_hpy3', text: 'happiness', isCorrect: false },
      ],
    },
    explanation: '💡 For adjectives ending in consonant + y (happy, heavy, easy), change **y** to **i** and add **-ly**: **happily**, **heavily**, **easily**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Matching Adjectives to Adverbs & Sentence Building
  // --------------------------------------------------------------------------
  {
    id: 'c4_e4_concept_match_01',
    grade: 4,
    subject: 'english',
    chapter: 'Adverbs of Manner (-ly words)',
    concept: 'Adjective to Adverb Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each adjective with its corresponding adverb of manner:',
    visualEmoji: '🎨 ➔ 🏃',
    payload: {
      pairs: [
        { id: 'am_p1', left: 'loud', right: 'loudly' },
        { id: 'am_p2', left: 'soft', right: 'softly' },
        { id: 'am_p3', left: 'quick', right: 'quickly' },
        { id: 'am_p4', left: 'patient', right: 'patiently' },
      ],
    },
    explanation: '💡 loud ➔ loudly, soft ➔ softly, quick ➔ quickly, patient ➔ patiently.',
    points: 15,
  },
  {
    id: 'c4_e4_concept_order_01',
    grade: 4,
    subject: 'english',
    chapter: 'Adverbs of Manner (-ly words)',
    concept: 'Adverb Sentence Scramble',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words into a fluent sentence containing an adverb:',
    visualEmoji: '🌧️ 🪟 💧',
    payload: {
      tokens: ['The rain', 'pattered softly', 'against the glass', 'window pane.'],
      scrambled: ['window pane.', 'The rain', 'against the glass', 'pattered softly'],
      correctSequence: ['The rain', 'pattered softly', 'against the glass', 'window pane.'],
    },
    explanation: '💡 Correct order: "**The rain pattered softly against the glass window pane.**"',
    points: 15,
  },
];
