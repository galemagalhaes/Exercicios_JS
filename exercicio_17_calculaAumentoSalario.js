/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e 
imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o
plano é inválido.*/

function calculaAumentoSalario(salario, plano) {
  switch (plano) {
    case "A":
      console.log(salario * 1.1)
      break
    case "B":
      console.log(salario * 1.15)
      break
    case "C":
      console.log(salario * 1.2)
      break
    default:
      console.log("Plano inválido")
  }
}

calculaAumentoSalario(1000, "A");
calculaAumentoSalario(1000, "B");
calculaAumentoSalario(1000, "C");
calculaAumentoSalario(1000, "D");
calculaAumentoSalario(1000, 3);

//resolução do professor
function calcularReajuste(plano, salarioAtual) {
  switch (plano) {
      case 'A':
          return salarioAtual * 1.1
      case 'B':
          return salarioAtual * 1.15
      case 'C':
          return salarioAtual * 1.2
      default:
          return 'Plano inválido.'
  }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
