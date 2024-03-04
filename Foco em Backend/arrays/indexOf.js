const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]


console.log(arrayConcat)
console.log(arrayOriginal)
//no numero ele trata o [90,100] como um elemento só, para conseguir separar podemos usar o método .flat()
const arrayOriginal2 = [50, 60, 70]
const arrayConcat2 = arrayOriginal2.concat([80, [90, 100]])

console.log(arrayConcat2)
console.log(arrayOriginal2)
