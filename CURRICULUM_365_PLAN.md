# ClassChamp — 365-Day Daily Practice Curriculum Architecture
*Complete 1-Year Academic Roadmap (365 Daily 10-Minute Missions per Grade)*

---

## 1. Vision & Academic Philosophy

A student spends **365 days** in an academic grade (e.g. Class 1). To build a permanent daily learning habit without overwhelming the child, the curriculum is structured into:

- **365 Daily 10-Minute Missions** per grade.
- **52 Weeks** structured into **4 Quarters / Terms**.
- **Every Single Day has a unique mission** mapped directly to the CBSE & NCERT syllabus.

```
+-----------------------------------------------------------------------------------+
|  THE 365-DAY ANNUAL LEARNING JOURNEY (52 WEEKS)                                   |
|                                                                                   |
|  Term 1 (Days 1 to 90)   : Foundations, Number Sense, Phonics & Naming Words     |
|  Term 2 (Days 91 to 180)  : Core Operations (Addition/Subtraction), Verbs & Action|
|  Term 3 (Days 181 to 270) : Measurement, Time, Money, Prepositions & Adjectives  |
|  Term 4 (Days 271 to 365) : Patterns, Word Problems, Sentence Mastery & Revision |
+-----------------------------------------------------------------------------------+
```

---

## 2. Weekly Habit Cadence (Monday to Sunday)

Each week (7 days) follows a consistent psychological rhythm:

| Day of Week | Mission Focus | Learning Outcome |
|---|---|---|
| **Day 1 (Mon)** | **Concept Introduction** | Visual exploration & basic identification |
| **Day 2 (Tue)** | **Fill-in-the-Blanks & Words** | Vocabulary and number formation |
| **Day 3 (Wed)** | **Match the Pairs & Connections** | Relational thinking & classifications |
| **Day 4 (Thu)** | **Sentence & Order Puzzles** | Logical ordering, sequences & unscramble |
| **Day 5 (Fri)** | **Speed Champ Drill** | Quick-thinking reinforcement & confidence |
| **Day 6 (Sat)** | **Weekend Master Quiz** | Cumulative review of the week's lessons |
| **Day 7 (Sun)** | **Sunday Super Trophy Mission** | Fun challenge quiz awarding bonus stars & trophies |

---

## 3. Master Syllabus Coverage (All 8 Grades: LKG to Class 6)

The full detailed chapter-by-chapter and concept-by-concept syllabus across all 8 grades (170 chapters, 2,550 questions) is fully documented in:
👉 **[`COMPLETE_SYLLABUS_MASTER.md`](./COMPLETE_SYLLABUS_MASTER.md)**

| Grade | Level | Total Chapters | Curated Questions | NCERT Mapped Books |
| :--- | :--- | :---: | :---: | :--- |
| **LKG** | Balvatika 2 | 15 | 225 | Pre-School Joyful Maths, Phonics, Balvatika 2 Hindi |
| **UKG** | Balvatika 3 | 15 | 225 | Kindergarten Maths, Phonics CVC, Balvatika 3 Hindi |
| **Class 1** | Primary | 27 | 405 | NCERT Joyful Maths 1, Mridang 1, Sarangi 1 |
| **Class 2** | Primary | 22 | 330 | NCERT Joyful Maths 2, Mridang 2, Sarangi 2 |
| **Class 3** | Primary | 23 | 345 | NCERT Math-Magic 3, Santoor 3, Veena 3 |
| **Class 4** | Upper Primary | 22 | 330 | NCERT Math-Magic 4, Marigold 4, Rimjhim 4 |
| **Class 5** | Upper Primary | 22 | 330 | NCERT Math-Magic 5, Marigold 5, Rimjhim 5 |
| **Class 6** | Middle School | 24 | 360 | NCERT Mathematics 6, Poorvi 6, Malhar 6 |
| **TOTAL** | **8 Grades** | **170** | **2,550** | **100% CBSE & NCERT Compliant** |

---

## 4. Class 1 — 365-Day Master Syllabus Sample Breakdown

### Term 1: Days 1 to 90 (Foundations)
- **Maths**:
  - Days 1–20: Shapes and Space (Inside/Outside, Bigger/Smaller, Rolling/Sliding)
  - Days 21–50: Numbers 1 to 9 (Counting, Number Names, Zero concept)
  - Days 51–70: Comparing Quantities (More, Less, Equal to)
  - Days 71–90: Term 1 Consolidation & Fun Math Puzzles
- **English**:
  - Days 1–30: Alphabet Sounds & Phonics (A to Z Letter Recognition)
  - Days 31–60: Vowels & Consonants (Short 'a', 'e', 'i', 'o', 'u' words)
  - Days 61–90: Naming Words (Nouns: Animals, Fruits, Toys, Family members)

### Term 2: Days 91 to 180 (Operations & Grammar)
- **Maths**:
  - Days 91–130: Addition up to 9 (Putting together, Number line jumps)
  - Days 131–160: Subtraction up to 9 (Taking away, Leftover objects)
  - Days 161–180: Addition & Subtraction Mixed Real-Life Stories
- **English**:
  - Days 91–120: One and Many (Singular & Plural with -s)
  - Days 121–150: Action Words (Verbs: Run, Jump, Read, Eat, Sleep)
  - Days 151–180: Pronouns (He, She, It, They)

### Term 3: Days 181 to 270 (Time, Measurement & Vocabulary)
- **Maths**:
  - Days 181–210: Numbers from 10 to 20 (Tens and Ones bundles)
  - Days 211–240: Time & Daily Routines (Morning, Afternoon, Evening, Night)
  - Days 241–270: Measurement (Longer vs Shorter, Taller vs Shorter, Heavier vs Lighter)
- **English**:
  - Days 181–210: Describing Words (Adjectives: Colors, Shapes, Sizes)
  - Days 211–240: Position Words (Prepositions: In, On, Under, Near)
  - Days 241–270: Sight Words & Vocabulary Expansion

### Term 4: Days 271 to 365 (Patterns, Money & Annual Mastery)
- **Maths**:
  - Days 271–300: Patterns (Geometric sequences, Color sequences)
  - Days 301–330: Money Basics (Recognizing Indian coins ₹1, ₹2, ₹5, ₹10 and notes)
  - Days 331–365: Grand Annual Revision & Class 2 Readiness Missions
- **English**:
  - Days 271–300: Simple Sentence Scrambles (Subject + Verb + Object)
  - Days 301–330: Reading Comprehension Short Stories (3-sentence stories)
  - Days 331–365: Annual Championship Quizzes & Trophy Certification

---

## 4. Technical Engine: Dynamic 365-Day Curriculum Generator

Rather than manually pasting 3,650 static JSON questions that would slow down the app, we build a **Deterministic Curriculum Engine (`Curriculum365Engine`)**:
1. Takes the child's `Grade` (1 to 6) and `Day Number` (1 to 365).
2. Calculates exact **Term**, **Week**, **Topic**, and **Subject**.
3. Dynamically generates or pulls the exact 10 questions for that day.
4. Allows the child to:
   - Play **Today's Scheduled Day** (e.g. Day 14).
   - Scroll back and replay **Past Completed Days** (for revision).
   - Preview **Upcoming Days** on their 365-Day learning path!
