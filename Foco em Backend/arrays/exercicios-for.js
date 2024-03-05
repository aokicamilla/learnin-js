//ex 1
const array = []
for (i=0; i <= 10; i++) {
    array.push(i)
}
console.log(array)
// ex 2
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
console.log (numeros [9])
//ex 3
let soma = 0
for (h=0; h<numeros.length; h++) {
    soma += numeros[h];
}
console.log(soma)



//ex 4 
//declarar as variáveis como o primeiro numero da array
let menorNumero = numeros[0];
let maiorNumero = numeros[0]
for (j=0; j<numeros.length; j++) {
    if (numeros[j] > maiorNumero) {
        maiorNumero = numeros[j]
        console.log(maiorNumero)
    } 
    if (numeros[j] < menorNumero) {
        menorNumero = numeros[j]
    }
}
console.log(`O maior número é ${maiorNumero}`)
console.log(`O menor número é ${menorNumero}`)

//ex5 
let media = soma/numeros.length
console.log(`A média é ${media}`)
