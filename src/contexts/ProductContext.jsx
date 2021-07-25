import React, { createContext, useContext } from "react";
import productsData from "../data/data.json";

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  return (
    <ProductContext.Provider value={{ data: productsData }}>
      {children}
    </ProductContext.Provider>
  );
}
export const useProductContext = () => useContext(ProductContext);
