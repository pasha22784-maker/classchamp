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
  VIEW_MODE: 'classchamp_view_mode' // 'mobile' | 'desktop'
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
      return data ? JSON.parse(data) : INITIAL_QUESTIONS;
    } catch {
      return INITIAL_QUESTIONS;
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
}

export const storageService = new StorageService();
export default storageService;
