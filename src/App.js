import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import NewProductForm from "./NewProductForm";

function App() {
  const [products, setProducts] = useState([]);
  // fetching the products from the API
  useEffect(() => {
    console.log("App starting");
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const onProductSubmit = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="App">
      <h1>The Goodie Pile</h1>
      <NewProductForm onProductSubmit={onProductSubmit}></NewProductForm>
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;
