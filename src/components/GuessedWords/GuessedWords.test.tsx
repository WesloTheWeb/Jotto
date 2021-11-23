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
    let wrapper: any;
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

    it('shows some of the guessed words', () => {
        const  guessedWords = findByTestAttr(wrapper, 'guessed-words');
        // expect(guessedWords).toHaveLength(0);
    });

    it('guess the secret word', () => {
        
    });

    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    it('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });

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