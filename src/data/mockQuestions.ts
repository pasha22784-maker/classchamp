import { Question, Grade, Subject } from '../types';
import { CLASS_1_MATHS_LESSON_1_QUESTIONS } from './curriculum/class1MathsLesson1';
import { CLASS_1_MATHS_LESSON_2_QUESTIONS } from './curriculum/class1MathsLesson2';
import { CLASS_1_MATHS_LESSON_3_QUESTIONS } from './curriculum/class1MathsLesson3';
import { CLASS_1_MATHS_LESSON_4_QUESTIONS } from './curriculum/class1MathsLesson4';
import { CLASS_1_MATHS_LESSON_5_QUESTIONS } from './curriculum/class1MathsLesson5';
import { CLASS_1_MATHS_LESSON_6_QUESTIONS } from './curriculum/class1MathsLesson6';
import { CLASS_1_MATHS_LESSON_7_QUESTIONS } from './curriculum/class1MathsLesson7';
import { CLASS_1_MATHS_LESSON_8_QUESTIONS } from './curriculum/class1MathsLesson8';
import { CLASS_1_MATHS_LESSON_9_QUESTIONS } from './curriculum/class1MathsLesson9';
import { CLASS_1_MATHS_LESSON_10_QUESTIONS } from './curriculum/class1MathsLesson10';
import { CLASS_1_MATHS_LESSON_11_QUESTIONS } from './curriculum/class1MathsLesson11';
import { CLASS_1_MATHS_LESSON_12_QUESTIONS } from './curriculum/class1MathsLesson12';
import { CLASS_1_ENGLISH_LESSON_1_QUESTIONS } from './curriculum/class1EnglishLesson1';
import { CLASS_1_ENGLISH_LESSON_2_QUESTIONS } from './curriculum/class1EnglishLesson2';
import { CLASS_1_ENGLISH_LESSON_3_QUESTIONS } from './curriculum/class1EnglishLesson3';
import { CLASS_1_ENGLISH_LESSON_4_QUESTIONS } from './curriculum/class1EnglishLesson4';
import { CLASS_1_ENGLISH_LESSON_5_QUESTIONS } from './curriculum/class1EnglishLesson5';
import { CLASS_1_ENGLISH_LESSON_6_QUESTIONS } from './curriculum/class1EnglishLesson6';
import { CLASS_1_ENGLISH_LESSON_7_QUESTIONS } from './curriculum/class1EnglishLesson7';
import { CLASS_1_ENGLISH_LESSON_8_QUESTIONS } from './curriculum/class1EnglishLesson8';
import { CLASS_1_HINDI_LESSON_1_QUESTIONS } from './curriculum/class1HindiLesson1';
import { CLASS_1_HINDI_LESSON_2_QUESTIONS } from './curriculum/class1HindiLesson2';
import { CLASS_1_HINDI_LESSON_3_QUESTIONS } from './curriculum/class1HindiLesson3';
import { CLASS_1_HINDI_LESSON_4_QUESTIONS } from './curriculum/class1HindiLesson4';
import { CLASS_1_HINDI_LESSON_5_QUESTIONS } from './curriculum/class1HindiLesson5';
import { CLASS_1_HINDI_LESSON_6_QUESTIONS } from './curriculum/class1HindiLesson6';
import { CLASS_1_HINDI_LESSON_7_QUESTIONS } from './curriculum/class1HindiLesson7';
import { CLASS_2_MATHS_LESSON_1_QUESTIONS } from './curriculum/class2MathsLesson1';
import { CLASS_2_MATHS_LESSON_2_QUESTIONS } from './curriculum/class2MathsLesson2';
import { CLASS_2_MATHS_LESSON_3_QUESTIONS } from './curriculum/class2MathsLesson3';
import { CLASS_2_MATHS_LESSON_4_QUESTIONS } from './curriculum/class2MathsLesson4';
import { CLASS_2_MATHS_LESSON_5_QUESTIONS } from './curriculum/class2MathsLesson5';
import { CLASS_2_MATHS_LESSON_6_QUESTIONS } from './curriculum/class2MathsLesson6';
import { CLASS_2_MATHS_LESSON_7_QUESTIONS } from './curriculum/class2MathsLesson7';
import { CLASS_2_MATHS_LESSON_8_QUESTIONS } from './curriculum/class2MathsLesson8';
import { CLASS_2_ENGLISH_LESSON_1_QUESTIONS } from './curriculum/class2EnglishLesson1';
import { CLASS_2_ENGLISH_LESSON_2_QUESTIONS } from './curriculum/class2EnglishLesson2';
import { CLASS_2_ENGLISH_LESSON_3_QUESTIONS } from './curriculum/class2EnglishLesson3';
import { CLASS_2_ENGLISH_LESSON_4_QUESTIONS } from './curriculum/class2EnglishLesson4';
import { CLASS_2_ENGLISH_LESSON_5_QUESTIONS } from './curriculum/class2EnglishLesson5';
import { CLASS_2_ENGLISH_LESSON_6_QUESTIONS } from './curriculum/class2EnglishLesson6';
import { CLASS_2_ENGLISH_LESSON_7_QUESTIONS } from './curriculum/class2EnglishLesson7';
import { CLASS_2_HINDI_LESSON_1_QUESTIONS } from './curriculum/class2HindiLesson1';
import { CLASS_2_HINDI_LESSON_2_QUESTIONS } from './curriculum/class2HindiLesson2';
import { CLASS_2_HINDI_LESSON_3_QUESTIONS } from './curriculum/class2HindiLesson3';
import { CLASS_2_HINDI_LESSON_4_QUESTIONS } from './curriculum/class2HindiLesson4';
import { CLASS_2_HINDI_LESSON_5_QUESTIONS } from './curriculum/class2HindiLesson5';
import { CLASS_2_HINDI_LESSON_6_QUESTIONS } from './curriculum/class2HindiLesson6';
import { CLASS_2_HINDI_LESSON_7_QUESTIONS } from './curriculum/class2HindiLesson7';
import { CLASS_3_MATHS_LESSON_1_QUESTIONS } from './curriculum/class3MathsLesson1';
import { CLASS_3_MATHS_LESSON_2_QUESTIONS } from './curriculum/class3MathsLesson2';
import { CLASS_3_MATHS_LESSON_3_QUESTIONS } from './curriculum/class3MathsLesson3';
import { CLASS_3_MATHS_LESSON_4_QUESTIONS } from './curriculum/class3MathsLesson4';
import { CLASS_3_MATHS_LESSON_5_QUESTIONS } from './curriculum/class3MathsLesson5';
import { CLASS_3_MATHS_LESSON_6_QUESTIONS } from './curriculum/class3MathsLesson6';
import { CLASS_3_MATHS_LESSON_7_QUESTIONS } from './curriculum/class3MathsLesson7';
import { CLASS_3_MATHS_LESSON_8_QUESTIONS } from './curriculum/class3MathsLesson8';
import { CLASS_3_MATHS_LESSON_9_QUESTIONS } from './curriculum/class3MathsLesson9';
import { CLASS_3_MATHS_LESSON_10_QUESTIONS } from './curriculum/class3MathsLesson10';
import { CLASS_3_ENGLISH_LESSON_1_QUESTIONS } from './curriculum/class3EnglishLesson1';
import { CLASS_3_ENGLISH_LESSON_2_QUESTIONS } from './curriculum/class3EnglishLesson2';
import { CLASS_3_ENGLISH_LESSON_3_QUESTIONS } from './curriculum/class3EnglishLesson3';
import { CLASS_3_ENGLISH_LESSON_4_QUESTIONS } from './curriculum/class3EnglishLesson4';
import { CLASS_3_ENGLISH_LESSON_5_QUESTIONS } from './curriculum/class3EnglishLesson5';
import { CLASS_3_ENGLISH_LESSON_6_QUESTIONS } from './curriculum/class3EnglishLesson6';
import { CLASS_3_ENGLISH_LESSON_7_QUESTIONS } from './curriculum/class3EnglishLesson7';
import { CLASS_3_HINDI_LESSON_1_QUESTIONS } from './curriculum/class3HindiLesson1';
import { CLASS_3_HINDI_LESSON_2_QUESTIONS } from './curriculum/class3HindiLesson2';
import { CLASS_3_HINDI_LESSON_3_QUESTIONS } from './curriculum/class3HindiLesson3';
import { CLASS_3_HINDI_LESSON_4_QUESTIONS } from './curriculum/class3HindiLesson4';
import { CLASS_3_HINDI_LESSON_5_QUESTIONS } from './curriculum/class3HindiLesson5';
import { CLASS_3_HINDI_LESSON_6_QUESTIONS } from './curriculum/class3HindiLesson6';

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
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 8 (Fun with Numbers - Numbers 21 to 99)
  // All 7 Concepts (Counting in Tens, Tens and Ones, Before/After, Greater/Smaller, Skip 10s)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_8_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 9 (Utsav - Patterns)
  // All 7 Concepts (Shape Patterns, Color, Size, Skip Counting Patterns, Backwards)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_9_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 10 (How do I Spend My Day? - Time)
  // All 7 Concepts (Morning, Afternoon, Evening, Night, Routine Sequence, Duration)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_10_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 11 (How Much Can We Spend? - Money)
  // All 7 Concepts (Coins ₹1, ₹2, ₹5, ₹10, Combining Money, Total Cost, Calculating Change)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_11_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS: CHAPTER 12 (So Many Toys! - Data Handling)
  // All 7 Concepts (Sorting & Counting, Most/Least, Difference, Total, Ordering)
  // =========================================================================
  ...CLASS_1_MATHS_LESSON_12_QUESTIONS,

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
  // CLASS 1 — NCERT MRIDANG & MARIGOLD: CHAPTER 6 (Position Words - In, On, Under)
  // All 6 Concepts (In, On, Under, Behind, In Front, Pairs)
  // =========================================================================
  ...CLASS_1_ENGLISH_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT MRIDANG & MARIGOLD: CHAPTER 7 (Pronouns - He, She, It, They)
  // All 6 Concepts (He for boys, She for girls, It for things, They, Story match)
  // =========================================================================
  ...CLASS_1_ENGLISH_LESSON_7_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT MRIDANG & MARIGOLD: CHAPTER 8 (Sentence Scramble & Story Words)
  // All 6 Concepts (Capital letter start, Full stop ., Word order, Question mark ?, Sight words)
  // =========================================================================
  ...CLASS_1_ENGLISH_LESSON_8_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2: CHAPTER 1 (A Day at the Beach - Counting in Groups)
  // =========================================================================
  ...CLASS_2_MATHS_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2: CHAPTER 2 (Shapes Around Us - Rolling & Sliding)
  // =========================================================================
  ...CLASS_2_MATHS_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2: CHAPTER 3 (Fun with Numbers - Numbers up to 100)
  // =========================================================================
  ...CLASS_2_MATHS_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2: CHAPTER 4 (Shadow Story - Addition & Put Together)
  // =========================================================================
  ...CLASS_2_MATHS_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2: CHAPTER 5 (Playing with Lines - Lines & Shapes)
  // =========================================================================
  ...CLASS_2_MATHS_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2: CHAPTER 6 (Decoration for Festival - Subtraction)
  // =========================================================================
  ...CLASS_2_MATHS_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2: CHAPTER 7 (Rani's Gift - Measurement & Length)
  // =========================================================================
  ...CLASS_2_MATHS_LESSON_7_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2: CHAPTER 8 (Which Season is it? - Time & Months)
  // =========================================================================
  ...CLASS_2_MATHS_LESSON_8_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT MRIDANG 2 & MARIGOLD 2: CHAPTER 1 (Welcome to School - Rhymes & Phonics)
  // =========================================================================
  ...CLASS_2_ENGLISH_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT MRIDANG 2 & MARIGOLD 2: CHAPTER 2 (Picture Fun & Naming Words)
  // =========================================================================
  ...CLASS_2_ENGLISH_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT MRIDANG 2 & MARIGOLD 2: CHAPTER 3 (Action Words & Doing Words - Verbs)
  // =========================================================================
  ...CLASS_2_ENGLISH_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT MRIDANG 2 & MARIGOLD 2: CHAPTER 4 (Pronouns - I, You, We, They)
  // =========================================================================
  ...CLASS_2_ENGLISH_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT MRIDANG 2 & MARIGOLD 2: CHAPTER 5 (Describing Words - Adjectives & Opposites)
  // =========================================================================
  ...CLASS_2_ENGLISH_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT MRIDANG 2 & MARIGOLD 2: CHAPTER 6 (Position Words - Behind, In Front, Next)
  // =========================================================================
  ...CLASS_2_ENGLISH_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT MRIDANG 2 & MARIGOLD 2: CHAPTER 7 (Sentences & Question Marks)
  // =========================================================================
  ...CLASS_2_ENGLISH_LESSON_7_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 1 (Where to Look From? - 2D Views & Shapes)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 2 (Fun with Numbers - Numbers up to 1000)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 3 (Give and Take - Addition & Subtraction)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 4 (Long and Short - Length & Meters)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 5 (Shapes and Designs - Tangrams & Edges)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 6 (Time Goes On - Clocks & Calendars)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 7 (Who is Heavier? - Kilograms & Grams)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_7_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 8 (How Many Times? - Multiplication)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_8_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 9 (Jugs and Mugs - Litres & Millilitres)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_9_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3: CHAPTER 10 (Rupees and Paise - Money)
  // =========================================================================
  ...CLASS_3_MATHS_LESSON_10_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT SANTOOR 3 & MARIGOLD 3: CHAPTER 1 (Good Morning & Nature Words)
  // =========================================================================
  ...CLASS_3_ENGLISH_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT SANTOOR 3 & MARIGOLD 3: CHAPTER 2 (Common & Proper Nouns)
  // =========================================================================
  ...CLASS_3_ENGLISH_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT SANTOOR 3 & MARIGOLD 3: CHAPTER 3 (Singular and Plural -s, -es, -ies)
  // =========================================================================
  ...CLASS_3_ENGLISH_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT SANTOOR 3 & MARIGOLD 3: CHAPTER 4 (Helping Verbs - Is, Am, Are, Was, Were)
  // =========================================================================
  ...CLASS_3_ENGLISH_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT SANTOOR 3 & MARIGOLD 3: CHAPTER 5 (Adjectives & Degrees of Comparison)
  // =========================================================================
  ...CLASS_3_ENGLISH_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT SANTOOR 3 & MARIGOLD 3: CHAPTER 6 (Prepositions of Time & Place)
  // =========================================================================
  ...CLASS_3_ENGLISH_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT SANTOOR 3 & MARIGOLD 3: CHAPTER 7 (Connecting Words - And, But, Because)
  // =========================================================================
  ...CLASS_3_ENGLISH_LESSON_7_QUESTIONS,

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
  // =========================================================================
  // CLASS 1 — NCERT सारंगी 1 (HINDI): CHAPTER 6 (नाम वाले शब्द - संज्ञा परिचय)
  // All 7 Concepts (नाम वाले शब्द, व्यक्तियों, पशु-पक्षियों, फलों, वस्तुओं, स्थानों के नाम)
  // =========================================================================
  ...CLASS_1_HINDI_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 1 — NCERT सारंगी 1 (HINDI): CHAPTER 7 (उल्टे अर्थ वाले शब्द - विलोम शब्द)
  // All 8 Concepts (बड़ा/छोटा, ऊपर/नीचे, दिन/रात, गरम/ठंडा, अंदर/बाहर, पास/दूर, नया/पुराना)
  // =========================================================================
  ...CLASS_1_HINDI_LESSON_7_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT सारंगी 2 (HINDI): CHAPTER 1 (ऊँट चला - संयुक्त व्यंजन व वर्ण ज्ञान)
  // =========================================================================
  ...CLASS_2_HINDI_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT सारंगी 2 (HINDI): CHAPTER 2 (भालू ने खेली फुटबॉल - मात्रा पुनरावृत्ति)
  // =========================================================================
  ...CLASS_2_HINDI_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT सारंगी 2 (HINDI): CHAPTER 3 (म्याऊँ, म्याऊँ! - नाम वाले शब्द - संज्ञा)
  // =========================================================================
  ...CLASS_2_HINDI_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT सारंगी 2 (HINDI): CHAPTER 4 (अधिक बलवान कौन? - विशेषण - कैसा/कितना)
  // =========================================================================
  ...CLASS_2_HINDI_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT सारंगी 2 (HINDI): CHAPTER 5 (दोस्त की मदद - काम वाले शब्द - क्रिया)
  // =========================================================================
  ...CLASS_2_HINDI_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT सारंगी 2 (HINDI): CHAPTER 6 (एक और अनेक - वचन - लड़का/लड़के)
  // =========================================================================
  ...CLASS_2_HINDI_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 2 — NCERT सारंगी 2 (HINDI): CHAPTER 7 (स्त्रीलिंग और पुल्लिंग - लिंग पहचान)
  // =========================================================================
  ...CLASS_2_HINDI_LESSON_7_QUESTIONS,

  // =========================================================================
  // =========================================================================
  // CLASS 3 — NCERT वीणा 3 / रिमझिम 3: CHAPTER 1 (कक्कू - संज्ञा व उसके भेद)
  // =========================================================================
  ...CLASS_3_HINDI_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT वीणा 3 / रिमझिम 3: CHAPTER 2 (शेखीबाज़ मक्खी - सर्वनाम शब्द)
  // =========================================================================
  ...CLASS_3_HINDI_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT वीणा 3 / रिमझिम 3: CHAPTER 3 (चाँद वाली अम्मा - क्रिया व काल)
  // =========================================================================
  ...CLASS_3_HINDI_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT वीणा 3 / रिमझिम 3: CHAPTER 4 (बहादुर बित्तो - विलोम व पर्यायवाची शब्द)
  // =========================================================================
  ...CLASS_3_HINDI_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT वीणा 3 / रिमझिम 3: CHAPTER 5 (हमसे सब कहते - मुहावरे परिचय)
  // =========================================================================
  ...CLASS_3_HINDI_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 3 — NCERT वीणा 3 / रिमझिम 3: CHAPTER 6 (बंदर बाँट - विराम चिह्न व वाक्य शुद्धि)
  // =========================================================================
  ...CLASS_3_HINDI_LESSON_6_QUESTIONS,

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
