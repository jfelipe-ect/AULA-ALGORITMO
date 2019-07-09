/* A resposta 1 não pode ser resolvida com swich case, por que necessita do operador > ou < para poder fazer a verificação do teste


let valor1 = prompt('Digite um número: ');

let valor2 = prompt('Digite outro número: ');

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);

if (valor1 > valor2){
    alert('O maior número digitado foi: ' + valor1);
} else if (valor1 = valor2){
    alert('os números digitados são iguais!');
} else {
    alert('O maior número digitado foi: ' + valor2);
}
