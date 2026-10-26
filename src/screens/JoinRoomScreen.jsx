/**
 * JoinRoomScreen.jsx
 * Guest screen: Enter a 6-digit room code (or auto-join from URL),
 * view waiting room with joined friends, and transition into the match when host starts.
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import roomService from '../services/roomService';
import soundService from '../services/soundService';
import {
  Users,
  Crown,
  X,
  Share2,
  Copy,
  Check,
  Link2,
  ArrowLeft,
  LogIn,
  Clock,
  Wifi,
  AlertCircle
} from 'lucide-react';

const AVATARS = ['🎮', '🦁', '🚀', '⭐', '🔥', '🧠', '🏆', '⚡', '💎', '🎯'];

const SHARE_CHANNELS = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    emoji: '💬',
    color: 'bg-[#25D366] hover:bg-[#20ba59] text-[#003d20]',
    getUrl: (url, code) =>
      `https://wa.me/?text=${encodeURIComponent(`🎮 Join my BrainLeague private game!\n\nRoom Code: *${code}*\nJoin here 👉 ${url}\n\nMax 10 players • Fastest Finger First • Hot-Seat Arena!`)}`,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    emoji: '📘',
    color: 'bg-[#1877F2] hover:bg-[#1565d8] text-white',
    getUrl: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    key: 'sms',
    label: 'Message',
    emoji: '📱',
    color: 'bg-emeraldGlow hover:brightness-110 text-navy-950',
    getUrl: (url, code) =>
      `sms:?&body=${encodeURIComponent(`Join our BrainLeague game! Code: ${code} | Link: ${url}`)}`,
  },
  {
    key: 'telegram',
    label: 'Telegram',
    emoji: '✈️',
    color: 'bg-[#229ED9] hover:bg-[#1a87c0] text-white',
    getUrl: (url, code) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`🎮 Join our BrainLeague Hot-Seat! Room Code: ${code}`)}`,
  },
];

export default function JoinRoomScreen({ initialCode = '' }) {
  const { currentUser } = useAuth();
  const { navigateTo, startPrivateMatch } = useGame();

  const [code, setCode] = useState(initialCode || '');
  const [selectedAvatar, setSelectedAvatar] = useState(currentUser?.avatar || '🎮');
  const [error, setError] = useState(null);
  const [room, setRoom] = useState(null);
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const pollRef = useRef(null);

  // Auto-join if initialCode was provided from URL
  useEffect(() => {
    if (initialCode && !room && currentUser) {
      handleJoin(initialCode);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCode]);

  // Subscribe to real-time BroadcastChannel updates
  useEffect(() => {
    if (!room?.code) return;
    const unsub = roomService.subscribe((updated) => {
      if (updated?.code === room.code) {
        if (updated.status === 'dissolved') {
          soundService.playWrong();
          alert('The host has dissolved this room.');
          setRoom(null);
          navigateTo('HOME');
          return;
        }
        setRoom(updated);
      }
    });
    return unsub;
  }, [room?.code, navigateTo]);

  // Poll room updates from storage (for tab or window sync)
  useEffect(() => {
    if (!room?.code) return;
    pollRef.current = setInterval(() => {
      const fresh = roomService.getRoom(room.code);
      if (fresh) {
        setRoom(fresh);
      } else {
        // Room was deleted
        setRoom(null);
        setError('Room was closed by the host.');
      }
    }, 2000);
    return () => clearInterval(pollRef.current);
  }, [room?.code]);

  // Watch for countdown and game start
  useEffect(() => {
    if (!room?.startCountdown) {
      setCountdown(null);
      return;
    }

    const tick = setInterval(() => {
      const left = Math.ceil((room.startCountdown - Date.now()) / 1000);
      if (left <= 0) {
        clearInterval(tick);
        setCountdown(0);
        soundService.playCorrect();
        startPrivateMatch(room);
      } else {
        setCountdown(left);
      }
    }, 200);

    return () => clearInterval(tick);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.startCountdown, room]);

  const handleJoin = (targetCode) => {
    const cleanCode = (targetCode || code).trim().toUpperCase();
    if (!cleanCode) {
      setError('Please enter a 6-letter room code.');
      return;
    }
    setError(null);
    soundService.playClick();

    const res = roomService.joinRoom({
      code: cleanCode,
      playerId: currentUser?.id || `guest_${Date.now()}`,
      playerName: currentUser?.name || 'Guest Player',
      playerAvatar: selectedAvatar
    });

    if (!res.success) {
      soundService.playWrong();
      setError(res.error);
    } else {
      soundService.playCorrect();
      setRoom(res.room);
    }
  };

  const handleLeave = () => {
    soundService.playClick();
    if (room?.code && currentUser?.id) {
      roomService.leaveRoom(room.code, currentUser.id);
    }
    setRoom(null);
    navigateTo('HOME');
  };

  const handleCopy = useCallback(() => {
    if (!room) return;
    soundService.playClick();
    const text = `${room.code}  |  ${roomService.getInviteUrl(room.code)}`;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [room]);

  const handleShare = (channel) => {
    if (!room) return;
    soundService.playClick();
    const url = roomService.getInviteUrl(room.code);
    window.open(channel.getUrl(url, room.code), '_blank');
  };

  // ---------------------------------------------------------------------------
  // STATE 1: Enter Code / Join Form
  // ---------------------------------------------------------------------------
  if (!room) {
    return (
      <div className="flex-1 flex flex-col p-4 justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <button
              type="button"
              onClick={() => { soundService.playClick(); navigateTo('HOME'); }}
              className="p-2 rounded-xl bg-navy-900 border border-white/10 text-slate-400 hover:text-pearl transition"
            >
              <ArrowLeft size={16} />
            </button>
            <div>
              <h2 className="text-base font-cinzel font-bold text-pearl flex items-center gap-2">
                <LogIn size={16} className="text-champGold" /> Join Friend's Room
              </h2>
              <p className="text-[11px] text-slate-400">Play together in a 10-player private arena</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl bg-gradient-to-br from-velvet-900 to-navy-900 border border-champGold/40 p-4 shadow-xl mb-4">
            <label className="text-[10px] text-slate-300 uppercase tracking-widest font-semibold block mb-1">
              Enter 6-Letter Room Code
            </label>
            <input
              type="text"
              maxLength={6}
              value={code}
              onChange={(e) => {
                setCode(e.target.value.toUpperCase());
                if (error) setError(null);
              }}
              placeholder="e.g. 7XKP9Q"
              className="w-full text-center text-2xl font-mono font-black tracking-[0.3em] uppercase bg-navy-950/80 border border-champGold/50 rounded-xl py-3 text-champGold focus:outline-none focus:border-champGold focus:ring-1 focus:ring-champGold mb-3 placeholder:text-slate-600 placeholder:text-base placeholder:tracking-normal"
            />

            {/* Avatar Selection */}
            <label className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold block mb-1.5">
              Choose Your Match Avatar
            </label>
            <div className="grid grid-cols-5 gap-2 mb-4">
              {AVATARS.map((av) => (
                <button
                  key={av}
                  type="button"
                  onClick={() => setSelectedAvatar(av)}
                  className={`text-2xl py-1.5 rounded-xl border transition ${
                    selectedAvatar === av
                      ? 'bg-champGold/20 border-champGold scale-105 shadow'
                      : 'bg-navy-950/50 border-white/5 hover:border-white/20'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>

            {error && (
              <div className="p-2.5 rounded-xl bg-crimsonAlert/20 border border-crimsonAlert/40 text-red-300 text-xs flex items-center gap-2 mb-3">
                <AlertCircle size={14} className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="button"
              onClick={() => handleJoin(code)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-champGold via-champGold-light to-champGold-dark text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition font-rajdhani flex items-center justify-center gap-1.5"
            >
              <LogIn size={15} />
              <span>Enter Room</span>
            </button>
          </div>
        </div>

        {/* Info footer */}
        <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/20 text-center text-[11px] text-blue-200/70">
          💡 Ask your friend for their 6-letter Room Code or tap their WhatsApp / SMS invite link to enter automatically!
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // STATE 2: Waiting in Room
  // ---------------------------------------------------------------------------
  const inviteUrl = roomService.getInviteUrl(room.code);
  const playerCount = room.players.length;
  const isFull = playerCount >= room.maxPlayers;

  return (
    <div className="flex-1 flex flex-col p-4 justify-between overflow-y-auto gap-4">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-sm font-cinzel font-bold text-pearl flex items-center gap-2">
              <Crown size={16} className="text-champGold" /> Room: {room.code}
            </h2>
            <p className="text-[11px] text-slate-400">
              Host: <strong className="text-champGold">{room.hostName}</strong> • {room.division} League
            </p>
          </div>
          <button
            type="button"
            onClick={handleLeave}
            className="p-2 rounded-xl bg-navy-900 border border-white/10 text-slate-400 hover:text-crimsonAlert transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Status / Countdown Banner */}
        {countdown !== null ? (
          <div className="rounded-2xl bg-velvet-900 border border-champGold p-4 text-center shadow-2xl mb-4">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Game begins in</p>
            <span className="text-5xl font-black font-mono text-champGold animate-pulse">
              {countdown}
            </span>
            <p className="text-[11px] text-champGold mt-1 font-semibold">🎮 Get Ready to Compete!</p>
          </div>
        ) : (
          <div className="flex items-center justify-between p-3 rounded-2xl bg-velvet-900/80 border border-champGold/30 mb-4 shadow-lg">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-champGold animate-spin" />
              <div>
                <span className="text-xs font-bold text-pearl block">Waiting for Host</span>
                <span className="text-[10px] text-slate-400">
                  {isFull ? 'Room full! Host starting...' : 'Game starts when host taps Start'}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold bg-champGold/20 text-champGold px-2 py-1 rounded-full border border-champGold/30">
              {playerCount} / {room.maxPlayers}
            </span>
          </div>
        )}

        {/* Players in Room */}
        <div className="rounded-2xl bg-navy-900/80 border border-white/8 p-3 mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-pearl flex items-center gap-1.5 font-cinzel">
              <Users size={13} className="text-champGold" /> Players Joined
            </h3>
            <span className="text-[10px] text-slate-400 font-mono">
              {playerCount}/{room.maxPlayers}
            </span>
          </div>

          <div className="space-y-1.5">
            {room.players.map((p) => (
              <div
                key={p.id}
                className={`flex items-center justify-between px-3 py-2 rounded-xl border ${
                  p.id === currentUser?.id
                    ? 'bg-champGold/10 border-champGold/30'
                    : 'bg-navy-950/50 border-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{p.avatar}</span>
                  <span className="text-xs font-bold text-pearl">{p.name}</span>
                </div>
                <div>
                  {p.isHost && (
                    <span className="text-[9px] bg-champGold/20 text-champGold px-1.5 py-0.5 rounded font-bold">
                      HOST
                    </span>
                  )}
                  {p.id === currentUser?.id && !p.isHost && (
                    <span className="text-[9px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-bold">
                      YOU
                    </span>
                  )}
                </div>
              </div>
            ))}

            {Array.from({ length: room.maxPlayers - playerCount }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-white/10 text-slate-600"
              >
                <span className="text-base opacity-30">👤</span>
                <span className="text-[11px]">Waiting for friend to join…</span>
              </div>
            ))}
          </div>
        </div>

        {/* Share with more friends */}
        <div className="rounded-2xl bg-navy-950/60 border border-white/10 p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
              Invite More Friends
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="text-[10px] text-champGold font-bold flex items-center gap-1"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy Link'}</span>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {SHARE_CHANNELS.map((ch) => (
              <button
                key={ch.key}
                type="button"
                onClick={() => handleShare(ch)}
                className={`flex flex-col items-center gap-1 py-1.5 rounded-xl font-bold text-[10px] transition active:scale-95 ${ch.color}`}
              >
                <span className="text-base">{ch.emoji}</span>
                <span>{ch.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Leave button */}
      <button
        type="button"
        onClick={handleLeave}
        className="w-full py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-400 hover:text-pearl font-bold text-xs border border-white/10 transition"
      >
        Leave Room
      </button>
    </div>
  );
}
