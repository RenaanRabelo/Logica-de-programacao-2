/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.
*/

let salario, comissao, carros_vendidos, valor_vendas, taxa, novo_salario;

salario = parseFloat(prompt("Digite o salário fixo do funcionário: "));
comissao = parseFloat(prompt("Digite a comissão do funcionário: "));
carros_vendidos = parseFloat(prompt("Informe quantos carros esse funcionário vendeu: "));

valor_vendas = carros_vendidos * 30000;
comissao = comissao * carros_vendidos;
taxa = valor_vendas * 5 / 100;
novo_salario = salario + comissao + taxa;

document.write("O antigo salário do vendedor era R$" + salario.toFixed(2) + " e agora passa a ser R$" + novo_salario.toFixed(2));

