//template string é mais moderno e mais usado
const nome = "Julia"
console.log(`Olá meu nome é ${nome}`)

const senha = 'Senha123' + nome.toUpperCase();
console.log(senha);

//unicode transformation format (UTF)

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiraganaA = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiraganaA)

//type of
let valor1 = 0
let abacate = true
let valor2 = "10"

console.log("valor1 é do tipo:", typeof valor1)
console.log("abacate é do tipo:", typeof abacate)
console.log("valor2 é do tipo:", typeof valor2)
