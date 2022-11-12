/*
Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente.
*/

let numero1, numero2, numero3, valor1, valor2;

numero1 = parseInt(prompt("Digite um número: "));
numero2 = parseInt(prompt("Digite outro número: "));
numero3 = parseInt(prompt("Digite mais um número: "));

//Condição do primeiro número menor
if (numero1 < numero2 && numero1 < numero3) {
    primeiro = numero1;
    if (numero2 < numero3) {
        document.write(primeiro + ' ' + numero2 + ' ' + numero3);
    }
    else {
        document.write(primeiro + ' ' + numero3 + ' ' + numero2);
    }
}

//Condição do segundo número menor

if (numero2 < numero1 && numero2 < numero3) {
    primeiro = numero2;
    if (numero1 < numero3) {
        document.write(primeiro + ' ' + numero1 + ' ' + numero3);
    }
    else {
        document.write(primeiro + ' ' + numero3 + ' ' + numero1);
    }
}

//Condição do terceiro número menor

if (numero3 < numero1 && numero3 < numero2) {
    primeiro = numero3;
    if (numero1 < numero2) {
        document.write(primeiro + ' ' + numero1 + ' ' + numero2);
    }
    else {
        document.write(primeiro + ' ' + numero2 + ' ' + numero1);
    }
}