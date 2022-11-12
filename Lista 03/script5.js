//Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.

let cotacao, real, dolar;

cotacao = parseFloat(prompt("Informe a cotação atual do dólar: "));
real = parseFloat(prompt("Digite a quantidade de reais que você tem: "));

dolar = real / cotacao;

document.write("A quantidade de dolares que você tem é igual a: US$", dolar.toFixed(2));