const alunos = ["Maria", "Carlos", "Eduardo", "Samanta"]
const medias = [7.5,6.8,8.3,5.5]

const lista = [alunos,medias]

function exibeNomeENota(aluno) {
    if(lista[0].includes(aluno)) {
        //aqui você desestrutura a arrays de arrays em duas arrays separadas
        const[alunos,medias] = lista
        console.log(alunos, medias)
        const indice = alunos.indexOf(aluno)
        const mediaAluno = medias[indice]
        console.log(`${aluno} tem a média ${mediaAluno}.`);
    } else {
        console.log('Estudante não está na lista')
    }
}

exibeNomeENota('Maria');
exibeNomeENota('José')