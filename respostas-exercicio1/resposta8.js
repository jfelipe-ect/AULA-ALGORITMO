let salarioHora = prompt('Quanto você ganha por hora trabalhada (em R$)?: ');
salarioHora = parseFloat(salarioHora);

let horasMes = prompt('Quantas horas você trabalha por mês? ');
horasMes = parseFloat(horasMes);

let salarioMes = (salarioHora * horasMes);
alert('O salário que você receberá no mês atual será? R$ ' + salarioMes);