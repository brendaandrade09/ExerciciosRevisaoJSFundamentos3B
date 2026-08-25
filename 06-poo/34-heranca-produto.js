// EXERCÍCIO 34 - HERANÇA E SUPER
// Crie uma classe Produto com nome, preço e um método exibirDados().
// Crie a classe ProdutoDigital que herde de Produto e receba também o tamanhoArquivo.
// Utilize super() no constructor e sobrescreva exibirDados() incluindo o tamanho.
//
// Escreva sua solução abaixo:
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    exibirDados() {
        console.log(`${this.nome} | Preço: R$${this.preco},00`)
    }
}
class ProdutoDigital extends Produto {
    constructor(nome, preco, tamanhoArquivo) {
        super(nome, preco);
        this.tamanhoArquivo = tamanhoArquivo;
    }
    exibirDados() {
        console.log(`${this.nome} | Preço: R$${this.preco},00 | Tamanho do arquivo: ${this.tamanhoArquivo}`)
    }
}

const teclado = new Produto("Teclado", 50);
teclado.exibirDados();

const livroPdf = new ProdutoDigital("Percy Jackson", 30, 200);
livroPdf.exibirDados();