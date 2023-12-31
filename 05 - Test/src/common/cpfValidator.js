function validateCpf(cpf) {

    if (!cpf) return false;
    const cpfSplit = cpf.replaceAll('.', '').replace('-', '');

    if (cpfSplit.length != 11)
        return false;

    var somaDig1 = 0;
    for (let i = 0; i < cpfSplit.length - 2; i++) {
        somaDig1 += (Number(cpfSplit[i]) * (10 - i));
    }

    var resto = somaDig1 % 11;
    var modNum1 = resto < 2 ? 0 : 11 - resto;
    if (modNum1 != cpfSplit[9])
        return false;


    var somaDig2 = 0;
    for (let i = 0; i < cpfSplit.length - 1; i++) {
        somaDig2 += Number(cpfSplit[i]) * (11 - i);
    }
    var modNum2 = 11 - (somaDig2 % 11);
    var dig2 = modNum2 >= 10 ? 0 : modNum2;

    if (dig2 != cpfSplit[10])
        return false;

    return true;
}
module.exports = { validateCpf };