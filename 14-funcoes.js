function saudacao(nome) {
 console.log(`Olá ${nome}, seja bem vindo!`);
}

saudacao("L&L");
saudacao("Anthony")
saudacao("Najulia") 

//criando uma função que soma dois valores, retornando um resultado
function somar(valor1,valor2) {
return valor1 + valor2;
}

console.log(`5 + 3 = ${somar(5,3)}`);
console.log(`12 + 8 = ${somar(12,8)}`);
console.log(`6,5 + 2,12 = ${somar(6.5, 2.12)}`);

var v1 = 9;
var v2 = 6;

console.log(`v1 + v2 = ${somar(v1, v2)}`);
 
//Criando uma função que calcula e retorna o desconto em uma vendda 
function desconto(valorvenda,desc) {
    return (valorvenda * desc) / 100;
}
var Totalpedido = 300;
var totalDesconto = desconto(Totalpedido, 5);

console.log(`---------------------------------------------------------`)
console.log(`Total do pedido: R$${Totalpedido}`)
console.log(`Total dos descontos: R$${totalDesconto}`)
console.log(`Valor da venda: R$${Totalpedido - totalDesconto}`)
console.log(`---------------------------------------------------------`)

// Criando uma função que aprensenta uma pessoa 
function apresentaPessoa(nome,idade,cidade){
    console.log(`Apresento a vocês: ${nome}, que tem ${idade} e mora em ${cidade}!`
    );
}
apresentaPessoa("L&L", 17, "Barra Bonita");
apresentaPessoa("Ana Julia", 17, "Jaú");