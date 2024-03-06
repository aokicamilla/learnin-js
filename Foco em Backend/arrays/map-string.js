const nomes = ['Ana', 'JuliA', 'maria', 'CAMILLA']

const nomesPadronizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesPadronizados)

//Ou seja cada nome é capturado e pode ser acessado e retorna para a nova array


const nome2 = "Alura";
let nomeMaiusculas = "";
 
for (let i = 0; i < nome2.length; i++) {
nomeMaiusculas += nome2[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"
 
const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura

// adicionando uma palavra para cada item
const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos'];

const listaAtualizada = listaProdutos.map((produto) => {
 return `${produto} - unidade`;
})

console.log(listaAtualizada);
