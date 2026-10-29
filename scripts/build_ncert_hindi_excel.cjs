const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// Load all 26 chapters of Sarangi 2
const chapters = [];
for (let i = 1; i <= 26; i++) {
  const pad = i < 10 ? '0' + i : '' + i;
  chapters.push(require(`./ncert_hindi_data/ch${pad}.cjs`));
}

const allQuestions = chapters.flat();
console.log(`Loaded ${allQuestions.length} total questions across ${chapters.length} Hindi chapters.`);

// Validate every question
allQuestions.forEach((q, idx) => {
  const reqFields = [
    'id', 'chapter_num', 'chapter_title', 'unit', 'topic',
    'question_hi', 'question_en',
    'option_a', 'option_b', 'option_c', 'option_d',
    'correct_option', 'explanation_hi', 'explanation_en', 'difficulty'
  ];
  for (const f of reqFields) {
    if (q[f] === undefined || q[f] === null || q[f] === '') {
      throw new Error(`Missing field ${f} at index ${idx} (id: ${q.id})`);
    }
  }
  if (!['A', 'B', 'C', 'D'].includes(q.correct_option)) {
    throw new Error(`Invalid correct_option ${q.correct_option} at id: ${q.id}`);
  }
});

console.log('✅ Validation passed! All ' + allQuestions.length + ' questions meet strict schema requirements.');

// Prepare Sheet 1: All Questions
const questionsRows = allQuestions.map((q, idx) => ({
  'S.No': idx + 1,
  'Question ID': q.id,
  'Grade': 'Class 2',
  'Subject': 'Hindi (Sarangi 2)',
  'Unit': q.unit,
  'Chapter No': q.chapter_num,
  'Chapter Name': q.chapter_title,
  'Topic / Language Skill': q.topic,
  'Question (Hindi)': q.question_hi,
  'Question (English)': q.question_en,
  'Option A': q.option_a,
  'Option B': q.option_b,
  'Option C': q.option_c,
  'Option D': q.option_d,
  'Correct Option': q.correct_option,
  'Explanation (Hindi)': q.explanation_hi,
  'Explanation (English)': q.explanation_en,
  'Difficulty Level': q.difficulty
}));

// Prepare Sheet 2: Topic Breakdown
const topicMap = new Map();
allQuestions.forEach(q => {
  if (!topicMap.has(q.topic)) {
    topicMap.set(q.topic, {
      'Topic / Language Skill': q.topic,
      'Questions Count': 0,
      'Example Chapter': q.chapter_title,
      'Sample Question': q.question_hi
    });
  }
  topicMap.get(q.topic)['Questions Count']++;
});

const topicBreakdownRows = Array.from(topicMap.values());

// Prepare Sheet 3: Chapter Summary
const chMap = new Map();
allQuestions.forEach(q => {
  if (!chMap.has(q.chapter_num)) {
    chMap.set(q.chapter_num, {
      'Chapter No': q.chapter_num,
      'Unit': q.unit,
      'Chapter Name': q.chapter_title,
      'Total Questions': 0,
      'Key Language Concepts': []
    });
  }
  const entry = chMap.get(q.chapter_num);
  entry['Total Questions']++;
  if (!entry['Key Language Concepts'].includes(q.topic)) {
    entry['Key Language Concepts'].push(q.topic);
  }
});

const chapterSummaryRows = Array.from(chMap.values()).map(r => ({
  'Chapter No': r['Chapter No'],
  'Unit': r['Unit'],
  'Chapter Name': r['Chapter Name'],
  'Total Questions': r['Total Questions'],
  'Key Language Concepts': r['Key Language Concepts'].join(', ')
}));

// Create Workbook
const wb = XLSX.utils.book_new();

const wsQuestions = XLSX.utils.json_to_sheet(questionsRows);
wsQuestions['!cols'] = [
  { wch: 6 },  // S.No
  { wch: 15 }, // ID
  { wch: 10 }, // Grade
  { wch: 20 }, // Subject
  { wch: 28 }, // Unit
  { wch: 12 }, // Chapter No
  { wch: 28 }, // Chapter Name
  { wch: 32 }, // Topic
  { wch: 55 }, // Question Hi
  { wch: 55 }, // Question En
  { wch: 25 }, // Opt A
  { wch: 25 }, // Opt B
  { wch: 25 }, // Opt C
  { wch: 25 }, // Opt D
  { wch: 14 }, // Correct Opt
  { wch: 60 }, // Exp Hi
  { wch: 60 }, // Exp En
  { wch: 14 }  // Difficulty
];

const wsTopics = XLSX.utils.json_to_sheet(topicBreakdownRows);
wsTopics['!cols'] = [
  { wch: 35 },
  { wch: 16 },
  { wch: 28 },
  { wch: 60 }
];

const wsChapters = XLSX.utils.json_to_sheet(chapterSummaryRows);
wsChapters['!cols'] = [
  { wch: 12 },
  { wch: 28 },
  { wch: 30 },
  { wch: 16 },
  { wch: 60 }
];

XLSX.utils.book_append_sheet(wb, wsQuestions, 'Questions');
XLSX.utils.book_append_sheet(wb, wsTopics, 'Topic_Breakdown');
XLSX.utils.book_append_sheet(wb, wsChapters, 'Chapter_Summary');

// Paths to write (Strictly inside project workspace folder as requested)
const projectExcelPath = path.join(process.cwd(), 'NCERT_Class2_Hindi_Questions.xlsx');

XLSX.writeFile(wb, projectExcelPath);
console.log(`Saved workbook to: ${projectExcelPath}`);

// Save JSON file
const jsonPath = path.join(process.cwd(), 'src', 'data', 'ncert_class2_hindi_questions.json');
fs.writeFileSync(jsonPath, JSON.stringify(allQuestions, null, 2), 'utf-8');
console.log(`Saved JSON questions to: ${jsonPath}`);

// Export game JS questions in standard raw schema
const jsContent = `// NCERT Class 2 Hindi (सारंगी 2) Question Bank
// Generated automatically from textbook exercises and language lessons
// Total Questions: ${allQuestions.length}

export const NCERT_CLASS2_HINDI_QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};
export default NCERT_CLASS2_HINDI_QUESTIONS;
`;

const jsPath = path.join(process.cwd(), 'src', 'data', 'ncertClass2HindiQuestions.js');
fs.writeFileSync(jsPath, jsContent, 'utf-8');
console.log(`Saved Game JS questions to: ${jsPath}`);

console.log('\n--- CHAPTER SUMMARY TABLE ---');
console.table(chapterSummaryRows.map(r => ({
  'Ch': r['Chapter No'],
  'Unit': r['Unit'],
  'Title': r['Chapter Name'],
  'Questions': r['Total Questions']
})));
