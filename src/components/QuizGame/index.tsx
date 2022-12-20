import { useEffect, useState } from 'react';
import { Question } from '../Question';
import {
  fetchQuestions,
  QuestionsState,
  Difficulty,
  Categories,
} from '../TriviaFetch';
import { difficultyOptions, categoryOptions } from '../constants';
import {
  TIME,
  TOTAL_QUESTIONS,
  DIFFICULTY_POINTS,
} from '../../utilities/quizConfig';

export type AnswerProps = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
  questionDifficulty: string;
};

export const QuizGame = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerProps[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<string>('');
  const [categories, setCategories] = useState<string>();
  const [totalPoints, setTotalPoints] = useState<number>(0);

  const [timer, setTimer] = useState<number>(TIME);
  const [activeTime, setActiveTime] = useState<boolean>(false);

  const [timeToStart, setTimeToStart] = useState<number>(3);
  const [isActive, setIsActive] = useState<boolean>(false);

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
    setIsActive(true);

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
      setIsActive(false);

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
      console.log(userAnswers);
    }
  };

  useEffect(() => {
    calculateScore();
  }, [userAnswers]);

  const calculateScore = () => {
    const difficultyPoints = DIFFICULTY_POINTS[difficulty];
    const correctGuesses = userAnswers.filter(
      (answer) => answer.correct
    ).length;
    const consecutiveGuesses = userAnswers.reduce((acc, answer) => {
      if (answer.correct) {
        return acc + 1;
      } else {
        return 0;
      }
    }, 0);

    userAnswers.map((answer) => {
      if (answer.correct) {
        const calculateTotalScore =
          consecutiveGuesses > 2
            ? consecutiveGuesses * correctGuesses + timer * difficultyPoints
            : timer * difficultyPoints;

        setTotalPoints(totalPoints + calculateTotalScore);

        return calculateTotalScore;
      } else {
        return 0;
      }
    });
  };

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

          {!gameOver ? <p>Score: {totalPoints}</p> : null}
          {loading && <p>The Api is Loading... or its down for now.</p>}

          {!loading && !gameOver && (
            <Question
              questionNumber={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[0].question}
              answers={questions[0].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
          {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
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
