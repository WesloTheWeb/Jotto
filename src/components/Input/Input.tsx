import React, { useState } from 'react';

interface InputProps {
    secretWord: string
}

const Input = (props: InputProps) => {

    const [currentGuess, setCurrentGuess] = useState('');

    return (
        <div data-test='component-input'>
            <form>
                <input
                    data-test="input-box"
                    type="text"
                    placeholder="enter guess"
                    value={currentGuess}
                    onChange={(evnt) => setCurrentGuess(evnt.target.value)} />
                {/* <button
                    data-test="submit-button"
                    onClick={() => {
                        
                        setCurrentGuess('');
                    }}> */}
                <button
                    data-test="submit-button"
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