const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// Load all 6 sections
const sec1 = require('./general_intelligence_data/sec01_odd_one_out.cjs');
const sec2 = require('./general_intelligence_data/sec02_analogies.cjs');
const sec3 = require('./general_intelligence_data/sec03_daily_life.cjs');
const sec4 = require('./general_intelligence_data/sec04_time_patterns.cjs');
const sec5 = require('./general_intelligence_data/sec05_senses_nature.cjs');
const sec6 = require('./general_intelligence_data/sec06_riddles.cjs');

const sections = [sec1, sec2, sec3, sec4, sec5, sec6];
const allQuestions = sections.flat();

console.log(`Loaded ${allQuestions.length} total questions across ${sections.length} General Intelligence sections.`);

// Validate every question
const ids = new Set();
allQuestions.forEach((q, idx) => {
  const reqFields = [
    'id', 'section_num', 'section_title', 'topic',
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
  'Grade': 'Class 2',
  'Subject': 'General Intelligence',
  'Section No': q.section_num,
  'Section Name': q.section_title,
  'Topic': q.topic,
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

// Prepare Sheet 2: Section Summary
const secMap = new Map();
allQuestions.forEach(q => {
  if (!secMap.has(q.section_num)) {
    secMap.set(q.section_num, {
      'Section No': q.section_num,
      'Section Name': q.section_title,
      'Total Questions': 0,
      'Key Topics': []
    });
  }
  const entry = secMap.get(q.section_num);
  entry['Total Questions']++;
  if (!entry['Key Topics'].includes(q.topic)) {
    entry['Key Topics'].push(q.topic);
  }
});

const sectionSummaryRows = Array.from(secMap.values()).map(r => ({
  'Section No': r['Section No'],
  'Section Name': r['Section Name'],
  'Total Questions': r['Total Questions'],
  'Key Topics Covered': r['Key Topics'].join(', ')
}));

// Prepare Sheet 3: Topic Breakdown
const topicMap = new Map();
allQuestions.forEach(q => {
  if (!topicMap.has(q.topic)) {
    topicMap.set(q.topic, {
      'Topic': q.topic,
      'Section Name': q.section_title,
      'Questions Count': 0,
      'Sample Question': q.question_hi
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
  { wch: 22 }, // Subject
  { wch: 12 }, // Section No
  { wch: 32 }, // Section Name
  { wch: 30 }, // Topic
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

const wsSections = XLSX.utils.json_to_sheet(sectionSummaryRows);
wsSections['!cols'] = [
  { wch: 12 },
  { wch: 35 },
  { wch: 16 },
  { wch: 70 }
];

const wsTopics = XLSX.utils.json_to_sheet(topicBreakdownRows);
wsTopics['!cols'] = [
  { wch: 35 },
  { wch: 35 },
  { wch: 16 },
  { wch: 60 }
];

XLSX.utils.book_append_sheet(wb, wsQuestions, 'Questions');
XLSX.utils.book_append_sheet(wb, wsSections, 'Section_Summary');
XLSX.utils.book_append_sheet(wb, wsTopics, 'Topic_Breakdown');

// Paths to write (Strictly inside project workspace folder as requested)
const projectExcelPath = path.join(process.cwd(), 'NCERT_Class2_General_Intelligence_Questions.xlsx');

XLSX.writeFile(wb, projectExcelPath);
console.log(`Saved workbook to: ${projectExcelPath}`);

// Save JSON file
const jsonPath = path.join(process.cwd(), 'src', 'data', 'ncert_class2_general_intelligence_questions.json');
fs.writeFileSync(jsonPath, JSON.stringify(allQuestions, null, 2), 'utf-8');
console.log(`Saved JSON questions to: ${jsonPath}`);

// Export game JS questions in standard raw schema
const jsContent = `// NCERT Class 2 General Intelligence & Mental Ability Question Bank
// Total Questions: ${allQuestions.length}

export const NCERT_CLASS2_GENERAL_INTELLIGENCE_QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};
export default NCERT_CLASS2_GENERAL_INTELLIGENCE_QUESTIONS;
`;

const jsPath = path.join(process.cwd(), 'src', 'data', 'ncertClass2GeneralIntelligenceQuestions.js');
fs.writeFileSync(jsPath, jsContent, 'utf-8');
console.log(`Saved Game JS questions to: ${jsPath}`);

console.log('\n--- SECTION SUMMARY TABLE ---');
console.table(sectionSummaryRows.map(r => ({
  'Sec': r['Section No'],
  'Section Name': r['Section Name'],
  'Questions': r['Total Questions']
})));
