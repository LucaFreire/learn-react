--Bosch's test

 - Questão 1: Faça a Modelagem do banco de dados em Mongo DB com seus scripts de Inserção, busca, update e delete. De um banco de dados para Música, onde Música contém Autor, Gravadora, tempo de duração, ano de lançamento e estilo. Autor contém, nome, data de nascimento. Gravadora contém nome, endereço, CNPJ.

 - Questão 2: Com base na modelagem anterior, faça uma API com as rotas para busca geral, buscar por ID, atualizar e deletar uma gravadora. (Somente para gravadora, não precisa fazer para música e autor).

 - Questão 3: Com base no seguinte código, crie pelo menos 4 casos de teste diferentes para testar o cálculo.

function isPrime(number) {
    if (number <= 1) 
        return false;
    if (number <= 3) 
        return true;
    if (number % 2 === 0 || number % 3 === 0) 
        return false;
    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) 
            return false;
    }
    return true;
}