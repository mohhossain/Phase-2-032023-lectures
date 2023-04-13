import React from "react";
import PokemonDetail from "./PokemonDetail";

function Pokemon({ pokemon, title }) {
  console.log(pokemon);
  const renderPokemonDetail = pokemon.map((poke) => {
    return (
      <PokemonDetail
        key={poke.name}
        name={poke.name}
        image={poke.image}
      ></PokemonDetail>
    );
  });
  return (
    <div>
      <h1>{title}</h1>
      <div className="pokemon-detail">{renderPokemonDetail}</div>
    </div>
  );
}

export default Pokemon;
