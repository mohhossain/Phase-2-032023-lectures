import "./App.css";
import Pokemon from "./Pokemon";
import pokemon from "./data";

function App() {
  return (
    <div className="App">
      {/* a prop is an object */}
      {/* a prop is passed as a html attribute */}
      {/* a prop can be named anything */}
      <Pokemon pokemon={pokemon} title={"Pokemon World"} />
    </div>
  );
}

export default App;
