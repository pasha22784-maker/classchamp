import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 ENGLISH (GRAMMAR)
// CHAPTER 6: DIRECT AND INDIRECT SPEECH
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_ENGLISH_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Direct vs Indirect Speech Rules
  // --------------------------------------------------------------------------
  {
    id: 'c6_e6_concept_rule_01',
    grade: 6,
    subject: 'english',
    chapter: 'Direct and Indirect Speech',
    concept: 'Direct to Indirect Transformation',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Transform this direct speech into indirect speech:\nRohit said, "I am reading an interesting book."',
    visualEmoji: '💬 ➡️ 🗣️ Speech Conversion',
    payload: {
      options: [
        { id: 'opt_sp1', text: 'Rohit said that he was reading an interesting book.', isCorrect: true },
        { id: 'opt_sp2', text: 'Rohit said that I am reading an interesting book.', isCorrect: false },
        { id: 'opt_sp3', text: 'Rohit says that he was reading an interesting book.', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: When reporting past speech: quotation marks are removed, conjunction **that** is added, pronoun "I" becomes "he", and present continuous "am reading" shifts to past continuous **"was reading"**!',
    points: 10,
  },
  {
    id: 'c6_e6_concept_rule_02',
    grade: 6,
    subject: 'english',
    chapter: 'Direct and Indirect Speech',
    concept: 'Reporting Conjunction',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'In indirect assertive sentences, commas and quotation marks are replaced by the joining conjunction [BLANK].',
    visualEmoji: '🔗 Joining Conjunction',
    payload: {
      correctAnswer: 'that',
      wordBank: ['that', 'because', 'although', 'unless'],
      displayTemplate: 'Replaced by the conjunction [BLANK].',
    },
    explanation: '💡 The conjunction **that** connects the reporting verb (said) with the reported clause!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Direct to Indirect Transformations Match
  // --------------------------------------------------------------------------
  {
    id: 'c6_e6_concept_match_01',
    grade: 6,
    subject: 'english',
    chapter: 'Direct and Indirect Speech',
    concept: 'Speech Conversion Pairs Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each Direct Speech sentence to its correct Reported Speech conversion:',
    visualEmoji: '🔄 Speech Pairs Match',
    payload: {
      pairs: [
        { id: 'e6_p1', left: 'She said, "I like apples."', right: 'She said that she liked apples.' },
        { id: 'e6_p2', left: 'Aman said, "I can swim."', right: 'Aman said that he could swim.' },
        { id: 'e6_p3', left: 'Teacher said, "The earth is round."', right: 'Teacher said that the earth is round. (Universal truth)' },
        { id: 'e6_p4', left: 'He said, "I will call you tomorrow."', right: 'He said that he would call me the next day.' },
      ],
    },
    explanation: '💡 Notice that universal truths ("The earth is round") do NOT change their tense even in past reported speech!',
    points: 15,
  },
  {
    id: 'c6_e6_concept_univ_01',
    grade: 6,
    subject: 'english',
    chapter: 'Direct and Indirect Speech',
    concept: 'Universal Truth Exception in Tense',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Why does the tense NOT change in: The teacher said, "The sun rises in the east"?',
    visualEmoji: '☀️ Universal Truth',
    payload: {
      options: [
        { id: 'opt_unv1', text: 'Because it is a scientific / universal truth that remains true forever', isCorrect: true },
        { id: 'opt_unv2', text: 'Because the sentence has no object', isCorrect: false },
        { id: 'opt_unv3', text: 'Because "sun" is a proper noun', isCorrect: false },
      ],
    },
    explanation: '💡 Universal scientific truths, mathematical facts, and habitual facts do not shift into the past tense in reported speech!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Reordering Reported Speech Words
  // --------------------------------------------------------------------------
  {
    id: 'c6_e6_concept_order_01',
    grade: 6,
    subject: 'english',
    chapter: 'Direct and Indirect Speech',
    concept: 'Arranging Reported Speech Sequence',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the sentence fragments to form a grammatically correct Indirect Speech sentence:',
    visualEmoji: '🧩 Reported Speech Order',
    payload: {
      tokens: [
        'Mother told me',
        'that she had prepared',
        'my favorite vegetable pasta',
        'for lunch today.',
      ],
      scrambled: [
        'my favorite vegetable pasta',
        'that she had prepared',
        'Mother told me',
        'for lunch today.',
      ],
      correctSequence: [
        'Mother told me',
        'that she had prepared',
        'my favorite vegetable pasta',
        'for lunch today.',
      ],
    },
    explanation: '💡 Standard reported syntax: [Reporting subject + verb: Mother told me] + [Conjunction: that] + [Reported clause: she had prepared my favorite vegetable pasta for lunch today.]!',
    points: 15,
  },
];
