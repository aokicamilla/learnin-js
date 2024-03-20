const user = {
    nome: 'Julia', 
    email: 'j@j.com',
    nascimento: '2021/07/03',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
    }
}
//primeiro objeto é o que vai herdar e o segundo o que vai ceder
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

//quando não tem nada novo, ele usa do objeto herdado
console.log(admin.ativo)