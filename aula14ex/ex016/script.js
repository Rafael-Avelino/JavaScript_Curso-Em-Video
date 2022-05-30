var inicio = window.document.querySelector("input#itxt")
var fim = window.document.querySelector("input#ftxt")
var passo = window.document.querySelector("input#ptxt")
var res = window.document.querySelector("div#res")

function contar(){

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Preencha todos os campos e tente novamente.")
    } else {
        res.innerHTML = `Contando: `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f){
            for (var c = i; c <= f; c = c + p){
                res.innerHTML += `${c} `
            }
        } else {
            for (var c = i; c >= f; c = c - p){
                res.innerHTML += `${c} `
            }
        }
    }
}