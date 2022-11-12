/*
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'.
*/

let qatual, qmaxima, qminima, qmedia;

qatual = parseInt(prompt("Digite a quantidade atual de produtos no estoque: "));
qmaxima = parseInt(prompt("Digite a quantidade maxíma do estoque: "));
qminima = parseInt(prompt("Digite a quantidade mínima do estoque: "));

qmedia = (qmaxima + qminima) / 2;

if (qatual >= qmedia){
    alert("Não efetuar a compra");
}
else{
    alert("Efetuar a compra");
}
