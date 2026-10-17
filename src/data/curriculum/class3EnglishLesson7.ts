import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 ENGLISH (SANTOOR 3 / MARIGOLD 3)
// CHAPTER 7: CONNECTING WORDS (AND, BUT, BECAUSE)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_ENGLISH_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Conjunction "And" (Joining Similar Ideas)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e7_concept_and_01',
    grade: 3,
    subject: 'english',
    chapter: 'Connecting Words (And, But, Because)',
    concept: 'Using "And" to Join Items',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Choose the correct connecting word:\n"I packed my notebook [_____] my pencil box in my school bag."',
    visualEmoji: '🎒 📓 ✏️',
    payload: {
      options: [
        { id: 'opt_and1', text: 'and', isCorrect: true },
        { id: 'opt_and2', text: 'but', isCorrect: false },
        { id: 'opt_and3', text: 'because', isCorrect: false },
      ],
    },
    explanation: '💡 We use **and** to join two or more similar items or thoughts together.',
    points: 10,
  },
  {
    id: 'c3_e7_concept_and_02',
    grade: 3,
    subject: 'english',
    chapter: 'Connecting Words (And, But, Because)',
    concept: 'Joining Two Actions with "And"',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Rohan sang a cheerful song [BLANK] danced happily.',
    visualEmoji: '🎤 🕺 🎶',
    payload: {
      correctAnswer: 'and',
      wordBank: ['and', 'but', 'because', 'so'],
      displayTemplate: 'Rohan sang a song [BLANK] danced.',
    },
    explanation: '💡 Both singing and dancing happened together, so we connect them with **and**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Conjunction "But" (Connecting Contrasting Ideas)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e7_concept_but_01',
    grade: 3,
    subject: 'english',
    chapter: 'Connecting Words (And, But, Because)',
    concept: 'Contrast with "But"',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which word connects the opposite outcome in this sentence?\n"He ran very fast, [_____] he missed the school bus."',
    visualEmoji: '🏃 💨 🚌 💨',
    payload: {
      options: [
        { id: 'opt_but1', text: 'but', isCorrect: true },
        { id: 'opt_but2', text: 'and', isCorrect: false },
        { id: 'opt_but3', text: 'because', isCorrect: false },
      ],
    },
    explanation: '💡 We use **but** when connecting two thoughts that are different, unexpected, or opposite.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Conjunction "Because" (Giving a Reason / Why)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e7_concept_bec_01',
    grade: 3,
    subject: 'english',
    chapter: 'Connecting Words (And, But, Because)',
    concept: 'Giving Reasons with "Because"',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Why did Meera open her umbrella ☂️?\n"Meera opened her umbrella [_____] it started to rain heavily."',
    visualEmoji: '☂️ 🌧️ 👧',
    payload: {
      options: [
        { id: 'opt_bec1', text: 'because', isCorrect: true },
        { id: 'opt_bec2', text: 'but', isCorrect: false },
        { id: 'opt_bec3', text: 'and', isCorrect: false },
      ],
    },
    explanation: '💡 We use **because** to give a reason or answer the question "Why?"!',
    points: 10,
  },
  {
    id: 'c3_e7_concept_bec_02',
    grade: 3,
    subject: 'english',
    chapter: 'Connecting Words (And, But, Because)',
    concept: 'Reason Blank Fill',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'We washed our hands with soap [BLANK] they were dirty after playing.',
    visualEmoji: '🧼 🤲 🫧',
    payload: {
      correctAnswer: 'because',
      wordBank: ['because', 'but', 'and', 'or'],
      displayTemplate: 'We washed our hands [BLANK] they were dirty.',
    },
    explanation: '💡 The dirty hands explain the reason, so we use **because**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Matching Clauses & Sentence Formation
  // --------------------------------------------------------------------------
  {
    id: 'c3_e7_concept_match_01',
    grade: 3,
    subject: 'english',
    chapter: 'Connecting Words (And, But, Because)',
    concept: 'Match Sentence Halves with Conjunctions',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the beginning of each sentence with its correct conjunction ending:',
    visualEmoji: '🔗 ➔ 🧩',
    payload: {
      pairs: [
        { id: 'e7_p1', left: 'I was thirsty', right: 'so I drank water.' },
        { id: 'e7_p2', left: 'She likes tea', right: 'but dislikes coffee.' },
        { id: 'e7_p3', left: 'He smiled', right: 'and waved at his friends.' },
        { id: 'e7_p4', left: 'I wore a sweater', right: 'because it was freezing cold.' },
      ],
    },
    explanation: '💡 Connecting words join clauses with logic: thirsty ➔ so drank, tea ➔ but dislikes coffee, smiled ➔ and waved, wore sweater ➔ because freezing.',
    points: 15,
  },
  {
    id: 'c3_e7_concept_order_01',
    grade: 3,
    subject: 'english',
    chapter: 'Connecting Words (And, But, Because)',
    concept: 'Sentence Scramble with Conjunction',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the tokens into a sensible compound sentence:',
    visualEmoji: '🍰 🍵 😋',
    payload: {
      tokens: ['Grandma baked', 'a chocolate cake', 'and', 'we all ate together.'],
      scrambled: ['we all ate together.', 'Grandma baked', 'and', 'a chocolate cake'],
      correctSequence: ['Grandma baked', 'a chocolate cake', 'and', 'we all ate together.'],
    },
    explanation: '💡 Correct order: "**Grandma baked a chocolate cake and we all ate together.**"',
    points: 15,
  },
];
