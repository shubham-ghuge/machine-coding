import React, { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, productReducer } from "../reducers";

const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { data, brands, sizes } = state;

  useEffect(() => {
    state.brands.length === 0 &&
      dispatch({
        type: "INITIALIZE_BRANDS",
        payload: state.data.map((i) => i.brand),
      });
  }, []);

  return (
    <ProductContext.Provider value={{ data, brands, sizes, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
export const useProductContext = () => useContext(ProductContext);
