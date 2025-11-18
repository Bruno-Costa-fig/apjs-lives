const palavra = "banana"
const letrasCorretas = []
let tentativas = 5;

function tentarLetra(letra){
    //validar se existe a letra
    console.log("A letra da tentativa é " + letra)
    if(palavra.includes(letra)){
        letrasCorretas.push(letra)
        console.log("Acertou!!")
    } else {
        tentativas--
        console.log("Errou: você tem " + tentativas + " restantes")
    }
    mostrarPalavra()
}

function mostrarPalavra(){
    let palavraEscondidada = ""
    for(let letra of palavra){
        if(letrasCorretas.includes(letra)){
            palavraEscondidada = palavraEscondidada + letra
        } else {
            palavraEscondidada = palavraEscondidada + "_"
        }
    }

    if(palavraEscondidada == palavra){
        console.log("Você completou a palavra. Parabéns!")
    } else {
        console.log(palavraEscondidada)
    }
}

tentarLetra("a")
tentarLetra("c")
tentarLetra("b")
tentarLetra("n")