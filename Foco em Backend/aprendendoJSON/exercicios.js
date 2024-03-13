const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId (lista, id, valor) {
    const livroEncontrado = lista.find((livro) => livro[id] === valor);
    return livroEncontrado || null
}

const livroProcurado = encontrarLivroPorId(biblioteca, 'id', 4)
console.log(livroProcurado)


// ex 2

const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtrarAno (lista, ano) {
    return lista.filter((filme) => {
        return filme.anoLancamento === ano
    })
}

const filmesComAno = filtrarAno(catalogoFilmes, 2010)

console.log(filmesComAno)
//ex 3

const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco(lista, maxPreco) {
    return lista.filter((item) => item.preco <= maxPreco)
}

const listaPrecosFiltrada = filtrarOrdenarProdutosPorPreco(listaProdutos, 50)

function ordena (lista, propriedade) {
    return lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]) {
            return -1
        }
        if(a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}

const listaOrdenadaFiltrada = ordena(listaPrecosFiltrada, 'preco')

console.log(listaOrdenadaFiltrada)

//ex 4 
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimaisCrescente (lista, parametro) {
    return lista.sort((a, b) =>{
        if (a[parametro] > b[parametro]) return 1;
        if (a[parametro] < b[parametro]) return -1;
        return 0
    })
}

function ordenarAnimaisDecrescente (lista, parametro) {
    return lista.sort((a, b) =>{
        if (a[parametro] > b[parametro]) return -1;
        if (a[parametro] < b[parametro]) return 1;
        return 0
    })
}

const animaisOrdenados = ordenarAnimaisCrescente(animais, 'nome')
console.log(animaisOrdenados)

//ex 5

const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(id) {
    for (const departamento of departamentos) {
        const funcionarioEncontrado = departamento.funcionarios.find((funcionario) => funcionario.id === id);
        if (funcionarioEncontrado) {
        return funcionarioEncontrado
        }
    } 
    return 'Funcionário não encontrado'

}

const funcionario1 = encontrarFuncionarioPorId(401)
console.log(funcionario1)

