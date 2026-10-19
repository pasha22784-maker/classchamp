/**
 * proceduralMathEngine.js
 * Procedural Dynamic Question Generator (Infinite Maths & Logic Engine)
 * Generates fresh questions on the fly with 1 exact correct answer and 3 believable distractors.
 * Guarantees questions never run out, offline or online!
 */

export const proceduralMathEngine = {
  // Generate random integer between min and max inclusive
  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Shuffle array utility
  shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  // Generate 3 unique distractors around the correct answer
  createDistractors(correctVal, range = 5, isFloat = false) {
    const distractors = new Set();
    let attempts = 0;
    while (distractors.size < 3 && attempts < 50) {
      attempts++;
      const delta = (this.rand(1, range) * (Math.random() > 0.5 ? 1 : -1));
      let dist = correctVal + delta;
      if (dist === correctVal) dist += 1;
      if (dist < 0 && correctVal >= 0) dist = Math.abs(dist) + 1;
      if (isFloat) {
        dist = parseFloat(dist.toFixed(1));
      }
      distractors.add(dist);
    }
    // Fallback if not enough
    let fallback = correctVal + 1;
    while (distractors.size < 3) {
      if (fallback !== correctVal && !distractors.has(fallback)) {
        distractors.add(fallback);
      }
      fallback++;
    }
    return Array.from(distractors);
  },

  // Build full question object from question text, correct answer, and distractors
  formatQuestion(text, correctVal, distractors, bracket, division, subject, hint) {
    const allOptions = this.shuffle([
      { val: String(correctVal), isCorrect: true },
      ...distractors.map(d => ({ val: String(d), isCorrect: false }))
    ]);

    const optionLetters = ['A', 'B', 'C', 'D'];
    const optionsObj = {};
    let correctLetter = 'A';

    allOptions.forEach((opt, idx) => {
      const letter = optionLetters[idx];
      optionsObj[letter] = opt.val;
      if (opt.isCorrect) correctLetter = letter;
    });

    return {
      id: `PROC_${Date.now()}_${this.rand(1000, 9999)}`,
      division,
      bracket,
      subject,
      text,
      options: optionsObj,
      correctAnswer: correctLetter,
      guruHint: hint || `Calculate step by step to find the exact value: ${correctVal}`,
      explanation: `The exact solution gives ${correctVal}.`,
      isProcedural: true,
      createdAt: new Date().toISOString()
    };
  },

  // Generate a procedural question for a specific division and bracket
  generate(division = 'Junior', bracket = '1000-10000') {
    if (bracket === 'FFF') {
      return this.generateFFF(division);
    }

    if (division === 'Junior') {
      return this.generateJunior(bracket);
    } else if (division === 'Senior') {
      return this.generateSenior(bracket);
    } else {
      return this.generateOpen(bracket);
    }
  },

  // FFF: Fastest Finger First Ordering Question
  generateFFF(division = 'Junior') {
    const count = 4;
    let items = [];
    let orderType = Math.random() > 0.5 ? 'ascending' : 'descending';

    if (division === 'Junior') {
      // 4 numbers or simple sums to arrange
      const base = this.rand(5, 50);
      items = [
        { label: `${base + this.rand(2, 6)}`, val: base + this.rand(2, 6) },
        { label: `${base + this.rand(8, 14)}`, val: base + this.rand(8, 14) },
        { label: `${base + this.rand(16, 25)}`, val: base + this.rand(16, 25) },
        { label: `${base + this.rand(28, 40)}`, val: base + this.rand(28, 40) }
      ];
    } else if (division === 'Senior') {
      // Squares or multiplications
      const nums = this.shuffle([3, 5, 7, 9, 11, 12, 14, 15]).slice(0, 4);
      items = nums.map(n => ({ label: `${n}² (${n * n})`, val: n * n }));
    } else {
      // Open division: expressions
      const x = this.rand(3, 8);
      items = [
        { label: `${x} × 5`, val: x * 5 },
        { label: `${x} × 8`, val: x * 8 },
        { label: `${x} × 12`, val: x * 12 },
        { label: `${x} × 15`, val: x * 15 }
      ];
    }

    // Ensure distinct values
    items.sort((a, b) => a.val - b.val);
    const sortedLabels = orderType === 'ascending' ? [...items] : [...items].reverse();

    // Assign to options A, B, C, D in a scrambled order
    const letters = ['A', 'B', 'C', 'D'];
    const scrambled = this.shuffle([...items]);
    const optionsObj = {};
    scrambled.forEach((item, idx) => {
      optionsObj[letters[idx]] = item.label;
    });

    // Find the correct sequence of letters
    const correctSeq = sortedLabels.map(target => {
      const foundIdx = scrambled.findIndex(s => s.val === target.val);
      return letters[foundIdx];
    }).join(',');

    return {
      id: `PROC_FFF_${Date.now()}_${this.rand(100, 999)}`,
      division,
      bracket: 'FFF',
      subject: 'Mental Ability',
      text: `Arrange the following values in ${orderType.toUpperCase()} order (from ${orderType === 'ascending' ? 'smallest to largest' : 'largest to smallest'}):`,
      options: optionsObj,
      correctAnswer: correctSeq,
      guruHint: `Calculate each value first, then order them from ${orderType === 'ascending' ? 'low to high' : 'high to low'}.`,
      explanation: `Correct sequence is: ${correctSeq}`,
      isProcedural: true,
      createdAt: new Date().toISOString()
    };
  },

  // JUNIOR (Class 3-6)
  generateJunior(bracket) {
    const templates = [
      () => {
        // Rectangle Perimeter
        const L = this.rand(6, 18);
        const B = this.rand(3, 10);
        const correct = 2 * (L + B);
        const dist = this.createDistractors(correct, 8);
        return this.formatQuestion(
          `A rectangle has a length of ${L} cm and a width of ${B} cm. What is its Perimeter?`,
          `${correct} cm`,
          dist.map(d => `${d} cm`),
          bracket, 'Junior', 'Mathematics',
          `Perimeter formula is 2 × (Length + Width). Add ${L} and ${B}, then double it.`
        );
      },
      () => {
        // Area of Square
        const S = this.rand(4, 15);
        const correct = S * S;
        const dist = this.createDistractors(correct, 12);
        return this.formatQuestion(
          `A square field has each side measuring ${S} meters. What is the total Area of the field?`,
          `${correct} sq m`,
          dist.map(d => `${d} sq m`),
          bracket, 'Junior', 'Mathematics',
          `Area of a square = side × side. Multiply ${S} by ${S}.`
        );
      },
      () => {
        // Simple Missing Number Series
        const start = this.rand(4, 20);
        const step = this.rand(3, 8);
        const seq = [start, start + step, start + 2 * step, start + 3 * step];
        const correct = start + 4 * step;
        const dist = this.createDistractors(correct, step * 2);
        return this.formatQuestion(
          `Find the next number in the pattern: ${seq.join(', ')}, ?`,
          correct,
          dist,
          bracket, 'Junior', 'Logic & Mental Ability',
          `Observe the difference between each term. It increases by ${step} every time.`
        );
      },
      () => {
        // Time Conversion
        const hours = this.rand(2, 6);
        const mins = this.rand(10, 45);
        const correct = hours * 60 + mins;
        const dist = this.createDistractors(correct, 25);
        return this.formatQuestion(
          `How many total minutes are there in ${hours} hours and ${mins} minutes?`,
          `${correct} minutes`,
          dist.map(d => `${d} minutes`),
          bracket, 'Junior', 'Mathematics',
          `There are 60 minutes in 1 hour. Multiply ${hours} × 60 and add ${mins}.`
        );
      }
    ];

    const pick = templates[this.rand(0, templates.length - 1)];
    return pick();
  },

  // SENIOR (Class 7-10)
  generateSenior(bracket) {
    const templates = [
      () => {
        // Percentage Profit
        const cp = this.rand(20, 80) * 10;
        const profitPct = this.rand(1, 5) * 5; // 5%, 10%, 15%, 20%, 25%
        const sp = cp + (cp * profitPct) / 100;
        const dist = this.createDistractors(sp, 30);
        return this.formatQuestion(
          `A book was bought for ₹${cp} and sold at a profit of ${profitPct}%. What was the Selling Price?`,
          `₹${sp}`,
          dist.map(d => `₹${d}`),
          bracket, 'Senior', 'Mathematics',
          `Selling Price = Cost Price + Profit. Calculate ${profitPct}% of ${cp} and add it.`
        );
      },
      () => {
        // Speed, Distance, Time
        const speed = this.rand(4, 12) * 10; // 40 to 120 km/h
        const time = this.rand(2, 5); // 2 to 5 hours
        const distance = speed * time;
        const dist = this.createDistractors(distance, 40);
        return this.formatQuestion(
          `A high-speed train travels at an average speed of ${speed} km/h for ${time} hours. How much distance does it cover?`,
          `${distance} km`,
          dist.map(d => `${d} km`),
          bracket, 'Senior', 'Science & STEM',
          `Distance = Speed × Time. Multiply ${speed} by ${time}.`
        );
      },
      () => {
        // Simple Algebraic Equation
        const a = this.rand(3, 7);
        const x = this.rand(4, 12);
        const b = this.rand(5, 25);
        const c = a * x + b;
        const dist = this.createDistractors(x, 4);
        return this.formatQuestion(
          `Solve for x: ${a}x + ${b} = ${c}`,
          x,
          dist,
          bracket, 'Senior', 'Mathematics',
          `Subtract ${b} from ${c}, then divide the result by ${a}.`
        );
      }
    ];

    const pick = templates[this.rand(0, templates.length - 1)];
    return pick();
  },

  // OPEN / CHAMPIONS LEAGUE (17+)
  generateOpen(bracket) {
    const templates = [
      () => {
        // Simple Interest Calculation
        const p = this.rand(5, 25) * 1000;
        const r = this.rand(4, 10);
        const t = this.rand(2, 4);
        const si = (p * r * t) / 100;
        const dist = this.createDistractors(si, 200);
        return this.formatQuestion(
          `Find the Simple Interest on a principal sum of ₹${p} at an annual rate of ${r}% for ${t} years:`,
          `₹${si}`,
          dist.map(d => `₹${d}`),
          bracket, 'Open', 'Quantitative Aptitude',
          `SI Formula = (Principal × Rate × Time) / 100.`
        );
      },
      () => {
        // Ratio & Proportion
        const r1 = this.rand(2, 4);
        const r2 = this.rand(3, 5);
        const mult = this.rand(15, 40);
        const total = (r1 + r2) * mult;
        const shareA = r1 * mult;
        const dist = this.createDistractors(shareA, 30);
        return this.formatQuestion(
          `An amount of ₹${total} is divided between A and B in the ratio of ${r1} : ${r2}. What is A's share?`,
          `₹${shareA}`,
          dist.map(d => `₹${d}`),
          bracket, 'Open', 'Quantitative Aptitude',
          `Divide the total ₹${total} by the sum of ratios (${r1}+${r2}=${r1 + r2}), then multiply by ${r1}.`
        );
      }
    ];

    const pick = templates[this.rand(0, templates.length - 1)];
    return pick();
  }
};

export default proceduralMathEngine;
