//spread seria ... ele espalha o conteudo da array numa nova array

const notas = [7,7,8,9]
const novaListaNotas = notas;

novaListaNotas.push(10)

console.log(notas)
console.log(novaListaNotas)
//no caso acima como ele referencia a array anterior, a array original também altera
//agora usando o spread ele cria uma cópia e adiciona o que colocarmos depois
const novasNotas = [...notas, 1]
//novasNotas.push(1) também funcionaria

console.log(novasNotas)
// se fizermos isso com tipos primitivos, array, numeros etc seria como fosse uma cópia da variavel com mesmo valor da anterior
//porém com arrays ela faz atribuição por referência, então ele só referencia algo que já existe