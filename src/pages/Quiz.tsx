import { FC, useContext } from 'react';
import Context from '../components/context/Context';
import { QuizGame } from '../components/QuizGame';

export const Quiz: FC = () => {
  const { player } = useContext(Context);

  return (
    <div>
      {player ? (
        <h1>Welcome {player} </h1>
      ) : (
        <h1> Welcome Mr."important" Noname</h1>
      )}
      <QuizGame />
    </div>
  );
};
