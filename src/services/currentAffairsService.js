/**
 * currentAffairsService.js
 * Specialized Current Affairs Lifecycle & Expiration Manager for BrainLeague.
 * 
 * Rules:
 * 1. Admin can upload weekly/monthly Current Affairs with a designated shelf life (default 6 months / 180 days).
 * 2. Active Window: Questions actively appear in student matches (especially Open, Senior, SSC, UPSC, Banking).
 * 3. Expiration: After 6 months (or admin-set duration), questions automatically disappear from active student games.
 * 4. Smart Future Reuse: Expired questions are not lost; they enter the "Modern History & Flashback Archive".
 *    Admin can with 1 click convert them into permanent General Knowledge / History questions or extend validity.
 */

export const CA_VALIDITY_PRESETS = [
  { id: '1_MONTH', label: '1 Month (30 Days)', months: 1, days: 30 },
  { id: '3_MONTHS', label: '3 Months (90 Days)', months: 3, days: 90 },
  { id: '6_MONTHS', label: '6 Months (Default - 180 Days)', months: 6, days: 180 },
  { id: '12_MONTHS', label: '1 Year (365 Days)', months: 12, days: 365 },
];

export const CA_TOPICS = [
  'National News & Governance',
  'International Affairs & Summits',
  'Sports & Championships',
  'Economy, Banking & Finance',
  'Science, Defence & Technology',
  'Awards, Honours & Appointments',
  'Schemes, Bills & Environment'
];

class CurrentAffairsService {
  /**
   * Check if a question is currently active for gameplay
   * Non-CA questions are always active.
   * CA questions are active ONLY if now <= validUntil and status !== 'archived'.
   */
  isQuestionActive(q, now = Date.now()) {
    if (!q || !q.isCurrentAffairs) return true;
    if (q.status === 'archived') return false;
    if (!q.validUntil) return true;
    return now <= q.validUntil;
  }

  /**
   * Get days remaining before question expires
   */
  getDaysRemaining(q, now = Date.now()) {
    if (!q || !q.isCurrentAffairs || !q.validUntil) return null;
    const diffMs = q.validUntil - now;
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  /**
   * Status badge metadata
   */
  getStatusMeta(q, now = Date.now()) {
    if (!q || !q.isCurrentAffairs) {
      return { status: 'STANDARD', label: 'Static Question', color: 'slate' };
    }
    if (q.status === 'archived') {
      return { status: 'ARCHIVED', label: 'Archived (History Pool)', color: 'purple' };
    }
    const days = this.getDaysRemaining(q, now);
    if (days === null) {
      return { status: 'ACTIVE', label: 'Active', color: 'emerald' };
    }
    if (days < 0) {
      return { status: 'EXPIRED', label: `Expired ${Math.abs(days)}d ago`, color: 'red' };
    }
    if (days <= 15) {
      return { status: 'EXPIRING_SOON', label: `Expiring in ${days}d`, color: 'amber' };
    }
    return { status: 'ACTIVE', label: `Active (${days}d left)`, color: 'emerald' };
  }

  /**
   * Build a standardized Current Affairs question object
   */
  formatCAQuestion(raw, validityMonths = 6) {
    const now = Date.now();
    const months = Number(validityMonths) || 6;
    const validUntil = now + months * 30 * 24 * 60 * 60 * 1000;

    return {
      ...raw,
      id: raw.id || `ca_${now}_${Math.random().toString(36).substring(2, 7)}`,
      isCurrentAffairs: true,
      subject: raw.subject || 'Current Affairs',
      topic: raw.topic || 'National News & Governance',
      publishedAt: raw.publishedAt || now,
      validityMonths: months,
      validUntil: raw.validUntil || validUntil,
      status: 'active'
    };
  }

  /**
   * Extend validity of an existing question
   */
  extendValidity(q, additionalMonths = 6) {
    const now = Date.now();
    const currentBase = (q.validUntil && q.validUntil > now) ? q.validUntil : now;
    const newValidUntil = currentBase + (Number(additionalMonths) || 6) * 30 * 24 * 60 * 60 * 1000;

    return {
      ...q,
      validUntil: newValidUntil,
      status: 'active',
      lastExtendedAt: now
    };
  }

  /**
   * Smartly convert expired/archived question into a permanent Modern History / GK question
   */
  convertToPermanentHistory(q) {
    return {
      ...q,
      isCurrentAffairs: false,
      subject: 'History',
      topic: 'Modern History & Flashback GK',
      status: 'active',
      validUntil: null,
      wasConvertedFromCA: true,
      convertedAt: Date.now()
    };
  }

  /**
   * Archive question
   */
  archiveQuestion(q) {
    return {
      ...q,
      status: 'archived',
      archivedAt: Date.now()
    };
  }

  /**
   * Re-activate an archived question
   */
  reactivateQuestion(q, months = 6) {
    return this.extendValidity({ ...q, status: 'active' }, months);
  }

  /**
   * Compute inventory statistics for Current Affairs
   */
  getStats(allQuestions = [], now = Date.now()) {
    const caQuestions = allQuestions.filter(q => q.isCurrentAffairs);
    let active = 0;
    let expiringSoon = 0;
    let expired = 0;
    let archived = 0;

    caQuestions.forEach(q => {
      const meta = this.getStatusMeta(q, now);
      if (meta.status === 'ARCHIVED') archived++;
      else if (meta.status === 'EXPIRED') expired++;
      else if (meta.status === 'EXPIRING_SOON') {
        expiringSoon++;
        active++;
      } else {
        active++;
      }
    });

    return {
      total: caQuestions.length,
      active,
      expiringSoon,
      expired,
      archived
    };
  }
}

export const currentAffairsService = new CurrentAffairsService();
export default currentAffairsService;
