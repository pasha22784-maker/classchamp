import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 4 HINDI (रिमझिम 4)
// CHAPTER 6: थप्प रोटी थप्प दाल (अनेक शब्दों के लिए एक शब्द)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_4_HINDI_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: 'थप्प रोटी थप्प दाल' नाटक संदर्भ
  // --------------------------------------------------------------------------
  {
    id: 'c4_h6_concept_play_01',
    grade: 4,
    subject: 'hindi',
    chapter: 'थप्प रोटी थप्प दाल (अनेक शब्दों के लिए एक शब्द)',
    concept: 'नाटक का खेल व विषय',
    difficulty: 'easy',
    type: 'mcq',
    question: 'नाटक "थप्प रोटी थप्प दाल" में बच्चे कौन सा मजेदार खेल खेल रहे हैं?',
    visualEmoji: '🍲 🫓 👧👦',
    payload: {
      options: [
        { id: 'opt_tr1', text: 'रसोई बनाने और खाना पकाने का खेल', isCorrect: true },
        { id: 'opt_tr2', text: 'क्रिकेट का खेल', isCorrect: false },
        { id: 'opt_tr3', text: 'लुका-छिपी का खेल', isCorrect: false },
      ],
    },
    explanation: '💡 मुन्नी और नीना अपने दोस्तों चुन्नू, टिंकू और सरला के साथ घर से आटा, घी, दाल और मट्ठा लाकर रसोई का खेल खेलती हैं!',
    points: 10,
  },
  {
    id: 'c4_h6_concept_play_02',
    grade: 4,
    subject: 'hindi',
    chapter: 'थप्प रोटी थप्प दाल (अनेक शब्दों के लिए एक शब्द)',
    concept: 'मट्ठा चलाने का साधन',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'दही बिलोकर मट्ठा (छाछ) तैयार करने के लिए बच्चे हांडी में [BLANK] चलाते हैं।',
    visualEmoji: '🥛 🍶 🌀',
    payload: {
      correctAnswer: 'रई',
      wordBank: ['रई', 'चम्मच', 'चाकू', 'बेलन'],
      displayTemplate: 'हांडी में [BLANK] से दही बिलोते हैं।',
    },
    explanation: '💡 दही मथने या बिलोने के पारंपरिक लकड़ी के उपकरण को **रई (या मथानी)** कहते हैं!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: अनेक शब्दों के लिए एक शब्द (वाक्यांश बोध)
  // --------------------------------------------------------------------------
  {
    id: 'c4_h6_concept_one_word_01',
    grade: 4,
    subject: 'hindi',
    chapter: 'थप्प रोटी थप्प दाल (अनेक शब्दों के लिए एक शब्द)',
    concept: 'खेती करने वाला',
    difficulty: 'easy',
    type: 'mcq',
    question: '"जो खेतों में अनाज और सब्जियाँ उगाता है", उसे एक शब्द में क्या कहते हैं?',
    visualEmoji: '🌾 🚜 🧑‍🌾',
    payload: {
      options: [
        { id: 'opt_ks1', text: 'किसान (कृषक)', isCorrect: true },
        { id: 'opt_ks2', text: 'लोहार', isCorrect: false },
        { id: 'opt_ks3', text: 'बढ़ई', isCorrect: false },
      ],
    },
    explanation: '💡 जो खेतों में फसलें उगाता है, उसे **किसान** कहते हैं!',
    points: 10,
  },
  {
    id: 'c4_h6_concept_one_word_02',
    grade: 4,
    subject: 'hindi',
    chapter: 'थप्प रोटी थप्प दाल (अनेक शब्दों के लिए एक शब्द)',
    concept: 'मिट्टी के बर्तन बनाने वाला',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'चाक पर मिट्टी के दीये, मटके और कुल्हड़ बनाने वाले को [BLANK] कहते हैं।',
    visualEmoji: '🏺 🍶 🪔',
    payload: {
      correctAnswer: 'कुम्हार',
      wordBank: ['कुम्हार', 'सुनार', 'दर्ज़ी', 'मोची'],
      displayTemplate: 'मिट्टी के बर्तन बनाने वाला = [BLANK]',
    },
    explanation: '💡 मिट्टी के बर्तन बनाने वाले शिल्पकार को **कुम्हार** कहा जाता है!',
    points: 10,
  },
  {
    id: 'c4_h6_concept_one_word_03',
    grade: 4,
    subject: 'hindi',
    chapter: 'थप्प रोटी थप्प दाल (अनेक शब्दों के लिए एक शब्द)',
    concept: 'मिठाई बनाने वाला',
    difficulty: 'medium',
    type: 'mcq',
    question: '"जो स्वादिष्ट मिठाइयाँ बनाता और बेचता है", उसे क्या कहते हैं?',
    visualEmoji: '🍬 🥮 🍯',
    payload: {
      options: [
        { id: 'opt_hl1', text: 'हलवाई', isCorrect: true },
        { id: 'opt_hl2', text: 'बढ़ई', isCorrect: false },
        { id: 'opt_hl3', text: 'दर्ज़ी', isCorrect: false },
      ],
    },
    explanation: '💡 विभिन्न प्रकार की मिठाइयाँ बनाने वाले कारीगर को **हलवाई** कहते हैं!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: अनेक शब्दों के लिए एक शब्द मिलान व नाटक क्रम
  // --------------------------------------------------------------------------
  {
    id: 'c4_h6_concept_match_01',
    grade: 4,
    subject: 'hindi',
    chapter: 'थप्प रोटी थप्प दाल (अनेक शब्दों के लिए एक शब्द)',
    concept: 'पेशेवर कारीगरों का मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'वाक्यांश को उसके सही एक शब्द से मिलाइए:',
    visualEmoji: '🧑‍🔧 ➔ 🏷️',
    payload: {
      pairs: [
        { id: 'ow_p1', left: 'जो कपड़े सीता है 🧵', right: 'दर्ज़ी' },
        { id: 'ow_p2', left: 'जो लकड़ी का काम करे 🪚', right: 'बढ़ई' },
        { id: 'ow_p3', left: 'जो सोने के गहने बनाए 💍', right: 'सुनार' },
        { id: 'ow_p4', left: 'जो देश की सीमा पर रक्षा करे 🎖️', right: 'सैनिक' },
      ],
    },
    explanation: '💡 कपड़े सीने वाला = दर्ज़ी, लकड़ी का कारीगर = बढ़ई, गहने बनाने वाला = सुनार, रक्षा करने वाला = सैनिक।',
    points: 15,
  },
  {
    id: 'c4_h6_concept_order_01',
    grade: 4,
    subject: 'hindi',
    chapter: 'थप्प रोटी थप्प दाल (अनेक शब्दों के लिए एक शब्द)',
    concept: 'नाटक की घटनाओं का सही क्रम',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'नाटक की प्रमुख घटनाओं को सही क्रम में लगाइए:',
    visualEmoji: '👧 ➔ 🥣 ➔ 😴 ➔ 🐱',
    payload: {
      tokens: ['मुन्नी ने घर से आटा और घी मँगाया', 'सरला ने रई से मट्ठा चलाया', 'रोटी-दाल पकाकर बच्चे सो गए', 'बिल्ली आकर सारी रोटी और मलाई खा गई'],
      scrambled: ['बिल्ली आकर सारी रोटी और मलाई खा गई', 'रोटी-दाल पकाकर बच्चे सो गए', 'मुन्नी ने घर से आटा और घी मँगाया', 'सरला ने रई से मट्ठा चलाया'],
      correctSequence: ['मुन्नी ने घर से आटा और घी मँगाया', 'सरला ने रई से मट्ठा चलाया', 'रोटी-दाल पकाकर बच्चे सो गए', 'बिल्ली आकर सारी रोटी और मलाई खा गई'],
    },
    explanation: '💡 सही क्रम: आटा-घी लाना ➔ मट्ठा चलाना ➔ खाना बनाकर सोना ➔ बिल्ली का चट कर जाना!',
    points: 15,
  },
];
