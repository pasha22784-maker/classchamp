/**
 * LoginScreen.jsx
 * Universal Authentication Portal.
 * Supports credentials login, new player signup, and 1-tap Quick Demo Profiles.
 * Automatically routes admins to Admin Dashboard and players to Arena.
 */

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import soundService from '../services/soundService';
import { ShieldCheck, UserCheck, Sparkles, AlertCircle, Gamepad2, Trophy, Flame } from 'lucide-react';

export default function LoginScreen() {
  const { login, loginAsGuest, signup } = useAuth();
  const { navigateTo } = useGame();

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [division, setDivision] = useState('Junior');
  const [grade, setGrade] = useState(3);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState('');

  // Guest Player Configuration
  const [guestDivision, setGuestDivision] = useState('Junior');
  const [guestGrade, setGuestGrade] = useState(3);
  const [guestNickname, setGuestNickname] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    soundService.playClick();

    if (isSignup) {
      if (!name || !email || !password) {
        setError('Please fill all required fields.');
        return;
      }
      const res = await signup({
        name,
        email,
        password,
        division,
        grade: (division === 'Junior' || division === 'Senior') ? Number(grade) : 13,
        city,
        state
      });
      if (!res.success) {
        setError(res.error);
      } else {
        navigateTo('HOME');
      }
    } else {
      if (!email || !password) {
        setError('Please enter both email and password.');
        return;
      }
      const res = await login(email, password);
      if (!res.success) {
        setError(res.error);
      } else {
        if (res.user.role === 'admin') {
          navigateTo('ADMIN');
        } else {
          navigateTo('HOME');
        }
      }
    }
  };

  const handlePlayAsGuest = () => {
    soundService.playClick();
    loginAsGuest({
      division: guestDivision,
      grade: (guestDivision === 'Junior' || guestDivision === 'Senior') ? Number(guestGrade) : 13,
      nickname: guestNickname
    });
    navigateTo('HOME');
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-6 py-8">
      {/* Brand Header */}
      <div className="text-center mb-6">
        <div className="inline-block p-3 rounded-2xl bg-gradient-to-tr from-champGold/20 to-velvet-800 border border-champGold/30 shadow-lg mb-3">
          <span className="text-4xl">🏆</span>
        </div>
        <h1 className="text-2xl font-cinzel font-bold text-pearl tracking-wider">
          BrainLeague
        </h1>
        <p className="text-xs text-champGold font-medium mt-1">
          Daily Hot-Seat Quiz & Champions Arena
        </p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          100% Skill-Based • Win Real Medals & Trophies
        </p>
      </div>

      {/* Main Form Card */}
      <div className="glass-panel rounded-2xl p-5 shadow-2xl">
        {/* Tab Switcher */}
        <div className="flex bg-navy-950/70 p-1 rounded-xl mb-4 border border-white/5">
          <button
            type="button"
            onClick={() => { setIsSignup(false); setError(''); }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
              !isSignup ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setIsSignup(true); setError(''); }}
            className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition ${
              isSignup ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Register Player
          </button>
        </div>

        {error && (
          <div className="mb-4 p-2.5 rounded-lg bg-crimsonAlert/10 border border-crimsonAlert/30 text-crimsonAlert text-xs flex items-center gap-2">
            <AlertCircle size={14} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {isSignup && (
            <div>
              <label className="block text-[11px] text-slate-300 font-medium mb-1">Student / Player Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aarav Sharma"
                className="w-full bg-navy-950/90 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-[11px] text-slate-300 font-medium mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. player@brainleague.com"
              className="w-full bg-navy-950/90 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] text-slate-300 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-navy-950/90 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
              required
            />
          </div>

          {isSignup && (
            <>
              <div>
                <label className="block text-[11px] text-slate-300 font-medium mb-1">Select Division (Age Category)</label>
                <select
                  value={division}
                  onChange={(e) => {
                    const newDiv = e.target.value;
                    setDivision(newDiv);
                    if (newDiv === 'Junior' && (grade < 2 || grade > 5)) setGrade(3);
                    if (newDiv === 'Senior' && (grade < 6 || grade > 12)) setGrade(8);
                  }}
                  className="w-full bg-navy-950/90 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
                >
                  <option value="Junior">Junior League (Age 7–10 • Class 2 to 5)</option>
                  <option value="Senior">Senior League (Age 11–17 • Class 6 to 12)</option>
                  <option value="Open">Champions League (18+ • Aspirants & Adults)</option>
                </select>
              </div>

              {division === 'Junior' && (
                <div className="p-2.5 rounded-xl bg-velvet-950/80 border border-champGold/30">
                  <label className="block text-[11px] font-bold text-champGold mb-1">
                    🎒 Junior Student Grade (Class 2 to 5 | Age 7–10)
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(Number(e.target.value))}
                    className="w-full bg-navy-900 border border-champGold/40 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none font-medium"
                  >
                    <option value="2">Class 2 (Age 7)</option>
                    <option value="3">Class 3 (Age 8)</option>
                    <option value="4">Class 4 (Age 9)</option>
                    <option value="5">Class 5 (Age 10)</option>
                  </select>
                  <p className="text-[10px] text-slate-400 mt-1">
                    🛡️ Fair Play Protection: Playing below your grade earns 0 rank points. Challenging higher grades earns bonus trophies!
                  </p>
                </div>
              )}

              {division === 'Senior' && (
                <div className="p-2.5 rounded-xl bg-velvet-950/80 border border-champGold/30">
                  <label className="block text-[11px] font-bold text-champGold mb-1">
                    🎓 Senior Student Grade (Class 6 to 12 | Age 11–17)
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(Number(e.target.value))}
                    className="w-full bg-navy-900 border border-champGold/40 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none font-medium"
                  >
                    <option value="6">Class 6 (Age 11)</option>
                    <option value="7">Class 7 (Age 12)</option>
                    <option value="8">Class 8 (Age 13)</option>
                    <option value="9">Class 9 (Age 14)</option>
                    <option value="10">Class 10 (Age 15 - Boards)</option>
                    <option value="11">Class 11 (Age 16 - Higher Secondary)</option>
                    <option value="12">Class 12 (Age 17 - Board Finals)</option>
                  </select>
                  <p className="text-[10px] text-slate-400 mt-1">
                    🛡️ Fair Play Protection: Compete fairly with peers in your class. Challenging higher grades earns +25% bonus ELO trophies!
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] text-slate-300 font-medium mb-1">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai"
                    className="w-full bg-navy-950/90 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-300 font-medium mb-1">State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="e.g. Maharashtra"
                    className="w-full bg-navy-950/90 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold py-2.5 rounded-xl text-xs shadow-lg hover:brightness-110 active:scale-[0.98] transition font-rajdhani tracking-wider uppercase"
          >
            {isSignup ? "Create Account & Enter Arena" : "Sign In"}
          </button>
        </form>

        {/* 🎮 Play as Guest (Instant Play without Signup) */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-gradient-to-b from-navy-900 to-velvet-950 border border-champGold/40 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-champGold/20 border border-champGold/40 flex items-center justify-center text-lg">
                🎮
              </div>
              <div>
                <h3 className="text-xs font-bold text-champGold uppercase font-cinzel tracking-wider">
                  Play Instantly as Guest
                </h3>
                <p className="text-[10px] text-slate-300">
                  No signup required! Jump into Hot-Seat & Fastest Finger First matches right now.
                </p>
              </div>
            </div>

            {/* Quick Division Selector */}
            <div className="grid grid-cols-3 gap-1.5 my-3">
              {[
                { id: 'Junior', icon: '🚀', label: 'Junior (Age 7-10)' },
                { id: 'Senior', icon: '⭐', label: 'Senior (Age 11-17)' },
                { id: 'Open', icon: '🦁', label: 'Champions (18+)' }
              ].map(div => (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => {
                    soundService.playClick();
                    setGuestDivision(div.id);
                    if (div.id === 'Junior' && (guestGrade < 2 || guestGrade > 5)) setGuestGrade(3);
                    if (div.id === 'Senior' && (guestGrade < 6 || guestGrade > 12)) setGuestGrade(8);
                  }}
                  className={`py-1.5 px-1 rounded-xl text-center border transition ${
                    guestDivision === div.id
                      ? 'bg-champGold/25 border-champGold text-champGold font-bold shadow'
                      : 'bg-navy-950/60 border-white/10 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-sm block">{div.icon}</span>
                  <span className="text-[9px] block leading-tight mt-0.5">{div.label}</span>
                </button>
              ))}
            </div>

            {/* If Junior Guest, select Class (2, 3, 4, 5) */}
            {guestDivision === 'Junior' && (
              <div className="mb-3 p-2 rounded-xl bg-navy-950/60 border border-champGold/30">
                <span className="text-[10px] font-bold text-champGold block mb-1">
                  🎒 Select Class / Grade (Age 7–10):
                </span>
                <div className="grid grid-cols-4 gap-1">
                  {[
                    { grade: 2, label: 'Class 2', age: 'Age 7' },
                    { grade: 3, label: 'Class 3', age: 'Age 8' },
                    { grade: 4, label: 'Class 4', age: 'Age 9' },
                    { grade: 5, label: 'Class 5', age: 'Age 10' }
                  ].map(item => (
                    <button
                      key={item.grade}
                      type="button"
                      onClick={() => { soundService.playClick(); setGuestGrade(item.grade); }}
                      className={`py-1 px-1 rounded-lg text-center border transition ${
                        guestGrade === item.grade
                          ? 'bg-amber-500/30 border-amber-400 text-champGold font-bold shadow'
                          : 'bg-navy-900 border-white/10 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="text-[10px] block leading-tight font-bold">{item.label}</span>
                      <span className="text-[8px] block text-slate-400">{item.age}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* If Senior Guest, select Class (6 to 12) */}
            {guestDivision === 'Senior' && (
              <div className="mb-3 p-2 rounded-xl bg-navy-950/60 border border-champGold/30">
                <span className="text-[10px] font-bold text-champGold block mb-1">
                  🎓 Select Senior Class / Grade (Age 11–17):
                </span>
                <div className="grid grid-cols-4 gap-1 sm:grid-cols-7">
                  {[
                    { grade: 6, label: 'Class 6', age: 'Age 11' },
                    { grade: 7, label: 'Class 7', age: 'Age 12' },
                    { grade: 8, label: 'Class 8', age: 'Age 13' },
                    { grade: 9, label: 'Class 9', age: 'Age 14' },
                    { grade: 10, label: 'Class 10', age: 'Age 15' },
                    { grade: 11, label: 'Class 11', age: 'Age 16' },
                    { grade: 12, label: 'Class 12', age: 'Age 17' }
                  ].map(item => (
                    <button
                      key={item.grade}
                      type="button"
                      onClick={() => { soundService.playClick(); setGuestGrade(item.grade); }}
                      className={`py-1 px-1 rounded-lg text-center border transition ${
                        guestGrade === item.grade
                          ? 'bg-amber-500/30 border-amber-400 text-champGold font-bold shadow'
                          : 'bg-navy-900 border-white/10 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="text-[10px] block leading-tight font-bold">{item.label}</span>
                      <span className="text-[8px] block text-slate-400">{item.age}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Nickname */}
            <div className="mb-3">
              <input
                type="text"
                value={guestNickname}
                onChange={(e) => setGuestNickname(e.target.value)}
                placeholder="Enter Nickname (Optional e.g. QuizChampion)"
                className="w-full bg-navy-950/90 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none placeholder:text-slate-500"
                maxLength={20}
              />
            </div>

            {/* Enter Arena as Guest Button */}
            <button
              type="button"
              onClick={handlePlayAsGuest}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 font-black text-xs uppercase font-rajdhani tracking-wider shadow-lg hover:brightness-110 active:scale-98 transition flex items-center justify-center gap-1.5"
            >
              <span>⚡ Enter Arena as Guest</span>
            </button>
            
            <p className="text-[9px] text-center text-slate-400 mt-2">
              🔥 You can register anytime to save your Streaks, Leaderboard Rank & Clan points!
            </p>
          </div>
        </div>

        {/* Organizer / Admin Quick Access */}
        <div className="text-center mt-3 pt-2">
          <button
            type="button"
            onClick={() => {
              setEmail('admin@brainleague.com');
              setPassword('Admin@123');
              setIsSignup(false);
            }}
            className="text-[10px] text-slate-500 hover:text-champGold transition underline"
          >
            Organizer / Admin Login
          </button>
        </div>
      </div>
    </div>
  );
}
