// EXERCÍCIO 30 - SIMULANDO RESPOSTA DE API
// Crie um objeto resposta com as propriedades status, quantidade e clientes.
// A propriedade clientes deve conter um array com dois objetos.
// Converta a resposta para JSON e depois novamente para objeto.
// Mostre o status e os clientes recebidos.
//
// Escreva sua solução abaixo:
const resposta={
    status : true,
    quantidade : 3,
    clientes : ["Fulano", "Beltrano"]
}
const json = JSON.stringify(resposta);
console.log(json);
const objetoNovamente = JSON.parse(json);
console.log(objetoNovamente);
console.log(resposta.status, resposta.clientes);