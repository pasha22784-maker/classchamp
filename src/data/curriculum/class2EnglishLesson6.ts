import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 ENGLISH (MRIDANG 2 & MARIGOLD 2)
// CHAPTER 6: POSITION WORDS (BEHIND, IN FRONT, NEXT TO, BETWEEN)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_ENGLISH_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Position Word: "BEHIND" (पीछे)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e6_concept_behind_01',
    grade: 2,
    subject: 'english',
    chapter: 'Position Words (Behind, In Front, Next)',
    concept: 'Position Word BEHIND',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In a game of hide and seek 🙈, Rohan hides [BLANK] the thick banyan tree trunk so nobody can see him from the front.',
    visualEmoji: '🌳 👦 🙈',
    payload: {
      options: [
        { id: 'opt_bh1_1', text: 'BEHIND the tree (At the back of it)', isCorrect: true },
        { id: 'opt_bh1_2', text: 'IN FRONT OF the tree', isCorrect: false },
        { id: 'opt_bh1_3', text: 'INSIDE the bark', isCorrect: false },
      ],
    },
    explanation: '💡 When you are hidden at the back of an object, you are **BEHIND** it! 🌳',
    points: 10,
  },
  {
    id: 'c2_e6_concept_behind_02',
    grade: 2,
    subject: 'english',
    chapter: 'Position Words (Behind, In Front, Next)',
    concept: 'Sun Behind Clouds',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The bright golden sun hid [BLANK] the dark rainy clouds ⛅.',
    visualEmoji: '⛅ ☀️ ☁️',
    payload: {
      correctAnswer: 'behind',
      wordBank: ['behind', 'under', 'into', 'with'],
      displayTemplate: 'The sun hid [BLANK] the dark clouds.',
    },
    explanation: '💡 The sun is hidden **behind** the clouds! ⛅',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Position Word: "IN FRONT OF" (सामने)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e6_concept_front_01',
    grade: 2,
    subject: 'english',
    chapter: 'Position Words (Behind, In Front, Next)',
    concept: 'Position Word IN FRONT OF',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Where does the teacher stand when explaining the lesson to the whole class?',
    visualEmoji: '👩‍🏫 ⬛ 👧👦',
    payload: {
      options: [
        { id: 'opt_fr1_1', text: 'IN FRONT OF the students 👩‍🏫', isCorrect: true },
        { id: 'opt_fr1_2', text: 'Behind the school building', isCorrect: false },
        { id: 'opt_fr1_3', text: 'Under the floor', isCorrect: false },
      ],
    },
    explanation: '💡 The teacher stands **in front of** the class so all students can see and hear clearly!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Position Word: "BETWEEN" (बीच में - Two things)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e6_concept_between_01',
    grade: 2,
    subject: 'english',
    chapter: 'Position Words (Behind, In Front, Next)',
    concept: 'Position Word BETWEEN',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the lunch bench: Ali 👦 is sitting on the left, Tina 👧 is sitting on the right, and Ravi 🧒 is sitting in the middle. Where is Ravi sitting?',
    visualEmoji: '👦 🧒 👧',
    payload: {
      options: [
        { id: 'opt_bw1_1', text: 'BETWEEN Ali and Tina (In the middle of the two)', isCorrect: true },
        { id: 'opt_bw1_2', text: 'Behind the bench', isCorrect: false },
        { id: 'opt_bw1_3', text: 'Under the ground', isCorrect: false },
      ],
    },
    explanation: '💡 When something is in the middle of two people or objects, it is **BETWEEN** them!',
    points: 10,
  },
  {
    id: 'c2_e6_concept_between_02',
    grade: 2,
    subject: 'english',
    chapter: 'Position Words (Behind, In Front, Next)',
    concept: 'Letter Between A and C',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'In the English alphabet, letter B sits [BLANK] letters A and C.',
    visualEmoji: '🅰️ 🅱️ 🅲',
    payload: {
      correctAnswer: 'between',
      wordBank: ['between', 'behind', 'under', 'over'],
      displayTemplate: 'Letter B is [BLANK] A and C.',
    },
    explanation: '💡 Letter B is **between** A and C! 🅰️ ➡️ 🅱️ ➡️ 🅲',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Position Word: "NEXT TO" / "BESIDE" (बगल में)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e6_concept_next_01',
    grade: 2,
    subject: 'english',
    chapter: 'Position Words (Behind, In Front, Next)',
    concept: 'Position Word NEXT TO',
    difficulty: 'easy',
    type: 'mcq',
    question: 'My study lamp 💡 is placed right beside my notebook 📖 on the table. The lamp is [BLANK] my notebook.',
    visualEmoji: '💡 📖',
    payload: {
      options: [
        { id: 'opt_nx1_1', text: 'NEXT TO (Side by side)', isCorrect: true },
        { id: 'opt_nx1_2', text: 'INSIDE', isCorrect: false },
        { id: 'opt_nx1_3', text: 'UNDER', isCorrect: false },
      ],
    },
    explanation: '💡 Right at the side means **next to** (or beside)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Unscramble Position Sentence (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e6_concept_order_01',
    grade: 2,
    subject: 'english',
    chapter: 'Position Words (Behind, In Front, Next)',
    concept: 'Position Sentence Builder',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Arrange the words to make a clear preposition sentence:',
    visualEmoji: '🐕 🚪 🏡',
    payload: {
      tokens: ['The', 'puppy', 'waits', 'in', 'front', 'of', 'the', 'door.'],
      scrambled: ['front', 'door.', 'of', 'The', 'puppy', 'the', 'waits', 'in'],
      correctSequence: ['The', 'puppy', 'waits', 'in', 'front', 'of', 'the', 'door.'],
    },
    explanation: '💡 "**The puppy waits in front of the door.**" 🐕',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Position Words to Meanings
  // --------------------------------------------------------------------------
  {
    id: 'c2_e6_concept_match_01',
    grade: 2,
    subject: 'english',
    chapter: 'Position Words (Behind, In Front, Next)',
    concept: 'Preposition Meaning Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each position word to what it shows:',
    visualEmoji: '📍 🧩',
    payload: {
      pairs: [
        { id: 'pos_p1', left: 'Behind 🔙', right: 'At the back' },
        { id: 'pos_p2', left: 'In front of 🔜', right: 'Directly ahead' },
        { id: 'pos_p3', left: 'Between ↔️', right: 'In the middle of two' },
        { id: 'pos_p4', left: 'Over ✈️', right: 'Higher above' },
      ],
    },
    explanation: '💡 Behind = at back, In front = ahead, Between = in the middle, Over = above!',
    points: 15,
  },
];
