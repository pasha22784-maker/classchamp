import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';
import { CLASS_2_CH1_QUESTIONS } from './generate_tracker.js';

// 32 Grammar & General English Learning Questions for Class 2 English - Chapter 1: First Day at School / Welcome to School
export const CLASS_2_ENG_CH1_QUESTIONS = [
  {
    id: "Q_C2_E_CH1_01",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Phonics & Rhyming Words",
    text: "Rhyming Words: Which of the following words rhymes with 'PLAY'?",
    options: { A: "Day", B: "Book", C: "Cat", D: "Jump" },
    text_hi: "समान तुक वाले शब्द (Rhyming Words): 'PLAY' शब्द से कौन सा शब्द तुक मिलाता है?",
    options_hi: { A: "Day (दिन)", B: "Book (किताब)", C: "Cat (बिल्ली)", D: "Jump (कूदना)" },
    correctAnswer: "A",
    guruHint: "Both words end with the sound '-ay'. Play, Day, Say, May.",
    guruHint_hi: "दोनों शब्दों के अंत में '-ay' की समान ध्वनि निकलती है (Play - Day).",
    explanation: "'Play' and 'Day' share the identical ending phonetic sound."
  },
  {
    id: "Q_C2_E_CH1_02",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Phonics & Rhyming Words",
    text: "Rhyming Words: Which of the following words rhymes with 'BOOK'?",
    options: { A: "Look", B: "Ball", C: "Pen", D: "Fish" },
    text_hi: "समान तुक वाले शब्द (Rhyming Words): 'BOOK' शब्द का सही तुक मिलाने वाला शब्द कौन सा है?",
    options_hi: { A: "Look (देखना)", B: "Ball (गेंद)", C: "Pen (कलम)", D: "Fish (मछली)" },
    correctAnswer: "A",
    guruHint: "Both words end with the '-ook' sound. Book, Look, Cook, Took.",
    guruHint_hi: "दोनों शब्दों के अंत में '-ook' की आवाज आती है (Book - Look).",
    explanation: "'Book' and 'Look' rhyme together."
  },
  {
    id: "Q_C2_E_CH1_03",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Phonics & Rhyming Words",
    text: "Rhyming Words: Which word rhymes with 'SUN'?",
    options: { A: "Run", B: "Sit", C: "Hat", D: "Hop" },
    text_hi: "समान तुक वाले शब्द: 'SUN' (सूरज) शब्द से कौन सा शब्द मिलता-जुलता ध्वनि देता है?",
    options_hi: { A: "Run (दौड़ना)", B: "Sit (बैठना)", C: "Hat (टोपी)", D: "Hop (फुदकना)" },
    correctAnswer: "A",
    guruHint: "Both words end with '-un'. Sun, Run, Fun, Bun.",
    guruHint_hi: "दोनों शब्दों के अंत में '-un' की आवाज आती है (Sun - Run).",
    explanation: "'Sun' rhymes with 'Run'."
  },
  {
    id: "Q_C2_E_CH1_04",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Opposites (Antonyms)",
    text: "Opposites: What is the exact opposite of the word 'BIG'?",
    options: { A: "Small", B: "Tall", C: "Heavy", D: "Wide" },
    text_hi: "विलोम शब्द (Opposites): 'BIG' (बड़ा) शब्द का सही उल्टा शब्द क्या होगा?",
    options_hi: { A: "Small (छोटा)", B: "Tall (लंबा)", C: "Heavy (भारी)", D: "Wide (चौड़ा)" },
    correctAnswer: "A",
    guruHint: "An elephant is Big, but an ant is...",
    guruHint_hi: "हाथी बड़ा (Big) होता है, जबकि चींटी छोटी (Small) होती है।",
    explanation: "The opposite of 'Big' is 'Small'."
  },
  {
    id: "Q_C2_E_CH1_05",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Opposites (Antonyms)",
    text: "Opposites: What is the opposite of the word 'HAPPY'?",
    options: { A: "Sad", B: "Glad", C: "Smile", D: "Playful" },
    text_hi: "विलोम शब्द: 'HAPPY' (खुश) शब्द का सही विलोम शब्द क्या होगा?",
    options_hi: { A: "Sad (उदास/दुखी)", B: "Glad (प्रसन्न)", C: "Smile (मुस्कान)", D: "Playful (चंचल)" },
    correctAnswer: "A",
    guruHint: "When a child smiles they are Happy; when they cry they are...",
    guruHint_hi: "हंसने पर इंसान Happy होता है और रोने पर Sad।",
    explanation: "The opposite of 'Happy' is 'Sad'."
  },
  {
    id: "Q_C2_E_CH1_06",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Opposites (Antonyms)",
    text: "Opposites: What is the opposite of the direction word 'UP'?",
    options: { A: "Down", B: "In", C: "Near", D: "High" },
    text_hi: "दिशा का विलोम: 'UP' (ऊपर) का सही विपरीत शब्द क्या होता है?",
    options_hi: { A: "Down (नीचे)", B: "In (अंदर)", C: "Near (पास)", D: "High (ऊँचा)" },
    correctAnswer: "A",
    guruHint: "Jack and Jill went up the hill, and came tumbling...",
    guruHint_hi: "Up का उल्टा Down (नीचे) होता है।",
    explanation: "The opposite of 'Up' is 'Down'."
  },
  {
    id: "Q_C2_E_CH1_07",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Opposites (Antonyms)",
    text: "Opposites: What is the opposite of the weather word 'HOT'?",
    options: { A: "Cold", B: "Warm", C: "Bright", D: "Sunny" },
    text_hi: "विलोम शब्द: 'HOT' (गर्म) शब्द का सही विपरीत शब्द क्या होगा?",
    options_hi: { A: "Cold (ठंडा)", B: "Warm (गुनगुना)", C: "Bright (चमकदार)", D: "Sunny (धूप वाला)" },
    correctAnswer: "A",
    guruHint: "Hot tea vs Cold ice cream.",
    guruHint_hi: "चाय गर्म (Hot) होती है और आइसक्रीम ठंडी (Cold)।",
    explanation: "The opposite of 'Hot' is 'Cold'."
  },
  {
    id: "Q_C2_E_CH1_08",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Action Words (Verbs)",
    text: "Action Words: Which of the following is an ACTION word (verb)?",
    options: { A: "Clap", B: "Table", C: "Chair", D: "Bottle" },
    text_hi: "क्रिया शब्द (Action Words): इनमें से कौन सा शब्द कोई 'काम' (Action) दर्शाता है?",
    options_hi: { A: "Clap (ताली बजाना)", B: "Table (मेज)", C: "Chair (कुर्सी)", D: "Bottle (बोतल)" },
    correctAnswer: "A",
    guruHint: "You do this action with your hands when someone sings well.",
    guruHint_hi: "जब कोई अच्छा काम करता है तो आप दोनों हाथों से ताली (Clap) बजाते हैं।",
    explanation: "'Clap' is an action verb (doing word)."
  },
  {
    id: "Q_C2_E_CH1_09",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Action Words (Verbs)",
    text: "Action Words: In the sentence 'Rohan can JUMP very high', which word is the Action Word?",
    options: { A: "Jump", B: "Rohan", C: "High", D: "Very" },
    text_hi: "क्रिया पहचानें: 'Rohan can jump very high' वाक्य में कौन सा शब्द काम (Action) बता रहा है?",
    options_hi: { A: "Jump (कूदना)", B: "Rohan (रोहन)", C: "High (ऊँचा)", D: "Very (बहुत)" },
    correctAnswer: "A",
    guruHint: "Jump tells what physical movement Rohan does.",
    guruHint_hi: "Jump यह बताता है कि रोहन क्या क्रिया कर रहा है।",
    explanation: "'Jump' is the action word describing movement."
  },
  {
    id: "Q_C2_E_CH1_10",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Singular & Plural (Naming Words)",
    text: "Singular to Plural: One HAND, two ___?",
    options: { A: "Hands", B: "Handes", C: "Handies", D: "Hand" },
    text_hi: "एकवचन से बहुवचन: एक हाथ को 'Hand' कहते हैं, तो दो हाथों को क्या कहेंगे?",
    options_hi: { A: "Hands", B: "Handes", C: "Handies", D: "Hand" },
    correctAnswer: "A",
    guruHint: "Add the letter '-s' at the end of hand.",
    guruHint_hi: "Hand के अंत में 's' जोड़ा जाता है (Hands)।",
    explanation: "The plural of 'Hand' is formed by adding 's' -> 'Hands'."
  },
  {
    id: "Q_C2_E_CH1_11",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Singular & Plural (Naming Words)",
    text: "Singular to Plural: What is the plural of 'BOOK'?",
    options: { A: "Books", B: "Bookes", C: "Bookies", D: "Booker" },
    text_hi: "बहुवचन: एक किताब 'Book' है, तो कई किताबों को क्या लिखेंगे?",
    options_hi: { A: "Books", B: "Bookes", C: "Bookies", D: "Booker" },
    correctAnswer: "A",
    guruHint: "Add '-s' at the end: One book, many books.",
    guruHint_hi: "एक किताब = Book, बहुत सी किताबें = Books.",
    explanation: "The plural of 'Book' is 'Books'."
  },
  {
    id: "Q_C2_E_CH1_12",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Singular & Plural (Naming Words)",
    text: "Singular to Plural: We have one nose, but two ___?",
    options: { A: "Eyes", B: "Eyses", C: "Eye", D: "Eyies" },
    text_hi: "बहुवचन: हमारे पास एक नाक है, लेकिन दो ___ हैं?",
    options_hi: { A: "Eyes (आँखें)", B: "Eyses", C: "Eye (एक आँख)", D: "Eyies" },
    correctAnswer: "A",
    guruHint: "One eye, two eyes.",
    guruHint_hi: "Eye का बहुवचन 'Eyes' होता है।",
    explanation: "Two 'Eyes' is the plural form of 'Eye'."
  },
  {
    id: "Q_C2_E_CH1_13",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Articles (A / An)",
    text: "Articles: Fill in the blank: 'Rohan carries ___ school bag.'",
    options: { A: "a", B: "an", C: "and", D: "in" },
    text_hi: "Articles: रिक्त स्थान भरें: 'Rohan carries ___ school bag.'",
    options_hi: { A: "a", B: "an", C: "and", D: "in" },
    correctAnswer: "A",
    guruHint: "'School' begins with the consonant sound 's', so use 'a'.",
    guruHint_hi: "'School' व्यंजन ध्वनि (Consonant sound) 's' से शुरू होता है, इसलिए 'a' आएगा।",
    explanation: "We use 'a' before words beginning with consonant sounds."
  },
  {
    id: "Q_C2_E_CH1_14",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Articles (A / An)",
    text: "Articles: Fill in the blank: 'Riya is eating ___ sweet apple.'",
    options: { A: "a", B: "an", C: "on", D: "at" },
    text_hi: "Articles: रिक्त स्थान भरें: 'Riya is eating ___ sweet apple.'",
    options_hi: { A: "a", B: "an", C: "on", D: "at" },
    correctAnswer: "A",
    guruHint: "'Sweet' starts with consonant 's', so we say 'a sweet apple'.",
    guruHint_hi: "'Sweet' शब्द व्यंजन 's' से शुरू होता है, इसलिए 'a sweet apple' होगा।",
    explanation: "The article precedes 'sweet' which begins with consonant 's'."
  },
  {
    id: "Q_C2_E_CH1_15",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Articles (A / An)",
    text: "Articles: Which of the following words correctly takes 'AN' before it?",
    options: { A: "Elephant", B: "Pencil", C: "Cat", D: "Dog" },
    text_hi: "Articles: इनमें से किस शब्द के पहले 'AN' का प्रयोग होगा?",
    options_hi: { A: "Elephant (हाथी)", B: "Pencil", C: "Cat", D: "Dog" },
    correctAnswer: "A",
    guruHint: "Starts with the vowel letter 'E' and vowel sound 'eh'.",
    guruHint_hi: "Elephant स्वर (Vowel) ध्वनि 'E' से शुरू होता है, इसलिए 'An elephant' होगा।",
    explanation: "We use 'an' before words starting with vowel sounds (a, e, i, o, u)."
  },
  {
    id: "Q_C2_E_CH1_16",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Vowels & Consonants",
    text: "Vowels: How many VOWELS (स्वर) are there in the English alphabet?",
    options: { A: "5", B: "4", C: "7", D: "26" },
    text_hi: "स्वर (Vowels): अंग्रेजी वर्णमाला में कुल कितने Vowels (स्वर) होते हैं?",
    options_hi: { A: "5 (A, E, I, O, U)", B: "4", C: "7", D: "26" },
    correctAnswer: "A",
    guruHint: "Count them: A, E, I, O, U.",
    guruHint_hi: "A, E, I, O, U — ये कुल 5 स्वर होते हैं।",
    explanation: "There are 5 vowel letters in the English alphabet: A, E, I, O, U."
  },
  {
    id: "Q_C2_E_CH1_17",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Vowels & Consonants",
    text: "Vowels: Which of the following letters is a VOWEL?",
    options: { A: "E", B: "B", C: "D", D: "F" },
    text_hi: "स्वर पहचानें: इनमें से कौन सा अक्षर एक 'Vowel' (स्वर) है?",
    options_hi: { A: "E", B: "B", C: "D", D: "F" },
    correctAnswer: "A",
    guruHint: "Remember the 5 vowels: A, E, I, O, U.",
    guruHint_hi: "पाँच स्वरों (A, E, I, O, U) में 'E' शामिल है।",
    explanation: "'E' is one of the 5 English vowels; B, D, F are consonants."
  },
  {
    id: "Q_C2_E_CH1_18",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Pronouns (He / She / It)",
    text: "Pronouns: 'Aarav is a good boy. ___ goes to school daily.' Fill in the blank:",
    options: { A: "He", B: "She", C: "It", D: "Her" },
    text_hi: "सर्वनाम (Pronouns): 'Aarav is a good boy. ___ goes to school daily.' रिक्त स्थान में क्या आएगा?",
    options_hi: { A: "He (वह - लड़के के लिए)", B: "She (वह - लड़की के लिए)", C: "It", D: "Her" },
    correctAnswer: "A",
    guruHint: "For a boy or male person, we use the pronoun 'He'.",
    guruHint_hi: "लड़के या पुरुष के लिए सर्वनाम 'He' का प्रयोग किया जाता है।",
    explanation: "'Aarav' is a boy, so the correct pronoun is 'He'."
  },
  {
    id: "Q_C2_E_CH1_19",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Pronouns (He / She / It)",
    text: "Pronouns: 'Ananya is my friend. ___ is drawing a flower.' Fill in the blank:",
    options: { A: "She", B: "He", C: "It", D: "His" },
    text_hi: "सर्वनाम: 'Ananya is my friend. ___ is drawing a flower.' रिक्त स्थान में क्या आएगा?",
    options_hi: { A: "She (वह - लड़की के लिए)", B: "He", C: "It", D: "His" },
    correctAnswer: "A",
    guruHint: "For a girl or female person, we use the pronoun 'She'.",
    guruHint_hi: "लड़की या महिला के लिए सर्वनाम 'She' का प्रयोग किया जाता है।",
    explanation: "'Ananya' is a girl, so the correct pronoun is 'She'."
  },
  {
    id: "Q_C2_E_CH1_20",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Polite Words & Manners",
    text: "Polite Manners: What magic word should you say when someone gives you a pencil or gift?",
    options: { A: "Thank you", B: "Sorry", C: "Bye", D: "Go away" },
    text_hi: "शिष्टाचार (Good Manners): जब कोई आपको पेंसिल या उपहार देता है, तो आपको क्या कहना चाहिए?",
    options_hi: { A: "Thank you (धन्यवाद)", B: "Sorry (माफ़ करें)", C: "Bye (अलविदा)", D: "Go away" },
    correctAnswer: "A",
    guruHint: "Say this to show gratitude and good manners.",
    guruHint_hi: "कृतज्ञता और अच्छे संस्कार दिखाने के लिए 'Thank you' कहते हैं।",
    explanation: "We say 'Thank you' to express gratitude."
  },
  {
    id: "Q_C2_E_CH1_21",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Polite Words & Manners",
    text: "Polite Manners: When asking your teacher for permission to enter class, what polite word do you use?",
    options: { A: "Please", B: "Hey", C: "Stop", D: "No" },
    text_hi: "कक्षा में प्रवेश की अनुमति मांगते समय कौन सा विनम्र शब्द प्रयोग करना चाहिए?",
    options_hi: { A: "Please ('May I come in, please?')", B: "Hey", C: "Stop", D: "No" },
    correctAnswer: "A",
    guruHint: "'May I come in, please?'",
    guruHint_hi: "विनम्र निवेदन के लिए 'Please' का उपयोग किया जाता है।",
    explanation: "We say 'Please' when requesting permission politely."
  },
  {
    id: "Q_C2_E_CH1_22",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Greetings",
    text: "Greetings: When you arrive at school at 8:00 AM, how do you greet your teacher?",
    options: { A: "Good Morning!", B: "Good Night!", B: "Good Evening!", D: "Goodbye!" },
    text_hi: "अभिवादन (Greetings): सुबह 8:00 बजे स्कूल पहुँचने पर आप अपनी अध्यापिका को क्या कहते हैं?",
    options_hi: { A: "Good Morning! (सुप्रभात)", B: "Good Night! (शुभ रात्रि)", C: "Good Evening!", D: "Goodbye!" },
    correctAnswer: "A",
    guruHint: "In the morning hours from sunrise to 12 noon, we greet with...",
    guruHint_hi: "सुबह के समय अभिवादन के लिए 'Good Morning' कहा जाता है।",
    explanation: "'Good Morning' is the polite greeting used in morning hours."
  },
  {
    id: "Q_C2_E_CH1_23",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Punctuation & Capitalization",
    text: "Punctuation Rules: Every English sentence MUST begin with a ___ letter:",
    options: { A: "Capital", B: "Small", C: "Tiny", D: "Backward" },
    text_hi: "व्याकरण नियम: अंग्रेजी का प्रत्येक वाक्य हमेशा किस अक्षर से शुरू होना चाहिए?",
    options_hi: { A: "Capital letter (बड़ा अक्षर)", B: "Small letter (छोटा अक्षर)", C: "Tiny", D: "Backward" },
    correctAnswer: "A",
    guruHint: "Like A, B, C instead of a, b, c.",
    guruHint_hi: "वाक्य का पहला अक्षर हमेशा बड़ा (Capital Letter) होता है।",
    explanation: "Sentences in English always start with an uppercase / capital letter."
  },
  {
    id: "Q_C2_E_CH1_24",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Punctuation & Capitalization",
    text: "Punctuation: What punctuation mark is placed at the end of a simple statement ('I love my school')?",
    options: { A: "Full stop (.)", B: "Question mark (?)", C: "Comma (,)", D: "Hyphen (-)" },
    text_hi: "विराम चिह्न (Punctuation): एक सामान्य वाक्य ('I love my school') के अंत में क्या लगाया जाता है?",
    options_hi: { A: "Full stop (.) (पूर्ण विराम)", B: "Question mark (?) (प्रश्नवाचक चिह्न)", C: "Comma (,)", D: "Hyphen (-)" },
    correctAnswer: "A",
    guruHint: "A small round dot at the bottom of the line.",
    guruHint_hi: "लाइन के अंत में एक छोटा बिंदु (.) लगाया जाता है।",
    explanation: "A declarative statement ends with a full stop (period)."
  },
  {
    id: "Q_C2_E_CH1_25",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Punctuation & Capitalization",
    text: "Punctuation: What mark goes at the end of an asking sentence: 'What is your name___'?",
    options: { A: "Question mark (?)", B: "Full stop (.)", C: "Comma (,)", D: "Arrow (->)" },
    text_hi: "विराम चिह्न: प्रश्न पूछने वाले वाक्य ('What is your name___') के अंत में क्या आता है?",
    options_hi: { A: "Question mark (?) (प्रश्नवाचक चिह्न)", B: "Full stop (.)", C: "Comma (,)", D: "Arrow (->)" },
    correctAnswer: "A",
    guruHint: "A curved symbol with a dot below it: ?",
    guruHint_hi: "प्रश्न पूछने पर अंत में प्रश्नवाचक चिह्न (?) लगाया जाता है।",
    explanation: "Questions always end with a Question Mark (?)."
  },
  {
    id: "Q_C2_E_CH1_26",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Spelling & Vocabulary",
    text: "Correct Spelling: Choose the word with the CORRECT spelling for where we study:",
    options: { A: "SCHOOL", B: "SKOOL", C: "SCOOL", D: "SCHOL" },
    text_hi: "सही वर्तनी (Spelling): जहाँ हम पढ़ने जाते हैं, उसकी सही स्पेलिंग क्या है?",
    options_hi: { A: "SCHOOL", B: "SKOOL", C: "SCOOL", D: "SCHOL" },
    correctAnswer: "A",
    guruHint: "S - C - H - O - O - L.",
    guruHint_hi: "S-C-H-O-O-L सही स्पेलिंग है।",
    explanation: "The correct spelling is SCHOOL."
  },
  {
    id: "Q_C2_E_CH1_27",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Spelling & Vocabulary",
    text: "Correct Spelling: Choose the CORRECT spelling for a classmate who plays with you:",
    options: { A: "FRIEND", B: "FREIND", C: "FRIND", D: "FREND" },
    text_hi: "सही स्पेलिंग: दोस्त (Friend) की सही अंग्रेजी वर्तनी चुनें:",
    options_hi: { A: "FRIEND", B: "FREIND", C: "FRIND", D: "FREND" },
    correctAnswer: "A",
    guruHint: "Remember: 'i' before 'e' -> F - R - I - E - N - D.",
    guruHint_hi: "F-R-I-E-N-D सही स्पेलिंग है।",
    explanation: "The correct spelling of friend is FRIEND."
  },
  {
    id: "Q_C2_E_CH1_28",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "General English Learning",
    text: "Body Actions: Which sense body part do we use to LISTEN to our teacher's voice?",
    options: { A: "Ears", B: "Eyes", C: "Nose", D: "Hands" },
    text_hi: "शरीर के अंग: शिक्षिका की बात 'सुनने' (Listen) के लिए हम किस अंग का उपयोग करते हैं?",
    options_hi: { A: "Ears (कान)", B: "Eyes (आँखें)", C: "Nose (नाक)", D: "Hands (हाथ)" },
    correctAnswer: "A",
    guruHint: "We see with eyes, and we hear/listen with...",
    guruHint_hi: "हम कानों (Ears) से सुनते हैं।",
    explanation: "We listen and hear sounds with our ears."
  },
  {
    id: "Q_C2_E_CH1_29",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "General English Learning",
    text: "Body Actions: Which body part do we use to SMELL a rose flower?",
    options: { A: "Nose", B: "Tongue", C: "Ears", D: "Feet" },
    text_hi: "शरीर के अंग: गुलाब के फूल की खुशबू 'सूंघने' (Smell) के लिए किस अंग का उपयोग होता है?",
    options_hi: { A: "Nose (नाक)", B: "Tongue (जीभ)", C: "Ears (कान)", D: "Feet (पैर)" },
    correctAnswer: "A",
    guruHint: "Located in the center of your face.",
    guruHint_hi: "नाक (Nose) से गंध सूंघी जाती है।",
    explanation: "We smell with our nose."
  },
  {
    id: "Q_C2_E_CH1_30",
    division: "Junior",
    grade: 2,
    bracket: "1000-10000",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Naming Words (Nouns)",
    text: "Naming Words: In the sentence 'The CAT is drinking milk', which word is an Animal Naming Word?",
    options: { A: "Cat", B: "Drinking", C: "Milk", D: "Is" },
    text_hi: "संज्ञा (Naming Word): 'The CAT is drinking milk' वाक्य में जानवर का नाम बताने वाला शब्द कौन सा है?",
    options_hi: { A: "Cat (बिल्ली)", B: "Drinking (पी रही है)", C: "Milk (दूध)", D: "Is" },
    correctAnswer: "A",
    guruHint: "A furry pet that meows.",
    guruHint_hi: "म्याऊँ करने वाला पालतू जीव Cat (बिल्ली) है।",
    explanation: "'Cat' is the naming word (noun) for the animal."
  },
  // FFF (Fastest Finger First) Ordering Questions
  {
    id: "Q_C2_E_CH1_FFF_01",
    division: "Junior",
    grade: 2,
    bracket: "FFF",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Alphabetical Order (A to Z)",
    text: "Alphabetical Order: Arrange these classroom words in ALPHABETICAL order (from A to Z):",
    options: { A: "Pen", B: "Bag", C: "Desk", D: "Ruler" },
    text_hi: "वर्णमाला क्रम (A से Z): इन शब्दों को अंग्रेजी वर्णमाला के क्रम में व्यवस्थित करें:",
    options_hi: { A: "Pen (P)", B: "Bag (B)", C: "Desk (D)", D: "Ruler (R)" },
    correctAnswer: "B,C,A,D", // Bag (B) -> Desk (D) -> Pen (P) -> Ruler (R)
    guruHint: "Look at the first letter: B comes first, then D, then P, then R.",
    guruHint_hi: "पहले अक्षर देखें: B (Bag) ➔ D (Desk) ➔ P (Pen) ➔ R (Ruler).",
    explanation: "Alphabetical sequence: Bag, Desk, Pen, Ruler."
  },
  {
    id: "Q_C2_E_CH1_FFF_02",
    division: "Junior",
    grade: 2,
    bracket: "FFF",
    subject: "English",
    chapter: "Unit 1: First Day at School (Grammar & Phonics)",
    chapterCode: "C2_ENG_CH1",
    category: "Word Length (Letters Count)",
    text: "Word Length: Arrange these words from SHORTEST (fewest letters) to LONGEST (most letters):",
    options: { A: "Classroom (9 letters)", B: "In (2 letters)", C: "School (6 letters)", D: "Book (4 letters)" },
    text_hi: "शब्द की लंबाई: इन शब्दों को सबसे छोटे (कम अक्षर) से सबसे बड़े (अधिक अक्षर) के क्रम में लगाएं:",
    options_hi: { A: "Classroom (9 अक्षर)", B: "In (2 अक्षर)", C: "School (6 अक्षर)", D: "Book (4 अक्षर)" },
    correctAnswer: "B,D,C,A", // In (2) -> Book (4) -> School (6) -> Classroom (9)
    guruHint: "Count letters: In = 2, Book = 4, School = 6, Classroom = 9.",
    guruHint_hi: "अक्षरों की संख्या: In (2) ➔ Book (4) ➔ School (6) ➔ Classroom (9).",
    explanation: "Lengths: In (2), Book (4), School (6), Classroom (9)."
  }
];

