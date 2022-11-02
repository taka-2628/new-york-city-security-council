import { NavLink } from "react-router-dom";
import '../stylesheets/NavBar.css';

function NavFullscreen(){
  return(
    <nav id="nav-fullscreen">
      <NavLink
        to="/about"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        About
      </NavLink>
      <NavLink    
        to="/signin"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
      >
        Login/Signup
      </NavLink>
    </nav>

  )
}

export default NavFullscreen;