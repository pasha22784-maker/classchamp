import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 HINDI (सारंगी 1 / RIMJHIM 1)
// CHAPTER 7: उल्टे अर्थ वाले शब्द (विलोम शब्द)
// Comprehensive Curriculum Covering All 8 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_HINDI_LESSON_7_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: बड़ा और छोटा (Big vs Small)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h7_concept_bada_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'बड़ा का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'हाथी 🐘 बहुत बड़ा जानवर है, लेकिन चूहा 🐭 बहुत [BLANK] है। "बड़ा" का उल्टा शब्द क्या है?',
    visualEmoji: '🐘 🐭',
    payload: {
      options: [
        { id: 'opt_bd1_1', text: 'छोटा 🐭', isCorrect: true },
        { id: 'opt_bd1_2', text: 'मोटा', isCorrect: false },
        { id: 'opt_bd1_3', text: 'लंबा', isCorrect: false },
      ],
    },
    explanation: '💡 **बड़ा** का उल्टा (विलोम) शब्द **छोटा** होता है! जैसे हाथी बड़ा है और चूहा छोटा है।',
    points: 10,
  },
  {
    id: 'c1_h7_concept_bada_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'छोटा का विलोम शब्द',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'एक बड़ा बरगद का पेड़ 🌳 और एक छोटा पौधा 🌱। "छोटा" का उल्टा शब्द [BLANK] है।',
    visualEmoji: '🌳 🌱',
    payload: {
      correctAnswer: 'बड़ा',
      wordBank: ['बड़ा', 'काला', 'ऊपर', 'दूर'],
      displayTemplate: 'छोटा का उल्टा शब्द [BLANK] है।',
    },
    explanation: '💡 छोटा का उल्टा **बड़ा** होता है! 🌳',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: ऊपर और नीचे (Up vs Down)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h7_concept_upar_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'ऊपर का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'चिड़िया डाल के **ऊपर** 🐦 बैठी है, और बिल्ली पेड़ के [BLANK] 🐱 खड़ी है। "ऊपर" का उल्टा शब्द क्या है?',
    visualEmoji: '🐦 🌳 🐱',
    payload: {
      options: [
        { id: 'opt_up1_1', text: 'नीचे 👇', isCorrect: true },
        { id: 'opt_up1_2', text: 'अंदर', isCorrect: false },
        { id: 'opt_up1_3', text: 'आगे', isCorrect: false },
      ],
    },
    explanation: '💡 **ऊपर** का उलटा शब्द **नीचे** होता है! 👆 ↔️ 👇',
    points: 10,
  },
  {
    id: 'c1_h7_concept_upar_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'ऊपर और नीचे की जोड़ी',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'पतंग आकाश में ऊपर उड़ती है 🪁। पत्थर ज़मीन पर [BLANK] गिरता है।',
    visualEmoji: '🪁 🧱',
    payload: {
      correctAnswer: 'नीचे',
      wordBank: ['नीचे', 'दूर', 'छोटा', 'गरम'],
      displayTemplate: 'पत्थर ज़मीन पर [BLANK] गिरता है।',
    },
    explanation: '💡 ऊपर 🪁 का उल्टा **नीचे** 🧱 होता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: दिन और रात (Day vs Night)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h7_concept_din_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'दिन का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'दिन ☀️ के समय सूरज निकलता है और उजाला होता है। जब चाँद-तारे 🌙✨ निकलते हैं तो वह क्या होती है?',
    visualEmoji: '☀️ ↔️ 🌙',
    payload: {
      options: [
        { id: 'opt_dn1_1', text: 'रात 🌙', isCorrect: true },
        { id: 'opt_dn1_2', text: 'सुबह', isCorrect: false },
        { id: 'opt_dn1_3', text: 'दोपहर', isCorrect: false },
      ],
    },
    explanation: '💡 **दिन** का उल्टा शब्द **रात** होता है! ☀️ ↔️ 🌙',
    points: 10,
  },
  {
    id: 'c1_h7_concept_din_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'उजाला और अंधेरा',
    difficulty: 'medium',
    type: 'mcq',
    question: 'दीपक जलाने से उजाला 🪔 होता है। "उजाला" का उल्टा शब्द क्या होगा?',
    visualEmoji: '🪔 💡 🌑',
    payload: {
      options: [
        { id: 'opt_uj1_1', text: 'अंधेरा 🌑', isCorrect: true },
        { id: 'opt_uj1_2', text: 'धूप', isCorrect: false },
        { id: 'opt_uj1_3', text: 'सफ़ेद', isCorrect: false },
      ],
    },
    explanation: '💡 **उजाला** का उल्टा शब्द **अंधेरा** होता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: गरम और ठंडा (Hot vs Cold)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h7_concept_garm_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'गरम का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'चाय ☕ गरम-गरम होती है। कुल्फ़ी या बर्फ़ 🍦 कैसी होती है?',
    visualEmoji: '☕ ↔️ 🍦',
    payload: {
      options: [
        { id: 'opt_gm1_1', text: 'ठंडी 🍦', isCorrect: true },
        { id: 'opt_gm1_2', text: 'मीठी', isCorrect: false },
        { id: 'opt_gm1_3', text: 'तीखी', isCorrect: false },
      ],
    },
    explanation: '💡 **गरम** का विलोम (उल्टा) शब्द **ठंडा** होता है! ☕ ↔️ 🍦',
    points: 10,
  },
  {
    id: 'c1_h7_concept_garm_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'गरम और ठंडा वाक्य प्रयोग',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'सूप गरम है 🍲 और आइसक्रीम [BLANK] है 🍨।',
    visualEmoji: '🍲 🍨',
    payload: {
      correctAnswer: 'ठंडी',
      wordBank: ['ठंडी', 'बड़ी', 'ऊपर', 'नीली'],
      displayTemplate: 'सूप गरम है और आइसक्रीम [BLANK] है।',
    },
    explanation: '💡 गरम का उल्टा **ठंडी/ठंडा** होता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: अंदर और बाहर (Inside vs Outside)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h7_concept_andar_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'अंदर का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'बच्चे कक्षा के **अंदर** 🏫 पढ़ रहे हैं, और बाहर मैदान में गेंद ⚽ रखी है। "अंदर" का उल्टा शब्द क्या है?',
    visualEmoji: '🏫 🚪 ⚽',
    payload: {
      options: [
        { id: 'opt_an1_1', text: 'बाहर 🌳', isCorrect: true },
        { id: 'opt_an1_2', text: 'ऊपर', isCorrect: false },
        { id: 'opt_an1_3', text: 'पीछे', isCorrect: false },
      ],
    },
    explanation: '💡 **अंदर** का उल्टा शब्द **बाहर** होता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: आगे और पीछे / पास और दूर
  // --------------------------------------------------------------------------
  {
    id: 'c1_h7_concept_paas_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'पास का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'किताब मेरी मेज़ के **पास** 📖 रखी है, लेकिन चाँद आकाश में बहुत [BLANK] 🌙 है।',
    visualEmoji: '📖 ↔️ 🌙',
    payload: {
      options: [
        { id: 'opt_ps1_1', text: 'दूर 🔭', isCorrect: true },
        { id: 'opt_ps1_2', text: 'बड़ा', isCorrect: false },
        { id: 'opt_ps1_3', text: 'छोटा', isCorrect: false },
      ],
    },
    explanation: '💡 **पास** का उल्टा शब्द **दूर** होता है!',
    points: 10,
  },
  {
    id: 'c1_h7_concept_aage_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'आगे का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'रेलगाड़ी में इंजन सबसे **आगे** 🚂 होता है। गार्ड का डिब्बा सबसे [BLANK] होता है?',
    visualEmoji: '🚂 🚃 🚃',
    payload: {
      options: [
        { id: 'opt_ag1_1', text: 'पीछे 🔙', isCorrect: true },
        { id: 'opt_ag1_2', text: 'नीचे', isCorrect: false },
        { id: 'opt_ag1_3', text: 'अंदर', isCorrect: false },
      ],
    },
    explanation: '💡 **आगे** का उल्टा शब्द **पीछे** होता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: नया और पुराना (New vs Old) / हँसना और रोना
  // --------------------------------------------------------------------------
  {
    id: 'c1_h7_concept_naya_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'नया का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'रोहन का नया बस्ता 🎒 चमक रहा है। उसकी पुरानी किताब [BLANK] हो गई है। "नया" का उल्टा शब्द क्या है?',
    visualEmoji: '🎒 ✨ 📖',
    payload: {
      options: [
        { id: 'opt_ny1_1', text: 'पुराना 📜', isCorrect: true },
        { id: 'opt_ny1_2', text: 'गंदा', isCorrect: false },
        { id: 'opt_ny1_3', text: 'छोटा', isCorrect: false },
      ],
    },
    explanation: '💡 **नया** का उल्टा शब्द **पुराना** होता है! ✨ ↔️ 📜',
    points: 10,
  },
  {
    id: 'c1_h7_concept_hansna_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'हँसना का विलोम शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'जोकर को देखकर बच्चे हँसते हैं 😄। जब चोट लगती है तो बच्चे क्या करते हैं?',
    visualEmoji: '😄 ↔️ 😢',
    payload: {
      options: [
        { id: 'opt_hn1_1', text: 'रोना 😢', isCorrect: true },
        { id: 'opt_hn1_2', text: 'सोना 😴', isCorrect: false },
        { id: 'opt_hn1_3', text: 'दौड़ना 🏃', isCorrect: false },
      ],
    },
    explanation: '💡 **हँसना** का उल्टा शब्द **रोना** होता है! 😄 ↔️ 😢',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 8: उल्टे शब्दों की सही जोड़ी (Matching Pairs)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h7_concept_jodi_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'सही विलोम जोड़ी पहचान',
    difficulty: 'medium',
    type: 'mcq',
    question: 'इनमें से कौन सी उल्टे अर्थ (विलोम शब्द) की सही जोड़ी है?',
    visualEmoji: '↔️ 🎯',
    payload: {
      options: [
        { id: 'opt_jd1_1', text: 'दिन — रात ☀️🌙', isCorrect: true },
        { id: 'opt_jd1_2', text: 'पानी — जल', isCorrect: false },
        { id: 'opt_jd1_3', text: 'बड़ा — मोटा', isCorrect: false },
      ],
    },
    explanation: '💡 **दिन** का उल्टा **रात** होता है, यह सही विलोम जोड़ी है!',
    points: 10,
  },
  {
    id: 'c1_h7_concept_jodi_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'जोड़ी मिलान (Match Pairs)',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'शब्दों को उनके सही उल्टे (विलोम) अर्थ से जोड़िए:',
    visualEmoji: '↔️ 🧩',
    payload: {
      pairs: [
        { id: 'p1', left: 'बड़ा 🐘', right: 'छोटा 🐭' },
        { id: 'p2', left: 'ऊपर 👆', right: 'नीचे 👇' },
        { id: 'p3', left: 'गरम ☕', right: 'ठंडा 🍦' },
        { id: 'p4', left: 'दिन ☀️', right: 'रात 🌙' },
      ],
    },
    explanation: '💡 बड़ा ↔️ छोटा, ऊपर ↔️ नीचे, गरम ↔️ ठंडा, दिन ↔️ रात!',
    points: 15,
  },
  {
    id: 'c1_h7_concept_jodi_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'उल्टे अर्थ वाले शब्द (विलोम शब्द)',
    concept: 'जोड़ी मिलान भाग २',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'उल्टे अर्थ वाले शब्दों का सही मिलान करें:',
    visualEmoji: '🔄 🧩',
    payload: {
      pairs: [
        { id: 'p2_1', left: 'हँसना 😄', right: 'रोना 😢' },
        { id: 'p2_2', left: 'अंदर 📦', right: 'बाहर 🌳' },
        { id: 'p2_3', left: 'पास 📍', right: 'दूर 🔭' },
        { id: 'p2_4', left: 'नया 🎒', right: 'पुराना 📜' },
      ],
    },
    explanation: '💡 हँसना ↔️ रोना, अंदर ↔️ बाहर, पास ↔️ दूर, नया ↔️ पुराना!',
    points: 15,
  },
];
