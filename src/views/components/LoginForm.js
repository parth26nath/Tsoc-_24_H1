// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call API for login
        // On success:
        navigate('/dashboard');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Welcome Back</h2>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="/register">Register now</a></p>
        </form>
    );
};

export default LoginForm;
