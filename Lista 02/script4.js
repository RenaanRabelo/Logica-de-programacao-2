//O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor
// e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja
// de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
// calcular e escrever o custo final ao consumidor.

let custofabrica = parseFloat(prompt("Digite o custo de fábrica de um carro: "));

let distribuidor = custofabrica * 28 / 100;
let imposto = custofabrica * 45 / 100;
let custofinal = custofabrica + imposto + distribuidor;

document.write('O custo final do carro para o consumidor será de: R$' + custofinal.toFixed(2));