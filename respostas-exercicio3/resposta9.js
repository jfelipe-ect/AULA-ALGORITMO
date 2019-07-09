/* A resposta 1 não pode ser resolvida com swich case, por que necessita do operador > ou < para poder fazer a verificação do teste

let valorA = parseFloat(prompt('Informe o número 1: '))

let valorB = parseFloat(prompt('Informe o número 2: '))

let valorC = parseFloat(prompt('Informe o número 3: '))

let aux = 0;

if (valorA > valorB) {
    aux = valorA;
    valorA = valorB;
    valorB = aux;    
}

if (valorB > valorC) {
    aux = valorB;
    valorB = valorC;
    valorC = aux;    
}

if (valorA > valorB) {
    aux = valorA;
    valorA = valorB;
    valorB = aux;    
}

alert(valorA + ' < ' + valorB + ' < ' + valorC);