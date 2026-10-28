/**
 * CurrentAffairsManager.jsx
 * Admin Management Studio for Weekly & Monthly Current Affairs.
 * 
 * Features:
 * - Admin decides shelf life (Default 6 Months / 180 Days, 1M, 3M, 12M or custom).
 * - Weekly & Monthly Bulk CSV/JSON Import with dedicated CA Template download.
 * - Single Question manual entry form with topic tags & bilingual support.
 * - Automatic Expiration: Questions automatically disappear from student games once shelf life elapses.
 * - Smart Future Reuse: Expired questions move to the "Modern History & Flashback Archive"
 *   where admin can 1-click convert them into permanent General Knowledge / History questions
 *   or extend their validity.
 */

import React, { useState, useMemo } from 'react';
import storageService from '../../services/storageService';
import currentAffairsService, { CA_VALIDITY_PRESETS, CA_TOPICS } from '../../services/currentAffairsService';
import csvTemplateService, { VALID_DIVISIONS, VALID_BRACKETS } from '../../services/csvTemplateService';
import soundService from '../../services/soundService';
import { EXAM_CATEGORIES } from '../../services/examCategoryService';
import {
  Newspaper,
  Calendar,
  Upload,
  Download,
  PlusCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  History,
  Trash2,
  RefreshCw,
  Search,
  Filter,
  ArrowUpRight,
  Shield,
  Tag,
  BookOpen
} from 'lucide-react';

