const ALUNOS = '_ALUNOS';

export default class AlunoService {

    salvar = (aluno) => {

        let alunos = localStorage.getItem(ALUNOS)

        if(!alunos){
            alunos = []
        } else{
            alunos = JSON.parse(alunos)
        }

        alunos.push(aluno);

        localStorage.setItem(ALUNOS, JSON.stringify(alunos) )

    }
}