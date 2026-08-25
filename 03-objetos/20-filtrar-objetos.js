// EXERCÍCIO 20 - FILTRANDO OBJETOS
// Crie um array com cinco funcionários contendo nome e salario.
// Utilize filter() para selecionar funcionários com salário acima de R$ 3.000.
// Mostre o novo array.
//
// Escreva sua solução abaixo:
const funcionarios = [
    { nome: "Beren", salario: 6100 },
    { nome: "Lukz", salario: 800 },
    { nome: "Link", salario: 1000 },
    { nome: "Bella", salario: 600 },
    { nome: "Thalis", salario: 3100 }
]
const ricos = funcionarios.filter((funcionario) => funcionario.salario > 3000);
console.log(ricos);
