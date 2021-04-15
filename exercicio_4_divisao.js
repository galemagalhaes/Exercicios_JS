/*Crie uma função que irá receber dois valores, o dividendo e o divisor. 
A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

function divisao(dividendo, divisor){
    resultado = dividendo/divisor;
    resto = dividendo%divisor;
    console.log("O resultado da divisão é" , resultado, "e o resto da divisão é", resto);
}

divisao(40, 8);
divisao(45, 8);
divisao(49, 7);
divisao(88, 7);

//outra forma de fazer
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)