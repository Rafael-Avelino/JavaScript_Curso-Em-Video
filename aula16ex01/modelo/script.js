let n = window.document.querySelector("input#ntxt")
let lista = window.document.querySelector("select#nselect")
let res = window.document.querySelector("div#res")
let valores = []


function eNumero (n) {
    return !Number.isNaN(n)
}

function entre1e100(n){
    return eNumero(n) && (n >= 1 && n <= 100)
}

function EstaNaLista (n, valores){
    return valores.indexOf(Number(n)) !== -1;
}

function add(){
    if (entre1e100(n.value) && !EstaNaLista(n.value, valores)){
        valores.push(Number(n.value)) // "empurrando" cada número digitado no vetor "valores"
        let item = document.createElement('option') // criando uma tag option na lista
        item.text = `Valor ${n.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    n.value = " " // apagando o número digitado depois de rodar a função
    n.focus() // dando foco pro cursor voltar pra "n" depois
}

function fin(){
    if (valores.length === 0){
        window.alert('Por favor, adicione ao menos um número')
    }else{
        let qtd = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){ // desse jeito o for "varre" tudo o que estiver em valores[]
            soma += valores[pos]
            media = soma/qtd
            if (valores[pos] > maior){ // se o número que estiver na posição 'pos' for maior do que o número anterior
                maior = valores[pos] // adiciona  à variavel maior o número que está na posição 'pos'
            }
            if (valores[pos] < menor) {
                menor = valores [pos]
            }
        }



        res.innerHTML = ''
        res.innerHTML += `<p>Você escolheu ${qtd} números.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}.</p>`
    }
}
