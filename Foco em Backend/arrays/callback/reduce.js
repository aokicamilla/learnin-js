const salaJS = [7,8,7,8,5,4,7.5]
const salaJava = [4,5,8,2,8,9.3]
const salaPython = [1,4,7,5,8,2.6]

function calculaMedia(listaDeNotas) {
    // const somaDasNotas = listaDeNotas.reduce((acumulador,nota) => {
    //     return acumulador + nota
    // }, 0);

    const somaDasNotas = listaDeNotas.reduce((acumulador,nota) => acumulador + nota, 0);
    //o zero é da onde começa a soma

    const media = somaDasNotas/listaDeNotas.length;
    return media
}

console.log(calculaMedia(salaJS).toFixed(2))
console.log(calculaMedia(salaJava))
console.log(calculaMedia(salaPython).toFixed(2))

const numeros = [1,2,3,4,5]

function somar (listaDeNumeros) {
    const somaNumeros = listaDeNumeros.reduce((acumulados, adicionados) => adicionados + acumulados, 0) 

    return somaNumeros
}

function multiplicar (listaDeNumeros) {
    const multiplicaNumeros = listaDeNumeros.reduce((acumulados, multiplicado) => multiplicado * acumulados, 1)

    return multiplicaNumeros
}

function subtrair (listaDeNumeros) {
    const subtraiNumeros = listaDeNumeros.reduce((acumulados, subtraidos) => acumulados- subtraidos, 0)

    return subtraiNumeros
}

console.log(somar(numeros))
console.log(multiplicar(numeros))
console.log(subtrair(numeros))

