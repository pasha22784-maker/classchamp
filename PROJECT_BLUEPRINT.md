# BrainLeague: The Ultimate Hot-Seat Educational & Trivia Game
**Master Architectural Blueprint & Autonomous System Specification**

---

## 1. Executive Summary & AI Autonomous Directives
- **Project Name:** BrainLeague
- **Tagline:** Daily Hot-Seat Quiz & Champions Arena
- **Target Audience:** School Students (Class 3–10), Competitive Exam Aspirants (SSC, UPSC, Banking, NEET), and General Trivia Enthusiasts / Families across India and abroad.
- **Operating Philosophy:** 100% Halal & Ethical Gaming (Zero gambling, zero ads, skills-only rating, pure educational value).
- **Core Aesthetic:** Sober, Royal, Clean, and Engaging (Inspired by premium television quiz shows like *Kaun Banega Crorepati* / *Who Wants to Be a Millionaire*).

### Strict Directives for AI Implementation:
1. **Zero-Coding Founder Friendly:** Every piece of code must be fully written, production-grade, modular, and runnable. No placeholders (`// TODO`), no missing functions, no half-finished templates.
2. **Phase-by-Phase Autonomous Execution:** Execute strictly one phase at a time (Phase 1 to Phase 8). Complete the phase, verify the build, provide runnable commands, and await approval before next phase.
3. **High Stability & Self-Contained:** Build a clean, responsive, mobile-first cross-platform client (React + Vite + Tailwind CSS + Lucide Icons + Web Audio API) with instant browser preview, mobile wrapper readiness (Capacitor/PWA), and persistent local state.

---

## 2. Visual Identity & Sound Architecture

### 2.1 Color Palette
- **Deep Royal Navy:** `#0F172A` (Background & Primary Canvas)
- **Rich Velvet Indigo:** `#1E1B4B` (Card Containers & Modals)
- **Champion Gold:** `#F59E0B` (Accents, Level 15 Highlight, Trophies, Crowns)
- **Royal Azure / Sapphire:** `#2563EB` / `#3B82F6` (Active buttons & focus states)
- **Emerald Success:** `#10B981` (Correct answer flash, milestone unlocked, profit)
- **Crimson Alert:** `#EF4444` (Wrong answer flash, timer urgency, deduction)
- **Soft Pearl White:** `#F8FAFC` (High contrast, crystal-clear readability)
- **Muted Platinum:** `#94A3B8` (Secondary text, subtitles, passive borders)

### 2.2 Audio & Haptic Architecture (Synthesized via Web Audio API - Zero External Asset Lag)
1. **Tick-Tick Tension:** Crisp metallic clock tick sounding every second during question countdown.
2. **Heartbeat Tension:** Low-frequency thumping bass pulse on higher questions (Q10–Q15).
3. **Lock Chime:** Double confirmation tone when a player locks in an option.
4. **Correct Answer Fanfare:** Harmonic ascending chord with triumphant ring.
5. **Wrong Answer / Padav Drop:** Dramatic downward swoosh and suspenseful resolve.
6. **Lifeline Sound:** Ethereal sci-fi shimmer for 50:50, Audience Poll, Guru Hint, and Freeze.

---

## 3. Universal Authentication & Role-Based Routing

### 3.1 Single Universal Portal
- Input options: Email/Phone + Password OR Quick Demo Profiles (Admin Demo, Junior Player, Senior Player, Champion Adult).
- Pre-seeded Default Admin:
  - **Email:** `admin@classchamp.com`
  - **Password:** `Admin@123`
  - **Role:** `admin`

### 3.2 Dynamic Route Dispatching
- **If `role === 'admin'`:** Routes immediately to **Master Admin Control Dashboard** with a prominent header toggle *"Switch to Player View"* to test gameplay anytime.
- **If `role === 'player'`:**
  - If profile is incomplete: Routes to **Player Onboarding** (Division Selection, Avatar, Name, City/State).
  - If profile is complete: Routes to **Main Player Home Dashboard**.

---

## 4. "Weight-Class" Fair Division System

Like wrestling weight classes, matchmaking is segregated by intellectual tier to prevent smurfing and unfair competition:
1. **Junior League (Class 3 to 6 | Ages 8–12):**
   - Syllabus: CBSE/ICSE School Maths, English Vocabulary & Grammar, General Science, Fun Animals & Earth Facts.
   - Bot Behavior: Answering time 5–8s; polite friendly avatars.
2. **Senior League (Class 7 to 10 | Ages 13–16):**
   - Syllabus: High School STEM, Indian History, World Geography, Environmental Science, Mental Ability & Logic.
   - Bot Behavior: Answering time 4–6s.
