import React from "react";
import { useProductContext } from "../../../contexts";

function Filters() {
  const { dispatch, brands, sizes } = useProductContext();
  return (
    <div className="w-40 mt-6 pt-6">
      <h2>Sort Products</h2>
      <button className="btn-primary my-2">Clear filters</button>
      <div className="mb-4">
        <h3>By Price</h3>
        <label>
          <span>low to high</span>
          <input
            type="radio"
            name="sort_products"
            onChange={() => dispatch({ type: "SORT_BY_PRICE", payload: true })}
          />
        </label>
        <label>
          <span>high to low</span>
          <input
            type="radio"
            name="sort_products"
            onChange={() => dispatch({ type: "SORT_BY_PRICE", payload: false })}
          />
        </label>
      </div>
      <div className="mb-4">
        <h3>For</h3>
        <label>
          <span>Men</span>
          <input
            type="radio"
            name="ideal_for"
            onChange={() => dispatch({ type: "IDEAL_FOR", payload: "Men" })}
          />
        </label>
        <label>
          <span>Women</span>
          <input
            type="radio"
            name="ideal_for"
            onChange={() => dispatch({ type: "IDEAL_FOR", payload: "Women" })}
          />
        </label>
      </div>
      <div className="mb-4">
        <h3>Choose Size</h3>
        {sizes.map((i, idx) => (
          <label key={idx}>
            <span>{i}</span>
            <input
              type="checkbox"
              name="choose_size"
              value={i}
              onChange={(e) =>
                e.target.checked
                  ? dispatch({ type: "SORT_BY_SIZES", payload: i })
                  : dispatch({ type: "RESET_FILTERS", payload: i })
              }
            />
          </label>
        ))}
      </div>
      <div className="mb-4">
        <h3>Choose Brands</h3>
        {brands.map((i, idx) => (
          <div key={idx}>
            <label>
              <span>{i.name}</span>
              <input
                type="checkbox"
                value={i.name}
                checked={i.isSelected}
                name="choose_size"
                onChange={() =>
                  dispatch({
                    type: "SORT_BY_BRAND",
                    payload: { name: i.name, status: i.isSelected },
                  })
                }
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
export { Filters };
