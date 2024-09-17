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
        alunos: [] // Inicializa como um array vazio
    }

    constructor() {
        super()
        this.service = new AlunoService();
    }

    async componentDidMount() {
        const { id } = this.props.router.params;

        if (id) {
            try {
                const response = await fetch(`https://localhost:44346/aluno/${id}`);
                const data = await response.json();

                this.setState({
                    nome: data.Name,  // Certifique-se de que o nome do campo seja "nome" na sua API
                    dataNascimento: data.dataNascimento,
                    cpf: data.cpf,
                    rg: data.rg,
                    sexo: data.sexo,
                    telefone: data.telefone,
                    responsavel: data.responsavel
                });
            } catch (error) {
                console.error('Erro ao buscar aluno:', error);
            }
        }

        try {
            const alunos = await this.service.obterAlunos(); // Aguarda a resposta da API
            console.log('Dados recebidos pela API:', alunos);

            if (Array.isArray(alunos)) {  // Verifica se 'alunos' é um array
                const alunosFiltrados = alunos.map(aluno => {
                    const { readNotaDto, ...dadosIniciais } = aluno; // Remove campo readNotaDto
                    return dadosIniciais; // Retorna apenas as informações do aluno
                });
                this.setState({ alunos: alunosFiltrados }); // Define o estado com os dados filtrados
            } else {
                console.error("Dados inesperados:", alunos);
                this.setState({ alunos: [] });  // Define um array vazio se os dados forem inválidos
            }
        } catch (error) {
            console.error("Erro ao buscar alunos:", error);
            this.setState({ alunos: [] });  // Define um array vazio em caso de erro
        }
    }

    formatarData = (data) => {
        if (data) {
            const partes = data.split("-");
            return `${partes[2]}/${partes[1]}/${partes[0]}`; // Retorna no formato DD/MM/AAAA
        }
        return '';
    };



    retornaDataParaISO(data) {
        const partes = data.split('/');
        const dia = partes[0];     // DD
        const mes = partes[1];     // MM
        const ano = partes[2];     // AAAA

        // Retorna no formato AAAA-MM-DD
        return `${dia}-${mes}-${ano}`;
    };

    preparaEditar = (cpf) => {
        const aluno = this.state.alunos.find(aluno => aluno.cpf === cpf);
        if (aluno && aluno.id) {
            this.props.router.navigate(`/cadastro-aluno/${aluno.id}`);
        } else {
            console.error("Aluno não encontrado ou ID inválido.")
        }
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
                                    <th scope="col">Responsável</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.alunos.length === 0 ? (
                                        <tr>
                                            <td colSpan="8">Nenhum aluno encontrado.</td>
                                        </tr>
                                    ) : (
                                            this.state.alunos.map((aluno, index) => (
                                                <tr key={index} className="table-success">
                                                    <td>{aluno.name}</td> {/* A API retorna 'nome' ou 'name'? Verifique */}
                                                    <td>{this.formatarData(aluno.dataNascimento)}</td>
                                                    <td>{aluno.cpf}</td>
                                                    <td>{aluno.rg}</td>
                                                    <td>{aluno.sexo}</td>
                                                    <td>{aluno.telefone}</td>
                                                    <td>{aluno.responsavel}</td>
                                                    <td>
                                                        <button onClick={() => this.preparaEditar(aluno.cpf)} className="btn btn-primary">Editar</button>
                                                        <button className="btn btn-danger">Remover</button>
                                                    </td>
                                                </tr>
                                            ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(ConsultaAluno);
