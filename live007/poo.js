class Animal { // a classe não é o objeto, mas sim sua representação
    nome
    peso
    cor
    constructor(nomeP, pesoP, corP = 'Preta'){
        this.nome = nomeP
        this.peso = pesoP
        this.cor = corP
    }
    // comportamentos/métodos
    emitirSom(som){
        console.log(som)
    }
}

let gato = new Animal("Pimenta", 1000) // instância(criação de um objeto) da classe Animal
gato.emitirSom("Miau")

let dog = new Animal("Snoop", 1000, "Branca")
dog.emitirSom("Au au")