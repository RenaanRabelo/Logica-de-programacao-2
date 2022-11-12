/*
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é: mediafinal = n1 * 2 + n2 * 3 + n3 * 5 / 10
*/

let nota1, nota2, nota3, media;

nota1 = parseFloat(prompt("Digite a primera nota do aluno: "));
nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));
nota3 = parseFloat(prompt("Digite a terceira nota do aluno: "));

media = ((nota1* 2) + (nota2 * 3) + (nota3 * 5)) / 10;

document.write('A média final do aluno é: ' + media.toFixed(1));