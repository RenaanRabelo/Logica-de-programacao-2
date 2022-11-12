/*
Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados.
*/

let A, B, C;

A = parseInt(prompt("Digite o valor do lado A do triângulo: "));
B = parseInt(prompt("Digite o valor do lado B do triângulo: "));
C = parseInt(prompt("Digite o valor do lado C do triângulo: "));

if (A < B + C && B < A + C && C < A + B) {
    document.write("Os lados formam um triângulo");
}
else {
    document.write("Os lados não formam um triângulo");
}