// Master Tracker Updater
export function updateMasterTracker() {
  const wb = XLSX.utils.book_new();

  // Master Tracker Data covering both Maths and English
  const masterTrackerData = [
    // Class 2 Mathematics
    {
      "Class": "Class 2",
      "Subject": "Mathematics",
      "Chapter No.": "Chapter 1",
      "Chapter Name": "What is Long, What is Round? (क्या है लंबा, क्या है गोल?)",
      "Questions Added": 32,
      "Status": "COMPLETED",
      "Syllabus Concepts Covered": "Rolling vs Sliding, Stacking Towers, Shapes, Corners & Edges",
      "Last Updated": new Date().toLocaleDateString('en-IN')
    },
    {
      "Class": "Class 2",
      "Subject": "Mathematics",
      "Chapter No.": "Chapter 2",
      "Chapter Name": "Counting in Groups (गिनो मगर समूह में)",
      "Questions Added": 0,
      "Status": "PENDING",
      "Syllabus Concepts Covered": "Pairs, Counting in 2s, 5s, 10s, Estimation, Guessing counts",
      "Last Updated": "-"
    },
    {
      "Class": "Class 2",
      "Subject": "Mathematics",
      "Chapter No.": "Chapter 3",
      "Chapter Name": "How Much Can You Carry? (तुम कितना वज़न उठा सकते हो?)",
      "Questions Added": 0,
      "Status": "PENDING",
      "Syllabus Concepts Covered": "Heavy vs Light, Balance Scales, Carrying capacities",
      "Last Updated": "-"
    },
    // Class 2 English (Grammar & Language Skills)
    {
      "Class": "Class 2",
      "Subject": "English",
      "Chapter No.": "Unit 1",
      "Chapter Name": "First Day at School / Welcome to School (Grammar & Phonics)",
      "Questions Added": 32,
      "Status": "COMPLETED",
      "Syllabus Concepts Covered": "Rhyming Words, Opposites, Action Verbs, Plurals, Articles (A/An), Vowels, Pronouns, Punctuation, A-Z Order",
      "Last Updated": new Date().toLocaleDateString('en-IN')
    },
    {
      "Class": "Class 2",
      "Subject": "English",
      "Chapter No.": "Unit 2",
      "Chapter Name": "I am Lucky / Picture Fun (Grammar & Senses)",
      "Questions Added": 0,
      "Status": "PENDING",
      "Syllabus Concepts Covered": "Animal sounds, Prepositions (In/On/Under), Describing words (Adjectives)",
      "Last Updated": "-"
    },
    {
      "Class": "Class 2",
      "Subject": "English",
      "Chapter No.": "Unit 3",
      "Chapter Name": "A Smile / Wind and Sun (Grammar & Comparisons)",
      "Questions Added": 0,
      "Status": "PENDING",
      "Syllabus Concepts Covered": "Comparisons (Hotter/Stronger), Compound words, Contractions",
      "Last Updated": "-"
    }
  ];

  const wsTracker = XLSX.utils.json_to_sheet(masterTrackerData);
  wsTracker['!cols'] = [
    { wch: 10 },
    { wch: 14 },
    { wch: 14 },
    { wch: 45 },
    { wch: 16 },
    { wch: 14 },
    { wch: 65 },
    { wch: 14 }
  ];
  XLSX.utils.book_append_sheet(wb, wsTracker, "Syllabus Progress Tracker");

  // Sheet 2: Class 2 Maths Ch 1
  const mathsRows = CLASS_2_CH1_QUESTIONS.map((q, idx) => ({
    "S.No": idx + 1,
    "Question ID": q.id,
    "Class": `Class ${q.grade}`,
    "Subject": q.subject,
    "Chapter": q.chapter,
    "Question (English)": q.text,
    "Question (Hindi)": q.text_hi,
    "Option A": `${q.options.A} / ${q.options_hi.A}`,
    "Option B": `${q.options.B} / ${q.options_hi.B}`,
    "Option C": `${q.options.C} / ${q.options_hi.C}`,
    "Option D": `${q.options.D} / ${q.options_hi.D}`,
    "Correct Answer": q.correctAnswer,
    "Explanation": q.explanation,
    "Guru Hint": q.guruHint
  }));
  const wsMaths = XLSX.utils.json_to_sheet(mathsRows);
  wsMaths['!cols'] = [
    { wch: 6 }, { wch: 18 }, { wch: 10 }, { wch: 12 }, { wch: 35 },
    { wch: 50 }, { wch: 50 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 25 },
    { wch: 14 }, { wch: 45 }, { wch: 45 }
  ];
  XLSX.utils.book_append_sheet(wb, wsMaths, "Class 2 Maths Ch 1");

  // Sheet 3: Class 2 English Ch 1 (Grammar & Learning)
  const englishRows = CLASS_2_ENG_CH1_QUESTIONS.map((q, idx) => ({
    "S.No": idx + 1,
    "Question ID": q.id,
    "Class": `Class ${q.grade}`,
    "Subject": q.subject,
    "Grammar Category": q.category,
    "Chapter": q.chapter,
    "Question (English)": q.text,
    "Question (Hindi)": q.text_hi,
    "Option A": `${q.options.A} / ${q.options_hi.A}`,
    "Option B": `${q.options.B} / ${q.options_hi.B}`,
    "Option C": `${q.options.C} / ${q.options_hi.C}`,
    "Option D": `${q.options.D} / ${q.options_hi.D}`,
    "Correct Answer": q.correctAnswer,
    "Explanation": q.explanation,
    "Guru Hint": q.guruHint
  }));
  const wsEnglish = XLSX.utils.json_to_sheet(englishRows);
  wsEnglish['!cols'] = [
    { wch: 6 }, { wch: 18 }, { wch: 10 }, { wch: 12 }, { wch: 25 }, { wch: 35 },
    { wch: 50 }, { wch: 50 }, { wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 25 },
    { wch: 14 }, { wch: 45 }, { wch: 45 }
  ];
  XLSX.utils.book_append_sheet(wb, wsEnglish, "Class 2 English Ch 1");

  // Write to Desktop and Workspace
  const desktopPath = 'C:\\Users\\Admin\\Desktop\\NCERT_Curriculum_Tracker.xlsx';
  const workspacePath = path.resolve('NCERT_Curriculum_Tracker.xlsx');

  XLSX.writeFile(wb, desktopPath);
  XLSX.writeFile(wb, workspacePath);
  console.log(`Excel tracker updated with English Ch 1 successfully at:\n1. ${desktopPath}\n2. ${workspacePath}`);
}

