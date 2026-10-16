import { Question, Grade, Subject } from '../types';
import { CLASS_1_MATHS_LESSON_1_QUESTIONS } from './curriculum/class1MathsLesson1';
import { CLASS_1_MATHS_LESSON_2_QUESTIONS } from './curriculum/class1MathsLesson2';
import { CLASS_1_MATHS_LESSON_3_QUESTIONS } from './curriculum/class1MathsLesson3';
import { CLASS_1_MATHS_LESSON_4_QUESTIONS } from './curriculum/class1MathsLesson4';
import { CLASS_1_MATHS_LESSON_5_QUESTIONS } from './curriculum/class1MathsLesson5';
import { CLASS_1_MATHS_LESSON_6_QUESTIONS } from './curriculum/class1MathsLesson6';
import { CLASS_1_MATHS_LESSON_7_QUESTIONS } from './curriculum/class1MathsLesson7';
import { CLASS_1_ENGLISH_LESSON_1_QUESTIONS } from './curriculum/class1EnglishLesson1';
import { CLASS_1_ENGLISH_LESSON_2_QUESTIONS } from './curriculum/class1EnglishLesson2';
import { CLASS_1_ENGLISH_LESSON_3_QUESTIONS } from './curriculum/class1EnglishLesson3';
import { CLASS_1_ENGLISH_LESSON_4_QUESTIONS } from './curriculum/class1EnglishLesson4';
import { CLASS_1_ENGLISH_LESSON_5_QUESTIONS } from './curriculum/class1EnglishLesson5';
import { CLASS_1_HINDI_LESSON_1_QUESTIONS } from './curriculum/class1HindiLesson1';
import { CLASS_1_HINDI_LESSON_2_QUESTIONS } from './curriculum/class1HindiLesson2';
import { CLASS_1_HINDI_LESSON_3_QUESTIONS } from './curriculum/class1HindiLesson3';
import { CLASS_1_HINDI_LESSON_4_QUESTIONS } from './curriculum/class1HindiLesson4';
import { CLASS_1_HINDI_LESSON_5_QUESTIONS } from './curriculum/class1HindiLesson5';

