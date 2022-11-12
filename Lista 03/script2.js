//Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
//VOLUME=COMPRIMENTO * LARGURA * ALTURA.

let volume, comprimento, largura, altura;

comprimento = parseFloat(prompt("Informe o comprimento da caixa: "));
largura = parseFloat(prompt("Informe a largura da caixa: "));
altura = parseFloat(prompt("Informe a altura da caixa: "));

volume = comprimento * largura * altura;

document.write("O volume da caixa é: " + volume);