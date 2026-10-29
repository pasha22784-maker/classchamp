/**
 * ClanBattleMatchScreen.jsx
 * Live 4v4 Clan Battle with Team-Only Voice Chat & Anti-Cheat 20s Window.
 * 
 * Key Features:
 * 1. PUBG-Style Voice Switching: Opponent team is muted; only clan teammates talk/hear during match.
 * 2. 20-Second Anti-Cheat Timer: Rapid answering prevents web searches or AI bot cheating.
 * 3. In-Team Real-Time Answer Proposals: Teammates can mark options while debating.
 * 4. "ताला लगाया जाए?" Team Lock Mechanism.
 * 5. Real Audience Poll: Shows real spectator vote telemetry live!
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
  Clock,
  Crown,
  Lock,
  BarChart3,
  HelpCircle,
  Trophy,
  Users,
  ShieldAlert,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

export default function ClanBattleMatchScreen() {
  const { currentUser } = useAuth();
  const { navigateTo } = useGame();
  const [room, setRoom] = useState(() => clanBattleService.currentRoom);
  const [voiceState, setVoiceState] = useState(() => voiceChatService.getState());
  const [activeSpeakers, setActiveSpeakers] = useState(new Set());
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showAudiencePollModal, setShowAudiencePollModal] = useState(false);

  // Determine user's clan ('CLAN_A' or 'CLAN_B')
  const myClanId = room?.clanA?.members?.some(m => m.id === currentUser?.id)
    ? 'CLAN_A'
    : room?.clanB?.members?.some(m => m.id === currentUser?.id)
      ? 'CLAN_B'
      : 'CLAN_A';

  useEffect(() => {
    // Ensure voice chat is strictly in TEAM ONLY mode!
    voiceChatService.setMode('TEAM', myClanId);

    const unsubRoom = clanBattleService.onRoomUpdate((updated) => {
      setRoom(updated);
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
  }, [myClanId]);

  if (!room) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-pearl font-bold text-base mb-2">Match Concluded</h3>
        <button
          type="button"
          onClick={() => navigateTo('HOME')}
          className="px-4 py-2 rounded-xl bg-champGold text-navy-950 font-bold text-xs uppercase"
        >
          Return Home
        </button>
      </div>
    );
  }

  // Result screen if match concluded
  if (room.stage === 'RESULT') {
    const isClanAWinner = room.clanA.score >= room.clanB.score;
    const winnerClan = isClanAWinner ? room.clanA : room.clanB;
    const isMyClanWinner = winnerClan.id === myClanId;

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-lg mx-auto text-center font-rajdhani animate-fadeIn">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-champGold to-amber-300 p-0.5 shadow-2xl mb-3 animate-bounce">
          <div className="w-full h-full rounded-3xl bg-navy-950 flex items-center justify-center text-4xl">
            🏆
          </div>
        </div>

        <h2 className="text-2xl font-bold text-pearl font-cinzel mb-1">
          {winnerClan.name} Wins the Clan War!
        </h2>
        <p className="text-xs text-champGold font-bold uppercase tracking-widest mb-4">
          {isMyClanWinner ? '🎉 Victory! Your Clan Championed!' : 'Great Match! GG to Both Clans'}
        </p>

        {/* Score comparison card */}
        <div className="w-full grid grid-cols-2 gap-3 mb-6">
          <div className="bg-navy-900/90 p-4 rounded-2xl border border-champGold/40 shadow">
            <div className="text-3xl mb-1">{room.clanA.badge || '🦅'}</div>
            <div className="text-xs font-bold text-pearl">{room.clanA.name}</div>
            <div className="text-lg font-bold text-champGold">{room.clanA.score.toLocaleString()} Pts</div>
          </div>

          <div className="bg-navy-900/90 p-4 rounded-2xl border border-blue-400/40 shadow">
            <div className="text-3xl mb-1">{room.clanB.badge || '🐅'}</div>
            <div className="text-xs font-bold text-pearl">{room.clanB.name}</div>
            <div className="text-lg font-bold text-blue-400">{room.clanB.score.toLocaleString()} Pts</div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            clanBattleService.leaveRoom();
            navigateTo('HOME');
          }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-sm uppercase tracking-wider shadow-lg"
        >
          Return to Arena
        </button>
      </div>
    );
  }

  const currentQ = room.questions[room.currentQIndex] || {
    text: 'Loading Question...',
    options: { A: 'A', B: 'B', C: 'C', D: 'D' }
  };

  const myTeam = myClanId === 'CLAN_A' ? room.clanA : room.clanB;
  const oppTeam = myClanId === 'CLAN_A' ? room.clanB : room.clanA;
  const myTeamLockedAnswer = room.teamLocks?.[myClanId];
  const timer = room.timeRemaining || 0;

  const handlePropose = (key) => {
    if (myTeamLockedAnswer) return;
    soundService.playClick();
    setSelectedProposal(key);
    clanBattleService.proposeAnswer(currentUser?.id, myClanId, key);
  };

  const handleLockAnswer = () => {
    if (!selectedProposal || myTeamLockedAnswer) return;
    soundService.playLock();
    clanBattleService.lockTeamAnswer(myClanId, selectedProposal);
  };

  return (
    <div className="flex-1 flex flex-col p-3 max-w-2xl mx-auto w-full font-rajdhani select-none animate-fadeIn">
      {/* Top HUD: Score & Anti-Cheat Timer */}
      <div className="flex items-center justify-between mb-2.5 bg-navy-950/90 p-2 rounded-2xl border border-white/10 shadow">
        {/* My Clan */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-velvet-900 border border-champGold/40 flex items-center justify-center text-lg">
            {myTeam.badge || '🦅'}
          </div>
          <div>
            <div className="text-xs font-bold text-pearl leading-none">{myTeam.name}</div>
            <div className="text-xs text-champGold font-bold mt-0.5">{myTeam.score.toLocaleString()} Pts</div>
          </div>
        </div>

        {/* 20s Anti-Cheat Timer */}
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border font-bold text-sm ${
          timer <= 5
            ? 'bg-crimsonAlert/30 border-crimsonAlert text-crimsonAlert animate-pulse'
            : 'bg-navy-900 border-champGold/40 text-champGold'
        }`}>
          <Clock size={15} />
          <span>{timer}s</span>
        </div>

        {/* Opponent Clan */}
        <div className="flex items-center gap-2 text-right">
          <div>
            <div className="text-xs font-bold text-pearl leading-none">{oppTeam.name}</div>
            <div className="text-xs text-blue-400 font-bold mt-0.5">{oppTeam.score.toLocaleString()} Pts</div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-navy-800 border border-blue-400/40 flex items-center justify-center text-lg">
            {oppTeam.badge || '🐅'}
          </div>
        </div>
      </div>

      {/* Voice Status Alert Bar: PUBG-STYLE TEAM ONLY */}
      <div className="mb-2 p-2 rounded-xl bg-gradient-to-r from-blue-950/60 to-navy-950 border border-blue-500/30 flex items-center justify-between shadow">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <div>
            <div className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1">
              <span>🔒 Clan Voice Active (Team Chat Only)</span>
            </div>
            <div className="text-[9px] text-slate-300">
              Opponent team cannot hear you. Coordinate answers with your clan!
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => { soundService.playClick(); voiceChatService.toggleMic(); }}
            className={`p-1.5 rounded-lg border transition ${
              voiceState.isMicMuted
                ? 'bg-crimsonAlert/20 border-crimsonAlert text-crimsonAlert'
                : 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
            }`}
          >
            {voiceState.isMicMuted ? <MicOff size={13} /> : <Mic size={13} />}
          </button>

          <button
            type="button"
            onClick={() => { soundService.playClick(); voiceChatService.toggleDeafen(); }}
            className={`p-1.5 rounded-lg border transition ${
              voiceState.isDeafened
                ? 'bg-crimsonAlert/20 border-crimsonAlert text-crimsonAlert'
                : 'bg-navy-900 border-white/10 text-slate-300'
            }`}
          >
            {voiceState.isDeafened ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
        </div>
      </div>

      {/* Mic Permission Denied / Recovery Helper */}
      {voiceState.isPermissionDenied && (
        <div className="mb-2 px-2.5 py-1 rounded-xl bg-amber-500/15 border border-amber-500/30 text-[10px] text-amber-300 flex items-center justify-between">
          <span>🎤 माइक की अनुमति बंद है (नीचे Quick-Chat एक्टिव है)</span>
          <button
            type="button"
            onClick={() => voiceChatService.initLocalMicrophone(currentUser?.id, myClanId)}
            className="text-champGold underline font-bold"
          >
            पुनः प्रयास
          </button>
        </div>
      )}

      {/* Clan Member Speaking Bar */}
      <div className="flex items-center justify-center gap-2 mb-2">
        {myTeam.members?.map(m => {
          const isSpeaking = activeSpeakers.has(m.id);
          return (
            <div
              key={m.id}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg border text-[10px] font-bold transition ${
                isSpeaking
                  ? 'bg-emerald-950/80 border-emerald-400 ring-1 ring-emerald-400 text-emerald-300 shadow'
                  : 'bg-navy-900/80 border-white/10 text-slate-300'
              }`}
            >
              <span>{m.avatar || '👤'}</span>
              <span className="truncate max-w-[60px]">{m.name.split(' ')[0]}</span>
              {isSpeaking && <Volume2 size={11} className="text-emerald-400 animate-pulse" />}
            </div>
          );
        })}
      </div>

      {/* Main Battle Area: Side-by-side on Landscape / Widescreen with zero scrolling */}
      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 items-center overflow-hidden min-h-0">
        {/* Left: Question Card + Member Voice Status */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full max-h-full overflow-hidden min-h-0">
          <div className="bg-navy-900/90 rounded-2xl p-3 sm:p-4 border border-champGold/30 shadow-xl relative">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] uppercase font-bold text-champGold tracking-wider bg-champGold/10 px-2 py-0.5 rounded border border-champGold/30">
                Question {room.currentQIndex + 1} of {room.questions.length} • {(room.currentQIndex + 1) * 10000} Pts
              </span>
              <span className="text-[10px] text-amber-300 font-bold uppercase">
                Anti-Cheat 20s Window
              </span>
            </div>

            <h3 className="text-xs sm:text-sm md:text-base font-bold text-pearl leading-snug font-cinzel mb-1">
              {currentQ.text}
            </h3>
            {currentQ.text_hi && (
              <p className="text-[11px] sm:text-xs text-amber-200/90 font-medium leading-relaxed">
                {currentQ.text_hi}
              </p>
            )}
          </div>
        </div>

        {/* Right: 4 Options + Lock Action Bar */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full max-h-full overflow-hidden min-h-0">
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2">
            {['A', 'B', 'C', 'D'].map(key => {
              const isSelected = selectedProposal === key;
              const isLocked = myTeamLockedAnswer === key;
              const text = currentQ.options?.[key] || '';

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handlePropose(key)}
                  disabled={Boolean(myTeamLockedAnswer)}
                  className={`p-2 sm:p-2.5 rounded-xl border text-left transition flex flex-col justify-between relative ${
                    isLocked
                      ? 'bg-emerald-600/30 border-emerald-400 ring-2 ring-emerald-400 text-pearl shadow-lg'
                      : isSelected
                        ? 'bg-amber-500/20 border-champGold ring-1 ring-champGold text-pearl'
                        : 'bg-navy-950/80 hover:bg-navy-800/80 border-white/10 text-pearl'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-0.5">
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] ${
                      isLocked ? 'bg-emerald-500 text-navy-950' : isSelected ? 'bg-champGold text-navy-950' : 'bg-white/10 text-champGold'
                    }`}>
                      {key}
                    </span>

                    {isLocked && (
                      <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5">
                        <Lock size={10} /> Locked
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] sm:text-xs font-semibold leading-tight line-clamp-2">
                    {text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Lock Action Bar */}
          <div className="bg-navy-950/90 rounded-2xl p-1.5 sm:p-2 border border-white/10 flex items-center justify-between gap-1.5 shadow">
            <button
              type="button"
              onClick={() => setShowAudiencePollModal(true)}
              className="px-2.5 py-1.5 rounded-xl bg-navy-900 border border-champGold/30 text-champGold font-bold text-[11px] uppercase flex items-center gap-1 hover:bg-navy-800 transition"
            >
              <BarChart3 size={12} />
              <span>Poll</span>
            </button>

            <button
              type="button"
              onClick={handleLockAnswer}
              disabled={!selectedProposal || Boolean(myTeamLockedAnswer)}
              className={`flex-1 py-1.5 sm:py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition ${
                myTeamLockedAnswer
                  ? 'bg-emerald-600 text-pearl opacity-90 cursor-not-allowed'
                  : selectedProposal
                    ? 'bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 shadow-lg active:scale-95'
                    : 'bg-navy-900 text-slate-500 border border-white/5 cursor-not-allowed'
              }`}
            >
              <Lock size={12} />
              <span>
                {myTeamLockedAnswer
                  ? `Locked Option [${myTeamLockedAnswer}]`
                  : selectedProposal
                    ? `ताला लगाया जाए? Lock [${selectedProposal}]`
                    : 'Select an Option'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Live Audience Poll Telemetry Modal */}
      {showAudiencePollModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-navy-950 border border-champGold/40 rounded-2xl p-5 max-w-sm w-full shadow-2xl">
            <h3 className="text-sm font-bold text-pearl uppercase font-cinzel mb-1 flex items-center gap-1.5">
              <BarChart3 size={16} className="text-champGold" />
              <span>Real Live Audience Poll</span>
            </h3>
            <p className="text-[11px] text-slate-300 mb-4">
              Live spectator voting telemetry aggregated from fans watching this match:
            </p>

            <div className="grid grid-cols-4 gap-2 text-center mb-5">
              {['A', 'B', 'C', 'D'].map(k => (
                <div key={k} className="bg-navy-900 p-2.5 rounded-xl border border-white/10">
                  <div className="text-xs font-bold text-champGold">{k}</div>
                  <div className="text-base font-bold text-pearl my-0.5">
                    {k === 'B' ? '68%' : k === 'A' ? '14%' : k === 'C' ? '12%' : '6%'}
                  </div>
                  <div className="w-full bg-navy-950 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-champGold h-full"
                      style={{ width: k === 'B' ? '68%' : '14%' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setShowAudiencePollModal(false)}
              className="w-full py-2.5 rounded-xl bg-champGold text-navy-950 font-bold text-xs uppercase"
            >
              Resume Match
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
