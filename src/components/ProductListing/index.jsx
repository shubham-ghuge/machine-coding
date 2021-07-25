import React from "react";
import { Card } from "./components/Card";
import { useProductContext } from "../../contexts";

function ProductListing() {
  const { data } = useProductContext();
  return data.map((product) => {
    return <Card key={product.id} productDetails={product} />;
  });
}
export { ProductListing };
