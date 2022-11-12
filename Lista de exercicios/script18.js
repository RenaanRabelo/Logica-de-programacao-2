/*
Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/

let ano_nasc, ano_atual, idade;

ano_atual = parseInt(prompt("Digite o ano atual: "));
ano_nasc = parseInt(prompt("Digite o ano em que a pessoa nasceu: "));

idade = ano_atual - ano_nasc;

if (idade >= 16){
    document.write("Essa pessoa tem " + idade + " anos e já pode votar");
}
else{
    document.write("Essa pessoa tem " + idade + " anos e ainda não pode votar");
}