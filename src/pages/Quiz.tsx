import { FC, useContext } from 'react';
import Context from '../components/context/Context';
import { QuizGame } from '../components/QuizGame';

export const Quiz: FC = () => {
  const { player } = useContext(Context);

  return (
    <div>
      <h1>Välkommen {player}</h1>
      <QuizGame />
    </div>
  );
};
