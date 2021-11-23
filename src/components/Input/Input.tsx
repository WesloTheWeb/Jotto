import { useState } from 'react';

interface InputProps {
    secretWord: string,
    success: boolean,
    guessedWords: object
}

const Input = (props: InputProps) => {
    const [currentGuess, setCurrentGuess] = useState('');

    if (props.success) {
        return <div data-test='component-input' />
    }

    return (
        <div data-test='component-input' className="m-8">
            <form className="form-container">
                <input
                    data-test="input-box"
                    className="input-form-property"
                    type="text"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={(evnt) => setCurrentGuess(evnt.target.value)} />
                <button
                    data-test="submit-button"
                    className="bg-green-600 p-1.5 font-bold"
                    onClick={() => {
                        setCurrentGuess('');
                    }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Input;