/*
Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10.
*/

for (let contador = 1; contador <= 10; contador = contador + 2) {
    let contFatorial = 1;
    let fatorial = 1;
    for (contFatorial = contFatorial; contFatorial <= contador; contFatorial++) {
        fatorial = fatorial * contFatorial;
    }
    document.write("O fatorial de " + contador + " é " + fatorial + "<br>");
}