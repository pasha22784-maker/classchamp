import { Grade, Subject, Question, WeakTopicItem, CognitiveProfileScores } from '../types';

export interface DailyLogicPuzzle {
  id: string;
  category: 'logic' | 'spatial' | 'pattern' | 'riddle';
  title: string;
  question: string;
  visualEmoji: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  hint: string;
}

export interface DailyWorkoutData {
  dayNumber: number;
  dateString: string;
  puzzle: DailyLogicPuzzle;
  featuredLabId: string;
  featuredLabTitle: string;
  featuredLabIcon: string;
  labDailyMission: string;
  speedSprintGoal: string;
}

export interface CognitivePillarInfo {
  id: keyof CognitiveProfileScores;
  nameEnglish: string;
  nameHindi: string;
  icon: string;
  accentColor: string;
  description: string;
  pedagogicalBenefit: string;
  recommendedLab: string;
}

export const COGNITIVE_PILLARS: CognitivePillarInfo[] = [
  {
    id: 'logicScore',
    nameEnglish: 'Deductive Logic & Patterns',
    nameHindi: 'तार्किक क्षमता व पैटर्न पहचान',
    icon: '🧠',
    accentColor: '#8B5CF6',
    description: 'Ability to identify hidden rules, sequence progressions, and cause-and-effect reasoning.',
    pedagogicalBenefit: 'Boosts mathematical problem solving, coding aptitude, and algorithmic thinking.',
    recommendedLab: 'Pattern & Sequence Builder Lab',
  },
  {
    id: 'spatialScore',
    nameEnglish: 'Spatial & Geometric Intuition',
    nameHindi: 'स्थानिक बुद्धि व ज्यामितीय दृष्टि',
    icon: '📐',
    accentColor: '#06B6D4',
    description: 'Mental manipulation of shapes, 2D/3D symmetries, area visualization, and angles.',
    pedagogicalBenefit: 'Eliminates geometry anxiety, improves mental handwriting, and builds engineering intuition.',
    recommendedLab: 'Geo-Board & Angle Laser Optics',
  },
  {
    id: 'memorySpeedScore',
    nameEnglish: 'Working Memory & Speed Reflex',
    nameHindi: 'कार्यकारी स्मृति व त्वरित सोच',
    icon: '⚡',
    accentColor: '#EAB308',
    description: 'Holding and manipulating numbers mentally under time pressure with instant accuracy.',
    pedagogicalBenefit: 'Speeds up exam completion by 2x and removes calculation finger-counting dependencies.',
    recommendedLab: '60s Lightning Brain Booster',
  },
  {
    id: 'problemSolvingScore',
    nameEnglish: 'Scientific Inquiry & Equilibrium',
    nameHindi: 'वैज्ञानिक दृष्टिकोण व समस्या निवारण',
    icon: '🔬',
    accentColor: '#10B981',
    description: 'Testing hypotheses, balancing equations, understanding physical forces and light.',
    pedagogicalBenefit: 'Encourages curiosity, scientific temperament (NEP 2020), and real-life logic.',
    recommendedLab: 'The Balance Beam & Magnetic Field Lab',
  },
];

// Helper to calculate Day-of-Year (1 to 365)
export const getDayOfYear = (dateString?: string): number => {
  const now = dateString ? new Date(dateString) : new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.min(365, Math.max(1, Math.floor(diff / oneDay)));
};

