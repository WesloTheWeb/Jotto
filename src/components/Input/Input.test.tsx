import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Input from './Input';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialState: String) => [initialState, mockSetCurrentGuess]
}));

let mockSetCurrentGuess = jest.fn();
const setup = (success = false, secretWord = 'party') => {
    return shallow(<Input success={success} secretWord={secretWord} />);
}

describe('render', () => {
    let wrapper: object;

    describe('success is true', () => {
        beforeEach(() => {
            wrapper = setup(true);
        });

        it('should make Input render without error', () => {
            const wrapper = setup();
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        it('should show the Input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(false);
        });
        
        it('should not show the submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false);
        });
    });

    describe('success is false', () => {
        let wrapper: object;

        beforeEach(() => {
            wrapper = setup(false);
        });

        it('should have Input render without error', () => {
            const wrapper = setup();
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        it('should have the Input box shows', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.exists()).toBe(true);
        });

        it('should make submit button shows', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        });
    });
})

describe('state controlled input field', () => {
    let wrapper: object;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        wrapper = setup();
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
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    });
});