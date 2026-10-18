import { AppLanguage, Subject, UserProfile, Question } from '../types/index';

/**
 * Returns the active UI language from user profile, defaulting to 'en'
 */
export const getActiveLanguage = (profile?: Partial<UserProfile> | null): AppLanguage => {
  return profile?.preferredLanguage === 'hi' ? 'hi' : 'en';
};

/**
 * Resolves the language for a specific subject:
 * - Hindi subject is ALWAYS Hindi ('hi')
 * - English subject is ALWAYS English ('en')
 * - Mathematics follows the user's preferred language ('en' or 'hi')
 */
export const getSubjectLanguage = (subject: Subject, preferredLanguage: AppLanguage = 'en'): AppLanguage => {
  if (subject === 'hindi') return 'hi';
  if (subject === 'english') return 'en';
  return preferredLanguage;
};

/**
 * Cleans mixed English/Hindi strings when the target language is English.
 * Removes parenthetical Hindi (e.g. '(पौना भाग)', '(समकोण)', '(अंदर और बाहर)'),
 * slash Devanagari (e.g. 'LCM / ल.स.'), and guarantees ZERO Devanagari characters
 * remain in the text while keeping English content pristine.
 */
export const cleanBilingualForEnglish = (text?: string): string => {
  if (!text || typeof text !== 'string') return text || '';
  if (!/[\u0900-\u097F]/.test(text)) return text;

  let res = text;

  // 1. Top-level slash split: 'English sentence / हिन्दी वाक्य'
  if (res.includes(' / ')) {
    const parts = res.split(' / ');
    if (/[a-zA-Z]/.test(parts[0]) && /[\u0900-\u097F]/.test(parts[1]) && !parts[0].includes('(')) {
      res = parts[0].trim();
    }
  }

  // 2. Parentheses with both English and Hindi: e.g. (denominator / हर) or (LCM / ल.स.) or (Repel / प्रतिकर्षण)
  res = res.replace(/\s*\(\s*([a-zA-Z0-9\s\-_]+)\s*[\/|\\]\s*[\u0900-\u097F\s\.\-_]+\)/g, (_, eng) => ` (${eng.trim()})`);

  // 3. Parentheses containing any remaining Devanagari: e.g. (बड़ा और छोटा), (ऋण / कर्ज), (वृत्त / गोल), (समकोण)
  res = res.replace(/\s*\([^)]*[\u0900-\u097F]+[^)]*\)/g, '');

  // 4. Standalone slash followed by Devanagari: e.g. 'LCM / ल.स.' or 'factor / अपवर्तक'
  res = res.replace(/\s*[\/|\\]\s*[\u0900-\u097F\s\.\,\-]+(?=[\s\.\,\?!]|$)/g, '');

  // 5. Any leftover Devanagari characters
  res = res.replace(/[\u0900-\u097F]+/g, '');

  // 6. Clean empty parentheses if any were left: '()' -> ''
  res = res.replace(/\s*\(\s*\)/g, '');

  // 7. Clean whitespace and punctuation spacing
  res = res.replace(/\s{2,}/g, ' ')
           .replace(/\s+([.,?!:;])/g, '$1')
           .trim();

  return res;
};

/**
 * Cleans mixed English/Hindi strings when the target language is Hindi.
 * Extracts the Hindi translation if provided in slash or parenthetical format.
 */
export const cleanBilingualForHindi = (text?: string): string => {
  if (!text || typeof text !== 'string') return text || '';
  if (!/[\u0900-\u097F]/.test(text)) return text;

  let res = text;

  // 1. Top-level slash split: 'English / हिन्दी'
  if (res.includes(' / ')) {
    const parts = res.split(' / ');
    if (/[\u0900-\u097F]/.test(parts[1])) {
      res = parts[1].trim();
    }
  }

  // 2. Parentheses like 'Big vs Small (बड़ा और छोटा)' -> extract 'बड़ा और छोटा'
  const parentheticalHindiMatch = res.match(/^[a-zA-Z0-9\s:,\-\?]+\(([\u0900-\u097F\s\/\-,\.।]+)\)[!\?]?$/);
  if (parentheticalHindiMatch && parentheticalHindiMatch[1]) {
    res = parentheticalHindiMatch[1].trim();
  }

  return res.trim();
};

