/**
 * AppLayout.jsx
 * Responsive Container with Mobile-First Simulator Frame and Fullscreen Desktop toggle.
 * Includes Audio Mute toggle, Admin Mode switcher, and Royal Navigation bar.
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useGame } from '../../context/GameContext';
import soundService from '../../services/soundService';
import updateService from '../../services/updateService';
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
  Award,
  RotateCw,
  RefreshCw,
  Settings
} from 'lucide-react';
import SettingsModal from '../common/SettingsModal';
import storageService from '../../services/storageService';

export default function AppLayout({ children }) {
  const { currentUser, logout, adminViewMode, toggleAdminViewMode } = useAuth();
  const {
    screen,
    navigateTo,
    isLandscapeMode,
    toggleLandscapeMode,
    showOrientationHint,
    languageMode,
    setLanguageMode,
    LANGUAGES,
    isSettingsOpen,
    closeSettings,
    openSettings
  } = useGame();
  const [isMuted, setIsMuted] = useState(() => soundService.isMuted());
  const [isMobileFrame, setIsMobileFrame] = useState(true);
  const [updateInfo, setUpdateInfo] = useState({ updateAvailable: false, remoteInfo: null });

  useEffect(() => {
    const unsub = updateService.addListener(setUpdateInfo);
    return unsub;
  }, []);

  const isGameScreen = ['LOBBY', 'FFF', 'HOTSEAT', 'SPECTATOR'].includes(screen);

  const toggleSound = () => {
    const muted = soundService.toggleMute();
    setIsMuted(muted);
    if (!muted) soundService.playClick();
  };

  const cycleLanguage = () => {
    soundService.playClick();
    const order = ['bilingual', 'hi', 'en'];
    const nextIdx = (order.indexOf(languageMode) + 1) % order.length;
    setLanguageMode(order[nextIdx]);
  };
  const currentLangMeta = LANGUAGES?.find(l => l.id === languageMode) || { icon: '🌐', short: 'BIL' };

  const isAdmin = currentUser?.role === 'admin';

  return (
    <div className={`min-h-screen bg-navy-950 text-pearl flex flex-col justify-between selection:bg-champGold selection:text-navy-950 font-sans ${isGameScreen ? 'h-[100dvh] max-h-[100dvh] overflow-hidden' : ''}`}>
      {/* Top Universal Utility Bar */}
      <header className={`w-full bg-navy-900/95 backdrop-blur-md border-b border-white/10 px-3 sm:px-4 pt-safe-header pb-2.5 flex items-center justify-between text-xs z-50 transition-all ${isGameScreen ? 'hidden md:flex' : 'flex'}`}>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 font-cinzel font-bold text-champGold tracking-wider text-sm sm:text-base">
            <span>🏆</span>
            <span>BrainLeague</span>
          </div>
          {isAdmin && (
            <span className="bg-champGold/20 border border-champGold/40 text-champGold px-2 py-0.5 rounded-full text-[10px] font-bold">
              ADMIN
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Quick 1-Tap Language Switcher (EN | HI | BIL) */}
          <button
            type="button"
            onClick={cycleLanguage}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-navy-800 hover:bg-navy-700 border border-white/10 hover:border-champGold/40 text-xs font-bold text-slate-200 hover:text-champGold transition shadow min-h-[36px] active:scale-95 touch-manipulation"
            title="Language: English / हिंदी / Bilingual"
          >
            <span>{currentLangMeta?.icon || '🌐'}</span>
            <span className="font-mono text-[11px]">{currentLangMeta?.short || 'BIL'}</span>
          </button>

          {/* In-Game Landscape / Portrait Mode Switcher */}
          {['LOBBY', 'FFF', 'HOTSEAT', 'SPECTATOR'].includes(screen) && (
            <button
              onClick={toggleLandscapeMode}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-velvet-900 via-navy-900 to-velvet-900 hover:from-velvet-800 hover:to-navy-800 border border-champGold/40 text-champGold text-xs font-bold font-rajdhani transition shadow min-h-[36px] active:scale-95 touch-manipulation"
              title="Toggle between Landscape (TV Studio) and Portrait (Phone) View"
            >
              <RotateCw size={13} className="text-champGold" />
              <span>{isLandscapeMode ? "📺 Landscape" : "📱 Portrait"}</span>
            </button>
          )}

          {/* Admin Switcher */}
          {isAdmin && (
            <button
              onClick={toggleAdminViewMode}
              className="hidden sm:flex items-center gap-1.5 bg-velvet-800 hover:bg-velvet-700 text-champGold border border-champGold/30 px-3 py-1.5 rounded-xl transition min-h-[36px] touch-manipulation"
              title="Toggle between Admin Panel and Player View"
            >
              <ShieldAlert size={14} />
              <span>{adminViewMode === 'admin' ? 'Test Player View' : 'Back to Admin Panel'}</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-champGold transition border border-white/10 shadow active:scale-95 touch-manipulation shrink-0"
            title={isMuted ? "Unmute Audio FX" : "Mute Audio FX"}
          >
            {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} className="text-emeraldGlow" />}
          </button>

          {/* Mobile Frame vs Desktop Toggle (Only visible outside game or when in portrait) */}
          <button
            type="button"
            onClick={() => setIsMobileFrame(prev => !prev)}
            className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-champGold transition border border-white/10 min-h-[36px]"
            title={isMobileFrame ? "Switch to Fullscreen Desktop View" : "Switch to Mobile Phone View"}
          >
            {isMobileFrame ? <Maximize2 size={15} /> : <Smartphone size={15} className="text-champGold" />}
            <span className="text-[11px] font-medium">{isMobileFrame ? "Fullscreen" : "Phone Frame"}</span>
          </button>

          {/* Settings Modal Toggle */}
          <button
            type="button"
            onClick={openSettings}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-champGold transition border border-white/10 shadow active:scale-95 touch-manipulation shrink-0"
            title="Settings: Competitive Exam Focus, Language & Audio"
          >
            <Settings size={17} />
          </button>

          {/* Logout if authenticated */}
          {currentUser && (
            <button
              type="button"
              onClick={logout}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-crimsonAlert/15 hover:bg-crimsonAlert/25 text-crimsonAlert transition border border-crimsonAlert/30 shadow active:scale-95 touch-manipulation shrink-0"
              title="Logout"
            >
              <LogOut size={17} />
            </button>
          )}
        </div>
      </header>

      {/* Over-The-Air Live Update Banner */}
      {updateInfo?.updateAvailable && !isGameScreen && (
        <div
          onClick={() => updateService.syncNow()}
          className="w-full bg-gradient-to-r from-champGold via-amber-400 to-champGold text-navy-950 px-4 py-2 text-xs font-bold flex items-center justify-between cursor-pointer shadow-lg animate-pulse border-b border-champGold-dark/40 z-40"
          title="Click to install live updates and newly added NCERT questions"
        >
          <div className="flex items-center gap-2">
            <RefreshCw size={14} className="animate-spin text-navy-950" />
            <span>Naya Update Uplabdh Hai! Naye NCERT Sawal Load Karne Ke Liye Tap Karein</span>
          </div>
          <span className="bg-navy-950 text-champGold px-2.5 py-0.5 rounded-full text-[10px] uppercase font-rajdhani font-black shadow">
            Update Now ⚡
          </span>
        </div>
      )}

      {/* Broadcast Announcement Ticker */}
      {(() => {
        if (isGameScreen) return null;
        const sys = storageService.getSystemSettings();
        const broadcast = sys?.broadcast;
        if (!broadcast?.enabled || !broadcast?.message) return null;
        return (
          <div
            onClick={() => {
              if (broadcast.targetScreen) {
                soundService.playClick();
                navigateTo(broadcast.targetScreen);
              }
            }}
            className={`w-full py-1.5 px-4 text-xs font-semibold flex items-center justify-between cursor-pointer border-b transition ${
              broadcast.type === 'emerald'
                ? 'bg-emeraldGlow/15 border-emeraldGlow/30 text-emeraldGlow-light hover:bg-emeraldGlow/25'
                : broadcast.type === 'crimson'
                ? 'bg-crimsonAlert/15 border-crimsonAlert/30 text-crimsonAlert hover:bg-crimsonAlert/25'
                : broadcast.type === 'blue'
                ? 'bg-blue-600/15 border-blue-500/30 text-blue-300 hover:bg-blue-600/25'
                : 'bg-champGold/15 border-champGold/30 text-champGold hover:bg-champGold/25'
            }`}
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="shrink-0 text-sm">📢</span>
              <span className="truncate">{broadcast.message}</span>
            </div>
            <span className="text-[10px] uppercase font-bold shrink-0 opacity-80 hover:opacity-100 font-rajdhani flex items-center gap-1">
              <span>View</span>
              <span>&rarr;</span>
            </span>
          </div>
        );
      })()}

      {/* Main Viewport Container */}
      <main className={`flex-1 flex items-center justify-center p-0 ${isGameScreen ? 'h-full max-h-full overflow-hidden' : 'md:p-3 overflow-y-auto'}`}>
        <div
          className={`w-full transition-all duration-300 ${
            isGameScreen
              ? 'max-w-6xl w-full h-full max-h-[100dvh] md:max-h-[96vh] md:rounded-2xl md:border border-champGold/25 shadow-[0_0_50px_rgba(0,0,0,0.85)] relative bg-navy-950/95 backdrop-blur-xl flex flex-col justify-between overflow-hidden pt-safe pb-safe pl-safe pr-safe'
              : isLandscapeMode || (!isMobileFrame && ['LOBBY', 'FFF', 'HOTSEAT', 'SPECTATOR'].includes(screen))
                ? 'max-w-6xl w-full min-h-[580px] md:min-h-[660px] md:rounded-2xl md:border border-champGold/25 shadow-[0_0_50px_rgba(0,0,0,0.85)] relative bg-navy-950/95 backdrop-blur-xl flex flex-col justify-between overflow-hidden'
                : isMobileFrame
                  ? 'max-w-[440px] min-h-[820px] md:rounded-[36px] md:border-[6px] md:border-slate-800 shadow-2xl relative bg-navy-950 flex flex-col justify-between overflow-hidden'
                  : 'max-w-5xl min-h-[800px] md:rounded-2xl md:border border-white/10 shadow-2xl relative bg-navy-950/80 backdrop-blur-xl flex flex-col justify-between overflow-hidden'
          }`}
        >
          {/* Subtle Phone Notch Simulation when in Mobile Portrait Frame */}
          {isMobileFrame && !isLandscapeMode && !isGameScreen && (
            <div className="hidden md:flex justify-center pt-2 pb-1 bg-navy-900 border-b border-white/5">
              <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                <div className="w-6 h-1.5 rounded-full bg-slate-800"></div>
              </div>
            </div>
          )}

          {/* Screen Content */}
          <div className={`flex-1 flex flex-col ${isGameScreen ? 'h-full max-h-full overflow-hidden' : 'overflow-y-auto'}`}>{children}</div>

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

              <button
                type="button"
                onClick={openSettings}
                className="flex flex-col items-center gap-1 transition text-slate-400 hover:text-champGold"
                title="Settings: Exam Focus & Sound"
              >
                <Settings size={18} />
                <span className="text-[10px]">Settings</span>
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

          {/* Central Settings Modal */}
          <SettingsModal isOpen={isSettingsOpen} onClose={closeSettings} />
        </div>
      </main>

      {/* 5-Second Auto-Disappearing Orientation Pill on Phone Rotation */}
      {isGameScreen && showOrientationHint && (
        <button
          type="button"
          onClick={toggleLandscapeMode}
          className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-amber-500 via-champGold to-amber-500 text-navy-950 font-black text-xs font-rajdhani uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.85)] border-2 border-white/40 hover:scale-105 active:scale-95 transition-all animate-fadeIn"
          title="Switch orientation mode"
        >
          <RotateCw size={13} className="animate-spin text-navy-950 duration-700" />
          <span>{isLandscapeMode ? "📱 Switch to Portrait" : "📺 Switch to Landscape"}</span>
        </button>
      )}
    </div>
  );
}
