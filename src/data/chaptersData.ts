import { ChapterLesson, Grade, Subject } from '../types';

export interface NCERTBookInfo {
  mathsBook: string;
  englishBook: string;
  hindiBook: string;
}

export const NCERT_BOOKS: Record<Grade, NCERTBookInfo> = {
  LKG: {
    mathsBook: 'Pre-School Joyful Maths (Numbers 1-5, Shapes & Colors)',
    englishBook: 'Early Phonics & Alphabet Fun (A-Z Sounds & Rhymes)',
    hindiBook: 'बाल वाटिका 2 (स्वर, चित्र व मौखिक ज्ञान)',
  },
  UKG: {
    mathsBook: 'Kindergarten Maths (Numbers 1-20, Counting & Addition)',
    englishBook: 'Phonics & Sight Words (CVC Words & Early Reading)',
    hindiBook: 'बाल वाटिका 3 (स्वर, व्यंजन व सरल अमात्रिक शब्द)',
  },
  1: {
    mathsBook: 'NCERT Joyful Mathematics (Math-Magic 1)',
    englishBook: 'NCERT Mridang & Marigold 1',
    hindiBook: 'NCERT सारंगी 1 (Sarangi 1 / Rimjhim 1)',
  },
  2: {
    mathsBook: 'NCERT Joyful Mathematics 2 (Math-Magic 2)',
    englishBook: 'NCERT Mridang & Marigold 2',
    hindiBook: 'NCERT सारंगी 2 (Sarangi 2 / Rimjhim 2)',
  },
  3: {
    mathsBook: 'NCERT Math-Magic 3 (Joyful Maths 3)',
    englishBook: 'NCERT Santoor & Marigold 3',
    hindiBook: 'NCERT वीणा 3 (Veena 3 / Rimjhim 3)',
  },
  4: {
    mathsBook: 'NCERT Math-Magic 4',
    englishBook: 'NCERT Marigold 4',
    hindiBook: 'NCERT रिमझिम 4 (Rimjhim 4)',
  },
  5: {
    mathsBook: 'NCERT Math-Magic 5',
    englishBook: 'NCERT Marigold 5',
    hindiBook: 'NCERT रिमझिम 5 (Rimjhim 5)',
  },
  6: {
    mathsBook: 'NCERT Mathematics 6',
    englishBook: 'NCERT Poorvi & Honeysuckle 6',
    hindiBook: 'NCERT मल्हार 6 (Malhar 6 / Vasant 1)',
  },
};

