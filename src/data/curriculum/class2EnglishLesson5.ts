import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 ENGLISH (MRIDANG 2 & MARIGOLD 2)
// CHAPTER 5: DESCRIBING WORDS (ADJECTIVES & OPPOSITES)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_ENGLISH_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: What is a Describing Word (Adjective)?
  // --------------------------------------------------------------------------
  {
    id: 'c2_e5_concept_adj_01',
    grade: 2,
    subject: 'english',
    chapter: 'Describing Words (Adjectives & Opposites)',
    concept: 'Identifying Describing Word',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Read the sentence: "Ravi eats a sweet red apple 🍎." Which words DESCRIBE the apple?',
    visualEmoji: '🍎 ✨',
    payload: {
      options: [
        { id: 'opt_dj1_1', text: 'Sweet and Red', isCorrect: true },
        { id: 'opt_dj1_2', text: 'Ravi and Apple', isCorrect: false },
        { id: 'opt_dj1_3', text: 'Eats', isCorrect: false },
      ],
    },
    explanation: '💡 Words that tell about the color, size, taste, or feel of a noun are **describing words (adjectives)**!',
    points: 10,
  },
  {
    id: 'c2_e5_concept_adj_02',
    grade: 2,
    subject: 'english',
    chapter: 'Describing Words (Adjectives & Opposites)',
    concept: 'Taste Adjective',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A ripe lemon 🍋 tastes sharp and [BLANK].',
    visualEmoji: '🍋 😖',
    payload: {
      correctAnswer: 'sour',
      wordBank: ['sour', 'sweet', 'soft', 'hot'],
      displayTemplate: 'A yellow lemon tastes [BLANK].',
    },
    explanation: '💡 Lemons taste **sour (खट्टा)**! 🍋',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Touch and Texture Describing Words (छूने पर कैसा लगता है)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e5_concept_touch_01',
    grade: 2,
    subject: 'english',
    chapter: 'Describing Words (Adjectives & Opposites)',
    concept: 'Soft vs Hard Texture',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A bird\'s little feather 🪶 feels very [BLANK], but a river rock 🪨 feels very hard.',
    visualEmoji: '🪶 vs 🪨',
    payload: {
      options: [
        { id: 'opt_tc1_1', text: 'Soft 🪶', isCorrect: true },
        { id: 'opt_tc1_2', text: 'Heavy', isCorrect: false },
        { id: 'opt_tc1_3', text: 'Sour', isCorrect: false },
      ],
    },
    explanation: '💡 A feather feels delicate and **soft**! 🪶',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Opposite Pairs of Describing Words
  // --------------------------------------------------------------------------
  {
    id: 'c2_e5_concept_opp_01',
    grade: 2,
    subject: 'english',
    chapter: 'Describing Words (Adjectives & Opposites)',
    concept: 'Fast vs Slow Opposite',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A cheetah 🐆 runs very FAST. What is the opposite describing word for a slow tortoise 🐢?',
    visualEmoji: '🐆 💨 vs 🐢 ⏳',
    payload: {
      options: [
        { id: 'opt_op1_1', text: 'SLOW 🐢', isCorrect: true },
        { id: 'opt_op1_2', text: 'QUICK', isCorrect: false },
        { id: 'opt_op1_3', text: 'LONG', isCorrect: false },
      ],
    },
    explanation: '💡 The opposite of **fast** is **slow**! 🐆 ↔️ 🐢',
    points: 10,
  },
  {
    id: 'c2_e5_concept_opp_02',
    grade: 2,
    subject: 'english',
    chapter: 'Describing Words (Adjectives & Opposites)',
    concept: 'Hot vs Cold Opposite',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Fresh tea is hot ☕, but an ice cube is [BLANK] 🧊.',
    visualEmoji: '☕ ↔️ 🧊',
    payload: {
      correctAnswer: 'cold',
      wordBank: ['cold', 'warm', 'fast', 'dark'],
      displayTemplate: 'Tea is hot, but an ice cube is [BLANK].',
    },
    explanation: '💡 The opposite of hot is **cold**! 🧊',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Animal Describing Sentences
  // --------------------------------------------------------------------------
  {
    id: 'c2_e5_concept_anim_01',
    grade: 2,
    subject: 'english',
    chapter: 'Describing Words (Adjectives & Opposites)',
    concept: 'Giraffe Neck Description',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A tall giraffe 🦒 has a very [BLANK] neck to reach high green tree leaves.',
    visualEmoji: '🦒 🌳',
    payload: {
      options: [
        { id: 'opt_gf1_1', text: 'LONG neck 🦒', isCorrect: true },
        { id: 'opt_gf1_2', text: 'Short neck', isCorrect: false },
        { id: 'opt_gf1_3', text: 'Round neck', isCorrect: false },
      ],
    },
    explanation: '💡 Giraffes have famously **long** necks! 🦒',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Build a Descriptive Sentence (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e5_concept_order_01',
    grade: 2,
    subject: 'english',
    chapter: 'Describing Words (Adjectives & Opposites)',
    concept: 'Describing Sentence Construction',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to make a descriptive story sentence:',
    visualEmoji: '🌺 🦋 ✨',
    payload: {
      tokens: ['A', 'colorful', 'butterfly', 'sits', 'on', 'the', 'flower.'],
      scrambled: ['butterfly', 'flower.', 'A', 'sits', 'on', 'colorful', 'the'],
      correctSequence: ['A', 'colorful', 'butterfly', 'sits', 'on', 'the', 'flower.'],
    },
    explanation: '💡 "**A colorful butterfly sits on the flower.**" (Colorful describes the butterfly!) 🦋',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Opposite Describing Words
  // --------------------------------------------------------------------------
  {
    id: 'c2_e5_concept_match_01',
    grade: 2,
    subject: 'english',
    chapter: 'Describing Words (Adjectives & Opposites)',
    concept: 'Adjective Opposites Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each describing word to its exact opposite:',
    visualEmoji: '↔️ 🎯',
    payload: {
      pairs: [
        { id: 'op_p1', left: 'Hot ☀️', right: 'Cold ❄️' },
        { id: 'op_p2', left: 'Happy 😄', right: 'Sad 😢' },
        { id: 'op_p3', left: 'Clean 🧼', right: 'Dirty 🐾' },
        { id: 'op_p4', left: 'Tall 🦒', right: 'Short 🐁' },
      ],
    },
    explanation: '💡 Hot ↔️ Cold, Happy ↔️ Sad, Clean ↔️ Dirty, Tall ↔️ Short!',
    points: 15,
  },
];
