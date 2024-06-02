// pages/sales.tsx

import React from 'react';
// import Layout from '../components/Layout';
interface SalesProps {
    username: string;
    role: string; // Add role prop
    onLogout: () => void;
  }

const SalesPage: React.FC<SalesProps> = ({ username, role, onLogout })  => {
  return (
    // <Layout>
      <div>
        <h1>Sales Panel</h1>
        <p>Welcome to the Sales panel!</p>
        {/* Add your Sales functionalities here */}
        <button onClick={onLogout}>Logout</button>

      </div>
    // </Layout>
  );
};

export default SalesPage;
