import React, { createContext, useContext, useEffect, useState } from "react";
import Home from "../pages/Home";
// create context
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
