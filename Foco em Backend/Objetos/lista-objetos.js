const estudante = {
    nome: 'José',
    idade: '32',
    cpf: '12312312312',
    turma: 'JS',
    bolsista: true,
    telefones: ['11999998888', '11999997777'],
    enderecos: [{
        rua: 'Rua Brasil',
        numero: 54,
        complemento: 'ap 9'
    }]
}

estudante.enderecos.push({
    rua: 'Rua Coreia',
    numero: 70,
    complemento: ''
})

// console.log(estudante.enderecos)
// console.log(estudante.enderecos[1])

//retorna as listas que o endereço.complemento seja true
const listaEnderecosComComplementos = estudante.enderecos.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComComplementos)