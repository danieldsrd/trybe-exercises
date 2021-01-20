import React from 'react';

class Data extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      moradia: '',      
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }
  

  render() {
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label>Nome Completo:
          <input name="nome" maxlength={40} value={this.state.nome} onChange={this.handleChange} placeholder="Digite seu nome" /><br />
        </label>
        <label>E-mail:
          <input name="email" maxlength={50} value={this.state.email} onChange={this.handleChange} placeholder="Digite seu e-mail" /><br />
        </label>
        <label>CPF:
          <input name="cpf" maxlength={11} value={this.state.cpf} onChange={this.handleChange} placeholder="Ex. 000.000.000-00" /><br />
        </label>
        <label>Endereço:
          <input name="endereco" maxlength={200} value={this.state.endereco} onChange={this.handleChange} placeholder="Digite seu endereço" /><br />
        </label>
        <label>Cidade:
          <input name="cidade" maxlength={28} value={this.state.cidade} onChange={this.handleChange} placeholder="Digite sua cidade" required /><br />
        </label>
        <label>Estado:
          <select name="estado"  /><br />
        </label>
        <label>
          <input type="radio" name="moradia" value="Casa" onChange={this.handleChange} checked={this.state.moradia === 'Casa'} />Casa
        </label>
        <label for="moradia-2">
          <input type="radio" name="moradia" value="Apartamento" onChange={this.handleChange} checked={this.state.moradia === 'Apartamento'} />Apartamento
        </label>
      </fieldset>
    )
  }
}

export default Data;