// Execute tracker update
updateMasterTracker();

// Inject into initialQuestions.js
const targetFile = path.resolve('src/data/initialQuestions.js');
let content = fs.readFileSync(targetFile, 'utf8');

const formattedQuestions = CLASS_2_ENG_CH1_QUESTIONS.map(q => {
  return `  {
    id: ${JSON.stringify(q.id)},
    division: ${JSON.stringify(q.division)},
    grade: ${q.grade},
    bracket: ${JSON.stringify(q.bracket)},
    subject: ${JSON.stringify(q.subject)},
    chapter: ${JSON.stringify(q.chapter)},
    chapterCode: ${JSON.stringify(q.chapterCode)},
    category: ${JSON.stringify(q.category)},
    text: ${JSON.stringify(q.text)},
    options: ${JSON.stringify(q.options)},
    text_hi: ${JSON.stringify(q.text_hi)},
    options_hi: ${JSON.stringify(q.options_hi)},
    correctAnswer: ${JSON.stringify(q.correctAnswer)},
    guruHint: ${JSON.stringify(q.guruHint)},
    guruHint_hi: ${JSON.stringify(q.guruHint_hi)},
    explanation: ${JSON.stringify(q.explanation)}
  },`;
}).join('\n');

const marker = `  // Class 2 (Age 7) Questions`;
if (content.includes(marker)) {
  const replacement = `${marker}\n  // ==========================================\n  // NCERT English Class 2 - Unit 1: Welcome to School (Grammar, Phonics & General English Learning)\n  // ==========================================\n${formattedQuestions}`;
  content = content.replace(marker, replacement);
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`Successfully injected 32 Class 2 English Unit 1 grammar questions into initialQuestions.js!`);
} else {
  console.error(`Marker not found in initialQuestions.js!`);
}
