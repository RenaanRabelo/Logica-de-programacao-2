/*
Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
é F = 9C + 160 / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/

let C = 10;
let fah = (9 * C + 160) / 5;
document.write(C + " " + fah + "<br>");

for (let contador = 1; contador < 10; contador ++) {
    C = C + 10;
    fah = (9 * C + 160) / 5;
    document.write(C + " " + fah + "<br>");
}