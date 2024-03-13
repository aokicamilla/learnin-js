// a) Leia o conteúdo do arquivo animais.json.
const animais = require('./animais.json')

// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
// console.log(animais)
const objAnimais = {
    animais: [
        { id: 1, nome: 'Leão', tipo: 'Mamífero', habitat: 'Savana' },
        { id: 2, nome: 'Pinguim', tipo: 'Ave', habitat: 'Pólo Sul' },
        { id: 3, nome: 'Cobra', tipo: 'Réptil', habitat: 'Floresta Tropical'}
    ]
}

// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
const novoAnimal = {
    id:4,
    nome: 'macaco',
    tipo: 'Mamífero',
    habitat: 'Floresta Tropical'
}

objAnimais.animais.push(novoAnimal)

console.log(objAnimais)
// d) Modifique o habitat de um animal existente no array de animais.
objAnimais.animais[0].habitat = 'Selva'
console.log(objAnimais.animais[0].habitat)

// e) Remova um animal do array de animais.
// objAnimais.animais.pop()
// console.log(objAnimais)
//deletando o índice 1
const indiceAnimalRemover = objAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objAnimais.animais.splice(indiceAnimalRemover, 1);
}
console.log(objAnimais)
// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
const stringAnimais = JSON.stringify(objAnimais)

// g) Imprima no console o objeto JavaScript resultante das operações.
console.log(stringAnimais)