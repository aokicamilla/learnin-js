const notas = [10, 6.5, 7.7, 9]

let somaDasNotas = 0;

notas.forEach(function(nota) {
    somaDasNotas += nota;
})

const media = somaDasNotas/notas.length;

console.log(`A média das notas é ${media}`)

//como fazer um loop ao contrário
for(i = (notas.length - 1); i >= 0; i--) {
    console.log(notas[i])
}


const lista = [1, 2, 3, 4, 5];
let soma = 0;
//o forEach executa uma função como parâmetro
lista.forEach(numero => soma += numero);
console.log(soma) //15

// lista.forEach(function (numero) {
//     soma += numero
//    });