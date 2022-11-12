/*
Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500.
*/

let soma = 0;

for (numeros = 1; numeros <= 500; numeros ++) {
    if (numeros % 2 == 0) {
        soma = soma + numeros;
    }
    
}

alert(soma);