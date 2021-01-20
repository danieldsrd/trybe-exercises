import React from 'react';

import Data from './Components/FieldData'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
  }  
  
  
  render() {
    return (
      <form>
        <Data />
        <fieldset>
          <legend>Experiência Profissional</legend>
          <p>Resumo do Currículo:</p>
          <textarea name="exper" maxlength="1000" cols="30" rows="5" required /><br />
            <label for="input-cargo">Cargo:
                <input type="text" name="cargo" maxlength="40" required /><br />
            </label>
            <label for="input-descr">Descrição do Cargo:
                <input type="text" name="descrcargo" maxlength="500" required /><br />
            </label>
            <label for="input-data">Data de início:
                <input type="date" name="data" placeholder="dd-mm-yyyy" value="" min="1997-01-01" max="2030-12-31" required /> 
            </label>        
        </fieldset>
      </form>
    )
  }
}

export default App;
