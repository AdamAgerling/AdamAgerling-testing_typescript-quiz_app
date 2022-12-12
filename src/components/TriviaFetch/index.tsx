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
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

const difficultySelector = (data: string) => {
  const difficulty = ['easy', 'medium', 'hard'];
  if (data === 'random') {
    return difficulty[Math.floor(Math.random() * difficulty.length)];
  }

  return data;
};

export enum Categories {
  ArtsAndLiterature = 'Arts & Literature',
  FilmAndTV = 'Film & TV',
  FoodAndDrink = 'Food & Drink',
  GeneralKnowledge = 'General Knowledge',
  Geography = 'Geography',
  History = 'History',
  Music = 'Music',
  Science = 'Science',
  SocietyAndCulture = 'Society & Culture',
  SportAndLeisure = 'Sport & Leisure',
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
  console.log(data);

  return data.map((question: Question) => ({
    ...question,
    answers: shuffleAnswer([
      ...question.incorrectAnswers,
      question.correctAnswer,
    ]),
  }));
};
