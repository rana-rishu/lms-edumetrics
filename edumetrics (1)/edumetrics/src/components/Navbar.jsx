import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = UserAuth();
    const navigate = useNavigate(); 
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

return (
    <nav className="navbar">
    <div className="nav-brand">
        <Link to="/">EduMetrics.</Link>
    </div>
    
    <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </button>

    {user &&
    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        {/* <Link to="/" onClick={toggleMenu}>Home</Link> */}
        <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
        <Link to="/review" onClick={toggleMenu}>College Review</Link>
        <Link to="/developer" onClick={toggleMenu}>Developers</Link>
        <Link to="/profile" onClick={toggleMenu}>Profile</Link>

    </div>
    }

        <div className="contact-us"><button className="contactus" onClick={() => navigate(`/contact`)}>Contact us</button></div>
    </nav>
);
};

export default Navbar;

