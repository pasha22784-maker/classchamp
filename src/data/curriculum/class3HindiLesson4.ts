import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 HINDI (वीणा 3 / RIMJHIM 3)
// CHAPTER 4: बहादुर बित्तो (विलोम व पर्यायवाची शब्द)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_HINDI_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 'बहादुर बित्तो' कहानी संदर्भ
  // --------------------------------------------------------------------------
  {
    id: 'c3_h4_concept_story_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'बहादुर बित्तो (विलोम व पर्यायवाची शब्द)',
    concept: 'बित्तो की सूझबूझ व बहादुरी',
    difficulty: 'easy',
    type: 'mcq',
    question: 'कहानी में बित्तो ने शेर को भगाने के लिए क्या तरकीब सोची?',
    visualEmoji: '👩‍🌾 🐎 🦁',
    payload: {
      options: [
        { id: 'opt_bt1', text: 'घोड़े पर सवार होकर शेर को डराया कि वह नाश्ते में 4 शेर खाती है', isCorrect: true },
        { id: 'opt_bt2', text: 'पेड़ पर छिप गई', isCorrect: false },
        { id: 'opt_bt3', text: 'शेर को अपनी गाय दे दी', isCorrect: false },
      ],
    },
    explanation: '💡 बित्तो बहुत बहादुर और समझदार थी। उसने सिर पर बड़ा सा पगड़ बाँधा, हाथ में दरांती ली और घोड़े पर बैठकर शेर के होश उड़ा दिए!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: विलोम शब्द (उल्टे अर्थ वाले शब्द)
  // --------------------------------------------------------------------------
  {
    id: 'c3_h4_concept_vilom_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'बहादुर बित्तो (विलोम व पर्यायवाची शब्द)',
    concept: 'डरपोक का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'किसान बहुत "डरपोक" था। "डरपोक" का विलोम (उल्टा) शब्द क्या होगा?',
    visualEmoji: '😨 ↔️ 🦁 ⚔️',
    payload: {
      options: [
        { id: 'opt_vlm1', text: 'बहादुर / निडर', isCorrect: true },
        { id: 'opt_vlm2', text: 'कमज़ोर', isCorrect: false },
        { id: 'opt_vlm3', text: 'मूर्ख', isCorrect: false },
      ],
    },
    explanation: '💡 डरपोक का विपरीतार्थक (विलोम) शब्द **बहादुर** या **निडर** होता है!',
    points: 10,
  },
  {
    id: 'c3_h4_concept_vilom_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'बहादुर बित्तो (विलोम व पर्यायवाची शब्द)',
    concept: 'विलोम शब्द रिक्त स्थान',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'शेर आगे भाग रहा था और भेड़िया उसके [BLANK] बंधा हुआ था। (आगे का विलोम)',
    visualEmoji: '🦁 🐺 ↔️',
    payload: {
      correctAnswer: 'पीछे',
      wordBank: ['पीछे', 'ऊपर', 'नीचे', 'पास'],
      displayTemplate: 'आगे का विलोम शब्द [BLANK] होता है।',
    },
    explanation: '💡 "आगे" का विलोम शब्द **"पीछे"** होता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: पर्यायवाची शब्द (समानार्थक शब्द)
  // --------------------------------------------------------------------------
  {
    id: 'c3_h4_concept_paryay_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'बहादुर बित्तो (विलोम व पर्यायवाची शब्द)',
    concept: 'शेर के पर्यायवाची शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: '"शेर" जंगल का राजा है। शेर का पर्यायवाची (समान अर्थ वाला) शब्द कौन सा है?',
    visualEmoji: '🦁 👑 🌲',
    payload: {
      options: [
        { id: 'opt_pyr1', text: 'सिंह / वनराज', isCorrect: true },
        { id: 'opt_pyr2', text: 'गज', isCorrect: false },
        { id: 'opt_pyr3', text: 'अश्व', isCorrect: false },
      ],
    },
    explanation: '💡 शेर के पर्यायवाची शब्द **सिंह**, **वनराज**, और **केसरी** हैं!',
    points: 10,
  },
  {
    id: 'c3_h4_concept_paryay_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'बहादुर बित्तो (विलोम व पर्यायवाची शब्द)',
    concept: 'घोड़ा व सूर्य का पर्यायवाची',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'बित्तो जिस घोड़े पर सवार थी, घोड़े को संस्कृत और हिंदी में [BLANK] भी कहते हैं।',
    visualEmoji: '🐎 💨',
    payload: {
      correctAnswer: 'अश्व',
      wordBank: ['अश्व', 'गज', 'खग', 'वानर'],
      displayTemplate: 'घोड़े का एक पर्यायवाची शब्द [BLANK] है।',
    },
    explanation: '💡 घोड़े के पर्यायवाची हैं: **अश्व**, **तुरंग**, **हय** और **घोटक**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: पर्यायवाची व विलोम मिलान
  // --------------------------------------------------------------------------
  {
    id: 'c3_h4_concept_match_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'बहादुर बित्तो (विलोम व पर्यायवाची शब्द)',
    concept: 'पर्यायवाची शब्द मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'शब्दों को उनके सही पर्यायवाची (समानार्थी) शब्दों से मिलाइए:',
    visualEmoji: '🤝 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'h4_p1', left: 'जल', right: 'पानी' },
        { id: 'h4_p2', left: 'सूर्य', right: 'सूरज' },
        { id: 'h4_p3', left: 'हवा', right: 'पवन' },
        { id: 'h4_p4', left: 'पेड़', right: 'वृक्ष' },
      ],
    },
    explanation: '💡 जल = पानी, सूर्य = सूरज, हवा = पवन, पेड़ = वृक्ष।',
    points: 15,
  },
  {
    id: 'c3_h4_concept_order_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'बहादुर बित्तो (विलोम व पर्यायवाची शब्द)',
    concept: 'कहानी का सार्थक वाक्य निर्माण',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'शब्दों को क्रमबद्ध करके सही वाक्य बनाइए:',
    visualEmoji: '👩‍🌾 🐎 🦁',
    payload: {
      tokens: ['बहादुर बित्तो ने', 'अपनी सूझबूझ से', 'शेर को', 'खेत से भगा दिया।'],
      scrambled: ['खेत से भगा दिया।', 'शेर को', 'बहादुर बित्तो ने', 'अपनी सूझबूझ से'],
      correctSequence: ['बहादुर बित्तो ने', 'अपनी सूझबूझ से', 'शेर को', 'खेत से भगा दिया।'],
    },
    explanation: '💡 सही क्रम: "बहादुर बित्तो ने अपनी सूझबूझ से शेर को खेत से भगा दिया।"',
    points: 15,
  },
];
