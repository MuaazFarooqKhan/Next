import { useState } from 'react';

interface SignUpFormProps {
    onSignUp: (userData: { username: string; password: string; role: string }) => void;
}

interface FormErrors {
    username?: string;
    password?: string;
    role?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUp }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const handleSignUp = () => {
        // Clear previous errors
        setErrors({});

        // Validate input fields
        const newErrors: FormErrors = {};
        if (!username || username.length < 5 || username.length > 20) {
            newErrors['username'] = 'Username must be between 5 and 20 characters';
        }
        if (!password || password.length < 7 || password.length > 15) {
            newErrors['password'] = 'Password must be between 7 and 15 characters';
        }
        if (!role || role.length < 4 || role.length > 15) {
            newErrors['role'] = 'Role must be between 4 and 15 characters';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Proceed with sign-up process
        const storedArrayString = localStorage.getItem('userData');

        let userData = storedArrayString ? JSON.parse(storedArrayString) : [];
        userData.push({ username, password, role });
        console.log(userData);

        localStorage.setItem('userData', JSON.stringify(userData));
        alert('User signed up successfully!');
        // Call the onSignUp function with the user data
        onSignUp({ username, password, role });
    };

    return (
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mb-4 text-gray-900 bg-gray-200 rounded"
            />
            {errors.username && <div className="text-red-500">{errors.username}</div>}
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-4 text-gray-900 bg-gray-200 rounded"
            />
            {errors.password && <div className="text-red-500">{errors.password}</div>}
            <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 mb-4 text-gray-900 bg-gray-200 rounded"
            />
            {errors.role && <div className="text-red-500">{errors.role}</div>}
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
