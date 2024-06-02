// components/SignUpForm.tsx

import { useState } from 'react';

interface SignUpFormProps {
  onSignUp: (userData: { username: string; password: string; role: string }) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSignUp = () => {
    // Validate input fields
    if (!username || !password || !role) {
      alert('Please enter username, password, and role');
      return;
    }

    localStorage.setItem('userData', JSON.stringify({ username, password, role }));
    alert('User signed up successfully!');
    // Call the onSignUp function with the user data
    onSignUp({ username, password, role });
  };

  return (
    <div className="mb-4">
      <h2 className="mb-4 text-xl font-semibold">Sign Up</h2>
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
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-2 mb-4 text-gray-900 bg-gray-200 rounded"
      />
      <button
        onClick={handleSignUp}
        className="w-full p-2 bg-blue-500 rounded hover:bg-blue-700"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUpForm;
