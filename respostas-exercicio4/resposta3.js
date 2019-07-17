let nome = '';
for (let i = 0; i < 100; i++) {
    nome = prompt('Digite o nome').trim();
    let tamanhoNome = nome.length;
    if(tamanhoNome > 3){
        break;
    } else {
        alert('Nome inválido!!!');
    }
}

//==================================================================================================================================

alert('Nome: ' + nome);

let idade = 0;
for (let i = 0; i < 100; i++) {
    idade = prompt('Digite a idade').trim();
    idade = parseInt(idade);
    if(idade >= 0 && idade <= 150) {
        break;
    } else {
        alert('Idade inválido!!!');
    }
}

alert('Idade: ' + idade);

//==================================================================================================================================

let salario = 0;
for (let i = 0; i < 100; i++) {
    salario = prompt('Digite a salário').trim();
    salario = parseFloat(salario);
    if(salario > 0) {
        break;
    } else {
        alert('Salário inválido!!!');
    }
}

alert('Salário: ' + salario);

//==================================================================================================================================

for (let i = 0; i < 100; i++) {
    let sexo = prompt('Digite "F" para feminino ou "M" para masculino: ').trim().toLowerCase;
    if(sexo == 'f') {       
        break;
    } else if (sexo == 'm'){
        break;
    } else {
        alert('Sexo Inválido!!!');
    }
}

alert('Sexo: ' + sexo);
