//Matrizes
const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const medias = [10, 8, 7.5, 9]

const lista = [alunos, medias]

console.log(lista)

console.log(
    `A aluna ${lista[0][1]} teve nota ${lista[1][1]}.`
)
//na string ele trata cada nome como um elemento separado
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat)
console.log(arrayOriginal)
//no numero ele trata o [90,100] como um elemento só, para conseguir separar podemos usar o método .flat()
const arrayOriginal2 = [50, 60, 70]
const arrayConcat2 = arrayOriginal2.concat([80, [90, 100]])

console.log(arrayConcat2)
console.log(arrayOriginal2)
