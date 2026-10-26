/**
 * ClanScreen.jsx
 * Full Study Clans & Guilds System.
 * - Single clan membership per player (must be signed in to create/join).
 * - Unique Clan ID generation (e.g. CLAN-8K9P) for searching and sharing.
 * - Live Clan average ranking dynamically calculated from all member games.
 * - Clan recruitment sharing via WhatsApp, SMS, and direct code.
 */

import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import storageService from '../services/storageService';
import soundService from '../services/soundService';
import {
  Shield,
  Users,
  Trophy,
  Crown,
  Search,
  PlusCircle,
  Copy,
  Check,
  Share2,
  ArrowLeft,
  LogOut,
  Flame,
  Award,
  Sparkles,
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const CLAN_BADGES = ['🛡️', '🦁', '⚡', '🦅', '👑', '🎯', '🔥', '🚀', '🌟', '⚔️', '🧠', '💎'];

export default function ClanScreen() {
  const { currentUser } = useAuth();
  const { navigateTo } = useGame();

  const [clans, setClans] = useState(() => storageService.getClans());
  const [activeTab, setActiveTab] = useState('browse'); // 'browse' | 'create'
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Create Clan Form State
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [selectedBadge, setSelectedBadge] = useState('🛡️');

  // Find user's current clan
  const myClan = useMemo(() => {
    if (!currentUser?.id) return null;
    return clans.find(c => c.members && c.members.some(m => m.id === currentUser.id)) || null;
  }, [clans, currentUser?.id]);

  // Refresh clans from storage
  const refreshClans = () => {
    setClans(storageService.getClans());
  };

  const handleCopyId = (code) => {
    soundService.playClick();
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareClan = (clan) => {
    soundService.playClick();
    const text = encodeURIComponent(
      `🛡️ Join my Clan *${clan.name}* in BrainLeague!\n\nUnique Clan ID: *${clan.code}*\nClan Average Rating: ${clan.averageTrophies} 🏆\n\nSearch this Clan ID inside BrainLeague to team up with us!`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleCreateClan = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setStatusMessage(null);

    if (!currentUser) {
      soundService.playWrong();
      setErrorMessage('You must be signed in to create a clan.');
      return;
    }

    if (!newName.trim()) {
      soundService.playWrong();
      setErrorMessage('Please enter a clan name.');
      return;
    }

    soundService.playClick();
    const res = storageService.createClan({
      name: newName,
      description: newDesc,
      badge: selectedBadge,
      leaderId: currentUser.id,
      leaderName: currentUser.name,
      leaderAvatar: currentUser.avatar || '👑',
      leaderTrophies: currentUser.trophies || 200
    });

    if (!res.success) {
      soundService.playWrong();
      setErrorMessage(res.error);
    } else {
      soundService.playCorrect();
      setStatusMessage(`Clan "${res.clan.name}" created! Unique ID: ${res.clan.code}`);
      setNewName('');
      setNewDesc('');
      refreshClans();
    }
  };

  const handleJoinClan = (clanIdOrCode) => {
    setErrorMessage(null);
    setStatusMessage(null);

    if (!currentUser) {
      soundService.playWrong();
      setErrorMessage('Please sign in first to join a clan.');
      return;
    }

    soundService.playClick();
    const res = storageService.joinClan(clanIdOrCode, currentUser);

    if (!res.success) {
      soundService.playWrong();
      setErrorMessage(res.error);
    } else {
      soundService.playCorrect();
      setStatusMessage(`Joined "${res.clan.name}" successfully!`);
      refreshClans();
    }
  };

  const handleLeaveClan = (clan) => {
    if (!currentUser) return;
    const confirmLeave = window.confirm(
      `Are you sure you want to leave "${clan.name}"?\nYour trophies will no longer contribute to the clan's average rating.`
    );
    if (!confirmLeave) return;

    soundService.playClick();
    const res = storageService.leaveClan(clan.id, currentUser.id);

    if (res.success) {
      soundService.playCorrect();
      setStatusMessage(res.disbanded ? 'Clan disbanded.' : `Left "${clan.name}".`);
      refreshClans();
    } else {
      soundService.playWrong();
      setErrorMessage(res.error);
    }
  };

  // Filtered clans for browsing
  const filteredClans = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = [...clans].sort((a, b) => (b.averageTrophies || 0) - (a.averageTrophies || 0));
    if (!q) return list;
    return list.filter(
      c => c.name.toLowerCase().includes(q) ||
           c.code.toLowerCase().includes(q) ||
           c.description?.toLowerCase().includes(q)
    );
  }, [clans, searchQuery]);

  return (
    <div className="flex-1 flex flex-col p-4 overflow-y-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => { soundService.playClick(); navigateTo('HOME'); }}
            className="p-2 rounded-xl bg-navy-900 border border-white/10 text-slate-400 hover:text-pearl transition"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <h1 className="text-base font-cinzel font-bold text-pearl flex items-center gap-2">
              <Shield size={16} className="text-champGold" /> Study Clans & Guilds
            </h1>
            <p className="text-[11px] text-slate-400">Team up, compete as a clan & climb the national rankings</p>
          </div>
        </div>
      </div>

      {/* Global Notifications */}
      {statusMessage && (
        <div className="p-2.5 rounded-xl bg-emeraldGlow/15 border border-emeraldGlow/40 text-emeraldGlow-light text-xs flex items-center gap-2 mb-3 animate-fadeIn">
          <CheckCircle2 size={15} />
          <span>{statusMessage}</span>
        </div>
      )}
      {errorMessage && (
        <div className="p-2.5 rounded-xl bg-crimsonAlert/15 border border-crimsonAlert/40 text-red-300 text-xs flex items-center gap-2 mb-3 animate-fadeIn">
          <AlertCircle size={15} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* CASE A: USER IS IN A CLAN                                          */}
      {/* ----------------------------------------------------------------- */}
      {myClan ? (
        <div className="space-y-4">
          {/* Hero Clan Banner */}
          <div className="rounded-2xl p-4 bg-gradient-to-br from-velvet-900 via-navy-950 to-velvet-950 border border-champGold/40 shadow-xl relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-velvet-800 border-2 border-champGold flex items-center justify-center text-3xl shadow-lg">
                  {myClan.badge || '🛡️'}
                </div>
                <div>
                  <h2 className="text-base font-bold text-pearl font-cinzel">{myClan.name}</h2>
                  <p className="text-[11px] text-slate-300 mt-0.5 max-w-[240px] line-clamp-2">
                    {myClan.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] bg-champGold/20 text-champGold font-mono font-bold px-2 py-0.5 rounded border border-champGold/30">
                      ID: {myClan.code}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopyId(myClan.code)}
                      className="text-[10px] text-slate-400 hover:text-champGold transition flex items-center gap-1"
                    >
                      {copied ? <Check size={11} className="text-emeraldGlow" /> : <Copy size={11} />}
                      <span>{copied ? 'Copied' : 'Copy ID'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleLeaveClan(myClan)}
                title="Leave Clan"
                className="p-2 rounded-xl bg-navy-950/80 border border-crimsonAlert/30 text-crimsonAlert hover:bg-crimsonAlert/20 transition text-xs flex items-center gap-1"
              >
                <LogOut size={13} />
                <span className="text-[10px] font-bold">Leave</span>
              </button>
            </div>

            {/* Clan Stats Summary Box */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 text-center">
              <div className="p-2 rounded-xl bg-navy-950/70 border border-champGold/30">
                <span className="text-[9px] text-slate-400 uppercase font-semibold block">Average Rating</span>
                <span className="text-sm font-mono font-bold text-champGold flex items-center justify-center gap-1">
                  <Flame size={12} className="text-champGold fill-champGold" />
                  {myClan.averageTrophies || 0} 🏆
                </span>
              </div>
              <div className="p-2 rounded-xl bg-navy-950/70 border border-white/5">
                <span className="text-[9px] text-slate-400 uppercase font-semibold block">Total Trophies</span>
                <span className="text-sm font-mono font-bold text-pearl">
                  {(myClan.totalTrophies || 0).toLocaleString()}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-navy-950/70 border border-white/5">
                <span className="text-[9px] text-slate-400 uppercase font-semibold block">Members</span>
                <span className="text-sm font-mono font-bold text-emeraldGlow-light">
                  {myClan.members?.length || 1}/30
                </span>
              </div>
            </div>

            <div className="mt-2.5 text-center text-[10px] text-slate-400 font-medium">
              📈 Average Rating updates automatically whenever any member wins or loses matches!
            </div>
          </div>

          {/* Recruit Friends / Share Clan Card */}
          <div className="p-3 rounded-2xl bg-navy-900/90 border border-blue-500/30 flex items-center justify-between gap-2 shadow">
            <div>
              <span className="text-xs font-bold text-pearl block font-cinzel">Recruit Clan Members</span>
              <span className="text-[10px] text-slate-400">Share your Clan ID on WhatsApp to invite teammates</span>
            </div>
            <button
              type="button"
              onClick={() => handleShareClan(myClan)}
              className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-navy-950 font-bold text-xs flex items-center gap-1.5 shadow active:scale-95 transition font-rajdhani uppercase tracking-wider"
            >
              <Share2 size={13} />
              <span>Invite</span>
            </button>
          </div>

          {/* Member Roster */}
          <div className="rounded-2xl bg-navy-900/80 border border-white/8 p-3">
            <div className="flex items-center justify-between mb-2 px-1">
              <h3 className="text-xs font-bold text-pearl flex items-center gap-1.5 font-cinzel">
                <Users size={13} className="text-champGold" /> Clan Roster ({myClan.members?.length || 1})
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">Ranked by Trophies</span>
            </div>

            <div className="space-y-1.5">
              {[...myClan.members]
                .sort((a, b) => (b.trophies || 0) - (a.trophies || 0))
                .map((member, idx) => (
                  <div
                    key={member.id}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs ${
                      member.id === currentUser?.id
                        ? 'bg-champGold/15 border-champGold/40 text-champGold'
                        : 'bg-navy-950/60 border-white/5 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-5 text-center font-bold font-mono ${idx < 3 ? 'text-champGold' : 'text-slate-500'}`}>
                        #{idx + 1}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-velvet-800 border border-white/10 flex items-center justify-center text-sm">
                        {member.avatar || '⭐'}
                      </div>
                      <div>
                        <div className="font-semibold text-pearl flex items-center gap-1.5">
                          <span>{member.name}</span>
                          {member.role === 'Leader' && (
                            <span className="text-[9px] bg-champGold/20 text-champGold font-bold px-1 rounded flex items-center gap-0.5">
                              <Crown size={9} /> LEADER
                            </span>
                          )}
                          {member.id === currentUser?.id && (
                            <span className="text-[9px] bg-blue-500/20 text-blue-300 font-bold px-1 rounded">
                              YOU
                            </span>
                          )}
                        </div>
                        <span className="text-[9px] text-slate-400">
                          {member.gamesPlayed || 0} games played
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-mono font-bold text-pearl block">
                        {member.trophies || 0} 🏆
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        /* ----------------------------------------------------------------- */
        /* CASE B: USER IS NOT IN A CLAN -> BROWSE OR CREATE                 */
        /* ----------------------------------------------------------------- */
        <div>
          {/* Tabs */}
          <div className="flex bg-navy-950 p-1 rounded-xl border border-white/10 mb-4">
            <button
              type="button"
              onClick={() => { soundService.playClick(); setActiveTab('browse'); }}
              className={`flex-1 py-2 rounded-lg text-xs font-bold font-rajdhani uppercase tracking-wider transition flex items-center justify-center gap-1.5 ${
                activeTab === 'browse'
                  ? 'bg-gradient-to-r from-velvet-800 to-navy-800 text-champGold shadow'
                  : 'text-slate-400 hover:text-pearl'
              }`}
            >
              <Search size={14} />
              <span>Browse Clans ({clans.length})</span>
            </button>

            <button
              type="button"
              onClick={() => { soundService.playClick(); setActiveTab('create'); }}
              className={`flex-1 py-2 rounded-lg text-xs font-bold font-rajdhani uppercase tracking-wider transition flex items-center justify-center gap-1.5 ${
                activeTab === 'create'
                  ? 'bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 shadow'
                  : 'text-slate-400 hover:text-pearl'
              }`}
            >
              <PlusCircle size={14} />
              <span>Create New Clan</span>
            </button>
          </div>

          {/* TAB 1: BROWSE CLANS */}
          {activeTab === 'browse' && (
            <div className="space-y-3">
              {/* Search Bar */}
              <div className="relative">
                <Search size={15} className="absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by Clan Name or Clan ID (e.g. CLAN-DPS9)..."
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-navy-900 border border-white/10 text-xs text-pearl placeholder:text-slate-500 focus:outline-none focus:border-champGold"
                />
              </div>

              {/* Clans List */}
              <div className="space-y-2">
                {filteredClans.map((clan, idx) => (
                  <div
                    key={clan.id}
                    className="p-3 rounded-2xl bg-navy-900/80 border border-white/10 hover:border-champGold/30 transition shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-velvet-800 border border-champGold/40 flex items-center justify-center text-xl shadow">
                          {clan.badge || '🛡️'}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-pearl font-cinzel">{clan.name}</span>
                            <span className="text-[9px] bg-champGold/15 text-champGold font-mono font-bold px-1.5 py-0.2 rounded">
                              {clan.code}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 block line-clamp-1">
                            {clan.description || 'Knowledge clan'}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-mono font-bold text-champGold block">
                          {clan.averageTrophies || 0} Avg 🏆
                        </span>
                        <span className="text-[9px] text-slate-400">
                          {clan.members?.length || 0}/30 Members
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5">
                      <div className="text-[10px] text-slate-400">
                        Leader: <strong className="text-pearl">{clan.leaderName}</strong> • {clan.gamesPlayed || 0} games
                      </div>
                      <button
                        type="button"
                        onClick={() => handleJoinClan(clan.id)}
                        className="py-1 px-3 rounded-lg bg-emeraldGlow hover:brightness-110 text-navy-950 font-bold text-[10px] uppercase font-rajdhani tracking-wider transition shadow"
                      >
                        Join Clan
                      </button>
                    </div>
                  </div>
                ))}

                {filteredClans.length === 0 && (
                  <div className="p-6 text-center rounded-2xl bg-navy-950/60 border border-white/5">
                    <p className="text-xs text-slate-400">No clans found matching "{searchQuery}".</p>
                    <p className="text-[11px] text-champGold mt-1">Be the first to create one!</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: CREATE CLAN */}
          {activeTab === 'create' && (
            <form onSubmit={handleCreateClan} className="rounded-2xl p-4 bg-navy-900/80 border border-champGold/30 shadow-xl space-y-3">
              <div>
                <label className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold block mb-1">
                  Clan Name
                </label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. Cambridge Quiz Guild"
                  maxLength={30}
                  required
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold block mb-1">
                  Clan Motto / Description
                </label>
                <textarea
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Describe your clan's goals, team spirit, or school/college..."
                  rows={2}
                  maxLength={120}
                  className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
                />
              </div>

              {/* Clan Badge Selector */}
              <div>
                <label className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold block mb-1.5">
                  Select Clan Insignia Badge
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {CLAN_BADGES.map(badge => (
                    <button
                      key={badge}
                      type="button"
                      onClick={() => setSelectedBadge(badge)}
                      className={`text-xl py-2 rounded-xl border transition ${
                        selectedBadge === badge
                          ? 'bg-champGold/20 border-champGold scale-105 shadow'
                          : 'bg-navy-950/50 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {badge}
                    </button>
                  ))}
                </div>
              </div>

              {/* Unique ID Preview Note */}
              <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-[11px] text-blue-200/80 flex items-start gap-2">
                <Info size={14} className="flex-shrink-0 mt-0.5 text-blue-400" />
                <span>
                  A unique <strong>Clan ID (e.g. CLAN-XXXX)</strong> will automatically be generated for your clan upon creation so friends can easily search and join.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-champGold via-champGold-light to-champGold-dark text-navy-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition font-rajdhani"
              >
                Create Clan & Generate Unique ID
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
