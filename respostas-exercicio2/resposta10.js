let turno = prompt('Digite "M" para Matutino, "V" para Vespertino e "N" para Noturno: ')


.toLowerCase() // Tranforma em minúsculo

.trim(); // Remove espaços desnecessários

if (sexo == 'm'){
    alert('Bom dia!');
} else if (sexo == 'v'){
    alert('Boa Tarde!');
} else if (sexo == 'n'){
    alert('Boa Noite!');
} else {
    alert('Turno Inválido!');
}