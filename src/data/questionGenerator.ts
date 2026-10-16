import { Question, Grade, Subject, QuestionType } from '../types';
import { MOCK_QUESTIONS } from './mockQuestions';

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Templates and banks to guarantee every 10-minute quiz session has exactly 10 rich questions
export const generateQuestionsForSession = (
  grade: Grade,
  subject: Subject,
  chapterTitle?: string
): Question[] => {
  const TARGET_COUNT = 10;

  // 1. Gather curated matching questions from MOCK_QUESTIONS
  let matchedQuestions: Question[] = [];
  if (chapterTitle) {
    const cleanChapter = chapterTitle.toLowerCase().replace(/[^a-z0-9\u0900-\u097F\s]/g, ' ').trim();
    const chapterWords = cleanChapter.split(/\s+/).filter(w => w.length > 2);
    matchedQuestions = MOCK_QUESTIONS.filter((q) => {
      if (q.grade !== grade || q.subject !== subject) return false;
      const qChapter = q.chapter.toLowerCase().replace(/[^a-z0-9\u0900-\u097F\s]/g, ' ').trim();
      if (cleanChapter.includes(qChapter.slice(0, 8)) || qChapter.includes(cleanChapter.slice(0, 8))) return true;
      const qWords = qChapter.split(/\s+/).filter(w => w.length > 2);
      const overlap = chapterWords.filter(w => qWords.includes(w));
      return overlap.length >= 1;
    });
  }

  // Fallback if no chapter match: get all grade and subject questions
  if (matchedQuestions.length === 0) {
    matchedQuestions = MOCK_QUESTIONS.filter(
      (q) => q.grade === grade && q.subject === subject
    );
  }

  // Shuffle matched questions to provide dynamic variety for "Need Extra Practice"
  matchedQuestions = shuffleArray(matchedQuestions);

  // 2. Generate supplemental questions tailored to the subject and grade
  const synthesizedQuestions = getSynthesizedBank(grade, subject, chapterTitle);

  // Combine matched with synthesized, avoiding duplicates by id
  const pool: Question[] = [...matchedQuestions];
  const usedIds = new Set(pool.map((q) => q.id));

  for (const q of synthesizedQuestions) {
    if (!usedIds.has(q.id)) {
      pool.push(q);
      usedIds.add(q.id);
    }
  }

  // If still under 10, fill from general subject pool
  if (pool.length < TARGET_COUNT) {
    const generalPool = MOCK_QUESTIONS.filter((q) => q.subject === subject);
    for (const q of generalPool) {
      if (!usedIds.has(q.id)) {
        pool.push({
          ...q,
          id: `${q.id}_sup_${Math.random().toString(36).substring(2, 6)}`,
          grade,
        });
        usedIds.add(q.id);
        if (pool.length >= TARGET_COUNT) break;
      }
    }
  }

  // Return exactly TARGET_COUNT (10) questions
  return pool.slice(0, TARGET_COUNT);
};

// Comprehensive curriculum bank providing full 10 questions for any grade and subject
function getSynthesizedBank(
  grade: Grade,
  subject: Subject,
  chapterTitle?: string
): Question[] {
  const ch = chapterTitle || `Class ${grade} NCERT ${subject}`;

  if (subject === 'maths') {
    return getMathsQuestionBank(grade, ch);
  } else if (subject === 'english') {
    return getEnglishQuestionBank(grade, ch);
  } else {
    return getHindiQuestionBank(grade, ch);
  }
}

