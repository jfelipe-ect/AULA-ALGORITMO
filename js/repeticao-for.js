
let somatorio = 0;

for (var i = 1; i <=4 ; i+=1){

    let nota = parseFloat(prompt('Digite a nota ' + i + ':'));
    somatorio = somatorio + nota;
    
}

let media = somatorio / (i-1);

alert('Sua média é igual a: ' + media);

