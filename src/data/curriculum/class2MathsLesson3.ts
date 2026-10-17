import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 MATHEMATICS (JOYFUL MATHEMATICS 2)
// CHAPTER 3: FUN WITH NUMBERS (NUMBERS UP TO 100)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_MATHS_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Place Value: Tens and Ones (दहाई और इकाई)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m3_concept_place_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'Place Value Identification',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the number 84, what does the digit 8 stand for?',
    visualEmoji: '🔢 8️⃣4️⃣',
    payload: {
      options: [
        { id: 'opt_pv1_1', text: '8 Tens = 80', isCorrect: true },
        { id: 'opt_pv1_2', text: '8 Ones = 8', isCorrect: false },
        { id: 'opt_pv1_3', text: '8 Hundreds', isCorrect: false },
      ],
    },
    explanation: '💡 In a 2-digit number, the left digit is in the Tens place. So 8 in the tens place equals **80**!',
    points: 10,
  },
  {
    id: 'c2_m3_concept_place_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'Composing Tens and Ones',
    difficulty: 'easy',
    type: 'fill_blank',
    question: '5 Tens and 9 Ones make the number [BLANK].',
    visualEmoji: '5 Tens + 9 Ones',
    payload: {
      correctAnswer: '59',
      wordBank: ['59', '95', '509', '14'],
      displayTemplate: '5 Tens and 9 Ones make [BLANK].',
    },
    explanation: '💡 5 Tens (50) + 9 Ones (9) = **59**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Expanded Form of Numbers (प्रसारित रूप)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m3_concept_exp_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'Expanded Form Breakdown',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which is the correct expanded form of the number 73?',
    visualEmoji: '7️⃣3️⃣ ➡️ ❓',
    payload: {
      options: [
        { id: 'opt_ex1_1', text: '70 + 3', isCorrect: true },
        { id: 'opt_ex1_2', text: '7 + 3', isCorrect: false },
        { id: 'opt_ex1_3', text: '700 + 3', isCorrect: false },
      ],
    },
    explanation: '💡 73 is made of 7 tens (70) and 3 ones (3): **70 + 3 = 73**!',
    points: 10,
  },
  {
    id: 'c2_m3_concept_exp_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'Rebuilding from Expanded Form',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Solve the expanded addition: 90 + 6 = [BLANK].',
    visualEmoji: '9️⃣0️⃣ + 6️⃣',
    payload: {
      correctAnswer: '96',
      wordBank: ['96', '69', '906', '15'],
      displayTemplate: '90 + 6 = [BLANK]',
    },
    explanation: '💡 90 + 6 = **96** (Ninety-six)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: What Comes Before, After, and Between
  // --------------------------------------------------------------------------
  {
    id: 'c2_m3_concept_ba_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'Number Just Before 90',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What number comes just BEFORE 90 on the number chart?',
    visualEmoji: '❓ ⬅️ 9️⃣0️⃣',
    payload: {
      options: [
        { id: 'opt_ba1_1', text: '89', isCorrect: true },
        { id: 'opt_ba1_2', text: '91', isCorrect: false },
        { id: 'opt_ba1_3', text: '80', isCorrect: false },
      ],
    },
    explanation: '💡 Subtract 1: 90 - 1 = **89**!',
    points: 10,
  },
  {
    id: 'c2_m3_concept_ba_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'Number Between 69 and 71',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Find the number between 69 and 71: 69, [BLANK], 71.',
    visualEmoji: '6️⃣9️⃣ ➡️ ❓ ➡️ 7️⃣1️⃣',
    payload: {
      correctAnswer: '70',
      wordBank: ['70', '68', '72', '80'],
      displayTemplate: '69, [BLANK], 71',
    },
    explanation: '💡 After 69 comes **70**, followed by 71!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Comparing Numbers (> , < , =)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m3_concept_comp_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'Comparing Greater Number',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which comparison statement is TRUE?',
    visualEmoji: '⚖️ 🔢',
    payload: {
      options: [
        { id: 'opt_cp1_1', text: '65 > 56', isCorrect: true },
        { id: 'opt_cp1_2', text: '42 > 84', isCorrect: false },
        { id: 'opt_cp1_3', text: '99 < 19', isCorrect: false },
      ],
    },
    explanation: '💡 65 has 6 tens while 56 only has 5 tens. Therefore, **65 > 56** is true!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Ordering Numbers: Ascending (Smallest to Largest)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m3_concept_ord_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'Ascending Order Sequence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these four numbers from SMALLEST to LARGEST:',
    visualEmoji: '🔢 📈',
    payload: {
      tokens: ['28', '45', '71', '93'],
      scrambled: ['71', '28', '93', '45'],
      correctSequence: ['28', '45', '71', '93'],
    },
    explanation: '💡 Comparing tens place: 28 (2 tens) < 45 (4 tens) < 71 (7 tens) < 93 (9 tens)!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Century! (What is 100?)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m3_concept_cent_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'A Century in Cricket and Numbers',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A cricket batsman scores a full "CENTURY" 🏏! How many runs did he make?',
    visualEmoji: '🏏 💯',
    payload: {
      options: [
        { id: 'opt_ct1_1', text: '100 runs', isCorrect: true },
        { id: 'opt_ct1_2', text: '50 runs', isCorrect: false },
        { id: 'opt_ct1_3', text: '10 runs', isCorrect: false },
      ],
    },
    explanation: '💡 In cricket and numbers, a **Century means 100**! 💯',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match Numerals to Words
  // --------------------------------------------------------------------------
  {
    id: 'c2_m3_concept_match_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'Number to Word Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each 2-digit numeral to its correct written English name:',
    visualEmoji: '🔢 🔤',
    payload: {
      pairs: [
        { id: 'c2_p1', left: '42', right: 'Forty-two' },
        { id: 'c2_p2', left: '67', right: 'Sixty-seven' },
        { id: 'c2_p3', left: '89', right: 'Eighty-nine' },
        { id: 'c2_p4', left: '100', right: 'One hundred' },
      ],
    },
    explanation: '💡 42 = Forty-two, 67 = Sixty-seven, 89 = Eighty-nine, 100 = One hundred!',
    points: 15,
  },
];
