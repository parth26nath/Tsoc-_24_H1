// src/pages/Login.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <div>
            <Header />
            <main>
                <LoginForm />
            </main>
            <Footer />
        </div>
    );
};

export default Login;
