import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Img } from "react-image";
export const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  return (
    <div className="product">
      <Img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemCount > 0 && <>({cartItemCount})</>}
      </button>
    </div>
  );
};
