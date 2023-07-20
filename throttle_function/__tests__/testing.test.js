const functions = require('../functions_to_test/functions')
const mock = jest.fn();

test('debounce function', (done) => {
    const debouncedFn = functions.debounceTest(mock, 100);
    debouncedFn();
    expect(mock).not.toHaveBeenCalled();

    setTimeout(() => {
        expect(mock).toHaveBeenCalled();
        done()
    }, 200); 
});