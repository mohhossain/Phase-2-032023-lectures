import ProductCard from "./ProductCard";
import { useState } from "react";

function ProductList({ products }) {
  const [removeProductId, setRemoveProductId] = useState(null);
  console.log(products);
  const removeProduct = (id) => {
    setRemoveProductId(id);
  };

  const filteredProducts = products.filter((product) => {
    return product.id !== removeProductId;
  });

  const productsToRender = filteredProducts.map((product) => {
    return (
      <ProductCard
        key={product.name}
        product={product}
        removeProduct={removeProduct}
      ></ProductCard>
    );
  });
  return <div>{productsToRender}</div>;
}

export default ProductList;
