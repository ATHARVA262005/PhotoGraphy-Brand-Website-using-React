import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div><Link to="/" className='logo'>John Michael</Link></div>
            <ul className="nav-links">
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                    <ul className="dropdown">
                        <li><Link to="/portfolio/portraits">Portraits</Link></li>
                        <li><Link to="/portfolio/family">Family</Link></li>
                        <li><Link to="/portfolio/maternity">Maternity</Link></li>
                        <li><Link to="/portfolio/commercial">Commercial</Link></li>
                    </ul>
                </li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
