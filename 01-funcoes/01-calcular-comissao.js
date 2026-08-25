// EXERCÍCIO 01 - CALCULAR COMISSÃO
// Crie uma função chamada calcularComissao que receba o valor de uma venda
// e a porcentagem de comissão. A função deve retornar o valor da comissão.
// Teste com uma venda de R$ 800 e comissão de 5%.
// 
// Saída esperada: Comissão: R$ 40
//
// Escreva sua solução abaixo:

class Venda {
    constructor(valor, porcentagem) {
        this.valor = valor;
        this.porcentagem = porcentagem;
    }
    calcularComissao() {
        return console.log((this.valor * this.porcentagem) / 100);
    }
}

venda1 = new Venda(800, 5);
venda1.calcularComissao();