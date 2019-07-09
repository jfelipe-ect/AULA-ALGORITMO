let letra = prompt('Digite uma letra: ').toLowerCase();

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
    alert('A letra digitada eh uma vogal');
} else if ( !isNaN(letra) ){
    alert('Digite um caractere valido!');
} else {
    alert('A letra digitada eh uma consoante');
}



/*===============================================================  //   Resposta do Professor  //     ==========================================================================

let letra = prompt('Informe uma letra');

letra = letra.toLowerCase().trim();

let resposta = "A letra é uma CONSOANTE";

if (letra == 'a' ||
    letra == 'e' ||
    letra == 'i' ||
    letra == 'o' ||
    letra == 'u' ||)   {
        resposta = 'a letra é uma VOGAL;
    }

alert(resposta);

=============================================================================================================================================================================*/