import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 MATHEMATICS (JOYFUL MATHEMATICS 2)
// CHAPTER 1: A DAY AT THE BEACH (COUNTING IN GROUPS)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_MATHS_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Counting in Pairs (जोड़ों में गिनना - Groups of 2)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m1_concept_pairs_01',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Counting Shoes in Pairs',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Children leave 5 pairs of sandals 🩴🩴🩴🩴🩴 on the warm beach sand. How many individual sandals are there in total?',
    visualEmoji: '🩴 (5 pairs)',
    payload: {
      options: [
        { id: 'opt_pr1_1', text: '10 sandals (5 pairs of 2 = 10)', isCorrect: true },
        { id: 'opt_pr1_2', text: '7 sandals', isCorrect: false },
        { id: 'opt_pr1_3', text: '5 sandals', isCorrect: false },
      ],
    },
    explanation: '💡 1 pair = 2 sandals. Counting in twos for 5 pairs: 2, 4, 6, 8, **10 sandals**!',
    points: 10,
  },
  {
    id: 'c2_m1_concept_pairs_02',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Counting Earrings in Pairs',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A mother wears 3 pairs of golden bangles on both hands. Total bangles = 2 + 2 + 2 = [BLANK].',
    visualEmoji: '💍 (3 pairs)',
    payload: {
      correctAnswer: '6',
      wordBank: ['6', '5', '8', '3'],
      displayTemplate: '2 + 2 + 2 = [BLANK] bangles',
    },
    explanation: '💡 3 pairs of 2 = 2 + 2 + 2 = **6 bangles**!',
    points: 10,
  },
  {
    id: 'c2_m1_concept_pairs_03',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Counting Birds in Pairs',
    difficulty: 'medium',
    type: 'mcq',
    question: 'There are 4 pairs of seagulls flying together over the sea 🕊️🕊️. How many seagulls are flying?',
    visualEmoji: '🕊️🕊️ 🕊️🕊️ 🕊️🕊️ 🕊️🕊️',
    payload: {
      options: [
        { id: 'opt_pr3_1', text: '8 seagulls (4 × 2 = 8)', isCorrect: true },
        { id: 'opt_pr3_2', text: '6 seagulls', isCorrect: false },
        { id: 'opt_pr3_3', text: '12 seagulls', isCorrect: false },
      ],
    },
    explanation: '💡 4 pairs of 2 = **8 seagulls**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Counting in Groups of 5s and 10s
  // --------------------------------------------------------------------------
  {
    id: 'c2_m1_concept_fives_01',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Counting Sea Shells in Fives',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Aman collects sea shells 🐚 and puts them into small bowls of 5 shells each. If he fills 4 bowls, how many shells did he collect?',
    visualEmoji: '🥣🐚 (4 bowls of 5)',
    payload: {
      options: [
        { id: 'opt_fv1_1', text: '20 shells (5, 10, 15, 20)', isCorrect: true },
        { id: 'opt_fv1_2', text: '15 shells', isCorrect: false },
        { id: 'opt_fv1_3', text: '25 shells', isCorrect: false },
      ],
    },
    explanation: '💡 Count in fives: 5, 10, 15, **20 shells** in total!',
    points: 10,
  },
  {
    id: 'c2_m1_concept_tens_01',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Counting Marbles in Tens',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A beach stall has packets of 10 shiny glass marbles 🔮. If the shopkeeper has 3 packets of 10, there are [BLANK] marbles in total.',
    visualEmoji: '🔮🔮🔮 (3 packets of 10)',
    payload: {
      correctAnswer: '30',
      wordBank: ['30', '13', '40', '20'],
      displayTemplate: 'There are [BLANK] marbles in total.',
    },
    explanation: '💡 3 groups of 10 = 10 + 10 + 10 = **30 marbles**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Estimation - More Than or Less Than (अंदाज़ा लगाना)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m1_concept_est_01',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Estimating Teeth in Mouth',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many teeth are there in your mouth? Guess without counting:',
    visualEmoji: '🦷 👄',
    payload: {
      options: [
        { id: 'opt_es1_1', text: 'Less than 40 (usually 20 to 32)', isCorrect: true },
        { id: 'opt_es1_2', text: 'More than 100', isCorrect: false },
        { id: 'opt_es1_3', text: 'More than 500', isCorrect: false },
      ],
    },
    explanation: '💡 Children have 20 milk teeth and grown-ups have up to 32 teeth. Both are **less than 40**!',
    points: 10,
  },
  {
    id: 'c2_m1_concept_est_02',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Seeds in an Apple',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many seeds are inside a fresh sweet apple 🍎?',
    visualEmoji: '🍎 🫘',
    payload: {
      options: [
        { id: 'opt_es2_1', text: 'Less than 10 seeds', isCorrect: true },
        { id: 'opt_es2_2', text: 'More than 50 seeds', isCorrect: false },
        { id: 'opt_es2_3', text: 'More than 200 seeds', isCorrect: false },
      ],
    },
    explanation: '💡 An apple usually has around 5 to 8 tiny seeds inside, which is **less than 10**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Skip Counting Sequences in Beach Stories
  // --------------------------------------------------------------------------
  {
    id: 'c2_m1_concept_seq_01',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Skip Counting by 2s Sequence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the pairs of flip-flops in skip counting by 2s:',
    visualEmoji: '🩴 2️⃣ 4️⃣ 6️⃣ 8️⃣ 🔟',
    payload: {
      tokens: ['2', '4', '6', '8', '10'],
      scrambled: ['6', '2', '10', '4', '8'],
      correctSequence: ['2', '4', '6', '8', '10'],
    },
    explanation: '💡 Counting by 2s: **2 -> 4 -> 6 -> 8 -> 10**!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Matching Pairs to Total Count
  // --------------------------------------------------------------------------
  {
    id: 'c2_m1_concept_match_01',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Pairs to Total Items Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the number of pairs to the total count of individual items:',
    visualEmoji: '🤝 🔢',
    payload: {
      pairs: [
        { id: 'm1_p1', left: '2 pairs of socks 🧦', right: '4 socks' },
        { id: 'm1_p2', left: '3 pairs of gloves 🧤', right: '6 gloves' },
        { id: 'm1_p3', left: '4 pairs of shoes 👟', right: '8 shoes' },
        { id: 'm1_p4', left: '5 pairs of hands ✋', right: '10 hands' },
      ],
    },
    explanation: '💡 Multiply by 2 for each pair: 2 pairs = 4, 3 pairs = 6, 4 pairs = 8, 5 pairs = 10!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Groups of Coconut Bunches on Palm Trees
  // --------------------------------------------------------------------------
  {
    id: 'c2_m1_concept_coco_01',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'Repeated Groups of 3',
    difficulty: 'medium',
    type: 'mcq',
    question: 'On a tall coconut tree 🌴, there are 3 bunches with 3 coconuts in each bunch 🥥🥥🥥. Total coconuts = ?',
    visualEmoji: '🌴 🥥🥥🥥 × 3',
    payload: {
      options: [
        { id: 'opt_cc1_1', text: '9 coconuts (3 + 3 + 3 = 9)', isCorrect: true },
        { id: 'opt_cc1_2', text: '6 coconuts', isCorrect: false },
        { id: 'opt_cc1_3', text: '12 coconuts', isCorrect: false },
      ],
    },
    explanation: '💡 3 bunches of 3 = 3 + 3 + 3 = **9 coconuts** in total!',
    points: 10,
  },
];
