import { FC } from 'react';
import '../App.css';
import { Button } from '../components/Button';
import { Input } from '../components/input';
import { useNavigate } from 'react-router-dom';

export const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>QuizTopia</h1>
      <Input label={'Enter a name'} />
      <Button
        onClick={() => {
          navigate('/quiz ');
        }}
        buttonText={'Start Quiz'}
      />
    </div>
  );
};
