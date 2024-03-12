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
      `Olá meu nme é ${
        this.nome
      } e tenho ${this.calcularIdade()}. Estou cursando o ${this.curso}`
    );
  }
}

const aluno1 = new Aluno(3689, "Livia", 2007, "Desenvolvimento de sistemas");
aluno1.apresentar();
