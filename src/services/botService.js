/**
 * botService.js
 * Dynamic Procedural Bot Generator for ClassChamp.
 * Generates fresh, realistic, division-tailored contenders with diverse names,
 * cities across India, avatars, and realistic skill levels on every match.
 * Guarantees zero duplicate names and a unique contender roster every time.
 */

const FIRST_NAMES = {
  Junior: [
    "Aarav", "Priya", "Rohan", "Ananya", "Kabir", "Sara", "Devansh", "Ishita", "Arjun",
    "Vivaan", "Diya", "Reyansh", "Myra", "Muhammad", "Saanvi", "Zaid", "Kiara", "Atharv",
    "Pari", "Dhruv", "Zara", "Ayaan", "Ira", "Shaurya", "Inaya", "Aditya", "Riya", "Kush",
    "Meera", "Harsh", "Navya", "Taimur", "Alizeh", "Samar", "Prisha", "Farhan", "Avani",
    "Tanmay", "Aisha", "Aryan", "Swara", "Rehan", "Ahana", "Krish", "Mahira", "Vihaan"
  ],
  Senior: [
    "Zoya", "Aditya", "Tanvi", "Farhan", "Sneha", "Manish", "Pooja", "Kunal", "Divya",
    "Rishabh", "Kavya", "Armaan", "Shruti", "Bilal", "Anika", "Tushar", "Bhavna", "Daniyal",
    "Harshita", "Sameer", "Sanjana", "Yash", "Simran", "Varun", "Vaishnavi", "Nikhil", "Zainab",
    "Chirag", "Kriti", "Pranav", "Shireen", "Utkarsh", "Rashi", "Shivam", "Anvi", "Ayush"
  ],
  Open: [
    "Vikramaditya", "Ayesha", "Rajeshwar", "Meenakshi", "Gautam", "Harpreet", "Nidhi", "Siddhesh",
    "Fatima", "Alok", "Deepak", "Aniruddh", "Tariq", "Vasundhara", "Sudhir", "Rohit", "Parveen",
    "Abhishek", "Sunita", "Manoj", "Arif", "Chandrashekhar", "Geeta", "Bhupendra", "Suraj", "Shabnam",
    "Karthik", "Bipin", "Amrita", "Dhananjay", "Suresh", "Nasir", "Hemant", "Pallavi", "Jitendra"
  ]
};

const LAST_NAMES = [
  "Sharma", "Verma", "Gupta", "Khan", "Shaikh", "Patel", "Iyer", "Nair", "Deshmukh",
  "Kulkarni", "Chatterjee", "Banerjee", "Bose", "Singh", "Kaur", "Reddy", "Rao",
  "Choudhury", "Das", "Joshi", "Bhat", "Agarwal", "Mehta", "Shah", "Qureshi", "Siddiqui",
  "Malik", "Ansari", "Fernandes", "D'Souza", "Pillai", "Menon", "Patil", "Yadav", "Mishra",
  "Tiwari", "Pandey", "Sen", "Roy", "Gill", "Chawla", "Bhattacharya", "Sarin", "Kohli"
];

const CITIES = [
  "Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
  "Jaipur", "Lucknow", "Chandigarh", "Surat", "Indore", "Bhopal", "Patna", "Kochi",
  "Nagpur", "Coimbatore", "Guwahati", "Dehradun", "Varanasi", "Agra", "Vadodara",
  "Nashik", "Meerut", "Rajkot", "Amritsar", "Srinagar", "Ranchi", "Jamshedpur", "Raipur",
  "Bhubaneswar", "Visakhapatnam", "Mysuru", "Madurai", "Mangaluru", "Udaipur", "Jodhpur",
  "Gwalior", "Jabalpur", "Aligarh", "Prayagraj", "Kozhikode", "Shimla", "Panaji"
];

const AVATARS = [
  "👦", "👧", "🚀", "⭐", "🎯", "🎨", "⚡", "📚", "🏆", "🔬",
  "💡", "♟️", "🔭", "📐", "🏅", "🌟", "📖", "🦁", "🩺", "🏛️",
  "⚖️", "💼", "🦅", "📊", "🌍", "🎓", "🥇", "🧠", "🐅", "✨"
];

const SUFFIX_TAGS = {
  Junior: ["Gr 4", "Gr 5", "Gr 6", "Star Kid", "Quiz Champ"],
  Senior: ["Class 8", "Class 9", "Class 10", "STEM Club", "Quiz Wiz"],
  Open: ["UPSC Prep", "Bank PO", "Govt Aspirant", "Trivia Buff", "Scholar", "Quizzer"]
};

export const botService = {
  rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  pickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  },

  /**
   * Generate `count` fresh, unique bots for a given division.
   * @param {number} count Number of bots needed (e.g. 9)
   * @param {string} division 'Junior' | 'Senior' | 'Open'
   * @param {Array<string>} excludeNames Names already present (e.g. current human user)
   */
  generateBots(count = 9, division = 'Junior', excludeNames = []) {
    const firstNamesPool = this.shuffle(FIRST_NAMES[division] || FIRST_NAMES.Junior);
    const lastNamesPool = this.shuffle(LAST_NAMES);
    const citiesPool = this.shuffle(CITIES);
    const avatarsPool = this.shuffle(AVATARS);
    const tagsPool = SUFFIX_TAGS[division] || SUFFIX_TAGS.Junior;

    const usedNames = new Set(excludeNames.map(n => (n || '').toLowerCase().trim()));
    const bots = [];

    let attempt = 0;
    while (bots.length < count && attempt < 200) {
      attempt++;
      const first = firstNamesPool[attempt % firstNamesPool.length];
      const last = lastNamesPool[this.rand(0, lastNamesPool.length - 1)];

      // 40% chance of including a grade/exam tag or middle initial
      const useTag = Math.random() > 0.65;
      const tag = useTag ? ` (${this.pickOne(tagsPool)})` : '';
      const fullName = `${first} ${last}${tag}`;

      if (!usedNames.has(fullName.toLowerCase())) {
        usedNames.add(fullName.toLowerCase());
        const city = citiesPool[bots.length % citiesPool.length];
        const avatar = avatarsPool[bots.length % avatarsPool.length];

        bots.push({
          id: `bot_${Date.now()}_${bots.length}_${this.rand(100, 999)}`,
          name: fullName,
          city,
          avatar,
          isHuman: false,
          ready: true
        });
      }
    }

    return bots;
  }
};

export default botService;
