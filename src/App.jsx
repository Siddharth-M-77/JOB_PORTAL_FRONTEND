import React from "react";
import Navbar from "./components/shared-component/Navbar";
import Home from "./components/Home";
import RegisterPage from "./components/auth/Register";
import LoginPage from "./components/auth/Login";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/VerifyOtpAndChangePassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyCreate from "./components/admin/CreateCompany";
import Footer from "./components/shared-component/Footer";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import PostJob from "./components/admin/Job_create";
import Jobs from "./components/Jobs";
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/verify-otp-reset-password" element={<ResetPassword />} />
        <Route path="/job" element={<Jobs />} />
        <Route
          path="/admin/companies/create"
          element={
            <ProtectedRoute>
              <CompanyCreate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job/create"
          element={
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
