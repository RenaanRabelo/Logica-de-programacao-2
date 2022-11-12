/*
Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
média.
*/

numero = 0
soma = 0
media = 0
quantidade = 0

do {
    numero = parseInt(prompt('Digite um número positivo para continuar ou um negativo para parar: '));
    if (numero >= 0) {
        soma = soma + numero;
        quantidade = quantidade + 1;
    }
} while (numero >= 0);

media = soma / quantidade;

document.write("A soma dos números digitados é: " + soma + "<br>");
document.write("A média dos números digitados é: " + media + "<br>");
document.write("O total de números digitados é: " + quantidade);