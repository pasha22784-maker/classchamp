import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 HINDI (सारंगी 1 / RIMJHIM 1)
// CHAPTER 3: रीना का तोता (इ व ई की मात्रा - ि, ी)
// Comprehensive Curriculum Covering All 7 Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_1_HINDI_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: छोटी 'इ' की मात्रा की पहचान (चिह्न: ि - अक्षर के आगे से)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h3_concept_choti_i_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'छोटी इ की मात्रा पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'छोटी "इ" की मात्रा (ि) अक्षर के किस तरफ से लगाई जाती है?',
    visualEmoji: 'ि ➡️ कि',
    payload: {
      options: [
        { id: 'opt_ci1_1', text: 'अक्षर के आगे से टोपी की तरह', isCorrect: true },
        { id: 'opt_ci1_2', text: 'अक्षर के पीछे से', isCorrect: false },
        { id: 'opt_ci1_3', text: 'अक्षर के नीचे से', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: **छोटी इ (ि)** हमेशा अक्षर के आगे (बाईं तरफ) से ऊपर घूमकर लगती है, जैसे क + ि = **कि**!',
    points: 10,
  },
  {
    id: 'c1_h3_concept_choti_i_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'छोटी इ की मात्रा शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'सुबह सूरज निकलने पर क्या होता है? ☀️ सही शब्द चुनिए:',
    visualEmoji: '☀️ 🌅',
    payload: {
      options: [
        { id: 'opt_ci2_1', text: 'दिन ☀️', isCorrect: true },
        { id: 'opt_ci2_2', text: 'रात 🌙', isCorrect: false },
        { id: 'opt_ci2_3', text: 'धूप 🌤️', isCorrect: false },
      ],
    },
    explanation: '💡 द + ि + न = **दिन** ☀️! दिन में छोटी इ (ि) की हल्की आवाज़ आती है।',
    points: 10,
  },
  {
    id: 'c1_h3_concept_choti_i_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'छोटी इ की मात्रा रिक्त स्थान',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'पेड़ की डाली पर छोटी [BLANK] चहचहा रही है 🐦',
    visualEmoji: '🐦 🌳',
    payload: {
      correctAnswer: 'चिड़िया',
      wordBank: ['चिड़िया', 'हाथी', 'बिल्ली', 'मछली'],
      displayTemplate: 'पेड़ पर [BLANK] बैठी है। 🐦',
    },
    explanation: '💡 च + ि + ड़ + ि + य + ा = **चिड़िया** 🐦! चिड़िया में दोनों अक्षरों में छोटी इ (ि) लगती है।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: बड़ी 'ई' की मात्रा की पहचान (चिह्न: ी - अक्षर के पीछे से)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h3_concept_badi_ee_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'बड़ी ई की मात्रा पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'बड़ी "ई" की मात्रा (ी) अक्षर के किस तरफ से लगाई जाती है?',
    visualEmoji: 'ी ➡️ की',
    payload: {
      options: [
        { id: 'opt_be1_1', text: 'अक्षर के पीछे से', isCorrect: true },
        { id: 'opt_be1_2', text: 'अक्षर के आगे से', isCorrect: false },
        { id: 'opt_be1_3', text: 'अक्षर के ऊपर दो मात्राएँ', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: **बड़ी ई (ी)** अक्षर के पीछे से दाईं तरफ लगती है और इसका स्वर लम्बा खींचा जाता है, जैसे त + ी = **ती**!',
    points: 10,
  },
  {
    id: 'c1_h3_concept_badi_ee_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'बड़ी ई की मात्रा शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'बड़ी सूंड़ और पंखे जैसे कानों वाला विशाल जानवर 🐘 कौन सा है?',
    visualEmoji: '🐘 🌴',
    payload: {
      options: [
        { id: 'opt_be2_1', text: 'हाथी 🐘', isCorrect: true },
        { id: 'opt_be2_2', text: 'हिरन 🦌', isCorrect: false },
        { id: 'opt_be2_3', text: 'शेर 🦁', isCorrect: false },
      ],
    },
    explanation: '💡 ह + ा + थ + ी = **हाथी** 🐘! थ के पीछे बड़ी ई (ी) की मात्रा लगती है।',
    points: 10,
  },
  {
    id: 'c1_h3_concept_badi_ee_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'बड़ी ई की मात्रा वाले शब्द मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'बड़ी ई (ी) की मात्रा वाले शब्दों को उनके सही चित्र से मिलाइए:',
    visualEmoji: '🐟 🦋 🪈 🗝️',
    payload: {
      pairs: [
        { id: 'ee_p1', left: 'मछली', right: '🐟 जल की रानी मछली' },
        { id: 'ee_p2', left: 'तितली', right: '🦋 रंग-बिरंगी उड़ती तितली' },
        { id: 'ee_p3', left: 'सीटी', right: '🪈 सीटी बजाओ' },
        { id: 'ee_p4', left: 'चाबी', right: '🗝️ ताले की चाबी' },
      ],
    },
    explanation: '💡 मछली, तितली, सीटी, चाबी — इन सभी शब्दों में बड़ी ई (ी) की मात्रा आती है!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: छोटी 'इ' और बड़ी 'ई' की आवाज़ में अंतर (ध्वनि विभेद)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h3_concept_diff_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'इ व ई मात्रा में अंतर',
    difficulty: 'medium',
    type: 'mcq',
    question: 'इनमें से किस शब्द में छोटी "इ" (ि) की हल्की आवाज़ आती है?',
    visualEmoji: 'ि 👂 ?',
    payload: {
      options: [
        { id: 'opt_idf1_1', text: 'किताब 📖', isCorrect: true },
        { id: 'opt_idf1_2', text: 'कील 📍', isCorrect: false },
        { id: 'opt_idf1_3', text: 'खीर 🍲', isCorrect: false },
      ],
    },
    explanation: '💡 **किताब** में क पर छोटी इ (ि) लगती है जिसे जल्दी बोलते हैं: "कि-ताब"। कील और खीर में लम्बी बड़ी ई (ी) है।',
    points: 10,
  },
  {
    id: 'c1_h3_concept_diff_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'इ व ई मात्रा में अंतर',
    difficulty: 'medium',
    type: 'mcq',
    question: 'इनमें से किस शब्द में बड़ी "ई" (ी) की लम्बी आवाज़ आती है?',
    visualEmoji: 'ी 👂 ?',
    payload: {
      options: [
        { id: 'opt_idf2_1', text: 'दीपक 🪔', isCorrect: true },
        { id: 'opt_idf2_2', text: 'पिन 📌', isCorrect: false },
        { id: 'opt_idf2_3', text: 'गिन 🔢', isCorrect: false },
      ],
    },
    explanation: '💡 **दीपक** 🪔 में द पर बड़ी ई (ी) की लम्बी मात्रा है! पिन और गिन में छोटी इ (ि) है।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: रीना का तोता पाठ बोध (NCERT सारंगी 1)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h3_concept_story_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'रीना का तोता पाठ बोध',
    difficulty: 'easy',
    type: 'mcq',
    question: 'रीना के पालतू तोते 🦜 का रंग कैसा है और वह क्या खाना पसंद करता है?',
    visualEmoji: '🦜 🌶️ 🟢',
    payload: {
      options: [
        { id: 'opt_tota_1', text: 'हरा तोता, हरी मिर्च और अमरूद खाता है 🦜', isCorrect: true },
        { id: 'opt_tota_2', text: 'नीला तोता, मछली खाता है', isCorrect: false },
        { id: 'opt_tota_3', text: 'काला तोता, दूध पीता है', isCorrect: false },
      ],
    },
    explanation: '💡 NCERT सारंगी 1: तोते का रंग हरा 🟢 होता है, चोंच लाल होती है और वह तीखी **हरी मिर्च** 🌶️ बड़े चाव से खाता है!',
    points: 10,
  },
  {
    id: 'c1_h3_concept_story_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'रीना का तोता पाठ बोध',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'तोते की सुंदर चोंच किस रंग की होती है? तोते की चोंच [BLANK] है 🦜',
    visualEmoji: '🦜 🔴',
    payload: {
      correctAnswer: 'लाल',
      wordBank: ['लाल', 'हरी', 'काली', 'नीली'],
      displayTemplate: 'तोते की चोंच [BLANK] है। 🦜',
    },
    explanation: '💡 तोते के पंख हरे और चोंच **लाल** 🔴 होती है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: तुकबंदी वाले शब्द (Rhyming Words with "ई" Matra)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h3_concept_rhyme_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'बड़ी ई तुकबंदी',
    difficulty: 'easy',
    type: 'mcq',
    question: 'शब्द "मछली" 🐟 की सही तुकबंदी वाला शब्द चुनिए:',
    visualEmoji: '🐟 🦋',
    payload: {
      options: [
        { id: 'opt_rhye1_1', text: 'तितली 🦋', isCorrect: true },
        { id: 'opt_rhye1_2', text: 'पानी 💧', isCorrect: false },
        { id: 'opt_rhye1_3', text: 'तोता 🦜', isCorrect: false },
      ],
    },
    explanation: '💡 **मछली - तितली - ककड़ी - लकड़ी** सभी में समान तुकबंदी आती है!',
    points: 10,
  },
  {
    id: 'c1_h3_concept_rhyme_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'इ व ई तुकबंदी मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'समान तुक वाले (तुकबंदी) शब्दों के जोड़े मिलाइए:',
    visualEmoji: '🎵 📖',
    payload: {
      pairs: [
        { id: 'rhee_1', left: 'दिन ☀️', right: 'पिन 📌' },
        { id: 'rhee_2', left: 'खीर 🍲', right: 'तीर 🏹' },
        { id: 'rhee_3', left: 'नानी 👵', right: 'पानी 💧' },
        { id: 'rhee_4', left: 'गीत 🎶', right: 'मीत 🤝' },
      ],
    },
    explanation: '💡 दिन-पिन, खीर-तीर, नानी-पानी, गीत-मीत की ध्वनियाँ मिलती हैं!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: सरल वाक्य पठन
  // --------------------------------------------------------------------------
  {
    id: 'c1_h3_concept_sent_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'कविता पंक्ति पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'कविता पूरी कीजिए: "मछली [BLANK] की रानी है, जीवन उसका पानी है।" 🐟 💧',
    visualEmoji: '🐟 💧 👑',
    payload: {
      correctAnswer: 'जल',
      wordBank: ['जल', 'थल', 'कल', 'नल'],
      displayTemplate: 'मछली [BLANK] की रानी है। 🐟',
    },
    explanation: '💡 "मछली **जल** की रानी है, जीवन उसका पानी है!" 🐟💧',
    points: 10,
  },
  {
    id: 'c1_h3_concept_sent_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'रीना का तोता (इ व ई की मात्रा - ि, ी)',
    concept: 'सरल वाक्य पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य पूरा कीजिए: "रीना मीठी-मीठी [BLANK] लाई।" 🍒',
    visualEmoji: '👧 🍒',
    payload: {
      correctAnswer: 'लीची',
      wordBank: ['लीची', 'मिर्ची', 'रोटी', 'खट्टी'],
      displayTemplate: 'रीना मीठी [BLANK] लाई। 🍒',
    },
    explanation: '💡 ल + ी + च + ी = **लीची** 🍒! लीची बहुत मीठी और रसीली होती है।',
    points: 10,
  },
];
