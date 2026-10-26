/**
 * csvTemplateService.js
 * Implements the CSV/JSON Bulk Upload and Sample Template generator for the Admin Panel.
 * Performs duplicate checking, prize-bracket validation, and detailed row validation.
 */

export const VALID_DIVISIONS = ['Junior', 'Senior', 'Open', 'All'];
export const VALID_BRACKETS = ['1000-10000', '10000-340000', '340000-2500000', '2500000-10000000', 'FFF'];

export const SAMPLE_CSV_ROWS = [
  {
    Division: "Junior",
    Exam_Category: "NCERT_6_10",
    Prize_Bracket: "1000-10000",
    Subject: "Maths",
    Question_Text: "What is the product of 12 multiplied by 8?",
    Option_A: "84",
    Option_B: "96",
    Option_C: "108",
    Option_D: "92",
    Correct_Answer: "B",
    Guru_Hint: "12 times 8 is just four less than 100.",
    Explanation: "12 × 8 = 96.",
    Question_Text_HI: "12 को 8 से गुणा करने पर क्या प्राप्त होता है?",
    Option_A_HI: "84",
    Option_B_HI: "96",
    Option_C_HI: "108",
    Option_D_HI: "92",
    Guru_Hint_HI: "12 का पहाड़ा याद करें।"
  },
  {
    Division: "Open",
    Exam_Category: "SSC",
    Prize_Bracket: "1000-10000",
    Subject: "Polity",
    Question_Text: "Who is known as the 'Chief Architect' of the Constitution of India?",
    Option_A: "Dr. B. R. Ambedkar",
    Option_B: "Jawaharlal Nehru",
    Option_C: "Sardar Patel",
    Option_D: "Dr. Rajendra Prasad",
    Correct_Answer: "A",
    Guru_Hint: "He was the Chairman of the Drafting Committee.",
    Explanation: "Dr. B. R. Ambedkar chaired the Drafting Committee.",
    Question_Text_HI: "भारतीय संविधान के 'मुख्य शिल्पकार' के रूप में किसे जाना जाता है?",
    Option_A_HI: "डॉ. बी. आर. अम्बेडकर",
    Option_B_HI: "जवाहरलाल नेहरू",
    Option_C_HI: "सरदार पटेल",
    Option_D_HI: "डॉ. राजेन्द्र प्रसाद",
    Guru_Hint_HI: "वे प्रारूप समिति के अध्यक्ष थे।"
  },
  {
    Division: "Open",
    Exam_Category: "NEET_JEE",
    Prize_Bracket: "10000-340000",
    Subject: "Science",
    Question_Text: "Which organelle is considered the 'Powerhouse of the Cell'?",
    Option_A: "Ribosome",
    Option_B: "Mitochondria",
    Option_C: "Golgi Apparatus",
    Option_D: "Nucleus",
    Correct_Answer: "B",
    Guru_Hint: "It generates most of the chemical energy needed by cell (ATP).",
    Explanation: "Mitochondria generate cellular energy in the form of ATP.",
    Question_Text_HI: "कोशिका का 'ऊर्जा गृह' (Powerhouse) किसे कहा जाता है?",
    Option_A_HI: "राइबोसोम",
    Option_B_HI: "माइटोकॉन्ड्रिया",
    Option_C_HI: "गॉल्जी काय",
    Option_D_HI: "केन्द्रक",
    Guru_Hint_HI: "यह एटीपी (ATP) के रूप में ऊर्जा बनाता है।"
  },
  {
    Division: "Open",
    Exam_Category: "BANKING",
    Prize_Bracket: "10000-340000",
    Subject: "Economy",
    Question_Text: "What is the primary objective of the Reserve Bank of India's Monetary Policy Committee?",
    Option_A: "Stock Market Regulation",
    Option_B: "Maintaining Inflation Target",
    Option_C: "Income Tax Collection",
    Option_D: "Export Subsidies",
    Correct_Answer: "B",
    Guru_Hint: "Targeting CPI inflation within a flexible 4% (+/- 2%) band.",
    Explanation: "The primary objective of the RBI's MPC is price stability with growth.",
    Question_Text_HI: "भारतीय रिज़र्व बैंक (RBI) की मौद्रिक नीति समिति (MPC) का मुख्य उद्देश्य क्या है?",
    Option_A_HI: "शेयर बाजार नियमन",
    Option_B_HI: "मुद्रास्फीति (Inflation) को लक्ष्य के भीतर रखना",
    Option_C_HI: "आयकर संग्रह",
    Option_D_HI: "निर्यात सब्सिडी देना",
    Guru_Hint_HI: "सीपीआई मुद्रास्फीति को नियंत्रित रखना।"
  },
  {
    Division: "Senior",
    Exam_Category: "NCERT_6_10",
    Prize_Bracket: "10000-340000",
    Subject: "Science",
    Question_Text: "Which gas is most abundant in Earth's atmosphere?",
    Option_A: "Oxygen",
    Option_B: "Nitrogen",
    Option_C: "Carbon Dioxide",
    Option_D: "Argon",
    Correct_Answer: "B",
    Guru_Hint: "It makes up approximately 78% of dry air.",
    Explanation: "Nitrogen constitutes about 78.08% of Earth's atmosphere.",
    Question_Text_HI: "पृथ्वी के वायुमंडल में सर्वाधिक मात्रा में कौन सी गैस पाई जाती है?",
    Option_A_HI: "ऑक्सीजन",
    Option_B_HI: "नाइट्रोजन",
    Option_C_HI: "कार्बन डाइऑक्साइड",
    Option_D_HI: "ऑर्गन",
    Guru_Hint_HI: "यह शुष्क वायु का लगभग 78% भाग बनाती है।"
  }
];

