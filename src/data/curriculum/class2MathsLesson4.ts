import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 MATHEMATICS (JOYFUL MATHEMATICS 2)
// CHAPTER 4: SHADOW STORY (ADDITION & PUT TOGETHER)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_MATHS_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 2-Digit Addition Without Regrouping (जोड़ना)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m4_concept_add2_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shadow Story (Addition & Put Together)',
    concept: '2-Digit Column Addition',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In a shadow puppet play 🎭: 24 deer puppets and 15 rabbit puppets perform on the screen. What is 24 + 15?',
    visualEmoji: '🦌 (24) + 🐇 (15)',
    payload: {
      options: [
        { id: 'opt_ad1_1', text: '39 (Add ones: 4+5=9, Add tens: 2+1=3)', isCorrect: true },
        { id: 'opt_ad1_2', text: '49', isCorrect: false },
        { id: 'opt_ad1_3', text: '35', isCorrect: false },
      ],
    },
    explanation: '💡 Step 1: Add Ones: 4 + 5 = 9. Step 2: Add Tens: 2 + 1 = 3. Together: **39**!',
    points: 10,
  },
  {
    id: 'c2_m4_concept_add2_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Shadow Story (Addition & Put Together)',
    concept: 'Adding 1-Digit to 2-Digit Number',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Solve: 52 + 6 = [BLANK].',
    visualEmoji: '5️⃣2️⃣ + 6️⃣',
    payload: {
      correctAnswer: '58',
      wordBank: ['58', '56', '60', '526'],
      displayTemplate: '52 + 6 = [BLANK]',
    },
    explanation: '💡 Add 6 to the ones digit: 2 + 6 = 8. Tens remains 5. Answer is **58**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Adding Tens (दहाई का जोड़)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m4_concept_tens_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shadow Story (Addition & Put Together)',
    concept: 'Adding Tens Fast',
    difficulty: 'easy',
    type: 'mcq',
    question: 'What is 40 + 30?',
    visualEmoji: '4️⃣0️⃣ + 3️⃣0️⃣',
    payload: {
      options: [
        { id: 'opt_at1_1', text: '70 (4 tens + 3 tens = 7 tens)', isCorrect: true },
        { id: 'opt_at1_2', text: '60', isCorrect: false },
        { id: 'opt_at1_3', text: '80', isCorrect: false },
      ],
    },
    explanation: '💡 4 tens + 3 tens = 7 tens = **70**!',
    points: 10,
  },
  {
    id: 'c2_m4_concept_tens_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Shadow Story (Addition & Put Together)',
    concept: 'Mental Trick: Adding 10',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Quick mental math: 63 + 10 = [BLANK].',
    visualEmoji: '6️⃣3️⃣ + 🔟',
    payload: {
      correctAnswer: '73',
      wordBank: ['73', '64', '83', '630'],
      displayTemplate: '63 + 10 = [BLANK]',
    },
    explanation: '💡 Adding 10 increases the tens digit by 1: 6 tens becomes 7 tens, so **73**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Story Word Problems (इबारती सवाल)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m4_concept_story_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shadow Story (Addition & Put Together)',
    concept: 'Story Addition in Library',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A village library has 32 Hindi fairy tale books 📚 and 23 English story books 📖. How many story books are there in total?',
    visualEmoji: '📚 (32) + 📖 (23)',
    payload: {
      options: [
        { id: 'opt_st1_1', text: '55 books (32 + 23 = 55)', isCorrect: true },
        { id: 'opt_st1_2', text: '45 books', isCorrect: false },
        { id: 'opt_st1_3', text: '50 books', isCorrect: false },
      ],
    },
    explanation: '💡 32 + 23: Add ones (2+3=5), Add tens (3+2=5). Total is **55 books**!',
    points: 10,
  },
  {
    id: 'c2_m4_concept_story_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Shadow Story (Addition & Put Together)',
    concept: 'Bird Shadows in Garden',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'In the morning sun, 41 sparrows 🐦 and 17 pigeons 🕊️ sit on the telephone wire. Total birds = [BLANK].',
    visualEmoji: '🐦 (41) + 🕊️ (17)',
    payload: {
      correctAnswer: '58',
      wordBank: ['58', '57', '48', '60'],
      displayTemplate: '41 + 17 = [BLANK] birds',
    },
    explanation: '💡 41 + 17 = 1 + 7 = 8 (ones), 4 + 1 = 5 (tens) = **58 birds**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Commutative Order Property (क्रम बदलने पर जोड़)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m4_concept_comm_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shadow Story (Addition & Put Together)',
    concept: 'Changing Order Does Not Change Sum',
    difficulty: 'easy',
    type: 'mcq',
    question: 'If 25 + 14 = 39, then what is 14 + 25?',
    visualEmoji: '🔄 2️⃣5️⃣ + 1️⃣4️⃣',
    payload: {
      options: [
        { id: 'opt_cm1_1', text: '39 (Changing the order does not change the sum)', isCorrect: true },
        { id: 'opt_cm1_2', text: '29', isCorrect: false },
        { id: 'opt_cm1_3', text: '49', isCorrect: false },
      ],
    },
    explanation: '💡 In addition, swapping the order of numbers keeps the sum the same! 25 + 14 = 14 + 25 = **39**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Steps of Column Addition (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m4_concept_steps_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shadow Story (Addition & Put Together)',
    concept: 'Order of Addition Steps',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the correct steps to add two 2-digit numbers (like 34 + 25):',
    visualEmoji: '➕ 📝',
    payload: {
      tokens: [
        '1. Write numbers in Tens and Ones columns',
        '2. Add the Ones column digits first (4 + 5 = 9)',
        '3. Add the Tens column digits next (3 + 2 = 5)',
        '4. Write the final total answer (59)',
      ],
      scrambled: [
        '3. Add the Tens column digits next (3 + 2 = 5)',
        '1. Write numbers in Tens and Ones columns',
        '4. Write the final total answer (59)',
        '2. Add the Ones column digits first (4 + 5 = 9)',
      ],
      correctSequence: [
        '1. Write numbers in Tens and Ones columns',
        '2. Add the Ones column digits first (4 + 5 = 9)',
        '3. Add the Tens column digits next (3 + 2 = 5)',
        '4. Write the final total answer (59)',
      ],
    },
    explanation: '💡 Always add the **Ones place first**, then the **Tens place**!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Sums to Equations
  // --------------------------------------------------------------------------
  {
    id: 'c2_m4_concept_match_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Shadow Story (Addition & Put Together)',
    concept: 'Addition Match Pairs',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each addition expression to its correct total sum:',
    visualEmoji: '➕ 🎯',
    payload: {
      pairs: [
        { id: 'ad_p1', left: '20 + 30', right: '50' },
        { id: 'ad_p2', left: '42 + 15', right: '57' },
        { id: 'ad_p3', left: '61 + 24', right: '85' },
        { id: 'ad_p4', left: '50 + 49', right: '99' },
      ],
    },
    explanation: '💡 20+30=50, 42+15=57, 61+24=85, 50+49=99!',
    points: 15,
  },
];
