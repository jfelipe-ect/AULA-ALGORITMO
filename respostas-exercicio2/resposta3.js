let sexo = prompt('Digite "F" para feminino ou "M" para masculino: ')

.toLowerCase() // Tranforma em minúsculo

.trim(); // Remove espaços desnecessários

if (sexo == 'f'){
    alert('F-feminino');
} else if (sexo == 'm'){
    alert('M-masculino');
} else {
    alert('Sexo inválido!');
}