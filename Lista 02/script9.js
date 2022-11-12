//Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
// PRESTACAO=VALOR+((VALOR*TAXA/100) *TEMPO).

let valor, taxa, tempo, prestacao;

valor = parseFloat(prompt("Digite o valor da prestação: "));
taxa = parseFloat(prompt("Digite o valor da taxa de juros: "));
tempo = parseFloat(prompt("Informe o tempo de atraso: "));

prestacao = valor + (valor * taxa / 100) * tempo;

document.write("O valor da prestação será de: R$" + prestacao.toFixed(2));