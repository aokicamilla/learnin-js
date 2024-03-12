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
    }, 
    {    rua: 'Rua Coreia',
        numero: 70,
        complemento: ''
    }],
}

function exibirTelefones(telefone1,telefone2) {
    console.log(`Ligar para ${telefone1}`)
    console.log(`Ligar para ${telefone2}`)
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1])
//usar o spread aqui também funciona, ele pega a array e abre ela, espalhando dentro do parâmetro da função
exibirTelefones(...estudante.telefones)

//aqui extrai os dados de um objeto e coloca em outro
const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio)