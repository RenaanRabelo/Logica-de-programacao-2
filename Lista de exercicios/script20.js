//Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

let valor1, valor2;

valor1 = parseInt(prompt("Informe um número: "));
valor2 = parseInt(prompt("Informe mais um número: "));

if (valor1 < valor2){
    document.write(valor1 + ' ' + valor2);
}
else{
    document.write(valor2 + ' ' + valor1);
}
