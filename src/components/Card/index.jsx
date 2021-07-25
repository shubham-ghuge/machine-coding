import React from "react";
import styles from "./Card.module.scss";

function Card({ productDetails }) {
  const { name, price, discount, brand, sizes, image, actualPrice } =
    productDetails;
  return (
    <div className="grocery-card">
      <div className={styles.cardThumbnail}>
        <img src={image} alt="" />
      </div>
      <div className={"card-details"}>
        <h3 className={"card-header"}>{name}</h3>
        <span className={"badge-rect-danger"}>{discount}% OFF</span>
        <p className="card-price">
          &#x20b9;{price}.00
          <span className={"strike"}>MRP ₹ {actualPrice}.00</span>
        </p>
        <h4>
          Brand: <span className="fw-400">{brand}</span>
        </h4>
        <h4>
          Sizes:
          {sizes.map((j, idx) => (
            <span key={idx} className="fw-400 ml-1">
              {j}
            </span>
          ))}
        </h4>
      </div>
    </div>
  );
}
export { Card };
