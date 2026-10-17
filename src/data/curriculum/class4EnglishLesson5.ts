import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 ENGLISH (MARIGOLD 4)
// CHAPTER 5: CONJUNCTIONS (SO, ALTHOUGH, BECAUSE)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_ENGLISH_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Conjunction "So" (Expressing Result or Consequence)
  // --------------------------------------------------------------------------
  {
    id: 'c4_e5_concept_so_01',
    grade: 4,
    subject: 'english',
    chapter: 'Conjunctions (So, Although, Because)',
    concept: 'Using "So" for Results',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Choose the correct connecting word:\n"It started pouring rain heavily, [_____] we opened our umbrellas."',
    visualEmoji: '🌧️ ☔ 🧒',
    payload: {
      options: [
        { id: 'opt_so1', text: 'so', isCorrect: true },
        { id: 'opt_so2', text: 'because', isCorrect: false },
        { id: 'opt_so3', text: 'although', isCorrect: false },
      ],
    },
    explanation: '💡 We use **so** to express the *result* or outcome of an event: It rained, *so* we opened umbrellas.',
    points: 10,
  },
  {
    id: 'c4_e5_concept_so_02',
    grade: 4,
    subject: 'english',
    chapter: 'Conjunctions (So, Although, Because)',
    concept: 'Result Blank with "So"',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Aman worked hard all year, [BLANK] he won the first prize in class.',
    visualEmoji: '📚 ✍️ 🏆',
    payload: {
      correctAnswer: 'so',
      wordBank: ['so', 'because', 'although', 'but'],
      displayTemplate: 'Aman worked hard, [BLANK] he won the prize.',
    },
    explanation: '💡 Winning the prize is the result of working hard, connected by **so**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Conjunction "Although" (Unexpected Contrast)
  // --------------------------------------------------------------------------
  {
    id: 'c4_e5_concept_alth_01',
    grade: 4,
    subject: 'english',
    chapter: 'Conjunctions (So, Although, Because)',
    concept: 'Using "Although" for Contrast',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which word connects the surprising contrast in this sentence?\n"[_____] the little boy was tired, he kept walking cheerfully."',
    visualEmoji: '🚶 ⛰️ 💪',
    payload: {
      options: [
        { id: 'opt_al1', text: 'Although', isCorrect: true },
        { id: 'opt_al2', text: 'Because', isCorrect: false },
        { id: 'opt_al3', text: 'So', isCorrect: false },
      ],
    },
    explanation: '💡 We use **although** to show that something happens despite an obstacle or surprising condition!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: "Because" vs "So" (Cause vs Effect)
  // --------------------------------------------------------------------------
  {
    id: 'c4_e5_concept_bec_01',
    grade: 4,
    subject: 'english',
    chapter: 'Conjunctions (So, Although, Because)',
    concept: 'Cause Reason with "Because"',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'We could not play outdoor cricket [BLANK] the pitch was completely muddy.',
    visualEmoji: '🏏 🌧️ 🚫',
    payload: {
      correctAnswer: 'because',
      wordBank: ['because', 'so', 'although', 'and'],
      displayTemplate: 'We could not play [BLANK] the pitch was muddy.',
    },
    explanation: '💡 Muddy pitch explains the *reason why*, which requires **because**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Conjunction Clause Matching & Sentence Order
  // --------------------------------------------------------------------------
  {
    id: 'c4_e5_concept_match_01',
    grade: 4,
    subject: 'english',
    chapter: 'Conjunctions (So, Although, Because)',
    concept: 'Conjunction Clause Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the beginning clause with its appropriate conjunction ending:',
    visualEmoji: '🔗 ➔ 🧩',
    payload: {
      pairs: [
        { id: 'cj_p1', left: 'The clock alarm rang', right: 'so she woke up immediately.' },
        { id: 'cj_p2', left: 'Although it was dark outside', right: 'he was not afraid.' },
        { id: 'cj_p3', left: 'He washed his hands', right: 'because dinner was ready.' },
        { id: 'cj_p4', left: 'She loved drawing', right: 'so she bought crayons.' },
      ],
    },
    explanation: '💡 Conjunction logic: Alarm rang ➔ so woke up; Although dark ➔ not afraid; Washed hands ➔ because dinner ready; Loved drawing ➔ so bought crayons.',
    points: 15,
  },
  {
    id: 'c4_e5_concept_order_01',
    grade: 4,
    subject: 'english',
    chapter: 'Conjunctions (So, Although, Because)',
    concept: 'Complex Sentence Scramble',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to form a correct compound sentence using "Although":',
    visualEmoji: '🏃 🌧️ 🏅',
    payload: {
      tokens: ['Although it rained,', 'the runners finished', 'the marathon race', 'with big smiles.'],
      scrambled: ['with big smiles.', 'the marathon race', 'Although it rained,', 'the runners finished'],
      correctSequence: ['Although it rained,', 'the runners finished', 'the marathon race', 'with big smiles.'],
    },
    explanation: '💡 Correct order: "**Although it rained, the runners finished the marathon race with big smiles.**"',
    points: 15,
  },
];
