import { Question } from '../../types';

// ============================================================================
// NCERT CLASS 3 HINDI (वीणा 3 / RIMJHIM 3)
// CHAPTER 3: चाँद वाली अम्मा (क्रिया व काल)
// Comprehensive Curriculum Covering All Core Concepts (IXL Pedagogical Standard)
// ============================================================================

export const CLASS_3_HINDI_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // CONCEPT 1: कहानी संदर्भ व क्रिया शब्द
  // --------------------------------------------------------------------------
  {
    id: 'c3_h3_concept_story_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'चाँद वाली अम्मा (क्रिया व काल)',
    concept: 'कहानी संदर्भ व मुख्य काम',
    difficulty: 'easy',
    type: 'mcq',
    question: 'कहानी में अम्मा सुबह उठकर रोज़ सबसे पहले क्या काम करती थी?',
    visualEmoji: '👵 🧹 🏠',
    payload: {
      options: [
        { id: 'opt_am1', text: 'घर में झाड़ू लगाती थी', isCorrect: true },
        { id: 'opt_am2', text: 'पेड़ पर चढ़ती थी', isCorrect: false },
        { id: 'opt_am3', text: 'पतंग उड़ाती थी', isCorrect: false },
      ],
    },
    explanation: '💡 अम्मा अकेले रहती थी और रोज़ सुबह उठकर घर का सारा काम जैसे कुएँ से पानी लाना, खाना बनाना और **झाड़ू लगाना** करती थी!',
    points: 10,
  },
  {
    id: 'c3_h3_concept_kriya_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'चाँद वाली अम्मा (क्रिया व काल)',
    concept: 'क्रिया शब्द की पहचान',
    difficulty: 'easy',
    type: 'fill_blank',
    question: '"आसमान अम्मा की झाड़ू को ऊपर [BLANK] लगा।" (खींचने का काम)',
    visualEmoji: '☁️ 🧹 👵',
    payload: {
      correctAnswer: 'खींचने',
      wordBank: ['खींचने', 'धोने', 'सुखाने', 'पकाने'],
      displayTemplate: 'आसमान झाड़ू को ऊपर [BLANK] लगा।',
    },
    explanation: '💡 किसी काम के करने या होने का बोध कराने वाले शब्द **क्रिया** कहलाते हैं (जैसे खींचना, उड़ना, पकड़ना)!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 2: काल परिचय (भूतकाल, वर्तमानकाल, भविष्यत काल)
  // --------------------------------------------------------------------------
  {
    id: 'c3_h3_concept_kaal_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'चाँद वाली अम्मा (क्रिया व काल)',
    concept: 'भूतकाल (बीता हुआ समय)',
    difficulty: 'easy',
    type: 'mcq',
    question: 'इनमें से कौन सा वाक्य "भूतकाल" (बीते हुए समय) का है?',
    visualEmoji: '⏳ 📜 👵',
    payload: {
      options: [
        { id: 'opt_kl1', text: 'अम्मा झाड़ू लगा रही थी।', isCorrect: true },
        { id: 'opt_kl2', text: 'अम्मा झाड़ू लगा रही है।', isCorrect: false },
        { id: 'opt_kl3', text: 'अम्मा झाड़ू लगाएगी।', isCorrect: false },
      ],
    },
    explanation: '💡 जिस क्रिया से काम के बीते हुए समय में होने का पता चले, उसे **भूतकाल** कहते हैं (पहचान: था, थी, थे)।',
    points: 10,
  },
  {
    id: 'c3_h3_concept_kaal_02',
    grade: 3,
    subject: 'hindi',
    chapter: 'चाँद वाली अम्मा (क्रिया व काल)',
    concept: 'वर्तमानकाल व भविष्यत काल',
    difficulty: 'medium',
    type: 'mcq',
    question: '"कल हम सब पिकनिक जाएँगे।" यह वाक्य किस काल का है?',
    visualEmoji: '🧺 🌳 🚌 🔜',
    payload: {
      options: [
        { id: 'opt_fut1', text: 'भविष्यत काल', isCorrect: true },
        { id: 'opt_fut2', text: 'भूतकाल', isCorrect: false },
        { id: 'opt_fut3', text: 'वर्तमानकाल', isCorrect: false },
      ],
    },
    explanation: '💡 आने वाले समय में होने वाले काम को **भविष्यत काल** कहते हैं (पहचान: गा, गे, गी)!',
    points: 10,
  },
  {
    id: 'c3_h3_concept_kaal_03',
    grade: 3,
    subject: 'hindi',
    chapter: 'चाँद वाली अम्मा (क्रिया व काल)',
    concept: 'वर्तमानकाल का क्रिया रूप',
    difficulty: 'easy',
    type: 'fill_blank',
    question: 'आसमान में चिड़ियाँ उड़ [BLANK] हैं। (वर्तमान समय)',
    visualEmoji: '🕊️ ☁️ ☀️',
    payload: {
      correctAnswer: 'रही',
      wordBank: ['रही', 'थीं', 'सकती', 'होती'],
      displayTemplate: 'चिड़ियाँ अभी उड़ [BLANK] हैं।',
    },
    explanation: '💡 वर्तमान में हो रहे काम के लिए "रहा है / रही हैं" का प्रयोग होता है!',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // CONCEPT 3: काल मिलान व वाक्य क्रम
  // --------------------------------------------------------------------------
  {
    id: 'c3_h3_concept_match_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'चाँद वाली अम्मा (क्रिया व काल)',
    concept: 'काल पहचान मिलान',
    difficulty: 'medium',
    type: 'match_pairs',
    question: 'वाक्य को उसके सही काल से मिलाइए:',
    visualEmoji: '⏰ ➔ 🎯',
    payload: {
      pairs: [
        { id: 'h3_p1', left: 'अम्मा चाँद पर बैठ गई', right: 'भूतकाल' },
        { id: 'h3_p2', left: 'बच्चे खेल रहे हैं', right: 'वर्तमानकाल' },
        { id: 'h3_p3', left: 'हम कल कहानी पढ़ेंगे', right: 'भविष्यत काल' },
        { id: 'h3_p4', left: 'सूरज चमक रहा है', right: 'वर्तमानकाल' },
      ],
    },
    explanation: '💡 बैठ गई = भूतकाल, खेल रहे हैं / चमक रहा है = वर्तमानकाल, पढ़ेंगे = भविष्यत काल।',
    points: 15,
  },
  {
    id: 'c3_h3_concept_order_01',
    grade: 3,
    subject: 'hindi',
    chapter: 'चाँद वाली अम्मा (क्रिया व काल)',
    concept: 'कहानी की घटनाओं का सही क्रम',
    difficulty: 'medium',
    type: 'drag_order',
    question: 'कहानी की मुख्य घटनाओं को सही क्रम में लगाइए:',
    visualEmoji: '👵 ➔ ☁️ ➔ 🌙',
    payload: {
      tokens: ['अम्मा आँगन में झाड़ू लगाती थी', 'आसमान आकर अम्मा की कमर से टकराता', 'अम्मा ने आसमान को झाड़ू से मारा', 'अम्मा झाड़ू सहित चाँद पर पहुँच गई'],
      scrambled: ['अम्मा ने आसमान को झाड़ू से मारा', 'अम्मा आँगन में झाड़ू लगाती थी', 'अम्मा झाड़ू सहित चाँद पर पहुँच गई', 'आसमान आकर अम्मा की कमर से टकराता'],
      correctSequence: ['अम्मा आँगन में झाड़ू लगाती थी', 'आसमान आकर अम्मा की कमर से टकराता', 'अम्मा ने आसमान को झाड़ू से मारा', 'अम्मा झाड़ू सहित चाँद पर पहुँच गई'],
    },
    explanation: '💡 सही क्रम: झाड़ू लगाना ➔ आसमान का टकराना ➔ झाड़ू से मारना ➔ चाँद पर पहुँचना!',
    points: 15,
  },
];