// ============================================================================
// MATHEMATICS EXPANSION BANK (10 questions per grade/topic)
// ============================================================================
function getMathsQuestionBank(grade: Grade, chapter: string): Question[] {
  if (grade === 1) {
    return [
      {
        id: 'gen_m1_01',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Counting & Numbers 1-10',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Count the red apples: 🍎 🍎 🍎 🍎 🍎. How many apples are there?',
        visualEmoji: '🍎',
        payload: {
          options: [
            { id: 'o1', text: '5 Apples', isCorrect: true },
            { id: 'o2', text: '4 Apples', isCorrect: false },
            { id: 'o3', text: '6 Apples', isCorrect: false },
          ],
        },
        explanation: 'Count one by one: 1, 2, 3, 4, 5 apples! 🍎',
        points: 10,
      },
      {
        id: 'gen_m1_02',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Shapes & Space: Bigger vs Smaller',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Which of these animals is BIGGER? 🐘 or 🐁',
        visualEmoji: '🐘',
        payload: {
          options: [
            { id: 'o1', text: 'Elephant 🐘 (Bigger)', isCorrect: true },
            { id: 'o2', text: 'Mouse 🐁 (Smaller)', isCorrect: false },
          ],
        },
        explanation: 'NCERT Ch 1: An elephant 🐘 is much bigger than a tiny mouse 🐁!',
        points: 10,
      },
      {
        id: 'gen_m1_03',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Addition up to 9',
        difficulty: 'easy',
        type: 'fill_blank',
        question: 'Add the stars together:',
        visualEmoji: '⭐',
        payload: {
          correctAnswer: '7',
          wordBank: ['7', '6', '8', '5'],
          displayTemplate: '3 stars + 4 stars = [BLANK] stars.',
        },
        explanation: '3 + 4 = 7! Count forward: 4, 5, 6, 7! ⭐',
        points: 10,
      },
      {
        id: 'gen_m1_04',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Number Matching',
        difficulty: 'easy',
        type: 'match_pairs',
        question: 'Match the number digits with their word names:',
        visualEmoji: '🔢',
        payload: {
          pairs: [
            { id: 'p1', left: '3', right: 'Three' },
            { id: 'p2', left: '7', right: 'Seven' },
            { id: 'p3', left: '9', right: 'Nine' },
          ],
        },
        explanation: '3 is Three, 7 is Seven, and 9 is Nine!',
        points: 15,
      },
      {
        id: 'gen_m1_05',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Subtraction (Taking away)',
        difficulty: 'easy',
        type: 'mcq',
        question: 'You have 6 balloons 🎈. 2 balloons fly away 💨. How many balloons are left?',
        visualEmoji: '🎈',
        payload: {
          options: [
            { id: 'o1', text: '4 balloons', isCorrect: true },
            { id: 'o2', text: '5 balloons', isCorrect: false },
            { id: 'o3', text: '8 balloons', isCorrect: false },
          ],
        },
        explanation: '6 - 2 = 4 balloons left in hand! 🎈',
        points: 10,
      },
      {
        id: 'gen_m1_06',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Patterns: What comes next?',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Look at the pattern: 🟡 🔵 🟡 🔵 🟡. What comes next?',
        visualEmoji: '🔵',
        payload: {
          options: [
            { id: 'o1', text: 'Blue Circle 🔵', isCorrect: true },
            { id: 'o2', text: 'Yellow Circle 🟡', isCorrect: false },
            { id: 'o3', text: 'Red Square 🟥', isCorrect: false },
          ],
        },
        explanation: 'The color pattern alternates: Yellow, Blue, Yellow, Blue, Yellow, BLUE! 🔵',
        points: 10,
      },
      {
        id: 'gen_m1_07',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Number Ordering',
        difficulty: 'easy',
        type: 'drag_order',
        question: 'Arrange the numbers from smallest to biggest:',
        visualEmoji: '📏',
        payload: {
          tokens: ['2', '5', '8'],
          scrambled: ['8', '2', '5'],
          correctSequence: ['2', '5', '8'],
        },
        explanation: 'Smallest to biggest order is: 2, then 5, then 8!',
        points: 10,
      },
      {
        id: 'gen_m1_08',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Measurement: Heavier vs Lighter',
        difficulty: 'easy',
        type: 'mcq',
        question: 'Which item is HEAVIER? 🍉 Watermelon or 🍓 Strawberry?',
        visualEmoji: '🍉',
        payload: {
          options: [
            { id: 'o1', text: 'Watermelon 🍉 (Heavier)', isCorrect: true },
            { id: 'o2', text: 'Strawberry 🍓 (Lighter)', isCorrect: false },
          ],
        },
        explanation: 'A big watermelon 🍉 is much heavier than a small strawberry 🍓!',
        points: 10,
      },
      {
        id: 'gen_m1_09',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Indian Currency: Money',
        difficulty: 'easy',
        type: 'fill_blank',
        question: 'Add the rupee coins:',
        visualEmoji: '🪙',
        payload: {
          correctAnswer: '₹7',
          wordBank: ['₹7', '₹6', '₹8', '₹10'],
          displayTemplate: '₹5 coin + ₹2 coin = [BLANK]',
        },
        explanation: 'NCERT Ch 11 Money: 5 + 2 = ₹7! 🪙',
        points: 10,
      },
      {
        id: 'gen_m1_10',
        grade: 1,
        subject: 'maths',
        chapter,
        concept: 'Zero Concept',
        difficulty: 'easy',
        type: 'mcq',
        question: 'A basket had 3 mangoes 🥭. You ate all 3 mangoes! How many are left?',
        visualEmoji: '🥭',
        payload: {
          options: [
            { id: 'o1', text: '0 (Zero mangoes left)', isCorrect: true },
            { id: 'o2', text: '1 mango left', isCorrect: false },
            { id: 'o3', text: '3 mangoes left', isCorrect: false },
          ],
        },
        explanation: '3 - 3 = 0. When nothing remains, it is ZERO (शून्य)!',
        points: 10,
      },
    ];
  }

  // Higher Grades Maths (Classes 2 to 6)
  return [
    {
      id: `gen_m_${grade}_01`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Place Value & Number Systems',
      difficulty: 'medium',
      type: 'mcq',
      question: `In the number ${grade * 123}, what place is the digit "${grade}" in?`,
      visualEmoji: '🔢',
      payload: {
        options: [
          { id: 'o1', text: grade >= 4 ? 'Hundreds / Thousands place' : 'Tens / Hundreds place', isCorrect: true },
          { id: 'o2', text: 'Ones place', isCorrect: false },
          { id: 'o3', text: 'Tenths place', isCorrect: false },
        ],
      },
      explanation: 'Place value increases by 10x moving left: Ones, Tens, Hundreds, Thousands!',
      points: 10,
    },
    {
      id: `gen_m_${grade}_02`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Multiplication & Tables',
      difficulty: 'medium',
      type: 'fill_blank',
      question: `Calculate: ${grade + 2} × 4 = ?`,
      visualEmoji: '✖️',
      payload: {
        correctAnswer: `${(grade + 2) * 4}`,
        wordBank: [`${(grade + 2) * 4}`, `${(grade + 2) * 3}`, `${(grade + 2) * 5}`, '20'],
        displayTemplate: `${grade + 2} × 4 = [BLANK]`,
      },
      explanation: `Multiplication is repeated addition: ${(grade + 2) * 4}!`,
      points: 10,
    },
    {
      id: `gen_m_${grade}_03`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Shapes & Geometry',
      difficulty: 'easy',
      type: 'match_pairs',
      question: 'Match the geometric shape with the number of its sides:',
      visualEmoji: '📐',
      payload: {
        pairs: [
          { id: 'p1', left: 'Triangle 🔺', right: '3 Sides' },
          { id: 'p2', left: 'Rectangle 🟦', right: '4 Sides' },
          { id: 'p3', left: 'Circle ⭕', right: '0 Straight Sides' },
        ],
      },
      explanation: 'Triangle has 3 sides, rectangle has 4 sides, circle has curved boundary!',
      points: 15,
    },
    {
      id: `gen_m_${grade}_04`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Fractions & Division',
      difficulty: 'medium',
      type: 'mcq',
      question: 'A pizza 🍕 is cut into 4 equal slices. You eat 1 slice. What fraction did you eat?',
      visualEmoji: '🍕',
      payload: {
        options: [
          { id: 'o1', text: '1/4 (One-fourth)', isCorrect: true },
          { id: 'o2', text: '1/2 (Half)', isCorrect: false },
          { id: 'o3', text: '3/4 (Three-fourths)', isCorrect: false },
        ],
      },
      explanation: '1 slice out of 4 total equal slices = 1/4 fraction!',
      points: 10,
    },
    {
      id: `gen_m_${grade}_05`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Measurement & Unit Conversions',
      difficulty: 'medium',
      type: 'fill_blank',
      question: 'Complete the NCERT measurement conversion:',
      visualEmoji: '📏',
      payload: {
        correctAnswer: '100',
        wordBank: ['100', '10', '1000', '50'],
        displayTemplate: '1 Meter = [BLANK] Centimeters (cm).',
      },
      explanation: 'Standard metric measurement: 1 m = 100 cm, 1 km = 1000 m!',
      points: 10,
    },
    {
      id: `gen_m_${grade}_06`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Time & Clocks',
      difficulty: 'medium',
      type: 'mcq',
      question: 'How many minutes are there in 2 full hours? ⏰',
      visualEmoji: '⏰',
      payload: {
        options: [
          { id: 'o1', text: '120 Minutes', isCorrect: true },
          { id: 'o2', text: '60 Minutes', isCorrect: false },
          { id: 'o3', text: '100 Minutes', isCorrect: false },
        ],
      },
      explanation: '1 hour = 60 minutes. Therefore, 2 hours = 60 × 2 = 120 minutes! ⏰',
      points: 10,
    },
    {
      id: `gen_m_${grade}_07`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Money & Word Problems',
      difficulty: 'medium',
      type: 'mcq',
      question: 'A pencil costs ₹5 and a notebook costs ₹25. What is the total cost? 📓',
      visualEmoji: '💰',
      payload: {
        options: [
          { id: 'o1', text: '₹30', isCorrect: true },
          { id: 'o2', text: '₹20', isCorrect: false },
          { id: 'o3', text: '₹35', isCorrect: false },
        ],
      },
      explanation: '₹25 + ₹5 = ₹30 total bill!',
      points: 10,
    },
    {
      id: `gen_m_${grade}_08`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Perimeter & Boundaries',
      difficulty: 'hard',
      type: 'fill_blank',
      question: 'Calculate perimeter of a square with side 5 cm:',
      visualEmoji: '⏹️',
      payload: {
        correctAnswer: '20',
        wordBank: ['20', '25', '15', '10'],
        displayTemplate: 'Perimeter = 4 × 5 cm = [BLANK] cm.',
      },
      explanation: 'Perimeter is total boundary length = 4 × side = 4 × 5 = 20 cm!',
      points: 15,
    },
    {
      id: `gen_m_${grade}_09`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Weight & Capacity',
      difficulty: 'medium',
      type: 'match_pairs',
      question: 'Match the quantity with its correct metric unit:',
      visualEmoji: '⚖️',
      payload: {
        pairs: [
          { id: 'w1', left: 'Bag of Rice 🌾', right: 'Kilograms (kg)' },
          { id: 'w2', left: 'Bottle of Milk 🥛', right: 'Litres (L)' },
          { id: 'w3', left: 'Medicine Drops 💧', right: 'Millilitres (mL)' },
        ],
      },
      explanation: 'Solids weighed in kg/g, liquids measured in L/mL!',
      points: 15,
    },
    {
      id: `gen_m_${grade}_10`,
      grade,
      subject: 'maths',
      chapter,
      concept: 'Number Patterns & Logic',
      difficulty: 'medium',
      type: 'drag_order',
      question: 'Arrange the pattern sequence in correct order:',
      visualEmoji: '🔢',
      payload: {
        tokens: ['10', '20', '30', '40'],
        scrambled: ['30', '10', '40', '20'],
        correctSequence: ['10', '20', '30', '40'],
      },
      explanation: 'Skip counting by 10s: 10, 20, 30, 40!',
      points: 10,
    },
  ];
}