3. **Open / Champions League (17+ | College, Govt Job Aspirants, Adults):**
   - Syllabus: Current Affairs, Indian Polity, History, Science, Sports, Cinema, Literature, Advanced Trivia.
   - Bot Behavior: Answering time 3–5s; sharp competitive avatars.

### Fair-Play Rules:
- **No Bullying Downwards:** Older players cannot join lower leagues.
- **Challenge Upwards:** Junior/Senior players can voluntarily challenge upwards in the Open League.

---

## 5. Core Game Loop Architecture

```
[Play Now Tap] 
      │ (Deducts 1 Energy Heart)
      ▼
[10-Player Pool Matchmaking (5s Timer)]
      │
      ├─► Found 10 Real Players? ──► Enter FFF
      └─► Need Fill? ──► Auto-inject Division Bots
      ▼
[Fastest Finger First (FFF) Round (15s)]
      │ (Arrange 4 items chronologically/in order)
      ▼
┌───────────────────────────────┴───────────────────────────────┐
│                                                               │
▼ (Rank 1: Fastest & Accurate)                                  ▼ (Ranks 2–10: Other 9 Players)
[HOT SEAT STAGE: 15-Question Ladder]                       [LIVE AUDIENCE SPECTATOR MODE]
  - 15 Point Levels (1K to 1 Crore)                          - Watch Hot-Seat player live
  - Safe Padavs at Q5 (10K) & Q10 (3.2L)                     - Floating reactions (👏, 🔥, 💡)
  - 4 Lifelines (50:50, Poll, Guru, Freeze)                  - Real Audience Poll (+10 XP on correct)
  - Variable Timer (30s / 45s / 60s)                         - Exit anytime back to Home
```

### 5.1 Step A: Matchmaking & Bot Balancing
- 5-second search window. Empty slots up to 10 filled with realistic bots (e.g., *"Aarav • Class 5 Delhi"*, *"Zoya • Mumbai"*).
- **Single-Human Safeguard:** If 1 human is playing with 9 bots, bot reaction speed is dynamically throttled so the real human wins FFF and enters the Hot Seat.

### 5.2 Step B: Fastest Finger First (FFF)
- 4 items to sort (e.g., arrange historical events, ascending numbers, chronological dates, smallest to largest animals).
- 15-second countdown.
- Results leaderboard displays exact completion times down to milliseconds.

### 5.3 Step C: Spectator Mode & Audience Poll
- The 9 non-hotseat players transition to Spectators.
- Can view live questions and current ladder position.
- Send live emoji reactions floating over the screen.
- When Hot Seat triggers "Audience Poll", spectators get a 10-second prompt to vote. Spectators voting correctly receive **+10 XP**.

### 5.4 Step D: 15-Question Hot Seat Ladder
- **Question Levels & Virtual Points:**
  - Q1: 1,000 pts (30s)
  - Q2: 2,000 pts (30s)
  - Q3: 3,000 pts (30s)
  - Q4: 5,000 pts (30s)
  - **Q5: 10,000 pts (30s) [PADAV 1 - GUARANTEED MILESTONE]**
  - Q6: 20,000 pts (45s)
  - Q7: 40,000 pts (45s)
  - Q8: 80,000 pts (45s)
  - Q9: 1,60,000 pts (45s)
  - **Q10: 3,20,000 pts (45s) [PADAV 2 - GUARANTEED MILESTONE]**
  - Q11: 6,40,000 pts (60s)
  - Q12: 12,50,000 pts (60s)
  - Q13: 25,00,000 pts (60s)
  - Q14: 50,00,000 pts (60s)
  - **Q15: 1,00,00,000 pts (60s) [CROREPATI CHAMPION CROWN]**
- **4 Lifelines:**
  1. **50:50:** Eliminates 2 incorrect choices.
  2. **Audience Poll:** Aggregates live spectator votes + bot statistical distribution into an animated bar graph.
  3. **Ask the AI Guru:** Delivers a contextual 1-line hint/explanation.
  4. **Time Freeze:** Pauses timer for the question duration.
- **Quit / Walk Away Option:** Player can take current accumulated points anytime before locking an answer.

---

## 6. Retention, Curiosity Loops & Virality

1. **Scheduled Championship Countdown:**
   - Home banner with live ticking timer (e.g., *"Sunday 8:00 PM National Champions Trophy — Starts in 02d : 14h : 22m"*).
2. **Multi-Tiered Leaderboards:**
   - Tabs: *My City*, *My State*, *All India*, and *Study Clans* (5–10 member friend teams).
   - ELO / Trophy Math: Match win / high ladder grants **+25 Trophies**; early drop out deducts **-10 Trophies** (pure rating metric, never convertible to money).
3. **Hall of Fame & Physical Medal Claim:**
   - Showcase of monthly champions on Home Screen.
   - In-app claim form (Name, Address, Parent Phone) for champions to receive physical courier medals.
