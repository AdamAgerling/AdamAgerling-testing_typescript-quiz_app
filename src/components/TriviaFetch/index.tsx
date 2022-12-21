import { shuffleAnswer } from '../shuffleAnswer';

export interface Question {
  category: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  difficulty: string;
  type: string;
  regions: string[];
}

export enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

const difficultySelector = (data: string) => {
  const difficulty = ['easy', 'medium', 'hard'];
  if (data === 'random') {
    return difficulty[Math.floor(Math.random() * difficulty.length)];
  }

  return data;
};

export enum Categories {
  artsAndLiterature = 'Arts & Literature',
  filmAndTV = 'Film & TV',
  foodAndDrink = 'Food & Drink',
  generalKnowledge = 'General Knowledge',
  geography = 'Geography',
  history = 'History',
  music = 'Music',
  science = 'Science',
  societyAndCulture = 'Society & Culture',
  sportAndLeisure = 'Sport & Leisure',
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuestions = async (
  category: string,
  difficulty: Difficulty
): Promise<QuestionsState[]> => {
  const url = `https://the-trivia-api.com/api/questions?categories=${category}&limit=1&difficulty=${difficultySelector(
    difficulty
  )}
  `;
  const data = await (await fetch(url)).json();

  return data.map((question: Question) => ({
    ...question,
    answers: shuffleAnswer([
      ...question.incorrectAnswers,
      question.correctAnswer,
    ]),
  }));
};
