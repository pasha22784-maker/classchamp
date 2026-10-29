/**
 * AppTourGuideModal.jsx
 * High-Impact, Compulsory Interactive Tour Guide for First-Time Users of BrainLeague.
 * 
 * Highlights the 6 Key Features that attract players:
 * 1. 🏆 The Grand Hot Seat (₹1 Crore Ladder & TV Studio Lifelines)
 * 2. 👥 PUBG-Style Squad & Online Friends (Live Presence & 1-Tap Invites)
 * 3. ⚔️ 4v4 Clan Battle & In-Game Mic Voice Chat (Talk over live mic)
 * 4. 📺 Live Games Directory & Interactive "Play Along" (Audience poll & rewards)
 * 5. 🎯 Competitive Exams & 6-Month Zero-Repeat Current Affairs (UPSC, SSC, School)
 * 6. 🎁 Big Rewards, National Ranks & Welcome Bonus (100 Gems Gift)
 */

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useGame } from '../../context/GameContext';
import soundService from '../../services/soundService';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Users,
  Swords,
  Eye,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Mic,
  Shield,
  Gamepad2,
  Gift,
  Flame,
  Crown,
  Zap,
  Globe
} from 'lucide-react';

const TOUR_SLIDES = [
  {
    id: 'hotseat',
    badge: '📺 Grand TV Studio Experience',
    badgeColor: 'bg-amber-500/20 text-champGold border-champGold/40',
    icon: '🏆',
    titleEn: 'Fastest Finger to the Hot Seat',
    titleHi: 'फास्टेस्ट फिंगर से ₹1 करोड़ की हॉट सीट तक',
    descEn: 'Experience the real TV studio thrill! Compete in the 10-player Fastest Finger First round. The fastest accurate player takes the Hot Seat for 15 questions to 1 Crore points!',
    descHi: 'असली टीवी शो का रोमांच! 10 खिलाड़ियों की फास्टेस्ट फिंगर फर्स्ट राउंड में सबसे तेज़ खिलाड़ी हॉट सीट पर बैठता है और 15 सवालों के साथ 1 करोड़ पॉइंट्स तक पहुँचता है!',
    bullets: [
      { icon: '⚡', en: '15-Second Fastest Finger First with live millisecond leaderboard', hi: '15 सेकंड का फास्टेस्ट फिंगर फर्स्ट राउंड' },
      { icon: '💡', en: '4 Lifelines: 50:50, Audience Poll, Guru Hint & Time Freeze', hi: '4 लाइफलाइन्स: 50:50, ऑडियंस पोल, गुरु संकेत और टाइम फ्रीज़' },
      { icon: '📺', en: 'Zero-scrolling authentic TV studio landscape mode', hi: 'जीरो-स्क्रोलिंग टीवी स्टूडियो लैंडस्केप व्यू' }
    ]
  },
  {
    id: 'squad',
    badge: '🟢 PUBG-Style Social Arena',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    icon: '👥',
    titleEn: 'PUBG-Style Squad & Online Friends',
    titleHi: 'PUBG की तरह ऑनलाइन दोस्त और 1-क्लिक टीम अप',
    descEn: 'Never play alone! See which friends are online with real-time green glowing indicators, share your unique Friend Code (BL-XXXXX), and team up with 1 tap.',
    descHi: 'अकेले मत खेलिए! लाइव हरी बत्ती देखकर जानें कौन-सा दोस्त ऑनलाइन है, अपना फ्रेंड कोड शेयर करें और सिर्फ 1 क्लिक में साथ खेलने का इनवाइट भेजें!',
    bullets: [
      { icon: '🔑', en: 'Your unique Friend Code (e.g. BL-7842) for 1-tap WhatsApp sharing', hi: 'अपना पर्सनल फ्रेंड कोड (जैसे BL-7842) WhatsApp पर शेयर करें' },
      { icon: '🎮', en: 'PUBG-Style "+ Invite" button sends instant pop-ups to friends', hi: 'PUBG की तरह 1-टैप "+ Invite" से तुरंत इन-ऐप इनवाइट भेजें' },
      { icon: '🕒', en: 'Recent Players Tracker: Add anyone you played with in 1 tap', hi: 'हाल ही में साथ खेले खिलाड़ियों को 1-टैप में फ्रेंड रिक्वेस्ट भेजें' }
    ]
  },
  {
    id: 'clan',
    badge: '🎙️ Live Mic Voice Chat',
    badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
    icon: '⚔️',
    titleEn: '4v4 Clan Battle & In-Game Mic',
    titleHi: '4v4 क्लैन बैटल और माइक से लाइव बातचीत',
    descEn: 'Form a squad of 4 warriors, turn on your mic, and discuss answers in real-time! Battle opposing clans in intense quiz warfare.',
    descHi: '4 खिलाड़ियों की स्क्वाड बनाएं, माइक ऑन करके आपस में रणनीति बनाएं और विरोधी क्लैन को हराकर ऑल-इंडिया रैंकिंग में अपना परचम लहराएं!',
    bullets: [
      { icon: '🎙️', en: 'WebRTC Live Voice Chat: Talk freely with your squad', hi: 'लाइव माइक: गेम के दौरान अपने 4 साथियों से माइक पर बात करें' },
      { icon: '🛡️', en: 'PUBG-Style Squad Audio: Lobby talks + In-match team isolation', hi: 'लॉबी में सबसे बात, गेम शुरू होते ही सिर्फ अपनी टीम से बात' },
      { icon: '🔥', en: 'Clan Trophies & National Leaderboard supremacy', hi: 'क्लैन ट्रॉफीज और नेशनल क्लैन लीडरबोर्ड में नंबर 1 बनें' }
    ]
  },
  {
    id: 'playalong',
    badge: '🌟 Live Studio Audience',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    icon: '📺',
    titleEn: 'Live Games & Interactive "Play Along"',
    titleHi: 'लाइव मैच देखें और "Play Along" खेलकर जीतें',
    descEn: 'Even when you are not in the Hot Seat, you can join any live match as a Studio Audience, answer the same questions, and earn big points and Gems!',
    descHi: 'हॉट सीट पर न होने पर भी आप लाइव गेम में दर्शक बनकर "Play Along" कर सकते हैं, ठीक वही सवाल अपने फ़ोन पर हल करके जेम्स और ट्रॉफीज जीत सकते हैं!',
    bullets: [
      { icon: '🎯', en: 'Exact Same Questions synchronized in real-time with Hot Seat', hi: 'हॉट सीट खिलाड़ी वाला हूबहू वही सवाल आपके फ़ोन पर' },
      { icon: '📊', en: 'Vote in Live Audience Polls to help the contender', hi: 'लाइव ऑडियंस पोल में वोट देकर खिलाड़ी की मदद करें' },
      { icon: '💎', en: 'Earn +50 Points & +5 Gems for every correct answer', hi: 'हर सही उत्तर पर +50 पॉइंट्स और +5 जेम्स जीतें' }
    ]
  },
  {
    id: 'exams',
    badge: '🎯 UPSC, SSC & School League',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
    icon: '🎓',
    titleEn: 'Targeted Exams & 6-Month Zero Repeat',
    titleHi: 'प्रतियोगी परीक्षाएं और 6 महीने नो-रिपीट गारंटी',
    descEn: 'Tailored for Champions & Students! Pick your exact exam syllabus: UPSC, SSC, Banking, Railways, Defence, or School League (Class 1 to 12).',
    descHi: 'अपनी परीक्षा का सिलेबस चुनें: UPSC, SSC, बैंकिंग, रेलवे, NDA/CDS या स्कूल लीग (कक्षा 1 से 12)। साप्ताहिक नए करेंट अफेयर्स के साथ तैयारी करें!',
    bullets: [
      { icon: '🚫', en: 'Strict 180-Day (6-Month) Zero Repeat Guarantee on every device', hi: 'कड़ा 6 महीने (180 दिन) नो-रिपीट नियम — कोई सवाल दोबारा नहीं आएगा' },
      { icon: '📰', en: 'Weekly & Monthly Current Affairs questions added by experts', hi: 'साप्ताहिक और मासिक ताज़ा करेंट अफेयर्स सवाल' },
      { icon: '⚖️', en: 'Anti-Bullying Fair Play algorithm protecting younger players', hi: 'उम्र और ग्रेड के अनुसार निष्पक्ष फेयर-प्ले सुरक्षा' }
    ]
  },
  {
    id: 'rewards',
    badge: '🎁 Welcome Bonus & Rankings',
    badgeColor: 'bg-champGold/25 text-champGold border-champGold/50',
    icon: '💎',
    titleEn: 'Claim 100 Welcome Gems & Play!',
    titleHi: '100 वेलकम जेम्स प्राप्त करें और खेलना शुरू करें!',
    descEn: 'You are now ready to dominate BrainLeague! Climb City, State, and National Leaderboards, build your daily streak, and unlock exclusive avatar badges.',
    descHi: 'आप अब ब्रेनलीग में धमाका करने के लिए तैयार हैं! शहर, राज्य और ऑल-इंडिया लीडरबोर्ड में टॉप करें और अपनी ज्ञान की ताकत दिखाएं!',
    bullets: [
      { icon: '🎁', en: '100 Instant Welcome Gems credited to your account', hi: '100 वेलकम जेम्स तुरंत आपके खाते में जमा' },
      { icon: '❤️', en: 'Free Energy Hearts & Daily Login Streak bonuses', hi: 'फ्री एनर्जी हार्ट्स और डेली लॉगिन स्ट्रीक बोनस' },
      { icon: '🏆', en: 'Official City & State Championship Tournaments', hi: 'शहर और राज्य स्तरीय चैंपियनशिप टूर्नामेंट्स' }
    ]
  }
];

