import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RegisterPage from "./components/Register";
import LoginPage  from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
