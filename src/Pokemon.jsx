import React from "react";
import Mewtwo from "./Mewtwo";
import IronValiant from "./IronValiant";
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
  //   [{}, {}, {}];

  // const {pokemon, title} = props
  return (
    <div>
      <h1
        style={{
          fontFamily: "montserrat",
          color: "Red",
        }}
      >
        {title}
      </h1>

      {renderPokemonDetail}
      {/* <Mewtwo mewtwo={pokemon} />
      <IronValiant /> */}
    </div>
  );
}

export default Pokemon;
