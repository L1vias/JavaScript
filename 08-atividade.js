class Aluno {
  constructor(ra, nome, anonascimento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.anonascimento = anonascimento;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.anonascimento;
  }
  apresentar() {
    console.log(
      `Olá meu nome é ${
        this.nome
      } e tenho ${this.calcularIdade()}. Estou cursando o ${this.curso}`
    );
  }
}

const aluno1 = new Aluno(3689, "Livia", 2007, "Desenvolvimento de sistemas");
aluno1.apresentar();
console.log(
  `-----------------------------------------------------------------------------`
);
//crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamannho (P| M | G)
// Crie e utilize uma classe "Sorvete" contendo as propriedades : sabor, preço e tamanho (P | M | G)
// Crie um sorvete de morango grande
// Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51

class sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  getPreco() {
    return this.preco; // proteção
  }
  sorvete() {
    console.log(
      `sabor = ${this.sabor}, preço = ${this.getPreco()}, tamanho = ${
        this.tamanho
      }`
    );
  }
  setPreco(novopreco) {
    this.preco = novopreco; // MUDAR O PREÇO "SET"
  }
}

const morango = new sorvete("morango", 6, "G");
morango.sorvete();

const chocolate = new sorvete("chocolate", 4, "P");
chocolate.sorvete();

const melancia = new sorvete("melancia", 5, "M");
melancia.sorvete();

morango.setPreco(10.51);
morango.sorvete();

console.log(
  "======================================================================"
);

function compararStrings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compararStrings("hello", "hello"));
console.log(compararStrings("JavaScript", "JavaScript"));
console.log(compararStrings("OpenAI", "OpenAI"));
console.log(compararStrings("Aplle", "Orange"));

function extrairNumero(str) {
  return str.match(/\d+/g).map(Number);
}

console.log(extrairNumero("Tenho 5 bananas e 8 melancias"));
console.log(extrairNumero("A temperatura é de -01 graus"));
console.log(extrairNumero("O número de telefone é 36221635"));

function inverterOrdemPalavras(frase) {
  return frase.split(" ").reverse().join(" ");
}

console.log(inverterOrdemPalavras(" menina linda"));
console.log(inverterOrdemPalavras("A cor azul é bela"));
console.log(inverterOrdemPalavras("Amigo Jesus te ama"));
