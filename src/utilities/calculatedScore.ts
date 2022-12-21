import { AnswerProps } from '../components/QuizGame';
import { DIFFICULTY_POINTS } from './quizConfig';

export const calculatedScore = (
  difficulty: string,
  userAnswers: AnswerProps[],
  timer: number
) => {
  let totalScore = 0;
  const difficultyPoints = DIFFICULTY_POINTS[difficulty];

  const correctGuesses = userAnswers.filter((answer) => answer.correct).length;
  console.log(userAnswers.filter((answer) => answer.correct).length);
  const consecutiveGuesses = userAnswers.reduce((acc, answer) => {
    if (answer.correct) {
      return acc + 1;
    } else {
      return 0;
    }
  }, 0);

  // eslint-disable-next-line array-callback-return
  userAnswers.map((answer) => {
    if (answer.correct) {
      const calculatedScore =
        consecutiveGuesses > 2
          ? consecutiveGuesses * correctGuesses + timer * difficultyPoints
          : timer * difficultyPoints;

      return (totalScore = calculatedScore);
    } else {
      return 0;
    }
  });
  return totalScore;
};
