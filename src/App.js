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

  render() {
    return (
      <>
        <input type="text" value={this.state.nome} onChange={ this.modificarNome }/><br/>
        <h1>Hello {this.state.nome}!</h1>
      </>
    )
  }
}

export default App;

