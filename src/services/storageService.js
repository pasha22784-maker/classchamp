/**
 * storageService.js
 * Centralized persistent state store for ClassChamp.
 * Seeds initial demo accounts, default championships, bot settings, and question bank.
 */

import { INITIAL_QUESTIONS } from '../data/initialQuestions';
import { hashPassword, verifyPassword } from './securityService';

const STORAGE_KEYS = {
  CURRENT_USER: 'classchamp_current_user',
  USERS: 'classchamp_users',
  QUESTIONS: 'classchamp_questions',
  CHAMPIONSHIPS: 'classchamp_championships',
  BOT_SETTINGS: 'classchamp_bot_settings',
  STORE_OFFERS: 'classchamp_store_offers',
  PRIZE_CLAIMS: 'classchamp_prize_claims',
  VIEW_MODE: 'classchamp_view_mode', // 'mobile' | 'desktop'
  CLANS: 'classchamp_clans',
  SYSTEM_SETTINGS: 'brainleague_system_settings'
};

const DEFAULT_SYSTEM_SETTINGS = {
  maintenanceMode: false,
  maintenanceMessage: 'BrainLeague is undergoing a scheduled live server optimization. All matches and rankings are safely preserved. We will be back shortly!',
  maintenanceEstResume: '',
  freeAccess: {
    enabled: false,
    title: 'Free Access Gala — All Features & Unlimited Energy Active!',
    unlimitedEnergy: true,
    freeTournaments: true,
    freeLifelines: true,
    expiresAt: null,
    durationLabel: '24 Hours'
  },
  broadcast: {
    enabled: true,
    message: '🏆 BrainLeague National Champions Arena is Live! Compete, earn trophies and study clans rankings!',
    type: 'gold', // 'gold' | 'emerald' | 'crimson' | 'blue'
    targetScreen: 'HOME'
  },
  featureLocks: {
    tournaments: 'active', // 'active' | 'held'
    clans: 'active',
    privateRooms: 'active',
    store: 'active',
    juniorLeague: 'active',
    seniorLeague: 'active',
    openLeague: 'active'
  },
  economy: {
    coinMultiplier: 1,
    trophyMultiplier: 1,
    energyRefillMinutes: 30,
    dailyBonusCoins: 100,
    dailyBonusGems: 10
  }
};

const DEFAULT_USERS = [
  {
    id: 'user_admin',
    email: 'admin@brainleague.com',
    secondaryEmail: 'admin@classchamp.com',
    password: '#hash_sha256:e86f78a8a3caf0b60d8e74e5942aa6d86dc150cd3c03338aef25b7d2d7e3acc7', // SHA-256 hash of Admin@123
    role: 'admin',
    name: 'Administrator',
    division: 'Open',
    city: 'New Delhi',
    state: 'Delhi',
    energy: 5,
    maxEnergy: 5,
    lastEnergyRecharge: Date.now(),
    gems: 9999,
    trophies: 2850,
    isPro: true,
    avatar: '👑'
  },
  {
    id: 'user_junior_demo',
    email: 'junior@brainleague.com',
    secondaryEmail: 'junior@classchamp.com',
    password: '#hash_sha256:ff96673205dc722320598ebf8f88325b2ac56922d5a2164b5765868274bc0d73', // SHA-256 hash of Demo@123
    role: 'player',
    name: 'Aarav Sharma',
    division: 'Junior',
    city: 'Mumbai',
    state: 'Maharashtra',
    energy: 5,
    maxEnergy: 5,
    lastEnergyRecharge: Date.now(),
    gems: 150,
    trophies: 420,
    isPro: false,
    avatar: '🚀'
  },
  {
    id: 'user_senior_demo',
    email: 'senior@brainleague.com',
    secondaryEmail: 'senior@classchamp.com',
    password: '#hash_sha256:ff96673205dc722320598ebf8f88325b2ac56922d5a2164b5765868274bc0d73', // SHA-256 hash of Demo@123
    role: 'player',
    name: 'Zoya Khan',
    division: 'Senior',
    city: 'Hyderabad',
    state: 'Telangana',
    energy: 4,
    maxEnergy: 5,
    lastEnergyRecharge: Date.now(),
    gems: 320,
    trophies: 890,
    isPro: true,
    avatar: '⭐'
  },
  {
    id: 'user_open_demo',
    email: 'player@brainleague.com',
    secondaryEmail: 'player@classchamp.com',
    password: '#hash_sha256:ff96673205dc722320598ebf8f88325b2ac56922d5a2164b5765868274bc0d73', // SHA-256 hash of Demo@123
    role: 'player',
    name: 'Vikramaditya',
    division: 'Open',
    city: 'Bengaluru',
    state: 'Karnataka',
    energy: 5,
    maxEnergy: 5,
    lastEnergyRecharge: Date.now(),
    gems: 500,
    trophies: 1650,
    isPro: false,
    avatar: '🦁'
  }
];

