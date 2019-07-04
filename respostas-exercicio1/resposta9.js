let farenheit = prompt('Digite uma temperatura em graus farenheit: ');
farenheit = parseFloat(farenheit);

let celcius = (5 * (farenheit-32) / 9)
alert('A temperatura correspondente a ' + farenheit.toFixed(2) + '°F é igual a: ' + celcius.toFixed(2) + '°C');