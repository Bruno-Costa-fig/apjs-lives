// atributos/características/propriedades
// métodos/funções
// heranças/relacionamentos

// objeto simples
let aluno = {
    nome: "Bruno",
    idade: 26
}

// classes
/*
Representação de um modelo de objeto - fôrma
*/

class Aluno {
    nome
    idade
    escola
    // usamos o construtor para definir os valores iniciais do objeto
    constructor(nomeP, idadeP, escolaP){
        this.nome = nomeP
        this.idade = idadeP
        this.escola = escolaP
    }

    estudar(){
        console.log(`O aluno ${this.nome} está estudando na escola ${this.escola}`)
    }
}

const brunoAluno = new Aluno("Bruno", 26, "Senai") // instância
console.log(brunoAluno)
brunoAluno.estudar()
const aluno2 = new Aluno("Breno", 22, "USP")
console.log(aluno2)
aluno2.estudar()