"use client";
// pages/index.tsx

import { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import AdminPage from '@/components/rolePage/Admin';
import AgentPage from '@/components/rolePage/Agent';
import SalesPage from '@/components/rolePage/Sales';
import "./globals.css";
import { demos } from '../lib/demos';
import Link from 'next/link';

const Home = () => {

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
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      let userFound = false;
      for (const user of userData) {
        if (
          loginData.username === user.username &&
          loginData.password === user.password
        ) {
          setUsername(user.username);
          setRole(user.role);
          setLoggedIn(true);
          userFound = true;
        }
      }
      if (!userFound) {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('No user data found. Please sign up first.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setRole('');
  };

  const renderDashboard = () => {
    switch (role) {
      case 'user':
        return <AdminPage username={username} role={role} onLogout={handleLogout} />;
      case 'agent':
        return <AgentPage username={username} onLogout={handleLogout} />;
      case 'salesman':
        return <SalesPage username={username} onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  return (
    <>
  <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 px-1 sm:px-6 lg:px-8">
    <div className="space-y-8 flex-1 flex justify-center items-center"> {/* Flex-grow to fill remaining space */}
      <div className="space-y-8 text-white">
        {demos.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {item.name}
                      </div>
                      {item.description ? (
                        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    {!loggedIn ? (
      <div className="w-full max-w-md lg:max-w-sm space-y-8 flex flex-col justify-center items-center lg:items-start"> {/* Use flexbox to arrange items */}
        <div className="p-6 bg-gray-800 text-white rounded shadow-md w-full lg:w-auto">
          <h1 className="mb-6 text-2xl font-bold text-center lg:text-left">Welcome</h1>
          {/* Render login form */}
          <LoginForm onLogin={handleLogin} />
        </div>
        <div className="p-6 bg-gray-800 text-white rounded shadow-md w-full lg:w-auto">
          {/* Render signup form */}
          <SignUpForm onSignUp={handleSignUp} />
        </div>
      </div>
    ) : (
      // Render dashboard
      renderDashboard()
    )}
  </div>
</>

  );
};

export default Home;
