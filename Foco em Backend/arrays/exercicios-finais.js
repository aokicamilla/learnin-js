// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
const alunos = ['Ana', 'Marcus', 'Maria', 'Mauro']
const notas = [7, 8, 9, 10]
const medias = [4.4,3.5,6.7,2]
//o parâmetro(...arrays) aceita um número variável de parâmetros
function concatenarArrays(...arrays) {
    return [].concat(...arrays) //no caso aqui criamos uma array vazia para concatenar com quaisquer outras arrays
}

console.log(concatenarArrays(alunos,notas, medias))

//ex 2  Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
const numeros = [1,2,3,4,5,6,7,8,9]

const numerosSomados = numeros.reduce((acumulados,somados) => acumulados + somados, 0)

console.log(numerosSomados)

//ex 3 Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

function unirEFiltrar (lista1,lista2) {
    let coresLista3 = lista1.concat(lista2)
    const coresListaFiltradas = new Set(coresLista3)
    return ([...coresListaFiltradas])
}

console.log(unirEFiltrar(coresLista1,coresLista2))

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
    const numerosPares= numeros.filter(numeroPar => {
        return numeroPar % 2 === 0 
    }) 
    
    console.log (numerosPares)

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
function filtroTresECinco (array) {
    const numerosFiltrados = array.filter(numero => {
        return numero % 3 === 0 && numero > 5; //retorna a condição direto
    })
    return numerosFiltrados //retorna a array
}
console.log(filtroTresECinco(numeros))

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaDosElementos(array) {
    return array.reduce((acumulados, soma) => acumulados + soma,0)
}

console.log(somaDosElementos(numeros))