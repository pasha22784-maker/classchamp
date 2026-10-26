/**
 * questionLanguageHelper.js
 * Multi-Language Question & Option Formatter for BrainLeague.
 * 
 * Supports:
 * - 'en': Pure English Question & Options
 * - 'hi': Pure Hindi (Devanagari) Question & Options
 * - 'bilingual': Dual-Language (Hindi on top, English below / Hindi + English options)
 * 
 * Automatically applies to Hot Seat, Fastest Finger First, and Spectator Play Along.
 */

export function getLocalizedQuestion(question, languageMode = 'bilingual') {
  if (!question) return null;

  const mode = languageMode || 'bilingual';

  // 1. PURE ENGLISH MODE
  if (mode === 'en') {
    return {
      ...question,
      displayText: question.text,
      displayOptions: question.options || {},
      displayGuruHint: question.guruHint || '',
      displayExplanation: question.explanation || ''
    };
  }

  // 2. PURE HINDI MODE
  if (mode === 'hi') {
    const text_hi = question.text_hi || question.text;
    const options_hi = question.options_hi || question.options || {};
    const guruHint_hi = question.guruHint_hi || question.guruHint || '';
    const explanation_hi = question.explanation_hi || question.explanation || '';

    return {
      ...question,
      displayText: text_hi,
      displayOptions: options_hi,
      displayGuruHint: guruHint_hi,
      displayExplanation: explanation_hi
    };
  }

  // 3. BILINGUAL MODE (Dual-Language TV Broadcast Style)
  let bilingualText = question.text;
  if (question.text_hi && question.text_hi.trim() !== question.text.trim()) {
    bilingualText = `${question.text_hi}\n${question.text}`;
  }

  const bilingualOptions = { ...(question.options || {}) };
  if (question.options_hi && question.options) {
    ['A', 'B', 'C', 'D'].forEach(letter => {
      const enVal = (question.options[letter] || '').trim();
      const hiVal = (question.options_hi[letter] || '').trim();

      if (hiVal && enVal && hiVal !== enVal) {
        bilingualOptions[letter] = `${hiVal} / ${enVal}`;
      } else {
        bilingualOptions[letter] = hiVal || enVal;
      }
    });
  }

  const bilingualGuruHint = question.guruHint_hi
    ? `${question.guruHint_hi} (${question.guruHint})`
    : question.guruHint || '';

  const bilingualExplanation = question.explanation_hi
    ? `${question.explanation_hi} (${question.explanation})`
    : question.explanation || '';

  return {
    ...question,
    displayText: bilingualText,
    displayOptions: bilingualOptions,
    displayGuruHint: bilingualGuruHint,
    displayExplanation: bilingualExplanation
  };
}

export default {
  getLocalizedQuestion
};