/**
 * Adapts a question object according to user's language choice.
 * If user chose Hindi ('hi') and question has questionHindi, it uses Hindi.
 * If question has dual language format in a single string (e.g. "English text / हिन्दी अनुवाद"),
 * it extracts only the preferred language part to prevent visual clutter!
 * In English mode, eliminates all Devanagari characters from questions, concepts, chapters,
 * explanations, and options.
 */
export const getAdaptedQuestion = (q: Question, lang: AppLanguage): Question => {
  // If subject is hindi, keep it pure Hindi
  if (q.subject === 'hindi') {
    return q;
  }

  // HINDI MODE
  if (lang === 'hi') {
    if (q.questionHindi) {
      return {
        ...q,
        question: q.questionHindi,
        concept: q.concept ? cleanBilingualForHindi(q.concept) : q.concept,
        chapter: q.chapter ? cleanBilingualForHindi(q.chapter) : q.chapter,
        payload: q.payloadHindi || q.payload,
        explanation: q.explanationHindi || q.explanation,
      };
    }
    const cleanedPayload = { ...q.payload };
    if (cleanedPayload.options) {
      cleanedPayload.options = cleanedPayload.options.map(opt => ({
        ...opt,
        text: cleanBilingualForHindi(opt.text),
      }));
    }
    if (cleanedPayload.pairs) {
      cleanedPayload.pairs = cleanedPayload.pairs.map(pair => ({
        ...pair,
        left: cleanBilingualForHindi(pair.left),
        right: cleanBilingualForHindi(pair.right),
      }));
    }
    return {
      ...q,
      question: cleanBilingualForHindi(q.question),
      concept: q.concept ? cleanBilingualForHindi(q.concept) : q.concept,
      chapter: q.chapter ? cleanBilingualForHindi(q.chapter) : q.chapter,
      explanation: cleanBilingualForHindi(q.explanation),
      payload: cleanedPayload,
    };
  }

  // ENGLISH MODE ('en')
  // Ensure ZERO Devanagari characters leak into question, concept, chapter, explanation, or options
  const cleanedPayload = { ...q.payload };
  if (cleanedPayload.options) {
    cleanedPayload.options = cleanedPayload.options.map(opt => ({
      ...opt,
      text: cleanBilingualForEnglish(opt.text),
    }));
  }
  if (cleanedPayload.pairs) {
    cleanedPayload.pairs = cleanedPayload.pairs.map(pair => ({
      ...pair,
      left: cleanBilingualForEnglish(pair.left),
      right: cleanBilingualForEnglish(pair.right),
    }));
  }
  if (cleanedPayload.wordBank) {
    cleanedPayload.wordBank = cleanedPayload.wordBank.map(w => cleanBilingualForEnglish(w));
  }
  if (cleanedPayload.displayTemplate) {
    cleanedPayload.displayTemplate = cleanBilingualForEnglish(cleanedPayload.displayTemplate);
  }
  if (cleanedPayload.correctAnswer) {
    cleanedPayload.correctAnswer = cleanBilingualForEnglish(cleanedPayload.correctAnswer);
  }
  if (cleanedPayload.tokens) {
    cleanedPayload.tokens = cleanedPayload.tokens.map(t => cleanBilingualForEnglish(t));
  }
  if (cleanedPayload.scrambled) {
    cleanedPayload.scrambled = cleanedPayload.scrambled.map(s => cleanBilingualForEnglish(s));
  }
  if (cleanedPayload.correctSequence) {
    cleanedPayload.correctSequence = cleanedPayload.correctSequence.map(cs => cleanBilingualForEnglish(cs));
  }

  return {
    ...q,
    question: cleanBilingualForEnglish(q.question),
    concept: q.concept ? cleanBilingualForEnglish(q.concept) : q.concept,
    chapter: q.chapter ? cleanBilingualForEnglish(q.chapter) : q.chapter,
    explanation: cleanBilingualForEnglish(q.explanation),
    payload: cleanedPayload,
  };
};

/**
 * UI Localization Strings Dictionary
 * Kept clean, concise, uncluttered & joyful.
 */
