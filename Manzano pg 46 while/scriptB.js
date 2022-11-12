// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

var contadora = 1
var soma = 0

while (contadora < 101) {
    soma = soma + contadora;
    contadora = contadora + 1;
}
alert(soma)