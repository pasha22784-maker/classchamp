import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 ENGLISH (SANTOOR 3 / MARIGOLD 3)
// CHAPTER 3: SINGULAR AND PLURAL (-S, -ES, -IES)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_ENGLISH_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Adding -es for words ending in -ch, -sh, -x, -s, -o
  // --------------------------------------------------------------------------
  {
    id: 'c3_e3_concept_es_01',
    grade: 3,
    subject: 'english',
    chapter: 'Singular and Plural (-s, -es, -ies)',
    concept: 'Words ending in -x or -ch adding -es',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the plural form of the word "box" 📦?',
    visualEmoji: '📦 ➔ 📦📦📦',
    payload: {
      options: [
        { id: 'opt_pl_bx1', text: 'boxes (add -es)', isCorrect: true },
        { id: 'opt_pl_bx2', text: 'boxs', isCorrect: false },
        { id: 'opt_pl_bx3', text: 'boxies', isCorrect: false },
      ],
    },
    explanation: '💡 Words ending in **-x, -ch, -sh, -s, or -z** add **-es** to make them plural: box ➔ **boxes**, match ➔ **matches**, brush ➔ **brushes**!',
    points: 10,
  },
  {
    id: 'c3_e3_concept_es_02',
    grade: 3,
    subject: 'english',
    chapter: 'Singular and Plural (-s, -es, -ies)',
    concept: 'Plural of Mango',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'One sweet mango 🥭. Three sweet [BLANK].',
    visualEmoji: '🥭 ➔ 🥭🥭🥭',
    payload: {
      correctAnswer: 'mangoes',
      wordBank: ['mangoes', 'mangos', 'mangoies', 'mango'],
      displayTemplate: 'Three sweet [BLANK].',
    },
    explanation: '💡 For "mango", we add **-es** to make the plural **mangoes**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Consonant + y changing to -ies
  // --------------------------------------------------------------------------
  {
    id: 'c3_e3_concept_ies_01',
    grade: 3,
    subject: 'english',
    chapter: 'Singular and Plural (-s, -es, -ies)',
    concept: 'Consonant + y rule',
    difficulty: 'medium',
    type: 'mcq',
    question: 'How do you spell the plural of "baby" 👶?',
    visualEmoji: '👶 ➔ 👶👶',
    payload: {
      options: [
        { id: 'opt_ies1', text: 'babies (drop y, add -ies)', isCorrect: true },
        { id: 'opt_ies2', text: 'babys', isCorrect: false },
        { id: 'opt_ies3', text: 'babyes', isCorrect: false },
      ],
    },
    explanation: '💡 When a word ends in a consonant before **y** (b-a-b-y), change **y** to **i** and add **-es**: **babies**!',
    points: 10,
  },
  {
    id: 'c3_e3_concept_ies_02',
    grade: 3,
    subject: 'english',
    chapter: 'Singular and Plural (-s, -es, -ies)',
    concept: 'Vowel + y rule (Only add -s)',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What is the plural of "toy" 🧸 and "boy" 👦?',
    visualEmoji: '🧸 👦',
    payload: {
      options: [
        { id: 'opt_toy1', text: 'toys and boys (just add -s because of vowel before y)', isCorrect: true },
        { id: 'opt_toy2', text: 'toies and boies', isCorrect: false },
        { id: 'opt_toy3', text: 'toyes and boyes', isCorrect: false },
      ],
    },
    explanation: '💡 When a vowel (a, e, i, o, u) comes before **y** (t-o-y), we simply add **-s**: **toys**, **monkeys**, **boys**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Irregular Plurals (child ➔ children, tooth ➔ teeth)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e3_concept_irreg_01',
    grade: 3,
    subject: 'english',
    chapter: 'Singular and Plural (-s, -es, -ies)',
    concept: 'Irregular Plural of Child',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'One child is singing. Many [BLANK] are playing in the park.',
    visualEmoji: '🧒 ➔ 👧👦👧👦',
    payload: {
      correctAnswer: 'children',
      wordBank: ['children', 'childs', 'childes', 'childer'],
      displayTemplate: 'Many [BLANK] are playing in the park.',
    },
    explanation: '💡 Some plurals change their spelling completely: child ➔ **children**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Matching Singular to Plural Pairs
  // --------------------------------------------------------------------------
  {
    id: 'c3_e3_concept_match_01',
    grade: 3,
    subject: 'english',
    chapter: 'Singular and Plural (-s, -es, -ies)',
    concept: 'Singular and Plural Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each singular noun with its correct plural form:',
    visualEmoji: '1️⃣ ➔ 🔢',
    payload: {
      pairs: [
        { id: 'e3_p1', left: 'butterfly', right: 'butterflies' },
        { id: 'e3_p2', left: 'watch', right: 'watches' },
        { id: 'e3_p3', left: 'foot', right: 'feet' },
        { id: 'e3_p4', left: 'city', right: 'cities' },
      ],
    },
    explanation: '💡 butterfly ➔ butterflies, watch ➔ watches, foot ➔ feet, city ➔ cities.',
    points: 15,
  },
  {
    id: 'c3_e3_concept_order_01',
    grade: 3,
    subject: 'english',
    chapter: 'Singular and Plural (-s, -es, -ies)',
    concept: 'Plural Sentence Scramble',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to form a correct plural sentence:',
    visualEmoji: '🦋 🌸 🌿',
    payload: {
      tokens: ['Colorful', 'butterflies', 'are flying', 'over the flowers.'],
      scrambled: ['are flying', 'over the flowers.', 'Colorful', 'butterflies'],
      correctSequence: ['Colorful', 'butterflies', 'are flying', 'over the flowers.'],
    },
    explanation: '💡 Correct order: "**Colorful butterflies are flying over the flowers.**"',
    points: 15,
  },
];
