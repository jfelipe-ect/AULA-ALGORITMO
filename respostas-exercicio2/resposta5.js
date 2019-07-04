let nota1 = prompt('Digite uma nota: ');


if ( isNaN(nota1) || nota1 < 0 || nota1 > 10){
    alert('Nota invalida, reinicie o procedimento!');
}

let nota2 = prompt('Digite outra nota: ');


if ( isNaN(nota2) || nota2 < 0 || nota2 > 10){
    alert('Nota invalida, reinicie o procedimento!');
}

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
let media = (nota1 + nota2)/2;



        if ( media == 10 ){

            alert('Media = ' + media + ': Aprovado com Distincao');

        } else if (media >= 7){

            alert('Media = ' + media + ': Aprovado!');

        } else {

            alert('Media = ' + media + ': Reprovado!');
        }