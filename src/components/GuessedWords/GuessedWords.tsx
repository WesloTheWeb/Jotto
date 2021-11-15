import React from 'react';

interface GuessedWordProps {
    secretWord: string,
    success: boolean,
    guessedWords: { guessedWord: string; letterMatchCount: number }[];
}

const GuessedWords = (props: GuessedWordProps) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        );
    }

    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    );
};

export default GuessedWords;