import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 ENGLISH (MARIGOLD 4)
// CHAPTER 3: PAST TENSE & IRREGULAR VERBS (CAUGHT, FLEW)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_ENGLISH_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Irregular Verbs (Catch ➔ Caught, Fly ➔ Flew)
  // --------------------------------------------------------------------------
  {
    id: 'c4_e3_concept_irreg_01',
    grade: 4,
    subject: 'english',
    chapter: 'Past Tense & Irregular Verbs (Caught, Flew)',
    concept: 'Past Tense of Catch',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The fielder leaped up high and [_____] the cricket ball 🏏 brilliantly.',
    visualEmoji: '🏏 ⚾ ✋',
    payload: {
      options: [
        { id: 'opt_ct1', text: 'caught', isCorrect: true },
        { id: 'opt_ct2', text: 'catched', isCorrect: false },
        { id: 'opt_ct3', text: 'catching', isCorrect: false },
      ],
    },
    explanation: '💡 "Catch" is an irregular verb. Its past tense is **caught** (never "catched")!',
    points: 10,
  },
  {
    id: 'c4_e3_concept_irreg_02',
    grade: 4,
    subject: 'english',
    chapter: 'Past Tense & Irregular Verbs (Caught, Flew)',
    concept: 'Past Tense of Fly',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The colorful kite broke its string and [BLANK] high into the sky.',
    visualEmoji: '🪁 ☁️ 💨',
    payload: {
      correctAnswer: 'flew',
      wordBank: ['flew', 'flied', 'flyed', 'flying'],
      displayTemplate: 'The kite [BLANK] high into the sky.',
    },
    explanation: '💡 The simple past tense of "fly" is **flew**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Common Irregular Pairs (Buy, Think, Teach)
  // --------------------------------------------------------------------------
  {
    id: 'c4_e3_concept_irreg_03',
    grade: 4,
    subject: 'english',
    chapter: 'Past Tense & Irregular Verbs (Caught, Flew)',
    concept: 'Past Tense of Buy',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Yesterday, father [_____] a new set of storybooks from the bookshop.',
    visualEmoji: '📚 🛍️ 💳',
    payload: {
      options: [
        { id: 'opt_by1', text: 'bought', isCorrect: true },
        { id: 'opt_by2', text: 'buyed', isCorrect: false },
        { id: 'opt_by3', text: 'brought', isCorrect: false },
      ],
    },
    explanation: '💡 Buy ➔ **bought**! (Notice the difference: Bring ➔ brought, Buy ➔ bought).',
    points: 10,
  },
  {
    id: 'c4_e3_concept_irreg_04',
    grade: 4,
    subject: 'english',
    chapter: 'Past Tense & Irregular Verbs (Caught, Flew)',
    concept: 'Past Tense of Write',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Ananya [BLANK] a wonderful essay about her pet puppy.',
    visualEmoji: '✍️ 📄 🐶',
    payload: {
      correctAnswer: 'wrote',
      wordBank: ['wrote', 'writed', 'written', 'write'],
      displayTemplate: 'Ananya [BLANK] an essay.',
    },
    explanation: '💡 The past tense of write is **wrote**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Irregular Verb Matching & Past Tense Sentence Scramble
  // --------------------------------------------------------------------------
  {
    id: 'c4_e3_concept_match_01',
    grade: 4,
    subject: 'english',
    chapter: 'Past Tense & Irregular Verbs (Caught, Flew)',
    concept: 'Present to Past Tense Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each present tense verb with its correct irregular past tense form:',
    visualEmoji: '⏳ ➔ 📜',
    payload: {
      pairs: [
        { id: 'pt_p1', left: 'teach', right: 'taught' },
        { id: 'pt_p2', left: 'think', right: 'thought' },
        { id: 'pt_p3', left: 'eat', right: 'ate' },
        { id: 'pt_p4', left: 'swim', right: 'swam' },
      ],
    },
    explanation: '💡 teach ➔ taught, think ➔ thought, eat ➔ ate, swim ➔ swam.',
    points: 15,
  },
  {
    id: 'c4_e3_concept_order_01',
    grade: 4,
    subject: 'english',
    chapter: 'Past Tense & Irregular Verbs (Caught, Flew)',
    concept: 'Past Tense Sentence Scramble',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to form a correct past tense sentence:',
    visualEmoji: '🦅 🐟 🌊',
    payload: {
      tokens: ['The eagle', 'swooped down', 'and caught', 'a fish in the river.'],
      scrambled: ['and caught', 'The eagle', 'a fish in the river.', 'swooped down'],
      correctSequence: ['The eagle', 'swooped down', 'and caught', 'a fish in the river.'],
    },
    explanation: '💡 Correct order: "**The eagle swooped down and caught a fish in the river.**"',
    points: 15,
  },
];
