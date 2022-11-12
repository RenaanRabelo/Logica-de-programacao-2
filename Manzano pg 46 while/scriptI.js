/*
Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
somatório e a média aritmética dos valores lidos.
*/

let contador = 0;
let numero = 0;
let soma = 0;
let media = 0;

while (contador < 10) {
    numero = parseInt(prompt("Digite um número: "));
    soma = soma + numero;
    media = soma / 10;
    contador = contador + 1;
}

document.write("A soma dos valores é: " + soma + '<br>');
document.write("A média dos valores é: " + media);
