
let nota = new Array(4);
let t = 0;
let contador = 0;
let mostrador = '';

for (let i = 0; i < nota.length; i++){
    nota[i] = prompt('Informe a nota: ');
    nota[i] = parseFloat(nota[i]);
    contador++;
    t += nota[i];
    mostrador = mostrador + nota[i];
}

alert('media: ' + t/contador);




