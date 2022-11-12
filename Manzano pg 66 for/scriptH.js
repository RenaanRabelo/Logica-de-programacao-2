/*
Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação
*/

let resultado = 1;

let base = parseInt(prompt("Digite o um número para a base: "));
let expoente = parseInt(prompt("Informe o expoente: "));

for (let contador = 0; contador < expoente; contador ++) {
    resultado = resultado * base
}

document.write(base + " elevado a " + expoente + " é igual a " + resultado);