export const csvTemplateService = {
  // Generate downloadable CSV string
  generateTemplateCsv() {
    const headers = [
      "Division",
      "Exam_Category",
      "Prize_Bracket",
      "Subject",
      "Question_Text",
      "Option_A",
      "Option_B",
      "Option_C",
      "Option_D",
      "Correct_Answer",
      "Guru_Hint",
      "Explanation",
      "Question_Text_HI",
      "Option_A_HI",
      "Option_B_HI",
      "Option_C_HI",
      "Option_D_HI",
      "Guru_Hint_HI"
    ];

    const lines = [headers.join(",")];

    SAMPLE_CSV_ROWS.forEach(row => {
      const escaped = [
        `"${row.Division}"`,
        `"${row.Exam_Category || 'ALL'}"`,
        `"${row.Prize_Bracket}"`,
        `"${row.Subject}"`,
        `"${row.Question_Text.replace(/"/g, '""')}"`,
        `"${row.Option_A.replace(/"/g, '""')}"`,
        `"${row.Option_B.replace(/"/g, '""')}"`,
        `"${row.Option_C.replace(/"/g, '""')}"`,
        `"${row.Option_D.replace(/"/g, '""')}"`,
        `"${row.Correct_Answer || row.CorrectAnswer}"`,
        `"${(row.Guru_Hint || '').replace(/"/g, '""')}"`,
        `"${(row.Explanation || '').replace(/"/g, '""')}"`,
        `"${(row.Question_Text_HI || '').replace(/"/g, '""')}"`,
        `"${(row.Option_A_HI || '').replace(/"/g, '""')}"`,
        `"${(row.Option_B_HI || '').replace(/"/g, '""')}"`,
        `"${(row.Option_C_HI || '').replace(/"/g, '""')}"`,
        `"${(row.Option_D_HI || '').replace(/"/g, '""')}"`,
        `"${(row.Guru_Hint_HI || '').replace(/"/g, '""')}"`
      ];
      lines.push(escaped.join(","));
    });

    return lines.join("\r\n");
  },

  // Trigger browser download for template CSV
  downloadTemplate() {
    const csvContent = this.generateTemplateCsv();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'BrainLeague_Question_Template.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  // Clean and normalize text for duplicate detection
  normalizeText(str = '') {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
  },

  // Parse CSV text into array of rows
  parseCsv(text) {
    const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length < 2) return [];

    // Parse header
    const headers = this.parseCsvLine(lines[0]).map(h => h.trim().replace(/^"|"$/g, ''));

    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const values = this.parseCsvLine(lines[i]);
      if (values.length === 0) continue;
      const row = { _rowNum: i + 1 };
      headers.forEach((h, idx) => {
        row[h] = (values[idx] || '').trim().replace(/^"|"$/g, '').replace(/""/g, '"');
      });
      rows.push(row);
    }
    return rows;
  },

  // Helper to parse a single CSV line accounting for commas inside quotes
  parseCsvLine(line) {
    const result = [];
    let startValIndex = 0;
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(line.substring(startValIndex, i));
        startValIndex = i + 1;
      }
    }
    result.push(line.substring(startValIndex));
    return result;
  },

  // Smart validation and processing against existing questions
  validateAndImportQuestions(rows, existingQuestions = [], uploadDefaults = {}) {
    const existingNormMap = new Set(
      existingQuestions.map(q => this.normalizeText(q.text))
    );

    const validQuestions = [];
    const duplicates = [];
    const errors = [];

    rows.forEach(row => {
      const rowNum = row._rowNum || 0;
      // Target division override if specified, otherwise row division
      const division = (uploadDefaults.targetDivision && uploadDefaults.targetDivision !== 'auto')
        ? uploadDefaults.targetDivision
        : (row.Division || row.division);

      const bracket = row.Prize_Bracket || row.bracket;
      const text = row.Question_Text || row.text;
      const optA = row.Option_A || row.optionA;
      const optB = row.Option_B || row.optionB;
      const optC = row.Option_C || row.optionC;
      const optD = row.Option_D || row.optionD;
      const correct = (row.Correct_Answer || row.correctAnswer || '').toUpperCase().trim();
      const hint = row.Guru_Hint || row.guruHint || '';
      const expl = row.Explanation || row.explanation || '';

      // Subject: target subject override or row subject
      const subject = (uploadDefaults.targetSubject && uploadDefaults.targetSubject !== 'auto')
        ? uploadDefaults.targetSubject
        : (row.Subject || row.subject || 'General');

      // Exam Category (for Open / Champions division): target override or row exam category
      let examCategory = (uploadDefaults.targetExamCategory && uploadDefaults.targetExamCategory !== 'auto')
        ? uploadDefaults.targetExamCategory
        : (row.Exam_Category || row.examCategory || (division === 'Open' ? 'ALL' : undefined));

      // Hindi translation fields if present
      const textHi = row.Question_Text_HI || row.text_hi || undefined;
      const optAHi = row.Option_A_HI || row.options_hi?.A || undefined;
      const optBHi = row.Option_B_HI || row.options_hi?.B || undefined;
      const optCHi = row.Option_C_HI || row.options_hi?.C || undefined;
      const optDHi = row.Option_D_HI || row.options_hi?.D || undefined;
      const hintHi = row.Guru_Hint_HI || row.guruHint_hi || undefined;

      // Validation 1: Required text
      if (!text || !optA || !optB || !optC || !optD || !correct) {
        errors.push({
          row: rowNum,
          reason: "Missing question text, options, or correct answer."
        });
        return;
      }

      // Validation 2: Division check
      if (!division || !VALID_DIVISIONS.includes(division)) {
        errors.push({
          row: rowNum,
          reason: `Invalid Division '${division}'. Must be Junior, Senior, Open, or All.`
        });
        return;
      }

      // Validation 3: Bracket check
      if (!bracket || !VALID_BRACKETS.includes(bracket)) {
        errors.push({
          row: rowNum,
          reason: `Invalid Prize_Bracket '${bracket}'. Must be 1000-10000, 10000-340000, 340000-2500000, 2500000-10000000, or FFF.`
        });
        return;
      }

      // Validation 4: Correct answer check
      if (bracket === 'FFF') {
        const parts = correct.split(',').map(p => p.trim());
        const validOrder = parts.length === 4 && new Set(parts).size === 4 && parts.every(p => ['A','B','C','D'].includes(p));
        if (!validOrder) {
          errors.push({
            row: rowNum,
            reason: `FFF Correct_Answer must be 4 distinct letters separated by commas (e.g. 'C,A,D,B'). Found: '${correct}'.`
          });
          return;
        }
      } else {
        if (!['A', 'B', 'C', 'D'].includes(correct)) {
          errors.push({
            row: rowNum,
            reason: `Standard MCQ Correct_Answer must be 'A', 'B', 'C', or 'D'. Found: '${correct}'.`
          });
          return;
        }
      }

      // Validation 5: Duplicate check
      const norm = this.normalizeText(text);
      if (existingNormMap.has(norm)) {
        duplicates.push({ row: rowNum, text });
        return;
      }

      // Mark as existing so intra-file duplicates are also caught
      existingNormMap.add(norm);

      const qObj = {
        id: `Q_CSV_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
        division,
        bracket,
        subject,
        text,
        options: { A: optA, B: optB, C: optC, D: optD },
        correctAnswer: correct,
        guruHint: hint,
        explanation: expl,
        createdAt: new Date().toISOString()
      };

      if (division === 'Open' || examCategory) {
        qObj.examCategory = examCategory || 'ALL';
      }
      if (textHi) qObj.text_hi = textHi;
      if (optAHi && optBHi && optCHi && optDHi) {
        qObj.options_hi = { A: optAHi, B: optBHi, C: optCHi, D: optDHi };
      }
      if (hintHi) qObj.guruHint_hi = hintHi;

      validQuestions.push(qObj);
    });

    return {
      totalFound: rows.length,
      validQuestions,
      duplicates,
      errors
    };
  }
};

export default csvTemplateService;
