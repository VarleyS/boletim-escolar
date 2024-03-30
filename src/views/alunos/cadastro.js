import React from "react";

class CadastroAluno extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Cadastro de Alunos</h2>
                </div>
                <div className="card-body">
                    <div className="img-aluno">
                        <label htmlFor="imagem">
                            <h5>Adicionar Imagem do Aluno:</h5>
                            <input type="file" id="imagem"/>
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text" className="form-control" />  
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Data de Nascimento: *</label>
                                <input type="text" className="form-control" />  
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>CPF: </label>
                                <input type="text" className="form-control" />  
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>RG: *</label>
                                <input type="text" className="form-control" />  
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Sexo: *</label>
                                <input type="text" className="form-control" />  
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Telefone Responsável: *</label>
                                <input type="text" className="form-control" />  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn">
                <button type="button" class="btn btn-light">Salvar</button>
                <button type="button" class="btn btn-light">Cancelar</button>
                </div>
            </div>
        )
    }
}

export default CadastroAluno; 