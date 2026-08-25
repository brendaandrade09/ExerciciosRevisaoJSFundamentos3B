// EXERCÍCIO 29 - ARRAY EM JSON
// Crie um array com três objetos de tarefas contendo id, descricao e concluida.
// Converta o array para JSON e mostre o resultado.
//
// Escreva sua solução abaixo:
const tarefas = [
    {descricao: "Acordar", id: 1, concluida: true},
    {descricao: "Comer", id: 2, concluida: true},
    {descricao: "Estudar", id: 3, concluida: false},
];
const json = JSON.stringify(tarefas);
console.log(json);
