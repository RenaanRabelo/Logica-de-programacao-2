//Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
//1 até 500.

var contadora = 0;
var soma = 0;

while (contadora < 501) {
    soma = soma + contadora;
    contadora = contadora + 2;
}
alert(soma)