// Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius.
// A fórmula de conversão é C=(F-32) *(5/9), sendo F a temperatura em Fahrenheit
// e C a temperatura em Celsius.

let grausf, grausc;

grausf = parseFloat(prompt("Digite a temperatura em graus Fahrenheit: "));

grausc = (grausf - 32) * (5/9);

document.write(grausf + "ºF equivalem a " + grausc.toFixed(1) + "ºC")