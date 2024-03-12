//Supondo que a populção de um país A seja de a habitantes com uma taxa de crescimento de 3% e que
//a população de um país B seja de b habitantes, com uma taxa anual de crescimento de 1,5%, fazer um
//algoritmo que calcule e escreva o número de anos nescessarios para que a população do pais A ultrapasse
// ou iguale a população do país B, mantidas essas taxas de crescimento.

// var paisA = 100.003;
// var paisB = 300.004;
// var ano = 0;
// while (paisA < paisB) {
//   paisB += paisB * 0.015;
//   paisA += paisA * 0.03;
//   ano++;
// }
// console.log(
//   `O número de anos nescessários para que a população do país A ultrapasse ou iguale a população do pais B é de ${ano} anos`
// );

// console.log("-----------------------------------------------");
// console.log("             ATIVIDADE DESAFIO      ");
// console.log("-----------------------------------------------");

//Criar um "jogo da velha" que mostre as informações dentro da imagem abaixo.
//inserir as informações de forma randomica. informar ao final quem ganhou X ou O.

// var jogo = X
// var jogo1 = 0

// var vitoria = 0
// var derrota = 0

console.log(`___|___|___`);
console.log(`___|___|___`);
console.log(`   |   |   `);

// const tabuleiro = [
//     [" ", " ", " "],
//     [" ", " ", " "],
//     [" ", " ", " "],
//   ];
//   let jogadorX = "X";
//   let jogadorO = "O";

//   function jogar(jogador) {
//     let linha = Math.floor(Math.random() * 3);
//     let coluna = Math.floor(Math.random() * 3);
//     if (tabuleiro[linha][coluna] == " ") tabuleiro[linha][coluna] = jogador;
//     else {
//       jogar(jogador);
//     }
// }

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorAtual = "X";

function jogar(jogador) {
  let linha, coluna;

  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[0][0] !== " ");

  tabuleiro[linha][coluna] = jogador;
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function verificaVencedor(){
  for (let i = 0; i < 3; i++) {
   //verificando coluna
   if (
    tabuleiro[0][0] === tabuleiro[1][i] &&
    tabuleiro[1][i] === tabuleiro[2][i] &&
    tabuleiro [i][i] !== " "
  ) 
  {
    console.log(`o jgador ${tabuleiro[1][i]} ganhou`);
    return tabuleiro[1][i];
}

else if (
    tabuleiro[i][0] === tabuleiro[i][1] &&
    tabuleiro[i][1] === tabuleiro[i][2] &&
    tabuleiro [i][i] !== " "
   ) {
    console.log(`o jogador ${tabuleiro[1][i]} ganhou`);
    return tabuleiro[1][i];
  }

  else if (
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro [1][1] !== " "
    ) {
      console.log(`o jogador ${tabuleiro[1][i]} ganhou`);
    return tabuleiro[1][i];
    } else if 
    (
      tabuleiro[0][2] === tabuleiro[1][1] &&
      tabuleiro[1][1] === tabuleiro[2][0] &&
      tabuleiro [1][1] !== " "
    ) {
      console.log(`o jogador ${tabuleiro[1][i]} ganhou`);
    return tabuleiro[1][i];
    }
    
  }
  }
