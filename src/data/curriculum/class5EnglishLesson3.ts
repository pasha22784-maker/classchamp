import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 ENGLISH (MARIGOLD 5)
// CHAPTER 3: TENSES: PRESENT, PAST & FUTURE
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_ENGLISH_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Simple Present, Past & Future Forms
  // --------------------------------------------------------------------------
  {
    id: 'c5_e3_concept_tenses_01',
    grade: 5,
    subject: 'english',
    chapter: 'Tenses: Present, Past & Future',
    concept: 'Simple Past of Irregular Verbs',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Select the correct simple past tense form to complete the sentence:\n"Yesterday, Rohit [BLANK] a wonderful storybook."',
    visualEmoji: '📖 ⏳ Yesterday',
    payload: {
      options: [
        { id: 'opt_ten1', text: 'wrote', isCorrect: true },
        { id: 'opt_ten2', text: 'writed', isCorrect: false },
        { id: 'opt_ten3', text: 'will write', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The verb "write" is irregular. Its three forms are: write (present) ➡️ **wrote** (past) ➡️ written (past participle)!',
    points: 10,
  },
  {
    id: 'c5_e3_concept_tenses_02',
    grade: 5,
    subject: 'english',
    chapter: 'Tenses: Present, Past & Future',
    concept: 'Future Tense with Will',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Tomorrow, our teacher [BLANK] take us on an educational trip to the museum.',
    visualEmoji: '🚌 🏛️ Tomorrow',
    payload: {
      correctAnswer: 'will',
      wordBank: ['will', 'did', 'was', 'has'],
      displayTemplate: 'Our teacher [BLANK] take us on an educational trip.',
    },
    explanation: '💡 For simple future actions happening tomorrow, we use **will + base verb** (will take)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Matching Tenses Across Time
  // --------------------------------------------------------------------------
  {
    id: 'c5_e3_concept_matching_01',
    grade: 5,
    subject: 'english',
    chapter: 'Tenses: Present, Past & Future',
    concept: 'Matching Sentences with Tense Categories',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each sentence with its correct grammatical tense:',
    visualEmoji: '⏰ Tenses Match',
    payload: {
      pairs: [
        { id: 'e3_p1', left: 'The sun shines brightly.', right: 'Simple Present Tense' },
        { id: 'e3_p2', left: 'Birds flew to their nests.', right: 'Simple Past Tense' },
        { id: 'e3_p3', left: 'We shall visit Granny tomorrow.', right: 'Simple Future Tense' },
        { id: 'e3_p4', left: 'Rohan is studying right now.', right: 'Present Continuous Tense' },
      ],
    },
    explanation: '💡 "Shines" is Simple Present, "flew" is Simple Past, "shall visit" is Simple Future, and "is studying" is Present Continuous!',
    points: 15,
  },
  {
    id: 'c5_e3_concept_continuous_01',
    grade: 5,
    subject: 'english',
    chapter: 'Tenses: Present, Past & Future',
    concept: 'Past Continuous Tense',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Choose the sentence that is written in the Past Continuous Tense (was/were + verb-ing):',
    visualEmoji: '🌧️ Past Continuous',
    payload: {
      options: [
        { id: 'opt_pc1', text: 'It was raining heavily when we arrived.', isCorrect: true },
        { id: 'opt_pc2', text: 'It rains heavily in July.', isCorrect: false },
        { id: 'opt_pc3', text: 'It will rain tomorrow evening.', isCorrect: false },
      ],
    },
    explanation: '💡 **Past Continuous Tense** describes an action ongoing in the past: "was raining"!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Chronological Tense Progression
  // --------------------------------------------------------------------------
  {
    id: 'c5_e3_concept_prog_01',
    grade: 5,
    subject: 'english',
    chapter: 'Tenses: Present, Past & Future',
    concept: 'Arranging Past, Present, and Future Sequence',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these three statements in chronological time order (Past ➡️ Present ➡️ Future):',
    visualEmoji: '⏮️ ⏯️ ⏭️ Timeline',
    payload: {
      tokens: [
        'Last year I was in Class 4 (Past)',
        'This year I am studying in Class 5 (Present)',
        'Next year I will enter Class 6 (Future)',
      ],
      scrambled: [
        'Next year I will enter Class 6 (Future)',
        'Last year I was in Class 4 (Past)',
        'This year I am studying in Class 5 (Present)',
      ],
      correctSequence: [
        'Last year I was in Class 4 (Past)',
        'This year I am studying in Class 5 (Present)',
        'Next year I will enter Class 6 (Future)',
      ],
    },
    explanation: '💡 Timeline flow: Last year (Past: was) ➡️ This year (Present: am) ➡️ Next year (Future: will enter)!',
    points: 15,
  },
];
