import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 ENGLISH (MARIGOLD 5)
// CHAPTER 2: ABSTRACT NOUNS (KINDNESS, HONESTY, COURAGE)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_ENGLISH_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: What is an Abstract Noun? (Concrete vs Abstract)
  // --------------------------------------------------------------------------
  {
    id: 'c5_e2_concept_def_01',
    grade: 5,
    subject: 'english',
    chapter: 'Abstract Nouns (Kindness, Honesty, Courage)',
    concept: 'Identifying Abstract Nouns',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which word in the sentence below is an Abstract Noun?\n"The brave soldier fought with great courage."',
    visualEmoji: '🛡️ Courage & Bravery',
    payload: {
      options: [
        { id: 'opt_an1', text: 'courage (name of a quality/feeling)', isCorrect: true },
        { id: 'opt_an2', text: 'soldier (concrete noun)', isCorrect: false },
        { id: 'opt_an3', text: 'fought (action verb)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: An **Abstract Noun** is an idea, quality, or feeling that you cannot touch or see with your eyes (e.g. *courage, honesty, happiness*)!',
    points: 10,
  },
  {
    id: 'c5_e2_concept_def_02',
    grade: 5,
    subject: 'english',
    chapter: 'Abstract Nouns (Kindness, Honesty, Courage)',
    concept: 'Abstract Noun in a Sentence',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Complete the sentence with an abstract noun: "Her [BLANK] towards stray animals touched everyone\'s heart."',
    visualEmoji: '❤️ 🐶',
    payload: {
      correctAnswer: 'kindness',
      wordBank: ['kindness', 'spoon', 'house', 'plate'],
      displayTemplate: 'Her [BLANK] towards stray animals touched everyone.',
    },
    explanation: '💡 **Kindness** is an abstract noun denoting a caring and generous quality!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Forming Abstract Nouns from Adjectives
  // --------------------------------------------------------------------------
  {
    id: 'c5_e2_concept_form_01',
    grade: 5,
    subject: 'english',
    chapter: 'Abstract Nouns (Kindness, Honesty, Courage)',
    concept: 'Adjective to Abstract Noun Suffixes',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each adjective to its corresponding abstract noun:',
    visualEmoji: '✨ Word Transformations',
    payload: {
      pairs: [
        { id: 'e2_p1', left: 'Brave (adjective)', right: 'Bravery (noun)' },
        { id: 'e2_p2', left: 'Honest (adjective)', right: 'Honesty (noun)' },
        { id: 'e2_p3', left: 'Wise (adjective)', right: 'Wisdom (noun)' },
        { id: 'e2_p4', left: 'Strong (adjective)', right: 'Strength (noun)' },
      ],
    },
    explanation: '💡 Adjectives change into abstract nouns using suffixes like *-ery, -y, -dom, -th* (Brave ➡️ Bravery, Strong ➡️ Strength)!',
    points: 15,
  },
  {
    id: 'c5_e2_concept_form_02',
    grade: 5,
    subject: 'english',
    chapter: 'Abstract Nouns (Kindness, Honesty, Courage)',
    concept: 'Childhood & Friendship',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which suffix turns the common noun "Child" into an abstract noun meaning the state of being a child?',
    visualEmoji: '👶 🧒 Childhood',
    payload: {
      options: [
        { id: 'opt_ch1', text: '-hood (Childhood)', isCorrect: true },
        { id: 'opt_ch2', text: '-ness (Childness)', isCorrect: false },
        { id: 'opt_ch3', text: '-ly (Childly)', isCorrect: false },
      ],
    },
    explanation: '💡 Adding **-hood** to Child forms the abstract noun **Childhood** (like Brotherhood, Neighborhood)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Sorting Noun Types (Concrete vs Abstract)
  // --------------------------------------------------------------------------
  {
    id: 'c5_e2_concept_order_01',
    grade: 5,
    subject: 'english',
    chapter: 'Abstract Nouns (Kindness, Honesty, Courage)',
    concept: 'Distinguishing Concrete and Abstract Nouns',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange these words in alternating order: [Concrete Noun] followed by [Abstract Noun]:',
    visualEmoji: '🧱 vs 💭 Sorting',
    payload: {
      tokens: ['Book (Can touch)', 'Knowledge (Idea)', 'Pencil (Can touch)', 'Curiosity (Idea)'],
      scrambled: ['Curiosity (Idea)', 'Book (Can touch)', 'Pencil (Can touch)', 'Knowledge (Idea)'],
      correctSequence: ['Book (Can touch)', 'Knowledge (Idea)', 'Pencil (Can touch)', 'Curiosity (Idea)'],
    },
    explanation: '💡 Concrete nouns (Book, Pencil) can be seen and touched physically, while abstract nouns (Knowledge, Curiosity) exist as thoughts and qualities!',
    points: 15,
  },
];
