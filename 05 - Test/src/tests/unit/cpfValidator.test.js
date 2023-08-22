const { validateCpf } = require('../../common/cpfValidator')

describe('CPF validator', () => {
    const cpf = '02443592960'

    it('it must return if the CPF is valid', () => {
        const res = validateCpf(cpf)
        expect(res).toBe(true);
    })
})