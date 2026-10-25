import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 9: UTSAV (PATTERNS)
// Comprehensive Curriculum Covering All 7 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_9_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Repeating Shape Patterns (AB Pattern)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m9_concept_shape_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'Repeating Shape Pattern',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the festive toran hanging at the door: 🔴 🔺 🔴 🔺 🔴 [BLANK]. What shape comes NEXT?',
    visualEmoji: '🔴 🔺 🔴 🔺 🔴 ❓',
    payload: {
      options: [
        { id: 'opt_sh1_1', text: '🔺', isCorrect: true },
        { id: 'opt_sh1_2', text: '🔴', isCorrect: false },
        { id: 'opt_sh1_3', text: '🟦', isCorrect: false },
      ],
    },
    explanation: '💡 The pattern is repeating: Circle, Triangle, Circle, Triangle... After 🔴 comes **🔺**!',
    points: 10,
  },
  {
    id: 'c1_m9_concept_shape_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'AAB Shape Pattern',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the leafy rangoli border: 🍃 🍃 🌸 🍃 🍃 🌸 🍃 [BLANK]. What comes next?',
    visualEmoji: '🍃 🍃 🌸 🍃 🍃 🌸 🍃 ❓',
    payload: {
      options: [
        { id: 'opt_sh2_1', text: '🍃', isCorrect: true },
        { id: 'opt_sh2_2', text: '🌸', isCorrect: false },
        { id: 'opt_sh2_3', text: '⭐', isCorrect: false },
      ],
    },
    explanation: '💡 The rule is two leaves then one flower: 🍃 🍃 🌸. So after the first leaf comes the second **🍃**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Color Patterns
  // --------------------------------------------------------------------------
  {
    id: 'c1_m9_concept_color_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'Color Sequence Pattern',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Utsav is decorating a festive garland with marigold flowers: 🟡 🟠 🟡 🟠 🟡 [BLANK]. What color flower comes next?',
    visualEmoji: '🟡 🟠 🟡 🟠 🟡 ❓',
    payload: {
      options: [
        { id: 'opt_cl1_1', text: '🟠', isCorrect: true },
        { id: 'opt_cl1_2', text: '🟡', isCorrect: false },
        { id: 'opt_cl1_3', text: '⚪', isCorrect: false },
      ],
    },
    explanation: '💡 The pattern switches: Yellow, Orange, Yellow, Orange... After Yellow comes **Orange 🟠**!',
    points: 10,
  },
  {
    id: 'c1_m9_concept_color_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'ABC Tri-Color Pattern',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Follow the ribbon pattern: 🔴, 🟢, 🔵, 🔴, 🟢, [BLANK]. What color comes next?',
    visualEmoji: '🔴 🟢 🔵 🔴 🟢 ❓',
    payload: {
      correctAnswer: '🔵',
      wordBank: ['🔵', '🔴', '🟢', '🟡'],
      displayTemplate: '🔴, 🟢, 🔵, 🔴, 🟢, [BLANK]',
    },
    explanation: '💡 The pattern repeats: Red, Green, Blue... so next is **Blue 🔵**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Size Patterns (Big & Small)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m9_concept_size_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'Big and Small Pattern',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the festive earthen diyas: 🪔 (Big), 🕯️ (Small), 🪔 (Big), 🕯️ (Small), [BLANK]. What diya comes next?',
    visualEmoji: '🪔 🕯️ 🪔 🕯️ ❓',
    payload: {
      options: [
        { id: 'opt_sz1_1', text: '🪔', isCorrect: true },
        { id: 'opt_sz1_2', text: '🕯️', isCorrect: false },
      ],
    },
    explanation: '💡 Big, Small, Big, Small... the next item is **Big diya 🪔**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Number Patterns (Counting Forward by 1s and 2s)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m9_concept_num_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'Skip Counting by 2s',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'A happy frog hops on even lily pads: 2, 4, 6, 8, [BLANK]. What number is next?',
    visualEmoji: '🐸 2️⃣ ➡️ 4️⃣ ➡️ 6️⃣ ➡️ 8️⃣ ➡️ ❓',
    payload: {
      correctAnswer: '10',
      wordBank: ['10', '9', '12', '7'],
      displayTemplate: '2, 4, 6, 8, [BLANK]',
    },
    explanation: '💡 Each jump adds 2: 2, 4, 6, 8, and 8 + 2 = **10**!',
    points: 10,
  },
  {
    id: 'c1_m9_concept_num_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'Odd Number Pattern',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at the house numbers on the street: 1, 3, 5, 7, [BLANK]. What house number comes next?',
    visualEmoji: '🏠 1️⃣, 3️⃣, 5️⃣, 7️⃣, ❓',
    payload: {
      options: [
        { id: 'opt_nm2_1', text: '9', isCorrect: true },
        { id: 'opt_nm2_2', text: '8', isCorrect: false },
        { id: 'opt_nm2_3', text: '10', isCorrect: false },
      ],
    },
    explanation: '💡 1 (+2) = 3 (+2) = 5 (+2) = 7 (+2) = **9**!',
    points: 10,
  },
  {
    id: 'c1_m9_concept_num_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'Counting by 5s',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Count the fingers on hands in steps of 5: 5, 10, 15, [BLANK].',
    visualEmoji: '✋ 5️⃣ ➡️ 1️⃣0️⃣ ➡️ 1️⃣5️⃣ ➡️ ❓',
    payload: {
      correctAnswer: '20',
      wordBank: ['20', '16', '25', '30'],
      displayTemplate: '5, 10, 15, [BLANK]',
    },
    explanation: '💡 Counting by fives: 5, 10, 15, and 15 + 5 = **20**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Decreasing Number Patterns (Counting Backwards)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m9_concept_back_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'Counting Backwards Pattern',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A rocket countdown: 10, 9, 8, 7, [BLANK], 5, 4, 3, 2, 1, 🚀 BLAST OFF! What number is missing?',
    visualEmoji: '🚀 1️⃣0️⃣, 9️⃣, 8️⃣, 7️⃣, ❓',
    payload: {
      options: [
        { id: 'opt_bk1_1', text: '6', isCorrect: true },
        { id: 'opt_bk1_2', text: '8', isCorrect: false },
        { id: 'opt_bk1_3', text: '0', isCorrect: false },
      ],
    },
    explanation: '💡 Counting backwards by 1: 10, 9, 8, 7, **6**, 5...!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Complete the Pattern Sequence (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m9_concept_seq_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'Arrange Number Pattern',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these numbers in increasing sequence of 5s:',
    visualEmoji: '5️⃣ 🔟 1️⃣5️⃣ 2️⃣0️⃣',
    payload: {
      tokens: ['5', '10', '15', '20'],
      scrambled: ['15', '5', '20', '10'],
      correctSequence: ['5', '10', '15', '20'],
    },
    explanation: '💡 Counting by fives: 5 -> 10 -> 15 -> 20!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match the Pattern Rule
  // --------------------------------------------------------------------------
  {
    id: 'c1_m9_concept_match_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Utsav (Patterns)',
    concept: 'Pattern to Rule Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each pattern to what comes next:',
    visualEmoji: '🔄 🧩',
    payload: {
      pairs: [
        { id: 'mp_pat1', left: '⭐ 🌙 ⭐ 🌙', right: '⭐ (Star)' },
        { id: 'mp_pat2', left: '1, 2, 3, 4', right: '5' },
        { id: 'mp_pat3', left: '🍎 🍌 🍎 🍌', right: '🍎 (Apple)' },
        { id: 'mp_pat4', left: '10, 20, 30', right: '40' },
      ],
    },
    explanation: '💡 Each pattern follows a clear repeating or counting rule!',
    points: 15,
  },
];
