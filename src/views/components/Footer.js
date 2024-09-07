
import React from 'react';
import './Footer.css'; // Optional: To include styles for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
            <p>&copy; 2024 Content Creation Page</p>
                <ul className="footer-links">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
