/* A resposta 1 não pode ser resolvida com swich case, por que necessita do operador > ou < para poder fazer a verificação do teste

let valor1 = parseFloat(prompt('Digite um número: '));

let valor2 = parseFloat(prompt('Digite um número: '));

let valor3 = parseFloat(prompt('Digite um número: '));


let maior = valor1;
let menor = valor1;



if (valor2 > maior) {
    maior = valor2;
} else {
    menor = valor2;
}

if (valor3 > maior) {
    maior = valor3;    
} else if (valor3 < menor){
    menor = numero3;
}

alert('O maior número digitado foi: ' + maior + '\nO menor número digitado foi: ' + menor);