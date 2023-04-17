import React, { useState } from "react";

function NewProductForm({ onProductSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Electronics");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, price, image, category });

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({ name, price, image, category, isSold: false }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          onProductSubmit(data);
        });
      } else {
        console.log();
        // setError(data);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label>Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>

        <label>Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Electronics</option>
          <option>Food & Beverages</option>
          <option>Clothing</option>
        </select>

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default NewProductForm;
