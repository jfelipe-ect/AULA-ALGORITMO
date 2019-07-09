let sexo = prompt('Digite "F" para feminino ou "M" para masculino: ')

.toLowerCase() // Tranforma em minúsculo

.trim(); // Remove espaços desnecessários

switch (!isNaN(sexo) || sexo) {
    case true:
        alert('Digite um caractere valido!');
        break;
    case 'f':
        alert('F-feminino');
        break;
    case 'm':
        alert('M-masculino');
        break;
    default:
        alert('Sexo inválido!');
}