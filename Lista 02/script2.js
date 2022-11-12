//Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos,
// nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao
// total de eleitores. 

let eleitores = prompt("Digite o número de eleitores: ");
let votosbrancos = prompt("Informe a quantidade de votos brancos: ");
let votosnulos = prompt("Informe a quantidade de votos nulos: ");
let votosvalidos = prompt("Informe a quantidade de votos válidos: ");

let percvbrancos = votosbrancos / eleitores * 100;
let percvnulos = votosnulos / eleitores * 100;
let percvvalidos = votosvalidos / eleitores * 100;

document.write("O percentual de votos brancos é: " + percvbrancos.toFixed(1) + '%<br>'); 
document.write("O percentual de votos nulos é: " + percvnulos.toFixed(1) + '%<br>');
document.write("O percentual de votos válidos é: " + percvvalidos.toFixed(1) + '%');