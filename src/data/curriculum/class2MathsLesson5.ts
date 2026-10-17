import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 MATHEMATICS (JOYFUL MATHEMATICS 2)
// CHAPTER 5: PLAYING WITH LINES (LINES & SHAPES)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_MATHS_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: Standing Lines (खड़ी रेखाएँ - Vertical)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m5_concept_stand_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Playing with Lines (Lines & Shapes)',
    concept: 'Standing Lines Identification',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A tall electricity pole 💈 standing straight up from the ground is an example of what kind of line?',
    visualEmoji: '💈 ⬆️ ⬇️',
    payload: {
      options: [
        { id: 'opt_st1_1', text: 'A Standing line', isCorrect: true },
        { id: 'opt_st1_2', text: 'A Curved line', isCorrect: false },
        { id: 'opt_st1_3', text: 'A Sleeping line', isCorrect: false },
      ],
    },
    explanation: '💡 A line that goes straight up and down like a tree trunk or lamp post is called a **Standing line (खड़ी रेखा)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: Sleeping Lines (लेटी रेखाएँ - Horizontal)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m5_concept_sleep_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Playing with Lines (Lines & Shapes)',
    concept: 'Sleeping Lines Identification',
    difficulty: 'easy',
    type: 'mcq',
    question: 'A pencil lying flat on the study desk ✏️ goes straight across from left to right. What line is this?',
    visualEmoji: '✏️ ⬅️ ➡️',
    payload: {
      options: [
        { id: 'opt_sp1_1', text: 'A Sleeping line', isCorrect: true },
        { id: 'opt_sp1_2', text: 'A Standing line', isCorrect: false },
        { id: 'opt_sp1_3', text: 'A Zigzag line', isCorrect: false },
      ],
    },
    explanation: '💡 A line that runs flat from side to side is called a **Sleeping line (लेटी/पड़ी रेखा)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: Slanting Lines (तिरछी रेखाएँ - Diagonal)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m5_concept_slant_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Playing with Lines (Lines & Shapes)',
    concept: 'Slanting Lines in Everyday Life',
    difficulty: 'easy',
    type: 'mcq',
    question: 'Raindrops falling in windy monsoon weather 🌧️ or a ladder leaning against a wall 🪜 form what kind of line?',
    visualEmoji: '🌧️ 🪜 ╱ ╲',
    payload: {
      options: [
        { id: 'opt_sl1_1', text: 'A Slanting line', isCorrect: true },
        { id: 'opt_sl1_2', text: 'A Standing line', isCorrect: false },
        { id: 'opt_sl1_3', text: 'A Sleeping line', isCorrect: false },
      ],
    },
    explanation: '💡 A line that leans sideways is called a **Slanting line (तिरछी रेखा)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: Curved Lines (घुमावदार रेखाएँ)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m5_concept_curv_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Playing with Lines (Lines & Shapes)',
    concept: 'Curved Lines in Rainbow and Waves',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'A colorful rainbow across the sky 🌈 is drawn using a [BLANK] line.',
    visualEmoji: '🌈 〰️',
    payload: {
      correctAnswer: 'curved',
      wordBank: ['curved', 'straight', 'standing', 'broken'],
      displayTemplate: 'A rainbow across the sky is made of a [BLANK] line.',
    },
    explanation: '💡 A rainbow bends smoothly in an arc, so it is a **curved line (घुमावदार रेखा)**! 🌈',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: Lines in English Alphabet Letters
  // --------------------------------------------------------------------------
  {
    id: 'c2_m5_concept_alpha_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Playing with Lines (Lines & Shapes)',
    concept: 'Lines in Letter H',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Look closely at the capital English letter "H". What lines are used to draw it?',
    visualEmoji: '🔤 🇭',
    payload: {
      options: [
        { id: 'opt_lh1_1', text: '2 Standing lines and 1 Sleeping line', isCorrect: true },
        { id: 'opt_lh1_2', text: '3 Slanting lines', isCorrect: false },
        { id: 'opt_lh1_3', text: 'Curved lines only', isCorrect: false },
      ],
    },
    explanation: '💡 Letter "**H**" has two vertical standing lines joined in the middle by one horizontal sleeping line!',
    points: 10,
  },
  {
    id: 'c2_m5_concept_alpha_02',
    grade: 2,
    subject: 'maths',
    chapter: 'Playing with Lines (Lines & Shapes)',
    concept: 'Lines in Letter A',
    difficulty: 'medium',
    type: 'mcq',
    question: 'Which lines are used to build the capital letter "A"?',
    visualEmoji: '🔤 🇦',
    payload: {
      options: [
        { id: 'opt_la2_1', text: '2 Slanting lines and 1 Sleeping line', isCorrect: true },
        { id: 'opt_la2_2', text: 'Only standing lines', isCorrect: false },
        { id: 'opt_la2_3', text: 'Only curved lines', isCorrect: false },
      ],
    },
    explanation: '💡 Letter "**A**" has two slanting lines that meet at the tip, tied by a sleeping line!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: Drawing Shapes Using Lines (Triangle and Rectangle)
  // --------------------------------------------------------------------------
  {
    id: 'c2_m5_concept_shape_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Playing with Lines (Lines & Shapes)',
    concept: 'Lines in a Triangle',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'To draw a roof-top triangle 🔺, you need 2 slanting lines and 1 [BLANK] line at the bottom.',
    visualEmoji: '🔺 🏠',
    payload: {
      correctAnswer: 'sleeping',
      wordBank: ['sleeping', 'curved', 'circular', 'curly'],
      displayTemplate: 'You need 2 slanting lines and 1 [BLANK] line.',
    },
    explanation: '💡 The base of a triangle resting flat is a **sleeping line**! 🔺',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: Match Line Names to Examples
  // --------------------------------------------------------------------------
  {
    id: 'c2_m5_concept_match_01',
    grade: 2,
    subject: 'maths',
    chapter: 'Playing with Lines (Lines & Shapes)',
    concept: 'Line Type to Real Example Match',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'Match each type of line to its real-world example:',
    visualEmoji: '✏️ 📐',
    payload: {
      pairs: [
        { id: 'ln_p1', left: 'Standing line |', right: 'Flag post 🚩' },
        { id: 'ln_p2', left: 'Sleeping line —', right: 'Railway track sleeper 🛤️' },
        { id: 'ln_p3', left: 'Slanting line ╱', right: 'Slide in park 🛝' },
        { id: 'ln_p4', left: 'Curved line 〰️', right: 'Sea wave 🌊' },
      ],
    },
    explanation: '💡 Flag post = Standing, Railway sleeper = Sleeping, Slide = Slanting, Sea wave = Curved!',
    points: 15,
  },
];