export const CURRICULUM_CHAPTERS: ChapterLesson[] = [
  // =========================================================================
  // CLASS 1 — NCERT JOYFUL MATHEMATICS
  // =========================================================================
  { id: 'c1_m_01', number: 1, title: 'Finding the Furry Cat (Shapes & Space)', grade: 1, subject: 'maths', icon: '🐱', conceptSummary: 'NCERT: Inside/Outside, Bigger/Smaller, Rolling/Sliding' },
  { id: 'c1_m_02', number: 2, title: 'What is Long? What is Round?', grade: 1, subject: 'maths', icon: '📏', conceptSummary: 'NCERT: Identifying round objects vs long objects' },
  { id: 'c1_m_03', number: 3, title: 'Mango Treats (Numbers 1 to 9)', grade: 1, subject: 'maths', icon: '🥭', conceptSummary: 'NCERT: Counting objects 1 to 9 & concept of Zero' },
  { id: 'c1_m_04', number: 4, title: 'Making Ten (Numbers 10 to 20)', grade: 1, subject: 'maths', icon: '🔟', conceptSummary: 'NCERT: Bundles of 10, Tens and Ones place concept' },
  { id: 'c1_m_05', number: 5, title: 'How Many? (Addition up to 9)', grade: 1, subject: 'maths', icon: '➕', conceptSummary: 'NCERT: Putting together, counting forward' },
  { id: 'c1_m_06', number: 6, title: 'Vegetable Farm (Subtraction up to 9)', grade: 1, subject: 'maths', icon: '🥕', conceptSummary: 'NCERT: Taking away objects, how many left over?' },
  { id: 'c1_m_07', number: 7, title: "Lina's Family (Measurement)", grade: 1, subject: 'maths', icon: '📐', conceptSummary: 'NCERT: Longer/Shorter, Taller/Shorter, Heavier/Lighter' },
  { id: 'c1_m_08', number: 8, title: 'Fun with Numbers (Numbers 21 to 99)', grade: 1, subject: 'maths', icon: '🔢', conceptSummary: 'NCERT: Counting in tens, forward & backward number patterns' },
  { id: 'c1_m_09', number: 9, title: 'Utsav (Patterns)', grade: 1, subject: 'maths', icon: '🟡', conceptSummary: 'NCERT: Shapes, color & sequence pattern rules' },
  { id: 'c1_m_10', number: 10, title: 'How do I Spend My Day? (Time)', grade: 1, subject: 'maths', icon: '⏰', conceptSummary: 'NCERT: Morning, Afternoon, Evening, Night & activity order' },
  { id: 'c1_m_11', number: 11, title: 'How Much Can We Spend? (Money)', grade: 1, subject: 'maths', icon: '💰', conceptSummary: 'NCERT: Recognizing Indian currency coins (₹1, ₹2, ₹5, ₹10) & notes' },
  { id: 'c1_m_12', number: 12, title: 'So Many Toys! (Data Handling)', grade: 1, subject: 'maths', icon: '🧸', conceptSummary: 'NCERT: Sorting, categorizing and counting collections' },

  // CLASS 1 — NCERT MRIDANG & MARIGOLD (ENGLISH)
  { id: 'c1_e_01', number: 1, title: 'My Family & Fun with Letters (Phonics)', grade: 1, subject: 'english', icon: '🔤', conceptSummary: 'NCERT: Letter sounds A-Z, beginning sounds' },
  { id: 'c1_e_02', number: 2, title: 'Picture Reading & Naming Words (Nouns)', grade: 1, subject: 'english', icon: '🐶', conceptSummary: 'NCERT: Names of animals, birds, fruits & objects' },
  { id: 'c1_e_03', number: 3, title: 'One and Many (Singular & Plural)', grade: 1, subject: 'english', icon: '🍎', conceptSummary: 'NCERT: Adding "-s" to show more than one' },
  { id: 'c1_e_04', number: 4, title: 'Action Words in Play (Verbs)', grade: 1, subject: 'english', icon: '🏃', conceptSummary: 'NCERT: Action verbs (Clap, Jump, Hop, Dance)' },
  { id: 'c1_e_05', number: 5, title: 'Colors & Describing Words (Adjectives)', grade: 1, subject: 'english', icon: '🎨', conceptSummary: 'NCERT: Colors, sizes & shapes (Red, Big, Sweet)' },
  { id: 'c1_e_06', number: 6, title: 'Position Words (In, On, Under)', grade: 1, subject: 'english', icon: '📦', conceptSummary: 'NCERT: Prepositions of place' },
  { id: 'c1_e_07', number: 7, title: 'Pronouns (He, She, It)', grade: 1, subject: 'english', icon: '👦', conceptSummary: 'NCERT: He for boys, She for girls, It for things' },
  { id: 'c1_e_08', number: 8, title: 'Sentence Scramble & Story Words', grade: 1, subject: 'english', icon: '📖', conceptSummary: 'NCERT: Simple 3-word sentences with full stop' },

  // =========================================================================
  // CLASS 2 — NCERT JOYFUL MATHEMATICS 2 & MRIDANG 2
  // =========================================================================
  { id: 'c2_m_01', number: 1, title: 'A Day at the Beach (Counting in Groups)', grade: 2, subject: 'maths', icon: '🏖️', conceptSummary: 'NCERT: Counting in pairs, tens, more than & less than' },
  { id: 'c2_m_02', number: 2, title: 'Shapes Around Us (Rolling & Sliding)', grade: 2, subject: 'maths', icon: '📐', conceptSummary: 'NCERT: 2D & 3D shapes, flat vs curved surfaces' },
  { id: 'c2_m_03', number: 3, title: 'Fun with Numbers (Numbers up to 100)', grade: 2, subject: 'maths', icon: '💯', conceptSummary: 'NCERT: Place value, tens and ones, expanded form' },
  { id: 'c2_m_04', number: 4, title: 'Shadow Story (Addition & Put Together)', grade: 2, subject: 'maths', icon: '➕', conceptSummary: 'NCERT: 2-digit addition without carryover' },
  { id: 'c2_m_05', number: 5, title: 'Playing with Lines (Lines & Shapes)', grade: 2, subject: 'maths', icon: '✏️', conceptSummary: 'NCERT: Standing lines, slanting lines, sleeping lines' },
  { id: 'c2_m_06', number: 6, title: 'Decoration for Festival (Subtraction)', grade: 2, subject: 'maths', icon: '➖', conceptSummary: 'NCERT: 2-digit subtraction stories' },
  { id: 'c2_m_07', number: 7, title: "Rani's Gift (Measurement & Length)", grade: 2, subject: 'maths', icon: '📏', conceptSummary: 'NCERT: Handspans, paces & simple meter measurement' },
  { id: 'c2_m_08', number: 8, title: 'Which Season is it? (Time & Months)', grade: 2, subject: 'maths', icon: '📅', conceptSummary: 'NCERT: Days of the week, 12 months & seasons' },

  { id: 'c2_e_01', number: 1, title: 'Welcome to School (Rhymes & Phonics)', grade: 2, subject: 'english', icon: '🏫', conceptSummary: 'NCERT Mridang: Rhyming words, vowel blends' },
  { id: 'c2_e_02', number: 2, title: 'Picture Fun & Naming Words', grade: 2, subject: 'english', icon: '🖼️', conceptSummary: 'NCERT: Common nouns, places, classroom objects' },
  { id: 'c2_e_03', number: 3, title: 'Action Words & Doing Words (Verbs)', grade: 2, subject: 'english', icon: '🏃', conceptSummary: 'NCERT: Present action words (-ing words)' },
  { id: 'c2_e_04', number: 4, title: 'Pronouns (I, You, We, They)', grade: 2, subject: 'english', icon: '👥', conceptSummary: 'NCERT: Replacing naming words with pronouns' },
  { id: 'c2_e_05', number: 5, title: 'Describing Words (Adjectives & Opposites)', grade: 2, subject: 'english', icon: '✨', conceptSummary: 'NCERT: Opposite word pairs, color & size words' },
  { id: 'c2_e_06', number: 6, title: 'Position Words (Behind, In Front, Next)', grade: 2, subject: 'english', icon: '📍', conceptSummary: 'NCERT: Advanced prepositions of place' },
  { id: 'c2_e_07', number: 7, title: 'Sentences & Question Marks', grade: 2, subject: 'english', icon: '❓', conceptSummary: 'NCERT: Capital letters, full stops and question marks' },

  // =========================================================================
  // CLASS 3 — NCERT MATH-MAGIC 3 & SANTOOR/MARIGOLD 3
  // =========================================================================
  { id: 'c3_m_01', number: 1, title: 'Where to Look From? (2D Views & Shapes)', grade: 3, subject: 'maths', icon: '👁️', conceptSummary: 'NCERT: Top, side, front view of objects & dot grids' },
  { id: 'c3_m_02', number: 2, title: 'Fun with Numbers (Numbers up to 1000)', grade: 3, subject: 'maths', icon: '🔢', conceptSummary: 'NCERT: 3-digit numbers, place values, centuries' },
  { id: 'c3_m_03', number: 3, title: 'Give and Take (Addition & Subtraction)', grade: 3, subject: 'maths', icon: '➕', conceptSummary: 'NCERT: Adding and subtracting 3-digit numbers' },
  { id: 'c3_m_04', number: 4, title: 'Long and Short (Length & Meters)', grade: 3, subject: 'maths', icon: '📏', conceptSummary: 'NCERT: Centimeters, meters, scale measurement' },
  { id: 'c3_m_05', number: 5, title: 'Shapes and Designs (Tangrams & Edges)', grade: 3, subject: 'maths', icon: '📐', conceptSummary: 'NCERT: Edges, corners, tangram puzzles, tiling patterns' },
  { id: 'c3_m_06', number: 6, title: 'Time Goes On (Clocks & Calendars)', grade: 3, subject: 'maths', icon: '⏰', conceptSummary: 'NCERT: Reading clock hands, minutes, years & calendar' },
  { id: 'c3_m_07', number: 7, title: 'Who is Heavier? (Kilograms & Grams)', grade: 3, subject: 'maths', icon: '⚖️', conceptSummary: 'NCERT: Weight comparison, balance scales' },
  { id: 'c3_m_08', number: 8, title: 'How Many Times? (Multiplication)', grade: 3, subject: 'maths', icon: '✖️', conceptSummary: 'NCERT: Multiplication tables, repeated addition' },
  { id: 'c3_m_09', number: 9, title: 'Jugs and Mugs (Litres & Millilitres)', grade: 3, subject: 'maths', icon: '🥛', conceptSummary: 'NCERT: Liquid volume capacity measurement' },
  { id: 'c3_m_10', number: 10, title: 'Rupees and Paise (Money)', grade: 3, subject: 'maths', icon: '💰', conceptSummary: 'NCERT: Notes, coins, adding money bills' },

  { id: 'c3_e_01', number: 1, title: 'Rhyming Words & Phonics', grade: 3, subject: 'english', icon: '🔤', conceptSummary: 'Universal: Rhyming words, vowel sounds & phonics' },
  { id: 'c3_e_02', number: 2, title: 'Common & Proper Nouns', grade: 3, subject: 'english', icon: '🏛️', conceptSummary: 'Universal: Names of specific cities, monuments, persons & capitalization' },
  { id: 'c3_e_03', number: 3, title: 'Singular and Plural (-s, -es, -ies)', grade: 3, subject: 'english', icon: '📚', conceptSummary: 'Universal: Box -> Boxes, Baby -> Babies, Leaf -> Leaves' },
  { id: 'c3_e_04', number: 4, title: 'Helping Verbs (Is, Am, Are, Was, Were)', grade: 3, subject: 'english', icon: '⚙️', conceptSummary: 'Universal: Subject-verb agreement with singular & plural subjects' },
  { id: 'c3_e_05', number: 5, title: 'Adjectives & Degrees of Comparison', grade: 3, subject: 'english', icon: '🌟', conceptSummary: 'Universal: Sweet, sweeter, sweetest & describing words' },
  { id: 'c3_e_06', number: 6, title: 'Prepositions of Time & Place', grade: 3, subject: 'english', icon: '⏳', conceptSummary: 'Universal: At, in, on, under, between, behind' },
  { id: 'c3_e_07', number: 7, title: 'Connecting Words (And, But, Because)', grade: 3, subject: 'english', icon: '🔗', conceptSummary: 'Universal: Conjunctions joining simple sentences' },

  // =========================================================================
  // CLASS 4 — NCERT MATH-MAGIC 4 & MARIGOLD 4
  // =========================================================================
  { id: 'c4_m_01', number: 1, title: 'Building with Bricks (Brick Patterns)', grade: 4, subject: 'maths', icon: '🧱', conceptSummary: 'NCERT: Arch designs, wall patterns, 3D bricks' },
  { id: 'c4_m_02', number: 2, title: 'Long and Short (Kilometers & Meters)', grade: 4, subject: 'maths', icon: '🏃', conceptSummary: 'NCERT: Marathon running, conversion of km and m' },
  { id: 'c4_m_03', number: 3, title: 'A Trip to Bhopal (Word Problems & Estimation)', grade: 4, subject: 'maths', icon: '🚌', conceptSummary: 'NCERT: Bus tickets, boat rides, estimation math' },
  { id: 'c4_m_04', number: 4, title: 'Tick-Tick-Tick (12h vs 24h Clock)', grade: 4, subject: 'maths', icon: '⏱️', conceptSummary: 'NCERT: Railway clocks, timeline of events' },
  { id: 'c4_m_05', number: 5, title: 'The Way The World Looks (3D Perspectives)', grade: 4, subject: 'maths', icon: '🗺️', conceptSummary: 'NCERT: Top view vs side view of classroom & park' },
  { id: 'c4_m_06', number: 6, title: 'The Junk Seller (Currency & Profit)', grade: 4, subject: 'maths', icon: '💰', conceptSummary: 'NCERT: Loans, interest, multiplication with money' },
  { id: 'c4_m_07', number: 7, title: 'Carts and Wheels (Circles & Radius)', grade: 4, subject: 'maths', icon: '🎡', conceptSummary: 'NCERT: Drawing circles, radius, center point' },
  { id: 'c4_m_08', number: 8, title: 'Halves and Quarters (Fractions)', grade: 4, subject: 'maths', icon: '🍕', conceptSummary: 'NCERT: 1/2, 1/4, 3/4 fractional parts' },
  { id: 'c4_m_09', number: 9, title: 'Tables and Shares (Division)', grade: 4, subject: 'maths', icon: '➗', conceptSummary: 'NCERT: Long division with remainders' },
  { id: 'c4_m_10', number: 10, title: 'Fields and Fences (Perimeter & Area)', grade: 4, subject: 'maths', icon: '🌾', conceptSummary: 'NCERT: Boundary length of fields & gardens' },

  { id: 'c4_e_01', number: 1, title: 'Articles & Determiners (A, An, The)', grade: 4, subject: 'english', icon: '🔤', conceptSummary: 'Universal: Vowel sounds, indefinite vs definite articles' },
  { id: 'c4_e_02', number: 2, title: 'Collective & Abstract Nouns', grade: 4, subject: 'english', icon: '🐑', conceptSummary: 'Universal: Flocks, herds, prides, swarms, and abstract quality nouns' },
  { id: 'c4_e_03', number: 3, title: 'Past Tense & Irregular Verbs', grade: 4, subject: 'english', icon: '⚾', conceptSummary: 'Universal: Irregular past tense (caught, flew, wrote, thought)' },
  { id: 'c4_e_04', number: 4, title: 'Adverbs of Manner & Time', grade: 4, subject: 'english', icon: '🐢', conceptSummary: 'Universal: Slowly, quickly, happily, bravely, yesterday, soon' },
  { id: 'c4_e_05', number: 5, title: 'Conjunctions & Compound Sentences', grade: 4, subject: 'english', icon: '🔗', conceptSummary: 'Universal: Although, because, so, while, joining independent clauses' },
  { id: 'c4_e_06', number: 6, title: 'Prepositions & Direction Words', grade: 4, subject: 'english', icon: '🧭', conceptSummary: 'Universal: Across, through, into, toward, around, beside' },

  // =========================================================================
  // CLASS 5 — NCERT MATH-MAGIC 5 & MARIGOLD 5
  // =========================================================================
  { id: 'c5_m_01', number: 1, title: 'The Fish Tale (Large Numbers & Speed)', grade: 5, subject: 'maths', icon: '🐟', conceptSummary: 'NCERT: Lakhs, Crores, Boat speed, Distance calculation' },
  { id: 'c5_m_02', number: 2, title: 'Shapes and Angles (Acute, Right, Obtuse)', grade: 5, subject: 'maths', icon: '📐', conceptSummary: 'NCERT: Angle tester, Clock hand angles, Name angles' },
  { id: 'c5_m_03', number: 3, title: 'How Many Squares? (Area & Perimeter Grids)', grade: 5, subject: 'maths', icon: '⏹️', conceptSummary: 'NCERT: Grid squares, Stamp areas, Footprint areas' },
  { id: 'c5_m_04', number: 4, title: 'Parts and Wholes (Fractions & Equivalent)', grade: 5, subject: 'maths', icon: '🍰', conceptSummary: 'NCERT: Flag fractions, Equivalent fractions, Chocolate sharing' },
  { id: 'c5_m_05', number: 5, title: 'Does it Look the Same? (Symmetry & Rotations)', grade: 5, subject: 'maths', icon: '🦋', conceptSummary: 'NCERT: Mirror lines, 1/2 and 1/4 turns' },
  { id: 'c5_m_06', number: 6, title: 'Multiples and Factors (LCM & HCF)', grade: 5, subject: 'maths', icon: '🔢', conceptSummary: 'NCERT: Common multiples, Factor trees' },
  { id: 'c5_m_07', number: 7, title: 'Tenths and Hundredths (Decimals & Paise)', grade: 5, subject: 'maths', icon: '💰', conceptSummary: 'NCERT: Millimeters to cm, Rupee decimals' },
  { id: 'c5_m_08', number: 8, title: 'Area and its Boundary (Formulas)', grade: 5, subject: 'maths', icon: '📐', conceptSummary: 'NCERT: Area = L × B, Perimeter = 2 × (L + B)' },
  { id: 'c5_m_09', number: 9, title: 'Boxes and Sketches (3D Nets & Cubes)', grade: 5, subject: 'maths', icon: '📦', conceptSummary: 'NCERT: Folding 2D nets into 3D open and closed boxes' },
  { id: 'c5_m_10', number: 10, title: 'How Big? How Heavy? (Volume)', grade: 5, subject: 'maths', icon: '🧊', conceptSummary: 'NCERT: Volume in cubic cm, water displacement' },

  { id: 'c5_e_01', number: 1, title: 'Types of Sentences & Subject-Predicate', grade: 5, subject: 'english', icon: '📝', conceptSummary: 'Universal: Assertive, Interrogative, Imperative, Exclamatory & Subject-Predicate' },
  { id: 'c5_e_02', number: 2, title: 'Nouns: Abstract & Collective Mastery', grade: 5, subject: 'english', icon: '💎', conceptSummary: 'Universal: Forming abstract nouns from adjectives/verbs & advanced collectives' },
  { id: 'c5_e_03', number: 3, title: 'Tenses: Present, Past & Future (Simple & Continuous)', grade: 5, subject: 'english', icon: '⏳', conceptSummary: 'Universal: Present, past, and future tense forms and temporal agreement' },
  { id: 'c5_e_04', number: 4, title: 'Active and Passive Voice', grade: 5, subject: 'english', icon: '🔄', conceptSummary: 'Universal: Identifying doer vs receiver, by-agent, past participles' },
  { id: 'c5_e_05', number: 5, title: 'Idioms, Proverbs & Figurative Language', grade: 5, subject: 'english', icon: '💡', conceptSummary: 'Universal: Colorful idioms, proverbs, similes & metaphors' },
  { id: 'c5_e_06', number: 6, title: 'Punctuation, Quotation Marks & Contractions', grade: 5, subject: 'english', icon: '✍️', conceptSummary: 'Universal: Direct speech inverted commas, apostrophes for possession & contractions' },

  // =========================================================================
  // CLASS 6 — NCERT MATHEMATICS 6 & POORVI/HONEYSUCKLE 6
  // =========================================================================
  { id: 'c6_m_01', number: 1, title: 'Knowing Our Numbers (Lakhs & Roman Numerals)', grade: 6, subject: 'maths', icon: '🏛️', conceptSummary: 'NCERT: Indian & International systems, Roman symbols' },
  { id: 'c6_m_02', number: 2, title: 'Whole Numbers & Number Line', grade: 6, subject: 'maths', icon: '0️⃣', conceptSummary: 'NCERT: Closure, Commutative & Distributive properties' },
  { id: 'c6_m_03', number: 3, title: 'Playing with Numbers (Prime & Composite)', grade: 6, subject: 'maths', icon: '🔢', conceptSummary: 'NCERT: Sieve of Eratosthenes, HCF, LCM' },
  { id: 'c6_m_04', number: 4, title: 'Basic Geometrical Ideas (Points, Lines, Polygons)', grade: 6, subject: 'maths', icon: '📐', conceptSummary: 'NCERT: Rays, Segments, Curves, Triangles, Circles' },
  { id: 'c6_m_05', number: 5, title: 'Integers (Positive & Negative Numbers)', grade: 6, subject: 'maths', icon: '❄️', conceptSummary: 'NCERT: Number line integers, temperature & elevation' },
  { id: 'c6_m_06', number: 6, title: 'Fractions (Operations & Mixed Fractions)', grade: 6, subject: 'maths', icon: '🍰', conceptSummary: 'NCERT: Like/Unlike fractions, addition & subtraction' },
  { id: 'c6_m_07', number: 7, title: 'Decimals & Place Values', grade: 6, subject: 'maths', icon: '💰', conceptSummary: 'NCERT: Tenths, hundredths, thousandths' },
  { id: 'c6_m_08', number: 8, title: 'Data Handling (Tally & Bar Graphs)', grade: 6, subject: 'maths', icon: '📊', conceptSummary: 'NCERT: Organizing data, drawing bar graphs' },
  { id: 'c6_m_09', number: 9, title: 'Mensuration (Perimeter & Area)', grade: 6, subject: 'maths', icon: '📏', conceptSummary: 'NCERT: Regular polygons, squares, rectangles' },
  { id: 'c6_m_10', number: 10, title: 'Algebra (Variables & Expressions)', grade: 6, subject: 'maths', icon: '💡', conceptSummary: 'NCERT: Matchstick patterns, x and y variables' },
  { id: 'c6_m_11', number: 11, title: 'Ratio and Proportion (Unitary Method)', grade: 6, subject: 'maths', icon: '⚖️', conceptSummary: 'NCERT: Comparing quantities, unitary calculations' },

  { id: 'c6_e_01', number: 1, title: 'Nouns & Pronouns (Advanced Cases & Relative Pronouns)', grade: 6, subject: 'english', icon: '💎', conceptSummary: 'Universal: Nominative, objective, possessive cases & relative pronouns (who, which, that)' },
  { id: 'c6_e_02', number: 2, title: 'Kinds of Sentences (Declarative, Question, Exclamatory)', grade: 6, subject: 'english', icon: '📝', conceptSummary: 'Universal: Declarative, Interrogative, Imperative, Exclamatory & transformation' },
  { id: 'c6_e_03', number: 3, title: 'Subject-Verb Agreement', grade: 6, subject: 'english', icon: '🤝', conceptSummary: 'Universal: Singular/Plural subjects, collective subjects, either/neither rules' },
  { id: 'c6_e_04', number: 4, title: 'Verb Tenses (Simple, Continuous, Perfect)', grade: 6, subject: 'english', icon: '⏳', conceptSummary: 'Universal: Present, Past, Future simple, continuous, and perfect tenses' },
  { id: 'c6_e_05', number: 5, title: 'Prepositions and Phrasal Verbs', grade: 6, subject: 'english', icon: '📍', conceptSummary: 'Universal: Prepositions of place/time/direction & common phrasal verbs' },
  { id: 'c6_e_06', number: 6, title: 'Direct and Indirect Speech', grade: 6, subject: 'english', icon: '💬', conceptSummary: 'Universal: Reporting verbs, tense backshift, pronoun changes in reported speech' },
  { id: 'c6_e_07', number: 7, title: 'Active and Passive Voice & Conjunctions', grade: 6, subject: 'english', icon: '🔄', conceptSummary: 'Universal: Active to passive transformation across tenses & coordinating/subordinating conjunctions' },

  // =========================================================================
  // CLASS 1 — NCERT सारंगी 1 (SARANGI 1 / RIMJHIM 1)
  // =========================================================================
  { id: 'c1_h_01', number: 1, title: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)', grade: 1, subject: 'hindi', icon: '👨‍👩‍👧', conceptSummary: 'NCERT सारंगी 1: दो और तीन अक्षर वाले शब्द (घर, जल, कमल)' },
  { id: 'c1_h_02', number: 2, title: 'दादा-दादी (आ की मात्रा - ा)', grade: 1, subject: 'hindi', icon: '👴', conceptSummary: 'NCERT: आ की मात्रा वाले शब्द (आम, कान, बादल, छाता)' },
  { id: 'c1_h_03', number: 3, title: 'रीना का तोता (इ व ई की मात्रा - ि, ी)', grade: 1, subject: 'hindi', icon: '🦜', conceptSummary: 'NCERT: छोटी इ व बड़ी ई की मात्रा में अंतर (दिन, तितली, हाथी)' },
  { id: 'c1_h_04', number: 4, title: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)', grade: 1, subject: 'hindi', icon: '🌙', conceptSummary: 'NCERT: छोटा उ व बड़ा ऊ की मात्रा (गुलाब, सूरज, भालू)' },
  { id: 'c1_h_05', number: 5, title: 'वाह! मेरे खिलौने (ए, ऐ, ओ, औ की मात्रा)', grade: 1, subject: 'hindi', icon: '🧸', conceptSummary: 'NCERT: केला, सैनिक, तोता, खिलौना' },
  { id: 'c1_h_06', number: 6, title: 'नाम वाले शब्द (संज्ञा परिचय)', grade: 1, subject: 'hindi', icon: '🏷️', conceptSummary: 'NCERT: व्यक्तियों, पशु-पक्षियों व वस्तुओं के नाम' },
  { id: 'c1_h_07', number: 7, title: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)', grade: 1, subject: 'hindi', icon: '↔️', conceptSummary: 'NCERT: बड़ा/छोटा, ऊपर/नीचे, दिन/रात' },

  // =========================================================================
  // CLASS 2 — NCERT सारंगी 2 (SARANGI 2 / RIMJHIM 2)
  // =========================================================================
  { id: 'c2_h_01', number: 1, title: 'ऊँट चला (संयुक्त व्यंजन व वर्ण ज्ञान)', grade: 2, subject: 'hindi', icon: '🐪', conceptSummary: 'NCERT सारंगी 2: क्ष, त्र, ज्ञ, श्र व द्वित्व व्यंजन (पत्ता, बिल्ली)' },
  { id: 'c2_h_02', number: 2, title: 'भालू ने खेली फुटबॉल (मात्रा पुनरावृत्ति)', grade: 2, subject: 'hindi', icon: '⚽', conceptSummary: 'NCERT: सभी मात्राओं का सही उच्चारण व वर्तनी' },
  { id: 'c2_h_03', number: 3, title: 'म्याऊँ, म्याऊँ! (नाम वाले शब्द - संज्ञा)', grade: 2, subject: 'hindi', icon: '🐱', conceptSummary: 'NCERT: प्राणी, वस्तु, स्थान के नाम' },
  { id: 'c2_h_04', number: 4, title: 'अधिक बलवान कौन? (विशेषण - कैसा/कितना)', grade: 2, subject: 'hindi', icon: '☀️', conceptSummary: 'NCERT: लाल सेब, ठंडी हवा, मीठा आम' },
  { id: 'c2_h_05', number: 5, title: 'दोस्त की मदद (काम वाले शब्द - क्रिया)', grade: 2, subject: 'hindi', icon: '🤝', conceptSummary: 'NCERT: दौड़ना, पढ़ना, हँसना, खाना' },
  { id: 'c2_h_06', number: 6, title: 'एक और अनेक (वचन - लड़का/लड़के)', grade: 2, subject: 'hindi', icon: '📚', conceptSummary: 'NCERT: एकवचन और बहुवचन की पहचान' },
  { id: 'c2_h_07', number: 7, title: 'स्त्रीलिंग और पुल्लिंग (लिंग पहचान)', grade: 2, subject: 'hindi', icon: '👫', conceptSummary: 'NCERT: राजा/रानी, मोर/मोरनी, लड़का/लड़की' },

  // =========================================================================
  // CLASS 3 — HINDI VYAKARAN & NCERT वीणा 3 / रिमझिम 3
  // =========================================================================
  { id: 'c3_h_01', number: 1, title: 'संज्ञा व उसके भेद (व्यक्तिवाचक व जातिवाचक)', grade: 3, subject: 'hindi', icon: '👦', conceptSummary: 'व्याकरण: व्यक्तिवाचक, जातिवाचक व भाववाचक संज्ञा पहचान' },
  { id: 'c3_h_02', number: 2, title: 'सर्वनाम शब्द (मैं, हम, तुम, वह, वे)', grade: 3, subject: 'hindi', icon: '👥', conceptSummary: 'व्याकरण: पुरुषवाचक सर्वनाम (उत्तम, मध्यम, अन्य पुरुष)' },
  { id: 'c3_h_03', number: 3, title: 'क्रिया व काल (भूत, वर्तमान, भविष्य)', grade: 3, subject: 'hindi', icon: '⏰', conceptSummary: 'व्याकरण: काम बताने वाले शब्द व तीनों काल (था, है, होगा)' },
  { id: 'c3_h_04', number: 4, title: 'विलोम व पर्यायवाची शब्द', grade: 3, subject: 'hindi', icon: '🔄', conceptSummary: 'व्याकरण: विपरीतार्थक (उलटे) व समानार्थक (पर्याय) शब्द' },
  { id: 'c3_h_05', number: 5, title: 'मुहावरे व लोकोक्तियाँ', grade: 3, subject: 'hindi', icon: '💭', conceptSummary: 'व्याकरण: कान भरना, आँख लगना, फूला न समाना, अँगूठा दिखाना' },
  { id: 'c3_h_06', number: 6, title: 'विराम चिह्न व शुद्ध वर्तनी', grade: 3, subject: 'hindi', icon: '✍️', conceptSummary: 'व्याकरण: पूर्ण विराम (।), प्रश्नवाचक (?), विस्मयादिबोधक (!) व शुद्ध शब्द' },

  // =========================================================================
  // CLASS 4 — HINDI VYAKARAN & NCERT रिमझिम 4
  // =========================================================================
  { id: 'c4_h_01', number: 1, title: 'विशेषण व उसके भेद (गुणवाचक, संख्यावाचक)', grade: 4, subject: 'hindi', icon: '🌟', conceptSummary: 'व्याकरण: गुणवाचक, संख्यावाचक, परिमाणवाचक विशेषण' },
  { id: 'c4_h_02', number: 2, title: 'मुहावरे व लोकोक्तियाँ (प्रयोग व अर्थ)', grade: 4, subject: 'hindi', icon: '👑', conceptSummary: 'व्याकरण: छक्के छुड़ाना, नौ दो ग्यारह होना, फूला न समाना' },
  { id: 'c4_h_03', number: 3, title: 'काल व उसके भेद (भूत, वर्तमान, भविष्य)', grade: 4, subject: 'hindi', icon: '⏰', conceptSummary: 'व्याकरण: तीनों कालों का वाक्य में सही प्रयोग व काल परिवर्तन' },
  { id: 'c4_h_04', number: 4, title: 'लिंग व वचन परिवर्तन के नियम', grade: 4, subject: 'hindi', icon: '👫', conceptSummary: 'व्याकरण: नदी ➔ नदियाँ, दवाई ➔ दवाइयाँ, कवयित्री, विदुषी' },
  { id: 'c4_h_05', number: 5, title: 'विलोम व पर्यायवाची शब्द', grade: 4, subject: 'hindi', icon: '🔄', conceptSummary: 'व्याकरण: बादल, वर्षा, पानी, अग्नि, सूर्य के समानार्थक व विलोम' },
  { id: 'c4_h_06', number: 6, title: 'अनेक शब्दों के लिए एक शब्द', grade: 4, subject: 'hindi', icon: '✍️', conceptSummary: 'व्याकरण: जो खेती करे = किसान, जो कभी न मरे = अमर, आस्तिक' },

  // =========================================================================
  // CLASS 5 — HINDI VYAKARAN & NCERT रिमझिम 5
  // =========================================================================
  { id: 'c5_h_01', number: 1, title: 'कारक व उनके विभक्ति चिह्न (परसर्ग)', grade: 5, subject: 'hindi', icon: '🧶', conceptSummary: 'व्याकरण: कर्ता, कर्म, करण, संप्रदान, अपादान, संबंध, अधिकरण, संबोधन' },
  { id: 'c5_h_02', number: 2, title: 'उपसर्ग व प्रत्यय (पहचान व शब्द निर्माण)', grade: 5, subject: 'hindi', icon: '🌾', conceptSummary: 'व्याकरण: उपसर्ग (सु-, बे-, अन-, दुर्-) और प्रत्यय (-दार, -वान, -ई, -ता)' },
  { id: 'c5_h_03', number: 3, title: 'भाववाचक संज्ञा निर्माण', grade: 5, subject: 'hindi', icon: '🏹', conceptSummary: 'व्याकरण: जातिवाचक संज्ञा, सर्वनाम, विशेषण व क्रिया से भाववाचक संज्ञा बनाना' },
  { id: 'c5_h_04', number: 4, title: 'क्रिया के भेद (सकर्मक व अकर्मक क्रिया)', grade: 5, subject: 'hindi', icon: '🗿', conceptSummary: 'व्याकरण: कर्म की पहचान, क्या/किसे प्रश्न नियम, सकर्मक व अकर्मक क्रिया' },
  { id: 'c5_h_05', number: 5, title: 'मुहावरे, लोकोक्तियाँ व वाक्य प्रयोग', grade: 5, subject: 'hindi', icon: '🧵', conceptSummary: 'व्याकरण: दाँतों तले उँगली दबाना, कमर कसना, आँखें खुलना, लोकोक्ति अर्थ' },
  { id: 'c5_h_06', number: 6, title: 'विराम चिह्न, वर्तनी शुद्धि व वाक्य रचना', grade: 5, subject: 'hindi', icon: '✉️', conceptSummary: 'व्याकरण: अल्पविराम, पूर्णविराम, उद्धरण चिह्न, शुद्ध वर्तनी व वाक्य रचना' },

  // =========================================================================
  // CLASS 6 — HINDI VYAKARAN & NCERT मल्हार 6
  // =========================================================================
  { id: 'c6_h_01', number: 1, title: 'संज्ञा, सर्वनाम व पद परिचय', grade: 6, subject: 'hindi', icon: '🐦', conceptSummary: 'व्याकरण: संज्ञा के भेद, सर्वनाम के 6 भेद व वाक्य में पदों का व्याकरणिक परिचय' },
  { id: 'c6_h_02', number: 2, title: 'विशेषण व उसके भेद (प्रविशेषण सहित)', grade: 6, subject: 'hindi', icon: '🌟', conceptSummary: 'व्याकरण: गुणवाचक, संख्यावाचक, परिमाणवाचक, सार्वनामिक विशेषण व प्रविशेषण' },
  { id: 'c6_h_03', number: 3, title: 'संधि परिचय (स्वर संधि के भेद)', grade: 6, subject: 'hindi', icon: '🤝', conceptSummary: 'व्याकरण: दो वर्णों का मेल, दीर्घ, गुण, वृद्धि, यण व अयादि स्वर संधि नियम' },
  { id: 'c6_h_04', number: 4, title: 'उपसर्ग, प्रत्यय व शब्द निर्माण', grade: 6, subject: 'hindi', icon: '🧩', conceptSummary: 'व्याकरण: तत्सम, तद्भव व विदेशी उपसर्ग-प्रत्यय द्वारा नवीन शब्द रचना' },
  { id: 'c6_h_05', number: 5, title: 'विराम चिह्न व अशुद्ध वाक्य शोधन', grade: 6, subject: 'hindi', icon: '📖', conceptSummary: 'व्याकरण: सभी प्रमुख विराम चिह्न, लिंग, वचन, कारक व पदक्रम अशुद्धि सुधार' },
  { id: 'c6_h_06', number: 6, title: 'समास परिचय व मुहावरे-लोकोक्तियाँ', grade: 6, subject: 'hindi', icon: '⚔️', conceptSummary: 'व्याकरण: तत्पुरुष, द्वंद्व, द्विगु व अव्ययीभाव समास तथा प्रसिद्ध मुहावरे व लोकोक्तियाँ' },

  // =========================================================================
  // LKG (BALVATIKA 2) — PRE-SCHOOL FOUNDATION
  // =========================================================================
  // LKG MATHEMATICS — EXPANDED 30 MICRO-WORKSHEETS (NEP 2020 & JAADUI PITARA)
  // Module 1: Pre-Math Comparisons (Ch 1 - 12)
  { id: 'c_lkg_m_01', number: 1, title: 'Big vs Small', titleHindi: 'बड़ा बनाम छोटा', grade: 'LKG', subject: 'maths', icon: '🐘', conceptSummary: 'Pre-Math: Comparing sizes of animals, fruits, balls and vehicles', conceptSummaryHindi: 'पूर्व-संख्या ज्ञान: जानवरों, फलों और खिलौनों के आकार की तुलना' },
  { id: 'c_lkg_m_02', number: 2, title: 'Tall vs Short', titleHindi: 'लंबा बनाम नाटा', grade: 'LKG', subject: 'maths', icon: '🦒', conceptSummary: 'Pre-Math: Height comparisons with giraffes, trees, buildings and ladders', conceptSummaryHindi: 'ऊंचाई की तुलना: जिराफ़, पेड़, इमारतें और सीढ़ी' },
  { id: 'c_lkg_m_03', number: 3, title: 'Heavy vs Light', titleHindi: 'भारी बनाम हल्का', grade: 'LKG', subject: 'maths', icon: '🧱', conceptSummary: 'Pre-Math: Weight intuition with bricks, leaves, balloons and seesaws', conceptSummaryHindi: 'वज़न की समझ: ईंट, पत्ता, गुब्बारा और सी-सॉ' },
  { id: 'c_lkg_m_04', number: 4, title: 'Long vs Short', titleHindi: 'लंबी और छोटी वस्तुएं', grade: 'LKG', subject: 'maths', icon: '📏', conceptSummary: 'Pre-Math: Length comparisons with trains, snakes, pencils and ropes', conceptSummaryHindi: 'लंबाई की तुलना: रेलगाड़ी, सांप, पेंसिल और रस्सी' },
  { id: 'c_lkg_m_05', number: 5, title: 'Thick vs Thin', titleHindi: 'मोटा बनाम पतला', grade: 'LKG', subject: 'maths', icon: '🌲', conceptSummary: 'Pre-Math: Girth comparisons with tree trunks, candles, books and crayons', conceptSummaryHindi: 'मोटाई की तुलना: पेड़ का तना, मोमबत्ती, किताबें और रंग' },
  { id: 'c_lkg_m_06', number: 6, title: 'Inside vs Outside', titleHindi: 'अंदर बनाम बाहर', grade: 'LKG', subject: 'maths', icon: '📦', conceptSummary: 'Pre-Math: Position concepts with birds in nest, toys in box and fish in bowl', conceptSummaryHindi: 'स्थान की पहचान: घोंसले में चिड़िया, डिब्बे में खिलौने' },
  { id: 'c_lkg_m_07', number: 7, title: 'Top vs Bottom', titleHindi: 'ऊपर बनाम नीचे', grade: 'LKG', subject: 'maths', icon: '🔝', conceptSummary: 'Pre-Math: Vertical placement on trees, slides, stars on top & roots below', conceptSummaryHindi: 'ऊपर और नीचे की स्थिति: पेड़ की चोटी, सी-सॉ, सितारा' },
  { id: 'c_lkg_m_08', number: 8, title: 'Near vs Far', titleHindi: 'पास बनाम दूर', grade: 'LKG', subject: 'maths', icon: '🔍', conceptSummary: 'Pre-Math: Distance intuition with puppy on lap vs Moon in sky', conceptSummaryHindi: 'दूरी की समझ: पास में बैठा पिल्ला, दूर चमकता चाँद' },
  { id: 'c_lkg_m_09', number: 9, title: 'In Front of vs Behind', titleHindi: 'आगे बनाम पीछे', grade: 'LKG', subject: 'maths', icon: '🚶‍♂️', conceptSummary: 'Pre-Math: Relative positioning in lines, hide-and-seek & mirrors', conceptSummaryHindi: 'सापेक्ष स्थिति: कतार में आगे, पेड़ के पीछे छुपना' },
  { id: 'c_lkg_m_10', number: 10, title: 'More vs Less', titleHindi: 'ज्यादा बनाम कम', grade: 'LKG', subject: 'maths', icon: '⚖️', conceptSummary: 'Pre-Math: Quantity comparisons with apples, balloons, juice & stars', conceptSummaryHindi: 'मात्रा की तुलना: सेब, गुब्बारे, रस और सितारे' },
  { id: 'c_lkg_m_11', number: 11, title: 'Same vs Different', titleHindi: 'एक जैसे जोड़े', grade: 'LKG', subject: 'maths', icon: '👯', conceptSummary: 'Pre-Math: Matching identical pairs, footwear sets & spotting differences', conceptSummaryHindi: 'समान जोड़ों की पहचान: मोज़े, जूते और फल' },
  { id: 'c_lkg_m_12', number: 12, title: 'Odd One Out', titleHindi: 'बेमेल की पहचान', grade: 'LKG', subject: 'maths', icon: '🚫', conceptSummary: 'Pre-Math: Logical categorization, finding the item that does not belong', conceptSummaryHindi: 'तार्किक छँटाई: जो समूह से अलग है उसे पहचानना' },

  // Module 2: Numbers 1 to 5 Mastery (Ch 13 - 22)
  { id: 'c_lkg_m_13', number: 13, title: 'Number 1: The Solo Sun & Nose', titleHindi: 'संख्या 1 की पहचान', grade: 'LKG', subject: 'maths', icon: '1️⃣', conceptSummary: 'Number Sense: Deep recognition of 1 Sun, 1 Nose, 1 Moon & digit 1', conceptSummaryHindi: 'संख्या 1 की समझ: एक सूरज, एक नाक, एक चांद' },
  { id: 'c_lkg_m_14', number: 14, title: 'Number 2: The Pair of Eyes & Shoes', titleHindi: 'संख्या 2 की पहचान', grade: 'LKG', subject: 'maths', icon: '2️⃣', conceptSummary: 'Number Sense: Recognition of 2 eyes, 2 ears, shoes pair & 1+1 addition', conceptSummaryHindi: 'संख्या 2 की समझ: दो आंखें, दो कान, जूतों की जोड़ी' },
  { id: 'c_lkg_m_15', number: 15, title: 'Number 3: The Triangle Trio', titleHindi: 'संख्या 3 की पहचान', grade: 'LKG', subject: 'maths', icon: '3️⃣', conceptSummary: 'Number Sense: 3 auto wheels, 3 traffic lights & triangle corners', conceptSummaryHindi: 'संख्या 3 की समझ: तीन पहिए, तीन बत्तियाँ' },
  { id: 'c_lkg_m_16', number: 16, title: 'Number 4: The Four-Legged Chair', titleHindi: 'संख्या 4 की पहचान', grade: 'LKG', subject: 'maths', icon: '4️⃣', conceptSummary: 'Number Sense: 4 chair legs, 4 car wheels, 4 square sides & 4 seasons', conceptSummaryHindi: 'संख्या 4 की समझ: चार पैर, चार पहिए' },
  { id: 'c_lkg_m_17', number: 17, title: 'Number 5: High Five Hand', titleHindi: 'संख्या 5 की पहचान', grade: 'LKG', subject: 'maths', icon: '5️⃣', conceptSummary: 'Number Sense: 5 hand fingers, 5 star points, 5 senses & High Five', conceptSummaryHindi: 'संख्या 5 की समझ: पाँच उंगलियाँ, हाई-फ़ाइव' },
  { id: 'c_lkg_m_18', number: 18, title: 'Finger Counting & Subitizing', titleHindi: 'उंगलियों से गिनती', grade: 'LKG', subject: 'maths', icon: '🖐️', conceptSummary: 'Number Sense: Finger math, instant quantity recognition & gestures', conceptSummaryHindi: 'उंगलियों का गणित: तुरंत संख्या पहचानना' },
  { id: 'c_lkg_m_19', number: 19, title: 'Dice Dots & Dominoes 1 to 5', titleHindi: 'डाइस डॉट्स की पहचान', grade: 'LKG', subject: 'maths', icon: '🎲', conceptSummary: 'Number Sense: Subitizing dice dot patterns from 1 dot to 5 dots', conceptSummaryHindi: 'डाइस के बिंदु देखकर तुरंत संख्या समझना' },
  { id: 'c_lkg_m_20', number: 20, title: 'The Number Train: Counting 1 to 5', titleHindi: 'नंबर ट्रेन: 1 से 5 गिनती', grade: 'LKG', subject: 'maths', icon: '🔢', conceptSummary: 'Number Sense: Forward counting 1 to 5, number song & rocket countdown', conceptSummaryHindi: 'गिनती का क्रम: आगे गिनती और रॉकेट काउंटडाउन' },
  { id: 'c_lkg_m_21', number: 21, title: 'Missing Numbers on the Track (1, 2, ?, 4, 5)', titleHindi: 'छूटी हुई संख्या पहचानो', grade: 'LKG', subject: 'maths', icon: '🚂', conceptSummary: 'Number Sense: Filling missing gaps in 1 to 5 number sequences', conceptSummaryHindi: 'क्रम में छूटी हुई संख्या ढूंढना' },
  { id: 'c_lkg_m_22', number: 22, title: 'Before & After in 1 to 5', titleHindi: 'आगे और पीछे की संख्या', grade: 'LKG', subject: 'maths', icon: '↔️', conceptSummary: 'Number Sense: What comes after, what comes before & in-between (1-5)', conceptSummaryHindi: 'संख्या के पहले, बाद और बीच की पहचान' },

  // Module 3: Shapes & Geometry Intuition (Ch 23 - 27)
  { id: 'c_lkg_m_23', number: 23, title: 'Circle Fun (Round Wheel, Coin & Clock)', titleHindi: 'गोल वृत्त (पहिया, रोटी व सिक्का)', grade: 'LKG', subject: 'maths', icon: '⭕', conceptSummary: 'Geometry: Circular 2D shapes, 0 corners, wheels, rotis, coins & clocks', conceptSummaryHindi: 'आकार: बिना कोने वाला गोल वृत्त, गेंद, घड़ी' },
  { id: 'c_lkg_m_24', number: 24, title: 'Square Fun (Carrom, Window & Box)', titleHindi: 'चौकोर वर्ग (कैरम व खिड़की)', grade: 'LKG', subject: 'maths', icon: '⬛', conceptSummary: 'Geometry: 4 equal sides, 4 corners, carrom boards, bread & dice faces', conceptSummaryHindi: 'आकार: 4 समान भुजाओं वाला चौकोर वर्ग' },
  { id: 'c_lkg_m_25', number: 25, title: 'Triangle Fun (Samosa, Pizza Slice & Party Hat)', titleHindi: 'तिकोना (समोसा व पिज़्ज़ा स्लाइस)', grade: 'LKG', subject: 'maths', icon: '🔺', conceptSummary: 'Geometry: 3 straight sides, 3 corners, samosas, pizza slices & party hats', conceptSummaryHindi: 'आकार: 3 कोने और 3 भुजाओं वाला तिकोना' },
  { id: 'c_lkg_m_26', number: 26, title: 'Rectangle & Shapes Around Us', titleHindi: 'आयत व अन्य आकार', grade: 'LKG', subject: 'maths', icon: '▬', conceptSummary: 'Geometry: 2 long & 2 short sides, doors, smartphones, books & bank notes', conceptSummaryHindi: 'आकार: दरवाज़ा, मोबाइल स्क्रीन, किताब' },
  { id: 'c_lkg_m_27', number: 27, title: 'Rolling vs Sliding', titleHindi: 'लुढ़कना और फिसलना', grade: 'LKG', subject: 'maths', icon: '🔄', conceptSummary: 'Spatial Physics: Round objects roll, flat objects slide, coins & cans do both', conceptSummaryHindi: 'भौतिक समझ: गोल चीजें लुढ़कती हैं, चपटी फिसलती हैं' },

  // Module 4: Colors, Patterns & Olympiad Review (Ch 28 - 30)
  { id: 'c_lkg_m_28', number: 28, title: 'Primary Colors (Red, Yellow, Blue & Green)', titleHindi: 'प्राथमिक रंग (लाल, पीला, नीला व हरा)', grade: 'LKG', subject: 'maths', icon: '🔴', conceptSummary: 'Colors: Red apples, yellow bananas, blue sky, green leaves & color mixing', conceptSummaryHindi: 'रंग: लाल, पीला, नीला और हरा' },
  { id: 'c_lkg_m_29', number: 29, title: 'Repeating AB Patterns', titleHindi: 'पैटर्न समझें (AB पैटर्न)', grade: 'LKG', subject: 'maths', icon: '🧩', conceptSummary: 'Patterns: Alternating color, shape, size & day/night repeating sequences', conceptSummaryHindi: 'पैटर्न: दोहराव वाले रंग, आकार और आकृतियाँ' },
  { id: 'c_lkg_m_30', number: 30, title: 'Super Kid Pre-Math Olympiad', titleHindi: 'सुपर किड मैथ ओलंपियाड', grade: 'LKG', subject: 'maths', icon: '🏆', conceptSummary: 'Mastery: Grand milestone test across all pre-math, number 1-5 & shape skills', conceptSummaryHindi: 'ओलंपियाड टेस्ट: सभी 29 पाठों का महाअभ्यास' },

  // =========================================================================
  // LKG (BALVATIKA 2) ENGLISH — 30 EXPANDED MICRO-WORKSHEETS
  // =========================================================================
  // Module 1: Pre-Writing Strokes & Visual Letter Patterns (Ch 1 - 4)
  { id: 'c_lkg_e_01', number: 1, title: 'Standing & Sleeping Lines (| and —)', titleHindi: 'खड़ी व लेटी रेखाएं (| और —)', grade: 'LKG', subject: 'english', icon: '✏️', conceptSummary: 'Pre-Writing: Identifying straight strokes for letters L, T, H, I, E, F', conceptSummaryHindi: 'पूर्व-लेखन: सीधी रेखाएं और उनसे बनने वाले अक्षर' },
  { id: 'c_lkg_e_02', number: 2, title: 'Slanting Lines & Curves (/ \\ ( ) )', titleHindi: 'तिरछी रेखाएं व घुमाव (/ \\ ( ) )', grade: 'LKG', subject: 'english', icon: '〰️', conceptSummary: 'Pre-Writing: Identifying slants and curves for letters A, V, W, X, C, O', conceptSummaryHindi: 'पूर्व-लेखन: तिरछी रेखाएं और घुमावदार आकृतियाँ' },
  { id: 'c_lkg_e_03', number: 3, title: 'Same vs Different Letters', titleHindi: 'समान व भिन्न अक्षर', grade: 'LKG', subject: 'english', icon: '👯', conceptSummary: 'Visual Discrimination: Matching identical uppercase letter pairs', conceptSummaryHindi: 'दृश्य विभेदीकरण: एक जैसे अक्षरों की जोड़ी मिलाना' },
  { id: 'c_lkg_e_04', number: 4, title: 'Odd Letter Out', titleHindi: 'बेमेल अक्षर पहचानें', grade: 'LKG', subject: 'english', icon: '🚫', conceptSummary: 'Visual Discrimination: Finding the letter that does not belong in a group', conceptSummaryHindi: 'तार्किक छँटाई: समूह से अलग अक्षर को पहचानना' },

  // Module 2: Uppercase Alphabet Journey (A to Z in Bite-Sized Steps) (Ch 5 - 11)
  { id: 'c_lkg_e_05', number: 5, title: 'Letters A, B, C, D', titleHindi: 'अक्षर A, B, C, D', grade: 'LKG', subject: 'english', icon: '🅰️', conceptSummary: 'Letter Recognition: Apple, Ball, Cat, Duck identification and shape', conceptSummaryHindi: 'वर्णमाला: A, B, C, D की पहचान और चित्र संबंध' },
  { id: 'c_lkg_e_06', number: 6, title: 'Letters E, F, G, H', titleHindi: 'अक्षर E, F, G, H', grade: 'LKG', subject: 'english', icon: '🅱️', conceptSummary: 'Letter Recognition: Elephant, Fish, Grapes, Hat identification', conceptSummaryHindi: 'वर्णमाला: E, F, G, H की पहचान और चित्र संबंध' },
  { id: 'c_lkg_e_07', number: 7, title: 'Letters I, J, K, L', titleHindi: 'अक्षर I, J, K, L', grade: 'LKG', subject: 'english', icon: '🔤', conceptSummary: 'Letter Recognition: Igloo, Jug, Kite, Lion identification', conceptSummaryHindi: 'वर्णमाला: I, J, K, L की पहचान और चित्र संबंध' },
  { id: 'c_lkg_e_08', number: 8, title: 'Letters M, N, O, P', titleHindi: 'अक्षर M, N, O, P', grade: 'LKG', subject: 'english', icon: '🔡', conceptSummary: 'Letter Recognition: Mango, Nest, Orange, Parrot identification', conceptSummaryHindi: 'वर्णमाला: M, N, O, P की पहचान और चित्र संबंध' },
  { id: 'c_lkg_e_09', number: 9, title: 'Letters Q, R, S, T', titleHindi: 'अक्षर Q, R, S, T', grade: 'LKG', subject: 'english', icon: '👑', conceptSummary: 'Letter Recognition: Queen, Rabbit, Sun, Tiger identification', conceptSummaryHindi: 'वर्णमाला: Q, R, S, T की पहचान और चित्र संबंध' },
  { id: 'c_lkg_e_10', number: 10, title: 'Letters U, V, W, X', titleHindi: 'अक्षर U, V, W, X', grade: 'LKG', subject: 'english', icon: '☂️', conceptSummary: 'Letter Recognition: Umbrella, Van, Watch, Xylophone identification', conceptSummaryHindi: 'वर्णमाला: U, V, W, X की पहचान और चित्र संबंध' },
  { id: 'c_lkg_e_11', number: 11, title: 'Letters Y & Z and Alphabet Order', titleHindi: 'अक्षर Y, Z व पूरी वर्णमाला', grade: 'LKG', subject: 'english', icon: '🦓', conceptSummary: 'Letter Recognition: Yak, Zebra and forward alphabet sequence', conceptSummaryHindi: 'वर्णमाला: Y, Z और A से Z का सही क्रम' },

  // Module 3: Phonics & Beginning Sound Safari (Ch 12 - 17)
  { id: 'c_lkg_e_12', number: 12, title: 'Beginning Sounds of A, B, C, D', titleHindi: 'प्रारंभिक ध्वनियाँ: A, B, C, D', grade: 'LKG', subject: 'english', icon: '🍎', conceptSummary: 'Phonics: /æ/ for Apple, /b/ for Ball, /k/ for Cat, /d/ for Duck', conceptSummaryHindi: 'ध्वनि ज्ञान: A, B, C, D की प्रारंभिक ध्वनियाँ' },
  { id: 'c_lkg_e_13', number: 13, title: 'Beginning Sounds of E, F, G, H', titleHindi: 'प्रारंभिक ध्वनियाँ: E, F, G, H', grade: 'LKG', subject: 'english', icon: '🥚', conceptSummary: 'Phonics: /e/ for Egg, /f/ for Fish, /g/ for Goat, /h/ for Hat', conceptSummaryHindi: 'ध्वनि ज्ञान: E, F, G, H की प्रारंभिक ध्वनियाँ' },
  { id: 'c_lkg_e_14', number: 14, title: 'Beginning Sounds of I, J, K, L', titleHindi: 'प्रारंभिक ध्वनियाँ: I, J, K, L', grade: 'LKG', subject: 'english', icon: '🪁', conceptSummary: 'Phonics: /ɪ/ for Igloo, /dʒ/ for Jam, /k/ for Kite, /l/ for Leaf', conceptSummaryHindi: 'ध्वनि ज्ञान: I, J, K, L की प्रारंभिक ध्वनियाँ' },
  { id: 'c_lkg_e_15', number: 15, title: 'Beginning Sounds of M, N, O, P', titleHindi: 'प्रारंभिक ध्वनियाँ: M, N, O, P', grade: 'LKG', subject: 'english', icon: '🥭', conceptSummary: 'Phonics: /m/ for Moon, /n/ for Net, /ɒ/ for Orange, /p/ for Pen', conceptSummaryHindi: 'ध्वनि ज्ञान: M, N, O, P की प्रारंभिक ध्वनियाँ' },
  { id: 'c_lkg_e_16', number: 16, title: 'Beginning Sounds of Q, R, S, T', titleHindi: 'प्रारंभिक ध्वनियाँ: Q, R, S, T', grade: 'LKG', subject: 'english', icon: '☀️', conceptSummary: 'Phonics: /kw/ for Queen, /r/ for Ring, /s/ for Sun, /t/ for Tub', conceptSummaryHindi: 'ध्वनि ज्ञान: Q, R, S, T की प्रारंभिक ध्वनियाँ' },
  { id: 'c_lkg_e_17', number: 17, title: 'Beginning Sounds of U to Z', titleHindi: 'प्रारंभिक ध्वनियाँ: U से Z', grade: 'LKG', subject: 'english', icon: '🚐', conceptSummary: 'Phonics: Sounds for U, V, W, X, Y, Z with daily objects', conceptSummaryHindi: 'ध्वनि ज्ञान: U से Z की ध्वनियाँ' },

  // Module 4: Picture-Word Associations & Daily Vocabulary (Ch 18 - 23)
  { id: 'c_lkg_e_18', number: 18, title: 'Animal Friends & Birds', titleHindi: 'पशु और पक्षी', grade: 'LKG', subject: 'english', icon: '🦁', conceptSummary: 'Vocabulary: Lion, Elephant, Dog, Cat, Duck, Owl, Parrot recognition', conceptSummaryHindi: 'शब्दावली: पशु-पक्षियों के अंग्रेज़ी नाम' },
  { id: 'c_lkg_e_19', number: 19, title: 'Animal Sounds & Calls', titleHindi: 'जानवरों की आवाज़ें', grade: 'LKG', subject: 'english', icon: '🐶', conceptSummary: 'Auditory Association: Dog Woofs, Cat Meows, Cow Moos, Lion Roars, Duck Quacks', conceptSummaryHindi: 'ध्वनि चेतना: जानवरों की आवाज़ें (Woof, Meow, Moo)' },
  { id: 'c_lkg_e_20', number: 20, title: 'Fruits & Yummy Vegetables', titleHindi: 'फल और सब्ज़ियाँ', grade: 'LKG', subject: 'english', icon: '🍓', conceptSummary: 'Vocabulary: Apple, Banana, Mango, Grapes, Carrot, Tomato', conceptSummaryHindi: 'शब्दावली: स्वादिष्ट फलों और सब्जियों के नाम' },
  { id: 'c_lkg_e_21', number: 21, title: 'Colors All Around Us', titleHindi: 'हमारे चारों ओर रंग', grade: 'LKG', subject: 'english', icon: '🎨', conceptSummary: 'Visual Concepts: Red, Blue, Yellow, Green, Pink, White, Black', conceptSummaryHindi: 'रंगों के नाम: Red, Blue, Yellow, Green' },
  { id: 'c_lkg_e_22', number: 22, title: 'Parts of My Body', titleHindi: 'शरीर के अंग', grade: 'LKG', subject: 'english', icon: '👀', conceptSummary: 'Vocabulary: Eyes, Ears, Nose, Mouth, Hands, Feet and their functions', conceptSummaryHindi: 'शब्दावली: Eyes, Ears, Nose, Hands की पहचान' },
  { id: 'c_lkg_e_23', number: 23, title: 'Things in My Home & School', titleHindi: 'घर और स्कूल की चीज़ें', grade: 'LKG', subject: 'english', icon: '🎒', conceptSummary: 'Vocabulary: School Bag, Book, Pencil, Table, Chair, Bed, Clock', conceptSummaryHindi: 'शब्दावली: Bag, Book, Pencil, Table' },

  // Module 5: Early Oral Concepts, Rhymes & Opposites (Ch 24 - 28)
  { id: 'c_lkg_e_24', number: 24, title: 'Rhyming Word Fun', titleHindi: 'तुकबंदी वाले शब्द', grade: 'LKG', subject: 'english', icon: '🎵', conceptSummary: 'Phonics Rhymes: Cat - Bat, Sun - Run, Pen - Hen, Frog - Log', conceptSummaryHindi: 'तुकबंदी: समान ध्वनि वाले अंग्रेज़ी शब्द' },
  { id: 'c_lkg_e_25', number: 25, title: 'Everyday Opposites', titleHindi: 'विलोम शब्द (Opposites)', grade: 'LKG', subject: 'english', icon: '🔄', conceptSummary: 'Vocabulary: Hot / Cold, Big / Small, Happy / Sad, Up / Down', conceptSummaryHindi: 'विलोम शब्द: Hot/Cold, Big/Small, Up/Down' },
  { id: 'c_lkg_e_26', number: 26, title: 'Action Words in Play', titleHindi: 'काम बताने वाले शब्द (Action Words)', grade: 'LKG', subject: 'english', icon: '🏃', conceptSummary: 'Early Verbs: Clap, Jump, Run, Sleep, Dance, Eat, Read', conceptSummaryHindi: 'क्रिया शब्द: Clap, Jump, Run, Sleep' },
  { id: 'c_lkg_e_27', number: 27, title: 'Golden Magic Polite Words', titleHindi: 'जादुई शिष्टाचार शब्द', grade: 'LKG', subject: 'english', icon: '✨', conceptSummary: 'Social Manners: Please, Thank You, Sorry, Good Morning, Welcome', conceptSummaryHindi: 'अच्छे संस्कार: Please, Thank You, Sorry का प्रयोग' },
  { id: 'c_lkg_e_28', number: 28, title: 'Position Words with Pictures', titleHindi: 'स्थान बताने वाले शब्द (In, On, Under)', grade: 'LKG', subject: 'english', icon: '📦', conceptSummary: 'Prepositions: In the box, On the table, Under the tree', conceptSummaryHindi: 'स्थान ज्ञान: In, On, Under की सचित्र पहचान' },

  // Module 6: Sequence Mastery & English Olympiad (Ch 29 - 30)
  { id: 'c_lkg_e_29', number: 29, title: 'Alphabet Train & Missing Letters', titleHindi: 'अल्फाबेट ट्रेन व छूटे हुए अक्षर', grade: 'LKG', subject: 'english', icon: '🚂', conceptSummary: 'Sequence: Finding missing letters in A, B, __, D and K, L, __, N sequences', conceptSummaryHindi: 'क्रम ज्ञान: A, B, _, D में छूटा हुआ अक्षर ढूंढना' },
  { id: 'c_lkg_e_30', number: 30, title: 'Super Kid Pre-School English Olympiad', titleHindi: 'सुपर किड इंग्लिश ओलंपियाड', grade: 'LKG', subject: 'english', icon: '🏆', conceptSummary: 'Mastery: Grand milestone test across all letters, phonics, opposites & words', conceptSummaryHindi: 'ओलंपियाड टेस्ट: सभी 29 पाठों का महाअभ्यास' },

  // LKG HINDI - 15 COMPREHENSIVE BALVATIKA 2 CHAPTERS
  { id: 'c_lkg_h_01', number: 1, title: 'स्वर पहचान (अ से ई तक - अनार, आम, इमली, ईख)', grade: 'LKG', subject: 'hindi', icon: '🥭', conceptSummary: 'बाल वाटिका: अ से अनार, आ से आम, इ से इमली, ई से ईख की सचित्र पहचान' },
  { id: 'c_lkg_h_02', number: 2, title: 'स्वर पहचान (उ से औ तक - उल्लू, ऊन, ऋषि)', grade: 'LKG', subject: 'hindi', icon: '🦉', conceptSummary: 'बाल वाटिका: उ से उल्लू, ऊ से ऊन, ऋ से ऋषि, ए से एड़ी, ओ से ओखली पहचान' },
  { id: 'c_lkg_h_03', number: 3, title: 'चित्र देखकर पहला अक्षर पहचानें', grade: 'LKG', subject: 'hindi', icon: '🖼️', conceptSummary: 'बाल वाटिका: दिए गए चित्र को देखकर उसका पहला स्वर अक्षर पहचानना' },
  { id: 'c_lkg_h_04', number: 4, title: 'पशु-पक्षी व उनकी बोली (गाय, बिल्ली, चिड़िया, शेर)', grade: 'LKG', subject: 'hindi', icon: '🐱', conceptSummary: 'बाल वाटिका: परिचित पशु-पक्षियों की पहचान व उनकी आवाजें' },
  { id: 'c_lkg_h_05', number: 5, title: 'रंग, फल व शरीर के अंग (लाल, केला, आँख, कान)', grade: 'LKG', subject: 'hindi', icon: '🍎', conceptSummary: 'बाल वाटिका: प्राथमिक रंग (लाल, पीला, हरा), फल व शरीर के मुख्य अंग' },
  { id: 'c_lkg_h_06', number: 6, title: 'व्यंजन पहचान: क-वर्ग (क, ख, ग, घ - कबूतर, खरगोश, गमला, घर)', grade: 'LKG', subject: 'hindi', icon: '🕊️', conceptSummary: 'बाल वाटिका व्यंजन: क से कबूतर, ख से खरगोश, ग से गमला, घ से घर की सचित्र पहचान' },
  { id: 'c_lkg_h_07', number: 7, title: 'व्यंजन पहचान: च-वर्ग (च, छ, ज, झ - चम्मच, छाता, जग, झंडा)', grade: 'LKG', subject: 'hindi', icon: '🥄', conceptSummary: 'बाल वाटिका व्यंजन: च से चम्मच, छ से छाता, ज से जग, झ से झंडा की सचित्र पहचान' },
  { id: 'c_lkg_h_08', number: 8, title: 'व्यंजन पहचान: ट-वर्ग (ट, ठ, ड, ढ, ण - टमाटर, ठठेरा, डमरू, ढक्कन)', grade: 'LKG', subject: 'hindi', icon: '🍅', conceptSummary: 'बाल वाटिका व्यंजन: ट से टमाटर, ठ से ठठेरा, ड से डमरू, ढ से ढक्कन की सचित्र पहचान' },
  { id: 'c_lkg_h_09', number: 9, title: 'व्यंजन पहचान: त-वर्ग (त, थ, द, ध, न - तितली, थर्मस, दवात, धनुष, नल)', grade: 'LKG', subject: 'hindi', icon: '🦋', conceptSummary: 'बाल वाटिका व्यंजन: त से तितली/तरबूज, थ से थर्मस, द से दवात, ध से धनुष, न से नल पहचान' },
  { id: 'c_lkg_h_10', number: 10, title: 'व्यंजन पहचान: प-वर्ग (प, फ, ब, भ, म - पतंग, फल, बतख, भालू, मछली)', grade: 'LKG', subject: 'hindi', icon: '🪁', conceptSummary: 'बाल वाटिका व्यंजन: प से पतंग, फ से फल, ब से बतख, भ से भालू, म से मछली पहचान' },
  { id: 'c_lkg_h_11', number: 11, title: 'सचित्र व्यंजन खोज (क से म तक पहला अक्षर पहचान)', grade: 'LKG', subject: 'hindi', icon: '🔍', conceptSummary: 'बाल वाटिका सुदृढ़ीकरण: फल, पक्षी व वस्तुओं के चित्र देखकर सही प्रारंभिक व्यंजन पहचानना' },
  { id: 'c_lkg_h_12', number: 12, title: 'भारतीय पशु-पक्षियों की आवाजें (म्याऊं, भौं-भौं, चीं-चीं, काँव-काँव)', grade: 'LKG', subject: 'hindi', icon: '🔊', conceptSummary: 'ध्वनि चेतना: बिल्ली, कुत्ता, चिड़िया, कौआ, गाय, मेंढक की आवाजों की पहचान' },
  { id: 'c_lkg_h_13', number: 13, title: 'जंगली जानवर व जलचर (शेर, हाथी, बंदर, मछली, बतख)', grade: 'LKG', subject: 'hindi', icon: '🦁', conceptSummary: 'आसपास की प्रकृति: जंगल के राजा शेर, बड़े हाथी, नटखट बंदर व पानी में तैरती मछली' },
  { id: 'c_lkg_h_14', number: 14, title: 'रंग, आकार व प्रकृति (लाल, पीला, हरा, नीला, गोल, चौकोर, सूरज)', grade: 'LKG', subject: 'hindi', icon: '🌈', conceptSummary: 'दृश्य विभेदीकरण: रंगों के नाम, गोल व चौकोर आकार तथा प्रकृति के दृश्य' },
  { id: 'c_lkg_h_15', number: 15, title: 'हमारे अंग, स्वास्थ्य व अच्छी आदतें (हाथ धोना, नमस्ते, दांत साफ)', grade: 'LKG', subject: 'hindi', icon: '🌸', conceptSummary: 'संस्कार व स्वच्छता: शरीर के अंग, हाथ धोना, बड़ों को नमस्ते और प्रतिदिन दांत साफ करना' },

  // =========================================================================
  // UKG (BALVATIKA 3) — KINDERGARTEN FOUNDATION
  // =========================================================================
  // UKG MATHEMATICS
  { id: 'c_ukg_m_01', number: 1, title: 'Numbers 1 to 10 (Counting & Number Names)', grade: 'UKG', subject: 'maths', icon: '🔟', conceptSummary: 'Kindergarten: Counting 1 to 10, spelling One to Ten, matching quantities' },
  { id: 'c_ukg_m_02', number: 2, title: 'Numbers 11 to 20 & Missing Numbers', grade: 'UKG', subject: 'maths', icon: '🔢', conceptSummary: 'Kindergarten: Counting 11 to 20, finding missing numbers in sequences' },
  { id: 'c_ukg_m_03', number: 3, title: 'Before, After & In-Between Numbers', grade: 'UKG', subject: 'maths', icon: '↔️', conceptSummary: 'Kindergarten: What comes after, before, and between numbers up to 20' },
  { id: 'c_ukg_m_04', number: 4, title: 'Picture Addition (Counting Together up to 10)', grade: 'UKG', subject: 'maths', icon: '➕', conceptSummary: 'Kindergarten: Adding two sets of objects using picture counters (🍎 + 🍎)' },
  { id: 'c_ukg_m_05', number: 5, title: 'Picture Subtraction (Taking Away up to 10)', grade: 'UKG', subject: 'maths', icon: '➖', conceptSummary: 'Kindergarten: Taking away objects from a set using picture counters (🎈 - 🎈)' },

  // UKG ENGLISH
  { id: 'c_ukg_e_01', number: 1, title: 'Uppercase & Lowercase Matching (Aa to Zz)', grade: 'UKG', subject: 'english', icon: '🔠', conceptSummary: 'Kindergarten: Matching capital letters to small letters (Aa, Bb, Cc...)' },
  { id: 'c_ukg_e_02', number: 2, title: '3-Letter CVC Words (Cat, Bat, Pen, Sun)', grade: 'UKG', subject: 'english', icon: '🐱', conceptSummary: 'Kindergarten: Blending CVC phonics words (a, e, i, o, u short vowel sounds)' },
  { id: 'c_ukg_e_03', number: 3, title: 'Rhyming Words (Pan-Fan, Dog-Log, Pin-Tin)', grade: 'UKG', subject: 'english', icon: '🎵', conceptSummary: 'Kindergarten: Identifying words with identical ending sounds' },
  { id: 'c_ukg_e_04', number: 4, title: 'First Sight Words (is, the, in, on, under)', grade: 'UKG', subject: 'english', icon: '📖', conceptSummary: 'Kindergarten: High-frequency sight words and basic prepositions with pictures' },
  { id: 'c_ukg_e_05', number: 5, title: 'Opposites & Picture Reading (Hot/Cold, Up/Down)', grade: 'UKG', subject: 'english', icon: '🔄', conceptSummary: 'Kindergarten: Everyday antonym pairs (Hot/Cold, Happy/Sad, Big/Small)' },

  // UKG HINDI
  { id: 'c_ukg_h_01', number: 1, title: 'संपूर्ण स्वर (अ से अः की पहचान)', grade: 'UKG', subject: 'hindi', icon: '🍇', conceptSummary: 'बाल वाटिका 3: सभी 13 स्वरों का सही क्रम, मौखिक उच्चारण व सचित्र पहचान' },
  { id: 'c_ukg_h_02', number: 2, title: 'व्यंजन पहचान (क से ङ - कबूतर, खरगोश, गमला, घर)', grade: 'UKG', subject: 'hindi', icon: '🕊️', conceptSummary: 'बाल वाटिका 3: क, ख, ग, घ, ङ की पहचान, उच्चारण व सचित्र संबंध' },
  { id: 'c_ukg_h_03', number: 3, title: 'व्यंजन पहचान (च से ज्ञ - चम्मच, टमाटर, पतंग, नल)', grade: 'UKG', subject: 'hindi', icon: '🪁', conceptSummary: 'बाल वाटिका 3: च से ज्ञ तक के प्रमुख व्यंजनों की सचित्र पहचान' },
  { id: 'c_ukg_h_04', number: 4, title: 'दो अक्षर वाले सरल अमात्रिक शब्द (घर, जल, फल, बस)', grade: 'UKG', subject: 'hindi', icon: '🏠', conceptSummary: 'बाल वाटिका 3: बिना मात्रा के दो अक्षरों को जोड़कर सरल शब्द पढ़ना' },
  { id: 'c_ukg_h_05', number: 5, title: 'चित्र मिलान व सरल विलोम (दिन/रात, बड़ा/छोटा)', grade: 'UKG', subject: 'hindi', icon: '☀️', conceptSummary: 'बाल वाटिका 3: चित्रों का शब्दों से मिलान व बुनियादी विलोम शब्द' },
];

export const getChaptersForGradeSubject = (grade: Grade, subject: Subject): ChapterLesson[] => {
  const filtered = CURRICULUM_CHAPTERS.filter((c) => c.grade === grade && c.subject === subject);
  if (filtered.length > 0) return filtered;

  const subjectLabel = subject === 'maths' ? 'Mathematics' : subject === 'english' ? 'English' : 'Hindi (हिंदी)';
  const subjectIcon = subject === 'maths' ? '📐' : subject === 'english' ? '📚' : '🇮🇳';

  return [
    {
      id: `ncert_${grade}_${subject}_1`,
      number: 1,
      title: `${subjectLabel} Foundation (${typeof grade === 'number' ? `Class ${grade}` : grade})`,
      grade,
      subject,
      icon: subjectIcon,
      conceptSummary: typeof grade === 'number' ? `Official NCERT textbook syllabus for Class ${grade}` : `Foundational syllabus for ${grade}`,
    },
  ];
};
