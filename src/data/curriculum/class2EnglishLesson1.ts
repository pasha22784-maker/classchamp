import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 ENGLISH (MRIDANG 2 & MARIGOLD 2)
// CHAPTER 1: WELCOME TO SCHOOL (RHYMES & PHONICS)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_ENGLISH_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Rhyming Words (समान ध्वनि वाले तुकबंदी शब्द)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e1_concept_rhyme_01',
    grade: 2,
    subject: 'english',
    chapter: 'Welcome to School (Rhymes & Phonics)',
    concept: 'Finding the Rhyming Word',
    difficulty: 'easy',
    type: 'mcq',
    question: 'In the fun school poem: "The golden sun ☀️ is bright and hot, we run and play and have great [BLANK]!" Which word rhymes with "SUN"?',
    visualEmoji: '☀️ 🏃 🎵',
    payload: {
      options: [
        { id: 'opt_rh1_1', text: 'FUN 🎈', isCorrect: true },
        { id: 'opt_rh1_2', text: 'BOOK', isCorrect: false },
        { id: 'opt_rh1_3', text: 'DESK', isCorrect: false },
      ],
    },
    explanation: '💡 **Sun** and **Fun** end with the exact same "-un" sound, making them rhyming partners! 🎵',
    points: 10,
  },
  {
    id: 'c2_e1_concept_rhyme_02',
    grade: 2,
    subject: 'english',
    chapter: 'Welcome to School (Rhymes & Phonics)',
    concept: 'School Rhyming Partner',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The water in the swimming pool is refreshing and [BLANK]. (Hint: rhymes with "pool" and "school")',
    visualEmoji: '🏊 ❄️',
    payload: {
      correctAnswer: 'cool',
      wordBank: ['cool', 'hot', 'warm', 'far'],
      displayTemplate: 'The water in the pool is [BLANK].',
    },
    explanation: '💡 School, pool, and **cool** rhyme together! 🌊',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Initial Consonant Blends (bl, cl, fl, st, sp)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e1_concept_blend_01',
    grade: 2,
    subject: 'english',
    chapter: 'Welcome to School (Rhymes & Phonics)',
    concept: 'Blend "CL" in Classroom',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When the students finish a good recitation, they warmly [BLANK] their hands 👏. Which word begins with the "CL-" blend?',
    visualEmoji: '👏 🔤',
    payload: {
      options: [
        { id: 'opt_bl1_1', text: 'CLAP', isCorrect: true },
        { id: 'opt_bl1_2', text: 'SLAP', isCorrect: false },
        { id: 'opt_bl1_3', text: 'TRAP', isCorrect: false },
      ],
    },
    explanation: '💡 The letters "c" and "l" blend together to make the sound in **CLAP** 👏 and **CLASS** 🏫!',
    points: 10,
  },
  {
    id: 'c2_e1_concept_blend_02',
    grade: 2,
    subject: 'english',
    chapter: 'Welcome to School (Rhymes & Phonics)',
    concept: 'Blend "ST" in Star',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The teacher draws a golden [BLANK] ⭐ on Rohan\'s notebook for good handwriting.',
    visualEmoji: '⭐ 📓',
    payload: {
      correctAnswer: 'star',
      wordBank: ['star', 'moon', 'circle', 'dot'],
      displayTemplate: 'The teacher draws a golden [BLANK] ⭐.',
    },
    explanation: '💡 "st" + "ar" = **STAR** ⭐!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Short vs Long Vowels (Phonics Sound)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e1_concept_vowel_01',
    grade: 2,
    subject: 'english',
    chapter: 'Welcome to School (Rhymes & Phonics)',
    concept: 'Magic "e" Long Vowel Rule',
    difficulty: 'medium',
    type: 'mcq',
    question: 'When silent letter "e" is added to the short word "HOP", what new word with a long "O" sound is formed?',
    visualEmoji: '🐰 HOP ➡️ HOP + E = ❓',
    payload: {
      options: [
        { id: 'opt_vw1_1', text: 'HOPE', isCorrect: true },
        { id: 'opt_vw1_2', text: 'HOLE', isCorrect: false },
        { id: 'opt_vw1_3', text: 'HOMES', isCorrect: false },
      ],
    },
    explanation: '💡 Adding silent "e" turns short "hop" into long-vowel **HOPE**! 🌟',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: School Classroom Vocabulary
  // --------------------------------------------------------------------------
  {
    id: 'c2_e1_concept_vocab_01',
    grade: 2,
    subject: 'english',
    chapter: 'Welcome to School (Rhymes & Phonics)',
    concept: 'Classroom Objects',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The teacher writes sums on the green board using white [BLANK].',
    visualEmoji: '👩‍🏫 ⬛ 🖍️',
    payload: {
      options: [
        { id: 'opt_vc1_1', text: 'Chalk 🖍️', isCorrect: true },
        { id: 'opt_vc1_2', text: 'Crayon', isCorrect: false },
        { id: 'opt_vc1_3', text: 'Paintbrush', isCorrect: false },
      ],
    },
    explanation: '💡 Teachers use **chalk** to write clearly on the classroom blackboard!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Sight Words Sentence Construction (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_e1_concept_order_01',
    grade: 2,
    subject: 'english',
    chapter: 'Welcome to School (Rhymes & Phonics)',
    concept: 'Welcome to School Sentence',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'Unscramble the words to make a polite classroom sentence:',
    visualEmoji: '🏫 👧 👦',
    payload: {
      tokens: ['Welcome', 'to', 'our', 'happy', 'school!'],
      scrambled: ['school!', 'Welcome', 'happy', 'to', 'our'],
      correctSequence: ['Welcome', 'to', 'our', 'happy', 'school!'],
    },
    explanation: '💡 Correct order: "**Welcome to our happy school!**" 🏫',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Match Rhyming Word Pairs
  // --------------------------------------------------------------------------
  {
    id: 'c2_e1_concept_match_01',
    grade: 2,
    subject: 'english',
    chapter: 'Welcome to School (Rhymes & Phonics)',
    concept: 'Rhyming Pairs Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each word to its rhyming companion:',
    visualEmoji: '🎵 🧩',
    payload: {
      pairs: [
        { id: 'rh_p1', left: 'Ring 💍', right: 'Sing 🎤' },
        { id: 'rh_p2', left: 'Book 📖', right: 'Look 👀' },
        { id: 'rh_p3', left: 'Play ⚽', right: 'Day ☀️' },
        { id: 'rh_p4', left: 'Tree 🌳', right: 'Free 🕊️' },
      ],
    },
    explanation: '💡 Ring-Sing, Book-Look, Play-Day, Tree-Free rhyme with the same ending sound!',
    points: 15,
  },
];
