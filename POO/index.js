import User from './User-class.js'
import Admin from './Admin.js';
import Docente from './Docente.js'

const novoUser = new User('Mara', 'm@m.com', '25/06/2000')

//dessa forma não conseguimos trocar os dados
// novoUser.#nome = 'Sheila'

const novoAdmin = new Admin ('Rodrigo', 'r@r.com', '23/04/2001')


console.log(novoAdmin.nome)
novoAdmin.ativo = false
novoAdmin.nome = 'Lucila'
console.log(novoAdmin.exibirInfos())
