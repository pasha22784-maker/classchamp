import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 ENGLISH (GRAMMAR)
// CHAPTER 5: PREPOSITIONS AND PHRASAL VERBS
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_ENGLISH_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Prepositions of Time and Place
  // --------------------------------------------------------------------------
  {
    id: 'c6_e5_concept_prep_01',
    grade: 6,
    subject: 'english',
    chapter: 'Prepositions and Phrasal Verbs',
    concept: 'Between vs Among',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Choose the correct preposition to complete the sentence:\n"The sweets were distributed [BLANK] the thirty students in the class."',
    visualEmoji: '🍬 👧👦 Between vs Among',
    payload: {
      options: [
        { id: 'opt_prp1', text: 'among (used for more than two people or things)', isCorrect: true },
        { id: 'opt_prp2', text: 'between (used only for two)', isCorrect: false },
        { id: 'opt_prp3', text: 'with', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Use **between** for two persons or items (between Rohan and Sohan), and **among** for more than two (among thirty students)!',
    points: 10,
  },
  {
    id: 'c6_e5_concept_prep_02',
    grade: 6,
    subject: 'english',
    chapter: 'Prepositions and Phrasal Verbs',
    concept: 'Prepositions of Specific Time',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Our school assembly begins sharp [BLANK] 8:00 AM every morning.',
    visualEmoji: '⏰ 8:00 AM',
    payload: {
      correctAnswer: 'at',
      wordBank: ['at', 'on', 'in', 'to'],
      displayTemplate: 'Begins sharp [BLANK] 8:00 AM.',
    },
    explanation: '💡 Use **at** for exact clock times (at 8:00 AM), **on** for days and dates (on Monday), and **in** for months and years (in July)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Phrasal Verbs and Meanings
  // --------------------------------------------------------------------------
  {
    id: 'c6_e5_concept_phrasal_01',
    grade: 6,
    subject: 'english',
    chapter: 'Prepositions and Phrasal Verbs',
    concept: 'Phrasal Verbs Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each phrasal verb to its precise idiomatic meaning:',
    visualEmoji: '🔄 Phrasal Verbs Match',
    payload: {
      pairs: [
        { id: 'e5_p1', left: 'Give up', right: 'Stop trying or surrender' },
        { id: 'e5_p2', left: 'Look after', right: 'Take care of someone or something' },
        { id: 'e5_p3', left: 'Put out', right: 'Extinguish a fire or candle' },
        { id: 'e5_p4', left: 'Call off', right: 'Cancel a planned event' },
      ],
    },
    explanation: '💡 A **phrasal verb** is a combination of a verb and a preposition that produces a unique new meaning (*look + after = take care*)!',
    points: 15,
  },
  {
    id: 'c6_e5_concept_phrasal_02',
    grade: 6,
    subject: 'english',
    chapter: 'Prepositions and Phrasal Verbs',
    concept: 'Contextual Phrasal Verb',
    difficulty: 'medium',
    type: 'mcq',
    question: 'The brave firefighters worked through the night to [BLANK] the blazing warehouse fire.',
    visualEmoji: '🚒 🧯 Firefighters',
    payload: {
      options: [
        { id: 'opt_phr1', text: 'put out (extinguish)', isCorrect: true },
        { id: 'opt_phr2', text: 'put on (wear)', isCorrect: false },
        { id: 'opt_phr3', text: 'put off (delay)', isCorrect: false },
      ],
    },
    explanation: '💡 **Put out** means to extinguish flames or candles!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Constructing a Sentence with Phrasal Verb
  // --------------------------------------------------------------------------
  {
    id: 'c6_e5_concept_order_01',
    grade: 6,
    subject: 'english',
    chapter: 'Prepositions and Phrasal Verbs',
    concept: 'Sentence Reordering with Phrasal Verb',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the tokens into a proper sentence containing the phrasal verb "look forward to":',
    visualEmoji: '📅 Looking Forward',
    payload: {
      tokens: [
        'We eagerly',
        'look forward to',
        'visiting our grandparents',
        'during the summer vacation.',
      ],
      scrambled: [
        'during the summer vacation.',
        'visiting our grandparents',
        'We eagerly',
        'look forward to',
      ],
      correctSequence: [
        'We eagerly',
        'look forward to',
        'visiting our grandparents',
        'during the summer vacation.',
      ],
    },
    explanation: '💡 "Look forward to" means to anticipate with pleasure: *We eagerly look forward to visiting our grandparents during the summer vacation.*',
    points: 15,
  },
];
