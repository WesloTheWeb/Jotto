import React from 'react';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import './App.css';

function App() {
  return (
    <div data-test='component-app' className="App">
      <h1 className="font-sans md:font-serif font-extrabold text-7xl text-blue-600">Jotto App</h1>
      <Congrats success={false} />
      <GuessedWords
        secretWord={"party"}
        success={true}
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;