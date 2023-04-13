import React from "react";
import PokemonDetail from "./PokemonDetail";
import AddNewPokemon from "./AddNewPokemon";
import { useState } from "react";

function Pokemon({ pokemon, title, onPokemonSelect }) {
  // set the pokemon array as a state
  const [pokemonList, setPokemonList] = useState(pokemon);

  // this function will be passed as a prop
  function addPokemon(newPokemon) {
    // take the new pokemon and update the state
    setPokemonList([...pokemonList, newPokemon]);
  }
  console.log(pokemon);
  // map over the pokemonList state
  const renderPokemonDetail = pokemonList.map((poke) => {
    return (
      <PokemonDetail
        key={poke.name}
        name={poke.name}
        image={poke.image}
        onPokemonSelect={onPokemonSelect}
      ></PokemonDetail>
    );
  });
  return (
    <div>
      <h1>{title}</h1>
      <AddNewPokemon addPokemon={addPokemon}></AddNewPokemon>
      <div className="pokemon-detail">{renderPokemonDetail}</div>
    </div>
  );
}

export default Pokemon;
