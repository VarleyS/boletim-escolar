import React from "react";
//import AlunoService from "../../app/alunoService";
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

const estadoInicial = {
    nome: '',
    dataNascimento: '', // Formato DD/MM/AAAA
    cpf: '',
    rg: '',
    sexo: '',
    telefone: '',
    responsavel: '',
    sucesso: false,
    errors: []
}

class CadastroAluno extends React.Component {

    state = estadoInicial;

    onChange = (event) => {
        const valor = event.target.value;
        const nomeCampo = event.target.name;
        this.setState({ [nomeCampo]: valor });
    }

    onSubmit = async (event) => {

        event.preventDefault(); //Evita o comportamento padrão de submissão do formulário

        const dataNascimentoConvertida = this.converterDataParaISO(this.state.dataNascimento);

        const aluno = {
            Name: this.state.nome,
            dataNascimento: dataNascimentoConvertida, // Formato DD/MM/AAAA
            cpf: this.state.cpf,
            rg: this.state.rg,
            sexo: this.state.sexo,
            telefone: this.state.telefone,
            responsavel: this.state.responsavel
        };

        console.log('Dados recebidos pela API:', aluno);

        try {
            const response = await fetch('https://localhost:44346/Aluno', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(aluno)
            });


            if (!response.ok) {
                throw new Error('Erro ao cadastrar aluno: ${response.statusText}');
            }


            const data = await response.json();

            console.log('Aluno salvo com sucesso: ', data);
            this.limpaCampos();
            this.setState({ sucesso: true });

        } catch (erro) {
            const errors = erro.errors
            this.setState({ errors: errors })
        }

    }

    limpaCampos = () => {
        this.setState(estadoInicial);
    }

    componentDidMount() {
        console.log(this.props.params)

    }

    converterDataParaISO(data) {
        const partes = data.split('/');
        const dia = partes[0];     // DD
        const mes = partes[1];     // MM
        const ano = partes[2];     // AAAA

        // Retorna no formato AAAA-MM-DD
        return `${ano}-${mes}-${dia}`;
    };

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Cadastro de Alunos</h2>
                </div>
                <div className="card-body">
                    {this.state.sucesso &&
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Ótimo!</strong> Cadastro realizado com sucesso!
                        </div>
                    }

                    {this.state.errors.length > 0 &&

                        this.state.errors.map(msg => {
                            return (
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>Erro!</strong> {msg}
                                </div>
                            )
                        })

                    }


                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input
                                    type="text"
                                    name="nome"
                                    onChange={this.onChange}
                                    value={this.state.nome}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Data de Nascimento: *</label>
                                <input
                                    type="text"
                                    name="dataNascimento"
                                    onChange={this.onChange}
                                    value={this.state.dataNascimento}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>CPF: </label>
                                <input
                                    type="text"
                                    name="cpf"
                                    onChange={this.onChange}
                                    value={this.state.cpf}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>RG: *</label>
                                <input
                                    type="text"
                                    name="rg"
                                    onChange={this.onChange}
                                    value={this.state.rg}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Sexo: *</label>
                                <select name="sexo" onChange={this.onChange}
                                    value={this.state.sexo}
                                    className="form-control">
                                    <option></option>
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Telefone Responsável: *</label>
                                <input
                                    type="text"
                                    name="telefone"
                                    onChange={this.onChange}
                                    value={this.state.telefone}
                                    className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Responsável: *</label>
                                <input
                                    type="text"
                                    name="responsavel"
                                    onChange={this.onChange}
                                    value={this.state.responsavel}
                                    className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1" style={{ marginTop: "10px" }}>
                            <button onClick={this.onSubmit} className="btn btn-success" >Salvar</button>
                        </div>

                        <div className="col-md-1" style={{ marginTop: "10px" }}>
                            <button onClick={this.limpaCampos} className="btn btn-primary" >Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroAluno); 