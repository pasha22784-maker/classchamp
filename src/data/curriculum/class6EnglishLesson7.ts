import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 6 ENGLISH (COMPOSITION)
// CHAPTER 7: FORMAL AND INFORMAL LETTERS
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_6_ENGLISH_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Formal vs Informal Letters
  // --------------------------------------------------------------------------
  {
    id: 'c6_e7_concept_type_01',
    grade: 6,
    subject: 'english',
    chapter: 'Formal and Informal Letters',
    concept: 'Difference between Formal and Informal Letters',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When writing a leave application to your School Principal, which category of letter is it?',
    visualEmoji: '✉️ 🏫 Principal Letter',
    payload: {
      options: [
        { id: 'opt_lt1', text: 'Formal Letter', isCorrect: true },
        { id: 'opt_lt2', text: 'Informal Letter', isCorrect: false },
        { id: 'opt_lt3', text: 'Poetic verse', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **Formal letters** are written to authorities, principals, and officials with a clear Subject line and respectful language. **Informal letters** are sent to friends and family!',
    points: 10,
  },
  {
    id: 'c6_e7_concept_type_02',
    grade: 6,
    subject: 'english',
    chapter: 'Formal and Informal Letters',
    concept: 'Subject Line in Formal Letter',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A formal letter always includes a brief [BLANK] line stating the precise purpose of the letter.',
    visualEmoji: '📌 Subject: Application for Leave',
    payload: {
      correctAnswer: 'Subject',
      wordBank: ['Subject', 'Rhyme', 'Joke', 'Story'],
      displayTemplate: 'Includes a brief [BLANK] line.',
    },
    explanation: '💡 The **Subject line** immediately informs the recipient of the letter\'s core objective (e.g. *Subject: Application for two days\' sick leave*)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Matching Letter Components and Subscriptions
  // --------------------------------------------------------------------------
  {
    id: 'c6_e7_concept_match_01',
    grade: 6,
    subject: 'english',
    chapter: 'Formal and Informal Letters',
    concept: 'Letter Subscriptions and Salutations Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each letter element to its appropriate letter type and context:',
    visualEmoji: '📝 Letter Structure Match',
    payload: {
      pairs: [
        { id: 'e7_p1', left: '"Yours obediently"', right: 'Formal Letter to School Principal' },
        { id: 'e7_p2', left: '"Yours lovingly"', right: 'Informal Letter to Grandparents or Parents' },
        { id: 'e7_p3', left: '"Respected Sir / Madam"', right: 'Formal Salutation' },
        { id: 'e7_p4', left: '"Dear Ankit,"', right: 'Informal Salutation to a Friend' },
      ],
    },
    explanation: '💡 Use "Yours obediently" when writing to your Principal as a student, and "Yours lovingly" for family members!',
    points: 15,
  },
  {
    id: 'c6_e7_concept_salute_01',
    grade: 6,
    subject: 'english',
    chapter: 'Formal and Informal Letters',
    concept: 'Correct Formal Subscription',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which complimentary close is suitable for a formal business or official letter to an editor?',
    visualEmoji: '📰 Letter to Editor',
    payload: {
      options: [
        { id: 'opt_cl1', text: '"Yours faithfully" or "Yours sincerely"', isCorrect: true },
        { id: 'opt_cl2', text: '"Lots of love,"', isCorrect: false },
        { id: 'opt_cl3', text: '"Your best buddy,"', isCorrect: false },
      ],
    },
    explanation: '💡 For editors and public officials, **"Yours faithfully"** or **"Yours sincerely"** is the standard respectful formal subscription!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Proper Layout of a Formal Letter
  // --------------------------------------------------------------------------
  {
    id: 'c6_e7_concept_order_01',
    grade: 6,
    subject: 'english',
    chapter: 'Formal and Informal Letters',
    concept: 'Standard Formal Letter Format Order',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'Arrange the layout components of a Formal Letter in their standard top-to-bottom order:',
    visualEmoji: '📄 Formal Letter Layout',
    payload: {
      tokens: [
        '1. Sender\'s Address & Date',
        '2. Receiver\'s Designation and Address',
        '3. Subject line and Salutation (Respected Sir)',
        '4. Body of letter followed by complimentary close & Name',
      ],
      scrambled: [
        '3. Subject line and Salutation (Respected Sir)',
        '1. Sender\'s Address & Date',
        '4. Body of letter followed by complimentary close & Name',
        '2. Receiver\'s Designation and Address',
      ],
      correctSequence: [
        '1. Sender\'s Address & Date',
        '2. Receiver\'s Designation and Address',
        '3. Subject line and Salutation (Respected Sir)',
        '4. Body of letter followed by complimentary close & Name',
      ],
    },
    explanation: '💡 Standard formal letter layout: Sender\'s Details & Date ➡️ Receiver\'s Details ➡️ Subject & Salutation ➡️ Body & Subscription!',
    points: 15,
  },
];
