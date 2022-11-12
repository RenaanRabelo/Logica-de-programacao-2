// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
// 1 até 500.

let numeros = 1;
let soma = 0;

do {
    if (numeros % 2 == 0){
        soma = soma + numeros;
        numeros ++;
    }
    else {
        numeros ++;
    }
} while (numeros <= 500);

document.write(soma);