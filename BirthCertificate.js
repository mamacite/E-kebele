import React, { useState } from 'react';
import './BirthCertificate.css'; // Import necessary styles

function BirthCertificate({ onLogout }) { // Destructure onLogout
    const [applicantName, setApplicantName] = useState('');
    const [region, setRegion] = useState('');
    const [zone, setZone] = useState('');
    const [motherName, setMotherName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ applicantName, region, zone, motherName, fatherName, dateOfBirth });
    };

    return (
        <div className="birth-certificate">
            <header className="header">
                <div className="logo">
                    <h1>E-Kebele</h1>
                </div>
                <nav className="nav">
                    <a href="/homepage" className="nav-link">Home</a>
                    <a href="/services" className="nav-link">Services</a>
                    <a href="/contact" className="nav-link">Contact</a>
                    <a onClick={onLogout} className="nav-link login" style={{ cursor: 'pointer' }}>Logout</a>
                </nav>
            </header>
        
            <div className="form-container">
                <h1>Birth Certificate Application</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Your Name:
                        <input type="text" value={applicantName} onChange={(e) => setApplicantName(e.target.value)} required />
                    </label>
                    <label>
                        Region:
                        <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} required />
                    </label>
                    <label>
                        Zone:
                        <input type="text" value={zone} onChange={(e) => setZone(e.target.value)} required />
                    </label>
                    <label>
                        Mother's Name:
                        <input type="text" value={motherName} onChange={(e) => setMotherName(e.target.value)} required />
                    </label>
                    <label>
                        Father's Name:
                        <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} required />
                    </label>
                    <label>
                        Date of Birth:
                        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
                    </label>
                    <button type="submit">Submit Application</button>
                </form>
            </div>
        </div>
    );
}

export default BirthCertificate;