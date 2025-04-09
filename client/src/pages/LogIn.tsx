import "../login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
        console.log(username,password)
      const response = await fetch("http://localhost:3001/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // store auth token or user data if needed
        localStorage.setItem("authToken", data.token);
        // navigate to homepage with username
        navigate("/", { state: { username: data.username } });
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again later.");
    }

  
  };

  return (
    <div className="login-form">
      <label htmlFor="username">
        <h2>Username</h2>
      </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <label htmlFor="password">
        <h2>Password</h2>
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={handleLogin} className="login-btn" type="button">
        Log In
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default LogIn;
