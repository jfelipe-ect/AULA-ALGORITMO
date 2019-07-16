

for (let i = 0; i < 100; i++) {
    var login = prompt('Digite seu login: ').trim().toLowerCase;
    var senha = prompt('Digite sua Senha: ').trim().toLowerCase;
    if(login != senha) {
        break;
    }
    alert('Senha inválida, digite uma nova senha!!!');
}

alert('Login: ' + login + '\n'
    + 'Senha: ' + senha);