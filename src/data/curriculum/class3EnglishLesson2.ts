import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 ENGLISH (SANTOOR 3 / MARIGOLD 3)
// CHAPTER 2: COMMON & PROPER NOUNS
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_ENGLISH_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Common Nouns (General Naming Words)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e2_concept_common_01',
    grade: 3,
    subject: 'english',
    chapter: 'Common & Proper Nouns',
    concept: 'Identifying Common Nouns',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of the following is a Common Noun?',
    visualEmoji: '🐕 🏙️ 👦',
    payload: {
      options: [
        { id: 'opt_cn1', text: 'city (general word for any city)', isCorrect: true },
        { id: 'opt_cn2', text: 'New Delhi (specific city)', isCorrect: false },
        { id: 'opt_cn3', text: 'India (specific country)', isCorrect: false },
      ],
    },
    explanation: '💡 A **Common Noun** is a general name for any person, place, animal, or thing (like boy, dog, city, river).',
    points: 10,
  },
  {
    id: 'c3_e2_concept_common_02',
    grade: 3,
    subject: 'english',
    chapter: 'Common & Proper Nouns',
    concept: 'Common Noun in a Sentence',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The bird built a cozy nest in the big [BLANK].',
    visualEmoji: '🐦 🌳 🪺',
    payload: {
      correctAnswer: 'tree',
      wordBank: ['tree', 'Monday', 'Rohit', 'Ganga'],
      displayTemplate: 'The bird built a nest in the [BLANK].',
    },
    explanation: '💡 "Tree" is a **common noun** because it names a general thing in nature.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Proper Nouns (Special Names & Capital Letters)
  // --------------------------------------------------------------------------
  {
    id: 'c3_e2_concept_proper_01',
    grade: 3,
    subject: 'english',
    chapter: 'Common & Proper Nouns',
    concept: 'Capitalization of Proper Nouns',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which sentence correctly capitalizes the Proper Nouns?',
    visualEmoji: '🇮🇳 ✍️ 🏛️',
    payload: {
      options: [
        { id: 'opt_pn1', text: 'My friend Rahul visited the Taj Mahal in Agra.', isCorrect: true },
        { id: 'opt_pn2', text: 'My friend rahul visited the taj mahal in agra.', isCorrect: false },
        { id: 'opt_pn3', text: 'My friend Rahul visited the taj Mahal in agra.', isCorrect: false },
      ],
    },
    explanation: '💡 **Proper Nouns** are specific names of people, places, and monuments (Rahul, Taj Mahal, Agra) and ALWAYS start with a **Capital Letter**!',
    points: 10,
  },
  {
    id: 'c3_e2_concept_proper_02',
    grade: 3,
    subject: 'english',
    chapter: 'Common & Proper Nouns',
    concept: 'Identifying Days and Months as Proper Nouns',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Why are "Monday" and "August" always written with capital letters?',
    visualEmoji: '📅 🗓️ ✍️',
    payload: {
      options: [
        { id: 'opt_cal1', text: 'Because days and months are Proper Nouns', isCorrect: true },
        { id: 'opt_cal2', text: 'Because they are action words', isCorrect: false },
        { id: 'opt_cal3', text: 'Because they are very long words', isCorrect: false },
      ],
    },
    explanation: '💡 Names of specific days (Sunday, Monday) and months (January, August) are **Proper Nouns** and must start with capital letters!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Matching Common Nouns to Specific Proper Nouns
  // --------------------------------------------------------------------------
  {
    id: 'c3_e2_concept_match_01',
    grade: 3,
    subject: 'english',
    chapter: 'Common & Proper Nouns',
    concept: 'Common to Proper Noun Pairs',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each general Common Noun with its specific Proper Noun:',
    visualEmoji: '🏷️ ➔ 🏛️',
    payload: {
      pairs: [
        { id: 'e2_p1', left: 'River', right: 'Ganga' },
        { id: 'e2_p2', left: 'Country', right: 'India' },
        { id: 'e2_p3', left: 'Festival', right: 'Diwali' },
        { id: 'e2_p4', left: 'Planet', right: 'Mars' },
      ],
    },
    explanation: '💡 River ➔ Ganga, Country ➔ India, Festival ➔ Diwali, Planet ➔ Mars!',
    points: 15,
  },
  {
    id: 'c3_e2_concept_order_01',
    grade: 3,
    subject: 'english',
    chapter: 'Common & Proper Nouns',
    concept: 'Sentence Scramble with Proper Nouns',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to form a correct sentence with Proper Nouns:',
    visualEmoji: '🚂 🧳 🏙️',
    payload: {
      tokens: ['Ananya', 'lives in', 'Jaipur', 'with her family.'],
      scrambled: ['with her family.', 'Jaipur', 'Ananya', 'lives in'],
      correctSequence: ['Ananya', 'lives in', 'Jaipur', 'with her family.'],
    },
    explanation: '💡 Correct order: "**Ananya lives in Jaipur with her family.**" (Ananya & Jaipur are capitalized proper nouns).',
    points: 15,
  },
];
