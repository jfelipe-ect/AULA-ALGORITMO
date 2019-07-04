let celcius1 = prompt('Digite uma temperatura em graus celcius: ');
celcius1 = parseFloat(celcius1);

let farenheit1 = (celcius1 * 9/5) + 32
alert('A temperatura correspondente a ' + celcius1 + '°C é igual a: ' + farenheit1 + '°F');