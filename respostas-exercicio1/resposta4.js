let nota1 = prompt('Digite a nota do 1º bimestre: ');
let nota2 = prompt('Digite a nota do 2º bimestre: ');
let nota3 = prompt('Digite a nota do 3º bimestre: ');
let nota4 = prompt('Digite a nota do 4º bimestre: ');

nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);
nota4 = parseInt(nota4);

let media = (nota1+nota2+nota3+nota4)/4;

alert('A sua média anual foi: ' + media);