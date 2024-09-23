import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./pages/siginin";  
import Footer from "./components/footer";
import Header from "./components/header";
import Register from "./pages/register";  
import Cc from "./pages/cc";   // Content creation page
import Home from "./pages/home";    
import Cmanage from "./pages/cmanage";    
import Dashboard from "./pages/Dashboard"; // Import your new Dashboard component

import './index.css';

function App() {
  const isDashboard = window.location.pathname === "/dashboard";

  return (
    <Router>
      {!isDashboard && <Header />} {/* Only show Header if not on Dashboard */}
      
      <div className="main-content" style={{ paddingTop: isDashboard ? '0' : '80px', paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/signin" element={<Example />} /> 
          <Route path="/signup" element={<Register />} />
          <Route path="/cc" element={<Cc />} /> 
          <Route path="/cmanage" element={<Cmanage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      
      {!isDashboard && <Footer />} {/* Only show Footer if not on Dashboard */}
    </Router>
  );
}

export default App;
