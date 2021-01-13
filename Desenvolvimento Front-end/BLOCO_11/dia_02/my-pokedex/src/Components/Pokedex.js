import React from 'react';
import Pokemon from './Pokemon';

class PokemonList extends React.Component {
  render() {
    const pokemons = this.props.pokemontype;
    
    return (
      <section>
        {pokemons.map(pokemon => <Pokemon pokemoncard={pokemon} />)}
      </section>
    );
  }
}

export default PokemonList;

