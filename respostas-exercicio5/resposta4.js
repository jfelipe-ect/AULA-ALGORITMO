let texto = prompt('Digite uma frase: ');
let consoantes = [];
let x = 0;

for (let i = 0; i < texto.length; i++) {
    let codigoAsc = texto[i].toLowerCase().charCodeAt(0);
    if (codigoAsc >= 97 && codigoAsc<=122){
        switch (codigoAsc){
            case 97: //a
            case 101: //e
            case 105: //i
            case 111: //o
            case 117://u
                break;
            default:
                consoantes[x] = texto[i];
                x++;
        }
    }
}

alert('Na frase que você digitou existem ' + x + ' consoantes\nSão elas: ' + consoantes);