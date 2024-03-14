const alunos = ['Ana', 'Marcus', 'Maria', 'Mauro']
const notas = [7, 8, 9, 10]
//filtra os nomes abaixo de 6 letras
const tamanhoNome = alunos.filter((aluno) => {
    return aluno.length < 6;
})
//filtra as notas abaixo de 9
const reprovados = alunos.filter((aluno, indice) => {
    return notas[indice] < 9
})

console.log(tamanhoNome)
console.log(reprovados)