//invés de escrever function colocamos uma palavra

const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true
    } else {
        false
    }
}

console.log(estudanteReprovou(6,5))

//modo simplificado, mas tem que ser atribuída a uma const, não pode declarar direto
const estudanteReprovou2 = (notaFinal, faltas) => {
    return notaFinal < 7 && faltas > 4;
}
console.log(estudanteReprovou2(6, 5));



const exibeNome = (nome) => {
    return (`Olá ${nome}`)
}
console.log(exibeNome('Ana'))

function maiorIdade(idade) {
    if (idade>18) {
        return 'você é adulto'
    } else {
        return 'você ainda não é um adulto'
    }
} 

console.log(maiorIdade(19))

const palindromo = (palavra) => {
    const palavraInvertida = palavra.split('').reverse().join('')
        if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
            return 'É um palíndromo'
        } else {
            return 'Não é palindromo'
        }
    }

console.log(palindromo('ana'))
console.log(palindromo('banana'))

function maiorNumero(a,b,c) {
    if (a > b && a > c) {
        return `Maior número é ${a}`
    } else if (b > a && b > c) {
        return `Maior número é ${b}`
    } else {
        return `Maior número é ${c}`
    }
}

console.log(maiorNumero(3,5,4))

// sugestao da prof
// function encontraMaiorValor(num1, num2, num3) {
//     let maior = num1; // Assumindo inicialmente que num1 é o maior
//     if (num2 > maior) {
//         maior = num2;
//     }
//     if (num3 > maior) {
//         maior = num3;
//     }
//     return maior;
//   }
//   console.log(encontraMaiorValor(12, 56, 32)); // 56

const potencia = (base, expoente) => {
    return (Math.pow(base,expoente))
}

let base = 3
let expoente = 5
const resultado = potencia(base,expoente);

console.log(`O número ${base} no expoente ${expoente} é igual a ${resultado}`)