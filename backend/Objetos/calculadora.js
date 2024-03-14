let calculadora = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => b - a, 
    multiplicacao: (a, b) => a * b,
    divisao: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Não pode ser dividido';
        }
    },
    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero)
        return soma / numeros.length 
    }
};


// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.

console.log(calculadora.soma(5, 3));          // Output: 8
console.log(calculadora.subtracao(8, 4));     // Output: -4
console.log(calculadora.multiplicacao(3, 4)); // Output: 12
console.log(calculadora.divisao(8, 2));       // Output: 4
console.log(calculadora.divisao(5, 0));       // Output: 'Não pode ser dividido'

const numerosParaMedia = [1,2,3,4,5]
console.log(`Média: ${calculadora.calcularMedia(numerosParaMedia)}`)
