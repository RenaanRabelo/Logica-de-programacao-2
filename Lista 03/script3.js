//Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro
//valor pelo segundo.

let A, B, diferenca;

A = parseInt(prompt("Informe um número: "));
B = parseInt(prompt("Informe mais um número: "));

diferenca = A - B;
quadrado = diferenca ** 2;

document.write("O quadrado da diferença de " + A + " - " + B + " é: " + quadrado);