import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2024 by Atharva Ralegankar. Powered and secured by <a href="/" target="_blank" rel="noopener noreferrer">CodeGeeks</a></p>
            <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </footer>
    );
}

export default Footer;
