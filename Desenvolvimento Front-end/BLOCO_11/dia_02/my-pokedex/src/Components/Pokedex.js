import React from 'react';
import Pokemon from './Pokemon';

class PokemonList extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    
    return (
      <section>
        {pokemons.map(pokemon => <Pokemon pokemon={pokemon} />)}
      </section>
    );
  }
}

export default PokemonList;

