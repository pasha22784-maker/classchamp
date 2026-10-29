const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// Load all chapters
const chapters = [
  require('./ncert_data/ch01.cjs'),
  require('./ncert_data/ch02.cjs'),
  require('./ncert_data/ch03.cjs'),
  require('./ncert_data/ch04.cjs'),
  require('./ncert_data/ch05.cjs'),
  require('./ncert_data/ch06.cjs'),
  require('./ncert_data/ch07.cjs'),
  require('./ncert_data/ch08.cjs'),
  require('./ncert_data/ch09.cjs'),
  require('./ncert_data/ch10.cjs'),
  require('./ncert_data/ch11.cjs')
];

const allQuestions = chapters.flat();

console.log(`Loaded ${allQuestions.length} total questions across ${chapters.length} chapters.`);

// Validate every question
allQuestions.forEach((q, idx) => {
  const reqFields = ['id', 'chapter_num', 'chapter_title', 'topic', 'page_book', 'question_en', 'question_hi', 'option_a', 'option_b', 'option_c', 'option_d', 'correct_option', 'explanation_en', 'explanation_hi', 'difficulty'];
  for (const f of reqFields) {
    if (!q[f] && q[f] !== 0) {
      throw new Error(`Missing field ${f} at index ${idx} (id: ${q.id})`);
    }
  }
  if (!['A', 'B', 'C', 'D'].includes(q.correct_option)) {
    throw new Error(`Invalid correct_option ${q.correct_option} at id: ${q.id}`);
  }
});

console.log('✅ Validation passed! All questions have valid schema and options.');

// Prepare Sheet 1: All Questions
const questionsRows = allQuestions.map((q, idx) => ({
  'S.No': idx + 1,
  'Question ID': q.id,
  'Grade': 'Class 2',
  'Subject': 'Mathematics (Joyful Maths)',
  'Chapter No': q.chapter_num,
  'Chapter Name': q.chapter_title,
  'Book Page': q.page_book,
  'Topic / Concept': q.topic,
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

// Prepare Sheet 2: Page-by-Page Summary
const pageMap = new Map();
allQuestions.forEach(q => {
  const key = `Ch ${q.chapter_num} (Pg ${q.page_book})`;
  if (!pageMap.has(key)) {
    pageMap.set(key, {
      'Chapter No': q.chapter_num,
      'Chapter Name': q.chapter_title,
      'Book Page': q.page_book,
      'Questions Count': 0,
      'Sample Topic': q.topic
    });
  }
  pageMap.get(key)['Questions Count']++;
});

const pageSummaryRows = Array.from(pageMap.values());

// Prepare Sheet 3: Chapter Summary
const chMap = new Map();
allQuestions.forEach(q => {
  if (!chMap.has(q.chapter_num)) {
    chMap.set(q.chapter_num, {
      'Chapter No': q.chapter_num,
      'Chapter Name': q.chapter_title,
      'Total Questions': 0,
      'Book Page Range': ''
    });
  }
  chMap.get(q.chapter_num)['Total Questions']++;
});

// Update page ranges
const chRanges = {
  1: '1 - 15',
  2: '16 - 22',
  3: '23 - 31',
  4: '32 - 43',
  5: '44 - 49',
  6: '50 - 70',
  7: '71 - 82',
  8: '83 - 97',
  9: '98 - 112',
  10: '113 - 122',
  11: '123 - 137'
};

const chapterSummaryRows = Array.from(chMap.values()).map(r => ({
  ...r,
  'Book Page Range': chRanges[r['Chapter No']] || ''
}));

// Create Workbook
const wb = XLSX.utils.book_new();

const wsQuestions = XLSX.utils.json_to_sheet(questionsRows);
// Adjust column widths
wsQuestions['!cols'] = [
  { wch: 6 },  // S.No
  { wch: 16 }, // ID
  { wch: 10 }, // Grade
  { wch: 26 }, // Subject
  { wch: 12 }, // Chapter No
  { wch: 28 }, // Chapter Name
  { wch: 10 }, // Book Page
  { wch: 30 }, // Topic
  { wch: 45 }, // Question En
  { wch: 45 }, // Question Hi
  { wch: 20 }, // Opt A
  { wch: 20 }, // Opt B
  { wch: 20 }, // Opt C
  { wch: 20 }, // Opt D
  { wch: 14 }, // Correct Opt
  { wch: 50 }, // Exp En
  { wch: 50 }, // Exp Hi
  { wch: 14 }  // Difficulty
];

const wsPages = XLSX.utils.json_to_sheet(pageSummaryRows);
wsPages['!cols'] = [
  { wch: 12 },
  { wch: 30 },
  { wch: 12 },
  { wch: 16 },
  { wch: 35 }
];

const wsChapters = XLSX.utils.json_to_sheet(chapterSummaryRows);
wsChapters['!cols'] = [
  { wch: 12 },
  { wch: 32 },
  { wch: 16 },
  { wch: 18 }
];

XLSX.utils.book_append_sheet(wb, wsQuestions, 'Questions');
XLSX.utils.book_append_sheet(wb, wsPages, 'Page_Breakdown');
XLSX.utils.book_append_sheet(wb, wsChapters, 'Chapter_Summary');

// Paths to write
const projectExcelPath = path.join(process.cwd(), 'NCERT_Class2_Maths_Questions.xlsx');
const desktopPath = path.join('C:', 'Users', 'Admin', 'Desktop', 'NCERT_Class2_Maths_Questions.xlsx');

XLSX.writeFile(wb, projectExcelPath);
console.log(`Saved workbook to: ${projectExcelPath}`);

try {
  XLSX.writeFile(wb, desktopPath);
  console.log(`Saved workbook copy to Desktop: ${desktopPath}`);
} catch (e) {
  console.warn(`Could not save to desktop: ${e.message}`);
}

// Also save JSON for app integration
const jsonPath = path.join(process.cwd(), 'src', 'data', 'ncert_class2_maths_questions.json');
fs.writeFileSync(jsonPath, JSON.stringify(allQuestions, null, 2), 'utf-8');
console.log(`Saved JSON questions to: ${jsonPath}`);

console.log('\n--- CHAPTER SUMMARY TABLE ---');
console.table(chapterSummaryRows);

console.log('\n--- PAGE SUMMARY TABLE (FIRST 25 ENTRIES) ---');
console.table(pageSummaryRows.slice(0, 25));
