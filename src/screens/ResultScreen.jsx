/**
 * ResultScreen.jsx
 * Post-Match Celebration, ELO Trophy Math, WhatsApp Scorecard, & Physical Prize Claim Form.
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import storageService from '../services/storageService';
import soundService from '../services/soundService';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Share2,
  RotateCcw,
  Home,
  Award,
  Sparkles,
  MapPin,
  Phone,
  User,
  CheckCircle2,
  Package
} from 'lucide-react';

export default function ResultScreen() {
  const { currentUser } = useAuth();
  const { matchResult, activeDivision, navigateTo, startMatch } = useGame();

  const [showClaimForm, setShowClaimForm] = useState(false);
  const [claimSubmitted, setClaimSubmitted] = useState(false);
  const [fullName, setFullName] = useState(currentUser?.name || '');
  const [parentPhone, setParentPhone] = useState('');
  const [address, setAddress] = useState('');

  // Confetti burst on victory or major level
  useEffect(() => {
    if (matchResult.isWinner || matchResult.pointsWon >= 10000) {
      soundService.playCorrect();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }
    }
  }, [matchResult]);

  // Generate WhatsApp Share text
  const getWhatsAppShareText = () => {
    const pts = (matchResult.pointsWon || 0).toLocaleString();
    const lvl = matchResult.levelReached || 1;
    const div = activeDivision || 'Junior';
    return encodeURIComponent(
      `🏆 I reached Level ${lvl} (${pts} Points) in BrainLeague ${div} League!\nCan you beat my hot-seat score? Play now on BrainLeague!`
    );
  };

  const handleWhatsAppShare = () => {
    soundService.playClick();
    const url = `https://wa.me/?text=${getWhatsAppShareText()}`;
    window.open(url, '_blank');
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    soundService.playClick();

    storageService.addPrizeClaim({
      userId: currentUser?.id,
      playerName: fullName,
      parentPhone,
      address,
      division: activeDivision,
      pointsWon: matchResult.pointsWon,
      levelReached: matchResult.levelReached
    });

    setClaimSubmitted(true);
  };

  const isEligibleForPhysicalMedal = matchResult.isWinner || matchResult.levelReached >= 10;

  return (
    <div className="flex-1 flex flex-col justify-between p-4 overflow-y-auto">
      {/* Top Victory / Match Conclusion Card */}
      <div>
        <div className="text-center pt-2 pb-4">
          <div className="inline-block p-4 rounded-3xl bg-gradient-to-tr from-champGold/20 to-velvet-800 border-2 border-champGold shadow-2xl mb-3 animate-bounce-subtle">
            <span className="text-5xl">
              {matchResult.isWinner ? '👑' : matchResult.pointsWon >= 10000 ? '🏆' : '🎯'}
            </span>
          </div>

          <h1 className="text-xl font-cinzel font-bold text-pearl tracking-wider">
            {matchResult.isWinner
              ? 'CROREPATI CHAMPION!'
              : matchResult.pointsWon >= 10000
                ? 'OUTSTANDING RUN!'
                : 'GOOD EFFORT!'}
          </h1>

          <p className="text-xs text-champGold font-medium mt-0.5">
            {activeDivision} League • Hot-Seat Arena
          </p>
        </div>

        {/* Scorecard Summary Box */}
        <div className="glass-panel rounded-2xl p-4 border border-champGold/40 shadow-xl mb-4">
          <div className="grid grid-cols-2 gap-3 text-center mb-3">
            {/* Virtual Points Won */}
            <div className="p-3 rounded-xl bg-navy-950/80 border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                Virtual Points Won
              </span>
              <span className="text-base font-mono font-bold text-champGold">
                {matchResult.pointsWon.toLocaleString()}
              </span>
            </div>

            {/* Level Reached */}
            <div className="p-3 rounded-xl bg-navy-950/80 border border-white/10">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">
                Level Reached
              </span>
              <span className="text-base font-mono font-bold text-pearl">
                Level {matchResult.levelReached}/15
              </span>
            </div>
          </div>

          {/* ELO Trophies Rating Math */}
          <div className="p-2.5 rounded-xl bg-velvet-950/80 border border-blue-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-blue-400" />
              <div>
                <span className="font-bold text-pearl block text-[11px]">Skill Rating (ELO)</span>
                <span className="text-[9px] text-slate-400">Official ELO Skill Rating</span>
              </div>
            </div>
            <div className="font-mono font-bold">
              <span className={matchResult.trophyDelta >= 0 ? 'text-emeraldGlow-light' : 'text-crimsonAlert'}>
                {matchResult.trophyDelta >= 0 ? `+${matchResult.trophyDelta}` : matchResult.trophyDelta} Trophies
              </span>
            </div>
          </div>
        </div>

        {/* 1-Tap WhatsApp Scorecard Button */}
        <button
          type="button"
          onClick={handleWhatsAppShare}
          className="w-full mb-3 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-navy-950 font-bold text-xs shadow-lg active:scale-[0.98] transition flex items-center justify-center gap-2 uppercase tracking-wider font-rajdhani"
        >
          <Share2 size={16} className="text-navy-950" />
          <span>Share Scorecard on WhatsApp</span>
        </button>

        {/* Physical Medal / Trophy Claim Banner (Ju'alah Halal Model) */}
        {isEligibleForPhysicalMedal && (
          <div className="p-3 rounded-2xl bg-velvet-900 border border-champGold/40 shadow-lg mb-3">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <Package size={16} className="text-champGold" />
                <span className="text-xs font-bold text-champGold uppercase font-cinzel">
                  Claim Physical Medal / Trophy
                </span>
              </div>
              <span className="text-[9px] bg-champGold/20 text-champGold px-1.5 py-0.5 rounded font-bold">
                QUALIFIED
              </span>
            </div>
            <p className="text-[11px] text-slate-300 mb-2">
              Congratulations! Your high ladder score qualifies you for an in-app physical trophy/medal dispatched to your home.
            </p>

            {!claimSubmitted ? (
              <button
                type="button"
                onClick={() => setShowClaimForm(prev => !prev)}
                className="w-full py-2 rounded-xl bg-champGold text-navy-950 font-bold text-xs shadow hover:brightness-110 transition font-rajdhani uppercase tracking-wider"
              >
                {showClaimForm ? 'Hide Claim Form' : 'Fill Dispatch Address Details'}
              </button>
            ) : (
              <div className="p-2 rounded-xl bg-emeraldGlow/15 border border-emeraldGlow/40 text-emeraldGlow-light text-xs flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Address saved! Admin team has received your dispatch request.</span>
              </div>
            )}

            {/* Claim Address Form */}
            {showClaimForm && !claimSubmitted && (
              <form onSubmit={handleClaimSubmit} className="mt-3 space-y-2 border-t border-white/10 pt-2 animate-fadeIn">
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Full Student Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Parent Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Complete Courier Delivery Address</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House/Flat No, Street, City, State, PIN Code"
                    rows={2}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-emeraldGlow text-navy-950 font-bold text-xs shadow hover:brightness-110 transition uppercase tracking-wider font-rajdhani"
                >
                  Submit Dispatch Request
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons: Play Again & Return Home */}
      <div className="grid grid-cols-2 gap-2 pt-2">
        <button
          type="button"
          onClick={() => navigateTo('HOME')}
          className="py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-pearl font-bold text-xs border border-white/10 transition flex items-center justify-center gap-1.5 uppercase font-rajdhani"
        >
          <Home size={15} />
          <span>Home Arena</span>
        </button>

        <button
          type="button"
          onClick={() => startMatch(activeDivision)}
          className="py-2.5 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs shadow-lg hover:brightness-110 active:scale-[0.98] transition flex items-center justify-center gap-1.5 uppercase font-rajdhani"
        >
          <RotateCcw size={15} />
          <span>Play Again (1 Heart)</span>
        </button>
      </div>
    </div>
  );
}
