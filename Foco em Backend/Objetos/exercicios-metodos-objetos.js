const carro = {
    marca: 'fiat',
    modelo: 'palio',
    ano: 1998,
    cor: 'amarelo' ,
    ligado:'' ,
    ligar: function(ligado) {
        if (ligado === true) {
            console.log('Carro está ligado')
        }
    },
    desligar: function(ligado) {
        if (ligado !== true) {
            console.log('Carro está desligado')
        }
    }
}

carro.ligar(carro.ligado)
// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
// Em seguida, faça o seguinte:

// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.