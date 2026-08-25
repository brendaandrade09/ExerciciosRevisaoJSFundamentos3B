// EXERCÍCIO 35 - POLIMORFISMO
// Crie uma classe Pagamento com o método processar().
// Crie as classes Pix e Cartao herdando de Pagamento.
// Sobrescreva processar() em cada classe com uma mensagem diferente.
// Coloque as formas de pagamento em um array e execute o método de cada uma.
//
// Escreva sua solução abaixo:
class Pagamento{
    processar(){
        console.log("Pagamento sendo processado!");
    }
}

class Pix extends Pagamento{
    processar(){
        console.log("Pagamento de pix sendo processado!");
    }
}
class Cartao extends Pagamento{
    processar(){
        console.log("Pagamento de cartao sendo processado!");
    }
}

const pagamento = new Pagamento();
const pix = new Pix();
const cartao= new Cartao();
const formasPagamento=[pagamento, pix, cartao];
formasPagamento.forEach((tipoPagamento) => {
    console.log(tipoPagamento.processar());
})
