import React from "react";
import AlunoService from "../../app/alunoService";
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

class ConsultaAluno extends React.Component {

    state = {
        alunos: []
    }

    constructor() {
        super()
        this.service = new AlunoService();
    }

    componentDidMount() {
        const alunos = this.service.obterAlunos();
        this.setState({ alunos })
    }

    preparaEditar = (cpf) => {
        console.log("CPF para edição", cpf);
        this.props.router.navigate("/cadastro-aluno/" + cpf);
    };

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
                                    <th scope="col">Responsavel</th>
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
                                                <th>{aluno.responsavel}</th>
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


export default withRouter(ConsultaAluno);
