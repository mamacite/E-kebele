import React, { useState } from 'react';
import Login from './components/Login'; 
import Homepage from './components/Homepage'; 
import IDRegister from './components/IDRegister'; 
import IDRenew from './components/IDRenew'; 
import BirthCertificate from './components/BirthCertificate'; 
import AdminDashboard from './components/AdminDashboard'; 
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('login');

    const handleLogin = () => {
        setCurrentPage('homepage');
    };

    const handleLogout = () => {
        setCurrentPage('login');
    };

    const handleApplyID = () => {
        setCurrentPage('idRegister');
    };

    const handleIDRenew = () => {
        setCurrentPage('idRenew');
    };

    const handleBirthCertificate = () => {
        setCurrentPage('birthCertificate');
    };

    const handleAdminDashboard = () => {
        setCurrentPage('adminDashboard');
    };

    const goToHome = () => {
        setCurrentPage('homepage');
    };

    const goToServices = () => {
        // Assuming you have a services page component
        setCurrentPage('services'); // Ensure you create a services component if you don't have one
    };

    const goToContact = () => {
        // Assuming you have a contact page component
        setCurrentPage('contact'); // Ensure you create a contact component if you don't have one
    };

    return (
        <div className="app">
            {currentPage === 'homepage' && (
                <Homepage 
                    onLogout={handleLogout} 
                    onApplyID={handleApplyID} 
                    onIDRenew={handleIDRenew} 
                    onBirthCertificate={handleBirthCertificate}
                    onAdminDashboard={handleAdminDashboard}
                    goToHome={goToHome}
                    goToServices={goToServices}
                    goToContact={goToContact}
                />
            )}
            {currentPage === 'idRegister' && <IDRegister onLogout={handleLogout} />}
            {currentPage === 'idRenew' && <IDRenew onLogout={handleLogout} />}
            {currentPage === 'birthCertificate' && <BirthCertificate onLogout={handleLogout} />}
            {currentPage === 'adminDashboard' && <AdminDashboard onLogout={handleLogout} />}
            {currentPage === 'login' && <Login onLogin={handleLogin} />}
            {currentPage === 'services' && <div>Services Page Content</div>} {/* Placeholder for Services */}
            {currentPage === 'contact' && <div>Contact Page Content</div>} {/* Placeholder for Contact */}
        </div>
    );
}

export default App;