export const STRINGS = {
  en: {
    // Top Bar & Header
    greeting: 'Hi',
    ncertTag: 'CBSE & NCERT',
    streak: 'Streak',
    shields: 'Shields',
    stars: 'Stars',
    xp: 'XP',
    trophies: 'Trophies',

    // Category Tabs
    catAll: 'All',
    catSubjects: 'Subjects',
    catLabs: 'STEM Labs',
    catArcade: 'Fun Arcade',
    catSubjectsCount: '3',
    catLabsCount: '15+',

    // Special Launch Offer
    specialLaunchOffer: 'Special Launch Offer',
    launchOfferBadge: 'LIMITED PERIOD OFFER 🚀',
    launchOfferTitle: 'Flat 50% OFF on Annual VIP Pass',
    launchOfferSub: 'Unlock unlimited daily quizzes, all 15+ STEM Concept Labs, and 100% ad-free experience!',
    launchOfferCodeLabel: 'Promo Code Applied',
    launchOfferClaimBtn: 'Claim Special Launch Offer',

    // Hero Mission
    heroDailyMission: '🎯 DAILY MISSION',
    heroMissionDone: '🌟 MISSION COMPLETED',
    heroGoalPending: '10 Min Goal ⏱️',
    heroGoalDone: '100% Done ✅',
    heroTitlePending: 'Daily 10-Min Quest 🚀',
    heroTitleDone: 'Super Champ! 🎉',
    heroSubPending: 'Solve 10 questions daily to earn stars and master concepts!',
    heroSubDone: 'You completed today’s practice! Continue learning below.',
    missionDoneCompact: 'Today’s Mission Done!',
    missionDoneStreakActive: 'Streak Kept Alive 🔥',
    missionDonePopupTitle: 'Mission Completed! 🏆',
    missionDonePopupSub: 'You solved today’s 10 practice questions! Stars and streak have been saved.',
    awesomeBtn: 'Awesome! 🚀',

    // Lucky Spin
    spinTitle: 'Daily Lucky Spin',
    spinSub: 'Spin daily to win Stars, Shields & Trophies!',
    spinBtn: 'SPIN ›',
    spinFreeReady: '🎁 FREE SPIN READY',
    spinExtra: '⭐ EXTRA SPIN',

    // Daily Brain Gym
    gymBadgePending: '🔥 DAILY BRAIN GYM',
    gymBadgeDone: '✅ TODAY’S WORKOUT DONE',
    gymTitle: 'Super Kid Daily Workout',
    gymSub: '1 Logic Puzzle + 1 STEM Lab Mission + 60s Speed Sprint',
    gymBtnStart: 'Start 3-Step Workout 🚀 (+50 ⭐)',
    gymBtnReview: 'Review Today’s Workout 🌟',
    brainMatrixBtn: 'Brain Matrix 📊',

    // Weak Topic Booster
    weakTopicBadge: '🎯 TARGETED BOOSTER',
    weakTopicMastery: 'Mastery',
    weakTopicHint: '3-minute practice to turn this into 100%! 🚀',
    weakTopicFixBtn: 'Fix ▶',

    // Subject Section
    selectSubject: 'Select Subject',
    subjectSub: '100% CBSE & NCERT Standard',
    resumeBadge: 'Resume ▶',
    chapterPrefix: 'Ch',
    practiceQuestionsSuffix: 'Practice Questions',

    // Shortcuts
    shortcutRoadmap: '365 Plan',
    shortcutVault: 'All Chapters',
    shortcutLabs: 'STEM Labs',
    shortcutParent: 'Parent Zone',

    // Champ Arcade
    arcadeTitle: '🎮 Champ Arcade',
    arcadeSub: 'High-energy educational mini games',
    playNowBtn: 'Play Now ▶',
    balloonPopTitle: 'Balloon Pop Blitz',
    balloonPopDesc: 'Pop the right balloons fast! Beat the clock & score combos 🔥',
    mindMatchTitle: 'Mind Match 3D',
    mindMatchDesc: 'Flip & match memory pairs! Earn 3-star rating & big XP.',

    // STEM Labs Gateway
    labGatewayBadge: '🔬 STEM LABS',
    labGatewayLabsCount: '15+ Labs',
    labGatewayTitle: '🔬 Practical Concept Labs',
    labGatewayPunchline: 'Become a Super Kid! ⚡ Hands-On STEM',
    labGatewayDesc: 'No rote learning! Learn through scales, clock, pizza fractions, magnets & prisms.',
    labGatewayEnterBtn: 'Enter Labs 🚀',
    labGatewayRushBtn: '⚡ 60s Rush',

    // Olympiad
    olympiadBadge: 'WEEKLY BENCHMARK',
    olympiadTitle: 'Weekly STEM Olympiad',
    olympiadSub: 'Advanced HOTS Thinking Questions • Parent Report',
    olympiadTestBtn: 'TEST ›',

    // Profile & Settings Modal
    settingsTitle: 'Settings & Profile',
    languageSectionTitle: 'Language / माध्यम (Medium):',
    languageEnBtn: '🇬🇧 English',
    languageHiBtn: '🇮🇳 हिंदी',
    avatarSectionTitle: 'Change Avatar Mascot:',
    menuChangeClass: 'Change Class',
    menuParentGateSub: 'Parent Gate protected',
    menuRoadmap: '365-Day Annual Roadmap',
    menuRoadmapSub: 'View all 52 weeks',
    menuVault: 'NCERT Chapter Vault',
    menuVaultSub: 'Browse all lessons',
    menuParentZone: 'Parent Zone & Settings',
    menuParentZoneSub: 'Audio, report & reset',
    doneBtn: 'Done',
  },

  hi: {
    // Top Bar & Header
    greeting: 'नमस्ते',
    ncertTag: 'सीबीएसई व एनसीईआरटी',
    streak: 'लगातार',
    shields: 'शील्ड',
    stars: 'सितारे',
    xp: 'एक्सपी',
    trophies: 'ट्रॉफ़ी',

    // Category Tabs
    catAll: 'सभी',
    catSubjects: 'विषय',
    catLabs: 'एसटीईएम लैब',
    catArcade: 'गेम्स व खेल',
    catSubjectsCount: '3',
    catLabsCount: '15+',

    // Special Launch Offer
    specialLaunchOffer: 'स्पेशल लॉन्च ऑफर',
    launchOfferBadge: 'सीमित समय ऑफर 🚀',
    launchOfferTitle: 'वार्षिक वीआईपी पास पर सीधा 50% छूट',
    launchOfferSub: 'असीमित दैनिक क्विज़, सभी 15+ प्रैक्टिकल लैब्स और 100% विज्ञापन-मुक्त अनुभव!',
    launchOfferCodeLabel: 'कूपन कोड लागू',
    launchOfferClaimBtn: 'स्पेशल लॉन्च ऑफर लें',

    // Hero Mission
    heroDailyMission: '🎯 दैनिक मिशन',
    heroMissionDone: '🌟 मिशन पूरा हुआ',
    heroGoalPending: '10 मिनट लक्ष्य ⏱️',
    heroGoalDone: '100% पूरा ✅',
    heroTitlePending: 'दैनिक 10-मिनट खोज 🚀',
    heroTitleDone: 'शाबाश, सुपर स्टार! 🎉',
    heroSubPending: 'रोज़ाना 10 सवाल हल करके नए सितारे जीतें और पूरे सिलेबस में निपुण बनें!',
    heroSubDone: 'आपने आज का 10-मिनट लक्ष्य पूरा कर लिया! नीचे किसी भी विषय का अभ्यास जारी रखें।',
    missionDoneCompact: 'आज का मिशन पूरा हुआ!',
    missionDoneStreakActive: 'स्ट्रीक सुरक्षित 🔥',
    missionDonePopupTitle: 'मिशन पूरा हुआ! 🏆',
    missionDonePopupSub: 'आपने आज के 10 अभ्यास प्रश्न पूरे कर लिए हैं! सितारे और स्ट्रीक सुरक्षित हो गए हैं।',
    awesomeBtn: 'बहुत बढ़िया! 🚀',

    // Lucky Spin
    spinTitle: 'दैनिक लकी स्पिन',
    spinSub: 'रोज़ाना पहिया घुमाएं और सितारे, शील्ड व ट्रॉफ़ी जीतें!',
    spinBtn: 'घुमाएं ›',
    spinFreeReady: '🎁 मुफ़्त स्पिन तैयार',
    spinExtra: '⭐ अतिरिक्त स्पिन',

    // Daily Brain Gym
    gymBadgePending: '🔥 दैनिक ब्रेन जिम',
    gymBadgeDone: '✅ आज की कसरत पूरी',
    gymTitle: 'सुपर किड दैनिक कसरत',
    gymSub: '1 तार्किक पहेली + 1 प्रैक्टिकल लैब मिशन + 60s स्पीड स्प्रिंट',
    gymBtnStart: '3-चरणीय कसरत शुरू करें 🚀 (+50 ⭐)',
    gymBtnReview: 'आज की कसरत देखें 🌟',
    brainMatrixBtn: 'ब्रेन मैट्रिक्स 📊',

    // Weak Topic Booster
    weakTopicBadge: '🎯 कमज़ोर टॉपिक सुधार',
    weakTopicMastery: 'दक्षता',
    weakTopicHint: '3-मिनट के विशेष अभ्यास से 100% निपुण बनें! 🚀',
    weakTopicFixBtn: 'सुधारें ▶',

    // Subject Section
    selectSubject: 'विषय चुनें',
    subjectSub: '100% सीबीएसई व एनसीईआरटी मानक',
    resumeBadge: 'जारी रखें ▶',
    chapterPrefix: 'पाठ',
    practiceQuestionsSuffix: 'अभ्यास प्रश्न',

    // Shortcuts
    shortcutRoadmap: '365 योजना',
    shortcutVault: 'सभी अध्याय',
    shortcutLabs: 'प्रैक्टिकल लैब',
    shortcutParent: 'अभिभावक ज़ोन',

    // Champ Arcade
    arcadeTitle: '🎮 चैंप आर्केड',
    arcadeSub: 'रोमांचक शैक्षणिक खेल',
    playNowBtn: 'खेलें ▶',
    balloonPopTitle: 'बैलून पॉप ब्लिट्ज़',
    balloonPopDesc: 'सही गुब्बारे तेजी से फोड़ें! घड़ी को मात दें और कॉम्बो बनाएं 🔥',
    mindMatchTitle: 'माइंड मैच 3D',
    mindMatchDesc: 'जोड़ियों को याद रखकर मिलाएं! 3-स्टार रेटिंग और बड़ा XP पाएं।',

    // STEM Labs Gateway
    labGatewayBadge: '🔬 स्टेम लैब्स',
    labGatewayLabsCount: '15+ लैब्स',
    labGatewayTitle: '🔬 प्रैक्टिकल कॉन्सेप्ट लैब्स',
    labGatewayPunchline: 'सुपर किड बनें! ⚡ खेल-खेल में सीखें',
    labGatewayDesc: 'फॉर्मूले रटना छोड़ें • तराजू, घड़ी, पिज़्ज़ा, चुंबक और प्रिज्म से सीधे सीखें!',
    labGatewayEnterBtn: 'लैब्स में जाएं 🚀',
    labGatewayRushBtn: '⚡ 60s रश',

    // Olympiad
    olympiadBadge: 'साप्ताहिक टेस्ट',
    olympiadTitle: 'साप्ताहिक एसटीईएम ओलंपियाड',
    olympiadSub: 'उच्च स्तरीय चिंतन प्रश्न • बच्चों की प्रगति रिपोर्ट',
    olympiadTestBtn: 'टेस्ट दें ›',

    // Profile & Settings Modal
    settingsTitle: 'प्रोफ़ाइल व सेटिंग्स',
    languageSectionTitle: 'Language / माध्यम (Medium):',
    languageEnBtn: '🇬🇧 English',
    languageHiBtn: '🇮🇳 हिंदी',
    avatarSectionTitle: 'अवतार मैस्कॉट बदलें:',
    menuChangeClass: 'कक्षा बदलें',
    menuParentGateSub: 'अभिभावक सुरक्षा कोड सुरक्षित',
    menuRoadmap: '365-दिवसीय वार्षिक योजना',
    menuRoadmapSub: 'पूरे 52 सप्ताह देखें',
    menuVault: 'एनसीईआरटी अध्याय सूची',
    menuVaultSub: 'सभी पाठ देखें',
    menuParentZone: 'अभिभावक ज़ोन व सेटिंग्स',
    menuParentZoneSub: 'ऑडियो, रिपोर्ट व रीसेट',
    doneBtn: 'संपन्न',
  },
};
