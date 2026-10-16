import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 HINDI (वीणा 3 / RIMJHIM 3)
// CHAPTER 5: हमसे सब कहते (मुहावरे परिचय)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_HINDI_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 'हमसे सब कहते' कविता संदर्भ
  // --------------------------------------------------------------------------
  {
    id: 'c3_h5_concept_poem_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'हमसे सब कहते (मुहावरे परिचय)',
    concept: 'कविता की मूल भावना',
    difficulty: 'easy',
    type: 'mcq',
    question: 'कविता "हमसे सब कहते" में बच्चा किस बात की शिकायत करता है?',
    visualEmoji: '👶 ☀️ 🌙 💨',
    payload: {
      options: [
        { id: 'opt_hm1', text: 'सूरज, चाँद, हवा को कोई नहीं डांटता, सब सिर्फ़ बच्चों पर गुस्सा करते हैं', isCorrect: true },
        { id: 'opt_hm2', text: 'उसे मिठाई नहीं मिलती', isCorrect: false },
        { id: 'opt_hm3', text: 'उसे स्कूल नहीं जाना', isCorrect: false },
      ],
    },
    explanation: '💡 कविता में बच्चा कहता है: "नहीं सूर्य से कोई कहता, धूप यहाँ पर मत फैलाओ! कोई नहीं चाँद से कहता, उठा चाँदनी को ले जाओ! फिर क्यों हमसे सब कहते?"',
    points: 10,
  },
  {
    id: 'c3_h5_concept_poem_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'हमसे सब कहते (मुहावरे परिचय)',
    concept: 'हवा से क्या नहीं कहते',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'हवा से कोई नहीं कहता, "खबरदार जो [BLANK] आई!"',
    visualEmoji: '🌬️ 🚪 🏠',
    payload: {
      correctAnswer: 'अंदर',
      wordBank: ['अंदर', 'बाहर', 'ऊपर', 'नीचे'],
      displayTemplate: 'खबरदार जो [BLANK] आई!',
    },
    explanation: '💡 कविता की पंक्ति है: "हवा से भी कोई कभी नहीं कहता, खबरदार जो **अंदर** आई!"',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: मुहावरे का परिचय व अर्थ
  // --------------------------------------------------------------------------
  {
    id: 'c3_h5_concept_muhavare_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'हमसे सब कहते (मुहावरे परिचय)',
    concept: 'फूला न समाना मुहावरा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'मुहावरे "फूला न समाना" का सही अर्थ क्या है?',
    visualEmoji: '🥳 🎈 🏆',
    payload: {
      options: [
        { id: 'opt_mh1', text: 'बहुत अधिक खुश होना', isCorrect: true },
        { id: 'opt_mh2', text: 'फूलों में छिप जाना', isCorrect: false },
        { id: 'opt_mh3', text: 'मोटा हो जाना', isCorrect: false },
      ],
    },
    explanation: '💡 "फूला न समाना" एक प्रसिद्ध मुहावरा है जिसका अर्थ है **बहुत प्रसन्न या खुश होना** (जैसे कक्षा में प्रथम आने पर रोहन फूला न समाया)!',
    points: 10,
  },
  {
    id: 'c3_h5_concept_muhavare_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'हमसे सब कहते (मुहावरे परिचय)',
    concept: 'आँख लगना मुहावरा',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'किताब पढ़ते-पढ़ते दादाजी की आँख लग गई। "आँख लगना" का अर्थ [BLANK] जाना है।',
    visualEmoji: '👴 📖 😴',
    payload: {
      correctAnswer: 'सो',
      wordBank: ['सो', 'रो', 'हँस', 'गिर'],
      displayTemplate: 'आँख लगना का अर्थ [BLANK] जाना है।',
    },
    explanation: '💡 "आँख लगना" मुहावरे का अर्थ है **नींद आना या सो जाना**!',
    points: 10,
  },
  {
    id: 'c3_h5_concept_muhavare_03',
    grade: 3,
    subject: 'hindi',
    chapter: 'हमसे सब कहते (मुहावरे परिचय)',
    concept: 'कान भरना मुहावरा',
    difficulty: 'medium',
    type: 'mcq',
    question: 'किसी के विरुद्ध किसी के "कान भरना" का क्या अर्थ होता है?',
    visualEmoji: '👂 🤫 🗣️',
    payload: {
      options: [
        { id: 'opt_kan1', text: 'चुगली करना / किसी के विरुद्ध भड़काना', isCorrect: true },
        { id: 'opt_kan2', text: 'कान में पानी डालना', isCorrect: false },
        { id: 'opt_kan3', text: 'ऊँचा सुनना', isCorrect: false },
      ],
    },
    explanation: '💡 "कान भरना" का अर्थ होता है किसी के बारे में **चुगली करना या पीठ पीछे गलत बातें बोलना**।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: मुहावरे मिलान व वाक्य क्रम
  // --------------------------------------------------------------------------
  {
    id: 'c3_h5_concept_match_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'हमसे सब कहते (मुहावरे परिचय)',
    concept: 'मुहावरों और उनके अर्थों का मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'मुहावरों को उनके सही अर्थ से मिलाइए:',
    visualEmoji: '💭 ➔ 🎯',
    payload: {
      pairs: [
        { id: 'h5_p1', left: 'नौ दो ग्यारह होना', right: 'भाग जाना' },
        { id: 'h5_p2', left: 'दाल में काला होना', right: 'कुछ गड़बड़ होना' },
        { id: 'h5_p3', left: 'फूला न समाना', right: 'बहुत खुश होना' },
        { id: 'h5_p4', left: 'आँख लगना', right: 'सो जाना' },
      ],
    },
    explanation: '💡 नौ दो ग्यारह होना = भाग जाना; दाल में काला = कुछ गड़बड़; फूला न समाना = बहुत खुश होना; आँख लगना = सो जाना।',
    points: 15,
  },
  {
    id: 'c3_h5_concept_order_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'हमसे सब कहते (मुहावरे परिचय)',
    concept: 'मुहावरेदार वाक्य निर्माण',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'मुहावरेदार वाक्य के शब्दों को सही क्रम में लगाइए:',
    visualEmoji: '👮 🏃 💨',
    payload: {
      tokens: ['पुलिस को देखते ही', 'चोर', 'नौ दो ग्यारह', 'हो गया।'],
      scrambled: ['नौ दो ग्यारह', 'चोर', 'हो गया।', 'पुलिस को देखते ही'],
      correctSequence: ['पुलिस को देखते ही', 'चोर', 'नौ दो ग्यारह', 'हो गया।'],
    },
    explanation: '💡 सही क्रम: "पुलिस को देखते ही चोर नौ दो ग्यारह हो गया।"',
    points: 15,
  },
];
