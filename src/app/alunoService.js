const ALUNOS = '_ALUNOS';
const mysql = require('mysql2/promise');

export function ErroValidacao(errors){
    this.errors = errors;
}

export default class AlunoService {

    constructor() {
        this.connection = null;
        this.connect();
    }

    //conexão com banco de dados MySql
    async connect() {
        this.connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'aluno'
        });
    }

    //busca alunos no banco de dados
    obterAlunos = async () => {
        try {
            const [rows, fields] = await this.connection.execute('Select * From alunos');
            return rows;
        }
        catch {
            console.error("Erro ao buscar alunos:", error);
            throw error;
        }
    }

    // Salva um aluno no banco de dados
    salvar = async (aluno) => {

        this.validar(aluno)

        try {
            const query = `INSERT INTO alunos (nome, dataNascimento, cpf, rg, sexo, telefone) 
                           VALUES (?, ?, ?, ?, ?, ?)`;
            await this.connection.execute(query, [aluno.nome, aluno.dataNascimento, aluno.cpf, aluno.rg, aluno.sexo, aluno.telefone]);
        } catch {
            console.error("Erro ao salvar aluno:", error);
            throw error;
        }
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