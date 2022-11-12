/*
Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
total acumulado da área residencial.
*/

let soma, comodo, largura, comprimento, area, escolha;

soma = 0;
comodo = prompt("Informe o nome do cômodo: ");
largura = parseFloat(prompt("Informe a largura do(a) " + comodo + ":"));
comprimento = parseFloat(prompt("Informe o comprimento do(a) " + comodo + ":"));

area = largura * comprimento;
soma = soma + area;

document.write("A área do(a) " + comodo + " corresponde a: " + area);

document.write("Deseja calcular a área de outros comodos da casa? Digite S ou N");
escolha = prompt(prompt("Digite sua resposta: "));

while (escolha != "S" && escolha != "N") {
    escolha = prompt(prompt("Opção inválida. Digite S ou N: "));
}

while (escolha == "sim") {
    soma = 0;
    comodo = prompt("Informe o nome do cômodo: ");
    largura = parseFloat(prompt("Informe a largura do(a) " + comodo + ":"));
    comprimento = parseFloat(prompt("Informe o comprimento do(a) " + comodo + ":"));

    area = largura * comprimento;
    soma = soma + area;

    document.write("A área do(a) " + comodo + " corresponde a: " + area);

    document.write("Deseja calcular a área de outros comodos da casa? Digite S ou N");
    escolha = prompt(prompt("Digite sua resposta: "));
}

document.write("A área total da casa calculada é de: " + soma);