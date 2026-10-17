import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 ENGLISH (MRIDANG & MARIGOLD)
// CHAPTER 5: COLORS & DESCRIBING WORDS (ADJECTIVES)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_ENGLISH_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Color Words (Red, Yellow, Green, Blue, White)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e5_concept_color_01',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Identifying Colors',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the ripe juicy tomato 🍅. What COLOR is it?',
    visualEmoji: '🍅',
    payload: {
      options: [
        { id: 'opt_col1_1', text: 'RED 🔴', isCorrect: true },
        { id: 'opt_col1_2', text: 'BLUE 🔵', isCorrect: false },
        { id: 'opt_col1_3', text: 'GREEN 🟢', isCorrect: false },
      ],
    },
    explanation: '💡 A ripe tomato 🍅 is **RED** 🔴! Red describes its color.',
    points: 10,
  },
  {
    id: 'c1_e5_concept_color_02',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Identifying Colors',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The parrot 🦜 has colorful feathers. What color is the parrot’s body?',
    visualEmoji: '🦜 🍃',
    payload: {
      options: [
        { id: 'opt_col2_1', text: 'GREEN 🟢', isCorrect: true },
        { id: 'opt_col2_2', text: 'PURPLE 🟣', isCorrect: false },
        { id: 'opt_col2_3', text: 'ORANGE 🟠', isCorrect: false },
      ],
    },
    explanation: '💡 Parrots have bright **GREEN** 🟢 feathers and a red beak!',
    points: 10,
  },
  {
    id: 'c1_e5_concept_color_03',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Color Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each object with its natural color:',
    visualEmoji: '🍌 ☁️ 🍫 🥛',
    payload: {
      pairs: [
        { id: 'clr_p1', left: 'Ripe Banana 🍌', right: 'YELLOW 🟡' },
        { id: 'clr_p2', left: 'Fresh Milk 🥛', right: 'WHITE ⚪' },
        { id: 'clr_p3', left: 'Clear Sky ☁️', right: 'BLUE 🔵' },
        { id: 'clr_p4', left: 'Dark Chocolate 🍫', right: 'BROWN 🟤' },
      ],
    },
    explanation: '💡 Banana is yellow, milk is white, sky is blue, and chocolate is brown!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Size Words (Big vs Small, Tall vs Short)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e5_concept_size_01',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Big vs Small',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the two animals: an Elephant 🐘 and a Mouse 🐁. Which word describes the Elephant?',
    visualEmoji: '🐘 vs 🐁',
    payload: {
      options: [
        { id: 'opt_sz1_1', text: 'BIG', isCorrect: true },
        { id: 'opt_sz1_2', text: 'TINY', isCorrect: false },
        { id: 'opt_sz1_3', text: 'SLENDER', isCorrect: false },
      ],
    },
    explanation: '💡 The elephant is huge and **BIG** 🐘, while the mouse is small 🐁!',
    points: 10,
  },
  {
    id: 'c1_e5_concept_size_02',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Tall vs Short',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A giraffe 🦒 has a very long neck. Which describing word best fits the giraffe?',
    visualEmoji: '🦒',
    payload: {
      options: [
        { id: 'opt_sz2_1', text: 'TALL', isCorrect: true },
        { id: 'opt_sz2_2', text: 'SHORT', isCorrect: false },
        { id: 'opt_sz2_3', text: 'FLAT', isCorrect: false },
      ],
    },
    explanation: '💡 A giraffe reaches high up into tree tops, so it is **TALL** 🦒!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Temperature & Taste Words (Hot, Cold, Sweet, Sour)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e5_concept_taste_01',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Hot vs Cold',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In hot summer, which cold treat do children love to eat 🍦?',
    visualEmoji: '🍦 ❄️',
    payload: {
      options: [
        { id: 'opt_tst1_1', text: 'COLD Ice-Cream 🍦', isCorrect: true },
        { id: 'opt_tst1_2', text: 'BOILING Soup 🍲', isCorrect: false },
        { id: 'opt_tst1_3', text: 'HOT Tea ☕', isCorrect: false },
      ],
    },
    explanation: '💡 Ice-cream is sweet and **COLD** 🍦!',
    points: 10,
  },
  {
    id: 'c1_e5_concept_taste_02',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Sweet vs Sour Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each food with its describing taste word:',
    visualEmoji: '🍯 🍋 🌶️ 🍟',
    payload: {
      pairs: [
        { id: 'tst_p1', left: 'Golden Honey 🍯', right: 'SWEET' },
        { id: 'tst_p2', left: 'Yellow Lemon 🍋', right: 'SOUR' },
        { id: 'tst_p3', left: 'Red Chili 🌶️', right: 'SPICY' },
        { id: 'tst_p4', left: 'Potato Chips 🍟', right: 'SALTY' },
      ],
    },
    explanation: '💡 Honey is sweet, lemon is sour, chili is spicy, and chips are salty!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Touch & Texture Words (Soft vs Hard)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e5_concept_touch_01',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Soft vs Hard',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Your cozy pillow 🛏️ feels gentle under your head. The pillow is:',
    visualEmoji: '🛏️ 🧸',
    payload: {
      options: [
        { id: 'opt_tch1_1', text: 'SOFT', isCorrect: true },
        { id: 'opt_tch1_2', text: 'HARD like a rock 🪨', isCorrect: false },
        { id: 'opt_tch1_3', text: 'SHARP like a needle 🪡', isCorrect: false },
      ],
    },
    explanation: '💡 A pillow or teddy bear 🧸 is cozy and **SOFT**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Describing Word in a Sentence (Fill the Blank)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e5_concept_sent_01',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Sentence Describing Word',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Look at the bright Sun: The sun is [BLANK] and hot ☀️',
    visualEmoji: '☀️ 🟡',
    payload: {
      correctAnswer: 'bright',
      wordBank: ['bright', 'dark', 'wet', 'cold'],
      displayTemplate: 'The sun is [BLANK] and hot. ☀️',
    },
    explanation: '💡 The sun gives bright light, so it is **bright** and hot!',
    points: 10,
  },
  {
    id: 'c1_e5_concept_sent_02',
    grade: 1,
    subject: 'english',
    chapter: 'Colors & Describing Words (Adjectives)',
    concept: 'Sentence Describing Word',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The grass in the park is [BLANK] and soft 🌱',
    visualEmoji: '🌱 🟢',
    payload: {
      correctAnswer: 'green',
      wordBank: ['green', 'pink', 'black', 'blue'],
      displayTemplate: 'The grass in the park is [BLANK]. 🌱',
    },
    explanation: '💡 Grass is fresh and **green** 🟢!',
    points: 10,
  },
];
