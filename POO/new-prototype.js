// function User (nome, email) {
//     this.nome = nome,
//     this.email = email

//     this.exibirInfos = function() {
//         return `Olá ${this.nome}, seu e-mail é ${this.email}`
//     }
// }

// const novoUser = new User('Maria', 'm@m.com')
// console.log(novoUser.exibirInfos())

// function Admin(role) {
//     User.call(this, 'Juliana', 'j@j.com');
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)

// const novoUser1 = new Admin('admin')
// console.log(novoUser1.exibirInfos())
// console.log(novoUser1.role)

const user = {
    init: function(nome, email) {
        this.nome = nome;
        this.email = email
    },
    exibirInfo: function() {
        return this.nome
    }
}

const novoUser = Object.create(user);
novoUser.init('João', 'j@j.com')
console.log((novoUser.exibirInfo('Mariana')))