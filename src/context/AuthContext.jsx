/**
 * AuthContext.jsx
 * Universal Authentication & Role-Based Routing Context.
 * Supports Admin vs. Player auto-routing and 1-tap Admin "Player View" switch.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import storageService from '../services/storageService';
import { verifyPassword, hashPassword } from '../services/securityService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => storageService.getCurrentUser());
  const [adminViewMode, setAdminViewMode] = useState('admin'); // 'admin' | 'player'

  useEffect(() => {
    if (currentUser) {
      storageService.setCurrentUser(currentUser);
    }
  }, [currentUser]);

  // Login with credentials
  const login = async (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const users = storageService.getUsers();
    const candidate = users.find(
      u => (u.email.toLowerCase() === cleanEmail || u.secondaryEmail?.toLowerCase() === cleanEmail)
    );

    if (candidate) {
      const isMatch = await verifyPassword(password, candidate.password);
      if (isMatch) {
        const refreshed = storageService.checkEnergyRecharge(candidate);
        setCurrentUser(refreshed);
        storageService.setCurrentUser(refreshed);
        if (refreshed.role === 'admin') {
          setAdminViewMode('admin');
        }
        return { success: true, user: refreshed };
      }
    }
    return { success: false, error: "Invalid email or password." };
  };

  // Quick Demo Profile Login
  const loginAsDemo = (demoId) => {
    const users = storageService.getUsers();
    const found = users.find(u => u.id === demoId);
    if (found) {
      const refreshed = storageService.checkEnergyRecharge(found);
      setCurrentUser(refreshed);
      storageService.setCurrentUser(refreshed);
      if (refreshed.role === 'admin') {
        setAdminViewMode('admin');
      }
      return { success: true, user: refreshed };
    }
    return { success: false, error: "Demo user not found." };
  };

  // Signup new player
  const signup = async ({ name, email, password, division, city, state }) => {
    const users = storageService.getUsers();
    const exists = users.some(u => u.email.toLowerCase() === email.trim().toLowerCase());
    if (exists) {
      return { success: false, error: "An account with this email already exists." };
    }

    const hashedPassword = await hashPassword(password);

    const newUser = {
      id: `user_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      password: hashedPassword,
      role: 'player',
      division: division || 'Junior',
      city: city || 'New Delhi',
      state: state || 'Delhi',
      energy: 5,
      maxEnergy: 5,
      lastEnergyRecharge: Date.now(),
      gems: 100, // Welcome gift
      trophies: 200, // Base starting rank
      isPro: false,
      avatar: '⭐'
    };

    users.push(newUser);
    storageService.saveUsers(users);
    setCurrentUser(newUser);
    storageService.setCurrentUser(newUser);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setCurrentUser(null);
    storageService.setCurrentUser(null);
    setAdminViewMode('admin');
  };

  // Update profile
  const updateProfile = (updates) => {
    setCurrentUser(prev => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      storageService.setCurrentUser(updated);
      return updated;
    });
  };

  // Deduct 1 energy heart for match entry
  const deductEnergy = () => {
    if (!currentUser) return false;
    if (currentUser.isPro) return true; // Unlimited energy for Pro
    if (currentUser.energy < 1) return false;

    const updated = {
      ...currentUser,
      energy: currentUser.energy - 1,
      lastEnergyRecharge: currentUser.lastEnergyRecharge || Date.now()
    };
    setCurrentUser(updated);
    storageService.setCurrentUser(updated);
    return true;
  };

  // Spend gems
  const spendGems = (amount) => {
    if (!currentUser || currentUser.gems < amount) return false;
    const updated = {
      ...currentUser,
      gems: currentUser.gems - amount
    };
    setCurrentUser(updated);
    storageService.setCurrentUser(updated);
    return true;
  };

  // Add gems
  const addGems = (amount) => {
    if (!currentUser) return;
    const updated = {
      ...currentUser,
      gems: currentUser.gems + amount
    };
    setCurrentUser(updated);
    storageService.setCurrentUser(updated);
  };

  // Update ELO Trophies (+25 on win, -10 on loss)
  const updateTrophies = (delta) => {
    if (!currentUser) return;
    const newTrophies = Math.max(0, (currentUser.trophies || 0) + delta);
    const updated = {
      ...currentUser,
      trophies: newTrophies
    };
    setCurrentUser(updated);
    storageService.setCurrentUser(updated);
  };

  // Admin toggle to test game as player
  const toggleAdminViewMode = () => {
    setAdminViewMode(prev => (prev === 'admin' ? 'player' : 'admin'));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        loginAsDemo,
        signup,
        logout,
        updateProfile,
        deductEnergy,
        spendGems,
        addGems,
        updateTrophies,
        adminViewMode,
        setAdminViewMode,
        toggleAdminViewMode
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
