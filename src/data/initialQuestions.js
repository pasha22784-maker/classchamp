/**
 * initialQuestions.js
 * Rich pre-seeded Question Bank for ClassChamp across all 3 Divisions & 5 Prize Brackets.
 * Fully compliant with the 5 Prize Brackets:
 * - Bracket 1: 1000-10000 (Warm-up, Q1-Q5)
 * - Bracket 2: 10000-340000 (Intermediate, Q6-Q10)
 * - Bracket 3: 340000-2500000 (Advanced, Q11-Q13)
 * - Bracket 4: 2500000-10000000 (Jackpot, Q14-Q15)
 * - Bracket 5: FFF (Fastest Finger First Chronological Ordering)
 */

export const INITIAL_QUESTIONS = [
  // ==========================================
  // 1. JUNIOR LEAGUE (Class 3 to 6 | Ages 8–12)
  // ==========================================
  // Bracket 1 (1000-10000)
  {
    id: "Q_JUN_B1_01",
    division: "Junior",
    bracket: "1000-10000",
    subject: "Science",
    text: "Which of the following is known as the 'Ship of the Desert'?",
    options: { A: "Horse", B: "Camel", C: "Elephant", D: "Donkey" },
    correctAnswer: "B",
    guruHint: "This animal has padded feet and can store fat in its hump to survive long desert journeys.",
    explanation: "The camel is called the 'Ship of the Desert' due to its ability to travel across sands effortlessly."
  },
  {
    id: "Q_JUN_B1_02",
    division: "Junior",
    bracket: "1000-10000",
    subject: "Maths",
    text: "How many sides does a regular Pentagon have?",
    options: { A: "4", B: "5", C: "6", D: "8" },
    correctAnswer: "B",
    guruHint: "The prefix 'Penta' comes from Greek meaning five.",
    explanation: "A pentagon is a polygon with exactly 5 sides and 5 angles."
  },
  {
    id: "Q_JUN_B1_03",
    division: "Junior",
    bracket: "1000-10000",
    subject: "English",
    text: "What is the opposite (antonym) of the word 'ANCIENT'?",
    options: { A: "Old", B: "Modern", C: "Historic", D: "Antique" },
    correctAnswer: "B",
    guruHint: "Ancient refers to very old times; think of something from today.",
    explanation: "'Modern' means relating to the present or recent times, which is the exact opposite of ancient."
  },
  {
    id: "Q_JUN_B1_04",
    division: "Junior",
    bracket: "1000-10000",
    subject: "GK",
    text: "Which planet in our solar system is known as the 'Red Planet'?",
    options: { A: "Venus", B: "Mars", C: "Jupiter", D: "Saturn" },
    correctAnswer: "B",
    guruHint: "Its reddish appearance comes from iron oxide (rust) on its surface.",
    explanation: "Mars appears reddish in the sky due to abundant iron oxide minerals on its surface."
  },
  {
    id: "Q_JUN_B1_05",
    division: "Junior",
    bracket: "1000-10000",
    subject: "Science",
    text: "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: { A: "Oxygen", B: "Carbon Dioxide", C: "Nitrogen", D: "Hydrogen" },
    correctAnswer: "B",
    guruHint: "Humans breathe this gas out, and green leaves breathe it in.",
    explanation: "Plants absorb carbon dioxide (CO2) and release oxygen during the process of photosynthesis."
  },

  // Bracket 2 (10000-340000)
  {
    id: "Q_JUN_B2_01",
    division: "Junior",
    bracket: "10000-340000",
    subject: "Maths",
    text: "What is the Least Common Multiple (LCM) of 4 and 6?",
    options: { A: "12", B: "24", C: "2", D: "16" },
    correctAnswer: "A",
    guruHint: "Write the multiples of 4 (4, 8, 12...) and 6 (6, 12, 18...). Find the smallest match.",
    explanation: "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12... The lowest common multiple is 12."
  },
  {
    id: "Q_JUN_B2_02",
    division: "Junior",
    bracket: "10000-340000",
    subject: "Science",
    text: "Which part of the plant cell contains chlorophyll for making food?",
    options: { A: "Mitochondria", B: "Chloroplast", C: "Nucleus", D: "Cell Wall" },
    correctAnswer: "B",
    guruHint: "The organelle starts with the same letters as chlorophyll.",
    explanation: "Chloroplasts contain chlorophyll pigments where photosynthesis takes place."
  },
  {
    id: "Q_JUN_B2_03",
    division: "Junior",
    bracket: "10000-340000",
    subject: "GK",
    text: "Which is the longest river in India that flows entirely within the subcontinent?",
    options: { A: "Yamuna", B: "Ganga", C: "Godavari", D: "Narmada" },
    correctAnswer: "B",
    guruHint: "It originates from the Gangotri glacier in Uttarakhand.",
    explanation: "The Ganga is India's longest river, flowing over 2,525 km."
  },
  {
    id: "Q_JUN_B2_04",
    division: "Junior",
    bracket: "10000-340000",
    subject: "Maths",
    text: "If a train leaves Delhi at 08:15 AM and reaches Jaipur at 01:45 PM, what is the travel time?",
    options: { A: "5 hours 15 mins", B: "5 hours 30 mins", C: "6 hours", D: "4 hours 45 mins" },
    correctAnswer: "B",
    guruHint: "Count hours from 8:15 AM to 1:15 PM (5 hours), then add remaining 30 mins.",
    explanation: "From 8:15 AM to 1:15 PM is 5 hours. From 1:15 PM to 1:45 PM is 30 mins. Total: 5 hrs 30 mins."
  },
  {
    id: "Q_JUN_B2_05",
    division: "Junior",
    bracket: "10000-340000",
    subject: "English",
    text: "Identify the abstract noun in: 'The soldier fought with immense courage.'",
    options: { A: "Soldier", B: "Fought", C: "Immense", D: "Courage" },
    correctAnswer: "D",
    guruHint: "An abstract noun denotes a quality, feeling, or concept you cannot touch physically.",
    explanation: "'Courage' is a quality or feeling, hence an abstract noun."
  },

  // Bracket 3 (340000-2500000)
  {
    id: "Q_JUN_B3_01",
    division: "Junior",
    bracket: "340000-2500000",
    subject: "Science",
    text: "Which layer of the Earth's atmosphere contains the Ozone layer that protects us from UV rays?",
    options: { A: "Troposphere", B: "Stratosphere", C: "Mesosphere", D: "Thermosphere" },
    correctAnswer: "B",
    guruHint: "It is the second major atmospheric layer, just above the troposphere where planes fly.",
    explanation: "The stratosphere contains the ozone layer, which absorbs harmful ultraviolet radiation."
  },
  {
    id: "Q_JUN_B3_02",
    division: "Junior",
    bracket: "340000-2500000",
    subject: "History",
    text: "Who was the founder of the Maurya Empire in ancient India?",
    options: { A: "Ashoka the Great", B: "Chandragupta Maurya", C: "Bindusara", D: "Harsha" },
    correctAnswer: "B",
    guruHint: "He was guided and mentored by the great scholar Chanakya.",
    explanation: "Chandragupta Maurya founded the Maurya Empire in 322 BCE with Chanakya's counsel."
  },
  {
    id: "Q_JUN_B3_03",
    division: "Junior",
    bracket: "340000-2500000",
    subject: "Maths",
    text: "What is the value of (2/5) + (3/10) expressed as a simplified fraction?",
    options: { A: "5/15", B: "7/10", C: "1/2", D: "4/5" },
    correctAnswer: "B",
    guruHint: "Convert 2/5 to 4/10 so denominators match, then add numerators.",
    explanation: "2/5 = 4/10. So 4/10 + 3/10 = 7/10."
  },

  // Bracket 4 (2500000-10000000)
  {
    id: "Q_JUN_B4_01",
    division: "Junior",
    bracket: "2500000-10000000",
    subject: "Science",
    text: "What is the speed of light in vacuum approximately?",
    options: { A: "3,000 km/s", B: "30,000 km/s", C: "3,00,000 km/s", D: "30,00,000 km/s" },
    correctAnswer: "C",
    guruHint: "It is 3 × 10^8 meters per second, which converts to 300,000 kilometers per second.",
    explanation: "Light travels at roughly 299,792 km/s, universally approximated as 3,00,000 km/s."
  },
  {
    id: "Q_JUN_B4_02",
    division: "Junior",
    bracket: "2500000-10000000",
    subject: "GK",
    text: "Which Indian scientist won the Nobel Prize in Physics in 1930 for discovering light scattering?",
    options: { A: "Homi Bhabha", B: "C. V. Raman", C: "S. Chandrasekhar", D: "Jagadish Chandra Bose" },
    correctAnswer: "B",
    guruHint: "National Science Day in India is celebrated in honor of this Raman Effect discovery.",
    explanation: "Sir C. V. Raman won the Nobel Prize in Physics in 1930 for the 'Raman Effect'."
  },

  // Bracket 5 (FFF - Fastest Finger First)
  {
    id: "Q_JUN_FFF_01",
    division: "Junior",
    bracket: "FFF",
    subject: "Science",
    text: "Arrange these planets in order of their distance from the Sun, from CLOSEST to FARTHEST:",
    options: { A: "Mars", B: "Mercury", C: "Earth", D: "Venus" },
    correctAnswer: "B,D,C,A", // Mercury, Venus, Earth, Mars
    guruHint: "Remember the mnemonic: My Very Educated Mother (Mercury, Venus, Earth, Mars).",
    explanation: "Distance from Sun: Mercury (1st), Venus (2nd), Earth (3rd), Mars (4th)."
  },
  {
    id: "Q_JUN_FFF_02",
    division: "Junior",
    bracket: "FFF",
    subject: "Maths",
    text: "Arrange these numbers in ASCENDING order (from smallest to largest):",
    options: { A: "95", B: "27", C: "63", D: "14" },
    correctAnswer: "D,B,C,A", // 14, 27, 63, 95
    guruHint: "Start with 14 and end with 95.",
    explanation: "Ascending order: 14 < 27 < 63 < 95."
  },

  // ==========================================
  // 2. SENIOR LEAGUE (Class 7 to 10 | Ages 13–16)
  // ==========================================
  // Bracket 1 (1000-10000)
  {
    id: "Q_SEN_B1_01",
    division: "Senior",
    bracket: "1000-10000",
    subject: "Science",
    text: "What is the chemical formula of common table salt?",
    options: { A: "KCl", B: "NaCl", C: "NaOH", D: "CaCO3" },
    correctAnswer: "B",
    guruHint: "It is composed of Sodium and Chlorine ions.",
    explanation: "Sodium chloride has the chemical formula NaCl."
  },
  {
    id: "Q_SEN_B1_02",
    division: "Senior",
    bracket: "1000-10000",
    subject: "Maths",
    text: "What is the square root of 196?",
    options: { A: "12", B: "13", C: "14", D: "16" },
    correctAnswer: "C",
    guruHint: "14 × 14 gives this number.",
    explanation: "14 squared is 196."
  },
  {
    id: "Q_SEN_B1_03",
    division: "Senior",
    bracket: "1000-10000",
    subject: "History",
    text: "In which year did India adopt its Constitution and become a Republic?",
    options: { A: "1947", B: "1948", C: "1950", D: "1952" },
    correctAnswer: "C",
    guruHint: "Republic Day on 26th January commemorates this event.",
    explanation: "The Constitution of India came into effect on 26 January 1950."
  },
  {
    id: "Q_SEN_B1_04",
    division: "Senior",
    bracket: "1000-10000",
    subject: "Geography",
    text: "Which is the highest mountain peak located entirely within India?",
    options: { A: "K2 (Godwin Austen)", B: "Kangchenjunga", C: "Nanda Devi", D: "Kamet" },
    correctAnswer: "C",
    guruHint: "Kangchenjunga lies on the Nepal border; this peak lies fully in Uttarakhand.",
    explanation: "Nanda Devi (7,816 m) is the highest peak situated entirely within India."
  },
  {
    id: "Q_SEN_B1_05",
    division: "Senior",
    bracket: "1000-10000",
    subject: "Science",
    text: "Which human organ produces the hormone Insulin to regulate blood sugar?",
    options: { A: "Liver", B: "Pancreas", C: "Kidney", D: "Thyroid" },
    correctAnswer: "B",
    guruHint: "The Islets of Langerhans in this glandular organ secrete insulin.",
    explanation: "The pancreas produces insulin to regulate glucose metabolism."
  },

  // Bracket 2 (10000-340000)
  {
    id: "Q_SEN_B2_01",
    division: "Senior",
    bracket: "10000-340000",
    subject: "Maths",
    text: "In a right-angled triangle, if base = 6 cm and height = 8 cm, what is the hypotenuse?",
    options: { A: "9 cm", B: "10 cm", C: "12 cm", D: "14 cm" },
    correctAnswer: "B",
    guruHint: "Apply the Pythagorean theorem: 6² + 8² = 36 + 64 = 100.",
    explanation: "Hypotenuse = √(6² + 8²) = √100 = 10 cm."
  },
  {
    id: "Q_SEN_B2_02",
    division: "Senior",
    bracket: "10000-340000",
    subject: "Science",
    text: "What is the powerhouse organelle of an animal cell responsible for producing ATP?",
    options: { A: "Ribosome", B: "Mitochondria", C: "Golgi apparatus", D: "Lysosome" },
    correctAnswer: "B",
    guruHint: "It carries out cellular respiration to produce energy molecules.",
    explanation: "Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP)."
  },
  {
    id: "Q_SEN_B2_03",
    division: "Senior",
    bracket: "10000-340000",
    subject: "History",
    text: "Who was the Viceroy of India when the Partition of Bengal was announced in 1905?",
    options: { A: "Lord Curzon", B: "Lord Ripon", C: "Lord Dalhousie", D: "Lord Mountbatten" },
    correctAnswer: "A",
    guruHint: "He was one of the most controversial British Viceroys, serving from 1899 to 1905.",
    explanation: "Lord Curzon ordered the partition of the province of Bengal in 1905."
  },
  {
    id: "Q_SEN_B2_04",
    division: "Senior",
    bracket: "10000-340000",
    subject: "Science",
    text: "What is the SI unit of electric potential difference (voltage)?",
    options: { A: "Ampere", B: "Ohm", C: "Volt", D: "Watt" },
    correctAnswer: "C",
    guruHint: "Named after Alessandro Volta, Italian physicist who invented the electric battery.",
    explanation: "The volt (V) is the SI unit of electric potential and electromotive force."
  },
  {
    id: "Q_SEN_B2_05",
    division: "Senior",
    bracket: "10000-340000",
    subject: "English",
    text: "Which figure of speech is used in: 'The classroom was a zoo'?",
    options: { A: "Simile", B: "Metaphor", C: "Personification", D: "Hyperbole" },
    correctAnswer: "B",
    guruHint: "A direct comparison without using 'like' or 'as'.",
    explanation: "A metaphor directly asserts that one thing is another without using 'like' or 'as'."
  },

  // Bracket 3 (340000-2500000)
  {
    id: "Q_SEN_B3_01",
    division: "Senior",
    bracket: "340000-2500000",
    subject: "Science",
    text: "According to Newton's Law of Universal Gravitation, if distance between two masses doubles, force becomes:",
    options: { A: "Half", B: "One-fourth", C: "Double", D: "Four times" },
    correctAnswer: "B",
    guruHint: "Gravitational force follows the inverse-square law: F ∝ 1/r².",
    explanation: "By the inverse-square law, doubling distance (r -> 2r) reduces force to 1/(2²) = 1/4."
  },
  {
    id: "Q_SEN_B3_02",
    division: "Senior",
    bracket: "340000-2500000",
    subject: "Polity",
    text: "Which Article of the Indian Constitution empowers the President to declare a National Emergency?",
    options: { A: "Article 352", B: "Article 356", C: "Article 360", D: "Article 370" },
    correctAnswer: "A",
    guruHint: "Article 356 is President's Rule in States; National Emergency is 4 numbers lower.",
    explanation: "Article 352 allows the President to proclaim emergency in case of war, external aggression, or armed rebellion."
  },
  {
    id: "Q_SEN_B3_03",
    division: "Senior",
    bracket: "340000-2500000",
    subject: "Maths",
    text: "If sin θ = 3/5, what is the value of cos θ (assuming θ is an acute angle)?",
    options: { A: "4/5", B: "2/5", C: "5/4", D: "3/4" },
    correctAnswer: "A",
    guruHint: "cos² θ = 1 - sin² θ = 1 - (9/25) = 16/25.",
    explanation: "cos θ = √(1 - 9/25) = √(16/25) = 4/5."
  },

  // Bracket 4 (2500000-10000000)
  {
    id: "Q_SEN_B4_01",
    division: "Senior",
    bracket: "2500000-10000000",
    subject: "History",
    text: "In which year was the Treaty of Purandar signed between Chhatrapati Shivaji Maharaj and Jai Singh I?",
    options: { A: "1657", B: "1665", C: "1674", D: "1680" },
    correctAnswer: "B",
    guruHint: "It took place 9 years before Shivaji Maharaj's coronation at Raigad in 1674.",
    explanation: "The Treaty of Purandar was signed on 11 June 1665 between Shivaji Maharaj and Raja Jai Singh I."
  },
  {
    id: "Q_SEN_B4_02",
    division: "Senior",
    bracket: "2500000-10000000",
    subject: "Science",
    text: "Which element has the highest electrical conductivity of all metals at room temperature?",
    options: { A: "Copper", B: "Gold", C: "Silver", D: "Aluminium" },
    correctAnswer: "C",
    guruHint: "Copper is commonly used due to cost, but this precious metal is chemically more conductive.",
    explanation: "Silver has the highest electrical and thermal conductivity of any known element."
  },

  // Bracket 5 (FFF)
  {
    id: "Q_SEN_FFF_01",
    division: "Senior",
    bracket: "FFF",
    subject: "History",
    text: "Arrange these historic events of the Indian Freedom Struggle in CHRONOLOGICAL order (earliest to latest):",
    options: {
      A: "Non-Cooperation Movement",
      B: "Quit India Movement",
      C: "Revolt of 1857",
      D: "Dandi Salt March"
    },
    correctAnswer: "C,A,D,B", // 1857, 1920, 1930, 1942
    guruHint: "1857 came first; Quit India came last in 1942.",
    explanation: "Revolt (1857) -> Non-Cooperation (1920) -> Dandi March (1930) -> Quit India (1942)."
  },

  // ==========================================
  // 3. OPEN / CHAMPIONS LEAGUE (17+ | Aspirants & Adults)
  // ==========================================
  // Bracket 1 (1000-10000)
  {
    id: "Q_OPN_B1_01",
    division: "Open",
    bracket: "1000-10000",
    subject: "Polity",
    text: "Who is known as the 'Chief Architect' of the Constitution of India?",
    options: { A: "Dr. B. R. Ambedkar", B: "Jawaharlal Nehru", C: "Sardar Vallabhbhai Patel", D: "Dr. Rajendra Prasad" },
    correctAnswer: "A",
    guruHint: "He was the Chairman of the Drafting Committee.",
    explanation: "Dr. Bhimrao Ramji Ambedkar served as the chairman of the Drafting Committee."
  },
  {
    id: "Q_OPN_B1_02",
    division: "Open",
    bracket: "1000-10000",
    subject: "GK",
    text: "Which country hosted the first Modern Olympic Games in 1896?",
    options: { A: "France", B: "Greece", C: "United Kingdom", D: "United States" },
    correctAnswer: "B",
    guruHint: "Held in Athens, the birthplace of the ancient Olympics.",
    explanation: "The 1896 Summer Olympics were held in Athens, Greece."
  },
  {
    id: "Q_OPN_B1_03",
    division: "Open",
    bracket: "1000-10000",
    subject: "Current Affairs",
    text: "ISRO's lunar mission Chandrayaan-3 achieved soft landing on the Moon near which region?",
    options: { A: "Equator", B: "North Pole", C: "Lunar South Pole", D: "Sea of Tranquility" },
    correctAnswer: "C",
    guruHint: "India became the first nation to soft-land near this polar region.",
    explanation: "Chandrayaan-3 achieved historical landing near the south pole of the Moon on 23 August 2023."
  },
  {
    id: "Q_OPN_B1_04",
    division: "Open",
    bracket: "1000-10000",
    subject: "Geography",
    text: "Which strait connects the Bay of Bengal with the Arabian Sea / Gulf of Mannar?",
    options: { A: "Malacca Strait", B: "Palk Strait", C: "Strait of Hormuz", D: "Gibraltar Strait" },
    correctAnswer: "B",
    guruHint: "It separates Tamil Nadu (India) and the Mannar district of Sri Lanka.",
    explanation: "Palk Strait connects the Bay of Bengal in the northeast with Palk Bay / Gulf of Mannar in the southwest."
  },
  {
    id: "Q_OPN_B1_05",
    division: "Open",
    bracket: "1000-10000",
    subject: "Literature",
    text: "Who wrote the national song of India, 'Vande Mataram'?",
    options: { A: "Rabindranath Tagore", B: "Bankim Chandra Chattopadhyay", C: "Sarojini Naidu", D: "Sri Aurobindo" },
    correctAnswer: "B",
    guruHint: "It was featured in his famous 1882 Bengali novel 'Anandamath'.",
    explanation: "Bankim Chandra Chattopadhyay composed 'Vande Mataram' in the 1870s and included it in Anandamath."
  },

  // Bracket 2 (10000-340000)
  {
    id: "Q_OPN_B2_01",
    division: "Open",
    bracket: "10000-340000",
    subject: "Economy",
    text: "What is the primary objective of the Reserve Bank of India's Monetary Policy Committee (MPC)?",
    options: { A: "Stock Market Regulation", B: "Maintaining Inflation Target", C: "Collecting Income Tax", D: "Export Subsidies" },
    correctAnswer: "B",
    guruHint: "Targeting CPI inflation within a flexible 4% (+/- 2%) band.",
    explanation: "The primary objective of the RBI's MPC is maintaining price stability while keeping in mind growth."
  },
  {
    id: "Q_OPN_B2_02",
    division: "Open",
    bracket: "10000-340000",
    subject: "Science",
    text: "CRISPR-Cas9 technology is widely recognized in modern biotechnology for:",
    options: { A: "Gene editing", B: "Nuclear fusion", C: "Quantum encryption", D: "Deep ocean mapping" },
    correctAnswer: "A",
    guruHint: "A molecular scissor used to modify DNA sequences.",
    explanation: "CRISPR-Cas9 is a precision gene-editing tool derived from bacterial immune systems."
  },
  {
    id: "Q_OPN_B2_03",
    division: "Open",
    bracket: "10000-340000",
    subject: "History",
    text: "The famous 'Battle of Khanwa' (1527) was fought between Babur and which Rajput ruler?",
    options: { A: "Rana Sanga", B: "Maharana Pratap", C: "Prithviraj Chauhan", D: "Rana Kumbha" },
    correctAnswer: "A",
    guruHint: "Rana Sanga of Mewar led a Rajput confederation against Babur.",
    explanation: "The Battle of Khanwa was fought between Babur and Rana Sanga of Mewar in 1527."
  },
  {
    id: "Q_OPN_B2_04",
    division: "Open",
    bracket: "10000-340000",
    subject: "Polity",
    text: "Which Schedule of the Indian Constitution contains the list of 22 officially recognized languages?",
    options: { A: "7th Schedule", B: "8th Schedule", C: "9th Schedule", D: "11th Schedule" },
    correctAnswer: "B",
    guruHint: "7th is Union/State lists; languages are in the Eighth.",
    explanation: "The Eighth Schedule lists the 22 recognized languages of the Republic of India."
  },
  {
    id: "Q_OPN_B2_05",
    division: "Open",
    bracket: "10000-340000",
    subject: "Environment",
    text: "The Ramsar Convention is an international treaty for the conservation and sustainable use of:",
    options: { A: "Coral reefs", B: "Wetlands", C: "Tropical rainforests", D: "Ozone layer" },
    correctAnswer: "B",
    guruHint: "Signed in Ramsar, Iran in 1971 to protect marshlands and water bodies.",
    explanation: "The Ramsar Convention on Wetlands is an international treaty for wetland conservation."
  },

  // Bracket 3 (340000-2500000)
  {
    id: "Q_OPN_B3_01",
    division: "Open",
    bracket: "340000-2500000",
    subject: "Polity",
    text: "The 'Basic Structure Doctrine' of the Indian Constitution was propounded in which landmark Supreme Court case?",
    options: {
      A: "Golaknath v. State of Punjab (1967)",
      B: "Kesavananda Bharati v. State of Kerala (1973)",
      C: "Minerva Mills v. Union of India (1980)",
      D: "Maneka Gandhi v. Union of India (1978)"
    },
    correctAnswer: "B",
    guruHint: "A historic 13-judge constitutional bench ruled in 1973 on parliamentary amending powers.",
    explanation: "In Kesavananda Bharati (1973), the Supreme Court ruled that Parliament cannot alter the basic structure of the Constitution."
  },
  {
    id: "Q_OPN_B3_02",
    division: "Open",
    bracket: "340000-2500000",
    subject: "World History",
    text: "Who was the chief architect behind the unification of modern Germany in 1871?",
    options: { A: "Otto von Bismarck", B: "Kaiser Wilhelm II", C: "Metternich", D: "Garibaldi" },
    correctAnswer: "A",
    guruHint: "Known as the 'Iron Chancellor' (Blut und Eisen).",
    explanation: "Otto von Bismarck engineered the unification of Germany through diplomacy and wars in 1871."
  },
  {
    id: "Q_OPN_B3_03",
    division: "Open",
    bracket: "340000-2500000",
    subject: "Astronomy",
    text: "The Chandrasekhar Limit sets the maximum mass of a stable white dwarf star at approximately:",
    options: { A: "1.4 Solar Masses", B: "2.5 Solar Masses", C: "3.2 Solar Masses", D: "0.8 Solar Masses" },
    correctAnswer: "A",
    guruHint: "Named after Subrahmanyan Chandrasekhar; roughly 1.44 times the mass of the Sun.",
    explanation: "The Chandrasekhar limit is roughly 1.4 solar masses, beyond which a star collapses into a neutron star or black hole."
  },

  // Bracket 4 (2500000-10000000)
  {
    id: "Q_OPN_B4_01",
    division: "Open",
    bracket: "2500000-10000000",
    subject: "Indian History",
    text: "Who was the court poet (Asthana Vidwan) of Emperor Harshavardhana and author of 'Harshacharita' and 'Kadambari'?",
    options: { A: "Banabhatta", B: "Kalidasa", C: "Bhavabhuti", D: "Dandin" },
    correctAnswer: "A",
    guruHint: "He authored the first historical biography in Sanskrit.",
    explanation: "Banabhatta was the Asthana Kavi in the court of Harsha and wrote Harshacharita and Kadambari."
  },
  {
    id: "Q_OPN_B4_02",
    division: "Open",
    bracket: "2500000-10000000",
    subject: "Economics",
    text: "The 'Phillips Curve' depicts an inverse historical relationship between which two macroeconomic variables?",
    options: {
      A: "Interest Rate and GDP Growth",
      B: "Inflation and Unemployment",
      C: "Tax Rates and Government Revenue",
      D: "Exchange Rate and Trade Deficit"
    },
    correctAnswer: "B",
    guruHint: "Named after A. W. Phillips; suggests lower unemployment correlates with higher inflation in the short run.",
    explanation: "The Phillips curve shows an inverse trade-off between inflation and unemployment rate."
  },

  // Bracket 5 (FFF)
  {
    id: "Q_OPN_FFF_01",
    division: "Open",
    bracket: "FFF",
    subject: "World History",
    text: "Arrange these World historical events in CHRONOLOGICAL order (earliest to latest):",
    options: {
      A: "French Revolution begins",
      B: "Fall of Constantinople",
      C: "American Declaration of Independence",
      D: "Battle of Waterloo"
    },
    correctAnswer: "B,C,A,D", // 1453, 1776, 1789, 1815
    guruHint: "Constantinople fell in 1453; Napoleon's Waterloo happened in 1815.",
    explanation: "Constantinople (1453) -> American Independence (1776) -> French Revolution (1789) -> Waterloo (1815)."
  }
];

export default INITIAL_QUESTIONS;
