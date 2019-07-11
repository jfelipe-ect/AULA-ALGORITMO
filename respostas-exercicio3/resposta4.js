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




/*===============================================================  //   Resposta do Professor  //     ==========================================================================

let letra = prompt('Digite uma letra do alfabeto:')

let codigoAsc = letra.toLocaleLowerCase().trim().charCodeAt(0);

if (codigoAsc >= 97 && codigoAsc <= 122){
    switch (codigoAsc) {
        case 97: case 101: case 105: case 111: case 117:
            alert('É uma Vogal');
            break;    
        default:
            alert ('É uma consoante')
            break;
    }

} else {
    alert('Não é uma letra do alfabeto')
}

=============================================================================================================================================================================*/

