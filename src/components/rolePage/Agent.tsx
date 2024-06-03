import React from 'react';

interface AgentProps {
  username: string;
  onLogout: () => void;
}

const AgentPage: React.FC<AgentProps> = ({ username, onLogout }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Agent Panel</h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-4">Welcome {username} to the Agent panel!</p>
      <div className="flex items-center space-x-4">
        {/* Add your Agent functionalities here */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AgentPage;
