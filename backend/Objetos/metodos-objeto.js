const estudante = {
    nome: 'José',
    idade: '32',
    cpf: '12312312312',
    turma: 'JS',
    bolsista: true,
    telefones: ['11999998888', '11999997777'],
    enderecos: [{
        rua: 'Rua Brasil',
        numero: 54,
        complemento: 'ap 9'
    }, 
    {    rua: 'Rua Coreia',
        numero: 70,
        complemento: ''
    }],
}

// for (let chave in estudante) {
//     console.log(chave)
//     const tipo = typeof estudante[chave]
//     if (tipo !== 'object' && tipo !== 'function')
//     console.log(estudante[chave])
// }

const chavesObjeto = Object.keys(estudante)
console.log(chavesObjeto)

const valoresObjeto = Object.values(estudante)
console.log(valoresObjeto)

const entradaObjeto = Object.entries(estudante)
console.log(entradaObjeto)

if (!chavesObjeto.includes('estado civil')) {
    console.error('não tem essa informação no cadastro')
}

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { c: 3, d: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }

const meuObjeto = {};

//colocar enumerable: false, não mostra o objeto
//REVISAR DEPOIS
Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: false
});

for (let chave in meuObjeto) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}

