import { NavLink } from "react-router-dom";
import '../../stylesheets/CloseBtnReturnBtn.css';

function ReturnBtn(){
  return (
    <NavLink
    to="/about"
    exact="true"
    id="return"
    className="close-return-btn"
    >
      <span>&#8592;</span>
    </NavLink>
  )
}

export default ReturnBtn;