let prod1 = parseFloat(prompt('Informe o preço do produto 1: '));
let menor = prod1;
let recomendacao = 'Produto 1'

let prod2 = parseFloat(prompt('Informe o preço do produto 2: '));
if (prod2 < menor) {
    menor = prod2;
    recomendacao = 'Produto B';
}


let prod3 = parseFloat(prompt('Informe o preço do produto 3: '));
if (prod3 < menor) {
    menor = prod3;
    recomendacao = 'Produto 3';

}

alert ('Melhor preço: ' + menor
+ '\nProduto Recomendado: ' + recomendacao);