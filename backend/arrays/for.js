const notas = [7.5,6.8,8.3,5.5]


for (let indice=0; indice < notas.length; indice++) {
    console.log(indice, notas[indice])
}

let soma = 0
for (let indice = 0; indice < notas.length; indice++) {
    soma = soma + notas[indice]
    //soma += notas[indice]
}
const media = soma/notas.length
console.log(`a média das notas é ${media}`)


const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media2 = 0

//i seria a array toda notas1, 2 ou 3 enquanto j é a posição dentro de cada array
for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media2 += notasGerais[i][j]/notasGerais[i].length;
    }
}

console.log(media2)

