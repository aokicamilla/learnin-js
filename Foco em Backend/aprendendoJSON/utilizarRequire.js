const dados = require('./dados.json')

console.log(dados.produtos)
console.log(dados.usuarios)

console.log("Produtos:");
dados.produtos.forEach(produto => {
    console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`);
});

console.log("\nUsuários:");
console.log(dados.usuarios);

// Accessing the ID of the first product
console.log("\nID do primeiro produto:", dados.produtos[0].id);