let valor1 = parseFloat(prompt('Digite um número: '));

let maior = valor1;


let valor2 = parseFloat(prompt('Digite um número: '));
if (valor2 > maior) {
    maior = valor2;
}
/* If com operador ternário:( =======    maior = valor2 > maior ? valor 2 : maior;    =======) */



let valor3 = parsefloat(prompt('Digite um número: '));
if (valor3 > maior) {
    maior = valor3;    
}
/* If com operador ternário:( =======    maior = valor3 > maior ? valor 3 : maior;    =======) */


alert('O maior número digitado foi: ' + maior);



