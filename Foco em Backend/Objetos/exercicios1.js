const livro = {
    titulo: 'The Queen',
    autora: 'Emma Watson',
    anoPublicacao: 2020,
    genero: 'Romance'
}

console.log(livro)

let anoAtual = new Date().getFullYear();
console.log(anoAtual)

const idadePublicacao = anoAtual - livro.anoPublicacao
livro.idadePublicacao = idadePublicacao;
console.log(livro['idadePublicacao'])

livro.avaliacao = null;~
console.log(livro)

const novaAvaliacao = { 
    nota: 4.5, 
    comentario: "Ótima leitura!" 
};

livro.avaliacao = novaAvaliacao

if (livro.avaliacao === null) {
    return livro.avaliacao = novaAvaliacao
} else {
    console.log ('O livro já tem avaliação')
}

console.log(livro)

delete livro.avaliacao
console.log(livro.avaliacao)

