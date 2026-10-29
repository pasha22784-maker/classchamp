/**
 * GameInviteNotificationBanner.jsx
 * PUBG-Style In-App Real-Time Game Invite Banner.
 * 
 * Pops down across any screen when a friend invites you to play a Group Game.
 * Features 1-Tap Accept (auto-joins friend's room) and Decline.
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useGame } from '../../context/GameContext';
import friendService from '../../services/friendService';
import roomService from '../../services/roomService';
import soundService from '../../services/soundService';
import { Gamepad2, Check, X, Users, ArrowRight } from 'lucide-react';

export default function GameInviteNotificationBanner() {
  const { currentUser } = useAuth();
  const { navigateTo, startPrivateMatch } = useGame();
  const [activeInvite, setActiveInvite] = useState(null);
  const [countdown, setCountdown] = useState(60);

  // Subscribe to incoming invites across cloud relay and local channels
  useEffect(() => {
    if (!currentUser?.id) return;

    const unsub = friendService.subscribeToGameInvites(currentUser, (invite) => {
      if (!invite || !invite.roomCode) return;
      soundService.playLifeline();
      setActiveInvite(invite);
      setCountdown(60);
    });

    return () => {
      if (unsub) unsub();
    };
  }, [currentUser]);

  // Countdown timer for active invite
  useEffect(() => {
    if (!activeInvite) return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setActiveInvite(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeInvite]);

  if (!activeInvite) return null;

  const handleDecline = () => {
    soundService.playClick();
    setActiveInvite(null);
  };

  const handleAccept = async () => {
    soundService.playCorrect();
    const code = activeInvite.roomCode;
    setActiveInvite(null);

    // Join room directly via roomService
    const result = await roomService.joinRoom({
      code,
      playerId: currentUser.id,
      playerName: currentUser.name,
      playerAvatar: currentUser.avatar
    });

    if (result.success && result.room) {
      // If room already starting, start match directly
      if (result.room.status === 'starting' || result.room.status === 'active') {
        startPrivateMatch(result.room);
      } else {
        // Navigate to join room / private room screen
        navigateTo('JOIN_ROOM');
      }
    } else {
      // If room not found or full, still navigate to join room with prefilled code
      navigateTo('JOIN_ROOM');
    }
  };

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-md animate-slideDown">
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-velvet-950 via-navy-900 to-velvet-950 border-2 border-champGold shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-pearl">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-2xl bg-champGold/20 border border-champGold/50 flex items-center justify-center text-xl shrink-0 shadow-lg animate-bounce">
            {activeInvite.fromUser?.avatar || '🎮'}
          </div>

          <div className="min-w-0 text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-champGold font-cinzel flex items-center gap-1">
                <Gamepad2 size={12} />
                <span>Group Game Invite</span>
              </span>
              <span className="text-[9px] font-mono text-slate-400">({countdown}s)</span>
            </div>
            <p className="text-xs font-bold text-pearl leading-snug">
              <span className="text-champGold">{activeInvite.fromUser?.name || 'A Friend'}</span> invited you to squad up!
            </p>
            <p className="text-[10px] text-slate-400 mt-0.5 font-mono">
              Room: <span className="text-champGold font-bold">{activeInvite.roomCode}</span> • {activeInvite.division || 'Junior'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-3 py-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-400 hover:text-rose-300 font-bold text-xs border border-white/10 transition"
          >
            <X size={14} className="inline mr-1" />
            <span>Decline</span>
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-navy-950 font-black text-xs uppercase font-rajdhani tracking-wider shadow-lg transition active:scale-95 flex items-center justify-center gap-1"
          >
            <Check size={14} />
            <span>Accept & Join</span>
          </button>
        </div>
      </div>
    </div>
  );
}