/*
Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém
erros, identifique os erros no algoritmo apresentado abaixo:
Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
- para sexo masculino: peso ideal = (72.7 * altura) - 58
- para sexo feminino: peso ideal = (62.1 * altura) - 44.7
inicio
ler nome
ler sexo
se sexo = M então
peso_ideal = (72.7 * altura) - 58
senão
peso_ideal = (62.1 * altura) – 44.7
fim_se
escrever peso_ideal
fim
*/

let nome, altura, peso_ideal, sexo;

nome = prompt("Digite o nome da pessoa: ");
altura = parseFloat(prompt("Informe o altura dessa pessoa: "));
sexo = prompt("Infome o sexo da pessoa, sendo M para masculino e F para feminino: ");

while (sexo != "M" && sexo != "F"){
    sexo = prompt("Opção inválida! Infome o sexo da pessoa, sendo M para masculino e F para feminino: ");
}

if (sexo == "M"){
    peso_ideal = (72.7 * altura) - 58;
}
else{
    peso_ideal = (62.1 * altura) - 44.7;  
}

document.write(peso_ideal.toFixed(1) + "kg");