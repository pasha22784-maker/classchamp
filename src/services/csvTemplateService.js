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
    Prize_Bracket: "1000-10000",
    Subject: "Maths",
    Question_Text: "What is the product of 12 multiplied by 8?",
    Option_A: "84",
    Option_B: "96",
    Option_C: "108",
    Option_D: "92",
    Correct_Answer: "B",
    Guru_Hint: "12 times 8 is just four less than 100.",
    Explanation: "12 × 8 = 96."
  },
  {
    Division: "Junior",
    Prize_Bracket: "FFF",
    Subject: "Science",
    Question_Text: "Arrange these animals in order of their typical weight from LIGHTEST to HEAVIEST:",
    Option_A: "Cat",
    Option_B: "Elephant",
    Option_C: "Ant",
    Option_D: "Horse",
    Correct_Answer: "C,A,D,B",
    Guru_Hint: "Ants are tiny insects, while elephants weigh thousands of kilograms.",
    Explanation: "Ant (~0.005g) < Cat (~4kg) < Horse (~500kg) < Elephant (~4000kg)."
  },
  {
    Division: "Senior",
    Prize_Bracket: "10000-340000",
    Subject: "Science",
    Question_Text: "Which gas is most abundant in Earth's atmosphere?",
    Option_A: "Oxygen",
    Option_B: "Nitrogen",
    Option_C: "Carbon Dioxide",
    Option_D: "Argon",
    Correct_Answer: "B",
    Guru_Hint: "It makes up approximately 78% of dry air.",
    Explanation: "Nitrogen constitutes about 78.08% of Earth's atmosphere."
  },
  {
    Division: "Open",
    Prize_Bracket: "340000-2500000",
    Subject: "Polity",
    Question_Text: "Right to Privacy is protected as an intrinsic part of the Right to Life under which Article?",
    Option_A: "Article 14",
    Option_B: "Article 19",
    Option_C: "Article 21",
    Option_D: "Article 32",
    CorrectAnswer: "C",
    Guru_Hint: "Puttaswamy case (2017) affirmed privacy under this primary life & liberty article.",
    Explanation: "The Supreme Court declared Right to Privacy guaranteed under Article 21."
  },
  {
    Division: "Open",
    Prize_Bracket: "2500000-10000000",
    Subject: "Physics",
    Question_Text: "Who formulated the general theory of relativity in 1915?",
    Option_A: "Isaac Newton",
    Option_B: "Albert Einstein",
    Option_C: "Niels Bohr",
    Option_D: "Max Planck",
    Correct_Answer: "B",
    Guru_Hint: "He received the 1921 Nobel Prize in Physics for photoelectric effect.",
    Explanation: "Albert Einstein published General Relativity in 1915."
  }
];

export const csvTemplateService = {
  // Generate downloadable CSV string
  generateTemplateCsv() {
    const headers = [
      "Division",
      "Prize_Bracket",
      "Subject",
      "Question_Text",
      "Option_A",
      "Option_B",
      "Option_C",
      "Option_D",
      "Correct_Answer",
      "Guru_Hint",
      "Explanation"
    ];

    const lines = [headers.join(",")];

    SAMPLE_CSV_ROWS.forEach(row => {
      const escaped = [
        `"${row.Division}"`,
        `"${row.Prize_Bracket}"`,
        `"${row.Subject}"`,
        `"${row.Question_Text.replace(/"/g, '""')}"`,
        `"${row.Option_A.replace(/"/g, '""')}"`,
        `"${row.Option_B.replace(/"/g, '""')}"`,
        `"${row.Option_C.replace(/"/g, '""')}"`,
        `"${row.Option_D.replace(/"/g, '""')}"`,
        `"${row.Correct_Answer || row.CorrectAnswer}"`,
        `"${(row.Guru_Hint || '').replace(/"/g, '""')}"`,
        `"${(row.Explanation || '').replace(/"/g, '""')}"`
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
  validateAndImportQuestions(rows, existingQuestions = []) {
    const existingNormMap = new Set(
      existingQuestions.map(q => this.normalizeText(q.text))
    );

    const validQuestions = [];
    const duplicates = [];
    const errors = [];

    rows.forEach(row => {
      const rowNum = row._rowNum || 0;
      const division = row.Division || row.division;
      const bracket = row.Prize_Bracket || row.bracket;
      const text = row.Question_Text || row.text;
      const optA = row.Option_A || row.optionA;
      const optB = row.Option_B || row.optionB;
      const optC = row.Option_C || row.optionC;
      const optD = row.Option_D || row.optionD;
      const correct = (row.Correct_Answer || row.correctAnswer || '').toUpperCase().trim();
      const hint = row.Guru_Hint || row.guruHint || '';
      const expl = row.Explanation || row.explanation || '';
      const subject = row.Subject || row.subject || 'General';

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

      validQuestions.push({
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
      });
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
