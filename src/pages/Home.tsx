import { FC } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/input';
import { Button } from '../components/Button';

export const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Quiztopia</h1>
      <Input label={'Enter a name'} />
      <Button onClick={() => navigate('/quiz')} buttonText={'Start Quiz'} />
    </div>
  );
};
