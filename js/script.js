const contaTela = document.querySelector('.conta');
const resultadoTela = document.querySelector('.resultado');
const numeros = document.querySelectorAll('.num');
const operadores = document.querySelectorAll('.op');
const clearBtn = document.querySelector('.clear');
const delBtn = document.querySelector('.del');

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

clearBtn.addEventListener('click', clear);

delBtn.addEventListener('click', del);

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
        case '-':
            operador = op;
            conta = resultado;
            contaTela.textContent = conta + op;
            break;
        case '*':
            operador = op;
            conta = resultado;
            contaTela.textContent = conta + op;
            break;
        case '/':
            operador = op;
            conta = resultado;
            contaTela.textContent = conta + op;
            break;
        
        case '=':
            contaTela.textContent = conta + operador + resultado + op;
            if(operador == '+') {
                resultado = parseInt(resultado) + parseInt(conta);
            }
            if(operador == '-') {
                resultado = parseInt(resultado) - parseInt(conta);
            }
            if(operador == '*') {
                resultado = parseInt(resultado) * parseInt(conta);
            }
            if(operador == '/') {
                resultado = parseInt(conta) / parseInt(resultado);
            }
            resultadoTela.textContent = resultado;
            
            break;
    }
}

function clear() {
    resultado = "";
    conta = "";
    operador = "";
    resultadoTela.textContent = "";
    contaTela.textContent = "";
}

function del() {
    let tempResultado = resultado.split('');
    tempResultado.pop();
    tempResultado = tempResultado.join('');
    resultado = tempResultado;

    resultadoTela.textContent = resultado;
}