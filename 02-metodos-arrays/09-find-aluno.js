// EXERCÍCIO 09 - FIND - ALUNO
// Crie um array de objetos com nome e matrícula de quatro alunos.
// Utilize find() para localizar o aluno com a matrícula 103.
// Mostre o aluno encontrado.
//
// Escreva sua solução abaixo:
const alunos = [
    { nome: "Mat", matricula: 101 },
    { nome: "Lukz", matricula: 102 },
    { nome: "Mel", matricula: 103 },
    { nome: "Jaque", matricula: 104 }
];
const aluno = alunos.find((procura) => procura.matricula === 103);
console.log(aluno);
