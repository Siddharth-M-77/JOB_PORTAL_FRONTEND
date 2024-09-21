import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RegisterPage from "./components/Register";
import LoginPage  from "./components/Login";
import ForgetPassword from "./components/ForgetPassword"
import ResetPassword from "./components/VerifyOtpAndChangePassword"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/verify-otp-reset-password" element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
};

export default App;
