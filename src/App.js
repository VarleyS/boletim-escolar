import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    nome: ''
  }

  modificarNome = (event) => {
    let nome = event.target.value;
    this.setState({
      nome: nome
    });
  }

  criaComboBox = () => {
    const opcoes = ["pessoa1", "pessoa2"]
    const comboBoxOpcoes = opcoes.map(opcoes => <option>{opcoes}</option>)

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render() {

    const MeuComboBox = () => this.criaComboBox()

    return (
      <>
        <input type="text" value={this.state.nome} onChange={ this.modificarNome }/><br/>
        <h1>Hello {this.state.nome}!</h1>
        <MeuComboBox />
      </>
    )
  }
}

export default App;

