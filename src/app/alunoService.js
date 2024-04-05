const ALUNOS = '_ALUNOS';

export function ErroValidacao(errors){
    this.errors = errors;
}

export default class AlunoService {

    salvar = (aluno) => {

        this.validar(aluno)

        let alunos = localStorage.getItem(ALUNOS)

        if(!alunos){
            alunos = []
        } else{
            alunos = JSON.parse(alunos)
        }

        alunos.push(aluno);

        localStorage.setItem(ALUNOS, JSON.stringify(alunos) )

    }

    validar = (aluno) => {
        const errors = []

        if(!aluno.nome){
            errors.push('O campo Nome é obrigatório.')
        }

        if(!aluno.dataNascimento){
            errors.push('O campo Data Nascimento é obrigatório.')
        }

        if(!aluno.cpf){
            errors.push('O campo CPF é obrigatório.')
        }

        if(!aluno.rg){
            errors.push('O campo RG é obrigatório.')
        }

        if(!aluno.sexo){
            errors.push('O campo Sexo é obrigatório.')
        }

        if(!aluno.telefone){
            errors.push('O campo Telefone é obrigatório.')
        }

        if(errors.length > 0){
            throw new ErroValidacao(errors)
        }
    }
}