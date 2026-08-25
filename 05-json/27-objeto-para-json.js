// EXERCÍCIO 27 - OBJETO PARA JSON
// Crie um objeto reserva com codigo, hospede e numeroNoites.
// Converta o objeto para JSON utilizando JSON.stringify()
// e mostre o resultado.
//
// Escreva sua solução abaixo:
const reserva = { hospede: "Fulano", codigo: 101, numeroNoites: 5 };
const json = JSON.stringify(reserva);
console.log(json);
