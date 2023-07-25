const functions = require('../functions_to_test/functions')
const mock = jest.fn();


test('memoize function', (done) => {
    const memoizeFn = functions.memoizeTest(mock);
    memoizeFn();

    expect(mock).toHaveBeenCalled();
    done()
});