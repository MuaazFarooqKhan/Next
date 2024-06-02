// components/Dashboard.tsx

interface DashboardProps {
    username: string;
    role: string; // Add role prop
    onLogout: () => void;
  }
  
  const Dashboard: React.FC<DashboardProps> = ({ username, role, onLogout }) => {
    return (
      <div>
        <h2>Welcome, {username}!</h2>
        <p>Your role is: {role}</p>
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  };
  
  export default Dashboard;
  