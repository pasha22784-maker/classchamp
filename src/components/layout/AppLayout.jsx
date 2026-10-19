/**
 * AppLayout.jsx
 * Responsive Container with Mobile-First Simulator Frame and Fullscreen Desktop toggle.
 * Includes Audio Mute toggle, Admin Mode switcher, and Royal Navigation bar.
 */

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useGame } from '../../context/GameContext';
import soundService from '../../services/soundService';
import {
  Volume2,
  VolumeX,
  Smartphone,
  Maximize2,
  ShieldAlert,
  LogOut,
  User,
  ShoppingBag,
  Home,
  Award
} from 'lucide-react';

export default function AppLayout({ children }) {
  const { currentUser, logout, adminViewMode, toggleAdminViewMode } = useAuth();
  const { screen, navigateTo } = useGame();
  const [isMuted, setIsMuted] = useState(() => soundService.isMuted());
  const [isMobileFrame, setIsMobileFrame] = useState(true);

  const toggleSound = () => {
    const muted = soundService.toggleMute();
    setIsMuted(muted);
    if (!muted) soundService.playClick();
  };

  const isAdmin = currentUser?.role === 'admin';

  return (
    <div className="min-h-screen bg-navy-950 text-pearl flex flex-col justify-between selection:bg-champGold selection:text-navy-950 font-sans">
      {/* Top Universal Utility Bar */}
      <header className="w-full bg-navy-900/90 backdrop-blur border-b border-white/10 px-4 py-2 flex items-center justify-between text-xs z-50">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 font-cinzel font-bold text-champGold tracking-wider text-sm">
            <span>🏆</span>
            <span>BrainLeague</span>
          </div>
          {isAdmin && (
            <span className="bg-champGold/20 border border-champGold/40 text-champGold px-2 py-0.5 rounded-full text-[10px] font-bold">
              ADMIN
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {/* Admin Switcher */}
          {isAdmin && (
            <button
              onClick={toggleAdminViewMode}
              className="hidden sm:flex items-center gap-1.5 bg-velvet-800 hover:bg-velvet-700 text-champGold border border-champGold/30 px-2.5 py-1 rounded-md transition"
              title="Toggle between Admin Panel and Player View"
            >
              <ShieldAlert size={13} />
              <span>{adminViewMode === 'admin' ? 'Test Player View' : 'Back to Admin Panel'}</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-champGold transition border border-white/5"
            title={isMuted ? "Unmute Audio FX" : "Mute Audio FX"}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-emeraldGlow" />}
          </button>

          {/* Mobile Frame vs Desktop Toggle */}
          <button
            onClick={() => setIsMobileFrame(prev => !prev)}
            className="hidden md:flex items-center gap-1 p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-champGold transition border border-white/5"
            title={isMobileFrame ? "Switch to Fullscreen Desktop View" : "Switch to Mobile Phone View"}
          >
            {isMobileFrame ? <Maximize2 size={15} /> : <Smartphone size={15} className="text-champGold" />}
            <span className="text-[11px] font-medium">{isMobileFrame ? "Fullscreen" : "Phone Frame"}</span>
          </button>

          {/* Logout if authenticated */}
          {currentUser && (
            <button
              onClick={logout}
              className="p-1.5 rounded-lg bg-crimsonAlert/10 hover:bg-crimsonAlert/20 text-crimsonAlert transition border border-crimsonAlert/20"
              title="Logout"
            >
              <LogOut size={15} />
            </button>
          )}
        </div>
      </header>

      {/* Main Viewport Container */}
      <main className="flex-1 flex items-center justify-center p-0 md:p-4 overflow-y-auto">
        <div
          className={`w-full transition-all duration-300 ${
            isMobileFrame
              ? 'max-w-[420px] min-h-[820px] md:rounded-[36px] md:border-[6px] md:border-slate-800 shadow-2xl relative bg-navy-950 flex flex-col justify-between overflow-hidden'
              : 'max-w-5xl min-h-[800px] md:rounded-2xl md:border border-white/10 shadow-2xl relative bg-navy-950/80 backdrop-blur-xl flex flex-col justify-between overflow-hidden'
          }`}
        >
          {/* Subtle Phone Notch Simulation when in Mobile Frame */}
          {isMobileFrame && (
            <div className="hidden md:flex justify-center pt-2 pb-1 bg-navy-900 border-b border-white/5">
              <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                <div className="w-6 h-1.5 rounded-full bg-slate-800"></div>
              </div>
            </div>
          )}

          {/* Screen Content */}
          <div className="flex-1 flex flex-col overflow-y-auto">{children}</div>

          {/* Bottom Mobile Navigation (Visible on Home, Store, Result) */}
          {currentUser && ['HOME', 'STORE', 'RESULT'].includes(screen) && (
            <nav className="bg-navy-900/95 backdrop-blur border-t border-white/10 px-6 py-2.5 flex items-center justify-around z-40">
              <button
                onClick={() => navigateTo('HOME')}
                className={`flex flex-col items-center gap-1 transition ${
                  screen === 'HOME' ? 'text-champGold font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Home size={18} />
                <span className="text-[10px]">Arena</span>
              </button>

              <button
                onClick={() => navigateTo('STORE')}
                className={`flex flex-col items-center gap-1 transition ${
                  screen === 'STORE' ? 'text-champGold font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ShoppingBag size={18} />
                <span className="text-[10px]">Store</span>
              </button>

              {isAdmin && (
                <button
                  onClick={() => navigateTo('ADMIN')}
                  className={`flex flex-col items-center gap-1 transition ${
                    screen === 'ADMIN' ? 'text-champGold font-bold' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ShieldAlert size={18} />
                  <span className="text-[10px]">Admin</span>
                </button>
              )}
            </nav>
          )}
        </div>
      </main>
    </div>
  );
}
