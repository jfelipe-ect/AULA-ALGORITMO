let num = new Array(10);

for (let i = 0; i < num.length; i++){
    num[i] = prompt('Informe um número inteiro: ' );
    num[i] = parseFloat(num[i]);
}

for (let i = num.length-1; i > 0; i--){
        alert(num[i]);
            
}
