import User from "./User-class.js";

export default class Admin extends User {  
    constructor(nome, email, nascimento, role = 'admin', ativo=true) {
        super(nome,email,nascimento,role,ativo)
    }
    //super é como se fosse parent (superclasse)

    criarCurso(nomeDoCurso,vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin ('Rodrigo', 'r@r.com', '20/02/2003')
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin)

// console.log(novoAdmin.criarCurso('JS', 20))