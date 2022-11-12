/*
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário.
*/

let numero = 0;
let maior = 0;
let menor = 0;

while (numero >= 0) {
    numero = parseInt(prompt("Digite um número positivo para continuar ou um negativo para parar: "));
    if (numero >= 0) {
        if (numero > maior) {
            maior = numero;
        }
        else {
            menor = numero;
        }
    }
}

document.write("O maior número digitado foi " + maior + ", e o menor foi " + menor);