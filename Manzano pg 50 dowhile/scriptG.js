/*
Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10.
*/

let contador = 1;

do {
    contFatorial = 1;
    fatorial = 1;

    do {
        fatorial = fatorial * contFatorial;
        contFatorial ++;
    } while (contFatorial <= contador);

    document.write("O fatorial de " + contador + " é " + fatorial + "<br>");
    contador = contador + 2;

} while (contador <= 10);