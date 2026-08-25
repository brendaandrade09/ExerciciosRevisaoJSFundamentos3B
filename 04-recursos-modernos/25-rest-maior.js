// EXERCÍCIO 25 - REST PARAMETERS
// Crie uma função maiorNumero que receba uma quantidade indefinida de números
// utilizando Rest. A função deve retornar o maior valor recebido.
// Teste com pelo menos seis números.
//
// Escreva sua solução abaixo:

// function somar(...numero){
//     return numero.reduce((total, numero) => total + numero, 0);
// }
// console.log(somar(10, 20, 30, 40, 50))

function maiorNumero(...numero) {
    return numero.reduce((acumulador, numeroAtual) => {
        if (acumulador >= numeroAtual) {
            return acumulador;
        } else {
            return numeroAtual;
        }
    });



    // return Math.max(...numero);
}

console.log(maiorNumero(1, 15, 3, 4, 5, 6));

