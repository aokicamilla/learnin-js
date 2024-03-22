export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    exibirInfos() {
        return `${this.#nome}, ${this.#email}`
    }
}

const novoUser = new User ('Julia', 'j@j.com', '04/05/2000')

// console.log(novoUser)
// console.log(novoUser.exibirInfos())
// console.log(User.prototype.isPrototypeOf(novoUser))