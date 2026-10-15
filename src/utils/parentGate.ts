// Google Play Families Policy Compliant Parent Gate Challenge Generator

export interface ParentGateChallenge {
  question: string;
  correctAnswer: number;
  options: number[];
}

export const generateParentGateChallenge = (): ParentGateChallenge => {
  // Two-digit by one-digit or two-digit multiplication suitable for adults
  const num1 = Math.floor(Math.random() * 11) + 12; // 12 to 22
  const num2 = Math.floor(Math.random() * 6) + 4;   // 4 to 9
  
  const correctAnswer = num1 * num2;

  // Generate 3 plausible fake answers
  const optionsSet = new Set<number>();
  optionsSet.add(correctAnswer);

  while (optionsSet.size < 4) {
    const delta = (Math.floor(Math.random() * 5) + 1) * (Math.random() > 0.5 ? 1 : -1) * (Math.random() > 0.5 ? 10 : 1);
    const fake = correctAnswer + delta;
    if (fake > 0 && fake !== correctAnswer) {
      optionsSet.add(fake);
    }
  }

  const options = Array.from(optionsSet).sort(() => Math.random() - 0.5);

  return {
    question: `Adult Security Check: What is ${num1} × ${num2}?`,
    correctAnswer,
    options,
  };
};
