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
    }]
}

for (let chave in estudante) {
    const tipo = typeof estudante[chave]
    if (tipo !== 'object' && tipo !== 'function'){
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto)
    } 
}

