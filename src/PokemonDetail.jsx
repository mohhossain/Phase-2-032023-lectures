import React from "react";

function PokemonDetail({ name, image, onPokemonSelect }) {
  function handleClick() {
    console.log(name, image);
    onPokemonSelect(name);
  }
  return (
    <div onClick={handleClick}>
      <img height={250} src={image}></img>
      <p>{name}</p>
    </div>
  );
}

export default PokemonDetail;
