var marcador = document.getElementById('marcador')
var restore = document.getElementById('restore')
marcador.innerHTML = 0
var ultimo = 0 // variavel que armazena o ultimo numero inserido

function somar(valor) {
    marcador.innerHTML = Number(marcador.innerHTML) + valor
    ultimo = Number(valor)
}

function limparMarcador() {
    marcador.innerHTML = 0
}

function restaurar() {
    if (marcador.innerHTML - ultimo <= 0) { // zera o contador para não imprimir numeros negativos
        ultimo = 0
        marcador.innerHTML = 0
    } else {
        marcador.innerHTML = Number(marcador.innerHTML) - ultimo
    }
    
}
