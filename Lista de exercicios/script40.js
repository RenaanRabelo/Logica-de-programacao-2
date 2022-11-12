/*
Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
a pagar (total a pagar = total - desconto), sabendo-se que:
- Se quantidade <= 5 o desconto será de 2%
- Se quantidade > 5 e quantidade <=10 o desconto será de 3%
- Se quantidade > 10 o desconto será de 5%
*/

let nome, quantidade, preco, total, desconto, valortotal;

nome = prompt("Digite o nome do produto: ");
quantidade = parseInt(prompt("Digite a quantidade comprada do produto: "));
preco = parseFloat(prompt("Digite o preço do produto: "));

total = quantidade * preco;

if (quantidade <= 5) {
    desconto = (total * 2) / 100;
    valortotal = total - desconto;
}
else if (quantidade > 5 && quantidade <= 10) {
    desconto = (total * 3) / 100;
    valortotal = total - desconto;
}
else {
    desconto = (total * 5) / 100;
    valortotal = total - desconto;
}



function mensagem() {
    document.getElementById("texto").innerHTML="Muito obrigado por usar nosso programa";
    alert("R$" + total.toFixed(2) + " " + " R$" + desconto.toFixed(2) + " R$" + valortotal.toFixed(2));
}

