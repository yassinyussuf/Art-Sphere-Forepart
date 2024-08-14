import React, { useState } from 'react';
import axios from 'axios';

const UserComponent = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:4050/register', {
        username,
        email,
        password
      });
      setMessage(response.data.message);
      if (response.status === 201) {
        setUserId(response.data.userId);
        onLogin(response.data.userId); // Pass userId to App component
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred.');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4050/login', {
        email,
        password
      });
      setMessage(response.data.message);
      if (response.status === 200) {
        setUserId(response.data.userId);
        onLogin(response.data.userId); // Pass userId to App component
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred.');
    }
  };

  const handleFetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:4050/${userId}`);
      setMessage(`User: ${response.data.username}, Email: ${response.data.email}`);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred.');
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

      <h2>User Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <h2>Fetch User</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetchUser}>Fetch User</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default UserComponent;
