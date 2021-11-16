import React from 'react';

interface InputProps {
    success: boolean,
}

const Input = (props: InputProps) => {
    return (
        <div data-test='component-input'>
        </div>
    );
};

export default Input;