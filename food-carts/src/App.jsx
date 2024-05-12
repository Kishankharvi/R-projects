import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import { AuthProvider } from "./context/Authcontext.jsx";
import Home from "./pages/Home/Home.jsx";
import { Contact } from "./pages/contact/Contact";
import { Navbar } from "./components/Navbar";
import TransactionDetails from "./pages/Order/TransactionDetails.jsx";
import { Shop } from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { CardInfo } from "./pages/shop/CardInfo";
import Login from "./pages/User/Login";
import SignIn from "./pages/User/SignIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cardinfo" element={<CardInfo />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<TransactionDetails />} />
              <Route path="/login" element={<Login />} />;
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
