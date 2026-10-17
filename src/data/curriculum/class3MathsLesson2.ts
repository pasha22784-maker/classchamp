import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 MATHEMATICS (MATH-MAGIC 3)
// CHAPTER 2: FUN WITH NUMBERS (NUMBERS UP TO 1000)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_MATHS_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 3-Digit Place Value (Hundreds, Tens, Ones)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m2_concept_place_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 1000)',
    concept: 'Place Value in 3-Digit Number',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the number 648, what is the place value of the digit 6?',
    visualEmoji: '🔢 6️⃣4️⃣8️⃣',
    payload: {
      options: [
        { id: 'opt_pv1_1', text: '6 Hundreds = 600', isCorrect: true },
        { id: 'opt_pv1_2', text: '6 Tens = 60', isCorrect: false },
        { id: 'opt_pv1_3', text: '6 Ones = 6', isCorrect: false },
      ],
    },
    explanation: '💡 In a 3-digit number (HTO), the leftmost digit is Hundreds. 6 in Hundreds place = **600**!',
    points: 10,
  },
  {
    id: 'c3_m2_concept_place_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 1000)',
    concept: 'Composing Hundreds, Tens, and Ones',
    difficulty: 'easy',
    type: 'fill_blank',
    question: '5 Hundreds, 3 Tens, and 7 Ones make the number [BLANK].',
    visualEmoji: '500 + 30 + 7',
    payload: {
      correctAnswer: '537',
      wordBank: ['537', '573', '357', '5037'],
      displayTemplate: '5 Hundreds, 3 Tens, and 7 Ones make [BLANK].',
    },
    explanation: '💡 500 + 30 + 7 = **537**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Expanded Form of 3-Digit Numbers
  // --------------------------------------------------------------------------
  {
    id: 'c3_m2_concept_exp_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 1000)',
    concept: 'Expanded Form 3-Digit',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is the correct expanded form of the number 894?',
    visualEmoji: '8️⃣9️⃣4️⃣',
    payload: {
      options: [
        { id: 'opt_ex1_1', text: '800 + 90 + 4', isCorrect: true },
        { id: 'opt_ex1_2', text: '80 + 90 + 4', isCorrect: false },
        { id: 'opt_ex1_3', text: '800 + 9 + 4', isCorrect: false },
      ],
    },
    explanation: '💡 8 Hundreds (800) + 9 Tens (90) + 4 Ones (4) = **800 + 90 + 4**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Century & Cricket Scores
  // --------------------------------------------------------------------------
  {
    id: 'c3_m2_concept_cent_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 1000)',
    concept: 'Runs Needed for a Century',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Dhoni is batting at 96 runs in a cricket match 🏏. A Century is 100 runs. How many more runs does he need to complete his Century?',
    visualEmoji: '🏏 9️⃣6️⃣ ➡️ 💯',
    payload: {
      options: [
        { id: 'opt_cn1_1', text: '4 runs', isCorrect: true },
        { id: 'opt_cn1_2', text: '6 runs', isCorrect: false },
        { id: 'opt_cn1_3', text: '10 runs', isCorrect: false },
      ],
    },
    explanation: '💡 100 - 96 = **4 runs** needed for a Century!',
    points: 10,
  },
  {
    id: 'c3_m2_concept_cent_02',
    grade: 3,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 1000)',
    concept: 'Double Century',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'One Century is 100 runs. A DOUBLE Century is [BLANK] runs.',
    visualEmoji: '🏏 💯 + 💯',
    payload: {
      correctAnswer: '200',
      wordBank: ['200', '150', '300', '250'],
      displayTemplate: 'A double century is [BLANK] runs.',
    },
    explanation: '💡 Double Century = 2 × 100 = **200 runs**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Skip Counting by 50s and 100s
  // --------------------------------------------------------------------------
  {
    id: 'c3_m2_concept_skip_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 1000)',
    concept: 'Counting in 50s',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Jump by fifties: 200, 250, 300, 350, [BLANK], 450.',
    visualEmoji: '🔢 2️⃣0️⃣0️⃣ ➡️ 2️⃣5️⃣0️⃣ ➡️ 3️⃣0️⃣0️⃣',
    payload: {
      correctAnswer: '400',
      wordBank: ['400', '360', '500', '390'],
      displayTemplate: '300, 350, [BLANK], 450',
    },
    explanation: '💡 Adding 50 to 350 gives **400**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: What Comes Just Before / After (999 and 1000)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m2_concept_thous_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 1000)',
    concept: 'Smallest 4-Digit Number',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What number comes just after the biggest 3-digit number 999?',
    visualEmoji: '9️⃣9️⃣9️⃣ ➡️ ❓',
    payload: {
      options: [
        { id: 'opt_th1_1', text: '1000', isCorrect: true },
        { id: 'opt_th1_2', text: '990', isCorrect: false },
        { id: 'opt_th1_3', text: '100', isCorrect: false },
      ],
    },
    explanation: '💡 999 + 1 = **1000 (One Thousand)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Order 3-Digit Numbers (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c3_m2_concept_order_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 1000)',
    concept: 'Ascending Order of 3-Digit Numbers',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange these three-digit numbers in order from SMALLEST to GREATEST:',
    visualEmoji: '🔢 📈',
    payload: {
      tokens: ['125', '340', '678', '999'],
      scrambled: ['678', '125', '999', '340'],
      correctSequence: ['125', '340', '678', '999'],
    },
    explanation: '💡 Compare the Hundreds place: 125 < 340 < 678 < 999!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match Numerals to Word Names
  // --------------------------------------------------------------------------
  {
    id: 'c3_m2_concept_match_01',
    grade: 3,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 1000)',
    concept: '3-Digit Number Name Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each numeral to its correct number name:',
    visualEmoji: '🔢 🔤',
    payload: {
      pairs: [
        { id: 'c3_n1', left: '105', right: 'One hundred five' },
        { id: 'c3_n2', left: '350', right: 'Three hundred fifty' },
        { id: 'c3_n3', left: '608', right: 'Six hundred eight' },
        { id: 'c3_n4', left: '1000', right: 'One thousand' },
      ],
    },
    explanation: '💡 105 = One hundred five, 350 = Three hundred fifty, 608 = Six hundred eight, 1000 = One thousand!',
    points: 15,
  },
];
