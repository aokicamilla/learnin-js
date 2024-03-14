//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase em letras maiúsculas.
const frase = "ola, tudo bem?"
console.log(frase.length)
console.log(frase.toUpperCase())

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
let nula = null;
let indefinida;
console.log(nula, indefinida)

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const numero = 5
const palavra = 'ovos'
const booleana = true;

console.log(`Hoje eu comprei ${numero} ${palavra} e isso é ${booleana}`)

// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
console.log(numero.toString())
const numeroString = '6'
console.log(parseInt(numeroString))

// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
console.log(frase.slice(0,5))
