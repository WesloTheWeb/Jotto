import React from 'react';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import './App.css';

function App() {
  return (
    <div className="App">
      <Congrats success={false} />
      <GuessedWords 
        secretWord={"party"}
        success={true}
        guessedWords={[ {guessedWord: 'train', letterMatchCount: 3}]} />
    </div>
  );
}

export default App;
