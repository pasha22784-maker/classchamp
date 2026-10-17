import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 ENGLISH (GRAMMAR)
// CHAPTER 4: VERB TENSES (SIMPLE, CONTINUOUS, PERFECT)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_ENGLISH_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Present Perfect Tense (has / have + V3)
  // --------------------------------------------------------------------------
  {
    id: 'c6_e4_concept_perf_01',
    grade: 6,
    subject: 'english',
    chapter: 'Verb Tenses (Simple, Continuous, Perfect)',
    concept: 'Forming Present Perfect Tense',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Select the correct Present Perfect tense form to complete the sentence:\n"She [BLANK] all her homework before going to bed."',
    visualEmoji: '📝 ✨ Completed Action',
    payload: {
      options: [
        { id: 'opt_pf1', text: 'has completed', isCorrect: true },
        { id: 'opt_pf2', text: 'have completed', isCorrect: false },
        { id: 'opt_pf3', text: 'had completing', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **Present Perfect = has/have + Past Participle (V3)**. Singular subjects (he, she, it) take **has completed**!',
    points: 10,
  },
  {
    id: 'c6_e4_concept_perf_02',
    grade: 6,
    subject: 'english',
    chapter: 'Verb Tenses (Simple, Continuous, Perfect)',
    concept: 'Past Perfect with Two Past Actions',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The train [BLANK] already left before we reached the railway station.',
    visualEmoji: '🚂 ⏳ Past Perfect',
    payload: {
      correctAnswer: 'had',
      wordBank: ['had', 'has', 'have', 'will'],
      displayTemplate: 'The train [BLANK] already left.',
    },
    explanation: '💡 When two actions happened in the past, the earlier action takes the **Past Perfect tense (had + V3)**: *had already left*!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Matching Sentences to Tense Categories
  // --------------------------------------------------------------------------
  {
    id: 'c6_e4_concept_match_01',
    grade: 6,
    subject: 'english',
    chapter: 'Verb Tenses (Simple, Continuous, Perfect)',
    concept: 'Comprehensive Tense Classification Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each sentence with its exact grammatical tense category:',
    visualEmoji: '⏰ Tense Structure Match',
    payload: {
      pairs: [
        { id: 'e4_p1', left: 'Rohan has lived in Delhi for 5 years.', right: 'Present Perfect Tense' },
        { id: 'e4_p2', left: 'The children were playing cricket.', right: 'Past Continuous Tense' },
        { id: 'e4_p3', left: 'She will be studying when you arrive.', right: 'Future Continuous Tense' },
        { id: 'e4_p4', left: 'They had eaten dinner before the guests came.', right: 'Past Perfect Tense' },
      ],
    },
    explanation: '💡 Has + V3 = Present Perfect; Were + ing = Past Continuous; Will be + ing = Future Continuous; Had + V3 = Past Perfect!',
    points: 15,
  },
  {
    id: 'c6_e4_concept_v3_01',
    grade: 6,
    subject: 'english',
    chapter: 'Verb Tenses (Simple, Continuous, Perfect)',
    concept: 'Irregular Past Participle Form',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the correct 3rd form (Past Participle) of the irregular verb "fly"?\n(fly ➡️ flew ➡️ ?)',
    visualEmoji: '🕊️ fly ➡️ flew ➡️ ❓',
    payload: {
      options: [
        { id: 'opt_fl1', text: 'flown', isCorrect: true },
        { id: 'opt_fl2', text: 'flied', isCorrect: false },
        { id: 'opt_fl3', text: 'flowing', isCorrect: false },
      ],
    },
    explanation: '💡 The principal forms of "fly" are: fly (present) ➡️ flew (simple past) ➡️ **flown** (past participle)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Three Forms of a Verb (V1 ➡️ V2 ➡️ V3)
  // --------------------------------------------------------------------------
  {
    id: 'c6_e4_concept_order_01',
    grade: 6,
    subject: 'english',
    chapter: 'Verb Tenses (Simple, Continuous, Perfect)',
    concept: 'Chronological Verb Forms (Base ➡️ Past ➡️ Participle)',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the three principal forms of the irregular verb "begin" in standard order (V1 ➡️ V2 ➡️ V3):',
    visualEmoji: '📈 V1 ➡️ V2 ➡️ V3',
    payload: {
      tokens: ['Begin (Base / V1)', 'Began (Simple Past / V2)', 'Begun (Past Participle / V3)'],
      scrambled: ['Begun (Past Participle / V3)', 'Begin (Base / V1)', 'Began (Simple Past / V2)'],
      correctSequence: ['Begin (Base / V1)', 'Began (Simple Past / V2)', 'Begun (Past Participle / V3)'],
    },
    explanation: '💡 Standard verb conjugation: V1 = Begin, V2 = Began, V3 = Begun (He has begun)!',
    points: 15,
  },
];
