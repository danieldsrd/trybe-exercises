import React from 'react';

import pokemons from './data';
import Pokedex from './Components/Pokedex'

import './App.css';

class App extends React.Component {
  render() {

    return (
      <main className="pokemon-card">
        <Pokedex pokemontype={pokemons} />
      </main>
    );
  }
}

export default App;
