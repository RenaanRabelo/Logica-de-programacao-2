//Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).

let SM, PR, NS;

SM = parseFloat(prompt("Digite o salário mensal do trabalhador: "));
PR = parseFloat(prompt("Digite o reajuste que será atribuído ao salário: "));

NS = SM + (SM * PR / 100);

document.write("O valor do novo salário é igual a: R$" + NS.toFixed(2));