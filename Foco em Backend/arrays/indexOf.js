const alunos = ["Maria", "Carlos", "Eduardo", "Samanta"]
const medias = [7.5,6.8,8.3,5.5]

const lista = [alunos,medias]

console.log(
    `A aluna da posição 1 da lista é ${lista[0][0]}`
)
console.log(lista[0])

function exibeNomeENota(aluno) {
    if(lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno)
        const mediaAluno = lista[1][indice]
        console.log(`${aluno} tem a média ${mediaAluno}.`);
    } else {
        console.log('Estudante não está na lista')
    }
}

exibeNomeENota('Maria');
exibeNomeENota('José')