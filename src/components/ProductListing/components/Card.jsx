import React from "react";

function Card({ productDetails }) {
  const { name, price, discount } = productDetails;
  return (
    <>
      <h2>{name}</h2>
      <p>Product Price:{price}</p>
      <p>Product Discount:{discount}</p>
    </>
  );
}
export { Card };
