function carregar(){
    var mensagem = window.document.querySelector("div#msg")
    var imagemv = window.document.querySelector("img#imagem")

    var data = new Date()
    var hora = data.getHours()
  


    mensagem.innerHTML = `Agora são ${hora} horas.`
    

    if (hora >= 0 && hora < 6){
        imagemv.src = 'noite.png'
        document.body.style.background = '#003061' // acessando a cor do background
    } else if (hora >= 6 && hora < 12){
        imagemv.src = 'manha.png'
        document.body.style.background = '#c1c743'
    } else if (hora >= 12 && hora < 18){
        imagemv.src = 'tarde.png'
        document.body.style.background = '#f59a18'
    } else {
        imagemv.src = 'noite.png'
        document.body.style.background = '#003061'
    }
}

