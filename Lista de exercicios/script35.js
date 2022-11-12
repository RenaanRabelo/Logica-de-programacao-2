/*
Um posto está vendendo combustíveis com a seguinte tabela de descontos:
Álcool
até 20 litros, desconto de 3% por litro
acima de 20 litros, desconto de 5% por litro
Gasolina
até 20 litros, desconto de 4% por litro
acima de 20 litros, desconto de 6% por litro
Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.
*/

let litrosv, combustivel, desconto, precoanterior, preco;

litrosv = parseFloat(prompt("Digite quantos litros de combustível foram vendidos: "));
combustivel = prompt("Digite G para gasolina ou A para álcool: ");

while (combustivel != "G" && combustivel != "A") {
    combustivel = prompt("Opção inválida, Digite G para gasolina ou A para álcool: ");
}

if (combustivel == "A") {
    if (litrosv <= 20) {
        desconto = (3.30 * 3) / 100;
        precoanterior = 3.30 - desconto;
        preco = precoanterior * litrosv;
        document.write("O cliente vai pagar: R$" + preco.toFixed(2));
    }
    else{
        desconto = (3.30 * 5) / 100;
        precoanterior = 3.30 - desconto;
        preco = precoanterior * litrosv;
        document.write("O cliente vai pagar: R$" + preco.toFixed(2));
    }
}

if (combustivel == "G") {
    if (litrosv <= 20) {
        desconto = (2.90 * 4) / 100;
        precoanterior = 2.90 - desconto;
        preco = precoanterior * litrosv;
        document.write("O cliente vai pagar: R$" + preco.toFixed(2));
    }
    else {
        desconto = (2.90 * 6) / 100;
        precoanterior = 2.90 - desconto;
        preco = precoanterior * litrosv;
        document.write("O cliente vai pagar: R$" + preco.toFixed(2));
    }
}