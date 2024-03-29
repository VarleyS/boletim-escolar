import React from "react";

class CadastroAluno extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h2>Cadastro de Alunos</h2>
                </div>
                <div className="card-body">
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
                </div>
                <div>
                <button type="button" class="btn btn-light">Salvar</button>
                </div>
            </div>
        )
    }
}

export default CadastroAluno; 