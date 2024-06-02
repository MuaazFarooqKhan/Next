// pages/admin.tsx

import React from 'react';
// import Layout from '../components/Layout';
interface AdminProps {
    username: string;
    role: string; // Add role prop
    onLogout: () => void;
  }

const AdminPage: React.FC<AdminProps> = ({ username, role, onLogout }) => {
  return (
    // <Layout>
      <div>
        <h1>Admin Panel</h1>
        <p>Welcome to the admin panel!</p>
        <h2>Welcome, {username}!</h2>
        <p>Your role is: {role}</p>
        {/* Add your admin functionalities here */}
        <button onClick={onLogout}>Logout</button>

      </div>
    // </Layout>
  );
};

export default AdminPage;
