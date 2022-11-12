//Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
//Calcular e escrever o valor do novo salário. 

let salario = parseFloat(prompt("Informe o salário mensal do funcionário: "));
let percentual = parseFloat(prompt("Informe o percentual de reajuste: "));

let reajuste = salario + (salario * percentual / 100);

document.write("O salário era de R$" + salario.toFixed(2) + ', com o reajuste de ' + percentual + '% passa a ser R$' + reajuste.toFixed(2));