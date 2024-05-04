import React from "react";
import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Navbar>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
