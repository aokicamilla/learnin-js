// 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:
// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.

const infoPessoa = {
    nome: 'Paulo',
    idade: 32,
    solteiro: true,
    hobbies: ['ler', 'andar de patins', 'jogar bola']
}

// function mostrarInfoPessoa(pessoa) {
//     console.log("Informações da Pessoa:");
//     console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
// //     console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
// //     console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
// //     console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
// // }

// mostrarInfoPessoa(infoPessoa)


// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.

// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

infoPessoa.endereco = {
    rua: 'Rua Amado',
    cidade: 'Salvador',
    estado: 'Bahia'
}

function mostrarInfoPessoa(pessoa) {
    console.log("Informações da Pessoa:");
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`);
    console.log(`Endereço: ${pessoa.endereco.rua}, ${pessoa.endereco.cidade}, ${pessoa.endereco.estado} (Tipo: ${typeof pessoa.endereco})\n`)
}

mostrarInfoPessoa(infoPessoa)

// 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

const listaPessoas = [
    {nome: 'Victor', idade: 33, cidade: 'Campo Limpo'},
    {nome: 'Mariana', idade: 45, cidade: 'Campo Grande'},
    {nome: 'Viviane', idade: 12, cidade: 'Maragogi'}
]

// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.
function mostrarListaPessoas(pessoas) {
    pessoas.forEach(pessoa => {
        console.log (`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
    });
}
mostrarListaPessoas(listaPessoas)

// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

listaPessoas.push({nome: 'Giovana', idade: 20, cidade: "Mirandópolis"})

// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
mostrarListaPessoas(listaPessoas)

// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

function filtrarPorCidade(pessoas, cidade) {
    return pessoas.filter(pessoa => pessoa.cidade === cidade )
}



// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
const pessoasMaragogi = filtrarPorCidade(listaPessoas, 'Maragogi')
console.log(pessoasMaragogi)

