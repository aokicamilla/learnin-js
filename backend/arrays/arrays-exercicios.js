const concatenar = (a,b) => {
    const resultado1 = a.concat(b)
    return resultado1
}

const ex1 =[1,2,3]
const ex2 = [4,5,6]
console.log(concatenar(ex1,ex2))
//
const umADez = [1,2,3,4,5,6,7,8,9,10]
console.log(umADez.slice(3,8))
//
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
frutas.splice( 2 ,2, 'Kiwi', 'Pessego')
console.log(frutas)
//
let matriz = []
let valorInicial = 1

for(i=1; i<=3; i++) {
    let linha = [];
    for(h=1; h<=3; h++) {
        linha.push(valorInicial++)
    }
    matriz.push(linha)
}


console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row)); 
// o ForEach percorre cada elemento da atriz e imprime cada linha isoladamente, row é o parâmetro e para cada linha ela deve ser impressa