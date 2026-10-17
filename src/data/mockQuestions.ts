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
import { CLASS_4_MATHS_LESSON_1_QUESTIONS } from './curriculum/class4MathsLesson1';
import { CLASS_4_MATHS_LESSON_2_QUESTIONS } from './curriculum/class4MathsLesson2';
import { CLASS_4_MATHS_LESSON_3_QUESTIONS } from './curriculum/class4MathsLesson3';
import { CLASS_4_MATHS_LESSON_4_QUESTIONS } from './curriculum/class4MathsLesson4';
import { CLASS_4_MATHS_LESSON_5_QUESTIONS } from './curriculum/class4MathsLesson5';
import { CLASS_4_MATHS_LESSON_6_QUESTIONS } from './curriculum/class4MathsLesson6';
import { CLASS_4_MATHS_LESSON_7_QUESTIONS } from './curriculum/class4MathsLesson7';
import { CLASS_4_MATHS_LESSON_8_QUESTIONS } from './curriculum/class4MathsLesson8';
import { CLASS_4_MATHS_LESSON_9_QUESTIONS } from './curriculum/class4MathsLesson9';
import { CLASS_4_MATHS_LESSON_10_QUESTIONS } from './curriculum/class4MathsLesson10';
import { CLASS_4_ENGLISH_LESSON_1_QUESTIONS } from './curriculum/class4EnglishLesson1';
import { CLASS_4_ENGLISH_LESSON_2_QUESTIONS } from './curriculum/class4EnglishLesson2';
import { CLASS_4_ENGLISH_LESSON_3_QUESTIONS } from './curriculum/class4EnglishLesson3';
import { CLASS_4_ENGLISH_LESSON_4_QUESTIONS } from './curriculum/class4EnglishLesson4';
import { CLASS_4_ENGLISH_LESSON_5_QUESTIONS } from './curriculum/class4EnglishLesson5';
import { CLASS_4_ENGLISH_LESSON_6_QUESTIONS } from './curriculum/class4EnglishLesson6';
import { CLASS_4_HINDI_LESSON_1_QUESTIONS } from './curriculum/class4HindiLesson1';
import { CLASS_4_HINDI_LESSON_2_QUESTIONS } from './curriculum/class4HindiLesson2';
import { CLASS_4_HINDI_LESSON_3_QUESTIONS } from './curriculum/class4HindiLesson3';
import { CLASS_4_HINDI_LESSON_4_QUESTIONS } from './curriculum/class4HindiLesson4';
import { CLASS_4_HINDI_LESSON_5_QUESTIONS } from './curriculum/class4HindiLesson5';
import { CLASS_4_HINDI_LESSON_6_QUESTIONS } from './curriculum/class4HindiLesson6';
import { CLASS_5_MATHS_LESSON_1_QUESTIONS } from './curriculum/class5MathsLesson1';
import { CLASS_5_MATHS_LESSON_2_QUESTIONS } from './curriculum/class5MathsLesson2';
import { CLASS_5_MATHS_LESSON_3_QUESTIONS } from './curriculum/class5MathsLesson3';
import { CLASS_5_MATHS_LESSON_4_QUESTIONS } from './curriculum/class5MathsLesson4';
import { CLASS_5_MATHS_LESSON_5_QUESTIONS } from './curriculum/class5MathsLesson5';
import { CLASS_5_MATHS_LESSON_6_QUESTIONS } from './curriculum/class5MathsLesson6';
import { CLASS_5_MATHS_LESSON_7_QUESTIONS } from './curriculum/class5MathsLesson7';
import { CLASS_5_MATHS_LESSON_8_QUESTIONS } from './curriculum/class5MathsLesson8';
import { CLASS_5_MATHS_LESSON_9_QUESTIONS } from './curriculum/class5MathsLesson9';
import { CLASS_5_MATHS_LESSON_10_QUESTIONS } from './curriculum/class5MathsLesson10';
import { CLASS_5_ENGLISH_LESSON_1_QUESTIONS } from './curriculum/class5EnglishLesson1';
import { CLASS_5_ENGLISH_LESSON_2_QUESTIONS } from './curriculum/class5EnglishLesson2';
import { CLASS_5_ENGLISH_LESSON_3_QUESTIONS } from './curriculum/class5EnglishLesson3';
import { CLASS_5_ENGLISH_LESSON_4_QUESTIONS } from './curriculum/class5EnglishLesson4';
import { CLASS_5_ENGLISH_LESSON_5_QUESTIONS } from './curriculum/class5EnglishLesson5';
import { CLASS_5_ENGLISH_LESSON_6_QUESTIONS } from './curriculum/class5EnglishLesson6';
import { CLASS_5_HINDI_LESSON_1_QUESTIONS } from './curriculum/class5HindiLesson1';
import { CLASS_5_HINDI_LESSON_2_QUESTIONS } from './curriculum/class5HindiLesson2';
import { CLASS_5_HINDI_LESSON_3_QUESTIONS } from './curriculum/class5HindiLesson3';
import { CLASS_5_HINDI_LESSON_4_QUESTIONS } from './curriculum/class5HindiLesson4';
import { CLASS_5_HINDI_LESSON_5_QUESTIONS } from './curriculum/class5HindiLesson5';
import { CLASS_5_HINDI_LESSON_6_QUESTIONS } from './curriculum/class5HindiLesson6';
import { CLASS_6_MATHS_LESSON_1_QUESTIONS } from './curriculum/class6MathsLesson1';
import { CLASS_6_MATHS_LESSON_2_QUESTIONS } from './curriculum/class6MathsLesson2';
import { CLASS_6_MATHS_LESSON_3_QUESTIONS } from './curriculum/class6MathsLesson3';
import { CLASS_6_MATHS_LESSON_4_QUESTIONS } from './curriculum/class6MathsLesson4';
import { CLASS_6_MATHS_LESSON_5_QUESTIONS } from './curriculum/class6MathsLesson5';
import { CLASS_6_MATHS_LESSON_6_QUESTIONS } from './curriculum/class6MathsLesson6';
import { CLASS_6_MATHS_LESSON_7_QUESTIONS } from './curriculum/class6MathsLesson7';
import { CLASS_6_MATHS_LESSON_8_QUESTIONS } from './curriculum/class6MathsLesson8';
import { CLASS_6_MATHS_LESSON_9_QUESTIONS } from './curriculum/class6MathsLesson9';
import { CLASS_6_MATHS_LESSON_10_QUESTIONS } from './curriculum/class6MathsLesson10';
import { CLASS_6_MATHS_LESSON_11_QUESTIONS } from './curriculum/class6MathsLesson11';
import { CLASS_6_ENGLISH_LESSON_1_QUESTIONS } from './curriculum/class6EnglishLesson1';
import { CLASS_6_ENGLISH_LESSON_2_QUESTIONS } from './curriculum/class6EnglishLesson2';
import { CLASS_6_ENGLISH_LESSON_3_QUESTIONS } from './curriculum/class6EnglishLesson3';
import { CLASS_6_ENGLISH_LESSON_4_QUESTIONS } from './curriculum/class6EnglishLesson4';
import { CLASS_6_ENGLISH_LESSON_5_QUESTIONS } from './curriculum/class6EnglishLesson5';
import { CLASS_6_ENGLISH_LESSON_6_QUESTIONS } from './curriculum/class6EnglishLesson6';
import { CLASS_6_ENGLISH_LESSON_7_QUESTIONS } from './curriculum/class6EnglishLesson7';
import { CLASS_6_HINDI_LESSON_1_QUESTIONS } from './curriculum/class6HindiLesson1';
import { CLASS_6_HINDI_LESSON_2_QUESTIONS } from './curriculum/class6HindiLesson2';
import { CLASS_6_HINDI_LESSON_3_QUESTIONS } from './curriculum/class6HindiLesson3';
import { CLASS_6_HINDI_LESSON_4_QUESTIONS } from './curriculum/class6HindiLesson4';
import { CLASS_6_HINDI_LESSON_5_QUESTIONS } from './curriculum/class6HindiLesson5';
import { CLASS_6_HINDI_LESSON_6_QUESTIONS } from './curriculum/class6HindiLesson6';

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
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 1 (Building with Bricks - Brick Patterns)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 2 (Long and Short - Kilometers & Meters)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 3 (A Trip to Bhopal - Word Problems & Estimation)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 4 (Tick-Tick-Tick - 12h vs 24h Clock)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 5 (The Way The World Looks - 3D Perspectives)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 6 (The Junk Seller - Currency & Profit)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 7 (Carts and Wheels - Circles & Radius)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_7_QUESTIONS,

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 8 (Halves and Quarters - Fractions)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_8_QUESTIONS,

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 9 (Tables and Shares - Division)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_9_QUESTIONS,

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4: CHAPTER 10 (Fields and Fences - Perimeter & Area)
  // =========================================================================
  ...CLASS_4_MATHS_LESSON_10_QUESTIONS,

  // =========================================================================
  // CLASS 4 — ENGLISH GRAMMAR: CHAPTER 1 (Articles & Determiners)
  // =========================================================================
  ...CLASS_4_ENGLISH_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 4 — ENGLISH GRAMMAR: CHAPTER 2 (Collective & Abstract Nouns)
  // =========================================================================
  ...CLASS_4_ENGLISH_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 4 — ENGLISH GRAMMAR: CHAPTER 3 (Past Tense & Irregular Verbs)
  // =========================================================================
  ...CLASS_4_ENGLISH_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 4 — ENGLISH GRAMMAR: CHAPTER 4 (Adverbs of Manner & Time)
  // =========================================================================
  ...CLASS_4_ENGLISH_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 4 — ENGLISH GRAMMAR: CHAPTER 5 (Conjunctions & Compound Sentences)
  // =========================================================================
  ...CLASS_4_ENGLISH_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 4 — ENGLISH GRAMMAR: CHAPTER 6 (Prepositions & Direction Words)
  // =========================================================================
  ...CLASS_4_ENGLISH_LESSON_6_QUESTIONS,

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
        { id: 'opt_1', text: 'Right Angle', isCorrect: true },
        { id: 'opt_2', text: 'Acute Angle', isCorrect: false },
        { id: 'opt_3', text: 'Obtuse Angle', isCorrect: false },
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
        { id: 'opt_1', text: 'Honesty', isCorrect: true },
        { id: 'opt_2', text: 'Golden Ring', isCorrect: false },
        { id: 'opt_3', text: 'Wooden Table', isCorrect: false },
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
        { id: 'opt_1', text: 'Exclamatory Sentence', isCorrect: true },
        { id: 'opt_2', text: 'Interrogative Sentence', isCorrect: false },
        { id: 'opt_3', text: 'Declarative Statement', isCorrect: false },
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
  // CLASS 4 — HINDI VYAKARAN: CHAPTER 1 (विशेषण व उसके भेद)
  // =========================================================================
  ...CLASS_4_HINDI_LESSON_1_QUESTIONS,

  // =========================================================================
  // CLASS 4 — HINDI VYAKARAN: CHAPTER 2 (मुहावरे व लोकोक्तियाँ)
  // =========================================================================
  ...CLASS_4_HINDI_LESSON_2_QUESTIONS,

  // =========================================================================
  // CLASS 4 — HINDI VYAKARAN: CHAPTER 3 (काल व उसके भेद)
  // =========================================================================
  ...CLASS_4_HINDI_LESSON_3_QUESTIONS,

  // =========================================================================
  // CLASS 4 — HINDI VYAKARAN: CHAPTER 4 (लिंग व वचन परिवर्तन के नियम)
  // =========================================================================
  ...CLASS_4_HINDI_LESSON_4_QUESTIONS,

  // =========================================================================
  // CLASS 4 — HINDI VYAKARAN: CHAPTER 5 (विलोम व पर्यायवाची शब्द)
  // =========================================================================
  ...CLASS_4_HINDI_LESSON_5_QUESTIONS,

  // =========================================================================
  // CLASS 4 — HINDI VYAKARAN: CHAPTER 6 (अनेक शब्दों के लिए एक शब्द)
  // =========================================================================
  ...CLASS_4_HINDI_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 5 — MATHEMATICS (CHAPTERS 1 TO 10)
  // =========================================================================
  ...CLASS_5_MATHS_LESSON_1_QUESTIONS,
  ...CLASS_5_MATHS_LESSON_2_QUESTIONS,
  ...CLASS_5_MATHS_LESSON_3_QUESTIONS,
  ...CLASS_5_MATHS_LESSON_4_QUESTIONS,
  ...CLASS_5_MATHS_LESSON_5_QUESTIONS,
  ...CLASS_5_MATHS_LESSON_6_QUESTIONS,
  ...CLASS_5_MATHS_LESSON_7_QUESTIONS,
  ...CLASS_5_MATHS_LESSON_8_QUESTIONS,
  ...CLASS_5_MATHS_LESSON_9_QUESTIONS,
  ...CLASS_5_MATHS_LESSON_10_QUESTIONS,

  // =========================================================================
  // CLASS 5 — ENGLISH (CHAPTERS 1 TO 6)
  // =========================================================================
  ...CLASS_5_ENGLISH_LESSON_1_QUESTIONS,
  ...CLASS_5_ENGLISH_LESSON_2_QUESTIONS,
  ...CLASS_5_ENGLISH_LESSON_3_QUESTIONS,
  ...CLASS_5_ENGLISH_LESSON_4_QUESTIONS,
  ...CLASS_5_ENGLISH_LESSON_5_QUESTIONS,
  ...CLASS_5_ENGLISH_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 5 — HINDI (CHAPTERS 1 TO 6)
  // =========================================================================
  ...CLASS_5_HINDI_LESSON_1_QUESTIONS,
  ...CLASS_5_HINDI_LESSON_2_QUESTIONS,
  ...CLASS_5_HINDI_LESSON_3_QUESTIONS,
  ...CLASS_5_HINDI_LESSON_4_QUESTIONS,
  ...CLASS_5_HINDI_LESSON_5_QUESTIONS,
  ...CLASS_5_HINDI_LESSON_6_QUESTIONS,

  // =========================================================================
  // CLASS 6 — MATHEMATICS (CHAPTERS 1 TO 11)
  // =========================================================================
  ...CLASS_6_MATHS_LESSON_1_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_2_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_3_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_4_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_5_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_6_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_7_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_8_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_9_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_10_QUESTIONS,
  ...CLASS_6_MATHS_LESSON_11_QUESTIONS,

  // =========================================================================
  // CLASS 6 — ENGLISH (CHAPTERS 1 TO 7)
  // =========================================================================
  ...CLASS_6_ENGLISH_LESSON_1_QUESTIONS,
  ...CLASS_6_ENGLISH_LESSON_2_QUESTIONS,
  ...CLASS_6_ENGLISH_LESSON_3_QUESTIONS,
  ...CLASS_6_ENGLISH_LESSON_4_QUESTIONS,
  ...CLASS_6_ENGLISH_LESSON_5_QUESTIONS,
  ...CLASS_6_ENGLISH_LESSON_6_QUESTIONS,
  ...CLASS_6_ENGLISH_LESSON_7_QUESTIONS,

  // =========================================================================
  // CLASS 6 — HINDI (CHAPTERS 1 TO 6)
  // =========================================================================
  ...CLASS_6_HINDI_LESSON_1_QUESTIONS,
  ...CLASS_6_HINDI_LESSON_2_QUESTIONS,
  ...CLASS_6_HINDI_LESSON_3_QUESTIONS,
  ...CLASS_6_HINDI_LESSON_4_QUESTIONS,
  ...CLASS_6_HINDI_LESSON_5_QUESTIONS,
  ...CLASS_6_HINDI_LESSON_6_QUESTIONS,
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
