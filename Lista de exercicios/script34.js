/*
Faça um teste de mesa para o algoritmo abaixo
X Y Z Resposta
3 2
150 3
7 -1
-2 5
50 3
*/

let X, Y, Z, resposta;

X = parseInt(prompt("Digite um valor para X: "));
Y = parseInt(prompt("Digite um valor para Y: "));

Z = (X * Y) + 5;

if (Z <= 0) {
    resposta = "A";
}
else if (Z <= 100) {
    resposta = "B";
}
else {
    resposta = "C";
}

document.write(Z + ' ' + resposta);

/*
# respostas
# 1) 11, B
# 2) 455, C
# 3) -2, A
# 4) -5, A
# 5) 155, C
*/