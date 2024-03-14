//essa primeira forma também pode ser utilizada, mas precisaria de algumas configurações a mais
// import estudante from './estudante.json'
const estudante = require('./estudante.json');
//importa o estudante e transforma num objeto, só o json ele não é um objeto js
console.log(estudante);
console.log(typeof estudante);

const keys = Object.keys(estudante);
console.log(keys)