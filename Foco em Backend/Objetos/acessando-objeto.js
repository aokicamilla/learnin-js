const estudante = {
    nome: 'José',
    idade: '32',
    cpf: '12312312312',
    turma: 'JS'
}

function exibeInfo(objEstudante, infoEstudante) {
    return(objEstudante[infoEstudante]);
}
// o que está dentro do [] tem que vir entre aspas
console.log(exibeInfo(estudante, 'nome'));
console.log(estudante['cpf'])

const chaves = ['nome', 'idade', 'cpf', 'turma']

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem valor de ${estudante[chave]}`)
})