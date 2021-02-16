import React from "react";
import PokemonList from "./components/PokemonList";
import pokemon from "./pokemonData"; // <------- HINT: Useful to pass as props until you finish steps 2 & 3.

var App = (props) => {

  return (
    <div>
      <PokemonList pokemonList={pokemon}/>
    </div>
  )
};

export default App;
