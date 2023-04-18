 function VerificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(Number.isNaN(numero)){
        elementoChute.innerHTML += ('<div>valor invalido</div>')
        return 
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=(`<div>valor invalido: fale um numero entre ${menor-valor} e ${maiorValor}</div>`)
        return

    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou!! </h2>
        <h3> O numero secreto era ${numeroSecreto}`
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML +=  `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        <button id = "jogar-novamente" class= "btn-jogar" > Jogar Novamente </button>
        `

    }else{
        elementoChute.innerHTML +=  `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})