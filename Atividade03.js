//01-CRIAR ARRAY
var fruta = ["Banana", "maçã", "Pera", "Uva", "Morango"];
console.log(fruta);
console.log(fruta[0]);
console.log("");
console.table(fruta);

//02-adicionar Tangerina
fruta.push("tangerina");
console.table(fruta);

//03adicionar Goiaba no inicio
fruta.unshift("goiaba");
console.table(fruta);

console.log(fruta[5]);

//04-mostrar indice 5
console.log(fruta[5]);

//05-Excluir Uva
//frutas.splice(4,1);

var position = fruta.indexOf("Uva");
console.log(position);
console.log(position, 1);
console.table(fruta);

//cópia de array
var copia = fruta.slice(2, 5);
console.table(copia);

// copia 06
var copiarray = fruta.slice(2, 5);
console.table(copiarray);

//segunda parte
var number = [1, 2, 3, 4, 5];
console.table(number);

//imprimir o 3 elemento
console.log(number[2]);

 //copia vetor
var copianumbe = number.slice();
console.table(copianumber);

 //dobro do original
copianumber[0] = numer[0] * 2;
copianumber[1] = numer[1] * 2;
copianumber[2] = numer[2] * 2;
copianumber[3] = numer[3] * 2;
copianumber[4] = numer[4] * 2;
console.table(copia1);


