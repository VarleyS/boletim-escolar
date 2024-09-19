export function ErroValidacao(errors) {
    this.errors = errors;
}

export default class AlunoService {

    // URL base da API
    apiUrl = 'https://localhost:44346/Aluno'; // Alterar conforme a URL da API

    // Busca alunos pela API
    obterAlunos = async () => {
        try {
            const response = await fetch(this.apiUrl);
            if (response.ok) {
                const alunos = await response.json();
                return alunos;

            } else {
                throw new Error("Erro ao buscar alunos.");
            }
        } catch (error) {
            console.error("Erro ao buscar alunos:", error);
            throw error;
        }
    }
    validar = (aluno) => {
        const errors = [];

        if (!aluno.nome) {
            errors.push('O campo Nome é obrigatório.');
        }

        if (!aluno.dataNascimento) {
            errors.push('O campo Data Nascimento é obrigatório.');
        }

        if (!aluno.cpf) {
            errors.push('O campo CPF é obrigatório.');
        }

        if (!aluno.rg) {
            errors.push('O campo RG é obrigatório.');
        }

        if (!aluno.sexo) {
            errors.push('O campo Sexo é obrigatório.');
        }

        if (!aluno.telefone) {
            errors.push('O campo Telefone é obrigatório.');
        }

        if (!aluno.responsavel) {
            errors.push('O campo Responsavel é obrigatório.');
        }

        if (errors.length > 0) {
            throw new ErroValidacao(errors);
        }
    }
}

