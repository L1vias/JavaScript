//função retorno de idade
function idade(ano2) {
  return 2024 - ano2;
}
var nome = "L&L";
console.log(`Olá eu sou a ${nome} e tenho ${idade(2007)} anos de idade!`);

console.log(`------------------------------------------`);
//Atividade 2
function media(litros, kml) {
  return litros * kml;
}
console.log(`Ele pode viajar: ${media(45, 12)} kms`);

console.log("------------------------atividade 2-----------------");

function votar(idade) {
  if (idade >= 16 && idade < 18)
    console.log(`você pode votar, mais não é obrigatório`);
  else if (votar < 16) {
    console.log(`você não pode votar`);
  } else console.log(`você pode votar`);
}
votar(10);

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log(`você não pode votar`);
      break;

    default:
      console.log(`você pode votar`);
      break;
  }
}
