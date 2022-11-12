//Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
// Volume = π*Raio2*Altura

let volume, raio, altura;

raio = parseFloat(prompt("Digite o valor do raio da lata de óleo: "));
altura = parseFloat(prompt("Digite a altura da lata de óleo: "));

volume = 3.14 * raio ** 2 * altura;

document.write("O volume da lata de óleo é equivalente a: ",volume);