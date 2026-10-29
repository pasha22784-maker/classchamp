/**
 * AdminScreen.jsx
 * Comprehensive In-App Master Admin Control Center.
 * Includes:
 * 1. Championship & Event Creator
 * 2. Question Bank Manager with Dual Entry:
 *    - Sub-Tab A: Browse & Bulk CSV/JSON Uploader (with sample template download, duplicate check, preview summary)
 *    - Sub-Tab B: Add Single Question Manually
 *    - Sub-Tab C: AI Bulk Prompt Generator Tool
 *    - Question Inventory Stats Cards per Division and Prize Bracket
 * 3. Store, Economy & Flash Offers Controller
 * 4. Bot & Matchmaking Intelligence Tuner
 * 5. Physical Prize Dispatch Tracker
 */

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import storageService from '../services/storageService';
import csvTemplateService, { VALID_DIVISIONS, VALID_BRACKETS } from '../services/csvTemplateService';
import soundService from '../services/soundService';
import { EXAM_CATEGORIES } from '../services/examCategoryService';
import CurrentAffairsManager from '../components/admin/CurrentAffairsManager';
import {
  ShieldAlert,
  Calendar,
  FileQuestion,
  Newspaper,
  Settings2,
  Package,
  Sparkles,
  Download,
  Upload,
  PlusCircle,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Search,
  ExternalLink,
  Copy,
  Check,
  Key,
  Lock,
  Eye,
  EyeOff,
  Power,
  Gift,
  Percent,
  Zap,
  RefreshCw,
  Flame,
  Unlock,
  Sliders,
  Clock,
  Tag,
  ShoppingBag,
  Megaphone,
  Radio
} from 'lucide-react';

