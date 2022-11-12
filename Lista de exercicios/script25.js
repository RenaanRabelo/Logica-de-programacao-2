/*
Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
*/

let conta, saldo, debito, credito, saldoatual;

conta = parseInt(prompt("Digite o número da conta do cliente: "));
saldo = parseFloat(prompt("Digite o saldo do cliente: "));
debito = parseFloat(prompt("Digite o débito do cliente: "));
credito = parseFloat(prompt('Digite o crédito do cliente: '));

saldoatual = saldo - debito + credito;

if (saldoatual < 0){
    document.write("R$" + saldoatual.toFixed(2) + " Saldo Negativo");
}
else{
    document.write("R$" + saldoatual.toFixed(2) + " Saldo Positivo");
}