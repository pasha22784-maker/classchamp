import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 ENGLISH (MARIGOLD 5)
// CHAPTER 4: ACTIVE AND PASSIVE VOICE
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_ENGLISH_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: What is Active vs Passive Voice?
  // --------------------------------------------------------------------------
  {
    id: 'c5_e4_concept_def_01',
    grade: 5,
    subject: 'english',
    chapter: 'Active and Passive Voice',
    concept: 'Identifying Active vs Passive',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Read this sentence:\n"The delicious cake was baked by Grandma."\nIs this sentence written in Active Voice or Passive Voice?',
    visualEmoji: '🎂 👵 Active vs Passive',
    payload: {
      options: [
        { id: 'opt_ap1', text: 'Passive Voice', isCorrect: true },
        { id: 'opt_ap2', text: 'Active Voice', isCorrect: false },
        { id: 'opt_ap3', text: 'Imperative command', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: In **Active Voice**, the subject does the action (*Grandma baked the cake*). In **Passive Voice**, the subject receives the action (*The cake was baked by Grandma*)!',
    points: 10,
  },
  {
    id: 'c5_e4_concept_def_02',
    grade: 5,
    subject: 'english',
    chapter: 'Active and Passive Voice',
    concept: 'Passive Voice Agent with "by"',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Complete the passive sentence: "The goal was scored [BLANK] our team captain."',
    visualEmoji: '⚽ 🥅',
    payload: {
      correctAnswer: 'by',
      wordBank: ['by', 'to', 'for', 'from'],
      displayTemplate: 'The goal was scored [BLANK] our team captain.',
    },
    explanation: '💡 In passive voice, the doer of the action is introduced using the preposition **by**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Converting Active Sentences to Passive Sentences
  // --------------------------------------------------------------------------
  {
    id: 'c5_e4_concept_conv_01',
    grade: 5,
    subject: 'english',
    chapter: 'Active and Passive Voice',
    concept: 'Matching Active and Passive Pairs',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each Active Voice sentence to its correct Passive Voice transformation:',
    visualEmoji: '🔄 Sentence Voice Pairs',
    payload: {
      pairs: [
        { id: 'e4_p1', left: 'Rohan painted the fence.', right: 'The fence was painted by Rohan.' },
        { id: 'e4_p2', left: 'The dog caught the ball.', right: 'The ball was caught by the dog.' },
        { id: 'e4_p3', left: 'Anita wrote a letter.', right: 'A letter was written by Anita.' },
        { id: 'e4_p4', left: 'The teacher praised Mohan.', right: 'Mohan was praised by the teacher.' },
      ],
    },
    explanation: '💡 Formula: **Object + was/were + Past Participle (V3) + by + Subject**!',
    points: 15,
  },
  {
    id: 'c5_e4_concept_v3_01',
    grade: 5,
    subject: 'english',
    chapter: 'Active and Passive Voice',
    concept: 'Past Participle in Passive Voice',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the correct passive form of: "The chef cooked a grand feast"?',
    visualEmoji: '👨‍🍳 🍲 Grand Feast',
    payload: {
      options: [
        { id: 'opt_pv1', text: 'A grand feast was cooked by the chef.', isCorrect: true },
        { id: 'opt_pv2', text: 'A grand feast was cooking the chef.', isCorrect: false },
        { id: 'opt_pv3', text: 'The chef was cooked by a grand feast.', isCorrect: false },
      ],
    },
    explanation: '💡 "A grand feast" becomes the subject, followed by "was cooked by the chef"!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Sentence Reordering in Passive Voice
  // --------------------------------------------------------------------------
  {
    id: 'c5_e4_concept_order_01',
    grade: 5,
    subject: 'english',
    chapter: 'Active and Passive Voice',
    concept: 'Arranging Words in Passive Voice Order',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the words to form a correct Passive Voice sentence:',
    visualEmoji: '🧩 Word Reorder',
    payload: {
      tokens: ['The mystery', 'was solved', 'by the clever', 'detective.'],
      scrambled: ['by the clever', 'The mystery', 'detective.', 'was solved'],
      correctSequence: ['The mystery', 'was solved', 'by the clever', 'detective.'],
    },
    explanation: '💡 Correct syntax: [Subject receiving action: "The mystery"] + [auxiliary + past participle: "was solved"] + [prepositional agent: "by the clever detective."]!',
    points: 15,
  },
];
