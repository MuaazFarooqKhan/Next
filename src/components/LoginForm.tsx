// components/LoginForm.tsx

import { useState } from 'react';

interface LoginFormProps {
  onLogin: (userData: { username: string; password: string; role: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validate input fields
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    // Retrieve user data from local storage (assuming it's already saved during signup)
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Call the onLogin function with the user data
      onLogin(userData);
    } else {
      alert('User data not found. Please sign up first.');
    }
  };

  return (
    <div className="mb-4">
      <h2 className="mb-4 text-xl font-semibold">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-4 text-gray-900 bg-gray-200 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 text-gray-900 bg-gray-200 rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full p-2 bg-green-500 rounded hover:bg-green-700"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
