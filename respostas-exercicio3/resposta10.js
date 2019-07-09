let turno = prompt('Digite "M" para Matutino, "V" para Vespertino e "N" para Noturno: ')

    .toLowerCase() // Tranforma em minúsculo

    .trim(); // Remove espaços desnecessários

switch (!isNaN(turno) || turno) {
    case true:
        alert('Digite um caractere valido!');
        break;
    case 'm':
        alert('Bom dia!');
        break;
    case 'v':
        alert('Boa Tarde!');
        break;
    case 'n':
        alert('Boa Noite!');
        break;
    default:
        alert('Turno Inválido!');
}