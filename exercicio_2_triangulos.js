/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function triangulos(medida1, medida2, medida3){
    if(medida1 == medida2 && medida2 == medida3){
        return "Equilátero"
    }else if(medida1 == medida2 || medida2 == medida3 || medida3 == medida1){
            return "Isósceles"
    }else {
        return "Escaleno"
    }       
    
}
console.log(triangulos(2, 2, 2));
console.log(triangulos(3, 2, 3));
console.log(triangulos(2, 3, 4));