export default function CurrentAffairsManager({ questions, onQuestionsUpdated }) {
  const [subTab, setSubTab] = useState('bulk'); // 'bulk' | 'manual' | 'archive' | 'list'
  const [defaultValidityMonths, setDefaultValidityMonths] = useState(6);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTopic, setFilterTopic] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All'); // 'All' | 'active' | 'expiring' | 'expired'

  // Toast / feedback message
  const [toastMsg, setToastMsg] = useState('');
  const showToast = (msg, isError = false) => {
    setToastMsg(msg);
    if (isError) soundService.playWrong?.();
    else soundService.playCorrect?.();
    setTimeout(() => setToastMsg(''), 4000);
  };

  // Bulk CSV Upload State
  const [bulkCsvText, setBulkCsvText] = useState('');
  const [bulkSummary, setBulkSummary] = useState(null);

  // Manual Form State
  const [manualForm, setManualForm] = useState({
    division: 'Open',
    examCategory: 'ALL',
    bracket: '1000-10000',
    topic: CA_TOPICS[0],
    validityMonths: 6,
    text: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswer: 'A',
    guruHint: '',
    explanation: '',
    text_hi: '',
    optionA_hi: '',
    optionB_hi: '',
    optionC_hi: '',
    optionD_hi: '',
    guruHint_hi: ''
  });

  // Filter all Current Affairs questions
  const caList = useMemo(() => {
    return questions.filter(q => q.isCurrentAffairs);
  }, [questions]);

  // Inventory stats
  const stats = useMemo(() => {
    return currentAffairsService.getStats(questions);
  }, [questions]);

  // Filtered list for table/grid
  const filteredList = useMemo(() => {
    return caList.filter(q => {
      const matchesSearch = !searchQuery ||
        q.text?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.text_hi?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topic?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTopic = filterTopic === 'All' || q.topic === filterTopic;

      const meta = currentAffairsService.getStatusMeta(q);
      let matchesStatus = true;
      if (filterStatus === 'active') matchesStatus = meta.status === 'ACTIVE';
      else if (filterStatus === 'expiring') matchesStatus = meta.status === 'EXPIRING_SOON';
      else if (filterStatus === 'expired') matchesStatus = meta.status === 'EXPIRED' || meta.status === 'ARCHIVED';

      return matchesSearch && matchesTopic && matchesStatus;
    });
  }, [caList, searchQuery, filterTopic, filterStatus]);

  // ── CSV Handlers ──────────────────────────────────────────────────────────
  const handleParseCsv = (content) => {
    try {
      const summary = csvTemplateService.parseCurrentAffairsCsv(content, defaultValidityMonths, questions);
      setBulkSummary(summary);
      if (summary.validQuestions.length > 0) {
        showToast(`Parsed ${summary.validQuestions.length} Current Affairs questions successfully!`);
      } else {
        showToast("No valid rows found in file. Check format.", true);
      }
    } catch (e) {
      showToast("Error reading CSV file.", true);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      setBulkCsvText(text);
      handleParseCsv(text);
    };
    reader.readAsText(file);
  };

  const handleCommitBulk = () => {
    if (!bulkSummary || bulkSummary.validQuestions.length === 0) return;
    const updated = storageService.addBatchQuestions(bulkSummary.validQuestions);
    onQuestionsUpdated(updated);
    showToast(`Successfully added ${bulkSummary.validQuestions.length} Current Affairs questions to game bank!`);
    setBulkCsvText('');
    setBulkSummary(null);
  };

  // ── Manual Question Form Handlers ─────────────────────────────────────────
  const handleAddManual = (e) => {
    e.preventDefault();
    if (!manualForm.text || !manualForm.optionA || !manualForm.optionB) {
      showToast("Please fill in question text and at least Options A and B.", true);
      return;
    }

    const raw = {
      division: manualForm.division,
      examCategory: manualForm.examCategory,
      bracket: manualForm.bracket,
      topic: manualForm.topic,
      subject: 'Current Affairs',
      text: manualForm.text,
      options: {
        A: manualForm.optionA,
        B: manualForm.optionB,
        C: manualForm.optionC || 'None of the above',
        D: manualForm.optionD || 'Both A and B'
      },
      correctAnswer: manualForm.correctAnswer,
      guruHint: manualForm.guruHint,
      explanation: manualForm.explanation,
      text_hi: manualForm.text_hi,
      options_hi: {
        A: manualForm.optionA_hi || manualForm.optionA,
        B: manualForm.optionB_hi || manualForm.optionB,
        C: manualForm.optionC_hi || manualForm.optionC,
        D: manualForm.optionD_hi || manualForm.optionD
      },
      guruHint_hi: manualForm.guruHint_hi
    };

    const qObj = currentAffairsService.formatCAQuestion(raw, manualForm.validityMonths);
    const updated = storageService.addQuestion(qObj);
    onQuestionsUpdated(updated);
    showToast("Current Affairs question added successfully!");

    // Reset text fields but keep metadata selections
    setManualForm(prev => ({
      ...prev,
      text: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      guruHint: '',
      explanation: '',
      text_hi: '',
      optionA_hi: '',
      optionB_hi: '',
      optionC_hi: '',
      optionD_hi: '',
      guruHint_hi: ''
    }));
  };

  // ── Actions: Extend, Convert to History, Delete ───────────────────────────
  const handleExtendValidity = (q, months = 6) => {
    const updatedQ = currentAffairsService.extendValidity(q, months);
    const updatedList = storageService.updateQuestion(updatedQ);
    onQuestionsUpdated(updatedList);
    showToast(`Validity extended by ${months} months! Question will remain active.`);
  };

  const handleConvertToHistory = (q) => {
    const updatedQ = currentAffairsService.convertToPermanentHistory(q);
    const updatedList = storageService.updateQuestion(updatedQ);
    onQuestionsUpdated(updatedList);
    showToast(`Smartly converted into permanent Modern History GK question!`);
  };

  const handleBulkConvertExpired = () => {
    const expiredList = caList.filter(q => {
      const meta = currentAffairsService.getStatusMeta(q);
      return meta.status === 'EXPIRED' || meta.status === 'ARCHIVED';
    });

    if (expiredList.length === 0) {
      showToast("No expired questions to convert.", true);
      return;
    }

    let list = [...questions];
    expiredList.forEach(q => {
      const conv = currentAffairsService.convertToPermanentHistory(q);
      const idx = list.findIndex(item => item.id === q.id);
      if (idx !== -1) list[idx] = conv;
    });

    storageService.saveQuestions(list);
    onQuestionsUpdated(list);
    showToast(`Smartly converted ${expiredList.length} expired questions into permanent History GK!`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Permanently delete this Current Affairs question?")) {
      const updated = storageService.deleteQuestion(id);
      onQuestionsUpdated(updated);
      showToast("Question deleted.");
    }
  };

  return (
    <div className="space-y-4">
      {/* Toast */}
      {toastMsg && (
        <div className="p-3 rounded-xl bg-champGold/20 border border-champGold text-champGold text-xs font-bold text-center shadow-lg animate-fadeIn flex items-center justify-center gap-2">
          <Sparkles size={14} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Banner / Headline */}
      <div className="rounded-2xl bg-gradient-to-r from-velvet-950 via-navy-900 to-velvet-950 border border-champGold/40 p-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-champGold/20 border border-champGold/40 text-champGold flex items-center justify-center shadow-inner">
              <Newspaper size={22} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-pearl font-cinzel tracking-wider flex items-center gap-2">
                <span>Weekly & Monthly Current Affairs Hub</span>
                <span className="text-[9px] bg-champGold/20 text-champGold px-2 py-0.5 rounded-full font-mono font-bold">
                  6-MONTH SHELF LIFE
                </span>
              </h3>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Upload current affairs with a customizable validity (default 6 months). Expired questions auto-retire and can be smartly reused as Modern History GK!
              </p>
            </div>
          </div>

          {/* Quick Template Download */}
          <button
            type="button"
            onClick={() => csvTemplateService.downloadCurrentAffairsTemplate()}
            className="px-3 py-2 rounded-xl bg-navy-950 hover:bg-navy-800 border border-champGold/40 text-champGold text-xs font-bold font-rajdhani uppercase tracking-wider flex items-center gap-1.5 transition shrink-0 shadow"
          >
            <Download size={14} />
            <span>Download CA Template (CSV)</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="p-3 rounded-2xl bg-navy-900/90 border border-white/10 text-center shadow">
          <span className="text-2xl font-black text-champGold font-mono block">
            {stats.total}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
            Total Current Affairs
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center shadow">
          <span className="text-2xl font-black text-emeraldGlow-light font-mono block">
            {stats.active}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emeraldGlow animate-ping" />
            Live In Matches
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-center shadow">
          <span className="text-2xl font-black text-amber-300 font-mono block">
            {stats.expiringSoon}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-300">
            Expiring Soon (&lt;15d)
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-center shadow">
          <span className="text-2xl font-black text-purple-300 font-mono block">
            {stats.expired + stats.archived}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider text-purple-300">
            History Archive Pool
          </span>
        </div>
      </div>

      {/* Shelf Life Selector (Admin Control) */}
      <div className="rounded-2xl bg-navy-900/80 border border-white/10 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-champGold" />
          <div>
            <span className="text-xs font-bold text-pearl block">Default Question Shelf Life (Validity)</span>
            <span className="text-[10px] text-slate-400">
              New uploads will be active in student games for this duration, then automatically retire.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto">
          {CA_VALIDITY_PRESETS.map(preset => (
            <button
              key={preset.id}
              type="button"
              onClick={() => {
                soundService.playClick?.();
                setDefaultValidityMonths(preset.months);
                setManualForm(prev => ({ ...prev, validityMonths: preset.months }));
                showToast(`Default validity set to ${preset.label}`);
              }}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold font-rajdhani uppercase tracking-wider border transition whitespace-nowrap ${
                defaultValidityMonths === preset.months
                  ? 'bg-champGold text-navy-950 border-champGold shadow-md font-black'
                  : 'bg-navy-950 text-slate-300 border-white/10 hover:border-white/30'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-Tabs: Bulk Upload | Manual Add | Smart Archive | Question List */}
      <div className="flex bg-navy-950/90 p-1 rounded-xl border border-white/10 text-xs overflow-x-auto gap-1">
        <button
          type="button"
          onClick={() => { soundService.playClick?.(); setSubTab('bulk'); }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold font-rajdhani uppercase tracking-wider transition whitespace-nowrap ${
            subTab === 'bulk' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <Upload size={14} />
          <span>Weekly / Monthly Bulk Upload</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick?.(); setSubTab('manual'); }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold font-rajdhani uppercase tracking-wider transition whitespace-nowrap ${
            subTab === 'manual' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <PlusCircle size={14} />
          <span>Add Single Question</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick?.(); setSubTab('archive'); }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold font-rajdhani uppercase tracking-wider transition whitespace-nowrap ${
            subTab === 'archive' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <History size={14} />
          <span>Smart History Archive ({stats.expired + stats.archived})</span>
        </button>

        <button
          type="button"
          onClick={() => { soundService.playClick?.(); setSubTab('list'); }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold font-rajdhani uppercase tracking-wider transition whitespace-nowrap ${
            subTab === 'list' ? 'bg-velvet-800 text-champGold shadow' : 'text-slate-400 hover:text-pearl'
          }`}
        >
          <BookOpen size={14} />
          <span>Manage CA Questions ({caList.length})</span>
        </button>
      </div>

      {/* ===================================================================== */}
      {/* SUB-TAB 1: BULK CSV UPLOAD                                            */}
      {/* ===================================================================== */}
      {subTab === 'bulk' && (
        <div className="rounded-2xl bg-navy-900/80 border border-white/10 p-4 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div>
              <h4 className="text-xs font-bold text-pearl font-cinzel uppercase tracking-wider">
                Upload Weekly / Monthly Current Affairs Digest
              </h4>
              <p className="text-[10px] text-slate-400">
                CSV or text format. All rows will receive a <strong>{defaultValidityMonths}-month</strong> shelf life from today.
              </p>
            </div>
          </div>

          {/* File input / Drag drop */}
          <div className="border-2 border-dashed border-champGold/30 hover:border-champGold/60 rounded-2xl p-6 text-center bg-navy-950/40 transition">
            <input
              type="file"
              accept=".csv,.txt"
              id="ca-file-input"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label htmlFor="ca-file-input" className="cursor-pointer flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl bg-champGold/20 text-champGold flex items-center justify-center text-xl shadow">
                <Upload size={22} />
              </div>
              <span className="text-xs font-bold text-pearl block font-rajdhani uppercase tracking-wider">
                Click to Select CSV File or Drag & Drop Here
              </span>
              <span className="text-[10px] text-slate-400">
                Supports Standard & Hindi bilingual columns. Example: National, Sports, Defense, Economy.
              </span>
            </label>
          </div>

          {/* Or Paste CSV text */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Or Paste CSV Text Directly:
            </label>
            <textarea
              rows={4}
              value={bulkCsvText}
              onChange={(e) => {
                setBulkCsvText(e.target.value);
                if (e.target.value) handleParseCsv(e.target.value);
              }}
              placeholder="Paste raw CSV content here..."
              className="w-full bg-navy-950 border border-white/10 rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-champGold"
            />
          </div>

          {/* Parsed Summary Preview */}
          {bulkSummary && (
            <div className="p-4 rounded-xl bg-navy-950 border border-champGold/40 space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-champGold font-rajdhani uppercase tracking-wider">
                  Upload Preview Summary
                </span>
                <span className="text-[10px] font-mono text-emeraldGlow-light">
                  {bulkSummary.validQuestions.length} Valid Questions Ready
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-navy-900 rounded-lg">
                  <span className="text-[10px] text-slate-400 block">Total In File</span>
                  <span className="font-bold text-pearl font-mono">{bulkSummary.totalFound}</span>
                </div>
                <div className="p-2 bg-emerald-950/40 rounded-lg">
                  <span className="text-[10px] text-emerald-400 block">Valid CA Ready</span>
                  <span className="font-bold text-emeraldGlow-light font-mono">{bulkSummary.validQuestions.length}</span>
                </div>
                <div className="p-2 bg-red-950/40 rounded-lg">
                  <span className="text-[10px] text-red-400 block">Errors / Duplicates</span>
                  <span className="font-bold text-red-300 font-mono">{bulkSummary.errors.length + bulkSummary.duplicates.length}</span>
                </div>
              </div>

              {bulkSummary.validQuestions.length > 0 && (
                <button
                  type="button"
                  onClick={handleCommitBulk}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-champGold via-amber-400 to-champGold-dark text-navy-950 font-bold text-xs font-rajdhani uppercase tracking-wider shadow-lg hover:brightness-110 transition flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 size={15} />
                  <span>Add {bulkSummary.validQuestions.length} Questions to Game Bank (Valid for {defaultValidityMonths} Months)</span>
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* ===================================================================== */}
      {/* SUB-TAB 2: MANUAL SINGLE QUESTION ADD                                 */}
      {/* ===================================================================== */}
      {subTab === 'manual' && (
        <form onSubmit={handleAddManual} className="rounded-2xl bg-navy-900/80 border border-white/10 p-4 space-y-4">
          <div className="border-b border-white/10 pb-2">
            <h4 className="text-xs font-bold text-pearl font-cinzel uppercase tracking-wider">
              Add Single Current Affairs Question
            </h4>
            <p className="text-[10px] text-slate-400">
              Quickly create a topical question with custom validity duration.
            </p>
          </div>

          {/* Topic & Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">Topic</label>
              <select
                value={manualForm.topic}
                onChange={e => setManualForm({ ...manualForm, topic: e.target.value })}
                className="w-full bg-navy-950 border border-white/10 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-champGold text-xs"
              >
                {CA_TOPICS.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">Validity (Shelf Life)</label>
              <select
                value={manualForm.validityMonths}
                onChange={e => setManualForm({ ...manualForm, validityMonths: Number(e.target.value) })}
                className="w-full bg-navy-950 border border-white/10 rounded-xl p-2.5 text-champGold font-bold focus:outline-none focus:border-champGold text-xs"
              >
                <option value={1}>1 Month (30 Days)</option>
                <option value={3}>3 Months (90 Days)</option>
                <option value={6}>6 Months (Default - 180 Days)</option>
                <option value={12}>1 Year (365 Days)</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">Target Division</label>
              <select
                value={manualForm.division}
                onChange={e => setManualForm({ ...manualForm, division: e.target.value })}
                className="w-full bg-navy-950 border border-white/10 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-champGold text-xs"
              >
                <option value="Open">Open League (17+ Adults)</option>
                <option value="Senior">Senior League (Classes 6-12)</option>
                <option value="All">All Divisions</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">Exam Focus Category</label>
              <select
                value={manualForm.examCategory}
                onChange={e => setManualForm({ ...manualForm, examCategory: e.target.value })}
                className="w-full bg-navy-950 border border-white/10 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-champGold text-xs"
              >
                <option value="ALL">All Categories</option>
                {EXAM_CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Question Text */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">
                Question Text (English) *
              </label>
              <textarea
                rows={2}
                required
                value={manualForm.text}
                onChange={e => setManualForm({ ...manualForm, text: e.target.value })}
                placeholder="e.g. Which nation won the ICC T20 World Cup?"
                className="w-full bg-navy-950 border border-white/10 rounded-xl p-2.5 text-xs text-slate-100 focus:outline-none focus:border-champGold"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-300 uppercase block mb-1">
                Question Text (हिंदी / Hindi)
              </label>
              <textarea
                rows={2}
                value={manualForm.text_hi}
                onChange={e => setManualForm({ ...manualForm, text_hi: e.target.value })}
                placeholder="e.g. हाल ही में आईसीसी टी20 विश्व कप किसने जीता?"
                className="w-full bg-navy-950 border border-white/10 rounded-xl p-2.5 text-xs text-slate-100 focus:outline-none focus:border-champGold font-hindi"
              />
            </div>
          </div>

          {/* 4 Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {['A', 'B', 'C', 'D'].map(letter => (
              <div key={letter} className="p-2.5 rounded-xl bg-navy-950 border border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-champGold">Option {letter} *</span>
                  <label className="flex items-center gap-1 cursor-pointer text-[10px]">
                    <input
                      type="radio"
                      name="correctAnswerRadio"
                      checked={manualForm.correctAnswer === letter}
                      onChange={() => setManualForm({ ...manualForm, correctAnswer: letter })}
                      className="accent-champGold"
                    />
                    <span className={manualForm.correctAnswer === letter ? "text-emeraldGlow-light font-bold" : "text-slate-400"}>
                      Correct
                    </span>
                  </label>
                </div>
                <input
                  type="text"
                  required
                  placeholder={`Option ${letter} (English)`}
                  value={manualForm[`option${letter}`]}
                  onChange={e => setManualForm({ ...manualForm, [`option${letter}`]: e.target.value })}
                  className="w-full bg-navy-900 border border-white/10 rounded-lg p-1.5 text-xs text-slate-200 focus:outline-none focus:border-champGold"
                />
                <input
                  type="text"
                  placeholder={`Option ${letter} (हिंदी)`}
                  value={manualForm[`option${letter}_hi`]}
                  onChange={e => setManualForm({ ...manualForm, [`option${letter}_hi`]: e.target.value })}
                  className="w-full bg-navy-900 border border-white/10 rounded-lg p-1.5 text-xs text-slate-200 focus:outline-none focus:border-champGold font-hindi"
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-champGold via-amber-400 to-champGold-dark text-navy-950 font-bold text-xs uppercase font-rajdhani tracking-wider shadow-lg hover:brightness-110 transition flex items-center justify-center gap-1.5"
          >
            <PlusCircle size={15} />
            <span>Save Question (Active for {manualForm.validityMonths} Months)</span>
          </button>
        </form>
      )}

      {/* ===================================================================== */}
      {/* SUB-TAB 3: SMART MODERN HISTORY ARCHIVE (FUTURE REUSE POOL)          */}
      {/* ===================================================================== */}
      {subTab === 'archive' && (
        <div className="rounded-2xl bg-navy-900/80 border border-white/10 p-4 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <div>
              <h4 className="text-xs font-bold text-pearl font-cinzel uppercase tracking-wider flex items-center gap-2">
                <History size={16} className="text-purple-400" />
                <span>Smart Modern History & Flashback Archive</span>
              </h4>
              <p className="text-[10px] text-slate-300 mt-0.5">
                Questions that have completed their 6-month shelf life. They are currently hidden from live games.
                You can <strong>smartly reuse them</strong> by converting them into permanent History GK questions or extending their validity!
              </p>
            </div>

            <button
              type="button"
              onClick={handleBulkConvertExpired}
              className="px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-rajdhani uppercase tracking-wider flex items-center gap-1.5 transition shrink-0 shadow"
            >
              <Sparkles size={14} />
              <span>Convert All to Modern History GK</span>
            </button>
          </div>

          {/* List of Expired / Archived */}
          {(() => {
            const expiredQuestions = caList.filter(q => {
              const meta = currentAffairsService.getStatusMeta(q);
              return meta.status === 'EXPIRED' || meta.status === 'ARCHIVED';
            });

            if (expiredQuestions.length === 0) {
              return (
                <div className="p-8 text-center text-slate-400 text-xs">
                  <CheckCircle2 size={32} className="mx-auto text-emerald-400 mb-2" />
                  <p className="font-bold text-pearl">No expired current affairs at the moment!</p>
                  <p className="text-[11px] text-slate-500 mt-1">All current affairs questions are currently active within their 6-month window.</p>
                </div>
              );
            }

            return (
              <div className="space-y-2">
                {expiredQuestions.map(q => {
                  const meta = currentAffairsService.getStatusMeta(q);
                  return (
                    <div
                      key={q.id}
                      className="p-3 rounded-xl bg-navy-950 border border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-[9px] bg-red-500/20 text-red-300 border border-red-500/30 px-2 py-0.2 rounded-full font-mono font-bold">
                            {meta.label}
                          </span>
                          <span className="text-[9px] bg-white/10 text-slate-300 px-2 py-0.2 rounded font-mono">
                            {q.topic}
                          </span>
                          <span className="text-[9px] text-slate-500 font-mono">
                            Added: {new Date(q.publishedAt || Date.now()).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-slate-200 leading-snug truncate">
                          {q.text}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleConvertToHistory(q)}
                          className="px-2.5 py-1.5 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 text-[11px] font-bold flex items-center gap-1 transition shadow"
                          title="Convert to permanent GK/History so students can practice it"
                        >
                          <History size={12} />
                          <span>Make Permanent GK</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleExtendValidity(q, 6)}
                          className="px-2.5 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-200 text-[11px] font-bold flex items-center gap-1 transition shadow"
                          title="Extend validity by 6 months"
                        >
                          <RefreshCw size={12} />
                          <span>+6 Months</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(q.id)}
                          className="p-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-400 transition"
                          title="Delete Permanently"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      )}

      {/* ===================================================================== */}
      {/* SUB-TAB 4: MANAGE & FILTER ALL CURRENT AFFAIRS QUESTIONS              */}
      {/* ===================================================================== */}
      {subTab === 'list' && (
        <div className="rounded-2xl bg-navy-900/80 border border-white/10 p-4 space-y-3">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="relative flex-1">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search Current Affairs questions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-navy-950 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-champGold"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="bg-navy-950 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-slate-200 focus:outline-none"
              >
                <option value="All">All Statuses</option>
                <option value="active">Live in Games</option>
                <option value="expiring">Expiring Soon (&lt;15d)</option>
                <option value="expired">Expired / Archived</option>
              </select>

              <select
                value={filterTopic}
                onChange={e => setFilterTopic(e.target.value)}
                className="bg-navy-950 border border-white/10 rounded-xl px-2.5 py-2 text-xs text-slate-200 focus:outline-none"
              >
                <option value="All">All Topics</option>
                {CA_TOPICS.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Question List Count */}
          <div className="text-[11px] text-slate-400 flex items-center justify-between">
            <span>Showing {filteredList.length} of {caList.length} Current Affairs questions</span>
          </div>

          {/* List items */}
          {filteredList.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">
              No Current Affairs questions match your filter.
            </div>
          ) : (
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {filteredList.map(q => {
                const meta = currentAffairsService.getStatusMeta(q);
                return (
                  <div
                    key={q.id}
                    className="p-3 rounded-xl bg-navy-950 border border-white/5 hover:border-white/15 transition space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[9px] font-mono font-bold px-2 py-0.2 rounded-full border ${
                          meta.color === 'emerald'
                            ? 'bg-emeraldGlow/20 text-emeraldGlow-light border-emeraldGlow/40'
                            : meta.color === 'amber'
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                              : 'bg-red-500/20 text-red-300 border-red-500/40'
                        }`}>
                          {meta.label}
                        </span>
                        <span className="text-[9px] bg-champGold/10 text-champGold border border-champGold/30 px-1.5 py-0.2 rounded font-mono">
                          {q.topic || 'General'}
                        </span>
                        <span className="text-[9px] bg-white/5 text-slate-400 px-1.5 py-0.2 rounded font-mono">
                          {q.division} • {q.bracket}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleExtendValidity(q, 6)}
                          className="px-2 py-1 rounded bg-navy-900 hover:bg-navy-800 border border-white/10 text-[10px] text-champGold font-bold flex items-center gap-1 transition"
                          title="Extend validity by 6 months"
                        >
                          <RefreshCw size={11} />
                          <span>+6M</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleConvertToHistory(q)}
                          className="px-2 py-1 rounded bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-[10px] text-purple-300 font-bold flex items-center gap-1 transition"
                          title="Convert to Permanent History / GK"
                        >
                          <History size={11} />
                          <span>To GK</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(q.id)}
                          className="p-1 rounded bg-red-600/10 hover:bg-red-600/30 text-red-400 transition"
                          title="Delete"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-pearl leading-snug">
                      {q.text}
                    </p>
                    {q.text_hi && (
                      <p className="text-[11px] text-slate-400 leading-snug font-hindi">
                        {q.text_hi}
                      </p>
                    )}

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-1 text-[11px]">
                      {['A', 'B', 'C', 'D'].map(l => (
                        <div
                          key={l}
                          className={`px-2 py-1 rounded border ${
                            q.correctAnswer === l
                              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 font-bold'
                              : 'bg-navy-900 border-white/5 text-slate-400'
                          }`}
                        >
                          <span className="font-mono text-[10px] text-champGold mr-1">{l}.</span>
                          <span className="truncate">{q.options?.[l]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
