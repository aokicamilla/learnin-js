//convertiu em string o json
const estudante = require('./estudante.json')

const stringEstudante = JSON.stringify(estudante)

console.log(stringEstudante)
console.log(typeof stringEstudante)

//retornar para objeto, para poder manipular os dados

const objEstudante = JSON.parse(stringEstudante);

console.log(objEstudante)
console.log(objEstudante.nome)
console.log(typeof objEstudante)