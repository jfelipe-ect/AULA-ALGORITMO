let nota = 0;
for (let i = 0; i < 100; i++) {
    nota = prompt('Digite uma nota').trim();
    nota = parseFloat(nota);
    if(nota >= 0 && nota <= 10) {
        break;
    } else {
        alert('Nota inválida!!!');
    }
}

alert('Nota: ' + nota);