// Daily Logic Puzzles pool by Grade bracket
const LOGIC_PUZZLES_BY_GRADE: Record<string, DailyLogicPuzzle[]> = {
  foundation: [
    {
      id: 'f_puz_1',
      category: 'pattern',
      title: 'Missing Fruit Pattern',
      question: 'Look at the pattern: 🍎 🍌 🍎 🍌 🍎 __. What comes next?',
      visualEmoji: '🍌',
      options: ['🍌 Banana', '🍎 Apple', '🍇 Grapes'],
      correctAnswer: '🍌 Banana',
      explanation: 'The pattern repeats: Apple, Banana, Apple, Banana. So after Apple comes Banana!',
      hint: 'Say the fruits out loud: Apple, Banana, Apple, Banana...',
    },
    {
      id: 'f_puz_2',
      category: 'spatial',
      title: 'Odd Shape Out',
      question: 'Which of these shapes has NO corners?',
      visualEmoji: '🔵',
      options: ['Circle 🔵', 'Triangle 🔺', 'Square 🟩'],
      correctAnswer: 'Circle 🔵',
      explanation: 'A circle is completely round with 0 straight edges and 0 corners!',
      hint: 'Which one rolls smoothly on the ground?',
    },
    {
      id: 'f_puz_3',
      category: 'logic',
      title: 'Animal Balance Riddle',
      question: 'If 1 Cat = 2 Birds, how many Birds balance 2 Cats?',
      visualEmoji: '🐱',
      options: ['4 Birds 🐦', '3 Birds 🐦', '2 Birds 🐦'],
      correctAnswer: '4 Birds 🐦',
      explanation: '1 Cat = 2 Birds. So 2 Cats = 2 + 2 = 4 Birds!',
      hint: 'Double the birds: 2 + 2 = ?',
    },
    {
      id: 'f_puz_4',
      category: 'pattern',
      title: 'Number Hopscotch',
      question: 'Froggy hops: 2, 4, 6, __. What number does froggy land on?',
      visualEmoji: '🐸',
      options: ['8', '7', '10'],
      correctAnswer: '8',
      explanation: 'Froggy is skip counting by 2: 2, 4, 6, and next is 8!',
      hint: 'Add 2 to 6: 6 + 2 = ?',
    },
  ],

  primary: [
    {
      id: 'p_puz_1',
      category: 'logic',
      title: 'Clock Mystery',
      question: 'A train leaves at 3:15 PM and takes 45 minutes to reach. What time does it arrive?',
      visualEmoji: '🚆',
      options: ['4:00 PM', '4:15 PM', '3:45 PM', '4:30 PM'],
      correctAnswer: '4:00 PM',
      explanation: '15 minutes + 45 minutes = 60 minutes (1 full hour). 3:15 + 45 min = 4:00 PM!',
      hint: 'How many minutes make a full hour? 15 + 45 = 60.',
    },
    {
      id: 'p_puz_2',
      category: 'spatial',
      title: 'Fraction Pizza Logic',
      question: 'A pizza is sliced into 8 equal pieces. Rohan eats 2 pieces and Riya eats 2 pieces. What fraction is LEFT?',
      visualEmoji: '🍕',
      options: ['1/2 (Half)', '1/4', '3/8', '1/8'],
      correctAnswer: '1/2 (Half)',
      explanation: 'They ate 2 + 2 = 4 pieces out of 8. 4 out of 8 left is exactly 4/8 = 1/2 (half)!',
      hint: '8 pieces minus 4 pieces eaten = 4 pieces left. 4/8 is half.',
    },
    {
      id: 'p_puz_3',
      category: 'pattern',
      title: 'Magic Number Code',
      question: 'Find the missing number in sequence: 3, 6, 12, 24, __?',
      visualEmoji: '🔢',
      options: ['48', '36', '30', '50'],
      correctAnswer: '48',
      explanation: 'Each number is doubled: 3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24, 24 × 2 = 48!',
      hint: 'Look closely: every number is multiplied by 2!',
    },
    {
      id: 'p_puz_4',
      category: 'riddle',
      title: 'Weighing Scale Challenge',
      question: 'On a balance scale, 3 Apples balance 1 Melon. If 1 Melon weighs 600 grams, how much does 1 Apple weigh?',
      visualEmoji: '⚖️',
      options: ['200 grams', '300 grams', '150 grams', '100 grams'],
      correctAnswer: '200 grams',
      explanation: '3 Apples = 600g. Therefore 1 Apple = 600 ÷ 3 = 200 grams!',
      hint: 'Divide 600 into 3 equal parts: 600 ÷ 3 = ?',
    },
  ],

  middle: [
    {
      id: 'm_puz_1',
      category: 'spatial',
      title: 'Perimeter vs Area Twister',
      question: 'A square has an area of 36 cm². What is the PERIMETER of this square?',
      visualEmoji: '📐',
      options: ['24 cm', '36 cm', '18 cm', '12 cm'],
      correctAnswer: '24 cm',
      explanation: 'Area = side × side = 36 cm², so side = 6 cm. Perimeter = 4 × side = 4 × 6 = 24 cm!',
      hint: 'What number multiplied by itself is 36? Then multiply by 4.',
    },
    {
      id: 'm_puz_2',
      category: 'logic',
      title: 'Submarine Negative Depth',
      question: 'A submarine is at -40 meters depth. It rises by 25 meters, then dives by 10 meters. Where is it now?',
      visualEmoji: '🚢',
      options: ['-25 meters', '-15 meters', '-35 meters', '-50 meters'],
      correctAnswer: '-25 meters',
      explanation: '-40 + 25 = -15m. Then diving 10m means -15 - 10 = -25 meters!',
      hint: 'Calculate step by step: -40 + 25 = -15, then -15 - 10 = ?',
    },
    {
      id: 'm_puz_3',
      category: 'pattern',
      title: 'Angle Laser Trajectory',
      question: 'Two angles form a linear pair (straight line of 180°). If one angle is 65°, what is the other angle?',
      visualEmoji: '⚡',
      options: ['115°', '125°', '105°', '95°'],
      correctAnswer: '115°',
      explanation: 'Angles on a straight line add up to 180°. 180° - 65° = 115° (an obtuse angle)!',
      hint: 'Subtract 65 from 180: 180 - 65 = ?',
    },
    {
      id: 'm_puz_4',
      category: 'riddle',
      title: 'Prism Refraction Order',
      question: 'When white light enters a prism, which color bends the MOST (has shortest wavelength)?',
      visualEmoji: '🌈',
      options: ['Violet', 'Red', 'Green', 'Yellow'],
      correctAnswer: 'Violet',
      explanation: 'In VIBGYOR, Violet has the shortest wavelength and bends (refracts) the most, while Red bends the least!',
      hint: 'Remember VIBGYOR: the bottom-most color on the prism rainbow.',
    },
  ],
};

