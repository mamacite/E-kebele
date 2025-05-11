import React from 'react';
import './idRenew.css'; // Import styles for ID renewal

function IDRenew({ onLogout }) { // Destructure the onLogout prop
    return (
        <div className="id-renew">
            <header className="header">
                <div className="logo">
                    <h1>E-Kebele</h1>
                </div>
                <nav className="nav">
                    <a href="/homepage" className="nav-link">Home</a>
                    <a href="/services" className="nav-link">Services</a>
                    <a href="/contact" className="nav-link">Contact</a>
                    <a onClick={onLogout} className="nav-link login" style={{ cursor: 'pointer' }}>Logout</a> {/* Added cursor style */}
                </nav>
            </header>
            <h2>Renew Application</h2>
            <p>For individual residents seeking services such as ID cards renewal</p>
            <form className="renew-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                    <label>ID Number</label>
                    <input type="text" placeholder="Enter your ID number" required />
                </div>
                <div className="form-group">
                    <label>Current Address</label>
                    <input type="text" placeholder="Enter your current address" required />
                </div>
                <div className="form-group">
                    <label>Old ID Upload</label>
                    <input type="file" required />
                </div>
                <button type="submit">Submit Form</button>
            </form>
        </div>
    );
}

export default IDRenew;