


function calcular(){
    let numero1 = document.getElementById('valor1').value;
    numero1 = valida_campo(numero1, 'mensagem1', 'Campo 1 deve ser número');
    
    let numero2 = document.getElementById('valor2').value;
    numero2 = valida_campo(numero2, 'mensagem2', 'Campo 2 só número');
    
    let resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado;
    
}

function eh_numero(numero){
    return !isNaN(numero);
}

function valida_campo(valor, id, mensagem){
    document.getElementById(id).innerHTML = '';
    if (eh_numero(valor)){
        valor = parseInt(valor);
        return valor;
    } else {
        document.getElementById(id).style.color = 'red';
        document.getElementById(id).innerHTML = mensagem;
    }
    return 0;

}