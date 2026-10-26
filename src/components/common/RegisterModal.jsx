/**
 * RegisterModal.jsx
 * Modal to allow Guest players to register their official account
 * seamlessly migrating their current earned points, gems, streak, and trophies.
 */

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import soundService from '../../services/soundService';
import { Trophy, Flame, Sparkles, Shield, X, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function RegisterModal({ isOpen, onClose }) {
  const { currentUser, registerGuestAccount } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [division, setDivision] = useState(currentUser?.division || 'Junior');
  const [grade, setGrade] = useState(currentUser?.grade || 3);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    soundService.playClick();

    if (!name || !email || !password) {
      setError('Please fill in Name, Email, and Password.');
      return;
    }

    setLoading(true);
    const res = await registerGuestAccount({
      name,
      email,
      password,
      division,
      grade: (division === 'Junior' || division === 'Senior') ? Number(grade) : 13,
      city: city || 'New Delhi',
      state: state || 'Delhi'
    });
    setLoading(false);

    if (!res.success) {
      setError(res.error || 'Failed to create account.');
      soundService.playWrong();
    } else {
      soundService.playCorrect();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-navy-900 border border-champGold/40 rounded-3xl p-5 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => { soundService.playClick(); onClose(); }}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-navy-800 text-slate-400 hover:text-pearl transition"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-4">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-champGold/20 border border-champGold/40 shadow mb-2">
            <Trophy size={28} className="text-champGold" />
          </div>
          <h2 className="text-lg font-bold text-pearl font-cinzel">
            Create Official Account
          </h2>
          <p className="text-xs text-champGold font-medium">
            Save Your Progress • Compete on National Leaderboards
          </p>
        </div>

        {/* Progress Migration Perks Card */}
        <div className="mb-4 p-3 rounded-2xl bg-velvet-950/90 border border-champGold/30">
          <span className="text-[10px] font-bold text-champGold uppercase tracking-wider block font-rajdhani mb-1.5">
            ✨ Your Guest Rewards Will Be Saved:
          </span>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-navy-900/80 p-2 rounded-xl border border-white/5">
              <span className="text-sm block">🏆</span>
              <span className="font-bold text-champGold font-mono">{currentUser?.trophies || 100}</span>
              <span className="text-[9px] text-slate-400 block">Trophies</span>
            </div>
            <div className="bg-navy-900/80 p-2 rounded-xl border border-white/5">
              <span className="text-sm block">💎</span>
              <span className="font-bold text-emeraldGlow-light font-mono">{currentUser?.gems || 50}</span>
              <span className="text-[9px] text-slate-400 block">Gems</span>
            </div>
            <div className="bg-navy-900/80 p-2 rounded-xl border border-white/5">
              <span className="text-sm block">🔥</span>
              <span className="font-bold text-amber-400 font-mono">{currentUser?.streak || 0} Days</span>
              <span className="text-[9px] text-slate-400 block">Streak</span>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-3 p-2.5 rounded-xl bg-crimsonAlert/15 border border-crimsonAlert/30 text-crimsonAlert text-xs flex items-center gap-2">
            <AlertCircle size={15} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">Your Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">Email / Username</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. rahul@example.com"
              className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">Competitive League / Division</label>
            <select
              value={division}
              onChange={(e) => {
                const newDiv = e.target.value;
                setDivision(newDiv);
                if (newDiv === 'Junior' && (grade < 2 || grade > 5)) setGrade(3);
                if (newDiv === 'Senior' && (grade < 6 || grade > 12)) setGrade(8);
              }}
              className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
            >
              <option value="Junior">Junior League (Age 7–10 • Class 2 to 5)</option>
              <option value="Senior">Senior League (Age 11–17 • Class 6 to 12)</option>
              <option value="Open">Champions League (18+ / Competitive Exams)</option>
            </select>
          </div>

          {division === 'Junior' && (
            <div className="p-2.5 rounded-xl bg-velvet-950/80 border border-champGold/30">
              <label className="block text-[11px] font-bold text-champGold mb-1 flex items-center justify-between">
                <span>🎒 Student Class / Grade (Age 7–10)</span>
                <span className="text-[10px] text-emeraldGlow-light font-normal">Fair Play Guaranteed</span>
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
                🛡️ You will compete fairly with students of your grade. Challenging higher grades earns bonus trophies!
              </p>
            </div>
          )}

          {division === 'Senior' && (
            <div className="p-2.5 rounded-xl bg-velvet-950/80 border border-champGold/30">
              <label className="block text-[11px] font-bold text-champGold mb-1 flex items-center justify-between">
                <span>🎓 Senior Student Class / Grade (Age 11–17)</span>
                <span className="text-[10px] text-emeraldGlow-light font-normal">Fair Play Guaranteed</span>
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
                🛡️ Compete fairly with students of your class. Challenging higher grades unlocks +25% bonus ELO trophies!
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Mumbai"
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">State</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="e.g. Maharashtra"
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 font-bold text-xs uppercase font-rajdhani tracking-wider shadow-lg hover:brightness-110 active:scale-98 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Claim & Save My Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
