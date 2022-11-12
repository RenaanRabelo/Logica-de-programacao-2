//Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na 
//utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as
//variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D.
// Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações
// de adição e seis operações de multiplicação e apresentar doze resultados de saída.

let A, B, C, D, somaAB, somaAC, somaAD, somaBC, somaBD, somaCD, multAB, multAC, multAD, multBC, multBD, multCD;

A = parseInt(prompt("Informe um número para a variável A: "));
B = parseInt(prompt("Informe um número para a variável B: "));
C = parseInt(prompt("Informe um número para a variável C: "));
D = parseInt(prompt("Informe um número para a variável D: "));

somaAB = A+B;
somaAC = A+C;
somaAD = A+D;
somaBC = B+C;
somaBD = B+D;
somaCD = C+D;
multAB = A*B;
multAC = A*C;
multAD = A*D;
multBC = B*C;
multBD = B*D;
multCD = C*D;

document.write("Resultado das somas: " + somaAB + " " + somaAC + " " + somaAD + " " + somaBC + " " + somaBD + " " + somaCD + "<br>");
document.write("Resultado das multiplicações: " + multAB + " " + multAC + " " + multAD + " " + multBC + " " + multBD + " " + multCD);