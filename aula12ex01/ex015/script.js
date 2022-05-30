function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var formano = window.document.querySelector("input#txtano")
    var sex = window.document.getElementsByName("radsex")
    var imagem = window.document.querySelector("img#img")
    var mensagem = window.document.querySelector("div#res")
    var genero = ''



    if (formano.value.length == 0 || formano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.') 
    }else{
        idade = ano - formano.value
        if (sex[0].checked){
            genero = 'homem'
             if (idade >= 0 && idade < 10) {
                imagem.src = 'bebeh.png'
             } else if (idade < 21) {
                imagem.src = 'jovemh.png'
             } else if (idade < 65){
                imagem.src = 'adultoh.png'
             } else{
                imagem.src = 'idosoh.png'
             }
    } else if ( sex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                imagem.src = 'bebem.png'
            } else if (idade < 21) {
                imagem.src = 'jovemm.png'
            } else if (idade < 65){
                imagem.src = 'adultom.png'
            } else{
                imagem.src = 'idosom.png'
            }
    }

    mensagem.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos.`
}
}


