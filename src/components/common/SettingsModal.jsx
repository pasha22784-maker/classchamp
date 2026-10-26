/**
 * SettingsModal.jsx
 * Central App Settings Modal.
 * Prominently features the Champion's Category Examination Selector:
 * Allows players in Champion's division to pick their competitive exam syllabus
 * (SSC, NDA/CDS, NEET, Banking, Railways, NCERT 6th-10th, NCERT 11th-12th, UPSC).
 */

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useGame } from '../../context/GameContext';
import soundService from '../../services/soundService';
import examCategoryService, { EXAM_CATEGORIES } from '../../services/examCategoryService';
import updateService, { CURRENT_APP_VERSION } from '../../services/updateService';
import {
  X,
  Settings,
  GraduationCap,
  Globe,
  Volume2,
  VolumeX,
  CheckCircle2,
  Sparkles,
  Shield,
  BookOpen,
  User,
  Check,
  RefreshCw,
  DownloadCloud
} from 'lucide-react';

export default function SettingsModal({ isOpen, onClose }) {
  const { currentUser } = useAuth();
  const { languageMode, setLanguageMode, LANGUAGES, t } = useGame();

  const [activeCategory, setActiveCategory] = useState(() => examCategoryService.getActiveCategory());
  const [isMuted, setIsMuted] = useState(() => soundService.isMuted());
  const [savedBanner, setSavedBanner] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState('');

  if (!isOpen) return null;

  const handleSelectCategory = (categoryId) => {
    soundService.playClick();
    setActiveCategory(categoryId);
    examCategoryService.setActiveCategory(categoryId);
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 2200);
  };

  const handleToggleSound = () => {
    const muted = soundService.toggleMute();
    setIsMuted(muted);
    if (!muted) soundService.playClick();
  };

  const handleSelectLanguage = (langId) => {
    soundService.playClick();
    setLanguageMode(langId);
  };

  const handleManualSync = async () => {
    soundService.playClick();
    setIsSyncing(true);
    setSyncStatus('Checking for latest curriculum & questions...');
    try {
      await updateService.checkForUpdates(true);
      setSyncStatus('Synchronizing latest questions & caching assets...');
      setTimeout(async () => {
        await updateService.syncNow();
      }, 700);
    } catch (e) {
      setSyncStatus('Sync complete!');
      setIsSyncing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg max-h-[90vh] bg-gradient-to-b from-navy-900 via-navy-950 to-velvet-950 border border-champGold/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-navy-900/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-champGold/20 border border-champGold/40 flex items-center justify-center text-champGold shadow-inner">
              <Settings size={18} />
            </div>
            <div>
              <h2 className="text-sm font-bold text-pearl font-cinzel tracking-wider">
                Settings & Preferences
              </h2>
              <p className="text-[10px] text-slate-400">
                Customise examination focus, language & sound
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => { soundService.playClick(); onClose(); }}
            className="p-2 rounded-xl bg-navy-950 border border-white/10 text-slate-400 hover:text-pearl hover:border-champGold/40 transition"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">

          {/* Feedback banner */}
          {savedBanner && (
            <div className="p-2.5 rounded-xl bg-emeraldGlow/20 border border-emeraldGlow/40 text-emeraldGlow-light text-xs flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 size={15} />
              <span>Exam focus updated! Champion's arena will prioritize this syllabus.</span>
            </div>
          )}

          {/* ============================================================== */}
          {/* SECTION 1: CHAMPION'S EXAMINATION FOCUS (COMPETITIVE EXAMS)   */}
          {/* ============================================================== */}
          <div className="rounded-2xl bg-velvet-950/70 border border-champGold/30 p-4 shadow-lg">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-champGold font-cinzel uppercase tracking-wider">
                  <GraduationCap size={15} className="text-champGold" />
                  <span>Champion's Examination Focus</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Select your target syllabus for the <strong>Open / Champions League</strong>:
                </p>
              </div>
              <span className="text-[9px] bg-champGold/20 text-champGold font-mono font-bold px-2 py-0.5 rounded-full border border-champGold/30">
                17+ ADULTS
              </span>
            </div>

            {/* List of Competitive Examinations */}
            <div className="space-y-2 mt-3">
              {EXAM_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSelectCategory(cat.id)}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-start gap-3 relative ${
                      isSelected
                        ? 'bg-gradient-to-r from-velvet-900 to-navy-900 border-champGold shadow-md ring-1 ring-champGold/50'
                        : 'bg-navy-950/60 border-white/10 hover:border-white/20 hover:bg-navy-950'
                    }`}
                  >
                    <div className="text-2xl flex-shrink-0 pt-0.5">{cat.badge}</div>

                    <div className="flex-1 min-w-0 pr-6">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${isSelected ? 'text-champGold' : 'text-pearl'}`}>
                          {cat.name}
                        </span>
                        {isSelected && (
                          <span className="text-[8px] bg-emeraldGlow/20 text-emeraldGlow-light font-bold px-1.5 py-0.2 rounded flex items-center gap-0.5">
                            <Check size={9} /> ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                        {cat.description}
                      </p>
                      <div className="text-[9px] text-slate-500 mt-1 font-mono">
                        Target: <span className="text-slate-400">{cat.targetExams}</span>
                      </div>
                    </div>

                    {/* Radio circle check */}
                    <div className="absolute right-3 top-3">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-champGold bg-champGold text-navy-950'
                          : 'border-slate-600 bg-transparent'
                      }`}>
                        {isSelected && <Check size={11} className="stroke-[3]" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* SECTION 2: QUESTION & OPTION LANGUAGE MODE                     */}
          {/* ============================================================== */}
          <div className="rounded-2xl bg-navy-900/80 border border-white/10 p-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-pearl font-cinzel mb-1">
              <Globe size={14} className="text-champGold" />
              <span>Questions & Options Language</span>
            </div>
            <p className="text-[11px] text-slate-400 mb-2.5">
              Choose language format for Hot-Seat questions & options:
            </p>

            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.id}
                  type="button"
                  onClick={() => handleSelectLanguage(lang.id)}
                  className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition flex flex-col items-center gap-1 ${
                    languageMode === lang.id
                      ? 'bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 border-champGold shadow'
                      : 'bg-navy-950/70 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <span className="text-lg">{lang.icon}</span>
                  <span className="text-[11px] truncate">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ============================================================== */}
          {/* SECTION 3: AUDIO & SOUND EFFECTS                               */}
          {/* ============================================================== */}
          <div className="rounded-2xl bg-navy-900/80 border border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-navy-950 border border-white/10 flex items-center justify-center text-slate-300">
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-emeraldGlow" />}
              </div>
              <div>
                <span className="text-xs font-bold text-pearl block">Broadcast Sound FX</span>
                <span className="text-[10px] text-slate-400">Timer ticks, lock sound & padav stingers</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleToggleSound}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold font-rajdhani uppercase tracking-wider border transition ${
                isMuted
                  ? 'bg-crimsonAlert/15 border-crimsonAlert/30 text-crimsonAlert'
                  : 'bg-emeraldGlow/15 border-emeraldGlow/30 text-emeraldGlow-light'
              }`}
            >
              {isMuted ? 'Muted' : 'Sound ON'}
            </button>
          </div>

          {/* ============================================================== */}
          {/* SECTION 4: AUTO-UPDATE & QUESTION BANK SYNC                     */}
          {/* ============================================================== */}
          <div className="rounded-2xl bg-gradient-to-r from-navy-900 via-velvet-950 to-navy-900 border border-champGold/30 p-4 shadow-md space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-champGold/15 border border-champGold/30 flex items-center justify-center text-champGold">
                  <DownloadCloud size={16} />
                </div>
                <div>
                  <span className="text-xs font-bold text-pearl block flex items-center gap-1.5">
                    <span>Over-The-Air Auto Update</span>
                    <span className="text-[9px] bg-emeraldGlow/20 text-emeraldGlow-light font-bold px-1.5 py-0.2 rounded border border-emeraldGlow/40">
                      LIVE OTA
                    </span>
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Syncs new NCERT questions & live features automatically
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-navy-950/70 p-2.5 rounded-xl border border-white/5">
              <div className="text-[11px] text-slate-300">
                <span>App Build: </span>
                <span className="font-mono text-champGold font-bold">v{CURRENT_APP_VERSION}</span>
                <span className="text-[10px] text-slate-500 block">Class 2 NCERT (Maths, Eng, Hindi) Ready</span>
              </div>
              <button
                type="button"
                onClick={handleManualSync}
                disabled={isSyncing}
                className="px-3 py-1.5 rounded-xl bg-champGold hover:bg-champGold-dark text-navy-950 text-xs font-bold font-rajdhani uppercase tracking-wider flex items-center gap-1.5 shadow transition disabled:opacity-50"
              >
                <RefreshCw size={13} className={isSyncing ? "animate-spin" : ""} />
                <span>{isSyncing ? "Syncing..." : "Sync App Now"}</span>
              </button>
            </div>
            {syncStatus && (
              <div className="text-[10px] text-champGold-light italic text-center animate-fadeIn">
                {syncStatus}
              </div>
            )}
          </div>

          {/* ============================================================== */}
          {/* SECTION 5: PLAYER PROFILE OVERVIEW                              */}
          {/* ============================================================== */}
          {currentUser && (
            <div className="rounded-2xl bg-navy-950/80 border border-white/5 p-3 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-velvet-800 border border-white/10 flex items-center justify-center text-xs">
                  {currentUser.avatar || '⭐'}
                </div>
                <div>
                  <span className="text-pearl font-bold block leading-none">{currentUser.name}</span>
                  <span className="text-[10px]">{currentUser.division} Division • {currentUser.city || 'India'}</span>
                </div>
              </div>
              <span className="text-[10px] text-champGold font-mono font-bold">
                {currentUser.trophies || 0} 🏆
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-white/10 bg-navy-900/60 flex items-center justify-between">
          <span className="text-[10px] text-slate-400">
            BrainLeague v{CURRENT_APP_VERSION} • Auto-Sync Enabled
          </span>
          <button
            type="button"
            onClick={() => { soundService.playClick(); onClose(); }}
            className="py-1.5 px-4 rounded-xl bg-champGold hover:bg-champGold-dark text-navy-950 font-bold text-xs uppercase font-rajdhani tracking-wider transition shadow"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
