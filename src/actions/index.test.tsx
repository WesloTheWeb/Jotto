import moxios from 'moxios';

describe('getSecretWord', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it.todo('should return secretWord');
});