let contadorVisitas = 0;
contadorVisitas = contadorVisitas + 1;
console.log(contadorVisitas)
contadorVisitas += 1;
console.log(contadorVisitas)
contadorVisitas++;
console.log(contadorVisitas)

// if (notaFinal < 7 || faltas > 4) {
//     console.log("reprovado")
// } else {
//     console.log('nao foi reprovado')
// }

// if (notaFinal < 7 && faltas > 4) {
//     console.log("reprovado")
// } else {
//     console.log('nao foi reprovado')
// }

let idadeEstudante = 16;
const precisaDeAutorizacao = idadeEstudante < 18 ? true : false;
console.log(precisaDeAutorizacao); // true

const saldo = 100
const deposito = 50
const saque = 10

const operacao = (saldo + deposito) - saque;

console.log(operacao)

const numeroX = 10

const parOuImpar = (numeroX %2 === 0) ? `par`:`impar`
console.log(parOuImpar)

let usuario = true
let adm = true
if (adm === true && usuario === true) {
    console.log('todas as permissoes')
} 