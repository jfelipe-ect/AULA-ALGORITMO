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



/*===============================================================  //   Resposta do Professor  //     ==========================================================================

let valor1 = prompt('Digite um número: ');
valor1 = parseInt(valor1);

let maior = valor1;

let valor2 = prompt('Digite um número: ');
valor2 = parseInt(valor2);

if (valor2 > maior) {
    maior = 2;
}

alert('O maior número digitado foi: ' + maior);

=============================================================================================================================================================================*/