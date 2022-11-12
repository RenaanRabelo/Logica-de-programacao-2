/*
Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
pares situados na faixa numérica de 50 a 70.
*/

let contador = 50;
let soma = 0

while (contador < 71) {
    if (contador % 2 == 0) {
        soma = soma + contador;
        contador = contador + 1;
    }
    else {
        contador = contador + 1;
    }
}

let media = soma / 11;

document.write("A soma dos números pares entre 50 e 70 é : " + soma + "<br>");
document.write("A média dos números pares entre 50 e 70 é : " + media);