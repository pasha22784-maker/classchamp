import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 HINDI (सारंगी 1 / RIMJHIM 1)
// CHAPTER 1: मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)
// Comprehensive Curriculum Covering All 8 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_HINDI_LESSON_1_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: स्वर वर्ण पहचान (अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ, अं, अः)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h1_concept_swar_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'स्वर वर्ण पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'चित्र में लाल-लाल मीठे दाने वाला अनार 🍎 है। अनार किस वर्ण से शुरू होता है?',
    visualEmoji: '🍎',
    payload: {
      options: [
        { id: 'opt_sw1_1', text: 'अ', isCorrect: true },
        { id: 'opt_sw1_2', text: 'आ', isCorrect: false },
        { id: 'opt_sw1_3', text: 'इ', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: **अ** से अनार 🍎! अनार का पहला अक्षर "अ" होता है।',
    points: 10,
  },
  {
    id: 'c1_h1_concept_swar_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'स्वर वर्ण पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'चित्र में पीले-मीठे फलों का राजा आम 🥭 है। आम किस स्वर से शुरू होता है?',
    visualEmoji: '🥭',
    payload: {
      options: [
        { id: 'opt_sw2_1', text: 'आ', isCorrect: true },
        { id: 'opt_sw2_2', text: 'अ', isCorrect: false },
        { id: 'opt_sw2_3', text: 'उ', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: **आ** से आम 🥭! आम में बड़ा आ स्वर आता है।',
    points: 10,
  },
  {
    id: 'c1_h1_concept_swar_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'स्वर वर्ण मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'स्वर वर्ण को उसके सही चित्र से मिलाइए:',
    visualEmoji: '🔤 🖼️',
    payload: {
      pairs: [
        { id: 'sw_p1', left: 'अ', right: '🍎 अनार' },
        { id: 'sw_p2', left: 'आ', right: '🥭 आम' },
        { id: 'sw_p3', left: 'उ', right: '🦉 उल्लू' },
        { id: 'sw_p4', left: 'अं', right: '🍇 अंगूर' },
      ],
    },
    explanation: '💡 शाबाश! अ से अनार 🍎, आ से आम 🥭, उ से उल्लू 🦉, अं से अंगूर 🍇!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: व्यंजन वर्ण पहचान (क से ज्ञ)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h1_concept_vyanjan_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'व्यंजन वर्ण पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'हमारा राष्ट्रीय फूल कमल 🪷 पानी में खिलता है। कमल किस व्यंजन से शुरू होता है?',
    visualEmoji: '🪷',
    payload: {
      options: [
        { id: 'opt_vy1_1', text: 'क', isCorrect: true },
        { id: 'opt_vy1_2', text: 'ख', isCorrect: false },
        { id: 'opt_vy1_3', text: 'ग', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: **क** से कमल 🪷! क व्यंजन से कमल शुरू होता है।',
    points: 10,
  },
  {
    id: 'c1_h1_concept_vyanjan_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'व्यंजन वर्ण पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'हम सब अपने सुंदर घर 🏠 में रहते हैं। "घर" का पहला अक्षर क्या है?',
    visualEmoji: '🏠',
    payload: {
      options: [
        { id: 'opt_vy2_1', text: 'घ', isCorrect: true },
        { id: 'opt_vy2_2', text: 'च', isCorrect: false },
        { id: 'opt_vy2_3', text: 'ध', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: **घ** से घर 🏠! घ + र = घर।',
    points: 10,
  },
  {
    id: 'c1_h1_concept_vyanjan_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'व्यंजन वर्ण मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'व्यंजन वर्ण को सही चित्र के साथ मिलाइए:',
    visualEmoji: '🌱 🪁 🐟 🚰',
    payload: {
      pairs: [
        { id: 'vy_p1', left: 'ग', right: '🌱 गमला' },
        { id: 'vy_p2', left: 'न', right: '🚰 नल' },
        { id: 'vy_p3', left: 'प', right: '🪁 पतंग' },
        { id: 'vy_p4', left: 'म', right: '🐟 मछली' },
      ],
    },
    explanation: '💡 ग से गमला 🌱, न से नल 🚰, प से पतंग 🪁, म से मछली 🐟!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: दो अक्षर वाले अमात्रिक शब्द (घर, जल, नल, बस, फल)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h1_concept_2letter_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'दो अक्षर वाले शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'वर्णों को जोड़कर शब्द बनाइए: घ + र = ?',
    visualEmoji: 'घ + र = 🏠',
    payload: {
      options: [
        { id: 'opt_2l1_1', text: 'घर 🏠', isCorrect: true },
        { id: 'opt_2l1_2', text: 'पर', isCorrect: false },
        { id: 'opt_2l1_3', text: 'रथ', isCorrect: false },
      ],
    },
    explanation: '💡 घ + र मिलकर बनता है **घर** 🏠 (मीना का घर)!',
    points: 10,
  },
  {
    id: 'c1_h1_concept_2letter_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'दो अक्षर वाले शब्द रिक्त स्थान',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'नल से ठंडा पानी टपक रहा है: न + [BLANK] = नल 🚰',
    visualEmoji: '🚰',
    payload: {
      correctAnswer: 'ल',
      wordBank: ['ल', 'र', 'क', 'म'],
      displayTemplate: 'न + [BLANK] = 🚰 नल',
    },
    explanation: '💡 न + **ल** = नल 🚰! नल से जल आता है।',
    points: 10,
  },
  {
    id: 'c1_h1_concept_2letter_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'चित्र देखकर शब्द चुनना',
    difficulty: 'easy',
    type: 'mcq',
    question: 'चित्र में बच्चे स्कूल की गाड़ी 🚌 में बैठ रहे हैं। सही शब्द चुनिए:',
    visualEmoji: '🚌',
    payload: {
      options: [
        { id: 'opt_2l3_1', text: 'बस 🚌', isCorrect: true },
        { id: 'opt_2l3_2', text: 'दस 🔟', isCorrect: false },
        { id: 'opt_2l3_3', text: 'रस 🥤', isCorrect: false },
      ],
    },
    explanation: '💡 ब + स = **बस** 🚌! बच्चे बस पर चढ़कर स्कूल जाते हैं।',
    points: 10,
  },
  {
    id: 'c1_h1_concept_2letter_04',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'दो अक्षर वाले शब्द मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'शब्द को उसके सही चित्र से मिलाइए:',
    visualEmoji: '🍎 💧 ✉️ 🏠',
    payload: {
      pairs: [
        { id: 'w2_p1', left: 'फल', right: '🍎 ताज़ा फल' },
        { id: 'w2_p2', left: 'जल', right: '💧 स्वच्छ जल' },
        { id: 'w2_p3', left: 'खत', right: '✉️ डाकिया लाया खत' },
        { id: 'w2_p4', left: 'घर', right: '🏠 मीना का घर' },
      ],
    },
    explanation: '💡 फल 🍎, जल 💧, खत ✉️, घर 🏠 सभी दो अक्षर वाले अमात्रिक शब्द हैं!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: तीन अक्षर वाले अमात्रिक शब्द (कमल, मटर, सड़क, कलम, नयन)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h1_concept_3letter_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'तीन अक्षर वाले शब्द',
    difficulty: 'medium',
    type: 'mcq',
    question: 'वर्णों को जोड़कर शब्द बनाइए: म + ट + र = ?',
    visualEmoji: 'म + ट + र = 🫛',
    payload: {
      options: [
        { id: 'opt_3l1_1', text: 'मटर 🫛', isCorrect: true },
        { id: 'opt_3l1_2', text: 'कमल 🪷', isCorrect: false },
        { id: 'opt_3l1_3', text: 'सड़क 🛣️', isCorrect: false },
      ],
    },
    explanation: '💡 म + ट + र = **मटर** 🫛! माँ रसोई में मटर की सब्ज़ी बनाती हैं।',
    points: 10,
  },
  {
    id: 'c1_h1_concept_3letter_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'तीन अक्षर वाले शब्द रिक्त स्थान',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'सुंदर कमल का फूल: क + म + [BLANK] = कमल 🪷',
    visualEmoji: '🪷',
    payload: {
      correctAnswer: 'ल',
      wordBank: ['ल', 'न', 'र', 'म'],
      displayTemplate: 'क + म + [BLANK] = 🪷 कमल',
    },
    explanation: '💡 क + म + **ल** = कमल 🪷!',
    points: 10,
  },
  {
    id: 'c1_h1_concept_3letter_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'चित्र देखकर शब्द चुनना',
    difficulty: 'medium',
    type: 'mcq',
    question: 'गाड़ियाँ जिस रास्ते पर चलती हैं 🛣️, उसे क्या कहते हैं?',
    visualEmoji: '🛣️ 🚗',
    payload: {
      options: [
        { id: 'opt_3l3_1', text: 'सड़क 🛣️', isCorrect: true },
        { id: 'opt_3l3_2', text: 'भवन 🏛️', isCorrect: false },
        { id: 'opt_3l3_3', text: 'कलम 🖊️', isCorrect: false },
      ],
    },
    explanation: '💡 स + ड़ + क = **सड़क** 🛣️! सड़क पर हमेशा बाईं ओर चलना चाहिए।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: चार अक्षर वाले अमात्रिक शब्द (बरगद, अचकन, शरबत, थर्मस)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h1_concept_4letter_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'चार अक्षर वाले शब्द',
    difficulty: 'medium',
    type: 'mcq',
    question: 'हमारा राष्ट्रीय वृक्ष विशाल बरगद का पेड़ 🌳 है। बरगद कैसे लिखा जाता है?',
    visualEmoji: '🌳',
    payload: {
      options: [
        { id: 'opt_4l1_1', text: 'ब-र-ग-द', isCorrect: true },
        { id: 'opt_4l1_2', text: 'क-स-र-त', isCorrect: false },
        { id: 'opt_4l1_3', text: 'थ-र-म-स', isCorrect: false },
      ],
    },
    explanation: '💡 ब + र + ग + द = **बरगद** 🌳! यह चार अक्षर वाला शब्द है।',
    points: 10,
  },
  {
    id: 'c1_h1_concept_4letter_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'चार अक्षर वाले शब्द रिक्त स्थान',
    difficulty: 'medium',
    type: 'fill_blank',
    question: 'गर्मियों में ठंडा-मीठा शरबत: श + र + ब + [BLANK] = शरबत 🍹',
    visualEmoji: '🍹',
    payload: {
      correctAnswer: 'त',
      wordBank: ['त', 'न', 'ल', 'म'],
      displayTemplate: 'श + र + ब + [BLANK] = 🍹 शरबत',
    },
    explanation: '💡 श + र + ब + **त** = शरबत 🍹! मीना को ठंडा शरबत बहुत पसंद है।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: मीना का परिवार - पारिवारिक रिश्ते (NCERT सारंगी 1)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h1_concept_fam_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'पारिवारिक रिश्ते पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'पिताजी के पिताजी 👴 को परिवार में क्या कहते हैं?',
    visualEmoji: '👴 👓',
    payload: {
      options: [
        { id: 'opt_hfam1_1', text: 'दादा जी 👴', isCorrect: true },
        { id: 'opt_hfam1_2', text: 'मामा जी', isCorrect: false },
        { id: 'opt_hfam1_3', text: 'चाचा जी', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: पिताजी के पिताजी को **दादा जी** 👴 और माताजी के पिताजी को **नाना जी** कहते हैं।',
    points: 10,
  },
  {
    id: 'c1_h1_concept_fam_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'पारिवारिक रिश्ते पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'पिताजी की माताजी 👵 को परिवार में क्या कहते हैं?',
    visualEmoji: '👵 🧶',
    payload: {
      options: [
        { id: 'opt_hfam2_1', text: 'दादी जी 👵', isCorrect: true },
        { id: 'opt_hfam2_2', text: 'बुआ जी', isCorrect: false },
        { id: 'opt_hfam2_3', text: 'मौसी जी', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: पिताजी की माताजी को **दादी जी** 👵 कहते हैं, जो मीना को मीठी कहानियाँ सुनाती हैं!',
    points: 10,
  },
  {
    id: 'c1_h1_concept_fam_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'पारिवारिक रिश्ते मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'परिवार के सदस्यों को उनके सही नाम से मिलाइए:',
    visualEmoji: '👨‍👩‍👧‍👦 🏡',
    payload: {
      pairs: [
        { id: 'hfam_1', left: 'माता जी 👩', right: 'प्यारी माँ' },
        { id: 'hfam_2', left: 'पिता जी 👨', right: 'स्नेही बाबूजी / पापा' },
        { id: 'hfam_3', left: 'दादा जी 👴', right: 'पिताजी के पिता' },
        { id: 'hfam_4', left: 'दादी जी 👵', right: 'पिताजी की माता' },
      ],
    },
    explanation: '💡 परिवार में सब मिल-जुलकर प्रेम से रहते हैं!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: तुकबंदी वाले शब्द (Rhyming Words in Hindi: जल-नल, घर-पर)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h1_concept_rhyme_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'तुकबंदी शब्द पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'शब्द "जल" 💧 से मिलता-जुलता (तुकबंदी वाला) शब्द कौन सा है?',
    visualEmoji: '💧 🚰',
    payload: {
      options: [
        { id: 'opt_hrh1_1', text: 'नल 🚰', isCorrect: true },
        { id: 'opt_hrh1_2', text: 'बस 🚌', isCorrect: false },
        { id: 'opt_hrh1_3', text: 'घर 🏠', isCorrect: false },
      ],
    },
    explanation: '💡 समान ध्वनि वाले शब्दों को तुकबंदी कहते हैं: **जल - नल - कल - पल**!',
    points: 10,
  },
  {
    id: 'c1_h1_concept_rhyme_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'तुकबंदी शब्द पहचान',
    difficulty: 'medium',
    type: 'mcq',
    question: 'शब्द "घर" 🏠 की तुकबंदी वाला शब्द चुनिए:',
    visualEmoji: '🏠 🚪',
    payload: {
      options: [
        { id: 'opt_hrh2_1', text: 'पर', isCorrect: true },
        { id: 'opt_hrh2_2', text: 'फल 🍎', isCorrect: false },
        { id: 'opt_hrh2_3', text: 'मटर 🫛', isCorrect: false },
      ],
    },
    explanation: '💡 **घर** की तुकबंदी है **पर**, **डर**, **भर**!',
    points: 10,
  },
  {
    id: 'c1_h1_concept_rhyme_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'तुकबंदी जोड़े मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'समान तुक वाले (तुकबंदी) शब्दों के जोड़े मिलाइए:',
    visualEmoji: '🎵 📖',
    payload: {
      pairs: [
        { id: 'hrh_p1', left: 'जल 💧', right: 'नल 🚰' },
        { id: 'hrh_p2', left: 'घर 🏠', right: 'डर 😨' },
        { id: 'hrh_p3', left: 'मटर 🫛', right: 'शहर 🏙️' },
        { id: 'hrh_p4', left: 'तन 🧍', right: 'मन 🧠' },
      ],
    },
    explanation: '💡 जल-नल, घर-डर, मटर-शहर, तन-मन सबकी अंतिम ध्वनि समान है!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 8: सरल वाक्य पठन (मीना के घर के वाक्य)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h1_concept_sent_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'सरल वाक्य पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य पूरा कीजिए: "मीना अपने [BLANK] चल।"',
    visualEmoji: '👧 🏠',
    payload: {
      correctAnswer: 'घर',
      wordBank: ['घर', 'नल', 'खत', 'रस'],
      displayTemplate: 'मीना अपने [BLANK] चल। 🏠',
    },
    explanation: '💡 "मीना अपने **घर** चल।" 🏠',
    points: 10,
  },
  {
    id: 'c1_h1_concept_sent_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'मीना का परिवार (स्वर, व्यंजन व अमात्रिक शब्द)',
    concept: 'सरल वाक्य पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य पूरा कीजिए: "नल पर जाकर [BLANK] भर।"',
    visualEmoji: '🚰 💧',
    payload: {
      correctAnswer: 'जल',
      wordBank: ['जल', 'फल', 'बस', 'रथ'],
      displayTemplate: 'नल पर जाकर [BLANK] भर। 💧',
    },
    explanation: '💡 "नल पर जाकर **जल** भर।" 💧 जल का अर्थ पानी होता है।',
    points: 10,
  },
];
