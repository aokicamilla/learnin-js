// 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
const contaBancaria = {
    titular: 'Mario Antônio',
    saldo: 300,
    depositar: function(deposito) {
        return this.saldo += deposito
    },
    sacar: function (saque) {
        if (this.saldo > saque) {
            return this.saldo - saque
        } else {
            return 'Saldo insuficiente'
        }
    }   
}

console.log(contaBancaria.depositar(800))
console.log(contaBancaria.sacar(400))

// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.
const cliente = {
    nome: 'Carlos',
    conta: contaBancaria
}

function mostrarSaldo(cliente) {
    console.log(`Nome: ${cliente.nome}, seu saldo é ${cliente.conta.saldo}`)
}
mostrarSaldo(cliente)
// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console