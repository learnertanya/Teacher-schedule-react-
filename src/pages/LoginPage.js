import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Text } from '@chakra-ui/react';


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    if (username === "admin" && password === "password") {
      // If credentials are correct, redirect to the main page
      navigate("/schedule");
    } else {
      // If credentials are incorrect, display an error message
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
