//Laço de repetição for
//escrever para usuario 1000x "Prestar mais tenção nas aulas"

for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}

//mostrando números impares com IF

//escreva todos os números de 1 a 20
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

//escreva todos od números de 1 a 20 com FOR
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
}

//Dado de um vetor com números 5,6,7,8,14,0,9,7,2.
//calcule e exiba a somátória de seus elementos.
//FOR
// VAR= cria variavel
//CONST= cria constante
//LET= criar variavel funcional dentro de um grupo de códigos
//tudo que esta dentro de chaves é um grupo de códigos

const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;
for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}
console.log(`A soma dos elementos do array é: ${somar}`);

//dado um vetor com númeroa 5,6,8,14,0,9,7,2.
//multiplique todos os seus elementos por 3 utilizando o loop FOR.
//em seguida, mostre o novo vetor.

let num = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(num);
for (let i = 0; i < num.length; i++) {
  num[i] *= 3;
}
console.table(num);

//Dada a matriz 2x3, escrever para o usuario todos os seus elementos
//com as respectivas posições da matriz
//[8,4,1]
//[3,7,8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`);
  }
}
