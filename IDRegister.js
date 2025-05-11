import React from 'react';
import './idRegister.css'; // Import styles for ID registration

function IDRegister({ onLogout }) { // Destructure the onLogout prop
    return (
        <div className="id-register">
            <header className="header">
                <div className="logo">
                    <h1>E-Kebele</h1>
                </div>
                <nav className="nav">
                    <a href="/homepage" className="nav-link">Home</a>
                    <a href="/services" className="nav-link">Services</a>
                    <a href="/contact" className="nav-link">Contact</a>
                    <a onClick={onLogout} className="nav-link login">Logout</a>
                </nav>
            </header>
            <h2>Resident Registration</h2>
            <p>For individuals seeking services such as ID cards and certificates</p>
            <form className="registration-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Your Phone Number" required />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Your Email" required />
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" placeholder="yyyy/mm/dd" required />
                </div>
                <div className="form-group">
                    <label>Region</label>
                    <select required>
                        <option>Select Region</option>
                        <option>Region 1</option>
                        <option>Region 2</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Woreda</label>
                    <select required>
                        <option>Select Woreda</option>
                        <option>Woreda 1</option>
                        <option>Woreda 2</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" placeholder="Your Address" required />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select required>
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Zone</label>
                    <select required>
                        <option>Select Zone</option>
                        <option>Zone 1</option>
                        <option>Zone 2</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Kebele</label>
                    <select required>
                        <option>Select Kebele</option>
                        <option>Kebele 1</option>
                        <option>Kebele 2</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Document Upload</label>
                    <input type="file" required />
                </div>
                <button type="submit">Submit Registration</button>
            </form>
        </div>
    );
}

export default IDRegister;