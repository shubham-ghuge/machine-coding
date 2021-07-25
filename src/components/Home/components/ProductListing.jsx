import React from "react";
import { Card } from "../../Card";
import { useProductContext } from "../../../contexts";

function ProductListing() {
  const { data } = useProductContext();
  return (
    <div className="flex-column">
      <h1 className="text-center">Products</h1>
      <div className="flex-layout jc-center">
        {data.length !== 0 ? (
          data.map((product) => (
            <Card key={product.id} productDetails={product} />
          ))
        ) : (
          <h4 className="text-center fw-400 fsz-3 mt-6">No products available</h4>
        )}
      </div>
    </div>
  );
}
export { ProductListing };
