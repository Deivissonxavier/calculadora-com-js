let n1 = document.getElementById('um')
let n2 = document.getElementById('dois')
let n3 = document.getElementById('tres')
let n4 = document.getElementById('quatro')
let n5 = document.getElementById('cinco')
let n6 = document.getElementById('seis')
let n7 = document.getElementById('sete')
let n8 = document.getElementById('oito')
let n9 = document.getElementById('nove')
let n0 = document.getElementById('zero')


///Resposta dos calculos

let resultado = document.getElementById('valor')

///Botão de apagar

let apagar = document.getElementById('apagar')

apagar.addEventListener('click', limpar)

function limpar(){
    resultado.innerHTML = '0'
}

///Botão de operadores
let dividir = document.getElementById('dividir')
let menos = document.getElementById('subtrair')
let mais = document.getElementById('somar')
let vezes = document.getElementById('multiplicar')

dividir.addEventListener('click', dividi)
menos.addEventListener('click', subtrai)
mais.addEventListener('click', somar)
vezes.addEventListener('click', multiplicar)

//Calculos

let operacao = ''
let primeiroValor = ''

function somar(){
    primeiroValor = parseFloat(resultado.innerHTML)
    resultado.innerHTML = '0'
    operacao = '+'
    segundoNumero()
}

function subtrai(){
    primeiroValor = parseFloat(resultado.innerHTML)
    resultado.innerHTML = '0'
    operacao = '-'
    segundoNumero()
}

function multiplicar(){
    primeiroValor = parseFloat(resultado.innerHTML)
    resultado.innerHTML = '0'
    operacao = '*'
    segundoNumero()
}

function dividi(){
    primeiroValor = parseFloat(resultado.innerHTML)
    resultado.innerHTML = '0'
    operacao = '/'
    segundoNumero()
}

function calcular(){
    let segundoValor = parseFloat(resultado.innerHTML)
    let resultadoOperacao
    switch (operacao) {
        case '+':
            resultadoOperacao = primeiroValor + segundoValor
            break;
        case '-':
            resultadoOperacao = primeiroValor - segundoValor
            break;
        case '*':
            resultadoOperacao = primeiroValor * segundoValor
            break;
        case '/':
            resultadoOperacao = primeiroValor / segundoValor
            break;
        default:
            resultadoOperacao = 0
            break;
    }
    resultado.innerHTML = resultadoOperacao.toFixed(2)
    operacao = ''
}


///Botão de igualdade

let igual = document.getElementById('igual')

igual.addEventListener('click', calcular)



///Botões dos numeros
let valor = 0

n1.addEventListener('click', numero1)
n2.addEventListener('click', numero2)
n3.addEventListener('click', numero3)
n4.addEventListener('click', numero4)
n5.addEventListener('click', numero5)
n6.addEventListener('click', numero6)
n7.addEventListener('click', numero7)
n8.addEventListener('click', numero8)
n9.addEventListener('click', numero9)
n0.addEventListener('click', numero0)

function segundoNumero(){
    n1.addEventListener('click', numero1)
    n2.addEventListener('click', numero2)
    n3.addEventListener('click', numero3)
    n4.addEventListener('click', numero4)
    n5.addEventListener('click', numero5)
    n6.addEventListener('click', numero6)
    n7.addEventListener('click', numero7)
    n8.addEventListener('click', numero8)
    n9.addEventListener('click', numero9)
    n0.addEventListener('click', numero0)
}
function numero1(){
    valor = 1
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}

function numero2(){
    valor = 2
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}

function numero3(){
    valor = 3
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}

function numero4(){
    valor = 4
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}

function numero5(){
    valor = 5
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}

function numero6(){
    valor = 6
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}

function numero7(){
    valor = 7
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}

function numero8(){
    valor = 8
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}

function numero9(){
    valor = 9
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}

function numero0(){
    valor = 0
    if(resultado.innerHTML === '0'){
        resultado.innerHTML = ''
    }
    resultado.innerHTML += valor
}