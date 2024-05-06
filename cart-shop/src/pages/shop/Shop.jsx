import React from "react";
import { PRODUCTS } from "../../itemm";
import { Product } from "./product";

import "./Shop.css";

export const Shop = () => {
  console.log("shopv opened");

  return (
    <div className="Shop">
      <div className="shopTitle">
        <h1>Tech shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
