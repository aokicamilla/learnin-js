import User from './User-class.js'
import Admin from './Admin.js';
import Docente from './Docente.js'

const novoUser = new User('Mara', 'm@m.com', '25/06/2000')

console.log(novoUser.exibirInfos())

//dessa forma não conseguimos trocar os dados
// novoUser.#nome = 'Sheila'
