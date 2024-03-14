const notas = [7.5,6.8,8.3,5.5]

let soma = 0;

//seria agora o elemento "x" da array notas

for (let nota of notas) {
    soma += nota
}

console.log(soma)
//
//nesse caso queremos imprimir os preços com desconto temos que colocar o console.log no looping e do elemento que está sendo criado, pois não altera a array original, o for of
const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;

for (let preco of precos) {
    preco = preco * desconto;
    console.log(preco);
}
