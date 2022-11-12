/*
Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
*/

let time1, time2, gols1, gols2;

time1 = prompt("Digite o nome do primeiro time: ");
time2 = prompt("Digite o nome do segundo time: ");
gols1 = parseInt(prompt("Quantos gols o primeiro time marcou? "));
gols2 = parseInt(prompt("Quantos gols o segundo time marcou? "));

if (gols1 == gols2) {
    document.write("A partida empatou!");
}
else if(gols1 > gols2) {
    document.write(time1 + " venceu a partida!");
}
else {
    document.write(time2 + " venceu a partida!");
}