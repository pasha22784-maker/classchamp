import * as Speech from 'expo-speech';
import { triggerHaptic } from './haptics';

// Detect if text contains Devanagari Hindi characters
export function isHindiText(text: string): boolean {
  return /[\u0900-\u097F]/.test(text);
}

// Prepare text for friendly child-oriented speech
export function prepareTextForSpeech(text: string): string {
  if (!text) return '';

  const isHindi = isHindiText(text);

  return text
    // Replace [BLANK] or underscores with natural spoken words
    .replace(/\[BLANK\]/gi, isHindi ? 'खाली जगह' : 'blank')
    .replace(/_{2,}/g, isHindi ? 'खाली जगह' : 'blank')
    // Remove markdown asterisks
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    // Replace mathematical symbols with natural words
    .replace(/ \+ /g, isHindi ? ' जमा ' : ' plus ')
    .replace(/ - /g, isHindi ? ' घटा ' : ' minus ')
    .replace(/ × /g, isHindi ? ' गुणा ' : ' multiplied by ')
    .replace(/ ÷ /g, isHindi ? ' भाग ' : ' divided by ')
    .replace(/ = /g, isHindi ? ' बराबर ' : ' equals ')
    .trim();
}

let currentlySpeakingText: string | null = null;
let speechListeners: Set<(speakingText: string | null) => void> = new Set();

export function subscribeToSpeech(callback: (speakingText: string | null) => void) {
  speechListeners.add(callback);
  return () => {
    speechListeners.delete(callback);
  };
}

function notifyListeners(text: string | null) {
  currentlySpeakingText = text;
  speechListeners.forEach((cb) => cb(text));
}

export function stopSpeaking() {
  try {
    Speech.stop();
  } catch {
    // ignore
  }
  notifyListeners(null);
}

export function speakText(rawText: string, onDone?: () => void) {
  if (!rawText) return;

  const spokenText = prepareTextForSpeech(rawText);
  if (!spokenText) return;

  // If already speaking this exact text, toggle off (stop)
  if (currentlySpeakingText === rawText) {
    stopSpeaking();
    return;
  }

  // Stop any previous speech
  stopSpeaking();
  triggerHaptic('light');

  const isHindi = isHindiText(spokenText);
  const lang = isHindi ? 'hi-IN' : 'en-IN';

  notifyListeners(rawText);

  try {
    Speech.speak(spokenText, {
      language: lang,
      pitch: 1.05,
      rate: 0.82, // Slower, clearer pace for 1st-6th grade kids
      onDone: () => {
        notifyListeners(null);
        if (onDone) onDone();
      },
      onError: () => {
        // Fallback to en-US if en-IN is unavailable on some devices
        if (!isHindi && lang === 'en-IN') {
          try {
            Speech.speak(spokenText, {
              language: 'en-US',
              pitch: 1.05,
              rate: 0.82,
              onDone: () => notifyListeners(null),
              onError: () => notifyListeners(null),
            });
            return;
          } catch {
            // ignore
          }
        }
        notifyListeners(null);
      },
    });
  } catch {
    notifyListeners(null);
  }
}

export function getCurrentlySpeaking(): string | null {
  return currentlySpeakingText;
}
