import React from "react";
import AlunoService from "../../app/alunoService";
import { withRouter } from 'react-router-dom';

export default class ConsultaAluno extends React.Component {

    state = {
        alunos: []
    }

    constructor(){
        super()
        this.service = new AlunoService();
    }

    componentDidMount() {
        const alunos = this.service.obterAlunos();
        this.setState({alunos})
    }

    preparaEditar = (cpf) => {
        this.props.history.push(`/cadastro-aluno/${cpf}`)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Consultar Aluno</div>
                <div className="form-notas">
                    <div className="form-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Data Nascimento</th>
                                    <th scope="col">CPF</th>
                                    <th scope="col">RG</th>
                                    <th scope="col">Sexo</th>
                                    <th scope="col">Telefone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.alunos.map((aluno, index) => {
                                        return (
                                            <tr key={index} className="table-success">
                                                <th>{aluno.nome}</th>
                                                <th>{aluno.dataNascimento}</th>
                                                <th>{aluno.cpf}</th>
                                                <th>{aluno.rg}</th>
                                                <th>{aluno.sexo}</th>
                                                <th>{aluno.telefone}</th>
                                                <th>
                                                    <button onClick={() => this.preparaEditar(aluno.cpf)} className="btn btn-primary">Editar</button>
                                                    <button className="btn btn-danger">Remover</button>
                                                </th>
                                            </tr>
                                        )
                                    }
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(ConsultaAluno);  //Para  usar o withRouter no React Router v4 é necessário importar com "withRouter"

