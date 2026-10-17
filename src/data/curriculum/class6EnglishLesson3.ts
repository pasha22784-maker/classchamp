import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 ENGLISH (GRAMMAR)
// CHAPTER 3: SUBJECT-VERB AGREEMENT
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_ENGLISH_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Basic Subject-Verb Concord (Singular vs Plural)
  // --------------------------------------------------------------------------
  {
    id: 'c6_e3_concept_concord_01',
    grade: 6,
    subject: 'english',
    chapter: 'Subject-Verb Agreement',
    concept: 'Singular Subject with Singular Verb',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Choose the sentence that has correct Subject-Verb Agreement:',
    visualEmoji: '🤝 Subject + Verb',
    payload: {
      options: [
        { id: 'opt_sva1', text: 'The teacher explains the lesson clearly.', isCorrect: true },
        { id: 'opt_sva2', text: 'The teacher explain the lesson clearly.', isCorrect: false },
        { id: 'opt_sva3', text: 'The teachers explains the lesson clearly.', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: A singular subject requires a singular verb with an "-s" or "-es" in present tense (*The teacher explains*, but *The teachers explain*)!',
    points: 10,
  },
  {
    id: 'c6_e3_concept_concord_02',
    grade: 6,
    subject: 'english',
    chapter: 'Subject-Verb Agreement',
    concept: 'Indefinite Pronouns Concord',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Each of the participants [BLANK] awarded a certificate of merit.',
    visualEmoji: '🏆 Each of the...',
    payload: {
      correctAnswer: 'was',
      wordBank: ['was', 'were', 'are', 'have'],
      displayTemplate: 'Each of the participants [BLANK] awarded.',
    },
    explanation: '💡 Words like **Each, Every, Everyone, Neither** take a **singular verb** (Each was awarded)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Matching Subjects to Proper Verbs
  // --------------------------------------------------------------------------
  {
    id: 'c6_e3_concept_match_01',
    grade: 6,
    subject: 'english',
    chapter: 'Subject-Verb Agreement',
    concept: 'Subject and Verb Pairing Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each subject phrase to its correct agreeing verb form:',
    visualEmoji: '🔗 Concord Pairs',
    payload: {
      pairs: [
        { id: 'e3_p1', left: 'Rahul and his brother', right: 'are playing badminton (Plural)' },
        { id: 'e3_p2', left: 'Neither Aman nor his friends', right: 'were present at the match (Agrees with friends)' },
        { id: 'e3_p3', left: 'A herd of elephants', right: 'is crossing the jungle path (Collective singular)' },
        { id: 'e3_p4', left: 'Slow and steady', right: 'wins the race (Considered as one idea)' },
      ],
    },
    explanation: '💡 When two subjects are connected by "and", the verb is plural. Collective nouns as a single unit take singular verbs!',
    points: 15,
  },
  {
    id: 'c6_e3_concept_either_01',
    grade: 6,
    subject: 'english',
    chapter: 'Subject-Verb Agreement',
    concept: 'Either... Or Concord Rule',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Select the grammatically correct verb for: "Either the cat or the dogs [BLANK] made that noise."',
    visualEmoji: '🐱 🐶 Either... or',
    payload: {
      options: [
        { id: 'opt_eo1', text: 'have', isCorrect: true },
        { id: 'opt_eo2', text: 'has', isCorrect: false },
        { id: 'opt_eo3', text: 'is', isCorrect: false },
      ],
    },
    explanation: '💡 In sentences with **Either... or / Neither... nor**, the verb agrees with the subject closest to it (*dogs ➡️ have*)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Constructing an Agreeing Sentence
  // --------------------------------------------------------------------------
  {
    id: 'c6_e3_concept_order_01',
    grade: 6,
    subject: 'english',
    chapter: 'Subject-Verb Agreement',
    concept: 'Ordering Sentence with Subject-Verb Concord',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the sentence fragments in proper order ensuring complete grammatical agreement:',
    visualEmoji: '🧩 Concord Sentence Order',
    payload: {
      tokens: [
        'The captain of the cricket team',
        'along with the coach',
        'has decided to bat first',
        'after winning the toss.',
      ],
      scrambled: [
        'has decided to bat first',
        'along with the coach',
        'after winning the toss.',
        'The captain of the cricket team',
      ],
      correctSequence: [
        'The captain of the cricket team',
        'along with the coach',
        'has decided to bat first',
        'after winning the toss.',
      ],
    },
    explanation: '💡 When a subject is joined with "along with" or "as well as", the verb agrees with the main first subject (The captain ➡️ has decided)!',
    points: 15,
  },
];
