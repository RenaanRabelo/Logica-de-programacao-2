//1) Faça um algoritmo que leia a idade de uma pessoa expressa em anos,
// meses e dias e escreva a idade dessa pessoa expressa apenas em dias.
// Considerar ano com 365 dias e mês com 30 dias. 

let anos = parseInt(prompt("Informe sua idade: "));
let meses = parseInt(prompt("Informe quantos meses você tem: "));
let dias = parseInt(prompt("Informe quantos dias você tem: "));

let idadedias = (anos * 365) + (meses * 30) + dias;

document.write("Você tem " + anos + " ano(s), " + meses + " mes(es) e " + dias +  " dia(s) de idade <br>");
document.write("Que corresponde a " + idadedias + "dias de vida.");