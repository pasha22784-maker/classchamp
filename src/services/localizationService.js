/**
 * localizationService.js
 * Multi-Language Engine for BrainLeague.
 * Supports:
 * 1. 'en' - English
 * 2. 'hi' - Hindi (Devanagari)
 * 3. 'bilingual' - Bilingual (Hindi / Hinglish with English terms)
 * 
 * Strict Trademark Compliance: ZERO mentions of third-party broadcast names.
 */

export const LANGUAGES = [
  { id: 'en', label: 'English', icon: '🇬🇧', short: 'EN' },
  { id: 'hi', label: 'हिंदी', icon: '🇮🇳', short: 'HI' },
  { id: 'bilingual', label: 'Bilingual (हिंग्लिश)', icon: '🌐', short: 'BIL' }
];

const TRANSLATIONS = {
  en: {
    // Top Bar & Navigation
    brand: "BrainLeague",
    tagline: "Champions Hot Seat Arena",
    landscape: "Landscape",
    portrait: "Portrait",
    chooseLanguage: "Language",

    // FFF Lobby
    lobbyTitle: "Fastest Finger First Matchmaking",
    lobbySubtitle: "Joining 10 Contenders in the Arena",
    selectLangPrompt: "Select Questions & Options Language:",
    langChangedNotice: "Questions & Options will appear in English.",
    gameBeginsIn: "Game Begins In",
    getReady: "Get Ready!",
    lobbyWaiting: "Waiting for contenders to enter arena...",

    // Fastest Finger First (FFF)
    fffTitle: "Fastest Finger First",
    fffSubtitle: "Arrange all 4 options in exact chronological / numerical sequence",
    lockMyOrder: "Lock My Order",
    reset: "Reset",
    submittedNotice: "Order Locked",
    correctOrderTitle: "CORRECT ORDER REVEALED:",
    orderSeqHelper: "1st ➔ 2nd ➔ 3rd ➔ 4th",
    yourOrder: "Your Selection:",
    correctSeqNotice: "✓ Correct Sequence",
    wrongSeqNotice: "✗ Incorrect Sequence",
    rankContender: "Rank & Contender",
    accuracy: "Accuracy",
    shortestTime: "Shortest Time",
    sahiBadge: "Correct",
    galatBadge: "Wrong",
    verifiedFastestHeadline: "Verified: You Achieved the Shortest Time ({time})!",
    verifiedFastestSubtext: "You are #1 among all 10 contenders! Hot Seat selection announcement in {seconds}s...",
    viewSelectionNow: "View Selection Now",
    botWonNotice: "{name} achieved the shortest time ({time})",
    movingToSpectatorNotice: "Entering Live Studio Audience Play Along mode in {seconds}s...",
    enterSpectatorNow: "Enter Spectator Now",

    // Hot Seat Winner Modal
    winnerBadge: "HOT SEAT FINALIST • WINNER",
    winnerHeadline: "🎉 Congratulations! You have been selected for the Hot Seat!",
    winnerSubtext: "You locked the fastest accurate sequence among all contenders. Now take on 15 questions to win 1 Crore Virtual Points!",
    safePadavsChip: "Q5 & Q10: Safe Milestones",
    lifelinesChip: "4 Lifelines Ready",
    hotSeatBeginsIn: "Hot Seat Game Begins In",
    hotSeatHint: "Stay focused and read every question and option carefully!",
    enterHotSeatNow: "Enter Hot Seat Now",

    // Hot Seat Screen
    hotSeatArena: "Hot Seat Arena",
    playingForPts: "Playing for {points} Points",
    questionLabel: "QUESTION",
    safeMilestoneBanner: "SAFE MILESTONE REACHED",
    guaranteedPts: "Virtual Points Guaranteed",
    guruHintTitle: "AI Guru Lifeline Advice:",
    pollResultsTitle: "Live Audience & Spectator Poll Results",
    totalVotes: "100% Total Votes",
    walkAwayBtn: "Walk Away & Take Points",
    guaranteedSafe: "Guaranteed Safe:",
    ladderTitle: "15-Tier Point Ladder",
    padavLegend: "Padav 1: Q5 (10K) • Padav 2: Q10 (3.2L) • Q15 (1 Crore)",
    backToQuestion: "Back to Question",
    close: "Close",
    lockedStatus: "Locked",

    // Spectator Screen / Play Along
    liveAudienceBadge: "LIVE AUDIENCE PLAY ALONG",
    spectatorScore: "Score:",
    contenderPlaying: "Playing Level {level}/15 ({points} Pts)",
    considering: "Considering...",
    lockedOptionX: "Locked Option {option}",
    answerChecked: "Answer Checked",
    playAlongTitle: "Play Along: Pick Your Answer",
    pointsBonus: "+50 Pts on Correct",
    playerPick: "Player Pick",
    yourGuess: "Your Guess",
    bothPicked: "Both Picked",
    bingoCorrect: "BINGO! You predicted correctly! +50 Pts & +5 Gems credited!",
    wrongGuess: "Wrong guess this round. Watch out for the next question!",
    audiencePollTriggered: "Audience Poll Lifeline Triggered!",
    voteNowNotice: "Hot Seat player {name} is asking the audience! Vote now to earn +10 Bonus Gems!",
    voteRecorded: "✓ Vote recorded! +10 Bonus Gems added to your balance!",
    sendReaction: "Send Reaction:",

    // Play Along Welcome Modal
    playAlongModalBadge: "LIVE AUDIENCE PLAY ALONG",
    playAlongModalTitle: "Welcome to Play Along Arena!",
    playAlongModalSubtext: "You were not selected for the Hot Seat this round, but the excitement is just beginning! Predict answers live from the audience seat to win ranking points and gems!",
    gemsPerCorrect: "+5 Gems per correct",
    ptsPerCorrect: "+50 Points for Rank",
    firstQArrivesIn: "First Question Arrives In",
    playAlongReadyNote: "Stay alert! Options will unlock as soon as the question appears."
  },

  hi: {
    // Top Bar & Navigation
    brand: "BrainLeague",
    tagline: "Champions Hot Seat Arena",
    landscape: "📺 Landscape",
    portrait: "📱 Portrait",
    chooseLanguage: "Language",

    // FFF Lobby
    lobbyTitle: "Fastest Finger First Matchmaking",
    lobbySubtitle: "Joining 10 Contenders in the Arena",
    selectLangPrompt: "Select Match Language (प्रश्न व विकल्प किस भाषा में चाहिए):",
    langChangedNotice: "Questions aur Options ab Hindi (हिंदी) me aayenge.",
    gameBeginsIn: "Game Begins In",
    getReady: "Ready Ho Jayein!",
    lobbyWaiting: "Waiting for contenders to enter arena...",

    // Fastest Finger First (FFF)
    fffTitle: "Fastest Finger First",
    fffSubtitle: "Arrange all 4 options in exact chronological / numerical sequence",
    lockMyOrder: "Lock My Order",
    reset: "Reset",
    submittedNotice: "Order Locked",
    correctOrderTitle: "SAHI KRAM (CORRECT ORDER REVEALED):",
    orderSeqHelper: "1st ➔ 2nd ➔ 3rd ➔ 4th",
    yourOrder: "Aapka Order:",
    correctSeqNotice: "✓ Sahi Sequence",
    wrongSeqNotice: "✗ Galat Sequence",
    rankContender: "Rank & Contender",
    accuracy: "Accuracy",
    shortestTime: "Shortest Time",
    sahiBadge: "✓ Sahi",
    galatBadge: "✗ Galat",
    verifiedFastestHeadline: "Verified: Aapne Sabse Kam Samay ({time}) Me Sahi Uttar Diya!",
    verifiedFastestSubtext: "Aap sabhi 10 contenders me #1 par hain! Hot Seat selection announcement in {seconds}s...",
    viewSelectionNow: "View Selection Now",
    botWonNotice: "{name} achieved shortest time ({time})",
    movingToSpectatorNotice: "Moving to Live Studio Audience Play Along in {seconds}s...",
    enterSpectatorNow: "Enter Spectator Now",

    // Hot Seat Winner Modal
    winnerBadge: "HOT SEAT FINALIST • WINNER",
    winnerHeadline: "🎉 Badhaai Ho! Aap Hot Seat Ke Liye Select Ho Chuke Hain!",
    winnerSubtext: "Aapne sabhi contenders me sabse tezi se sahi jawab diya hai! Ab samay hai 15 Sawalon ka samna karke ₹1 Crore Virtual Points jeetne ka!",
    safePadavsChip: "Q5 & Q10: Safe Padav",
    lifelinesChip: "4 Lifelines Ready",
    hotSeatBeginsIn: "Hot Seat Game Begins In",
    hotSeatHint: "Apna dhyan kendrit karein aur har sawal dhyan se padhein!",
    enterHotSeatNow: "Enter Hot Seat Now",

    // Hot Seat Screen
    hotSeatArena: "Hot Seat Arena",
    playingForPts: "Playing for {points} Points",
    questionLabel: "QUESTION",
    safeMilestoneBanner: "SAFE PADAV MILESTONE",
    guaranteedPts: "Virtual Points Guaranteed",
    guruHintTitle: "AI Guru Lifeline Advice:",
    pollResultsTitle: "Live Audience & Spectator Poll Results",
    totalVotes: "100% Total Votes",
    walkAwayBtn: "Walk Away & Take Points",
    guaranteedSafe: "Guaranteed Safe:",
    ladderTitle: "15-Tier Point Ladder",
    padavLegend: "Padav 1: Q5 (10K) • Padav 2: Q10 (3.2L) • Q15 (1 Crore)",
    backToQuestion: "Back to Question",
    close: "Close",
    lockedStatus: "Locked",

    // Spectator Screen / Play Along
    liveAudienceBadge: "LIVE AUDIENCE PLAY ALONG",
    spectatorScore: "Score:",
    contenderPlaying: "Playing Level {level}/15 ({points} Pts)",
    considering: "Considering...",
    lockedOptionX: "Locked Option {option}",
    answerChecked: "Answer Checked",
    playAlongTitle: "Play Along: Pick Your Answer",
    pointsBonus: "+50 Pts on Correct",
    playerPick: "Player Pick",
    yourGuess: "Your Guess",
    bothPicked: "Both Picked",
    bingoCorrect: "BINGO! You predicted correctly! +50 Pts & +5 Gems credited!",
    wrongGuess: "Wrong guess this round. Watch out for the next question!",
    audiencePollTriggered: "Audience Poll Lifeline Triggered!",
    voteNowNotice: "Hot Seat player {name} is asking the audience! Vote now to earn +10 Bonus Gems!",
    voteRecorded: "✓ Vote recorded! +10 Bonus Gems added to your balance!",
    sendReaction: "Send Reaction:",

    // Play Along Welcome Modal
    playAlongModalBadge: "LIVE AUDIENCE PLAY ALONG",
    playAlongModalTitle: "Aap Hain Play Along Arena Me!",
    playAlongModalSubtext: "Fastest Finger First me aap select nahi huye, lekin game abhi baaki hai! Audience seat se har sawaal ka live jawab dein aur dhero prizes jeetein!",
    gemsPerCorrect: "+5 Gems per correct",
    ptsPerCorrect: "+50 Points for Rank",
    firstQArrivesIn: "First Question Arrives In",
    playAlongReadyNote: "Players ready ho jayein! Answer options lock karne ke liye tayaar rahein."
  },

  bilingual: {
    // Top Bar & Navigation
    brand: "BrainLeague",
    tagline: "Champions Hot Seat Arena",
    landscape: "📺 Landscape",
    portrait: "📱 Portrait",
    chooseLanguage: "Language / भाषा",

    // FFF Lobby
    lobbyTitle: "Fastest Finger First Matchmaking",
    lobbySubtitle: "Arena Me 10 Contenders Jud Rahe Hain",
    selectLangPrompt: "Select Questions & Options Language:",
    langChangedNotice: "Questions & Options dono bhashaon me (हिंदी + English) dikhenge.",
    gameBeginsIn: "Game Begins In",
    getReady: "Ready Ho Jayein!",
    lobbyWaiting: "Contenders ke judne ka intezar...",

    // Fastest Finger First (FFF)
    fffTitle: "Fastest Finger First",
    fffSubtitle: "Sabhi 4 options ko 1st se 4th sahi kram me arrange karein",
    lockMyOrder: "Lock My Order",
    reset: "Reset",
    submittedNotice: "Order Locked",
    correctOrderTitle: "SAHI KRAM (CORRECT ORDER REVEALED):",
    orderSeqHelper: "1st ➔ 2nd ➔ 3rd ➔ 4th",
    yourOrder: "Aapka Order:",
    correctSeqNotice: "✓ Sahi Sequence",
    wrongSeqNotice: "✗ Galat Sequence",
    rankContender: "Rank & Contender",
    accuracy: "Accuracy (सटीकता)",
    shortestTime: "Shortest Time (कम समय)",
    sahiBadge: "Sahi",
    galatBadge: "Galat",
    verifiedFastestHeadline: "Verified: Aapne Sabse Kam Samay ({time}) Me Sahi Uttar Diya!",
    verifiedFastestSubtext: "Aap sabhi 10 contenders me #1 par hain! Hot Seat selection announcement in {seconds}s...",
    viewSelectionNow: "View Selection Now",
    botWonNotice: "{name} achieved shortest time ({time})",
    movingToSpectatorNotice: "Moving to Live Studio Audience Play Along in {seconds}s...",
    enterSpectatorNow: "Enter Spectator Now",

    // Hot Seat Winner Modal
    winnerBadge: "HOT SEAT FINALIST • WINNER",
    winnerHeadline: "🎉 Badhaai Ho! Aap Hot Seat Ke Liye Select Ho Chuke Hain!",
    winnerSubtext: "Aapne sabhi contenders me sabse tezi se sahi jawab diya hai! Ab samay hai 15 Sawalon ka samna karke ₹1 Crore Virtual Points jeetne ka!",
    safePadavsChip: "Q5 & Q10: Safe Padav",
    lifelinesChip: "4 Lifelines Ready",
    hotSeatBeginsIn: "Hot Seat Game Shuru Ho Rahi Hai In",
    hotSeatHint: "Apna dhyan kendrit karein aur har sawal dhyan se padhein!",
    enterHotSeatNow: "Enter Hot Seat Now",

    // Hot Seat Screen
    hotSeatArena: "Hot Seat Arena",
    playingForPts: "Playing for {points} Points",
    questionLabel: "QUESTION",
    safeMilestoneBanner: "SAFE PADAV MILESTONE",
    guaranteedPts: "Virtual Points Guaranteed",
    guruHintTitle: "AI Guru Lifeline Advice:",
    pollResultsTitle: "Live Audience & Spectator Poll Results",
    totalVotes: "100% Total Votes",
    walkAwayBtn: "Walk Away & Take Points",
    guaranteedSafe: "Guaranteed Safe:",
    ladderTitle: "15-Tier Point Ladder",
    padavLegend: "Padav 1: Q5 (10K) • Padav 2: Q10 (3.2L) • Q15 (1 Crore)",
    backToQuestion: "Back to Question",
    close: "Close",
    lockedStatus: "Locked",

    // Spectator Screen / Play Along
    liveAudienceBadge: "LIVE AUDIENCE PLAY ALONG",
    spectatorScore: "Score:",
    contenderPlaying: "Playing Level {level}/15 ({points} Pts)",
    considering: "Considering...",
    lockedOptionX: "Locked Option {option}",
    answerChecked: "Answer Checked",
    playAlongTitle: "Play Along: Pick Your Answer",
    pointsBonus: "+50 Pts on Correct",
    playerPick: "Player Pick",
    yourGuess: "Your Guess",
    bothPicked: "Both Picked",
    bingoCorrect: "BINGO! You predicted correctly! +50 Pts & +5 Gems credited!",
    wrongGuess: "Wrong guess this round. Watch out for the next question!",
    audiencePollTriggered: "Audience Poll Lifeline Triggered!",
    voteNowNotice: "Hot Seat player {name} is asking the audience! Vote now to earn +10 Bonus Gems!",
    voteRecorded: "✓ Vote recorded! +10 Bonus Gems added to your balance!",
    sendReaction: "Send Reaction:",

    // Play Along Welcome Modal
    playAlongModalBadge: "LIVE AUDIENCE PLAY ALONG",
    playAlongModalTitle: "Aap Hain Play Along Arena Me!",
    playAlongModalSubtext: "Fastest Finger First me aap select nahi huye, lekin game abhi baaki hai! Audience seat se har sawaal ka live jawab dein aur dhero prizes jeetein!",
    gemsPerCorrect: "+5 Gems per correct",
    ptsPerCorrect: "+50 Points for Rank",
    firstQArrivesIn: "Pehla Question Aa Raha Hai In",
    playAlongReadyNote: "Players ready ho jayein! Answer options lock karne ke liye tayaar rahein."
  }
};

/**
 * Get localized string by key and replace any dynamic {params}.
 */
export function getTranslation(lang = 'bilingual', key, params = {}) {
  const dictionary = TRANSLATIONS[lang] || TRANSLATIONS.bilingual;
  let text = dictionary[key] || TRANSLATIONS.en[key] || key;

  if (params && typeof params === 'object') {
    Object.keys(params).forEach(k => {
      text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), params[k]);
    });
  }

  return text;
}

export default {
  LANGUAGES,
  getTranslation
};
