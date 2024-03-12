const estudante = {
    nome: 'José',
    idade: '32',
    cpf: '12312312312',
    turma: 'JS',
    bolsista: true,
    telefones: ['11999998888', '11999997777'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true:false
    }
}

console.log(estudante.estaAprovado(7))

// a palavra chave THIS dá o contexto de onde está o que queremos pegar como valor, quando usamos THIS não podemos usar o THIS. No contexto de um objeto em Node.js, this refere-se ao próprio objeto no qual a função está sendo chamada. Ela é uma referência dinâmica, o que significa que o valor de this pode mudar dependendo do contexto em que a função é chamada.
//método é uma função executada dentro de um contexto de objeto
//no caso console é um objeto pronto do node e log() é uma função pré-determinada também
