import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const getTotalCartamount = () => {
    let totalAmount = 0;
    for (const item of cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
};
const addToCart = (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
};

const removeFromCart = (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
};
const updateCartItemCount = (newAmount, itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
};
const checkOut = () => {
  setCartItems(getDefaultCart());
};
const contextValue = {
  cartItems,
  addToCart,
  updateCartItemCount,
  removeFromCart,
  getTotalCartamount,
  checkOut,
};

return (
  <ShopContextProvider value={contextValue}>
    {props.children}
  </ShopContextProvider>
);
