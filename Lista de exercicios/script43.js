/*
teste de mesa com o algoritmo abaixo com os seguintes valores:
A B C
1 2 3
3 4 5
2 2 4
4 4 4
5 3 3
*/

let a, b, c, mens;

a = parseInt(prompt("Digite o valor do lado A: "));
b = parseInt(prompt("Digite o valor do lado A: "));
c = parseInt(prompt("Digite o valor do lado A: "));

if (a < b + c && b < a + c && c < a + b) {
    if (a == b && b == c) {
        mens = "Triângulo Equilátero";
        document.write(mens);
    }
    else if (a == b || b == c || a == c) {
        mens = "Triângulo Isósceles";
        document.write(mens);
    }
    else {
        mens = "Triângulo Escaleno";
        document.write(mens);
    }
}
else {
    document.write("Não é possível formar um triângulo");
}

/*
Mens
1) Não é possível formar um triângulo
2) Triângulo Escaleno
3) Não é possível formar um triângulo
4) Triângulo Equilátero
5) Triângulo Isósceles
*/