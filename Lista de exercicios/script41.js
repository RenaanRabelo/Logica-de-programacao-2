/*
#Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
#exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
#e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:
#Média_de_Aproveitamento = N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios / 7
#A atribuição de conceitos obedece a tabela abaixo:
#Média de Aproveitamento | Conceito
#         >= 9,0              A
#         >= 7,5 e < 9,0      B
#         > = 6,0 e < 7,5     C
#         < 6,0               D
*/

let nota1, nota2, nota3, media, media_aproveitamento;

nota1 = parseFloat(prompt("Digite a primeira nota do aluno: "));
nota2 = parseFloat(prompt("Digite a segunda nota do aluno: "));
nota3 = parseFloat(prompt("Digite a terceira nota do aluno: "));

media = (nota1 + nota2 + nota3) / 3;
media_aproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + media) / 7;

if (media_aproveitamento >= 9) {
    document.write("Conceito A");
}
else if (media_aproveitamento >= 7.5 && media_aproveitamento < 9) {
    document.write("Conceito B");
}
else if (media_aproveitamento >= 6 && media_aproveitamento < 7.5) {
    document.write("Conceito C");
}
else {
    document.write("Conceito D");
}