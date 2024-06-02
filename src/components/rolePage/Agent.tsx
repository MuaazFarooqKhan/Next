// pages/agent.tsx

import React from 'react';
// import Layout from '../components/Layout';
interface AgentProps {
    username: string;
    role: string; // Add role prop
    onLogout: () => void;
  }

const AgentPage: React.FC<AgentProps> = ({ username, role, onLogout }) => {
  return (
    // <Layout>
      <div>
        <h1>Agent Panel</h1>
        <p>Welcome to the Agent panel!</p>
        {/* Add your Agent functionalities here */}
        <button onClick={onLogout}>Logout</button>

      </div>
    // </Layout>
  );
};

export default AgentPage;
