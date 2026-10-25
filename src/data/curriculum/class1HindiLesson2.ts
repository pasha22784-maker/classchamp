import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 HINDI (सारंगी 1 / RIMJHIM 1)
// CHAPTER 2: दादा-दादी (आ की मात्रा - ा)
// Comprehensive Curriculum Covering All 7 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_HINDI_LESSON_2_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: आ की मात्रा का ज्ञान (स्वर आ का चिह्न: ा)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h2_concept_matra_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'आ की मात्रा पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'हिंदी वर्णमाला में "आ" की मात्रा का सही चिह्न कौन सा है?',
    visualEmoji: 'आ ➡️ ा',
    payload: {
      options: [
        { id: 'opt_hm1_1', text: 'ा', isCorrect: true },
        { id: 'opt_hm1_2', text: 'ि', isCorrect: false },
        { id: 'opt_hm1_3', text: 'ु', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: स्वर "आ" की मात्रा **ा** (खड़ी डंडी) होती है, जैसे क + ा = का!',
    points: 10,
  },
  {
    id: 'c1_h2_concept_matra_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'मात्रा जोड़ना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'अक्षर और मात्रा जोड़कर शब्द बनाइए: क + ा + न = [BLANK] 👂',
    visualEmoji: 'क + ा + न = 👂',
    payload: {
      correctAnswer: 'कान',
      wordBank: ['कान', 'पान', 'मान', 'दान'],
      displayTemplate: 'क + ा + न = [BLANK] 👂 (सुनने वाला अंग)',
    },
    explanation: '💡 क + ा + न = **कान** 👂! कान से हम सुंदर आवाज़ें सुनते हैं।',
    points: 10,
  },
  {
    id: 'c1_h2_concept_matra_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'मात्रा जोड़कर शब्द बनाना',
    difficulty: 'easy',
    type: 'mcq',
    question: 'अक्षर और मात्रा जोड़िए: न + ा + क = ? 👃',
    visualEmoji: 'न + ा + क = 👃',
    payload: {
      options: [
        { id: 'opt_hm3_1', text: 'नाक 👃', isCorrect: true },
        { id: 'opt_hm3_2', text: 'नाम 🏷️', isCorrect: false },
        { id: 'opt_hm3_3', text: 'नाच 💃', isCorrect: false },
      ],
    },
    explanation: '💡 न + ा + क = **नाक** 👃! नाक से हम फूलों की खुशबू सूँघते हैं।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: आ की मात्रा वाले दो अक्षर के शब्द (आम, हाथ, रात, दाल, लाल)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h2_concept_2l_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'आ की मात्रा वाले शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'गर्मियों में पकने वाला रसीला पीला फल 🥭 कौन सा है?',
    visualEmoji: '🥭 🌞',
    payload: {
      options: [
        { id: 'opt_h2l1_1', text: 'आम 🥭', isCorrect: true },
        { id: 'opt_h2l1_2', text: 'आग 🔥', isCorrect: false },
        { id: 'opt_h2l1_3', text: 'आज 📅', isCorrect: false },
      ],
    },
    explanation: '💡 आ + म = **आम** 🥭! आम बहुत मीठा और रसीला होता है।',
    points: 10,
  },
  {
    id: 'c1_h2_concept_2l_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'शरीर के अंग व आ की मात्रा',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'शरीर के अंगों को सही चित्र से मिलाइए (सभी में आ की मात्रा है):',
    visualEmoji: '✋ 👂 👃 👄',
    payload: {
      pairs: [
        { id: 'ang_1', left: 'हाथ', right: '✋ काम करने वाला हाथ' },
        { id: 'ang_2', left: 'कान', right: '👂 सुनने वाला कान' },
        { id: 'ang_3', left: 'नाक', right: '👃 सूँघने वाली नाक' },
        { id: 'ang_4', left: 'गाल', right: '😊 गुलाबी गाल' },
      ],
    },
    explanation: '💡 हाथ, कान, नाक, गाल — इन सभी में आ की मात्रा (ा) आती है!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: दोनों अक्षरों में आ की मात्रा (छाता, ताला, राजा, माला, बाजा)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h2_concept_both_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'दोनों अक्षरों में आ की मात्रा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'बारिश के मौसम में हम धूप और पानी से बचने के लिए क्या खोलते हैं ☂️?',
    visualEmoji: '☂️ 🌧️',
    payload: {
      options: [
        { id: 'opt_bth1_1', text: 'छाता ☂️', isCorrect: true },
        { id: 'opt_bth1_2', text: 'ताला 🔒', isCorrect: false },
        { id: 'opt_bth1_3', text: 'बाजा 🎺', isCorrect: false },
      ],
    },
    explanation: '💡 छ + ा + त + ा = **छाता** ☂️! छाते के दोनों अक्षरों में आ (ा) की मात्रा लगती है।',
    points: 10,
  },
  {
    id: 'c1_h2_concept_both_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'दोनों अक्षरों में आ की मात्रा रिक्त स्थान',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'घर की सुरक्षा के लिए दरवाज़े पर [BLANK] लगाते हैं 🔒',
    visualEmoji: '🔒 🚪',
    payload: {
      correctAnswer: 'ताला',
      wordBank: ['ताला', 'माला', 'शाला', 'काला'],
      displayTemplate: 'दरवाज़े पर [BLANK] लगाओ। 🔒',
    },
    explanation: '💡 त + ा + ल + ा = **ताला** 🔒!',
    points: 10,
  },
  {
    id: 'c1_h2_concept_both_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'आ की मात्रा वाले वस्तु मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'शब्द को उसके सही चित्र से मिलाइए:',
    visualEmoji: '👑 🎺 📿 🔒',
    payload: {
      pairs: [
        { id: 'aa_obj1', left: 'राजा', right: '👑 सिर पर मुकुट पहने' },
        { id: 'aa_obj2', left: 'बाजा', right: '🎺 मधुर ध्वनि बजाने वाला' },
        { id: 'aa_obj3', left: 'माला', right: '📿 फूलों की सुंदर माला' },
        { id: 'aa_obj4', left: 'ताला', right: '🔒 दरवाज़े पर लगा' },
      ],
    },
    explanation: '💡 राजा, बाजा, माला, ताला — सब में दोनों अक्षरों में आ (ा) की मात्रा है!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: तीन अक्षर वाले आ की मात्रा के शब्द (बादल, गाजर, पालक, गमला)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h2_concept_3l_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'तीन अक्षर वाले शब्द',
    difficulty: 'medium',
    type: 'mcq',
    question: 'आसमान में काले-काले घुमड़ते हैं और बारिश लाते हैं 🌧️:',
    visualEmoji: '☁️ 🌧️',
    payload: {
      options: [
        { id: 'opt_3la1_1', text: 'बादल 🌧️', isCorrect: true },
        { id: 'opt_3la1_2', text: 'काजल 👁️', isCorrect: false },
        { id: 'opt_3la1_3', text: 'चावल 🍚', isCorrect: false },
      ],
    },
    explanation: '💡 ब + ा + द + ल = **बादल** 🌧️! काले बादल गरज-गरज कर जल बरसाते हैं।',
    points: 10,
  },
  {
    id: 'c1_h2_concept_3l_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'सब्ज़ियों में आ की मात्रा',
    difficulty: 'medium',
    type: 'mcq',
    question: 'खरगोश 🐇 को कौन सी लाल-मीठी सब्ज़ी खाना सबसे ज्यादा पसंद है?',
    visualEmoji: '🥕 🐇',
    payload: {
      options: [
        { id: 'opt_3la2_1', text: 'गाजर 🥕', isCorrect: true },
        { id: 'opt_3la2_2', text: 'मटर 🫛', isCorrect: false },
        { id: 'opt_3la2_3', text: 'शलजम 🧅', isCorrect: false },
      ],
    },
    explanation: '💡 ग + ा + ज + र = **गाजर** 🥕! गाजर में आ (ा) की मात्रा होती है।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: दादा-दादी पाठ बोध (NCERT सारंगी 1)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h2_concept_story_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'दादा-दादी पाठ बोध',
    difficulty: 'easy',
    type: 'mcq',
    question: 'दादा जी सुबह धूप में बैठकर क्या पढ़ते हैं 📰?',
    visualEmoji: '👴 📰 👓',
    payload: {
      options: [
        { id: 'opt_dd1_1', text: 'अखबार 📰', isCorrect: true },
        { id: 'opt_dd1_2', text: 'खेल का बल्ला 🏏', isCorrect: false },
        { id: 'opt_dd1_3', text: 'खिलौना 🧸', isCorrect: false },
      ],
    },
    explanation: '💡 दादा जी सुबह चश्मा लगाकर **अखबार** 📰 पढ़ते हैं!',
    points: 10,
  },
  {
    id: 'c1_h2_concept_story_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'दादा-दादी पाठ बोध',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'दादी जी बच्चों को रात में प्यार से [BLANK] सुनाती हैं 👵',
    visualEmoji: '👵 📖 ⭐',
    payload: {
      correctAnswer: 'कहानी',
      wordBank: ['कहानी', 'गाली', 'ताली', 'डाली'],
      displayTemplate: 'दादी जी प्यार से [BLANK] सुनाती हैं। 👵',
    },
    explanation: '💡 दादी जी बच्चों को परियों और राजा-रानी की मीठी **कहानी** सुनाती हैं!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: तुकबंदी वाले शब्द (Rhyming with "आ" Matra)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h2_concept_rhyme_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'आ की मात्रा तुकबंदी',
    difficulty: 'easy',
    type: 'mcq',
    question: 'शब्द "आम" 🥭 का तुकबंदी (मिलती-जुलती ध्वनि वाला) शब्द कौन सा है?',
    visualEmoji: '🥭 🏷️',
    payload: {
      options: [
        { id: 'opt_rhya1_1', text: 'नाम', isCorrect: true },
        { id: 'opt_rhya1_2', text: 'नाक 👃', isCorrect: false },
        { id: 'opt_rhya1_3', text: 'नल 🚰', isCorrect: false },
      ],
    },
    explanation: '💡 **आम - नाम - काम - दाम** सभी की अंतिम ध्वनि "ाम" समान है!',
    points: 10,
  },
  {
    id: 'c1_h2_concept_rhyme_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'तुकबंदी जोड़े मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'आ की मात्रा वाले तुकबंदी शब्दों के जोड़े मिलाइए:',
    visualEmoji: '🎵 ✍️',
    payload: {
      pairs: [
        { id: 'rh_aa1', left: 'राजा 👑', right: 'बाजा 🎺' },
        { id: 'rh_aa2', left: 'ताला 🔒', right: 'माला 📿' },
        { id: 'rh_aa3', left: 'लाल 🔴', right: 'गाल 😊' },
        { id: 'rh_aa4', left: 'रात 🌙', right: 'बात 🗣️' },
      ],
    },
    explanation: '💡 राजा-बाजा, ताला-माला, लाल-गाल, रात-बात — सभी आ की मात्रा के तुक वाले शब्द हैं!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 7: आ की मात्रा वाले सरल वाक्य पठन
  // --------------------------------------------------------------------------
  {
    id: 'c1_h2_concept_sent_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'सरल वाक्य पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य पूरा कीजिए: "बरसा पानी, लगाओ [BLANK]।" 🌧️ ☂️',
    visualEmoji: '🌧️ ☂️',
    payload: {
      correctAnswer: 'छाता',
      wordBank: ['छाता', 'माला', 'ताला', 'बाजा'],
      displayTemplate: 'बरसा पानी, लगाओ [BLANK]! ☂️',
    },
    explanation: '💡 "बरसा पानी, लगाओ **छाता**!" ☂️',
    points: 10,
  },
  {
    id: 'c1_h2_concept_sent_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'दादा-दादी (आ की मात्रा - ा)',
    concept: 'सरल वाक्य पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य पूरा कीजिए: "अमन बाज़ार जाकर मीठा [BLANK] ला।" 🥭',
    visualEmoji: '🥭 🛒',
    payload: {
      correctAnswer: 'आम',
      wordBank: ['आम', 'कान', 'पान', 'दाल'],
      displayTemplate: 'अमन बाज़ार जाकर मीठा [BLANK] ला। 🥭',
    },
    explanation: '💡 "अमन बाज़ार जाकर मीठा **आम** ला।" 🥭',
    points: 10,
  },
];
