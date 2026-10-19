/**
 * App.jsx
 * Main Application Orchestrator with dynamic role routing and state machine.
 */

import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { GameProvider, useGame } from './context/GameContext';
import AppLayout from './components/layout/AppLayout';

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

function AppContent() {
  const { currentUser, adminViewMode } = useAuth();
  const { screen } = useGame();

  // 1. Unauthenticated -> Show Universal Login
  if (!currentUser) {
    return <LoginScreen />;
  }

  // 2. Admin User in Admin Mode
  if (currentUser.role === 'admin' && adminViewMode === 'admin') {
    return <AdminScreen />;
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
