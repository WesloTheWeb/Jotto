import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'Train', letterMatchCount: 3 }]
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...props} />);
}

describe('If there are no words guessed', () => {
    let wrapper: object;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        });
    });

    it('creates GuessedWords table with one row.', () => {
        const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    });
});

describe('shows some of the guessed words', () => {
    let wrapper: object;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
        });
    });

    const guessedWords = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWords).toHaveLength(0);
});

it('adds row to guess the secret word', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordNodes).toHaveLength(2);
});

it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
});

it('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
});

describe('If there are words guessed', () => {
    let wrapper: any;
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ];

    beforeEach(() => {
        wrapper = setup({ guessedWords })
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    it('renders "guessed words" section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    it('correct number of letters for the secret word in guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'letters-matched-count');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });
});

describe('guess secret word', () => {
    let wrapper: object;
    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ GuessedWord: 'agile', letterMatchCount: 1}]
        });

        //add value to input box
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const mockEvent = { target: { value: 'party' } };
        inputBox.simulate('change', mockEvent);

        //simulate click on submit 
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() { } });
    });

    it('adds row to guessedWords table', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(2);
    });
});
