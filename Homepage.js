import React from 'react';
import '../App.css'; // Importing styles from App.css
import './Homepage.css';

function Homepage({ onLogout, onApplyID, onIDRenew, onBirthCertificate, onAdminDashboard, goToHome, goToServices, goToContact }) {
    return (
        <div className="homepage">
            <header className="header">
                <div className="logo">
                    <h1>E-Kebele</h1>
                </div>
                <nav className="nav">
                    <a onClick={goToHome} className="nav-link">Home</a>
                    <a onClick={goToServices} className="nav-link">Services</a>
                    <a onClick={goToContact} className="nav-link">Contact</a>
                    <a onClick={onLogout} className="nav-link login">Logout</a>
                </nav>
            </header>
            <div className="hero-section">
                <img src="images.jpg" alt="E-Kebele" className="hero-image" />
                <div className="hero-text">
                    <h2>E-Kebele Online Residence ID Application</h2>
                    <p>Quick, secure, and efficient digital ID services for Ethiopian residents</p>
                </div>
            </div>
            <div className="services">
                <div className="service-item">
                    <button onClick={onApplyID} className="button">Apply for ID</button>
                </div>
                <div className="service-item">
                    <button onClick={onBirthCertificate} className="button">Birth Certificates</button>
                </div>
                <div className="service-item">
                    <button onClick={onIDRenew} className="button">ID Renew</button>
                </div>
                <div className="service-item">
                    <button onClick={onAdminDashboard} className="button">Admin Dashboard</button>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
                <div className="footer-info">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday</p>
                </div>
            </footer>
        </div>
    );
}

export default Homepage;