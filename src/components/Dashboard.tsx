import React from 'react';

interface DashboardProps {
  username: string;
  role: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ username, role, onLogout }) => {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Welcome, {username}!</h2>
      <p className="text-base sm:text-lg text-gray-700 mb-4">Your role is: {role}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
