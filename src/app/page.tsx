"use client";
// pages/index.tsx

import { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import AdminPage from '@/components/rolePage/Admin';
import AgentPage from '@/components/rolePage/Agent';
import SalesPage from '@/components/rolePage/Sales';
import "./globals.css";


const Home = () => {

  // created two state one for login and other is for logout. They will use on everypage so write in a main file.
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  const handleSignUp = (userData: { username: string; password: string; role: string }) => {
    setUsername(userData.username);
    setRole(userData.role);
    setLoggedIn(true);
  };

  const handleLogin = (userData: { username: string; password: string; role: string }) => {
    setUsername(userData.username);
    setRole(userData.role);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear user data from local storage
    setLoggedIn(false);
    setUsername('');
    setRole('');
  };

  const renderDashboard = () => {
    switch (role) {
      case 'user':
        return <AdminPage username={username} role={role} onLogout={handleLogout} />;
      case 'agent':
        return <AgentPage username={username} role={role} onLogout={handleLogout} />;
      case 'salesman':
        return <SalesPage username={username} role={role} onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {!loggedIn ? (
        <div className="p-6 bg-gray-800 text-white rounded shadow-md w-full max-w-md">
          <h1 className="mb-6 text-2xl font-bold text-center">Welcome</h1>
          <SignUpForm onSignUp={handleSignUp} />
          <LoginForm onLogin={handleLogin} />
        </div>
      ) : (
        renderDashboard()
      )}
    </div>
  );
};

export default Home;