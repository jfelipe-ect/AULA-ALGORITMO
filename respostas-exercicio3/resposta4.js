let letra = prompt('Digite uma letra: ')

.toLowerCase() // Tranforma em minúsculo

.trim(); // Remove espaços desnecessários

switch (!isNaN(letra) || letra) {
    case true:
        alert('Digite um caractere valido!');
        break;
    case 'a': case 'e': case 'i': case 'o': case 'u': 
        alert('A letra digitada eh uma vogal');
        break;
    default:
        alert('A letra digitada eh uma consoante');
        break;
}



