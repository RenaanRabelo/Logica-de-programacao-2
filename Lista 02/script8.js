//Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
//automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto
// (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter 
//a distância percorrida com a fórmula DISTANCIA=TEMPO * VELOCIDADE. Possuindo o valor da distância,
// basta calcular a quantidade de litros de combustível utilizada na viagem com a
// fórmula LITROS_USADOS=DISTÂNCIA/12. Ao final, o programa deve apresentar os valores da velocidade
// média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distância percorrida (DISTÂNCIA) e a 
//quantidade de litros (LITROS_USADOS) utilizada na viagem.

let tempo, velocidade, distancia, combustivel;

tempo = parseFloat(prompt("Digite a quantidade de tempo gasto na viagem: "));
velocidade = parseFloat(prompt("Digite a velocidade média durante a viagem: "));

distancia = tempo * velocidade;
combustivel = distancia / 12;

document.write("A velocidade média da viagem foi de " + velocidade + "km/h, o tempo gasto na viagem foi de " + tempo + " horas, a distância percorrida foi de " + distancia + "km, e a quantidade de litros de combustível utilizados foi " + combustivel.toFixed(0) + " litros.");