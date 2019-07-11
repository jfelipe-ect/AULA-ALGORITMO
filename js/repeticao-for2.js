let tabuada = parseInt(prompt('De qual número vc deseja que seja exibida a tabuada:'));

let a = '';

for (let i = 1; i <=9 ; i+=1){

    let result = tabuada * i;

    a+= tabuada + ' * ' + i + ' = ' + result + '\n'
    
}

alert(a);




