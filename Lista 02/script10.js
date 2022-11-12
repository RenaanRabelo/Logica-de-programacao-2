//Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos
//valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a 
//possuir o valor da variável A. Apresentar os valores trocados.

let A, B, C;

A = prompt("Informe o valor de A: ");
B = prompt("Informe o valor de B: ");
document.write("Você digitou " + A + " para a variável A e " + B + " para a variável B. <br>");

C = A;
A = B;
B = C;

document.write("Conversão de valores feita, agora a variável A armazena: " + A + " e a variável B armazena: " + C);