// Rotating featured STEM Labs for daily workout
const ROTATING_LABS = [
  { id: 'balance_scale', title: 'The Balance Beam', icon: '⚖️', mission: 'Reach equilibrium on Level 5 without dropping weights!' },
  { id: 'fraction_pizza', title: 'Fraction Pizza Kitchen', icon: '🍕', mission: 'Serve 3 exact equivalent fractions (1/2 = 2/4)!' },
  { id: 'clock_time', title: 'Tick-Tock Clock Time Lab', icon: '🕒', mission: 'Set the hands to exact 15-minute school schedules!' },
  { id: 'magnet_lab', title: 'Magnetic Poles & Field Lab', icon: '🧲', mission: 'Separate magnetic vs non-magnetic materials in 60s!' },
  { id: 'color_prism', title: 'Rainbow Prism & Optics', icon: '🌈', mission: 'Disperse white light into full 7-color VIBGYOR beam!' },
  { id: 'angle_laser', title: 'Angle Laser Optics Lab', icon: '⚡', mission: 'Hit the target crystal at an exact 90° right angle!' },
  { id: 'geo_area_perimeter', title: 'Geo-Board Area Lab', icon: '📐', mission: 'Build a shape with Area = 12 tiles and Perimeter = 16!' },
];

export const getDailyWorkoutForDate = (grade: Grade, dateString?: string): DailyWorkoutData => {
  const dayNum = getDayOfYear(dateString);
  const isFoundation = grade === 'LKG' || grade === 'UKG';
  const isMiddle = grade === 5 || grade === 6;

  const poolKey = isFoundation ? 'foundation' : isMiddle ? 'middle' : 'primary';
  const pool = LOGIC_PUZZLES_BY_GRADE[poolKey];
  const puzzle = pool[(dayNum - 1) % pool.length];

  const featuredLab = ROTATING_LABS[(dayNum - 1) % ROTATING_LABS.length];

  return {
    dayNumber: dayNum,
    dateString: dateString || new Date().toISOString().split('T')[0],
    puzzle,
    featuredLabId: featuredLab.id,
    featuredLabTitle: featuredLab.title,
    featuredLabIcon: featuredLab.icon,
    labDailyMission: featuredLab.mission,
    speedSprintGoal: isFoundation ? 'Score 80+ in 60s Counting Rush' : 'Build a 5x Lightning Combo in 60s Rush',
  };
};

