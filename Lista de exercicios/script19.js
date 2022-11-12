// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

let valor1, valor2;

valor1 = parseInt(prompt("Digite um número: "));
valor2 = parseInt(prompt("Digite mais um número: "));

while (valor1 == valor2){
    valor2 = parseInt(prompt("Os números não podem ser iguais, digite o segundo número novamente: "));
}

if (valor1 > valor2){
    document.write(valor1 + " é o maior número digitado");
}
else{
    document.write(valor2 + " é o maior número digitado");
}