const { fibonacci } = require('../../common/fibonacci');

describe('fibonacci validator', () => {
    const number1 = 3;
    const number2 = 4;
    const number3 = 5;

    it(`it must return the fibonacci of ${number1}`, () => {
        const res = fibonacci(number1);
        expect(res).toBe(2)
    });

    it(`it must return the fibonacci of ${number2}`, () => {
        const res = fibonacci(number2);
        expect(res).toBe(3)
    });

    it(`it must return the fibonacci of ${number3}`, () => {
        const res = fibonacci(number3);
        expect(res).toBe(5)
    });
})