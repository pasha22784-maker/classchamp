/**
 * FriendsCenterModal.jsx
 * PUBG-Style Squad, Social, and Online Friends Hub for BrainLeague.
 * 
 * Tabs:
 * 1. 👥 Friends (Live Online Presence & [+ Invite to Game] PUBG buttons)
 * 2. 🕒 Recent Players (Players you played with in matches & Play Alongs + 1-Tap Add Friend)
 * 3. ➕ Add Friend (Search by Friend Code + Share Your Friend Code)
 * 4. 📬 Requests (Incoming / Outgoing Friend Requests with 1-Tap Accept)
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useGame } from '../../context/GameContext';
import friendService from '../../services/friendService';
import roomService from '../../services/roomService';
import soundService from '../../services/soundService';
import {
  Users,
  UserPlus,
  Clock,
  Inbox,
  X,
  Copy,
  Check,
  Share2,
  Gamepad2,
  Trophy,
  Crown,
  Sparkles,
  ArrowRight,
  UserCheck,
  UserX,
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function FriendsCenterModal({ isOpen, onClose }) {
  const { currentUser } = useAuth();
  const { activeRoom, navigateTo, activeDivision } = useGame();

  const [activeTab, setActiveTab] = useState('friends'); // 'friends' | 'recent' | 'add' | 'requests'
  const [friends, setFriends] = useState([]);
  const [recentPlayers, setRecentPlayers] = useState([]);
  const [incomingRequests, setIncomingRequests] = useState([]);
  const [outgoingRequests, setOutgoingRequests] = useState([]);

  // Add friend by code form state
  const [searchCode, setSearchCode] = useState('');
  const [actionMessage, setActionMessage] = useState(null);
  const [actionError, setActionError] = useState(null);
  const [isCopied, setIsCopied] = useState(false);
  const [invitingId, setInvitingId] = useState(null);

  const myFriendCode = friendService.getFriendCode(currentUser);

  // Load and refresh social data
  const refreshData = () => {
    if (!currentUser?.id) return;
    const fList = friendService.getFriends(currentUser.id);
    const rList = friendService.getRecentPlayers(currentUser.id);
    const inReq = friendService.getIncomingRequests(currentUser.id);
    const outReq = friendService.getOutgoingRequests(currentUser.id);

    setFriends(fList);
    setRecentPlayers(rList);
    setIncomingRequests(inReq);
    setOutgoingRequests(outReq);
  };

  useEffect(() => {
    if (isOpen) {
      refreshData();
      setActionMessage(null);
      setActionError(null);
    }
  }, [isOpen, currentUser]);

  // Periodic refresh when modal is open to update online statuses
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(refreshData, 5000);
    return () => clearInterval(interval);
  }, [isOpen, currentUser]);

  if (!isOpen) return null;

  // Count online friends
  const onlineCount = friends.filter(f => {
    const presence = friendService.getFriendPresence(f);
    return presence.isOnline;
  }).length;

  // Handle Copy Friend Code
  const handleCopyCode = () => {
    soundService.playClick();
    try {
      navigator.clipboard.writeText(myFriendCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // Handle WhatsApp / Web Share
  const handleShareCode = () => {
    soundService.playClick();
    const shareText = `🎮 Play BrainLeague National KBC Quiz with me! Add me as your friend using my Friend Code: *${myFriendCode}* on https://play.bolchaall.com`;
    if (navigator.share) {
      navigator.share({
        title: 'BrainLeague Friend Code',
        text: shareText
      }).catch(() => {});
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
    }
  };

  // Handle Add Friend by Code
  const handleSendRequestByCode = async (codeToSend) => {
    const target = codeToSend || searchCode;
    if (!target) return;
    soundService.playClick();
    setActionMessage(null);
    setActionError(null);

    const result = await friendService.sendFriendRequest(currentUser, target);
    if (result.success) {
      soundService.playCorrect();
      setActionMessage(result.message);
      setSearchCode('');
      refreshData();
    } else {
      soundService.playWrong();
      setActionError(result.error);
    }
  };

  // Handle Accept Friend Request
  const handleAcceptRequest = async (request) => {
    soundService.playCorrect();
    await friendService.acceptFriendRequest(currentUser, request);
    refreshData();
    setActionMessage(`You and ${request.senderName} are now friends! 🤝`);
  };

  // Handle Decline Friend Request
  const handleDeclineRequest = (requestId) => {
    soundService.playClick();
    friendService.declineFriendRequest(currentUser.id, requestId);
    refreshData();
  };

  // Handle PUBG-Style Game Invite
  const handleInviteToGame = async (friend) => {
    soundService.playClick();
    setInvitingId(friend.id);

    try {
      let roomCode = activeRoom?.code;
      // If player is not currently hosting a room, create one automatically
      if (!roomCode) {
        const createdRoom = await roomService.createRoom({
          hostId: currentUser.id,
          hostName: currentUser.name,
          hostAvatar: currentUser.avatar,
          division: currentUser.division || activeDivision || 'Junior'
        });
        roomCode = createdRoom.code;
      }

      await friendService.sendGameInvite({
        fromUser: currentUser,
        toFriend: friend,
        roomCode,
        division: currentUser.division || activeDivision || 'Junior'
      });

      soundService.playCorrect();
      setActionMessage(`🎮 Game invite sent to ${friend.name}! Room: ${roomCode}`);

      // Auto-navigate to Private Room lobby after 1.2s so host is ready
      setTimeout(() => {
        onClose();
        navigateTo('PRIVATE_ROOM');
      }, 1200);
    } catch (e) {
      setActionError("Failed to deliver invite. Please check connection.");
    } finally {
      setInvitingId(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-navy-900 border-2 border-champGold/40 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-pearl">
        
        {/* Header */}
        <div className="px-4 py-3 bg-gradient-to-r from-navy-950 via-velvet-950 to-navy-950 border-b border-champGold/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-champGold/20 border border-champGold/40 flex items-center justify-center text-champGold shadow">
              <Users size={18} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-black text-champGold uppercase font-cinzel tracking-wider flex items-center gap-1.5">
                <span>Squad & Friends Hub</span>
              </h2>
              <p className="text-[10px] text-slate-400 font-rajdhani">
                PUBG-Style Online Presence & 1-Tap Group Game Invites
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-navy-800 hover:bg-navy-700 text-slate-400 hover:text-pearl flex items-center justify-center transition border border-white/10"
          >
            <X size={16} />
          </button>
        </div>

        {/* My Friend Code Banner */}
        <div className="px-4 py-2.5 bg-velvet-950/80 border-b border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 font-semibold">Your Friend Code:</span>
            <span className="px-2 py-0.5 rounded-lg bg-champGold/20 text-champGold font-mono font-black text-xs tracking-wider border border-champGold/40">
              {myFriendCode}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleCopyCode}
              className="px-2.5 py-1 rounded-lg bg-navy-800 hover:bg-navy-700 border border-white/10 text-xs font-bold text-slate-200 hover:text-champGold transition flex items-center gap-1"
              title="Copy your code"
            >
              {isCopied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span className="text-[10px]">{isCopied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              type="button"
              onClick={handleShareCode}
              className="px-2.5 py-1 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition flex items-center gap-1"
              title="Share via WhatsApp"
            >
              <Share2 size={12} />
              <span className="text-[10px]">Share</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-navy-950/60 p-1 gap-1">
          <button
            type="button"
            onClick={() => { soundService.playClick(); setActiveTab('friends'); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 font-rajdhani uppercase tracking-wider ${
              activeTab === 'friends'
                ? 'bg-gradient-to-r from-amber-500/20 via-champGold/30 to-amber-500/20 border border-champGold/60 text-champGold shadow'
                : 'text-slate-400 hover:text-pearl'
            }`}
          >
            <Users size={13} />
            <span>Friends</span>
            {onlineCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-500 text-navy-950 text-[9px] font-black animate-pulse">
                {onlineCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => { soundService.playClick(); setActiveTab('recent'); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 font-rajdhani uppercase tracking-wider ${
              activeTab === 'recent'
                ? 'bg-gradient-to-r from-amber-500/20 via-champGold/30 to-amber-500/20 border border-champGold/60 text-champGold shadow'
                : 'text-slate-400 hover:text-pearl'
            }`}
          >
            <Clock size={13} />
            <span>Recent</span>
            {recentPlayers.length > 0 && (
              <span className="text-[10px] text-slate-400">({recentPlayers.length})</span>
            )}
          </button>

          <button
            type="button"
            onClick={() => { soundService.playClick(); setActiveTab('add'); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 font-rajdhani uppercase tracking-wider ${
              activeTab === 'add'
                ? 'bg-gradient-to-r from-amber-500/20 via-champGold/30 to-amber-500/20 border border-champGold/60 text-champGold shadow'
                : 'text-slate-400 hover:text-pearl'
            }`}
          >
            <UserPlus size={13} />
            <span>Add Friend</span>
          </button>

          <button
            type="button"
            onClick={() => { soundService.playClick(); setActiveTab('requests'); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 font-rajdhani uppercase tracking-wider ${
              activeTab === 'requests'
                ? 'bg-gradient-to-r from-amber-500/20 via-champGold/30 to-amber-500/20 border border-champGold/60 text-champGold shadow'
                : 'text-slate-400 hover:text-pearl'
            }`}
          >
            <Inbox size={13} />
            <span>Requests</span>
            {incomingRequests.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-champGold text-navy-950 text-[9px] font-black">
                {incomingRequests.length}
              </span>
            )}
          </button>
        </div>

        {/* Global Feedback Banner */}
        {actionMessage && (
          <div className="mx-4 mt-3 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 size={15} className="shrink-0" />
            <span className="font-semibold">{actionMessage}</span>
          </div>
        )}
        {actionError && (
          <div className="mx-4 mt-3 p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-2 animate-fadeIn">
            <AlertCircle size={15} className="shrink-0" />
            <span className="font-semibold">{actionError}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          
          {/* ========================================================= */}
          {/* TAB 1: FRIENDS (ONLINE / OFFLINE + PUBG INVITE)          */}
          {/* ========================================================= */}
          {activeTab === 'friends' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                <span>All Friends ({friends.length})</span>
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span>{onlineCount} Online Right Now</span>
                </span>
              </div>

              {friends.length === 0 ? (
                <div className="p-8 text-center bg-navy-950/50 rounded-2xl border border-white/5 space-y-2">
                  <Users size={32} className="mx-auto text-slate-500" />
                  <p className="text-sm font-bold text-slate-300">No Friends Added Yet</p>
                  <p className="text-xs text-slate-500">
                    Add friends by entering their Friend Code or add people you recently played with!
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('add')}
                    className="mt-2 px-4 py-1.5 rounded-xl bg-champGold/20 hover:bg-champGold/30 text-champGold border border-champGold/40 text-xs font-bold transition"
                  >
                    + Add Friends Now
                  </button>
                </div>
              ) : (
                friends.map((friend) => {
                  const presence = friendService.getFriendPresence(friend);
                  const isOnline = presence.isOnline;

                  return (
                    <div
                      key={friend.id}
                      className="p-3 rounded-2xl bg-navy-950/70 border border-white/10 hover:border-champGold/30 flex items-center justify-between gap-3 transition"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Avatar with PUBG-style glowing presence dot */}
                        <div className="relative shrink-0">
                          <div className="w-11 h-11 rounded-2xl bg-navy-800 border border-white/10 flex items-center justify-center text-xl shadow">
                            {friend.avatar || '👦'}
                          </div>
                          <span
                            className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-navy-900 shadow-md ${
                              presence.status === 'IN_MATCH'
                                ? 'bg-amber-400'
                                : isOnline
                                  ? 'bg-emerald-500 animate-pulse'
                                  : 'bg-slate-600'
                            }`}
                            title={presence.label}
                          />
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs sm:text-sm font-bold text-pearl truncate">
                              {friend.name}
                            </span>
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-white/5 text-champGold font-bold">
                              {friend.friendCode || 'BL-FRIEND'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                            <span className={isOnline ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                              ● {presence.label}
                            </span>
                            <span>•</span>
                            <span>{friend.division || 'Junior'}</span>
                            {friend.city && (
                              <>
                                <span>•</span>
                                <span>{friend.city}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* PUBG "+ Invite" Team Up Action Button */}
                      <div className="shrink-0 flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleInviteToGame(friend)}
                          disabled={invitingId === friend.id}
                          className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition font-rajdhani uppercase tracking-wider shadow ${
                            isOnline
                              ? 'bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 hover:brightness-110 active:scale-95'
                              : 'bg-navy-800 text-slate-400 hover:text-pearl border border-white/10'
                          }`}
                        >
                          <Gamepad2 size={13} />
                          <span>{invitingId === friend.id ? 'Inviting...' : '+ Invite'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 2: RECENT PLAYERS (PLAY ALONG & CONTENDERS)          */}
          {/* ========================================================= */}
          {activeTab === 'recent' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                <span>Players Played With Recently ({recentPlayers.length})</span>
                <span className="text-[10px] text-champGold">Fastest Finger & Play Alongs</span>
              </div>

              {recentPlayers.length === 0 ? (
                <div className="p-8 text-center bg-navy-950/50 rounded-2xl border border-white/5 space-y-2">
                  <Clock size={32} className="mx-auto text-slate-500" />
                  <p className="text-sm font-bold text-slate-300">No Recent Games Yet</p>
                  <p className="text-xs text-slate-500">
                    Play a match, join a group game, or participate in "Play Along" to connect with fellow players!
                  </p>
                </div>
              ) : (
                recentPlayers.map((player) => {
                  const isAlreadyFriend = friends.some(f => f.id === player.id || f.friendCode === player.friendCode);

                  return (
                    <div
                      key={player.id + (player.playedAt || '')}
                      className="p-3 rounded-2xl bg-navy-950/70 border border-white/10 hover:border-champGold/30 flex items-center justify-between gap-3 transition"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-2xl bg-navy-800 border border-white/10 flex items-center justify-center text-lg shrink-0">
                          {player.avatar || '🌟'}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs sm:text-sm font-bold text-pearl truncate">
                              {player.name}
                            </span>
                            <span className="text-[9px] font-mono text-champGold bg-champGold/10 px-1 rounded">
                              {player.friendCode}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-0.5">
                            <span className="text-champGold/90 font-medium">{player.context || 'Played Together'}</span>
                            <span>•</span>
                            <span>{player.division || 'Junior'}</span>
                            {player.city && (
                              <>
                                <span>•</span>
                                <span>{player.city}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Add Friend Button */}
                      <div className="shrink-0">
                        {isAlreadyFriend ? (
                          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold text-[11px] flex items-center gap-1">
                            <Check size={12} />
                            <span>Friends</span>
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleSendRequestByCode(player.friendCode || player.id)}
                            className="px-3 py-1.5 rounded-xl bg-navy-800 hover:bg-champGold/20 border border-white/10 hover:border-champGold/50 text-slate-200 hover:text-champGold font-bold text-xs flex items-center gap-1 transition active:scale-95"
                          >
                            <UserPlus size={13} />
                            <span>Add Friend</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 3: ADD FRIEND (BY FRIEND CODE)                       */}
          {/* ========================================================= */}
          {activeTab === 'add' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-velvet-950 via-navy-950 to-velvet-950 border border-champGold/30 text-center space-y-2">
                <span className="text-xs text-champGold font-bold uppercase font-cinzel">
                  Share Your Code with Classmates & Friends
                </span>
                <div className="text-xl sm:text-2xl font-black font-mono tracking-widest text-pearl">
                  {myFriendCode}
                </div>
                <div className="flex justify-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="px-3 py-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-white/10 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition"
                  >
                    {isCopied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    <span>{isCopied ? 'Code Copied!' : 'Copy Code'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleShareCode}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <Share2 size={13} />
                    <span>Share on WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Input Form */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider font-rajdhani block">
                  Enter Friend's Code:
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchCode}
                      onChange={(e) => setSearchCode(e.target.value.toUpperCase())}
                      placeholder="e.g. BL-7842"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-navy-950 border border-white/15 focus:border-champGold text-pearl font-mono uppercase text-sm tracking-wider outline-none"
                    />
                    <Search size={15} className="absolute left-3 top-3.5 text-slate-500" />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSendRequestByCode()}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-champGold text-navy-950 font-bold text-xs uppercase font-rajdhani tracking-wider hover:brightness-110 active:scale-95 transition shadow shrink-0"
                  >
                    Send Request
                  </button>
                </div>
              </div>

              {/* Quick Sample Friends to Connect */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] text-slate-400 font-semibold block">
                  Quick Connect (Active Quiz Friends):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { name: 'Aarav Sharma', code: 'BL-AARAV', avatar: '👦', div: 'Junior' },
                    { name: 'Ananya Gupta', code: 'BL-ANANYA', avatar: '👧', div: 'Senior' }
                  ].map((s) => (
                    <button
                      key={s.code}
                      type="button"
                      onClick={() => handleSendRequestByCode(s.code)}
                      className="p-2.5 rounded-xl bg-navy-950/60 hover:bg-navy-800 border border-white/5 hover:border-champGold/30 flex items-center justify-between text-left transition"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">{s.avatar}</span>
                        <div>
                          <span className="text-xs font-bold text-pearl block leading-tight">{s.name}</span>
                          <span className="text-[10px] font-mono text-champGold">{s.code}</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-champGold font-bold">+ Add</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* TAB 4: REQUESTS (INCOMING & OUTGOING)                    */}
          {/* ========================================================= */}
          {activeTab === 'requests' && (
            <div className="space-y-4">
              {/* Incoming Requests */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-champGold uppercase font-rajdhani tracking-wider block">
                  Incoming Friend Requests ({incomingRequests.length})
                </span>

                {incomingRequests.length === 0 ? (
                  <p className="text-xs text-slate-500 p-4 bg-navy-950/40 rounded-xl text-center">
                    No pending incoming requests.
                  </p>
                ) : (
                  incomingRequests.map((req) => (
                    <div
                      key={req.requestId}
                      className="p-3 rounded-2xl bg-navy-950 border border-champGold/30 flex items-center justify-between gap-2 shadow"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-lg">
                          {req.senderAvatar || '🎮'}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-pearl block">{req.senderName}</span>
                          <span className="text-[10px] font-mono text-champGold">{req.senderCode}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleAcceptRequest(req)}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 transition shadow"
                        >
                          <Check size={12} />
                          <span>Accept</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeclineRequest(req.requestId)}
                          className="px-2.5 py-1.5 rounded-xl bg-navy-800 hover:bg-rose-900/40 text-slate-400 hover:text-rose-300 font-bold text-xs transition"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Outgoing Requests */}
              {outgoingRequests.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-xs font-bold text-slate-400 uppercase font-rajdhani tracking-wider block">
                    Sent Requests ({outgoingRequests.length})
                  </span>
                  {outgoingRequests.map((out) => (
                    <div
                      key={out.requestId}
                      className="p-2.5 rounded-xl bg-navy-950/50 border border-white/5 flex items-center justify-between text-xs"
                    >
                      <span className="text-slate-300">
                        Request to: <strong className="text-champGold font-mono">{out.targetCode}</strong>
                      </span>
                      <span className="text-[10px] text-slate-500">Pending</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 bg-navy-950 border-t border-white/10 text-center">
          <span className="text-[10px] text-slate-500">
            BrainLeague Social Arena • Connect with friends, track Play Along rivals, and squad up anytime!
          </span>
        </div>

      </div>
    </div>
  );
}