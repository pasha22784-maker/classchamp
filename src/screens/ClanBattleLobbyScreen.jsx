/**
 * ClanBattleLobbyScreen.jsx
 * 4v4 Clan Battle Lobby & Warm-Up Arena with ALL-CHAT Voice.
 * 
 * Flow:
 * - Clan Alpha (Max 4) vs Clan Bravo (Max 4).
 * - Warmup/Waiting: 'ALL' Voice Chat active (All 8 players speak together, banter & team setup).
 * - Fill with AI Bots option so users can test 4v4 battle instantly.
 * - Host starts match -> switches Voice Chat to TEAM ONLY automatically!
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import clanBattleService from '../services/clanBattleService';
import voiceChatService from '../services/voiceChatService';
import soundService from '../services/soundService';
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Swords,
  Users,
  Shield,
  Share2,
  Play,
  ArrowLeft,
  Crown,
  CheckCircle,
  Clock,
  Sparkles,
  Bot
} from 'lucide-react';

export default function ClanBattleLobbyScreen() {
  const { currentUser } = useAuth();
  const { navigateTo } = useGame();
  const [room, setRoom] = useState(() => clanBattleService.currentRoom);
  const [voiceState, setVoiceState] = useState(() => voiceChatService.getState());
  const [activeSpeakers, setActiveSpeakers] = useState(new Set());

  // Subscribe to room updates
  useEffect(() => {
    const unsubRoom = clanBattleService.onRoomUpdate((updated) => {
      setRoom(updated);
      if (updated?.stage === 'MATCH') {
        navigateTo('CLAN_BATTLE_MATCH');
      }
    });

    const unsubVoice = voiceChatService.onStateChange((vs) => {
      setVoiceState(vs);
    });

    const unsubSpeaking = voiceChatService.onSpeakingChange(({ peerId, isSpeaking }) => {
      setActiveSpeakers(prev => {
        const next = new Set(prev);
        if (isSpeaking) next.add(peerId);
        else next.delete(peerId);
        return next;
      });
    });

    return () => {
      unsubRoom();
      unsubVoice();
      unsubSpeaking();
    };
  }, [navigateTo]);

  if (!room) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-pearl font-bold text-base mb-2">No Active Clan Battle</h3>
        <button
          type="button"
          onClick={() => navigateTo('HOME')}
          className="px-4 py-2 rounded-xl bg-champGold text-navy-950 font-bold text-xs uppercase"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const isHost = room.hostId === currentUser?.id;
  const isMeReady = [...room.clanA.members, ...room.clanB.members].find(m => m.id === currentUser?.id)?.isReady;

  const handleToggleReady = () => {
    soundService.playClick();
    clanBattleService.toggleReady(currentUser?.id);
  };

  const handleStartBattle = () => {
    soundService.playCorrect();
    clanBattleService.startMatch();
    navigateTo('CLAN_BATTLE_MATCH');
  };

  const handleFillBots = () => {
    soundService.playClick();
    clanBattleService.fillWithBots();
  };

  const handleShareInvite = () => {
    soundService.playClick();
    const text = `Join our 4v4 Clan Battle on BrainLeague! Room Code: ${room.code}\nLink: https://play.bolchaall.com/?room=${room.code}`;
    if (navigator.share) {
      navigator.share({ title: 'BrainLeague 4v4 Clan Battle', text }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(text);
      alert('Room Invite copied to clipboard!');
    }
  };

  const renderSlot = (member, index, clanColor) => {
    if (member) {
      const isSpeaking = activeSpeakers.has(member.id);
      return (
        <div
          key={member.id}
          className={`flex items-center justify-between p-2.5 rounded-xl border transition ${
            isSpeaking
              ? 'bg-emerald-950/60 border-emerald-400 ring-2 ring-emerald-400/50 shadow-lg'
              : 'bg-navy-900/80 border-white/10'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg border relative ${
              clanColor === 'alpha' ? 'bg-velvet-900 border-champGold/40' : 'bg-navy-800 border-blue-400/40'
            }`}>
              {member.avatar || '👤'}
              {member.role === 'Captain' && (
                <Crown size={12} className="absolute -top-1.5 -right-1 text-champGold fill-champGold" />
              )}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-pearl truncate flex items-center gap-1 font-cinzel">
                <span>{member.name}</span>
                {member.isBot && <span className="text-[9px] text-slate-400">🤖</span>}
              </div>
              <div className="text-[10px] text-slate-400 font-rajdhani">
                {member.role || 'Contender'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {member.isReady ? (
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase border border-emerald-500/30">
                Ready
              </span>
            ) : (
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[9px] font-bold uppercase">
                Wait
              </span>
            )}
            {isSpeaking && (
              <Volume2 size={13} className="text-emerald-400 animate-pulse" />
            )}
          </div>
        </div>
      );
    }

    return (
      <div
        key={`empty-${index}`}
        className="flex items-center justify-center p-3 rounded-xl border border-dashed border-white/10 bg-navy-950/40 text-slate-500 text-xs font-rajdhani uppercase tracking-wider"
      >
        <span>+ Empty Slot {index + 1}</span>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col p-3 max-w-2xl mx-auto w-full font-rajdhani animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 bg-navy-950/80 p-2.5 rounded-2xl border border-white/10">
        <button
          type="button"
          onClick={() => {
            soundService.playClick();
            clanBattleService.leaveRoom();
            navigateTo('HOME');
          }}
          className="flex items-center gap-1 px-3 py-1 rounded-xl bg-navy-900 border border-white/10 text-slate-300 hover:text-pearl font-bold text-xs uppercase"
        >
          <ArrowLeft size={14} />
          <span>Exit</span>
        </button>

        <div className="text-center">
          <div className="flex items-center justify-center gap-1.5">
            <Swords size={16} className="text-crimsonAlert" />
            <h2 className="text-sm font-bold text-pearl uppercase font-cinzel">
              4v4 Clan Battle Arena
            </h2>
          </div>
          <span className="text-[10px] text-champGold font-bold tracking-wider">
            Room Code: {room.code}
          </span>
        </div>

        <button
          type="button"
          onClick={handleShareInvite}
          className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs uppercase shadow"
        >
          <Share2 size={13} />
          <span>Share</span>
        </button>
      </div>

      {/* Voice Status Alert Bar */}
      <div className="mb-3 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between shadow">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div>
            <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
              🔊 All-Chat Voice Active (Warm-Up Mode)
            </div>
            <div className="text-[10px] text-slate-300">
              Both clans can speak and hear each other. Once match starts, voice switches to <strong>Team Only</strong>!
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => { soundService.playClick(); voiceChatService.toggleMic(); }}
            className={`p-2 rounded-xl border transition ${
              voiceState.isMicMuted
                ? 'bg-crimsonAlert/20 border-crimsonAlert text-crimsonAlert'
                : 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
            }`}
          >
            {voiceState.isMicMuted ? <MicOff size={15} /> : <Mic size={15} />}
          </button>

          <button
            type="button"
            onClick={() => { soundService.playClick(); voiceChatService.toggleDeafen(); }}
            className={`p-2 rounded-xl border transition ${
              voiceState.isDeafened
                ? 'bg-crimsonAlert/20 border-crimsonAlert text-crimsonAlert'
                : 'bg-navy-900 border-white/10 text-slate-300'
            }`}
          >
            {voiceState.isDeafened ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>
      </div>

      {/* 4v4 Grid: Clan A vs Clan B */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 mb-3">
        {/* Clan Alpha (Left) */}
        <div className="bg-navy-950/80 rounded-2xl p-3 border border-champGold/30 flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-xl">{room.clanA.badge || '🦅'}</span>
              <div>
                <h4 className="text-xs font-bold text-pearl font-cinzel">{room.clanA.name}</h4>
                <span className="text-[10px] text-champGold font-bold uppercase">
                  Clan Alpha • {room.clanA.members.length}/4
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 flex-1">
            {[0, 1, 2, 3].map(idx => renderSlot(room.clanA.members[idx], idx, 'alpha'))}
          </div>
        </div>

        {/* Clan Bravo (Right) */}
        <div className="bg-navy-950/80 rounded-2xl p-3 border border-blue-400/30 flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-xl">{room.clanB.badge || '🐅'}</span>
              <div>
                <h4 className="text-xs font-bold text-pearl font-cinzel">{room.clanB.name}</h4>
                <span className="text-[10px] text-blue-400 font-bold uppercase">
                  Clan Bravo • {room.clanB.members.length}/4
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 flex-1">
            {[0, 1, 2, 3].map(idx => renderSlot(room.clanB.members[idx], idx, 'bravo'))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="bg-navy-950/90 rounded-2xl p-3 border border-white/10 flex flex-col gap-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
          <span>⏱️ Anti-Cheat: 20s fast timer active in match</span>
          <span>👁️ Live Spectators Allowed: Yes</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Fill Bots Button */}
          <button
            type="button"
            onClick={handleFillBots}
            className="py-2.5 rounded-xl bg-navy-900 border border-white/10 text-slate-200 font-bold text-xs uppercase flex items-center justify-center gap-1.5 hover:bg-navy-800 transition"
          >
            <Bot size={14} className="text-blue-400" />
            <span>Fill Slots With Bots</span>
          </button>

          {/* Toggle Ready / Start */}
          {isHost ? (
            <button
              type="button"
              onClick={handleStartBattle}
              className="py-2.5 rounded-xl bg-gradient-to-r from-crimsonAlert via-velvet-800 to-crimsonAlert border border-crimsonAlert text-pearl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg hover:scale-[1.02] active:scale-95 transition"
            >
              <Play size={14} className="fill-white" />
              <span>Start 4v4 Clan Battle</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleToggleReady}
              className={`py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition ${
                isMeReady
                  ? 'bg-emerald-600 text-pearl shadow'
                  : 'bg-navy-800 text-slate-300 hover:text-pearl border border-white/10'
              }`}
            >
              <CheckCircle size={14} />
              <span>{isMeReady ? 'Ready! (Click to Unready)' : 'Ready Up'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
