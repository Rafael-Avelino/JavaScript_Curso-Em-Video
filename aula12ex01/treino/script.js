function carregar () {

var mensagem1 = window.document.querySelector("div#msg")
var imagem1 = window.document.querySelector("img#img")

var data = new Date()
var hora = data.getHours()


mensagem1.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 6){
    mensagem1.innerHTML = `Agora são ${hora} horas. <br/> Boa madrugada!`
    imagem1.src = 'noite.png'
    document.body.style.background = '#003061'
} else if (hora >= 6 && hora < 12){
    mensagem1.innerHTML = `Agora são ${hora} horas. <br/> Bom dia!`
    imagem1.src = 'manha.png'
    document.body.style.background = '#c1c743'
} else if (hora >= 12 && hora < 18) {
    mensagem1.innerHTML = `Agora são ${hora} horas. <br/> Boa tarde!`
    imagem1.src = 'tarde.png'
    document.body.style.background = '#f59a18'
} else {
    mensagem1.innerHTML = `Agora são ${hora} horas. <br/> Boa noite!`
    imagem1.src = 'noite.png'
    document.body.style.background = '#003061'
}
}
