class ContaBancaria {
    constructor(titularP, numContaP, agenciaP = '1234', tipoP = 'Corrente'){
        this.titular = titularP
        this.tipo = tipoP
        this.agencia = agenciaP
        this.numConta = numContaP
        this.saldo = 0
    }
    descreverConta(){
        console.log(`
            --------------- DADOS DA CONTA BANCÁRIA --------------
            Nome do titular: ${this.titular}
            Tipo da conta: ${this.tipo}
            Nº da conta: ${this.numConta}
            Agência: ${this.agencia}
            -----------------------------------------------------------------------
        `)
    }
    depositar(valor){
        if(valor <= 0){
            return
        }
        // this.saldo = this.saldo + valor
        this.saldo += valor
        console.log("Depósito realizado com sucesso!")
    }
    sacar(valor){
        if(valor <= 0){
            return
        }
        if(valor > this.saldo){
            console.log("Saldo insuficiente!")
            return
        }

        this.saldo = this.saldo - valor
        console.log("Saque realizado com sucesso!")
    }
    verSaldo(){
        console.log(`O saldo atual é de R$ ${this.saldo}`)
    }
}

let conta1 = new ContaBancaria("Bruno", 12345, '123456')
let conta2 = new ContaBancaria("Breno", 4657)

// conta1.descreverConta()
// conta2.descreverConta()
conta1.depositar(200)
conta1.verSaldo()
conta1.sacar(50)
conta1.verSaldo()
conta1.sacar(200)