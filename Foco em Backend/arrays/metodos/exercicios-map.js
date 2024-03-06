const arrayNums = [1, 2, 3, 4]

const notasMultiplicadas = arrayNums.map (nota => nota *10) 

console.log(notasMultiplicadas)

function multiplicaPorDez(num) {
    return num * 10
}

const notasMultiplicadas2 = arrayNums.map (multiplicaPorDez)

console.log(notasMultiplicadas2)

//O forEach tem automaticamente 3 coisas, o valor, o  index e a array inteira que está contida
notasMultiplicadas.forEach((elemento, indice, arrays) => {
    console.log(indice, elemento, arrays);
});


//ex 2 Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcaoCallBack) {
    return array.map(funcaoCallBack)
}

function somaComDois (num) {
    return num + 2
}

const numeros2 = executaOperacaoEmArray(notasMultiplicadas, somaComDois)
console.log(numeros2)

//exercicio 3 - 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
const numeros = [1,2,3,4,5,6]
const numeroProcurado = 6;
let posicao = -1

for(let j = 0; j < numeros.length; j++) {
    if ( numeros[j] ===  numeroProcurado    ) {
        posicao = j;
        break;
    }
}
console.log(`O número ${numeroProcurado} está na posição ${posicao}`)

// if(numeros.find((numero) => numero === numeroProcurado)) {
//     console.log(`O número ${numeroProcurado} está na Array`)
// } else {
//     console.log (-1)
// }


//ex 4 Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];

const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

//
// O método find em JavaScript é utilizado para encontrar o primeiro elemento em um array que satisfaça uma condição especificada. Ele é uma função de Callback
const alunoProcurado = 'Carlos Oliveira'
const resultadoAluno = todasAsTurmas.find((elemento,i) => elemento === alunoProcurado)
const indexAluno = todasAsTurmas.indexOf(resultadoAluno)
if (resultadoAluno != undefined) {
    console.log(`Aluno na turma. Nome: ${alunoProcurado} Index na array: ${indexAluno}`)
} else {
    ('Aluno fora da turma')
}


//ex 5  Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array.

const numeros3 = [6, 9, 12, 15];

const triplicarNumero = numeros3.map(x => {
    const resultado = x * 3
    return(resultado)
})
console.log(triplicarNumero)

// numeros3.forEach(x => {
//     const resultado = x *3
//     console.log(resultado)
// })

const indexOfNumber6 = numeros3.findIndex(numero => numero === 6);
console.log(`o número 6 está na posicão [${indexOfNumber6}]`)
