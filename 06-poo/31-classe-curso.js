// EXERCÍCIO 31 - CLASSE E INSTÂNCIAS
// Crie uma classe Curso com constructor para nome, duracao e modalidade.
// Crie um método exibirInformacoes() e duas instâncias da classe.
// Mostre os dados dos dois cursos.
//
// Escreva sua solução abaixo:
class Curso {
    constructor(nome, duracao, modalidade) {
        this.nome = nome;
        this.duracao = duracao;
        this.modalidade = modalidade;
    }
    exibirInformacoes() {
        console.log(`O curso ${this.nome} dura ${this.duracao} semestres e sua modalidade é ${this.modalidade}.`)
    }
}
const letras = new Curso("Letras", 6, "presencial");
letras.exibirInformacoes();
const farmacia = new Curso("Farmácia", 8, "online");
farmacia.exibirInformacoes();
