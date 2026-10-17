import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 ENGLISH (GRAMMAR)
// CHAPTER 2: KINDS OF SENTENCES (DECLARATIVE, QUESTION, EXCLAMATORY)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_ENGLISH_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: The Four Kinds of Sentences
  // --------------------------------------------------------------------------
  {
    id: 'c6_e2_concept_types_01',
    grade: 6,
    subject: 'english',
    chapter: 'Kinds of Sentences (Declarative, Question, Exclamatory)',
    concept: 'Identifying Imperative Sentences',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Read this sentence:\n"Please close the classroom door quietly."\nWhich kind of sentence is this?',
    visualEmoji: '🚪 🤫 Sentence Types',
    payload: {
      options: [
        { id: 'opt_st1', text: 'Imperative Sentence', isCorrect: true },
        { id: 'opt_st2', text: 'Interrogative Sentence', isCorrect: false },
        { id: 'opt_st3', text: 'Exclamatory Sentence', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: An **Imperative sentence** expresses a command, request, or advice (e.g. *Please help me*, *Sit down*)!',
    points: 10,
  },
  {
    id: 'c6_e2_concept_types_02',
    grade: 6,
    subject: 'english',
    chapter: 'Kinds of Sentences (Declarative, Question, Exclamatory)',
    concept: 'Punctuation for Exclamatory Sentences',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'An Exclamatory sentence expressing strong sudden emotion always ends with an [BLANK] mark (!).',
    visualEmoji: '😲 ❗️ Exclamation',
    payload: {
      correctAnswer: 'exclamation',
      wordBank: ['exclamation', 'question', 'hyphen', 'comma'],
      displayTemplate: 'Always ends with an [BLANK] mark.',
    },
    explanation: '💡 An **exclamation mark (!)** ends sentences expressing wonder, shock, joy, or alarm (e.g. *What a magnificent painting!*)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Matching Sentence Types to Examples
  // --------------------------------------------------------------------------
  {
    id: 'c6_e2_concept_match_01',
    grade: 6,
    subject: 'english',
    chapter: 'Kinds of Sentences (Declarative, Question, Exclamatory)',
    concept: 'Sentence Types and Function Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each sentence with its correct classification:',
    visualEmoji: '🏷️ Sentence Kinds Match',
    payload: {
      pairs: [
        { id: 'e2_p1', left: 'The earth orbits around the sun.', right: 'Declarative (Assertive Statement)' },
        { id: 'e2_p2', left: 'Have you finished your science homework?', right: 'Interrogative (Question)' },
        { id: 'e2_p3', left: 'Keep off the grass in the garden.', right: 'Imperative (Command / Order)' },
        { id: 'e2_p4', left: 'How breathtaking the sunset is!', right: 'Exclamatory (Sudden Emotion)' },
      ],
    },
    explanation: '💡 4 Kinds: Declarative (facts/statements), Interrogative (inquiries), Imperative (commands/requests), Exclamatory (deep feelings)!',
    points: 15,
  },
  {
    id: 'c6_e2_concept_trans_01',
    grade: 6,
    subject: 'english',
    chapter: 'Kinds of Sentences (Declarative, Question, Exclamatory)',
    concept: 'Transforming Statement into Question',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Transform the statement: "She can play the violin beautifully" into an Interrogative sentence:',
    visualEmoji: '🎻 ❓ Interrogative',
    payload: {
      options: [
        { id: 'opt_tf1', text: '"Can she play the violin beautifully?"', isCorrect: true },
        { id: 'opt_tf2', text: '"She plays violin beautifully?"', isCorrect: false },
        { id: 'opt_tf3', text: '"Why does she play violin?"', isCorrect: false },
      ],
    },
    explanation: '💡 To make an interrogative sentence with an auxiliary modal verb like "can", place the auxiliary before the subject: **"Can she play the violin beautifully?"**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Ordering the 4 Major Sentence Categories
  // --------------------------------------------------------------------------
  {
    id: 'c6_e2_concept_order_01',
    grade: 6,
    subject: 'english',
    chapter: 'Kinds of Sentences (Declarative, Question, Exclamatory)',
    concept: 'The Four Classic Sentence Types',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the four kinds of sentences along with their terminal punctuation in standard order:',
    visualEmoji: '📚 4 Sentence Types',
    payload: {
      tokens: [
        '1. Declarative Sentence (Ends with .)',
        '2. Interrogative Sentence (Ends with ?)',
        '3. Imperative Sentence (Ends with . or !)',
        '4. Exclamatory Sentence (Ends with !)',
      ],
      scrambled: [
        '3. Imperative Sentence (Ends with . or !)',
        '1. Declarative Sentence (Ends with .)',
        '4. Exclamatory Sentence (Ends with !)',
        '2. Interrogative Sentence (Ends with ?)',
      ],
      correctSequence: [
        '1. Declarative Sentence (Ends with .)',
        '2. Interrogative Sentence (Ends with ?)',
        '3. Imperative Sentence (Ends with . or !)',
        '4. Exclamatory Sentence (Ends with !)',
      ],
    },
    explanation: '💡 Standard grammar taxonomy: Declarative ➡️ Interrogative ➡️ Imperative ➡️ Exclamatory!',
    points: 15,
  },
];
