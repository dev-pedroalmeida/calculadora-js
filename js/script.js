const contaTela = document.querySelector('.conta');
const resultadoTela = document.querySelector('.resultado');
const numeros = document.querySelectorAll('.num');
const operadores = document.querySelectorAll('.op');


let conta = "",
    resultado = "",
    operador = "",
    isCalc = false;

numeros.forEach((numero) => {
    numero.addEventListener('click', () => writeNumbers(numero.textContent));
})

operadores.forEach((operador) => {
    operador.addEventListener('click', operate);
})

function writeNumbers(number) {
    if(isCalc) {
        resultado = number;
        isCalc = false;
    } else {
        resultado += number;
    }
    resultadoTela.textContent = resultado;
}

function operate(e) {
    isCalc = true;
    const op = e.target.innerText;

    switch(op) {
        case '+':
            operador = op;
            conta = resultado;
            contaTela.textContent = conta + op;
            break;
        
        case '=':
            contaTela.textContent = resultado + operador + conta + op;
            if(operador == '+') {
                resultado = parseInt(resultado) + parseInt(conta);
            }
            resultadoTela.textContent = resultado;
            
            break;

    }

}