import React from "react";

function Mewtwo({ mewtwo }) {
  return (
    <div>
      <img src={mewtwo.image}></img>
      <p>{mewtwo.name}</p>
    </div>
  );
}

export default Mewtwo;