const DEFAULT_BOT_SETTINGS = {
  matchmakingWaitSeconds: 5,
  juniorBotSpeedRange: [6.0, 9.0],
  seniorBotSpeedRange: [4.5, 7.0],
  openBotSpeedRange: [3.5, 6.0],
  guaranteedHumanWinInSinglePlayer: true
};

const DEFAULT_CHAMPIONSHIPS = [
  {
    id: 'champ_mega_sunday',
    title: 'Sunday 8:00 PM National Champions Trophy',
    division: 'All',
    prizeDescription: 'Gold Plated Championship Trophy + ₹25,000 Scholarship Grant',
    sponsorName: 'Zenith EdTech Foundation',
    sponsorLogo: '🎓',
    entryEnergyCost: 1,
    // Sunday 8 PM ahead
    startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000).toISOString(),
    isLive: false,
    totalRegistered: 1420
  },
  {
    id: 'champ_junior_cup',
    title: 'Junior League STEM Championship',
    division: 'Junior',
    prizeDescription: 'Custom Silver Medal + STEM Learning Kit',
    sponsorName: 'National Science Academy',
    sponsorLogo: '🔬',
    entryEnergyCost: 1,
    startTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
    isLive: false,
    totalRegistered: 680
  }
];

const DEFAULT_STORE_OFFERS = [
  {
    id: 'offer_weekend_double',
    title: '50% Off Lifeline Mega Pack',
    description: 'Get 10x 50:50 and 10x Time Freeze lifelines at half price!',
    gemCost: 149,
    discountPercent: 50,
    expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
    badge: 'FESTIVE DEAL'
  }
];

