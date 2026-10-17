import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 8: HOW MANY TIMES? (MULTIPLICATION)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_8_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Multiplication as Repeated Addition
  // --------------------------------------------------------------------------
  {
    id: 'c3_m8_concept_repeat_01',
    grade: 3,
    subject: 'maths',
    chapter: 'How Many Times? (Multiplication)',
    concept: 'Repeated Addition to Multiplication',
    difficulty: 'easy',
    type: 'mcq',
    question: 'There are 4 plates. Each plate has 3 juicy strawberries 🍓.\nHow many strawberries are there in all?',
    visualEmoji: '🍓🍓🍓 | 🍓🍓🍓 | 🍓🍓🍓 | 🍓🍓🍓',
    payload: {
      options: [
        { id: 'opt_rep1', text: '4 × 3 = 12 strawberries', isCorrect: true },
        { id: 'opt_rep2', text: '4 + 3 = 7 strawberries', isCorrect: false },
        { id: 'opt_rep3', text: '4 × 4 = 16 strawberries', isCorrect: false },
      ],
    },
    explanation: '💡 Repeated addition is multiplication! 3 + 3 + 3 + 3 = **4 times 3 = 12**!',
    points: 10,
  },
  {
    id: 'c3_m8_concept_repeat_02',
    grade: 3,
    subject: 'maths',
    chapter: 'How Many Times? (Multiplication)',
    concept: 'Counting in Groups',
    difficulty: 'easy',
    type: 'fill_blank',
    question: '5 groups of 2 flowers 🌸 = [BLANK] flowers in total.',
    visualEmoji: '🌸🌸  🌸🌸  🌸🌸  🌸🌸  🌸🌸',
    payload: {
      correctAnswer: '10',
      wordBank: ['10', '7', '12', '15'],
      displayTemplate: '5 × 2 = [BLANK]',
    },
    explanation: '💡 5 groups of 2 = 2 + 2 + 2 + 2 + 2 = **10**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Frog Jumps / Skip Counting on the Number Line
  // --------------------------------------------------------------------------
  {
    id: 'c3_m8_concept_jumps_01',
    grade: 3,
    subject: 'maths',
    chapter: 'How Many Times? (Multiplication)',
    concept: 'Skip Counting Jumps',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A little frog 🐸 takes jumps of 3 steps each.\nAfter 5 jumps starting from 0, which number will it land on?',
    visualEmoji: '🐸 0 ➔ 3 ➔ 6 ➔ 9 ➔ 12 ➔ ❓',
    payload: {
      options: [
        { id: 'opt_frog1', text: '15', isCorrect: true },
        { id: 'opt_frog2', text: '12', isCorrect: false },
        { id: 'opt_frog3', text: '18', isCorrect: false },
      ],
    },
    explanation: '💡 5 jumps of 3 steps = 5 × 3 = **15**!',
    points: 10,
  },
  {
    id: 'c3_m8_concept_jumps_02',
    grade: 3,
    subject: 'maths',
    chapter: 'How Many Times? (Multiplication)',
    concept: 'Table of 4 Sequence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the multiples of 4 in order from smallest to greatest:',
    visualEmoji: '🔢 4️⃣ ➔ 8️⃣ ➔ 1️⃣2️⃣ ➔ 1️⃣6️⃣',
    payload: {
      tokens: ['4', '8', '12', '16'],
      scrambled: ['12', '4', '16', '8'],
      correctSequence: ['4', '8', '12', '16'],
    },
    explanation: '💡 Skip counting by 4: **4, 8, 12, 16** (1×4, 2×4, 3×4, 4×4)!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Properties of Multiplication (0, 1, and Commutative)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m8_concept_prop_01',
    grade: 3,
    subject: 'maths',
    chapter: 'How Many Times? (Multiplication)',
    concept: 'Multiplication by Zero and One',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is 9 × 0 and what is 9 × 1?',
    visualEmoji: '9️⃣ × 0️⃣ = ❓ and 9️⃣ × 1️⃣ = ❓',
    payload: {
      options: [
        { id: 'opt_prop1', text: '9 × 0 = 0 and 9 × 1 = 9', isCorrect: true },
        { id: 'opt_prop2', text: '9 × 0 = 9 and 9 × 1 = 1', isCorrect: false },
        { id: 'opt_prop3', text: '9 × 0 = 0 and 9 × 1 = 10', isCorrect: false },
      ],
    },
    explanation: '💡 Multiplying any number by 0 gives **0**. Multiplying any number by 1 gives the **same number**!',
    points: 10,
  },
  {
    id: 'c3_m8_concept_prop_02',
    grade: 3,
    subject: 'maths',
    chapter: 'How Many Times? (Multiplication)',
    concept: 'Order Property (Commutative)',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'If 6 × 4 = 24, then 4 × 6 = [BLANK].',
    visualEmoji: '6️⃣ × 4️⃣ = 4️⃣ × 6️⃣ = ❓',
    payload: {
      correctAnswer: '24',
      wordBank: ['24', '20', '28', '10'],
      displayTemplate: '4 × 6 = [BLANK]',
    },
    explanation: '💡 Changing the order does not change the product! 6 × 4 = 4 × 6 = **24**.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Word Problems & Real-World Groups
  // --------------------------------------------------------------------------
  {
    id: 'c3_m8_concept_word_01',
    grade: 3,
    subject: 'maths',
    chapter: 'How Many Times? (Multiplication)',
    concept: 'Spider Legs Word Problem',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A spider 🕷️ has 8 legs. How many legs do 5 spiders have altogether?',
    visualEmoji: '🕷️ 8 legs × 5 spiders = ❓',
    payload: {
      options: [
        { id: 'opt_spider1', text: '40 legs', isCorrect: true },
        { id: 'opt_spider2', text: '35 legs', isCorrect: false },
        { id: 'opt_spider3', text: '48 legs', isCorrect: false },
      ],
    },
    explanation: '💡 5 spiders × 8 legs each = **40 legs**!',
    points: 10,
  },
  {
    id: 'c3_m8_concept_pairs_01',
    grade: 3,
    subject: 'maths',
    chapter: 'How Many Times? (Multiplication)',
    concept: 'Match Multiplication Facts',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each multiplication question with its correct product:',
    visualEmoji: '✖️ ➔ 🎯',
    payload: {
      pairs: [
        { id: 'm8_p1', left: '7 × 3', right: '21' },
        { id: 'm8_p2', left: '6 × 5', right: '30' },
        { id: 'm8_p3', left: '8 × 4', right: '32' },
        { id: 'm8_p4', left: '9 × 2', right: '18' },
      ],
    },
    explanation: '💡 7×3=21, 6×5=30, 8×4=32, 9×2=18.',
    points: 15,
  },
];
