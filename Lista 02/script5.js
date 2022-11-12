//Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit.
//A fórmula de conversão é F = (C/5)*9+32, sendo F a temperatura em Fahrenheit e C a temperatura
// em Celsius.

let grausc = parseFloat(prompt("Digite a temperatura em graus Celsius: "));

let grausf = (9 * grausc + 160) / 5;

document.write(grausc + "ºC equivalem a " + grausf + "ºF");