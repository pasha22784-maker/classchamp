import { Question } from '../../types';

// ============================================================================
// CLASS 6 HINDI (UNIVERSAL VYAKARAN)
// CHAPTER 4: उपसर्ग, प्रत्यय व शब्द निर्माण
// 15 Questions: 5 Easy, 5 Medium, 5 Hard (Points: 10, 15, 20)
// IXL Pedagogical Standard | Zero Spoilers | Universal Grammar
// ============================================================================

export const CLASS_6_HINDI_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // TIER 1: EASY (5 Questions | 10 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h4_q01',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'उपसर्ग की परिभाषा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'वे शब्दांश जो किसी मूल शब्द के पहले जुड़कर उसके अर्थ में परिवर्तन या विशेषता ला देते हैं, क्या कहलाते हैं?',
    visualEmoji: '🧩 🔤',
    payload: {
      options: [
        { id: 'opt_1', text: 'उपसर्ग', isCorrect: true },
        { id: 'opt_2', text: 'प्रत्यय', isCorrect: false },
        { id: 'opt_3', text: 'समास', isCorrect: false },
        { id: 'opt_4', text: 'संधि', isCorrect: false },
      ],
    },
    explanation: 'शब्द के आरंभ (शुरू) में जुड़ने वाले शब्दांश को उपसर्ग कहते हैं (जैसे: उप + कार = उपकार)।',
    points: 10,
  },
  {
    id: 'c6_h4_q02',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'प्रत्यय की परिभाषा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'वे शब्दांश जो किसी शब्द के अंत में जुड़कर नए शब्द का निर्माण करते हैं, उन्हें क्या कहते हैं?',
    visualEmoji: '🔗 📝',
    payload: {
      options: [
        { id: 'opt_1', text: 'प्रत्यय', isCorrect: true },
        { id: 'opt_2', text: 'उपसर्ग', isCorrect: false },
        { id: 'opt_3', text: 'विभक्ति', isCorrect: false },
        { id: 'opt_4', text: 'संज्ञा', isCorrect: false },
      ],
    },
    explanation: 'मूल शब्द के पीछे (अंत में) लगने वाले शब्दांश प्रत्यय कहलाते हैं (जैसे: सुंदर + ता = सुंदरता)।',
    points: 10,
  },
  {
    id: 'c6_h4_q03',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'उपसर्ग की पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: '"अनुशासन" शब्द में कौन-सा उपसर्ग लगा है?',
    visualEmoji: '🎖️ 📚',
    payload: {
      options: [
        { id: 'opt_1', text: 'अनु', isCorrect: true },
        { id: 'opt_2', text: 'अ', isCorrect: false },
        { id: 'opt_3', text: 'अन', isCorrect: false },
        { id: 'opt_4', text: 'आसन', isCorrect: false },
      ],
    },
    explanation: 'अनुशासन शब्द में मूल शब्द "शासन" है तथा उसके पहले "अनु" उपसर्ग जुड़ा है।',
    points: 10,
  },
  {
    id: 'c6_h4_q04',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'प्रत्यय की पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: '"मानवता" शब्द में मूल शब्द और प्रत्यय क्या हैं?',
    visualEmoji: '🤝 🌍',
    payload: {
      options: [
        { id: 'opt_1', text: 'मानव + ता', isCorrect: true },
        { id: 'opt_2', text: 'मान + वता', isCorrect: false },
        { id: 'opt_3', text: 'मानव + त', isCorrect: false },
        { id: 'opt_4', text: 'मानवत + आ', isCorrect: false },
      ],
    },
    explanation: 'मानवता शब्द में मूल शब्द "मानव" है और अंत में "ता" भाववाचक प्रत्यय लगा है।',
    points: 10,
  },
  {
    id: 'c6_h4_q05',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'शब्दांश का स्वतंत्र अस्तित्व',
    difficulty: 'easy',
    type: 'mcq',
    question: 'उपसर्ग और प्रत्यय स्वतंत्र शब्द नहीं होते, बल्कि वे शब्दांश होते हैं जिनका अकेले वाक्य में प्रयोग नहीं किया जाता।',
    visualEmoji: '💡 📜',
    payload: {
      options: [
        { id: 'opt_1', text: 'सत्य', isCorrect: true },
        { id: 'opt_2', text: 'असत्य', isCorrect: false },
      ],
    },
    explanation: 'उपसर्ग और प्रत्यय केवल शब्दांश होते हैं। इनका अपना स्वतंत्र अर्थ हो सकता है, परंतु स्वतंत्र प्रयोग केवल मूल शब्द के साथ ही संभव है।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // TIER 2: MEDIUM (5 Questions | 15 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h4_q06',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'तत्सम (संस्कृत) उपसर्ग पहचान',
    difficulty: 'medium',
    type: 'mcq',
    question: 'निम्नलिखित में से किस शब्द में संस्कृत का "सम्" उपसर्ग लगा है?',
    visualEmoji: '🏛️ 🗣️',
    payload: {
      options: [
        { id: 'opt_1', text: 'सम्मान', isCorrect: true },
        { id: 'opt_2', text: 'सवेरा', isCorrect: false },
        { id: 'opt_3', text: 'सहज', isCorrect: false },
        { id: 'opt_4', text: 'सड़क', isCorrect: false },
      ],
    },
    explanation: 'सम् + मान = सम्मान। यहाँ तत्सम उपसर्ग "सम्" का प्रयोग हुआ है (जैसे संगम, संतोष)।',
    points: 15,
  },
  {
    id: 'c6_h4_q07',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'तद्भव (हिंदी) उपसर्ग पहचान',
    difficulty: 'medium',
    type: 'mcq',
    question: '"अनपढ़", "अनहोनी" और "अनजान" शब्दों में कौन-सा हिंदी (तद्भव) उपसर्ग प्रयुक्त हुआ है?',
    visualEmoji: '🇮🇳 📖',
    payload: {
      options: [
        { id: 'opt_1', text: 'अन', isCorrect: true },
        { id: 'opt_2', text: 'अन्', isCorrect: false },
        { id: 'opt_3', text: 'अ', isCorrect: false },
        { id: 'opt_4', text: 'कु', isCorrect: false },
      ],
    },
    explanation: 'हिंदी के "अन" उपसर्ग का अर्थ "अभाव" या "निषेध" होता है, जैसे अन + पढ़ = अनपढ़।',
    points: 15,
  },
  {
    id: 'c6_h4_q08',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'कृत् प्रत्यय (क्रिया धातु से निर्मित)',
    difficulty: 'medium',
    type: 'mcq',
    question: 'क्रिया या धातु के अंत में लगकर संज्ञा या विशेषण बनाने वाले प्रत्ययों को क्या कहते हैं?',
    visualEmoji: '🏃‍♂️ ⚙️',
    payload: {
      options: [
        { id: 'opt_1', text: 'कृत् प्रत्यय', isCorrect: true },
        { id: 'opt_2', text: 'तद्धित प्रत्यय', isCorrect: false },
        { id: 'opt_3', text: 'विभक्ति प्रत्यय', isCorrect: false },
        { id: 'opt_4', text: 'आगत प्रत्यय', isCorrect: false },
      ],
    },
    explanation: 'जो प्रत्यय क्रिया (धातु) के अंत में जुड़ते हैं, उन्हें कृत् प्रत्यय कहते हैं (जैसे: लिख + आवट = लिखावट, तैर + आक = तैराक)।',
    points: 15,
  },
  {
    id: 'c6_h4_q09',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'तद्धित प्रत्यय (संज्ञा/विशेषण से निर्मित)',
    difficulty: 'medium',
    type: 'mcq',
    question: 'संज्ञा, सर्वनाम या विशेषण के अंत में जुड़ने वाले प्रत्यय क्या कहलाते हैं?',
    visualEmoji: '🏷️ 🌟',
    payload: {
      options: [
        { id: 'opt_1', text: 'तद्धित प्रत्यय', isCorrect: true },
        { id: 'opt_2', text: 'कृत् प्रत्यय', isCorrect: false },
        { id: 'opt_3', text: 'धातु प्रत्यय', isCorrect: false },
        { id: 'opt_4', text: 'कृदंत प्रत्यय', isCorrect: false },
      ],
    },
    explanation: 'संज्ञा, सर्वनाम अथवा विशेषण के अंत में लगने वाले प्रत्यय तद्धित प्रत्यय कहलाते हैं (जैसे: मीठा + आस = मिठास, अपना + पन = अपनापन)।',
    points: 15,
  },
  {
    id: 'c6_h4_q10',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'उपसर्ग व मूल शब्द का संयोजन',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'उपसर्ग, मूल शब्द तथा निर्मित नवीन शब्द को सही क्रम में व्यवस्थित कीजिए:',
    visualEmoji: '🧩 ☀️',
    payload: {
      tokens: ['प्रति', '+', 'दिन', '=', 'प्रतिदिन'],
      scrambled: ['प्रतिदिन', '=', 'प्रति', 'दिन', '+'],
      correctSequence: ['प्रति', '+', 'दिन', '=', 'प्रतिदिन'],
    },
    explanation: 'प्रति (उपसर्ग) + दिन (मूल शब्द) = प्रतिदिन (प्रत्येक दिन)।',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // TIER 3: HARD (5 Questions | 20 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h4_q11',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'विदेशी (उर्दू-फ़ारसी) उपसर्ग',
    difficulty: 'hard',
    type: 'mcq',
    question: '"बेकसूर", "बदनाम" और "लाचार" शब्दों में प्रयुक्त उपसर्ग किस भाषा वर्ग से आए हैं?',
    visualEmoji: '🌍 🗣️',
    payload: {
      options: [
        { id: 'opt_1', text: 'उर्दू-फ़ारसी उपसर्ग', isCorrect: true },
        { id: 'opt_2', text: 'संस्कृत उपसर्ग', isCorrect: false },
        { id: 'opt_3', text: 'हिंदी उपसर्ग', isCorrect: false },
        { id: 'opt_4', text: 'अंग्रेज़ी उपसर्ग', isCorrect: false },
      ],
    },
    explanation: 'बे, बद, ला, गैर, खुश, ना आदि उर्दू-फ़ारसी से हिंदी में आए विदेशी (आगत) उपसर्ग हैं।',
    points: 20,
  },
  {
    id: 'c6_h4_q12',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'उपसर्ग और प्रत्यय दोनों का एक साथ प्रयोग',
    difficulty: 'hard',
    type: 'mcq',
    question: 'निम्नलिखित में से किस शब्द में उपसर्ग और प्रत्यय दोनों का एक साथ प्रयोग हुआ है?',
    visualEmoji: '🔍 ⚖️',
    payload: {
      options: [
        { id: 'opt_1', text: 'अपमानित', isCorrect: true },
        { id: 'opt_2', text: 'प्रतिदिन', isCorrect: false },
        { id: 'opt_3', text: 'मिठास', isCorrect: false },
        { id: 'opt_4', text: 'अनपढ़', isCorrect: false },
      ],
    },
    explanation: '"अपमानित" शब्द में "अप" उपसर्ग, "मान" मूल शब्द और "इत" प्रत्यय है (अप + मान + इत = अपमानित)।',
    points: 20,
  },
  {
    id: 'c6_h4_q13',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'इक प्रत्यय द्वारा स्वर वृद्धि नियम',
    difficulty: 'hard',
    type: 'mcq',
    question: '"इतिहास" शब्द में "इक" प्रत्यय जोड़ने पर कौन-सा शुद्ध शब्द बनता है?',
    visualEmoji: '📜 ✨',
    payload: {
      options: [
        { id: 'opt_1', text: 'ऐतिहासिक', isCorrect: true },
        { id: 'opt_2', text: 'इतिहासक', isCorrect: false },
        { id: 'opt_3', text: 'एतिहासिक', isCorrect: false },
        { id: 'opt_4', text: 'इतिहासीक', isCorrect: false },
      ],
    },
    explanation: '"इक" प्रत्यय लगने पर शब्द के पहले स्वर में वृद्धि हो जाती है (इ/ई का ऐ बन जाता है): इतिहास + इक = ऐतिहासिक (इसी प्रकार दिन + इक = दैनिक)।',
    points: 20,
  },
  {
    id: 'c6_h4_q14',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'कृदंत बनाम तद्धितांत शब्द वर्गीकरण',
    difficulty: 'hard',
    type: 'mcq',
    question: 'निम्नलिखित युग्मों में से कौन-सा युग्म कृदंत शब्द (कृत् प्रत्यय से बना) का सही उदाहरण है?',
    visualEmoji: '🏊‍♂️ 🛠️',
    payload: {
      options: [
        { id: 'opt_1', text: 'तैराक', isCorrect: true },
        { id: 'opt_2', text: 'सामाजिक', isCorrect: false },
        { id: 'opt_3', text: 'मिठास', isCorrect: false },
        { id: 'opt_4', text: 'अपनापन', isCorrect: false },
      ],
    },
    explanation: '"तैरना" एक क्रिया (धातु) है, अतः तैर + आक = तैराक कृदंत शब्द है। शेष सभी तद्धितांत शब्द हैं।',
    points: 20,
  },
  {
    id: 'c6_h4_q15',
    grade: 6,
    subject: 'hindi',
    chapter: 'उपसर्ग, प्रत्यय व शब्द निर्माण',
    concept: 'संयुक्त शब्द संरचना का विखंडन',
    difficulty: 'hard',
    type: 'drag_order',
    question: '"अस्वच्छता" शब्द के उपसर्ग, मूल शब्द और प्रत्यय को सही क्रम में व्यवस्थित कीजिए:',
    visualEmoji: '🧼 🏗️',
    payload: {
      tokens: ['अ', '+', 'स्वच्छ', '+', 'ता'],
      scrambled: ['ता', 'स्वच्छ', '+', 'अ', '+'],
      correctSequence: ['अ', '+', 'स्वच्छ', '+', 'ता'],
    },
    explanation: 'अ (उपसर्ग) + स्वच्छ (मूल शब्द) + ता (प्रत्यय) = अस्वच्छता।',
    points: 20,
  },
];
