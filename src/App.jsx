import React from "react";
import Navbar from "./components/Navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Coin from "./pages/Coin/Coin.jsx";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinID" element={<Coin />} />
      </Routes>
    </div>
  );
};

export default App;
