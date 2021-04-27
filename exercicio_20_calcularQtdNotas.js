/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de
cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, 
R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa
deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as
demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

//solução do professor, COMENTÁRIOS meus

//esta é a função que será chamada para fazer o cálculo
function sacarDinheiro(valorSaque) {
  let contador100 = 0  //variáveis para guardar a quantidade de notas
  let contador50 = 0
  let contador10 = 0
  let contador5 = 0
  let contador1 = 0
  let valorNota = calcularValorNota(valorSaque) 
  while (valorSaque >= valorNota) {
      switch (valorNota) {
          case 100:
              valorSaque -= 100 // qdo o valor da nota for 100, será repetido decrescimo de 100, até que o valor restante seja < 100
              contador100++  //quantas vezes entrou no laço
              break // quando o valor que sobra for < 100, sai deste laço, mas enquanto o que 
          case 50:  //sobra for > que o valor de alguma nota, entra no laço da nota adequada
              valorSaque -= 50
              contador50++
              break
          case 10:
              valorSaque -= 10
              contador10++
              break
          case 5:
              valorSaque -= 5
              contador5++
              break
          case 1:
              contador1++
              valorSaque -= 1
              break
      }

      valorNota = calcularValorNota(valorSaque)

  }
  return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
  if (valorSaque >= 100) {
      return 100
  } else if (valorSaque >= 50) {
      return 50
  } else if (valorSaque >= 10) {
      return 10
  } else if (valorSaque >= 5) {
      return 5
  } else if (valorSaque >= 1) {
      return 1
  }
}

//esta função é a que "passa o relatório" sobre as quantidades de notas usadas
function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
  let resultado = ''

  if (contador100 > 0) {
      resultado += `${contador100} nota(s) de R$ 100. `
  }

  if (contador50 > 0) {
      resultado += `${contador50} nota(s) de R$ 50. `
  }

  if (contador10 > 0) {
      resultado += `${contador10} nota(s) de R$ 10. `
  }

  if (contador5 > 0) {
      resultado += `${contador5} nota(s) de R$ 5. `
  }

  if (contador1 > 0) {
      resultado += `${contador1} nota(s) de R$ 1. `
  }

  return resultado
}

console.log(sacarDinheiro(153));
