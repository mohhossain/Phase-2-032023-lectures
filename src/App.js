import { useState, useEffect, createContext } from "react";
import Container from "./Container";
import MyProvider from "./MyProvider";
import NewDogForm from "./NewDogForm";

function App() {
  // fetch http://localhost:3000/dogs in useEffect and set the data in state
  return (
    <div className="App">
      <MyProvider>
        <Container></Container>
        <NewDogForm></NewDogForm>
      </MyProvider>
    </div>
  );
}

export default App;
