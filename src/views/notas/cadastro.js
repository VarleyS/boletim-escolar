import React from "react";

class CadastroNotas extends React.Component {

    render() {
        return (
            <div className="form-notas">
                <div className="form-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Matéria</th>
                                <th scope="col">1 Bimestres</th>
                                <th scope="col">2 Bimestres</th>
                                <th scope="col">3 Bimestres</th>
                                <th scope="col">4 Bimestres</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.alunos.map(aluno => {
                                    return (
                                        <tr className="table-primary">
                                            <th scope="row">Português</th>
                                            <td>{aluno.nota}</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                            <td>Column content</td>
                                        </tr>
                                    )
                                }
                                )}
                            <tr className="table-primary">
                                <th scope="row">Matematica</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-secondary">
                                <th scope="row">Historia</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-success">
                                <th scope="row">Geografia</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>

                            <tr className="table-success">
                                <th scope="row">Ingles</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                            <tr className="table-success">
                                <th scope="row">Ciencias</th>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                                <td>Column content</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CadastroNotas;