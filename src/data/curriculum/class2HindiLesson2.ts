import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 2 HINDI (सारंगी 2 / RIMJHIM 2)
// CHAPTER 2: भालू ने खेली फुटबॉल (मात्रा पुनरावृत्ति)
// Comprehensive Curriculum Covering All 6 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_2_HINDI_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: कहानी बोध (भालू व शेर का बच्चा)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h2_concept_story_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'भालू ने खेली फुटबॉल (मात्रा पुनरावृत्ति)',
    concept: 'कहानी की घटना',
    difficulty: 'easy',
    type: 'mcq',
    question: 'सर्दियों के मौसम में भालू साहब सुबह सैर पर निकले। उन्होंने जामुन के पेड़ के नीचे गोल-मटोल सिमटे हुए किसे देखा जिसे उन्होंने फुटबॉल समझ लिया?',
    visualEmoji: '🐻 ⚽ 🦁',
    payload: {
      options: [
        { id: 'opt_st1_1', text: 'शेर के बच्चे को 🦁', isCorrect: true },
        { id: 'opt_st1_2', text: 'सच्ची फुटबॉल को', isCorrect: false },
        { id: 'opt_st1_3', text: 'एक बड़े तरबूज को', isCorrect: false },
      ],
    },
    explanation: '💡 भालू दादा ने ठंड में सिकुड़कर बैठे **शेर के बच्चे 🦁** को फुटबॉल समझकर पैर से उछाल दिया था!',
    points: 10,
  },
  {
    id: 'c2_h2_concept_story_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'भालू ने खेली फुटबॉल (मात्रा पुनरावृत्ति)',
    concept: 'शेर के बच्चे का आनंद',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'जब भालू ने शेर के बच्चे को उछाला, तो शेर के बच्चे को हवा में उछलने में बहुत [BLANK] आया।',
    visualEmoji: '🦁 🤸 😄',
    payload: {
      correctAnswer: 'मज़ा',
      wordBank: ['मज़ा', 'दुख', 'रोना', 'गुस्सा'],
      displayTemplate: 'शेर के बच्चे को बहुत [BLANK] आया।',
    },
    explanation: '💡 शेर के बच्चे को बार-बार हवा में उछलने में बहुत **मज़ा** आया! 😄',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: शुद्ध वर्तनी व मात्रा ज्ञान
  // --------------------------------------------------------------------------
  {
    id: 'c2_h2_concept_matra_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'भालू ने खेली फुटबॉल (मात्रा पुनरावृत्ति)',
    concept: 'भालू शब्द में मात्रा',
    difficulty: 'easy',
    type: 'mcq',
    question: '"भालू" शब्द में कौन-कौन सी मात्राएँ लगी हैं?',
    visualEmoji: '🐻 🔤',
    payload: {
      options: [
        { id: 'opt_mt1_1', text: 'भा में आ (ा) और लू में बड़ा ऊ (ू) की मात्रा', isCorrect: true },
        { id: 'opt_mt1_2', text: 'छोटी इ की मात्रा', isCorrect: false },
        { id: 'opt_mt1_3', text: 'ए की मात्रा', isCorrect: false },
      ],
    },
    explanation: '💡 भ् + **ा** = भा, ल् + **ू** = लू -> **भालू**! 🐻',
    points: 10,
  },
  {
    id: 'c2_h2_concept_matra_02',
    grade: 2,
    subject: 'hindi',
    chapter: 'भालू ने खेली फुटबॉल (मात्रा पुनरावृत्ति)',
    concept: 'सही वर्तनी पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इनमें से कौन सा शब्द सही वर्तनी (शुद्ध रूप) में लिखा है?',
    visualEmoji: '☀️ ❄️ 🌫️',
    payload: {
      options: [
        { id: 'opt_vr2_1', text: 'मौसम ⛅ (औ की मात्रा)', isCorrect: true },
        { id: 'opt_vr2_2', text: 'मोसम', isCorrect: false },
        { id: 'opt_vr2_3', text: 'मूसम', isCorrect: false },
      ],
    },
    explanation: '💡 शुद्ध वर्तनी है: **मौसम**! ⛅',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: 'र' के विभिन्न रूप (रेफ़ र्)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h2_concept_ref_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'भालू ने खेली फुटबॉल (मात्रा पुनरावृत्ति)',
    concept: 'रेफ़ (र्) का प्रयोग',
    difficulty: 'medium',
    type: 'mcq',
    question: '"सर्दी" और "सूर्य" शब्द में अक्षर के ऊपर लगा चिह्न (  ँ  नहीं, बल्कि  र्  ) क्या कहलाता है?',
    visualEmoji: '☀️ ❄️',
    payload: {
      options: [
        { id: 'opt_rf1_1', text: 'रेफ़ ( आधा \'र\' का रूप )', isCorrect: true },
        { id: 'opt_rf1_2', text: 'चन्द्रबिन्दु', isCorrect: false },
        { id: 'opt_rf1_3', text: 'विसर्ग', isCorrect: false },
      ],
    },
    explanation: '💡 जब आधा \'र\' किसी व्यंजन के ऊपर लगता है (जैसे सूर्य ☀️, सर्दी ❄️, पार्क 🏞️), उसे **रेफ़** कहते हैं!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: वाक्य निर्माण (Drag Order)
  // --------------------------------------------------------------------------
  {
    id: 'c2_h2_concept_order_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'भालू ने खेली फुटबॉल (मात्रा पुनरावृत्ति)',
    concept: 'कहानी का वाक्य क्रम',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'कहानी के शब्दों को सही क्रम में लगाकर सही वाक्य बनाइए:',
    visualEmoji: '🐻 🏃‍♂️ 🌳',
    payload: {
      tokens: ['भालू', 'साहब', 'सुबह', 'सैर', 'पर', 'निकले।'],
      scrambled: ['सैर', 'निकले।', 'भालू', 'सुबह', 'साहब', 'पर'],
      correctSequence: ['भालू', 'साहब', 'सुबह', 'सैर', 'पर', 'निकले।'],
    },
    explanation: '💡 सही वाक्य: "**भालू साहब सुबह सैर पर निकले।**" 🐻',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: मात्राओं का शब्दों से सही मिलान
  // --------------------------------------------------------------------------
  {
    id: 'c2_h2_concept_match_01',
    grade: 2,
    subject: 'hindi',
    chapter: 'भालू ने खेली फुटबॉल (मात्रा पुनरावृत्ति)',
    concept: 'मात्रा और शब्द मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'मात्रा को उसके सही शब्द से मिलाइए:',
    visualEmoji: '🔤 🎯',
    payload: {
      pairs: [
        { id: 'mt_p1', left: 'बड़ा ऊ की मात्रा ( ू )', right: 'भालू 🐻' },
        { id: 'mt_p2', left: 'बड़ी ई की मात्रा ( ी )', right: 'सर्दियों ❄️' },
        { id: 'mt_p3', left: 'ओ की मात्रा ( ो )', right: 'कोहरा 🌫️' },
        { id: 'mt_p4', left: 'ऐ की मात्रा ( ै )', right: 'सैर 🚶' },
      ],
    },
    explanation: '💡 ू = भालू, ी = सर्दी, ो = कोहरा, ै = सैर!',
    points: 15,
  },
];
