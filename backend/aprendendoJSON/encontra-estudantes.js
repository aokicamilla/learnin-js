//encontrando algo
const estudantes = require('./listaEstudantes.json')

function buscaEstudantes(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor))
}
//encontra o primeiro encontrado o find mas se colocarmos estudante[chave] === valor
const estudanteEncontrado = buscaEstudantes(estudantes, 'nome', 'Juliet')
console.log(estudanteEncontrado)

//includes ele percorre também a array
const telefoneEncontrado = buscaEstudantes(estudantes, 'telefone', '58996279799')
console.log(telefoneEncontrado)