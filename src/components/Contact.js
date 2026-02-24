// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Get In Touch</h2>
                <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                <div className="contact-info">
                    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p> {/* Replace with your email */}
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p> {/* Replace with your LinkedIn */}
                    <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p> {/* Replace with your GitHub */}
                </div>
                {/* You can add a contact form here later if desired */}
            </div>
        </section>
    );
}

export default Contact;
