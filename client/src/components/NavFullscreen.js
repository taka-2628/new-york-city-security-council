import { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../stylesheets/NavBar.css';

import { UserContext } from '../context/user';

function NavFullscreen(){
  const { user, setUser } = useContext(UserContext);

  function handleLogout(){
    fetch("http://localhost:3000/logout", { method: "DELETE" })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return(
    <nav id="nav-fullscreen">
      <NavLink
        to="/about"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        About
      </NavLink>

      { 
        user ?
        <span
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </span> :
        <NavLink    
        to="/signin"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
        >
          Login/Signup
        </NavLink> 
      }
    </nav>
  )
}

export default NavFullscreen;