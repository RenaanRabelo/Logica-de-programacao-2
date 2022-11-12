/*
Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
do expoente.
*/

let contador, resultado, base, expoente;

contador = 0;
resultado = 1;

base = parseInt(prompt("Digite o um número para a base: "));
expoente = parseInt(prompt("Informe o expoente: "));

while (contador < expoente) {
    resultado = resultado * base;
    contador = contador + 1;
}

document.write(base + " elevado a " + expoente + " é igual a " + resultado);