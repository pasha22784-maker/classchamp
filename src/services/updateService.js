/**
 * updateService.js
 * Over-The-Air (OTA) Auto-Update & Synchronisation Manager for BrainLeague.
 * Enables installed Android App (and Web) to automatically detect new updates
 * published to play.bolchaall.com and apply them without manual APK re-installation.
 */

import storageService from './storageService';

export const CURRENT_APP_VERSION = '2.5.0';
export const CURRENT_BUILD_TIMESTAMP = 1793165400000;

class UpdateService {
  constructor() {
    this.updateAvailable = false;
    this.remoteInfo = null;
    this.listeners = new Set();
    this.isChecking = false;
    this.lastCheckedTime = 0;
  }

  addListener(callback) {
    this.listeners.add(callback);
    // Return unsubscribe function
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach(fn => {
      try {
        fn({
          updateAvailable: this.updateAvailable,
          remoteInfo: this.remoteInfo,
          currentVersion: CURRENT_APP_VERSION,
          isChecking: this.isChecking
        });
      } catch (err) {
        console.error('UpdateService listener error:', err);
      }
    });
  }

  /**
   * Check whether a newer version or fresh build is live on the server
   */
  async checkForUpdates(force = false) {
    const now = Date.now();
    // Don't hammer the server if checked in the last 20 seconds unless forced
    if (!force && now - this.lastCheckedTime < 20000) {
      return { updateAvailable: this.updateAvailable, remoteInfo: this.remoteInfo };
    }

    this.isChecking = true;
    this.notify();

    try {
      const response = await fetch(`/version.json?_t=${now}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });

      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
      }

      const info = await response.json();
      this.lastCheckedTime = now;

      const hasNewerVersion = info.version && info.version !== CURRENT_APP_VERSION;
      const hasNewerBuild = info.buildTimestamp && info.buildTimestamp > CURRENT_BUILD_TIMESTAMP;

      if (hasNewerVersion || hasNewerBuild) {
        this.updateAvailable = true;
        this.remoteInfo = info;
      } else {
        this.updateAvailable = false;
        this.remoteInfo = info;
      }
    } catch (err) {
      console.warn('Update check failed (possibly offline or server unreachable):', err.message);
      // Still sync seed questions locally even if offline
    } finally {
      this.isChecking = false;
      this.notify();
    }

    return { updateAvailable: this.updateAvailable, remoteInfo: this.remoteInfo };
  }

  /**
   * Perform instant 1-tap Over-The-Air synchronization
   * 1. Merges any newly added NCERT seed questions into localStorage
   * 2. Clears browser CacheStorage / stale assets
   * 3. Hard-reloads the application
   */
  async syncNow() {
    try {
      // 1. Force-sync question bank
      storageService.syncSeedQuestions();

      // 2. Clear caches if available
      if (typeof window !== 'undefined' && 'caches' in window) {
        try {
          const cacheNames = await window.caches.keys();
          await Promise.all(cacheNames.map(name => window.caches.delete(name)));
        } catch (cErr) {
          console.warn('Cache clearing error (non-fatal):', cErr);
        }
      }

      // 3. Clear Service Workers if any
      if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
        try {
          const registrations = await navigator.serviceWorker.getRegistrations();
          for (let reg of registrations) {
            await reg.unregister();
          }
        } catch (swErr) {
          console.warn('SW unregister error (non-fatal):', swErr);
        }
      }

      // 4. Force hard reload with cache-bust
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set('_v', Date.now().toString());
      window.location.href = currentUrl.toString();
    } catch (e) {
      console.error('Sync failed:', e);
      window.location.reload(true);
    }
  }
}

const updateService = new UpdateService();

// Automatically perform update check 3 seconds after boot
if (typeof window !== 'undefined') {
  setTimeout(() => {
    updateService.checkForUpdates().catch(() => {});
  }, 3000);
}

export default updateService;
