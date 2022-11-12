/*
Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
novo com a mulher mais velha.
*/

let homem1, homem2, mulher1, mulher2, hvelho, hnovo, mvelha, mnova, soma, produto;

homem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
homem2 = parseInt(prompt("Digite a idade do segundo homem: "));
mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
mulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));

if (homem1 > homem2) {
    hvelho = homem1;
    hnovo = homem2;
}
else {
    hvelho = homem2;
    hnovo = homem1;
}

if (mulher1 > mulher2) {
    mvelha = mulher1;
    mnova = mulher2;
}
else {
    mvelha = mulher2;
    mnova = mulher1;
}

soma = hvelho + mnova;
produto = hnovo * mvelha;

document.write(soma + " " + produto);