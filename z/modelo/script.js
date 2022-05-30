let n = window.document.querySelector("input#ntxt")
let lista = window.document.querySelector("select#nselect")
let res = window.document.querySelector("div#res")
let valores = []



function eNumero (n){
    return !Number.isNaN(n)
}

function entre1e100 (n){
    return eNumero(n) && (n >= 1 && n <= 100)
}

function naLista (n, valores){
    return valores.indexOf(Number(n)) !== -1
}

function add (){
    res.innerHTML = ''
    if (entre1e100(n.value) && !naLista(n.value,valores)){
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `O valor ${n.value} foi adicionado`
        lista.appendChild(item)
    }else{
        window.alert('Número inválido ou já está na lista')
    }
    n.value = ''
    n.focus()
}

function fin(){
    if (valores.length === 0) {
        window.alert("Por favor, adicione um valor.")
    }else{
        let qtd = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            media = soma/qtd
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores [pos]
            }
        }


        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${qtd} valor(es).</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${(media)}.</p>`
    }

}

