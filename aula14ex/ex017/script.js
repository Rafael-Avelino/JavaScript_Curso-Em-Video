const numero = window.document.querySelector("input#ntxt");
const res = window.document.querySelector("select#seltab");

function calcular(){

    if (numero.value.length === 0){
        window.alert('[ERRO] Insira um número.')
    } else {
    let n = Number(numero.value)
    res.innerHTML = ''

    for (let c = 1; c <= 10; c = c+1){
    let result = n * c

        const item = document.createElement('option');
        item.text = `${n} x ${c} = ${result}`
        res.appendChild(item)
    
    //res.innerHTML += `${n} x ${c} = ${result}<br/>`
        }
    }
}



