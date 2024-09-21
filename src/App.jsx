import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    {/* <Navbar />             */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/job" element={<Job />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  </Router>
  );
};

export default App;
