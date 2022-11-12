//Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma (variável S) do segundo com o quarto valor.

let A, B, C, D, P, S;

A = parseInt(prompt("Informe um número: "));
B = parseInt(prompt("Informe outro número: "));
C = parseInt(prompt("Informe outro número: "));
D = parseInt(prompt("Informe mais número: "));

P = A * C;
S = B + D;

document.write("O produto do primeiro valor com o terceiro é: " + P + "<br>");
document.write("A soma do segundo valor com o quarto é: " + S);