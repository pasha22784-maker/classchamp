import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 5 ENGLISH (MARIGOLD 5)
// CHAPTER 1: ICE-CREAM MAN & WONDERFUL WASTE
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_5_ENGLISH_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Poem Comprehension & Imagery (Ice-Cream Man)
  // --------------------------------------------------------------------------
  {
    id: 'c5_e1_concept_icecream_01',
    grade: 5,
    subject: 'english',
    chapter: 'Ice-Cream Man & Wonderful Waste',
    concept: 'Simile in Ice-Cream Man',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the poem "Ice-Cream Man", what does the poet compare the children gathered around the cart to?',
    visualEmoji: '🍦 🐝 👧👦',
    payload: {
      options: [
        { id: 'opt_ic1', text: 'Honeybees clustering round a flower', isCorrect: true },
        { id: 'opt_ic2', text: 'Butterflies dancing in the park', isCorrect: false },
        { id: 'opt_ic3', text: 'Birds perched on a branch', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The poet writes: "His cart might be a flower bed... The children cluster round as thick as **honeybees**!"',
    points: 10,
  },
  {
    id: 'c5_e1_concept_icecream_02',
    grade: 5,
    subject: 'english',
    chapter: 'Ice-Cream Man & Wonderful Waste',
    concept: 'Ice-Cream Flavors and Cart',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The Ice-Cream Man comes with his little cart trundling down the [BLANK].',
    visualEmoji: '🛒 🏡 ☀️',
    payload: {
      correctAnswer: 'street',
      wordBank: ['street', 'river', 'forest', 'school'],
      displayTemplate: 'Trundling down the [BLANK].',
    },
    explanation: '💡 "When summer\'s in the city, and brick\'s a blaze of heat, the Ice-Cream Man with his little cart goes trundling down the **street**!"',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Story Comprehension - Wonderful Waste & Avial
  // --------------------------------------------------------------------------
  {
    id: 'c5_e1_concept_waste_01',
    grade: 5,
    subject: 'english',
    chapter: 'Ice-Cream Man & Wonderful Waste',
    concept: 'Story of Avial',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each detail from "Wonderful Waste" with its description:',
    visualEmoji: '🍲 Traditional Kerala Feast',
    payload: {
      pairs: [
        { id: 'e1_p1', left: 'Maharaja', right: 'King of Travancore who ordered dinner' },
        { id: 'e1_p2', left: 'Vegetable scraps', right: 'Bits of peels and cut vegetables' },
        { id: 'e1_p3', left: 'Avial', right: 'Famous delicious dish made from scraps' },
        { id: 'e1_p4', left: 'Curry leaves & Coconut', right: 'Garnish that added mouth-watering aroma' },
      ],
    },
    explanation: '💡 In Kerala, Avial was created by the Maharaja\'s cook by washing and boiling all leftover vegetable scraps with coconut paste and curd!',
    points: 15,
  },
  {
    id: 'c5_e1_concept_waste_02',
    grade: 5,
    subject: 'english',
    chapter: 'Ice-Cream Man & Wonderful Waste',
    concept: 'Recipe Sequence of Avial',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Put the steps of making Avial in chronological order:',
    visualEmoji: '👩‍🍳 Cooking Avial',
    payload: {
      tokens: [
        'Wash and clean the mix of vegetable scraps',
        'Cut vegetables into long strips and put in a huge pot',
        'Grind fresh coconut, green chillies and garlic into a paste',
        'Whip curd and garnish with fresh curry leaves and coconut oil',
      ],
      scrambled: [
        'Whip curd and garnish with fresh curry leaves and coconut oil',
        'Wash and clean the mix of vegetable scraps',
        'Grind fresh coconut, green chillies and garlic into a paste',
        'Cut vegetables into long strips and put in a huge pot',
      ],
      correctSequence: [
        'Wash and clean the mix of vegetable scraps',
        'Cut vegetables into long strips and put in a huge pot',
        'Grind fresh coconut, green chillies and garlic into a paste',
        'Whip curd and garnish with fresh curry leaves and coconut oil',
      ],
    },
    explanation: '💡 The cook washed the scraps, cut them into strips, boiled them with coconut paste, and finished with whipped curd and curry leaves!',
    points: 15,
  },
];