const DEFAULT_CLANS = [
  {
    id: 'clan_dps9',
    code: 'CLAN-DPS9',
    name: 'DPS Superstars Clan',
    description: 'National Championship Contenders • Delhi Public School Quiz Knights',
    badge: '🛡️',
    leaderId: 'bot_leader_1',
    leaderName: 'Aditya Verma',
    createdAt: Date.now() - 30 * 24 * 60 * 60 * 1000,
    gamesPlayed: 142,
    totalTrophies: 8940,
    averageTrophies: 1118,
    members: [
      { id: 'bot_leader_1', name: 'Aditya Verma', avatar: '👑', trophies: 1450, role: 'Leader', gamesPlayed: 28 },
      { id: 'bot_mem_2', name: 'Kavya Pillai', avatar: '⭐', trophies: 1380, role: 'Member', gamesPlayed: 24 },
      { id: 'bot_mem_3', name: 'Zoya Khan', avatar: '🦁', trophies: 1290, role: 'Member', gamesPlayed: 20 },
      { id: 'bot_mem_4', name: 'Rohan Mehra', avatar: '🚀', trophies: 1150, role: 'Member', gamesPlayed: 18 },
      { id: 'bot_mem_5', name: 'Sneha Patel', avatar: '💎', trophies: 1040, role: 'Member', gamesPlayed: 16 },
      { id: 'bot_mem_6', name: 'Tanmay B.', avatar: '⚡', trophies: 960, role: 'Member', gamesPlayed: 14 },
      { id: 'bot_mem_7', name: 'Priya Sharma', avatar: '🎯', trophies: 880, role: 'Member', gamesPlayed: 12 },
      { id: 'bot_mem_8', name: 'Arjun Das', avatar: '🔥', trophies: 790, role: 'Member', gamesPlayed: 10 }
    ]
  },
  {
    id: 'clan_ssc1',
    code: 'CLAN-SSC1',
    name: 'SSC Crackers Guild',
    description: 'Fast-paced trivia & competitive exam aspirants guild',
    badge: '⚡',
    leaderId: 'bot_leader_2',
    leaderName: 'Vikramaditya S.',
    createdAt: Date.now() - 20 * 24 * 60 * 60 * 1000,
    gamesPlayed: 198,
    totalTrophies: 8420,
    averageTrophies: 842,
    members: [
      { id: 'bot_leader_2', name: 'Vikramaditya S.', avatar: '👑', trophies: 1620, role: 'Leader', gamesPlayed: 32 },
      { id: 'bot_ssc_2', name: 'Ananya Sharma', avatar: '⭐', trophies: 1210, role: 'Member', gamesPlayed: 26 },
      { id: 'bot_ssc_3', name: 'Deepak Rao', avatar: '🧠', trophies: 1050, role: 'Member', gamesPlayed: 22 },
      { id: 'bot_ssc_4', name: 'Neha Gupta', avatar: '🦁', trophies: 940, role: 'Member', gamesPlayed: 20 },
      { id: 'bot_ssc_5', name: 'Siddharth R.', avatar: '🚀', trophies: 820, role: 'Member', gamesPlayed: 18 },
      { id: 'bot_ssc_6', name: 'Fatima Zahra', avatar: '💎', trophies: 780, role: 'Member', gamesPlayed: 17 },
      { id: 'bot_ssc_7', name: 'Manish Kumar', avatar: '🎯', trophies: 670, role: 'Member', gamesPlayed: 16 },
      { id: 'bot_ssc_8', name: 'Pooja Verma', avatar: '🔥', trophies: 550, role: 'Member', gamesPlayed: 15 },
      { id: 'bot_ssc_9', name: 'Rahul Joshi', avatar: '⚡', trophies: 410, role: 'Member', gamesPlayed: 16 },
      { id: 'bot_ssc_10', name: 'Divya Nair', avatar: '🎮', trophies: 370, role: 'Member', gamesPlayed: 16 }
    ]
  },
  {
    id: 'clan_stx3',
    code: 'CLAN-STX3',
    name: 'St. Xavier Quiz Champs',
    description: 'Literature, Science & History Hot-Seat enthusiasts',
    badge: '🦅',
    leaderId: 'bot_leader_3',
    leaderName: 'Rehan Sheikh',
    createdAt: Date.now() - 15 * 24 * 60 * 60 * 1000,
    gamesPlayed: 110,
    totalTrophies: 7850,
    averageTrophies: 1121,
    members: [
      { id: 'bot_leader_3', name: 'Rehan Sheikh', avatar: '👑', trophies: 1520, role: 'Leader', gamesPlayed: 24 },
      { id: 'bot_stx_2', name: 'Ishaan Roy', avatar: '🦅', trophies: 1390, role: 'Member', gamesPlayed: 20 },
      { id: 'bot_stx_3', name: 'Simran Kaur', avatar: '⭐', trophies: 1250, role: 'Member', gamesPlayed: 18 },
      { id: 'bot_stx_4', name: 'Varun Nair', avatar: '🦁', trophies: 1100, role: 'Member', gamesPlayed: 16 },
      { id: 'bot_stx_5', name: 'Meera Sen', avatar: '🧠', trophies: 990, role: 'Member', gamesPlayed: 12 },
      { id: 'bot_stx_6', name: 'Kunal Ghosh', avatar: '⚡', trophies: 880, role: 'Member', gamesPlayed: 11 },
      { id: 'bot_stx_7', name: 'Tarun Sethi', avatar: '🎯', trophies: 720, role: 'Member', gamesPlayed: 9 }
    ]
  }
];

class StorageService {
  constructor() {
    this.init();
  }

