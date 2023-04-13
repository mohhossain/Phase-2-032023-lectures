import "./App.css";
import Pokemon from "./Pokemon";
import pokemon from "./data";
import { useState } from "react";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState("Magikarp");

  function onPokemonSelect(name) {
    setCurrentPokemon(name);
  }

  return (
    <div className="App">
      <h1>Current pokemon: {currentPokemon}</h1>
      {/* a prop is an object */}
      {/* a prop is passed as a html attribute */}
      {/* a prop can be named anything */}
      <Pokemon
        pokemon={pokemon}
        title={"Pokemon World"}
        onPokemonSelect={onPokemonSelect}
      />
    </div>
  );
}

export default App;
