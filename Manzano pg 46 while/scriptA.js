// Exercício A
// Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

var contadora = 1;
var numero = parseInt(prompt("Digite um valor: "));
while (contadora < 11) {
    document.write(numero + " * " + contadora + " = " + numero * contadora + "</br>");
        contadora++;
}