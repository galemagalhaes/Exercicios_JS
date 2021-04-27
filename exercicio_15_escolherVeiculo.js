/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a 
revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma 
estrutura switch, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas 
outras opções, retorne: “Tem certeza que não prefere este modelo?”. Caso seja especificado 
um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de 
automóvel aqui”.*/

function escolherVeiculo(tipo) {
  switch (tipo) {
    case "hatch":
      console.log("Compra efetuada com sucesso!")
      break
    case "sedan":
    case "motocicleta":
    case "caminhonete":
      console.log("Tem certeza que não prefere esse modelo?")
      break
    default:
      console.log("Não trabalhamos com esse tipo de automóvel aqui")
  }

}
escolherVeiculo("hatch");
escolherVeiculo("caminhonete");
escolherVeiculo("motocicleta");
escolherVeiculo("sedan");
escolherVeiculo("perua");

//correção do professor
function escolherCarro (modelo) {
  switch (modelo) {
      case 'hatch':
          return 'Compra efetuada com sucesso.'
      case 'sedan':
      case 'motocicleta':
      case 'caminhonete':
          return 'Tem certeza que não prefere este modelo?'
      default:
          return 'Não trabalhamos com este tipo de automóvel aqui.'
  }
}

console.log(escolherCarro('hatch'));
console.log(escolherCarro('motocicleta'));
console.log(escolherCarro('sedan'));
console.log(escolherCarro('caminhonete'));
console.log(escolherCarro('jetski'));