// ============================================================================
// ENGLISH EXPANSION BANK (10 questions per grade/topic)
// ============================================================================
function getEnglishQuestionBank(grade: Grade, chapter: string): Question[] {
  return [
    {
      id: `gen_e_${grade}_01`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Nouns (Naming Words)',
      difficulty: 'easy',
      type: 'mcq',
      question: 'Which word in this sentence is a NOUN (naming word): "The cute puppy barked happily."? 🐶',
      visualEmoji: '🐶',
      payload: {
        options: [
          { id: 'o1', text: 'Puppy (Noun - Animal name)', isCorrect: true },
          { id: 'o2', text: 'Happily (Adverb)', isCorrect: false },
          { id: 'o3', text: 'Barked (Verb)', isCorrect: false },
        ],
      },
      explanation: 'A noun is a naming word for a person, place, animal, or thing (puppy)!',
      points: 10,
    },
    {
      id: `gen_e_${grade}_02`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Singular & Plural',
      difficulty: 'easy',
      type: 'fill_blank',
      question: 'Convert singular to plural:',
      visualEmoji: '📚',
      payload: {
        correctAnswer: 'Boxes',
        wordBank: ['Boxes', 'Boxs', 'Boxies'],
        displayTemplate: 'One Box 📦 -> Three [BLANK].',
      },
      explanation: 'Words ending in -x, -ch, -sh take "-es" in plural: Box -> Boxes!',
      points: 10,
    },
    {
      id: `gen_e_${grade}_03`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Opposites (Antonyms)',
      difficulty: 'easy',
      type: 'match_pairs',
      question: 'Match each word with its correct opposite:',
      visualEmoji: '↔️',
      payload: {
        pairs: [
          { id: 'ep1', left: 'Hot ☀️', right: 'Cold ❄️' },
          { id: 'ep2', left: 'Fast 🐆', right: 'Slow 🐢' },
          { id: 'ep3', left: 'Happy 😊', right: 'Sad 😢' },
        ],
      },
      explanation: 'Hot opposite is Cold, Fast is Slow, and Happy is Sad!',
      points: 15,
    },
    {
      id: `gen_e_${grade}_04`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Action Words (Verbs)',
      difficulty: 'easy',
      type: 'mcq',
      question: 'Identify the ACTION WORD (Verb): "Rohan dances on the stage." 🕺',
      visualEmoji: '🕺',
      payload: {
        options: [
          { id: 'o1', text: 'dances (Action verb)', isCorrect: true },
          { id: 'o2', text: 'stage (Noun)', isCorrect: false },
          { id: 'o3', text: 'Rohan (Proper noun)', isCorrect: false },
        ],
      },
      explanation: '"Dances" is the action that Rohan is performing!',
      points: 10,
    },
    {
      id: `gen_e_${grade}_05`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Pronouns',
      difficulty: 'medium',
      type: 'fill_blank',
      question: 'Choose the correct pronoun for a girl:',
      visualEmoji: '👧',
      payload: {
        correctAnswer: 'She',
        wordBank: ['She', 'He', 'It'],
        displayTemplate: 'Ananya is reading a book. [BLANK] loves fairy tales.',
      },
      explanation: 'We use the pronoun "She" for girls and women!',
      points: 10,
    },
    {
      id: `gen_e_${grade}_06`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Prepositions of Place',
      difficulty: 'medium',
      type: 'mcq',
      question: 'The bird is sitting [BLANK] the tree branch. 🐦',
      visualEmoji: '🌳',
      payload: {
        options: [
          { id: 'o1', text: 'on the branch', isCorrect: true },
          { id: 'o2', text: 'under the branch', isCorrect: false },
          { id: 'o3', text: 'between the branch', isCorrect: false },
        ],
      },
      explanation: 'The bird rests ON top of the tree branch!',
      points: 10,
    },
    {
      id: `gen_e_${grade}_07`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Sentence Scramble',
      difficulty: 'medium',
      type: 'drag_order',
      question: 'Arrange the scrambled words to form a correct sentence:',
      visualEmoji: '🎒',
      payload: {
        tokens: ['I', 'love', 'my', 'school'],
        scrambled: ['school', 'my', 'love', 'I'],
        correctSequence: ['I', 'love', 'my', 'school'],
      },
      explanation: 'Subject + Verb + Object: "I love my school."',
      points: 10,
    },
    {
      id: `gen_e_${grade}_08`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Adjectives (Describing Words)',
      difficulty: 'easy',
      type: 'mcq',
      question: '"The giant elephant drank cold water." Which word is an ADJECTIVE describing the water? 💧',
      visualEmoji: '🐘',
      payload: {
        options: [
          { id: 'o1', text: 'cold (Describes the water)', isCorrect: true },
          { id: 'o2', text: 'drank (Verb)', isCorrect: false },
          { id: 'o3', text: 'elephant (Noun)', isCorrect: false },
        ],
      },
      explanation: '"Cold" describes how the water feels!',
      points: 10,
    },
    {
      id: `gen_e_${grade}_09`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Connecting Words (Conjunctions)',
      difficulty: 'medium',
      type: 'fill_blank',
      question: 'Join the two ideas using the correct conjunction:',
      visualEmoji: '🌧️',
      payload: {
        correctAnswer: 'because',
        wordBank: ['because', 'or', 'but'],
        displayTemplate: 'I carried an umbrella [BLANK] it was raining heavily.',
      },
      explanation: '"Because" shows the reason why the umbrella was carried!',
      points: 10,
    },
    {
      id: `gen_e_${grade}_10`,
      grade,
      subject: 'english',
      chapter,
      concept: 'Punctuation Marks',
      difficulty: 'easy',
      type: 'match_pairs',
      question: 'Match the punctuation mark with its purpose:',
      visualEmoji: '✍️',
      payload: {
        pairs: [
          { id: 'pm1', left: 'Full Stop (.)', right: 'Ends a normal sentence' },
          { id: 'pm2', left: 'Question Mark (?)', right: 'Asks a question' },
          { id: 'pm3', left: 'Exclamation (!)', right: 'Shows surprise or excitement' },
        ],
      },
      explanation: 'Full stop (.) ends statements, (?) asks, (!) shows emotion!',
      points: 15,
    },
  ];
}

