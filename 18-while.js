// let contador = 0;

// while (contador < 5) {
//   console.log(contador);
//   contador++;
// }
// //while testa a condição antes de entrar no laço de repetição.
// //se a condição for inicialmente falsa, o laço não é executado nenhuma vez.

// var x = 20;

// while (x >= 10) {
//   console.log(`entre no laço while...`);
//   x = -0;
// }
// console.log(`terminei`);

// // let limite = 500;
// // let fatura = 0;

// while (fatura <= limite){
//   let gasto = Math.random() * 100; //Math.random() cria valor aleatório entra 0 e 1
//   fatura += gasto
//   console.log(`gastei R$ ${gasto.toFixed(2)}Fatura: R$ ${fatura.toFixed(2)}`);
// //tofixed(2) altear o valor mostrado para o usuario em duas casas depois da virgula 
//   fatura > limite 
//   && (`Estouro o limite do cartão:`)
// }
// //&& faz somente um IF, sem else.

// //Estourando o limite 
// console.log(`--------------------------------------------`)
// var limite = 500
// var fatura = 0 

// do {
//   let gasto = Math.random() * 100; 
//   fatura += gasto
//   console.log(`gastei R$ ${gasto.toFixed(2)}-----Fatura: R$ ${fatura.toFixed(2)}`);
//   fatura > limite &&  console.log(`Estourou o limite do cartão`)
  
// }while ( fatura <= limite)

// //Jogo de cara ou coroa- melhor de três tentativas
//repetição - 3
//varriavel cara ou coroa -> aleatória
//placar - vitórias e derrotas
 
var rodada = 1
var moeda = "";
var vitoria = 0
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.3 ? "cara" : "coroa";
  escolhajogador = Math.random() >=0.5 ? "cara" : "coroa";

  if (escolhajogador == " cara "){
    console.log(`parabens, você ganhou!`)
    vitoria ++;
  }  else {
console.log(`Que pena, você perdeu!`);
derrota++;
  }
  rodada++;
  }
console.log(`--------------------------------`)
console.log(`             PLACAR             `)
console.log(`--------------------------------`)
console.log(`${vitoria> derrota ? " 💵 você ganhou! 🥳"
: "💸 você perdeu!🙁"}`)
console.log(`---------------------------------`)
