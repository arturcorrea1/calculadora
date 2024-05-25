// definição de variaveis
let display = document.getElementById("display");
let valorAnterior = '';
let operacao = '';

// aparecer numero no display

function adicionar(caractere) {
    // botão c pra remover todos os caracteres
    if (caractere === 'C') {
        display.innerHTML = '0';
        valorAnterior = '';
        operacao = '';
    } else {
        if (display.innerHTML === '0') {
            display.innerHTML = caractere;
        } else {
            display.innerHTML += caractere 
            // colocar mais de um numero
        }
    }
}

// calculo das operações com os dados recebidos

function calcular() {
    try {
        let resultado = eval(display.innerHTML);
        display.innerHTML = resultado;
        valorAnterior = resultado;
        operacao = '';
    } catch (error) {
        display.innerHTML = "Erro";
    }
}
