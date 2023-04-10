import "./App.css";
import Pokemon from "./Pokemon";

// const mewtwo = {
//   image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
//   name: "Mewtwoooooooo",
// };

const pokemon = [
  {
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    name: "Mewtwoooooooo",
  },

  {
    image: "https://www.serebii.net/scarletviolet/pokemon/new/1006.png",
    name: "Iron variant",
  },

  {
    name: "Pikachu",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  },
];
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <br></br>
      {/* a prop is an object */}
      {/* a prop is passed as a html attribute */}
      {/* a prop can be named anything */}
      <Pokemon pokemon={pokemon} title={"Pokemon List"} />
    </div>
  );
}

export default App;
