// Programa solicita as dimensões do trapézio, calcula e informa a área

var bmaior = parseFloat(prompt("Informe o valor da base maior do trapézio: "));
var bmenor = parseFloat(prompt("Informe o valor da base menor do trapézio: "));
var altura = parseFloat(prompt("Informe a altura do trapézio: "));

area = (bmaior + bmenor) * altura / 2

alert("O valor da área do trapézio é: " + area)