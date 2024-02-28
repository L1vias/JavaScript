//Ccondição simples única
var anonascimento = 2002;

if (anonascimento > 2003) console.log(`A pessoa nesceu depois de 2003!`);

if (anonascimento < 2003) console.log(`A pessoa nasceu antes de 2003!`);

if (anonascimento == 2003) console.log(`A pessoa nasceu antes de 2003!`);

//condicional simples if-else
var anonascimento = 2002;
if (anonascimento > 2000) console.log(`a pessoal nasceu depois de 2000!`);
else console.log(`A pessoa nasceu antes de 2000!`);

//condicional composto com if
const login = "admin"; // digitado pelo usuario.
var senha = "admin"; // digitado pelo usuario.

//------------------------------------------\\
const loginUser = "admin"; //banco de dados
const senhaUser = "admin"; //banco de dados
//-------------------------------------------\\

if (login == loginUser && senha == senhaUser) // && significa E -- || significa OU
  console.log(`acesso permitido!`);
  else
console.log(`acesso negado!`);

//função sinaleiro
function sinaleiro(cor){
    if (cor == "vermelho")
    console.log(`pare`);

    else if (cor == "Amarelo")
    console.log(`preste atenção`);

    else if (cor == "verde")
    console.log(`siga`);
    else
    console.log(`Você informou cores diferentes de verde, amarelo ou vermelho`)
}
sinaleiro("vinho");

// desvio condicional if com bloco de comandos 
console.log(`--------------------------------------------`)
var idade = 18

if (idade <=18){
    console.log("entrou no if...")
idade++
console.log("incrementei a idade...")
console.log(`a nova idade é ${idade}`)
console.log(`agora estou saindo do bloco de codigos if`);
}
console.log(`terminei!`)

//desvio condicional is inline (ternário)
//validação (algo > algumacoisa)
//?(if)
// : (else)
//se for falso
//testedevalidação == teste ? "bla bla" :("ble ble")
var preco = 500;

var resultado = preco <=100 ? "ta barato" : "vish ta caro!";

if (preco <=100)
console.log(`Ta barato!`)
else
console.log(`vish ta caro!`)
