"use client";
// pages/index.tsx

import { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import AdminPage from '@/components/rolePage/Admin';
import AgentPage from '@/components/rolePage/Agent';
import SalesPage from '@/components/rolePage/Sales';
import "./globals.css";
import NavBar from '@/components/NavBar';


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

  const handleLogin = (loginData: { username: string; password: string }) => {
    const storedUserData = localStorage.getItem('userData');
    debugger
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      let userFound = false; // Flag to track if a matching user is found
      for (const user of userData) {
        if (
          loginData.username === user.username &&
          loginData.password === user.password
        ) {
          setUsername(user.username);
          setRole(user.role);
          setLoggedIn(true);
          userFound = true; // Set flag to true indicating a matching user is found
        }
      }
      if (!userFound) {
        // Alert if no matching user is found after iterating through all users
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('No user data found. Please sign up first.');
    }
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
    <>    <NavBar /> {/* Include the NavBar component once */}

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
    </>
  );
};

export default Home;