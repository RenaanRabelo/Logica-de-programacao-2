/*
Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
*/

let usuario, senha;

usuario = parseInt(prompt("Digite o código de usuário de 4 dígitos: "));

while (usuario != 1234) {
    usuario = parseInt(prompt("Usuário inválido! Digite novamente o código de usuário de 4 dígitos: "));
}

senha = parseInt(prompt("Digite a senha de 4 dígitos: "));

while (senha != 9999) {
    senha = parseInt(prompt("Senha incorreta! Digite a senha de 4 dígitos: "));
}

if (senha == 9999) {
    document.write("Acesso permitido");
}