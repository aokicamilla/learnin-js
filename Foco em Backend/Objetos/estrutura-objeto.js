const estudante = {
    nome: 'José',
    idade: '32',
    cpf: '12312312312',
    turma: 'JS'
}

console.log(estudante)
//acessar a propriedade do objeto
console.log(estudante.nome)
//substring é apenas para strings, mostrando da posição 0 ate a 3
console.log(`Os três primeiros do CPF são ${estudante.cpf.substring(0,3)}`)