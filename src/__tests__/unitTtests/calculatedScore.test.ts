import { calculatedScore } from '../../utilities/calculatedScore';

describe('Should yield the calculated score', () => {
  test('Calculate total score', () => {
    const difficulty: any = 'hard';
    const userAnswers: any = [{ correct: true, answer: 'correct answer' }];
    const timer = 30;

    const result = calculatedScore(difficulty, userAnswers, timer);
    expect(result).toBe(150);
  });
});
