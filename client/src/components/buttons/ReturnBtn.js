import { NavLink } from "react-router-dom";
import '../../stylesheets/CloseBtnReturnBtn.css';

function ReturnBtn(){
  return (
    <NavLink
    to="/"
    exact="true"
    className="close-btn"
    >
      &times;
    </NavLink>
  )
}

export default ReturnBtn;