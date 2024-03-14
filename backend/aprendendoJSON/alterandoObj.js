const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function copiarPessoa(obj) {
    return {...obj}
} 

console.log(copiarPessoa(pessoaOriginal))

const copiaDaPessoa = copiarPessoa(pessoaOriginal)

copiaDaPessoa.idade = 40

copiaDaPessoa.hobby = 'cantar'

console.log(copiaDaPessoa)
