import { FC, useEffect, useState } from 'react';
import { Button } from '../Button';

export const TriviaCategories: FC = () => {
  const [triviaCategories, setTriviaCategories] = useState<string[]>();

  const categoryShuffle = triviaCategories?.sort((a, b) => 0.5 - Math.random());

  useEffect(() => {
    fetch('https://the-trivia-api.com/api/categories')
      .then((response) => response.json())
      .then((result) => {
        setTriviaCategories(Object.keys(result));
      });
  }, []);

  return triviaCategories ? (
    <div>
      {categoryShuffle?.slice(0, 3).map((category) => (
        <Button key={category} buttonText={category} />
      ))}
    </div>
  ) : (
    <h2>The Trivia Api is not available at this moment</h2>
  );
};

export const Trivia: FC = () => {
  const [triviaQuestions, setTriviaQuestions] = useState<string[]>();

  useEffect(() => {
    fetch(
      'https://the-trivia-api.com/api/questions?categories=history&limit=1&region=SE&difficulty=easy'
    )
      .then((response) => response.json())
      .then((result) => {
        setTriviaQuestions(Object.keys(result));
      });
  }, []);

  return triviaQuestions ? (
    <div>
      {triviaQuestions.map((category) => (
        <Button key={category} buttonText={category} />
      ))}
    </div>
  ) : (
    <h2>The Trivia Api is not available at this moment</h2>
  );
};
