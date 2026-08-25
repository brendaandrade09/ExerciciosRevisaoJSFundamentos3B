// EXERCÍCIO 26 - PARÂMETRO PADRÃO
// Crie uma função calcularEntrega que receba valor e taxa.
// O parâmetro taxa deve possuir o valor padrão 10.
// Retorne a soma do valor com a taxa e teste informando e omitindo a taxa.
//
// Escreva sua solução abaixo:
function calcularEntrega(valor, taxa = 10) {
    return console.log(`O valor com taxa é R$${valor + taxa},00. O valor sem taxa é R$${valor},00.`);
}
calcularEntrega(100);
