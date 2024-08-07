import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ContentCreation from './pages/ContentCreation';
import ContentManagement from './pages/ContentManagement';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/content-creation" element={<ContentCreation />} />
        <Route path="/content/:id" element={<ContentManagement />} />
      </Routes>
    </Router>
  );
};

export default App;
