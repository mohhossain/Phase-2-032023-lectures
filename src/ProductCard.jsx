import { useState } from "react";

function ProductCard({ product, removeProduct }) {
  const [isSold, setIsSold] = useState(product.isSold);

  const handleProductBuy = () => {
    fetch(`http://localhost:4000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({ isSold: !isSold }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsSold(data.isSold);
      });
  };

  const handleProductDelete = () => {
    fetch(`http://localhost:4000/products/${product.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        removeProduct(product.id);
      });
  };
  return (
    <div>
      <img width={250} src={product?.image}></img>
      <h3>{product?.name}</h3>
      <p>${product?.price}</p>
      <p>{product?.category}</p>
      <button onClick={handleProductBuy}>{isSold ? "Sold out" : "Buy"}</button>
      <button onClick={handleProductDelete}>Delete</button>
    </div>
  );
}

export default ProductCard;
