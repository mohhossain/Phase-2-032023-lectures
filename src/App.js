import "./App.css";
import React, { useState } from "react";
import DisplayCounter from "./DisplayCounter";

function App() {
  // defining state
  const [number, setNumber] = useState(0);

  function increment() {
    console.log("incrementing");
    setNumber(number + 1);
    // console.log(number);
    // setNumber(number + 3);
    // console.log(number);
    // setNumber((prev) => {
    //   console.log(prev);
    //   return prev + 1;
    // });
  }

  function decrement() {
    console.log("decrementing");
    setNumber(number - 1);
  }

  // setNumber(1)
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      <br></br>
      <DisplayCounter counter={number}></DisplayCounter>
    </div>
  );
}

export default App;
