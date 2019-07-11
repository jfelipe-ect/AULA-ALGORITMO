let turno = prompt('Digite "M" para Matutino, "V" para Vespertino e "N" para Noturno: ')

    .toLowerCase() // Tranforma em minúsculo

    .trim(); // Remove espaços desnecessários

    .charAt(0); // Capta apenas o primeiro caractere de cada palavra

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