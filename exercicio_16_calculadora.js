/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa
recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com
os valoresnuméricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função
efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 
Crie um caso default para operações inválidas.*/

function calculadoraComString(numero1, sinal, numero2) {
  switch (sinal) {
    case '+':
      console.log(numero1 + numero2)
      break
    case '-':
      console.log(numero1 - numero2)
      break
    case '/':
      console.log(numero1 / numero2)
      break
    case '*':
      console.log(numero1 * numero2)
      break
    default:
      console.log("Operação inválida")
  }
}

calculadoraComString(1,"+",1);
calculadoraComString(2,"-",1);
calculadoraComString(4,"/",2);
calculadoraComString(1,"*",7);
calculadoraComString(1,".",1);
calculadoraComString(1,2,"n");
calculadoraComString(2,"",2);
