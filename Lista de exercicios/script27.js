//Ler um valor e escrever se é positivo, negativo ou zero.

let numero = parseInt(prompt("Digite um número: "));

if (numero < 0) {
    document.write("O valor digitado é negativo");
}

else if (numero == 0){
    document.write("O valor é zero");
}

else {
    document.write("O valor é positivo");
}