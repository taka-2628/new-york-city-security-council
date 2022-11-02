import { NavLink } from "react-router-dom";
import '../stylesheets/NavBar.css';

function NavBar( { isHome, setIsHome } ){
  return(
    <nav>
      <NavLink
        to="/about"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
        onClick={() => setIsHome(false)}
      >
        About
      </NavLink>
      <NavLink    
        to="/signin"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
        onClick={() => setIsHome(false)}
      >
        Login/Signup
      </NavLink>
      <NavLink    
        to="/map"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
        onClick={() => setIsHome(false)}
      >
        Map
      </NavLink>
      <NavLink    
        to="/contribute"
        exact="true"
        className={({ isActive }) => (isActive ? "active-link" : "non-active-link")}
        onClick={() => setIsHome(false)}
      >
        Contribute
      </NavLink>
    </nav>
  )
}

export default NavBar;