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