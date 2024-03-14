const estudante = {
    nome: 'José',
    idade: '32',
    cpf: '12312312312',
    turma: 'JS'
}

//adicionando uma propriedade, o objeto não é ordenado
estudante.telefone = 988887777
console.log(estudante.telefone)

estudante.nome = 'Alterei para João'
console.log(estudante.nome)

estudante.deletar = 'hahaha'
console.log(estudante.deletar)

//para deletar a propriedade
delete estudante.deletar
console.log(estudante.deletar)