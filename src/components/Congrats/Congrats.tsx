interface CommponentProps {
    success: boolean;
}

const Congrats = (props: CommponentProps) => {
    if (props.success) {
        return (
            <div data-test="component-congrats" className="my-6 bg-green-100 p-5">
                <span data-test="congrats-message" className="font-bold text-green-600">
                    Congratulations! You guessed the word!
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats" />
        );
    }
};

export default Congrats;