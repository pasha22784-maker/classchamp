import { Question } from '../../types';

// ============================================================================
// CLASS 6 HINDI (UNIVERSAL VYAKARAN)
// CHAPTER 6: समास परिचय व मुहावरे-लोकोक्तियाँ
// 15 Questions: 5 Easy, 5 Medium, 5 Hard (Points: 10, 15, 20)
// Global Benchmark Standard | Zero Spoilers | Universal Grammar
// ============================================================================

export const CLASS_6_HINDI_LESSON_6_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // TIER 1: EASY (5 Questions | 10 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h6_q01',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'समास की परिभाषा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'दो या दो से अधिक शब्दों के मेल से नया संक्षिप्त सार्थक शब्द बनाने की प्रक्रिया को क्या कहते हैं?',
    visualEmoji: '🤝 📖',
    payload: {
      options: [
        { id: 'opt_1', text: 'समास', isCorrect: true },
        { id: 'opt_2', text: 'संधि', isCorrect: false },
        { id: 'opt_3', text: 'उपसर्ग', isCorrect: false },
        { id: 'opt_4', text: 'मुहावरा', isCorrect: false },
      ],
    },
    explanation: 'वर्णों के मेल को संधि कहते हैं, जबकि शब्दों के मेल से संक्षिप्त शब्द बनाने की क्रिया को समास कहते हैं।',
    points: 10,
  },
  {
    id: 'c6_h6_q02',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'द्वंद्व समास की पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'जिस समास में दोनों पद समान रूप से प्रधान हों और विग्रह करने पर "और" या "तथा" लगे, उसे क्या कहते हैं?',
    visualEmoji: '⚖️ 👫',
    payload: {
      options: [
        { id: 'opt_1', text: 'द्वंद्व समास', isCorrect: true },
        { id: 'opt_2', text: 'द्विगु समास', isCorrect: false },
        { id: 'opt_3', text: 'तत्पुरुष समास', isCorrect: false },
        { id: 'opt_4', text: 'अव्ययीभाव समास', isCorrect: false },
      ],
    },
    explanation: 'द्वंद्व समास में दोनों पद प्रधान होते हैं (जैसे: माता-पिता = माता और पिता, दिन-रात = दिन और रात)।',
    points: 10,
  },
  {
    id: 'c6_h6_q03',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'द्विगु समास की पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'जिस समस्त पद का पहला पद संख्यावाचक विशेषण हो (जैसे: चौराहा, त्रिफला), वह कौन-सा समास होता है?',
    visualEmoji: '🔢 🏛️',
    payload: {
      options: [
        { id: 'opt_1', text: 'द्विगु समास', isCorrect: true },
        { id: 'opt_2', text: 'कर्मधारय समास', isCorrect: false },
        { id: 'opt_3', text: 'बहुव्रीहि समास', isCorrect: false },
        { id: 'opt_4', text: 'द्वंद्व समास', isCorrect: false },
      ],
    },
    explanation: 'जिस समास का पूर्व पद संख्यावाची हो और समस्त पद किसी समूह का बोध कराए, उसे द्विगु समास कहते हैं (चौराहा = चार राहों का समूह)।',
    points: 10,
  },
  {
    id: 'c6_h6_q04',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'मुहावरे का सामान्य अर्थ',
    difficulty: 'easy',
    type: 'mcq',
    question: 'मुहावरा "अंगूठा दिखाना" का सही अर्थ क्या है?',
    visualEmoji: '👍 ❌',
    payload: {
      options: [
        { id: 'opt_1', text: 'साफ़ मना कर देना', isCorrect: true },
        { id: 'opt_2', text: 'मदद करना', isCorrect: false },
        { id: 'opt_3', text: 'जीत की बधाई देना', isCorrect: false },
        { id: 'opt_4', text: 'युद्ध में लड़ना', isCorrect: false },
      ],
    },
    explanation: '"अंगूठा दिखाना" मुहावरे का अर्थ समय पर साफ़ इनकार करना या मना करना होता है।',
    points: 10,
  },
  {
    id: 'c6_h6_q05',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'समास-विग्रह की अवधारणा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'समस्त पद के सभी पदों को अलग-अलग करके उनके आपसी संबंध को स्पष्ट करना "समास-विग्रह" कहलाता है।',
    visualEmoji: '✂️ 📄',
    payload: {
      options: [
        { id: 'opt_1', text: 'सत्य', isCorrect: true },
        { id: 'opt_2', text: 'असत्य', isCorrect: false },
      ],
    },
    explanation: 'समस्त पद को तोड़कर विस्तृत रूप में लिखना ही समास-विग्रह कहलाता है (जैसे: राजमहल का विग्रह = राजा का महल)।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // TIER 2: MEDIUM (5 Questions | 15 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h6_q06',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'तत्पुरुष समास की पहचान',
    difficulty: 'medium',
    type: 'mcq',
    question: '"राजपुत्र" (राजा का पुत्र) तथा "देशभक्ति" (देश के लिए भक्ति) में कारक चिह्न का लोप है। यह कौन-सा समास है?',
    visualEmoji: '👑 🇮🇳',
    payload: {
      options: [
        { id: 'opt_1', text: 'तत्पुरुष समास', isCorrect: true },
        { id: 'opt_2', text: 'अव्ययीभाव समास', isCorrect: false },
        { id: 'opt_3', text: 'द्विगु समास', isCorrect: false },
        { id: 'opt_4', text: 'द्वंद्व समास', isCorrect: false },
      ],
    },
    explanation: 'जिस समास का उत्तर पद प्रधान हो और दोनों पदों के बीच कारक चिह्न (का, के लिए, से आदि) का लोप हो, उसे तत्पुरुष समास कहते हैं।',
    points: 15,
  },
  {
    id: 'c6_h6_q07',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'अव्ययीभाव समास की पहचान',
    difficulty: 'medium',
    type: 'mcq',
    question: 'जिस समास का पहला पद अव्यय (प्रधान) हो और पूरा पद क्रियाविशेषण की तरह कार्य करे, उसे क्या कहते हैं?',
    visualEmoji: '⚡ 📜',
    payload: {
      options: [
        { id: 'opt_1', text: 'अव्ययीभाव समास', isCorrect: true },
        { id: 'opt_2', text: 'तत्पुरुष समास', isCorrect: false },
        { id: 'opt_3', text: 'कर्मधारय समास', isCorrect: false },
        { id: 'opt_4', text: 'बहुव्रीहि समास', isCorrect: false },
      ],
    },
    explanation: 'जिस समास का पूर्व पद अव्यय हो, उसे अव्ययीभाव समास कहते हैं (जैसे: यथाशक्ति = शक्ति के अनुसार, प्रतिदिन = प्रत्येक दिन)।',
    points: 15,
  },
  {
    id: 'c6_h6_q08',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'मुहावरा अर्थ व वीरता संदर्भ',
    difficulty: 'medium',
    type: 'mcq',
    question: 'मुहावरा "लोहा लेना" का सही अर्थ क्या है?',
    visualEmoji: '⚔️ 🛡️',
    payload: {
      options: [
        { id: 'opt_1', text: 'डटकर मुकाबला करना', isCorrect: true },
        { id: 'opt_2', text: 'लोहे का सामान खरीदना', isCorrect: false },
        { id: 'opt_3', text: 'डरकर भाग जाना', isCorrect: false },
        { id: 'opt_4', text: 'संधि कर लेना', isCorrect: false },
      ],
    },
    explanation: '"लोहा लेना" का लाक्षणिक अर्थ वीरतापूर्वक मुकाबला या सामना करना होता है (जैसे: भारतीय सैनिकों ने शत्रुओं से डटकर लोहा लिया)।',
    points: 15,
  },
  {
    id: 'c6_h6_q09',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'प्रसिद्ध लोकोक्ति का अर्थ',
    difficulty: 'medium',
    type: 'mcq',
    question: 'लोकोक्ति "नाच न जाने आँगन टेढ़ा" का क्या अर्थ है?',
    visualEmoji: '💃 🔲',
    payload: {
      options: [
        { id: 'opt_1', text: 'अपनी कमी छिपाने के लिए दूसरों या साधनों में दोष निकालना', isCorrect: true },
        { id: 'opt_2', text: 'सुंदर नृत्य प्रस्तुत करना', isCorrect: false },
        { id: 'opt_3', text: 'आँगन को समतल बनाना', isCorrect: false },
        { id: 'opt_4', text: 'कठिन परिश्रम से सफलता पाना', isCorrect: false },
      ],
    },
    explanation: 'जब कोई व्यक्ति अपना काम ठीक से न कर पाने पर परिस्थितियों या औजारों को दोष देता है, तब यह लोकोक्ति कही जाती है।',
    points: 15,
  },
  {
    id: 'c6_h6_q10',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'अव्ययीभाव समास का विग्रह क्रम',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'समस्त पद "यथाशक्ति" के सही समास-विग्रह को क्रम में लगाइए:',
    visualEmoji: '💪 🧩',
    payload: {
      tokens: ['शक्ति', 'के', 'अनुसार'],
      scrambled: ['अनुसार', 'शक्ति', 'के'],
      correctSequence: ['शक्ति', 'के', 'अनुसार'],
    },
    explanation: '"यथाशक्ति" अव्ययीभाव समास है, जिसका विग्रह "शक्ति के अनुसार" होता है।',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // TIER 3: HARD (5 Questions | 20 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h6_q11',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'कर्मधारय बनाम बहुव्रीहि समास में भेद',
    difficulty: 'hard',
    type: 'mcq',
    question: '"दशानन" शब्द का विग्रह जब "दस आननों (मुखों) वाला अर्थात् रावण" किया जाता है, तब इसमें कौन-सा समास होता है?',
    visualEmoji: '👹 🎯',
    payload: {
      options: [
        { id: 'opt_1', text: 'बहुव्रीहि समास', isCorrect: true },
        { id: 'opt_2', text: 'द्विगु समास', isCorrect: false },
        { id: 'opt_3', text: 'कर्मधारय समास', isCorrect: false },
        { id: 'opt_4', text: 'तत्पुरुष समास', isCorrect: false },
      ],
    },
    explanation: 'जब दोनों पद मिलकर किसी तीसरे विशेष पद (यहाँ रावण) की ओर संकेत करते हैं, तो वहाँ बहुव्रीहि समास होता है।',
    points: 20,
  },
  {
    id: 'c6_h6_q12',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'मुहावरा वाक्य प्रयोग की शुद्धता',
    difficulty: 'hard',
    type: 'mcq',
    question: 'मुहावरा "वीरगति पाना" का सर्वथा उपयुक्त व शुद्ध वाक्य प्रयोग कौन-सा है?',
    visualEmoji: '🎖️ 🇮🇳',
    payload: {
      options: [
        { id: 'opt_1', text: 'देश की रक्षा करते हुए अमर बलिदानी सैनिक वीरगति को प्राप्त हुए।', isCorrect: true },
        { id: 'opt_2', text: 'परीक्षा में प्रथम आने पर छात्र ने वीरगति पाई।', isCorrect: false },
        { id: 'opt_3', text: 'रेलगाड़ी बहुत तेज गति से चली और वीरगति हो गई।', isCorrect: false },
        { id: 'opt_4', text: 'दुकानदार ने सारा सामान बेचकर वीरगति प्राप्त की।', isCorrect: false },
      ],
    },
    explanation: '"वीरगति पाना" का अर्थ युद्धभूमि में देश या धर्म की रक्षा करते हुए सम्मानपूर्वक बलिदान होना है।',
    points: 20,
  },
  {
    id: 'c6_h6_q13',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'लोकोक्ति का गंभीर लाक्षणिक अर्थ',
    difficulty: 'hard',
    type: 'mcq',
    question: 'लोकोक्ति "अधजल गगरी छलकत जाए" का सटीक अर्थ क्या है?',
    visualEmoji: '🏺 🌊',
    payload: {
      options: [
        { id: 'opt_1', text: 'अल्प ज्ञान वाला व्यक्ति अधिक दिखावा करता है', isCorrect: true },
        { id: 'opt_2', text: 'आधा भरा मटका पानी गिराता है', isCorrect: false },
        { id: 'opt_3', text: 'विद्वान व्यक्ति शांत रहता है', isCorrect: false },
        { id: 'opt_4', text: 'कठिन परिश्रम से घड़ा भरता है', isCorrect: false },
      ],
    },
    explanation: 'जिस प्रकार आधा भरा घड़ा अधिक छलक कर आवाज़ करता है, उसी प्रकार अधूरा ज्ञान रखने वाला व्यक्ति ज्ञान का झूठा दिखावा अधिक करता है।',
    points: 20,
  },
  {
    id: 'c6_h6_q14',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'कर्मधारय समास (विशेषण-विशेष्य संबंध)',
    difficulty: 'hard',
    type: 'mcq',
    question: 'जिस समास के दोनों पदों में विशेषण-विशेष्य या उपमेय-उपमान का संबंध हो (जैसे: नीलकमल, चंद्रमुख), उसे क्या कहते हैं?',
    visualEmoji: '🌸 🌙',
    payload: {
      options: [
        { id: 'opt_1', text: 'कर्मधारय समास', isCorrect: true },
        { id: 'opt_2', text: 'द्विगु समास', isCorrect: false },
        { id: 'opt_3', text: 'अव्ययीभाव समास', isCorrect: false },
        { id: 'opt_4', text: 'द्वंद्व समास', isCorrect: false },
      ],
    },
    explanation: 'कर्मधारय समास में पहला पद विशेषण और दूसरा पद विशेष्य होता है (जैसे: नीलकमल = नीला है जो कमल)।',
    points: 20,
  },
  {
    id: 'c6_h6_q15',
    grade: 6,
    subject: 'hindi',
    chapter: 'समास परिचय व मुहावरे-लोकोक्तियाँ',
    concept: 'छह प्रमुख समासों का वर्गीकरण क्रम',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'हिंदी व्याकरण के छह प्रमुख समासों को मानक क्रम में व्यवस्थित कीजिए:',
    visualEmoji: '📚 🏛️',
    payload: {
      tokens: ['अव्ययीभाव', 'तत्पुरुष', 'कर्मधारय', 'द्विगु', 'द्वंद्व', 'बहुव्रीहि'],
      scrambled: ['द्वंद्व', 'अव्ययीभाव', 'बहुव्रीहि', 'कर्मधारय', 'तत्पुरुष', 'द्विगु'],
      correctSequence: ['अव्ययीभाव', 'तत्पुरुष', 'कर्मधारय', 'द्विगु', 'द्वंद्व', 'बहुव्रीहि'],
    },
    explanation: 'हिंदी व्याकरण में समास के छह प्रमुख भेद माने जाते हैं: 1. अव्ययीभाव, 2. तत्पुरुष, 3. कर्मधारय, 4. द्विगु, 5. द्वंद्व, 6. बहुव्रीहि।',
    points: 20,
  },
];
