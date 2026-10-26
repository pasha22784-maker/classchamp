/**
 * App.jsx
 * Main Application Orchestrator with dynamic role routing and state machine.
 */

import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { GameProvider, useGame } from './context/GameContext';
import AppLayout from './components/layout/AppLayout';
import roomService from './services/roomService';

import storageService from './services/storageService';
import { ShieldAlert, RefreshCw, Lock } from 'lucide-react';

// Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FFFLobbyScreen from './screens/FFFLobbyScreen';
import FFFScreen from './screens/FFFScreen';
import HotSeatScreen from './screens/HotSeatScreen';
import SpectatorScreen from './screens/SpectatorScreen';
import ResultScreen from './screens/ResultScreen';
import StoreScreen from './screens/StoreScreen';
import AdminScreen from './screens/AdminScreen';
import PrivateRoomScreen from './screens/PrivateRoomScreen';
import JoinRoomScreen from './screens/JoinRoomScreen';
import ClanScreen from './screens/ClanScreen';

function AppContent() {
  const { currentUser, adminViewMode, logout } = useAuth();
  const { screen, navigateTo } = useGame();
  const [pendingRoomCode, setPendingRoomCode] = useState('');

  // Check URL parameter ?room=CODE on load
  useEffect(() => {
    const code = roomService.getRoomCodeFromUrl();
    if (code) {
      setPendingRoomCode(code);
      roomService.clearRoomFromUrl();
      if (currentUser) {
        navigateTo('JOIN_ROOM');
      }
    }
  }, [currentUser, navigateTo]);

  // If user just logged in and had a pending room code from invite URL
  useEffect(() => {
    if (currentUser && pendingRoomCode && screen === 'HOME') {
      navigateTo('JOIN_ROOM');
    }
  }, [currentUser, pendingRoomCode, screen, navigateTo]);

  // 1. Unauthenticated -> Show Universal Login
  if (!currentUser) {
    return <LoginScreen />;
  }

  // 2. Admin User in Admin Mode
  if (currentUser.role === 'admin' && adminViewMode === 'admin') {
    return <AdminScreen />;
  }

  // 3. Maintenance Hold Screen (If Admin has activated Maintenance Mode)
  if (storageService.isMaintenanceActive() && currentUser.role !== 'admin') {
    const sys = storageService.getSystemSettings();
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-crimsonAlert/20 border-2 border-crimsonAlert flex items-center justify-center text-3xl shadow-xl animate-pulse">
          ⚙️
        </div>
        <div>
          <h2 className="text-lg font-bold text-pearl uppercase font-cinzel">
            System Under Live Optimization
          </h2>
          <span className="text-xs text-champGold font-bold uppercase tracking-wider font-rajdhani">
            Scheduled Service Tune-Up in Progress
          </span>
        </div>
        <p className="text-xs text-slate-300 bg-navy-950 p-4 rounded-xl border border-white/10 leading-relaxed shadow-md">
          {sys.maintenanceMessage || "BrainLeague is currently undergoing live server maintenance. All player profiles, trophies and study clan points are 100% safe. We will be back online shortly!"}
        </p>
        <div className="flex gap-2 w-full pt-2">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-champGold to-champGold-dark text-navy-950 font-bold text-xs uppercase font-rajdhani flex items-center justify-center gap-1.5 shadow"
          >
            <RefreshCw size={14} />
            <span>Check Status</span>
          </button>
          <button
            type="button"
            onClick={logout}
            className="px-4 py-2.5 rounded-xl bg-navy-900 border border-white/20 text-slate-300 font-bold text-xs uppercase font-rajdhani hover:text-pearl"
          >
            Admin Sign In
          </button>
        </div>
      </div>
    );
  }

  // 3. Player Game Screens
  switch (screen) {
    case 'LOBBY':
      return <FFFLobbyScreen />;
    case 'FFF':
      return <FFFScreen />;
    case 'HOTSEAT':
      return <HotSeatScreen />;
    case 'SPECTATOR':
      return <SpectatorScreen />;
    case 'RESULT':
      return <ResultScreen />;
    case 'STORE':
      return <StoreScreen />;
    case 'ADMIN':
      return <AdminScreen />;
    case 'PRIVATE_ROOM':
      return <PrivateRoomScreen />;
    case 'JOIN_ROOM':
      return <JoinRoomScreen initialCode={pendingRoomCode} />;
    case 'CLAN':
      return <ClanScreen />;
    case 'HOME':
    default:
      return <HomeScreen />;
  }
}

export default function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <AppLayout>
          <AppContent />
        </AppLayout>
      </GameProvider>
    </AuthProvider>
  );
}
