/*
Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
*/

let inicio, fim, tempo;

inicio = parseInt(prompt('Digite a hora de inicio: '));
fim = parseInt(prompt('Digite a hora do término: '));

tempo = fim - inicio;

if (tempo < 0){
    tempo = tempo + 24;
    document.write("A duração do jogo foi de " + tempo + " horas");
}
else{
    document.write("A duração do jogo foi de " + tempo + " horas");
}