import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Aa from "./components/Aa";
import Home from "./components/Home";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Aa />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
