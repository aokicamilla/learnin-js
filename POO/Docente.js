import User from "./User-class.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaAluno(id, nota) {
        return `aluno id: ${id} passou com nota ${nota}`
    }
}

const novoDocente = new Docente ('Mario', 'm@m.com', '03/06/1980')

// console.log(novoDocente)
// console.log(novoDocente.aprovaAluno(76,9))