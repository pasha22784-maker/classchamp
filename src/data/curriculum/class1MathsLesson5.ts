import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 5: HOW MANY? (ADDITION UP TO 9)
// Comprehensive Curriculum Covering All 7 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Putting Together (All Together)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m5_concept_put_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Putting Together Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Ramu has 2 red balloons 🎈🎈. His mother gives him 3 more balloons 🎈🎈🎈. Put them together! How many balloons does Ramu have now?',
    visualEmoji: '🎈🎈 + 🎈🎈🎈',
    payload: {
      options: [
        { id: 'opt_p1_1', text: '5 Balloons', isCorrect: true },
        { id: 'opt_p1_2', text: '4 Balloons', isCorrect: false },
        { id: 'opt_p1_3', text: '6 Balloons', isCorrect: false },
      ],
    },
    explanation: '💡 Count them all together: 1, 2, 3, 4, 5! 2 + 3 = **5 balloons** 🎈!',
    points: 10,
  },
  {
    id: 'c1_m5_concept_put_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Putting Together Objects',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Count the fish in the pond: 3 swimming fish 🐟🐟🐟 are joined by 1 friend 🐟. How many fish in all?',
    visualEmoji: '🐟🐟🐟 + 🐟',
    payload: {
      correctAnswer: '4',
      wordBank: ['4', '5', '2', '3'],
      displayTemplate: '3 + 1 = [BLANK] fish 🐟',
    },
    explanation: '💡 3 fish plus 1 more makes **4 fish** 🐟! (3 + 1 = 4)',
    points: 10,
  },
  {
    id: 'c1_m5_concept_put_03',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Visual Grouping Addition',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at the tasty cupcakes: 🧁🧁🧁🧁 (4) on one plate and 🧁🧁 (2) on the other plate. How many cupcakes in total?',
    visualEmoji: '🧁🧁🧁🧁 + 🧁🧁',
    payload: {
      options: [
        { id: 'opt_p3_1', text: '6 Cupcakes', isCorrect: true },
        { id: 'opt_p3_2', text: '7 Cupcakes', isCorrect: false },
        { id: 'opt_p3_3', text: '5 Cupcakes', isCorrect: false },
      ],
    },
    explanation: '💡 4 + 2 = **6**! Count on from 4: five, six!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Counting Forward to Add (आगे गिनकर जोड़ना)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m5_concept_counton_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Count Forward to Add',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Start at 5 and count forward 2 steps: "5... 6, 7". What is 5 + 2?',
    visualEmoji: '5️⃣ ➡️ +2 ➡️ ?',
    payload: {
      options: [
        { id: 'opt_co1_1', text: '7', isCorrect: true },
        { id: 'opt_co1_2', text: '6', isCorrect: false },
        { id: 'opt_co1_3', text: '8', isCorrect: false },
      ],
    },
    explanation: '💡 To add 2 to 5, hold 5 in your mind and count 2 fingers: 6, **7**! 5 + 2 = 7.',
    points: 10,
  },
  {
    id: 'c1_m5_concept_counton_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Count Forward to Add',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Start at 6 and add 3 by counting forward: 6... 7, 8, [BLANK]!',
    visualEmoji: '6️⃣ ➡️ +3 ➡️ ❓',
    payload: {
      correctAnswer: '9',
      wordBank: ['9', '8', '7', '10'],
      displayTemplate: '6 + 3 = [BLANK]',
    },
    explanation: '💡 Count 3 steps forward from 6: 7, 8, **9**! So 6 + 3 = **9**.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: The Addition Symbol (+) and Equals (=)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m5_concept_symbol_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Addition Symbol Meaning',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In mathematics, what does the plus sign "+" tell you to do?',
    visualEmoji: '➕',
    payload: {
      options: [
        { id: 'opt_sym1_1', text: 'Put together and ADD', isCorrect: true },
        { id: 'opt_sym1_2', text: 'Take away and subtract', isCorrect: false },
        { id: 'opt_sym1_3', text: 'Cut into halves', isCorrect: false },
      ],
    },
    explanation: '💡 The plus sign **+** means we join or ADD numbers together!',
    points: 10,
  },
  {
    id: 'c1_m5_concept_symbol_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Addition Equations Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each addition equation with its correct answer:',
    visualEmoji: '➕ 🔢',
    payload: {
      pairs: [
        { id: 'eq_1', left: '1 + 1', right: '= 2' },
        { id: 'eq_2', left: '3 + 2', right: '= 5' },
        { id: 'eq_3', left: '4 + 4', right: '= 8' },
        { id: 'eq_4', left: '7 + 1', right: '= 8' },
      ],
    },
    explanation: '💡 1+1=2, 3+2=5, 4+4=8, and 7+1=8! Great mental addition!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Adding ZERO (0) Property
  // --------------------------------------------------------------------------
  {
    id: 'c1_m5_concept_zero_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Adding Zero Rule',
    difficulty: 'easy',
    type: 'mcq',
    question: 'You have 4 juicy mangoes 🥭🥭🥭🥭. Nobody gives you any more mangoes (0 mangoes). How many mangoes do you have now?',
    visualEmoji: '🥭🥭🥭🥭 + 0️⃣',
    payload: {
      options: [
        { id: 'opt_zadd1_1', text: '4 Mangoes', isCorrect: true },
        { id: 'opt_zadd1_2', text: '0 Mangoes', isCorrect: false },
        { id: 'opt_zadd1_3', text: '5 Mangoes', isCorrect: false },
      ],
    },
    explanation: '💡 Remember the Golden Rule: When you add **0 (Zero)** to any number, the number does NOT change! 4 + 0 = **4**.',
    points: 10,
  },
  {
    id: 'c1_m5_concept_zero_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Adding Zero Rule',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Solve this quick addition: 0 + 8 = [BLANK]',
    visualEmoji: '0️⃣ + 8️⃣ = ❓',
    payload: {
      correctAnswer: '8',
      wordBank: ['8', '0', '9', '7'],
      displayTemplate: '0 + 8 = [BLANK]',
    },
    explanation: '💡 Adding zero changes nothing: 0 + 8 = **8**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Order of Numbers in Addition (Commutative Property)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m5_concept_order_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Turnaround Addition Facts',
    difficulty: 'medium',
    type: 'mcq',
    question: 'If 3 + 2 = 5, then what is 2 + 3?',
    visualEmoji: '3 + 2 = 5 🔄 2 + 3 = ?',
    payload: {
      options: [
        { id: 'opt_ord_1', text: '5', isCorrect: true },
        { id: 'opt_ord_2', text: '6', isCorrect: false },
        { id: 'opt_ord_3', text: '4', isCorrect: false },
      ],
    },
    explanation: '💡 Super Champ rule: You can swap the numbers in addition (3 + 2 = 2 + 3 = **5**)! The total stays the same.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Addition Word Stories (Real Life Stories)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m5_concept_story_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Word Story Addition',
    difficulty: 'medium',
    type: 'mcq',
    question: '4 green frogs 🐸🐸🐸🐸 are resting on a lily pad. 3 more frogs jump on! How many frogs are on the lily pad now?',
    visualEmoji: '🐸🐸🐸🐸 + 🐸🐸🐸',
    payload: {
      options: [
        { id: 'opt_st1_1', text: '7 Frogs', isCorrect: true },
        { id: 'opt_st1_2', text: '6 Frogs', isCorrect: false },
        { id: 'opt_st1_3', text: '8 Frogs', isCorrect: false },
      ],
    },
    explanation: '💡 4 + 3 = **7**! Count forward from 4: 5, 6, 7 frogs in total!',
    points: 10,
  },
  {
    id: 'c1_m5_concept_story_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Word Story Addition',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Pooja has 5 colorful hair clips 🎀. Her grandmother gives her 2 more clips. How many hair clips does Pooja have?',
    visualEmoji: '🎀🎀🎀🎀🎀 + 🎀🎀',
    payload: {
      correctAnswer: '7',
      wordBank: ['7', '8', '6', '5'],
      displayTemplate: '5 + 2 = [BLANK] hair clips 🎀',
    },
    explanation: '💡 5 + 2 = **7 hair clips**! Pooja is so happy!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Pairs that Make Numbers (Number Bonds up to 9)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m5_concept_bonds_01',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Pairs that make 6',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Complete the pair to make 6: 4 + [BLANK] = 6',
    visualEmoji: '4️⃣ + ❓ = 6️⃣',
    payload: {
      correctAnswer: '2',
      wordBank: ['2', '3', '1', '4'],
      displayTemplate: '4 + [BLANK] = 6',
    },
    explanation: '💡 4 + **2** = 6! 4 and 2 make 6.',
    points: 10,
  },
  {
    id: 'c1_m5_concept_bonds_02',
    grade: 1,
    subject: 'maths',
    chapter: 'How Many? (Addition up to 9)',
    concept: 'Pairs that make 9 Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the pairs that add up to make 9:',
    visualEmoji: '9️⃣ 🎯',
    payload: {
      pairs: [
        { id: 'bnd9_1', left: '8 + ?', right: '1 (makes 9)' },
        { id: 'bnd9_2', left: '5 + ?', right: '4 (makes 9)' },
        { id: 'bnd9_3', left: '7 + ?', right: '2 (makes 9)' },
        { id: 'bnd9_4', left: '6 + ?', right: '3 (makes 9)' },
      ],
    },
    explanation: '💡 8+1=9, 5+4=9, 7+2=9, and 6+3=9! All these pairs equal 9!',
    points: 15,
  },
];
