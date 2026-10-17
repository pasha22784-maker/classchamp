import { Question } from '../../types';

// ============================================================================
// CLASS 6 HINDI (UNIVERSAL VYAKARAN)
// CHAPTER 5: विराम चिह्न व अशुद्ध वाक्य शोधन
// 15 Questions: 5 Easy, 5 Medium, 5 Hard (Points: 10, 15, 20)
// IXL Pedagogical Standard | Zero Spoilers | Universal Grammar
// ============================================================================

export const CLASS_6_HINDI_LESSON_5_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // TIER 1: EASY (5 Questions | 10 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h5_q01',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'विराम चिह्न का अर्थ',
    difficulty: 'easy',
    type: 'mcq',
    question: 'भाषा में अपने भावों और विचारों को स्पष्ट करने के लिए रुकने या ठहरने के संकेतों को क्या कहते हैं?',
    visualEmoji: '🛑 ✍️',
    payload: {
      options: [
        { id: 'opt_1', text: 'विराम चिह्न', isCorrect: true },
        { id: 'opt_2', text: 'वर्णमाला', isCorrect: false },
        { id: 'opt_3', text: 'उपसर्ग', isCorrect: false },
        { id: 'opt_4', text: 'कारक विभक्ति', isCorrect: false },
      ],
    },
    explanation: 'पढ़ते या लिखते समय रुकने (विश्राम लेने) के लिए प्रयुक्त संकेतों को विराम चिह्न कहा जाता है।',
    points: 10,
  },
  {
    id: 'c6_h5_q02',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'पूर्णविराम की पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'वाक्य के पूर्ण होने पर अंत में कौन-सा विराम चिह्न लगाया जाता है?',
    visualEmoji: '📝 📍',
    payload: {
      options: [
        { id: 'opt_1', text: 'पूर्णविराम (।)', isCorrect: true },
        { id: 'opt_2', text: 'अल्पविराम (,)', isCorrect: false },
        { id: 'opt_3', text: 'योजक चिह्न (-)', isCorrect: false },
        { id: 'opt_4', text: 'अर्धविराम (;)', isCorrect: false },
      ],
    },
    explanation: 'सामान्य साधारण वाक्य पूरा होने पर अंत में पूर्णविराम (।) लगाया जाता है (जैसे: भारत हमारा देश है।)।',
    points: 10,
  },
  {
    id: 'c6_h5_q03',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'अल्पविराम का प्रयोग',
    difficulty: 'easy',
    type: 'mcq',
    question: 'वाक्य में बहुत थोड़े समय के लिए रुकने अथवा कई वस्तुओं के नामों को अलग करने के लिए किसका प्रयोग होता है?',
    visualEmoji: '⏱️ 콤',
    payload: {
      options: [
        { id: 'opt_1', text: 'अल्पविराम (,)', isCorrect: true },
        { id: 'opt_2', text: 'पूर्णविराम (।)', isCorrect: false },
        { id: 'opt_3', text: 'प्रश्नवाचक चिह्न (?)', isCorrect: false },
        { id: 'opt_4', text: 'विस्मयादिबोधक चिह्न (!)', isCorrect: false },
      ],
    },
    explanation: 'अल्पविराम (comma) का प्रयोग थोड़े ठहराव अथवा शब्दों की सूची को अलग करने के लिए किया जाता है (जैसे: आम, सेब, केला)।',
    points: 10,
  },
  {
    id: 'c6_h5_q04',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'प्रश्नवाचक चिह्न की पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: '"तुम्हारा नाम क्या है" वाक्य के अंत में कौन-सा चिह्न लगाया जाना चाहिए?',
    visualEmoji: '❓ 🤔',
    payload: {
      options: [
        { id: 'opt_1', text: 'प्रश्नवाचक चिह्न (?)', isCorrect: true },
        { id: 'opt_2', text: 'पूर्णविराम (।)', isCorrect: false },
        { id: 'opt_3', text: 'विस्मयादिबोधक चिह्न (!)', isCorrect: false },
        { id: 'opt_4', text: 'लाघव चिह्न (०)', isCorrect: false },
      ],
    },
    explanation: 'जिस वाक्य में कोई प्रश्न पूछा जाए, उसके अंत में प्रश्नवाचक चिह्न (?) का प्रयोग किया जाता है।',
    points: 10,
  },
  {
    id: 'c6_h5_q05',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'उद्धरण चिह्न का प्रयोग',
    difficulty: 'easy',
    type: 'mcq',
    question: 'किसी व्यक्ति के कथन को बिना किसी परिवर्तन के ज्यों का त्यों लिखने के लिए दोहरे उद्धरण चिह्न (" ") का प्रयोग किया जाता है।',
    visualEmoji: '💬 📜',
    payload: {
      options: [
        { id: 'opt_1', text: 'सत्य', isCorrect: true },
        { id: 'opt_2', text: 'असत्य', isCorrect: false },
      ],
    },
    explanation: 'किसी के कहे गए वचनों को मूल रूप में प्रस्तुत करने हेतु उद्धरण चिह्न ("...") का प्रयोग होता है (जैसे: गांधीजी ने कहा, "सत्य ही ईश्वर है।")।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // TIER 2: MEDIUM (5 Questions | 15 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h5_q06',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'विस्मयादिबोधक चिह्न का प्रयोग',
    difficulty: 'medium',
    type: 'mcq',
    question: '"अरे! तुमने तो कमाल कर दिया।" वाक्य में "अरे" के बाद कौन-सा चिह्न प्रयुक्त हुआ है?',
    visualEmoji: '😲 ❗',
    payload: {
      options: [
        { id: 'opt_1', text: 'विस्मयादिबोधक चिह्न (!)', isCorrect: true },
        { id: 'opt_2', text: 'अल्पविराम (,)', isCorrect: false },
        { id: 'opt_3', text: 'अर्धविराम (;)', isCorrect: false },
        { id: 'opt_4', text: 'योजक चिह्न (-)', isCorrect: false },
      ],
    },
    explanation: 'आश्चर्य, हर्ष, शोक, घृणा आदि तीव्र भावों को प्रकट करने वाले शब्दों के बाद विस्मयादिबोधक चिह्न (!) लगाया जाता है।',
    points: 15,
  },
  {
    id: 'c6_h5_q07',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'योजक चिह्न का प्रयोग',
    difficulty: 'medium',
    type: 'mcq',
    question: 'दो शब्दों को परस्पर जोड़ने तथा शब्द-युग्मों (जैसे: माता-पिता, दिन-रात) के बीच किस चिह्न का प्रयोग होता है?',
    visualEmoji: '➖ 🤝',
    payload: {
      options: [
        { id: 'opt_1', text: 'योजक चिह्न (-)', isCorrect: true },
        { id: 'opt_2', text: 'निर्देशक चिह्न (—)', isCorrect: false },
        { id: 'opt_3', text: 'लाघव चिह्न (०)', isCorrect: false },
        { id: 'opt_4', text: 'हंसपद चिह्न (^)', isCorrect: false },
      ],
    },
    explanation: 'परस्पर जुड़े हुए विलोम या समानार्थक शब्दों के बीच योजक चिह्न (-) लगाया जाता है।',
    points: 15,
  },
  {
    id: 'c6_h5_q08',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'लिंग संबंधी अशुद्धि शोधन',
    difficulty: 'medium',
    type: 'mcq',
    question: 'अशुद्ध वाक्य "मेरी पुस्तक खो गया" का शुद्ध रूप क्या होगा?',
    visualEmoji: '📕 ✏️',
    payload: {
      options: [
        { id: 'opt_1', text: 'मेरी पुस्तक खो गई।', isCorrect: true },
        { id: 'opt_2', text: 'मेरा पुस्तक खो गया।', isCorrect: false },
        { id: 'opt_3', text: 'मेरी पुस्तक खो गए।', isCorrect: false },
        { id: 'opt_4', text: 'मेरा पुस्तक खो गई।', isCorrect: false },
      ],
    },
    explanation: '"पुस्तक" शब्द स्त्रीलिंग है, इसलिए क्रिया भी स्त्रीलिंग "खो गई" होगी।',
    points: 15,
  },
  {
    id: 'c6_h5_q09',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'वचन संबंधी अशुद्धि शोधन',
    difficulty: 'medium',
    type: 'mcq',
    question: 'अशुद्ध वाक्य "पेड़ों पर कौआ बैठे हैं" का शुद्ध रूप क्या होगा?',
    visualEmoji: '🌳 🐦',
    payload: {
      options: [
        { id: 'opt_1', text: 'पेड़ों पर कौए बैठे हैं।', isCorrect: true },
        { id: 'opt_2', text: 'पेड़ों पर कौआ बैठा हैं।', isCorrect: false },
        { id: 'opt_3', text: 'पेड़ पर कौए बैठा है।', isCorrect: false },
        { id: 'opt_4', text: 'पेड़ों पर कौआ बैठते हैं।', isCorrect: false },
      ],
    },
    explanation: 'क्रिया "बैठे हैं" बहुवचन में है, अतः कर्ता भी बहुवचन "कौए" होना चाहिए।',
    points: 15,
  },
  {
    id: 'c6_h5_q10',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'पदक्रम संबंधी अशुद्धि शोधन',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'गलत पदक्रम वाले वाक्य "शीला को काटकर आम दो" के शब्दों को शुद्ध क्रम में लगाइए:',
    visualEmoji: '🥭 🔪',
    payload: {
      tokens: ['आम', 'काटकर', 'शीला', 'को', 'दो'],
      scrambled: ['को', 'शीला', 'काटकर', 'दो', 'आम'],
      correctSequence: ['आम', 'काटकर', 'शीला', 'को', 'दो'],
    },
    explanation: 'शीला को नहीं, बल्कि आम को काटना है। अतः सही पदक्रम है: "आम काटकर शीला को दो।"',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // TIER 3: HARD (5 Questions | 20 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h5_q11',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'लाघव व हंसपद चिह्न की पहचान',
    difficulty: 'hard',
    type: 'mcq',
    question: 'शब्द को संक्षिप्त रूप में लिखने के लिए "लाघव चिह्न" (जैसे: पं० जवाहरलाल) तथा लिखते समय छूटे हुए शब्द को जोड़ने के लिए किस चिह्न का प्रयोग होता है?',
    visualEmoji: '🎯 🔣',
    payload: {
      options: [
        { id: 'opt_1', text: 'लाघव चिह्न (०) तथा हंसपद/त्रुटिपूरक चिह्न (^)', isCorrect: true },
        { id: 'opt_2', text: 'योजक चिह्न (-) तथा उद्धरण चिह्न (" ")', isCorrect: false },
        { id: 'opt_3', text: 'अर्धविराम (;) तथा उपविराम (:)', isCorrect: false },
        { id: 'opt_4', text: 'कोष्ठक ( ) तथा विवरण चिह्न (:-)', isCorrect: false },
      ],
    },
    explanation: 'संक्षिप्त करने के लिए लाघव चिह्न (०) और छूटे शब्द को लिखने के लिए हंसपद या त्रुटिपूरक चिह्न (^) का प्रयोग किया जाता है।',
    points: 20,
  },
  {
    id: 'c6_h5_q12',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'भूतकालिक सकर्मक क्रिया व ने परसर्ग नियम',
    difficulty: 'hard',
    type: 'mcq',
    question: 'वाक्य "राम ने रोटी खाया" व्याकरण की दृष्टि से अशुद्ध क्यों है?',
    visualEmoji: '🍞 ⚖️',
    payload: {
      options: [
        { id: 'opt_1', text: 'भूतकाल में "ने" लगने पर क्रिया कर्म (रोटी - स्त्रीलिंग) के अनुसार "खाई" होनी चाहिए', isCorrect: true },
        { id: 'opt_2', text: 'राम पुल्लिंग है इसलिए खाया ही सही है', isCorrect: false },
        { id: 'opt_3', text: 'यहाँ "ने" विभक्ति का प्रयोग नहीं होना चाहिए था', isCorrect: false },
        { id: 'opt_4', text: 'रोटी के साथ सदैव बहुवचन क्रिया आती है', isCorrect: false },
      ],
    },
    explanation: 'सकर्मक क्रिया के भूतकाल में कर्ता के साथ "ने" लगने पर क्रिया कर्म के लिंग व वचन के अनुसार बदलती है। "रोटी" स्त्रीलिंग है, अतः शुद्ध वाक्य होगा: "राम ने रोटी खाई।"',
    points: 20,
  },
  {
    id: 'c6_h5_q13',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'पुनरुक्ति दोष (अनावश्यक शब्द प्रयोग)',
    difficulty: 'hard',
    type: 'mcq',
    question: 'वाक्य "कृपया करके आप कल अवश्य पधारें" में कौन-सा व्याकरणिक दोष है?',
    visualEmoji: '🔁 ❌',
    payload: {
      options: [
        { id: 'opt_1', text: 'पुनरुक्ति दोष', isCorrect: true },
        { id: 'opt_2', text: 'लिंग संबंधी दोष', isCorrect: false },
        { id: 'opt_3', text: 'कारक संबंधी दोष', isCorrect: false },
        { id: 'opt_4', text: 'काल संबंधी दोष', isCorrect: false },
      ],
    },
    explanation: '"कृपया" का अर्थ ही विनम्र प्रार्थना है, इसलिए उसके साथ "करके" लगाना पुनरुक्ति दोष है। शुद्ध वाक्य होगा: "कृपया आप कल अवश्य पधारें।"',
    points: 20,
  },
  {
    id: 'c6_h5_q14',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'सर्वथा शुद्ध वाक्य का चयन',
    difficulty: 'hard',
    type: 'mcq',
    question: 'निम्नलिखित में से कौन-सा वाक्य व्याकरणिक दृष्टि से पूर्णतः शुद्ध है?',
    visualEmoji: '✅ 📜',
    payload: {
      options: [
        { id: 'opt_1', text: 'यहाँ गाय का शुद्ध दूध मिलता है।', isCorrect: true },
        { id: 'opt_2', text: 'मेरे को आज दिल्ली जाना है।', isCorrect: false },
        { id: 'opt_3', text: 'वह प्रातःकाल के समय टहलता है।', isCorrect: false },
        { id: 'opt_4', text: 'यहाँ शुद्ध गाय का दूध मिलता है।', isCorrect: false },
      ],
    },
    explanation: '"यहाँ गाय का शुद्ध दूध मिलता है" व्याकरणिक दृष्टि से पूर्णतः शुद्ध है। "मेरे को" अमानक है (मुझे होना चाहिए), "प्रातःकाल के समय" में पुनरुक्ति दोष है, और "शुद्ध गाय" में पदक्रम दोष है।',
    points: 20,
  },
  {
    id: 'c6_h5_q15',
    grade: 6,
    subject: 'hindi',
    chapter: 'विराम चिह्न व अशुद्ध वाक्य शोधन',
    concept: 'मानक हिंदी वाक्य संरचना का क्रम',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'सामान्य हिंदी वाक्य की मानक व्याकरणिक संरचना के मुख्य घटकों को सही क्रम में लगाइए:',
    visualEmoji: '🧱 🏗️',
    payload: {
      tokens: ['कर्ता', 'कर्म', 'क्रिया'],
      scrambled: ['क्रिया', 'कर्ता', 'कर्म'],
      correctSequence: ['कर्ता', 'कर्म', 'क्रिया'],
    },
    explanation: 'हिंदी भाषा के सामान्य वाक्य की पदक्रम संरचना होती है: कर्ता + कर्म + क्रिया (Subject + Object + Verb), जैसे: "मोहन (कर्ता) पुस्तक (कर्म) पढ़ता है (क्रिया)"।',
    points: 20,
  },
];
