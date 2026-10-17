import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 HINDI (वीणा 3 / RIMJHIM 3)
// CHAPTER 1: कक्कू (संज्ञा व उसके भेद)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_HINDI_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 'कक्कू' कविता संदर्भ व अर्थ
  // --------------------------------------------------------------------------
  {
    id: 'c3_h1_concept_poem_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'कक्कू (संज्ञा व उसके भेद)',
    concept: 'कक्कू का अर्थ',
    difficulty: 'easy',
    type: 'mcq',
    question: 'कविता के अनुसार "कक्कू" का वास्तविक अर्थ क्या होता है?',
    visualEmoji: '🐦 🎶 🌳',
    payload: {
      options: [
        { id: 'opt_kak1', text: 'कोयल', isCorrect: true },
        { id: 'opt_kak2', text: 'कौआ', isCorrect: false },
        { id: 'opt_kak3', text: 'तोता', isCorrect: false },
      ],
    },
    explanation: '💡 कविता की पंक्ति है: "नाम है उसका कक्कू, कक्कू माने **कोयल** होता!"',
    points: 10,
  },
  {
    id: 'c3_h1_concept_poem_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'कक्कू (संज्ञा व उसके भेद)',
    concept: 'कक्कू का स्वभाव',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'कक्कू बात-बात पर चिढ़ जाता था, इसलिए सब उसे [BLANK] भी कहते थे।',
    visualEmoji: '😠 👦 🏷️',
    payload: {
      correctAnswer: 'सक्कू',
      wordBank: ['सक्कू', 'भक्कू', 'झक्कू', 'गप्पू'],
      displayTemplate: 'सब उसे चिढ़ाकर [BLANK] कहते थे।',
    },
    explanation: '💡 जो बात-बात पर चिढ़े उसे कविता में **सक्कू** और जो झगड़ा करे उसे **झक्कू** कहा गया है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: व्यक्तिवाचक संज्ञा (विशेष नाम)
  // --------------------------------------------------------------------------
  {
    id: 'c3_h1_concept_vyakti_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'कक्कू (संज्ञा व उसके भेद)',
    concept: 'व्यक्तिवाचक संज्ञा की पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इनमें से कौन सा शब्द "व्यक्तिवाचक संज्ञा" (विशेष नाम) है?',
    visualEmoji: '🇮🇳 🏞️ 🏛️',
    payload: {
      options: [
        { id: 'opt_vy1', text: 'हिमालय', isCorrect: true },
        { id: 'opt_vy2', text: 'पहाड़', isCorrect: false },
        { id: 'opt_vy3', text: 'नदी', isCorrect: false },
      ],
    },
    explanation: '💡 जिस शब्द से किसी विशेष व्यक्ति, वस्तु या स्थान का बोध हो, उसे **व्यक्तिवाचक संज्ञा** कहते हैं (जैसे हिमालय, गंगा, भारत, कक्कू)।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: जातिवाचक संज्ञा (पूरी जाति का बोध)
  // --------------------------------------------------------------------------
  {
    id: 'c3_h1_concept_jati_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'कक्कू (संज्ञा व उसके भेद)',
    concept: 'जातिवाचक संज्ञा की पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इनमें से "जातिवाचक संज्ञा" शब्द चुनिए:',
    visualEmoji: '👧 📚 🏫',
    payload: {
      options: [
        { id: 'opt_jt1', text: 'लड़का', isCorrect: true },
        { id: 'opt_jt2', text: 'रोहन', isCorrect: false },
        { id: 'opt_jt3', text: 'दिल्ली', isCorrect: false },
      ],
    },
    explanation: '💡 जिस संज्ञा शब्द से एक ही प्रकार की सभी वस्तुओं या प्राणियों का बोध हो, उसे **जातिवाचक संज्ञा** कहते हैं (जैसे लड़का, पेड़, चिड़िया, फल)।',
    points: 10,
  },
  {
    id: 'c3_h1_concept_jati_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'कक्कू (संज्ञा व उसके भेद)',
    concept: 'संज्ञा भेद रिक्त स्थान',
    difficulty: 'medium',
    type: 'fill_blank',
    question: '"गंगा" व्यक्तिवाचक संज्ञा है, जबकि "नदी" [BLANK] संज्ञा है।',
    visualEmoji: '🌊 🏷️ 🧠',
    payload: {
      correctAnswer: 'जातिवाचक',
      wordBank: ['जातिवाचक', 'व्यक्तिवाचक', 'भाववाचक', 'सर्वनाम'],
      displayTemplate: '"नदी" शब्द [BLANK] संज्ञा है।',
    },
    explanation: '💡 "गंगा" एक विशेष नदी का नाम है, इसलिए व्यक्तिवाचक है। सामान्य "नदी" शब्द **जातिवाचक** है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: मिलान व वाक्य क्रम
  // --------------------------------------------------------------------------
  {
    id: 'c3_h1_concept_match_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'कक्कू (संज्ञा व उसके भेद)',
    concept: 'संज्ञा भेद वर्गीकरण',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'शब्दों को उनके सही संज्ञा भेद के साथ मिलाइए:',
    visualEmoji: '🏷️ ➔ 🎯',
    payload: {
      pairs: [
        { id: 'h1_p1', left: 'कक्कू', right: 'व्यक्तिवाचक संज्ञा' },
        { id: 'h1_p2', left: 'कोयल', right: 'जातिवाचक संज्ञा' },
        { id: 'h1_p3', left: 'ताजमहल', right: 'व्यक्तिवाचक संज्ञा' },
        { id: 'h1_p4', left: 'इमारत', right: 'जातिवाचक संज्ञा' },
      ],
    },
    explanation: '💡 विशेष नाम (कक्कू, ताजमहल) व्यक्तिवाचक होते हैं, और सामान्य समूह नाम (कोयल, इमारत) जातिवाचक होते हैं!',
    points: 15,
  },
  {
    id: 'c3_h1_concept_order_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'कक्कू (संज्ञा व उसके भेद)',
    concept: 'कविता की पंक्तियों का सही क्रम',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'कक्कू कविता की पंक्तियों को सही क्रम में लगाइए:',
    visualEmoji: '📜 ✍️ 🎶',
    payload: {
      tokens: ['नाम है उसका कक्कू', 'कक्कू माने कोयल होता', 'लेकिन यह तो दिन भर रोता', 'इसीलिए हम इसे चिढ़ाते'],
      scrambled: ['लेकिन यह तो दिन भर रोता', 'नाम है उसका कक्कू', 'इसीलिए हम इसे चिढ़ाते', 'कक्कू माने कोयल होता'],
      correctSequence: ['नाम है उसका कक्कू', 'कक्कू माने कोयल होता', 'लेकिन यह तो दिन भर रोता', 'इसीलिए हम इसे चिढ़ाते'],
    },
    explanation: '💡 सही क्रम: "नाम है उसका कक्कू, कक्कू माने कोयल होता, लेकिन यह तो दिन भर रोता, इसीलिए हम इसे चिढ़ाते!"',
    points: 15,
  },
];
