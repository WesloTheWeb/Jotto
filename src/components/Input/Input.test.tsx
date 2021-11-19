import React, { useState } from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../test/testUtils';
import Input from './Input';


const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState) => [initialState, mockSetCurrentGuess]
}));
const setup = () => {
    // const setupProps = { ...defaultProps, ...props };
    return shallow(<Input />);
}

test('Input renders without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
});

// test('does not throw warning with expected props', () => {
//     checkProps(Input, { secretWord: "party});
// });

describe('state controlled input field', () => {
    test('state updates with value of input box upon change', () => {

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
});