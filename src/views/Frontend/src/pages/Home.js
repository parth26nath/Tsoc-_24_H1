// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Content Creation Page</h1>
                <p>Create and manage your digital content with ease.</p>
                <div>
                    <button>Get Started</button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
