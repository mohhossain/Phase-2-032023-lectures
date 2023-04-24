import React, { useState, useContext } from "react";
import { MyContext } from "./MyProvider";

function NewDogForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");

  const { newDog } = useContext(MyContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          newDog({ name, age, breed });
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default NewDogForm;
