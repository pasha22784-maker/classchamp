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
  formatQuestion(text, correctVal, distractors, bracket, division, subject, hint, text_hi = null, hint_hi = null) {
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

    // Auto-derive Hindi text if not explicitly provided
    let computedTextHi = text_hi;
    if (!computedTextHi) {
      if (text.includes('Perimeter')) {
        computedTextHi = text
          .replace('A rectangle has a length of', 'एक आयत की लंबाई')
          .replace('cm and a width of', 'सेमी और चौड़ाई')
          .replace('cm. What is its Perimeter?', 'सेमी है। इसका परिमाप (Perimeter) क्या होगा?');
      } else if (text.includes('Area')) {
        computedTextHi = text
          .replace('A square field has each side measuring', 'एक वर्गाकार मैदान की प्रत्येक भुजा')
          .replace('meters. What is the total Area of the field?', 'मीटर है। मैदान का कुल क्षेत्रफल (Area) क्या होगा?');
      } else if (text.includes('next number in the pattern')) {
        computedTextHi = text.replace('Find the next number in the pattern:', 'इस संख्या श्रृंखला (Pattern) में अगली संख्या क्या होगी:');
      } else if (text.includes('What is the value of')) {
        computedTextHi = text.replace('What is the value of', 'मान ज्ञात करें:');
      } else {
        computedTextHi = text;
      }
    }

    return {
      id: `PROC_${Date.now()}_${this.rand(1000, 9999)}`,
      division,
      bracket,
      subject,
      text,
      text_hi: computedTextHi,
      options: optionsObj,
      options_hi: optionsObj, // Numbers and units are identical
      correctAnswer: correctLetter,
      guruHint: hint || `Calculate step by step to find the exact value: ${correctVal}`,
      guruHint_hi: hint_hi || `चरणबद्ध गणना करके सही उत्तर निकालें: ${correctVal}`,
      explanation: `The exact solution gives ${correctVal}.`,
      isProcedural: true,
      createdAt: new Date().toISOString()
    };
  },

  // Generate a procedural question for a specific division and bracket
  generate(division = 'Junior', bracket = '1000-10000', grade = null) {
    if (bracket === 'FFF') {
      return this.generateFFF(division, grade);
    }

    if (division === 'Junior') {
      return this.generateJunior(bracket, grade);
    } else if (division === 'Senior') {
      return this.generateSenior(bracket, grade);
    } else {
      return this.generateOpen(bracket);
    }
  },

  // FFF: Fastest Finger First Ordering Question
  generateFFF(division = 'Junior', grade = null) {
    const count = 4;
    let items = [];
    let orderType = Math.random() > 0.5 ? 'ascending' : 'descending';

    if (division === 'Junior') {
      const g = Number(grade) || 3;
      if (g === 2) {
        // Class 2: Simple small numbers (1 to 50)
        const nums = this.shuffle([8, 15, 23, 31, 42, 19, 27, 36]).slice(0, 4);
        items = nums.map(n => ({ label: `${n}`, val: n }));
      } else if (g === 3) {
        // Class 3: Numbers up to 100 or simple sums
        const base = this.rand(10, 40);
        items = [
          { label: `${base + 3}`, val: base + 3 },
          { label: `${base + 11}`, val: base + 11 },
          { label: `${base + 22}`, val: base + 22 },
          { label: `${base + 35}`, val: base + 35 }
        ];
      } else if (g === 4) {
        // Class 4: Simple multiplications
        const m = this.rand(3, 7);
        items = [
          { label: `${m} × 3`, val: m * 3 },
          { label: `${m} × 5`, val: m * 5 },
          { label: `${m} × 8`, val: m * 8 },
          { label: `${m} × 11`, val: m * 11 }
        ];
      } else {
        // Class 5: 3-digit numbers or combinations
        const base = this.rand(100, 300);
        items = [
          { label: `${base + 15}`, val: base + 15 },
          { label: `${base + 45}`, val: base + 45 },
          { label: `${base + 85}`, val: base + 85 },
          { label: `${base + 130}`, val: base + 130 }
        ];
      }
    } else if (division === 'Senior') {
      const g = Number(grade) || 8;
      if (g <= 8) {
        // Classes 6-8: Square numbers
        const nums = this.shuffle([4, 6, 7, 8, 9, 11, 12, 13]).slice(0, 4);
        items = nums.map(n => ({ label: `${n}² (${n * n})`, val: n * n }));
      } else if (g <= 10) {
        // Classes 9-10: Powers of 2 or Cube roots
        const base = this.rand(2, 4);
        items = [
          { label: `${base}² (${Math.pow(base, 2)})`, val: Math.pow(base, 2) },
          { label: `${base}³ (${Math.pow(base, 3)})`, val: Math.pow(base, 3) },
          { label: `${base}⁴ (${Math.pow(base, 4)})`, val: Math.pow(base, 4) },
          { label: `${base}⁵ (${Math.pow(base, 5)})`, val: Math.pow(base, 5) }
        ];
      } else {
        // Classes 11-12: Advanced algebraic powers / expressions
        const k = this.rand(2, 5);
        items = [
          { label: `2^${k} (${Math.pow(2, k)})`, val: Math.pow(2, k) },
          { label: `2^${k + 2} (${Math.pow(2, k + 2)})`, val: Math.pow(2, k + 2) },
          { label: `2^${k + 4} (${Math.pow(2, k + 4)})`, val: Math.pow(2, k + 4) },
          { label: `2^${k + 6} (${Math.pow(2, k + 6)})`, val: Math.pow(2, k + 6) }
        ];
      }
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
      text_hi: `निम्नलिखित मानों को ${orderType === 'ascending' ? 'आरोही (छोटे से बड़े)' : 'अवरोही (बड़े से छोटे)'} क्रम में व्यवस्थित करें:`,
      options: optionsObj,
      options_hi: optionsObj,
      correctAnswer: correctSeq,
      guruHint: `Calculate each value first, then order them from ${orderType === 'ascending' ? 'low to high' : 'high to low'}.`,
      guruHint_hi: `पहले प्रत्येक मान की गणना करें, फिर उन्हें ${orderType === 'ascending' ? 'छोटे से बड़े' : 'बड़े से छोटे'} क्रम में रखें।`,
      explanation: `Correct sequence is: ${correctSeq}`,
      isProcedural: true,
      createdAt: new Date().toISOString()
    };
  },

  // JUNIOR (Age 7-10 | Class 2 to 5)
  generateJunior(bracket, grade = null) {
    const g = Number(grade) || 3;

    // Class 2 (Age 7): Foundational Arithmetic, Shapes, Simple Clock
    if (g === 2) {
      const class2Templates = [
        () => {
          // Addition within 100
          const a = this.rand(12, 45);
          const b = this.rand(11, 40);
          const correct = a + b;
          const dist = this.createDistractors(correct, 6);
          return this.formatQuestion(
            `What is the sum of ${a} + ${b}?`,
            correct,
            dist,
            bracket, 'Junior', 'Mathematics',
            `Add the units digits first, then tens digits.`,
            `मान ज्ञात करें: ${a} + ${b} का योग क्या होगा?`
          );
        },
        () => {
          // Simple Subtraction
          const a = this.rand(30, 80);
          const b = this.rand(10, 25);
          const correct = a - b;
          const dist = this.createDistractors(correct, 6);
          return this.formatQuestion(
            `What is ${a} - ${b}?`,
            correct,
            dist,
            bracket, 'Junior', 'Mathematics',
            `Subtract ${b} from ${a}.`,
            `मान ज्ञात करें: ${a} - ${b} बराबर क्या होगा?`
          );
        },
        () => {
          // Skip counting by 5s or 10s
          const step = Math.random() > 0.5 ? 5 : 10;
          const start = this.rand(1, 4) * step;
          const seq = [start, start + step, start + 2 * step, start + 3 * step];
          const correct = start + 4 * step;
          const dist = this.createDistractors(correct, step * 2);
          return this.formatQuestion(
            `Find the next number in the pattern: ${seq.join(', ')}, ?`,
            correct,
            dist,
            bracket, 'Junior', 'Logic & Mental Ability',
            `Count forward by ${step}s.`
          );
        },
        () => {
          // Geometric sides
          const shapes = [
            { name: 'Triangle (त्रिभुज)', sides: 3 },
            { name: 'Square (वर्ग)', sides: 4 },
            { name: 'Rectangle (आयत)', sides: 4 },
            { name: 'Pentagon (पंचभुज)', sides: 5 }
          ];
          const shape = shapes[this.rand(0, shapes.length - 1)];
          const dist = this.createDistractors(shape.sides, 3);
          return this.formatQuestion(
            `How many straight sides does a ${shape.name.split(' ')[0]} have?`,
            shape.sides,
            dist,
            bracket, 'Junior', 'Mathematics',
            `Recall the definition of a ${shape.name.split(' ')[0]}.`,
            `एक ${shape.name} की कुल कितनी भुजाएं (Sides) होती हैं?`
          );
        }
      ];
      return class2Templates[this.rand(0, class2Templates.length - 1)]();
    }

    // Class 3 (Age 8): Times Tables, Days/Weeks, Simple Perimeter
    if (g === 3) {
      const class3Templates = [
        () => {
          // Multiplication Table
          const m1 = this.rand(4, 9);
          const m2 = this.rand(6, 9);
          const correct = m1 * m2;
          const dist = this.createDistractors(correct, 8);
          return this.formatQuestion(
            `What is ${m1} × ${m2}?`,
            correct,
            dist,
            bracket, 'Junior', 'Mathematics',
            `Recall the multiplication table of ${m1}.`,
            `गुणनफल ज्ञात करें: ${m1} × ${m2} = ?`
          );
        },
        () => {
          // Weeks to Days
          const weeks = this.rand(3, 7);
          const correct = weeks * 7;
          const dist = this.createDistractors(correct, 7);
          return this.formatQuestion(
            `How many total days are there in ${weeks} weeks?`,
            `${correct} days`,
            dist.map(d => `${d} days`),
            bracket, 'Junior', 'Mathematics',
            `There are 7 days in 1 week. Multiply ${weeks} × 7.`,
            `${weeks} सप्ताह (Weeks) में कुल कितने दिन होते हैं?`
          );
        },
        () => {
          // Perimeter of simple rectangle
          const L = this.rand(5, 12);
          const B = this.rand(2, 6);
          const correct = 2 * (L + B);
          const dist = this.createDistractors(correct, 6);
          return this.formatQuestion(
            `A rectangle has length ${L} cm and width ${B} cm. What is its Perimeter?`,
            `${correct} cm`,
            dist.map(d => `${d} cm`),
            bracket, 'Junior', 'Mathematics',
            `Perimeter = 2 × (${L} + ${B}) = ${correct} cm.`
          );
        }
      ];
      return class3Templates[this.rand(0, class3Templates.length - 1)]();
    }

    // Class 4 (Age 9): Multiplication, Simple Fractions, Perimeter/Area
    if (g === 4) {
      const class4Templates = [
        () => {
          // 2-digit multiplication
          const a = this.rand(12, 25);
          const b = this.rand(6, 15);
          const correct = a * b;
          const dist = this.createDistractors(correct, 15);
          return this.formatQuestion(
            `Calculate the product: ${a} × ${b} = ?`,
            correct,
            dist,
            bracket, 'Junior', 'Mathematics',
            `Break ${b} into tens and units or multiply step by step.`,
            `गुणनफल ज्ञात करें: ${a} × ${b} का मान क्या होगा?`
          );
        },
        () => {
          // Area of Rectangle
          const L = this.rand(6, 14);
          const B = this.rand(3, 8);
          const correct = L * B;
          const dist = this.createDistractors(correct, 12);
          return this.formatQuestion(
            `A rectangular room is ${L} meters long and ${B} meters wide. What is its floor Area?`,
            `${correct} sq m`,
            dist.map(d => `${d} sq m`),
            bracket, 'Junior', 'Mathematics',
            `Area = Length × Width = ${L} × ${B}.`,
            `एक कमरे की लंबाई ${L} मीटर और चौड़ाई ${B} मीटर है। कमरे का कुल क्षेत्रफल (Area) क्या होगा?`
          );
        },
        () => {
          // Unit conversion: Kilograms to Grams
          const kg = this.rand(2, 8);
          const grams = this.rand(1, 9) * 100;
          const correct = kg * 1000 + grams;
          const dist = this.createDistractors(correct, 300);
          return this.formatQuestion(
            `How many grams are there in ${kg} kg and ${grams} g?`,
            `${correct} g`,
            dist.map(d => `${d} g`),
            bracket, 'Junior', 'Mathematics',
            `1 kg = 1000 grams. So ${kg} kg = ${kg * 1000} g.`,
            `${kg} किलोग्राम और ${grams} ग्राम में कुल कितने ग्राम होंगे?`
          );
        }
      ];
      return class4Templates[this.rand(0, class4Templates.length - 1)]();
    }

    // Class 5 (Age 10): Advanced Arithmetic, Fractions/Decimals, Logic & Geometry
    const class5Templates = [
      () => {
        // Rectangle Perimeter & Area
        const L = this.rand(8, 20);
        const B = this.rand(4, 12);
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
        const S = this.rand(6, 18);
        const correct = S * S;
        const dist = this.createDistractors(correct, 15);
        return this.formatQuestion(
          `A square field has each side measuring ${S} meters. What is the total Area of the field?`,
          `${correct} sq m`,
          dist.map(d => `${d} sq m`),
          bracket, 'Junior', 'Mathematics',
          `Area of a square = side × side. Multiply ${S} by ${S}.`
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
      },
      () => {
        // LCM of small numbers
        const pairs = [
          { a: 4, b: 6, lcm: 12 },
          { a: 6, b: 8, lcm: 24 },
          { a: 3, b: 5, lcm: 15 },
          { a: 6, b: 9, lcm: 18 },
          { a: 8, b: 12, lcm: 24 }
        ];
        const p = pairs[this.rand(0, pairs.length - 1)];
        const dist = this.createDistractors(p.lcm, 6);
        return this.formatQuestion(
          `What is the Least Common Multiple (LCM) of ${p.a} and ${p.b}?`,
          p.lcm,
          dist,
          bracket, 'Junior', 'Mathematics',
          `Find the smallest positive integer that is divisible by both ${p.a} and ${p.b}.`,
          `संख्या ${p.a} और ${p.b} का लघुत्तम समापवर्त्य (LCM) क्या होगा?`
        );
      }
    ];
    return class5Templates[this.rand(0, class5Templates.length - 1)]();
  },

  // SENIOR (Age 11-17 | Class 6 to 12)
  generateSenior(bracket, grade = null) {
    const g = Number(grade) || 8;

    // Class 6 & 7 (Age 11-12)
    if (g <= 7) {
      const class67Templates = [
        () => {
          // Linear Equation: ax + b = c
          const a = this.rand(3, 6);
          const x = this.rand(4, 12);
          const b = this.rand(5, 20);
          const c = a * x + b;
          const dist = this.createDistractors(x, 4);
          return this.formatQuestion(
            `Solve for x: ${a}x + ${b} = ${c}`,
            x,
            dist,
            bracket, 'Senior', 'Mathematics',
            `Subtract ${b} from ${c}, then divide by ${a}.`,
            `समीकरण हल करें: यदि ${a}x + ${b} = ${c} है, तो x का मान क्या होगा?`
          );
        },
        () => {
          // Triangle Third Angle
          const a1 = this.rand(35, 75);
          const a2 = this.rand(35, 75);
          const a3 = 180 - (a1 + a2);
          const dist = this.createDistractors(a3, 10);
          return this.formatQuestion(
            `Two interior angles of a triangle are ${a1}° and ${a2}°. What is the measure of the third angle?`,
            `${a3}°`,
            dist.map(d => `${d}°`),
            bracket, 'Senior', 'Mathematics',
            `The sum of all three angles in any triangle is always 180°.`,
            `एक त्रिभुज के दो कोण ${a1}° और ${a2}° हैं। तीसरे कोण का मान क्या होगा?`
          );
        },
        () => {
          // Speed, Distance, Time
          const speed = this.rand(4, 9) * 10; // 40 to 90 km/h
          const time = this.rand(2, 5); // 2 to 5 hours
          const distance = speed * time;
          const dist = this.createDistractors(distance, 30);
          return this.formatQuestion(
            `A vehicle travels at a constant speed of ${speed} km/h for ${time} hours. What total distance does it cover?`,
            `${distance} km`,
            dist.map(d => `${d} km`),
            bracket, 'Senior', 'Science & STEM',
            `Distance = Speed × Time. Multiply ${speed} by ${time}.`,
            `एक वाहन ${speed} किमी/घंटा की गति से ${time} घंटे चलता है। उसके द्वारा तय की गई कुल दूरी क्या होगी?`
          );
        }
      ];
      return class67Templates[this.rand(0, class67Templates.length - 1)]();
    }

    // Class 8 & 9 (Age 13-14)
    if (g <= 9) {
      const class89Templates = [
        () => {
          // Percentage Profit
          const cp = this.rand(20, 80) * 10;
          const profitPct = this.rand(1, 5) * 5; // 5%, 10%, 15%, 20%, 25%
          const sp = cp + (cp * profitPct) / 100;
          const dist = this.createDistractors(sp, 30);
          return this.formatQuestion(
            `An article was bought for ₹${cp} and sold at a profit of ${profitPct}%. What was the Selling Price?`,
            `₹${sp}`,
            dist.map(d => `₹${d}`),
            bracket, 'Senior', 'Mathematics',
            `Selling Price = Cost Price + Profit (${profitPct}% of ₹${cp}).`,
            `एक वस्तु ₹${cp} में खरीदी गई और ${profitPct}% लाभ पर बेची गई। वस्तु का विक्रय मूल्य (SP) क्या था?`
          );
        },
        () => {
          // Force = Mass × Acceleration
          const m = this.rand(5, 25); // kg
          const a = this.rand(2, 8); // m/s^2
          const f = m * a;
          const dist = this.createDistractors(f, 15);
          return this.formatQuestion(
            `According to Newton's Second Law, what net Force is required to accelerate a ${m} kg mass at ${a} m/s²?`,
            `${f} N`,
            dist.map(d => `${d} N`),
            bracket, 'Senior', 'Physics & Science',
            `Formula: Force (F) = Mass (m) × Acceleration (a).`,
            `न्यूटन के द्वितीय नियम के अनुसार, ${m} किग्रा द्रव्यमान को ${a} मी/से² से त्वरित करने के लिए कितने बल (Force) की आवश्यकता होगी?`
          );
        },
        () => {
          // Surface Area of Cube
          const side = this.rand(4, 12);
          const tsa = 6 * side * side;
          const dist = this.createDistractors(tsa, 30);
          return this.formatQuestion(
            `What is the Total Surface Area of a solid cube whose edge measures ${side} cm?`,
            `${tsa} sq cm`,
            dist.map(d => `${d} sq cm`),
            bracket, 'Senior', 'Mathematics',
            `Total Surface Area of a cube = 6 × (side)².`,
            `${side} सेमी भुजा वाले एक ठोस घन का कुल पृष्ठीय क्षेत्रफल (Total Surface Area) क्या होगा?`
          );
        }
      ];
      return class89Templates[this.rand(0, class89Templates.length - 1)]();
    }

    // Class 10 (Age 15 - Boards)
    if (g === 10) {
      const class10Templates = [
        () => {
          // Arithmetic Progression nth term: a + (n-1)d
          const a = this.rand(3, 12);
          const d = this.rand(2, 6);
          const n = this.rand(7, 12);
          const an = a + (n - 1) * d;
          const dist = this.createDistractors(an, 8);
          return this.formatQuestion(
            `In an Arithmetic Progression (AP) with first term a = ${a} and common difference d = ${d}, find the ${n}th term (a_${n}):`,
            an,
            dist,
            bracket, 'Senior', 'Mathematics',
            `Formula: a_n = a + (n - 1)d.`,
            `एक समांतर श्रेढ़ी (AP) में यदि प्रथम पद a = ${a} और सार्व अंतर d = ${d} है, तो ${n}वां पद क्या होगा?`
          );
        },
        () => {
          // Quadratic Discriminant: b^2 - 4ac
          const a = 1;
          const b = this.rand(4, 8) * 2; // even
          const c = this.rand(2, 6);
          const disc = b * b - 4 * a * c;
          const dist = this.createDistractors(disc, 12);
          return this.formatQuestion(
            `What is the Discriminant (D = b² - 4ac) of the quadratic equation x² + ${b}x + ${c} = 0?`,
            disc,
            dist,
            bracket, 'Senior', 'Mathematics',
            `Calculate b² = ${b * b}, then subtract 4ac = ${4 * a * c}.`,
            `द्विघात समीकरण x² + ${b}x + ${c} = 0 का विविक्तकर (Discriminant D) क्या होगा?`
          );
        }
      ];
      return class10Templates[this.rand(0, class10Templates.length - 1)]();
    }

    // Class 11 & 12 (Age 16-17 - Higher Secondary & Entrance Preps)
    const class1112Templates = [
      () => {
        // Kinetic Energy: 0.5 * m * v^2
        const m = this.rand(2, 10) * 2; // even kg
        const v = this.rand(4, 10);
        const ke = 0.5 * m * v * v;
        const dist = this.createDistractors(ke, 30);
        return this.formatQuestion(
          `What is the Kinetic Energy of an object of mass ${m} kg moving with a velocity of ${v} m/s?`,
          `${ke} J`,
          dist.map(d => `${d} J`),
          bracket, 'Senior', 'Physics',
          `Kinetic Energy = (1/2) × m × v².`,
          `${m} किग्रा द्रव्यमान की एक वस्तु ${v} मी/से के वेग से गतिमान है। उसकी गतिज ऊर्जा (Kinetic Energy) क्या होगी?`
        );
      },
      () => {
        // Derivative of x^n at x = 2: d/dx (x^n) = n * x^(n-1)
        const n = this.rand(3, 5);
        const atX = 2;
        const correct = n * Math.pow(atX, n - 1);
        const dist = this.createDistractors(correct, 8);
        return this.formatQuestion(
          `If f(x) = x^${n}, what is the derivative value f'(2)?`,
          correct,
          dist,
          bracket, 'Senior', 'Mathematics',
          `Derivative of x^n is n·x^(n-1). Substitute x = 2.`,
          `यदि f(x) = x^${n} है, तो अवकलज (Derivative) f'(2) का मान क्या होगा?`
        );
      },
      () => {
        // Ohm's Law: V = I * R
        const i = this.rand(2, 6);
        const r = this.rand(5, 25);
        const v = i * r;
        const dist = this.createDistractors(v, 15);
        return this.formatQuestion(
          `According to Ohm's Law, what voltage is across a ${r} Ω resistor when a current of ${i} A flows through it?`,
          `${v} V`,
          dist.map(d => `${d} V`),
          bracket, 'Senior', 'Physics',
          `Voltage V = Current (I) × Resistance (R).`,
          `ओम के नियम के अनुसार, ${r} Ω प्रतिरोध में ${i} A धारा प्रवाहित होने पर विभवांतर (Voltage) क्या होगा?`
        );
      }
    ];
    return class1112Templates[this.rand(0, class1112Templates.length - 1)]();
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
