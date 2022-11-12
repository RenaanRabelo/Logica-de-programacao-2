// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

let soma = 0;

for (let numeros = 1; numeros <= 100; numeros++) {
    soma = soma + numeros;
}

alert(soma);