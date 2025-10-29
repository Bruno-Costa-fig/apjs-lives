// variável - atribuição
// let fruta = "Maça"
// console.log(fruta)
// fruta = "Uva" 
// console.log(fruta)

// vetor ou matriz - Array (lista)
let frutas = ["Maça", "Uva", "Banana", "Morango", "laranja", "Melancia"]

function EscreverFruta(nomeFruta){
    console.log(nomeFruta)
}

// map
// frutas.map(EscreverFruta)
// frutas.map(function (nomeFruta, posicao) {
//     console.log(nomeFruta)
//     console.log(posicao)
// })

// filter
let frutasFiltradas = frutas.filter(function (nomeFruta){
    if(nomeFruta == "Maça"){
        return true;
    } else {
        return false;
    }
})
console.log(frutasFiltradas)
console.log(frutas)

// reduce


