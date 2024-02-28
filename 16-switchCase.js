//implementação de condicional
var menuSelecionado = "Home";
switch (menuSelecionado) {
  case "Home":
    console.log(`você clicou no link Home`);
    break;
  case "Quem somos":
    console.log(`você clicou no link Quem somos`);
    break;
  case "contato":
    console.log(`você clicou no link contato`);
    break;
  default:
    console.log(`Opção inválida`);
    break;
}

console.log("---------------------------------------------------------");
var mes = 4;
switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log(`primeiro Trimestre`);
    break;
  case 4:
  case 5:
  case 6:
    console.log(`segundo Trimestre`);
    break;
  case 7:
  case 8:
  case 9:
    console.log(`terceiro Trimestre`);
}
