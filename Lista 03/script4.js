//Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

let cotacao, dolar, real;

cotacao = parseFloat(prompt("Informe a cotação atual do dólar: "));
dolar = parseFloat(prompt("Informe quantos dólares você tem: "));

real = dolar * cotacao;

document.write("A quantidade em reais que você tem é igual a: R$" + real.toFixed(2));