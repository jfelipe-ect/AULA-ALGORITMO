let resposta = '';
let contador = 0;

do {
    resposta = prompt('Eu sou bonito?');
    resposta = resposta.trim().toLowerCase();
    contador++
} while (resposta != 'sim' && resposta != 's');

alert ('Parabéns!, Ótima escolha!!!');
alert('Em ' + contador + ' tentativas');