export default function AppTourGuideModal({ isOpen, onClose }) {
  const { addGems } = useAuth();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  if (!isOpen) return null;

  const currentSlide = TOUR_SLIDES[currentSlideIndex];
  const isFirstSlide = currentSlideIndex === 0;
  const isLastSlide = currentSlideIndex === TOUR_SLIDES.length - 1;

  const handleNext = () => {
    soundService.playClick();
    if (isLastSlide) {
      handleFinish();
    } else {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    soundService.playClick();
    if (!isFirstSlide) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const handleFinish = () => {
    soundService.playCorrect();
    // Award 100 Welcome Gems bonus
    addGems(100);

    try {
      localStorage.setItem('brainleague_has_completed_tour', 'true');
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 }
      });
    } catch {}

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/90 backdrop-blur-lg animate-fadeIn select-none">
      <div className="w-full max-w-lg bg-gradient-to-b from-navy-900 via-velvet-950 to-navy-900 border-2 border-champGold rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-pearl animate-scaleIn">
        
        {/* Top Header & Progress */}
        <div className="px-5 pt-4 pb-2 border-b border-champGold/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <div>
              <span className="text-xs sm:text-sm font-black font-cinzel text-champGold uppercase tracking-wider block">
                BrainLeague Official Tour
              </span>
              <span className="text-[10px] text-slate-400 font-rajdhani">
                Feature Guide • Step {currentSlideIndex + 1} of {TOUR_SLIDES.length}
              </span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {TOUR_SLIDES.map((slide, idx) => (
              <span
                key={slide.id}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlideIndex
                    ? 'w-6 bg-champGold'
                    : idx < currentSlideIndex
                      ? 'w-2 bg-emerald-400'
                      : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          
          {/* Badge & Big Animated Icon */}
          <div className="flex items-center justify-between">
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase font-rajdhani tracking-wider border ${currentSlide.badgeColor}`}>
              {currentSlide.badge}
            </span>
            <div className="w-14 h-14 rounded-2xl bg-champGold/15 border border-champGold/40 flex items-center justify-center text-3xl shadow-xl animate-bounce">
              {currentSlide.icon}
            </div>
          </div>

          {/* Headlines */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black text-pearl font-cinzel tracking-tight leading-snug">
              {currentSlide.titleEn}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-champGold font-sans">
              {currentSlide.titleHi}
            </p>
          </div>

          {/* Detailed Paragraph Descriptions */}
          <div className="p-3.5 rounded-2xl bg-navy-950/70 border border-white/10 space-y-1.5 shadow-inner">
            <p className="text-xs text-slate-200 leading-relaxed">
              {currentSlide.descEn}
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans border-t border-white/5 pt-1.5">
              {currentSlide.descHi}
            </p>
          </div>

          {/* Feature Bullets */}
          <div className="space-y-2">
            {currentSlide.bullets.map((b, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-velvet-950/80 border border-champGold/20 flex items-start gap-2.5 transition hover:border-champGold/40 shadow-sm"
              >
                <span className="text-base shrink-0 mt-0.5">{b.icon}</span>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-pearl block leading-snug">
                    {b.en}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-sans">
                    {b.hi}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Navigation Bar */}
        <div className="p-4 bg-navy-950 border-t border-champGold/30 flex items-center justify-between gap-3">
          {/* Back Button */}
          {!isFirstSlide ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-3.5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-pearl font-bold text-xs flex items-center gap-1.5 transition border border-white/10"
            >
              <ArrowLeft size={14} />
              <span>Back / पिछला</span>
            </button>
          ) : (
            <div className="text-[11px] text-slate-500 font-semibold px-2">
              Compulsory First-Time Tour
            </div>
          )}

          {/* Next / Finish Button */}
          <button
            type="button"
            onClick={handleNext}
            className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase font-rajdhani tracking-wider flex items-center justify-center gap-2 shadow-xl transition active:scale-95 ${
              isLastSlide
                ? 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 text-navy-950 hover:brightness-110 text-sm'
                : 'bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 hover:brightness-110'
            }`}
          >
            <span>{isLastSlide ? 'Claim 100 Gems & Play! / खेलें 🚀' : 'Next / आगे बढ़ें'}</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
}