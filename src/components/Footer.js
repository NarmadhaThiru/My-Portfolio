// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                {/* You can add social media icons here */}
            </div>
        </footer>
    );
}

export default Footer;
