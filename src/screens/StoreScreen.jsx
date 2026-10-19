/**
 * StoreScreen.jsx
 * 100% Halal Monetization Storefront.
 * Offers:
 * 1. ClassChamp Pro Pass (₹99/mo subscription) - Unlimited Hearts, Step-by-Step Solutions, VIP Badge.
 * 2. Virtual Utility Gem Packs (fixed fee for virtual lifelines/energy).
 * 3. Flash Deals with countdown timers.
 * 4. Transparent Halal Ju'alah sponsorship explanation.
 */

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import storageService from '../services/storageService';
import soundService from '../services/soundService';
import {
  ShoppingBag,
  Sparkles,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  Tag,
  ArrowRight
} from 'lucide-react';

export default function StoreScreen() {
  const { currentUser, addGems, updateProfile } = useAuth();
  const [storeOffers] = useState(() => storageService.getStoreOffers());
  const [purchasedMessage, setPurchasedMessage] = useState('');

  const flashOffer = storeOffers[0] || null;

  const handleBuyGems = (gemAmount, inrPrice) => {
    soundService.playCorrect();
    addGems(gemAmount);
    setPurchasedMessage(`Successfully purchased ${gemAmount} Gems for ₹${inrPrice}!`);
    setTimeout(() => setPurchasedMessage(''), 3500);
  };

  const handleBuyPro = () => {
    soundService.playCorrect();
    updateProfile({
      isPro: true,
      energy: 5
    });
    setPurchasedMessage("You are now a BrainLeague PRO member with Unlimited Energy!");
    setTimeout(() => setPurchasedMessage(''), 4000);
  };

  const handleInstantRefill = () => {
    if (!currentUser) return;
    if (currentUser.gems < 20) {
      soundService.playWrong();
      alert("You need at least 20 Gems to instantly refill full energy.");
      return;
    }
    soundService.playCorrect();
    updateProfile({
      gems: currentUser.gems - 20,
      energy: 5
    });
    setPurchasedMessage("Full Energy Refilled! (20 Gems used)");
    setTimeout(() => setPurchasedMessage(''), 3000);
  };

  return (
    <div className="flex-1 flex flex-col p-4 pb-20 overflow-y-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <ShoppingBag size={18} className="text-champGold" />
          <h2 className="text-sm font-bold text-pearl uppercase tracking-wider font-cinzel">
            BrainLeague Store
          </h2>
        </div>
        <div className="flex items-center gap-1 bg-navy-900 border border-champGold/30 px-2.5 py-1 rounded-full">
          <Sparkles size={13} className="text-champGold fill-champGold" />
          <span className="text-xs font-mono font-bold text-champGold">
            {currentUser?.gems?.toLocaleString() || 0} Gems
          </span>
        </div>
      </div>

      {/* Fair Play & Trust Banner */}
      <div className="p-2.5 rounded-xl bg-emeraldGlow/10 border border-emeraldGlow/30 text-[11px] text-emeraldGlow-light flex items-center gap-2 mb-3">
        <ShieldCheck size={16} className="shrink-0" />
        <span>100% Ad-Free & Safe: Pure skill learning with verified digital badges & real physical awards!</span>
      </div>

      {purchasedMessage && (
        <div className="p-3 rounded-xl bg-champGold/20 border border-champGold text-champGold text-xs font-bold text-center mb-3 animate-fadeIn">
          {purchasedMessage}
        </div>
      )}

      {/* 1. Pro Pass Subscription Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-velvet-950 via-velvet-900 to-navy-900 border-2 border-champGold shadow-2xl relative overflow-hidden mb-4">
        <div className="absolute top-2 right-2 bg-champGold text-navy-950 font-black text-[9px] px-2 py-0.5 rounded-full shadow">
          {currentUser?.isPro ? 'ACTIVE PRO MEMBER' : 'MOST POPULAR'}
        </div>

        <h3 className="text-base font-cinzel font-bold text-pearl flex items-center gap-1.5">
          <span>👑</span>
          <span>BrainLeague Pro Pass</span>
        </h3>
        <p className="text-xs text-champGold font-semibold mt-0.5">
          ₹99 / month • Cancel anytime
        </p>

        <ul className="my-3 space-y-1.5 text-xs text-slate-200">
          <li className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emeraldGlow-light shrink-0" />
            <span><strong>Unlimited Daily Energy:</strong> Play unlimited arena matches without waiting.</span>
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emeraldGlow-light shrink-0" />
            <span><strong>Step-by-Step Solutions:</strong> Full explanations for every school & trivia question.</span>
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emeraldGlow-light shrink-0" />
            <span><strong>Golden VIP Profile Badge:</strong> Stand out on national leaderboards.</span>
          </li>
        </ul>

        {!currentUser?.isPro ? (
          <button
            type="button"
            onClick={handleBuyPro}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs shadow-lg hover:brightness-110 active:scale-[0.98] transition uppercase tracking-wider font-rajdhani"
          >
            Upgrade to Pro Pass (₹99/mo)
          </button>
        ) : (
          <div className="w-full py-2 rounded-xl bg-champGold/20 border border-champGold text-champGold text-xs font-bold text-center">
            ✓ You enjoy full Pro Pass benefits!
          </div>
        )}
      </div>

      {/* 2. Flash Festive Offer */}
      {flashOffer && (
        <div className="p-3.5 rounded-2xl bg-velvet-900 border border-champGold/40 shadow-lg mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] bg-crimsonAlert/20 text-crimsonAlert font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Tag size={11} /> {flashOffer.badge}
            </span>
            <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
              <Clock size={11} /> Limited Time
            </span>
          </div>

          <h4 className="text-xs font-bold text-pearl mt-1">{flashOffer.title}</h4>
          <p className="text-[11px] text-slate-300 mt-0.5 mb-2">{flashOffer.description}</p>

          <button
            type="button"
            onClick={() => handleBuyGems(150, 49)}
            className="w-full py-2 rounded-xl bg-velvet-800 hover:bg-velvet-700 text-champGold border border-champGold/30 font-bold text-xs shadow transition flex items-center justify-center gap-1.5 uppercase font-rajdhani"
          >
            <span>Claim Double Pack (₹49)</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}

      {/* 3. Instant Energy Refill */}
      <div className="p-3 rounded-2xl glass-panel border border-white/10 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-crimsonAlert/20 border border-crimsonAlert flex items-center justify-center text-lg">
            <Heart size={18} className="text-crimsonAlert fill-crimsonAlert" />
          </div>
          <div>
            <div className="text-xs font-bold text-pearl">Instant Energy Refill</div>
            <div className="text-[10px] text-slate-400">Restore all 5 hearts right now</div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleInstantRefill}
          disabled={currentUser?.energy >= 5 || currentUser?.isPro}
          className="px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-champGold border border-champGold/30 text-xs font-bold disabled:opacity-40"
        >
          20 Gems
        </button>
      </div>

      {/* 4. Gem Packs (Virtual Utilities) */}
      <div>
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Sparkles size={14} className="text-champGold" />
          Gems & Lifeline Packs
        </h4>

        <div className="grid grid-cols-3 gap-2.5">
          {/* Starter Pack */}
          <button
            type="button"
            onClick={() => handleBuyGems(50, 29)}
            className="p-3 rounded-2xl bg-navy-900/90 hover:bg-navy-800 border border-white/10 text-center transition flex flex-col items-center justify-between"
          >
            <span className="text-2xl mb-1">💎</span>
            <span className="text-xs font-bold text-pearl">50 Gems</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Starter</span>
            <span className="mt-2 text-xs font-mono font-bold text-champGold bg-champGold/15 px-2 py-0.5 rounded-full border border-champGold/30">
              ₹29
            </span>
          </button>

          {/* Popular Pack */}
          <button
            type="button"
            onClick={() => handleBuyGems(120, 59)}
            className="p-3 rounded-2xl bg-velvet-900 border border-champGold/40 text-center transition flex flex-col items-center justify-between shadow-lg relative"
          >
            <div className="absolute -top-2 bg-champGold text-navy-950 font-black text-[8px] px-1.5 rounded-full">
              +20% EXTRA
            </div>
            <span className="text-2xl mb-1">💎💎</span>
            <span className="text-xs font-bold text-pearl">120 Gems</span>
            <span className="text-[10px] text-slate-300 mt-0.5">Champion</span>
            <span className="mt-2 text-xs font-mono font-bold text-champGold bg-champGold/20 px-2 py-0.5 rounded-full border border-champGold/40">
              ₹59
            </span>
          </button>

          {/* Mega Pack */}
          <button
            type="button"
            onClick={() => handleBuyGems(300, 129)}
            className="p-3 rounded-2xl bg-navy-900/90 hover:bg-navy-800 border border-white/10 text-center transition flex flex-col items-center justify-between"
          >
            <span className="text-2xl mb-1">👑</span>
            <span className="text-xs font-bold text-pearl">300 Gems</span>
            <span className="text-[10px] text-slate-400 mt-0.5">Mega Vault</span>
            <span className="mt-2 text-xs font-mono font-bold text-champGold bg-champGold/15 px-2 py-0.5 rounded-full border border-champGold/30">
              ₹129
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
