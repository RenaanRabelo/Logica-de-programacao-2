/*
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário.
*/

let maior = 0;
let menor = 0;
let numero = 0;

do {
    numero = parseInt(prompt("Digite um número positivo para continuar ou um negativo para parar: "));
    if (numero >= 0) {
        if (numero > maior) {
            menor = maior;
            maior = numero;
        } else {
            menor = numero;
        }
    }
} while (numero >= 0);

document.write("O maior número digitado foi: " + maior + " e o menor foi: " + menor);