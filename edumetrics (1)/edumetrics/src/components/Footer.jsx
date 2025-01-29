import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
const currentYear = new Date().getFullYear();

return (
    <footer className="footer">
    <div className="footer-content">
        <div className="footer-section">
        <h3>About Us</h3>
        <p>Your trusted platform for discovering and comparing engineering colleges across India.</p>
        </div>
        
        <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Developer">Developer</a></li>
        </ul>
        </div>
        
        <div className="footer-section">
        <h3>Connect With Us</h3>
        <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        </div>
    </div>
    
    <div className="footer-bottom">
        <p>&copy; {currentYear} Engineering College Guide. All rights reserved.</p>
    </div>
    </footer>
);
};

export default Footer;

