/**
 * PrivateRoomScreen.jsx
 * Host view: Create a private room, share invite link, see who has joined,
 * and start the game when ready (or auto-start when full).
 * Enhanced with real-time cloud relay sync across different mobile devices.
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import roomService from '../services/roomService';
import soundService from '../services/soundService';
import {
  Copy,
  Check,
  Users,
  Crown,
  Play,
  X,
  Share2,
  MessageCircle,
  Link2,
  ChevronRight,
  Wifi,
  WifiOff,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const SHARE_CHANNELS = [
  {
    key: 'native',
    label: 'All Apps',
    emoji: '📲',
    color: 'bg-gradient-to-r from-champGold via-champGold-light to-champGold-dark text-navy-950 font-black',
    getUrl: () => '#',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    emoji: '💬',
    color: 'bg-[#25D366] hover:bg-[#20ba59] text-[#003d20]',
    getUrl: (url, code) =>
      `https://wa.me/?text=${encodeURIComponent(`🎮 Join my BrainLeague private game!\n\nRoom Code: *${code}*\nJoin here 👉 ${url}\n\nMax 10 players • Fastest Finger First • Hot-Seat Arena!`)}`,
  },
  {
    key: 'sms',
    label: 'Message',
    emoji: '📱',
    color: 'bg-emeraldGlow hover:brightness-110 text-navy-950',
    getUrl: (url, code) =>
      `sms:?&body=${encodeURIComponent(`Join my BrainLeague game! Code: ${code} | Link: ${url}`)}`,
  },
  {
    key: 'telegram',
    label: 'Telegram',
    emoji: '✈️',
    color: 'bg-[#229ED9] hover:bg-[#1a87c0] text-white',
    getUrl: (url, code) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`🎮 Join my BrainLeague Hot-Seat! Room Code: ${code}`)}`,
  },
];

const AVATARS = ['🎮','🦁','🚀','⭐','🔥','🧠','🏆','⚡','💎','🎯'];

export default function PrivateRoomScreen() {
  const { currentUser } = useAuth();
  const { navigateTo, activeDivision, startPrivateMatch } = useGame();

  const [room, setRoom]           = useState(null);
  const [copied, setCopied]       = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [maxPlayers, setMaxPlayers] = useState(10);
  const [creating, setCreating]   = useState(true);

  // ── Create or restore room on mount ──────────────────────────────────
  useEffect(() => {
    let mounted = true;
    async function initRoom() {
      if (!currentUser) return;
      setCreating(true);
      try {
        const newRoom = await roomService.createRoom({
          hostId:      currentUser.id,
          hostName:    currentUser.name,
          hostAvatar:  currentUser.avatar || AVATARS[Math.floor(Math.random() * AVATARS.length)],
          division:    activeDivision,
          maxPlayers
        });
        if (mounted) {
          setRoom(newRoom);
          setCreating(false);
        }
      } catch (e) {
        console.error('Failed to create room:', e);
        if (mounted) setCreating(false);
      }
    }
    initRoom();
    return () => { mounted = false; };
  }, [currentUser, activeDivision, maxPlayers]);

  // ── Subscribe to real-time cloud + websocket room updates ─────────────
  useEffect(() => {
    if (!room?.code) return;
    const unsub = roomService.subscribe(room.code, (updated) => {
      if (updated && updated.code === room.code) {
        setRoom(updated);
      }
    });
    return unsub;
  }, [room?.code]);

  // ── Countdown to auto-start ────────────────────────────────────────────
  useEffect(() => {
    if (!room?.startCountdown) { setCountdown(null); return; }

    const tick = setInterval(() => {
      const left = Math.ceil((room.startCountdown - Date.now()) / 1000);
      if (left <= 0) {
        clearInterval(tick);
        setCountdown(0);
        roomService.markStarted(room.code);
        startPrivateMatch(room);
      } else {
        setCountdown(left);
      }
    }, 200);
    return () => clearInterval(tick);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room?.startCountdown]);

  // NOTE: We intentionally DO NOT dissolve the room on component unmount
  // so that when the host switches to WhatsApp to share, the room stays alive!

  // ── Handlers ───────────────────────────────────────────────────────────
  const handleCopy = useCallback(() => {
    if (!room) return;
    soundService.playClick();
    const text = `${room.code}  |  ${roomService.getInviteUrl(room.code)}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [room]);

  const handleShare = async (channel) => {
    if (!room) return;
    soundService.playClick();
    const url = roomService.getInviteUrl(room.code);
    const shareText = `🎮 Join my BrainLeague private game!\n\nRoom Code: *${room.code}*\nJoin here 👉 ${url}\n\nMax 10 players • Fastest Finger First • Hot-Seat Arena!`;

    // If native share clicked or supported
    if (channel?.key === 'native' || (!channel && typeof navigator !== 'undefined' && navigator.share)) {
      if (typeof navigator !== 'undefined' && navigator.share) {
        try {
          await navigator.share({
            title: 'BrainLeague Private Match',
            text: shareText,
            url: url
          });
          return;
        } catch (err) {
          if (err.name === 'AbortError') return; // User closed sheet
        }
      }
    }

    if (channel && channel.getUrl) {
      const shareUrl = channel.getUrl(url, room.code);
      if (shareUrl && shareUrl !== '#') {
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const handleForceStart = async () => {
    if (!room || room.players.length < 2) return;
    soundService.playClick();
    const updated = await roomService.startRoom(room.code, currentUser.id);
    if (updated) setRoom(updated);
  };

  const handleKick = async (playerId) => {
    if (!room) return;
    soundService.playClick();
    const updated = await roomService.kickPlayer(room.code, currentUser.id, playerId);
    if (updated) setRoom(updated);
  };

  const handleLeave = async () => {
    soundService.playClick();
    if (room?.code && currentUser?.id) {
      await roomService.leaveRoom(room.code, currentUser.id);
    }
    navigateTo('HOME');
  };

  if (creating || !room) {
    return (
      <div className="flex-1 flex items-center justify-center flex-col gap-3">
        <div className="w-10 h-10 rounded-full border-4 border-champGold border-t-transparent animate-spin" />
        <p className="text-slate-400 text-sm">Connecting to game server…</p>
      </div>
    );
  }

  const inviteUrl   = roomService.getInviteUrl(room.code);
  const playerCount = room.players.length;
  const isFull      = playerCount >= room.maxPlayers;
  const canStart    = playerCount >= 2 && room.status === 'waiting';

  return (
    <div className="flex-1 flex flex-col overflow-y-auto p-4 gap-4">

      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-cinzel font-bold text-pearl tracking-wider flex items-center gap-2">
            <Crown size={16} className="text-champGold" /> Private Game Room
          </h2>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[11px] text-slate-400">{activeDivision} League • Up to {room.maxPlayers} Players</span>
            <span className="inline-flex items-center gap-1 text-[9px] text-emeraldGlow-light bg-emeraldGlow/10 px-1.5 py-0.5 rounded-full border border-emeraldGlow/30 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emeraldGlow animate-ping" />
              LIVE SYNC
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLeave}
          className="p-2 rounded-xl bg-navy-900 border border-white/10 text-slate-400 hover:text-crimsonAlert transition"
          title="Leave Room"
        >
          <X size={16} />
        </button>
      </div>

      {/* ── Room Code Card ── */}
      <div className="rounded-2xl bg-gradient-to-br from-velvet-900 to-navy-900 border border-champGold/40 p-4 shadow-xl">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1 text-center">Room Code</p>
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-3xl font-black font-mono tracking-[0.25em] text-champGold drop-shadow-lg">
            {room.code}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className={`p-2 rounded-xl border transition ${copied ? 'bg-emeraldGlow/20 border-emeraldGlow text-emeraldGlow' : 'bg-navy-950/60 border-white/10 text-slate-400 hover:text-pearl'}`}
            title="Copy Code & Link"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>

        {/* Invite link (truncated) */}
        <div className="flex items-center gap-2 bg-navy-950/60 border border-white/10 rounded-xl px-3 py-2 mb-3">
          <Link2 size={13} className="text-slate-500 flex-shrink-0" />
          <span className="text-[10px] text-slate-400 truncate flex-1">{inviteUrl}</span>
          <button type="button" onClick={handleCopy} className="flex-shrink-0 text-[10px] text-champGold font-bold">
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        {/* Share Buttons */}
        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-2 text-center">
          Share Invite With Friends
        </p>
        <div className="grid grid-cols-4 gap-2">
          {SHARE_CHANNELS.map(ch => (
            <button
              key={ch.key}
              type="button"
              onClick={() => handleShare(ch)}
              className={`flex flex-col items-center gap-1 py-2 rounded-xl font-bold text-[10px] shadow transition active:scale-95 ${ch.color}`}
            >
              <span className="text-lg">{ch.emoji}</span>
              <span>{ch.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Player List ── */}
      <div className="rounded-2xl bg-navy-900/80 border border-white/8 p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold text-pearl flex items-center gap-1.5 font-cinzel">
            <Users size={13} className="text-champGold" />
            Players Joined
          </h3>
          <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-full border ${
            isFull ? 'text-emeraldGlow border-emeraldGlow bg-emeraldGlow/10' : 'text-slate-400 border-white/10 bg-navy-950/60'
          }`}>
            {playerCount} / {room.maxPlayers}
          </span>
        </div>

        {/* Player slots */}
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
                <div>
                  <span className="text-xs font-bold text-pearl">{p.name}</span>
                  {p.isHost && (
                    <span className="ml-1.5 text-[9px] bg-champGold/20 text-champGold px-1 py-0.5 rounded font-bold">HOST</span>
                  )}
                  {p.id === currentUser?.id && !p.isHost && (
                    <span className="ml-1.5 text-[9px] bg-blue-500/20 text-blue-300 px-1 py-0.5 rounded font-bold">YOU</span>
                  )}
                </div>
              </div>
              {/* Host can kick other players */}
              {room.hostId === currentUser?.id && p.id !== currentUser?.id && room.status === 'waiting' && (
                <button
                  type="button"
                  onClick={() => handleKick(p.id)}
                  className="text-slate-500 hover:text-crimsonAlert transition p-1"
                  title="Remove Player"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          ))}

          {/* Empty slots */}
          {Array.from({ length: Math.max(0, room.maxPlayers - playerCount) }).map((_, i) => (
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

      {/* ── Countdown or Start Button ── */}
      {countdown !== null ? (
        <div className="rounded-2xl bg-velvet-900 border border-champGold/50 p-4 text-center shadow-xl">
          <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider">Game starts in</p>
          <span className="text-5xl font-black font-mono text-champGold animate-pulse">
            {countdown}
          </span>
          <p className="text-[11px] text-slate-400 mt-1">🎮 Get Ready!</p>
        </div>
      ) : (
        <div className="space-y-2">
          {playerCount < 2 && (
            <div className="p-3 rounded-xl bg-velvet-950/60 border border-yellow-500/20 text-center">
              <p className="text-[11px] text-yellow-400 flex items-center justify-center gap-1.5">
                <WifiOff size={12} /> Share the code with friends to start the match
              </p>
            </div>
          )}

          {canStart && (
            <button
              type="button"
              onClick={handleForceStart}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-champGold via-champGold-light to-champGold-dark text-navy-950 font-black text-sm shadow-xl active:scale-[0.98] transition flex items-center justify-center gap-2 font-rajdhani uppercase tracking-wider"
            >
              <Play size={18} />
              Start Game Now ({playerCount} Players)
              <ChevronRight size={16} />
            </button>
          )}

          {isFull && (
            <p className="text-center text-[11px] text-emeraldGlow-light font-semibold">
              ✓ Room full! Auto-starting in 5 seconds…
            </p>
          )}
        </div>
      )}

      {/* ── How to Join tip ── */}
      <div className="rounded-xl bg-blue-950/40 border border-blue-500/20 p-3 flex gap-2">
        <Wifi size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-[11px] text-blue-200/70 leading-relaxed">
          Friends can join by opening the invite link or entering room code&nbsp;<strong className="text-champGold">{room.code}</strong>&nbsp;in the <strong>Group Game</strong> tab. Real-time sync connects all players automatically.
        </p>
      </div>
    </div>
  );
}
