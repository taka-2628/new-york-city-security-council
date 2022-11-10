import { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../stylesheets/NavBar.css';

import { UserContext } from '../context/user';

function NavBar( { } ){
  const { user, setUser } = useContext(UserContext);

  function handleLogout(){
    fetch("/logout", { method: "DELETE" })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return(
    <nav className="three-five">
      <NavLink
        to="/about"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        About
      </NavLink>
      <NavLink    
        to="/map"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Map
      </NavLink>
      <NavLink    
        to="/contribute"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Contribute
      </NavLink>
      {
        user ?
        <>
          <NavLink
            to="/profile"
            exact="true"
            className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
          >
            My Page
          </NavLink>
          <span
          className="logout-btn"
          onClick={handleLogout}
          >
            Logout
          </span> 
        </> :
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

export default NavBar;