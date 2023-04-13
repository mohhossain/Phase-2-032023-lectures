import React from "react";

function PokemonDetail({ name, image }) {
  console.log(name, image);
  return (
    <div>
      <img height={250} src={image}></img>
      <p>{name}</p>
    </div>
  );
}

export default PokemonDetail;
