import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);

      if (
        (userData.username === username || userData.email === username) &&
        userData.password === password
      ) {
        alert("Login successful");
      } else {
        alert("Invalid username/email or password");
      }
    } else {
      alert("User not found");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Username/Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
