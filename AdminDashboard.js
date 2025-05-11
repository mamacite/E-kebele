import React from 'react';
import './AdminDashboard.css'; // Import necessary styles

function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li>Dashboard</li>
                    <li>ID Applications</li>
                    <li>Renewal</li>
                    <li>Birth Certificate</li>
                </ul>
            </div>

            <div className="main-content">
                <h1>Dashboard Overview</h1>
                <div className="stat-boxes">
                    <div className="stat-box"><h2>Total Applications: 1,234</h2></div>
                    <div className="stat-box"><h2>Pending: 56</h2></div>
                    <div className="stat-box"><h2>Approved: 892</h2></div>
                    <div className="stat-box"><h2>Rejected: 286</h2></div>
                </div>

                <div className="search-container">
                    <input type="text" placeholder="Search applications..." />
                    <button className="search-button">Search</button>
                </div>

                <h3>Recent Applications</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Applicant</th>
                            <th>Application No.</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Abebe Kebede</td>
                            <td>ETH-2024-001234</td>
                            <td>Jan 15, 2024</td>
                            <td>
                                <button>View Details</button>
                                <button>Approve</button>
                                <button>Reject</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Sara Tesfaye</td>
                            <td>ETH-2024-001235</td>
                            <td>Jan 16, 2024</td>
                            <td>
                                <button>View Details</button>
                                <button>Approve</button>
                                <button>Reject</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;