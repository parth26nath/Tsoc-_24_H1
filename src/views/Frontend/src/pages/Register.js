// src/pages/Register.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';
import './Register.css'

const Register = () => {
    return (
        <div>
            <Header />
            <main>
                <RegisterForm />
            </main>
            <Footer />
        </div>
    );
};

export default Register;
