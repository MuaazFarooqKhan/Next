import React from 'react';

interface AdminProps {
  username: string;
  role: string;
  onLogout: () => void;
}

const AdminPage: React.FC<AdminProps> = ({ username, role, onLogout }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Admin Panel</h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-4">Welcome to the admin panel!</p>
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome, {username}!</h2>
      <p className="text-lg sm:text-xl text-gray-700 mb-4">Your role is: {role}</p>
      <div className="flex items-center space-x-4">
        {/* Add your admin functionalities here */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminPage;