// ============================================================================
// HINDI EXPANSION BANK (10 questions per grade/topic)
// ============================================================================
function getHindiQuestionBank(grade: Grade, chapter: string): Question[] {
  return [
    {
      id: `gen_h_${grade}_01`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'संज्ञा (नाम वाले शब्द)',
      difficulty: 'easy',
      type: 'mcq',
      question: 'इनमें से किसी व्यक्ति, वस्तु या स्थान का "नाम वाला शब्द" (संज्ञा) कौन सा है? 🏫',
      visualEmoji: '🏫',
      payload: {
        options: [
          { id: 'o1', text: 'विद्यालय 🏫 (स्थान का नाम)', isCorrect: true },
          { id: 'o2', text: 'दौड़ना 🏃 (काम)', isCorrect: false },
          { id: 'o3', text: 'सुंदर 🌸 (विशेषण)', isCorrect: false },
        ],
      },
      explanation: 'किसी व्यक्ति, वस्तु, प्राणी या स्थान के नाम को संज्ञा कहते हैं (जैसे विद्यालय)!',
      points: 10,
    },
    {
      id: `gen_h_${grade}_02`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'विलोम शब्द (उलटे अर्थ)',
      difficulty: 'easy',
      type: 'match_pairs',
      question: 'परस्पर उल्टे अर्थ वाले (विलोम) शब्दों की सही जोड़ी मिलाइए:',
      visualEmoji: '↔️',
      payload: {
        pairs: [
          { id: 'hp1', left: 'दिन ☀️', right: 'रात 🌙' },
          { id: 'hp2', left: 'सच्चा 😇', right: 'झूठा 🤥' },
          { id: 'hp3', left: 'मित्र 🤝', right: 'शत्रु ⚔️' },
        ],
      },
      explanation: 'दिन का उल्टा रात, सच्चा का झूठा, और मित्र का शत्रु होता है!',
      points: 15,
    },
    {
      id: `gen_h_${grade}_03`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'वचन (एक और अनेक)',
      difficulty: 'easy',
      type: 'fill_blank',
      question: 'सही बहुवचन शब्द भरकर वाक्य पूरा कीजिए:',
      visualEmoji: '📚',
      payload: {
        correctAnswer: 'पुस्तकें',
        wordBank: ['पुस्तकें', 'पुस्तकों', 'पुस्तके'],
        displayTemplate: 'मेज पर चार [BLANK] रखी हैं।',
      },
      explanation: 'एक पुस्तक, चार पुस्तकें (स्त्रीलिंग अकारांत शब्द में -ें जुड़ता है)!',
      points: 10,
    },
    {
      id: `gen_h_${grade}_04`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'विशेषण (कैसा या कितना)',
      difficulty: 'medium',
      type: 'mcq',
      question: '"पेड़ पर मीठे आम लगे हैं।" इस वाक्य में विशेषण शब्द कौन सा है? 🥭',
      visualEmoji: '🥭',
      payload: {
        options: [
          { id: 'o1', text: 'मीठे (गुण बताने वाला विशेषण)', isCorrect: true },
          { id: 'o2', text: 'आम (संज्ञा)', isCorrect: false },
          { id: 'o3', text: 'पेड़ (संज्ञा)', isCorrect: false },
        ],
      },
      explanation: '"मीठे" शब्द आम के स्वाद व गुण की विशेषता बता रहा है!',
      points: 10,
    },
    {
      id: `gen_h_${grade}_05`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'लिंग (स्त्रीलिंग व पुल्लिंग)',
      difficulty: 'easy',
      type: 'match_pairs',
      question: 'पुल्लिंग और स्त्रीलिंग की सही जोड़ी मिलाइए:',
      visualEmoji: '👫',
      payload: {
        pairs: [
          { id: 'hl1', left: 'राजा 👑', right: 'रानी 👸' },
          { id: 'hl2', left: 'मोर 🦚', right: 'मोरनी' },
          { id: 'hl3', left: 'बालक 👦', right: 'बालिका 👧' },
        ],
      },
      explanation: 'राजा-रानी, मोर-मोरनी, बालक-बालिका!',
      points: 15,
    },
    {
      id: `gen_h_${grade}_06`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'पर्यायवाची शब्द (समान अर्थ)',
      difficulty: 'medium',
      type: 'mcq',
      question: '"सूर्य" का सही पर्यायवाची (समान अर्थ वाला) शब्द कौन सा है? ☀️',
      visualEmoji: '☀️',
      payload: {
        options: [
          { id: 'o1', text: 'रवि / दिनकर ☀️', isCorrect: true },
          { id: 'o2', text: 'शशि / चंद्रमा 🌙', isCorrect: false },
          { id: 'o3', text: 'पवन / हवा 💨', isCorrect: false },
        ],
      },
      explanation: 'सूर्य के पर्यायवाची हैं: रवि, दिनकर, भानु, भास्कर!',
      points: 10,
    },
    {
      id: `gen_h_${grade}_07`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'मुहावरे',
      difficulty: 'medium',
      type: 'fill_blank',
      question: 'मुहावरे का सही अर्थ भरिए:',
      visualEmoji: '🏃',
      payload: {
        correctAnswer: 'भाग गया',
        wordBank: ['भाग गया', 'सो गया', 'नाच उठा'],
        displayTemplate: '"नौ दो ग्यारह होना" का सही अर्थ है [BLANK]।',
      },
      explanation: 'नौ दो ग्यारह होना का अर्थ होता है भाग जाना या चंपत हो जाना!',
      points: 10,
    },
    {
      id: `gen_h_${grade}_08`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'वाक्य रचना (Sentence Scramble)',
      difficulty: 'easy',
      type: 'drag_order',
      question: 'शब्दों को सही क्रम में लगाकर सार्थक वाक्य बनाइए:',
      visualEmoji: '🇮🇳',
      payload: {
        tokens: ['भारत', 'हमारा', 'देश', 'है'],
        scrambled: ['है', 'भारत', 'देश', 'हमारा'],
        correctSequence: ['भारत', 'हमारा', 'देश', 'है'],
      },
      explanation: 'सही वाक्य रचना: "भारत हमारा देश है।"',
      points: 10,
    },
    {
      id: `gen_h_${grade}_09`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'विराम चिह्न',
      difficulty: 'easy',
      type: 'mcq',
      question: '"अरे वाह! कितना सुंदर दृश्य है!" में "!" कौन सा चिह्न है? 🌸',
      visualEmoji: '🌸',
      payload: {
        options: [
          { id: 'o1', text: 'विस्मयादिबोधक चिह्न (!)', isCorrect: true },
          { id: 'o2', text: 'पूर्ण विराम (।)', isCorrect: false },
          { id: 'o3', text: 'प्रश्नवाचक चिह्न (?)', isCorrect: false },
        ],
      },
      explanation: 'हर्ष, आश्चर्य या शोक प्रकट करने वाले शब्दों के आगे विस्मयादिबोधक चिह्न (!) लगता है!',
      points: 10,
    },
    {
      id: `gen_h_${grade}_10`,
      grade,
      subject: 'hindi',
      chapter,
      concept: 'अनेक शब्दों के लिए एक शब्द',
      difficulty: 'medium',
      type: 'match_pairs',
      question: 'अनेक शब्दों के स्थान पर एक सही शब्द का मिलान कीजिए:',
      visualEmoji: '💡',
      payload: {
        pairs: [
          { id: 'ho1', left: 'जो पढ़ाता है 👨‍🏫', right: 'शिक्षक (अध्यापक)' },
          { id: 'ho2', left: 'जो बीमारों का इलाज करे 🩺', right: 'चिकित्सक (डॉक्टर)' },
          { id: 'ho3', left: 'जो देश की सीमा पर लड़े 🎖️', right: 'सैनिक' },
        ],
      },
      explanation: 'पढ़ाने वाला शिक्षक, इलाज करने वाला डॉक्टर, रक्षा करने वाला सैनिक!',
      points: 15,
    },
  ];
}
