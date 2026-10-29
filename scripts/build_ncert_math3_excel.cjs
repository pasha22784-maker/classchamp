const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// Load all 14 chapters of Maths Mela (Class 3 Mathematics)
const chapters = [];
for (let i = 1; i <= 14; i++) {
  const pad = i < 10 ? '0' + i : '' + i;
  chapters.push(require(`./ncert_math3_data/ch${pad}.cjs`));
}

const allQuestions = chapters.flat();
console.log(`Loaded ${allQuestions.length} total questions across ${chapters.length} Class 3 Mathematics chapters.`);

// Validate every question
const ids = new Set();
allQuestions.forEach((q, idx) => {
  const reqFields = [
    'id', 'chapter_num', 'chapter_title', 'page_book', 'topic',
    'question_en', 'question_hi',
    'option_a', 'option_b', 'option_c', 'option_d',
    'correct_option', 'explanation_en', 'explanation_hi', 'difficulty'
  ];
  for (const f of reqFields) {
    if (q[f] === undefined || q[f] === null || q[f] === '') {
      throw new Error(`Missing field ${f} at index ${idx} (id: ${q.id})`);
    }
  }
  if (!['A', 'B', 'C', 'D'].includes(q.correct_option)) {
    throw new Error(`Invalid correct_option ${q.correct_option} at id: ${q.id}`);
  }
  if (ids.has(q.id)) {
    throw new Error(`Duplicate ID found: ${q.id}`);
  }
  ids.add(q.id);
});

console.log(`✅ Validation passed! All ${allQuestions.length} questions meet strict schema requirements.`);

// Prepare Sheet 1: All Questions
const questionsRows = allQuestions.map((q, idx) => ({
  'S.No': idx + 1,
  'Question ID': q.id,
  'Grade': 'Class 3',
  'Subject': 'Mathematics (Maths Mela)',
  'Chapter No': q.chapter_num,
  'Chapter Name': q.chapter_title,
  'Book Page': q.page_book,
  'Topic / Mathematical Skill': q.topic,
  'Question (English)': q.question_en,
  'Question (Hindi)': q.question_hi,
  'Option A': q.option_a,
  'Option B': q.option_b,
  'Option C': q.option_c,
  'Option D': q.option_d,
  'Correct Option': q.correct_option,
  'Explanation (English)': q.explanation_en,
  'Explanation (Hindi)': q.explanation_hi,
  'Difficulty Level': q.difficulty
}));

// Prepare Sheet 2: Chapter Summary
const chMap = new Map();
allQuestions.forEach(q => {
  if (!chMap.has(q.chapter_num)) {
    chMap.set(q.chapter_num, {
      'Chapter No': q.chapter_num,
      'Chapter Name': q.chapter_title,
      'Total Questions': 0,
      'Key Topics': []
    });
  }
  const entry = chMap.get(q.chapter_num);
  entry['Total Questions']++;
  if (!entry['Key Topics'].includes(q.topic)) {
    entry['Key Topics'].push(q.topic);
  }
});

const chapterSummaryRows = Array.from(chMap.values()).map(r => ({
  'Chapter No': r['Chapter No'],
  'Chapter Name': r['Chapter Name'],
  'Total Questions': r['Total Questions'],
  'Key Mathematical Skills': r['Key Topics'].join(', ')
}));

// Prepare Sheet 3: Topic Breakdown
const topicMap = new Map();
allQuestions.forEach(q => {
  if (!topicMap.has(q.topic)) {
    topicMap.set(q.topic, {
      'Topic / Skill': q.topic,
      'Chapter Name': q.chapter_title,
      'Questions Count': 0,
      'Sample Question': q.question_en
    });
  }
  topicMap.get(q.topic)['Questions Count']++;
});

const topicBreakdownRows = Array.from(topicMap.values());

// Create Workbook
const wb = XLSX.utils.book_new();

const wsQuestions = XLSX.utils.json_to_sheet(questionsRows);
wsQuestions['!cols'] = [
  { wch: 6 },  // S.No
  { wch: 15 }, // ID
  { wch: 10 }, // Grade
  { wch: 26 }, // Subject
  { wch: 12 }, // Chapter No
  { wch: 28 }, // Chapter Name
  { wch: 10 }, // Book Page
  { wch: 35 }, // Topic
  { wch: 55 }, // Question En
  { wch: 55 }, // Question Hi
  { wch: 25 }, // Opt A
  { wch: 25 }, // Opt B
  { wch: 25 }, // Opt C
  { wch: 25 }, // Opt D
  { wch: 14 }, // Correct Opt
  { wch: 60 }, // Exp En
  { wch: 60 }, // Exp Hi
  { wch: 14 }  // Difficulty
];

const wsChapters = XLSX.utils.json_to_sheet(chapterSummaryRows);
wsChapters['!cols'] = [
  { wch: 12 },
  { wch: 32 },
  { wch: 16 },
  { wch: 70 }
];

const wsTopics = XLSX.utils.json_to_sheet(topicBreakdownRows);
wsTopics['!cols'] = [
  { wch: 38 },
  { wch: 32 },
  { wch: 16 },
  { wch: 60 }
];

XLSX.utils.book_append_sheet(wb, wsQuestions, 'Questions');
XLSX.utils.book_append_sheet(wb, wsChapters, 'Chapter_Summary');
XLSX.utils.book_append_sheet(wb, wsTopics, 'Topic_Breakdown');

// Paths to write (Strictly inside project workspace folder as requested)
const projectExcelPath = path.join(process.cwd(), 'NCERT_Class3_Maths_Questions.xlsx');

XLSX.writeFile(wb, projectExcelPath);
console.log(`Saved workbook to: ${projectExcelPath}`);

// Save JSON file
const jsonPath = path.join(process.cwd(), 'src', 'data', 'ncert_class3_maths_questions.json');
fs.writeFileSync(jsonPath, JSON.stringify(allQuestions, null, 2), 'utf-8');
console.log(`Saved JSON questions to: ${jsonPath}`);

// Export game JS questions in standard raw schema
const jsContent = `// NCERT Class 3 Mathematics (Maths Mela) Question Bank
// Total Questions: ${allQuestions.length}

export const NCERT_CLASS3_MATHS_QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};
export default NCERT_CLASS3_MATHS_QUESTIONS;
`;

const jsPath = path.join(process.cwd(), 'src', 'data', 'ncertClass3MathsQuestions.js');
fs.writeFileSync(jsPath, jsContent, 'utf-8');
console.log(`Saved Game JS questions to: ${jsPath}`);

console.log('\n--- CHAPTER SUMMARY TABLE ---');
console.table(chapterSummaryRows.map(r => ({
  'Ch': r['Chapter No'],
  'Chapter Name': r['Chapter Name'],
  'Questions': r['Total Questions']
})));
