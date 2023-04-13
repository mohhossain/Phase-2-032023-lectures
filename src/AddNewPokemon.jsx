import { useState } from "react";

function AddNewPokemon({ addPokemon }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleName(e) {
    setName(e.target.value);
    // console.log(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
    // console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, image, " New Pokemon..");
    addPokemon({
      name: name,
      image: image,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          onChange={handleName}
          type="text"
          name="name"
          value={name}
        ></input>
        <label>Image URL</label>
        <input
          onChange={handleImage}
          type="text"
          name="image"
          value={image}
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddNewPokemon;
