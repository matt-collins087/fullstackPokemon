import React, { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import CatchPokemon from "./CatchPokemon";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
    }
    this.getPokemon = this.getPokemon.bind(this);
    this.addCaughtPokemon = this.addCaughtPokemon.bind(this);
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    axios.get('/api/pokemon')
      .then((data) => {
        console.log('pokemondata: ', data);
        this.setState({pokemonList: data.data});
      })
  }

  addCaughtPokemon(caughtPokemon) {
    axios.post('/api/pokemon', caughtPokemon)
      .then((data) => {
        this.setState({pokemonList: this.state.pokemonList.concat(caughtPokemon)})
      });
  }

  render() {
    return (
    <div>
      <table>
        <tbody>
          {/** HINT: While the map method below currently uses props, it will need to map over something else when step 3 is completed */}
          {this.state.pokemonList.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
        </tbody>
      </table>
      <CatchPokemon addCaughtPokemon={this.addCaughtPokemon} />
    </div>
    )
  }
};

export default PokemonList;