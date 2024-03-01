// transforma a função em uma expressão de função
const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true
    } else {
        false
    }
}

console.log(estudanteReprovou(6,5))

//hoisting faz com que as funções declaradas sejam executadas primeiro, quando colocadas como expressão segue-se a ordem escrita