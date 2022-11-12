/*
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra.
*/

let quantidade, preco, total;

quantidade = parseFloat(prompt("Digite a quantidade de maçãs que você deseja comprar: "));

preco = 1.30;
total = preco * quantidade;

if (quantidade >= 12){
    preco = 1.00;
    total = preco * quantidade;
    document.write(quantidade + " maçãs custam R$" + total.toFixed(2));
}
else{
    document.write(quantidade + " maçãs custam R$" + total.toFixed(2));
}

