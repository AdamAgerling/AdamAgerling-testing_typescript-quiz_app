export const shuffleAnswer = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);
