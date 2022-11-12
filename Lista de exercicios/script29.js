/*
Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores.
*/

let numero1, numero2, numero3, valor1, valor2;

numero1 = parseInt(prompt("Digite um número: "));
numero2 = parseInt(prompt("Digite outro número: "));
numero3 = parseInt(prompt("Digite mais um número: "));

//Condição do primeiro número maior

if (numero1 > numero2 && numero1 > numero3) {
    valor1 = numero1;
    if (numero2 > numero3) {
        valor2 = numero2
        document.write(valor1 + valor2);
    }
    else {
        valor2 = numero3
        document.write(valor1 + valor2);
    }
}

//Condição do segundo número maior

if (numero2 > numero1 && numero2 > numero3) {
    valor1 = numero2;
    if (numero1 > numero3) {
        valor2 = numero1;
        document.write(valor1 + valor2);
    }
    else {
        valor2 = numero3;
        document.write(valor1 + valor2);
    }
}

//Condição do terceiro número maior

if (numero3 > numero1 && numero3 > numero2) {
    valor1 = numero3;
    if (numero1 > numero2) {
        valor2 = numero1;
        document.write(valor1 + valor2);
    }
    else {
        valor2 = numero2;
        document.write(valor1 + valor2);
    }
}