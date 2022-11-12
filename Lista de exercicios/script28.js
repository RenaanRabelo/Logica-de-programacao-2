//Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let numero1, numero2, numero3;

numero1 = parseInt(prompt("Digite um número: "));
numero2 = parseInt(prompt("Digite outro número: "));
numero3 = parseInt(prompt("Digite mais um número: "));

if (numero1 > numero2 && numero1 > numero3) {
    document.write(numero1);
}
else if (numero2 > numero1 && numero2 > numero3) {
    document.write(numero2);
}
else if (numero3 > numero1 && numero3 > numero1) {
    document.write(numero3)
}