let display = document.getElementById("display");
let valorAnterior = '';
let operacao = '';

function adicionar(caractere) {
    if (caractere === 'C') {
        display.innerHTML = '0';
        valorAnterior = '';
        operacao = '';
    } else {
        if (display.innerHTML === '0') {
            display.innerHTML = caractere;
        } else {
            display.innerHTML += caractere
        }
    }
}

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
