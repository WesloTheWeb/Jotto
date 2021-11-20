import React, { useState } from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Input from './Input';

const setup = (success = false, secretWord = 'party') => {
    // const setupProps = { ...defaultProps, ...props };
    return shallow(<Input success={success} secretWord={secretWord} />);
}

describe('render', () => {
    describe('success is true', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup(true);
        });

        test('Input renders without error', () => {
            const wrapper = setup();
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });
        test('Input box does not show', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exist()).toBe(false);
        });
        test('submit button does not show', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exist()).toBe(false);
        });
    });
    
    describe('success is false', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup(false);
        });

        test('Input renders without error', () => {
            const wrapper = setup();
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        test('Input box shows', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exist()).toBe(true);
        });

        test('submit button shows', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exist()).toBe(true);
        });
    });
})

describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper: any;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        wrapper = setup();
        jest.mock('react', () => ({
            ...jest.requireActual('react'),
            useState: (initialState) => [initialState, mockSetCurrentGuess]
        }));
    });

    it('state updates with value of input box upon change', () => {

        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    it('should clear the field when upon submit is clicked', () => {

        const wrapper = setup();
        const submitButton = findByTestAttr(wrapper, 'submit-button');

        submitButton.simulate('click', { preventDefault() { } });
        expect(mockSetCurrentGuess).toHaveBeenCalled(" ");
    });

});
