const array = [5,6,7];
array.push(8);
const comprimento = (array.length)
console.log(array);
console.log(comprimento.toFixed(2))

array.push(9,10)
//exclui ultimo elemento
array.pop()
console.log(array);

//array esparso
const array2 = [,1,,3,,,,7]
console.log(array2);
console.log(array2.length)

//substituindo valor
array[0] = 0
console.log (array)

const array3 = [];
array3.push(1,2,3)
console.log(array3)

clinica = [];
clinica.push('cat', 'dog', 'mouse')
console.log(clinica)
clinica.pop()
clinica.pop()
clinica.pop()
console.log(clinica)