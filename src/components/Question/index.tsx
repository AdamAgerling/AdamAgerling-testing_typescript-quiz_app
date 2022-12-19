import { FC } from 'react';
import { AnswerProps } from '../QuizGame';
import styles from './question.module.css';

type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerProps | undefined;
  questionNumber: number;
  totalQuestions: number;
};

export const Question: FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber: questionNum,
  totalQuestions,
}) => {
  return (
    <div>
      <p>
        Question: {questionNum} / {totalQuestions}
      </p>
      <p>{question}</p>
      <div>
        {answers?.map((answer) => (
          <div key={answer}>
            <button
              data-testid="Answer-Button"
              className={`${
                userAnswer?.correctAnswer === answer ? styles.buttonSuccess : ''
              }`}
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
            >
              <p>{answer}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
