class Pessoa {
    constructor(pNome, pIdade) {
        this.nome = pNome;
        this.nome = pIdade;
    }
    apresentarSe() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
    envelhecer (){
        this.idade++;
    }
}