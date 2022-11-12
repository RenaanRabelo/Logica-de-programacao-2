//Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.

let A, B, C, soma, quadrado;

A = parseInt(prompt("Digite um valor: "));
B = parseInt(prompt("Digite outro valor: "));
C = parseInt(prompt("Digite mais um valor: "));

soma = A + B + C;
quadrado = soma ** 2;

document.write("O quadrado da soma dos 3 valores digitados é igual a " + quadrado);