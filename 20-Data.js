//criando uma objeto do tipo data
var Data1 = new Date();
console.log(Data1);

//Criando uma objeto do tipo "data" com data especifica date()
var Data2 = new Date("2005=05-12");
console.log(Data2);

//Extraindo partes de uma data
var Data3 = new Date("2006=07-12");
console.log(`Data: ${Data3}`);
console.log(`Ano: ${Data3.getFullYear()}`);
console.log(`Mês: ${Data3.getMonth() + 1}`);
console.log(`Dia: ${Data3.getDate()}`);

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
console.log(`Retornando o mês por escrito!`);
console.log(`Mês: ${mes[Data3.getMonth()]}`);

const Diasemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "QUinta-feira",
  "Sexta-feira",
];
console.log(`Dia da semana: ${Diasemana[Data3.getDay()]}`);

const datanasc = new Date("2007=08-03");
const dataAtual = new Date();

const diferenca = dataAtual.getTime() - datanasc.getTime();

const idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
console.log(`idade: ${idade}`);

console.log(`------------------------------------------------`)
const diferencaAnos =  dataAtual.getFullYear() - datanasc.getFullYear();
console.log(`diferença em anos: ${diferencaAnos}`);

if(dataAtual.getMonth() < datanasc.getMonth( )||
(dataAtual.getMonth() === datanasc.getMonth() &&
dataAtual.getDate() < datanasc.getDate())){
    console.log(`Ainda não fez aniversário!`);
    console.log(`Ìdade: ${diferencaAnos - 1}`)
}