  init() {
    if (typeof window === 'undefined') return;

    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEFAULT_USERS));
    } else {
      // Auto-sync Master Admin credentials from DEFAULT_USERS[0] if modified in code
      try {
        const storedUsers = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
        const adminIdx = storedUsers.findIndex(u => u.role === 'admin' || u.id === 'user_admin');
        const defaultAdmin = DEFAULT_USERS[0];
        if (adminIdx !== -1 && defaultAdmin) {
          if (storedUsers[adminIdx].email !== defaultAdmin.email || storedUsers[adminIdx].password !== defaultAdmin.password) {
            storedUsers[adminIdx].email = defaultAdmin.email;
            storedUsers[adminIdx].password = defaultAdmin.password;
            if (defaultAdmin.secondaryEmail) storedUsers[adminIdx].secondaryEmail = defaultAdmin.secondaryEmail;
            localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(storedUsers));
          }
        }
      } catch (e) {
        console.error('Error syncing admin credentials', e);
      }
    }

    if (!localStorage.getItem(STORAGE_KEYS.QUESTIONS)) {
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(INITIAL_QUESTIONS));
    }

    if (!localStorage.getItem(STORAGE_KEYS.CHAMPIONSHIPS)) {
      localStorage.setItem(STORAGE_KEYS.CHAMPIONSHIPS, JSON.stringify(DEFAULT_CHAMPIONSHIPS));
    }

    if (!localStorage.getItem(STORAGE_KEYS.BOT_SETTINGS)) {
      localStorage.setItem(STORAGE_KEYS.BOT_SETTINGS, JSON.stringify(DEFAULT_BOT_SETTINGS));
    }

    if (!localStorage.getItem(STORAGE_KEYS.STORE_OFFERS)) {
      localStorage.setItem(STORAGE_KEYS.STORE_OFFERS, JSON.stringify(DEFAULT_STORE_OFFERS));
    }

    if (!localStorage.getItem(STORAGE_KEYS.PRIZE_CLAIMS)) {
      localStorage.setItem(STORAGE_KEYS.PRIZE_CLAIMS, JSON.stringify([]));
    }

    if (!localStorage.getItem(STORAGE_KEYS.CLANS)) {
      localStorage.setItem(STORAGE_KEYS.CLANS, JSON.stringify(DEFAULT_CLANS));
    }
  }

  // --- Auth & Users ---
  getUsers() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USERS);
      return data ? JSON.parse(data) : DEFAULT_USERS;
    } catch {
      return DEFAULT_USERS;
    }
  }

  saveUsers(users) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }

  getCurrentUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      if (!data) return null;
      const user = JSON.parse(data);
      // Auto-recharge energy check
      return this.checkEnergyRecharge(user);
    } catch {
      return null;
    }
  }

  setCurrentUser(user) {
    if (!user) {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    } else {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
      // Also update in all users
      const users = this.getUsers();
      const idx = users.findIndex(u => u.id === user.id);
      if (idx !== -1) {
        users[idx] = user;
        this.saveUsers(users);
      }
    }
  }

  async updateAdminCredentials(newEmail, newPassword) {
    try {
      const users = this.getUsers();
      const adminIdx = users.findIndex(u => u.role === 'admin' || u.id === 'user_admin');
      if (adminIdx !== -1) {
        if (newEmail) users[adminIdx].email = newEmail.trim();
        if (newPassword) {
          users[adminIdx].password = await hashPassword(newPassword);
        }
        this.saveUsers(users);

        const current = this.getCurrentUser();
        if (current && (current.role === 'admin' || current.id === 'user_admin')) {
          if (newEmail) current.email = newEmail.trim();
          if (newPassword) current.password = users[adminIdx].password;
          localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(current));
        }
        return { success: true, hashedPassword: users[adminIdx].password };
      }
      return { success: false, error: 'Admin account not found.' };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  // Downward Fair Play Practice tracking (max 2 per day)
  getDownwardPracticeUsage(userId) {
    if (!userId) return { count: 0, date: new Date().toDateString() };
    try {
      const key = `brainleague_downward_practice_${userId}`;
      const raw = localStorage.getItem(key);
      const today = new Date().toDateString();
      if (!raw) return { count: 0, date: today };
      const parsed = JSON.parse(raw);
      if (parsed.date !== today) {
        return { count: 0, date: today };
      }
      return parsed;
    } catch {
      return { count: 0, date: new Date().toDateString() };
    }
  }

  recordDownwardPractice(userId) {
    if (!userId) return;
    try {
      const current = this.getDownwardPracticeUsage(userId);
      const today = new Date().toDateString();
      const updated = { count: current.count + 1, date: today };
      localStorage.setItem(`brainleague_downward_practice_${userId}`, JSON.stringify(updated));
      return updated;
    } catch {}
  }

  // Recharge 1 Heart every 30 minutes (Halal Daily Energy System)
  checkEnergyRecharge(user) {
    if (!user || user.isPro || user.energy >= user.maxEnergy) {
      return user;
    }

    const now = Date.now();
    const intervalMs = 30 * 60 * 1000; // 30 minutes
    const lastRecharge = user.lastEnergyRecharge || now;
    const elapsed = now - lastRecharge;

    if (elapsed >= intervalMs) {
      const heartsToAdd = Math.floor(elapsed / intervalMs);
      const newEnergy = Math.min(user.maxEnergy, user.energy + heartsToAdd);
      const updatedUser = {
        ...user,
        energy: newEnergy,
        lastEnergyRecharge: now
      };
      this.setCurrentUser(updatedUser);
      return updatedUser;
    }

    return user;
  }

  // --- Questions Bank ---
  getQuestions() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(INITIAL_QUESTIONS));
        return INITIAL_QUESTIONS;
      }
      const parsed = JSON.parse(data);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(INITIAL_QUESTIONS));
        return INITIAL_QUESTIONS;
      }

      const existingIds = new Set(parsed.map(q => q.id));

      // 1. Merge updated seed fields (Hindi translations, hints, etc.)
      const mergedExisting = parsed.map(q => {
        const seed = INITIAL_QUESTIONS.find(iq => iq.id === q.id);
        if (seed) {
          return {
            ...seed,
            ...q,
            text_hi: q.text_hi || seed.text_hi,
            options_hi: q.options_hi || seed.options_hi,
            guruHint_hi: q.guruHint_hi || seed.guruHint_hi,
            explanation_hi: q.explanation_hi || seed.explanation_hi,
            chapter: q.chapter || seed.chapter,
            grade: q.grade || seed.grade,
            isCurrentAffairs: q.isCurrentAffairs !== undefined ? q.isCurrentAffairs : seed.isCurrentAffairs,
            validUntil: q.validUntil || seed.validUntil,
            validityMonths: q.validityMonths || seed.validityMonths,
            status: q.status || seed.status,
            topic: q.topic || seed.topic
          };
        }
        return q;
      });

      // 2. Automatically inject any newly added NCERT or syllabus questions
      const newSeedQuestions = INITIAL_QUESTIONS.filter(iq => !existingIds.has(iq.id));

      if (newSeedQuestions.length > 0) {
        const combined = [...mergedExisting, ...newSeedQuestions];
        localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(combined));
        return combined;
      }

      return mergedExisting;
    } catch (e) {
      console.error('Error loading questions from storage, falling back to seed:', e);
      return INITIAL_QUESTIONS;
    }
  }

  /**
   * Force sync all seed questions into local storage (for Auto-Update)
   */
  syncSeedQuestions() {
    try {
      const current = this.getQuestions();
      const existingIds = new Set(current.map(q => q.id));
      const missing = INITIAL_QUESTIONS.filter(q => !existingIds.has(q.id));
      
      const refreshed = current.map(q => {
        const seed = INITIAL_QUESTIONS.find(iq => iq.id === q.id);
        return seed ? { ...seed, ...q } : q;
      });

      const finalQuestions = [...refreshed, ...missing];
      localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(finalQuestions));
      return { success: true, total: finalQuestions.length, newAdded: missing.length };
    } catch (e) {
      console.error('Failed to sync seed questions:', e);
      return { success: false, error: e.message };
    }
  }

  saveQuestions(questions) {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  }

  addQuestion(newQ) {
    const list = this.getQuestions();
    list.unshift(newQ);
    this.saveQuestions(list);
    return list;
  }

  addBatchQuestions(newQuestions) {
    const list = this.getQuestions();
    const merged = [...newQuestions, ...list];
    this.saveQuestions(merged);
    return merged;
  }

  deleteQuestion(id) {
    const list = this.getQuestions().filter(q => q.id !== id);
    this.saveQuestions(list);
    return list;
  }

  updateQuestion(updatedQ) {
    const list = this.getQuestions();
    const idx = list.findIndex(q => q.id === updatedQ.id);
    if (idx !== -1) {
      list[idx] = updatedQ;
      this.saveQuestions(list);
    }
    return list;
  }

  // --- Championships ---
  getChampionships() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CHAMPIONSHIPS);
      return data ? JSON.parse(data) : DEFAULT_CHAMPIONSHIPS;
    } catch {
      return DEFAULT_CHAMPIONSHIPS;
    }
  }

  saveChampionships(champs) {
    localStorage.setItem(STORAGE_KEYS.CHAMPIONSHIPS, JSON.stringify(champs));
  }

  // --- Bot Settings ---
  getBotSettings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOT_SETTINGS);
      return data ? JSON.parse(data) : DEFAULT_BOT_SETTINGS;
    } catch {
      return DEFAULT_BOT_SETTINGS;
    }
  }

  saveBotSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.BOT_SETTINGS, JSON.stringify(settings));
  }

  // --- Store Offers ---
  getStoreOffers() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STORE_OFFERS);
      return data ? JSON.parse(data) : DEFAULT_STORE_OFFERS;
    } catch {
      return DEFAULT_STORE_OFFERS;
    }
  }

  saveStoreOffers(offers) {
    localStorage.setItem(STORAGE_KEYS.STORE_OFFERS, JSON.stringify(offers));
  }

  addStoreOffer(offer) {
    const offers = this.getStoreOffers();
    const newOffer = {
      ...offer,
      id: offer.id || `offer_${Date.now()}`,
      isActive: offer.isActive !== undefined ? offer.isActive : true,
      createdAt: new Date().toISOString()
    };
    const updated = [newOffer, ...offers];
    this.saveStoreOffers(updated);
    return updated;
  }

  updateStoreOffer(id, partial) {
    const offers = this.getStoreOffers();
    const idx = offers.findIndex(o => o.id === id);
    if (idx !== -1) {
      offers[idx] = { ...offers[idx], ...partial };
      this.saveStoreOffers(offers);
    }
    return offers;
  }

  deleteStoreOffer(id) {
    const offers = this.getStoreOffers().filter(o => o.id !== id);
    this.saveStoreOffers(offers);
    return offers;
  }

  toggleStoreOffer(id) {
    const offers = this.getStoreOffers();
    const target = offers.find(o => o.id === id);
    if (target) {
      target.isActive = target.isActive === undefined ? false : !target.isActive;
      this.saveStoreOffers(offers);
    }
    return offers;
  }

  // --- Master System Settings & Feature Gates ---
  getSystemSettings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SYSTEM_SETTINGS);
      if (!data) return DEFAULT_SYSTEM_SETTINGS;
      const parsed = JSON.parse(data);
      return {
        ...DEFAULT_SYSTEM_SETTINGS,
        ...parsed,
        freeAccess: { ...DEFAULT_SYSTEM_SETTINGS.freeAccess, ...(parsed.freeAccess || {}) },
        broadcast: { ...DEFAULT_SYSTEM_SETTINGS.broadcast, ...(parsed.broadcast || {}) },
        featureLocks: { ...DEFAULT_SYSTEM_SETTINGS.featureLocks, ...(parsed.featureLocks || {}) },
        economy: { ...DEFAULT_SYSTEM_SETTINGS.economy, ...(parsed.economy || {}) }
      };
    } catch {
      return DEFAULT_SYSTEM_SETTINGS;
    }
  }

  saveSystemSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.SYSTEM_SETTINGS, JSON.stringify(settings));
  }

  updateSystemSettings(partial) {
    const current = this.getSystemSettings();
    const merged = {
      ...current,
      ...partial,
      freeAccess: partial.freeAccess ? { ...current.freeAccess, ...partial.freeAccess } : current.freeAccess,
      broadcast: partial.broadcast ? { ...current.broadcast, ...partial.broadcast } : current.broadcast,
      featureLocks: partial.featureLocks ? { ...current.featureLocks, ...partial.featureLocks } : current.featureLocks,
      economy: partial.economy ? { ...current.economy, ...partial.economy } : current.economy
    };
    this.saveSystemSettings(merged);
    return merged;
  }

  isFreeAccessActive() {
    const s = this.getSystemSettings();
    if (!s.freeAccess || !s.freeAccess.enabled) return false;
    if (s.freeAccess.expiresAt) {
      return new Date(s.freeAccess.expiresAt).getTime() > Date.now();
    }
    return true;
  }

  getFreeAccessExpiresAt() {
    const s = this.getSystemSettings();
    return s.freeAccess?.expiresAt || null;
  }

  isMaintenanceActive() {
    const s = this.getSystemSettings();
    return Boolean(s.maintenanceMode);
  }

  isFeatureHeld(featureKey) {
    const s = this.getSystemSettings();
    return s.featureLocks?.[featureKey] === 'held';
  }

  // --- Prize Claims ---
  getPrizeClaims() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PRIZE_CLAIMS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  savePrizeClaims(claims) {
    localStorage.setItem(STORAGE_KEYS.PRIZE_CLAIMS, JSON.stringify(claims));
  }

  addPrizeClaim(claim) {
    const list = this.getPrizeClaims();
    list.unshift({
      ...claim,
      id: `CLAIM_${Date.now()}`,
      status: 'Pending',
      createdAt: new Date().toISOString()
    });
    this.savePrizeClaims(list);
    return list;
  }

  updateClaimStatus(claimId, status, trackingNumber = '') {
    const list = this.getPrizeClaims();
    const idx = list.findIndex(c => c.id === claimId);
    if (idx !== -1) {
      list[idx].status = status;
      if (trackingNumber) list[idx].trackingNumber = trackingNumber;
      this.savePrizeClaims(list);
    }
    return list;
  }

  // --- View Mode (Mobile Frame vs Fullscreen Desktop) ---
  getViewMode() {
    return localStorage.getItem(STORAGE_KEYS.VIEW_MODE) || 'mobile';
  }

  setViewMode(mode) {
    localStorage.setItem(STORAGE_KEYS.VIEW_MODE, mode);
  }

  // --- Clans System ---
  getClans() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CLANS);
      return data ? JSON.parse(data) : DEFAULT_CLANS;
    } catch {
      return DEFAULT_CLANS;
    }
  }

  saveClans(clans) {
    localStorage.setItem(STORAGE_KEYS.CLANS, JSON.stringify(clans));
  }

  getUserClan(userId) {
    if (!userId) return null;
    const clans = this.getClans();
    return clans.find(c => c.members && c.members.some(m => m.id === userId)) || null;
  }

  getClanById(clanId) {
    if (!clanId) return null;
    const clans = this.getClans();
    const query = String(clanId).trim().toUpperCase();
    return clans.find(c => c.id === clanId || c.code.toUpperCase() === query) || null;
  }

  createClan({ name, description, badge, leaderId, leaderName, leaderAvatar, leaderTrophies }) {
    if (!leaderId) return { success: false, error: 'You must be signed in to create a clan.' };

    const existing = this.getUserClan(leaderId);
    if (existing) {
      return { success: false, error: `You are already a member of "${existing.name}". Leave your current clan first.` };
    }

    const clans = this.getClans();

    // Check duplicate name
    if (clans.some(c => c.name.toLowerCase() === name.trim().toLowerCase())) {
      return { success: false, error: 'A clan with this name already exists. Choose a unique name.' };
    }

    // Generate unique 4-character ID code (e.g. CLAN-8K9P)
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'CLAN-';
    for (let i = 0; i < 4; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    while (clans.some(c => c.code === code)) {
      code = 'CLAN-';
      for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
    }

    const trophies = leaderTrophies || 200;
    const newClan = {
      id: `clan_${Date.now()}`,
      code,
      name: name.trim(),
      description: description?.trim() || 'A competitive BrainLeague knowledge clan.',
      badge: badge || '🛡️',
      leaderId,
      leaderName: leaderName || 'Clan Leader',
      createdAt: Date.now(),
      gamesPlayed: 0,
      totalTrophies: trophies,
      averageTrophies: trophies,
      members: [
        {
          id: leaderId,
          name: leaderName || 'Clan Leader',
          avatar: leaderAvatar || '👑',
          trophies,
          role: 'Leader',
          gamesPlayed: 0,
          joinedAt: Date.now()
        }
      ]
    };

    clans.unshift(newClan);
    this.saveClans(clans);
    return { success: true, clan: newClan };
  }

  joinClan(clanIdOrCode, player) {
    if (!player || !player.id) {
      return { success: false, error: 'You must be signed in to join a clan.' };
    }

    const currentClan = this.getUserClan(player.id);
    if (currentClan) {
      return { success: false, error: `You are already a member of "${currentClan.name}". A player can only be in one clan at a time.` };
    }

    const clans = this.getClans();
    const query = String(clanIdOrCode).trim().toUpperCase();
    const target = clans.find(
      c => c.id === clanIdOrCode ||
           c.code.toUpperCase() === query ||
           c.name.toLowerCase() === String(clanIdOrCode).trim().toLowerCase()
    );

    if (!target) {
      return { success: false, error: 'Clan not found. Please verify the Clan ID or Name.' };
    }

    if (target.members.length >= 30) {
      return { success: false, error: 'This clan is full (maximum 30 members).' };
    }

    const trophies = player.trophies || 200;
    target.members.push({
      id: player.id,
      name: player.name || 'Member',
      avatar: player.avatar || '⭐',
      trophies,
      role: 'Member',
      gamesPlayed: 0,
      joinedAt: Date.now()
    });

    target.totalTrophies = target.members.reduce((acc, m) => acc + (m.trophies || 0), 0);
    target.averageTrophies = Math.round(target.totalTrophies / target.members.length);

    this.saveClans(clans);
    return { success: true, clan: target };
  }

  leaveClan(clanId, userId) {
    if (!userId) return { success: false, error: 'User ID missing.' };
    const clans = this.getClans();
    const clanIndex = clans.findIndex(c => c.id === clanId);
    if (clanIndex === -1) return { success: false, error: 'Clan not found.' };

    const clan = clans[clanIndex];
    clan.members = clan.members.filter(m => m.id !== userId);

    if (clan.members.length === 0) {
      // Disband empty clan
      clans.splice(clanIndex, 1);
      this.saveClans(clans);
      return { success: true, disbanded: true };
    }

    // If leader left, promote next member
    if (clan.leaderId === userId) {
      clan.members[0].role = 'Leader';
      clan.leaderId = clan.members[0].id;
      clan.leaderName = clan.members[0].name;
    }

    clan.totalTrophies = clan.members.reduce((acc, m) => acc + (m.trophies || 0), 0);
    clan.averageTrophies = Math.round(clan.totalTrophies / clan.members.length);

    this.saveClans(clans);
    return { success: true, clan };
  }

  recordClanMatchForUser(userId, trophyDelta = 0, pointsWon = 0) {
    if (!userId) return null;
    const clans = this.getClans();
    const clan = clans.find(c => c.members && c.members.some(m => m.id === userId));
    if (!clan) return null;

    const member = clan.members.find(m => m.id === userId);
    if (member) {
      member.trophies = Math.max(0, (member.trophies || 0) + trophyDelta);
      member.gamesPlayed = (member.gamesPlayed || 0) + 1;
    }

    clan.gamesPlayed = (clan.gamesPlayed || 0) + 1;
    clan.totalTrophies = clan.members.reduce((acc, m) => acc + (m.trophies || 0), 0);
    clan.averageTrophies = Math.round(clan.totalTrophies / clan.members.length);

    this.saveClans(clans);
    return clan;
  }
}

export const storageService = new StorageService();
export default storageService;