// Seed default weak topics based on class/grade
export const getDefaultWeakTopicsForGrade = (grade: Grade): WeakTopicItem[] => {
  const today = new Date().toISOString().split('T')[0];

  if (grade === 'LKG' || grade === 'UKG') {
    return [
      {
        id: `weak_${grade}_1`,
        subject: 'maths',
        chapterTitle: 'Numbers & 1-to-1 Counting',
        conceptName: 'Quantity vs Numeral (1-10)',
        accuracyPercentage: 60,
        attemptsCount: 2,
        status: 'needs_practice',
        lastPracticedDate: today,
      },
      {
        id: `weak_${grade}_2`,
        subject: 'maths',
        chapterTitle: 'Heavy vs Light Comparison',
        conceptName: 'Mass Equilibrium Balance',
        accuracyPercentage: 65,
        attemptsCount: 1,
        status: 'needs_practice',
        lastPracticedDate: today,
      },
    ];
  }

  if (grade === 1 || grade === 2) {
    return [
      {
        id: `weak_${grade}_1`,
        subject: 'maths',
        chapterTitle: 'Making Ten & Regrouping',
        conceptName: 'Two-digit addition without carry',
        accuracyPercentage: 58,
        attemptsCount: 3,
        status: 'needs_practice',
        lastPracticedDate: today,
      },
      {
        id: `weak_${grade}_2`,
        subject: 'maths',
        chapterTitle: 'Tick-Tock Clock Time',
        conceptName: 'Reading Half-Past and O\'Clock',
        accuracyPercentage: 64,
        attemptsCount: 2,
        status: 'needs_practice',
        lastPracticedDate: today,
      },
    ];
  }

  if (grade === 3 || grade === 4) {
    return [
      {
        id: `weak_${grade}_1`,
        subject: 'maths',
        chapterTitle: 'Fraction Slices & Parts',
        conceptName: 'Equivalent Fractions (1/2 = 2/4 = 4/8)',
        accuracyPercentage: 55,
        attemptsCount: 3,
        status: 'needs_practice',
        lastPracticedDate: today,
      },
      {
        id: `weak_${grade}_2`,
        subject: 'maths',
        chapterTitle: 'Multiplication Tables & Division',
        conceptName: 'Rapid 7, 8, 9 Tables Recall',
        accuracyPercentage: 62,
        attemptsCount: 4,
        status: 'needs_practice',
        lastPracticedDate: today,
      },
    ];
  }

  // Class 5 & 6
  return [
    {
      id: `weak_${grade}_1`,
      subject: 'maths',
      chapterTitle: 'Area vs Perimeter Distinction',
      conceptName: 'Interior Area (cm²) vs Border Perimeter (cm)',
      accuracyPercentage: 52,
      attemptsCount: 3,
      status: 'needs_practice',
      lastPracticedDate: today,
    },
    {
      id: `weak_${grade}_2`,
      subject: 'maths',
      chapterTitle: 'Negative Integers & Sea Level',
      conceptName: 'Addition & Subtraction of Negative Numbers',
      accuracyPercentage: 58,
      attemptsCount: 2,
      status: 'needs_practice',
      lastPracticedDate: today,
    },
  ];
};

