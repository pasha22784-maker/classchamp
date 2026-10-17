import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 MATHEMATICS (JOYFUL MATHEMATICS)
// CHAPTER 4: MAKING TEN (NUMBERS 10 TO 20)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_MATHS_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: The Bundle of Ten (10 तीलियों का बंडल)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m4_concept_bundle_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Making a Bundle of Ten',
    difficulty: 'easy',
    type: 'mcq',
    question: 'How many loose matchsticks tie together to make ONE complete bundle of TEN 🪵?',
    visualEmoji: '🪵 🔟',
    payload: {
      options: [
        { id: 'opt_bnd1_1', text: '10 sticks make 1 Ten Bundle', isCorrect: true },
        { id: 'opt_bnd1_2', text: '5 sticks', isCorrect: false },
        { id: 'opt_bnd1_3', text: '20 sticks', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT Joyful Maths: Exactly **10 loose sticks** tie together to make **1 Ten**!',
    points: 10,
  },
  {
    id: 'c1_m4_concept_bundle_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Bundle Counting',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Look at 1 bundle of 10 crayons and 2 loose crayons: 📦(10) + 🖍️ 🖍️. What number is this?',
    visualEmoji: '📦(10) + 🖍️ 🖍️',
    payload: {
      correctAnswer: '12',
      wordBank: ['12', '10', '14', '15'],
      displayTemplate: '1 Ten + 2 Ones = [BLANK]',
    },
    explanation: '💡 10 + 2 = **12** (Twelve)! 1 Ten and 2 Ones make 12.',
    points: 10,
  },
  {
    id: 'c1_m4_concept_bundle_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Counting Bundles and Ones',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at 1 bundle of ten pencils and 5 loose pencils: ✏️(10) + ✏️✏️✏️✏️✏️. How many pencils in all?',
    visualEmoji: '✏️(10) + ✏️✏️✏️✏️✏️',
    payload: {
      options: [
        { id: 'opt_bnd3_1', text: '15 Pencils', isCorrect: true },
        { id: 'opt_bnd3_2', text: '10 Pencils', isCorrect: false },
        { id: 'opt_bnd3_3', text: '16 Pencils', isCorrect: false },
      ],
    },
    explanation: '💡 10 (one bundle) + 5 (loose ones) = **15** (Fifteen)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Tens and Ones Breakdown (दहाई और इकाई)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m4_concept_place_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Tens and Ones Place Value',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the number 14 (Fourteen), how many TENS and ONES are there?',
    visualEmoji: '1️⃣ 4️⃣',
    payload: {
      options: [
        { id: 'opt_pl1_1', text: '1 Ten and 4 Ones', isCorrect: true },
        { id: 'opt_pl1_2', text: '4 Tens and 1 One', isCorrect: false },
        { id: 'opt_pl1_3', text: '0 Tens and 14 Ones', isCorrect: false },
      ],
    },
    explanation: '💡 In 14, the digit "1" stands for **1 Ten** (10) and "4" stands for **4 Ones**!',
    points: 10,
  },
  {
    id: 'c1_m4_concept_place_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Tens and Ones Place Value',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Complete the tens and ones rule for 18: 10 + [BLANK] = 18',
    visualEmoji: '🔟 + ❓ = 1️⃣8️⃣',
    payload: {
      correctAnswer: '8',
      wordBank: ['8', '1', '7', '9'],
      displayTemplate: '1 Ten (10) + [BLANK] Ones = 18',
    },
    explanation: '💡 10 + **8** = 18 (Eighteen)!',
    points: 10,
  },
  {
    id: 'c1_m4_concept_place_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'What makes Twenty (20)?',
    difficulty: 'medium',
    type: 'mcq',
    question: 'How many bundles of TEN make the number 20 (Twenty)?',
    visualEmoji: '🪵(10) + 🪵(10) = 2️⃣0️⃣',
    payload: {
      options: [
        { id: 'opt_pl3_1', text: '2 bundles of Ten', isCorrect: true },
        { id: 'opt_pl3_2', text: '1 bundle of Ten', isCorrect: false },
        { id: 'opt_pl3_3', text: '3 bundles of Ten', isCorrect: false },
      ],
    },
    explanation: '💡 10 + 10 = 20! So **2 Bundles of Ten** make 20 (Twenty)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Number Names 10 to 20
  // --------------------------------------------------------------------------
  {
    id: 'c1_m4_concept_names_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Number Names Recognition',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the written number name for the numeral "11"?',
    visualEmoji: '1️⃣1️⃣',
    payload: {
      options: [
        { id: 'opt_nm1_1', text: 'ELEVEN', isCorrect: true },
        { id: 'opt_nm1_2', text: 'TWELVE', isCorrect: false },
        { id: 'opt_nm1_3', text: 'TEN', isCorrect: false },
      ],
    },
    explanation: '💡 11 is spelled **E - L - E - V - E - N** (Eleven)!',
    points: 10,
  },
  {
    id: 'c1_m4_concept_names_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Number Names Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each teen numeral to its correct number name:',
    visualEmoji: '🔢 ✍️',
    payload: {
      pairs: [
        { id: 'teen_p1', left: '12', right: 'TWELVE' },
        { id: 'teen_p2', left: '13', right: 'THIRTEEN' },
        { id: 'teen_p3', left: '15', right: 'FIFTEEN' },
        { id: 'teen_p4', left: '20', right: 'TWENTY' },
      ],
    },
    explanation: '💡 12 = Twelve, 13 = Thirteen, 15 = Fifteen, 20 = Twenty!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Number Order 10 to 20 (After, Before, Between)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m4_concept_order_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Number After in Teens',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Count along: 10, 11, 12, 13, 14, 15... What number comes next right AFTER 15?',
    visualEmoji: '1️⃣5️⃣ ➡️ ?',
    payload: {
      options: [
        { id: 'opt_ord_1', text: '16', isCorrect: true },
        { id: 'opt_ord_2', text: '14', isCorrect: false },
        { id: 'opt_ord_3', text: '17', isCorrect: false },
      ],
    },
    explanation: '💡 15 + 1 = **16**! 16 comes right after 15.',
    points: 10,
  },
  {
    id: 'c1_m4_concept_order_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Number In-Between in Teens',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Find the middle number between 17 and 19: 17, [BLANK], 19',
    visualEmoji: '1️⃣7️⃣ ❓ 1️⃣9️⃣',
    payload: {
      correctAnswer: '18',
      wordBank: ['18', '16', '20', '15'],
      displayTemplate: '17, [BLANK], 19',
    },
    explanation: '💡 17, **18**, 19! 18 is between 17 and 19.',
    points: 10,
  },
  {
    id: 'c1_m4_concept_order_03',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Number Before in Teens',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What number comes immediately BEFORE 20?',
    visualEmoji: '? ⬅️ 2️⃣0️⃣',
    payload: {
      options: [
        { id: 'opt_bef_1', text: '19', isCorrect: true },
        { id: 'opt_bef_2', text: '18', isCorrect: false },
        { id: 'opt_bef_3', text: '21', isCorrect: false },
      ],
    },
    explanation: '💡 When counting to twenty: 17, 18, **19**, 20! The number before 20 is **19**.',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Comparing Numbers 10 to 20 (Greater / Smaller)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m4_concept_compare_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Bigger Number Comparison',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which number is BIGGER (GREATER): 17 or 12?',
    visualEmoji: '1️⃣7️⃣ vs 1️⃣2️⃣',
    payload: {
      options: [
        { id: 'opt_cmp1_1', text: '17 is bigger than 12', isCorrect: true },
        { id: 'opt_cmp1_2', text: '12 is bigger than 17', isCorrect: false },
      ],
    },
    explanation: '💡 Both have 1 Ten, but 17 has 7 Ones while 12 only has 2 Ones. So **17 is bigger**!',
    points: 10,
  },
  {
    id: 'c1_m4_concept_compare_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Smallest Number among Three',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at the three numbers: 11, 19, 14. Which one is the SMALLEST?',
    visualEmoji: '1️⃣1️⃣  1️⃣9️⃣  1️⃣4️⃣',
    payload: {
      options: [
        { id: 'opt_sml_1', text: '11 is the smallest', isCorrect: true },
        { id: 'opt_sml_2', text: '14 is the smallest', isCorrect: false },
        { id: 'opt_sml_3', text: '19 is the smallest', isCorrect: false },
      ],
    },
    explanation: '💡 11 has only 1 One, which is less than 4 Ones (14) and 9 Ones (19). So **11 is smallest**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Making 10 by Adding Two Numbers (Friends of 10)
  // --------------------------------------------------------------------------
  {
    id: 'c1_m4_concept_friends10_01',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Friends of Ten',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Complete the Ten frame: 6 + [BLANK] = 10',
    visualEmoji: '🟢🟢🟢🟢🟢🟢 ❓ = 🔟',
    payload: {
      correctAnswer: '4',
      wordBank: ['4', '5', '3', '2'],
      displayTemplate: '6 + [BLANK] = 10 🔟',
    },
    explanation: '💡 6 + **4** = 10! 6 and 4 are Friends of Ten!',
    points: 10,
  },
  {
    id: 'c1_m4_concept_friends10_02',
    grade: 1,
    subject: 'maths',
    chapter: 'Making Ten (Numbers 10 to 20)',
    concept: 'Friends of Ten Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each number to its partner that adds up to 10:',
    visualEmoji: '🤝 🔟',
    payload: {
      pairs: [
        { id: 'ten_fr_1', left: '7 + ?', right: '3 (makes 10)' },
        { id: 'ten_fr_2', left: '8 + ?', right: '2 (makes 10)' },
        { id: 'ten_fr_3', left: '5 + ?', right: '5 (makes 10)' },
        { id: 'ten_fr_4', left: '9 + ?', right: '1 (makes 10)' },
      ],
    },
    explanation: '💡 7+3=10, 8+2=10, 5+5=10, and 9+1=10! Great addition!',
    points: 15,
  },
];