4. **1-Tap WhatsApp Scorecard:**
   - Sleek graphical result card with user avatar, level reached, points, and invite link for viral WhatsApp sharing.

---

## 7. 100% Halal & Ethical Monetization Model

1. **Zero Gambling (No Qimar):** No pooling of user money into winner prizes. Virtual points have zero cash payout value.
2. **Zero Third-Party Ads:** Zero AdMob or uncontrolled banner networks.
3. **Daily Free Energy:** 5 Hearts replenished every 30 minutes (1 Heart = 1 Match Entry).
4. **In-App Store (Gems):** Virtual utility currency for extra lifelines or instant energy refill.
5. **ClassChamp Pro Pass (₹99/month):** Unlimited energy, step-by-step question explanations, chapter practice mode, and golden VIP profile badge.
6. **Direct Sponsor Banners (Ju'alah Model):** Ethical educational sponsorships (e.g., coaching academies, stationery brands).

---

## 8. Integrated Add-On Modules

### 8.1 365-Day Zero-Repeat & Infinite Question Engine
1. **Per-User 365-Day Tracker (`SeenQuestionsTracker`):**
   - Keeps persistent storage of `[questionId, timestamp, wasCorrect]`.
   - Never serves a correctly answered question within 365 days.
   - Incorrectly answered questions have a 45-day cooldown ("Revision Challenge").
2. **Procedural Dynamic Question Generator (Infinite Maths & Logic):**
   - Built-in dynamic algorithmic question generator for numbers, fractions, LCM/HCF, percentages, geometry, and series patterns that generates unique values and distractors on the fly.
3. **AI Bulk Generator Prompt & API Bridge:**
   - Built-in prompt generator and API runner inside Admin to generate 100 non-duplicate JSON questions on demand.

### 8.2 Prize-Bracket Level Mapping & Admin Dual Uploader
1. **5 Prize Brackets:**
   - **Bracket 1 (`1000-10000`):** Questions 1–5 (Warm-up).
   - **Bracket 2 (`10000-340000`):** Questions 6–10 (Intermediate).
   - **Bracket 3 (`340000-2500000`):** Questions 11–13 (Advanced).
   - **Bracket 4 (`2500000-10000000`):** Questions 14–15 (Jackpot / Expert).
   - **Bracket 5 (`FFF`):** Fastest Finger First chronological ordering.
2. **Dual Question Entry in Admin Panel:**
   - **Sub-Tab A: Bulk File Upload (CSV/Excel/JSON):** "Download Sample Template", file picker, client-side validation, duplicate check, preview summary.
   - **Sub-Tab B: Manual Single Question Form:** Division, Bracket, Subject, Text, 4 Options, Correct Answer, Guru Hint.
3. **Question Inventory Stats:** Live stock cards for each division and bracket.

---

## 9. Phased Execution Roadmap

| Phase | Description | Deliverables |
|---|---|---|
| **Phase 1** | **Foundation, Theme & Core Data Engine** | Vite + React + Tailwind setup, Royal Dark theme, audio synthesizers, pre-seeded rich question bank across 3 divisions & 5 brackets, procedural math generator, sample CSV template generator, database state service. |
| **Phase 2** | **Universal Auth & Onboarding** | Universal login screen, role-based auto-routing (`admin` -> Admin Dashboard, `player` -> Onboarding/Home), demo profiles, division/city/state picker. |
| **Phase 3** | **Player Home & Curiosity Loops** | Home dashboard, live championship countdown, energy/gems header with timer, Hall of Fame banner, clan/city/state leaderboards, sound settings. |
| **Phase 4** | **10-Player Pool & FFF Ordering Engine** | Matchmaking lobby with 5s countdown, division-matched bot generation, FFF 4-item drag-or-tap order engine, millisecond accuracy timer, single-player safeguard. |
| **Phase 5** | **15-Step Hot-Seat Quiz & Spectator Mode** | 15-tier ladder UI, safe padav indicators, ticking clock, 4 interactive lifelines (50:50, Audience Poll, Guru Hint, Freeze), live spectator mode with floating emojis & audience voting (+10 XP). |
| **Phase 6** | **Post-Match Celebrations & WhatsApp Share** | Victory/defeat modal, +25/-10 trophy ELO update, 1-tap WhatsApp visual scorecard generator, physical medal claim form for winners. |
| **Phase 7** | **Halal Store & Monetization** | Pro Pass subscription modal (₹99/mo), Gem packs store, flash offer banner with countdown, sponsor banner slot. |
| **Phase 8** | **Comprehensive In-App Admin Control Panel** | Championship manager, Question manager with CSV uploader & inventory counters, offer manager, bot intelligence speed sliders, prize dispatch tracker. |

---

*Now executing Phase 1 immediately.*
