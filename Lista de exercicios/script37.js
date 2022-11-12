/*
Uma fruteira está vendendo frutas com a seguinte tabela de preços:
Morango:
Até 5kg = R$2.50 por kg / Acima de 5kg = R$2.20 por kg
Maçã:
Até 5kg = R$ 1,80 por Kg / Acima de 5kg = R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
*/

let morangos, macas, precomor, precomac, totalkg, totalpreco;

morangos = parseInt(prompt("Digite a quantidade de kg de morangos comprados: "));
macas = parseInt(prompt("Digite a quantidade de kg  de maçãs compradas: "));

if (morangos <= 5) {
    precomor = morangos * 2.50;
}
else {
    precomor = morangos * 2.20;
}

if (macas <= 5) {
    precomac = macas * 1.80;
}
else {
    precomac = macas * 1.50;
}

totalkg = macas + morangos;
totalpreco = precomor + precomac;

if (totalkg > 8 || totalpreco > 25) {
    totalpreco = totalpreco - (totalpreco * 10) / 100;
}

document.write("O cliente deverá pagar R$" + totalpreco.toFixed(2));