import '../stylesheets/Community.css';

import NavBar from "./NavBar";
import CloseBtn from "./buttons/CloseBtn";

function Community(){
  
  return(
    <div id="community" className="grid-container">
      <NavBar />
      <CloseBtn />

      <div className="five-nine scrollable-wrapper">
        <h1>Community</h1>
        
      </div>
    </div>
  )
}

export default Community;