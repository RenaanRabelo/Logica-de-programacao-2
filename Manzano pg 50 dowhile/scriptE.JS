/*
Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
total do somatório da fatorial de cada valor lido.
*/

let contador = 1;
let soma = 0;

do {
    let numero = parseInt(prompt("Digite um número: "));
    contadorFa = 1;
    fatorial = 1;

    do {
        fatorial = fatorial * contadorFa;
        contadorFa ++;
    } while(contadorFa <= numero);

    soma = soma + fatorial;
    contador ++;
} while (contador <= 15);

document.write("A soma dos fatoriais é: " + soma);