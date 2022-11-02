import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import '../stylesheets/LoginSignup.css';

import { UserContext } from '../context/user';

function LoginForm( { } ){
  const { setUser } = useContext(UserContext);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          navigate("/about");
        });
      } else {
        r.json().then((err) => setError(err.error));
      }
    });
  }

  return (
    <div id="login" className="five-nine">
      <div className="login-signup-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="username"
            autoComplete="off"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            autoComplete="current-password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login"/>
        </form>
        <div className="error-div">
          <p>{error}</p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;