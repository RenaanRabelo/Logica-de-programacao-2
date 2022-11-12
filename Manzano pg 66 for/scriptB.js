//Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

let numeros = parseInt(prompt("Digite um número para ver sua tabuada: "));

for (let contador = 0; contador <= 10; contador++) {
    document.write(numeros + " X " + contador + " = " + numeros * contador + "<br>");
}