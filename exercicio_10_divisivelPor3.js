/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function ehDivisivelPor3 (a){
  if  ( a % 3 == 0){
    return true
} else {
    return false}
} 
console.log(ehDivisivelPor3(3))
console.log(ehDivisivelPor3(33))
console.log(ehDivisivelPor3(25))
console.log(ehDivisivelPor3(5))
console.log(ehDivisivelPor3(1353))
