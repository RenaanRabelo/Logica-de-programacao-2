/*
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio.
*/

var contadora = 1;
var acumuladora = 1;

document.write("O número 3 elevado a 0 é igual a 1 <br>");

while (contadora <= 15) {
    acumuladora = acumuladora * 3;
    document.write("O número 3 elevado a " + contadora + " é igual a: " + acumuladora + "<br>");
    contadora = contadora + 1
}