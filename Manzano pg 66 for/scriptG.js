/*
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação
*/

let formula = 1

document.write("3 elevado a 0 é igual a 1 <br>");

for (let expoente = 1; expoente <= 15; expoente ++) {
    formula = formula * 3
    document.write("3 elevado a " + expoente + " = " + formula + "<br>");
}