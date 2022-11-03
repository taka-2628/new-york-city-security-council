import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import '../../stylesheets/LoginSignup.css';

import { UserContext } from '../../context/user';

function LoginForm( { handleSwitch } ){
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
        <div className="title-hr-div">
          <div>
            <div className="title-wrapper">
              <h4>Sign in</h4>
            </div>
            <hr id="left" />
          </div>
          <div>
            <div className="title-wrapper l-s-not-selected">
              <h4 onClick={handleSwitch}>Register</h4>
            </div>
            <hr/>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="username"
            autoComplete="off"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="password"
            autoComplete="current-password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="submit-cont">
            <div>
              <input 
                type="submit" 
                value="&#x203A;"
                className={ ( username && password) ? "active-submit" : ""}
              />
            </div>
          </div>
        </form>

        <div className="l-s-centered" id="forgot-password">
          <p>forgot your <span>password?</span></p>
        </div>
        
        <div className="error-div">
          <p>{error}</p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;