var dinos = [
  "Tricerátops",
  "tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Espinossauro",
];

console.table(dinos);

var elementoProcurado = "Brontossauro";
var posição = dinos.indexOf(elementoProcurado);
console.log("o " + elementoProcurado + " está no índice " + posição);

var elementoProcurado = "tiranossauro Rex";
var posição = dinos.indexOf(elementoProcurado);
console.log("o " + elementoProcurado + " está no índice " + posição);

var elementoProcurado = "Estegossauro";
var posição = dinos.indexOf(elementoProcurado);
console.log("o " + elementoProcurado + " está no índice " + posição);

//criandocópia de array (vetor)
var copia1 = dinos.slice();//.slice() faz um cópia real do item de vetor
console.log("vetor cópia1");
console.table(cópia1);

var copia2 = dinos.slice(1, 3); // .slice(1,3) determino onde começa e onde termina a cópia
console.log("vetor copia 2");