// 10-Question HOTS / Olympiad Assessment Generator
export const getOlympiadMockTestQuestions = (grade: Grade): Question[] => {
  const isFoundation = grade === 'LKG' || grade === 'UKG';
  const isClass12 = grade === 1 || grade === 2;
  const isClass34 = grade === 3 || grade === 4;

  if (isFoundation) {
    return [
      {
        id: 'olymp_f_1',
        grade,
        subject: 'maths',
        chapter: 'Visual Logic',
        concept: 'Pattern Sequences',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Which piece completes the circle puzzle?',
        visualEmoji: '🧩',
        payload: {
          options: [
            { id: '1', text: 'Quarter Slice 🍕', isCorrect: true },
            { id: '2', text: 'Square Block 🟩', isCorrect: false },
            { id: '3', text: 'Triangle 🔺', isCorrect: false },
          ],
        },
        explanation: 'A circle is rounded. Only a curved quarter slice can complete it!',
        points: 10,
      },
      {
        id: 'olymp_f_2',
        grade,
        subject: 'maths',
        chapter: 'Quantity Reasoning',
        concept: 'Number Comparison',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Basket A has 5 apples. Basket B has 3 apples. How many apples must move from A to B so BOTH have equal?',
        visualEmoji: '🧺',
        payload: {
          options: [
            { id: '1', text: '1 Apple', isCorrect: true },
            { id: '2', text: '2 Apples', isCorrect: false },
            { id: '3', text: '3 Apples', isCorrect: false },
          ],
        },
        explanation: 'Moving 1 apple gives 4 in Basket A and 4 in Basket B. Both become equal!',
        points: 10,
      },
    ];
  }

  if (isClass12) {
    return [
      {
        id: 'olymp_c12_1',
        grade,
        subject: 'maths',
        chapter: 'Logic & Regrouping',
        concept: 'Equation Balance',
        difficulty: 'medium',
        type: 'mcq',
        question: 'Find the missing number: 8 + 6 = 10 + __?',
        visualEmoji: '⚖️',
        payload: {
          options: [
            { id: '1', text: '4', isCorrect: true },
            { id: '2', text: '5', isCorrect: false },
            { id: '3', text: '3', isCorrect: false },
            { id: '4', text: '6', isCorrect: false },
          ],
        },
        explanation: '8 + 6 = 14. 10 + 4 = 14. So the missing number is 4!',
        points: 10,
      },
      {
        id: 'olymp_c12_2',
        grade,
        subject: 'maths',
        chapter: 'Time & Calendar',
        concept: 'Elapsed Time',
        difficulty: 'hard',
        type: 'mcq',
        question: 'If yesterday was Wednesday, what day will it be day after tomorrow?',
        visualEmoji: '🗓️',
        payload: {
          options: [
            { id: '1', text: 'Saturday', isCorrect: true },
            { id: '2', text: 'Friday', isCorrect: false },
            { id: '3', text: 'Sunday', isCorrect: false },
            { id: '4', text: 'Thursday', isCorrect: false },
          ],
        },
        explanation: 'Yesterday = Wed, so Today = Thu. Tomorrow = Fri, and Day after tomorrow = Saturday!',
        points: 10,
      },
      {
        id: 'olymp_c12_3',
        grade,
        subject: 'maths',
        chapter: 'Geometry & Shapes',
        concept: 'Solid Shapes',
        difficulty: 'medium',
        type: 'mcq',
        question: 'How many flat faces does a wooden cube have?',
        visualEmoji: '🎲',
        payload: {
          options: [
            { id: '1', text: '6 Faces', isCorrect: true },
            { id: '2', text: '4 Faces', isCorrect: false },
            { id: '3', text: '8 Faces', isCorrect: false },
            { id: '4', text: '12 Faces', isCorrect: false },
          ],
        },
        explanation: 'A cube has 6 flat square faces (top, bottom, and 4 sides like a dice)!',
        points: 10,
      },
    ];
  }

  if (isClass34) {
    return [
      {
        id: 'olymp_c34_1',
        grade,
        subject: 'maths',
        chapter: 'Fractions & Equivalence',
        concept: 'Fraction Comparison',
        difficulty: 'hard',
        type: 'mcq',
        question: 'Which of the following is EQUAL to 3/4?',
        visualEmoji: '🍕',
        payload: {
          options: [
            { id: '1', text: '6/8', isCorrect: true },
            { id: '2', text: '4/6', isCorrect: false },
            { id: '3', text: '5/8', isCorrect: false },
            { id: '4', text: '3/8', isCorrect: false },
          ],
        },
        explanation: 'Multiply numerator and denominator by 2: (3 × 2) / (4 × 2) = 6/8!',
        points: 10,
      },
      {
        id: 'olymp_c34_2',
        grade,
        subject: 'maths',
        chapter: 'Measurements & Capacity',
        concept: 'Unit Conversion',
        difficulty: 'hard',
        type: 'mcq',
        question: 'A bottle holds 250 mL of juice. How many such bottles are needed to fill 2 Litres?',
        visualEmoji: '🧃',
        payload: {
          options: [
            { id: '1', text: '8 Bottles', isCorrect: true },
            { id: '2', text: '4 Bottles', isCorrect: false },
            { id: '3', text: '6 Bottles', isCorrect: false },
            { id: '4', text: '10 Bottles', isCorrect: false },
          ],
        },
        explanation: '2 Litres = 2000 mL. 2000 ÷ 250 = 8 bottles!',
        points: 10,
      },
      {
        id: 'olymp_c34_3',
        grade,
        subject: 'maths',
        chapter: 'Word Problems & Algebra',
        concept: 'Two-step Logic',
        difficulty: 'hard',
        type: 'mcq',
        question: 'Rohan has 3 times as many marbles as Kabir. Together they have 48 marbles. How many marbles does Kabir have?',
        visualEmoji: '🔮',
        payload: {
          options: [
            { id: '1', text: '12 Marbles', isCorrect: true },
            { id: '2', text: '16 Marbles', isCorrect: false },
            { id: '3', text: '36 Marbles', isCorrect: false },
            { id: '4', text: '24 Marbles', isCorrect: false },
          ],
        },
        explanation: 'Total parts = 3 + 1 = 4 parts. 48 ÷ 4 = 12. So Kabir has 12 and Rohan has 36!',
        points: 10,
      },
    ];
  }

  // Class 5 & 6
  return [
    {
      id: 'olymp_c56_1',
      grade,
      subject: 'maths',
      chapter: 'Integers & Number Line',
      concept: 'Integer Operations',
      difficulty: 'hard',
      type: 'mcq',
      question: 'Evaluate: (-15) + (-20) - (-30) = ?',
      visualEmoji: '❄️',
      payload: {
        options: [
          { id: '1', text: '-5', isCorrect: true },
          { id: '2', text: '-65', isCorrect: false },
          { id: '3', text: '5', isCorrect: false },
          { id: '4', text: '-25', isCorrect: false },
        ],
      },
      explanation: '(-15) + (-20) = -35. Minus a negative is plus: -35 + 30 = -5!',
      points: 10,
    },
    {
      id: 'olymp_c56_2',
      grade,
      subject: 'maths',
      chapter: 'Mensuration',
      concept: 'Area & Perimeter Relations',
      difficulty: 'hard',
      type: 'mcq',
      question: 'A wire in the shape of a square of side 10 cm is bent into a rectangle of length 12 cm. What is its breadth?',
      visualEmoji: '📐',
      payload: {
        options: [
          { id: '1', text: '8 cm', isCorrect: true },
          { id: '2', text: '10 cm', isCorrect: false },
          { id: '3', text: '6 cm', isCorrect: false },
          { id: '4', text: '9 cm', isCorrect: false },
        ],
      },
      explanation: 'Perimeter of wire = 4 × 10 = 40 cm. For rectangle: 2 × (12 + breadth) = 40 ➔ 12 + breadth = 20 ➔ breadth = 8 cm!',
      points: 10,
    },
    {
      id: 'olymp_c56_3',
      grade,
      subject: 'maths',
      chapter: 'Optics & Physics',
      concept: 'Light Reflection Law',
      difficulty: 'medium',
      type: 'mcq',
      question: 'If a light ray strikes a plane mirror with an angle of incidence of 35°, what is the angle of reflection?',
      visualEmoji: '🪞',
      payload: {
        options: [
          { id: '1', text: '35°', isCorrect: true },
          { id: '2', text: '55°', isCorrect: false },
          { id: '3', text: '70°', isCorrect: false },
          { id: '4', text: '90°', isCorrect: false },
        ],
      },
      explanation: 'By the First Law of Reflection: Angle of Incidence (i) = Angle of Reflection (r). So it is exactly 35°!',
      points: 10,
    },
  ];
};
