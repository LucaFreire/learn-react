const { validateCpf } = require('../../common/cpfValidator')

describe('CPF validator', () => {
    const cpf1 = '11168957907'
    const cpf2 = '15401718926'
    const cpf3 = '02443592960'
    const cpf4 = '09093369970'
    const cpf5 = '09093369971'

    it('it must return if the CPF is valid', () => {
        const res = validateCpf(cpf1)
        expect(res).toBeTruthy();
    })

    it('it must return if the CPF is valid', () => {
        const res = validateCpf(cpf2)
        expect(res).toBeTruthy();''
    })

    it('it must return if the CPF is valid', () => {
        const res = validateCpf(cpf3)
        expect(res).toBeTruthy();
    })

    it('it must return if the CPF is valid', () => {
        const res = validateCpf(cpf4)
        expect(res).toBeTruthy();
    })

    it('it must return if the CPF is valid', () => {
        const res = validateCpf(cpf5)
        expect(res).toBeFalsy();
    })
})