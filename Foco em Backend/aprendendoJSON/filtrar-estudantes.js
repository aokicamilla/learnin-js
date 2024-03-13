const estudantes = require('./listaEstudantes.json')

function filtrarPropriedades(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtrarPropriedades(estudantes)
console.log(listaEnderecosIncompletos)