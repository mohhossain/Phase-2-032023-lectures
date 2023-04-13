import React from "react";
import PokemonDetail from "./PokemonDetail";
import AddNewPokemon from "./AddNewPokemon";
import Search from "./Search";
import { useState } from "react";

function Pokemon({ pokemon, title, onPokemonSelect }) {
  // set the pokemon array as a state
  const [pokemonList, setPokemonList] = useState(pokemon);
  const [searchInput, setSearchInput] = useState("");

  // this function will be passed as a prop
  function addPokemon(newPokemon) {
    // take the new pokemon and update the state
    setPokemonList([...pokemonList, newPokemon]);
  }

  function onSearch(input) {
    console.log(input);
    setSearchInput(input);
  }
  console.log(pokemon);

  const filteredPokemon = pokemonList.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  // map over the pokemonList state
  const renderPokemonDetail = filteredPokemon.map((poke) => {
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
      <Search onSearch={onSearch}></Search>
      <div className="pokemon-detail">{renderPokemonDetail}</div>
    </div>
  );
}

export default Pokemon;
