import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 1 HINDI (सारंगी 1 / RIMJHIM 1)
// CHAPTER 4: चंदा मामा (उ व ऊ की मात्रा - ु, ू)
// Comprehensive Curriculum Covering All 7 Core Concepts (Global Benchmark Standard)
// ============================================================================

export const CLASS_1_HINDI_LESSON_4_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: छोटा 'उ' की मात्रा (चिह्न: ु - अक्षर के नीचे)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h4_concept_chota_u_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'छोटा उ की मात्रा पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'छोटा "उ" की मात्रा (ु) अक्षर में कहाँ लगाई जाती है?',
    visualEmoji: 'ु ➡️ कु',
    payload: {
      options: [
        { id: 'opt_cu1_1', text: 'अक्षर के नीचे बाईं ओर मुड़कर', isCorrect: true },
        { id: 'opt_cu1_2', text: 'अक्षर के ऊपर दो सींग', isCorrect: false },
        { id: 'opt_cu1_3', text: 'अक्षर के आगे एक डंडी', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: **छोटा उ (ु)** हमेशा अक्षर के नीचे गोल घूमकर ऊपर मुड़ता है, जैसे ग + ु = **गु**!',
    points: 10,
  },
  {
    id: 'c1_h4_concept_chota_u_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'छोटा उ की मात्रा शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'लाल पंखुड़ियों और मीठी खुशबू वाला सुंदर फूल 🌹 कौन सा है?',
    visualEmoji: '🌹 🌱',
    payload: {
      options: [
        { id: 'opt_cu2_1', text: 'गुलाब 🌹', isCorrect: true },
        { id: 'opt_cu2_2', text: 'सूरज ☀️', isCorrect: false },
        { id: 'opt_cu2_3', text: 'कमल 🪷', isCorrect: false },
      ],
    },
    explanation: '💡 ग + ु + ल + ा + ब = **गुलाब** 🌹! गुलाब में ग पर छोटा उ (ु) लगता है।',
    points: 10,
  },
  {
    id: 'c1_h4_concept_chota_u_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'छोटा उ की मात्रा रिक्त स्थान',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'नदी पार करने के लिए ऊपर पक्का [BLANK] बना है 🌉',
    visualEmoji: '🌉 🌊',
    payload: {
      correctAnswer: 'पुल',
      wordBank: ['पुल', 'नल', 'जल', 'कल'],
      displayTemplate: 'नदी पर [BLANK] बना है। 🌉',
    },
    explanation: '💡 प + ु + ल = **पुल** 🌉!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: बड़ा 'ऊ' की मात्रा (चिह्न: ू - अक्षर के नीचे पूंछ की तरह)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h4_concept_bada_oo_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'बड़ा ऊ की मात्रा पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: 'बड़ा "ऊ" की मात्रा (ू) की आवाज़ कैसी होती है?',
    visualEmoji: 'ू ➡️ सू',
    payload: {
      options: [
        { id: 'opt_bu1_1', text: 'लम्बी और खिंची हुई आवाज़', isCorrect: true },
        { id: 'opt_bu1_2', text: 'बहुत छोटी और हल्की आवाज़', isCorrect: false },
        { id: 'opt_bu1_3', text: 'गूँजती हुई नाक की आवाज़', isCorrect: false },
      ],
    },
    explanation: '💡 याद रखें: **बड़ा ऊ (ू)** की आवाज़ लम्बी खिंचती है: **सूरज ☀️, भालू 🐻, झूला**!',
    points: 10,
  },
  {
    id: 'c1_h4_concept_bada_oo_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'बड़ा ऊ की मात्रा शब्द',
    difficulty: 'easy',
    type: 'mcq',
    question: 'सुबह पूर्व दिशा से निकलकर संसार को रोशनी और धूप कौन देता है ☀️?',
    visualEmoji: '☀️ 🌄',
    payload: {
      options: [
        { id: 'opt_bu2_1', text: 'सूरज ☀️', isCorrect: true },
        { id: 'opt_bu2_2', text: 'तारा ⭐', isCorrect: false },
        { id: 'opt_bu2_3', text: 'बादल ☁️', isCorrect: false },
      ],
    },
    explanation: '💡 स + ू + र + ज = **सूरज** ☀️! स पर बड़ा ऊ (ू) लगता है।',
    points: 10,
  },
  {
    id: 'c1_h4_concept_bada_oo_03',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'बड़ा ऊ मात्रा शब्द मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'बड़ा ऊ (ू) की मात्रा वाले शब्दों को उनके सही चित्र से मिलाइए:',
    visualEmoji: '🐻 🐁 🎢 🌸',
    payload: {
      pairs: [
        { id: 'oo_p1', left: 'भालू', right: '🐻 नाचने वाला भालू' },
        { id: 'oo_p2', left: 'चूहा', right: '🐁 कुतरने वाला नटखट चूहा' },
        { id: 'oo_p3', left: 'झूला', right: '🎢 बाग में लगा झूला' },
        { id: 'oo_p4', left: 'फूल', right: '🌸 खिलता हुआ फूल' },
      ],
    },
    explanation: '💡 भालू, चूहा, झूला, फूल — सब में बड़ा ऊ (ू) आता है!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: 'र' में 'उ' और 'ऊ' की मात्रा का विशेष नियम (रु vs रू)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h4_concept_ra_rule_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'र में उ और ऊ मात्रा नियम',
    difficulty: 'hard',
    type: 'mcq',
    question: 'विशेष नियम: वर्ण "र" में उ और ऊ की मात्रा नीचे नहीं लगती! वह "र" के पेट (बीच) में लगती है। सही शब्द पहचानिए:',
    visualEmoji: 'र + ु = रु 💰',
    payload: {
      options: [
        { id: 'opt_rar1_1', text: 'रुपया 💰', isCorrect: true },
        { id: 'opt_rar1_2', text: 'र के नीचे गोल मात्रा', isCorrect: false },
      ],
    },
    explanation: '💡 बहुत बढ़िया! वर्ण **र** में उ की मात्रा उसके पेट के बीच लगती है: **रु (रुपया 💰, रुक)** और **रू (रूमाल 🧣, रूप)**!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 4: चंदा मामा पाठ बोध (NCERT सारंगी 1)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h4_concept_chanda_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'चंदा मामा पाठ बोध',
    difficulty: 'easy',
    type: 'mcq',
    question: 'रात के समय नीले आसमान में शीतल चांदनी कौन बिखेरता है 🌙?',
    visualEmoji: '🌙 ⭐',
    payload: {
      options: [
        { id: 'opt_chm1_1', text: 'चंदा मामा 🌙', isCorrect: true },
        { id: 'opt_chm1_2', text: 'सूरज दादा ☀️', isCorrect: false },
        { id: 'opt_chm1_3', text: 'पतंग 🪁', isCorrect: false },
      ],
    },
    explanation: '💡 रात में आसमान में प्यारे **चंदा मामा** 🌙 मुस्कुराते हैं!',
    points: 10,
  },
  {
    id: 'c1_h4_concept_chanda_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'कविता पंक्ति पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'प्रसिद्ध बाल कविता पूरी कीजिए: "चंदा मामा दूर के, पुए पकाएं [BLANK] के।" 🌙 🍯',
    visualEmoji: '🌙 🍯 🥣',
    payload: {
      correctAnswer: 'बूर',
      wordBank: ['बूर', 'दूध', 'पानी', 'गुड़'],
      displayTemplate: 'पुए पकाएं [BLANK] के। 🍯',
    },
    explanation: '💡 "चंदा मामा दूर के, पुए पकाएं **बूर** के!" 🌙',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 5: तुकबंदी वाले शब्द (Rhyming with "उ" & "ऊ" Matra)
  // --------------------------------------------------------------------------
  {
    id: 'c1_h4_concept_rhyme_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'बड़ा ऊ तुकबंदी',
    difficulty: 'easy',
    type: 'mcq',
    question: 'शब्द "भालू" 🐻 की सही तुकबंदी वाला शब्द कौन सा है?',
    visualEmoji: '🐻 🥔',
    payload: {
      options: [
        { id: 'opt_rhu1_1', text: 'आलू 🥔', isCorrect: true },
        { id: 'opt_rhu1_2', text: 'फूल 🌸', isCorrect: false },
        { id: 'opt_rhu1_3', text: 'पुल 🌉', isCorrect: false },
      ],
    },
    explanation: '💡 **भालू - आलू - चालू - कालू** सभी की तुकबंदी समान है!',
    points: 10,
  },
  {
    id: 'c1_h4_concept_rhyme_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'उ व ऊ तुकबंदी मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'समान तुक वाले (तुकबंदी) शब्दों के जोड़े मिलाइए:',
    visualEmoji: '🎵 📖',
    payload: {
      pairs: [
        { id: 'rhu_p1', left: 'पुल 🌉', right: 'कुल 👨‍👩‍👧' },
        { id: 'rhu_p2', left: 'धूल 🌪️', right: 'फूल 🌸' },
        { id: 'rhu_p3', left: 'सूट 👔', right: 'बूट 👢' },
        { id: 'rhu_p4', left: 'चूहा 🐁', right: 'सूहा 🔴' },
      ],
    },
    explanation: '💡 पुल-कुल, धूल-फूल, सूट-बूट, चूहा-सूहा — सभी समान ध्वनि वाले शब्द हैं!',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 6: सरल वाक्य पठन
  // --------------------------------------------------------------------------
  {
    id: 'c1_h4_concept_sent_01',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'सरल वाक्य पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य पूरा कीजिए: "सुबह हुई, [BLANK] निकला।" ☀️',
    visualEmoji: '☀️ 🌅',
    payload: {
      correctAnswer: 'सूरज',
      wordBank: ['सूरज', 'भालू', 'चूहा', 'दूध'],
      displayTemplate: 'सुबह हुई, [BLANK] निकला। ☀️',
    },
    explanation: '💡 "सुबह हुई, **सूरज** निकला!" ☀️',
    points: 10,
  },
  {
    id: 'c1_h4_concept_sent_02',
    grade: 1,
    subject: 'hindi',
    chapter: 'चंदा मामा (उ व ऊ की मात्रा - ु, ू)',
    concept: 'सरल वाक्य पूर्ण करना',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'वाक्य पूरा कीजिए: "मीनू गरम-गरम [BLANK] पी।" 🥛',
    visualEmoji: '🥛 😋',
    payload: {
      correctAnswer: 'दूध',
      wordBank: ['दूध', 'पूल', 'धूप', 'सूट'],
      displayTemplate: 'मीनू गरम-गरम [BLANK] पी। 🥛',
    },
    explanation: '💡 द + ू + ध = **दूध** 🥛! दूध पीने से शरीर मजबूत बनता है।',
    points: 10,
  },
];
