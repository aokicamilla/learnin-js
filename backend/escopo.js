let estudante

if(1 > 0) {
    let estudante = 'Carol';
    let idade = 99
    console.log('Dentro de um bloco', estudante, idade);
}

//Quando não colocamos nada js automaticamente assume que é var, então a let estudante e a var estudante não são a mesma variável nesse caso
estudante = 'Ana'
idade = 88
console.log('fora de um bloco', estudante, idade)

estudante = 'Maria'
idade = 76
console.log('mudei de novo o valor fora do bloco',estudante, idade)

let boolean = true
let numero = 4
let strings = 'sou uma string'
console.log (boolean, '\n' , numero, '\n',  "oi \n" , strings)
console.log(boolean, '\n', numero + ' oi \n', strings);

const primeiroNome = 'Carlos';
const ultimoNome = 'Drummond de Andrade';

// Usando o operador +
const nomeCompletoConcatenado = primeiroNome + ' ' + ultimoNome;
console.log('Usando operador +: ', nomeCompletoConcatenado);

// Usando template strings
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);


// if (1 > 0) {
//     let nome = 'Ana';
//     console.log(nome); // ‘Ana’
//   }

//   // variável `nome` não está acessível, messe caso não conseguimos acessar o let que está só apenas acessível dentro daquele bloco
//porém se ela for declarada fora do bloco ela pode ser global
//   console.log(nome); // Error: nome is not defined