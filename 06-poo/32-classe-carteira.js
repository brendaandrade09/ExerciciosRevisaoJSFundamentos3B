// EXERCÍCIO 32 - ENCAPSULAMENTO
// Crie uma classe CarteiraDigital com o campo privado #saldo.
// Crie os métodos adicionarCredito(valor), realizarPagamento(valor) e consultarSaldo().
// Não permita pagamentos maiores que o saldo disponível.
//
// Escreva sua solução abaixo:
class CarteiraDigital {
    #saldo = 0;
    adicionarCredito(valor) {
        if (valor > 0) this.#saldo += valor;
    }
    consultarSaldo() {
        return console.log(`Seu saldo é R$${this.#saldo},00.`);
    }
    realizarPagamento(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor; console.log(`Você realizou um pagamento de R$${valor},00.`);
        } else { console.log("Saldo insuficiente, você não pode realizar este pagamento!"); }
    }
}


const contaBeren = new CarteiraDigital();
contaBeren.adicionarCredito(100);
console.log(contaBeren.consultarSaldo());
contaBeren.realizarPagamento(150);
console.log(contaBeren.consultarSaldo());
