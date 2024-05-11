import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import { FetchProvider } from "./context/Fetchdata";
import { Contact } from "./pages/contact/Contact";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { CardInfo } from "./pages/shop/CardInfo";
import "./App.css";
function App() {
  return (
    <div className="App">
      <FetchProvider>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cardinfo" element={<CardInfo />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </FetchProvider>
    </div>
  );
}

export default App;
