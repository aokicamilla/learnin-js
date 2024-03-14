//o set é um tipo de dado que armazena valores únicos, ele não é uma array apenas se assimila com uma, métodos como push, e etc não funcionaria
//para tal precisamos depois do set usarmos o spread para criar uma cópia como uma nova array
const nomes = ['Maria', 'Clara', 'João','João','João']

// const novosNomes = new Set(nomes);

// const arrayNomes = [...novosNomes]

const arrayNomes = [...new Set(nomes)]
arrayNomes.push('Joana')

console.log(arrayNomes)

