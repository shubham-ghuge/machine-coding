import React from "react";
import { Filters } from "./components/Filters";
import { ProductListing } from "./components/ProductListing";

function Home() {
  return (
    <>
      <div className="d-flex">
        <Filters />
        <ProductListing />
      </div>
    </>
  );
}
export { Home };
