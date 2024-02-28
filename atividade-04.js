var matriz = [
  [1, 2, 0],
  [0, 8, 3],
  [7, 4, 8],
];
console.table(matriz);

console.log(matriz[0][0], matriz[1][1], matriz[2][2]);
console.log(matriz[2][2], matriz[1][1], matriz[0][0]);
console.log(matriz[0][2], matriz[1][1], matriz[2][0]);
console.log(matriz[2][0], matriz[1][1], matriz[0][2]);

//exibir ao usuario valores das diagonais (4)

var usuario = ["Livia Solla", 17, "roxo", "banana", "Orlando", "Lua"];
console.log("Olá", usuario[0], "Seja bem-vindo ao nosso sistema!");
console.log(
  "Você mora no endereço",
  usuario[4],
  "e tinha um pet chamada",
  usuario[5]
);
console.log("Sua idade é", usuario[1], "e gosta muito da fruta", usuario[3]);
console.log("Sua cor favorita é", usuario[2]);
