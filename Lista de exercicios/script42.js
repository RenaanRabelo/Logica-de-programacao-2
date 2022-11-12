/*
Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
estar em condições, um dos seguintes requisitos deve ser satisfeito:
- Ter no mínimo 65 anos de idade.
- Ter trabalhado no mínimo 30 anos.
- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.
*/

let codigo, anonasc, anoingresso, anoatual, idade, tempotrabalho;

codigo = parseInt(prompt("Digite o código do usuário: "));
anonasc = parseInt(prompt("Digite o ano de nascimento do funcionário: "));
anoingresso = parseInt(prompt("Digite o ano de ingresso do funcionário na empresa: "));

anoatual = 2022;
idade = anoatual - anonasc;
tempotrabalho = anoatual - anoingresso;

if (idade >= 65 || tempotrabalho >= 30 || idade >= 60 && tempotrabalho >= 25) {
    document.write("Requerer aposentadoria");
}
else {
    document.write("Não requerer");
}