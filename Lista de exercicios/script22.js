/*
A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas).
*/

let htrabalhadas, salariophora, salario, horasextra, valorextra, totalextra, salariototal;

htrabalhadas = parseInt(prompt('Digite as horas trabalhadas no mês: '));
salariophora = parseFloat(prompt('Digite o salário por hora: R$'));

salario = salariophora * 160;

if (htrabalhadas > 160){
    horasextra = htrabalhadas - 160;
    valorextra = salariophora + (salariophora * 50) / 100;
    totalextra = horasextra * valorextra;
    salariototal = salario + totalextra;
    document.write("O salário total do funcionário é: R$" + salariototal.toFixed(2));
}
else{
    document.write("O salário do funcionário é: R$" + salario.toFixed(2));
}