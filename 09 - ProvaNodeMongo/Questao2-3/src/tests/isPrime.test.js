const { isPrime } = require('../common/isPrime');

describe('isPrime validator', () => {
    const number1 = 2;
    const number2 = 3;
    const number3 = 4;
    const number4 = 1;

    it(`${number1} must return true`, () => {
        const res = isPrime(number1);
        expect(res).toBe(true);
    })

    it(`${number2} must return true`, () => {
        const res = isPrime(number2);
        expect(res).toBe(true);
    })

    it(`${number3} must return false`, () => {
        const res = isPrime(number3);
        expect(res).toBe(false);
    })

    it(`${number4} must return false`, () => {
        const res = isPrime(number4);
        expect(res).toBe(false);
    })

});