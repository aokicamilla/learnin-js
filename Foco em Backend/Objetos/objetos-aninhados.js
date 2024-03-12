const estudante = {
    nome: 'José',
    idade: '32',
    cpf: '12312312312',
    turma: 'JS',
    bolsista: true,
    telefones: ['11999998888', '11999997777']
}

estudante.endereco = {
    rua: 'Rua Brasil',
    numero: 54,
    complemento: 'ap 9'
}

console.log(estudante.endereco)
// usamos a mesma forma de acessar um objeto
console.log(estudante.endereco.rua)