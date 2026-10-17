import * as Speech from 'expo-speech';
import { triggerHaptic } from './haptics';

// Detect if text contains Devanagari Hindi characters
export function isHindiText(text: string): boolean {
  return /[\u0900-\u097F]/.test(text);
}

// Prepare text for friendly child-oriented speech:
// 1. Strips all emojis, icons, and pictorial symbols so TTS doesn't speak emoji names (e.g. "red apple", "triangular ruler")
// 2. Converts math symbols and blanks to natural spoken words
// 3. Formats currency and percentages properly
export function prepareTextForSpeech(text: string): string {
  if (!text) return '';

  const isHindi = isHindiText(text);

  let cleaned = text
    // Replace currency symbol
    .replace(/₹\s*(\d+)/g, (_, num) => (isHindi ? `${num} रुपये` : `${num} rupees`))
    .replace(/₹/g, isHindi ? 'रुपये ' : 'rupees ')
    // Replace percentages
    .replace(/%/g, isHindi ? ' प्रतिशत' : ' percent')
    // Replace [BLANK] or underscores with natural spoken words
    .replace(/\[BLANK\]/gi, isHindi ? 'खाली जगह' : 'blank')
    .replace(/_{2,}/g, isHindi ? 'खाली जगह' : 'blank')
    // Remove markdown formatting
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/#{1,6}\s+/g, '')
    // Replace mathematical symbols with natural spoken words
    .replace(/ \+ /g, isHindi ? ' जमा ' : ' plus ')
    .replace(/ - /g, isHindi ? ' घटा ' : ' minus ')
    .replace(/ × /g, isHindi ? ' गुणा ' : ' multiplied by ')
    .replace(/ ÷ /g, isHindi ? ' भाग ' : ' divided by ')
    .replace(/ = /g, isHindi ? ' बराबर ' : ' equals ')
    // Strip all Unicode emojis and pictographs so TTS never speaks raw emoji names
    .replace(/\p{Extended_Pictographic}/gu, '')
    // Strip regional flags
    .replace(/[\u{1F1E6}-\u{1F1FF}]/gu, '')
    // Strip variation selectors, skin tone modifiers, zero-width joiners
    .replace(/[\uFE0E\uFE0F\u200D\u20E3]/g, '')
    .replace(/[\u{1F3FB}-\u{1F3FF}]/gu, '')
    // Strip miscellaneous symbols, dingbats, arrows, geometric shapes
    .replace(/[\u2600-\u27BF\u2300-\u23FF\u2B50\u2B55\u25A0-\u25FF\u2190-\u21FF]/g, '')
    // Clean up empty parentheses that previously enclosed only emojis (e.g. "()" or "( )")
    .replace(/\(\s*\)/g, '')
    // Clean up multiple spaces and dashes
    .replace(/[ \t]+/g, ' ')
    .trim();

  return cleaned;
}

let currentlySpeakingText: string | null = null;
let speechListeners: Set<(speakingText: string | null) => void> = new Set();
let cachedVoices: Speech.Voice[] = [];

// Dynamically select the best quality voice matching language and region
async function getPreferredVoice(isHindi: boolean): Promise<string | undefined> {
  try {
    if (cachedVoices.length === 0) {
      cachedVoices = await Speech.getAvailableVoicesAsync();
    }
    if (!cachedVoices || cachedVoices.length === 0) return undefined;

    const langPrefix = isHindi ? 'hi' : 'en';
    const country = 'in';

    // 1. Try to find an Indian accent voice (e.g. hi-IN or en-IN for familiar CBSE phonetics)
    const indianVoice = cachedVoices.find((v) => {
      const l = (v.language || '').toLowerCase().replace('_', '-');
      return l.startsWith(langPrefix) && l.includes(country);
    });

    if (indianVoice) return indianVoice.identifier;

    // 2. Try any voice matching the language prefix
    const generalVoice = cachedVoices.find((v) => {
      const l = (v.language || '').toLowerCase().replace('_', '-');
      return l.startsWith(langPrefix);
    });

    return generalVoice?.identifier;
  } catch {
    return undefined;
  }
}

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

export async function speakText(rawText: string, onDone?: () => void) {
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
  const preferredVoice = await getPreferredVoice(isHindi);

  notifyListeners(rawText);

  try {
    Speech.speak(spokenText, {
      language: lang,
      voice: preferredVoice,
      pitch: 1.0, // Natural warm pitch (avoids unnatural high-pitch or squeaky robotic sounds)
      rate: 0.75, // Slower, calm, teacher-like pace ideal for 1st-6th grade kids
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
              pitch: 1.0,
              rate: 0.75,
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
