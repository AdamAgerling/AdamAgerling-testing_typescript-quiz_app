import { FC, useEffect, useState } from 'react';
import { Button } from '../Button';

export const Trivia: FC = () => {
  const [triviaCategories, setTriviaCategories] = useState<string[]>();

  useEffect(() => {
    fetch('https://the-trivia-api.com/api/categories')
      .then((response) => response.json())
      .then((result) => {
        setTriviaCategories(Object.keys(result));
      });
  }, []);

  return triviaCategories ? (
    <div>
      {triviaCategories.map((category) => (
        <Button key={category} buttonText={category} />
      ))}
    </div>
  ) : (
    <h2>The Trivia Api is not available at this moment</h2>
  );
};
