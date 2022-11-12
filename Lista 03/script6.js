//Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.

let A, B, C, quadA, quadB, quadC, soma;

A = parseInt(prompt("Digite um valor para A: "));
B = parseInt(prompt("Digite um valor para B: "));
C = parseInt(prompt("Digite outro valor para C: "));

quadA = A ** 2;
quadB = B ** 2;
quadC = C ** 2;
soma = quadA + quadB + quadC;

document.write("A soma dos quadrados dos três números é igual a: " + soma);