export const MOCK_QUESTIONS: Question[] = [
  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 1 (Shapes & Space / Finding the Furry Cat)
  // All 11 Concepts (Inside/Outside, Big/Small, Biggest/Smallest, Top/Bottom, Near/Far,
  // Nearest/Farthest, On/Under, Above/Below, Shapes, Sorting, Rolling/Sliding)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 2 (What is Long? What is Round?)
  // All 7 Concepts (Long Objects, Round Objects, Meeku Uncle Riddles, Rolling vs Sliding,
  // Stacking/Towers, Sorting, Tracing/Footprints)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 3 (Mango Treats - Numbers 1 to 9 & Zero)
  // All 7 Concepts (Counting 1-9, Number Names, Zero, Number Order, Comparing, Backward)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 4 (Making Ten - Numbers 10 to 20)
  // All 6 Concepts (Bundle of Ten, Tens & Ones, Teen Names, Order, Comparing, Friends of 10)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 5 (How Many? - Addition up to 9)
  // All 7 Concepts (Putting Together, Count Forward, Symbols, Adding 0, Order, Stories, Bonds)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 6 (Vegetable Farm - Subtraction up to 9)
  // All 7 Concepts (Taking Away, Count Back, Minus Symbol, Subtracting 0/Self, Stories, Difference)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 7 (Lina's Family - Measurement)
  // All 7 Concepts (Longer/Shorter, Taller/Shorter, Heavier/Lighter, Thicker/Thinner, Span)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_7_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT MRIDANG & MARIGOLD: CHAPTER 1 (My Family & Fun with Letters)
  // All 7 Concepts (Beginning Phonics, Capital/Small, Vowels, Rhymes, Family, CVC, Sentences)
  // =========================================================================
  ...CLASS_1_ENGLISH_LESSON_1_QUESTIONS,
  // =========================================================================
  // CLASS 1 — NCERT MRIDANG & MARIGOLD: CHAPTER 2 (Picture Reading & Naming Words)
  // All 6 Concepts (People, Animals/Birds, Places, Things, Categories, Comprehension)
  // =========================================================================
  ...CLASS_1_ENGLISH_LESSON_2_QUESTIONS,
  // =========================================================================
  // CLASS 1 — NCERT MRIDANG & MARIGOLD: CHAPTER 3 (One and Many - Singular & Plural)
  // All 6 Concepts (One vs Many, Adding -s, Adding -es, Counting, Sentences)
  // =========================================================================
  ...CLASS_1_ENGLISH_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT MRIDANG & MARIGOLD: CHAPTER 4 (Action Words in Play - Verbs)
  // All 6 Concepts (Action Recognition, Animal Actions, Verb vs Noun, -ing Words, Rhymes)
  // =========================================================================
  ...CLASS_1_ENGLISH_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT MRIDANG & MARIGOLD: CHAPTER 5 (Colors & Describing Words - Adjectives)
  // All 6 Concepts (Colors, Size, Taste/Temp, Touch/Texture, Sentences)
  // =========================================================================
  ...CLASS_1_ENGLISH_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2 & MRIDANG 2
  // =========================================================================
  {
    id: 'ncert_c2_m1_001',
    grade: 2,
    subject: 'maths',
    chapter: 'A Day at the Beach (Counting in Groups)',
    concept: 'NCERT Counting in Pairs (Twos)',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Children are wearing 4 pairs of shoes 👟👟👟👟. How many individual shoes are there in total?',
    visualEmoji: '👟',
    payload: {
      options: [
        { id: 'opt_1', text: '6 Shoes', isCorrect: false },
        { id: 'opt_2', text: '8 Shoes (4 × 2)', isCorrect: true },
        { id: 'opt_3', text: '10 Shoes', isCorrect: false },
      ],
    },
    explanation: 'NCERT Joyful Maths 2: 4 pairs of shoes = 4 × 2 = 8 individual shoes!',
    points: 10,
  },
  {
    id: 'ncert_c2_m3_001',
    grade: 2,
    subject: 'maths',
    chapter: 'Fun with Numbers (Numbers up to 100)',
    concept: 'NCERT Tens and Ones Place Value',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Find the number from place values:',
    visualEmoji: '🔢',
    payload: {
      correctAnswer: '45',
      wordBank: ['45', '54', '40', '50'],
      displayTemplate: '4 Tens and 5 Ones make the number [BLANK].',
    },
    explanation: 'NCERT Class 2: 4 Tens = 40, and 5 Ones = 5. So 40 + 5 = 45!',
    points: 10,
  },
  {
    id: 'ncert_c2_e1_001',
    grade: 2,
    subject: 'english',
    chapter: 'Welcome to School (Rhymes & Phonics)',
    concept: 'NCERT Rhyming Words',
    difficulty: 'easy',
    type: 'match_pairs',
    question: 'Match the words that have the same ending rhyming sound:',
    visualEmoji: '🎵',
    payload: {
      pairs: [
        { id: 'rp1', left: 'Bat 🏏', right: 'Cat 🐱' },
        { id: 'rp2', left: 'Sun ☀️', right: 'Run 🏃' },
        { id: 'rp3', left: 'Sing 🎤', right: 'Ring 💍' },
      ],
    },
    explanation: 'NCERT Mridang 2: Rhyming words share the same ending sound (Bat-Cat, Sun-Run)!',
    points: 15,
  },
  {
    id: 'ncert_c2_e3_001',
    grade: 2,
    subject: 'english',
    chapter: 'Action Words & Doing Words (Verbs)',
    concept: 'NCERT Present Continuous -ing verbs',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'Choose the correct action word:',
    visualEmoji: '📖',
    payload: {
      correctAnswer: 'reading',
      wordBank: ['reading', 'reader', 'book', 'reads'],
      displayTemplate: 'Aarav is quietly [BLANK] his storybook.',
    },
    explanation: 'NCERT Grammar: "is reading" tells us the action happening right now!',
    points: 10,
  },

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3 & SANTOOR 3
  // =========================================================================
  {
    id: 'ncert_c3_m1_001',
    grade: 3,
    subject: 'maths',
    chapter: 'Where to Look From? (2D Views & Shapes)',
    concept: 'NCERT Top, Front and Side Views',
    difficulty: 'easy',
    type: 'mcq',
    question: 'When you look at a railway train 🚆 from the TOP, what shape does it look like?',
    visualEmoji: '🚆',
    payload: {
      options: [
        { id: 'opt_1', text: 'A long rectangle 📄', isCorrect: true },
        { id: 'opt_2', text: 'A circle ⚪', isCorrect: false },
        { id: 'opt_3', text: 'A triangle 🔺', isCorrect: false },
      ],
    },
    explanation: 'NCERT Math-Magic 3 Ch 1: From the top, a train looks like a long continuous rectangle!',
    points: 10,
  },
  {
    id: 'ncert_c3_m3_001',
    grade: 3,
    subject: 'maths',
    chapter: 'Give and Take (Addition & Subtraction)',
    concept: 'NCERT Mental Addition in Tens',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Solve this fast mental math jump:',
    visualEmoji: '➕',
    payload: {
      correctAnswer: '57',
      wordBank: ['57', '47', '67', '37'],
      displayTemplate: '37 + 20 = [BLANK].',
    },
    explanation: 'NCERT Give and Take: Jump 2 tens forward from 37: 47, 57!',
    points: 10,
  },
  {
    id: 'ncert_c3_e2_001',
    grade: 3,
    subject: 'english',
    chapter: 'Common & Proper Nouns',
    concept: 'NCERT Proper Noun Identification',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Which of the following is a PROPER NOUN that must begin with a CAPITAL letter?',
    visualEmoji: '🏛️',
    payload: {
      options: [
        { id: 'opt_1', text: 'New Delhi (Capital city of India)', isCorrect: true },
        { id: 'opt_2', text: 'city (General place)', isCorrect: false },
        { id: 'opt_3', text: 'building (General object)', isCorrect: false },
      ],
    },
    explanation: 'NCERT Santoor 3: Specific names of cities like New Delhi are Proper Nouns!',
    points: 10,
  },

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4 & MARIGOLD 4
  // =========================================================================
  {
    id: 'ncert_c4_m1_001',
    grade: 4,
    subject: 'maths',
    chapter: 'Building with Bricks (Brick Patterns)',
    concept: 'NCERT Faces of a Brick',
    difficulty: 'medium',
    type: 'mcq',
    question: 'How many faces does a real building brick 🧱 have in all?',
    visualEmoji: '🧱',
    payload: {
      options: [
        { id: 'opt_1', text: '4 faces', isCorrect: false },
        { id: 'opt_2', text: '6 faces', isCorrect: true },
        { id: 'opt_3', text: '8 faces', isCorrect: false },
        { id: 'opt_4', text: '12 faces', isCorrect: false },
      ],
    },
    explanation: 'NCERT Math-Magic 4 Ch 1: A brick is a cuboid and has exactly 6 rectangular faces!',
    points: 10,
  },
  {
    id: 'ncert_c4_m7_001',
    grade: 4,
    subject: 'maths',
    chapter: 'Carts and Wheels (Circles & Radius)',
    concept: 'NCERT Circle Anatomy',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the circle part with its NCERT definition:',
    visualEmoji: '🎡',
    payload: {
      pairs: [
        { id: 'cp1', left: 'Center Point', right: 'Exact middle of circle' },
        { id: 'cp2', left: 'Radius', right: 'Line from center to boundary' },
        { id: 'cp3', left: 'Diameter', right: 'Longest line through center' },
      ],
    },
    explanation: 'NCERT Carts and Wheels: Center is in the middle, radius connects to edge, diameter is 2 × radius!',
    points: 15,
  },
  {
    id: 'ncert_c4_e2_001',
    grade: 4,
    subject: 'english',
    chapter: 'Collective Nouns (Flock, Herd, Bunch)',
    concept: 'NCERT Group Nouns',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'Complete the collective noun phrase:',
    visualEmoji: '🐑',
    payload: {
      correctAnswer: 'flock',
      wordBank: ['flock', 'herd', 'pack', 'bunch'],
      displayTemplate: 'A large [BLANK] of sheep was grazing in the green valley.',
    },
    explanation: 'NCERT Marigold 4: We call a group of sheep or birds a "flock"!',
    points: 10,
  },

  // =========================================================================
  // CLASS 5 — NCERT MATH-MAGIC 5 & MARIGOLD 5
  // =========================================================================
  {
    id: 'ncert_c5_m2_001',
    grade: 5,
    subject: 'maths',
    chapter: 'Shapes and Angles (Acute, Right, Obtuse)',
    concept: 'NCERT Clock Angles',
    difficulty: 'medium',
    type: 'mcq',
    question: 'When the clock shows exactly 3:00 o’clock 🕒, what angle do the hands make?',
    visualEmoji: '🕒',
    payload: {
      options: [
        { id: 'opt_1', text: 'Right Angle (90 degrees)', isCorrect: true },
        { id: 'opt_2', text: 'Acute Angle (less than 90°)', isCorrect: false },
        { id: 'opt_3', text: 'Obtuse Angle (more than 90°)', isCorrect: false },
      ],
    },
    explanation: 'NCERT Math-Magic 5 Ch 2: At 3:00, the hands form an exact L-shape (Right Angle = 90°)!',
    points: 10,
  },
  {
    id: 'ncert_c5_m6_001',
    grade: 5,
    subject: 'maths',
    chapter: 'Multiples and Factors (LCM & HCF)',
    concept: 'NCERT Common Multiples',
    difficulty: 'hard',
    type: 'fill_blank',
    question: 'Find the smallest common multiple:',
    visualEmoji: '🔢',
    payload: {
      correctAnswer: '12',
      wordBank: ['12', '6', '18', '24'],
      displayTemplate: 'The Lowest Common Multiple (LCM) of 4 and 6 is [BLANK].',
    },
    explanation: 'NCERT Class 5: Multiples of 4 are 4, 8, 12... Multiples of 6 are 6, 12... Smallest common is 12!',
    points: 10,
  },
  {
    id: 'ncert_c5_e2_001',
    grade: 5,
    subject: 'english',
    chapter: 'Abstract Nouns (Kindness, Honesty, Courage)',
    concept: 'NCERT Abstract Nouns',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which of the following is an ABSTRACT NOUN (a quality you can feel, not touch)?',
    visualEmoji: '💎',
    payload: {
      options: [
        { id: 'opt_1', text: 'Honesty (Truthfulness)', isCorrect: true },
        { id: 'opt_2', text: 'Golden Ring (Object)', isCorrect: false },
        { id: 'opt_3', text: 'Wooden Table (Object)', isCorrect: false },
      ],
    },
    explanation: 'NCERT Marigold 5: "Honesty" is an abstract noun because it represents a virtue!',
    points: 10,
  },

  // =========================================================================
  // CLASS 6 — NCERT MATHEMATICS 6 & POORVI 6
  // =========================================================================
  {
    id: 'ncert_c6_m1_001',
    grade: 6,
    subject: 'maths',
    chapter: 'Knowing Our Numbers (Lakhs & Roman Numerals)',
    concept: 'NCERT Roman Numerals',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match the Roman numeral with its Hindu-Arabic value:',
    visualEmoji: '🏛️',
    payload: {
      pairs: [
        { id: 'rm1', left: 'V', right: '5' },
        { id: 'rm2', left: 'X', right: '10' },
        { id: 'rm3', left: 'L', right: '50' },
        { id: 'rm4', left: 'C', right: '100' },
      ],
    },
    explanation: 'NCERT Mathematics 6 Ch 1: V = 5, X = 10, L = 50, C = 100!',
    points: 15,
  },
  {
    id: 'ncert_c6_m5_001',
    grade: 6,
    subject: 'maths',
    chapter: 'Integers (Positive & Negative Numbers)',
    concept: 'NCERT Integer Operations on Number Line',
    difficulty: 'hard',
    type: 'fill_blank',
    question: 'Calculate the integer result:',
    visualEmoji: '❄️',
    payload: {
      correctAnswer: '-2',
      wordBank: ['-2', '+2', '-8', '+8'],
      displayTemplate: '(-5) + 3 = [BLANK].',
    },
    explanation: 'NCERT Integers: Start at -5 on the number line and jump 3 steps to the right = -2!',
    points: 10,
  },
  {
    id: 'ncert_c6_e2_001',
    grade: 6,
    subject: 'english',
    chapter: 'Kinds of Sentences (Declarative, Question, Exclamatory)',
    concept: 'NCERT Sentence Classification',
    difficulty: 'medium',
    type: 'mcq',
    question: 'What kind of sentence is: "What a stunning sunset over the mountains!"? 🌄',
    visualEmoji: '🌄',
    payload: {
      options: [
        { id: 'opt_1', text: 'Exclamatory Sentence (!)', isCorrect: true },
        { id: 'opt_2', text: 'Interrogative Sentence (?)', isCorrect: false },
        { id: 'opt_3', text: 'Declarative Statement (.)', isCorrect: false },
      ],
    },
    explanation: 'NCERT Poorvi 6: Sentences expressing strong sudden emotion ending in "!" are Exclamatory!',
    points: 10,
  },

  // =========================================================================
  // CLASS 1 — NCERT सारंगी 1 (HINDI): CHAPTER 1 (मीना का परिवार)
  // All 8 Concepts (स्वर पहचान, व्यंजन पहचान, 2-अक्षर शब्द, 3-अक्षर शब्द, 4-अक्षर शब्द, रिश्ते, तुकबंदी, वाक्य)
  // =========================================================================
  ...CLASS_1_HINDI_LESSON_1_QUESTIONS,
  // =========================================================================
  // CLASS 1 — NCERT सारंगी 1 (HINDI): CHAPTER 2 (दादा-दादी - आ की मात्रा)
  // All 7 Concepts (आ की मात्रा ज्ञान, 2-अक्षर शब्द, दोनों अक्षरों में मात्रा, 3-अक्षर, पाठ बोध, तुकबंदी, वाक्य)
  // =========================================================================
  ...CLASS_1_HINDI_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT सारंगी 1 (HINDI): CHAPTER 3 (रीना का तोता - इ व ई की मात्रा)
  // All 7 Concepts (छोटी इ, बड़ी ई, ध्वनि अंतर, पाठ बोध, तुकबंदी, वाक्य)
  // =========================================================================
  ...CLASS_1_HINDI_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT सारंगी 1 (HINDI): CHAPTER 4 (चंदा मामा - उ व ऊ की मात्रा)
  // All 7 Concepts (छोटा उ, बड़ा ऊ, र में मात्रा, पाठ बोध, तुकबंदी, वाक्य)
  // =========================================================================
  ...CLASS_1_HINDI_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT सारंगी 1 (HINDI): CHAPTER 5 (वाह! मेरे खिलौने - ए, ऐ, ओ, औ की मात्रा)
  // All 8 Concepts (ए मात्रा, ऐ मात्रा, ओ मात्रा, औ मात्रा, अंतर, खिलौने, तुकबंदी, वाक्य)
  // =========================================================================
  ...CLASS_1_HINDI_LESSON_5_QUESTIONS,
  {
    id: 'ncert_c1_h7_001',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'NCERT विपरीतार्थक शब्द',
    difficulty: 'easy',
    type: 'match_pairs',
    question: 'उल्टे अर्थ (विलोम शब्द) की सही जोड़ी मिलाइए:',
    visualEmoji: '↔️',
    payload: {
      pairs: [
        { id: 'h_lr1', left: 'बड़ा 🐘', right: 'छोटा 🐁' },
        { id: 'h_lr2', left: 'दिन ☀️', right: 'रात 🌙' },
        { id: 'h_lr3', left: 'ऊपर ⬆️', right: 'नीचे ⬇️' },
      ],
    },
    explanation: 'NCERT सारंगी Ch 7: बड़ा का उल्टा छोटा, दिन का उल्टा रात, ऊपर का नीचे!',
    points: 15,
  },
  {
    id: 'ncert_c1_h1_002',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'NCERT शब्द व वाक्य निर्माण',
    difficulty: 'easy',
    type: 'drag_order',
    question: 'शब्दों को सही क्रम में लगाकर सही वाक्य बनाइए:',
    visualEmoji: '🏠',
    payload: {
      tokens: ['अमन', 'घर', 'चल'],
      scrambled: ['चल', 'अमन', 'घर'],
      correctSequence: ['अमन', 'घर', 'चल'],
    },
    explanation: 'NCERT कक्षा 1: सही वाक्य है: "अमन घर चल"।',
    points: 10,
  },

  // =========================================================================
  // CLASS 2 — NCERT सारंगी 2 (HINDI)
  // =========================================================================
  {
    id: 'ncert_c2_h3_001',
    grade: 2,
    subject: 'hindi',
    chapter: 'म्याऊँ, म्याऊँ! (नाम वाले शब्द - संज्ञा)',
    concept: 'NCERT नाम वाले शब्द (संज्ञा)',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इनमें से किसी वस्तु का "नाम वाला शब्द" (संज्ञा) कौन सा है? 📖',
    visualEmoji: '📖',
    payload: {
      options: [
        { id: 'opt_1', text: 'किताब 📖 (वस्तु का नाम)', isCorrect: true },
        { id: 'opt_2', text: 'दौड़ना 🏃 (काम)', isCorrect: false },
        { id: 'opt_3', text: 'हँसना 😄 (काम)', isCorrect: false },
      ],
    },
    explanation: 'NCERT सारंगी 2: किसी व्यक्ति, वस्तु या जगह के नाम को संज्ञा कहते हैं (जैसे किताब)।',
    points: 10,
  },
  {
    id: 'ncert_c2_h6_001',
    grade: 2,
    subject: 'hindi',
    chapter: 'एक और अनेक (वचन - लड़का/लड़के)',
    concept: 'NCERT एकवचन व बहुवचन',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य में सही बहुवचन शब्द भरिए:',
    visualEmoji: '👦👦',
    payload: {
      correctAnswer: 'लड़के',
      wordBank: ['लड़के', 'लड़का', 'लड़कियों'],
      displayTemplate: 'मैदान में तीन [BLANK] खेल रहे हैं।',
    },
    explanation: 'NCERT कक्षा 2: एक के लिए लड़का, और एक से अधिक के लिए "लड़के" आता है!',
    points: 10,
  },
  {
    id: 'ncert_c2_h7_001',
    grade: 2,
    subject: 'hindi',
    chapter: 'स्त्रीलिंग और पुल्लिंग (लिंग पहचान)',
    concept: 'NCERT लिंग भेद',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'पुल्लिंग और स्त्रीलिंग की सही जोड़ी मिलाइए:',
    visualEmoji: '👫',
    payload: {
      pairs: [
        { id: 'h2_p1', left: 'राजा 👑', right: 'रानी 👸' },
        { id: 'h2_p2', left: 'मोर 🦚', right: 'मोरनी' },
        { id: 'h2_p3', left: 'शेर 🦁', right: 'शेरनी' },
      ],
    },
    explanation: 'NCERT सारंगी 2: राजा का रानी, मोर का मोरनी, और शेर का शेरनी!',
    points: 15,
  },

  // =========================================================================
  // CLASS 3 — NCERT वीणा 3 / रिमझिम 3 (HINDI)
  // =========================================================================
  {
    id: 'ncert_c3_h2_001',
    grade: 3,
    subject: 'hindi',
    chapter: 'शेखीबाज़ मक्खी (सर्वनाम शब्द)',
    concept: 'NCERT सर्वनाम (Pronoun)',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'संज्ञा की जगह आने वाला सही सर्वनाम चुनिए:',
    visualEmoji: '🎒',
    payload: {
      correctAnswer: 'वह',
      wordBank: ['वह', 'वे', 'हम'],
      displayTemplate: 'रोहन अच्छा लड़का है। [BLANK] रोज़ स्कूल जाता है।',
    },
    explanation: 'NCERT वीणा 3: रोहन (एकवचन) की जगह सर्वनाम "वह" का प्रयोग होगा!',
    points: 10,
  },
  {
    id: 'ncert_c3_h4_001',
    grade: 3,
    subject: 'hindi',
    chapter: 'बहादुर बित्तो (विलोम व पर्यायवाची शब्द)',
    concept: 'NCERT पर्यायवाची शब्द (समान अर्थ)',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'समान अर्थ वाले पर्यायवाची शब्दों का मिलान कीजिए:',
    visualEmoji: '☀️',
    payload: {
      pairs: [
        { id: 'h3_p1', left: 'सूर्य ☀️', right: 'सूरज' },
        { id: 'h3_p2', left: 'जल 💧', right: 'पानी' },
        { id: 'h3_p3', left: 'हवा 💨', right: 'पवन' },
        { id: 'h3_p4', left: 'नयन 👁️', right: 'आँख' },
      ],
    },
    explanation: 'NCERT कक्षा 3: सूर्य-सूरज, जल-पानी, हवा-पवन, नयन-आँख!',
    points: 15,
  },
  {
    id: 'ncert_c3_h6_001',
    grade: 3,
    subject: 'hindi',
    chapter: 'बंदर बाँट (विराम चिह्न व वाक्य शुद्धि)',
    concept: 'NCERT विराम चिह्न (Punctuation)',
    difficulty: 'easy',
    type: 'mcq',
    question: '"तुम्हारा नाम क्या है" वाक्य के अंत में कौन सा विराम चिह्न लगेगा?',
    visualEmoji: '❓',
    payload: {
      options: [
        { id: 'opt_1', text: 'प्रश्नवाचक चिह्न (?)', isCorrect: true },
        { id: 'opt_2', text: 'पूर्ण विराम (।)', isCorrect: false },
        { id: 'opt_3', text: 'विस्मयादिबोधक (!)', isCorrect: false },
      ],
    },
    explanation: 'NCERT वीणा 3: प्रश्न पूछे जाने वाले वाक्य के अंत में प्रश्नवाचक चिह्न (?) लगता है!',
    points: 10,
  },

  // =========================================================================
  // CLASS 4 — NCERT रिमझिम 4 (HINDI)
  // =========================================================================
  {
    id: 'ncert_c4_h1_001',
    grade: 4,
    subject: 'hindi',
    chapter: 'मन के भोले-भाले बादल (विशेषण व भेद)',
    concept: 'NCERT विशेषण (Adjective)',
    difficulty: 'medium',
    type: 'mcq',
    question: '"आसमान में काले बादल छाए हैं।" इस वाक्य में विशेषण शब्द कौन सा है? ☁️',
    visualEmoji: '☁️',
    payload: {
      options: [
        { id: 'opt_1', text: 'काले (रंग बताने वाला विशेषण)', isCorrect: true },
        { id: 'opt_2', text: 'बादल (संज्ञा)', isCorrect: false },
        { id: 'opt_3', text: 'आसमान (संज्ञा)', isCorrect: false },
      ],
    },
    explanation: 'NCERT रिमझिम 4: "काले" शब्द बादलों की विशेषता बता रहा है, इसलिए यह विशेषण है!',
    points: 10,
  },
  {
    id: 'ncert_c4_h2_001',
    grade: 4,
    subject: 'hindi',
    chapter: 'जैसा सवाल वैसा जवाब (मुहावरे व लोकोक्तियाँ)',
    concept: 'NCERT प्रसिद्ध मुहावरा',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'मुहावरा पूरा कीजिए:',
    visualEmoji: '🏃💨',
    payload: {
      correctAnswer: 'नौ दो ग्यारह',
      wordBank: ['नौ दो ग्यारह', 'चार पाँच छह', 'एक दो तीन'],
      displayTemplate: 'पुलिस को देखकर चोर [BLANK] हो गया (भाग गया)।',
    },
    explanation: 'NCERT रिमझिम 4: "नौ दो ग्यारह होना" का अर्थ होता है भाग जाना!',
    points: 10,
  },
  {
    id: 'ncert_c4_h6_001',
    grade: 4,
    subject: 'hindi',
    chapter: 'थप्प रोटी थप्प दाल (अनेक शब्दों के लिए एक शब्द)',
    concept: 'NCERT वाक्यांश के लिए एक शब्द',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'अनेक शब्दों के लिए एक सही शब्द का मिलान कीजिए:',
    visualEmoji: '🌾',
    payload: {
      pairs: [
        { id: 'h4_w1', left: 'जो खेती करता है 🌾', right: 'किसान' },
        { id: 'h4_w2', left: 'जो चित्र बनाता है 🎨', right: 'चित्रकार' },
        { id: 'h4_w3', left: 'जो देश की रक्षा करे 🎖️', right: 'सैनिक' },
      ],
    },
    explanation: 'NCERT कक्षा 4: खेती करने वाला किसान, चित्र बनाने वाला चित्रकार, रक्षा करने वाला सैनिक!',
    points: 15,
  },

  // =========================================================================
  // CLASS 5 — NCERT रिमझिम 5 (HINDI)
  // =========================================================================
  {
    id: 'ncert_c5_h1_001',
    grade: 5,
    subject: 'hindi',
    chapter: 'राख की रस्सी (कारक और उनके विभक्ति चिह्न)',
    concept: 'NCERT कारक विभक्ति',
    difficulty: 'hard',
    type: 'mcq',
    question: '"लोनपो गार ने अपने बेटे को बुलाया।" इस वाक्य में "ने" कौन सा कारक चिह्न है?',
    visualEmoji: '👑',
    payload: {
      options: [
        { id: 'opt_1', text: 'कर्ता कारक (काम करने वाला)', isCorrect: true },
        { id: 'opt_2', text: 'कर्म कारक', isCorrect: false },
        { id: 'opt_3', text: 'करण कारक', isCorrect: false },
      ],
    },
    explanation: 'NCERT रिमझिम 5 Ch 1: कर्ता कारक का विभक्ति चिह्न "ने" होता है!',
    points: 15,
  },
  {
    id: 'ncert_c5_h5_001',
    grade: 5,
    subject: 'hindi',
    chapter: 'जहाँ चाह वहाँ राह (प्रसिद्ध मुहावरे व वाक्य प्रयोग)',
    concept: 'NCERT मुहावरा अर्थ',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'मुहावरों को उनके सही अर्थ से मिलाइए:',
    visualEmoji: '💡',
    payload: {
      pairs: [
        { id: 'h5_m1', left: 'दाँतों तले उँगली दबाना', right: 'दंग या हैरान रह जाना' },
        { id: 'h5_m2', left: 'कमर कसना', right: 'कठिन परिश्रम के लिए तैयार होना' },
        { id: 'h5_m3', left: 'आँखों का तारा', right: 'बहुत प्यारा होना' },
      ],
    },
    explanation: 'NCERT रिमझिम 5: दाँतों तले उँगली दबाना = हैरान होना, कमर कसना = तैयार होना!',
    points: 15,
  },
  {
    id: 'ncert_c5_h2_001',
    grade: 5,
    subject: 'hindi',
    chapter: 'फसलों के त्योहार (उपसर्ग और प्रत्यय)',
    concept: 'NCERT उपसर्ग व प्रत्यय',
    difficulty: 'hard',
    type: 'fill_blank',
    question: 'रिक्त स्थान में सही व्याकरणिक पद पहचानिए:',
    visualEmoji: '🌾',
    payload: {
      correctAnswer: 'उपसर्ग',
      wordBank: ['उपसर्ग', 'प्रत्यय', 'समास'],
      displayTemplate: '"अनहोनी" शब्द में "अन-" मूल शब्द के पहले जुड़ा है, अतः यह [BLANK] है।',
    },
    explanation: 'NCERT कक्षा 5: शब्द के आरंभ में जुड़ने वाले शब्दांश को "उपसर्ग" कहते हैं!',
    points: 10,
  },

  // =========================================================================
  // CLASS 6 — NCERT मल्हार 6 (HINDI)
  // =========================================================================
  {
    id: 'ncert_c6_h3_001',
    grade: 6,
    subject: 'hindi',
    chapter: 'नादान दोस्त (संधि परिचय - स्वर संधि)',
    concept: 'NCERT दीर्घ स्वर संधि',
    difficulty: 'hard',
    type: 'fill_blank',
    question: 'सही संधि युक्त शब्द भरिए:',
    visualEmoji: '🏫',
    payload: {
      correctAnswer: 'विद्यालय',
      wordBank: ['विद्यालय', 'विद्यालयी', 'विद्याआलय'],
      displayTemplate: 'विद्या + आलय = [BLANK]',
    },
    explanation: 'NCERT मल्हार 6: आ + आ = आ (दीर्घ स्वर संधि: विद्या + आलय = विद्यालय)!',
    points: 15,
  },
  {
    id: 'ncert_c6_h1_001',
    grade: 6,
    subject: 'hindi',
    chapter: 'वह चिड़िया जो (भाववाचक संज्ञा व पद परिचय)',
    concept: 'NCERT भाववाचक संज्ञा निर्माण',
    difficulty: 'medium',
    type: 'mcq',
    question: '"सुंदर" विशेषण से कौन सी भाववाचक संज्ञा बनती है?',
    visualEmoji: '🌸',
    payload: {
      options: [
        { id: 'opt_1', text: 'सुंदरता (भाववाचक संज्ञा)', isCorrect: true },
        { id: 'opt_2', text: 'सुंदरी (स्त्रीलिंग)', isCorrect: false },
        { id: 'opt_3', text: 'सुंदरतम (उत्तमावस्था)', isCorrect: false },
      ],
    },
    explanation: 'NCERT कक्षा 6: सुंदर में "-ता" प्रत्यय जुड़कर भाववाचक संज्ञा "सुंदरता" बनती है!',
    points: 10,
  },
  {
    id: 'ncert_c6_h5_001',
    grade: 6,
    subject: 'hindi',
    chapter: 'संसार पुस्तक है (विराम चिह्न व अशुद्ध वाक्य शोधन)',
    concept: 'NCERT कारक पहचान (अपादान)',
    difficulty: 'hard',
    type: 'mcq',
    question: '"पेड़ से पत्ता गिरा।" इस वाक्य में रेखांकित शब्द "से" (अलग होने के भाव में) कौन सा कारक है? 🍃',
    visualEmoji: '🍃',
    payload: {
      options: [
        { id: 'opt_1', text: 'अपादान कारक (अलग होने का भाव)', isCorrect: true },
        { id: 'opt_2', text: 'करण कारक (साधन का भाव)', isCorrect: false },
        { id: 'opt_3', text: 'कर्म कारक', isCorrect: false },
      ],
    },
    explanation: 'NCERT व्याकरण 6: जब किसी वस्तु का किसी स्थान या वस्तु से अलग होने का भाव हो, वहाँ अपादान कारक होता है!',
    points: 15,
  },
];

export const getQuestionsForSession = (
  grade: Grade,
  subject: Subject,
  chapterFilter?: string
): Question[] => {
  if (chapterFilter) {
    const chapterQuestions = MOCK_QUESTIONS.filter(
      (q) => q.grade === grade && q.subject === subject && q.chapter.toLowerCase().includes(chapterFilter.toLowerCase().slice(0, 8))
    );
    if (chapterQuestions.length > 0) {
      return chapterQuestions;
    }
  }

  const filtered = MOCK_QUESTIONS.filter((q) => q.grade === grade && q.subject === subject);
  if (filtered.length > 0) {
    return filtered;
  }

  const gradeFallback = MOCK_QUESTIONS.filter((q) => q.grade === grade);
  return gradeFallback.length > 0 ? gradeFallback : MOCK_QUESTIONS;
};