export default function AdminScreen() {
  const { toggleAdminViewMode } = useAuth();
  const { navigateTo } = useGame();

  const [activeTab, setActiveTab] = useState('governance'); // 'governance' | 'offers' | 'questions' | 'championships' | 'economy' | 'bots' | 'prizes' | 'security'
  const [questionSubTab, setQuestionSubTab] = useState('bulk'); // 'bulk' | 'manual' | 'ai'

  // Persistent storage states
  const [systemSettings, setSystemSettings] = useState(() => storageService.getSystemSettings());
  const [govMsg, setGovMsg] = useState('');
  const [storeOffers, setStoreOffers] = useState(() => storageService.getStoreOffers());
  const [newOffer, setNewOffer] = useState({
    title: '',
    description: '',
    gemCost: 99,
    discountPercent: 50,
    badge: 'FLASH DEAL',
    durationDays: 2
  });
  const [offerSuccessMsg, setOfferSuccessMsg] = useState('');

  const [questions, setQuestions] = useState(() => storageService.getQuestions());
  const [championships, setChampionships] = useState(() => storageService.getChampionships());
  const [botSettings, setBotSettings] = useState(() => storageService.getBotSettings());
  const [prizeClaims, setPrizeClaims] = useState(() => storageService.getPrizeClaims());

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDivision, setFilterDivision] = useState('All');
  const [filterBracket, setFilterBracket] = useState('All');
  const [filterExamCategory, setFilterExamCategory] = useState('All');

  // Manual Question Form State
  const [manualForm, setManualForm] = useState({
    division: 'Junior',
    examCategory: 'ALL',
    bracket: '1000-10000',
    subject: 'Maths',
    text: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: 'A',
    guruHint: '',
    explanation: ''
  });
  const [manualSuccessMsg, setManualSuccessMsg] = useState('');

  // Bulk Upload State & Target Category Overrides
  const [uploadTargetDiv, setUploadTargetDiv] = useState('auto');
  const [uploadTargetExamCat, setUploadTargetExamCat] = useState('auto');
  const [uploadTargetSubject, setUploadTargetSubject] = useState('auto');
  const [uploadSummary, setUploadSummary] = useState(null);
  const [isProcessingFile, setIsProcessingFile] = useState(false);

  // New Championship Form State
  const [newChamp, setNewChamp] = useState({
    title: '',
    division: 'All',
    prizeDescription: '',
    sponsorName: '',
    sponsorLogo: '🏆',
    entryEnergyCost: 1,
    daysAhead: 3
  });

  // AI Prompt Tool State
  const [aiCopied, setAiCopied] = useState(false);

  // Admin Credentials & Security State
  const [adminEmail, setAdminEmail] = useState(() => {
    const admin = storageService.getUsers().find(u => u.role === 'admin' || u.id === 'user_admin');
    return admin ? admin.email : 'admin@brainleague.com';
  });
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [secSuccessMsg, setSecSuccessMsg] = useState('');
  const [secErrorMsg, setSecErrorMsg] = useState('');
  const [lastSavedHash, setLastSavedHash] = useState('');

  const handleSaveCredentials = async (e) => {
    e.preventDefault();
    setSecSuccessMsg('');
    setSecErrorMsg('');
    if (!adminEmail.trim()) {
      setSecErrorMsg('Admin email cannot be blank.');
      return;
    }
    if (!adminPassword || adminPassword.length < 6) {
      setSecErrorMsg('Password must be at least 6 characters long.');
      return;
    }
    const res = await storageService.updateAdminCredentials(adminEmail.trim(), adminPassword);
    if (res.success) {
      soundService.playCorrect();
      setLastSavedHash(res.hashedPassword);
      setSecSuccessMsg('Master Admin credentials updated successfully! Your password is now cryptographically hashed (#) and secured.');
      setAdminPassword('');
    } else {
      soundService.playWrong();
      setSecErrorMsg('Failed to update: ' + res.error);
    }
  };

  // ---------------------------------------------
  // INVENTORY STATS CALCULATION
  // ---------------------------------------------
  const getBracketCounts = (division) => {
    const subset = questions.filter(q => division === 'All' ? true : (q.division === division || q.division === 'All'));
    return {
      b1: subset.filter(q => q.bracket === '1000-10000').length,
      b2: subset.filter(q => q.bracket === '10000-340000').length,
      b3: subset.filter(q => q.bracket === '340000-2500000').length,
      b4: subset.filter(q => q.bracket === '2500000-10000000').length,
      fff: subset.filter(q => q.bracket === 'FFF').length,
      total: subset.length
    };
  };

  const juniorCounts = getBracketCounts('Junior');
  const seniorCounts = getBracketCounts('Senior');
  const openCounts = getBracketCounts('Open');

  // ---------------------------------------------
  // QUESTION MANAGEMENT HANDLERS
  // ---------------------------------------------
  const handleDownloadTemplate = () => {
    soundService.playClick();
    csvTemplateService.downloadTemplate();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    soundService.playClick();
    setIsProcessingFile(true);
    setUploadSummary(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const fileContent = event.target?.result;
        let rows = [];

        if (file.name.endsWith('.json')) {
          rows = JSON.parse(fileContent);
        } else {
          rows = csvTemplateService.parseCsv(fileContent);
        }

        const summary = csvTemplateService.validateAndImportQuestions(rows, questions, {
          targetDivision: uploadTargetDiv,
          targetExamCategory: uploadTargetExamCat,
          targetSubject: uploadTargetSubject
        });

        if (summary.validQuestions.length > 0) {
          const updated = storageService.addBatchQuestions(summary.validQuestions);
          setQuestions(updated);
          soundService.playCorrect();
        } else {
          soundService.playWrong();
        }

        setUploadSummary(summary);
      } catch (err) {
        alert("Failed to parse file: " + err.message);
      } finally {
        setIsProcessingFile(false);
      }
    };
    reader.readAsText(file);
  };

  const handleManualFormSubmit = (e) => {
    e.preventDefault();
    soundService.playClick();

    const newQ = {
      id: `Q_MANUAL_${Date.now()}`,
      division: manualForm.division,
      examCategory: manualForm.division === 'Open' ? (manualForm.examCategory || 'ALL') : undefined,
      bracket: manualForm.bracket,
      subject: manualForm.subject,
      text: manualForm.text,
      options: {
        A: manualForm.optionA,
        B: manualForm.optionB,
        C: manualForm.optionC,
        D: manualForm.optionD
      },
      correctAnswer: manualForm.correctAnswer,
      guruHint: manualForm.guruHint,
      explanation: manualForm.explanation,
      createdAt: new Date().toISOString()
    };

    const updated = storageService.addQuestion(newQ);
    setQuestions(updated);
    soundService.playCorrect();

    setManualSuccessMsg("Question successfully added to inventory!");
    setManualForm({
      division: manualForm.division,
      examCategory: manualForm.examCategory || 'ALL',
      bracket: manualForm.bracket,
      subject: manualForm.subject,
      text: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctAnswer: 'A',
      guruHint: '',
      explanation: ''
    });

    setTimeout(() => setManualSuccessMsg(''), 3000);
  };

  const handleDeleteQuestion = (id) => {
    if (confirm("Are you sure you want to delete this question from database?")) {
      soundService.playWrong();
      const updated = storageService.deleteQuestion(id);
      setQuestions(updated);
    }
  };

  // ---------------------------------------------
  // CHAMPIONSHIP HANDLERS
  // ---------------------------------------------
  const handleCreateChampionship = (e) => {
    e.preventDefault();
    soundService.playCorrect();

    const champ = {
      id: `champ_${Date.now()}`,
      title: newChamp.title,
      division: newChamp.division,
      prizeDescription: newChamp.prizeDescription,
      sponsorName: newChamp.sponsorName || 'BrainLeague Academy',
      sponsorLogo: newChamp.sponsorLogo || '🏆',
      entryEnergyCost: Number(newChamp.entryEnergyCost) || 1,
      startTime: new Date(Date.now() + (newChamp.daysAhead * 24 * 60 * 60 * 1000)).toISOString(),
      isLive: false,
      totalRegistered: 100
    };

    const currentChamps = storageService.getChampionships();
    const updated = [champ, ...currentChamps];
    storageService.saveChampionships(updated);
    setChampionships(updated);

    setNewChamp({
      title: '',
      division: 'All',
      prizeDescription: '',
      sponsorName: '',
      sponsorLogo: '🏆',
      entryEnergyCost: 1,
      daysAhead: 3
    });
  };

  const handleDeleteChampionship = (id) => {
    soundService.playClick();
    const updated = championships.filter(c => c.id !== id);
    storageService.saveChampionships(updated);
    setChampionships(updated);
  };

  // ---------------------------------------------
  // MASTER GOVERNANCE & FEATURE GATES HANDLERS
  // ---------------------------------------------
  const handleToggleMaintenance = () => {
    soundService.playClick();
    const nextState = !systemSettings.maintenanceMode;
    const updated = storageService.updateSystemSettings({
      maintenanceMode: nextState
    });
    setSystemSettings(updated);
    setGovMsg(nextState ? "🔴 Maintenance Mode is ON! Non-admin players will see maintenance hold screen." : "🟢 System is now LIVE & ACTIVE for all players!");
    setTimeout(() => setGovMsg(''), 4500);
  };

  const handleUpdateMaintenanceMsg = (msg) => {
    const updated = storageService.updateSystemSettings({ maintenanceMessage: msg });
    setSystemSettings(updated);
  };

  const handleToggleFreeAccess = (enable, durationHours = 24) => {
    soundService.playCorrect();
    let expiresAt = null;
    let durationLabel = '24 Hours';
    if (durationHours === 1) durationLabel = '1 Hour';
    else if (durationHours === 6) durationLabel = '6 Hours';
    else if (durationHours === 24) durationLabel = '24 Hours';
    else if (durationHours === 72) durationLabel = '3 Days';
    else if (durationHours === 168) durationLabel = '7 Days';
    else if (durationHours === -1) durationLabel = 'Until Turned Off';

    if (enable && durationHours > 0) {
      expiresAt = new Date(Date.now() + durationHours * 60 * 60 * 1000).toISOString();
    }

    const updated = storageService.updateSystemSettings({
      freeAccess: {
        ...systemSettings.freeAccess,
        enabled: enable,
        expiresAt,
        durationLabel
      }
    });
    setSystemSettings(updated);
    setGovMsg(enable ? `🎉 Free Access Gala is now LIVE for ${durationLabel}! All users have unlimited energy & free entries.` : "Free Access Gala has ended.");
    setTimeout(() => setGovMsg(''), 4500);
  };

  const handleToggleFeatureLock = (key) => {
    soundService.playClick();
    const currentStatus = systemSettings.featureLocks?.[key] || 'active';
    const nextStatus = currentStatus === 'active' ? 'held' : 'active';
    const updated = storageService.updateSystemSettings({
      featureLocks: {
        ...systemSettings.featureLocks,
        [key]: nextStatus
      }
    });
    setSystemSettings(updated);
    setGovMsg(`Module "${key}" status set to: ${nextStatus.toUpperCase()}`);
    setTimeout(() => setGovMsg(''), 3000);
  };

  const handleUpdateBroadcast = (partial) => {
    soundService.playClick();
    const updated = storageService.updateSystemSettings({
      broadcast: {
        ...systemSettings.broadcast,
        ...partial
      }
    });
    setSystemSettings(updated);
    setGovMsg("Broadcast Announcement Banner updated!");
    setTimeout(() => setGovMsg(''), 3000);
  };

  const handleUpdateEconomy = (key, value) => {
    soundService.playClick();
    const updated = storageService.updateSystemSettings({
      economy: {
        ...systemSettings.economy,
        [key]: Number(value)
      }
    });
    setSystemSettings(updated);
    setGovMsg("Economy & Multiplier settings updated!");
    setTimeout(() => setGovMsg(''), 3000);
  };

  // ---------------------------------------------
  // DYNAMIC FLASH OFFERS HANDLERS
  // ---------------------------------------------
  const handleCreateOffer = (e) => {
    e.preventDefault();
    soundService.playCorrect();
    const created = storageService.addStoreOffer({
      title: newOffer.title,
      description: newOffer.description,
      gemCost: Number(newOffer.gemCost) || 0,
      discountPercent: Number(newOffer.discountPercent) || 50,
      badge: newOffer.badge || 'FLASH DEAL',
      expiresAt: new Date(Date.now() + (Number(newOffer.durationDays) || 2) * 24 * 60 * 60 * 1000).toISOString(),
      isActive: true
    });
    setStoreOffers(created);
    setNewOffer({
      title: '',
      description: '',
      gemCost: 99,
      discountPercent: 50,
      badge: 'FLASH DEAL',
      durationDays: 2
    });
    setOfferSuccessMsg("Flash Offer created and immediately released to players!");
    setTimeout(() => setOfferSuccessMsg(''), 3500);
  };

  const handleToggleOffer = (id) => {
    soundService.playClick();
    const updated = storageService.toggleStoreOffer(id);
    setStoreOffers(updated);
  };

  const handleDeleteOffer = (id) => {
    soundService.playWrong();
    const updated = storageService.deleteStoreOffer(id);
    setStoreOffers(updated);
  };

  // ---------------------------------------------
  // BOT TUNING HANDLER
  // ---------------------------------------------
  const handleBotSettingChange = (key, value) => {
    const updated = { ...botSettings, [key]: value };
    setBotSettings(updated);
    storageService.saveBotSettings(updated);
  };

  // ---------------------------------------------
  // PRIZE CLAIM HANDLER
  // ---------------------------------------------
  const handleUpdateClaim = (claimId, status, tracking = '') => {
    soundService.playClick();
    const updated = storageService.updateClaimStatus(claimId, status, tracking);
    setPrizeClaims(updated);
  };

  // ---------------------------------------------
  // AI PROMPT GENERATOR
  // ---------------------------------------------
  const getAiPrompt = () => {
    return `Generate 100 non-duplicate educational & trivia questions for the "BrainLeague" Champions Arena app in JSON format matching this schema:
[
  {
    "Division": "Open", // "Junior", "Senior", or "Open"
    "Exam_Category": "SSC", // "ALL", "SSC", "NDA_CDS", "NEET_JEE", "BANKING", "RAILWAYS", "NCERT_6_10", "NCERT_11_12", or "UPSC_PSC"
    "Prize_Bracket": "1000-10000", // "1000-10000", "10000-340000", "340000-2500000", "2500000-10000000", or "FFF"
    "Subject": "General Studies",
    "Question_Text": "What is ...?",
    "Option_A": "Option 1",
    "Option_B": "Option 2",
    "Option_C": "Option 3",
    "Option_D": "Option 4",
    "Correct_Answer": "A", // For FFF, provide chronological sequence like "C,A,D,B"
    "Guru_Hint": "1-line smart educational hint",
    "Explanation": "Step-by-step solution",
    "Question_Text_HI": "हिंदी में प्रश्न...",
    "Option_A_HI": "विकल्प A",
    "Option_B_HI": "विकल्प B",
    "Option_C_HI": "विकल्प C",
    "Option_D_HI": "विकल्प D",
    "Guru_Hint_HI": "1-पंक्ति हिंदी संकेत"
  }
]
Ensure verified facts, correct answer validation, and zero repeated questions.`;
  };

  const handleCopyAiPrompt = () => {
    soundService.playClick();
    navigator.clipboard.writeText(getAiPrompt());
    setAiCopied(true);
    setTimeout(() => setAiCopied(false), 2500);
  };

  // Filtered Questions List
  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          q.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiv = filterDivision === 'All' || q.division === filterDivision || q.division === 'All';
    const matchesBracket = filterBracket === 'All' || q.bracket === filterBracket;
    const matchesExamCategory = filterExamCategory === 'All' ||
      q.examCategory === filterExamCategory ||
      (!q.examCategory && (filterExamCategory === 'ALL' || filterExamCategory === 'All'));
    return matchesSearch && matchesDiv && matchesBracket && matchesExamCategory;
  });

  return (
    <div className="flex-1 flex flex-col p-4 pb-20 overflow-y-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-champGold/20 border border-champGold text-champGold">
            <ShieldAlert size={18} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-pearl uppercase font-cinzel leading-tight">
              Admin Control Center
            </h2>
            <span className="text-[10px] text-champGold font-medium">
              Real-Time Game, Questions & Economy Governance
            </span>
          </div>
        </div>

        {/* 1-Tap Toggle: Switch to Player View */}
        <button
          type="button"
          onClick={() => {
            toggleAdminViewMode();
            navigateTo('HOME');
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs shadow hover:brightness-110 transition font-rajdhani uppercase tracking-wider"
        >
          <span>Test Player View</span>
          <ExternalLink size={13} />
        </button>
      </div>

      {/* Universal Action Banner / Toast */}
      {govMsg && (
        <div className="p-3 rounded-xl bg-champGold/20 border border-champGold text-champGold text-xs font-bold text-center mb-3 animate-fadeIn flex items-center justify-center gap-2">
          <Sparkles size={14} />
          <span>{govMsg}</span>
        </div>
      )}

      {/* Main Tab Navigation */}
      <div className="flex bg-navy-950/80 p-1 rounded-xl mb-4 border border-white/5 overflow-x-auto text-xs">
        <button
          type="button"
          onClick={() => { soundService.playClick(); setActiveTab('governance'); }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap ${
            activeTab === 'governance' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Power size={14} />
          <span>Release & Hold / Free Pass</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setActiveTab('offers'); }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap ${
            activeTab === 'offers' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Gift size={14} />
          <span>Flash Offers ({storeOffers.filter(o => o.isActive !== false).length})</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setActiveTab('questions'); }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap ${
            activeTab === 'questions' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <FileQuestion size={14} />
          <span>Question Bank ({questions.length})</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setActiveTab('currentAffairs'); }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap ${
            activeTab === 'currentAffairs' ? 'bg-velvet-800 text-champGold shadow ring-1 ring-champGold/40' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Newspaper size={14} className="text-champGold" />
          <span>Current Affairs ({questions.filter(q => q.isCurrentAffairs).length})</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setActiveTab('championships'); }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap ${
            activeTab === 'championships' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Calendar size={14} />
          <span>Tournaments ({championships.length})</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setActiveTab('economy'); }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap ${
            activeTab === 'economy' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Sliders size={14} />
          <span>Economy & Multipliers</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setActiveTab('bots'); }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap ${
            activeTab === 'bots' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Cpu size={14} />
          <span>Bot Tuner</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setActiveTab('prizes'); }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap ${
            activeTab === 'prizes' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Package size={14} />
          <span>Prize Claims ({prizeClaims.length})</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick(); setActiveTab('security'); }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition whitespace-nowrap ${
            activeTab === 'security' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Key size={14} />
          <span>Security & Login</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 0: MASTER SYSTEM GOVERNANCE & FEATURE GATES          */}
      {/* ======================================================== */}
      {activeTab === 'governance' && (
        <div className="space-y-4">
          {/* Card 1: Master Maintenance / Release & Hold Control */}
          <div className="glass-panel rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-xl border ${systemSettings.maintenanceMode ? 'bg-crimsonAlert/20 border-crimsonAlert text-crimsonAlert' : 'bg-emeraldGlow/20 border-emeraldGlow text-emeraldGlow-light'}`}>
                  <Power size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-pearl uppercase font-cinzel">
                    Master System Status (Release / Hold)
                  </h3>
                  <span className="text-[10px] text-slate-400">
                    Hold app access for non-admins during live upgrades or system fixes
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleToggleMaintenance}
                className={`px-4 py-2 rounded-xl font-bold text-xs uppercase font-rajdhani tracking-wider transition shadow-lg flex items-center gap-1.5 ${
                  systemSettings.maintenanceMode
                    ? 'bg-crimsonAlert text-white hover:brightness-110 animate-pulse'
                    : 'bg-emeraldGlow text-navy-950 hover:brightness-110'
                }`}
              >
                <Power size={14} />
                <span>{systemSettings.maintenanceMode ? "HELD (MAINTENANCE ON)" : "LIVE & RELEASED 🟢"}</span>
              </button>
            </div>

            {systemSettings.maintenanceMode && (
              <div className="p-3 rounded-xl bg-crimsonAlert/10 border border-crimsonAlert/30 space-y-2">
                <label className="block text-[10px] text-crimsonAlert font-bold uppercase tracking-wider">
                  Live Maintenance Message Displayed to Players
                </label>
                <input
                  type="text"
                  value={systemSettings.maintenanceMessage}
                  onChange={(e) => handleUpdateMaintenanceMsg(e.target.value)}
                  className="w-full bg-navy-950 border border-crimsonAlert/40 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:outline-none"
                  placeholder="Enter message for waiting players..."
                />
              </div>
            )}
          </div>

          {/* Card 2: Free Access Gala for All Players */}
          <div className="glass-panel rounded-2xl p-4 border border-champGold/30 space-y-3 bg-gradient-to-br from-navy-950 via-velvet-950/60 to-navy-900 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-champGold/20 border border-champGold text-champGold">
                  <Gift size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-champGold uppercase font-cinzel">
                      Free Access Gala (Global Free Pass)
                    </h3>
                    {storageService.isFreeAccessActive() && (
                      <span className="bg-emeraldGlow/20 border border-emeraldGlow text-emeraldGlow-light text-[9px] font-bold px-2 py-0.5 rounded-full animate-pulse">
                        ACTIVE NOW
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-300">
                    Grant 100% free unlimited energy, free tournaments & lifelines to ALL players for a specific duration
                  </span>
                </div>
              </div>

              {storageService.isFreeAccessActive() ? (
                <button
                  type="button"
                  onClick={() => handleToggleFreeAccess(false)}
                  className="px-3.5 py-1.5 rounded-xl bg-crimsonAlert/20 border border-crimsonAlert text-crimsonAlert font-bold text-xs hover:bg-crimsonAlert hover:text-white transition uppercase font-rajdhani"
                >
                  Stop Free Pass
                </button>
              ) : null}
            </div>

            {storageService.isFreeAccessActive() && (
              <div className="p-3 rounded-xl bg-champGold/15 border border-champGold/40 text-xs text-champGold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>
                    Free Pass is Active: <strong>{systemSettings.freeAccess.durationLabel || 'Custom'}</strong>
                    {systemSettings.freeAccess.expiresAt && (
                      <span className="block text-[10px] text-slate-300 font-mono">
                        Expires at: {new Date(systemSettings.freeAccess.expiresAt).toLocaleTimeString()} ({new Date(systemSettings.freeAccess.expiresAt).toLocaleDateString()})
                      </span>
                    )}
                  </span>
                </div>
              </div>
            )}

            <div>
              <span className="block text-[10px] text-slate-300 font-bold uppercase tracking-wider mb-2 font-rajdhani">
                {storageService.isFreeAccessActive() ? "Extend / Change Duration:" : "Release Free Access for Selected Duration:"}
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleFreeAccess(true, 1)}
                  className="py-2 px-1 rounded-xl bg-navy-900 border border-white/10 hover:border-champGold text-pearl hover:text-champGold font-bold text-xs text-center transition"
                >
                  1 Hour
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleFreeAccess(true, 6)}
                  className="py-2 px-1 rounded-xl bg-navy-900 border border-white/10 hover:border-champGold text-pearl hover:text-champGold font-bold text-xs text-center transition"
                >
                  6 Hours
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleFreeAccess(true, 24)}
                  className="py-2 px-1 rounded-xl bg-velvet-900 border border-champGold/40 text-champGold font-bold text-xs text-center transition shadow"
                >
                  24 Hours
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleFreeAccess(true, 72)}
                  className="py-2 px-1 rounded-xl bg-navy-900 border border-white/10 hover:border-champGold text-pearl hover:text-champGold font-bold text-xs text-center transition"
                >
                  3 Days
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleFreeAccess(true, 168)}
                  className="py-2 px-1 rounded-xl bg-navy-900 border border-white/10 hover:border-champGold text-pearl hover:text-champGold font-bold text-xs text-center transition"
                >
                  7 Days
                </button>
                <button
                  type="button"
                  onClick={() => handleToggleFreeAccess(true, -1)}
                  className="py-2 px-1 rounded-xl bg-emeraldGlow/20 border border-emeraldGlow/40 text-emeraldGlow-light font-bold text-xs text-center transition"
                >
                  Indefinite
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Module Release & Hold Gates (Zero Code Required) */}
          <div className="glass-panel rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-blue-500/20 border border-blue-400 text-blue-300">
                <Sliders size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-pearl uppercase font-cinzel">
                  Module Release & Hold Gates
                </h3>
                <span className="text-[10px] text-slate-400">
                  Release or hold specific sections with 1-tap — no new code deployment needed
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {[
                { key: 'tournaments', name: '🏆 Tournaments & Championships', desc: 'Tournament registrations & championship lobbies' },
                { key: 'clans', name: '🛡️ Study Clans System', desc: 'Clan creation, joining, and clan trophy rankings' },
                { key: 'privateRooms', name: '👥 Private 10-Player Rooms', desc: 'Custom party rooms and WhatsApp/SMS invite links' },
                { key: 'store', name: '🛍️ BrainLeague Store & Payments', desc: 'Pro subscriptions, gem packages & instant refills' },
                { key: 'juniorLeague', name: '👶 Junior League (Class 3-6)', desc: 'Elementary school competition ladder' },
                { key: 'seniorLeague', name: '🧑 Senior League (Class 7-10)', desc: 'Secondary school competition ladder' },
                { key: 'openLeague', name: '🏛️ Open League (17+ / Competitive)', desc: 'Champions competitive examination categories' }
              ].map(mod => {
                const isHeld = systemSettings.featureLocks?.[mod.key] === 'held';
                return (
                  <div
                    key={mod.key}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition ${
                      isHeld
                        ? 'bg-crimsonAlert/10 border-crimsonAlert/40'
                        : 'bg-navy-950 border-white/10'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-pearl block leading-tight">
                        {mod.name}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        {mod.desc}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleFeatureLock(mod.key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase font-rajdhani tracking-wider shrink-0 transition ${
                        isHeld
                          ? 'bg-crimsonAlert text-white hover:brightness-110 shadow'
                          : 'bg-emeraldGlow/20 text-emeraldGlow-light border border-emeraldGlow/40 hover:bg-emeraldGlow hover:text-navy-950'
                      }`}
                    >
                      {isHeld ? "HELD 🔴" : "ACTIVE 🟢"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 4: Live Broadcast Announcement Marquee */}
          <div className="glass-panel rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-purple-500/20 border border-purple-400 text-purple-300">
                  <Megaphone size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-pearl uppercase font-cinzel">
                    Live Broadcast Announcement Ticker
                  </h3>
                  <span className="text-[10px] text-slate-400">
                    Display an instant scrolling marquee / top banner visible to all players
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleUpdateBroadcast({ enabled: !systemSettings.broadcast?.enabled })}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase font-rajdhani transition ${
                  systemSettings.broadcast?.enabled
                    ? 'bg-purple-600 text-white shadow'
                    : 'bg-navy-900 border border-white/20 text-slate-400'
                }`}
              >
                {systemSettings.broadcast?.enabled ? "BROADCAST ON 🟢" : "OFF ⚪"}
              </button>
            </div>

            <div className="space-y-2">
              <div>
                <label className="block text-[10px] text-slate-300 font-bold uppercase tracking-wider mb-1 font-rajdhani">
                  Ticker Announcement Message
                </label>
                <input
                  type="text"
                  value={systemSettings.broadcast?.message || ''}
                  onChange={(e) => handleUpdateBroadcast({ message: e.target.value })}
                  placeholder="Enter broadcast announcement message..."
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-300 font-bold uppercase tracking-wider mb-1 font-rajdhani">
                    Color Theme
                  </label>
                  <select
                    value={systemSettings.broadcast?.type || 'gold'}
                    onChange={(e) => handleUpdateBroadcast({ type: e.target.value })}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  >
                    <option value="gold">Gold Royal Banner</option>
                    <option value="emerald">Emerald Success Banner</option>
                    <option value="crimson">Crimson Urgent Alert</option>
                    <option value="blue">Blue Info Announcement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-slate-300 font-bold uppercase tracking-wider mb-1 font-rajdhani">
                    Tap Action Screen
                  </label>
                  <select
                    value={systemSettings.broadcast?.targetScreen || 'HOME'}
                    onChange={(e) => handleUpdateBroadcast({ targetScreen: e.target.value })}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  >
                    <option value="HOME">Home Screen</option>
                    <option value="STORE">BrainLeague Store</option>
                    <option value="CLAN">Study Clans</option>
                    <option value="PRIVATE_ROOM">Private 10-Player Rooms</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB: FLASH OFFERS & DEALS CONTROLLER                     */}
      {/* ======================================================== */}
      {activeTab === 'offers' && (
        <div className="space-y-4">
          {offerSuccessMsg && (
            <div className="p-3 rounded-xl bg-emeraldGlow/20 border border-emeraldGlow text-emeraldGlow-light text-xs font-bold text-center animate-fadeIn">
              {offerSuccessMsg}
            </div>
          )}

          {/* Create Offer Form */}
          <div className="glass-panel rounded-2xl p-4 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-xl bg-champGold/20 border border-champGold text-champGold">
                <Gift size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-pearl uppercase font-cinzel">
                  Release New Flash Offer or Deal
                </h3>
                <span className="text-[10px] text-slate-400">
                  Offers created here immediately show up on Home & Store screens for all players
                </span>
              </div>
            </div>

            <form onSubmit={handleCreateOffer} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Offer Title</label>
                  <input
                    type="text"
                    required
                    value={newOffer.title}
                    onChange={(e) => setNewOffer(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g. 50% Off Lifeline Mega Pack"
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Badge Tag</label>
                  <input
                    type="text"
                    required
                    value={newOffer.badge}
                    onChange={(e) => setNewOffer(prev => ({ ...prev, badge: e.target.value.toUpperCase() }))}
                    placeholder="e.g. FESTIVE DEAL, 50% OFF, FLASH SALE"
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-slate-300 font-medium mb-1">Description / Perks</label>
                <textarea
                  required
                  rows={2}
                  value={newOffer.description}
                  onChange={(e) => setNewOffer(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="e.g. Get 10x 50:50 and 10x Time Freeze lifelines at half price!"
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Price (Gems)</label>
                  <input
                    type="number"
                    min={0}
                    required
                    value={newOffer.gemCost}
                    onChange={(e) => setNewOffer(prev => ({ ...prev, gemCost: e.target.value }))}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Discount %</label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    required
                    value={newOffer.discountPercent}
                    onChange={(e) => setNewOffer(prev => ({ ...prev, discountPercent: e.target.value }))}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Duration (Days)</label>
                  <select
                    value={newOffer.durationDays}
                    onChange={(e) => setNewOffer(prev => ({ ...prev, durationDays: Number(e.target.value) }))}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  >
                    <option value={1}>1 Day (Flash)</option>
                    <option value={2}>2 Days (Weekend)</option>
                    <option value={7}>7 Days (1 Week)</option>
                    <option value={30}>30 Days (Monthly)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs uppercase font-rajdhani tracking-wider hover:brightness-110 shadow transition flex items-center justify-center gap-1.5"
              >
                <PlusCircle size={15} />
                <span>Publish Offer Instantly</span>
              </button>
            </form>
          </div>

          {/* Active Offers List */}
          <div className="glass-panel-subtle rounded-2xl p-4 border border-white/10 space-y-3">
            <h4 className="text-xs font-bold text-pearl uppercase font-cinzel">
              Current Store Offers Inventory ({storeOffers.length})
            </h4>

            <div className="space-y-2.5">
              {storeOffers.map(offer => {
                const isActive = offer.isActive !== false;
                return (
                  <div
                    key={offer.id}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
                      isActive ? 'bg-navy-950 border-champGold/30 shadow' : 'bg-navy-950/50 border-white/5 opacity-60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-bold bg-champGold/20 text-champGold px-2 py-0.5 rounded border border-champGold/30">
                          {offer.badge || 'DEAL'}
                        </span>
                        <span className="text-[10px] text-emeraldGlow-light font-bold">
                          {offer.discountPercent}% OFF
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          • {offer.gemCost} Gems
                        </span>
                      </div>
                      <div className="text-xs font-bold text-pearl">
                        {offer.title}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {offer.description}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleToggleOffer(offer.id)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase font-rajdhani transition ${
                          isActive
                            ? 'bg-champGold/20 text-champGold border border-champGold/40 hover:bg-champGold hover:text-navy-950'
                            : 'bg-navy-900 text-slate-400 border border-white/10 hover:text-pearl'
                        }`}
                      >
                        {isActive ? "ACTIVE 🟢" : "PAUSED ⚪"}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteOffer(offer.id)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-crimsonAlert hover:bg-crimsonAlert/10 transition"
                        title="Delete Offer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB: ECONOMY & MULTIPLIERS TUNER                        */}
      {/* ======================================================== */}
      {activeTab === 'economy' && (
        <div className="space-y-4">
          <div className="glass-panel rounded-2xl p-4 border border-white/10 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-champGold/20 border border-champGold text-champGold">
                <Sliders size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-pearl uppercase font-cinzel">
                  Dynamic Economy Multipliers & Rates
                </h3>
                <span className="text-[10px] text-slate-400">
                  Control reward pacing, energy heart refill timers and player incentives
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-navy-950 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-pearl block">Coin Multiplier (Event Boost)</span>
                <span className="text-[10px] text-slate-400 block">Double or triple match earnings across all games</span>
                <div className="flex gap-2 pt-1">
                  {[1, 2, 3].map(mul => (
                    <button
                      key={mul}
                      type="button"
                      onClick={() => handleUpdateEconomy('coinMultiplier', mul)}
                      className={`flex-1 py-1.5 rounded-lg font-bold text-xs uppercase font-rajdhani transition ${
                        systemSettings.economy?.coinMultiplier === mul
                          ? 'bg-champGold text-navy-950 shadow'
                          : 'bg-navy-900 border border-white/10 text-slate-300 hover:text-pearl'
                      }`}
                    >
                      {mul}x Coins
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-navy-950 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-pearl block">Trophy Multiplier (Arena Pacing)</span>
                <span className="text-[10px] text-slate-400 block">Speed up clan & national leaderboard progression</span>
                <div className="flex gap-2 pt-1">
                  {[1, 1.5, 2].map(mul => (
                    <button
                      key={mul}
                      type="button"
                      onClick={() => handleUpdateEconomy('trophyMultiplier', mul)}
                      className={`flex-1 py-1.5 rounded-lg font-bold text-xs uppercase font-rajdhani transition ${
                        systemSettings.economy?.trophyMultiplier === mul
                          ? 'bg-purple-600 text-white shadow'
                          : 'bg-navy-900 border border-white/10 text-slate-300 hover:text-pearl'
                      }`}
                    >
                      {mul}x Trophies
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-navy-950 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-pearl block">Energy Heart Refill Speed</span>
                <span className="text-[10px] text-slate-400 block">Time to automatically regenerate 1 Heart for non-Pro players</span>
                <div className="flex gap-2 pt-1">
                  {[5, 15, 30, 60].map(mins => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => handleUpdateEconomy('energyRefillMinutes', mins)}
                      className={`flex-1 py-1.5 rounded-lg font-bold text-xs uppercase font-rajdhani transition ${
                        systemSettings.economy?.energyRefillMinutes === mins
                          ? 'bg-emeraldGlow text-navy-950 shadow'
                          : 'bg-navy-900 border border-white/10 text-slate-300 hover:text-pearl'
                      }`}
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-navy-950 border border-white/10 space-y-2">
                <span className="text-xs font-bold text-pearl block">Daily Login Streak Bonus</span>
                <span className="text-[10px] text-slate-400 block">Free daily currency awarded to active learners</span>
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex-1 bg-navy-900 border border-white/10 rounded-lg p-1.5 text-center">
                    <span className="text-[9px] text-slate-400 block">Daily Coins</span>
                    <span className="text-xs font-mono font-bold text-champGold">{systemSettings.economy?.dailyBonusCoins || 100}</span>
                  </div>
                  <div className="flex-1 bg-navy-900 border border-white/10 rounded-lg p-1.5 text-center">
                    <span className="text-[9px] text-slate-400 block">Daily Gems</span>
                    <span className="text-xs font-mono font-bold text-purple-300">{systemSettings.economy?.dailyBonusGems || 10}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 1: QUESTION BANK MANAGER & DUAL UPLOADER            */}
      {/* ======================================================== */}
      {activeTab === 'questions' && (
        <div className="space-y-4">
          {/* Live Inventory Stats Cards */}
          <div className="grid grid-cols-3 gap-2">
            {/* Junior Stats */}
            <div className="p-2.5 rounded-xl bg-navy-900 border border-white/10 text-center">
              <span className="text-[10px] text-emeraldGlow-light font-bold block">Junior League</span>
              <span className="text-base font-mono font-bold text-pearl">{juniorCounts.total} Qs</span>
              <div className="text-[9px] text-slate-400 mt-1 leading-tight">
                B1:{juniorCounts.b1} | B2:{juniorCounts.b2} | B3:{juniorCounts.b3} | B4:{juniorCounts.b4} | FFF:{juniorCounts.fff}
              </div>
            </div>

            {/* Senior Stats */}
            <div className="p-2.5 rounded-xl bg-navy-900 border border-white/10 text-center">
              <span className="text-[10px] text-blue-300 font-bold block">Senior League</span>
              <span className="text-base font-mono font-bold text-pearl">{seniorCounts.total} Qs</span>
              <div className="text-[9px] text-slate-400 mt-1 leading-tight">
                B1:{seniorCounts.b1} | B2:{seniorCounts.b2} | B3:{seniorCounts.b3} | B4:{seniorCounts.b4} | FFF:{seniorCounts.fff}
              </div>
            </div>

            {/* Open Stats */}
            <div className="p-2.5 rounded-xl bg-navy-900 border border-white/10 text-center">
              <span className="text-[10px] text-purple-300 font-bold block">Open League</span>
              <span className="text-base font-mono font-bold text-pearl">{openCounts.total} Qs</span>
              <div className="text-[9px] text-slate-400 mt-1 leading-tight">
                B1:{openCounts.b1} | B2:{openCounts.b2} | B3:{openCounts.b3} | B4:{openCounts.b4} | FFF:{openCounts.fff}
              </div>
            </div>
          </div>

          {/* Sub-Tabs: Bulk Upload vs Manual Entry vs AI Tool */}
          <div className="glass-panel rounded-2xl p-4">
            <div className="flex bg-navy-950 p-1 rounded-xl mb-4 border border-white/5 text-xs">
              <button
                type="button"
                onClick={() => setQuestionSubTab('bulk')}
                className={`flex-1 py-1.5 rounded-lg font-semibold transition ${
                  questionSubTab === 'bulk' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400'
                }`}
              >
                Browse & Bulk Upload (CSV/JSON)
              </button>
              <button
                type="button"
                onClick={() => setQuestionSubTab('manual')}
                className={`flex-1 py-1.5 rounded-lg font-semibold transition ${
                  questionSubTab === 'manual' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400'
                }`}
              >
                Add Single Question
              </button>
              <button
                type="button"
                onClick={() => setQuestionSubTab('ai')}
                className={`flex-1 py-1.5 rounded-lg font-semibold transition ${
                  questionSubTab === 'ai' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400'
                }`}
              >
                AI Prompt Tool
              </button>
            </div>

            {/* SUB-TAB A: Bulk Upload */}
            {questionSubTab === 'bulk' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-navy-950 border border-white/5">
                  <div>
                    <span className="text-xs font-bold text-pearl block">Sample CSV Template</span>
                    <span className="text-[10px] text-slate-400">Download formatted template covering all 5 Prize Brackets & FFF (includes Hindi & Exam Category columns)</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleDownloadTemplate}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-velvet-800 text-champGold border border-champGold/30 text-xs font-bold hover:brightness-110 transition"
                  >
                    <Download size={13} />
                    <span>Download CSV Template</span>
                  </button>
                </div>

                {/* Target Category Assignment (Admin Category Picker) */}
                <div className="p-3.5 rounded-xl bg-navy-950 border border-champGold/30 shadow-md space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Settings2 size={15} className="text-champGold" />
                      <span className="text-xs font-bold text-pearl uppercase font-rajdhani tracking-wider">
                        Upload Target Category Assignment
                      </span>
                    </div>
                    <span className="text-[9px] text-champGold bg-champGold/15 px-2 py-0.5 rounded font-mono font-bold border border-champGold/30">
                      Smart Tagging
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-tight">
                    Select which category/division you are uploading this file into. Setting an option stamps it onto all imported questions, or leave as <em>Auto-Detect</em> to read from file columns.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {/* Target Division */}
                    <div>
                      <label className="block text-[10px] text-slate-300 font-semibold mb-1">
                        Target Division
                      </label>
                      <select
                        value={uploadTargetDiv}
                        onChange={(e) => setUploadTargetDiv(e.target.value)}
                        className="w-full bg-navy-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                      >
                        <option value="auto">Auto-Detect (From File)</option>
                        <option value="Junior">Junior League (Class 3-6)</option>
                        <option value="Senior">Senior League (Class 7-10)</option>
                        <option value="Open">Open League (17+ / Competitive)</option>
                        <option value="All">All Divisions (Universal)</option>
                      </select>
                    </div>

                    {/* Target Exam Category */}
                    <div>
                      <label className="block text-[10px] text-champGold font-semibold mb-1">
                        Competitive Exam Category
                      </label>
                      <select
                        value={uploadTargetExamCat}
                        onChange={(e) => setUploadTargetExamCat(e.target.value)}
                        className="w-full bg-navy-900 border border-champGold/40 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none font-medium"
                      >
                        <option value="auto">Auto-Detect (From File)</option>
                        {EXAM_CATEGORIES.map(cat => (
                          <option key={cat.id} value={cat.id}>
                            {cat.badge} {cat.shortName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Target Subject Override */}
                    <div>
                      <label className="block text-[10px] text-slate-300 font-semibold mb-1">
                        Subject Override
                      </label>
                      <select
                        value={uploadTargetSubject}
                        onChange={(e) => setUploadTargetSubject(e.target.value)}
                        className="w-full bg-navy-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                      >
                        <option value="auto">Auto-Detect (From File)</option>
                        <option value="General Studies">General Studies (GS)</option>
                        <option value="GK">General Knowledge (GK)</option>
                        <option value="Science">General Science</option>
                        <option value="Maths">Mathematics / Quantitative</option>
                        <option value="Polity">Indian Polity & Constitution</option>
                        <option value="Economy">Economy & Finance</option>
                        <option value="History">History & Culture</option>
                        <option value="Geography">Geography</option>
                        <option value="English">English / Verbal</option>
                        <option value="Current Affairs">Current Affairs</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* File Picker */}
                <div className="p-4 rounded-xl border-2 border-dashed border-champGold/40 bg-navy-950/60 text-center">
                  <Upload size={24} className="mx-auto text-champGold mb-2" />
                  <span className="text-xs font-bold text-pearl block mb-1">
                    Select .csv or .json Question File
                  </span>
                  <p className="text-[10px] text-slate-400 mb-3">
                    Performs client-side validation, duplicate-text elimination, and applies selected category tags automatically.
                  </p>
                  <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs cursor-pointer shadow hover:brightness-110 transition font-rajdhani uppercase tracking-wider">
                    <span>Browse & Import File</span>
                    <input
                      type="file"
                      accept=".csv, .json"
                      onChange={handleFileUpload}
                      className="hidden"
                      disabled={isProcessingFile}
                    />
                  </label>
                </div>

                {/* Upload Validation Summary Modal */}
                {uploadSummary && (
                  <div className="p-3 rounded-xl bg-navy-950 border border-champGold/40 shadow-xl space-y-2 animate-fadeIn text-xs">
                    <div className="flex items-center justify-between font-bold border-b border-white/10 pb-1.5">
                      <span className="text-champGold">Upload Summary Report</span>
                      <span className="text-slate-400">{uploadSummary.totalFound} Rows Parsed</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 py-1 text-[10px]">
                      <span className="text-slate-400 font-medium">Applied Tags:</span>
                      <span className="px-2 py-0.5 rounded bg-champGold/20 text-champGold font-medium">
                        Division: {uploadTargetDiv === 'auto' ? 'File Specified' : uploadTargetDiv}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-medium">
                        Exam Category: {uploadTargetExamCat === 'auto' ? 'File Specified' : (EXAM_CATEGORIES.find(c => c.id === uploadTargetExamCat)?.shortName || uploadTargetExamCat)}
                      </span>
                      {uploadTargetSubject !== 'auto' && (
                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-medium">
                          Subject: {uploadTargetSubject}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center py-1">
                      <div className="p-2 rounded bg-emeraldGlow/10 border border-emeraldGlow/30 text-emeraldGlow-light">
                        <span className="font-mono font-bold block">{uploadSummary.validQuestions.length}</span>
                        <span className="text-[9px]">Added to Bank</span>
                      </div>
                      <div className="p-2 rounded bg-champGold/10 border border-champGold/30 text-champGold">
                        <span className="font-mono font-bold block">{uploadSummary.duplicates.length}</span>
                        <span className="text-[9px]">Duplicates Skipped</span>
                      </div>
                      <div className="p-2 rounded bg-crimsonAlert/10 border border-crimsonAlert/30 text-crimsonAlert">
                        <span className="font-mono font-bold block">{uploadSummary.errors.length}</span>
                        <span className="text-[9px]">Invalid Rows Flagged</span>
                      </div>
                    </div>

                    {uploadSummary.errors.length > 0 && (
                      <div className="p-2 rounded bg-crimsonAlert/10 text-crimsonAlert text-[10px] space-y-1 max-h-24 overflow-y-auto">
                        {uploadSummary.errors.map((err, i) => (
                          <div key={i}>Row #{err.row}: {err.reason}</div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* SUB-TAB B: Single Manual Question Form */}
            {questionSubTab === 'manual' && (
              <form onSubmit={handleManualFormSubmit} className="space-y-3">
                {manualSuccessMsg && (
                  <div className="p-2 rounded-lg bg-emeraldGlow/20 border border-emeraldGlow text-emeraldGlow-light text-xs font-bold text-center">
                    {manualSuccessMsg}
                  </div>
                )}

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-300 font-medium mb-1">Division</label>
                    <select
                      value={manualForm.division}
                      onChange={(e) => setManualForm(prev => ({ ...prev, division: e.target.value }))}
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    >
                      <option value="Junior">Junior (Class 3-6)</option>
                      <option value="Senior">Senior (Class 7-10)</option>
                      <option value="Open">Open League (17+)</option>
                      <option value="All">All Divisions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-300 font-medium mb-1">Prize Bracket</label>
                    <select
                      value={manualForm.bracket}
                      onChange={(e) => setManualForm(prev => ({ ...prev, bracket: e.target.value }))}
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    >
                      <option value="1000-10000">Bracket 1 (1K - 10K, Q1-5)</option>
                      <option value="10000-340000">Bracket 2 (20K - 3.2L, Q6-10)</option>
                      <option value="340000-2500000">Bracket 3 (6.4L - 25L, Q11-13)</option>
                      <option value="2500000-10000000">Bracket 4 (50L - 1 Crore, Q14-15)</option>
                      <option value="FFF">Bracket 5 (FFF Ordering)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-300 font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      value={manualForm.subject}
                      onChange={(e) => setManualForm(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="e.g. Science"
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {manualForm.division === 'Open' && (
                  <div>
                    <label className="block text-[10px] text-champGold font-medium mb-1">
                      Competitive Exam Category (Champion's Syllabus)
                    </label>
                    <select
                      value={manualForm.examCategory || 'ALL'}
                      onChange={(e) => setManualForm(prev => ({ ...prev, examCategory: e.target.value }))}
                      className="w-full bg-navy-950 border border-champGold/40 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    >
                      {EXAM_CATEGORIES.map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.badge} {cat.name} ({cat.shortName})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Question Text</label>
                  <textarea
                    value={manualForm.text}
                    onChange={(e) => setManualForm(prev => ({ ...prev, text: e.target.value }))}
                    placeholder="Enter the full question text here..."
                    rows={2}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-300 font-medium mb-1">Option A</label>
                    <input
                      type="text"
                      value={manualForm.optionA}
                      onChange={(e) => setManualForm(prev => ({ ...prev, optionA: e.target.value }))}
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-300 font-medium mb-1">Option B</label>
                    <input
                      type="text"
                      value={manualForm.optionB}
                      onChange={(e) => setManualForm(prev => ({ ...prev, optionB: e.target.value }))}
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-300 font-medium mb-1">Option C</label>
                    <input
                      type="text"
                      value={manualForm.optionC}
                      onChange={(e) => setManualForm(prev => ({ ...prev, optionC: e.target.value }))}
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-300 font-medium mb-1">Option D</label>
                    <input
                      type="text"
                      value={manualForm.optionD}
                      onChange={(e) => setManualForm(prev => ({ ...prev, optionD: e.target.value }))}
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] text-slate-300 font-medium mb-1">
                      Correct Answer {manualForm.bracket === 'FFF' ? '(e.g. C,A,D,B)' : '(A, B, C, D)'}
                    </label>
                    <input
                      type="text"
                      value={manualForm.correctAnswer}
                      onChange={(e) => setManualForm(prev => ({ ...prev, correctAnswer: e.target.value.toUpperCase() }))}
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-slate-300 font-medium mb-1">AI Guru Lifeline Hint</label>
                    <input
                      type="text"
                      value={manualForm.guruHint}
                      onChange={(e) => setManualForm(prev => ({ ...prev, guruHint: e.target.value }))}
                      placeholder="1-line educational hint"
                      className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-champGold text-navy-950 font-bold text-xs shadow hover:brightness-110 transition uppercase font-rajdhani tracking-wider flex items-center justify-center gap-1.5"
                >
                  <PlusCircle size={15} />
                  <span>Save Question to Inventory</span>
                </button>
              </form>
            )}

            {/* SUB-TAB C: AI Prompt Tool */}
            {questionSubTab === 'ai' && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-navy-950 border border-white/5 text-xs">
                  <span className="font-bold text-champGold block mb-1">
                    AI 1-Click Batch Question Prompt
                  </span>
                  <p className="text-[11px] text-slate-300 mb-2">
                    Copy this pre-engineered prompt, paste into ChatGPT/Gemini/Claude to generate 100 questions, and import the resulting JSON in Sub-Tab A!
                  </p>
                  <pre className="p-2.5 rounded bg-black/50 text-[10px] text-emeraldGlow-light font-mono whitespace-pre-wrap overflow-x-auto max-h-36 border border-white/5">
                    {getAiPrompt()}
                  </pre>
                  <button
                    type="button"
                    onClick={handleCopyAiPrompt}
                    className="mt-2 w-full py-2 rounded-lg bg-velvet-800 hover:bg-velvet-700 text-champGold border border-champGold/40 font-bold text-xs transition flex items-center justify-center gap-1.5"
                  >
                    {aiCopied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{aiCopied ? "Copied Prompt to Clipboard!" : "Copy 100-Question Prompt"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Active Inventory List & Search */}
          <div className="glass-panel-subtle rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-pearl flex items-center gap-1 font-cinzel">
                <span>Active Question Bank ({filteredQuestions.length})</span>
              </h4>
            </div>

            {/* Search & Filters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              <div className="relative col-span-2 sm:col-span-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions..."
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                />
              </div>

              <div>
                <select
                  value={filterDivision}
                  onChange={(e) => setFilterDivision(e.target.value)}
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                >
                  <option value="All">All Divisions</option>
                  <option value="Junior">Junior</option>
                  <option value="Senior">Senior</option>
                  <option value="Open">Open</option>
                </select>
              </div>

              <div>
                <select
                  value={filterBracket}
                  onChange={(e) => setFilterBracket(e.target.value)}
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                >
                  <option value="All">All Brackets</option>
                  <option value="1000-10000">1K - 10K</option>
                  <option value="10000-340000">20K - 3.2L</option>
                  <option value="340000-2500000">6.4L - 25L</option>
                  <option value="2500000-10000000">50L - 1 Cr</option>
                  <option value="FFF">FFF</option>
                </select>
              </div>

              <div>
                <select
                  value={filterExamCategory}
                  onChange={(e) => setFilterExamCategory(e.target.value)}
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                >
                  <option value="All">All Exam Syllabus</option>
                  {EXAM_CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.badge} {cat.shortName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Question List Items */}
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {filteredQuestions.map(q => (
                <div
                  key={q.id}
                  className="p-2.5 rounded-xl bg-navy-950/80 border border-white/5 flex items-start justify-between gap-2 text-xs"
                >
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                      <span className="text-[9px] font-bold bg-champGold/15 text-champGold px-1.5 py-0.2 rounded border border-champGold/30">
                        {q.division}
                      </span>
                      {q.examCategory && (
                        <span className="text-[9px] font-bold bg-purple-500/20 text-purple-300 px-1.5 py-0.2 rounded border border-purple-500/30">
                          {EXAM_CATEGORIES.find(c => c.id === q.examCategory)?.badge || '📋'} {EXAM_CATEGORIES.find(c => c.id === q.examCategory)?.shortName || q.examCategory}
                        </span>
                      )}
                      <span className="text-[9px] font-mono text-blue-300 bg-blue-500/10 px-1.5 py-0.2 rounded">
                        {q.bracket}
                      </span>
                      <span className="text-[9px] text-slate-400">
                        • {q.subject}
                      </span>
                    </div>
                    <div className="font-medium text-pearl line-clamp-2">
                      {q.text}
                    </div>
                    <div className="text-[10px] text-emeraldGlow-light mt-1">
                      Answer: <strong>{q.correctAnswer}</strong> | Hint: {q.guruHint || 'N/A'}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(q.id)}
                    className="p-1 rounded text-slate-500 hover:text-crimsonAlert hover:bg-crimsonAlert/10 transition shrink-0"
                    title="Delete Question"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB: WEEKLY & MONTHLY CURRENT AFFAIRS HUB                */}
      {/* ======================================================== */}
      {activeTab === 'currentAffairs' && (
        <CurrentAffairsManager
          questions={questions}
          onQuestionsUpdated={(updatedList) => {
            setQuestions(updatedList);
          }}
        />
      )}

      {/* ======================================================== */}
      {/* TAB 2: CHAMPIONSHIPS & EVENTS CREATOR                   */}
      {/* ======================================================== */}
      {activeTab === 'championships' && (
        <div className="space-y-4">
          {/* Create Championship Form */}
          <div className="glass-panel rounded-2xl p-4">
            <h4 className="text-xs font-bold text-champGold uppercase font-cinzel mb-3">
              Schedule New Tournament
            </h4>
            <form onSubmit={handleCreateChampionship} className="space-y-3">
              <div>
                <label className="block text-[10px] text-slate-300 font-medium mb-1">Tournament Title</label>
                <input
                  type="text"
                  value={newChamp.title}
                  onChange={(e) => setNewChamp(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g. Sunday 8:00 PM National Champions Trophy"
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Division</label>
                  <select
                    value={newChamp.division}
                    onChange={(e) => setNewChamp(prev => ({ ...prev, division: e.target.value }))}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  >
                    <option value="All">All Leagues (Open)</option>
                    <option value="Junior">Junior League Only</option>
                    <option value="Senior">Senior League Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Days Ahead (Countdown)</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={newChamp.daysAhead}
                    onChange={(e) => setNewChamp(prev => ({ ...prev, daysAhead: e.target.value }))}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-slate-300 font-medium mb-1">Prize Description (Physical Trophy / Grant)</label>
                <input
                  type="text"
                  value={newChamp.prizeDescription}
                  onChange={(e) => setNewChamp(prev => ({ ...prev, prizeDescription: e.target.value }))}
                  placeholder="e.g. Gold Plated Trophy + ₹10,000 Educational Scholarship"
                  className="w-full bg-navy-950 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Sponsor Name</label>
                  <input
                    type="text"
                    value={newChamp.sponsorName}
                    onChange={(e) => setNewChamp(prev => ({ ...prev, sponsorName: e.target.value }))}
                    placeholder="e.g. Apex Academy"
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-300 font-medium mb-1">Entry Energy Hearts</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={newChamp.entryEnergyCost}
                    onChange={(e) => setNewChamp(prev => ({ ...prev, entryEnergyCost: e.target.value }))}
                    className="w-full bg-navy-950 border border-white/10 rounded-lg px-2 py-1.5 text-xs text-pearl focus:border-champGold focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-champGold text-navy-950 font-bold text-xs shadow hover:brightness-110 transition uppercase font-rajdhani tracking-wider flex items-center justify-center gap-1.5"
              >
                <PlusCircle size={15} />
                <span>Publish Tournament to Home Screen</span>
              </button>
            </form>
          </div>

          {/* Active Championships List */}
          <div className="space-y-2">
            {championships.map(champ => (
              <div
                key={champ.id}
                className="p-3 rounded-xl bg-navy-900 border border-champGold/30 flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-pearl block">{champ.title}</span>
                  <span className="text-[10px] text-champGold font-medium block">{champ.prizeDescription}</span>
                  <span className="text-[9px] text-slate-400">Sponsor: {champ.sponsorName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteChampionship(champ.id)}
                  className="p-1 text-slate-500 hover:text-crimsonAlert transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: BOT & MATCHMAKING TUNER                          */}
      {/* ======================================================== */}
      {activeTab === 'bots' && (
        <div className="space-y-4">
          <div className="glass-panel rounded-2xl p-4 space-y-4">
            <h4 className="text-xs font-bold text-champGold uppercase font-cinzel">
              Matchmaking & Bot Intelligence Tuner
            </h4>

            {/* Wait Seconds Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-300">Matchmaking Search Timer</span>
                <span className="font-mono font-bold text-champGold">{botSettings.matchmakingWaitSeconds} seconds</span>
              </div>
              <input
                type="range"
                min="3"
                max="10"
                value={botSettings.matchmakingWaitSeconds}
                onChange={(e) => handleBotSettingChange('matchmakingWaitSeconds', Number(e.target.value))}
                className="w-full accent-champGold"
              />
              <span className="text-[9px] text-slate-400">Time app waits to find live contenders before filling remaining slots with bots.</span>
            </div>

            {/* Guaranteed Human FFF Win Toggle */}
            <div className="p-3 rounded-xl bg-navy-950 border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-pearl block">Single-Player Safeguard Guarantee</span>
                <span className="text-[10px] text-slate-400">If 1 human is matched with 9 bots, guarantee human wins FFF into Hot Seat.</span>
              </div>
              <button
                type="button"
                onClick={() => handleBotSettingChange('guaranteedHumanWinInSinglePlayer', !botSettings.guaranteedHumanWinInSinglePlayer)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition ${
                  botSettings.guaranteedHumanWinInSinglePlayer
                    ? 'bg-emeraldGlow text-navy-950'
                    : 'bg-navy-800 text-slate-400'
                }`}
              >
                {botSettings.guaranteedHumanWinInSinglePlayer ? 'ENABLED' : 'DISABLED'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 4: PRIZE DISPATCH TRACKER                           */}
      {/* ======================================================== */}
      {activeTab === 'prizes' && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-champGold uppercase font-cinzel">
            Winner Trophy & Medal Dispatch Queue ({prizeClaims.length})
          </h4>

          {prizeClaims.length === 0 ? (
            <div className="text-center p-8 glass-panel-subtle rounded-2xl text-slate-400 text-xs">
              No physical medal claims submitted yet. Winners who achieve high ladder scores will appear here.
            </div>
          ) : (
            prizeClaims.map(claim => (
              <div
                key={claim.id}
                className="p-3 rounded-xl bg-navy-900 border border-white/10 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-pearl text-sm">{claim.playerName}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    claim.status === 'Shipped'
                      ? 'bg-emeraldGlow/20 text-emeraldGlow-light border border-emeraldGlow/40'
                      : 'bg-champGold/20 text-champGold border border-champGold/40'
                  }`}>
                    {claim.status}
                  </span>
                </div>

                <div className="text-[11px] text-slate-300">
                  Phone: <strong>{claim.parentPhone}</strong> | Division: {claim.division} | Level Reached: {claim.levelReached}
                </div>

                <div className="text-[11px] text-slate-400 bg-navy-950 p-2 rounded border border-white/5">
                  Address: {claim.address}
                </div>

                {claim.status === 'Pending' ? (
                  <button
                    type="button"
                    onClick={() => {
                      const trk = prompt("Enter courier tracking number (e.g. DTDC-8842):", "IND-POST-9921");
                      if (trk) handleUpdateClaim(claim.id, 'Shipped', trk);
                    }}
                    className="w-full py-1.5 rounded-lg bg-emeraldGlow text-navy-950 font-bold text-xs uppercase font-rajdhani"
                  >
                    Mark as Shipped (Add Tracking #)
                  </button>
                ) : (
                  <div className="text-[10px] text-emeraldGlow-light font-mono">
                    Tracking #: {claim.trackingNumber || 'IND-POST-9921'}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 5: ADMIN CREDENTIALS & SECURITY                    */}
      {/* ======================================================== */}
      {activeTab === 'security' && (
        <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="p-3 rounded-xl bg-champGold/20 text-champGold border border-champGold/30">
              <Key size={24} />
            </div>
            <div>
              <h3 className="text-base font-bold text-pearl font-cinzel">Master Admin Credentials</h3>
              <p className="text-xs text-slate-400">
                Change the Founder / Super Admin Login Email and Secret Password.
              </p>
            </div>
          </div>

          {secSuccessMsg && (
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-emeraldGlow/20 border border-emeraldGlow/40 text-emeraldGlow-light text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>{secSuccessMsg}</span>
              </div>
              {lastSavedHash && (
                <div className="p-3 rounded-xl bg-navy-950 border border-emeraldGlow/30 text-[11px] font-mono text-emeraldGlow-light break-all">
                  <span className="text-slate-400 block mb-1 font-sans font-bold text-[10px] uppercase tracking-wider">
                    🔒 Secure SHA-256 Hash Saved to Database (#):
                  </span>
                  {lastSavedHash}
                </div>
              )}
            </div>
          )}

          {secErrorMsg && (
            <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle size={16} />
              <span>{secErrorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSaveCredentials} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-rajdhani">
                Admin Email ID
              </label>
              <input
                type="email"
                required
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="e.g. admin@bolchaall.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-white/10 text-pearl text-xs focus:outline-none focus:border-champGold font-mono"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">
                This is the email address used to log into the Admin Control Panel.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-rajdhani">
                New Secret Password
              </label>
              <div className="relative">
                <input
                  type={showAdminPassword ? "text" : "password"}
                  required
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter new strong password"
                  className="w-full px-3.5 py-2.5 pr-10 rounded-xl bg-navy-950 border border-white/10 text-pearl text-xs focus:outline-none focus:border-champGold font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowAdminPassword(!showAdminPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-pearl transition"
                >
                  {showAdminPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 block">
                Minimum 6 characters. Only you will know this password.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs uppercase tracking-wider font-rajdhani shadow-lg hover:brightness-110 active:scale-[0.99] transition flex items-center justify-center gap-2"
            >
              <Lock size={15} />
              <span>Update Admin Credentials</span>
            </button>
          </form>

          <div className="p-3.5 rounded-xl bg-navy-950/70 border border-white/5 space-y-1.5 text-[11px] text-slate-400">
            <div className="flex items-center gap-2 text-champGold font-bold">
              <span>💻</span>
              <span>Direct File Path on your PC:</span>
            </div>
            <p className="font-mono text-[10px] text-slate-300 break-all select-all bg-black/40 p-1.5 rounded">
              src/services/storageService.js
            </p>
            <p className="text-[10px] text-slate-400">
              Lines 23-25 contain the default credentials. Any updates saved here are also securely stored in your browser session.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
