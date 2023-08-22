const { Sum, Mult, Sub, Div } = require('../../common/calc.js')

describe('calculator', () => {

    const a = 10;
    const b = 10;

    it(`it must return ${a + b}`, () => {
        const res = Sum(a, b)
        expect(res).toBe(a + b);
    })
    it(`it must return ${a * b}`, () => {
        const res = Mult(a, b)
        expect(res).toBe(a * b);
    })
    it(`it must return ${a - b}`, () => {
        const res = Sub(a, b)
        expect(res).toBe(a - b);
    })
    it(`it must return ${a / b}`, () => {
        const res = Div(a, b)
        expect(res).toBe(a / b);
    })

})