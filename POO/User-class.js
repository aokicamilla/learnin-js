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
    //as subclasses não conseguem acessar os campos privados, para isso temos que usar métodos de acesso
    //GET é um método de leitura, metodo para acessar pelas subclasses devem fazer apenas uma coisa, evitando acoplar tudo e podendo acessar apenas um campo, 

    get nome() {
        return this.#nome
    }

    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }

    //set é usado só para dentro do encapsulamento, para que esteja disponível alterar fora dessa classe

    set ativo(novoAtivo) {
        this.#ativo = novoAtivo
    }

    set nome (novoNome) {
        if (novoNome === '') {
            throw new Error ('Preencha o nome')
        }
        this.#nome = novoNome
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.ativo}`
    }
}



//para acessar o método privado só podemos acessar dentro desta classe podemos assim criar um método
    // #montaObjUser() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }
//portanto essa função passa o resultado do método privado para uma const objUser.


//TESTES
// const novoUser = new User ('Julia', 'j@j.com', '04/05/2000')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())
// console.log(User.prototype.isPrototypeOf(novoUser))