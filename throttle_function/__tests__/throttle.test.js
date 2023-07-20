const functions = require('../functions_to_test/functions')
const mock = jest.fn();

test('throttle function', (done) => {
    const throttleFn = functions.throttleTest(mock, 100);
    throttleFn();
    expect(mock).toHaveBeenCalled();

    setTimeout(() => {
        expect(mock).toHaveBeenCalled();
        done()
    }, 200); 
});