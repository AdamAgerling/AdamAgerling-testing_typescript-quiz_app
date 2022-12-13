import { useEffect, useState } from 'react';
import { Question } from '../Question';
import {
  fetchQuestions,
  QuestionsState,
  Difficulty,
  Categories,
} from '../TriviaFetch';
import { difficultyOptions, categoryOptions } from '../constants';
import { Button } from '../Button';
import { TIME, TOTAL_QUESTIONS, DIFFICULTY_POINTS } from '../../config';

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
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<string>('');
  const [categories, setCategory] = useState<string>();
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [timer, setTimer] = useState<number>(TIME);
  const [activeTime, setActiveTime] = useState<boolean>(false);

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

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setNumber(0);
    setActiveTime(true);
    setTimer(TIME);
    if (!difficulty) {
      setDifficulty('easy');
    }

    const newQuestions = await fetchQuestions(
      categories as Categories,
      (difficulty || 'easy') as Difficulty
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setLoading(false);
  };
  console.log(totalPoints);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[0].correctAnswer === answer;
      setActiveTime(false);
      if (correct) {
        setScore((prev) => prev + 1);
        setCategory('');
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
    setTimer(TIME);

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

  return (
    <div>
      {!difficulty && (
        <>
          <p>Select Difficulty</p>
          <select onChange={(e) => setDifficulty(e.target.value)}>
            {difficultyOptions.map((difficulty, index) => (
              <option value={difficulty.id} key={index}>
                {difficulty.difficultyOption}
              </option>
            ))}
          </select>
        </>
      )}
      <p>TIME ELAPSED: {timer}</p>

      {!categories && (
        <>
          <p>Select Category</p>
          {shuffledCategoryOptions.slice(0, 3).map((category, index) => (
            <Button
              buttonText={category.categoryOption}
              onClick={() => setCategory(category.id)}
              key={index}
            />
          ))}
        </>
      )}

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button
          onClick={() => {
            setTimeout(() => {
              startQuiz();
            }, 3000);
          }}
        >
          Start Quiz
        </button>
      ) : null}

      {!gameOver ? <p>Score: {score}</p> : null}
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
        <Button
          buttonText="Next Question"
          onClick={() => {
            setTimeout(() => {
              nextQuestion();
            }, 3000);
          }}
        />
      ) : null}
    </div>
  );
};
