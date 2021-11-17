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
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <>
                <div data-test="guessed-word">
                    <span key={index}>{word.guessedWord}</span>
                </div>
            </>
        ));

        const letterMatchRow = props.guessedWords.map((word, index) => {
            return (
                <>
                    <div data-test="guessed-word" key={index}>{word.letterMatchCount}</div>
                </>
            )
        });

        contents = (
            <section data-test="guessed-words">
                <h2 className="text-4xl m-5">Guessed Words</h2>
                <div className="flexed-word-layout justify-center" >
                    <section className="grid-word-layout border border-solid border-black">
                        <div className="bg-gray-300 p-2 font-bold">Guess</div>
                        <div className="bg-gray-300 p-2 font-bold">Matching Letters</div>
                        <div>{guessedWordsRows}</div>
                        <div className="font-bold text-green-500">{letterMatchRow}</div>
                    </section>
                </div>
            </section>
        );
    };

    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    );
};

export default GuessedWords;