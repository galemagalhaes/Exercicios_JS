/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/ 

function jurosSimples (Inicial, taxa, periodo){
   valorJurosSimples = (Inicial * taxa * periodo)
   valormontanteSimples = (Inicial + valorJurosSimples)
   montanteSimples = `R$ ${valormontanteSimples.toFixed(2).toString().replace(".",",")}`
   console.log("Ao final do período de", periodo, "meses, com taxa de juros compostos de", taxa,"% ao mês, o valor da aplicação é:", montanteSimples)
}

jurosSimples(100,0.1,2)

function jurosComposto (Inicial2, taxaC, periodo2){
    valorComposto = (Inicial2 * ((1 + taxaC )** periodo2))
    montanteComposto = `R$ ${valorComposto.toFixed(2).toString().replace(".", ",")}`
    console.log("Ao final do período de", periodo2, "meses, com taxa de juros compostos de", taxaC,"% ao mês, o valor da aplicação é:", montanteComposto)
}
 
jurosComposto(100,0.1,2)


//outra forma de fazer
function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
