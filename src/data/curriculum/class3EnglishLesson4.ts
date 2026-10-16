import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 ENGLISH (SANTOOR 3 / MARIGOLD 3)
// CHAPTER 4: HELPING VERBS (IS, AM, ARE, WAS, WERE)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_ENGLISH_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Present Tense Helping Verbs (Is, Am, Are)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e4_concept_is_am_01',
    grade: 3,
    subject: 'english',
    chapter: 'Helping Verbs (Is, Am, Are, Was, Were)',
    concept: 'Using "Am" with "I"',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Choose the correct helping verb:\n"I [_____] studying in Class 3."',
    visualEmoji: '👦 📖 🏫',
    payload: {
      options: [
        { id: 'opt_am1', text: 'am (I am)', isCorrect: true },
        { id: 'opt_am2', text: 'is', isCorrect: false },
        { id: 'opt_am3', text: 'are', isCorrect: false },
      ],
    },
    explanation: '💡 In the present tense, the pronoun **"I"** ALWAYS pairs with **"am"** ("I am studying").',
    points: 10,
  },
  {
    id: 'c3_e4_concept_is_are_01',
    grade: 3,
    subject: 'english',
    chapter: 'Helping Verbs (Is, Am, Are, Was, Were)',
    concept: 'Singular "Is" vs Plural "Are"',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The peacock [BLANK] dancing in the rain, and the ducks [BLANK] swimming.',
    visualEmoji: '🦚 🌧️ 🦆🦆',
    payload: {
      correctAnswer: 'is',
      wordBank: ['is', 'are', 'am', 'were'],
      displayTemplate: 'The peacock [BLANK] dancing gracefully.',
    },
    explanation: '💡 One peacock (singular) takes **is**! Multiple ducks (plural) take **are**!',
    points: 10,
  },
  {
    id: 'c3_e4_concept_is_are_02',
    grade: 3,
    subject: 'english',
    chapter: 'Helping Verbs (Is, Am, Are, Was, Were)',
    concept: 'Using "Are" with Plural & "You"',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which sentence correctly uses "are"?',
    visualEmoji: '👧👦 ⚽',
    payload: {
      options: [
        { id: 'opt_are1', text: 'They are playing football in the playground.', isCorrect: true },
        { id: 'opt_are2', text: 'They is playing football.', isCorrect: false },
        { id: 'opt_are3', text: 'They am playing football.', isCorrect: false },
      ],
    },
    explanation: '💡 Plural pronouns like **We**, **They**, and the pronoun **You** always use **are**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Past Tense Helping Verbs (Was, Were)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e4_concept_was_were_01',
    grade: 3,
    subject: 'english',
    chapter: 'Helping Verbs (Is, Am, Are, Was, Were)',
    concept: 'Singular "Was" in Past Tense',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Yesterday, it [BLANK] raining heavily all afternoon.',
    visualEmoji: '🌧️ ⏳ 📅',
    payload: {
      correctAnswer: 'was',
      wordBank: ['was', 'were', 'is', 'are'],
      displayTemplate: 'Yesterday, it [BLANK] raining.',
    },
    explanation: '💡 For singular subjects in the past (yesterday), we use **was**!',
    points: 10,
  },
  {
    id: 'c3_e4_concept_was_were_02',
    grade: 3,
    subject: 'english',
    chapter: 'Helping Verbs (Is, Am, Are, Was, Were)',
    concept: 'Plural "Were" in Past Tense',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Choose the correct word for yesterday:\n"The children [_____] excited to visit the zoo yesterday."',
    visualEmoji: '🦁 🐘 🧒👦',
    payload: {
      options: [
        { id: 'opt_were1', text: 'were (children were)', isCorrect: true },
        { id: 'opt_were2', text: 'was', isCorrect: false },
        { id: 'opt_were3', text: 'is', isCorrect: false },
      ],
    },
    explanation: '💡 "Children" is plural, so in the past tense we use **were**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Matching Subjects to Helping Verbs
  // --------------------------------------------------------------------------
  {
    id: 'c3_e4_concept_match_01',
    grade: 3,
    subject: 'english',
    chapter: 'Helping Verbs (Is, Am, Are, Was, Were)',
    concept: 'Subject-Verb Agreement Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each subject with its correct present helping verb:',
    visualEmoji: '👤 ➔ ⚙️',
    payload: {
      pairs: [
        { id: 'e4_p1', left: 'I', right: 'am' },
        { id: 'e4_p2', left: 'She', right: 'is' },
        { id: 'e4_p3', left: 'We', right: 'are' },
        { id: 'e4_p4', left: 'The dog', right: 'is' },
      ],
    },
    explanation: '💡 I ➔ am, She ➔ is, We ➔ are, The dog (singular) ➔ is.',
    points: 15,
  },
  {
    id: 'c3_e4_concept_order_01',
    grade: 3,
    subject: 'english',
    chapter: 'Helping Verbs (Is, Am, Are, Was, Were)',
    concept: 'Sentence Scramble with Helping Verb',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to form a correct sentence:',
    visualEmoji: '🌟 ✨ 🌌',
    payload: {
      tokens: ['The stars', 'were shining', 'brightly in', 'the night sky.'],
      scrambled: ['brightly in', 'The stars', 'the night sky.', 'were shining'],
      correctSequence: ['The stars', 'were shining', 'brightly in', 'the night sky.'],
    },
    explanation: '💡 Correct order: "**The stars were shining brightly in the night sky.**"',
    points: 15,
  },
];
