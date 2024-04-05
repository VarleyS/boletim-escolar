import React from "react";
import AlunoService from "../../app/alunoService";

const estadoInicial = {
    nome: '',
    dataNascimento: '', // Formato DD/MM/AAAA
    cpf: '',
    rg: '',
    sexo: '',
    telefone: '',
    sucesso: false,
    errors: []
}

class CadastroAluno extends React.Component {

    state = estadoInicial;

    constructor() {
        super()
        this.service = new AlunoService();
    }

    onChange = (event) => {
        const valor = event.target.value;
        const nomeCampo = event.target.name;
        this.setState({ [nomeCampo]: valor });
    }

    onSubmit = (event) => {
        const aluno = {
            nome: this.state.nome,
            dataNascimento: this.state.dataNascimento, // Formato DD/MM/AAAA
            cpf: this.state.cpf,
            rg: this.state.rg,
            sexo: this.state.sexo,
            telefone: this.state.telefone
        }
        try {
            this.service.salvar(aluno)
            this.limpaCampos()
            this.setState({sucesso: true})
        } catch (erro) {
            const errors = erro.errors
            this.setState({ errors : errors })
        }

    }

    limpaCampos = () => {
        this.setState(estadoInicial);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Cadastro de Alunos</h2>
                </div>
                <div className="card-body">
                    {/* <div className="img-aluno">
                        <label htmlFor="imagem">
                            <h5>Adicionar Imagem do Aluno:</h5>
                            <input type="file" id="imagem"/>
                        </label>
                    </div> */}

                    {this.state.sucesso &&
                        <div class="alert alert-dismissible alert-success">
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Ótimo!</strong> Cadastro realizado com sucesso!
                        </div>
                    }

                    {this.state.errors.length > 0 &&

                        this.state.errors.map(msg => {
                            return (
                                <div class="alert alert-dismissible alert-danger">
                                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                    <strong>Erro!</strong> { msg }
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
                                <input
                                    type="text"
                                    name="sexo"
                                    onChange={this.onChange}
                                    value={this.state.sexo}
                                    className="form-control" />
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

export default CadastroAluno; 