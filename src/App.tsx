import React from 'react';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import './App.css';
import Input from './components/Input/Input';

function App() {
  const success = false;
  const secretWord = 'party';
  const guessedWords:object = [];

  return (
    <div data-test='component-app' className="App">
      <h1 className="font-sans md:font-serif font-extrabold text-7xl text-blue-600">Jotto App</h1>
      <Congrats success={false} />
      {/* <Input secretWord={"party"} success={false} /> */}
      <Input success={success} secretWord={secretWord} guessedWords={guessedWords} />
      <GuessedWords
        secretWord={"party"}
        success={true}
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;