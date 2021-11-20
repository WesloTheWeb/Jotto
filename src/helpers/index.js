export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessedWord);
    return secretLetters.filter(letter => guessedLetterSet.set(letter)).length;
};