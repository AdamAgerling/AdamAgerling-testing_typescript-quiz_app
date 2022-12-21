import { useEffect, useState } from 'react';
import { QuestionLayout } from '../QuestionLayout';
import {
  fetchQuestions,
  QuestionsState,
  Difficulty,
  Categories,
} from '../TriviaFetch';
import { difficultyOptions, categoryOptions } from '../constants';
import { TIME, TOTAL_QUESTIONS } from '../../utilities/quizConfig';
import { calculatedScore } from '../../utilities/calculatedScore';

export type AnswerProps = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
  questionDifficulty: string;
};

export const QuizGame = () => {
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<AnswerProps[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<string>('');
  const [categories, setCategories] = useState<string>();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [timeToStart, setTimeToStart] = useState<number>(3);
  const [timer, setTimer] = useState<number>(TIME);
  const [activeTime, setActiveTime] = useState<boolean>(false);

  const [quizScore, setQuizScore] = useState<number>(0);

  const shuffledCategoryOptions = categoryOptions.sort(
    () => Math.random() - 0.5
  );

  useEffect(() => {
    if (activeTime) {
      const elapsedTime: number = 0;
      if (timer > elapsedTime) {
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
      }
    }
  }, [activeTime, timer]);

  useEffect(() => {
    if (isActive) {
      const elapsedTime: number = 0;
      if (timeToStart > elapsedTime) {
        setTimeout(() => {
          setTimeToStart(timeToStart - 1);
        }, 1000);
      }
      if (timeToStart === elapsedTime) {
        setIsActive(false);
        setTimeToStart(3);
      }
    }
  }, [isActive, timeToStart]);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setNumber(0);
    setIsActive(true);
    setActiveTime(true);
    setTimer(TIME + timeToStart);

    if (!difficulty) {
      setDifficulty('easy');
    }

    const newQuestions = await fetchQuestions(
      categories as Categories,
      (difficulty || 'easy') as Difficulty
    );

    setQuestions(newQuestions);
    setUserAnswers([]);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[0].correctAnswer === answer;
      setActiveTime(false);
      setQuizScore(
        (prev) => prev + calculatedScore(difficulty, userAnswers, timer)
      );
      if (correct) {
        setCategories('');
      }

      const answerObject = {
        question: questions[0].question,
        answer,
        correct,
        questionDifficulty: difficulty,
        correctAnswer: questions[0].correctAnswer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = async () => {
    setNumber((prev) => prev + 1);
    setActiveTime(true);
    setTimer(TIME + timeToStart);
    setIsActive(true);

    const newQuestions = await fetchQuestions(
      categories as Categories,
      difficulty as Difficulty
    );

    setQuestions(newQuestions);
    if (number === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber((prev) => prev);
    }
  };

  useEffect(() => {
    setQuizScore(
      (prev) => prev + calculatedScore(difficulty, userAnswers, timer)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswers]);

  return (
    <div>
      {isActive ? (
        <p>{timeToStart}</p>
      ) : (
        <>
          {!difficulty && (
            <div>
              <p>Select Difficulty</p>
              <select
                onChange={(e) => setDifficulty(e.target.value)}
                data-testid="Select-Difficulty"
              >
                {difficultyOptions.map((difficulty, index) => (
                  <option value={difficulty.id} key={index}>
                    {difficulty.difficultyOption}
                  </option>
                ))}
              </select>
            </div>
          )}
          {!gameOver && <p>TIME REMANING: {timer}</p>}

          {!categories && (
            <>
              <p>Select Category</p>
              {shuffledCategoryOptions.slice(0, 3).map((category, index) => (
                <button
                  data-testid="Category-Button"
                  onClick={() => setCategories(category.id)}
                  key={index}
                >
                  {category.categoryOption}
                </button>
              ))}
            </>
          )}

          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <button
              data-testid="Start-Quiz"
              onClick={() => {
                startQuiz();
              }}
            >
              Start Quiz
            </button>
          ) : null}

          {!gameOver && <p>Score: {quizScore}</p>}
          {loading && <p>The Api is Loading... or its down for now.</p>}

          {!loading && !gameOver && (
            <QuestionLayout
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[0].question}
              answers={questions[0].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
              timer={timer}
            />
          )}
          {(!gameOver &&
            !loading &&
            userAnswers.length === number + 1 &&
            number !== TOTAL_QUESTIONS - 1) ||
          timer === 0 ? (
            <button
              data-testid="NextQuestion"
              onClick={() => {
                nextQuestion();
              }}
              disabled={!categories}
            >
              Next Question
            </button>
          ) : null}
        </>
      )}
    </div>
  );
};
