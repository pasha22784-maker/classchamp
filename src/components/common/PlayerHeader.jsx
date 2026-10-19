/**
 * PlayerHeader.jsx
 * Sticky header showing Player Avatar, Division Badge, Energy Hearts, Gems, and Trophies.
 */

import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Heart, Award, Sparkles } from 'lucide-react';

export default function PlayerHeader() {
  const { currentUser } = useAuth();
  if (!currentUser) return null;

  return (
    <div className="bg-navy-900/90 backdrop-blur border-b border-white/10 px-4 py-3 flex items-center justify-between">
      {/* Player Profile Info */}
      <div className="flex items-center gap-2.5">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-velvet-800 to-velvet-700 border-2 border-champGold flex items-center justify-center text-lg shadow-md">
            {currentUser.avatar || '⭐'}
          </div>
          {currentUser.isPro && (
            <div className="absolute -bottom-1 -right-1 bg-champGold text-navy-950 font-black text-[9px] px-1 rounded-full shadow">
              PRO
            </div>
          )}
        </div>
        <div>
          <div className="text-xs font-bold text-pearl flex items-center gap-1.5 leading-tight">
            <span>{currentUser.name}</span>
            <span className="text-[10px] text-slate-400 font-normal">
              • {currentUser.city || 'India'}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[10px] font-semibold text-champGold bg-champGold/10 px-1.5 py-0.2 rounded border border-champGold/20">
              {currentUser.division} League
            </span>
          </div>
        </div>
      </div>

      {/* Gamified Stat Pills (Halal Economy) */}
      <div className="flex items-center gap-2">
        {/* Daily Energy Hearts */}
        <div
          className="flex items-center gap-1 bg-navy-950/80 border border-crimsonAlert/30 px-2 py-1 rounded-full shadow-inner"
          title={currentUser.isPro ? "Unlimited Daily Energy (Pro Member)" : "Daily Energy: 1 Heart used per match, recharges every 30m"}
        >
          <Heart size={14} className="text-crimsonAlert fill-crimsonAlert animate-pulse" />
          <span className="text-xs font-bold text-pearl">
            {currentUser.isPro ? '∞' : `${currentUser.energy}/5`}
          </span>
        </div>

        {/* Gems Utility Currency */}
        <div
          className="flex items-center gap-1 bg-navy-950/80 border border-champGold/30 px-2 py-1 rounded-full shadow-inner"
          title="Virtual Gems: Use to buy extra lifelines or instant energy"
        >
          <Sparkles size={13} className="text-champGold fill-champGold" />
          <span className="text-xs font-bold text-champGold">
            {currentUser.gems.toLocaleString()}
          </span>
        </div>

        {/* ELO Trophies Rating */}
        <div
          className="flex items-center gap-1 bg-navy-950/80 border border-blue-500/30 px-2 py-1 rounded-full shadow-inner"
          title="Division Trophies / Skill Rating (+25 on win, -10 on loss)"
        >
          <Award size={14} className="text-blue-400" />
          <span className="text-xs font-bold text-blue-300">
            {currentUser.trophies || 0}
          </span>
        </div>
      </div>
    </div>
  );
}
