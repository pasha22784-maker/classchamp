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
import { ShieldCheck, UserCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function LoginScreen() {
  const { login, loginAsDemo, signup } = useAuth();
  const { navigateTo } = useGame();

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [division, setDivision] = useState('Junior');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    soundService.playClick();

    if (isSignup) {
      if (!name || !email || !password) {
        setError('Please fill all required fields.');
        return;
      }
      const res = await signup({ name, email, password, division, city, state });
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

  const handleDemoSelect = (demoId) => {
    soundService.playClick();
    setError('');
    const res = loginAsDemo(demoId);
    if (res.success) {
      if (res.user.role === 'admin') {
        navigateTo('ADMIN');
      } else {
        navigateTo('HOME');
      }
    }
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
                <label className="block text-[11px] text-slate-300 font-medium mb-1">Select Division (Weight Class)</label>
                <select
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  className="w-full bg-navy-950/90 border border-white/10 rounded-xl px-3 py-2 text-xs text-pearl focus:border-champGold focus:outline-none"
                >
                  <option value="Junior">Junior League (Class 3 to 6 | Age 8–12)</option>
                  <option value="Senior">Senior League (Class 7 to 10 | Age 13–16)</option>
                  <option value="Open">Open League (17+ | Aspirants & Adults)</option>
                </select>
              </div>

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

        {/* 1-Tap Quick Demo Profiles */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
              <Sparkles size={11} className="text-champGold" />
              1-Tap Player Demo Profiles
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {/* Junior Demo */}
            <button
              type="button"
              onClick={() => handleDemoSelect('user_junior_demo')}
              className="flex flex-col items-center p-2 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-white/10 text-center transition group"
            >
              <span className="text-xl mb-1">🚀</span>
              <div className="w-full overflow-hidden">
                <div className="text-[10px] font-bold text-emeraldGlow-light truncate">
                  Junior (3-6)
                </div>
                <div className="text-[8px] text-slate-400 truncate">Aarav • Mumbai</div>
              </div>
            </button>

            {/* Senior Demo */}
            <button
              type="button"
              onClick={() => handleDemoSelect('user_senior_demo')}
              className="flex flex-col items-center p-2 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-white/10 text-center transition group"
            >
              <span className="text-xl mb-1">⭐</span>
              <div className="w-full overflow-hidden">
                <div className="text-[10px] font-bold text-blue-300 truncate">
                  Senior (7-10)
                </div>
                <div className="text-[8px] text-slate-400 truncate">Zoya • Hyderabad</div>
              </div>
            </button>

            {/* Open Demo */}
            <button
              type="button"
              onClick={() => handleDemoSelect('user_open_demo')}
              className="flex flex-col items-center p-2 rounded-xl bg-navy-900/90 hover:bg-navy-800 border border-white/10 text-center transition group"
            >
              <span className="text-xl mb-1">🦁</span>
              <div className="w-full overflow-hidden">
                <div className="text-[10px] font-bold text-purple-300 truncate">
                  Open (17+)
                </div>
                <div className="text-[8px] text-slate-400 truncate">Adult / Aspirant</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
