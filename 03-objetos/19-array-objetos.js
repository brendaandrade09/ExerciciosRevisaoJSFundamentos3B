// EXERCÍCIO 19 - ARRAY DE OBJETOS
// Crie um array com três objetos de jogos.
// Cada jogo deve possuir titulo, plataforma e classificacao.
// Percorra o array e mostre o título e a plataforma de cada jogo.
//
// Escreva sua solução abaixo:
const jogos = [
    {titulo: "Super Mario Odyssey", plataforma: "Nintendo", classificacao: 10},
    {titulo: "Sonic", plataforma: "Xbox", classificacao: 6},
    {titulo: "Zelda", plataforma: "Nintendo", classificacao: 12}
];
jogos.forEach((jogo) => {
    console.log(`O jogo ${jogo.titulo} pode ser jogado na plataforma ${jogo.plataforma}.`)
});
