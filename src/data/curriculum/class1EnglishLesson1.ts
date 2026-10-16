import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 ENGLISH (MRIDANG & MARIGOLD)
// CHAPTER 1: MY FAMILY & FUN WITH LETTERS (PHONICS)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_ENGLISH_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Beginning Letter Sounds (Phonics - A to Z)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e1_concept_phonics_01',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Beginning Letter Sound',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the picture of the sweet Apple 🍎. What is the BEGINNING sound and letter?',
    visualEmoji: '🍎',
    payload: {
      options: [
        { id: 'opt_ph1_1', text: 'Letter A (/æ/ as in Apple 🍎)', isCorrect: true },
        { id: 'opt_ph1_2', text: 'Letter B (/b/ as in Ball ⚽)', isCorrect: false },
        { id: 'opt_ph1_3', text: 'Letter C (/k/ as in Cat 🐱)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Apple starts with the letter **A**! /æ/ /æ/ Apple!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_phonics_02',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Beginning Letter Sound',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the picture of the bouncing Ball ⚽. Which letter does "BALL" start with?',
    visualEmoji: '⚽',
    payload: {
      options: [
        { id: 'opt_ph2_1', text: 'Letter B (/b/ for Ball)', isCorrect: true },
        { id: 'opt_ph2_2', text: 'Letter D (/d/ for Dog)', isCorrect: false },
        { id: 'opt_ph2_3', text: 'Letter P (/p/ for Pen)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Ball begins with the letter **B**! /b/ /b/ Ball!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_phonics_03',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Beginning Letter Sound',
    difficulty: 'easy',
    type: 'mcq',
    question: 'The friendly pet Dog 🐶 is wagging its tail. What is the FIRST letter of "DOG"?',
    visualEmoji: '🐶',
    payload: {
      options: [
        { id: 'opt_ph3_1', text: 'D (D is for Dog 🐶)', isCorrect: true },
        { id: 'opt_ph3_2', text: 'B (B is for Ball ⚽)', isCorrect: false },
        { id: 'opt_ph3_3', text: 'G (G is for Grapes 🍇)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: **D** is for Dog! /d/ /d/ Dog!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_phonics_04',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Beginning Letter Sound',
    difficulty: 'medium',
    type: 'mcq',
    question: 'The bright Sun ☀️ shines up high in the blue sky. What is the starting sound of "SUN"?',
    visualEmoji: '☀️',
    payload: {
      options: [
        { id: 'opt_ph4_1', text: 'S (/s/ as in Sun ☀️)', isCorrect: true },
        { id: 'opt_ph4_2', text: 'T (/t/ as in Tree 🌳)', isCorrect: false },
        { id: 'opt_ph4_3', text: 'M (/m/ as in Moon 🌙)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Sun starts with the hissing letter **S**! /s/ /s/ Sun!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_phonics_05',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Beginning Letter Sound',
    difficulty: 'medium',
    type: 'mcq',
    question: 'A swimming Fish 🐟 lives in water. What is the first letter sound of "FISH"?',
    visualEmoji: '🐟',
    payload: {
      options: [
        { id: 'opt_ph5_1', text: 'F (/f/ for Fish 🐟)', isCorrect: true },
        { id: 'opt_ph5_2', text: 'E (/e/ for Egg 🥚)', isCorrect: false },
        { id: 'opt_ph5_3', text: 'H (/h/ for Hat 🎩)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Fish begins with the letter **F**! /f/ /f/ Fish!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Matching Capital & Small Letters (Uppercase and Lowercase)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e1_concept_case_01',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Capital and Small Letters',
    difficulty: 'easy',
    type: 'match_pairs',
    question: 'Match the big Capital Letter with its partner Small Letter:',
    visualEmoji: '🔤',
    payload: {
      pairs: [
        { id: 'case_1', left: 'Capital A', right: 'Small a' },
        { id: 'case_2', left: 'Capital B', right: 'Small b' },
        { id: 'case_3', left: 'Capital D', right: 'Small d' },
        { id: 'case_4', left: 'Capital M', right: 'Small m' },
      ],
    },
    explanation: '💡 Every big capital letter has a smaller twin: A-a, B-b, D-d, M-m!',
    points: 15,
  },
  {
    id: 'c1_e1_concept_case_02',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Small Letter Recognition',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which is the small lowercase letter for capital "E"?',
    visualEmoji: '🔠 🔡',
    payload: {
      options: [
        { id: 'opt_case_e1', text: 'e (small e)', isCorrect: true },
        { id: 'opt_case_e2', text: 'f (small f)', isCorrect: false },
        { id: 'opt_case_e3', text: 'c (small c)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: Capital **E** matches lowercase **e** (Elephant 🐘)!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_case_03',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Small Letter Recognition',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Be careful! Which is the small letter for capital "B"?',
    visualEmoji: '🅱️',
    payload: {
      options: [
        { id: 'opt_b_1', text: 'b (has belly to the right 👉)', isCorrect: true },
        { id: 'opt_b_2', text: 'd (has circle to the left 👈)', isCorrect: false },
        { id: 'opt_b_3', text: 'p (hangs down 👇)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember the trick: Small **b** has a belly facing forward 👉, just like big B!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: The 5 Vowels (A, E, I, O, U)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e1_concept_vowel_01',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Identifying Vowels',
    difficulty: 'easy',
    type: 'mcq',
    question: 'English has 5 special singing letters called VOWELS: A, E, I, O, U. Which letter is a VOWEL?',
    visualEmoji: '⭐ 🔤',
    payload: {
      options: [
        { id: 'opt_v1_1', text: 'Letter A (It is a Vowel ⭐)', isCorrect: true },
        { id: 'opt_v1_2', text: 'Letter B (Consonant)', isCorrect: false },
        { id: 'opt_v1_3', text: 'Letter T (Consonant)', isCorrect: false },
      ],
    },
    explanation: '💡 Remember the 5 magical Vowels: **A, E, I, O, U**! Letter A is the first vowel.',
    points: 10,
  },
  {
    id: 'c1_e1_concept_vowel_02',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Vowel in 3-Letter Word',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look at the word "C A T" (Cat 🐱). Which middle letter is the VOWEL?',
    visualEmoji: '🐱 C-A-T',
    payload: {
      options: [
        { id: 'opt_v2_1', text: 'Letter A (middle vowel sound)', isCorrect: true },
        { id: 'opt_v2_2', text: 'Letter C', isCorrect: false },
        { id: 'opt_v2_3', text: 'Letter T', isCorrect: false },
      ],
    },
    explanation: '💡 In "CAT", C and T are consonants, and **A** in the middle is the VOWEL!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_vowel_03',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Identifying All 5 Vowels',
    difficulty: 'medium',
    type: 'mcq',
    question: 'How many Vowels are there in the English alphabet?',
    visualEmoji: '🖐️ A-E-I-O-U',
    payload: {
      options: [
        { id: 'opt_v3_1', text: '5 Vowels (A, E, I, O, U)', isCorrect: true },
        { id: 'opt_v3_2', text: '2 Vowels', isCorrect: false },
        { id: 'opt_v3_3', text: '10 Vowels', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: There are **5 Vowels** on your 5 fingers: A - E - I - O - U!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Rhyming Words & Word Families (-at, -an, -og, -un)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e1_concept_rhyme_01',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Rhyming Words (-at family)',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which word RHYMES with "CAT" 🐱 (sounds the same at the end)?',
    visualEmoji: '🐱 🎩 🐶',
    payload: {
      options: [
        { id: 'opt_rh1_1', text: 'HAT 🎩 (Cat - Hat)', isCorrect: true },
        { id: 'opt_rh1_2', text: 'DOG 🐶', isCorrect: false },
        { id: 'opt_rh1_3', text: 'SUN ☀️', isCorrect: false },
      ],
    },
    explanation: '💡 Rhyming words end in the same sound: C-**AT** rhymes with H-**AT** and B-**AT**!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_rhyme_02',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Rhyming Words (-an family)',
    difficulty: 'medium',
    type: 'mcq',
    question: 'The cooling Fan 🪭 spins fast. Which word RHYMES with "FAN"?',
    visualEmoji: '🪭 🍳 🚗',
    payload: {
      options: [
        { id: 'opt_rh2_1', text: 'PAN 🍳 (cooking pan)', isCorrect: true },
        { id: 'opt_rh2_2', text: 'CAR 🚗', isCorrect: false },
        { id: 'opt_rh2_3', text: 'CUP ☕', isCorrect: false },
      ],
    },
    explanation: '💡 F-**AN** rhymes with P-**AN**, M-**AN**, and V-**AN**!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_rhyme_03',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Rhyming Pairs Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the rhyming word partners that sound alike:',
    visualEmoji: '🎵 🔤',
    payload: {
      pairs: [
        { id: 'rp_1', left: 'Cat 🐱', right: 'Bat 🏏' },
        { id: 'rp_2', left: 'Sun ☀️', right: 'Run 🏃' },
        { id: 'rp_3', left: 'Dog 🐶', right: 'Frog 🐸' },
        { id: 'rp_4', left: 'Pin 📌', right: 'Tin 🥫' },
      ],
    },
    explanation: '💡 Cat-Bat, Sun-Run, Dog-Frog, and Pin-Tin all share the same ending sound!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Family Members Vocabulary (NCERT Unit 1: My Family)
  // --------------------------------------------------------------------------
  {
    id: 'c1_e1_concept_family_01',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Family Members Vocabulary',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the loving lady carrying a baby 👩. Who is she in the family?',
    visualEmoji: '👩 🤱',
    payload: {
      options: [
        { id: 'opt_fam1_1', text: 'Mother (Mom / Mummy)', isCorrect: true },
        { id: 'opt_fam1_2', text: 'Brother', isCorrect: false },
        { id: 'opt_fam1_3', text: 'Uncle', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: She is Mother 👩! We call her Mom, Mummy, or Ma.',
    points: 10,
  },
  {
    id: 'c1_e1_concept_family_02',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Family Members Vocabulary',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Look at the kind man reading a story 👨. Who is he in the family?',
    visualEmoji: '👨 📖',
    payload: {
      options: [
        { id: 'opt_fam2_1', text: 'Father (Dad / Papa)', isCorrect: true },
        { id: 'opt_fam2_2', text: 'Sister', isCorrect: false },
        { id: 'opt_fam2_3', text: 'Aunt', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: He is Father 👨! We call him Dad or Papa.',
    points: 10,
  },
  {
    id: 'c1_e1_concept_family_03',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Grandparents Recognition',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Who is your father’s or mother’s father? (The elderly gentleman with glasses 👴)',
    visualEmoji: '👴 👓',
    payload: {
      options: [
        { id: 'opt_fam3_1', text: 'Grandfather (Dada / Nana 👴)', isCorrect: true },
        { id: 'opt_fam3_2', text: 'Baby brother 👶', isCorrect: false },
        { id: 'opt_fam3_3', text: 'Cousin 👦', isCorrect: false },
      ],
    },
    explanation: '💡 Remember: The father of your mother or father is your Grandfather 👴!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_family_04',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Family Roles Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the family member with their friendly description:',
    visualEmoji: '👨‍👩‍👧‍👦',
    payload: {
      pairs: [
        { id: 'fam_p1', left: 'Mother 👩', right: 'Caring Mom' },
        { id: 'fam_p2', left: 'Father 👨', right: 'Loving Dad' },
        { id: 'fam_p3', left: 'Grandmother 👵', right: 'Tells sweet stories' },
        { id: 'fam_p4', left: 'Sister 👧', right: 'Playmate girl' },
      ],
    },
    explanation: '💡 A family is made of Mother, Father, Grandparents, Brothers, and Sisters living together!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: 3-Letter CVC Word Reading & Spelling
  // --------------------------------------------------------------------------
  {
    id: 'c1_e1_concept_cvc_01',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Fill Missing Beginning Letter',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Look at the cute playful Cat 🐱: _ A T. Fill in the missing first letter!',
    visualEmoji: '🐱',
    payload: {
      correctAnswer: 'C',
      wordBank: ['C', 'M', 'P', 'R'],
      displayTemplate: '[BLANK] A T = 🐱 Cat',
    },
    explanation: '💡 **C** + A + T = CAT 🐱! The letter C gives the /k/ sound.',
    points: 10,
  },
  {
    id: 'c1_e1_concept_cvc_02',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Fill Missing Beginning Letter',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'The golden Sun ☀️ shines warm: _ U N. Fill in the missing first letter!',
    visualEmoji: '☀️',
    payload: {
      correctAnswer: 'S',
      wordBank: ['S', 'F', 'B', 'H'],
      displayTemplate: '[BLANK] U N = ☀️ Sun',
    },
    explanation: '💡 **S** + U + N = SUN ☀️! The letter S gives the /s/ sound.',
    points: 10,
  },
  {
    id: 'c1_e1_concept_cvc_03',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Fill Missing Vowel Sound',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Look at the cozy Bed 🛏️ to sleep: B _ D. Which vowel goes in the middle?',
    visualEmoji: '🛏️',
    payload: {
      correctAnswer: 'E',
      wordBank: ['E', 'A', 'O', 'U'],
      displayTemplate: 'B [BLANK] D = 🛏️ Bed',
    },
    explanation: '💡 B + **E** + D = BED 🛏️! The short "e" sound makes /bed/.',
    points: 10,
  },
  {
    id: 'c1_e1_concept_cvc_04',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Word-to-Picture Matching',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each 3-letter word with its correct picture:',
    visualEmoji: '📖 🖼️',
    payload: {
      pairs: [
        { id: 'w2p_1', left: 'C - A - T', right: '🐱 Cat' },
        { id: 'w2p_2', left: 'D - O - G', right: '🐶 Dog' },
        { id: 'w2p_3', left: 'P - E - N', right: '🖊️ Pen' },
        { id: 'w2p_4', left: 'B - U - S', right: '🚌 Bus' },
      ],
    },
    explanation: '💡 Great reading! C-A-T is Cat 🐱, D-O-G is Dog 🐶, P-E-N is Pen 🖊️, B-U-S is Bus 🚌.',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Simple NCERT Story Sentences & Sight Words
  // --------------------------------------------------------------------------
  {
    id: 'c1_e1_concept_sent_01',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Simple Sentence Reading',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Complete the sentence about your happy family: "I [BLANK] my family."',
    visualEmoji: '❤️ 👨‍👩‍👧',
    payload: {
      correctAnswer: 'love',
      wordBank: ['love', 'cry', 'bite', 'kick'],
      displayTemplate: 'I [BLANK] my family. ❤️',
    },
    explanation: '💡 We love our family! "I love my family." ❤️',
    points: 10,
  },
  {
    id: 'c1_e1_concept_sent_02',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Sentence Word Order',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Choose the sentence that is written correctly with a capital letter and full stop (.):',
    visualEmoji: '✍️ 📖',
    payload: {
      options: [
        { id: 'opt_sent_1', text: 'This is my bag.', isCorrect: true },
        { id: 'opt_sent_2', text: 'this is my bag', isCorrect: false },
        { id: 'opt_sent_3', text: 'is This bag my.', isCorrect: false },
      ],
    },
    explanation: '💡 Remember the rule: A sentence always starts with a **Capital letter** ("This") and ends with a **Full stop** (".")!',
    points: 10,
  },
  {
    id: 'c1_e1_concept_sent_03',
    grade: 1,
    subject: 'english',
    chapter: 'My Family & Fun with Letters (Phonics)',
    concept: 'Sight Word Recognition',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which word completes the introduction: "Hello, _____ name is Aarav."',
    visualEmoji: '👦 👋',
    payload: {
      options: [
        { id: 'opt_sw_1', text: 'my ("Hello, my name is Aarav.")', isCorrect: true },
        { id: 'opt_sw_2', text: 'you', isCorrect: false },
        { id: 'opt_sw_3', text: 'we', isCorrect: false },
      ],
    },
    explanation: '💡 "My" refers to yourself: "Hello, my name is Aarav!" 👋',
    points: 10,
  },
];
