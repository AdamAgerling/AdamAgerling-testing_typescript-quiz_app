import { FC, useContext } from 'react';
import Context from '../components/context/Context';
import { TriviaCategories } from '../components/TriviaFetch';

export const Quiz: FC = () => {
  const { player } = useContext(Context);

  return (
    <div>
      <h1>Välkommen {player}</h1>
      <TriviaCategories />
    </div>
  );
};
