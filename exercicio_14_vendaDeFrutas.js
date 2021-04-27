/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta 
e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, 
retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default,
que retornará uma mensagem de erro no console.*/
function vendaDeFrutas(fruta) {
  switch (fruta) {
    case "maçã":
    case "Maçã":
    case "MAÇÃ":
      return "Não vendemos esta fruta aqui"
    case "kiwi":
    case "Kiwi":
    case "KIWI":
      return "Estamos com escassez de kiwi"
    case "melancia":
    case "Melancia":
    case "MELANCIA":
      return "Aqui está, são 3 reais o quilo"
    default:
      return "Erro"
  }
}
console.log(vendaDeFrutas("maçã"));
console.log(vendaDeFrutas("Maçã"));
console.log(vendaDeFrutas("MAÇÃ"));
console.log(vendaDeFrutas("kiwi"));
console.log(vendaDeFrutas("melancia"));
console.log(vendaDeFrutas("laranja"));
console.log(vendaDeFrutas(0));

//correção do professor
function venderFruta (fruta) {
  switch (fruta) {
      case 'maçã':
          console.log('Não vendemos esta fruta aqui.')
          break
      case 'kiwi':
          console.log('Estamos com escassez de kiwi.')
          break
      case 'melancia':
          console.log('Aqui está, custa R$ 3,00 o quilo.')
          break
      default:
          console.log('Erro, fruta inválida.')
  }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')