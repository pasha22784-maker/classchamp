import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 ENGLISH (MRIDANG & MARIGOLD)
// CHAPTER 7: PRONOUNS (HE, SHE, IT, THEY)
// Comprehensive Curriculum Covering All 6 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_ENGLISH_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: "HE" (for boys, men, and male persons)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e7_concept_he_01',
    grade: 1,
    subject: 'english',
    chapter: 'Pronouns (He, She, It)',
    concept: 'Pronoun: HE',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Rohan is a smart school boy 👦. Which word can you use instead of saying "Rohan" again?',
    visualEmoji: '👦 🎒',
    payload: {
      options: [
        { id: 'opt_he1_1', text: 'HE', isCorrect: true },
        { id: 'opt_he1_2', text: 'SHE', isCorrect: false },
        { id: 'opt_he1_3', text: 'IT', isCorrect: false },
      ],
    },
    explanation: '💡 We use **HE** for a boy, man, or father: "Rohan is happy. **He** is smiling!" 👦',
    points: 10,
  },
  {
    id: 'c1_e7_concept_he_02',
    grade: 1,
    subject: 'english',
    chapter: 'Pronouns (He, She, It)',
    concept: 'Pronoun: HE for Father',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'My father is a kind doctor 👨‍⚕️. [BLANK] helps sick people.',
    visualEmoji: '👨‍⚕️ 🩺',
    payload: {
      correctAnswer: 'He',
      wordBank: ['He', 'She', 'It', 'They'],
      displayTemplate: '[BLANK] helps sick people. 👨‍⚕️',
    },
    explanation: '💡 Father is a man, so we use **He**: "**He** helps sick people!"',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: "SHE" (for girls, women, and female persons)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e7_concept_she_01',
    grade: 1,
    subject: 'english',
    chapter: 'Pronouns (He, She, It)',
    concept: 'Pronoun: SHE',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Priya is singing a lovely song 👧 🎶. Which word replaces Priya?',
    visualEmoji: '👧 🎤',
    payload: {
      options: [
        { id: 'opt_she1_1', text: 'SHE', isCorrect: true },
        { id: 'opt_she1_2', text: 'HE', isCorrect: false },
        { id: 'opt_she1_3', text: 'IT', isCorrect: false },
      ],
    },
    explanation: '💡 We use **SHE** for a girl, woman, or mother: "**She** is singing!" 👧',
    points: 10,
  },
  {
    id: 'c1_e7_concept_she_02',
    grade: 1,
    subject: 'english',
    chapter: 'Pronouns (He, She, It)',
    concept: 'Pronoun: SHE for Mother',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'My mother is cooking delicious dinner in the kitchen 👩 🍳. [BLANK] makes tasty rotis.',
    visualEmoji: '👩 🍳 🍲',
    payload: {
      correctAnswer: 'She',
      wordBank: ['She', 'He', 'It', 'They'],
      displayTemplate: '[BLANK] makes tasty rotis. 👩',
    },
    explanation: '💡 Mother is a woman, so we use **She**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: "IT" (for non-living things, animals, and objects)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e7_concept_it_01',
    grade: 1,
    subject: 'english',
    chapter: 'Pronouns (He, She, It)',
    concept: 'Pronoun: IT for Things',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the bouncing football: ⚽. Which word replaces "football"?',
    visualEmoji: '⚽ 🥅',
    payload: {
      options: [
        { id: 'opt_it1_1', text: 'IT', isCorrect: true },
        { id: 'opt_it1_2', text: 'HE', isCorrect: false },
        { id: 'opt_it1_3', text: 'SHE', isCorrect: false },
      ],
    },
    explanation: '💡 A football is a non-living thing, so we use **IT**: "**It** is round!" ⚽',
    points: 10,
  },
  {
    id: 'c1_e7_concept_it_02',
    grade: 1,
    subject: 'english',
    chapter: 'Pronouns (He, She, It)',
    concept: 'Pronoun: IT for Animals',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The little dog is barking at the gate 🐶: [BLANK] is wagging its tail.',
    visualEmoji: '🐶 🚪',
    payload: {
      correctAnswer: 'It',
      wordBank: ['It', 'He', 'She', 'We'],
      displayTemplate: '[BLANK] is wagging its tail. 🐶',
    },
    explanation: '💡 For animals, we use **It**: "**It** is wagging its tail!" 🐶',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: "THEY" (for more than one person or creature)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e7_concept_they_01',
    grade: 1,
    subject: 'english',
    chapter: 'Pronouns (He, She, It)',
    concept: 'Pronoun: THEY',
    difficulty: 'medium',
    type: 'mcq',
    question: 'The children are playing together in the park 🧒👧👦. Which word can replace "The children"?',
    visualEmoji: '🧒 👧 👦 🏞️',
    payload: {
      options: [
        { id: 'opt_thy1_1', text: 'THEY', isCorrect: true },
        { id: 'opt_thy1_2', text: 'HE', isCorrect: false },
        { id: 'opt_thy1_3', text: 'SHE', isCorrect: false },
      ],
    },
    explanation: '💡 When there are many people, we use **THEY**: "**They** are playing!" 🧒👧',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Pronoun Matching Pairs
  // --------------------------------------------------------------------------
  {
    id: 'c1_e7_concept_match_01',
    grade: 1,
    subject: 'english',
    chapter: 'Pronouns (He, She, It)',
    concept: 'Pronoun Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each person or thing with its correct pronoun (He, She, It):',
    visualEmoji: '🏷️ 🔤',
    payload: {
      pairs: [
        { id: 'pro_p1', left: 'Grandfather 👴', right: 'HE' },
        { id: 'pro_p2', left: 'Grandmother 👵', right: 'SHE' },
        { id: 'pro_p3', left: 'Clock ⏰', right: 'IT' },
        { id: 'pro_p4', left: 'Little Brother 👦', right: 'HE' },
      ],
    },
    explanation: '💡 Grandfather ➡️ He, Grandmother ➡️ She, Clock ➡️ It!',
    points: 15,
  },
];
