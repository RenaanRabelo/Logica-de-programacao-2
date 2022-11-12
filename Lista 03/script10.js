//Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores.

let A, B, C, vbrancos, vnulos, total_validos, total_eleitores, percentual_validos, percentualA, percentualB, percentualC, percentual_nulo, percentual_brancos;

A = parseInt(prompt("Digite a quantidade de votos do candidado A: "));
B = parseInt(prompt("Digite a quantidade de votos do candidado B: "));
C = parseInt(prompt("Digite a quantidade de votos do candidado C: "));
vbrancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
vnulos = parseInt(prompt("Digite a quantidade de votos nulos: "));

total_validos = A + B + C;
total_eleitores = total_validos + vbrancos + vnulos;

percentual_validos = (total_validos * 100) / total_eleitores;
percentualA = (A * 100) / total_eleitores;
percentualB = (B * 100) / total_eleitores;
percentualC = (C * 100) / total_eleitores;
percentual_nulo = (vnulos * 100) / total_eleitores;
percentual_brancos = (vbrancos * 100) / total_eleitores;

document.write("Total de aleitores: " + total_eleitores + "<br>");

document.write("Percentual correspondente de votos válidos em relação à quantidade de eleitores: " + percentual_validos.toFixed(0) + "% <br>");

document.write("Percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores: " + percentualA.toFixed(0) + "% <br>");

document.write("Percentual correspondente de votos válidos do candidato B em relação à quantidade de eleitores: " + percentualB.toFixed(0) + "% <br>");

document.write("Percentual correspondente de votos válidos do candidato C em relação à quantidade de eleitores: " + percentualC.toFixed(0) + "% <br>");

document.write("Percentual correspondente de votos nulos em relação à quantidade de eleitores: " + percentual_nulo.toFixed(0) + "% <br>");

document.write("Percentual correspondente de votos nulos em relação à quantidade de eleitores: " + percentual_brancos.toFixed(0) + "% <br>");
