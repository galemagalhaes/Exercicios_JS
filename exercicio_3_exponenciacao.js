//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function exponenciacao(a,b){
    return a**b;
}

console.log(exponenciacao(2,2));
console.log(exponenciacao(9,2));
console.log(exponenciacao(2,8));
console.log(exponenciacao(12,12));
console.log(exponenciacao(7,10));
console.log(exponenciacao(25,2));
console.log(exponenciacao(3,2));


//outras forma de fazer
function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))