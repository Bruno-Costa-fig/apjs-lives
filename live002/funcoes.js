let nome = "Bruno"
let nome2 = "Ricardo"
// escreverNome(nome)
// escreverNome(nome2)

// // function expression
// // hoisting -- subir as funções
// function escreverNome(nomeAtual){
//     console.log("Seja bem-vindo, " + nomeAtual);
// }


// functions declarations
// função anônima
const escreverNome2 = function (nomeAtual){
    console.log("2 - Seja bem-vindo, " + nomeAtual);
}

// functions declarations
// arrow function
const escreverNome3 = (nomeAtual) => {
    console.log("3 - Seja bem-vindo, " + nomeAtual);
}

escreverNome3(nome)
escreverNome3(nome2)

