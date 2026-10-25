import { Question } from '../../types';

// ============================================================================
// CLASS 6 HINDI (UNIVERSAL VYAKARAN)
// CHAPTER 3: संधि परिचय (स्वर संधि के भेद)
// 15 Questions: 5 Easy, 5 Medium, 5 Hard (Points: 10, 15, 20)
// Global Benchmark Standard | Zero Spoilers | Universal Grammar
// ============================================================================

export const CLASS_6_HINDI_LESSON_3_QUESTIONS: Question[] = [
  // --------------------------------------------------------------------------
  // TIER 1: EASY (5 Questions | 10 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h3_q01',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'संधि की परिभाषा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'दो समीपवर्ती वर्णों के परस्पर मेल से जो विकार या परिवर्तन उत्पन्न होता है, उसे क्या कहते हैं?',
    visualEmoji: '🤝 🔤',
    payload: {
      options: [
        { id: 'opt_1', text: 'संधि', isCorrect: true },
        { id: 'opt_2', text: 'समास', isCorrect: false },
        { id: 'opt_3', text: 'प्रत्यय', isCorrect: false },
        { id: 'opt_4', text: 'उपसर्ग', isCorrect: false },
      ],
    },
    explanation: 'दो वर्णों (ध्वनियों) के आपस में मिलने से होने वाले विकार को संधि कहते हैं।',
    points: 10,
  },
  {
    id: 'c6_h3_q02',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'संधि के मुख्य भेद',
    difficulty: 'easy',
    type: 'mcq',
    question: 'हिंदी व्याकरण में संधि के मुख्य रूप से कितने भेद होते हैं?',
    visualEmoji: '🔢 📚',
    payload: {
      options: [
        { id: 'opt_1', text: 'तीन', isCorrect: true },
        { id: 'opt_2', text: 'पाँच', isCorrect: false },
        { id: 'opt_3', text: 'चार', isCorrect: false },
        { id: 'opt_4', text: 'दो', isCorrect: false },
      ],
    },
    explanation: 'संधि के मुख्य तीन भेद होते हैं: स्वर संधि, व्यंजन संधि तथा विसर्ग संधि।',
    points: 10,
  },
  {
    id: 'c6_h3_q03',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'स्वर संधि की परिभाषा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'स्वर वर्ण के साथ दूसरे स्वर वर्ण के मेल से होने वाले परिवर्तन को क्या कहते हैं?',
    visualEmoji: '🅰️ 🅰️',
    payload: {
      options: [
        { id: 'opt_1', text: 'स्वर संधि', isCorrect: true },
        { id: 'opt_2', text: 'व्यंजन संधि', isCorrect: false },
        { id: 'opt_3', text: 'विसर्ग संधि', isCorrect: false },
        { id: 'opt_4', text: 'अयादि व्यंजन', isCorrect: false },
      ],
    },
    explanation: 'जब दो स्वरों के आपस में मिलने से कोई विकार उत्पन्न होता है, तो उसे स्वर संधि कहते हैं।',
    points: 10,
  },
  {
    id: 'c6_h3_q04',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'दीर्घ स्वर संधि पहचान',
    difficulty: 'easy',
    type: 'mcq',
    question: '"हिम + आलय" के मेल से कौन-सा नया शब्द बनेगा?',
    visualEmoji: '❄️ 🏔️',
    payload: {
      options: [
        { id: 'opt_1', text: 'हिमालय', isCorrect: true },
        { id: 'opt_2', text: 'हिमालयन', isCorrect: false },
        { id: 'opt_3', text: 'हिमेलय', isCorrect: false },
        { id: 'opt_4', text: 'हिमोदय', isCorrect: false },
      ],
    },
    explanation: 'हिम (अ) + आलय (आ) = हिमालय (आ)। यह दीर्घ स्वर संधि का उदाहरण है।',
    points: 10,
  },
  {
    id: 'c6_h3_q05',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'संधि व संधि-विच्छेद की अवधारणा',
    difficulty: 'easy',
    type: 'mcq',
    question: 'संधि युक्त शब्दों को अलग-अलग करके पहली स्थिति में लिखने को संधि-विच्छेद कहते हैं।',
    visualEmoji: '✂️ 📄',
    payload: {
      options: [
        { id: 'opt_1', text: 'सत्य', isCorrect: true },
        { id: 'opt_2', text: 'असत्य', isCorrect: false },
      ],
    },
    explanation: 'मिले हुए वर्णों को अलग-अलग करके उनके मूल रूप में लिखना ही संधि-विच्छेद कहलाता है (जैसे: विद्यालय = विद्या + आलय)।',
    points: 10,
  },

  // --------------------------------------------------------------------------
  // TIER 2: MEDIUM (5 Questions | 15 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h3_q06',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'गुण स्वर संधि',
    difficulty: 'medium',
    type: 'mcq',
    question: '"नर + इन्द्र = नरेन्द्र" में अ + इ के मेल से "ए" बन रहा है। यह स्वर संधि का कौन-सा भेद है?',
    visualEmoji: '👑 📜',
    payload: {
      options: [
        { id: 'opt_1', text: 'गुण संधि', isCorrect: true },
        { id: 'opt_2', text: 'दीर्घ संधि', isCorrect: false },
        { id: 'opt_3', text: 'वृद्धि संधि', isCorrect: false },
        { id: 'opt_4', text: 'यण संधि', isCorrect: false },
      ],
    },
    explanation: 'जब अ/आ के बाद इ/ई आए तो दोनों मिलकर "ए", उ/ऊ आए तो "ओ" और ऋ आए तो "अर्" बनते हैं। यह गुण संधि है।',
    points: 15,
  },
  {
    id: 'c6_h3_q07',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'वृद्धि स्वर संधि',
    difficulty: 'medium',
    type: 'mcq',
    question: '"सदा + एव" की संधि करने पर क्या शब्द बनेगा?',
    visualEmoji: '➕ ✨',
    payload: {
      options: [
        { id: 'opt_1', text: 'सदैव', isCorrect: true },
        { id: 'opt_2', text: 'सदेव', isCorrect: false },
        { id: 'opt_3', text: 'सदाएव', isCorrect: false },
        { id: 'opt_4', text: 'सदोव', isCorrect: false },
      ],
    },
    explanation: 'आ + ए मिलकर "ऐ" बनता है (सदा + एव = सदैव)। यह वृद्धि संधि का नियम है।',
    points: 15,
  },
  {
    id: 'c6_h3_q08',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'यण स्वर संधि',
    difficulty: 'medium',
    type: 'mcq',
    question: '"यदि + अपि = यद्यपि" तथा "इति + आदि = इत्यादि" में इ/ई का परिवर्तन "य्" में हो रहा है। यह कौन-सी संधि है?',
    visualEmoji: '🔄 💡',
    payload: {
      options: [
        { id: 'opt_1', text: 'यण संधि', isCorrect: true },
        { id: 'opt_2', text: 'दीर्घ संधि', isCorrect: false },
        { id: 'opt_3', text: 'गुण संधि', isCorrect: false },
        { id: 'opt_4', text: 'अयादि संधि', isCorrect: false },
      ],
    },
    explanation: 'जब ह्रस्व या दीर्घ इ, उ, ऋ के बाद कोई भिन्न स्वर आता है, तो इ/ई का य्, उ/ऊ का व् तथा ऋ का र् हो जाता है (यण संधि)।',
    points: 15,
  },
  {
    id: 'c6_h3_q09',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'अयादि स्वर संधि',
    difficulty: 'medium',
    type: 'mcq',
    question: '"ने + अन" के मेल से कौन-सा शब्द बनता है?',
    visualEmoji: '👁️ 🔤',
    payload: {
      options: [
        { id: 'opt_1', text: 'नयन', isCorrect: true },
        { id: 'opt_2', text: 'नेयन', isCorrect: false },
        { id: 'opt_3', text: 'नायन', isCorrect: false },
        { id: 'opt_4', text: 'नेअन', isCorrect: false },
      ],
    },
    explanation: 'ए के बाद कोई अन्य स्वर आने पर ए का "अय्" हो जाता है (ने + अन = नयन)। यह अयादि संधि है।',
    points: 15,
  },
  {
    id: 'c6_h3_q10',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'दीर्घ संधि के उदाहरणों का क्रमबद्ध विश्लेषण',
    difficulty: 'medium',
    type: 'drag_order',
    question: '"रवीन्द्र" शब्द के संधि-विच्छेद के सही घटकों को क्रम में लगाइए:',
    visualEmoji: '🧩 ☀️',
    payload: {
      tokens: ['रवि', '+', 'इन्द्र', '=', 'रवीन्द्र'],
      scrambled: ['इन्द्र', '=', 'रवि', 'रवीन्द्र', '+'],
      correctSequence: ['रवि', '+', 'इन्द्र', '=', 'रवीन्द्र'],
    },
    explanation: 'रवि (इ) + इन्द्र (इ) = रवीन्द्र (ई)। यह ह्रस्व इ और इ के मेल से दीर्घ ई बनने वाली दीर्घ संधि है।',
    points: 15,
  },

  // --------------------------------------------------------------------------
  // TIER 3: HARD (5 Questions | 20 Points Each)
  // --------------------------------------------------------------------------
  {
    id: 'c6_h3_q11',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'यण संधि का सूक्ष्म विच्छेद',
    difficulty: 'hard',
    type: 'mcq',
    question: '"स्वागत" शब्द का शुद्ध संधि-विच्छेद और संधि का नाम क्या है?',
    visualEmoji: '🌸 🙏',
    payload: {
      options: [
        { id: 'opt_1', text: 'सु + आगत — यण संधि', isCorrect: true },
        { id: 'opt_2', text: 'स्वा + गत — दीर्घ संधि', isCorrect: false },
        { id: 'opt_3', text: 'स्व + आगत — गुण संधि', isCorrect: false },
        { id: 'opt_4', text: 'सु + गत — वृद्धि संधि', isCorrect: false },
      ],
    },
    explanation: 'सु (उ) + आगत (आ) में उ का "व्" बनकर आधा "स्" और "वा" बनता है = स्वागत (यण संधि)।',
    points: 20,
  },
  {
    id: 'c6_h3_q12',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'अयादि संधि के औ और ऐ के रूप',
    difficulty: 'hard',
    type: 'mcq',
    question: '"पौ + अक" तथा "गै + अक" शब्दों की संधि से क्रमशः कौन-से शब्द बनेंगे?',
    visualEmoji: '🔥 🎤',
    payload: {
      options: [
        { id: 'opt_1', text: 'पावक और गायक', isCorrect: true },
        { id: 'opt_2', text: 'पवक और गयक', isCorrect: false },
        { id: 'opt_3', text: 'पोअक और गेयक', isCorrect: false },
        { id: 'opt_4', text: 'पाविक और गायिक', isCorrect: false },
      ],
    },
    explanation: 'औ + अ = आव् (पौ + अक = पावक) तथा ऐ + अ = आय् (गै + अक = गायक)। यह अयादि संधि के नियम हैं।',
    points: 20,
  },
  {
    id: 'c6_h3_q13',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'गुण संधि में ऋ का विकार',
    difficulty: 'hard',
    type: 'mcq',
    question: '"महा + ऋषि" के मेल से "महर्षि" शब्द बनता है। इसमें कौन-सा ध्वनि परिवर्तन हुआ है?',
    visualEmoji: '🧘‍♂️ 📖',
    payload: {
      options: [
        { id: 'opt_1', text: 'आ + ऋ मिलकर अर् बन गया', isCorrect: true },
        { id: 'opt_2', text: 'आ + ऋ मिलकर ऋ बन गया', isCorrect: false },
        { id: 'opt_3', text: 'आ + ऋ मिलकर रा बन गया', isCorrect: false },
        { id: 'opt_4', text: 'आ + ऋ का लोप हो गया', isCorrect: false },
      ],
    },
    explanation: 'गुण संधि के नियम के अनुसार, जब अ/आ के बाद ऋ आता है तो दोनों मिलकर "अर्" हो जाते हैं (महा + ऋषि = महर्षि)।',
    points: 20,
  },
  {
    id: 'c6_h3_q14',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'संधि-विच्छेद की अशुद्धि पहचान',
    difficulty: 'hard',
    type: 'mcq',
    question: 'निम्नलिखित में से कौन-सा संधि-विच्छेद अशुद्ध है?',
    visualEmoji: '🔍 ❌',
    payload: {
      options: [
        { id: 'opt_1', text: 'सूर्य + उदय = सूर्योदय — दीर्घ संधि', isCorrect: true },
        { id: 'opt_2', text: 'विद्या + आलय = विद्यालय — दीर्घ संधि', isCorrect: false },
        { id: 'opt_3', text: 'एक + एक = एकैक — वृद्धि संधि', isCorrect: false },
        { id: 'opt_4', text: 'इति + आदि = इत्यादि — यण संधि', isCorrect: false },
      ],
    },
    explanation: 'सूर्य + उदय = सूर्योदय में अ + उ मिलकर "ओ" बन रहा है, अतः यह गुण संधि है, न कि दीर्घ संधि। इसलिए यह विकल्प अशुद्ध है।',
    points: 20,
  },
  {
    id: 'c6_h3_q15',
    grade: 6,
    subject: 'hindi',
    chapter: 'संधि परिचय (स्वर संधि के भेद)',
    concept: 'स्वर संधि के पाँचों भेदों का क्रम',
    difficulty: 'hard',
    type: 'drag_order',
    question: 'स्वर संधि के पाँचों प्रमुख भेदों को मानक व्याकरणिक क्रम में लगाइए:',
    visualEmoji: '📑 🏛️',
    payload: {
      tokens: ['दीर्घ संधि', 'गुण संधि', 'वृद्धि संधि', 'यण संधि', 'अयादि संधि'],
      scrambled: ['यण संधि', 'दीर्घ संधि', 'अयादि संधि', 'वृद्धि संधि', 'गुण संधि'],
      correctSequence: ['दीर्घ संधि', 'गुण संधि', 'वृद्धि संधि', 'यण संधि', 'अयादि संधि'],
    },
    explanation: 'स्वर संधि के पाँच मानक भेद हैं: 1. दीर्घ संधि, 2. गुण संधि, 3. वृद्धि संधि, 4. यण संधि, 5. अयादि संधि।',
    points: 20,
  },
];
