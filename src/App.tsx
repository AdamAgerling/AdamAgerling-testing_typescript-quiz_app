import './App.css';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Context from './components/context/Context';
import { useState } from 'react';

export const App = () => {
  const [player, setPlayer] = useState<string>();

  return (
    <div className="App">
      <h1>"Generic QuizName"</h1>
      <Context.Provider value={{ player, setPlayer }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
};
